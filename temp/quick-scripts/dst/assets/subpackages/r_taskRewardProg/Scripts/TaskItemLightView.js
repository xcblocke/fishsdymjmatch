
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_taskRewardProg/Scripts/TaskItemLightView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3Rhc2tSZXdhcmRQcm9nL1NjcmlwdHMvVGFza0l0ZW1MaWdodFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw0RUFBNkU7QUFFN0U7SUFBK0MscUNBQU07SUFBckQ7UUFBQSxxRUE0TEM7UUExTEMsYUFBTyxHQUFlLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFDcEMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQiw0QkFBc0IsR0FBRyxHQUFHLENBQUM7UUFDN0IsbUJBQWEsR0FBRyxJQUFJLENBQUM7O0lBbUx2QixDQUFDOzBCQTVMb0IsaUJBQWlCO0lBWTdCLDBDQUF3QixHQUEvQixVQUFnQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQWlCLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztpQkFDbEI7YUFDRjtpQkFBTTtnQkFDTCxD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LHFDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7SUFqTE0sMkJBQVMsR0FBRyx1QkFBdUIsQ0FBQztJQUNwQyw0QkFBVSxHQUFHLGtCQUFrQixDQUFDO0lBVHZDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztzREFDWDtJQUUzQjtRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0RBQ1Q7SUFFL0I7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzsyREFDWTtJQStCcEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO21EQUdwQztJQXZDa0IsaUJBQWlCO1FBRHJDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksaUJBQWlCLENBNExyQztJQUFELHdCQUFDO0NBNUxELEFBNExDLENBNUw4QyxnQkFBTSxHQTRMcEQ7a0JBNUxvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBwbGF5U3BpbmVBbmltIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrSXRlbUxpZ2h0VmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5jb21wb25lbnQoXCJzcGluZV9iZ1wiLCBzcC5Ta2VsZXRvbilcbiAgc3BpbmVCZzogXCJzcGluZV9iZ1wiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcInNwaW5lX2RvbmVcIiwgc3AuU2tlbGV0b24pXG4gIHNwaW5lRG9uZTogXCJzcGluZV9kb25lXCIgPSBudWxsO1xuICBAbWoubm9kZShcInByb2dyZXNzR2xvd1wiKVxuICBwcm9ncmVzc0dsb3c6IFwicHJvZ3Jlc3NHbG93XCIgPSBudWxsO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIFBST0dSRVNTX0FOSU1fRFVSQVRJT04gPSAwLjU7XG4gIHByb2dyZXNzVHdlZW4gPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL1Rhc2tJdGVtTGlnaHRcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcInJfdGFza1Jld2FyZFByb2dcIjtcbiAgc3RhdGljIHBsYXlQcm9ncmVzc0FuaW1hdGlvbkZvcihlLCB0LCBuLCBvLCByKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB2YXIgYSA9IGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhc2tJdGVtTGlnaHRWaWV3XCIpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgdmFyIHMgPSBhLmdldENvbXBvbmVudChUYXNrSXRlbUxpZ2h0Vmlldyk7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgcy5wbGF5UHJvZ3Jlc3NBbmltYXRpb24oZSwgdCwgbiwgbywgcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbCA9PSByIHx8IHIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9IGUuY3JlYXRlVUlTeW5jKFRhc2tJdGVtTGlnaHRWaWV3KTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgICBlLm5vZGUuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgdmFyIGwgPSBhLmdldENvbXBvbmVudChUYXNrSXRlbUxpZ2h0Vmlldyk7XG4gICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgIGwucGxheVByb2dyZXNzQW5pbWF0aW9uKGUsIHQsIG4sIG8sIHIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudWxsID09IHIgfHwgcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIG51bGwgPT0gciB8fCByKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIG51bGwgPT0gciB8fCByKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrSXRlbUx0Vndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBwbGF5UHJvZ3Jlc3NBbmltYXRpb24oZSwgdCwgaSwgbiwgbykge1xuICAgIHZhciByID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NVSShlLCB0LCBuKTtcbiAgICAgIGUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgci5hbmltYXRlUHJvZ3Jlc3MoZSwgdCwgaSwgbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpID49IG4pIHtcbiAgICAgICAgICAgIHIucGxheUFuaW1hdGlvbihlLCBvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVsbCA9PSBvIHx8IG8oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIG51bGwgPT0gbyB8fCBvKCk7XG4gIH1cbiAgcGxheUFuaW1hdGlvbihlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikgbnVsbCA9PSB0IHx8IHQoKTtlbHNlIHtcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlQcm9ncmVzc0dsb3dBbmltYXRpb24oZSk7XG4gICAgICB0aGlzLmFsaWduVG9UYXJnZXQoZSk7XG4gICAgICB0aGlzLnBsYXlBbmltYXRpb25TZXF1ZW5jZSh0KTtcbiAgICB9XG4gIH1cbiAgcGxheVByb2dyZXNzR2xvd0FuaW1hdGlvbihlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5wcm9ncmVzc0dsb3cpICYmIGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZChlLm5vZGUpICYmIGNjLmlzVmFsaWQoZS5fY2VsbFVJKSkge1xuICAgICAgdGhpcy5wcm9ncmVzc0dsb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHZhciB0ID0gY2MuZmluZChcImNvbnRlbnQvcHJvZ3Jlc3NCYXIvcHJvZ3Jlc3NJbWdCYXJcIiwgZS5fY2VsbFVJKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHRoaXMuYWxpZ25Ob2RlVG9UYXJnZXQodGhpcy5wcm9ncmVzc0dsb3csIHQpO1xuICAgICAgICB0aGlzLnByb2dyZXNzR2xvdy5vcGFjaXR5ID0gNzA7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NHbG93KS50bygxLCB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHt9KS5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVQcm9ncmVzc1VJKGUsIHQsIGkpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlLl9jZWxsVUkpKSB7XG4gICAgICB2YXIgbiA9IGNjLmZpbmQoXCJjb250ZW50L2xiX3Byb2dyZXNzXCIsIGUuX2NlbGxVSSk7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgbyA9IG4uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbyAmJiAoby5zdHJpbmcgPSB0ICsgXCIvXCIgKyBpKTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gY2MuZmluZChcImNvbnRlbnQvcHJvZ3Jlc3NCYXJcIiwgZS5fY2VsbFVJKTtcbiAgICAgIGlmIChyICYmIGkgPiAwKSB7XG4gICAgICAgIHZhciBhID0gci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIHZhciBzID0gTWF0aC5taW4odCAvIGksIDEpO1xuICAgICAgICAgIGEucHJvZ3Jlc3MgPSBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFuaW1hdGVQcm9ncmVzcyhlLCB0LCBpLCBuLCBvKSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIGlmICghY2MuaXNWYWxpZChlLl9jZWxsVUkpIHx8IG4gPD0gMCkgbnVsbCA9PSBvIHx8IG8oKTtlbHNlIHtcbiAgICAgIHZhciBhID0gY2MuZmluZChcImNvbnRlbnQvcHJvZ3Jlc3NCYXJcIiwgZS5fY2VsbFVJKTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHZhciBzID0gYS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIHZhciBsID0gY2MuZmluZChcImNvbnRlbnQvbGJfcHJvZ3Jlc3NcIiwgZS5fY2VsbFVJKSxcbiAgICAgICAgICAgIGMgPSBudWxsID09IGwgPyB2b2lkIDAgOiBsLmdldENvbXBvbmVudChjYy5MYWJlbCksXG4gICAgICAgICAgICBwID0gTWF0aC5taW4odCAvIG4sIDEpLFxuICAgICAgICAgICAgZCA9IE1hdGgubWluKGkgLyBuLCAxKTtcbiAgICAgICAgICBpZiAocCAhPT0gZCkge1xuICAgICAgICAgICAgdmFyIHUgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiBwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NUd2Vlbikge1xuICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVHdlZW4gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1R3ZWVuID0gY2MudHdlZW4odSkudG8odGhpcy5QUk9HUkVTU19BTklNX0RVUkFUSU9OLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBkXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIixcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChlLCBvLCByLCBhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBlICsgKG8gLSBlKSAqIGE7XG4gICAgICAgICAgICAgICAgcyAmJiBjYy5pc1ZhbGlkKHMubm9kZSkgJiYgKHMucHJvZ3Jlc3MgPSBsKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjYy5pc1ZhbGlkKGMubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwID0gTWF0aC5mbG9vcih0ICsgKGkgLSB0KSAqIGEpO1xuICAgICAgICAgICAgICAgICAgYy5zdHJpbmcgPSBwICsgXCIvXCIgKyBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHMgJiYgY2MuaXNWYWxpZChzLm5vZGUpICYmIChzLnByb2dyZXNzID0gZCk7XG4gICAgICAgICAgICAgIGMgJiYgY2MuaXNWYWxpZChjLm5vZGUpICYmIChjLnN0cmluZyA9IGkgKyBcIi9cIiArIG4pO1xuICAgICAgICAgICAgICByLnByb2dyZXNzVHdlZW4gPSBudWxsO1xuICAgICAgICAgICAgICBudWxsID09IG8gfHwgbygpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICB9IGVsc2UgbnVsbCA9PSBvIHx8IG8oKTtcbiAgICAgICAgfSBlbHNlIG51bGwgPT0gbyB8fCBvKCk7XG4gICAgICB9IGVsc2UgbnVsbCA9PSBvIHx8IG8oKTtcbiAgICB9XG4gIH1cbiAgYWxpZ25Ub1RhcmdldChlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy5pc1ZhbGlkKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubm9kZSkgJiYgY2MuaXNWYWxpZChlLl9jZWxsVUkpICYmIHRoaXMuc3BpbmVCZyAmJiBjYy5pc1ZhbGlkKHRoaXMuc3BpbmVCZy5ub2RlKSAmJiB0aGlzLnNwaW5lRG9uZSAmJiBjYy5pc1ZhbGlkKHRoaXMuc3BpbmVEb25lLm5vZGUpKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuc3BpbmVCZy5ub2RlLnggLSB0aGlzLnNwaW5lRG9uZS5ub2RlLngsXG4gICAgICAgIGkgPSB0aGlzLnNwaW5lQmcubm9kZS55IC0gdGhpcy5zcGluZURvbmUubm9kZS55LFxuICAgICAgICBuID0gY2MuZmluZChcImNvbnRlbnQvc3BfZG9uZVwiLCBlLl9jZWxsVUkpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgdGhpcy5hbGlnbk5vZGVUb1RhcmdldCh0aGlzLnNwaW5lRG9uZS5ub2RlLCBuKTtcbiAgICAgICAgdGhpcy5zcGluZUJnLm5vZGUuc2V0UG9zaXRpb24odGhpcy5zcGluZURvbmUubm9kZS54ICsgdCwgdGhpcy5zcGluZURvbmUubm9kZS55ICsgaSwgMCk7XG4gICAgICAgIG4ub3BhY2l0eSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFsaWduTm9kZVRvVGFyZ2V0KGUsIHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQoZS5wYXJlbnQpKSB7XG4gICAgICB2YXIgaSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSxcbiAgICAgICAgbiA9IGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgICAgZS5zZXRQb3NpdGlvbihjYy52MyhuLngsIG4ueSwgMCkpO1xuICAgIH1cbiAgfVxuICBwbGF5QW5pbWF0aW9uU2VxdWVuY2UoZSkge1xuICAgIHRoaXMucGxheUJnQW5pbWF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wbGF5RG9uZUFuaW1hdGlvbigpO1xuICB9XG4gIHBsYXlCZ0FuaW1hdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuc3BpbmVCZyAmJiBjYy5pc1ZhbGlkKHRoaXMuc3BpbmVCZy5ub2RlKSkge1xuICAgICAgdGhpcy5zcGluZUJnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHBsYXlTcGluZUFuaW0odGhpcy5zcGluZUJnLCAxLCBcImluMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgbnVsbCA9PSBlIHx8IGUoKTtcbiAgfVxuICBwbGF5RG9uZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3BpbmVEb25lICYmIGNjLmlzVmFsaWQodGhpcy5zcGluZURvbmUubm9kZSkpIHtcbiAgICAgIHRoaXMuc3BpbmVEb25lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHBsYXlTcGluZUFuaW0odGhpcy5zcGluZURvbmUsIDEsIFwiaW4xXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheVNwaW5lQW5pbShlLnNwaW5lRG9uZSwgLTEsIFwiaW5pdDFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnByb2dyZXNzVHdlZW4pIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3NUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLnByb2dyZXNzVHdlZW4gPSBudWxsO1xuICAgIH1cbiAgfVxufSJdfQ==