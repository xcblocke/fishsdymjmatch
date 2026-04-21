"use strict";
cc._RF.push(module, '557b4tIv+BCX7OMHeycAm8W', 'HallTravelBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallTravelBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallTravelBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallTravelBtnRPTrait, _super);
    function HallTravelBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._curSessionRed = false;
        return _this;
    }
    HallTravelBtnRPTrait_1 = HallTravelBtnRPTrait;
    Object.defineProperty(HallTravelBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallTravelBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallTravelBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._curSessionRed = false;
        this._config = this._traitData || {};
    };
    HallTravelBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTravelBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallTravelBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallTravelBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallTravelBtnRPTrait.prototype.isTravelUnlocked = function () {
        try {
            var t = mj.getClassByName("JourneyTrait");
            if (null == t ? void 0 : t.getInstance) {
                var e = t.getInstance();
                if (null == e ? void 0 : e.isActiveJourney)
                    return e.isActiveJourney();
            }
        }
        catch (t) { }
        return false;
    };
    HallTravelBtnRPTrait.prototype.shouldShowRedDot = function () {
        return !!this.isEnabled() && !!this.isTravelUnlocked() && !this.isClicked;
    };
    HallTravelBtnRPTrait.prototype.updateRedDotOnNode = function (t, e, o) {
        var i;
        if (cc.isValid(e)) {
            var r = e.getChildByName("unlockRedDot_travel");
            if (o) {
                t.redDotNode && cc.isValid(t.redDotNode) && (t.redDotNode.active = false);
                if (r)
                    r.active = true;
                else if (r = new cc.Node("unlockRedDot_travel")) {
                    r.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                    BaseSprite_1.default.refreshWithNode(r, this.getRedDotPath(), false, false, "mainRes");
                    var n = this.getDotPos(t);
                    r.setPosition(n);
                    e.addChild(r);
                }
            }
            else {
                r && (r.active = false);
                null === (i = t.updateState) || void 0 === i || i.call(t);
            }
        }
    };
    HallTravelBtnRPTrait.prototype.getDotPos = function () {
        return cc.v2(294, 80);
    };
    HallTravelBtnRPTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            r && (this._curSessionRed = true);
            this.updateRedDotOnNode(t.ins, i, r);
        }
        catch (t) {
            console.error("[HallTravelBtnRPTrait] onTravelBtn_updateUI 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallTravelBtnRPTrait.prototype.onTravelBtn_onBtnClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_travel");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallTravelBtnRPTrait.prototype.onJourney_ShowActiveVw = function (t, e) {
        if (this._curSessionRed) {
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    var HallTravelBtnRPTrait_1;
    HallTravelBtnRPTrait.traitKey = "HallTravelBtnRP";
    HallTravelBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    __decorate([
        mj.traitEvent("HTravelBtnRP_getDotPos")
    ], HallTravelBtnRPTrait.prototype, "getDotPos", null);
    HallTravelBtnRPTrait = HallTravelBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallTravelBtnRPTrait")
    ], HallTravelBtnRPTrait);
    return HallTravelBtnRPTrait;
}(Trait_1.default));
exports.default = HallTravelBtnRPTrait;

cc._RF.pop();