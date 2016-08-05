System.register(['./app.po'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_po_1;
    return {
        setters:[
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            }],
        execute: function() {
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
        }
    }
});
//# sourceMappingURL=app.e2e.js.map