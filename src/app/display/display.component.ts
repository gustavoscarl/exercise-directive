import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent {
  classVisible = 'hidden';
  clickCount: Date[] = [];
  clicks = 0;
  isFifth = false;

  changeClass() {
    this.classVisible = this.classVisible === 'hidden' ? 'active' : 'hidden';
    this.clicks += 1;
    this.clickCount.push(new Date());

    this.clicks === 6 ? this.isFifth = true : false;
  }

}
