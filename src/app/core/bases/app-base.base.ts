import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MODULES_ROUTES } from '@utilities/routers';

@Component({
  template: '',
  providers: [DialogService, ConfirmationService],
})
export abstract class AppBase implements OnDestroy {
  /**
   * DEPENDENCE - Required Dependence for all app components
   */
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  dialogService = inject(DialogService);
  messageService = inject(MessageService);

  /**
   * Holder - Subscription
   */
  protected unsubscribeAll: Subject<void> = new Subject<void>();

  /** Holder - Modules Routers */
  protected MODULES_ROUTES = MODULES_ROUTES;

  /**
   * Helper - Navigate to helper
   */
  navigateTo(routerLink: string[]) {
    this.router.navigate(routerLink);
  }

  ngOnDestroy(): void {
    /**
     * Destroy all subscriptions
     */
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  /**
   * OPERATOR TO UNSUBSCRIBE FROM OBSERVABLE WHEN COMPONENT IS DESTROYED
   * @returns takeUntil
   */
  protected takeUntilDestroyed(): ReturnType<typeof takeUntil> {
    return takeUntil(this.unsubscribeAll);
  }
}
