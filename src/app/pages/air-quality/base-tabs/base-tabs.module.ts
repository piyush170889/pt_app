import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BaseTabsPage } from './base-tabs.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NearMePageModule } from '../near-me/near-me.module';
import { RankingPageModule } from '../ranking/ranking.module';

const routes: Routes = [
    {
        path: '',
        component: BaseTabsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SuperTabsModule,
        NearMePageModule,
        RankingPageModule
    ],
    declarations: [BaseTabsPage]
})
export class BaseTabsPageModule { }
