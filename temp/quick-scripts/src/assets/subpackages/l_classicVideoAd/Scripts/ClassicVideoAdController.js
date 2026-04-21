"use strict";
cc._RF.push(module, '072aaK9gjtPDpjlPtXKSSec', 'ClassicVideoAdController');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicVideoAdView_1 = require("./ClassicVideoAdView");
var ClassicVideoAdController = /** @class */ (function (_super) {
    __extends(ClassicVideoAdController, _super);
    function ClassicVideoAdController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicVideoAdView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicVideoAd";
        return _this;
    }
    ClassicVideoAdController.prototype.onClickWatch = function () {
        this.close();
        var t = mj.getClassByName("ClassicVideoAdTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickWatch();
    };
    ClassicVideoAdController.prototype.onClickRefuse = function () {
        this.close();
        var t = mj.getClassByName("ClassicVideoAdTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickRefuse();
    };
    ClassicVideoAdController = __decorate([
        mj.class("ClassicVideoAdController")
    ], ClassicVideoAdController);
    return ClassicVideoAdController;
}(ViewController_1.default));
exports.default = ClassicVideoAdController;

cc._RF.pop();