import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NearMePage } from '../near-me/near-me.page';
import { RankingPage } from '../ranking/ranking.page';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
    selector: 'app-base-tabs',
    templateUrl: './base-tabs.page.html',
    styleUrls: ['./base-tabs.page.scss'],
})
export class BaseTabsPage implements OnInit, AfterViewInit {
    @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;
    public nearMePage: any = NearMePage;
    public rankingPage: any = RankingPage;

    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit(): void {
        console.log('Super tabs is ', this.superTabs);
        this.superTabs.selectTab(0);
    }
}
