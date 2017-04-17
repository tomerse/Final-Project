"use strict";
var protractor_1 = require('protractor');
var MainPage = (function () {
    function MainPage() {
    }
    MainPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('');
    };
    return MainPage;
}());
exports.MainPage = MainPage;
