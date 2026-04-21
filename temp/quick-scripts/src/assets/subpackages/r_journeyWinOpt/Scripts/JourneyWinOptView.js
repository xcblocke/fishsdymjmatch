"use strict";
cc._RF.push(module, '7911bhnMTxP4oz/mMwgTbfP', 'JourneyWinOptView');
// subpackages/r_journeyWinOpt/Scripts/JourneyWinOptView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var JourneyWinOptView = /** @class */ (function (_super) {
    __extends(JourneyWinOptView, _super);
    function JourneyWinOptView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineVictory = null;
        _this.lblTitleOpt = null;
        _this.progress_container = null;
        _this.progress_bar = null;
        _this.isShown = false;
        _this.targetProgress = 0;
        return _this;
    }
    JourneyWinOptView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyWinOptView.prototype.showUI = function (t) {
        if (!this.isShown) {
            this.isShown = true;
            var e = this.getTitleNode(t);
            if (e) {
                this.setTitle(e);
                this.playSpineAnimation();
                this.playTitleAnimation();
                this.dealProgress(t);
            }
        }
    };
    JourneyWinOptView.prototype.dealProgress = function (t) {
        var e = this;
        cc.isValid(this.progress_container) && (this.progress_container.active = false);
        var r = cc.find("progress", t), i = cc.find("progress/Progress", t);
        if (cc.isValid(i) && cc.isValid(r)) {
            var o = i.getComponent(cc.ProgressBar);
            if (o) {
                this.targetProgress = o.endProgress || 0;
                cc.isValid(this.progress_bar) && (this.progress_bar.progress = o.progress);
                i.active = false;
                var n = r.getSiblingIndex();
                this.node.setSiblingIndex(n);
                this.scheduleOnce(function () {
                    e.playProgressBarAnimation();
                }, 0.6);
            }
        }
    };
    JourneyWinOptView.prototype.playTitleAnimation = function () {
        var t;
        if (cc.isValid(null === (t = this.lblTitleOpt) || void 0 === t ? void 0 : t.node)) {
            this.lblTitleOpt.node.opacity = 255;
            this.lblTitleOpt.node.scale = 0;
            this.lblTitleOpt.node.stopAllActions();
            cc.tween(this.lblTitleOpt.node).delay(0.5).to(0.2, {
                scale: 1.2
            }, {
                easing: cc.easing.quartOut
            }).to(0.2, {
                scale: 1
            }, {
                easing: cc.easing.quartIn
            }).start();
        }
    };
    JourneyWinOptView.prototype.playProgressBarAnimation = function () {
        if (cc.isValid(this.progress_bar) && cc.isValid(this.progress_container)) {
            this.progress_container.active = true;
            this.progress_container.opacity = 0;
            this.progress_container.scale = 0.7;
            cc.Tween.stopAllByTarget(this.progress_container);
            cc.tween(this.progress_container).to(0.3, {
                opacity: 255,
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.14, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }).start();
            cc.Tween.stopAllByTarget(this.progress_bar);
            cc.tween(this.progress_bar).delay(0.6).to(0.3, {
                progress: this.targetProgress
            }, {
                easing: cc.easing.quadInOut
            }).start();
        }
    };
    JourneyWinOptView.prototype.playSpineAnimation = function () {
        cc.isValid(this.spineVictory) && this.spineVictory.setAnimation(0, "in", false);
    };
    JourneyWinOptView.prototype.getTitleNode = function (t) {
        if (!cc.isValid(t))
            return null;
        var e = t.getChildByName("lbl_title");
        return cc.isValid(e) ? e : null;
    };
    JourneyWinOptView.prototype.setTitle = function (t) {
        var e = t.getComponent(cc.Label);
        if (e) {
            t.active = false;
            cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = e.string);
        }
    };
    JourneyWinOptView.prototype.onDestroy = function () {
        var e;
        _super.prototype.onDestroy.call(this);
        this.isShown = false;
        this.unscheduleAllCallbacks();
        cc.isValid(this.progress_container) && cc.Tween.stopAllByTarget(this.progress_container);
        cc.isValid(this.progress_bar) && cc.Tween.stopAllByTarget(this.progress_bar);
        cc.isValid(null === (e = this.lblTitleOpt) || void 0 === e ? void 0 : e.node) && this.lblTitleOpt.node.stopAllActions();
    };
    JourneyWinOptView.prefabUrl = "prefabs/JourneyWinOpt";
    JourneyWinOptView.bundleName = "r_journeyWinOpt";
    __decorate([
        mj.component("spine_victory", sp.Skeleton)
    ], JourneyWinOptView.prototype, "spineVictory", void 0);
    __decorate([
        mj.component("lb_title_opt", cc.Label)
    ], JourneyWinOptView.prototype, "lblTitleOpt", void 0);
    __decorate([
        mj.node("progress_opt")
    ], JourneyWinOptView.prototype, "progress_container", void 0);
    __decorate([
        mj.component("progress_opt/Progress", cc.ProgressBar)
    ], JourneyWinOptView.prototype, "progress_bar", void 0);
    JourneyWinOptView = __decorate([
        mj.class
    ], JourneyWinOptView);
    return JourneyWinOptView;
}(BaseUI_1.default));
exports.default = JourneyWinOptView;

cc._RF.pop();