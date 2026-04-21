"use strict";
cc._RF.push(module, 'a57c93nErdDzY9e96bH/oJw', 'RankBonusCollectEffect');
// subpackages/l_rank/Scripts/RankBonusCollectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankModel_1 = require("./RankModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankBonusCollectEffect = /** @class */ (function (_super) {
    __extends(RankBonusCollectEffect, _super);
    function RankBonusCollectEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card_node = null;
        _this.sp_light = null;
        return _this;
    }
    RankBonusCollectEffect.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.card_node = this.node.getChildByName("card_node");
        var e = this.node.getChildByName("sp_light");
        e && (this.sp_light = e.getComponent(sp.Skeleton));
        this.updateCardSprite();
    };
    RankBonusCollectEffect.prototype.updateCardSprite = function () {
        if (cc.isValid(this.card_node)) {
            var t = RankModel_1.default.getInstance().getCurBoardData();
            if (t && t.CollectThing) {
                this.updateImgCard(this.card_node.getChildByName("card"));
                var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), o = e.path, n = e.bundleName, a = e.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.card_node.getChildByName("card_bg"), o, a, false, n);
            }
        }
    };
    RankBonusCollectEffect.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankBonusCollectEffect.prototype.playEffect = function (t, e, o) {
        var n = this;
        if (this.card_node) {
            this.card_node.scale = 0;
            this.card_node.position = cc.v3(0, 0, 0);
            if (this.sp_light) {
                this.sp_light.node.position = cc.v3(0, 0, 0);
                this.sp_light.node.active = false;
            }
            this.card_node.parent.convertToWorldSpaceAR(this.card_node.position);
            cc.tween(this.card_node).to(0.16, {
                scale: 1.3
            }, {
                easing: "cubicIn"
            }).call(function () {
                var a = n.card_node.parent.convertToNodeSpaceAR(t);
                n.sp_light.node.position = cc.v3(a.x, a.y, 0);
                cc.tween(n.card_node).parallel(cc.tween().to(0.34, {
                    scale: 1
                }, {
                    easing: "cubicIn"
                }), cc.tween().to(0.34, {
                    position: cc.v3(a.x, a.y, 0)
                }, {
                    easing: "sineInOut"
                })).call(function () {
                    n.card_node.active = false;
                    n.playLightEffect(e);
                    o && o();
                }).start();
            }).start();
        }
        else
            o && o();
    };
    RankBonusCollectEffect.prototype.playLightEffect = function (t) {
        var e = this;
        this.sp_light;
        this.sp_light.node.active = true;
        var o = t ? "in_2" : "in_1";
        this.sp_light.setAnimation(0, o, false);
        this.sp_light.setCompleteListener(function () {
            e.sp_light.setCompleteListener(null);
            e.node.destroy();
        });
    };
    RankBonusCollectEffect.prototype.stopEffect = function () {
        this.card_node && cc.Tween.stopAllByTarget(this.card_node);
        this.sp_light && this.sp_light.setCompleteListener(null);
    };
    RankBonusCollectEffect.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        this.stopEffect();
    };
    RankBonusCollectEffect.prefabUrl = "prefabs/rank/RankBonusCollectEffect";
    __decorate([
        mj.traitEvent("RankColEff_updImgCard")
    ], RankBonusCollectEffect.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankColEff_playLightEff")
    ], RankBonusCollectEffect.prototype, "playLightEffect", null);
    RankBonusCollectEffect = __decorate([
        mj.class
    ], RankBonusCollectEffect);
    return RankBonusCollectEffect;
}(BaseUI_1.default));
exports.default = RankBonusCollectEffect;

cc._RF.pop();