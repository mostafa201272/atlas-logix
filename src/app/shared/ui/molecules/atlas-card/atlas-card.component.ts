import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-card',
  imports: [],
  templateUrl: './atlas-card.component.html',
  styleUrl: './atlas-card.component.scss',
})
export class AtlasCardComponent {
  title = input<string>('');
  description = input<string>('');
}
