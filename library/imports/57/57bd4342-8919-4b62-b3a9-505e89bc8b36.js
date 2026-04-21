"use strict";
cc._RF.push(module, '57bd4NCiRlLYrOpUF6JvIs2', 'FailFreeShuffleDialogController');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var FailFreeShuffleDialogView_1 = require("./FailFreeShuffleDialogView");
var FailFreeShuffleDialogController = /** @class */ (function (_super) {
    __extends(FailFreeShuffleDialogController, _super);
    function FailFreeShuffleDialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = FailFreeShuffleDialogView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "l_failFreeShuffle";
        _this._onFreeShuffleCallback = null;
        _this._onCloseCallback = null;
        return _this;
    }
    FailFreeShuffleDialogController.prototype.initDependRes = function () { };
    FailFreeShuffleDialogController.prototype.getMessageListeners = function () {
        return {};
    };
    FailFreeShuffleDialogController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10000;
    };
    FailFreeShuffleDialogController.prototype.viewDidShow = function (t) {
        var o = this;
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        if (t) {
            this._onFreeShuffleCallback = t.onFreeShuffle || null;
            this._onCloseCallback = t.onClose || null;
        }
        this.viewDoAction("setCallbacks", {
            onFreeShuffle: function () {
                var e;
                return null === (e = o._onFreeShuffleCallback) || void 0 === e ? void 0 : e.call(o);
            },
            onClose: function () {
                var e;
                return null === (e = o._onCloseCallback) || void 0 === e ? void 0 : e.call(o);
            }
        });
    };
    FailFreeShuffleDialogController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    FailFreeShuffleDialogController = __decorate([
        mj.class("FailFreeShuffleDialogController")
    ], FailFreeShuffleDialogController);
    return FailFreeShuffleDialogController;
}(ViewController_1.default));
exports.default = FailFreeShuffleDialogController;

cc._RF.pop();