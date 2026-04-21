"use strict";
cc._RF.push(module, '45c1aF16oNMqLfzyObdLx7M', 'MainGameMatchNumTrait');
// subpackages/l_mainGameMatchNum/Scripts/MainGameMatchNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UpdateMatchNumEffect_1 = require("../../../Scripts/UpdateMatchNumEffect");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var MainGameMatchNumTrait = /** @class */ (function (_super) {
    __extends(MainGameMatchNumTrait, _super);
    function MainGameMatchNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameMatchNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameMatchNumTrait.prototype.onIptInitView_pushEff = function (t, e) {
        this.showMatchNum(t.ins);
        e();
    };
    MainGameMatchNumTrait.prototype.onIptEnterAni_excute = function (t, e) {
        this.showMatchNum(t.ins);
        e();
    };
    MainGameMatchNumTrait.prototype.showMatchNum = function (t) {
        var e = t.gameContext.gameType;
        if (e === GameTypeEnums_1.MjGameType.DailyChallenge || e === GameTypeEnums_1.MjGameType.Normal) {
            var o = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
                canMatchCardPairNum: t.gameContext.getTileMapObject().getCanMatchCardPairNum(),
                isShow: true
            });
            t.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    MainGameMatchNumTrait.prototype.onUpdateMatchNumBhv_start = function (t, e) {
        var o, r, i;
        if (t.args[0] && (null === (o = t.args[0].data) || void 0 === o ? void 0 : o.isShow)) {
            var a = null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameView;
            if (a && a.topRootNode) {
                var n = a.topRootNode.getChildByName("labelCanMatchNum");
                n && (n.active = true);
                var c = a.topRootNode.getChildByName("labelMatch");
                c && (c.active = true);
            }
        }
        e();
    };
    MainGameMatchNumTrait.prototype.onRwdComboBhv_bonusAud = function (t, e) {
        var o, r;
        this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
        e();
    };
    MainGameMatchNumTrait.prototype.onFullComboBhv_playAudio = function (t, e) {
        var o, r;
        this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
        e();
    };
    MainGameMatchNumTrait.prototype.hideMatchNum = function (t) {
        if (t && t.topRootNode) {
            var e = t.topRootNode.getChildByName("labelCanMatchNum");
            e && (e.active = false);
        }
    };
    MainGameMatchNumTrait.traitKey = "MainGameMatchNum";
    MainGameMatchNumTrait = __decorate([
        mj.trait,
        mj.class("MainGameMatchNumTrait")
    ], MainGameMatchNumTrait);
    return MainGameMatchNumTrait;
}(Trait_1.default));
exports.default = MainGameMatchNumTrait;

cc._RF.pop();