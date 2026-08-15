import { Component, inject } from '@angular/core';
import { AppBase } from './app-base.base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  template: '',
})
export abstract class DialogBase extends AppBase {
  /**
   * Injection - Dialog Ref & Config
   */
  ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);

  /**
   * Close the dialog
   * @param data
   */
  closeDialog(data?: any) {
    this.ref.close(data);
  }
}
