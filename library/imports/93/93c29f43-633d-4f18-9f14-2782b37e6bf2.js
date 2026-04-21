"use strict";
cc._RF.push(module, '93c299DYz1PGJ8UJ4Kzfmvy', 'LevelBoxTenFourTrait');
// subpackages/l_levelBox/Scripts/LevelBoxTenFourTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var LevelBoxTenFourTrait = /** @class */ (function (_super) {
    __extends(LevelBoxTenFourTrait, _super);
    function LevelBoxTenFourTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_initCpts = function (t, e) {
        this.initBoxAnim(t.ins);
        e();
    };
    LevelBoxTenFourTrait.prototype.initBoxAnim = function (t) {
        if (t && cc.isValid(t.boxBtn) && cc.isValid(t.conditionTip)) {
            t.boxAnimProxy = BaseSpine_1.default.create("spine/boxReward/result_boxBar", "in", 1, null, false);
            var e = t.boxAnimProxy.node;
            t.boxBtn.addChild(e);
            e.setSiblingIndex(0);
            e.active = false;
            t.boxAnim = e;
            var i = cc.instantiate(t.conditionTip);
            i.setAnchorPoint(cc.v2(0.5, 0.5));
            i.color = cc.color(234, 205, 115);
            var o = i.getComponent(cc.Label);
            o.fontSize = 28;
            o.lineHeight = 40;
            o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            o.verticalAlign = cc.Label.VerticalAlign.CENTER;
            t.levelTip = i;
            t.levelTip.setPosition(cc.v3(0, 0, 0));
            t.levelTip.active = false;
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_upBoxReward = function (t, e) {
        this.updateBoxReward(t.ins, t.args[0]);
        e();
    };
    LevelBoxTenFourTrait.prototype.updateBoxReward = function (t, e) {
        if (cc.isValid(t.boxAnim) && cc.isValid(t.boxAnimProxy) && cc.isValid(t.levelTip) && cc.isValid(t.chestIcon) && cc.isValid(t.boxTipAnim)) {
            var i = e.progress.condType;
            t.boxAnim.active = true;
            t.boxAnimProxy.attachNode("hook_num", function () {
                return t.levelTip;
            });
            t.boxAnim.active = false;
            if (i === LevelBoxTypes_1.ELevelBoxCondType.Level) {
                t.chestIcon.active = false;
                t.boxAnim.active = true;
                t.boxTipAnim.setPosition(cc.v3(0, 80, 0));
            }
            else {
                t.chestIcon.active = true;
                t.boxAnim.active = false;
                t.boxTipAnim.setPosition(cc.v3(0, 53.21, 0));
            }
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_upProgLabel = function (t, e) {
        this.updateProgressLabel(t.ins, t.args[0]);
        e();
    };
    LevelBoxTenFourTrait.prototype.updateProgressLabel = function (t, e) {
        if (t && cc.isValid(t.conditionTip) && cc.isValid(t.levelTip)) {
            var i = e.progress.condValue, o = e.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level;
            t.conditionTip.active = !o;
            t.levelTip.active = o;
            o && I18NStrings_1.default.setText(t.levelTip, "Lv." + i[0], "MahjongTiles_MainPage_TargetLevel", [i[0]]);
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_playCurBarHigh = function (t, e) {
        var i = t.ins;
        if (i.levelBox.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level) {
            var o = i.boxAnimProxy;
            cc.isValid(o) && o.setAnimation("in", 1, function () { });
        }
        e();
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_getCompDelay = function (t, e) {
        if (t.ins.levelBox.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: 0.75
            });
        }
        else {
            e();
        }
    };
    LevelBoxTenFourTrait.traitKey = "LevelBoxTenFour";
    LevelBoxTenFourTrait = __decorate([
        mj.trait,
        mj.class("LevelBoxTenFourTrait")
    ], LevelBoxTenFourTrait);
    return LevelBoxTenFourTrait;
}(Trait_1.default));
exports.default = LevelBoxTenFourTrait;

cc._RF.pop();