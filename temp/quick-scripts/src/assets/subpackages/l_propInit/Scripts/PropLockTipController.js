"use strict";
cc._RF.push(module, 'c33ff4n9MZFp5OIx34+hQwj', 'PropLockTipController');
// subpackages/l_propInit/Scripts/PropLockTipController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var PropLockTipView_1 = require("./PropLockTipView");
var PropLockTipController = /** @class */ (function (_super) {
    __extends(PropLockTipController, _super);
    function PropLockTipController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = PropLockTipView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_propInit";
        return _this;
    }
    PropLockTipController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    PropLockTipController.prototype.initDependRes = function () { };
    PropLockTipController.prototype.viewDidShow = function (e) {
        var r, o, i;
        _super.prototype.viewDidShow.call(this, e);
        var n = e ? e.tips : null === (r = this.args) || void 0 === r ? void 0 : r.tips, a = e ? e.tipPos : null === (o = this.args) || void 0 === o ? void 0 : o.tipPos, p = e ? e.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
        if (n) {
            this.viewDoAction("showTips", n, a, p);
        }
        else {
            this.close();
        }
    };
    PropLockTipController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
        this.close();
    };
    PropLockTipController = __decorate([
        mj.class("PropLockTipController")
    ], PropLockTipController);
    return PropLockTipController;
}(ViewController_1.default));
exports.default = PropLockTipController;

cc._RF.pop();