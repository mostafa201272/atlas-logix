import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { EPermission } from '@core/permissions/models/enums/permissions.enum';
import { PermissionsService } from '@core/permissions/services/permissions.service';

@Directive({
  selector: '[atlasHasPermission]',
  standalone: true,
})
export class AtlasHasPermissionDirective {
  private readonly templateRef = inject(TemplateRef<any>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly permissionsService = inject(PermissionsService);

  private readonly permissionSignal = signal<EPermission | EPermission[] | null>(null);
  private hasView = false;

  @Input() set atlasHasPermission(permission: EPermission | EPermission[]) {
    this.permissionSignal.set(permission);
  }

  constructor() {
    effect(() => {
      const permission = this.permissionSignal();
      if (!permission) {
        this.clearView();
        return;
      }

      const isAllowed = this.permissionsService.hasPermission(permission);

      if (isAllowed && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!isAllowed && this.hasView) {
        this.clearView();
      }
    });
  }

  private clearView(): void {
    this.viewContainer.clear();
    this.hasView = false;
  }
}
