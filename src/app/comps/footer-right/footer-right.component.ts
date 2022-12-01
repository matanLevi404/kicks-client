import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-right',
  templateUrl: './footer-right.component.html',
  styleUrls: ['./footer-right.component.css'],
})
export class FooterRightComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openFooterLinkUl() {
    this.isOpen = !this.isOpen;
  }
}
