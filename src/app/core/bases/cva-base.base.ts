import {
  Component,
  input,
  output,
  computed,
  effect,
  inject,
  DestroyRef,
  signal,
  Signal,
  WritableSignal,
  OutputEmitterRef,
} from '@angular/core';
import { FormBase } from './form-base.base';
import { ControlValueAccessor, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { generateUUID } from '@utilities/helpers';

@Component({
  template: '',
})
export abstract class CVABase extends FormBase implements ControlValueAccessor {
  /** Destroy reference for cleanup */
  protected readonly destroyRef = inject(DestroyRef);

  /** Track if the component has been interacted with */
  protected readonly interacted: WritableSignal<boolean> = signal(false);

  /** Required - Label for the input field */
  readonly label = input.required<string>();

  /** Optional - Placeholder text */
  readonly placeholder = input<string>('');

  /** Optional - Additional CSS classes */
  readonly styleClasses = input<string>('');

  /** Optional - Show reset control */
  readonly showReset = input<boolean>(false);

  /** Optional - Mark field as required */
  readonly required = input<boolean>(false);

  /** Optional - Custom error message for required validation */
  readonly requiredErrorMessage = input<string>('errors.forms.inputRequired');

  /** Optional - Minimum length for validation */
  readonly minLength = input<number | null>(null);

  /** Optional - Custom error message for min length validation */
  readonly minLengthErrorMessage = input<string | null>(null);

  /** Optional - Maximum length for validation */
  readonly maxLength = input<number | null>(null);

  /** Optional - Custom error message for max length validation */
  readonly maxLengthErrorMessage = input<string | null>(null);

  /** Optional - Disable the input */
  readonly disabled = input<boolean, string | boolean>(false, {
    transform: (value: string | boolean) => {
      if (typeof value === 'string') {
        return value === '' || value.toLowerCase() === 'true';
      }
      return value;
    },
  });

  /** Optional - Input for attribute */
  readonly inputForID = computed(() => {
    return generateUUID();
  });

  /** Optional - OnChanges output */
  readonly onChanges: OutputEmitterRef<unknown> = output<unknown>();

  /** Get the form control name - MUST be overridden by child classes */
  protected abstract getControlName(): string;

  /** Get the form control for easy access */
  readonly control: Signal<FormControl | null> = computed<FormControl | null>(
    (): FormControl | null => {
      return this.form?.get(this.getControlName()) as FormControl;
    },
  );

  /** Show error message - properly detect touched/dirty state */
  protected showError() {
    const control = this.control();
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }

  /**
   * Get base validators - can be extended by child classes
   */
  protected getBaseValidators(): ValidatorFn[] {
    /**
     * Base validators list
     */
    const validators: ValidatorFn[] = [];

    /**
     * Add required validator if required signal is true
     */
    if (this.required()) {
      validators.push(Validators.required);
    }

    /**
     * Add min length validator if minLength signal is not null
     */
    const minLength = this.minLength();
    if (minLength !== null) {
      validators.push(Validators.minLength(minLength));
    }

    /**
     * Add max length validator if maxLength signal is not null
     */
    const maxLength = this.maxLength();
    if (maxLength !== null) {
      validators.push(Validators.maxLength(maxLength));
    }

    /**
     * Return the validators list
     */
    return validators;
  }

  /**
   * Get additional validators - override in child classes
   */
  protected getAdditionalValidators(): ValidatorFn[] {
    return [];
  }

  /**
   * Get all computed validators
   * This is a computed signal that will be used in an effect to update validators
   */
  readonly computedValidators = computed<ValidatorFn[]>((): ValidatorFn[] => {
    const baseValidators = this.getBaseValidators();
    const additionalValidators = this.getAdditionalValidators();
    return [...baseValidators, ...additionalValidators];
  });

  /**
   * CVA PROPERTIES
   */
  protected onChange: (value: unknown) => void = () => {};
  protected onTouched: () => void = () => {};

  /**
   * CONSTRUCTOR
   */
  constructor() {
    super();
    this.initializeComponent();
  }

  /**
   * Initialize component - template method pattern
   */
  private initializeComponent(): void {
    this.initializeForm();
    this.setupValueChanges();
    this.setupReactiveEffects();
    this.onComponentInitialized();
  }

  /**
   * Hook for child classes to add custom initialization
   */
  protected onComponentInitialized(): void {
    // Override in child classes if needed
  }

  /**
   * Initialize form with empty validators initially
   * Validators will be set by the effect after input signals are ready
   */
  private initializeForm(): void {
    const formConfig: Record<string, unknown> = {};
    // Initialize with empty validators - they will be set by the effect
    formConfig[this.getControlName()] = [null, []];
    this.loadForm(formConfig);
  }

  /**
   * Setup value changes subscription
   */
  private setupValueChanges(): void {
    const control = this.control();
    if (!control) {
      return;
    }

    control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (value: string | null) => {
        this.onChange(value);

        if (!control.touched) {
          control.markAsTouched();
          this.onTouched();
        }

        this.interacted.update(() => true);
        this.onChanges.emit(value);
        this.onValueChange(value);
      },
    });
  }

  /**
   * Hook for child classes to react to value changes
   */
  protected onValueChange(value: unknown): void {
    // Override in child classes if needed
  }

  /**
   * Setup reactive effects
   */
  private setupReactiveEffects(): void {
    this.setupValidatorEffect();
    this.setupDisabledEffect();
    this.setupCustomEffects();
  }

  /**
   * Effect for validators - updates when validator inputs change
   * This runs after input signals are initialized
   */
  private setupValidatorEffect(): void {
    effect(() => {
      const control = this.control();
      const validators = this.computedValidators();

      if (control) {
        control.setValidators(validators);
        control.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  /**
   * Effect for disabled state - syncs with input
   */
  private setupDisabledEffect(): void {
    effect(() => {
      const control = this.control();
      const isDisabled = this.disabled();

      if (control) {
        if (isDisabled) {
          control.disable({ emitEvent: false });
        } else {
          control.enable({ emitEvent: false });
        }
      }
    });
  }

  /**
   * Hook for child classes to add custom effects
   */
  protected setupCustomEffects(): void {
    // Override in child classes if needed
  }

  /**
   * Write value from parent form
   */
  writeValue(value: unknown): void {
    const control = this.control();
    if (control && control.value !== value) {
      control.setValue(value, { emitEvent: false });
      control.updateValueAndValidity({ emitEvent: false });
    }
  }

  /**
   * Register onChange callback
   */
  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  /**
   * Register onTouched callback
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Set disabled state from parent
   */
  setDisabledState(isDisabled: boolean): void {
    const control = this.control();
    if (control) {
      if (isDisabled) {
        control.disable({ emitEvent: false });
      } else {
        control.enable({ emitEvent: false });
      }
    }
  }

  /**
   * Mark the control as touched
   */
  markAsTouched(): void {
    const control = this.control();
    if (control && !control.touched) {
      control.markAsTouched();
      this.onTouched();
      this.interacted.update(() => true);
    }
  }

  /**
   * Reset the control to its initial state
   */
  reset(initialValue?: unknown): void {
    const control = this.control();
    if (control) {
      control.reset(initialValue);
      control.markAsUntouched();
      control.markAsPristine();
      this.interacted.update(() => false);
      this.onChange(initialValue);
      this.onReset();
    }
  }

  /**
   * Hook for child classes to react to reset
   */
  protected onReset(): void {
    // Override in child classes if needed
  }

  /**
   * Get the current value
   */
  get value(): any {
    return this.control()?.value ?? null;
  }
}
