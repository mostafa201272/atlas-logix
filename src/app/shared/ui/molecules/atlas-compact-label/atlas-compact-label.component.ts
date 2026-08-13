import { Component, input } from '@angular/core';
import { AtlasLabelComponent } from '@shared/ui/atoms/atlas-label/atlas-label.component';

@Component({
  selector: 'atlas-compact-label',
  imports: [AtlasLabelComponent],
  templateUrl: './atlas-compact-label.component.html',
  styleUrl: './atlas-compact-label.component.scss',
})
export class AtlasCompactLabelComponent {
  /** Required - The displayed value */
  value = input.required<unknown>();

  /** Optional - Custom style classes applied to the label */
  styleClasses = input<string>('');

  /**
   * Optional - For connector
   */
  for = input<string>('');

  /**
   * Optional - Type of the label
   */
  type = input<'text' | 'form'>('text');

  /** Additional CSS classes to apply to the compact container */
  compactContainerClass = input<string | undefined>('');

  /** Additional CSS classes to apply to the label container */
  labelContainerStyleClass = input<string | undefined>('');
}
