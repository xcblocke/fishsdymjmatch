"use strict";
cc._RF.push(module, '5639aZfznRI44k8JZtSfANr', 'TaskItemLightView');
// subpackages/r_taskRewardProg/Scripts/TaskItemLightView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var TaskItemLightView = /** @class */ (function (_super) {
    __extends(TaskItemLightView, _super);
    function TaskItemLightView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineBg = null;
        _this.spineDone = null;
        _this.progressGlow = null;
        _this.isShown = false;
        _this.PROGRESS_ANIM_DURATION = 0.5;
        _this.progressTween = null;
        return _this;
    }
    TaskItemLightView_1 = TaskItemLightView;
    TaskItemLightView.playProgressAnimationFor = function (e, t, n, o, r) {
        if (cc.isValid(e) && cc.isValid(e.node)) {
            var a = e.node.getChildByName("TaskItemLightView");
            if (cc.isValid(a)) {
                var s = a.getComponent(TaskItemLightView_1);
                if (s) {
                    s.playProgressAnimation(e, t, n, o, r);
                }
                else {
                    null == r || r();
                }
            }
            else {
                a = e.createUISync(TaskItemLightView_1);
                if (cc.isValid(a)) {
                    e.node.addChild(a);
                    var l = a.getComponent(TaskItemLightView_1);
                    if (l) {
                        l.playProgressAnimation(e, t, n, o, r);
                    }
                    else {
                        null == r || r();
                    }
                }
                else
                    null == r || r();
            }
        }
        else
            null == r || r();
    };
    TaskItemLightView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskItemLightView.prototype.playProgressAnimation = function (e, t, i, n, o) {
        var r = this;
        if (cc.isValid(e) && cc.isValid(e.node)) {
            this.updateProgressUI(e, t, n);
            e.scheduleOnce(function () {
                r.animateProgress(e, t, i, n, function () {
                    if (i >= n) {
                        r.playAnimation(e, o);
                    }
                    else {
                        null == o || o();
                    }
                });
            }, 0);
        }
        else
            null == o || o();
    };
    TaskItemLightView.prototype.playAnimation = function (e, t) {
        if (this.isShown)
            null == t || t();
        else {
            this.isShown = true;
            this.playProgressGlowAnimation(e);
            this.alignToTarget(e);
            this.playAnimationSequence(t);
        }
    };
    TaskItemLightView.prototype.playProgressGlowAnimation = function (e) {
        if (cc.isValid(this.progressGlow) && cc.isValid(e) && cc.isValid(e.node) && cc.isValid(e._cellUI)) {
            this.progressGlow.active = true;
            var t = cc.find("content/progressBar/progressImgBar", e._cellUI);
            if (cc.isValid(t)) {
                this.alignNodeToTarget(this.progressGlow, t);
                this.progressGlow.opacity = 70;
                cc.tween(this.progressGlow).to(1, {
                    opacity: 0
                }, {
                    easing: "sineOut"
                }).call(function () { }).start();
            }
        }
    };
    TaskItemLightView.prototype.updateProgressUI = function (e, t, i) {
        if (cc.isValid(e._cellUI)) {
            var n = cc.find("content/lb_progress", e._cellUI);
            if (n) {
                var o = n.getComponent(cc.Label);
                o && (o.string = t + "/" + i);
            }
            var r = cc.find("content/progressBar", e._cellUI);
            if (r && i > 0) {
                var a = r.getComponent(cc.ProgressBar);
                if (a) {
                    var s = Math.min(t / i, 1);
                    a.progress = s;
                }
            }
        }
    };
    TaskItemLightView.prototype.animateProgress = function (e, t, i, n, o) {
        var r = this;
        if (!cc.isValid(e._cellUI) || n <= 0)
            null == o || o();
        else {
            var a = cc.find("content/progressBar", e._cellUI);
            if (a) {
                var s = a.getComponent(cc.ProgressBar);
                if (s) {
                    var l = cc.find("content/lb_progress", e._cellUI), c = null == l ? void 0 : l.getComponent(cc.Label), p = Math.min(t / n, 1), d = Math.min(i / n, 1);
                    if (p !== d) {
                        var u = {
                            value: p
                        };
                        if (this.progressTween) {
                            this.progressTween.stop();
                            this.progressTween = null;
                        }
                        this.progressTween = cc.tween(u).to(this.PROGRESS_ANIM_DURATION, {
                            value: d
                        }, {
                            easing: "sineInOut",
                            progress: function (e, o, r, a) {
                                var l = e + (o - e) * a;
                                s && cc.isValid(s.node) && (s.progress = l);
                                if (c && cc.isValid(c.node)) {
                                    var p = Math.floor(t + (i - t) * a);
                                    c.string = p + "/" + n;
                                }
                                return l;
                            }
                        }).call(function () {
                            s && cc.isValid(s.node) && (s.progress = d);
                            c && cc.isValid(c.node) && (c.string = i + "/" + n);
                            r.progressTween = null;
                            null == o || o();
                        }).start();
                    }
                    else
                        null == o || o();
                }
                else
                    null == o || o();
            }
            else
                null == o || o();
        }
    };
    TaskItemLightView.prototype.alignToTarget = function (e) {
        if (cc.isValid(this.node) && cc.isValid(null == e ? void 0 : e.node) && cc.isValid(e._cellUI) && this.spineBg && cc.isValid(this.spineBg.node) && this.spineDone && cc.isValid(this.spineDone.node)) {
            var t = this.spineBg.node.x - this.spineDone.node.x, i = this.spineBg.node.y - this.spineDone.node.y, n = cc.find("content/sp_done", e._cellUI);
            if (cc.isValid(n)) {
                this.alignNodeToTarget(this.spineDone.node, n);
                this.spineBg.node.setPosition(this.spineDone.node.x + t, this.spineDone.node.y + i, 0);
                n.opacity = 0;
            }
        }
    };
    TaskItemLightView.prototype.alignNodeToTarget = function (e, t) {
        if (cc.isValid(e) && cc.isValid(t) && cc.isValid(e.parent)) {
            var i = t.convertToWorldSpaceAR(cc.v2(0, 0)), n = e.parent.convertToNodeSpaceAR(i);
            e.setPosition(cc.v3(n.x, n.y, 0));
        }
    };
    TaskItemLightView.prototype.playAnimationSequence = function (e) {
        this.playBgAnimation(function () {
            null == e || e();
        });
        this.playDoneAnimation();
    };
    TaskItemLightView.prototype.playBgAnimation = function (e) {
        if (this.spineBg && cc.isValid(this.spineBg.node)) {
            this.spineBg.node.active = true;
            CommonUtils_1.playSpineAnim(this.spineBg, 1, "in2", function () {
                null == e || e();
            });
        }
        else
            null == e || e();
    };
    TaskItemLightView.prototype.playDoneAnimation = function () {
        var e = this;
        if (this.spineDone && cc.isValid(this.spineDone.node)) {
            this.spineDone.node.active = true;
            CommonUtils_1.playSpineAnim(this.spineDone, 1, "in1", function () {
                CommonUtils_1.playSpineAnim(e.spineDone, -1, "init1");
            });
        }
    };
    TaskItemLightView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.isShown = false;
        if (this.progressTween) {
            this.progressTween.stop();
            this.progressTween = null;
        }
    };
    var TaskItemLightView_1;
    TaskItemLightView.prefabUrl = "prefabs/TaskItemLight";
    TaskItemLightView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.component("spine_bg", sp.Skeleton)
    ], TaskItemLightView.prototype, "spineBg", void 0);
    __decorate([
        mj.component("spine_done", sp.Skeleton)
    ], TaskItemLightView.prototype, "spineDone", void 0);
    __decorate([
        mj.node("progressGlow")
    ], TaskItemLightView.prototype, "progressGlow", void 0);
    __decorate([
        mj.traitEvent("TaskItemLtVw_onLoad")
    ], TaskItemLightView.prototype, "onLoad", null);
    TaskItemLightView = TaskItemLightView_1 = __decorate([
        mj.class
    ], TaskItemLightView);
    return TaskItemLightView;
}(BaseUI_1.default));
exports.default = TaskItemLightView;

cc._RF.pop();