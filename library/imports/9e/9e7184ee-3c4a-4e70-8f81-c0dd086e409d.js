"use strict";
cc._RF.push(module, '9e718TuPEpOcI+BwN0IbkCd', 'TravelValentineController');
// subpackages/l_travelValentine/Scripts/TravelValentineController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var TravelValentineView_1 = require("./TravelValentineView");
var TravelValentineController = /** @class */ (function (_super) {
    __extends(TravelValentineController, _super);
    function TravelValentineController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelValentineView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_travelValentine";
        return _this;
    }
    TravelValentineController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("updateData", t);
    };
    TravelValentineController = __decorate([
        mj.class("TravelValentineController")
    ], TravelValentineController);
    return TravelValentineController;
}(ViewController_1.default));
exports.default = TravelValentineController;

cc._RF.pop();