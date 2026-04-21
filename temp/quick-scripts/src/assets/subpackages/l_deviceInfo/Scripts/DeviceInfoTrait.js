"use strict";
cc._RF.push(module, '23e44/V/GJA9KPoYNbFzRUf', 'DeviceInfoTrait');
// subpackages/l_deviceInfo/Scripts/DeviceInfoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeviceInfoTrait = /** @class */ (function (_super) {
    __extends(DeviceInfoTrait, _super);
    function DeviceInfoTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._clickCount = 0;
        _this._triggerClickCount = 12;
        _this._resetTimer = null;
        _this._clickTimeout = 500;
        _this._boundNode = null;
        return _this;
    }
    DeviceInfoTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DeviceInfoTrait.prototype.onLangSelVw_start = function (e, t) {
        var i = e.ins.node;
        this.bindTitleClick(i);
        t();
    };
    DeviceInfoTrait.prototype.bindTitleClick = function (e) {
        if (cc.isValid(e)) {
            var t = e.getChildByName("content");
            if (cc.isValid(t)) {
                var i = t.getChildByName("top_bg");
                if (cc.isValid(i)) {
                    var o = i.getChildByName("title_img");
                    if (cc.isValid(o)) {
                        this._clickCount = 0;
                        if (null !== this._resetTimer) {
                            clearTimeout(this._resetTimer);
                            this._resetTimer = null;
                        }
                        cc.isValid(this._boundNode) && this._boundNode.off(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
                        o.on(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
                        this._boundNode = o;
                    }
                }
            }
        }
    };
    DeviceInfoTrait.prototype.onTitleClick = function () {
        var e = this;
        if (null !== this._resetTimer) {
            clearTimeout(this._resetTimer);
            this._resetTimer = null;
        }
        this._clickCount++;
        if (this._clickCount >= this._triggerClickCount) {
            this._clickCount = 0;
            this.showDeviceInfoPanel();
        }
        else
            this._resetTimer = window['setTimeout'](function () {
                e._clickCount = 0;
                e._resetTimer = null;
            }, this._clickTimeout);
    };
    DeviceInfoTrait.prototype.showDeviceInfoPanel = function () {
        this.pushController("DeviceInfoPanelController", {});
    };
    DeviceInfoTrait.prototype.isShowPlanInfo = function () {
        return this._traitData.isShowPlanInfo;
    };
    DeviceInfoTrait.traitKey = "DeviceInfo";
    DeviceInfoTrait = __decorate([
        mj.trait,
        mj.class("DeviceInfoTrait")
    ], DeviceInfoTrait);
    return DeviceInfoTrait;
}(Trait_1.default));
exports.default = DeviceInfoTrait;

cc._RF.pop();