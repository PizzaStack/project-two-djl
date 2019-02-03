(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-pending-maps/admin-pending-maps.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin-pending-maps/admin-pending-maps.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBlbmRpbmctbWFwcy9hZG1pbi1wZW5kaW5nLW1hcHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-pending-maps/admin-pending-maps.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin-pending-maps/admin-pending-maps.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=main>\r\n  <section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">Welcome back, Admin</h1>\r\n      <p class=\"lead text-muted\">Remember to adhere to our guidelines and not go mad with power </p>\r\n      <p>\r\n        <a routerLink='' class=\"nes-btn is-primary\">Home</a>\r\n      </p>\r\n    </div>\r\n  </section>\r\n  \r\n  <section class='container nes-container with-title is-centered'>\r\n    <h1 class=\"title\">Pending Maps</h1>      \r\n      <app-map-list [mapCards]='pendingMaps' [pendingButton]='true'></app-map-list>\r\n  </section>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-pending-maps/admin-pending-maps.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin-pending-maps/admin-pending-maps.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminPendingMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPendingMapsComponent", function() { return AdminPendingMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");



var AdminPendingMapsComponent = /** @class */ (function () {
    function AdminPendingMapsComponent(mapService) {
        this.mapService = mapService;
    }
    AdminPendingMapsComponent.prototype.ngOnInit = function () {
        this.getMapList();
    };
    AdminPendingMapsComponent.prototype.getMapList = function () {
        var _this = this;
        this.mapService.getMapList()
            .subscribe(function (mapList) { return _this.handleUserMaps(mapList); });
    };
    AdminPendingMapsComponent.prototype.handleUserMaps = function (allMaps) {
        var separatedMaps = this.mapService.getPendingAndResolvedMaps(allMaps);
        this.pendingMaps = separatedMaps['pending'];
    };
    AdminPendingMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-pending-maps',
            template: __webpack_require__(/*! ./admin-pending-maps.component.html */ "./src/app/admin-pending-maps/admin-pending-maps.component.html"),
            styles: [__webpack_require__(/*! ./admin-pending-maps.component.css */ "./src/app/admin-pending-maps/admin-pending-maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], AdminPendingMapsComponent);
    return AdminPendingMapsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-page/map-page.component */ "./src/app/map-page/map-page.component.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user-page/user-page.component.ts");
/* harmony import */ var _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-map/upload-map.component */ "./src/app/upload-map/upload-map.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _admin_pending_maps_admin_pending_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-pending-maps/admin-pending-maps.component */ "./src/app/admin-pending-maps/admin-pending-maps.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_pending_maps_user_pending_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-pending-maps/user-pending-maps.component */ "./src/app/user-pending-maps/user-pending-maps.component.ts");











var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'users/dashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["UserDashboardComponent"] },
    { path: 'users/me', component: _user_pending_maps_user_pending_maps_component__WEBPACK_IMPORTED_MODULE_10__["UserPendingMapsComponent"] },
    { path: 'maps/:name', component: _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_3__["MapPageComponent"] },
    { path: 'users/:name', component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"] },
    { path: 'register', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__["RegisterUserComponent"] },
    { path: 'uploadMap', component: _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_5__["UploadMapComponent"] },
    { path: 'admin/dashboard', component: _admin_pending_maps_admin_pending_maps_component__WEBPACK_IMPORTED_MODULE_8__["AdminPendingMapsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n<!-- <main role=\"main\">\r\n\r\n\r\n\r\n  <div class=\"album py-5 bg-light\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdea%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdea%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf1%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf1%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf3%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf3%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf4%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf4%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf6%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf6%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf7%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdf8%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdf8%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdfa%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdfa%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card mb-4 box-shadow\">\r\n            <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22101%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1688836bdfd%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1688836bdfd%22%3E%3Crect%20width%3D%22101%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"btn-group\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\r\n                </div>\r\n                <small class=\"text-muted\">9 mins</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n\r\n<app-header></app-header>\r\n<router-outlet></router-outlet> -->\r\n\r\n<!-- <footer class=\"text-muted\">\r\n  <div class=\"container\">\r\n    <p class=\"float-right\">\r\n      <a href=\"#\">Back to top</a>\r\n    </p>\r\n    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>\r\n    <p>New to Bootstrap? <a href=\"../../\">Visit the homepage</a> or read our <a href=\"../../getting-started/\">getting started guide</a>.</p>\r\n  </div>\r\n</footer> -->\r\n<!-- Placed at the end of the document so the pages load faster -->\r\n<!-- <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n<script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\r\n<script src=\"../../assets/js/vendor/popper.min.js\"></script>\r\n<script src=\"../../dist/js/bootstrap.min.js\"></script>\r\n<script src=\"../../assets/js/vendor/holder.min.js\"></script> -->\r\n\r\n\r\n<!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"101\" height=\"225\" viewBox=\"0 0 101 225\" preserveAspectRatio=\"none\" style=\"display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;\"><defs><style type=\"text/css\"></style></defs><text x=\"0\" y=\"11\" style=\"font-weight:bold;font-size:11pt;font-family:Arial, Helvetica, Open Sans, sans-serif\">Thumbnail</text></svg> -->\r\n \r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Map Maze';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user-page/user-page.component.ts");
/* harmony import */ var _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-page/map-page.component */ "./src/app/map-page/map-page.component.ts");
/* harmony import */ var _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-list/map-list.component */ "./src/app/map-list/map-list.component.ts");
/* harmony import */ var _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-card/map-card.component */ "./src/app/map-card/map-card.component.ts");
/* harmony import */ var _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload-map/upload-map.component */ "./src/app/upload-map/upload-map.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_pending_maps_admin_pending_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-pending-maps/admin-pending-maps.component */ "./src/app/admin-pending-maps/admin-pending-maps.component.ts");
/* harmony import */ var _user_pending_maps_user_pending_maps_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-pending-maps/user-pending-maps.component */ "./src/app/user-pending-maps/user-pending-maps.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_7__["UserPageComponent"],
                _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_8__["MapPageComponent"],
                _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_9__["MapListComponent"],
                _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_10__["MapCardComponent"],
                _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_11__["UploadMapComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _admin_pending_maps_admin_pending_maps_component__WEBPACK_IMPORTED_MODULE_13__["AdminPendingMapsComponent"],
                _user_pending_maps_user_pending_maps_component__WEBPACK_IMPORTED_MODULE_14__["UserPendingMapsComponent"],
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_15__["RegisterUserComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["UserDashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_19__["LoginFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                // Comment these two lines & remove comma on line above to remove mock-backend
                // HttpClientInMemoryWebApiModule.forRoot(
                //   InMemoryDataService, {dataEncapsulation: false})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beans/user-map.ts":
/*!***********************************!*\
  !*** ./src/app/beans/user-map.ts ***!
  \***********************************/
/*! exports provided: UserMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMap", function() { return UserMap; });
var UserMap = /** @class */ (function () {
    // static createFromFiles(submitter: string, mapname: string, description: string, status: string, pictureFile: File, mapFile: File): UserMap  {
    //     var reader = new FileReader();
    //     var image;
    //     reader.onload = e => image = reader.result;
    //     reader.readAsDataURL(image);
    //     return new UserMap(submitter, mapname, description, status, image, file);
    // }
    function UserMap(submitter, mapname, description, status, image, file) {
        this.submitter = submitter;
        this.mapname = mapname;
        this.description = description;
        this.status = status;
        this.image = image;
        this.file = file;
    }
    return UserMap;
}());

// username, mapName, mapDescription, picture, fileMap


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=main>\r\n    <section class=\"jumbotron text-center\">\r\n      <div class=\"container\">\r\n        <h1 class=\"jumbotron-heading\">Welcome to Map Maze *Not Logged in*</h1>\r\n        <p class=\"lead text-muted\">We're a proud community of creators, programmers and artists who came together to share what we love: Video game maps!</p>\r\n        <p>\r\n          <a routerLink='/register' class=\"nes-btn is-primary\">Register an account</a>\r\n        </p>\r\n      </div>\r\n    </section>\r\n    \r\n    <section class='container nes-container with-title is-centered'>\r\n      <h1 class=\"title\">Maps of the day</h1>      \r\n        <app-map-list [mapCards]='mapCards'></app-map-list>\r\n    </section>\r\n  </main>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(mapService, authenticationService, router) {
        this.mapService = mapService;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMapList();
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            if (currentUser.admin === 'user')
                this.router.navigate(['users/dashboard']);
            else
                this.router.navigate(['admin/dashboard']);
        }
    };
    DashboardComponent.prototype.getMapList = function () {
        var _this = this;
        this.mapService.getMapList()
            .subscribe(function (mapList) { return _this.mapCards = mapList; });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-muted\">\r\n  <div class=\"container\">\r\n    <p class=\"float-right\">\r\n      <a href=\"#\">Back to top</a>\r\n    </p>\r\n    <p>Thank you for making Map Maze what it is today! We rely on our vibrant community to survive</p>\r\n    <p>Like our style? Check it out: <a href=\"https://nostalgic-css.github.io/NES.css/\">Check it out.</a> or read about<a href=\"https://github.com/PizzaStack/project-two-djl\">How it was Made</a>.</p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='loginForm' (ngSubmit)='onSubmit()' class=\"form-inline my-2 my-lg-0\">\r\n  <div class=\"form-group\">\r\n    <!-- <label for=\"username\">Username</label> -->\r\n    <input type=\"text\" formControlName=\"username\" class=\"form-control mr-2 login-input\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" \r\n      placeholder=\"Username\"/>\r\n    <!-- <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <!-- <label for=\"password\">Password</label> -->\r\n    <input type=\"password\" formControlName='password' class='form-control login-input' [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" \r\n      placeholder=\"Password\"/>\r\n    <!-- <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button [disabled]='loading' class='nes-btn is-primary'>Login</button>\r\n    <!-- <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\r\n    <!-- <a routerLink=\"/register\" class=\"btn btn-link\">Register</a> -->\r\n  </div>  \r\n  <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\r\n</form>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginFormComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid)
            return;
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data['admin'] === 'user')
                // console.log('is user');
                _this.router.navigate(['users/dashboard']);
            else if ((data['admin'] === 'admin'))
                // console.log('is admin');
                _this.router.navigate(['admin/dashboard']);
            else
                console.log("Bad admin status " + data['admin']);
        }, function (error) {
            console.log('Problem logging in');
        });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/map-card/map-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-card/map-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jYXJkL21hcC1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/map-card/map-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-card/map-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nes-container with-title\">\r\n  <p class=\"title\">{{mapInfo.mapname}}</p>\r\n  <div class=\"card mb-4 box-shadow\">\r\n    <a routerLink=\"/maps/{{mapInfo.mapname}}\">\r\n      <img class=\"card-img-top\" src=\"{{mapInfo.image}}\" alt=\"Map Picture\" >\r\n    </a>\r\n    <div class=\"card-body\">\r\n      \r\n      <div class=\"dflex justifiy-content-between align-items-center\">\r\n        <p class=\"card-text\">{{mapInfo.description}}</p>       \r\n\r\n        <div class=\"card-footer align-items-center\">\r\n          <a routerLink=\"/maps/{{mapInfo.mapname}}\">\r\n            <button type=\"button\" class=\"nes-btn\">View</button>\r\n          </a>\r\n          <br>\r\n          <a *ngIf='showAuthor' routerLink=\"/users/{{mapInfo.submitter}}\">\r\n            <button type=\"button\" class=\"nes-btn\">By: {{mapInfo.submitter}}</button>\r\n          </a>\r\n          <div class=\"btn-group\" *ngIf='pendingButton' role='group' aria-label='Approve or Deny'>\r\n            <button type='button' class='nes-btn is-success' (click)='onApprove()'>Approve</button>\r\n            <!-- <button type='button' class='nes-btn is-error'>Deny</button> -->\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/map-card/map-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-card/map-card.component.ts ***!
  \************************************************/
/*! exports provided: MapCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCardComponent", function() { return MapCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beans_user_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beans/user-map */ "./src/app/beans/user-map.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");




var MapCardComponent = /** @class */ (function () {
    function MapCardComponent(mapService) {
        this.mapService = mapService;
        this.showAuthor = true;
        this.pendingButton = false;
    }
    MapCardComponent.prototype.ngOnInit = function () {
    };
    MapCardComponent.prototype.onApprove = function () {
        this.mapService.approveMap(this.mapInfo.mapname)
            .subscribe(function (map) { return console.log('recieved ' + map); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _beans_user_map__WEBPACK_IMPORTED_MODULE_2__["UserMap"])
    ], MapCardComponent.prototype, "mapInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapCardComponent.prototype, "showAuthor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapCardComponent.prototype, "pendingButton", void 0);
    MapCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-card',
            template: __webpack_require__(/*! ./map-card.component.html */ "./src/app/map-card/map-card.component.html"),
            styles: [__webpack_require__(/*! ./map-card.component.css */ "./src/app/map-card/map-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
    ], MapCardComponent);
    return MapCardComponent;
}());



/***/ }),

/***/ "./src/app/map-list/map-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-list/map-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1saXN0L21hcC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/map-list/map-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-list/map-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\r\n  <div class=\"col-md-6\" *ngFor='let myMap of mapCards' >\r\n    <app-map-card [mapInfo]='myMap' [showAuthor]='showAuthor' [pendingButton]='pendingButton'></app-map-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/map-list/map-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-list/map-list.component.ts ***!
  \************************************************/
/*! exports provided: MapListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapListComponent", function() { return MapListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");



var MapListComponent = /** @class */ (function () {
    function MapListComponent(mapService) {
        this.mapService = mapService;
        this.showAuthor = true;
        this.pendingButton = false;
    }
    MapListComponent.prototype.ngOnInit = function () {
        // this.getMapList();
    };
    MapListComponent.prototype.handleClick = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MapListComponent.prototype, "mapCards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapListComponent.prototype, "showAuthor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapListComponent.prototype, "pendingButton", void 0);
    MapListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-list',
            template: __webpack_require__(/*! ./map-list.component.html */ "./src/app/map-list/map-list.component.html"),
            styles: [__webpack_require__(/*! ./map-list.component.css */ "./src/app/map-list/map-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], MapListComponent);
    return MapListComponent;
}());



/***/ }),

/***/ "./src/app/map-page/map-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-page/map-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1wYWdlL21hcC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/map-page/map-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-page/map-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role='main'>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 col-sm-12 mx-auto nes-container with-title\">\r\n            <p class=\"title\" *ngIf='map; else defaultName'>{{map.mapname}}</p>\r\n            <ng-template #defaultName>Finding map...</ng-template>\r\n            <div class=\"card mb-4 box-shadow\">\r\n              <img class=\"card-img-top\" [src]=\"map? map.image : altPic\" alt=\"Map Picture\" >\r\n              \r\n              <div class=\"card-body\">\r\n                \r\n                <div class=\"dflex justifiy-content-between align-items-center\">\r\n                  <p class=\"card-text\" *ngIf='map; else defaultDescription'>{{map.description}}</p>       \r\n                  <ng-template #defaultDescription>...</ng-template>\r\n          \r\n                  <div class=\"card-footer align-items-center\">\r\n                    <a *ngIf='map' routerLink=\"/users/{{map.submitter}}\">\r\n                      <button type=\"button\" class=\"nes-btn mx-auto\">By: {{map.submitter}}</button>\r\n                    </a>\r\n                    <!-- <div class=\"btn-group\" *ngIf='pendingButton' role='group' aria-label='Approve or Deny'>\r\n                      <button type='button' class='nes-btn is-success' (click)='onApprove()'>Approve</button>\r\n                      <button type='button' class='nes-btn is-error'>Deny</button>\r\n                    </div> -->\r\n                  </div>                  \r\n                </div>\r\n              </div>\r\n            </div>  \r\n          </div>\r\n    </div>    \r\n  </div>\r\n</main>\r\n\r\n\r\n<!-- <main role='main'>\r\n    <section id='map-spotlight' class='container nes-container with-title'>\r\n      <h2 class=\"title\" *ngIf='map; else defaultTitle'>{{map.name}}</h2>\r\n      <ng-template #defaultTitle>Finding that map...</ng-template>\r\n      \r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"image-preview col-8\">\r\n            <img *ngIf='map' src=\"{{map.pictureDataUrl}}\" alt=\"A preview of the map\">\r\n          </div>\r\n          <div *ngIf='map' class=\"map-description\">\r\n            <p>{{map.description}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        \r\n    </section>  \r\n  </main> -->"

/***/ }),

/***/ "./src/app/map-page/map-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-page/map-page.component.ts ***!
  \************************************************/
/*! exports provided: MapPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageComponent", function() { return MapPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");





var MapPageComponent = /** @class */ (function () {
    function MapPageComponent(route, mapService, location) {
        this.route = route;
        this.mapService = mapService;
        this.location = location;
        this.altPic = 'https://cdn3.iconfinder.com/data/icons/game-development-retro/60/005_-_Game_Testing-512.png';
    }
    MapPageComponent.prototype.ngOnInit = function () {
        this.getMap();
    };
    MapPageComponent.prototype.getMap = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        console.log("Retrieving " + name);
        this.mapService.getMap(name)
            .subscribe(function (mapList) { return _this.map = mapList[0]; });
    };
    MapPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    MapPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-page',
            template: __webpack_require__(/*! ./map-page.component.html */ "./src/app/map-page/map-page.component.html"),
            styles: [__webpack_require__(/*! ./map-page.component.css */ "./src/app/map-page/map-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], MapPageComponent);
    return MapPageComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=''>\r\n    <i class=\"nes-logo mr-3 pt-0\"></i>\r\n    <strong>Map Maze</strong>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)='onLogout()'>Logout</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Dropdown\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li> -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li> -->\r\n    </ul>\r\n    <app-login-form *ngIf='!currentUser'></app-login-form>\r\n  </div>\r\n</nav>\r\n<!-- <span class=\"sr-only\">(current) -->\r\n\r\n  <!-- <header>\r\n    <div class=\"bg-dark collapse\" id=\"navbarHeader\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-8 col-md-7 py-4\">\r\n            <h4 class=\"text-white\">About</h4>\r\n            <p class=\"text-muted\">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>\r\n          </div>\r\n          <div class=\"col-sm-4 offset-md-1 py-4\">\r\n            <h4 class=\"text-white\">Contact</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\r\n              <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\r\n              <li><a href=\"#\" class=\"text-white\">Email me</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"navbar navbar-dark bg-dark box-shadow\">\r\n      <div class=\"container d-flex justify-content-between\">\r\n        <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\r\n          <i class=\"nes-logo mr-3 pt-0\"></i>\r\n          <strong>Map Maze</strong>\r\n        </a>\r\n        <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </header> -->"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.currentUser.subscribe(function (data) { return _this.currentUser = data; });
    };
    NavComponent.prototype.onLogout = function () {
        this.authenticationService.logout();
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/register-user/register-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-user/register-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=main>\r\n  <section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">Register with our website</h1>\r\n      <div class=\"nes-container\" >\r\n        <form [formGroup]='registerForm' (ngSubmit)='onSubmit()' class=\"my-2 my-lg-0\">\r\n          <div class=\"form-group\">\r\n            <!-- <label for=\"username\">Username</label> -->\r\n            <input type=\"text\" formControlName=\"username\" class=\"form-control mr-2 login-input\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" \r\n              placeholder=\"Username\"/>\r\n            <!-- <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <!-- <label for=\"username\">Username</label> -->\r\n            <input type=\"email\" formControlName=\"email\" class=\"form-control mr-2 email-input\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" \r\n              placeholder=\"Email\"/>\r\n            <!-- <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <!-- <label for=\"password\">Password</label> -->\r\n            <input type=\"password\" formControlName='password' class='form-control login-input' [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" \r\n              placeholder=\"Password\"/>\r\n            <!-- <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]='loading' class='nes-btn is-primary'>Register</button>\r\n            <!-- <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\r\n            <!-- <a routerLink=\"/register\" class=\"btn btn-link\">Register</a> -->\r\n          </div>  \r\n          <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(formBuilder, route, router, userService, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(RegisterUserComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid)
            return;
        this.loading = true;
        this.userService.registerUser(this.f.username.value, this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (user) {
            if (user == null) {
                console.log("Null user for registration");
            }
            else {
                _this.authenticationService.register(user);
            }
        }, function (error) {
            console.log('Problem registering');
        });
        // .pipe(first())
        // .subscribe(
        //     data => {            
        //       if (data != null) {
        //         this.router.navigate(['users/dashboard']);
        //       }
        //       if (data['admin'] === 'user')
        //         // console.log('is user');
        //       else if ((data['admin'] === 'admin'))
        //         // console.log('is admin');
        //         this.router.navigate(['admin/dashboard']);
        //       else
        //         console.log("Bad admin status " + data['admin'])
        //     },
        // error => {
        //   console.log('Problem logging in');
        // });
    };
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial#app-routing-ts
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.authUrl = '';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        // Useful for knowing value at single time, like possible auth.guard
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.register = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log("Registered user");
        this.currentUserSubject.next(user);
        this.router.navigate(['users/dashboard']);
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var loginData = { 'username': username, 'password': password };
        return this.http.post("login", loginData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
                _this.currentUserSubject.next(user);
            }
            else
                console.log('No user');
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.http.get(this.authUrl + '/logout')
            .subscribe(function (_) { return console.log('Logged out'); });
        this.router.navigate(['']);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.service */ "./src/app/services/messages.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var textHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'text/plain' })
};
var MapService = /** @class */ (function () {
    function MapService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        // private mapUrl = 'http://localhost:8080/api/maps';
        this.mapUrl = '/api/maps';
    }
    MapService.prototype.getMapList = function () {
        var _this = this;
        this.messageService.add('MapService: fetched mapList');
        return this.http.get(this.mapUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched mapList'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMaps', [])));
    };
    MapService.prototype.getUserMaps = function (username) {
        var _this = this;
        var userMapUrl = this.mapUrl + ("/?username=" + username);
        this.messageService.add("MapService: fetched maps by " + username);
        return this.http.get(userMapUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched UserMaps'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUserMaps', [])));
    };
    // TODO: Test this
    MapService.prototype.getMap = function (name) {
        var _this = this;
        var singleMapUrl = this.mapUrl + ("/?name=" + name);
        return this.http.get(singleMapUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched single map'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMap', [])));
    };
    MapService.prototype.getPendingAndResolvedMaps = function (allMaps) {
        var pending;
        var resolved;
        pending = allMaps.filter(function (m) { return m.status === 'pending'; });
        resolved = allMaps.filter(function (m) { return !(m.status === 'pending'); });
        return { 'pending': pending, 'resolved': resolved };
    };
    MapService.prototype.approveMap = function (mapName) {
        var _this = this;
        var approveUrl = this.mapUrl + "/approve";
        console.log(mapName);
        return this.http.post(approveUrl, mapName, textHttpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("approved map " + mapName); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('approveMap', null)));
    };
    MapService.prototype.getMyMaps = function () {
        var _this = this;
        var singleMapUrl = this.mapUrl + "/me";
        return this.http.get(singleMapUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched my maps'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMyMap', [])));
    };
    // return this.http.get<UserMap>(this.mapUrl + `/upload`, params: mapDataObj, observe: 'response')
    // return this.http.post<UserMap>(this.mapUrl + `/upload${mapData}`, mapData, httpOptions)
    MapService.prototype.uploadMap = function (mapname, description, submitter, image, file) {
        var _this = this;
        var status = 'pending';
        var uploaddate = null;
        var mapData = { "mapname": mapname, "description": description, "submitter": submitter, "image": image, "file": file, "status": status, "uploaddate": uploaddate };
        return this.http.post(this.mapUrl + '/upload', mapData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('uploading map'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('uploadMap', null)));
    };
    MapService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remove logging
            console.error(error);
            // TODO: Write it better
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    MapService.prototype.log = function (message) {
        console.log("MapService: " + message);
        this.messageService.add("MapService: " + message);
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [];
    }
    MessagesService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessagesService.prototype.clear = function () {
        this.messages = [];
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.service */ "./src/app/services/messages.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(httpClient, messageService) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.userUrl = '/api/users';
    }
    UserService.prototype.getUser = function (username) {
        var _this = this;
        return this.httpClient.get(this.userUrl + ("/?name=" + username))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched User'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUser', null)));
    };
    UserService.prototype.registerUser = function (username, email, password) {
        var _this = this;
        var userData = { "admin": "user", "email": email, "joindate": null, "password": password, "username": username };
        return this.httpClient.post(this.userUrl + '/register', userData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('registered User'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('registerUser', null)));
    };
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remove logging
            console.error(operation + " failed: " + error.message);
            // TODO: Write it better
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService.prototype.log = function (message) {
        console.log("MapService: " + message);
        this.messageService.add("MapService: " + message);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/upload-map/upload-map.component.css":
/*!*****************************************************!*\
  !*** ./src/app/upload-map/upload-map.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1tYXAvdXBsb2FkLW1hcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/upload-map/upload-map.component.html":
/*!******************************************************!*\
  !*** ./src/app/upload-map/upload-map.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- https://codepen.io/kpourdeilami/pen/KDepk?editors=1010 for expanding text -->\r\n<!-- https://angular.io/guide/forms -->\r\n<!-- TODO: add name to inputs? -->\r\n<main role=main>\r\n  <section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">NowRegister with our website</h1>\r\n      <div class=\"nes-container\" >\r\n        <form [formGroup]='uploadForm' (ngSubmit)='onSubmit()' class=\"my-2 my-lg-0\">\r\n          <div class=\"form-group\">\r\n            <!-- <label for=\"username\">Username</label> -->\r\n            <input type=\"text\" formControlName=\"mapname\" class=\"form-control mr-2 login-input\" [ngClass]=\"{ 'is-invalid': submitted && f.mapname.errors }\" \r\n              placeholder=\"Map Name\"/>\r\n            <!-- <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div> -->\r\n          </div>\r\n          <img class=\"card-img-top\" [src]=\"f.image ? f.image : defaultMapPic\" alt=\"Map Picture\">\r\n          \r\n          <div class=\"upload-btn-wrapper form-group\">\r\n            <button class=\"nes-btn\">Upload an image</button>\r\n            <input type=\"file\" formControlName='image' accept='image/*' class='form-control' (change)='readImage($event)'/>\r\n          </div>  \r\n          <div class=\"upload-btn-wrapper form-group\">\r\n            <button class=\"nes-btn\">Upload a file</button>\r\n            <input type=\"file\" formControlName='file' accept='image/*' class='form-control' (change)='readFile($event)'/>\r\n          </div>  \r\n\r\n          <div class=\"form-group\">\r\n            <label for='map-info-input'>Map Description:</label>\r\n            <textarea class='form-control nes-textarea' formControlName='description' [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"\r\n              placeholder=\"Write about what makes your map unique\"></textarea>   \r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button [disabled]='loading' class='nes-btn is-primary'>Upload</button>\r\n            <!-- <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\r\n            <!-- <a routerLink=\"/register\" class=\"btn btn-link\">Register</a> -->\r\n          </div>  \r\n          <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n\r\n<!-- \r\n<main role='main' class='container'>\r\n  <div class=\"row\">\r\n    <form #mapForm='ngForm' (ngSubmit)='onSubmit()' class='col-xs-12 col-lg-6 mx-auto nes-container with-title is-centered'>\r\n      <h2 class=\"title\">\r\n        <input  type='text' class='form-control nes-field h3' required placeholder=\"Map name here\"\r\n          #mapName name='map-name' id='map-name'[(ngModel)]='uploadMap.mapname'/>\r\n      </h2>\r\n      \r\n      <div class=\"card mb-8 box-shadow\">\r\n        <img class=\"card-img-top\" [src]=\"uploadMap.image ? uploadMap.image : defaultMapPic\" alt=\"Map Picture\">\r\n\r\n        <div class=\"card-body dflex justifiy-content-between align-items-center\">\r\n\r\n          <div class=\"upload-btn-wrapper form-group\">\r\n            <button class=\"nes-btn\">Upload an image</button>\r\n            <input type=\"file\" accept='image/*' class='form-control' required (change)='readImage($event)'\r\n              #mapPic  name=\"map-pic\" id='map-pic'/>\r\n          </div>     \r\n\r\n          <div class='upload-btn-wrapper form-group'>\r\n            <button class=\"nes-btn\">Upload the Map File</button>\r\n            <input type='file' class='form-control' required (change)='readFile($event)'\r\n              #mapFile name='map-file' id='map-file'/>\r\n          </div>\r\n            \r\n\r\n          <div class=\"form-group\">\r\n            <label for='map-info-input'>Map Description:</label>\r\n            <textarea class='form-control nes-textarea' maxlength=\"255\" minlength=\"10\" required \r\n              #mapInfo='ngModel' name='mapInfo' [(ngModel)]='uploadMap.description'\r\n              placeholder=\"Write about what makes your map unique\"></textarea>            \r\n              <div [hidden]='mapInfo.valid || mapInfo.pristine' class='alert alert-danger'>\r\n                A description is required\r\n              </div>\r\n              <br>\r\n          </div>\r\n          <p *ngIf='uploadMap.file'>Map File here</p>\r\n          <p *ngIf='uploadMap.image'>Picture File here</p>\r\n          <button (click)='onSubmit()' type=\"submit\" class=\"nes-btn\" \r\n          \r\n            [className]=\"mapForm.form.valid  && uploadMap.file && uploadMap.image ? 'nes-btn is-primary' : 'nes-btn'\" >Submit Map</button>\r\n        </div>  \r\n      </div>\r\n          \r\n    </form>\r\n  </div>\r\n</main> -->\r\n"

/***/ }),

/***/ "./src/app/upload-map/upload-map.component.ts":
/*!****************************************************!*\
  !*** ./src/app/upload-map/upload-map.component.ts ***!
  \****************************************************/
/*! exports provided: UploadMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMapComponent", function() { return UploadMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _beans_user_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../beans/user-map */ "./src/app/beans/user-map.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");







// https://angular.io/guide/reactive-forms
// https://stackoverflow.com/questions/44106910/angular-there-is-no-directive-with-exportas-set-to-ngmodel
// https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/
var UploadMapComponent = /** @class */ (function () {
    function UploadMapComponent(formBuilder, route, router, mapService, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.mapService = mapService;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.defaultMapPic = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
        this.loading = false;
        this.uploadMap = new _beans_user_map__WEBPACK_IMPORTED_MODULE_4__["UserMap"]('', '', '', 'pending', null, null);
    }
    UploadMapComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            mapname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(UploadMapComponent.prototype, "f", {
        get: function () { return this.uploadForm.controls; },
        enumerable: true,
        configurable: true
    });
    // https://grokonez.com/frontend/angular/angular-4-uploadget-multipartfile-tofrom-spring-boot-server
    // https://stackoverflow.com/questions/47756044/send-json-and-image-with-single-request-angular-spring-boot?rq=1
    // https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
    UploadMapComponent.prototype.readImage = function (event) {
        var _this = this;
        this.mapPictureMessage = null;
        if (event.target.files && event.target.files[0]) {
            var mimeType = event.target.files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.mapPictureMessage = 'Only images are supported';
                return;
            }
            var pictureFile = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) { return _this.uploadMap.image = reader.result; };
            // reader.onload = e => this.uploadForm.patchValue({image: reader.result})
            reader.readAsDataURL(pictureFile);
            console.log('done with image Upload');
        }
    };
    UploadMapComponent.prototype.readFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var mapFile = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function () { return _this.uploadMap.file = reader.result; };
            // reader.onload = e => this.uploadForm.patchValue({file: reader.result})
            reader.readAsDataURL(mapFile);
            console.log('done with file Upload');
        }
    };
    UploadMapComponent.prototype.onSubmit = function () {
        console.log('Submitting');
        this.submitted = true;
        var submitter = this.authenticationService.currentUserValue.username;
        this.mapService.uploadMap(this.f.mapname.value, this.f.description.value, submitter, this.uploadMap.image, this.uploadMap.file)
            .subscribe(function (mapData) { return console.log('Got back ' + mapData); }, function (error) { return console.log('Error uploading: ' + error); });
    };
    UploadMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-map',
            template: __webpack_require__(/*! ./upload-map.component.html */ "./src/app/upload-map/upload-map.component.html"),
            styles: [__webpack_require__(/*! ./upload-map.component.css */ "./src/app/upload-map/upload-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], UploadMapComponent);
    return UploadMapComponent;
}());

/*

<!--
<main role='main' class='container'>
  <div class="row">
    <form #mapForm='ngForm' (ngSubmit)='onSubmit()' class='col-xs-12 col-lg-6 mx-auto nes-container with-title is-centered'>
      <h2 class="title">
        <input  type='text' class='form-control nes-field h3' required placeholder="Map name here"
          #mapName name='map-name' id='map-name'[(ngModel)]='uploadMap.mapname'/>
      </h2>
      
      <div class="card mb-8 box-shadow">
        <img class="card-img-top" [src]="uploadMap.image ? uploadMap.image : defaultMapPic" alt="Map Picture">

        <div class="card-body dflex justifiy-content-between align-items-center">

          <div class="upload-btn-wrapper form-group">
            <button class="nes-btn">Upload an image</button>
            <input type="file" accept='image/*' class='form-control' required (change)='readImage($event)'
              #mapPic  name="map-pic" id='map-pic'/>
          </div>

          <div class='upload-btn-wrapper form-group'>
            <button class="nes-btn">Upload the Map File</button>
            <input type='file' class='form-control' required (change)='readFile($event)'
              #mapFile name='map-file' id='map-file'/>
          </div>
            

          <div class="form-group">
            <label for='map-info-input'>Map Description:</label>
            <textarea class='form-control nes-textarea' maxlength="255" minlength="10" required
              #mapInfo='ngModel' name='mapInfo' [(ngModel)]='uploadMap.description'
              placeholder="Write about what makes your map unique"></textarea>
              <div [hidden]='mapInfo.valid || mapInfo.pristine' class='alert alert-danger'>
                A description is required
              </div>
              <br>
          </div>
          <p *ngIf='uploadMap.file'>Map File here</p>
          <p *ngIf='uploadMap.image'>Picture File here</p>
          <button (click)='onSubmit()' type="submit" class="nes-btn"
          
            [className]="mapForm.form.valid  && uploadMap.file && uploadMap.image ? 'nes-btn is-primary' : 'nes-btn'" >Submit Map</button>
        </div>
      </div>
          
    </form>
  </div>
</main> -->


*/


/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=main>\r\n    <section class=\"jumbotron text-center\">\r\n      <div class=\"container\">\r\n        <h1 class=\"jumbotron-heading\">Welcome to Map Maze</h1>\r\n        <p class=\"lead text-muted\">We're a proud community of creators, programmers and artists who came together to share what we love: Video game maps!</p>\r\n        <p>\r\n          <a routerLink='/uploadMap' class=\"nes-btn is-primary\">Upload a new Map</a>\r\n          <br><br>\r\n          <a routerLink='/users/me' class=\"nes-btn is-primary\">View my maps</a>\r\n          <!-- <br><br>\r\n          <a routerLink='/admin/dashboard' class=\"nes-btn is-primary\">Admin dashboard</a> -->\r\n        </p>\r\n      </div>\r\n    </section>\r\n    \r\n    <section class='container nes-container with-title is-centered'>\r\n      <h1 class=\"title\">Maps of the day</h1>      \r\n        <app-map-list [mapCards]='mapCards'></app-map-list>\r\n    </section>\r\n  </main>"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserDashboardComponent.prototype, "mapCards", void 0);
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-page/user-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-page/user-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-page/user-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-page/user-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role='main'>\r\n  <section id='user-spotlight' class='container nes-container with-title'>\r\n    <h2 class=\"title\">Who am I?</h2>\r\n    <div class=\"messages\">\r\n      <div class=\"message -left\">\r\n        <div class=\"row\">\r\n            <i class=\"col-md-1 nes-bcrikko\"></i>\r\n            <div class=\"col-md-4 col-lg-6 nes-balloon from-left\">\r\n              <p *ngIf='user; else noUser'>Hi, I'm {{user.name}}!<br>{{user.welcomeMessage}}</p>  \r\n              <ng-template #noUser id='alternate-message'>{{defaultMessage}}</ng-template>\r\n            </div>\r\n        </div>        \r\n      </div>\r\n    </div>      \r\n  </section>\r\n\r\n  <section id='user-maps' class='container nes-container with-title'>\r\n      <h2 class=\"title\">My Maps</h2>      \r\n      <app-map-list [mapCards]='myResolvedMaps' [showAuthor]='false'></app-map-list>\r\n  </section>\r\n  <section id='user-maps' class='container nes-container with-title'>\r\n      <h2 class=\"title\">My Pending Maps</h2>      \r\n      <app-map-list [mapCards]='myPendingMaps' [showAuthor]='false'></app-map-list>\r\n  </section>\r\n</main>"

/***/ }),

/***/ "./src/app/user-page/user-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-page/user-page.component.ts ***!
  \**************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(route, mapService, userService, location) {
        this.route = route;
        this.mapService = mapService;
        this.userService = userService;
        this.location = location;
        this.defaultMessage = 'Tracking down that user...';
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var username = this.route.snapshot.paramMap.get('name');
        this.getUserMaps(username);
        this.getUserInfo(username);
    };
    UserPageComponent.prototype.getUserInfo = function (username) {
        var _this = this;
        this.userService.getUser(username)
            .subscribe(function (userResponse) { return _this.handleUserInfo(userResponse); });
        // .subscribe(userResponse => this.user = userResponse != null? userResponse[0] : null)
    };
    UserPageComponent.prototype.handleUserInfo = function (response) {
        if (response != null) {
            this.user = response[0];
            console.log('is user');
        }
        else {
            console.log('No user');
            this.defaultMessage = "Can't find this user!";
        }
    };
    UserPageComponent.prototype.getUserMaps = function (username) {
        var _this = this;
        this.mapService.getUserMaps(username)
            .subscribe(function (mapList) { return _this.handleUserMaps(mapList); });
    };
    UserPageComponent.prototype.handleUserMaps = function (allMaps) {
        var separatedMaps = this.mapService.getPendingAndResolvedMaps(allMaps);
        this.myResolvedMaps = separatedMaps['resolved'];
        this.myPendingMaps = separatedMaps['pending'];
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user-page/user-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user-pending-maps/user-pending-maps.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-pending-maps/user-pending-maps.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVuZGluZy1tYXBzL3VzZXItcGVuZGluZy1tYXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-pending-maps/user-pending-maps.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-pending-maps/user-pending-maps.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role='main'>\r\n  <section id='user-spotlight' class='container nes-container with-title'>\r\n    <h2 class=\"title\">Who am I?</h2>\r\n    <div class=\"messages\">\r\n      <div class=\"message -left\">\r\n        <div class=\"row\">\r\n            <i class=\"col-md-1 nes-bcrikko\"></i>\r\n            <div class=\"col-md-4 col-lg-6 nes-balloon from-left\">\r\n              <p *ngIf='user; else noUser'>Hi, I'm {{user.name}}!<br>{{user.welcomeMessage}}</p>  \r\n              <ng-template #noUser id='alternate-message'>{{defaultMessage}}</ng-template>\r\n            </div>\r\n        </div>        \r\n      </div>\r\n    </div>      \r\n  </section>\r\n\r\n  <section id='user-maps' class='container nes-container with-title'>\r\n      <h2 class=\"title\">My Maps</h2>      \r\n      <app-map-list [mapCards]='myResolvedMaps' [showAuthor]='false'></app-map-list>\r\n  </section>\r\n  <section id='user-maps' class='container nes-container with-title'>\r\n      <h2 class=\"title\">My Pending Maps</h2>      \r\n      <app-map-list [mapCards]='myPendingMaps' [showAuthor]='false'></app-map-list>\r\n  </section>\r\n</main>"

/***/ }),

/***/ "./src/app/user-pending-maps/user-pending-maps.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-pending-maps/user-pending-maps.component.ts ***!
  \******************************************************************/
/*! exports provided: UserPendingMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPendingMapsComponent", function() { return UserPendingMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var UserPendingMapsComponent = /** @class */ (function () {
    function UserPendingMapsComponent(route, mapService, userService, location) {
        this.route = route;
        this.mapService = mapService;
        this.userService = userService;
        this.location = location;
        this.defaultMessage = 'Tracking down that user...';
    }
    UserPendingMapsComponent.prototype.ngOnInit = function () {
        this.getMyMaps();
    };
    UserPendingMapsComponent.prototype.getMyMaps = function () {
        var _this = this;
        this.mapService.getMyMaps()
            .subscribe(function (mapList) { return _this.handleUserMaps(mapList); });
    };
    UserPendingMapsComponent.prototype.handleUserMaps = function (allMaps) {
        var separatedMaps = this.mapService.getPendingAndResolvedMaps(allMaps);
        this.myResolvedMaps = separatedMaps['resolved'];
        this.myPendingMaps = separatedMaps['pending'];
    };
    UserPendingMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-pending-maps',
            template: __webpack_require__(/*! ./user-pending-maps.component.html */ "./src/app/user-pending-maps/user-pending-maps.component.html"),
            styles: [__webpack_require__(/*! ./user-pending-maps.component.css */ "./src/app/user-pending-maps/user-pending-maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserPendingMapsComponent);
    return UserPendingMapsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jmasg\Documents\Angular and Node Projects\map-forum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map