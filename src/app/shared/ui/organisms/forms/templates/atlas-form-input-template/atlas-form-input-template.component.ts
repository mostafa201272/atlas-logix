import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  OutputEmitterRef,
  Signal,
  TemplateRef,
  contentChild,
  input,
  output,
} from '@angular/core';
import { AtlasCompactLabelComponent } from '@shared/ui/molecules/atlas-compact-label/atlas-compact-label.component';
import { AtlasRequiredIconComponent } from '@shared/ui/atoms/atlas-required-icon/atlas-required-icon.component';

@Component({
  selector: 'atlas-form-input-template',
  imports: [NgTemplateOutlet, AtlasCompactLabelComponent, AtlasRequiredIconComponent],
  templateUrl: './atlas-form-input-template.component.html',
  styleUrl: './atlas-form-input-template.component.scss',
})
export class AtlasFormInputTemplateComponent {
  /**
   * TEMPLATEs - Projected templates
   */
  preContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('preContent');
  postContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('postContent');
  validationsTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('validationsContent');
  labelPreContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('labelPreContent');
  labelPostContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('labelPostContent');
  labelExtraControlsTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('labelExtraControls');
  inputPreContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('inputPreContent');
  inputContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('inputContent');
  inputPostContentTemplate: Signal<TemplateRef<any> | undefined> =
    contentChild<TemplateRef<any>>('inputPostContent');

  /** Required - Input label */
  label = input.required<string>();

  /** Optional - Input for attribute */
  inputFor = input<string>('');

  /** Optional - Show the required icon */
  showRequiredIcon = input<boolean>(false);

  /** Optional - Apply error mode */
  errorMode = input<boolean>(false);

  /** Optional - Apply disable mode */
  disableMode = input<boolean>(false);

  /** Optional - Show reset button */
  showResetButton = input<boolean>(false);

  /** Optional - Template style classes */
  templateStyleClass = input<string>('');

  /** Emitter - Emit when the rest button clicked */
  onReset: OutputEmitterRef<any> = output<any>();
}
