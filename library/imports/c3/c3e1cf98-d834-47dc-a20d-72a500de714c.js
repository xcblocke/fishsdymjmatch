"use strict";
cc._RF.push(module, 'c3e1c+Y2DRH3KINcqUA3nFM', 'RankCollectCard');
// subpackages/l_rank/Scripts/RankCollectCard.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankModel_1 = require("./RankModel");
var RankCollectCard = /** @class */ (function (_super) {
    __extends(RankCollectCard, _super);
    function RankCollectCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lab_count = null;
        _this._cardNode = null;
        _this._cardBgNode = null;
        _this._cardSpriteNode = null;
        _this.bg = null;
        _this._isPlayingScaleAnim = false;
        _this._pendingAnimCount = 0;
        _this._currentCount = 0;
        _this._pendingCardCount = 0;
        return _this;
    }
    RankCollectCard.getUrl = function () {
        return this.prefabUrl;
    };
    RankCollectCard.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bg = this.node.getChildByName("bg");
        this.lab_count = cc.find("bg/lab_count", this.node);
        this._cardNode = cc.find("bg/card_node", this.node);
        this._cardBgNode = this._cardNode.getChildByName("card_bg");
        this._cardSpriteNode = this._cardNode.getChildByName("card");
    };
    RankCollectCard.prototype.initUI = function () {
        var t = RankModel_1.default.getInstance(), e = t.getCurBoardData();
        this.updateCardBg();
        var o = (null == e ? void 0 : e.CollectThing) || "";
        o && this.updateCardSprite(o);
        var n = t.getLevelCollectCount();
        this.updateCount(n);
    };
    RankCollectCard.prototype.updateCount = function (t) {
        if (cc.isValid(this.lab_count)) {
            var e = this.lab_count.getComponent(cc.Label);
            e && (e.string = t.toString());
        }
    };
    RankCollectCard.prototype.updateCardBg = function () {
        if (cc.isValid(this._cardBgNode)) {
            var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), e = t.path, o = t.bundleName, n = t.fromAtlas;
            BaseSprite_1.default.refreshWithNode(this._cardBgNode, e, n, false, o);
        }
    };
    RankCollectCard.prototype.updateCardSprite = function () {
        cc.isValid(this._cardNode) && this.updateImgCard(this._cardSpriteNode);
    };
    RankCollectCard.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankCollectCard.prototype.getCardNode = function () {
        return this._cardNode;
    };
    RankCollectCard.prototype.getCardWorldPosition = function () {
        if (!cc.isValid(this._cardSpriteNode))
            return null;
        var t = this._cardSpriteNode.convertToWorldSpaceAR(cc.v2(0, 0));
        return cc.v2(t.x, t.y);
    };
    RankCollectCard.prototype.addPendingCard = function (t) {
        if (t === void 0) { t = 1; }
        this._pendingCardCount += t;
    };
    RankCollectCard.prototype.onCardArrived = function () {
        var t = this;
        if (cc.isValid(this.node)) {
            this._pendingCardCount > 0 && this._pendingCardCount--;
            if (this._isPlayingScaleAnim) {
                this._pendingAnimCount++;
                this.unschedule(this.hideCard);
            }
            else {
                this._isPlayingScaleAnim = true;
                if (cc.isValid(this.bg)) {
                    cc.Tween.stopAllByTarget(this.bg);
                    cc.tween(this.bg).to(0.2, {
                        scale: 1.2
                    }, {
                        easing: "sineOut"
                    }).to(0.2, {
                        scale: 1
                    }, {
                        easing: "sineIn"
                    }).call(function () {
                        t._currentCount++;
                        t.updateCount(t._currentCount);
                        t._isPlayingScaleAnim = false;
                        if (t._pendingAnimCount > 0) {
                            t._pendingAnimCount--;
                            t.onCardArrived();
                        }
                        else
                            0 === t._pendingCardCount && t.scheduleOnce(t.hideCard, 0.2);
                    }).start();
                }
                else
                    this._isPlayingScaleAnim = false;
            }
        }
    };
    RankCollectCard.prototype.hideCard = function () {
        cc.isValid(this.node) && (this.node.active = false);
    };
    RankCollectCard.prototype.resetCount = function () {
        this._pendingAnimCount = 0;
        this._pendingCardCount = 0;
        this._isPlayingScaleAnim = false;
        var t = RankModel_1.default.getInstance().getLevelCollectCount();
        this._currentCount = Math.max(0, t - 2);
        this.updateCount(this._currentCount);
    };
    RankCollectCard.prototype.startShowAnimation = function () {
        this.resetCount();
        this.playShowAnimation();
    };
    RankCollectCard.prototype.playShowAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            if (cc.isValid(t.node)) {
                t.node.opacity = 0;
                t.node.scale = 0;
                cc.Tween.stopAllByTarget(t.node);
                cc.tween(t.node).to(0.2, {
                    opacity: 255,
                    scale: 1
                }, {
                    easing: "sineOut"
                }).call(function () {
                    e();
                }).start();
            }
            else
                e();
        });
    };
    RankCollectCard.prototype.onDestroy = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.unscheduleAllCallbacks();
        _super.prototype.onDestroy.call(this);
    };
    RankCollectCard.prototype.clearNode = function () {
        this._cardNode = null;
        this._cardSpriteNode = null;
        this.destroy();
    };
    RankCollectCard.prototype.setVisible = function (t) {
        this.node && this._cardNode && (this.node.active = t);
    };
    RankCollectCard.prefabUrl = "prefabs/rank/RankCollectCard";
    __decorate([
        mj.traitEvent("RankColCard_initUI")
    ], RankCollectCard.prototype, "initUI", null);
    __decorate([
        mj.traitEvent("RankColCard_updImgCard")
    ], RankCollectCard.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankColCard_onCardArrived")
    ], RankCollectCard.prototype, "onCardArrived", null);
    __decorate([
        mj.traitEvent("RankColCard_clearNode")
    ], RankCollectCard.prototype, "clearNode", null);
    __decorate([
        mj.traitEvent("RankColCard_setVisible")
    ], RankCollectCard.prototype, "setVisible", null);
    __decorate([
        mj.traitEvent("RankColCard_getUrl")
    ], RankCollectCard, "getUrl", null);
    RankCollectCard = __decorate([
        mj.class
    ], RankCollectCard);
    return RankCollectCard;
}(BaseUI_1.default));
exports.default = RankCollectCard;

cc._RF.pop();