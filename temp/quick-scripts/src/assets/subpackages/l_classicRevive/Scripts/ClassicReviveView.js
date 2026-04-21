"use strict";
cc._RF.push(module, 'e0e8edXbp1Byb4SZJ8PEvSD', 'ClassicReviveView');
// subpackages/l_classicRevive/Scripts/ClassicReviveView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var ClassicReviveView = /** @class */ (function (_super) {
    __extends(ClassicReviveView, _super);
    function ClassicReviveView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.titleNode = null;
        _this.progressBar = null;
        _this.timerNode = null;
        _this.reviveBtn = null;
        _this.spineNode = null;
        _this.btnAnimNode = null;
        _this.countDownTween = null;
        _this.curNum = 0;
        _this.totalNum = 6;
        return _this;
    }
    ClassicReviveView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.reviveBtn, this.onReviveBtnClick.bind(this));
        this.playAnim();
    };
    ClassicReviveView.prototype.onReviveBtnClick = function () {
        var e;
        if (null !== this.countDownTween) {
            this.countDownTween.stop();
            this.countDownTween = null;
            DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Close);
            AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic, {
                onSuccess: function () {
                    mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, true);
                },
                onFailed: function () {
                    mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, false);
                }
            });
            null === (e = this.delegate) || void 0 === e || e.close();
        }
    };
    ClassicReviveView.prototype.switchNum = function (e) {
        if (cc.isValid(this.timerNode) && !(e < 0)) {
            e > 5 && (e = 5);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicRevive);
            cc.Tween.stopAllByTarget(this.timerNode);
            BaseSprite_1.default.refreshWithNode(this.timerNode, "atlas/revive_num/" + e, true, true, "l_classicRevive");
            cc.tween(this.timerNode).to(0.13, {
                scale: 1.15
            }).to(0.13, {
                scale: 0.95
            }).to(0.1, {
                scale: 1
            }).start();
        }
    };
    ClassicReviveView.prototype.showNextNum = function () {
        if (this.curNum >= this.totalNum) {
            if (this.countDownTween) {
                this.countDownTween.stop();
                this.countDownTween = null;
                mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, false);
                this.delegate.close();
            }
        }
        else {
            this.switchNum(this.totalNum - this.curNum - 1);
            this.doCountDown();
        }
    };
    ClassicReviveView.prototype.doCountDown = function () {
        var e = this;
        this.countDownTween = cc.tween(this.progressBar).to(1, {
            progress: (this.curNum + 1) / this.totalNum
        }).call(function () {
            e.curNum += 1;
            e.showNextNum();
        }).start();
    };
    ClassicReviveView.prototype.playAnim = function () {
        cc.Tween.stopAllByTarget(this.bgNode);
        cc.Tween.stopAllByTarget(this.titleNode);
        cc.Tween.stopAllByTarget(this.progressBar.node);
        cc.Tween.stopAllByTarget(this.btnAnimNode);
        cc.Tween.stopAllByTarget(this.timerNode);
        cc.Tween.stopAllByTarget(this.spineNode);
        this.bgNode.opacity = 0;
        this.titleNode.opacity = 0;
        this.progressBar.node.scale = 0.85;
        this.progressBar.progress = 0;
        cc.tween(this.titleNode).to(0.17, {
            opacity: 255
        }).start();
        cc.tween(this.bgNode).to(0.17, {
            opacity: 255
        }).start();
        cc.tween(this.progressBar.node).to(0.17, {
            scale: 1
        }).start();
        this.spineNode.setAnimation(0, "init", true);
        var e = cc.tween(this.btnAnimNode).to(0.13, {
            scale: 1.04
        }).to(0.37, {
            scale: 1
        }, {
            easing: cc.easing.cubicInOut
        });
        cc.tween(this.btnAnimNode).repeatForever(e).start();
        this.showNextNum();
    };
    ClassicReviveView.prefabUrl = "prefabs/ClassicRevive";
    __decorate([
        mj.node("bg")
    ], ClassicReviveView.prototype, "bgNode", void 0);
    __decorate([
        mj.node("Title")
    ], ClassicReviveView.prototype, "titleNode", void 0);
    __decorate([
        mj.component("Progress", cc.ProgressBar)
    ], ClassicReviveView.prototype, "progressBar", void 0);
    __decorate([
        mj.node("Timer")
    ], ClassicReviveView.prototype, "timerNode", void 0);
    __decorate([
        mj.node("ReviveBtn")
    ], ClassicReviveView.prototype, "reviveBtn", void 0);
    __decorate([
        mj.component("ReviveBtn/AnimRoot/Layout/Ad/Spine", sp.Skeleton)
    ], ClassicReviveView.prototype, "spineNode", void 0);
    __decorate([
        mj.node("ReviveBtn/AnimRoot")
    ], ClassicReviveView.prototype, "btnAnimNode", void 0);
    ClassicReviveView = __decorate([
        mj.class
    ], ClassicReviveView);
    return ClassicReviveView;
}(UIView_1.default));
exports.default = ClassicReviveView;

cc._RF.pop();