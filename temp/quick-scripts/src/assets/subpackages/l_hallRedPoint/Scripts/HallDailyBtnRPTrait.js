"use strict";
cc._RF.push(module, 'a201eVEi6NL+7seJpozwFqz', 'HallDailyBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallDailyBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallDailyBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallDailyBtnRPTrait, _super);
    function HallDailyBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallDailyBtnRPTrait_1 = HallDailyBtnRPTrait;
    Object.defineProperty(HallDailyBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallDailyBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallDailyBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallDailyBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallDailyBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallDailyBtnRPTrait.prototype.updateRedDotOnNode = function (t, e, o) {
        if (cc.isValid(e)) {
            var i = e.getChildByName("unlockRedDot_daily");
            if (o) {
                var r = null == e ? void 0 : e.getChildByName("img_red");
                r && (r.active = false);
                if (i)
                    i.active = true;
                else if (i = new cc.Node("unlockRedDot_daily")) {
                    var n = i.addComponent(cc.Sprite);
                    if (n) {
                        n.sizeMode = cc.Sprite.SizeMode.RAW;
                        n.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(i, this.getRedDotPath(), false, false, "mainRes");
                    i.setPosition(cc.v2(64, 58));
                    e.addChild(i);
                }
            }
            else
                i && (i.active = false);
        }
    };
    HallDailyBtnRPTrait.prototype.onHDailyBtn_updateRed = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = t.args[0];
            this.updateRedDotOnNode(t.ins, i, r);
        }
        catch (t) {
            console.error("[HallDailyBtnRPTrait] onHDailyBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallDailyBtnRPTrait.prototype.onHDailyBtn_onBClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_daily");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallDailyBtnRPTrait.prototype.onDCMedalPush_showPopVw = function (t, e) {
        var o;
        if (this.isClicked)
            e();
        else {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            null == i || i(false);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    var HallDailyBtnRPTrait_1;
    HallDailyBtnRPTrait.traitKey = "HallDailyBtnRP";
    HallDailyBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallDailyBtnRPTrait = HallDailyBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallDailyBtnRPTrait")
    ], HallDailyBtnRPTrait);
    return HallDailyBtnRPTrait;
}(Trait_1.default));
exports.default = HallDailyBtnRPTrait;

cc._RF.pop();