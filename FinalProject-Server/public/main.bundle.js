webpackJsonp([1,5],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "md-sidenav-container.m2app-dark {\n  background: black;\n}\n\n.md-grid-list{\n  height: 100%;\n}\n\n.md-grid-tile{\n  padding: 20px;\n}\n.app-content {\n  /*padding: 20px;*/\n}\n.text-inside-grid {\n  padding-right: 5%;\n  padding-bottom: 5%;\n \n}\n\nhtml {\n  height: 100%;\n}\n.text-inside-grid1 {\n  position: absolute;\n  display: inline-block;\n  vertical-align: top; /* here */\n  left: 5px;\n}\n\n.example-card {\n  width: 400px;\n  overflow: auto;\n}\n\nmd-card {\n    margin: 20px;\n}\n\n.app-sidenav {\n  padding: 10px;\n  min-width: 100px;\n}\n\n.app-content md-checkbox {\n  margin: 10px;\n}\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white;\n}\n\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none;\n}\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n}\n\n.app-input-icon {\n  font-size: 16px;\n}\n\n.app-list {\n  border: 1px solid rgba(0,0,0,0.12);\n  width: 350px;\n  margin: 20px;\n}\n\n.app-progress {\n  margin: 20px;\n}\n\n\n.chatbot-div{\n  background: #424242;\n  min-height: 95%;\n  margin: 20px;\n  padding: 20px;\n  border-radius: 4px;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-box-flex: 100;\n      -ms-flex: 100;\n          flex: 100;\n\n}\n\n.chatbot-footer\n{\n  margin: 20px;\n  display: inline-block;\n  background: rgba(0,0,0,0);\n}\n.introClass\n{\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: block;\n  margin: 0px;\n  height: 100%;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 16px;\n}\n\n.chatbotBody\n{\n  overflow-y: auto;\n  margin-top: 10px;\n  max-height: 350px;\n  \n}\n.buttonForIntroClass\n{\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 36px;\n  margin-bottom: 10px;\n\n}\n\nmd-list.hintsListElement md-list-item .md-list-item\n{\n  padding-left: 0px;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n}\n.md-checkbox-layout .md-checkbox-label\n{\n  font-weight: normal;\n}\n.chatbotButton\n{\n  margin-right: 7%;\n}\n\n.chatbot-footer h2\n{\n  font-family: 'Ubuntu', sans-serif;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Course = (function () {
    function Course(currTitle, currGeneral, currsyllabus, courseApp, currLang) {
        this.title = currTitle;
        this.general = currGeneral;
        this.syllabus = currsyllabus;
        this.allStages = new Array();
        this.currLang = currLang;
        this.courseApp = courseApp;
    }
    return Course;
}());
var courseComponent = (function () {
    function courseComponent(route) {
        this.links = ['sdasd', 'asdaasadasdsadsdassdsad', 'sadasdsda'];
        this.isDarkTheme = true;
        this.currCourse = new Course('', '', '', '', '');
        this.activeRoute = route;
    }
    courseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            console.log("ddddddddddddddddddddddd");
            _this.currCourse.currLang = params['currLang'];
            _this.currCourse.courseApp = params['courseApp'];
            // this.conf = new Configuration(this.currCourse.currLang,this.currCourse.courseApp);
            console.log("kkkkkkkkkkkkkkkkkkkk");
        });
    };
    courseComponent.prototype.ngAfterContentInit = function () { };
    courseComponent.prototype.onActivate = function (event) {
        this.editor = event['editor'];
    };
    courseComponent.prototype.changeToDarkTheme = function () {
        if (this.isDarkTheme) {
            this.editor.theme = 'eclipse';
        }
        else {
            this.editor.theme = 'tomorrow_night';
        }
        this.isDarkTheme = !this.isDarkTheme;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editor'), 
        __metadata('design:type', Object)
    ], courseComponent.prototype, "editor", void 0);
    courseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-course-selector',
            template: __webpack_require__(831),
            styles: [__webpack_require__(166)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], courseComponent);
    return courseComponent;
    var _a;
}());
//# sourceMappingURL=app.course.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OneMessageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OneMessageInstance = (function () {
    function OneMessageInstance(newCon, isIncoming, img) {
        this.contant = newCon;
        this.incoming = isIncoming;
        this.srcImg = img;
    }
    ;
    return OneMessageInstance;
}());
var ChatMessageComponent = (function () {
    /*
    @Input()
    message:OneMessageInstance;
  */
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
    };
    ChatMessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            inputs: ['message'],
            selector: 'chat-message',
            styles: [__webpack_require__(778)],
            template: "\n      \n <div class=\"msg-container\" \n  [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\">\n      <div class=\"avatar\"\n         *ngIf=\"!message.incoming\">\n      <img src=\"{{message.srcImg}}\">\n    </div>\n\n\n    <div class=\"messages\" [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\n      <p>{{message.contant}}</p>\n    </div>\n    <div class=\"avatar\" *ngIf=\"message.incoming\">\n      <img src=\"{{message.srcImg}}\">\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogCompilationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogCompilationComponent = (function () {
    function DialogCompilationComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogCompilationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'dialog-comp',
            template: __webpack_require__(829),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], DialogCompilationComponent);
    return DialogCompilationComponent;
    var _a;
}());
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(155);
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


//import 'ace-builds/src-min/ace';
var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterContentInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(830),
            styles: [__webpack_require__(166)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stage__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stage_component_service__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dialog_dialog_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dialog_dialogStatus__ = __webpack_require__(694);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import 'ace-builds/src-min/ace';
var stageComponent = (function () {
    function stageComponent(stagePageService, dialog, route) {
        this.stagePageService = stagePageService;
        this.dialog = dialog;
        this.title = 's';
        this.chatbotIsOn = false;
        //router: Router;   
        this.currStage = new __WEBPACK_IMPORTED_MODULE_1__stage__["a" /* stage */]();
        this.writtenCode = '';
        this.isDarkTheme = true;
        this.links = ['sdasd', 'asdaasadasdsadsdassdsad', 'sadasdsda'];
        this._isCollapsedContent = true;
        this.allCompilationStatus = new __WEBPACK_IMPORTED_MODULE_6__Dialog_dialogStatus__["a" /* dialogStatus */]();
        this.activeRoute = route;
    }
    stageComponent.prototype.openDialog = function (statuscode, error) {
        var config = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["MdDialogConfig"]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__Dialog_dialog_component__["a" /* DialogCompilationComponent */], config);
        dialogRef.componentInstance.title = this.allCompilationStatus.allStatus[statuscode].title;
        error = error || "\n";
        dialogRef.componentInstance.content = this.allCompilationStatus.allStatus[statuscode].content;
        dialogRef.componentInstance.error = error;
    };
    stageComponent.prototype.changeToDarkTheme = function () {
        if (this.isDarkTheme) {
            this.editor.theme = 'eclipse';
        }
        else {
            this.editor.theme = 'tomorrow_night';
        }
        this.isDarkTheme = !this.isDarkTheme;
    };
    stageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.stageIdfromRouting = params['id'];
        });
        this.sub = this.activeRoute.parent.params.subscribe(function (params) {
            _this.currLang = params['currLang'];
            _this.courseApp = params['courseApp'];
        });
        this.stagePageService.getInitalDataForStage(this.stageIdfromRouting, this.currLang, this.courseApp).subscribe(function (response) {
            console.log(response);
            _this.currStage.id = response["id"];
            _this.currStage.topic = response["topic"];
            _this.currStage.instructions = response["instructions"];
            _this.currStage.code = response["code"];
            _this.currStage.tasks = response["tasks"];
            _this.currStage.hints = response["hints"];
            _this.currStage.argstype = response["argstype"];
            _this.currStage.numofargs = parseInt(response["numofargs"]);
            _this.chatbotinitmessage = response["chatbotinitmessage"];
            console.log(JSON.stringify(_this.currStage));
        });
        setTimeout(function () {
            _this.editor.text = _this.currStage.code;
        });
    };
    stageComponent.prototype.ngAfterContentInit = function () {
    };
    stageComponent.prototype.changeStatus = function (newStatus) {
        this.writtenCode = newStatus;
    };
    stageComponent.prototype.submit = function () {
        var _this = this;
        this.stagePageService.submitYourCode(this.currStage.id, this.writtenCode, this.currLang, this.courseApp).subscribe(function (response) {
            //// add enable edit
            if (response["status"] == 'compilation error') {
                _this.complilationCurrStatus = 'compilation error';
                _this.openDialog(2, response["error"]);
            }
            else if (response["status"] == 'success') {
                _this.complilationCurrStatus = 'success';
                _this.openDialog(0);
                _this.chatbotIsOn = true;
            }
            else {
                _this.openDialog(1, response["error"]);
                _this.chatbotIsOn = true;
            }
            console.log("Success Response " + JSON.stringify(response));
        });
    };
    stageComponent.prototype.changeEditorEdit = function () {
        console.log('sdasdasdsa');
        if (this.title == 'app works!') {
            console.log('check2');
            this.editor.changeReadOnlyModeToTrue();
        }
        else {
            console.log('check1');
            this.editor.changeReadOnlyModeToFalse();
        }
    };
    stageComponent.prototype.collapseHints = function () {
        var _this = this;
        this._isCollapsedContent = !this._isCollapsedContent;
        setTimeout(function () {
            _this.scrollToBottom();
        });
    };
    stageComponent.prototype.scrollToBottom = function () {
        var out = this.introObj.nativeElement;
        console.log(out.scrollTop);
        console.log(out.scrollHeight);
        out.scrollTop = out.scrollHeight;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editor'), 
        __metadata('design:type', Object)
    ], stageComponent.prototype, "editor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('introObj', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] }), 
        __metadata('design:type', Object)
    ], stageComponent.prototype, "introObj", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chatbotcomp'), 
        __metadata('design:type', Object)
    ], stageComponent.prototype, "chatbotcomponent", void 0);
    stageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'stage-selector',
            template: __webpack_require__(832),
            providers: [__WEBPACK_IMPORTED_MODULE_3__stage_component_service__["a" /* StagePageService */]],
            styles: [__webpack_require__(166)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__stage_component_service__["a" /* StagePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__stage_component_service__["a" /* StagePageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["MdDialog"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], stageComponent);
    return stageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=app.stage.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration() {
        this.serverURL = 'http://finalprojectcm.herokuapp.com/';
    }
    return Configuration;
}());
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_course_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(router) {
        this.router = router;
        this.allCourses = new Array();
        this.allCourses.push(new __WEBPACK_IMPORTED_MODULE_1__app_course_component__["b" /* Course */]('python', 'checkGeneral', 'sdsadsadsaasdsadad', 'chatbot', 'python'));
        this.allCourses.push(new __WEBPACK_IMPORTED_MODULE_1__app_course_component__["b" /* Course */]('python', 'checkGeneral', 'sdsadsadsaasdsadad', 'chatbot', 'python'));
        this.currRouter = router;
    }
    HomePageComponent.prototype.enterCourse = function (courseApp, currLang) {
        console.log('sdad ' + courseApp);
        console.log('sdad ' + currLang);
        this.currRouter.navigateByUrl("course/" + courseApp + "/" + currLang);
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__(833),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a;
}());
//# sourceMappingURL=app.home.page.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 525;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(700);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatBotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var chatBotService = (function () {
    function chatBotService(http) {
        this.http = http;
        this.conf = new __WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Configuration */]();
        this.serverURL = this.conf.serverURL;
    }
    chatBotService.prototype.runCode = function (code, id, args, currLang, courseApp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.serverURL + 'courses/' + currLang + '/' + courseApp +
            '/' + id + '/run', { "code": code, "args": args }, options).map(function (res) { return res.json(); });
    };
    chatBotService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], chatBotService);
    return chatBotService;
    var _a;
}());
//# sourceMappingURL=chatbot.component.service.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatbot_component_service__ = __webpack_require__(692);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatBotComponent = (function () {
    function ChatBotComponent(chatBotServiceObj, el) {
        this.chatBotServiceObj = chatBotServiceObj;
        this.el = el;
        this.messageList = [];
        this.CurrArgsValue = new Array();
        this.enableEdit = false;
        this.argsCounter = 0;
    }
    ChatBotComponent.prototype.ngOnInit = function () {
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('', true, 'ss');
    };
    ChatBotComponent.prototype.ngAfterContentInit = function () {
        this.enableEdit = false;
        this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */](this.chatbotinitmessage, false, "/assets/images/monkey.png"));
        this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]("Check your code by insert arguments", false, "/assets/images/monkey.png"));
        this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('Please enter ' + this.numofargs + ' arguments', false, "/assets/images/monkey.png"));
    };
    ChatBotComponent.prototype.sendMessage = function (event) {
        var _this = this;
        this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */](this.draftMessage.contant, true, "/assets/images/male-avatar-1.png"));
        //  var type = this.castTypeOf(this.argstype[this.argsCounter],this.draftMessage.contant);
        this.CurrArgsValue[this.argsCounter] = this.draftMessage.contant;
        this.argsCounter++;
        if (this.argsCounter == this.numofargs) {
            this.chatBotServiceObj.runCode(this.code, this.stageID, this.CurrArgsValue, this.currLang, this.courseApp)
                .subscribe(function (response) {
                _this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('The output is:  ' + response["result"], false, "/assets/images/monkey.png"));
                _this.CurrArgsValue = new Array();
                _this.argsCounter = 0;
                _this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('Please enter argument number ' + (_this.argsCounter + 1), false, "/assets/images/monkey.png"));
                setTimeout(function () {
                    _this.scrollToBottom();
                }, 5);
            });
        }
        else {
            this.messageList.push(new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('Please enter argument number ' + (this.argsCounter + 1), false, "/assets/images/monkey.png"));
        }
        //
        //this.messageInputObj["value"] = '';
        setTimeout(function () {
            _this.scrollToBottom();
        }, 5);
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_1__message_component__["b" /* OneMessageInstance */]('', true, 'ss');
        event.preventDefault();
    };
    ChatBotComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], ChatBotComponent.prototype, "code", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], ChatBotComponent.prototype, "chatbotinitmessage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Number)
    ], ChatBotComponent.prototype, "numofargs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ChatBotComponent.prototype, "argstype", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ChatBotComponent.prototype, "stageID", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ChatBotComponent.prototype, "currLang", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ChatBotComponent.prototype, "courseApp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("angularcb1"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === 'function' && _a) || Object)
    ], ChatBotComponent.prototype, "messageInputObj", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("chatbotBody"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === 'function' && _b) || Object)
    ], ChatBotComponent.prototype, "chatbotBody", void 0);
    ChatBotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'chatBot',
            template: __webpack_require__(828),
            providers: [__WEBPACK_IMPORTED_MODULE_2__chatbot_component_service__["a" /* chatBotService */]],
            styles: [__webpack_require__(166)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__chatbot_component_service__["a" /* chatBotService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__chatbot_component_service__["a" /* chatBotService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === 'function' && _d) || Object])
    ], ChatBotComponent);
    return ChatBotComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=chatbot.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dialogStatus; });
/* unused harmony export status */
//import {NgModule} from '@angular/core';
var dialogStatus = (function () {
    function dialogStatus() {
        this.allStatus = new Array();
        this.allStatus.push(new status('Good work!', 'Your code is correct.' + '\n' + 'Please check it using the ChatBot.'));
        this.allStatus.push(new status('Someting is wrong', 'Your code has correct syntax but not follow the instructions.'
            + '\n' + 'Please check it using the ChatBot.'
            + '\n' + 'The reasons are:' + '\n'));
        this.allStatus.push(new status('Someting is wrong', 'Your code has syntax error.The following error was appear :'));
    }
    return dialogStatus;
}());
var status = (function () {
    function status(title, content) {
        this.title = title;
        this.content = content;
    }
    return status;
}());
//# sourceMappingURL=dialogStatus.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyComponent = (function () {
    function MyComponent() {
        this.theme = 'tomorrow_night';
        this.options = { maxLines: 20, printMargin: false, fontSize: "13pt", autoScrollEditorIntoView: true };
        this.readonly = false;
        this.currStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MyComponent.prototype.changeReadOnlyModeToFalse = function () {
        this.readonly = false;
    };
    MyComponent.prototype.changeText = function (newText) {
        this.text = newText;
    };
    MyComponent.prototype.changeReadOnlyModeToTrue = function () {
        this.readonly = true;
    };
    MyComponent.prototype.onChange = function (code) {
        console.log("new code", code);
        this.currStatus.emit(code);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editor'), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "editor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], MyComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "currStatus", void 0);
    MyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'aceEditor',
            template: "\n    <div ace-editor #editor class=\"text-inside-grid\" color=\"primary\"\n       [text]=\"text\"\n       [mode]=\"'python'\"\n       [theme]=\"theme\"\n       [options]=\"options\"\n       [readOnly]=\"readonly\"\n       [autoUpdateContent]=\"true\"\n       (textChanged)=\"onChange($event)\"\n       style=\"min-height:400px; width:550px;overflow: auto;\"></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
//# sourceMappingURL=aceTry.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md2__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_stage_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_course_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aceTry__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flex__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ChatBot_chatbot_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ChatBot_message_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dialog_dialog_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routing_moudle__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__homePage_app_home_page__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_hammerjs__);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__aceTry__["a" /* MyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ChatBot_chatbot_component__["a" /* ChatBotComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ChatBot_message_component__["a" /* ChatMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Dialog_dialog_component__["a" /* DialogCompilationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_stage_component__["a" /* stageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_course_component__["a" /* courseComponent */],
                __WEBPACK_IMPORTED_MODULE_18__homePage_app_home_page__["a" /* HomePageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor__["AceEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular2_flex__["a" /* Angular2FlexModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__routing_moudle__["a" /* appRootRoutingList */]),
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_13__angular_common__["b" /* HashLocationStrategy */] }],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__Dialog_dialog_component__["a" /* DialogCompilationComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_stage_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_course_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homePage_app_home_page__ = __webpack_require__(438);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRootRoutingList; });




var appRootRoutingList = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__homePage_app_home_page__["a" /* HomePageComponent */], pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__homePage_app_home_page__["a" /* HomePageComponent */], pathMatch: 'full' },
            { path: 'course/:currLang/:courseApp', component: __WEBPACK_IMPORTED_MODULE_2__app_course_component__["a" /* courseComponent */],
                children: [
                    { path: '', redirectTo: 'stage/1', pathMatch: 'full' },
                    { path: 'stage/:id', component: __WEBPACK_IMPORTED_MODULE_1__app_stage_component__["a" /* stageComponent */] }
                ]
            }
        ] }
];
//# sourceMappingURL=routing.moudle.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configuration__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StagePageService = (function () {
    function StagePageService(http) {
        this.http = http;
        this.conf = new __WEBPACK_IMPORTED_MODULE_9__configuration__["a" /* Configuration */]();
        this.serverURL = this.conf.serverURL;
    }
    StagePageService.prototype.submitYourCode = function (id, code, currLang, courseApp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.serverURL + 'courses/' + currLang + '/' + courseApp +
            '/' + id + '/compile', { "id": id, "code": code }, options).map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    StagePageService.prototype.getInitalDataForStage = function (stageId, currLang, courseApp) {
        //let params: URLSearchParams = new URLSearchParams();
        //params.set('id', stageId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.serverURL + 'courses/' + currLang + '/' +
            courseApp + '/' + stageId.toString(), options)
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    StagePageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], StagePageService);
    return StagePageService;
    var _a;
}());
//# sourceMappingURL=stage.component.service.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stage; });
var stage = (function () {
    function stage() {
        this.id = '1';
        this.instructions = ' ';
        this.tasks = [];
        this.hints = [];
        this.code = ' ';
        this.argstype = [];
        this.numofargs = 0;
    }
    return stage;
}());
//# sourceMappingURL=stage.js.map

/***/ }),

/***/ 700:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "/*!\r\n    \r\n =========================================================\r\n * Material Kit - v1.1.1.0\r\n =========================================================\r\n \r\n * Product Page: http://www.creative-tim.com/product/material-kit\r\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\r\n * Licensed under MIT (https://github.com/timcreative/material-kit/blob/master/LICENSE.md)\r\n \r\n =========================================================\r\n \r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n \r\n */\r\n \r\n/* ANIMATION */\r\n/* SHADOWS */\r\n/* Shadows (from mdl http://www.getmdl.io/) */\r\n.md-card-main-page {\r\n\twidth:70%;\r\n\tborder: solid;\r\n\tborder-radius: 6px;\r\n\theight: 300px;\r\n\tborder-color: #9c27b0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\t\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\nbody {\r\n  background-color: #CCCCCC;\r\n}\r\nbody.inverse {\r\n  background: #333333;\r\n}\r\nbody.inverse, body.inverse .form-control {\r\n  color: #ffffff;\r\n}\r\nbody.inverse .modal,\r\nbody.inverse .modal .form-control,\r\nbody.inverse .panel-default,\r\nbody.inverse .panel-default .form-control,\r\nbody.inverse .card,\r\nbody.inverse .card .form-control {\r\n  background-color: initial;\r\n  color: initial;\r\n}\r\n\r\n.life-of-material-kit {\r\n  background: #FFFFFF;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\r\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\na, a:hover, a:focus {\r\n  color: #9c27b0;\r\n}\r\n\r\n\r\na .material-icons, a:hover .material-icons, a:focus .material-icons {\r\n  vertical-align: middle;\r\n}\r\n\r\n/*           Animations              */\r\n.animation-transition-general, .carousel .carousel-indicators li {\r\n  -webkit-transition: all 300ms linear;\r\n  transition: all 300ms linear;\r\n}\r\n\r\n.animation-transition-slow {\r\n  -webkit-transition: all 370ms linear;\r\n  transition: all 370ms linear;\r\n}\r\n\r\n.animation-transition-fast, .navbar {\r\n  -webkit-transition: all 150ms ease 0s;\r\n  transition: all 150ms ease 0s;\r\n}\r\n\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox,\r\n.form-horizontal .radio-inline,\r\n.form-horizontal .checkbox-inline {\r\n  padding-top: 0;\r\n}\r\n.form-horizontal .radio {\r\n  margin-bottom: 10px;\r\n}\r\n.form-horizontal label {\r\n  text-align: right;\r\n}\r\n.form-horizontal label.control-label {\r\n  margin: 0;\r\n}\r\n\r\n.btn,\r\n.navbar .navbar-nav > li > a.btn {\r\n  border: none;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  padding: 12px 30px;\r\n  margin: 10px 1px;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0;\r\n  will-change: box-shadow, transform;\r\n  -webkit-transition:box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.btn::-moz-focus-inner,\r\n.navbar .navbar-nav > li > a.btn::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n.btn, .btn.btn-default,\r\n.navbar .navbar-nav > li > a.btn,\r\n.navbar .navbar-nav > li > a.btn.btn-default {\r\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\r\n}\r\n.btn, .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover, .open > .btn.dropdown-toggle, .open > .btn.dropdown-toggle:focus, .open > .btn.dropdown-toggle:hover, .btn.btn-default, .btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default.active, .btn.btn-default:active:focus, .btn.btn-default:active:hover, .btn.btn-default.active:focus, .btn.btn-default.active:hover, .open > .btn.btn-default.dropdown-toggle, .open > .btn.btn-default.dropdown-toggle:focus, .open > .btn.btn-default.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn,\r\n.navbar .navbar-nav > li > a.btn:hover,\r\n.navbar .navbar-nav > li > a.btn:focus,\r\n.navbar .navbar-nav > li > a.btn:active,\r\n.navbar .navbar-nav > li > a.btn.active,\r\n.navbar .navbar-nav > li > a.btn:active:focus,\r\n.navbar .navbar-nav > li > a.btn:active:hover,\r\n.navbar .navbar-nav > li > a.btn.active:focus,\r\n.navbar .navbar-nav > li > a.btn.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default,\r\n.navbar .navbar-nav > li > a.btn.btn-default:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default.active,\r\n.navbar .navbar-nav > li > a.btn.btn-default:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:hover {\r\n  background-color: #999999;\r\n  color: #FFFFFF;\r\n}\r\n.btn:focus, .btn:active, .btn:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default:hover,\r\n.navbar .navbar-nav > li > a.btn:focus,\r\n.navbar .navbar-nav > li > a.btn:active,\r\n.navbar .navbar-nav > li > a.btn:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\r\n}\r\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active, .btn.btn-default.disabled, .btn.btn-default.disabled:hover, .btn.btn-default.disabled:focus, .btn.btn-default.disabled.focus, .btn.btn-default.disabled:active, .btn.btn-default.disabled.active, .btn.btn-default:disabled, .btn.btn-default:disabled:hover, .btn.btn-default:disabled:focus, .btn.btn-default:disabled.focus, .btn.btn-default:disabled:active, .btn.btn-default:disabled.active, .btn.btn-default[disabled], .btn.btn-default[disabled]:hover, .btn.btn-default[disabled]:focus, .btn.btn-default[disabled].focus, .btn.btn-default[disabled]:active, .btn.btn-default[disabled].active, fieldset[disabled] .btn.btn-default, fieldset[disabled] .btn.btn-default:hover, fieldset[disabled] .btn.btn-default:focus, fieldset[disabled] .btn.btn-default.focus, fieldset[disabled] .btn.btn-default:active, fieldset[disabled] .btn.btn-default.active,\r\n.navbar .navbar-nav > li > a.btn.disabled,\r\n.navbar .navbar-nav > li > a.btn.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.disabled.active,\r\n.navbar .navbar-nav > li > a.btn:disabled,\r\n.navbar .navbar-nav > li > a.btn:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn:disabled:active,\r\n.navbar .navbar-nav > li > a.btn:disabled.active,\r\n.navbar .navbar-nav > li > a.btn[disabled],\r\n.navbar .navbar-nav > li > a.btn[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.active,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-default.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-simple, .btn.btn-default.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple {\r\n  background-color: transparent;\r\n  color: #999999;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-default.btn-simple:hover, .btn.btn-default.btn-simple:focus, .btn.btn-default.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #999999;\r\n}\r\n.btn.btn-primary,\r\n.navbar .navbar-nav > li > a.btn.btn-primary {\r\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\r\n}\r\n.btn.btn-primary, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .btn.btn-primary.active:focus, .btn.btn-primary.active:hover, .open > .btn.btn-primary.dropdown-toggle, .open > .btn.btn-primary.dropdown-toggle:focus, .open > .btn.btn-primary.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:hover {\r\n  background-color: #9c27b0;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n.btn.btn-primary.disabled, .btn.btn-primary.disabled:hover, .btn.btn-primary.disabled:focus, .btn.btn-primary.disabled.focus, .btn.btn-primary.disabled:active, .btn.btn-primary.disabled.active, .btn.btn-primary:disabled, .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:focus, .btn.btn-primary:disabled.focus, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled.active, .btn.btn-primary[disabled], .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:focus, .btn.btn-primary[disabled].focus, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled].active, fieldset[disabled] .btn.btn-primary, fieldset[disabled] .btn.btn-primary:hover, fieldset[disabled] .btn.btn-primary:focus, fieldset[disabled] .btn.btn-primary.focus, fieldset[disabled] .btn.btn-primary:active, fieldset[disabled] .btn.btn-primary.active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-primary.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-primary.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\r\n  background-color: transparent;\r\n  color: #9c27b0;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-primary.btn-simple:hover, .btn.btn-primary.btn-simple:focus, .btn.btn-primary.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #9c27b0;\r\n}\r\n.btn.btn-info,\r\n.navbar .navbar-nav > li > a.btn.btn-info {\r\n  box-shadow: 0 2px 2px 0 rgba(3, 169, 244, 0.14), 0 3px 1px -2px rgba(3, 169, 244, 0.2), 0 1px 5px 0 rgba(3, 169, 244, 0.12);\r\n}\r\n.btn.btn-info, .btn.btn-info:hover, .btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info.active, .btn.btn-info:active:focus, .btn.btn-info:active:hover, .btn.btn-info.active:focus, .btn.btn-info.active:hover, .open > .btn.btn-info.dropdown-toggle, .open > .btn.btn-info.dropdown-toggle:focus, .open > .btn.btn-info.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info,\r\n.navbar .navbar-nav > li > a.btn.btn-info:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info.active,\r\n.navbar .navbar-nav > li > a.btn.btn-info:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:hover {\r\n  background-color: #03a9f4;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(3, 169, 244, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 169, 244, 0.2);\r\n}\r\n.btn.btn-info.disabled, .btn.btn-info.disabled:hover, .btn.btn-info.disabled:focus, .btn.btn-info.disabled.focus, .btn.btn-info.disabled:active, .btn.btn-info.disabled.active, .btn.btn-info:disabled, .btn.btn-info:disabled:hover, .btn.btn-info:disabled:focus, .btn.btn-info:disabled.focus, .btn.btn-info:disabled:active, .btn.btn-info:disabled.active, .btn.btn-info[disabled], .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:focus, .btn.btn-info[disabled].focus, .btn.btn-info[disabled]:active, .btn.btn-info[disabled].active, fieldset[disabled] .btn.btn-info, fieldset[disabled] .btn.btn-info:hover, fieldset[disabled] .btn.btn-info:focus, fieldset[disabled] .btn.btn-info.focus, fieldset[disabled] .btn.btn-info:active, fieldset[disabled] .btn.btn-info.active,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-info.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-info.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple {\r\n  background-color: transparent;\r\n  color: #03a9f4;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-info.btn-simple:hover, .btn.btn-info.btn-simple:focus, .btn.btn-info.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #03a9f4;\r\n}\r\n.btn.btn-success,\r\n.navbar .navbar-nav > li > a.btn.btn-success {\r\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\r\n}\r\n.btn.btn-success, .btn.btn-success:hover, .btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success.active, .btn.btn-success:active:focus, .btn.btn-success:active:hover, .btn.btn-success.active:focus, .btn.btn-success.active:hover, .open > .btn.btn-success.dropdown-toggle, .open > .btn.btn-success.dropdown-toggle:focus, .open > .btn.btn-success.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success,\r\n.navbar .navbar-nav > li > a.btn.btn-success:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success.active,\r\n.navbar .navbar-nav > li > a.btn.btn-success:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:hover {\r\n  background-color: #4caf50;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n.btn.btn-success.disabled, .btn.btn-success.disabled:hover, .btn.btn-success.disabled:focus, .btn.btn-success.disabled.focus, .btn.btn-success.disabled:active, .btn.btn-success.disabled.active, .btn.btn-success:disabled, .btn.btn-success:disabled:hover, .btn.btn-success:disabled:focus, .btn.btn-success:disabled.focus, .btn.btn-success:disabled:active, .btn.btn-success:disabled.active, .btn.btn-success[disabled], .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:focus, .btn.btn-success[disabled].focus, .btn.btn-success[disabled]:active, .btn.btn-success[disabled].active, fieldset[disabled] .btn.btn-success, fieldset[disabled] .btn.btn-success:hover, fieldset[disabled] .btn.btn-success:focus, fieldset[disabled] .btn.btn-success.focus, fieldset[disabled] .btn.btn-success:active, fieldset[disabled] .btn.btn-success.active,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-success.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-success.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple {\r\n  background-color: transparent;\r\n  color: #4caf50;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-success.btn-simple:hover, .btn.btn-success.btn-simple:focus, .btn.btn-success.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #4caf50;\r\n}\r\n.btn.btn-warning,\r\n.navbar .navbar-nav > li > a.btn.btn-warning {\r\n  box-shadow: 0 2px 2px 0 rgba(251, 192, 45, 0.14), 0 3px 1px -2px rgba(251, 192, 45, 0.2), 0 1px 5px 0 rgba(251, 192, 45, 0.12);\r\n}\r\n.btn.btn-warning, .btn.btn-warning:hover, .btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning.active, .btn.btn-warning:active:focus, .btn.btn-warning:active:hover, .btn.btn-warning.active:focus, .btn.btn-warning.active:hover, .open > .btn.btn-warning.dropdown-toggle, .open > .btn.btn-warning.dropdown-toggle:focus, .open > .btn.btn-warning.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:hover {\r\n  background-color: #fbc02d;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(251, 192, 45, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(251, 192, 45, 0.2);\r\n}\r\n.btn.btn-warning.disabled, .btn.btn-warning.disabled:hover, .btn.btn-warning.disabled:focus, .btn.btn-warning.disabled.focus, .btn.btn-warning.disabled:active, .btn.btn-warning.disabled.active, .btn.btn-warning:disabled, .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:focus, .btn.btn-warning:disabled.focus, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled.active, .btn.btn-warning[disabled], .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:focus, .btn.btn-warning[disabled].focus, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled].active, fieldset[disabled] .btn.btn-warning, fieldset[disabled] .btn.btn-warning:hover, fieldset[disabled] .btn.btn-warning:focus, fieldset[disabled] .btn.btn-warning.focus, fieldset[disabled] .btn.btn-warning:active, fieldset[disabled] .btn.btn-warning.active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-warning.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-warning.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple {\r\n  background-color: transparent;\r\n  color: #fbc02d;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-warning.btn-simple:hover, .btn.btn-warning.btn-simple:focus, .btn.btn-warning.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #fbc02d;\r\n}\r\n.btn.btn-danger,\r\n.navbar .navbar-nav > li > a.btn.btn-danger {\r\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\r\n}\r\n.btn.btn-danger, .btn.btn-danger:hover, .btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger.active, .btn.btn-danger:active:focus, .btn.btn-danger:active:hover, .btn.btn-danger.active:focus, .btn.btn-danger.active:hover, .open > .btn.btn-danger.dropdown-toggle, .open > .btn.btn-danger.dropdown-toggle:focus, .open > .btn.btn-danger.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:hover {\r\n  background-color: #f44336;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\r\n}\r\n.btn.btn-danger.disabled, .btn.btn-danger.disabled:hover, .btn.btn-danger.disabled:focus, .btn.btn-danger.disabled.focus, .btn.btn-danger.disabled:active, .btn.btn-danger.disabled.active, .btn.btn-danger:disabled, .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:focus, .btn.btn-danger:disabled.focus, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled.active, .btn.btn-danger[disabled], .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:focus, .btn.btn-danger[disabled].focus, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled].active, fieldset[disabled] .btn.btn-danger, fieldset[disabled] .btn.btn-danger:hover, fieldset[disabled] .btn.btn-danger:focus, fieldset[disabled] .btn.btn-danger.focus, fieldset[disabled] .btn.btn-danger:active, fieldset[disabled] .btn.btn-danger.active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-danger.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-danger.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple {\r\n  background-color: transparent;\r\n  color: #f44336;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-danger.btn-simple:hover, .btn.btn-danger.btn-simple:focus, .btn.btn-danger.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #f44336;\r\n}\r\n.btn.btn-upgrade,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade {\r\n  box-shadow: 0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12);\r\n}\r\n.btn.btn-upgrade, .btn.btn-upgrade:hover, .btn.btn-upgrade:focus, .btn.btn-upgrade:active, .btn.btn-upgrade.active, .btn.btn-upgrade:active:focus, .btn.btn-upgrade:active:hover, .btn.btn-upgrade.active:focus, .btn.btn-upgrade.active:hover, .open > .btn.btn-upgrade.dropdown-toggle, .open > .btn.btn-upgrade.dropdown-toggle:focus, .open > .btn.btn-upgrade.dropdown-toggle:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:active:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.active:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.active:hover, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.dropdown-toggle, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.dropdown-toggle:focus, .open >\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.dropdown-toggle:hover {\r\n  background-color: #e91e63;\r\n  color: #FFFFFF;\r\n}\r\n.btn.btn-upgrade:focus, .btn.btn-upgrade:active, .btn.btn-upgrade:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);\r\n}\r\n.btn.btn-upgrade.disabled, .btn.btn-upgrade.disabled:hover, .btn.btn-upgrade.disabled:focus, .btn.btn-upgrade.disabled.focus, .btn.btn-upgrade.disabled:active, .btn.btn-upgrade.disabled.active, .btn.btn-upgrade:disabled, .btn.btn-upgrade:disabled:hover, .btn.btn-upgrade:disabled:focus, .btn.btn-upgrade:disabled.focus, .btn.btn-upgrade:disabled:active, .btn.btn-upgrade:disabled.active, .btn.btn-upgrade[disabled], .btn.btn-upgrade[disabled]:hover, .btn.btn-upgrade[disabled]:focus, .btn.btn-upgrade[disabled].focus, .btn.btn-upgrade[disabled]:active, .btn.btn-upgrade[disabled].active, fieldset[disabled] .btn.btn-upgrade, fieldset[disabled] .btn.btn-upgrade:hover, fieldset[disabled] .btn.btn-upgrade:focus, fieldset[disabled] .btn.btn-upgrade.focus, fieldset[disabled] .btn.btn-upgrade:active, fieldset[disabled] .btn.btn-upgrade.active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled.focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:disabled.active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled],\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled]:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled]:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled].focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled]:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade[disabled].active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:hover, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.focus, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade:active, fieldset[disabled]\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.active {\r\n  box-shadow: none;\r\n}\r\n.btn.btn-upgrade.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.btn-simple {\r\n  background-color: transparent;\r\n  color: #e91e63;\r\n  box-shadow: none;\r\n}\r\n.btn.btn-upgrade.btn-simple:hover, .btn.btn-upgrade.btn-simple:focus, .btn.btn-upgrade.btn-simple:active,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.btn-simple:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.btn-simple:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-upgrade.btn-simple:active {\r\n  background-color: transparent;\r\n  color: #e91e63;\r\n}\r\n.btn.btn-white, .btn.btn-white:focus, .btn.btn-white:hover,\r\n.navbar .navbar-nav > li > a.btn.btn-white,\r\n.navbar .navbar-nav > li > a.btn.btn-white:focus,\r\n.navbar .navbar-nav > li > a.btn.btn-white:hover {\r\n  background-color: #FFFFFF;\r\n  color: #999999;\r\n}\r\n.btn.btn-white.btn-simple,\r\n.navbar .navbar-nav > li > a.btn.btn-white.btn-simple {\r\n  color: #FFFFFF;\r\n  background: transparent;\r\n  box-shadow: none;\r\n}\r\n.btn:focus, .btn:active, .btn:active:focus,\r\n.navbar .navbar-nav > li > a.btn:focus,\r\n.navbar .navbar-nav > li > a.btn:active,\r\n.navbar .navbar-nav > li > a.btn:active:focus {\r\n  outline: 0;\r\n}\r\n.btn.btn-round,\r\n.navbar .navbar-nav > li > a.btn.btn-round {\r\n  border-radius: 30px;\r\n}\r\n.btn:not(.btn-just-icon):not(.btn-fab) .fa,\r\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon):not(.btn-fab) .fa {\r\n  font-size: 18px;\r\n  margin-top: -2px;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n.btn.btn-fab,\r\n.navbar .navbar-nav > li > a.btn.btn-fab {\r\n  border-radius: 50%;\r\n  font-size: 24px;\r\n  height: 56px;\r\n  margin: auto;\r\n  min-width: 56px;\r\n  width: 56px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  position: relative;\r\n  line-height: normal;\r\n}\r\n.btn.btn-fab .ripple-container,\r\n.navbar .navbar-nav > li > a.btn.btn-fab .ripple-container {\r\n  border-radius: 50%;\r\n}\r\n.btn.btn-fab.btn-fab-mini, .btn-group-sm .btn.btn-fab,\r\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini, .btn-group-sm\r\n.navbar .navbar-nav > li > a.btn.btn-fab {\r\n  height: 40px;\r\n  min-width: 40px;\r\n  width: 40px;\r\n}\r\n.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm .btn.btn-fab.material-icons,\r\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm\r\n.navbar .navbar-nav > li > a.btn.btn-fab.material-icons {\r\n  top: -3.5px;\r\n  left: -3.5px;\r\n}\r\n.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm .btn.btn-fab .material-icons,\r\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm\r\n.navbar .navbar-nav > li > a.btn.btn-fab .material-icons {\r\n  font-size: 17px;\r\n}\r\n.btn.btn-fab i.material-icons,\r\n.navbar .navbar-nav > li > a.btn.btn-fab i.material-icons {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-12px, -12px);\r\n          transform: translate(-12px, -12px);\r\n  line-height: 24px;\r\n  width: 24px;\r\n  font-size: 24px;\r\n}\r\n.btn.btn-lg, .btn-group-lg .btn,\r\n.navbar .navbar-nav > li > a.btn.btn-lg, .btn-group-lg\r\n.navbar .navbar-nav > li > a.btn {\r\n  font-size: 14px;\r\n  padding: 18px 36px;\r\n}\r\n.btn.btn-sm, .btn-group-sm .btn,\r\n.navbar .navbar-nav > li > a.btn.btn-sm, .btn-group-sm\r\n.navbar .navbar-nav > li > a.btn {\r\n  padding: 5px 20px;\r\n  font-size: 11px;\r\n}\r\n.btn.btn-xs, .btn-group-xs .btn,\r\n.navbar .navbar-nav > li > a.btn.btn-xs, .btn-group-xs\r\n.navbar .navbar-nav > li > a.btn {\r\n  padding: 4px 15px;\r\n  font-size: 10px;\r\n}\r\n.btn.btn-just-icon,\r\n.navbar .navbar-nav > li > a.btn.btn-just-icon {\r\n  font-size: 18px;\r\n  padding: 10px 10px;\r\n  line-height: 1em;\r\n}\r\n.btn.btn-just-icon i,\r\n.navbar .navbar-nav > li > a.btn.btn-just-icon i {\r\n  width: 20px;\r\n}\r\n.btn.btn-just-icon.btn-lg,\r\n.navbar .navbar-nav > li > a.btn.btn-just-icon.btn-lg {\r\n  font-size: 22px;\r\n  padding: 13px 18px;\r\n}\r\n\r\n.btn .material-icons {\r\n  vertical-align: middle;\r\n  font-size: 17px;\r\n  top: -1px;\r\n  position: relative;\r\n}\r\n\r\n.navbar .navbar-nav > li > a.btn {\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n}\r\n.navbar .navbar-nav > li > a.btn.btn-fab {\r\n  margin: 5px 2px;\r\n}\r\n.navbar .navbar-nav > li > a:not(.btn) .material-icons {\r\n  margin-top: -3px;\r\n  top: 0px;\r\n  position: relative;\r\n  margin-right: 3px;\r\n}\r\n.navbar .navbar-nav > li > .profile-photo {\r\n  margin: 5px 2px;\r\n}\r\n\r\n.navbar-default:not(.navbar-transparent) .navbar-nav > li > a.btn.btn-white.btn-simple {\r\n  color: #555555;\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  margin: 10px 1px;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn, .btn-group.open > .dropdown-toggle.btn.btn-default,\r\n.btn-group-vertical.open > .dropdown-toggle.btn,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\r\n  background-color: #EEEEEE;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\r\n  background-color: #3f51b5;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\r\n  background-color: #9c27b0;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-success,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\r\n  background-color: #4caf50;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-info,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\r\n  background-color: #03a9f4;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\r\n  background-color: #fbc02d;\r\n}\r\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\r\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\r\n  background-color: #f44336;\r\n}\r\n.btn-group .dropdown-menu,\r\n.btn-group-vertical .dropdown-menu {\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.btn-group.btn-group-raised,\r\n.btn-group-vertical.btn-group-raised {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.btn-group .btn + .btn,\r\n.btn-group .btn,\r\n.btn-group .btn:active,\r\n.btn-group .btn-group,\r\n.btn-group-vertical .btn + .btn,\r\n.btn-group-vertical .btn,\r\n.btn-group-vertical .btn:active,\r\n.btn-group-vertical .btn-group {\r\n  margin: 0;\r\n}\r\n\r\n.close {\r\n  font-size: inherit;\r\n  color: #FFFFFF;\r\n  opacity: .9;\r\n  text-shadow: none;\r\n}\r\n.close:hover, .close:focus {\r\n  opacity: 1;\r\n  color: #FFFFFF;\r\n}\r\n.close i {\r\n  font-size: 20px;\r\n}\r\n\r\n.checkbox label {\r\n  cursor: pointer;\r\n  padding-left: 0;\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .checkbox label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\r\n  color: rgba(0,0,0, .54);\r\n}\r\nfieldset[disabled] .form-group.is-focused .checkbox label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.checkbox input[type=checkbox] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  margin: 0;\r\n  z-index: -1;\r\n  width: 0;\r\n  height: 0;\r\n  overflow: hidden;\r\n  left: 0;\r\n  pointer-events: none;\r\n}\r\n.checkbox .checkbox-material {\r\n  vertical-align: middle;\r\n  position: relative;\r\n  top: 1px;\r\n  padding-right: 5px;\r\n  display: inline-block;\r\n}\r\n.checkbox .checkbox-material:before {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  content: \"\";\r\n  background-color: rgba(0, 0, 0, 0.84);\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 100%;\r\n  z-index: 1;\r\n  opacity: 0;\r\n  margin: 0;\r\n  top: 0;\r\n  -webkit-transform: scale3d(2.3,2.3,1);\r\n  transform: scale3d(2.3,2.3,1);\r\n}\r\n.checkbox .checkbox-material .check {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid rgba(0,0,0, .54);\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  border-radius: 3px;\r\n}\r\n.checkbox .checkbox-material .check:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  display: block;\r\n  margin-top: -3px;\r\n  margin-left: 7px;\r\n  width: 0;\r\n  height: 0;\r\n  background: red;\r\n  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\r\n  -webkit-animation: checkbox-off 0.3s forwards;\r\n  animation: checkbox-off 0.3s forwards;\r\n}\r\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\r\n  opacity: 0.2;\r\n}\r\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\r\n  background: #9c27b0;\r\n}\r\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\r\n  color: #FFFFFF;\r\n  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\r\n  -webkit-animation: checkbox-on 0.3s forwards;\r\n  animation: checkbox-on 0.3s forwards;\r\n}\r\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\r\n  -webkit-animation: rippleOn 500ms;\r\n  animation: rippleOn 500ms;\r\n}\r\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\r\n  -webkit-animation: rippleOn 500ms forwards;\r\n  animation: rippleOn 500ms forwards;\r\n}\r\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\r\n  -webkit-animation: rippleOff 500ms;\r\n  animation: rippleOff 500ms;\r\n}\r\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\r\n  -webkit-animation: rippleOff 500ms;\r\n  animation: rippleOff 500ms;\r\n}\r\nfieldset[disabled] .checkbox, fieldset[disabled] .checkbox input[type=checkbox],\r\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,\r\n.checkbox input[type=checkbox][disabled] + .circle {\r\n  opacity: 0.5;\r\n}\r\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {\r\n  border-color: #000000;\r\n  opacity: .26;\r\n}\r\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\r\n  background-color: rgba(0,0,0, 0.87);\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n@-webkit-keyframes checkbox-on {\r\n  0% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\r\n  }\r\n  50% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\r\n  }\r\n}\r\n\r\n@keyframes checkbox-on {\r\n  0% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\r\n  }\r\n  50% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\r\n  }\r\n}\r\n@-webkit-keyframes rippleOn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes rippleOn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes rippleOff {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes rippleOff {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n.togglebutton {\r\n  vertical-align: middle;\r\n}\r\n.togglebutton, .togglebutton label, .togglebutton input, .togglebutton .toggle {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.togglebutton label {\r\n  cursor: pointer;\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .togglebutton label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .togglebutton label:hover, .form-group.is-focused .togglebutton label:focus {\r\n  color: rgba(0,0,0, .54);\r\n}\r\nfieldset[disabled] .form-group.is-focused .togglebutton label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.togglebutton label input[type=checkbox] {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.togglebutton label .toggle {\r\n  text-align: left;\r\n  margin-left: 5px;\r\n}\r\n.togglebutton label .toggle,\r\n.togglebutton label input[type=checkbox][disabled] + .toggle {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 15px;\r\n  background-color: rgba(80, 80, 80, 0.7);\r\n  border-radius: 15px;\r\n  margin-right: 15px;\r\n  -webkit-transition:background 0.3s ease;\r\n  transition: background 0.3s ease;\r\n  vertical-align: middle;\r\n}\r\n.togglebutton label .toggle:after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #FFFFFF;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\r\n  left: -5px;\r\n  top: -3px;\r\n  border: 1px solid rgba(0,0,0, .54);\r\n  -webkit-transition:left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\r\n  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\r\n}\r\n.togglebutton label input[type=checkbox][disabled] + .toggle:after, .togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\r\n  background-color: #BDBDBD;\r\n}\r\n.togglebutton label input[type=checkbox] + .toggle:active:after, .togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\r\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\r\n}\r\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\r\n  left: 15px;\r\n}\r\n.togglebutton label input[type=checkbox]:checked + .toggle {\r\n  background-color: rgba(156, 39, 176, 0.7);\r\n}\r\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\r\n  border-color: #9c27b0;\r\n}\r\n.togglebutton label input[type=checkbox]:checked + .toggle:active:after {\r\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1);\r\n}\r\n\r\n.radio label {\r\n  cursor: pointer;\r\n  padding-left: 35px;\r\n  position: relative;\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .radio label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.form-group.is-focused .radio label:hover, .form-group.is-focused .radio label:focus {\r\n  color: rgba(0,0,0, .54);\r\n}\r\nfieldset[disabled] .form-group.is-focused .radio label {\r\n  color: rgba(0,0,0, 0.26);\r\n}\r\n.radio label span {\r\n  display: block;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 2px;\r\n  -webkit-transition-duration: 0.2s;\r\n          transition-duration: 0.2s;\r\n}\r\n.radio label .circle {\r\n  border: 1px solid rgba(0,0,0, .54);\r\n  height: 15px;\r\n  width: 15px;\r\n  border-radius: 100%;\r\n}\r\n.radio label .check {\r\n  height: 15px;\r\n  width: 15px;\r\n  border-radius: 100%;\r\n  background-color: #9c27b0;\r\n  -webkit-transform: scale3d(0,0,0);\r\n  transform: scale3d(0,0,0);\r\n}\r\n.radio label .check:after {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  background-color: rgba(0,0,0, 0.87);\r\n  left: -18px;\r\n  top: -18px;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 100%;\r\n  z-index: 1;\r\n  opacity: 0;\r\n  margin: 0;\r\n  -webkit-transform: scale3d(1.5,1.5,1);\r\n  transform: scale3d(1.5,1.5,1);\r\n}\r\n.radio label input[type=radio]:not(:checked) ~ .check:after {\r\n  -webkit-animation: rippleOff 500ms;\r\n  animation: rippleOff 500ms;\r\n}\r\n.radio label input[type=radio]:checked ~ .check:after {\r\n  -webkit-animation: rippleOff 500ms;\r\n  animation: rippleOff 500ms;\r\n}\r\n.radio input[type=radio] {\r\n  opacity: 0;\r\n  height: 0;\r\n  width: 0;\r\n  overflow: hidden;\r\n}\r\n.radio input[type=radio]:checked ~ .check, .radio input[type=radio]:checked ~ .circle {\r\n  opacity: 1;\r\n}\r\n.radio input[type=radio]:checked ~ .check {\r\n  background-color: #9c27b0;\r\n}\r\n.radio input[type=radio]:checked ~ .circle {\r\n  border-color: #9c27b0;\r\n}\r\n.radio input[type=radio]:checked ~ .check {\r\n  -webkit-transform: scale3d(0.65, 0.65, 1);\r\n  transform: scale3d(0.65, 0.65, 1);\r\n}\r\n.radio input[type=radio][disabled] ~ .check, .radio input[type=radio][disabled] ~ .circle {\r\n  opacity: 0.26;\r\n}\r\n.radio input[type=radio][disabled] ~ .check {\r\n  background-color: #000000;\r\n}\r\n.radio input[type=radio][disabled] ~ .circle {\r\n  border-color: #000000;\r\n}\r\n\r\n@keyframes rippleOn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes rippleOff {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\nlegend {\r\n  margin-bottom: 20px;\r\n  font-size: 21px;\r\n}\r\n\r\noutput {\r\n  padding-top: 8px;\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n}\r\n\r\n.form-control {\r\n  height: 36px;\r\n  padding: 7px 0;\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  input[type=\"date\"].form-control,\r\n  input[type=\"time\"].form-control,\r\n  input[type=\"datetime-local\"].form-control,\r\n  input[type=\"month\"].form-control {\r\n    line-height: 36px;\r\n  }\r\n  input[type=\"date\"].input-sm, .input-group-sm input[type=\"date\"],\r\n  input[type=\"time\"].input-sm, .input-group-sm\r\n  input[type=\"time\"],\r\n  input[type=\"datetime-local\"].input-sm, .input-group-sm\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"month\"].input-sm, .input-group-sm\r\n  input[type=\"month\"] {\r\n    line-height: 24px;\r\n  }\r\n  input[type=\"date\"].input-lg, .input-group-lg input[type=\"date\"],\r\n  input[type=\"time\"].input-lg, .input-group-lg\r\n  input[type=\"time\"],\r\n  input[type=\"datetime-local\"].input-lg, .input-group-lg\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"month\"].input-lg, .input-group-lg\r\n  input[type=\"month\"] {\r\n    line-height: 44px;\r\n  }\r\n}\r\n.radio label,\r\n.checkbox label {\r\n  min-height: 20px;\r\n}\r\n\r\n.form-control-static {\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  min-height: 34px;\r\n}\r\n\r\n.input-sm .input-sm {\r\n  height: 24px;\r\n  padding: 3px 0;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  border-radius: 0;\r\n}\r\n.input-sm select.input-sm {\r\n  height: 24px;\r\n  line-height: 24px;\r\n}\r\n.input-sm textarea.input-sm,\r\n.input-sm select[multiple].input-sm {\r\n  height: auto;\r\n}\r\n\r\n.form-group-sm .form-control {\r\n  height: 24px;\r\n  padding: 3px 0;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n.form-group-sm select.form-control {\r\n  height: 24px;\r\n  line-height: 24px;\r\n}\r\n.form-group-sm textarea.form-control,\r\n.form-group-sm select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.form-group-sm .form-control-static {\r\n  height: 24px;\r\n  min-height: 31px;\r\n  padding: 4px 0;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.input-lg .input-lg {\r\n  height: 44px;\r\n  padding: 9px 0;\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n  border-radius: 0;\r\n}\r\n.input-lg select.input-lg {\r\n  height: 44px;\r\n  line-height: 44px;\r\n}\r\n.input-lg textarea.input-lg,\r\n.input-lg select[multiple].input-lg {\r\n  height: auto;\r\n}\r\n\r\n.form-group-lg .form-control {\r\n  height: 44px;\r\n  padding: 9px 0;\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n}\r\n.form-group-lg select.form-control {\r\n  height: 44px;\r\n  line-height: 44px;\r\n}\r\n.form-group-lg textarea.form-control,\r\n.form-group-lg select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.form-group-lg .form-control-static {\r\n  height: 44px;\r\n  min-height: 38px;\r\n  padding: 10px 0;\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n}\r\n\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox,\r\n.form-horizontal .radio-inline,\r\n.form-horizontal .checkbox-inline {\r\n  padding-top: 8px;\r\n}\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox {\r\n  min-height: 28px;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .control-label {\r\n    padding-top: 8px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .form-group-lg .control-label {\r\n    padding-top: 13.0px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .form-group-sm .control-label {\r\n    padding-top: 4px;\r\n    font-size: 11px;\r\n  }\r\n}\r\n\r\n.label {\r\n  border-radius: 2px;\r\n}\r\n.label, .label.label-default {\r\n  background-color: #9e9e9e;\r\n}\r\n.label.label-inverse {\r\n  background-color: #3f51b5;\r\n}\r\n.label.label-primary {\r\n  background-color: #9c27b0;\r\n}\r\n.label.label-success {\r\n  background-color: #4caf50;\r\n}\r\n.label.label-info {\r\n  background-color: #03a9f4;\r\n}\r\n.label.label-warning {\r\n  background-color: #fbc02d;\r\n}\r\n.label.label-danger {\r\n  background-color: #f44336;\r\n}\r\n\r\n.form-control,\r\n.form-group .form-control {\r\n  border: 0;\r\n  background-image: -webkit-linear-gradient(#9c27b0, #9c27b0), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 0 2px, 100% 1px;\r\n  background-repeat: no-repeat;\r\n  background-position: center bottom, center calc(100% - 1px);\r\n  background-color: transparent;\r\n  -webkit-transition:background 0s ease-out;\r\n  transition: background 0s ease-out;\r\n  float: none;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  font-weight: 400;\r\n}\r\n.form-control::-moz-placeholder,\r\n.form-group .form-control::-moz-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder,\r\n.form-group .form-control:-ms-input-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder,\r\n.form-group .form-control::-webkit-input-placeholder {\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,\r\n.form-group .form-control[readonly],\r\n.form-group .form-control[disabled], fieldset[disabled]\r\n.form-group .form-control {\r\n  background-color: transparent;\r\n}\r\n.form-control[disabled], fieldset[disabled] .form-control,\r\n.form-group .form-control[disabled], fieldset[disabled]\r\n.form-group .form-control {\r\n  background-image: none;\r\n  border-bottom: 1px dotted #D2D2D2;\r\n}\r\n\r\n.form-group {\r\n  position: relative;\r\n}\r\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  -webkit-transition:0.3s ease all;\r\n  transition: 0.3s ease all;\r\n}\r\n.form-group.label-floating label.control-label {\r\n  will-change: left, top, contents;\r\n}\r\n.form-group.label-placeholder:not(.is-empty) label.control-label {\r\n  display: none;\r\n}\r\n.form-group .help-block {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.form-group.is-focused .form-control {\r\n  outline: none;\r\n  background-image: -webkit-linear-gradient(#9c27b0, #9c27b0), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 100% 2px, 100% 1px;\r\n  box-shadow: none;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n}\r\n.form-group.is-focused .form-control .material-input:after {\r\n  background-color: #9c27b0;\r\n}\r\n.form-group.is-focused label,\r\n.form-group.is-focused label.control-label {\r\n  color: #9c27b0;\r\n}\r\n.form-group.is-focused.label-placeholder label,\r\n.form-group.is-focused.label-placeholder label.control-label {\r\n  color: #AAAAAA;\r\n}\r\n.form-group.is-focused .help-block {\r\n  display: block;\r\n}\r\n.form-group.has-warning .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-warning.is-focused .form-control {\r\n  background-image: -webkit-linear-gradient(#fbc02d, #fbc02d), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#fbc02d, #fbc02d), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-warning label.control-label,\r\n.form-group.has-warning .help-block {\r\n  color: #fbc02d;\r\n}\r\n.form-group.has-error .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-error.is-focused .form-control {\r\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-error label.control-label,\r\n.form-group.has-error .help-block {\r\n  color: #f44336;\r\n}\r\n.form-group.has-success .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-success.is-focused .form-control {\r\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-success label.control-label,\r\n.form-group.has-success .help-block {\r\n  color: #4caf50;\r\n}\r\n.form-group.has-info .form-control {\r\n  box-shadow: none;\r\n}\r\n.form-group.has-info.is-focused .form-control {\r\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-info label.control-label,\r\n.form-group.has-info .help-block {\r\n  color: #03a9f4;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group textarea ~ .form-control-highlight {\r\n  margin-top: -11px;\r\n}\r\n.form-group select {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n.form-group select ~ .material-input:after {\r\n  display: none;\r\n}\r\n\r\n.form-control {\r\n  margin-bottom: 7px;\r\n}\r\n.form-control::-moz-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n\r\n.checkbox label,\r\n.radio label,\r\nlabel {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n\r\nlabel.control-label {\r\n  font-size: 11px;\r\n  line-height: 1.07143;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n\r\n.help-block {\r\n  margin-top: 0;\r\n  font-size: 11px;\r\n}\r\n\r\n.form-group {\r\n  padding-bottom: 7px;\r\n  margin: 27px 0 0 0;\r\n}\r\n.form-group .form-control {\r\n  margin-bottom: 7px;\r\n}\r\n.form-group .form-control::-moz-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group .form-control:-ms-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group .form-control::-webkit-input-placeholder {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group .checkbox label,\r\n.form-group .radio label,\r\n.form-group label {\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group label.control-label {\r\n  font-size: 11px;\r\n  line-height: 1.07143;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group .help-block {\r\n  margin-top: 0;\r\n  font-size: 11px;\r\n}\r\n.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {\r\n  top: -7px;\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n}\r\n.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {\r\n  top: -28px;\r\n  left: 0;\r\n  font-size: 11px;\r\n  line-height: 1.07143;\r\n}\r\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -28px;\r\n  left: 0;\r\n  font-size: 11px;\r\n  line-height: 1.07143;\r\n}\r\n\r\n.form-group.form-group-sm {\r\n  padding-bottom: 3px;\r\n  margin: 21px 0 0 0;\r\n}\r\n.form-group.form-group-sm .form-control {\r\n  margin-bottom: 3px;\r\n}\r\n.form-group.form-group-sm .form-control::-moz-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .checkbox label,\r\n.form-group.form-group-sm .radio label,\r\n.form-group.form-group-sm label {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm label.control-label {\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group.form-group-sm .help-block {\r\n  margin-top: 0;\r\n  font-size: 9px;\r\n}\r\n.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {\r\n  top: -11px;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\r\n  top: -25px;\r\n  left: 0;\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n}\r\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -25px;\r\n  left: 0;\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n}\r\n\r\n.form-group.form-group-lg {\r\n  padding-bottom: 9px;\r\n  margin: 30px 0 0 0;\r\n}\r\n.form-group.form-group-lg .form-control {\r\n  margin-bottom: 9px;\r\n}\r\n.form-group.form-group-lg .form-control::-moz-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .checkbox label,\r\n.form-group.form-group-lg .radio label,\r\n.form-group.form-group-lg label {\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg label.control-label {\r\n  font-size: 14px;\r\n  line-height: 1.0;\r\n  color: #AAAAAA;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group.form-group-lg .help-block {\r\n  margin-top: 0;\r\n  font-size: 14px;\r\n}\r\n.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {\r\n  top: -5px;\r\n  font-size: 18px;\r\n  line-height: 1.33333;\r\n}\r\n.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\r\n  top: -32px;\r\n  left: 0;\r\n  font-size: 14px;\r\n  line-height: 1.0;\r\n}\r\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -32px;\r\n  left: 0;\r\n  font-size: 14px;\r\n  line-height: 1.0;\r\n}\r\n\r\nselect.form-control {\r\n  border: 0;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n}\r\n.form-group.is-focused select.form-control {\r\n  box-shadow: none;\r\n  border-color: #D2D2D2;\r\n}\r\nselect.form-control[multiple], .form-group.is-focused select.form-control[multiple] {\r\n  height: 85px;\r\n}\r\n\r\n.input-group-btn .btn {\r\n  margin: 0 0 7px 0;\r\n}\r\n\r\n.form-group.form-group-sm .input-group-btn .btn {\r\n  margin: 0 0 3px 0;\r\n}\r\n.form-group.form-group-lg .input-group-btn .btn {\r\n  margin: 0 0 9px 0;\r\n}\r\n\r\n.input-group .input-group-btn {\r\n  padding: 0 12px;\r\n}\r\n.input-group .input-group-addon {\r\n  border: 0;\r\n  background: transparent;\r\n  padding: 12px 15px 0px;\r\n}\r\n\r\n.form-group input[type=file] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 100;\r\n}\r\n\r\n.form-control-feedback {\r\n  opacity: 0;\r\n}\r\n.has-success .form-control-feedback {\r\n  color: #4caf50;\r\n  opacity: 1;\r\n}\r\n.has-error .form-control-feedback {\r\n  color: #f44336;\r\n  opacity: 1;\r\n}\r\n\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n  border: 0;\r\n  border-radius: 30px !important;\r\n  -webkit-transition:all .3s;\r\n  transition: all .3s;\r\n  padding: 0px 11px;\r\n  margin: 0 3px;\r\n  min-width: 30px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  color: #999999;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  background: transparent;\r\n}\r\n.pagination > li > a:hover, .pagination > li > a:focus,\r\n.pagination > li > span:hover,\r\n.pagination > li > span:focus {\r\n  color: #999999;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > span {\r\n  color: #999999;\r\n}\r\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n  background-color: #9c27b0;\r\n  border-color: #9c27b0;\r\n  color: #FFFFFF;\r\n  box-shadow: 0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2);\r\n}\r\n.pagination.pagination-info > .active > a, .pagination.pagination-info > .active > a:focus, .pagination.pagination-info > .active > a:hover,\r\n.pagination.pagination-info > .active > span,\r\n.pagination.pagination-info > .active > span:focus,\r\n.pagination.pagination-info > .active > span:hover {\r\n  background-color: #03a9f4;\r\n  border-color: #03a9f4;\r\n  box-shadow: 0 4px 5px 0 rgba(3, 169, 244, 0.14), 0 1px 10px 0 rgba(3, 169, 244, 0.12), 0 2px 4px -1px rgba(3, 169, 244, 0.2);\r\n}\r\n.pagination.pagination-success > .active > a, .pagination.pagination-success > .active > a:focus, .pagination.pagination-success > .active > a:hover,\r\n.pagination.pagination-success > .active > span,\r\n.pagination.pagination-success > .active > span:focus,\r\n.pagination.pagination-success > .active > span:hover {\r\n  background-color: #4caf50;\r\n  border-color: #4caf50;\r\n  box-shadow: 0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2);\r\n}\r\n.pagination.pagination-warning > .active > a, .pagination.pagination-warning > .active > a:focus, .pagination.pagination-warning > .active > a:hover,\r\n.pagination.pagination-warning > .active > span,\r\n.pagination.pagination-warning > .active > span:focus,\r\n.pagination.pagination-warning > .active > span:hover {\r\n  background-color: #fbc02d;\r\n  border-color: #fbc02d;\r\n  box-shadow: 0 4px 5px 0 rgba(251, 192, 45, 0.14), 0 1px 10px 0 rgba(251, 192, 45, 0.12), 0 2px 4px -1px rgba(251, 192, 45, 0.2);\r\n}\r\n.pagination.pagination-danger > .active > a, .pagination.pagination-danger > .active > a:focus, .pagination.pagination-danger > .active > a:hover,\r\n.pagination.pagination-danger > .active > span,\r\n.pagination.pagination-danger > .active > span:focus,\r\n.pagination.pagination-danger > .active > span:hover {\r\n  background-color: #f44336;\r\n  border-color: #f44336;\r\n  box-shadow: 0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2);\r\n}\r\n\r\n.label {\r\n  border-radius: 10px;\r\n  padding: 5px 12px;\r\n  text-transform: uppercase;\r\n  font-size: 10px;\r\n}\r\n.label.label-default {\r\n  background-color: #999999;\r\n}\r\n\r\n.nav-pills > li > a {\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  min-width: 100px;\r\n  text-align: center;\r\n  color: #555555;\r\n  -webkit-transition:all .3s;\r\n  transition: all .3s;\r\n}\r\n.nav-pills > li > a:hover {\r\n  background-color: rgba(200, 200, 200, 0.2);\r\n}\r\n.nav-pills > li i {\r\n  display: block;\r\n  font-size: 30px;\r\n  padding: 15px 0;\r\n}\r\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\r\n  background-color: #9c27b0;\r\n  color: #FFFFFF;\r\n  box-shadow: 0 16px 26px -10px rgba(156, 39, 176, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n.nav-pills.nav-pills-info > li.active > a, .nav-pills.nav-pills-info > li.active > a:focus, .nav-pills.nav-pills-info > li.active > a:hover {\r\n  background-color: #03a9f4;\r\n  box-shadow: 0 16px 26px -10px rgba(3, 169, 244, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 169, 244, 0.2);\r\n}\r\n.nav-pills.nav-pills-success > li.active > a, .nav-pills.nav-pills-success > li.active > a:focus, .nav-pills.nav-pills-success > li.active > a:hover {\r\n  background-color: #4caf50;\r\n  box-shadow: 0 16px 26px -10px rgba(76, 175, 80, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n.nav-pills.nav-pills-warning > li.active > a, .nav-pills.nav-pills-warning > li.active > a:focus, .nav-pills.nav-pills-warning > li.active > a:hover {\r\n  background-color: #fbc02d;\r\n  box-shadow: 0 16px 26px -10px rgba(251, 192, 45, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(251, 192, 45, 0.2);\r\n}\r\n.nav-pills.nav-pills-danger > li.active > a, .nav-pills.nav-pills-danger > li.active > a:focus, .nav-pills.nav-pills-danger > li.active > a:hover {\r\n  background-color: #f44336;\r\n  box-shadow: 0 16px 26px -10px rgba(244, 67, 54, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\r\n}\r\n\r\n.tab-space {\r\n  padding: 20px 0 50px 0px;\r\n}\r\n\r\nfooter {\r\n  padding: 15px 0;\r\n}\r\nfooter ul {\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\nfooter ul li {\r\n  display: inline-block;\r\n}\r\nfooter ul li a {\r\n  color: inherit;\r\n  padding: 15px;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  border-radius: 3px;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n}\r\nfooter ul li a:hover {\r\n  text-decoration: none;\r\n}\r\nfooter .copyright {\r\n  padding: 15px 0;\r\n}\r\nfooter .copyright .material-icons {\r\n  font-size: 18px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\nlegend {\r\n  border-bottom: 0;\r\n}\r\n\r\n.navbar {\r\n  border: 0;\r\n  border-radius: 3px;\r\n  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n  padding: 10px 0;\r\n}\r\n.navbar .navbar-brand {\r\n  position: relative;\r\n  height: 50px;\r\n  line-height: 30px;\r\n  color: inherit;\r\n  padding: 10px 15px;\r\n}\r\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\r\n  color: inherit;\r\n  background-color: transparent;\r\n}\r\n.navbar .navbar-text {\r\n  color: inherit;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.navbar .navbar-nav > li > a {\r\n  color: inherit;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  border-radius: 3px;\r\n}\r\n.navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus {\r\n  color: inherit;\r\n  background-color: transparent;\r\n}\r\n.navbar .navbar-nav > li > a .material-icons,\r\n.navbar .navbar-nav > li > a .fa {\r\n  font-size: 20px;\r\n  max-width: 20px;\r\n}\r\n.navbar .navbar-nav > li > a:not(.btn-just-icon) .fa {\r\n  position: relative;\r\n  top: 2px;\r\n  margin-top: -4px;\r\n  margin-right: 4px;\r\n}\r\n.navbar .navbar-nav > li > .dropdown-menu {\r\n  margin-top: -20px;\r\n}\r\n.navbar .navbar-nav > li.open > .dropdown-menu {\r\n  margin-top: 0;\r\n}\r\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > .active > a:hover, .navbar .navbar-nav > .active > a:focus {\r\n  color: inherit;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.navbar .navbar-nav > .disabled > a, .navbar .navbar-nav > .disabled > a:hover, .navbar .navbar-nav > .disabled > a:focus {\r\n  color: inherit;\r\n  background-color: transparent;\r\n  opacity: 0.9;\r\n}\r\n.navbar .navbar-toggle {\r\n  border: 0;\r\n}\r\n.navbar .navbar-toggle:hover, .navbar .navbar-toggle:focus {\r\n  background-color: transparent;\r\n}\r\n.navbar .navbar-toggle .icon-bar {\r\n  background-color: inherit;\r\n  border: 1px solid;\r\n}\r\n.navbar .navbar-default .navbar-toggle,\r\n.navbar .navbar-inverse .navbar-toggle {\r\n  border-color: transparent;\r\n}\r\n.navbar .navbar-collapse,\r\n.navbar .navbar-form {\r\n  border-top: none;\r\n  box-shadow: none;\r\n}\r\n.navbar .navbar-nav > .open > a, .navbar .navbar-nav > .open > a:hover, .navbar .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n  color: inherit;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar .navbar-nav .navbar-text {\r\n    color: inherit;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\r\n    border: 0;\r\n    color: inherit;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu .divider {\r\n    border-bottom: 1px solid;\r\n    opacity: 0.08;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\r\n    color: inherit;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover, .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n  }\r\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.navbar.navbar-default .logo-container .brand {\r\n  color: #555555;\r\n}\r\n.navbar .navbar-link {\r\n  color: inherit;\r\n}\r\n.navbar .navbar-link:hover {\r\n  color: inherit;\r\n}\r\n.navbar .btn {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.navbar .btn-link {\r\n  color: inherit;\r\n}\r\n.navbar .btn-link:hover, .navbar .btn-link:focus {\r\n  color: inherit;\r\n}\r\n.navbar .btn-link[disabled]:hover, .navbar .btn-link[disabled]:focus, fieldset[disabled] .navbar .btn-link:hover, fieldset[disabled] .navbar .btn-link:focus {\r\n  color: inherit;\r\n}\r\n.navbar .navbar-form {\r\n  margin: 4px 0 0;\r\n}\r\n.navbar .navbar-form .form-group {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.navbar .navbar-form .form-group .material-input:before, .navbar .navbar-form .form-group.is-focused .material-input:after {\r\n  background-color: inherit;\r\n}\r\n.navbar .navbar-form .form-group .form-control,\r\n.navbar .navbar-form .form-control {\r\n  border-color: inherit;\r\n  color: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 28px;\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n}\r\n.navbar, .navbar.navbar-default {\r\n  background-color: #9c27b0;\r\n  color: #ffffff;\r\n}\r\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar .navbar-form input.form-control::-moz-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar .navbar-form input.form-control:-ms-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar .navbar-form input.form-control::-webkit-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar .dropdown-menu, .navbar.navbar-default .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar .dropdown-menu li > a:hover, .navbar .dropdown-menu li > a:focus, .navbar.navbar-default .dropdown-menu li > a:hover, .navbar.navbar-default .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #9c27b0;\r\n}\r\n.navbar .dropdown-menu .active > a, .navbar.navbar-default .dropdown-menu .active > a {\r\n  background-color: #9c27b0;\r\n  color: #ffffff;\r\n}\r\n.navbar .dropdown-menu .active > a:hover, .navbar .dropdown-menu .active > a:focus, .navbar.navbar-default .dropdown-menu .active > a:hover, .navbar.navbar-default .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-inverse {\r\n  background-color: #3f51b5;\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-inverse .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-inverse .dropdown-menu li > a:hover, .navbar.navbar-inverse .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #3f51b5;\r\n}\r\n.navbar.navbar-inverse .dropdown-menu .active > a {\r\n  background-color: #3f51b5;\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-inverse .dropdown-menu .active > a:hover, .navbar.navbar-inverse .dropdown-menu .active > a:focus {\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.navbar.navbar-primary {\r\n  background-color: #9c27b0;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-primary .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-primary .dropdown-menu li > a:hover, .navbar.navbar-primary .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #9c27b0;\r\n}\r\n.navbar.navbar-primary .dropdown-menu .active > a {\r\n  background-color: #9c27b0;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-primary .dropdown-menu .active > a:hover, .navbar.navbar-primary .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success {\r\n  background-color: #4caf50;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-success .dropdown-menu li > a:hover, .navbar.navbar-success .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #4caf50;\r\n}\r\n.navbar.navbar-success .dropdown-menu .active > a {\r\n  background-color: #4caf50;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-success .dropdown-menu .active > a:hover, .navbar.navbar-success .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info {\r\n  background-color: #03a9f4;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-info .dropdown-menu li > a:hover, .navbar.navbar-info .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #03a9f4;\r\n}\r\n.navbar.navbar-info .dropdown-menu .active > a {\r\n  background-color: #03a9f4;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-info .dropdown-menu .active > a:hover, .navbar.navbar-info .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning {\r\n  background-color: #fbc02d;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-warning .dropdown-menu li > a:hover, .navbar.navbar-warning .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #fbc02d;\r\n}\r\n.navbar.navbar-warning .dropdown-menu .active > a {\r\n  background-color: #fbc02d;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-warning .dropdown-menu .active > a:hover, .navbar.navbar-warning .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger {\r\n  background-color: #f44336;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\r\n.navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\r\n.navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\r\n.navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger .dropdown-menu {\r\n  border-radius: 3px !important;\r\n}\r\n.navbar.navbar-danger .dropdown-menu li > a:hover, .navbar.navbar-danger .dropdown-menu li > a:focus {\r\n  color: #FFFFFF;\r\n  background-color: #f44336;\r\n}\r\n.navbar.navbar-danger .dropdown-menu .active > a {\r\n  background-color: #f44336;\r\n  color: #ffffff;\r\n}\r\n.navbar.navbar-danger .dropdown-menu .active > a:hover, .navbar.navbar-danger .dropdown-menu .active > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-inverse {\r\n  background-color: #3f51b5;\r\n}\r\n.navbar.navbar-transparent {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n  color: #fff;\r\n  padding-top: 25px;\r\n}\r\n.navbar.navbar-transparent .logo-container .brand {\r\n  color: #FFFFFF;\r\n}\r\n.navbar-fixed-top {\r\n  border-radius: 0;\r\n}\r\n@media (max-width: 1199px) {\r\n  .navbar {\r\n    /*\r\n        .navbar-form {\r\n          margin-top: 10px;\r\n        }\r\n    */\r\n  }\r\n  .navbar .navbar-brand {\r\n    height: 50px;\r\n    padding: 10px 15px;\r\n  }\r\n  .navbar .navbar-nav > li > a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n  }\r\n}\r\n.navbar .alert {\r\n  border-radius: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 85px;\r\n  width: 100%;\r\n  z-index: 3;\r\n  -webkit-transition:all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.dropdown-menu {\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n}\r\n.dropdown-menu .divider {\r\n  background-color: rgba(0, 0, 0, 0.12);\r\n}\r\n.dropdown-menu li > a {\r\n  font-size: 13px;\r\n  padding: 10px 20px;\r\n  margin: 0 5px;\r\n  border-radius: 2px;\r\n  -webkit-transition: all 150ms linear;\r\n  transition: all 150ms linear;\r\n}\r\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus {\r\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n}\r\n.dropdown-menu li {\r\n  position: relative;\r\n}\r\n.dropdown-menu li a:hover,\r\n.dropdown-menu li a:focus,\r\n.dropdown-menu li a:active {\r\n  background-color: #9c27b0;\r\n  color: #FFFFFF;\r\n}\r\n.dropdown-menu .divider {\r\n  margin: 5px 0;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .dropdown .dropdown-menu {\r\n    -webkit-transition: all 150ms linear;\r\n    transition: all 150ms linear;\r\n    margin-top: -20px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    display: block;\r\n  }\r\n  .dropdown.open .dropdown-menu {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    margin-top: 1px;\r\n  }\r\n}\r\n.info {\r\n  max-width: 360px;\r\n  margin: 0 auto;\r\n  padding: 70px 0 30px;\r\n}\r\n.info .icon {\r\n  color: #999999;\r\n}\r\n.info .icon > i {\r\n  font-size: 4.4em;\r\n}\r\n.info .info-title {\r\n  color: #3C4858;\r\n  margin: 30px 0 15px;\r\n}\r\n.info p {\r\n  color: #999999;\r\n}\r\n\r\n.icon.icon-primary {\r\n  color: #9c27b0;\r\n}\r\n.icon.icon-info {\r\n  color: #03a9f4;\r\n}\r\n.icon.icon-success {\r\n  color: #4caf50;\r\n}\r\n.icon.icon-warning {\r\n  color: #fbc02d;\r\n}\r\n.icon.icon-danger {\r\n  color: #f44336;\r\n}\r\n\r\n.alert {\r\n  border: 0;\r\n  border-radius: 0;\r\n  padding: 20px 15px;\r\n  line-height: 20px;\r\n}\r\n.alert b {\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n}\r\n.alert, .alert.alert-default {\r\n  background-color: white;\r\n  color: #ffffff;\r\n}\r\n.alert a, .alert .alert-link, .alert.alert-default a, .alert.alert-default .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert.alert-inverse {\r\n  background-color: #4558be;\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.alert.alert-inverse a, .alert.alert-inverse .alert-link {\r\n  color: contrast-color(#3f51b5, #000000, #ffffff);\r\n}\r\n.alert.alert-primary {\r\n  background-color: #a72abd;\r\n  color: #ffffff;\r\n}\r\n.alert.alert-primary a, .alert.alert-primary .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert.alert-success {\r\n  background-color: #55b559;\r\n  color: #ffffff;\r\n}\r\n.alert.alert-success a, .alert.alert-success .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert.alert-info {\r\n  background-color: #0ab1fc;\r\n  color: #ffffff;\r\n}\r\n.alert.alert-info a, .alert.alert-info .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert.alert-warning {\r\n  background-color: #fbc53c;\r\n  color: #ffffff;\r\n}\r\n.alert.alert-warning a, .alert.alert-warning .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert.alert-danger {\r\n  background-color: #f55145;\r\n  color: #ffffff;\r\n}\r\n.alert.alert-danger a, .alert.alert-danger .alert-link {\r\n  color: #ffffff;\r\n}\r\n.alert-info, .alert-danger, .alert-warning, .alert-success {\r\n  color: #ffffff;\r\n}\r\n.alert-default a, .alert-default .alert-link {\r\n  color: rgba(0,0,0, 0.87);\r\n}\r\n.alert .alert-icon {\r\n  display: block;\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n.alert .alert-icon i {\r\n  margin-top: -7px;\r\n  top: 5px;\r\n  position: relative;\r\n}\r\n\r\n.progress {\r\n  height: 4px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  background: #DDDDDD;\r\n}\r\n.progress .progress-bar {\r\n  box-shadow: none;\r\n}\r\n.progress .progress-bar, .progress .progress-bar.progress-bar-default {\r\n  background-color: #9c27b0;\r\n}\r\n.progress .progress-bar.progress-bar-inverse {\r\n  background-color: #3f51b5;\r\n}\r\n.progress .progress-bar.progress-bar-primary {\r\n  background-color: #9c27b0;\r\n}\r\n.progress .progress-bar.progress-bar-success {\r\n  background-color: #4caf50;\r\n}\r\n.progress .progress-bar.progress-bar-info {\r\n  background-color: #03a9f4;\r\n}\r\n.progress .progress-bar.progress-bar-warning {\r\n  background-color: #fbc02d;\r\n}\r\n.progress .progress-bar.progress-bar-danger {\r\n  background-color: #f44336;\r\n}\r\n.progress.progress-line-primary {\r\n  background: rgba(156, 39, 176, 0.2);\r\n}\r\n.progress.progress-line-info {\r\n  background: rgba(3, 169, 244, 0.2);\r\n}\r\n.progress.progress-line-success {\r\n  background: rgba(76, 175, 80, 0.2);\r\n}\r\n.progress.progress-line-warning {\r\n  background: rgba(251, 192, 45, 0.2);\r\n}\r\n.progress.progress-line-danger {\r\n  background: rgba(244, 67, 54, 0.2);\r\n}\r\n\r\nh1, .h1 {\r\n  font-size: 3.8em;\r\n  line-height: 1.15em;\r\n}\r\n\r\nh2, .h2 {\r\n  font-size: 2.6em;\r\n}\r\n\r\nh3, .h3 {\r\n  font-size: 1.825em;\r\n  line-height: 1.4em;\r\n  margin: 20px 0 10px;\r\n}\r\n\r\nh4, .h4 {\r\n  font-size: 1.3em;\r\n  line-height: 1.4em;\r\n}\r\n\r\nh5, .h5 {\r\n  font-size: 1.25em;\r\n  line-height: 1.4em;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nh6, .h6 {\r\n  font-size: 1em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.title,\r\n.card-title,\r\n.info-title,\r\n.footer-brand,\r\n.footer-big h5,\r\n.footer-big h4,\r\n.media .media-heading {\r\n  font-weight: 700;\r\n}\r\n.title,\r\n.title a,\r\n.card-title,\r\n.card-title a,\r\n.info-title,\r\n.info-title a,\r\n.footer-brand,\r\n.footer-brand a,\r\n.footer-big h5,\r\n.footer-big h5 a,\r\n.footer-big h4,\r\n.footer-big h4 a,\r\n.media .media-heading,\r\n.media .media-heading a {\r\n  color: #3C4858;\r\n  text-decoration: none;\r\n}\r\n\r\nh2.title {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description,\r\n.card-description,\r\n.footer-big p {\r\n  color: #999999;\r\n}\r\n\r\n.text-warning {\r\n  color: #fbc02d;\r\n}\r\n\r\n.text-primary {\r\n  color: #9c27b0;\r\n}\r\n\r\n.text-danger {\r\n  color: #f44336;\r\n}\r\n\r\n.text-success {\r\n  color: #4caf50;\r\n}\r\n\r\n.text-info {\r\n  color: #03a9f4;\r\n}\r\n\r\n.nav-tabs {\r\n  background: #9c27b0;\r\n  border: 0;\r\n  border-radius: 3px;\r\n  padding: 0 15px;\r\n}\r\n.nav-tabs > li > a {\r\n  color: #FFFFFF;\r\n  border: 0;\r\n  margin: 0;\r\n  border-radius: 3px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n}\r\n.nav-tabs > li > a:hover {\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.nav-tabs > li > a, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\r\n  background-color: transparent;\r\n  border: 0 !important;\r\n  color: #FFFFFF !important;\r\n  font-weight: 500;\r\n}\r\n.nav-tabs > li.disabled > a, .nav-tabs > li.disabled > a:hover {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n.nav-tabs > li .material-icons {\r\n  margin: -1px 5px 0 0;\r\n}\r\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  -webkit-transition:background-color .1s .2s;\r\n  transition: background-color .1s .2s;\r\n}\r\n\r\n.popover, .tooltip-inner {\r\n  color: #555555;\r\n  line-height: 1.5em;\r\n  background: #FFFFFF;\r\n  border: none;\r\n  border-radius: 3px;\r\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.popover {\r\n  padding: 0;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n.popover.left > .arrow, .popover.right > .arrow, .popover.top > .arrow, .popover.bottom > .arrow {\r\n  border: none;\r\n}\r\n\r\n.popover-title {\r\n  background-color: #FFFFFF;\r\n  border: none;\r\n  padding: 15px 15px 5px;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.popover-content {\r\n  padding: 10px 15px 15px;\r\n  line-height: 1.4;\r\n}\r\n\r\n.tooltip.in {\r\n  opacity: 1;\r\n  -webkit-transform: translate3d(0, 0px, 0);\r\n  transform: translate3d(0, 0px, 0);\r\n}\r\n\r\n.tooltip {\r\n  opacity: 0;\r\n  -webkit-transition:opacity, -webkit-transform .2s ease;\r\n  transition:opacity, -webkit-transform .2s ease;\r\n  transition:opacity, transform .2s ease;\r\n  transition: opacity, transform .2s ease, -webkit-transform .2s ease;\r\n  -webkit-transform: translate3d(0, 5px, 0);\r\n  transform: translate3d(0, 5px, 0);\r\n}\r\n.tooltip.left .tooltip-arrow {\r\n  border-left-color: #FFFFFF;\r\n}\r\n.tooltip.right .tooltip-arrow {\r\n  border-right-color: #FFFFFF;\r\n}\r\n.tooltip.top .tooltip-arrow {\r\n  border-top-color: #FFFFFF;\r\n}\r\n.tooltip.bottom .tooltip-arrow {\r\n  border-bottom-color: #FFFFFF;\r\n}\r\n\r\n.tooltip-inner {\r\n  padding: 10px 15px;\r\n  min-width: 130px;\r\n}\r\n\r\n.carousel .carousel-control {\r\n  width: 50%;\r\n}\r\n.carousel .carousel-control.left, .carousel .carousel-control.right {\r\n  background-image: none;\r\n}\r\n.carousel .carousel-control .material-icons,\r\n.carousel .carousel-control .fa {\r\n  display: none;\r\n}\r\n.carousel .left {\r\n  cursor: url(" + __webpack_require__(882) + "), url(" + __webpack_require__(881) + "), default !important;\r\n}\r\n.carousel .right {\r\n  cursor: url(" + __webpack_require__(884) + "), url(" + __webpack_require__(883) + "), default !important;\r\n}\r\n.carousel .carousel-indicators {\r\n  bottom: 5px;\r\n}\r\n.carousel .carousel-indicators li,\r\n.carousel .carousel-indicators .active {\r\n  margin: 11px 10px;\r\n}\r\n.carousel .carousel-indicators li {\r\n  background: #FFFFFF;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 2px;\r\n}\r\n.carousel .carousel-indicators .active {\r\n  margin-top: 10px;\r\n  -webkit-transform: scale(1.5);\r\n  transform: scale(1.5);\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n.carousel .carousel-caption {\r\n  padding-bottom: 45px;\r\n}\r\n.carousel .carousel-caption .material-icons {\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  color: rgba(0,0,0, 0.87);\r\n  background: #fff;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.card .card-height-indicator {\r\n  margin-top: 100%;\r\n}\r\n.card .card-content {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.card .card-image {\r\n  height: 60%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.card .card-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-top-left-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n  pointer-events: none;\r\n}\r\n.card .card-image .card-image-headline {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 18px;\r\n  color: #fff;\r\n  font-size: 2em;\r\n}\r\n.card .content {\r\n  padding: 15px;\r\n}\r\n.card .card-body {\r\n  height: 30%;\r\n  padding: 18px;\r\n}\r\n.card .card-footer {\r\n  height: 10%;\r\n  padding: 18px;\r\n}\r\n.card .card-footer button, .card .card-footer a {\r\n  margin: 0 !important;\r\n  position: relative;\r\n  bottom: 25px;\r\n  width: auto;\r\n}\r\n.card .card-footer button:first-child, .card .card-footer a:first-child {\r\n  left: -15px;\r\n}\r\n.card .header {\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n  margin: 15px;\r\n  border-radius: 3px;\r\n  padding: 15px 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.card .header-primary {\r\n  background: -webkit-linear-gradient(30deg, #ab47bc, #7b1fa2);\r\n  background: linear-gradient(60deg, #ab47bc, #7b1fa2);\r\n}\r\n.card .header-info {\r\n  background: -webkit-linear-gradient(30deg, #29b6f6, #0288d1);\r\n  background: linear-gradient(60deg, #29b6f6, #0288d1);\r\n}\r\n.card .header-success {\r\n  background: -webkit-linear-gradient(30deg, #66bb6a, #388e3c);\r\n  background: linear-gradient(60deg, #66bb6a, #388e3c);\r\n}\r\n.card .header-warning {\r\n  background: -webkit-linear-gradient(30deg, #fdd835, #fbc02d);\r\n  background: linear-gradient(60deg, #fdd835, #fbc02d);\r\n}\r\n.card .header-danger {\r\n  background: -webkit-linear-gradient(30deg, #ef5350, #d32f2f);\r\n  background: linear-gradient(60deg, #ef5350, #d32f2f);\r\n}\r\n.card [class*=\"header-\"] {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.card-raised {\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-signup .header {\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  margin-top: -40px;\r\n  padding: 20px 0;\r\n}\r\n.card-signup .text-divider {\r\n  margin-top: 30px;\r\n  margin-bottom: 0px;\r\n  text-align: center;\r\n}\r\n.card-signup .content {\r\n  padding: 0px 30px 0px 10px;\r\n}\r\n.card-signup .checkbox {\r\n  margin-top: 20px;\r\n}\r\n.card-signup .checkbox label {\r\n  margin-left: 17px;\r\n}\r\n.card-signup .checkbox .checkbox-material {\r\n  padding-right: 12px;\r\n}\r\n.card-signup .social-line {\r\n  margin-top: 15px;\r\n  text-align: center;\r\n}\r\n.card-signup .social-line .btn {\r\n  color: #FFFFFF;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.card-nav-tabs {\r\n  margin-top: 45px;\r\n}\r\n.card-nav-tabs .header {\r\n  margin-top: -30px;\r\n}\r\n.card-nav-tabs .nav-tabs {\r\n  background: transparent;\r\n}\r\n\r\n.card-plain {\r\n  background: transparent;\r\n  box-shadow: none;\r\n}\r\n.card-plain .header {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n.card-plain .content {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.modal-content {\r\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\r\n  border-radius: 3px;\r\n  border: none;\r\n}\r\n.modal-content .modal-header {\r\n  border-bottom: none;\r\n  padding-top: 24px;\r\n  padding-right: 24px;\r\n  padding-bottom: 0;\r\n  padding-left: 24px;\r\n}\r\n.modal-content .modal-body {\r\n  padding-top: 24px;\r\n  padding-right: 24px;\r\n  padding-bottom: 16px;\r\n  padding-left: 24px;\r\n}\r\n.modal-content .modal-footer {\r\n  border-top: none;\r\n  padding: 7px;\r\n}\r\n.modal-content .modal-footer button {\r\n  margin: 0;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  width: auto;\r\n}\r\n.modal-content .modal-footer button.pull-left {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  position: relative;\r\n  left: -5px;\r\n}\r\n.modal-content .modal-footer button + button {\r\n  margin-bottom: 16px;\r\n}\r\n.modal-content .modal-body + .modal-footer {\r\n  padding-top: 0;\r\n}\r\n\r\n.modal-backdrop {\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.modal .modal-dialog {\r\n  margin-top: 100px;\r\n}\r\n.modal .modal-header .close {\r\n  color: #555555;\r\n}\r\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\r\n  opacity: 1;\r\n  color: #555555;\r\n}\r\n\r\n.panel {\r\n  border-radius: 2px;\r\n  border: 0;\r\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.panel > .panel-heading, .panel.panel-default > .panel-heading {\r\n  background-color: #eeeeee;\r\n}\r\n.panel.panel-inverse > .panel-heading {\r\n  background-color: #3f51b5;\r\n}\r\n.panel.panel-primary > .panel-heading {\r\n  background-color: #9c27b0;\r\n}\r\n.panel.panel-success > .panel-heading {\r\n  background-color: #4caf50;\r\n}\r\n.panel.panel-info > .panel-heading {\r\n  background-color: #03a9f4;\r\n}\r\n.panel.panel-warning > .panel-heading {\r\n  background-color: #fbc02d;\r\n}\r\n.panel.panel-danger > .panel-heading {\r\n  background-color: #f44336;\r\n}\r\n\r\n[class*=\"panel-\"] > .panel-heading {\r\n  color: #ffffff;\r\n  border: 0;\r\n}\r\n\r\n.panel-default > .panel-heading, .panel:not([class*=\"panel-\"]) > .panel-heading {\r\n  color: rgba(0,0,0, 0.87);\r\n}\r\n\r\n.panel-footer {\r\n  background-color: #eeeeee;\r\n}\r\n\r\nhr.on-dark {\r\n  color: #1a1a1a;\r\n}\r\nhr.on-light {\r\n  color: white;\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 0.75), (min--moz-device-pixel-ratio: 0.75), (-o-device-pixel-ratio: 3 / 4), (min-device-pixel-ratio: 0.75), (min-resolution: 0.75dppx), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\r\n  hr {\r\n    height: 0.75px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 1), (min--moz-device-pixel-ratio: 1), (-o-device-pixel-ratio: 1), (min-device-pixel-ratio: 1), (min-resolution: 1dppx), (-webkit-min-device-pixel-ratio: 1.6666666666666667), (min-resolution: 160dpi) {\r\n  hr {\r\n    height: 1px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 1.33), (min--moz-device-pixel-ratio: 1.33), (-o-device-pixel-ratio: 133 / 100), (min-device-pixel-ratio: 1.33), (min-resolution: 1.33dppx), (-webkit-min-device-pixel-ratio: 2.21875), (min-resolution: 213dpi) {\r\n  hr {\r\n    height: 1.333px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 2.5), (min-resolution: 240dpi) {\r\n  hr {\r\n    height: 1.5px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (-o-device-pixel-ratio: 2 / 1), (min-device-pixel-ratio: 2), (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 3.9583333333333335), (min-resolution: 380dpi) {\r\n  hr {\r\n    height: 2px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 3), (min--moz-device-pixel-ratio: 3), (-o-device-pixel-ratio: 3 / 1), (min-device-pixel-ratio: 3), (min-resolution: 3dppx), (-webkit-min-device-pixel-ratio: 5), (min-resolution: 480dpi) {\r\n  hr {\r\n    height: 3px;\r\n  }\r\n}\r\n@media (-webkit-min-device-pixel-ratio: 4), (min--moz-device-pixel-ratio: 4), (-o-device-pixel-ratio: 4 / 1), (min-device-pixel-ratio: 3), (min-resolution: 4dppx), (-webkit-min-device-pixel-ratio: 6.666666666666667), (min-resolution: 640dpi) {\r\n  hr {\r\n    height: 4px;\r\n  }\r\n}\r\n\r\n.img-thumbnail {\r\n  border-radius: 16px;\r\n}\r\n\r\n.img-raised {\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n* {\r\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n*:focus {\r\n  outline: 0;\r\n}\r\n\r\na:focus, a:active,\r\nbutton:active, button:focus, button:hover,\r\nbutton::-moz-focus-inner,\r\ninput[type=\"reset\"]::-moz-focus-inner,\r\ninput[type=\"button\"]::-moz-focus-inner,\r\ninput[type=\"submit\"]::-moz-focus-inner,\r\nselect::-moz-focus-inner,\r\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n  outline: 0 !important;\r\n}\r\n\r\n.section {\r\n  padding: 70px 0;\r\n}\r\n\r\n.section-navbars {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.section-full-screen {\r\n  height: 100vh;\r\n}\r\n\r\n.section-signup {\r\n  padding-top: 20vh;\r\n}\r\n\r\n.noUi-target,\r\n.noUi-target * {\r\n  -webkit-touch-callout: none;\r\n  -ms-touch-action: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.noUi-base {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.noUi-origin {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.noUi-handle {\r\n  position: relative;\r\n  z-index: 1;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.noUi-stacking .noUi-handle {\r\n  z-index: 10;\r\n}\r\n\r\n.noUi-state-tap .noUi-origin {\r\n  -webkit-transition:left 0.3s, top 0.3s;\r\n  transition: left 0.3s, top 0.3s;\r\n}\r\n\r\n.noUi-state-drag * {\r\n  cursor: inherit !important;\r\n}\r\n\r\n.noUi-horizontal {\r\n  height: 10px;\r\n}\r\n\r\n.noUi-handle {\r\n  box-sizing: border-box;\r\n  width: 14px;\r\n  height: 14px;\r\n  left: -10px;\r\n  top: -6px;\r\n  cursor: pointer;\r\n  border-radius: 100%;\r\n  -webkit-transition:all 0.2s ease-out;\r\n  transition: all 0.2s ease-out;\r\n  border: 1px solid;\r\n  background: #FFFFFF;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.noUi-vertical .noUi-handle {\r\n  margin-left: 5px;\r\n  cursor: ns-resize;\r\n}\r\n\r\n.noUi-horizontal.noUi-extended {\r\n  padding: 0 15px;\r\n}\r\n\r\n.noUi-horizontal.noUi-extended .noUi-origin {\r\n  right: -15px;\r\n}\r\n\r\n.noUi-background {\r\n  height: 2px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.noUi-origin {\r\n  margin: 0;\r\n  border-radius: 0;\r\n  height: 2px;\r\n  background: #c8c8c8;\r\n}\r\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\r\n  background-color: #fff;\r\n  border: 2px solid #c8c8c8;\r\n}\r\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\r\n  border-width: 1px;\r\n}\r\n\r\n.noUi-target {\r\n  border-radius: 3px;\r\n}\r\n\r\n.noUi-horizontal {\r\n  height: 2px;\r\n  margin: 15px 0;\r\n}\r\n\r\n.noUi-vertical {\r\n  height: 100%;\r\n  width: 2px;\r\n  margin: 0 15px;\r\n  display: inline-block;\r\n}\r\n\r\n.noUi-handle.noUi-active {\r\n  -webkit-transform: scale3d(2, 2, 1);\r\n          transform: scale3d(2, 2, 1);\r\n}\r\n\r\n[disabled].noUi-slider {\r\n  opacity: 0.5;\r\n}\r\n\r\n[disabled] .noUi-handle {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.slider {\r\n  background: #c8c8c8;\r\n}\r\n\r\n.slider.noUi-connect {\r\n  background-color: #9c27b0;\r\n}\r\n.slider .noUi-handle {\r\n  border-color: #9c27b0;\r\n}\r\n.slider.slider-info .noUi-connect, .slider.slider-info.noUi-connect {\r\n  background-color: #03a9f4;\r\n}\r\n.slider.slider-info .noUi-handle {\r\n  border-color: #03a9f4;\r\n}\r\n.slider.slider-success .noUi-connect, .slider.slider-success.noUi-connect {\r\n  background-color: #4caf50;\r\n}\r\n.slider.slider-success .noUi-handle {\r\n  border-color: #4caf50;\r\n}\r\n.slider.slider-warning .noUi-connect, .slider.slider-warning.noUi-connect {\r\n  background-color: #fbc02d;\r\n}\r\n.slider.slider-warning .noUi-handle {\r\n  border-color: #fbc02d;\r\n}\r\n.slider.slider-danger .noUi-connect, .slider.slider-danger.noUi-connect {\r\n  background-color: #f44336;\r\n}\r\n.slider.slider-danger .noUi-handle {\r\n  border-color: #f44336;\r\n}\r\n\r\n.dropdownjs::after {\r\n  right: 5px;\r\n  top: 3px;\r\n  font-size: 25px;\r\n  position: absolute;\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  content: \"\\E5C5\";\r\n  pointer-events: none;\r\n  color: #757575;\r\n}\r\n\r\n/*!\r\n * Datepicker for Bootstrap\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n */\r\n/*\r\n *\r\n *   SCSS by Creative Tim\r\n *   http://www.creative-tim.com\r\n *\r\n */\r\n.datepicker {\r\n  top: 0;\r\n  left: 0;\r\n  padding: 4px;\r\n  margin-top: 1px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker > div {\r\n  display: none;\r\n}\r\n.datepicker table {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n.datepicker td,\r\n.datepicker th {\r\n  text-align: center;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker td {\r\n  text-align: center;\r\n}\r\n.datepicker td p {\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  border-radius: 50%;\r\n  height: 29px;\r\n  line-height: 29px;\r\n  margin: 3px 0 8px;\r\n  width: 29px;\r\n}\r\n.datepicker td :hover {\r\n  cursor: pointer;\r\n}\r\n.datepicker th {\r\n  font-weight: 500;\r\n}\r\n.datepicker th.switch-datepicker {\r\n  font-size: 1em;\r\n}\r\n.datepicker .prev p,\r\n.datepicker .next p {\r\n  font-size: 1.825em;\r\n}\r\n.datepicker p:hover {\r\n  background: #eeeeee;\r\n}\r\n.datepicker .day.disabled {\r\n  color: #eeeeee;\r\n}\r\n.datepicker td.old,\r\n.datepicker td.new {\r\n  color: #999999;\r\n  border-top: 0;\r\n}\r\n.datepicker td.active p,\r\n.datepicker td.active:hover p {\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\r\n  color: #ffffff;\r\n  background-color: #9c27b0;\r\n}\r\n.datepicker td.primary p,\r\n.datepicker td.primary:hover p {\r\n  background-color: #9c27b0;\r\n}\r\n.datepicker td.info p,\r\n.datepicker td.info:hover p {\r\n  background-color: #03a9f4;\r\n}\r\n.datepicker td.success p,\r\n.datepicker td.success:hover p {\r\n  background-color: #4caf50;\r\n}\r\n.datepicker td.warning p,\r\n.datepicker td.warning:hover p {\r\n  background-color: #fbc02d;\r\n}\r\n.datepicker td.danger p,\r\n.datepicker td.danger:hover p {\r\n  background-color: #f44336;\r\n}\r\n.datepicker span {\r\n  display: block;\r\n  width: 55px;\r\n  height: 54px;\r\n  line-height: 54px;\r\n  float: left;\r\n  margin: 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.datepicker span.old {\r\n  color: #999999;\r\n}\r\n.datepicker span.active, .datepicker span.active:focus, .datepicker span.active:hover, .datepicker span.active:active {\r\n  background-color: #9c27b0;\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n.datepicker span.active {\r\n  color: #FFFFFF;\r\n}\r\n.datepicker span:hover {\r\n  background-color: #EEEEEE;\r\n}\r\n.datepicker span.primary,\r\n.datepicker span.primary:hover {\r\n  background-color: #9c27b0;\r\n}\r\n.datepicker span.info,\r\n.datepicker span.info:hover {\r\n  background-color: #03a9f4;\r\n}\r\n.datepicker span.success,\r\n.datepicker span.success:hover {\r\n  background-color: #4caf50;\r\n}\r\n.datepicker span.warning,\r\n.datepicker span.warning:hover {\r\n  background-color: #fbc02d;\r\n}\r\n.datepicker span.danger,\r\n.datepicker span.danger:hover {\r\n  background-color: #f44336;\r\n}\r\n.datepicker th.switch-datepicker {\r\n  width: 145px;\r\n}\r\n.datepicker th.next,\r\n.datepicker th.prev {\r\n  font-size: 21px;\r\n}\r\n.datepicker thead tr:first-child th {\r\n  cursor: pointer;\r\n}\r\n.datepicker thead tr:first-child th:hover {\r\n  background: #eeeeee;\r\n}\r\n.datepicker.dropdown-menu {\r\n  border-radius: 3px;\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: all 150ms linear;\r\n  transition: all 150ms linear;\r\n  margin-top: -20px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.datepicker.dropdown-menu.open {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  margin-top: 1px;\r\n}\r\n.datepicker .table-condensed > tbody > tr > td {\r\n  padding: 2px;\r\n}\r\n.datepicker .table-condensed > thead > tr > th {\r\n  padding: 0;\r\n}\r\n\r\n.input-append.date .add-on i,\r\n.input-prepend.date .add-on i {\r\n  display: block;\r\n  cursor: pointer;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.datepicker-months thead {\r\n  padding: 0 0 3px;\r\n  display: block;\r\n}\r\n\r\n.withripple {\r\n  position: relative;\r\n}\r\n\r\n.ripple-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  border-radius: inherit;\r\n  pointer-events: none;\r\n}\r\n\r\n.ripple {\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-left: -10px;\r\n  margin-top: -10px;\r\n  border-radius: 100%;\r\n  background-color: #000;\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transform-origin: 50%;\r\n          transform-origin: 50%;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.ripple.ripple-on {\r\n  -webkit-transition:opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\r\n  transition:opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\r\n  transition:opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\r\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\r\n  opacity: 0.1;\r\n}\r\n\r\n.ripple.ripple-out {\r\n  -webkit-transition:opacity 0.1s linear 0s !important;\r\n  transition: opacity 0.1s linear 0s !important;\r\n  opacity: 0;\r\n}\r\n\r\n.wrapper > .header {\r\n  min-height: 300px;\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n\r\n.main {\r\n  background: #FFFFFF;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.main-raised {\r\n  margin: -60px 30px 0px;\r\n  border-radius: 6px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.title {\r\n  font-weight: 500;\r\n  color: #3C4858;\r\n}\r\n\r\nh2.title {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description {\r\n  color: #999999;\r\n}\r\n\r\n.header-filter {\r\n  position: relative;\r\n}\r\n.header-filter:after {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n  content: \"\";\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.header-filter .container {\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.gallery .image img {\r\n  width: 100%;\r\n}\r\n\r\n.features {\r\n  padding: 80px 0 0;\r\n}\r\n\r\n.team {\r\n  margin-top: 80px;\r\n}\r\n.team .team-player .title {\r\n  margin: 30px auto;\r\n}\r\n.team .team-player img {\r\n  max-width: 170px;\r\n}\r\n\r\n.nav-align-center {\r\n  text-align: center;\r\n}\r\n.nav-align-center .nav-pills {\r\n  display: inline-block;\r\n}\r\n\r\n.navbar-absolute {\r\n  position: absolute;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  z-index: 1031;\r\n}\r\n\r\n.index-page .wrapper > .header {\r\n  height: 90vh;\r\n}\r\n.index-page .brand {\r\n  margin-top: 30vh;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n}\r\n.index-page .brand h1 {\r\n  font-size: 4.8em;\r\n  font-weight: 600;\r\n}\r\n.index-page .brand h3 {\r\n  font-size: 1.5em;\r\n  text-transform: uppercase;\r\n  max-width: 400px;\r\n  margin: 10px auto 0;\r\n}\r\n.index-page .section-basic {\r\n  padding-top: 15px;\r\n}\r\n.index-page .header-filter:after {\r\n  background: rgba(101, 47, 142, 0.64);\r\n  background: -webkit-linear-gradient(45deg, rgba(101, 47, 142, 0.88) 0%, rgba(125, 46, 185, 0.45) 100%);\r\n  background: linear-gradient(45deg, rgba(101, 47, 142, 0.88) 0%, rgba(125, 46, 185, 0.45) 100%);\r\n  background: -webkit-linear-gradient(135deg, rgba(101, 47, 142, 0.88) 0%, rgba(125, 46, 185, 0.45) 100%);\r\n}\r\n\r\n.landing-page .header {\r\n  height: 100vh;\r\n}\r\n.landing-page .header .container {\r\n  padding-top: 26vh;\r\n  color: #FFFFFF;\r\n}\r\n.landing-page .header .share {\r\n  margin-top: 150px;\r\n}\r\n.landing-page .header h1 {\r\n  font-weight: 600;\r\n}\r\n.landing-page .header .title {\r\n  color: #FFFFFF;\r\n}\r\n.landing-page .wrapper {\r\n  background: #CCCCCC;\r\n}\r\n\r\n.profile-page .header {\r\n  height: 380px;\r\n  background-position: top center;\r\n}\r\n.profile-page .profile {\r\n  text-align: center;\r\n}\r\n.profile-page .profile img {\r\n  max-width: 160px;\r\n  margin: -80px auto 0;\r\n}\r\n.profile-page .description {\r\n  margin: 30px auto 0;\r\n  max-width: 600px;\r\n}\r\n.profile-page .profile-tabs {\r\n  margin-top: 60px;\r\n}\r\n.profile-page .gallery {\r\n  margin-top: 45px;\r\n  padding-bottom: 50px;\r\n}\r\n.profile-page .gallery img {\r\n  width: 100%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.signup-page .wrapper > .header {\r\n  min-height: 100vh;\r\n}\r\n.signup-page .wrapper .card-signup {\r\n  margin: 160px 0 40px;\r\n}\r\n.signup-page .footer .copyright,\r\n.signup-page .footer a {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.landing-page .navbar-transparent,\r\n.profile-page .navbar-transparent,\r\n.signup-page .navbar-transparent,\r\n.index-page .navbar-transparent {\r\n  padding-top: 25px;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .landing-page .header {\r\n    height: auto;\r\n    min-height: 100vh;\r\n  }\r\n  .landing-page .header .container {\r\n    padding-bottom: 70px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .footer .copyright {\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    float: none !important;\r\n    width: 100%;\r\n  }\r\n\r\n  .navbar.navbar-transparent {\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    padding-top: 10px;\r\n    border-radius: 0;\r\n  }\r\n\r\n  .main-raised {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n  }\r\n}\r\n\r\n.tim-row{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.tim-white-buttons {\r\n    background-color: #777777;\r\n}\r\n.title{\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n    min-height: 32px;\r\n}\r\n.title.text-center{\r\n    margin-bottom: 50px;\r\n}\r\n.tim-typo{\r\n    padding-left: 25%;\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n}\r\n.tim-typo .tim-note{\r\n    bottom: 10px;\r\n    color: #c0c1c2;\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 13px;\r\n    left: 0;\r\n    margin-left: 20px;\r\n    position: absolute;\r\n    width: 260px;\r\n}\r\n.tim-row{\r\n    padding-top: 50px;\r\n}\r\n.tim-row h3{\r\n    margin-top: 0;\r\n}\r\n.switch{\r\n    margin-right: 20px;\r\n}\r\n#navbar-full .navbar{\r\n    border-radius: 0 !important;\r\n    margin-bottom: 15px;\r\n    z-index: 2;\r\n}\r\n.space{\r\n    height: 130px;\r\n    display: block;\r\n}\r\n.space-110{\r\n    height: 110px;\r\n    display: block;\r\n}\r\n.space-50{\r\n    height: 50px;\r\n    display: block;\r\n}\r\n.space-70{\r\n    height: 70px;\r\n    display: block;\r\n}\r\n.navigation-example .img-src{\r\n    background-attachment: scroll;\r\n}\r\n\r\n.navigation-example{\r\n    background-image: url(" + __webpack_require__(885) + ");\r\n    background-position: center center;\r\n    background-size: cover;\r\n    margin-top:0;\r\n    min-height: 740px;\r\n}\r\n#notifications{\r\n    background-color: #FFFFFF;\r\n    display: block;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.tim-note{\r\n    text-transform: capitalize;\r\n}\r\n\r\n#buttons .btn{\r\n    margin: 0 0px 15px;\r\n}\r\n.space-100{\r\n    height: 100px;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.be-social{\r\n    padding-bottom: 20px;\r\n/*     border-bottom: 1px solid #aaa; */\r\n    margin: 0 auto 40px;\r\n}\r\n.txt-white{\r\n    color: #FFFFFF;\r\n}\r\n.txt-gray{\r\n    color: #ddd !important;\r\n}\r\n\r\n\r\n.parallax{\r\n  width:100%;\r\n  height:570px;\r\n\r\n  display: block;\r\n  background-attachment: fixed;\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position: center center;\r\n\r\n}\r\n\r\n.logo-container .logo{\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    border: 1px solid #333333;\r\n    width: 50px;\r\n    float: left;\r\n}\r\n\r\n.logo-container .brand{\r\n    font-size: 16px;\r\n    color: #FFFFFF;\r\n    line-height: 18px;\r\n    float: left;\r\n    margin-left: 10px;\r\n    margin-top: 7px;\r\n   /* width: 70px;*/\r\n    height: 40px;\r\n    text-align: left;\r\n}\r\n.logo-container .brand-material{\r\n    font-size: 18px;\r\n    margin-top: 15px;\r\n    height: 25px;\r\n    width: auto;\r\n}\r\n.logo-container .logo img{\r\n    width: 100%;\r\n}\r\n.navbar-small .logo-container .brand{\r\n    color: #333333;\r\n}\r\n\r\n.fixed-section{\r\n    top: 90px;\r\n    max-height: 80vh;\r\n    overflow: scroll;\r\n}\r\n.fixed-section ul li{\r\n    list-style: none;\r\n}\r\n.fixed-section li a{\r\n    font-size: 14px;\r\n    padding: 2px;\r\n    display: block;\r\n    color: #666666;\r\n}\r\n.fixed-section li a.active{\r\n    color: #00bbff;\r\n}\r\n.fixed-section.float{\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 200px;\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n.parallax .parallax-image{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n.parallax .parallax-image img{\r\n    width: 100%;\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .parallax .parallax-image{\r\n         width: 100%;\r\n         height: 640px;\r\n         overflow: hidden;\r\n     }\r\n    .parallax .parallax-image img{\r\n       height: 100%;\r\n       width: auto;\r\n   }\r\n}\r\n\r\n.separator{\r\n    content: \"Separator\";\r\n    color: #FFFFFF;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n.separator-line{\r\n    background-color: #EEE;\r\n    height: 1px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.separator.separator-gray{\r\n    background-color: #EEEEEE;\r\n}\r\n.social-buttons-demo .btn{\r\n    margin-right: 5px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.img-container{\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n.img-container img{\r\n    width: 100%;\r\n}\r\n\r\n.lightbox img{\r\n    width: 100%;\r\n}\r\n.lightbox .modal-content{\r\n    overflow: hidden;\r\n}\r\n.lightbox .modal-body{\r\n    padding: 0;\r\n}\r\n@media screen and (min-width: 991px){\r\n    .lightbox .modal-dialog{\r\n        width: 960px;\r\n    }\r\n}\r\n@media (max-width: 991px){\r\n    .fixed-section.affix{\r\n        position: relative;\r\n        margin-bottom: 100px;\r\n    }\r\n}\r\n@media (max-width: 768px){\r\n    .btn, .btn-morphing{\r\n        margin-bottom: 10px;\r\n    }\r\n    .parallax .motto{\r\n        top: 170px;\r\n        margin-top: 0;\r\n        font-size: 60px;\r\n        width: 270px;\r\n    }\r\n}\r\n\r\n/*       Loading dots  */\r\n\r\n/*      transitions */\r\n.presentation .front, .presentation .front:after, .presentation .front .btn, .logo-container .logo, .logo-container .brand{\r\n     -webkit-transition: all .2s;\r\n    transition: all .2s;\r\n}\r\n\r\n\r\n#images h4{\r\n    margin-bottom: 30px;\r\n}\r\n#javascriptComponents{\r\n    padding-bottom: 0;\r\n}\r\n#javascriptComponents .btn-raised{\r\n    margin: 10px 5px;\r\n}\r\n\r\n\r\n/*      layer animation          */\r\n\r\n.layers-container{\r\n    display: block;\r\n    margin-top: 50px;\r\n    position: relative;\r\n}\r\n.layers-container img {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: auto;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n}\r\n\r\n.section-black {\r\n  background-color: #333;\r\n}\r\n\r\n.animate {\r\n  transition: 1.5s ease-in-out;\r\n  -moz-transition: 1.5s ease-in-out;\r\n  -webkit-transition: 1.5s ease-in-out;\r\n}\r\n\r\n.navbar-default.navbar-small .logo-container .brand{\r\n    color: #333333;\r\n}\r\n.navbar-transparent.navbar-small .logo-container .brand{\r\n    color: #FFFFFF;\r\n}\r\n.navbar-default.navbar-small .logo-container .brand{\r\n    color: #333333;\r\n}\r\n\r\n.sharing-area{\r\n    margin-top: 80px;\r\n}\r\n.sharing-area .btn{\r\n    margin: 15px 4px 0;\r\n    color: #FFFFFF;\r\n}\r\n.sharing-area .btn i{\r\n    font-size: 18px;\r\n    position: relative;\r\n    top: 2px;\r\n    margin-right: 5px;\r\n}\r\n.sharing-area .btn-twitter{\r\n    background-color: #55acee;\r\n    box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12);\r\n}\r\n.sharing-area .btn-twitter:hover{\r\n    box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2);\r\n}\r\n\r\n.sharing-area .btn-facebook{\r\n    background-color: #3b5998;\r\n    box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\r\n}\r\n.sharing-area .btn-facebook:hover{\r\n    box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2);\r\n}\r\n\r\n.sharing-area .btn-google-plus{\r\n    background-color: #dd4b39;\r\n    box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12);\r\n}\r\n.sharing-area .btn-google-plus:hover{\r\n    background-color: #dd4b39;\r\n    box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\r\n}\r\n\r\n.sharing-area .btn-github{\r\n    background-color: #333333;\r\n    box-shadow: 0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12);\r\n}\r\n.sharing-area .btn-github:hover{\r\n    background-color: #333333;\r\n    box-shadow: 0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2);\r\n}\r\n\r\n.section-thin,\r\n.section-notifications{\r\n    padding: 0;\r\n}\r\n.section-navbars{\r\n    padding-top: 0;\r\n}\r\n#navbar .navbar{\r\n    border-radius: 0;\r\n}\r\n.section-tabs{\r\n    background: #EEEEEE;\r\n}\r\n.section-pagination{\r\n    padding-bottom: 0;\r\n}\r\n.section-download h4{\r\n    margin-bottom: 25px;\r\n}\r\n.section-examples a{\r\n    text-decoration: none;\r\n}\r\n.section-examples h5{\r\n    margin-top: 30px;\r\n}\r\n.components-page .wrapper > .header,\r\n.tutorial-page .wrapper > .header{\r\n    height: 400px;\r\n    padding-top: 100px;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n.components-page .title,\r\n.tutorial-page .title{\r\n    color: #FFFFFF;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=material-kit.css.map */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "\n<!--\n\n<md-grid-tile-header class=\"chatbot-footer\">\n  <h2>ChatBot</h2>\n</md-grid-tile-header>\n<div #chatbotBody class=\"chatbotBody\">\n      <div *ngFor=\"let message of messageList\">\n        <chat-message [message]=\"message\"> </chat-message>\n      </div>\n</div>\n<md-grid-tile-footer class=\"chatbot-footer\">\n  <md-input class=\"chatbotButton\" #angularcb1 placeholder=\"Type here\" (keydown.enter)=\"sendMessage(angularcb1.value)\"></md-input>\n  <button  md-raised-button md-tooltip=\"Click here to submit your code!\" (click)=\"sendMessage(angularcb1.value)\" color=\"primary\"\n   disabled=\"enableEdit\">SEND</button>\n</md-grid-tile-footer>\n-->\n\n <div class=\"chat-window-container\">\n      <div class=\"chat-window\">\n        <div class=\"panel-container\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading top-bar\">\n              <div class=\"panel-title-container\">\n                <h3 class=\"panel-title\">\n                  <span class=\"glyphicon glyphicon-comment\"></span>\n                  ChatBot Monkey\n                </h3>\n              </div>\n              <div class=\"panel-buttons-container\">\n                <!-- you could put minimize or close buttons here -->\n              </div>\n            </div>\n            <div class=\"panel-body msg-container-base\">\n              <chat-message\n                   *ngFor=\"let message of messageList\"\n                   [message]=\"message\">\n              </chat-message>\n            </div>\n            <div class=\"panel-footer\">\n              <div class=\"input-group\">\n                <input type=\"text\" \n                       class=\"chat-input\"\n                       placeholder=\"Write your message here...\"\n                       (keydown.enter)=\"sendMessage($event)\"\n                       [(ngModel)]=\"draftMessage.contant\" />\n                <span class=\"input-group-btn\">\n                  <button class=\"btn-chat\"\n                     (click)=\"sendMessage($event)\"\n                     >Send</button>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{title}}</h1>\r\n<div md-dialog-content>\r\n    <p>\r\n    {{content}}\r\n    </p>\r\n    <p>\r\n    {{error}}\r\n    </p>\r\n    </div>\r\n\r\n<div md-dialog-actions>\r\n  <button md-raised-button color=\"primary\" (click)=\"dialogRef.close()\">Close</button>\r\n</div>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "\r\n<md-sidenav-container [class.m2app-dark]=\"isDarkTheme\" layout-fill>\r\n  <md-sidenav #sidenav mode=\"push\" class=\"app-sidenav md-sidenav-push md-side-nav-opened\">\r\n    <md-nav-list>\r\n      <md-list-item *ngFor=\"let link of links\">\r\n        <a md-line href=\"...\">{{ link }}</a>\r\n          <md-icon>code</md-icon>\r\n      </md-list-item>\r\n    </md-nav-list>\r\n  </md-sidenav>\r\n\r\n  <md-toolbar color=\"primary\" style=\"position: fixed;z-index: 200;\">\r\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\r\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\r\n    </button>\r\n\r\n   Python Bot\r\n\r\n    <span class=\"app-toolbar-filler\"></span>\r\n    <button md-button (click)=\"changeToDarkTheme()\">TOGGLE DARK THEME</button>\r\n    <a md-icon-button routerLink=\"/home\"  md-tooltip=\"home\">\r\n      <md-icon>home</md-icon>\r\n    </a>\r\n    <a md-icon-button\r\n       md-tooltip=\"help\"\r\n       tooltip-position=\"below\">\r\n      <md-icon>help</md-icon>\r\n    </a>\r\n  </md-toolbar>\r\n\r\n\r\n  <div class=\"app-content\" style=\"overflow: hidden;\" layout-fill>\r\n     <router-outlet (activate)='onActivate($event)'>\r\n     </router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-container>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = " <div layout=\"row\" layout-fill style=\"min-height: 100%;\">\r\n      <div flex=\"25\" style=\"overflow-y:auto;margin-top:3%\">\r\n        <md-card #introObj  class=\"introClass\">\r\n          <div >\r\n            <h1>{{currStage.topic}}</h1>\r\n            <h3>Exercise {{currStage.id}}</h3>\r\n            <br/>\r\n            <h1>Instructions</h1>\r\n            <p>\r\n             {{currStage.instructions}}\r\n            </p>\r\n          </div>\r\n          <div >\r\n          <h1>Tasks</h1>\r\n            <md-list *ngFor=\"let item of currStage.tasks\" class=\"hintsListElement\">\r\n              <md-checkbox>{{item}}</md-checkbox>\r\n            </md-list>\r\n          </div>\r\n          <br/>\r\n          <div>\r\n            <button  md-raised-button color=\"primary\" (click)=\"collapseHints()\">\r\n              <span>Hints</span>\r\n                <md-icon *ngIf=\"_isCollapsedContent\">expand_more</md-icon>\r\n                <md-icon *ngIf=\"!_isCollapsedContent\">expand_less</md-icon>\r\n            </button>\r\n\r\n                <md-list [collapse]=\"_isCollapsedContent\" *ngFor=\"let item of currStage.hints\" class=\"hintsListElement\">\r\n                  <md-list-item style=\"padding-left: 0px;\">\r\n                        <md-icon style=\"margin-right: 2px\">check_circle</md-icon>\r\n                        <span>{{item}}</span>\r\n                  </md-list-item>\r\n                </md-list>\r\n\r\n          </div>\r\n\r\n       </md-card>\r\n\r\n\r\n      </div>\r\n        <div flex=\"50\" >\r\n          <div layout=\"column\">\r\n            <div flex=\"75\" style=\"position: absolute;top: 70px;\" >\r\n             <aceEditor  class=\"text-inside-grid\" #editor [text]=\"currStage.code\"\r\n                         (currStatus)=\"changeStatus($event)\"></aceEditor>\r\n    \r\n              </div>\r\n\r\n  \r\n    <div flex=\"25\" style=\"position: absolute;bottom: 0;\">\r\n        <md-card class=\"card-accent md-card-flat\" >\r\n          <button style=\"margin-right: inherit;\" #submitButton  \r\n          md-raised-button md-tooltip=\"Click here to submit your code!\" (click)=\"submit()\" color=\"primary\">\r\n            Submit your code!\r\n          </button>\r\n        </md-card>\r\n        </div>\r\n      </div>\r\n      <div flex=\"25\">\r\n        <div *ngIf=\"chatbotIsOn\"  color=\"primary\" >\r\n           <chatBot #chatbotcomp [code]=\"writtenCode\" [chatbotinitmessage]=\"chatbotinitmessage\"\r\n           [numofargs] =\"currStage.numofargs\" [argstype]=\"currStage.argstype\" \r\n           [stageID]=\"currStage.id\" [currLang]=\"currLang\" [courseApp]=\"courseApp\">\r\n\r\n           </chatBot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "\n<body class=\"index-page\" style=\"overflow-y: scroll;\">\t\n\n<!-- Navbar will come here -->\n<nav class=\"navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll\">\n\t<div class=\"container\">\n\n\t</div>\n</nav>\n<!-- end navbar -->\n\n<div class=\"wrapper\">\n\t<div class=\"header header-filter\" style=\"background-image: url('/assets/images/bg2.jpeg');\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<h1>Monkey-Bot academy</h1>\n\t\t\t\t\t\t<h3>Learn to program using chatbot and improve your skills</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"logo-container\" style=\"position: absolute;top:10px\">\n\t                <div class=\"logo\">\n\t                    <img src=\"/assets/images/monkey.png\" alt=\"Creative Tim Logo\" data-placement=\"bottom\" \n\t\t\t\t\t\trel=\"tooltip\" title=\"<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>\" \n\t\t\t\t\t\tdata-html=\"true\">\n\t                </div>\n\t                <div class=\"brand\">\n\t                   Powered by Code monkey\n\t                </div>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main main-raised\">\n\t\t<div class=\"section section-basic\">\n\t    \t<div class=\"container\">\n\t            <div class=\"title\">\n\t                <h2>Our courses</h2>\n\t            </div>\n\n\t\t\t\t\t\t\t\n\t\t<md-card class=\"card-accent md-card-main-page \" *ngFor=\"let course of allCourses\">\n\t\t<h4 style=\"text-align: center;\">Python</h4>\t\n\t\t\t\t<md-tab-group style=\"height: 180px; overflow-y: auto;\">\n  \t\t\t\t<md-tab label=\"General\">{{course.general}}</md-tab>\n  \t\t\t\t<md-tab label=\"Syllabus\">\n\t\t\t\t\t\t{{course.syllabus}}\n\t\t\t  </md-tab>\n\t\t\t\t</md-tab-group>\n\t\t\t<md-card-actions style=\"margin-left: auto;\">\n     <button #submitButton  md-raised-button (click)=\"enterCourse(course.currLang,course.courseApp)\" color=\"primary\">\n            Start here!\n          </button>\n\t\t  \t<br>\n\t\t\t</md-card-actions>\n\t\t\t</md-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\t\n\n\n    <div class=\"section section-download\">\n\t        <div class=\"container\">\n\t            <div class=\"row text-center\">\n\t                <div class=\"col-md-8 col-md-offset-2\">\n\t                    <h2>Do you love this UI Kit?</h2>\n\t                    <h4>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the kit. Start a new project or give an old Bootstrap project a new look!</h4>\n\t                </div>\n\t                <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n\t                    <a href=\"http://www.creative-tim.com/product/material-kit\" class=\"btn btn-primary btn-lg\">\n\t\t\t\t\t\t\t<i class=\"material-icons\">cloud_download</i> Free Download\n\t\t\t\t\t\t</a>\n\t                </div>\n\t\t\t\t</div>\n\n\t\t\t\t<br><br>\n\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t                    <h2>Want more?</h2>\n\t                    <h4>We've just launched <a href=\"http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie\" target=\"_blank\">Material Kit PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap UI Kit inspired by Material Design.</h4>\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n\t\t\t\t\t\t<a href=\"http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie\" class=\"btn btn-upgrade btn-lg\" target=\"_blank\">\n\t\t\t\t\t\t\t<i class=\"material-icons\">unarchive</i> Upgrade to PRO\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t            </div>\n\n\t            <div class=\"row sharing-area text-center\">\n\t                    <h3>Thank you for supporting us!</h3>\n\t                    <a href=\"#\" class=\"btn btn-twitter\">\n\t                        <i class=\"fa fa-twitter\"></i>\n\t                        Tweet\n\t                    </a>\n\t                    <a href=\"#\" class=\"btn btn-facebook\">\n\t                        <i class=\"fa fa-facebook-square\"></i>\n\t                        Share\n\t                    </a>\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-google-plus\">\n\t                        <i class=\"fa fa-google-plus\"></i>\n\t                        Share\n\t                    </a>\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-github\">\n\t                        <i class=\"fa fa-github\"></i>\n\t                    \tStar\n\t                    </a>\n\t            </div>\n\t        </div>\n\t    </div>\n\n\n</div>\n    <footer class=\"footer\">\n\t    <div class=\"container\">\n\t        <nav class=\"pull-left\">\n\t            <ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"http://www.creative-tim.com\">\n\t\t\t\t\t\t\tCreative Tim\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"http://presentation.creative-tim.com\">\n\t\t\t\t\t\t   About Us\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"http://blog.creative-tim.com\">\n\t\t\t\t\t\t   Blog\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"http://www.creative-tim.com/license\">\n\t\t\t\t\t\t\tLicenses\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t            </ul>\n\t        </nav>\n\t        <div class=\"copyright pull-right\">\n\t            &copy; 2016, made with <i class=\"material-icons\">favorite</i> by Creative Tim for a better web.\n\t        </div>\n\t    </div>\n\t</footer>\n\n</div>\n</body>\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,AAABAAEADxsAAAEAIADoBgAAFgAAACgAAAAPAAAANgAAAAEAIAAAAAAAVAYAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////v////zD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P/////////+////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///+f///////////////f////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P/////////+////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////v////zD/8AAA/+AAAP/AAAD/ggAA/wYAAP4OAAD8HgAA+D4AAPB+AADg/gAAwf4AAIP+AAAH/gAAD/4AAAf+AACD/gAAwf4AAOD+AADwfgAA+D4AAPweAAD+DgAA/wYAAP+CAAD/wAAA/+AAAP/wAAA="

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAbCAYAAACjkdXHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAHpJREFUeNqk1dsNgCAMheGO4ChuzCiO4AiO4Ai/D4aEKJe2h4THLw3QHgyw4N6AA9gz8ORddxYClDQELA09eAhXeApneAlH2AV72A2/OARbHIYVp2DFpYFXpNflytKZ5duW31nuMLm35amS51lOEjnD5PSUc/v3YzwDAFMmEkl4d3ozAAAAAElFTkSuQmCC"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,AAABAAEADxsAAAEAIADoBgAAFgAAACgAAAAPAAAANgAAAAEAIAAAAAAAVAYAABMLAAATCwAAAAAAAAAAAAD///+f/////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD////v//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8w////7///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////MP///+///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///zD////v//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8w////7///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////MP///+///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///zD////v//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8w////7///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////MP///+///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///zD////v//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8w////7///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////MP///+///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////2D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////YP///wD///8A////AP///wD///8A////AP///wD///8A////AP///xD////P//////////////9g////AP///wD///8A////AP///wD///8A////AP///wD///8A////EP///8///////////////4////8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////z///////////////n////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD////P//////////////+f////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD////P/////////5////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Q////f////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAf/gAAD/4AAAf+AACD/gAAwf4AAOD+AADwfgAA+D4AAPweAAD+DgAA/wYAAP+CAAD/wAAA/8AAAP+CAAD/BgAA/g4AAPweAAD4PgAA8H4AAOD+AADB/gAAg/4AAAf+AAAP/gAAH/4AAD/+AAA="

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAbCAYAAACjkdXHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAJZJREFUeNqk0lENhDAQRdHJKkACElbSOkECEpCEFCTc/YAGAtP2zTBJE0JyLgVqwABMgEWXASv7LG9wOGDHtlOBcnEPzBHsBX4RHA54N+VArSoFWu/UDfS+aDOg/M9qQD1NbiBylh+Bj+kzHusc8alfYMts24UKrsIebsIW7sIalqCHZXjHIXjFYVhwChacggUvGQjYfwCBR+CP+HPPgAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.9d8773e33940251da04f.jpg";

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(526);


/***/ })

},[888]);
//# sourceMappingURL=main.bundle.js.map