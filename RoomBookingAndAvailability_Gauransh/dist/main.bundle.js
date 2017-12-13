webpackJsonp([1,4],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomserviceService = (function () {
    function RoomserviceService(_http) {
        this._http = _http;
    }
    RoomserviceService.prototype.getRoomDetails = function () {
        var _this = this;
        return this._http.get("/api/rooms")
            .map(function (result) { return _this.result = result.json(); });
    };
    RoomserviceService.prototype.updateRoom = function (post, id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post('/api/rooms/' + id, JSON.stringify(post), options)
            .map(function (result) { return _this.result = result.json(); });
    };
    RoomserviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RoomserviceService);
    return RoomserviceService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/roomservice.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guest_service_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuestInfoComponent = (function () {
    function GuestInfoComponent(_guestservice, router, aR, fb) {
        this._guestservice = _guestservice;
        this.router = router;
        this.aR = aR;
        this.fb = fb;
        this.guests = [];
    }
    GuestInfoComponent.prototype.ngOnInit = function () {
        this.guestFrm = this.fb.group({
            'name': [null],
            'noofpeople': [null],
            'phoneno': [null],
            'email': [null],
            'address': [null],
            'cid': [null],
            'cod': [null],
            'addrem': [null],
            'lco': [null],
        });
    };
    GuestInfoComponent.prototype.addGuest = function (guest) {
        var _this = this;
        this._guestservice.insertGuest(guest)
            .subscribe(function (newGuest) {
            _this.guests.push(newGuest);
            _this.router.navigateByUrl('/');
        });
    };
    GuestInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-guest-info',
            template: __webpack_require__(676),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__guest_service_service__["a" /* GuestServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__guest_service_service__["a" /* GuestServiceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], GuestInfoComponent);
    return GuestInfoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/guest-info.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestServiceService = (function () {
    function GuestServiceService(_http) {
        this._http = _http;
    }
    GuestServiceService.prototype.insertGuest = function (post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post('/api/guests', JSON.stringify(post), options)
            .map(function (result) { return _this.result = result.json(); });
    };
    GuestServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], GuestServiceService);
    return GuestServiceService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/guest-service.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.username = '';
        this.password = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.checkVal = function (username, password) {
        this.username = username;
        this.password = password;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(677),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roomservice_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomcheckComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomcheckComponent = (function () {
    function RoomcheckComponent(_roomservice, router, aR, fb) {
        this._roomservice = _roomservice;
        this.router = router;
        this.aR = aR;
        this.fb = fb;
    }
    RoomcheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roomservice.getRoomDetails()
            .subscribe(function (res) { return _this.rooms = res; });
    };
    RoomcheckComponent.prototype.updateRoom = function (room) {
        var _this = this;
        for (var i = 0; i < this.rooms.length; i++) {
            var no = this.rooms[i].no;
            if (no === this.roomno) {
                this.roomid = this.rooms[i]._id;
                room.available = this.roomavail;
            }
        }
        this._roomservice.updateRoom(room, this.roomid)
            .subscribe(function (updateArticle) {
            _this.router.navigateByUrl('/');
        });
    };
    RoomcheckComponent.prototype.roomCheck = function (roomno, roomavail) {
        this.roomno = roomno;
        this.roomavail = roomavail;
    };
    RoomcheckComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-roomcheck',
            template: __webpack_require__(678),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__roomservice_service__["a" /* RoomserviceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__roomservice_service__["a" /* RoomserviceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _d) || Object])
    ], RoomcheckComponent);
    return RoomcheckComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/roomcheck.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roomservice_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomsComponent = (function () {
    function RoomsComponent(_roomservice) {
        this._roomservice = _roomservice;
        this.roomDets = [];
        this.amount = '';
        this.beds = '';
        this.available = 'yes';
        this.roomno = [];
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roomservice.getRoomDetails()
            .subscribe(function (res) { return _this.roomDets = res; });
    };
    RoomsComponent.prototype.findRooms = function (amount, beds) {
        this.amount = amount;
        this.beds = beds;
        for (var i = 0; i < this.roomDets.length; i++) {
            var price = this.roomDets[i].price;
            var bed = this.roomDets[i].beds;
            var avail = this.roomDets[i].available;
            var roomno = this.roomDets[i].no;
            if (price === amount) {
                if (bed === beds) {
                    if (avail === this.available) {
                        this.roomno.push(roomno);
                    }
                }
            }
        }
    };
    RoomsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-rooms',
            template: __webpack_require__(679),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__roomservice_service__["a" /* RoomserviceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__roomservice_service__["a" /* RoomserviceService */]) === 'function' && _a) || Object])
    ], RoomsComponent);
    return RoomsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/rooms.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Room Availability and booking module';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(675),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guest_info_guest_info_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_rooms_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__roomcheck_roomcheck_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guest_service_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roomservice_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__guest_info_guest_info_component__["a" /* GuestInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__roomcheck_roomcheck_component__["a" /* RoomcheckComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__guest_service_service__["a" /* GuestServiceService */], __WEBPACK_IMPORTED_MODULE_11__roomservice_service__["a" /* RoomserviceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_info_guest_info_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_rooms_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roomcheck_roomcheck_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'guestinfo', component: __WEBPACK_IMPORTED_MODULE_2__guest_info_guest_info_component__["a" /* GuestInfoComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__guest_info_guest_info_component__["a" /* GuestInfoComponent */], pathMatch: 'full' },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_3__rooms_rooms_component__["a" /* RoomsComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__rooms_rooms_component__["a" /* RoomsComponent */], pathMatch: 'full' },
    { path: 'roomscheck', component: __WEBPACK_IMPORTED_MODULE_4__roomcheck_roomcheck_component__["a" /* RoomcheckComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__roomcheck_roomcheck_component__["a" /* RoomcheckComponent */], pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/app.routing.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/gaura/angular-apps/roomBookingAndAvailability/src/environment.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "form {\r\n    border: 3px solid #f1f1f1;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n<div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"/home\">{{title}}</a>\n  </div>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"active\"><a href=\"/home\">Home</a></li>\n    <li><a href=\"/guestinfo\">Guest Info</a></li>\n    <li><a href=\"/rooms\">Rooms</a></li>\n    <li><a href=\"/roomscheck\">Room Check in or out</a></li>\n  </ul> \n</div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <!-- routing here -->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n  "

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center; color:blue;\"><strong>Guest Form</strong></h1>\n<form action=\"/action_page.php\" [formGroup]=\"guestFrm\" *ngIf=\"guestFrm\">\n  <div class=\"form-group\">\n    <label for=\"guestname\">Guest Name:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter guestname\" [formControl]=\"guestFrm.controls['name']\" \n    formControlName=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"noofpeople\">No of people:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a number\" [formControl]=\"guestFrm.controls['noofpeople']\" \n    formControlName=\"noofpeople\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phoneno\">Phone no:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a phone no\" [formControl]=\"guestFrm.controls['phoneno']\" \n    formControlName=\"phoneno\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a email\" [formControl]=\"guestFrm.controls['email']\" \n    formControlName=\"email\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"address\">Address:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a address\" [formControl]=\"guestFrm.controls['address']\" \n    formControlName=\"address\" style=\"height:100px\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"cid\">Check in Date:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a date\" [formControl]=\"guestFrm.controls['cid']\" \n    formControlName=\"cid\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"cod\">Check out Date:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter a date\" [formControl]=\"guestFrm.controls['cod']\" \n    formControlName=\"cod\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"addrem\">Additional Remarks:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Any Additional Remarks\" [formControl]=\"guestFrm.controls['addrem']\" \n    formControlName=\"addrem\" style=\"height:100px\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lco\">Late check out:</label>\n    <input type=\"text\" class=\"form-control\" [formControl]=\"guestFrm.controls['lco']\" formControlName=\"lco\" placeholder=\"Late check out?\"> \n  </div>\n  <button type=\"submit\" class=\"btn btn-default\" (click)=\"addGuest(guestFrm.value)\">Submit</button>\n  <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"deleteRecord()\">Delete guest record</button>\n</form>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center; color: blue\"><strong>Room booking and Availability</strong></h1> \n<br><br><br>\n<form action=\"/action_page.php\">\n  <div class=\"container\">\n    <label><b>Username</b></label>\n    <input #uname type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n    <label><b>Password</b></label>\n    <input #psw type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n        \n    <button type=\"button\" (click)=\"checkVal(uname.value,psw.value)\">Login</button>\n  </div>\n\n  <div class=\"container\" style=\"background-color:#f1f1f1\">\n    <button type=\"reset\" class=\"cancelbtn\">Cancel</button>\n  </div>\n</form>\n\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Horizontal form</h2>\n  <form class=\"form-horizontal\" action=\"/action_page.php\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"roomno\">Room no:</label>\n      <div class=\"col-sm-10\">\n        <input #no type=\"text\" class=\"form-control\" id=\"roomno\" placeholder=\"Enter the room no.\" name=\"roomno\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"roomno\">Booked or not?</label>\n      <div class=\"col-sm-10\">\n        <input #book type=\"text\" class=\"form-control\" id=\"available\" placeholder=\"Enter yes or no\" name=\"available\">\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"roomCheck(no.value,book.value)\">Submit</button>\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 style=\"text-align:center; color:blue\"><strong>Rooms form</strong></h1>\n  <form class=\"form-horizontal\" action=\"/action_page.php\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"amount\">Budget amount:</label>\n      <div class=\"col-sm-10\">\n        <input #amn type=\"text\" class=\"form-control\" id=\"amount\" placeholder=\"Enter amount in SGD\" name=\"amount\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"noofbeds\">No of beds:</label>\n      <div class=\"col-sm-10\">          \n        <input #bed type=\"text\" class=\"form-control\" id=\"noofbeds\" placeholder=\"Enter no of beds\" name=\"noofbeds\">\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"findRooms(amn.value,bed.value)\">Submit</button>\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"reset\" class=\"btn btn-default\">reset</button>\n      </div>\n    </div>\n  </form>\n</div>\n<br><br>\n<h2>List of rooms:</h2>\n{{roomno.toString()}}\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ })

},[713]);
//# sourceMappingURL=main.bundle.map