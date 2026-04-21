
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_taskRewardProg/Scripts/TaskTrailView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3Rhc2tSZXdhcmRQcm9nL1NjcmlwdHMvVGFza1RyYWlsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHVEQUFvRTtBQUVwRTtJQUEyQyxpQ0FBTTtJQUFqRDtRQUFBLHFFQXFNQztRQW5NQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDBCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUFnTS9CLENBQUM7c0JBck1vQixhQUFhO0lBUWhDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsK0NBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMs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LElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsOENBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxpQ0FBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM1RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQTlMTSx1QkFBUyxHQUFHLG1CQUFtQixDQUFDO0lBQ2hDLHdCQUFVLEdBQUcsa0JBQWtCLENBQUM7SUFMdkM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvREFDUztJQUZQLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUs7T0FDWSxhQUFhLENBcU1qQztJQUFELG9CQUFDO0NBck1ELEFBcU1DLENBck0wQyxnQkFBTSxHQXFNaEQ7a0JBck1vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IFRhc2tUcmFpbEVmZlZpZXcsIHsgVHJhaWxFZmZUeXBlIH0gZnJvbSAnLi9UYXNrVHJhaWxFZmZWaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1RyYWlsVmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwidHJhaWxcIilcbiAgdHJhaWxOb2RlOiBcInRyYWlsXCIgPSBudWxsO1xuICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgYmF0Y2hDb21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcbiAgaXNBbmltYXRpb25Db21wbGV0ZWQgPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9UYXNrVHJhaWxcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcInJfdGFza1Jld2FyZFByb2dcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBwbGF5QmF0Y2hUcmFpbEFuaW1hdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHRoaXMuYmF0Y2hDb21wbGV0ZUNhbGxiYWNrID0gaSB8fCBudWxsO1xuICAgIHRoaXMuaXNBbmltYXRpb25Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIHIgPSBlLl90YXNrTGlzdFZpZXc7XG4gICAgICBpZiAociAmJiByLl90YWJsZVZpZXcpIHtcbiAgICAgICAgdmFyIGEgPSByLl90YWJsZVZpZXcsXG4gICAgICAgICAgcyA9IFswLCAxLCAyXSxcbiAgICAgICAgICBsID0gY2MuZmluZChcImNvbnRlbnQvcHJvZ3Jlc3NCYXJcIiwgZS5ub2RlKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobCkpIHtcbiAgICAgICAgICB2YXIgYyA9IGwuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmNhbGN1bGF0ZVN0YWdlUHJvZ3Jlc3NJbmNyZW1lbnQodCksXG4gICAgICAgICAgICAgIGQgPSBjLnByb2dyZXNzLFxuICAgICAgICAgICAgICB1ID0gMCxcbiAgICAgICAgICAgICAgZiA9IHMubGVuZ3RoO1xuICAgICAgICAgICAgcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzID0gYS5nZXRDZWxsQnlJbmRleCh0KTtcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChzKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGwgPSBjYy5maW5kKFwiVGFza0l0ZW0vY29udGVudC9zcF9kb25lXCIsIHMpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQobCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBsLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWluKDEsIGQgKyByICogcCksXG4gICAgICAgICAgICAgICAgICAgICAgZyA9IG8uZ2V0UHJvZ3Jlc3NCYXJDdXJyZW50UG9zKGMubm9kZSwgeSk7XG4gICAgICAgICAgICAgICAgICAgIG8ucGxheVRhc2tJdGVtRG9uZUFuaW1hdGlvbihlLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgby5jcmVhdGVUcmFpbEluc3RhbmNlKGUsIGgsIGcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1Kys7XG4gICAgICAgICAgICAgICAgICAgICAgbiAmJiBuKHApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh1ID49IGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubWFya0FuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBpIHx8IGkoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgrK3UgPj0gZikge1xuICAgICAgICAgICAgICAgICAgICBvLm1hcmtBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBpIHx8IGkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCsrdSA+PSBmKSB7XG4gICAgICAgICAgICAgICAgICBvLm1hcmtBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCAzMzAgKiByKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWFya0FuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFya0FuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgICAgICBudWxsID09IGkgfHwgaSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgfVxuICB9XG4gIHBsYXlTaW5nbGVBbmltYXRpb24oZSwgdCwgaSA9IDAuNSwgbj8pIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSBudWxsID09IG4gfHwgbigpO2Vsc2UgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlLnBhcmVudCkpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIHZhciByID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKSxcbiAgICAgICAgYSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodCk7XG4gICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocik7XG4gICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhaWxOb2RlICYmICh0aGlzLnRyYWlsTm9kZS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIHRoaXMucGxheVRyYWlsRWZmZWN0KGUsIFRyYWlsRWZmVHlwZS5TVEFSVCk7XG4gICAgICB2YXIgbCA9IChyLnggKyBhLngpIC8gMixcbiAgICAgICAgYyA9IE1hdGgubWF4KHIueSwgYS55KSArIDIwLFxuICAgICAgICBwID0gW2NjLnYyKHIueCArIDAuNSAqIChsIC0gci54KSwgci55ICsgMC44ICogKGMgLSByLnkpKSwgY2MudjIobCArIDAuNSAqIChhLnggLSBsKSwgYyksIGFdLFxuICAgICAgICBkID0gY2MuYmV6aWVyVG8oaSwgcCkuZWFzaW5nKGNjLmVhc2VJbigyKSksXG4gICAgICAgIHUgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgby5wbGF5VHJhaWxFZmZlY3QodCwgVHJhaWxFZmZUeXBlLkVORCk7XG4gICAgICAgICAgby5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICBvLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgICAgICAgbnVsbCA9PSBuIHx8IG4oKTtcbiAgICAgICAgfSksXG4gICAgICAgIGYgPSBjYy5zZXF1ZW5jZShkLCB1KTtcbiAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oZik7XG4gICAgfSBlbHNlIG51bGwgPT0gbiB8fCBuKCk7XG4gIH1cbiAgY2FsY3VsYXRlU3RhZ2VQcm9ncmVzc0luY3JlbWVudChlKSB7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKSxcbiAgICAgIGkgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCFpIHx8ICFpLlNUQUdFX1dFSUdIVFMpIHJldHVybiAwO1xuICAgIHZhciBuID0gaS5TVEFHRV9XRUlHSFRTLFxuICAgICAgbyA9IGUgPiAxID8gbltlIC0gMl0gOiAwO1xuICAgIHJldHVybiAoKG5bZSAtIDFdIHx8IDEpIC0gbykgLyAzO1xuICB9XG4gIHBsYXlUcmFpbEVmZmVjdChlLCB0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZS5wYXJlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5ub2RlLnBhcmVudCwgbiA9IG51bGw7IGNjLmlzVmFsaWQoaSkgJiYgIW47KSAobiA9IGkuZ2V0Q29tcG9uZW50KFwiVGFza1ZpZXdcIikpIHx8IChpID0gaS5wYXJlbnQpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIG8gPSBuLmNyZWF0ZVVJU3luYyhUYXNrVHJhaWxFZmZWaWV3KTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgICBuLm5vZGUuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgdmFyIHIgPSBvLmdldENvbXBvbmVudChUYXNrVHJhaWxFZmZWaWV3KTtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgci5wbGF5RWZmZWN0KGUsIHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChvKSAmJiBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKG8pICYmIG8uZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjcmVhdGVUcmFpbEluc3RhbmNlKGUsIHQsIG4sIG8pIHtcbiAgICB2YXIgciA9IGUuY3JlYXRlVUlTeW5jKFRhc2tUcmFpbFZpZXcpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICBlLm5vZGUuYWRkQ2hpbGQocik7XG4gICAgICB2YXIgYSA9IHIuZ2V0Q29tcG9uZW50KFRhc2tUcmFpbFZpZXcpO1xuICAgICAgaWYgKGEpIGEucGxheVNpbmdsZUFuaW1hdGlvbih0LCBuLCAwLjUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZChyKSAmJiByLmRlc3Ryb3koKTtcbiAgICAgICAgbnVsbCA9PSBvIHx8IG8oKTtcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBjYy5pc1ZhbGlkKHIpICYmIHIuZGVzdHJveSgpO1xuICAgICAgICBudWxsID09IG8gfHwgbygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBudWxsID09IG8gfHwgbygpO1xuICB9XG4gIGdldFByb2dyZXNzQmFyQ3VycmVudFBvcyhlLCB0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKGUpKSByZXR1cm4gY2MudjIoMCwgMCk7XG4gICAgdmFyIGkgPSBlLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgbiA9IGkud2lkdGgsXG4gICAgICAgIG8gPSAodCAtIGkuYW5jaG9yWCkgKiBuLFxuICAgICAgICByID0gY2MudjIobywgMCk7XG4gICAgICByZXR1cm4gaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocik7XG4gICAgfVxuICAgIHZhciBhID0gZS53aWR0aCxcbiAgICAgIHMgPSAodCAtIGUuYW5jaG9yWCkgKiBhLFxuICAgICAgbCA9IGNjLnYyKHMsIDApO1xuICAgIHJldHVybiBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihsKTtcbiAgfVxuICBwbGF5VGFza0l0ZW1Eb25lQW5pbWF0aW9uKGUsIHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgaSA9IGNjLmZpbmQoXCJUYXNrSXRlbS9jb250ZW50L3NwX2RvbmVcIiwgdCk7XG4gICAgICBjYy5pc1ZhbGlkKGkpICYmIChpLm9wYWNpdHkgPSAwKTtcbiAgICAgIHZhciBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrSXRlbVZpZXdcIik7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgbyA9IHQuZ2V0Q29tcG9uZW50KG4pO1xuICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8ubm9kZSkpIHtcbiAgICAgICAgICB2YXIgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza0l0ZW1MaWdodFZpZXdcIik7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHZhciBhID0gZS5jcmVhdGVVSVN5bmMocik7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChhKSkge1xuICAgICAgICAgICAgICBvLm5vZGUuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgICAgIHZhciBzID0gYS5nZXRDb21wb25lbnQocik7XG4gICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgcy5hbGlnblRvVGFyZ2V0ICYmIHMuYWxpZ25Ub1RhcmdldChvKTtcbiAgICAgICAgICAgICAgICBzLnBsYXlEb25lQW5pbWF0aW9uICYmIHMucGxheURvbmVBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGNjLmlzVmFsaWQoYSkgJiYgYS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0b3BBbGxBbmltYXRpb25zKCkge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRyYWlsTm9kZSAmJiAodGhpcy50cmFpbE5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIG1hcmtBbmltYXRpb25Db21wbGV0ZWQoKSB7XG4gICAgdGhpcy5pc0FuaW1hdGlvbkNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5iYXRjaENvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNBbmltYXRpb25Db21wbGV0ZWQgJiYgdGhpcy5iYXRjaENvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIHZhciB0ID0gdGhpcy5iYXRjaENvbXBsZXRlQ2FsbGJhY2s7XG4gICAgICB0aGlzLmJhdGNoQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG4gICAgICB0aGlzLmlzQW5pbWF0aW9uQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbn0iXX0=