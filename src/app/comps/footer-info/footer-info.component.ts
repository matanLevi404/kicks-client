import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.css'],
})
export class FooterInfoComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openFooterLinkUl() {
    this.isOpen = !this.isOpen;
  }
}
