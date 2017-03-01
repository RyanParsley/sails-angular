"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('angular2test App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2testPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('angular2test works!');
    });
});
//# sourceMappingURL=app.e2e.js.map