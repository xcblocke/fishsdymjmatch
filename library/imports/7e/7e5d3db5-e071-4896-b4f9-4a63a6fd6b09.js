"use strict";
cc._RF.push(module, '7e5d3214HFIlrT5SmOm/WsJ', 'FailFreeShuffleDialogView');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var FailFreeShuffleDialogView = /** @class */ (function (_super) {
    __extends(FailFreeShuffleDialogView, _super);
    function FailFreeShuffleDialogView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._closeBtn = null;
        _this._freeShuffleBtn = null;
        _this._onFreeShuffleCallback = null;
        _this._onCloseCallback = null;
        return _this;
    }
    FailFreeShuffleDialogView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    FailFreeShuffleDialogView.prototype.initUI = function () {
        this._freeShuffleBtn = cc.find("content/btn_use", this.node);
    };
    FailFreeShuffleDialogView.prototype.initEvents = function () {
        this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
        this._freeShuffleBtn && this.OnButtonClick(this._freeShuffleBtn, this.onFreeShuffleBtnClick.bind(this));
    };
    FailFreeShuffleDialogView.prototype.setCallbacks = function (e) {
        this._onFreeShuffleCallback = e.onFreeShuffle || null;
        this._onCloseCallback = e.onClose || null;
    };
    FailFreeShuffleDialogView.prototype.onCloseBtnClick = function () {
        var e, t;
        null === (e = this._onCloseCallback) || void 0 === e || e.call(this);
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    FailFreeShuffleDialogView.prototype.onFreeShuffleBtnClick = function () {
        var e, t;
        null === (e = this._onFreeShuffleCallback) || void 0 === e || e.call(this);
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    FailFreeShuffleDialogView.prefabUrl = "prefabs/FailFreeShuffleDialog";
    FailFreeShuffleDialogView = __decorate([
        mj.class
    ], FailFreeShuffleDialogView);
    return FailFreeShuffleDialogView;
}(UIView_1.default));
exports.default = FailFreeShuffleDialogView;

cc._RF.pop();