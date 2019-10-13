import { Component, OnInit } from '@angular/core';
import { Ranking } from "../models/ranking";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.page.html',
    styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
    public cityRankingList: Array<Ranking> = [];

    constructor() { }

    ngOnInit() {
        this.rankingList();
    }

    /*  
        @functionName: rankingList()
        @params: none
    */
    private rankingList(): void {
        this.cityRankingList.push(
            { rankingId: "1", rankingCityAvatar: "assets/icon/india.svg", cityName: "Toronto, Canada", ranking: "123" },
            { rankingId: "2", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Berlin, Germany", ranking: "124" },
            { rankingId: "3", rankingCityAvatar: "assets/icon/belgium.svg", cityName: "Tokyo, Japan", ranking: "125" },
            { rankingId: "4", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Sydney, Australia", ranking: "123" },
            { rankingId: "5", rankingCityAvatar: "assets/icon/belgium.svg", cityName: "Santiago, Chile", ranking: "123" },
            { rankingId: "6", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Dhaka, Bangladesh", ranking: "123" },
            { rankingId: "7", rankingCityAvatar: "assets/icon/belgium.svg", cityName: "Hangzhou, China", ranking: "123" },
            { rankingId: "8", rankingCityAvatar: "assets/icon/india.svg", cityName: "Guangzhou, China", ranking: "123" },
            { rankingId: "9", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Singapore, Signapore", ranking: "123" },
            { rankingId: "10", rankingCityAvatar: "assets/icon/belgium.svg", cityName: "Lahore, Pakistan", ranking: "123" },
            { rankingId: "11", rankingCityAvatar: "assets/icon/india.svg", cityName: "Johannesburg, South Africa", ranking: "123" },
            { rankingId: "12", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Jakarta, Indonesia", ranking: "123" },
            { rankingId: "13", rankingCityAvatar: "assets/icon/belgium.svg", cityName: "Wuhan, China", ranking: "123" },
            { rankingId: "14", rankingCityAvatar: "assets/icon/india.svg", cityName: "Toronto, Canada", ranking: "123" },
            { rankingId: "15", rankingCityAvatar: "assets/icon/australia.svg", cityName: "Toronto, Canada", ranking: "123" },
        );
    };

}
