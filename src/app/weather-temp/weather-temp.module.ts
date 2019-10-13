import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeatherTempPage } from './weather-temp.page';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

const routes: Routes = [
  {
    path: '',
    component: WeatherTempPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonBottomDrawerModule
  ],
  declarations: [WeatherTempPage]
})
export class WeatherTempPageModule {}
