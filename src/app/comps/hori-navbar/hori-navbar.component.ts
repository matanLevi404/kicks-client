import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hori-navbar',
  templateUrl: './hori-navbar.component.html',
  styleUrls: ['./hori-navbar.component.css'],
})
export class HoriNavbarComponent implements OnInit {
  open: boolean = false;

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('click')
  do() {
    this._renderer.listen('window', 'click', (e: Event) => {
      if (!(e.target as Element).className.includes('burger')) {
        console.log('i was here');
        this.open = false;
      }
    });
  }

  openHiddenMenu() {
    this.open = !this.open;
  }
}
