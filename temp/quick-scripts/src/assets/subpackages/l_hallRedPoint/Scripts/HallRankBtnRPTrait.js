"use strict";
cc._RF.push(module, 'e98fd++VPxJCZ0ASgLNo4e5', 'HallRankBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallRankBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallRankBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnRPTrait, _super);
    function HallRankBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallRankBtnRPTrait_1 = HallRankBtnRPTrait;
    Object.defineProperty(HallRankBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallRankBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallRankBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallRankBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallRankBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallRankBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallRankBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallRankBtnRPTrait.prototype.shouldShowRedDot = function () {
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var t = mj.getClassByName("HallRankBtnLockTrait"), e = null == t ? void 0 : t.getInstance();
        return !(true === (null == e ? void 0 : e.eventEnabled) && !e.isRankOpen());
    };
    HallRankBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_rank");
            if (e) {
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_rank")) {
                    var i = o.addComponent(cc.Sprite);
                    if (i) {
                        i.sizeMode = cc.Sprite.SizeMode.RAW;
                        i.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(55, 78);
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallRankBtnRPTrait.prototype.onRankBtn_updateAll = function (t, e) {
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
            console.error("[HallRankBtnRPTrait] onRankBtn_updateAll 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallRankBtnRPTrait.prototype.onRankBtn_click = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_rank");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    var HallRankBtnRPTrait_1;
    HallRankBtnRPTrait.traitKey = "HallRankBtnRP";
    HallRankBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallRankBtnRPTrait = HallRankBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallRankBtnRPTrait")
    ], HallRankBtnRPTrait);
    return HallRankBtnRPTrait;
}(Trait_1.default));
exports.default = HallRankBtnRPTrait;

cc._RF.pop();