import { Component, computed, inject } from '@angular/core';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-profile',
  imports: [AtlasButtonComponent],
  templateUrl: './atlas-profile.component.html',
  styleUrl: './atlas-profile.component.scss',
})
export class AtlasProfileComponent {
  /**
   * INJECTION - Auth Facade
   */
  authFacade = inject(AuthFacade);

  /***
   * User data signal
   */
  readonly userData = computed(() => {
    const data = this.authFacade.data();
    if (data) {
      const user = data.tenantId.split('-').filter((e: string) => e !== 'TENANT');
      return {
        name: user.join(' ').toLocaleLowerCase(),
        role: data.role,
        characters: `${user[0].charAt(0)}${user[user.length - 1].charAt(0)}`,
      };
    }
    return null;
  });

  /**
   * Logout
   */
  logout() {
    this.authFacade.logout();
  }
}
