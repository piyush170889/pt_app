import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isFullScreen: boolean = false;
  daySelected: number = 2;
  dataDisplayType: number = 2;

  constructor() { }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  changeDaySelected(daySelected: number) {

    console.log('changeDaySelected Tab1Page');
    this.daySelected = daySelected;
  }

  changeDataDisplayType(dataDisplayType: number) {

    console.log('changeDataDisplayType TabPage');
    this.dataDisplayType = dataDisplayType;
  }
}
