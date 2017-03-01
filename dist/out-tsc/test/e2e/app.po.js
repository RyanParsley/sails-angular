"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Angular2testPage = (function () {
    function Angular2testPage() {
    }
    Angular2testPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Angular2testPage.prototype.getParagraphText = function () {
        return element(by.css('angular2test-app h1')).getText();
    };
    return Angular2testPage;
}());
exports.Angular2testPage = Angular2testPage;
//# sourceMappingURL=app.po.js.map