import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-account',
  templateUrl: './footer-account.component.html',
  styleUrls: ['./footer-account.component.css'],
})
export class FooterAccountComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openFooterLinkUl() {
    this.isOpen = !this.isOpen;
  }
}
