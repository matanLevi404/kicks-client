import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  avatarSrc: string = '/assets/images/avatar.png';
  avatarRedSrc: string = '/assets/images/avatar-red.png';

  hover: boolean = false;
  active: boolean = false;

  status: string;

  user;

  constructor(
    private _renderer: Renderer2,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.getUser();
    this._authService.user$.pipe(takeUntil(this.destroy$)).subscribe((info) => {
      this.user = info;
    });
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    this.destroy$.next(true);
  }

  @HostListener('click')
  do() {
    this._renderer.listen('window', 'click', (e: Event) => {
      if (!(e.target as Element).className.includes('clicked')) {
        this.active = false;
      }
    });
  }

  dropMenu() {
    this.active = !this.active;
  }

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }
}
