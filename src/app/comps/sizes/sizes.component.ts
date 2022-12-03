import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css'],
})
export class SizesComponent implements OnInit {
  @Output() choosenSize = new EventEmitter<number>();
  @Input() dim: string;
  sizes: number[] = [];
  mySize: number;

  constructor() {}

  ngOnInit(): void {
    for (let i = 36; i < 56; i++) {
      this.sizes.push(i);
      this.sizes.push(i + 0.5);
    }
  }

  setSize(size: number) {
    this.mySize = size;
    this.choosenSize.emit(size);
  }
}
