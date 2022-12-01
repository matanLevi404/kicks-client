import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-says-card',
  templateUrl: './what-says-card.component.html',
  styleUrls: ['./what-says-card.component.css'],
})
export class WhatSaysCardComponent implements OnInit {
  @Input() userNum: string = '';
  @Input() userName: string = 'Mack Jackno';

  imgSrc: string;

  constructor() {}

  ngOnInit(): void {
    this.imgSrc = `/assets/images/user${this.userNum}.jpg`;
  }
}
