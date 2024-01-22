(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANGULAR\search-user\src\main.ts */"zUnb");


/***/ }),

/***/ "A4bk":
/*!***************************************************!*\
  !*** ./src/app/shared/services/github.service.ts ***!
  \***************************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class GithubService {
    constructor(http) {
        this.http = http;
        this.urlAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    searchUser(loginID) {
        const url = `${this.urlAPI}/${loginID}`;
        return this.http.get(url);
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "L21D":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "REPOS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Forma\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Origem:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userdata.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userdata.public_repos + ctx_r1.userdata.public_gists, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.userdata.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userdata.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userdata.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userdata.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userdata.company, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userdata.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.userdata.followers, " followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.userdata.following, " following");
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_div_1_Template, 33, 10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userdata.login);
} }
class CardComponent {
    constructor() {
        this.userdata = '';
    }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { userdata: "userdata" }, decls: 2, vars: 1, consts: [[1, "card"], [4, "ngIf"], [1, "card__perfil"], [1, "card__perfil__id"], [3, "src"], [1, "card__perfil__name"], [1, "card__perfil__login"], [1, "card__perfil__bio"], [1, "card__perfil__follow"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%] {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.2);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   .card__perfil__id[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   .card__perfil__name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  justify-content: center;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   .card__perfil__login[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.9rem;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   .card__perfil__bio[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-style: dotted;\n}\n.card[_ngcontent-%COMP%]   .card__perfil[_ngcontent-%COMP%]   .card__perfil__follow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n@media screen and (max-width: 576px) {\n  .card__perfil[_ngcontent-%COMP%] {\n    width: 270px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUdJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZOO0FBS0k7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUpOO0FBT0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFMTjtBQVVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgLmNhcmRfX3BlcmZpbCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAuY2FyZF9fcGVyZmlsX19pZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19wZXJmaWxfX25hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDNweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19wZXJmaWxfX2xvZ2luIHtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX3BlcmZpbF9fYmlvIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9fcGVyZmlsX19mb2xsb3cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuY2FyZF9fcGVyZmlsIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], function () { return []; }, { userdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");
    } }, directives: [_pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YQc0":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/github.service */ "A4bk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_card_fake_card_fake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/card-fake/card-fake.component */ "nFbk");







function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function SearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userdata", ctx_r1.userdata);
} }
function SearchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-fake");
} }
class SearchComponent {
    constructor(gitHubService) {
        this.gitHubService = gitHubService;
        this.nickname = '';
        this.errorMessage = '';
    }
    ngOnInit() { }
    serachNickname() {
        if (this.nickname) {
            this.gitHubService.searchUser(this.nickname).subscribe((dataResponse) => {
                console.log(dataResponse.id);
                this.userdata = dataResponse;
                this.errorMessage = '';
            }, (errorResponse) => {
                this.errorMessage = errorResponse.error.message === 'Not Found' ? "Não encontrado!" : '';
            });
        }
        else {
            this.errorMessage = 'Digite o nickname';
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 12, vars: 4, consts: [[1, "search"], [1, "search__container"], [1, "search__title"], ["autocomplete", "off", 1, "search__form", 3, "submit"], ["type", "text", "placeholder", "Username", "name", "nickname", 1, "search__form__input", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Procurar", 1, "search__form__button"], ["class", "errorMessage", 4, "ngIf"], [1, "search__line"], [4, "ngIf", "ngIfElse"], ["noSearch", ""], [1, "errorMessage"], [3, "userdata"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Procure seu perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchComponent_Template_form_submit_4_listener() { return ctx.serachNickname(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_5_listener($event) { return ctx.nickname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nickname)("ngIfElse", _r2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _shared_components_card_fake_card_fake_component__WEBPACK_IMPORTED_MODULE_5__["CardFakeComponent"]], styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 2rem;\n  color: #e1e1e1;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__title[_ngcontent-%COMP%] {\n  line-height: 40px;\n  letter-spacing: 3px;\n  text-align: center;\n  margin-bottom: 15px;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__input[_ngcontent-%COMP%] {\n  background-color: rgba(225, 225, 225, 0.25);\n  padding: 7px;\n  font-size: 1rem;\n  color: #e1e1e1;\n  letter-spacing: 2px;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  transition: 0.3s;\n  outline: none;\n  border: 2px solid rgba(225, 225, 225, 0.1);\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(225, 225, 225, 0.5);\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__button[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 2px solid #e1e1e1;\n  margin-top: 20px;\n  font-size: 1.1rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(225, 225, 225, 0.9);\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 10px;\n}\n.search[_ngcontent-%COMP%]   .search__container[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  width: max-content;\n  position: absolute;\n  left: 50%;\n  bottom: -30px;\n  transform: translateX(-50%);\n  color: red;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n.search[_ngcontent-%COMP%]   .search__line[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 1px;\n  background-color: #e1e1e1;\n}\n@media screen and (max-width: 768px) {\n  .search[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 2rem;\n    margin: 3rem 0;\n  }\n  .search[_ngcontent-%COMP%]   .search__line[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 85%;\n    background-color: #e1e1e1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQVBNO0FBTVI7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQUlNO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBMUJBO0VBMkJBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBRlI7QUFJUTtFQUNFLHNDQUFBO0FBRlY7QUFNTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU1RO0VBQ0UsMENBQUE7QUFKVjtBQVFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5SO0FBU007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUFI7QUFZRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBekVJO0FBK0RSO0FBY0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUFYRjtFQWFFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSx5QkF0RkU7RUEyRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I6ICNlMWUxZTE7XHJcblxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogMnJlbTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAuc2VhcmNoX19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgIC5zZWFyY2hfX3RpdGxlIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoX19mb3JtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLnNlYXJjaF9fZm9ybV9faW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4yNSk7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4xKTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaF9fbGluZSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlYXJjaCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogMnJlbTtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG5cclxuICAgIC5zZWFyY2hfX2xpbmUge1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_services_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_card_fake_card_fake_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/card-fake/card-fake.component */ "nFbk");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
        _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _shared_components_card_fake_card_fake_component__WEBPACK_IMPORTED_MODULE_8__["CardFakeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                    _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _shared_components_card_fake_card_fake_component__WEBPACK_IMPORTED_MODULE_8__["CardFakeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    urlApi: "https://api.github.com/users"
};


/***/ }),

/***/ "nFbk":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/card-fake/card-fake.component.ts ***!
  \********************************************************************/
/*! exports provided: CardFakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFakeComponent", function() { return CardFakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardFakeComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardFakeComponent.ɵfac = function CardFakeComponent_Factory(t) { return new (t || CardFakeComponent)(); };
CardFakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardFakeComponent, selectors: [["app-card-fake"]], decls: 15, vars: 0, consts: [[1, "card-fake"], [1, "card-fake__perfil"], [1, "card-fake__perfil__id"], [1, "img"], [1, "card-fake__perfil__name"], [1, "card-fake__perfil__bio"], [1, "line"], [1, "card-fake__perfil__follow"]], template: function CardFakeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 460px;\n  background-color: rgba(255, 255, 255, 0.5);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 25px;\n  gap: 15px;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__id[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__id[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 70px;\n  background-color: #d5d5d5;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 196px;\n  height: 196px;\n  background-color: #d5d5d5;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  justify-content: center;\n  text-align: center;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 10px;\n  background-color: #d5d5d5;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__login[_ngcontent-%COMP%] {\n  height: 10px;\n  background-color: #d5d5d5;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__bio[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #d5d5d5;\n}\n.card-fake[_ngcontent-%COMP%]   .card-fake__perfil[_ngcontent-%COMP%]   .card-fake__perfil__follow[_ngcontent-%COMP%] {\n  height: 10px;\n  background-color: #d5d5d5;\n}\n.card-fake[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  min-height: 10px;\n  background-color: #d5d5d5;\n}\n@media screen and (max-width: 576px) {\n  .card-fake__perfil[_ngcontent-%COMP%] {\n    width: 270px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC1mYWtlL2NhcmQtZmFrZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSE47QUFLTTtFQUNFLFlBckJNO0VBc0JOLFdBQUE7RUFDQSx5QkF4QkE7QUFxQlI7QUFPSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBL0JFO0VBZ0NGLGNBQUE7RUFDQSxrQkFBQTtBQUxOO0FBUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQU5OO0FBUU07RUFDRSxZQTNDTTtFQTRDTix5QkE3Q0E7QUF1Q1I7QUFVSTtFQUNFLFlBakRRO0VBa0RSLHlCQW5ERTtBQTJDUjtBQVdJO0VBQ0UsWUFBQTtFQUNBLHlCQXhERTtBQStDUjtBQVlJO0VBQ0UsWUEzRFE7RUE0RFIseUJBN0RFO0FBbURSO0FBY0U7RUFDRSxnQkFqRVU7RUFrRVYseUJBbkVJO0FBdURSO0FBZ0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQWJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkLWZha2UvY2FyZC1mYWtlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZDVkNWQ1O1xyXG4kbGluZS1oZWlnaHQ6IDEwcHg7XHJcblxyXG4uY2FyZC1mYWtlIHtcclxuICAuY2FyZC1mYWtlX19wZXJmaWwge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cclxuICAgIC5jYXJkLWZha2VfX3BlcmZpbF9faWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgd2lkdGg6IDE5NnB4O1xyXG4gICAgICBoZWlnaHQ6IDE5NnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZmFrZV9fcGVyZmlsX19uYW1lIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAzcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1mYWtlX19wZXJmaWxfX2xvZ2luIHtcclxuICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1mYWtlX19wZXJmaWxfX2JpbyB7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZha2VfX3BlcmZpbF9fZm9sbG93IHtcclxuICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQtZmFrZV9fcGVyZmlsIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-fake',
                templateUrl: './card-fake.component.html',
                styleUrls: ['./card-fake.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map