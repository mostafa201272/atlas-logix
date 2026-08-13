import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-label',
  imports: [],
  templateUrl: './atlas-label.component.html',
  styleUrl: './atlas-label.component.scss',
})
export class AtlasLabelComponent {
  /** The text value to display (required) */
  value = input.required<unknown>();

  /**
   * Optional - Type of the label
   */
  type = input<'text' | 'form'>('text');

  /**
   * Optional - For connector
   */
  for = input('');

  /** Additional CSS classes to apply to the label */
  styleClasses = input<string | undefined>('');

  /** Additional CSS classes to apply to the container */
  containerStyleClass = input<string | undefined>('');
}
