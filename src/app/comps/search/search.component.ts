import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchSrc: string = '/assets/images/search.png';
  searchRedSrc: string = '/assets/images/search-red.png';

  closeInputSrc: string = '/assets/images/close.png';

  hover: boolean = false;
  isInputOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }

  openSearchInput() {
    this.isInputOpen = !this.isInputOpen;
  }
}
