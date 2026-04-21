"use strict";
cc._RF.push(module, '00de2vHqj9ATI+XmzPB8XPx', 'ScoreItem');
// Scripts/core/view/items/ScoreItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var GameUtils_1 = require("../../simulator/util/GameUtils");
var ScoreItem = /** @class */ (function (_super) {
    __extends(ScoreItem, _super);
    function ScoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skeCombo = null;
        _this._skeShow = null;
        _this._lblNormalScore = null;
        _this._scoreDynamicAccum = null;
        _this._scaleAnimationTween = null;
        _this._isScaling = false;
        _this._isScrolling = false;
        _this._isAtMaxScale = false;
        _this._dynamicAccumComp = null;
        return _this;
    }
    ScoreItem.prototype.setDynamicAccumComp = function (e) {
        this._dynamicAccumComp = e;
    };
    ScoreItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._skeCombo = this.node.getChildByName("spin_combo").getComponent(sp.Skeleton);
        this._skeShow = this.node.getChildByName("spin_show").getComponent(sp.Skeleton);
        this._lblNormalScore = this.node.getChildByName("lbl_normal").getComponent(cc.Label);
        this._lblNormalScore.string = "0";
        this._skeCombo.node.active = false;
        this._skeShow.node.active = false;
        this.node.active = false;
        this.playComboAni();
    };
    ScoreItem.prototype.playComboAni = function () {
        GameUtils_1.default.playSpine(this._skeCombo, "init", true);
    };
    ScoreItem.prototype.updateScore = function (e, t, o) {
        var n = this;
        this.node.active || (this.node.active = true);
        this._skeCombo.node.active = o;
        if (e <= 0)
            this._lblNormalScore.string = t.toString();
        else if (!((Number(this._lblNormalScore.string) || 0) >= t)) {
            this._skeShow.node.active = true;
            GameUtils_1.default.playSpine(this._skeShow, o ? "in_2" : "in_1", false, function () {
                n._skeShow.node.active = false;
            });
            this.handleScoreAnimation(t);
        }
    };
    ScoreItem.prototype.getScoreBaseScale = function () {
        return 1;
    };
    ScoreItem.prototype.forceUpdateScore = function (e) {
        this.cleanup();
        var t = this.getScoreBaseScale();
        this._lblNormalScore.node.scale = t;
        this._isScaling = false;
        this._isScrolling = false;
        this._isAtMaxScale = false;
        this._lblNormalScore.string = e.toString();
        this._skeCombo.node.active = false;
        this._skeShow.node.active = false;
    };
    ScoreItem.prototype.handleScoreAnimation = function (e) {
        if (this._isScrolling)
            this.updateScrollAnimation(e);
        else {
            this.playScoreScaleUpAnimation();
            this.playScoreScrollAnimation(e);
        }
    };
    ScoreItem.prototype.playScoreScaleUpAnimation = function () {
        var e = this;
        this._isScaling = true;
        var t = this.getScoreBaseScale();
        this._lblNormalScore.node.scale = t;
        this.stopScoreScaleAnimation();
        this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
            scale: 1.3 * t
        }, {
            easing: "quintOut"
        }).call(function () {
            e._scaleAnimationTween = null;
            e._isScaling = false;
            e._isAtMaxScale = true;
        }).start();
    };
    ScoreItem.prototype.playScoreScaleDownAnimation = function () {
        var e = this;
        if (this._isAtMaxScale && !this._isScaling) {
            this._isScaling = true;
            this.stopScoreScaleAnimation();
            var t = this.getScoreBaseScale();
            this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
                scale: t
            }, {
                easing: "quintIn"
            }).call(function () {
                e._scaleAnimationTween = null;
                e._isScaling = false;
                e._isAtMaxScale = false;
            }).start();
        }
    };
    ScoreItem.prototype.stopScoreScaleAnimation = function () {
        if (this._scaleAnimationTween) {
            this._scaleAnimationTween.stop();
            this._scaleAnimationTween = null;
        }
    };
    ScoreItem.prototype.updateScrollAnimation = function (e) {
        this._scoreDynamicAccum && this._scoreDynamicAccum.updateTargetValue(e);
    };
    ScoreItem.prototype.playScoreScrollAnimation = function (e) {
        var t = this, o = Number(this._lblNormalScore.string) || 0;
        if (!(o >= e))
            if (this._scoreDynamicAccum)
                this._scoreDynamicAccum.updateTargetValue(e);
            else {
                this._isScrolling = true;
                this._scoreDynamicAccum = this._dynamicAccumComp.create(o, e, 0.5, function (e, o) {
                    var n = Math.floor(e);
                    t._lblNormalScore.string = n.toString();
                    t.checkScaleDownTiming(o);
                }, function (e) {
                    t._lblNormalScore.string = e.toString();
                    t._scoreDynamicAccum = null;
                    t._isScrolling = false;
                });
            }
    };
    ScoreItem.prototype.checkScaleDownTiming = function (e) {
        this._isAtMaxScale && !this._isScaling && e >= 0.6 && this.playScoreScaleDownAnimation();
    };
    ScoreItem.prototype.cleanup = function () {
        this.stopScoreScaleAnimation();
        if (this._scoreDynamicAccum) {
            this._dynamicAccumComp.removeHandler(this._scoreDynamicAccum);
            this._scoreDynamicAccum = null;
        }
        this._isScaling = false;
        this._isScrolling = false;
        this._isAtMaxScale = false;
    };
    ScoreItem.prototype.resetForRestart = function () {
        this.forceUpdateScore(0);
    };
    ScoreItem.prototype.onDestroy = function () {
        this.cleanup();
        _super.prototype.onDestroy.call(this);
    };
    __decorate([
        mj.traitEvent("ScoreItem_playComboAni")
    ], ScoreItem.prototype, "playComboAni", null);
    __decorate([
        mj.traitEvent("ScoreItem_updScore")
    ], ScoreItem.prototype, "updateScore", null);
    __decorate([
        mj.traitEvent("ScoreItem_getBaseScale")
    ], ScoreItem.prototype, "getScoreBaseScale", null);
    __decorate([
        mj.traitEvent("ScoreItem_forceUpdScore")
    ], ScoreItem.prototype, "forceUpdateScore", null);
    ScoreItem = __decorate([
        mj.class
    ], ScoreItem);
    return ScoreItem;
}(BaseUI_1.default));
exports.default = ScoreItem;

cc._RF.pop();