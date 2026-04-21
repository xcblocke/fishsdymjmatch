"use strict";
cc._RF.push(module, '87a47DwKj9BCKoNRwPHvnuz', 'LockTipsController');
// Scripts/LockTipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LockTipsView_1 = require("./LockTipsView");
var LockTipsController = /** @class */ (function (_super) {
    __extends(LockTipsController, _super);
    function LockTipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LockTipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    LockTipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    LockTipsController.prototype.initDependRes = function () { };
    LockTipsController.prototype.getMessageListeners = function () {
        return {};
    };
    LockTipsController.prototype.viewDidShow = function (t) {
        var o, n, i;
        _super.prototype.viewDidShow.call(this, t);
        var r = t ? t.tips : null === (o = this.args) || void 0 === o ? void 0 : o.tips, a = t ? t.tipPos : null === (n = this.args) || void 0 === n ? void 0 : n.tipPos, l = t ? t.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
        if (r) {
            this.viewDoAction("showTips", r, a, l);
        }
        else {
            this.close();
        }
    };
    LockTipsController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
        this.close();
    };
    LockTipsController = __decorate([
        mj.class("LockTipsController")
    ], LockTipsController);
    return LockTipsController;
}(ViewController_1.default));
exports.default = LockTipsController;

cc._RF.pop();