import { Component, input } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'atlas-identity',
  imports: [InlineSVGModule],
  templateUrl: './atlas-identity.component.html',
  styleUrl: './atlas-identity.component.scss',
})
export class AtlasIdentityComponent {
  /**
   * Optional - Identity mode
   */
  darkMode = input<boolean>(false);
}
