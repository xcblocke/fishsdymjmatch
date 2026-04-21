"use strict";
cc._RF.push(module, 'f2f3eSTXLVPEpNRlojX03lx', 'AlertView');
// Scripts/view/AlertView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var AlertView = /** @class */ (function (_super) {
    __extends(AlertView, _super);
    function AlertView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelBtn = null;
        _this.sureBtn = null;
        _this.content = null;
        _this.sureCallback = null;
        _this.cancelCallback = null;
        _this.autoClose = false;
        return _this;
    }
    AlertView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.cancelBtn = cc.find("Container/main_img_bg/cancelBtn", this.node);
        this.cancelBtn.active = false;
        this.sureBtn = cc.find("Container/main_img_bg/sureBtn", this.node);
        this.sureBtn.active = false;
        this.content = cc.find("Container/main_img_bg/scrollview/view/content/tipsContent", this.node).getComponent(cc.Label);
        this.OnButtonClick(this.cancelBtn, this.onCancelBtnClick.bind(this));
        this.OnButtonClick(this.sureBtn, this.onSureBtnClick.bind(this));
    };
    AlertView.prototype.show = function (e) {
        this.content.string = e.content || "";
        this.sureCallback = e.sureCallback || null;
        this.cancelCallback = e.cancelCallback || null;
        this.autoClose = e.autoClose || false;
        e.cancelCallback && (this.cancelBtn.active = true);
        e.sureCallback && (this.sureBtn.active = true);
    };
    AlertView.prototype.onCancelBtnClick = function () {
        var e;
        null === (e = this.cancelCallback) || void 0 === e || e.call(this);
        this.autoClose && this.delegate.close();
    };
    AlertView.prototype.onSureBtnClick = function () {
        var e;
        null === (e = this.sureCallback) || void 0 === e || e.call(this);
        this.autoClose && this.delegate.close();
    };
    AlertView.prefabUrl = "prefabs/common/Alert";
    AlertView = __decorate([
        mj.class
    ], AlertView);
    return AlertView;
}(UIView_1.default));
exports.default = AlertView;

cc._RF.pop();