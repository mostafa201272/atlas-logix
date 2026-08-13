import { Component, inject } from '@angular/core';
import { AppBase } from './app-base.base';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: '',
})
export abstract class FormBase extends AppBase {
  /**
   * INJECTOREs
   */
  formBuilder = inject(FormBuilder);

  // FOR FORMS
  isSubmit = false;
  form!: FormGroup;

  // LOAD FORM CONTROLS
  loadForm(controls: Record<string, unknown>, options?: AbstractControlOptions | null): void {
    this.form = this.formBuilder.group(controls, options);
  }

  // GET FORM CONTROL
  getFormControl(controlName: string, form: FormGroup = this.form): AbstractControl | null {
    return form.get(controlName);
  }

  // REMOVE FORM CONTROL
  removeFormControl(controlName: string, form: FormGroup = this.form): void {
    form.removeControl(controlName);
  }

  // GET FORM GROUP
  getFormGroup(groupName: string, form: FormGroup = this.form): FormGroup {
    return form.get(groupName) as FormGroup;
  }
}
