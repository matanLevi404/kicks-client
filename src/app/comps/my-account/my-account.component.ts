import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {
  avatarSrc: string = '/assets/images/avatar.png';
  avatarRedSrc: string = '/assets/images/avatar-red.png';

  hover: boolean = false;
  active: boolean = false;

  status: string;

  user = this._authService.user$;

  constructor(
    private _renderer: Renderer2,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}

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
