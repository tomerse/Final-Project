"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var configuration_1 = require('../configuration');
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var chatBotService = (function () {
    function chatBotService(http) {
        this.http = http;
        this.conf = new configuration_1.Configuration();
        this.serverURL = this.conf.serverURL;
    }
    chatBotService.prototype.runCode = function (code, id, args) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.serverURL + 'courses/' + this.conf.currLang + '/' + this.conf.courseName +
            '/' + id + '/run', { "code": code, "args": args }, options).map(function (res) { return res.json(); });
    };
    chatBotService = __decorate([
        core_1.Injectable()
    ], chatBotService);
    return chatBotService;
}());
exports.chatBotService = chatBotService;
