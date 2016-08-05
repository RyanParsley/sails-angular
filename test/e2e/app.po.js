System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Angular2testPage;
    return {
        setters:[],
        execute: function() {
            Angular2testPage = (function () {
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
            exports_1("Angular2testPage", Angular2testPage);
        }
    }
});
//# sourceMappingURL=app.po.js.map