import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  SwiperOptions,
  Swiper,
} from 'swiper';

SwiperCore.use([Autoplay]);
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
})
export class ImgSliderComponent implements OnInit {
  @ViewChild('swiperSlider') swiperSlider: SwiperComponent;

  config: SwiperOptions = {};

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.config = {
      //...
      autoplay: {
        delay: 1000,
      },
    };

    // Start autoplay
    this.swiperSlider.swiperRef.autoplay.start();
    this.swiperSlider.swiperRef.autoplay.running = true;
  }

  onMouseLeave() {
    this.swiperSlider.swiperRef.autoplay.run();
    this.swiperSlider.swiperRef.autoplay.paused = false;
    this.swiperSlider.swiperRef.autoplay.running = true;
  }
}
