(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-temp-weather-temp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-temp/weather-temp.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-temp/weather-temp.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>weather-temp</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-bounce>\n  Component content.\n  <ion-content>\n\n    <ion-bottom-drawer style=\"border-top: 1px solid #000\" minimumHeight=\"20\" dockedHeight=\"40\" shouldBounce=\"true\"\n      distanceTop=\"50\">\n      <div class=\"drawer-content\">\n        \n      </div>\n    </ion-bottom-drawer>"

/***/ }),

/***/ "./src/app/weather-temp/weather-temp.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/weather-temp/weather-temp.module.ts ***!
  \*****************************************************/
/*! exports provided: WeatherTempPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTempPageModule", function() { return WeatherTempPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_temp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-temp.page */ "./src/app/weather-temp/weather-temp.page.ts");
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-bottom-drawer */ "./node_modules/ion-bottom-drawer/fesm2015/ion-bottom-drawer.js");








const routes = [
    {
        path: '',
        component: _weather_temp_page__WEBPACK_IMPORTED_MODULE_6__["WeatherTempPage"]
    }
];
let WeatherTempPageModule = class WeatherTempPageModule {
};
WeatherTempPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_7__["IonBottomDrawerModule"]
        ],
        declarations: [_weather_temp_page__WEBPACK_IMPORTED_MODULE_6__["WeatherTempPage"]]
    })
], WeatherTempPageModule);



/***/ }),

/***/ "./src/app/weather-temp/weather-temp.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/weather-temp/weather-temp.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItdGVtcC93ZWF0aGVyLXRlbXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather-temp/weather-temp.page.ts":
/*!***************************************************!*\
  !*** ./src/app/weather-temp/weather-temp.page.ts ***!
  \***************************************************/
/*! exports provided: WeatherTempPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTempPage", function() { return WeatherTempPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherTempPage = class WeatherTempPage {
    constructor() { }
    ngOnInit() {
    }
};
WeatherTempPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-temp',
        template: __webpack_require__(/*! raw-loader!./weather-temp.page.html */ "./node_modules/raw-loader/index.js!./src/app/weather-temp/weather-temp.page.html"),
        styles: [__webpack_require__(/*! ./weather-temp.page.scss */ "./src/app/weather-temp/weather-temp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WeatherTempPage);



/***/ })

}]);
//# sourceMappingURL=weather-temp-weather-temp-module-es2015.js.map