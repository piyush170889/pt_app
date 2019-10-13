import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  daySelected: number = 2;

  constructor() { }

  changeDaySelected(daySelected: number) {

    console.log('changeDaySelected Tab1Page');
    this.daySelected = daySelected;
  }

  openIndoorDetails() {

    console.log('openIndoorDetails() Tab2Page');
    
  }
}
