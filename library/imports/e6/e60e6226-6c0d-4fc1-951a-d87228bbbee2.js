"use strict";
cc._RF.push(module, 'e60e6ImbA1PwZUa2HIou77i', 'HallSignBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallSignBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallSignBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallSignBtnRPTrait, _super);
    function HallSignBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallSignBtnRPTrait_1 = HallSignBtnRPTrait;
    Object.defineProperty(HallSignBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallSignBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallSignBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallSignBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallSignBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallSignBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallSignBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallSignBtnRPTrait.prototype.shouldShowRedDot = function () {
        var t, e;
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var o = mj.getClassByName("DailySignClassicModel"), i = null === (t = null == o ? void 0 : o.getInstance) || void 0 === t ? void 0 : t.call(o);
        return !(null === (e = null == i ? void 0 : i.isUnlocked) || void 0 === e || !e.call(i));
    };
    HallSignBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_sign");
            if (e) {
                var i = t.getChildByName("img_red");
                i && (i.active = false);
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_sign")) {
                    var r = o.addComponent(cc.Sprite);
                    if (r) {
                        r.sizeMode = cc.Sprite.SizeMode.RAW;
                        r.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(cc.v2(55, 70));
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallSignBtnRPTrait.prototype.onSignBtn_onLoad = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            this.updateRedDotOnNode(i, r);
        }
        catch (t) {
            console.error("[HallSignBtnRPTrait] onSignBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_updateLock = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            this.updateRedDotOnNode(i, r);
        }
        catch (t) {
            console.error("[HallSignBtnRPTrait] onSignBtn_updateLock 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_click = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_sign");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_checkRedDot = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i) && this.shouldShowRedDot()) {
            var r = i.getChildByName("img_red");
            r && (r.active = false);
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_updateRedDot = function (t, e) {
        if (this.shouldShowRedDot()) {
            e({
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    HallSignBtnRPTrait.prototype.onDSClassic_showPopVw = function (t, e) {
        var o, i;
        if (this.shouldShowRedDot()) {
            null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o.updateSettingRedDot) || void 0 === i || i.call(o);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var HallSignBtnRPTrait_1;
    HallSignBtnRPTrait.traitKey = "HallSignBtnRP";
    HallSignBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallSignBtnRPTrait = HallSignBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallSignBtnRPTrait")
    ], HallSignBtnRPTrait);
    return HallSignBtnRPTrait;
}(Trait_1.default));
exports.default = HallSignBtnRPTrait;

cc._RF.pop();