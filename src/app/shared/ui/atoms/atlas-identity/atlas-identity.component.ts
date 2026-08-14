import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

export type IdentitySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'atlas-identity',
  imports: [InlineSVGModule, TranslatePipe],
  templateUrl: './atlas-identity.component.html',
  styleUrl: './atlas-identity.component.scss',
})
export class AtlasIdentityComponent {
  /**
   * Optional - Dark Mode
   */
  darkMode = input<boolean>(false);

  /**
   * Optional - Display logo only without text
   */
  logoOnly = input<boolean>(false);

  /**
   * Optional - Identity Component Size
   */
  size = input<IdentitySize>('xl');

  /**
   * Computed Logo Dimensions (in px)
   */
  logoDimensions = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 28;
      case 'sm':
        return 36;
      case 'md':
        return 48;
      case 'lg':
        return 64;
      case 'xl':
      default:
        return 80;
    }
  });

  /**
   * Computed Container Gap Class
   */
  gapClass = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 'gap-2';
      case 'sm':
        return 'gap-3';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-5';
      case 'xl':
      default:
        return 'gap-6';
    }
  });

  /**
   * Computed Brand Name Size Class
   */
  brandTextClass = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 'text-xl';
      case 'sm':
        return 'text-2xl';
      case 'md':
        return 'text-3xl';
      case 'lg':
        return 'text-4xl';
      case 'xl':
      default:
        return 'text-5xl';
    }
  });

  /**
   * Computed Slogan Size Class
   */
  sloganTextClass = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 'text-[10px]';
      case 'sm':
        return 'text-[11px]';
      case 'md':
        return 'text-xs';
      case 'lg':
        return 'text-xs';
      case 'xl':
      default:
        return 'text-sm';
    }
  });
}

