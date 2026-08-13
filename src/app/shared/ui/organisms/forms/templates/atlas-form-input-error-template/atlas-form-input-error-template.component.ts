import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasCompactLabelComponent } from '@shared/ui/molecules/atlas-compact-label/atlas-compact-label.component';

@Component({
  selector: 'atlas-form-input-error-template',
  imports: [TranslatePipe, AtlasCompactLabelComponent],
  templateUrl: './atlas-form-input-error-template.component.html',
  styleUrl: './atlas-form-input-error-template.component.scss',
})
export class AtlasFormInputErrorTemplateComponent {
  /**
   * Required - Error Translation Key
   */
  errorKey = input.required<string | null>();

  /**
   * Optional - Error Translation Interpolate Params
   */
  interpolateParams = input<unknown>();
}
