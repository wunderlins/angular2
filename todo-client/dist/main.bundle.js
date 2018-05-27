webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fa [name]=\"'rocket'\"></fa>\n\n<app-notes></app-notes>\n\n<app-console></app-console>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__console_console_component__ = __webpack_require__("../../../../../src/app/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notes_detail_notes_detail_component__ = __webpack_require__("../../../../../src/app/notes-detail/notes-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__console_console_component__["a" /* ConsoleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notes_detail_notes_detail_component__["a" /* NotesDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__notes_service__["a" /* NotesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/console/console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#txtConsole {\n\twidth: 100%;\n\theight: 10em;\n\tborder: 1px solid #AAA;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Console</h2>\n<textarea id=\"txtConsole\"></textarea>"

/***/ }),

/***/ "../../../../../src/app/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent() {
    }
    ConsoleComponent.prototype.ngOnInit = function () {
    };
    ConsoleComponent.prototype.log = function (message) {
        document.getElementById('logConsole').setAttribute('value', '\n' + message);
    };
    ConsoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-console',
            template: __webpack_require__("../../../../../src/app/console/console.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/console.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes-detail/notes-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes-detail/notes-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"note\">\n\n<label for=\"id\">id</label>\n<input type=\"number\" id=\"id\" [(ngModel)]=\"note.id\" placeholder=\"id\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/notes-detail/notes-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesDetailComponent = /** @class */ (function () {
    function NotesDetailComponent() {
    }
    NotesDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */])
    ], NotesDetailComponent.prototype, "note", void 0);
    NotesDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes-detail',
            template: __webpack_require__("../../../../../src/app/notes-detail/notes-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes-detail/notes-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesDetailComponent);
    return NotesDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};
*/
var NotesService = /** @class */ (function () {
    function NotesService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:3000/nodes/0';
    }
    NotesService.prototype.dummyData = function () {
        var n = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](0, "Root");
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](11, "note 1", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](12, "note 2", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](13, "note 3", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](14, "note 4", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](15, "note 5", "", 0, [new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](151, "note 5.1", "", 15, [], 0)], 1));
        return n;
    };
    NotesService.prototype.getRoot = function () {
        //return of(this.dummyData());
        var root = this.http.get(this.rootUrl);
        console.log(root);
        return root;
    };
    NotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "../../../../../src/app/notes/notes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #EEE;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n\t<fa [name]=\"'book'\"></fa>\n\tNotes\n</h2>\n\n<div *ngIf=\"parent\">{{parent.name}}\n\n<ul>\n\t<li *ngFor=\"let note of parent.children\" \n\t  [class.selected]=\"note === selected\"\n      (click)=\"onSelect(note)\">{{note.name}}, numChildren={{note.numChildren}} \n                               parent={{note.parent}}, dirty={{note.dirty}}</li>\n</ul>\n</div>\n\n<app-notes-detail [note]=\"selected\"></app-notes-detail>\n"

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_service__ = __webpack_require__("../../../../../src/app/notes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ConsoleComponent } from '../console/console.component';
var NotesComponent = /** @class */ (function () {
    function NotesComponent(notesService) {
        this.notesService = notesService;
    }
    NotesComponent.prototype.dummyData = function () {
        var n = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](0, "Root");
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](11, "note 1", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](12, "note 2", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](13, "note 3", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](14, "note 4", ""));
        n.appendChild(new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](15, "note 5", "", 0, [new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](151, "note 5.1", "", 15, [], 0)], 1));
        this.parent = n;
    };
    NotesComponent.prototype.onSelect = function (note) {
        this.selected = note;
        console.log(note.name);
    };
    NotesComponent.prototype.getRoot = function () {
        var _this = this;
        //this.parent = this.notesService.getNotes();
        this.notesService.getRoot()
            .subscribe(function (parent) { _this.parent = parent; console.log(parent); });
    };
    NotesComponent.prototype.ngOnInit = function () {
        this.getRoot();
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__("../../../../../src/app/notes/notes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__notes_service__["a" /* NotesService */]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, name, description, parent, children, numChildren) {
        if (description === void 0) { description = ""; }
        if (parent === void 0) { parent = 0; }
        if (children === void 0) { children = []; }
        if (numChildren === void 0) { numChildren = 0; }
        this.childrenLoaded = false;
        this._dirty = true;
        this._id = -1;
        this._parent = 0;
        this._numChildren = 0;
        this._id = id;
        this._name = name;
        this._description = description;
        this._parent = parent;
        this._children = children;
        this._numChildren = numChildren;
    }
    Todo.prototype.appendChild = function (child) {
        if (child._parent != this._id) {
            child._parent = this._id;
            child._dirty = true;
        }
        this._children.push(child);
        this._numChildren++;
        this._dirty = true;
    };
    Object.defineProperty(Todo.prototype, "id", {
        get: function () { return this._id; },
        set: function (id) {
            this._id = id;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) {
            this._name = name;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "description", {
        get: function () { return this._description; },
        set: function (description) {
            this._description = description;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "parent", {
        get: function () { return this._parent; },
        set: function (parent) {
            this._parent = parent;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "children", {
        get: function () { return this._children; },
        set: function (children) {
            this._children = children;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "numChildren", {
        get: function () { return this._numChildren; },
        set: function (numChildren) {
            this._numChildren = numChildren;
            this._dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "dirty", {
        get: function () { return this._dirty; },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map