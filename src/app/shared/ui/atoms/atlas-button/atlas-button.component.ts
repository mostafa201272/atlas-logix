import {
  Component,
  computed,
  ContentChildren,
  input,
  output,
  QueryList,
  AfterContentChecked,
  Signal,
  OutputEmitterRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { ButtonIconPosition, ButtonModule, ButtonProps, ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'atlas-button',
  imports: [ButtonModule, NgTemplateOutlet],
  templateUrl: './atlas-button.component.html',
  styleUrl: './atlas-button.component.scss',
})
export class AtlasButtonComponent implements AfterContentChecked {
  /** The text label displayed on the button */
  label = input<string>();

  /** The icon class name to display on the button. Defaults to 'cbt-icon-calendar' */
  icon = input<string>('');

  /** The position of the icon relative to the label. Defaults to 'right' */
  iconPos = input<ButtonIconPosition>('right');

  /** The size of the button. Can be 'small', 'large', or undefined for default size */
  size = input<'small' | 'large' | undefined>();

  /** The visual variant of the button. Can be 'outlined', 'text', or undefined for default */
  variant = input<'outlined' | 'text' | undefined>();

  /** The severity/color scheme of the button (e.g., 'primary', 'secondary', 'success', 'danger', etc.) */
  severity = input<ButtonSeverity>();

  /** Additional CSS classes to apply to the button */
  styleClasses = input<string | undefined>('');

  /** The tab index for keyboard navigation */
  tabindex = input<number>();

  /** Whether the button is disabled. Defaults to false */
  disabled = input<boolean>(false);

  /** Whether the button is in a loading state. Defaults to false */
  loading = input<boolean>(false);

  /** Hide the button content in the loading mode*/
  hideContentOnLoading = input<boolean>(false);

  /** Additional CSS classes to apply to the button */
  loadingIcon = input<string | undefined>('pi pi-spinner-dotted');

  /** Whether the button should have rounded corners. Defaults to false */
  rounded = input<boolean>(false);

  /** The HTML button type. Can be 'button', 'submit', or 'reset'. Defaults to 'button' */
  type = input<'button' | 'submit' | 'reset'>('button');

  /** Computed - Computed the style classes for the button */
  computedButtonProps: Signal<ButtonProps> = computed(() => ({
    styleClass: this.styleClasses(),
  }));

  /** Event emitted when the button is clicked
   * @emits event() input signal */
  onClick: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  /** Event emitted when the button receives focus
   * @emits event() input signal */
  onFocus: OutputEmitterRef<FocusEvent> = output<FocusEvent>();

  /** Event emitted when the button loses focus
   * @emits event() input signal */
  onBlur: OutputEmitterRef<FocusEvent> = output<FocusEvent>();

  /**
   * Prime-ng Button Templates
   */
  @ContentChildren(PrimeTemplate) templates!: QueryList<PrimeTemplate>;

  /**
   * Templates holders
   */
  contentTemplate!: PrimeTemplate | null;
  iconTemplate!: PrimeTemplate | null;
  loadingIconTemplate!: PrimeTemplate | null;

  /**
   * After Content Init Life cycle hook
   */
  ngAfterContentChecked() {
    /**
     * load templates
     */
    this.templates.forEach((t: PrimeTemplate) => {
      if (t.getType() === 'loadingIcon') {
        this.loadingIconTemplate = t;
      }
      if (t.getType() === 'content') {
        this.contentTemplate = t;
      }
      if (t.getType() === 'icon') {
        this.iconTemplate = t;
      }
    });
  }
}
