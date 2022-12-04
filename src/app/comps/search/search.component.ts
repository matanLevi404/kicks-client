import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  searchSrc: string = '/assets/images/search.png';
  searchRedSrc: string = '/assets/images/search-red.png';

  closeInputSrc: string = '/assets/images/close.png';

  hover: boolean = false;
  isInputOpen: boolean = false;

  constructor(
    private _router: Router,
    private _homeService: HomeService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this._route.snapshot.queryParams['q']) return;
    else {
      console.log(this._route.snapshot.queryParams['q']);
      this.search.nativeElement.value = this._route.snapshot.queryParams['q'];
    }
  }

  ngAfterViewInit() {}

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }

  searchProducts() {
    const q = this.search.nativeElement.value;
    this._router.navigate(['/categories/search'], { queryParams: { q: q } });
    this._homeService.getProductsBySearch(q);
  }

  openSearchInput() {
    this.isInputOpen = !this.isInputOpen;
  }
}
