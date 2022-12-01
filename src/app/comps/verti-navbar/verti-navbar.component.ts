import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-verti-navbar',
  templateUrl: './verti-navbar.component.html',
  styleUrls: ['./verti-navbar.component.css'],
})
export class VertiNavbarComponent implements OnInit {
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {}

  getProductsByCat(catName: string) {
    this._homeService.getProductsByCat(catName);
  }
}
