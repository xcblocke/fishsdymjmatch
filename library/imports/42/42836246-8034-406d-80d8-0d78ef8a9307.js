"use strict";
cc._RF.push(module, '42836JGgDRAbYDYDXjvipMH', 'TaskTrailView');
// subpackages/r_taskRewardProg/Scripts/TaskTrailView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var TaskTrailEffView_1 = require("./TaskTrailEffView");
var TaskTrailView = /** @class */ (function (_super) {
    __extends(TaskTrailView, _super);
    function TaskTrailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trailNode = null;
        _this.isPlaying = false;
        _this.batchCompleteCallback = null;
        _this.isAnimationCompleted = false;
        return _this;
    }
    TaskTrailView_1 = TaskTrailView;
    TaskTrailView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.node.active = false;
    };
    TaskTrailView.prototype.playBatchTrailAnimation = function (e, t, i, n) {
        var o = this;
        this.batchCompleteCallback = i || null;
        this.isAnimationCompleted = false;
        if (cc.isValid(e)) {
            var r = e._taskListView;
            if (r && r._tableView) {
                var a = r._tableView, s = [0, 1, 2], l = cc.find("content/progressBar", e.node);
                if (cc.isValid(l)) {
                    var c = l.getComponent(cc.ProgressBar);
                    if (c) {
                        var p = this.calculateStageProgressIncrement(t), d = c.progress, u = 0, f = s.length;
                        s.forEach(function (t, r) {
                            setTimeout(function () {
                                var s = a.getCellByIndex(t);
                                if (cc.isValid(s)) {
                                    var l = cc.find("TaskItem/content/sp_done", s);
                                    if (cc.isValid(l)) {
                                        var h = l.convertToWorldSpaceAR(cc.v2(0, 0)), y = Math.min(1, d + r * p), g = o.getProgressBarCurrentPos(c.node, y);
                                        o.playTaskItemDoneAnimation(e, s);
                                        o.createTrailInstance(e, h, g, function () {
                                            u++;
                                            n && n(p);
                                            if (u >= f) {
                                                o.markAnimationCompleted();
                                                null == i || i();
                                            }
                                        });
                                    }
                                    else if (++u >= f) {
                                        o.markAnimationCompleted();
                                        null == i || i();
                                    }
                                }
                                else if (++u >= f) {
                                    o.markAnimationCompleted();
                                    null == i || i();
                                }
                            }, 330 * r);
                        });
                    }
                    else {
                        this.markAnimationCompleted();
                        null == i || i();
                    }
                }
                else {
                    this.markAnimationCompleted();
                    null == i || i();
                }
            }
            else {
                this.markAnimationCompleted();
                null == i || i();
            }
        }
        else {
            this.markAnimationCompleted();
            null == i || i();
        }
    };
    TaskTrailView.prototype.playSingleAnimation = function (e, t, i, n) {
        if (i === void 0) { i = 0.5; }
        var o = this;
        if (this.isPlaying)
            null == n || n();
        else if (cc.isValid(this.node.parent)) {
            this.isPlaying = true;
            var r = this.node.parent.convertToNodeSpaceAR(e), a = this.node.parent.convertToNodeSpaceAR(t);
            this.node.setPosition(r);
            this.node.active = true;
            this.trailNode && (this.trailNode.active = true);
            this.playTrailEffect(e, TaskTrailEffView_1.TrailEffType.START);
            var l = (r.x + a.x) / 2, c = Math.max(r.y, a.y) + 20, p = [cc.v2(r.x + 0.5 * (l - r.x), r.y + 0.8 * (c - r.y)), cc.v2(l + 0.5 * (a.x - l), c), a], d = cc.bezierTo(i, p).easing(cc.easeIn(2)), u = cc.callFunc(function () {
                o.playTrailEffect(t, TaskTrailEffView_1.TrailEffType.END);
                o.isPlaying = false;
                o.stopAllAnimations();
                null == n || n();
            }), f = cc.sequence(d, u);
            this.node.runAction(f);
        }
        else
            null == n || n();
    };
    TaskTrailView.prototype.calculateStageProgressIncrement = function (e) {
        var t = mj.getClassByName("TaskModel"), i = null == t ? void 0 : t.getInstance();
        if (!i || !i.STAGE_WEIGHTS)
            return 0;
        var n = i.STAGE_WEIGHTS, o = e > 1 ? n[e - 2] : 0;
        return ((n[e - 1] || 1) - o) / 3;
    };
    TaskTrailView.prototype.playTrailEffect = function (e, t) {
        if (cc.isValid(this.node) && cc.isValid(this.node.parent)) {
            for (var i = this.node.parent, n = null; cc.isValid(i) && !n;)
                (n = i.getComponent("TaskView")) || (i = i.parent);
            if (n) {
                var o = n.createUISync(TaskTrailEffView_1.default);
                if (cc.isValid(o)) {
                    n.node.addChild(o);
                    var r = o.getComponent(TaskTrailEffView_1.default);
                    if (r) {
                        r.playEffect(e, t, function () {
                            cc.isValid(o) && o.destroy();
                        });
                    }
                    else {
                        cc.isValid(o) && o.destroy();
                    }
                }
            }
        }
    };
    TaskTrailView.prototype.createTrailInstance = function (e, t, n, o) {
        var r = e.createUISync(TaskTrailView_1);
        if (cc.isValid(r)) {
            e.node.addChild(r);
            var a = r.getComponent(TaskTrailView_1);
            if (a)
                a.playSingleAnimation(t, n, 0.5, function () {
                    cc.isValid(r) && r.destroy();
                    null == o || o();
                });
            else {
                cc.isValid(r) && r.destroy();
                null == o || o();
            }
        }
        else
            null == o || o();
    };
    TaskTrailView.prototype.getProgressBarCurrentPos = function (e, t) {
        if (!cc.isValid(e))
            return cc.v2(0, 0);
        var i = e.getChildByName("bar");
        if (cc.isValid(i)) {
            var n = i.width, o = (t - i.anchorX) * n, r = cc.v2(o, 0);
            return i.convertToWorldSpaceAR(r);
        }
        var a = e.width, s = (t - e.anchorX) * a, l = cc.v2(s, 0);
        return e.convertToWorldSpaceAR(l);
    };
    TaskTrailView.prototype.playTaskItemDoneAnimation = function (e, t) {
        if (cc.isValid(e) && cc.isValid(t)) {
            var i = cc.find("TaskItem/content/sp_done", t);
            cc.isValid(i) && (i.opacity = 0);
            var n = mj.getClassByName("TaskItemView");
            if (n) {
                var o = t.getComponent(n);
                if (o && cc.isValid(o.node)) {
                    var r = mj.getClassByName("TaskItemLightView");
                    if (r) {
                        var a = e.createUISync(r);
                        if (cc.isValid(a)) {
                            o.node.addChild(a);
                            var s = a.getComponent(r);
                            if (s) {
                                s.alignToTarget && s.alignToTarget(o);
                                s.playDoneAnimation && s.playDoneAnimation();
                            }
                            else
                                cc.isValid(a) && a.destroy();
                        }
                    }
                }
            }
        }
    };
    TaskTrailView.prototype.stopAllAnimations = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = false;
        this.trailNode && (this.trailNode.active = false);
    };
    TaskTrailView.prototype.markAnimationCompleted = function () {
        this.isAnimationCompleted = true;
        this.batchCompleteCallback = null;
    };
    TaskTrailView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.stopAllAnimations();
        this.isPlaying = false;
        if (!this.isAnimationCompleted && this.batchCompleteCallback) {
            var t = this.batchCompleteCallback;
            this.batchCompleteCallback = null;
            this.isAnimationCompleted = true;
            t();
        }
    };
    var TaskTrailView_1;
    TaskTrailView.prefabUrl = "prefabs/TaskTrail";
    TaskTrailView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.node("trail")
    ], TaskTrailView.prototype, "trailNode", void 0);
    TaskTrailView = TaskTrailView_1 = __decorate([
        mj.class
    ], TaskTrailView);
    return TaskTrailView;
}(BaseUI_1.default));
exports.default = TaskTrailView;

cc._RF.pop();