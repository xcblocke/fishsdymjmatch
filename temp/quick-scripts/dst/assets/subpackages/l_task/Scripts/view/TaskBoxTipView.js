
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/view/TaskBoxTipView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69baelkhI1C3ZSGj2A7zwAv', 'TaskBoxTipView');
// subpackages/l_task/Scripts/view/TaskBoxTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var IUserData_1 = require("../../../../Scripts/user/IUserData");
var TaskBoxTipView = /** @class */ (function (_super) {
    __extends(TaskBoxTipView, _super);
    function TaskBoxTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxAnim = null;
        _this.blockBtn = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.undoTipIcon = null;
        _this.undoTipValue = null;
        _this.animProxy = null;
        _this.showRewardsNodes = [];
        return _this;
    }
    TaskBoxTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    TaskBoxTipView.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    TaskBoxTipView.prototype.onBlockBtnClick = function () {
        this.playOut();
    };
    TaskBoxTipView.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
        this.undoTipIcon.active = false;
        this.undoTipValue.active = false;
    };
    TaskBoxTipView.prototype.initBoxReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        var a = function a(t, a, o) {
            if (t && a) {
                e.animProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                e.animProxy.attachNode("hook_num_" + o, function () {
                    return a;
                });
            }
        };
        this.showRewardsNodes = [];
        for (var o = 0; o < t.Items.length; o++) {
            var i = t.Items[o], r = t.Counts[o], n = this.getRewardNodes(i), s = n.icon, l = n.value;
            if (s && l) {
                l.getComponent(cc.Label).string = String(r);
                this.showRewardsNodes.push(s, l);
                a(s, l, o + 1);
            }
        }
    };
    TaskBoxTipView.prototype.getRewardNodes = function (t) {
        switch (t) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this.hintTipIcon,
                    value: this.hintTipValue
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this.refreshTipIcon,
                    value: this.refreshTipValue
                };
            case IUserData_1.EItemType.Undo:
                return {
                    icon: this.undoTipIcon,
                    value: this.undoTipValue
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    TaskBoxTipView.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    TaskBoxTipView.prototype.playIn = function () {
        var t, e, a = Math.floor(this.showRewardsNodes.length / 2);
        if (a > 0 && a <= 3) {
            try {
                for (var o = __values(this.showRewardsNodes), i = o.next(); !i.done; i = o.next()) {
                    var r = i.value;
                    cc.isValid(r) && (r.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    i && !i.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + a, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + a, true);
            });
        }
    };
    TaskBoxTipView.prototype.playOut = function () {
        var t = this, e = Math.floor(this.showRewardsNodes.length / 2);
        if (e > 0 && e < 3) {
            var a = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(a, "out_" + e, false, function () {
                t.node.destroy();
            });
        }
    };
    TaskBoxTipView.prototype.stopAtFirstFrame = function (t) {
        cc.isValid(this.animProxy) && this.animProxy.stopAtFirstFrameOf(t);
    };
    TaskBoxTipView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    TaskBoxTipView.prefabUrl = "prefabs/task/TaskBoxTip";
    __decorate([
        mj.node("BoxAnim")
    ], TaskBoxTipView.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], TaskBoxTipView.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], TaskBoxTipView.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], TaskBoxTipView.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], TaskBoxTipView.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], TaskBoxTipView.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("UndoTipIcon")
    ], TaskBoxTipView.prototype, "undoTipIcon", void 0);
    __decorate([
        mj.node("UndoTipValue")
    ], TaskBoxTipView.prototype, "undoTipValue", void 0);
    TaskBoxTipView = __decorate([
        mj.class
    ], TaskBoxTipView);
    return TaskBoxTipView;
}(BaseUI_1.default));
exports.default = TaskBoxTipView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy92aWV3L1Rhc2tCb3hUaXBWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBMEU7QUFDMUUsa0VBQTZEO0FBQzdELDRFQUF1RTtBQUN2RSxnRUFBK0Q7QUFFL0Q7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUErSUM7UUE3SUMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFxQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3BDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsc0JBQWdCLEdBQUcsRUFBRSxDQUFDOztJQTZIeEIsQ0FBQztJQTNIQywrQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELHlDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFD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QUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQTNITSx3QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBakI3QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO21EQUNPO0lBRTFCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt1REFDVztJQUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7MERBQ2M7SUFFeEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt3REFDWTtJQUVwQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7MkRBQ2U7SUFFMUM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt1REFDVztJQUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3dEQUNZO0lBaEJqQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksY0FBYyxDQStJbEM7SUFBRCxxQkFBQztDQS9JRCxBQStJQyxDQS9JMkMsZ0JBQU0sR0ErSWpEO2tCQS9Jb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy91c2VyL0lVc2VyRGF0YSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tCb3hUaXBWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJCb3hBbmltXCIpXG4gIGJveEFuaW06IFwiQm94QW5pbVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJibG9ja0J0blwiKVxuICBibG9ja0J0bjogXCJibG9ja0J0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VGlwSWNvblwiKVxuICBoaW50VGlwSWNvbjogXCJIaW50VGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwSWNvblwiKVxuICByZWZyZXNoVGlwSWNvbjogXCJSZWZyZXNoVGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VGlwVmFsdWVcIilcbiAgaGludFRpcFZhbHVlOiBcIkhpbnRUaXBWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwVmFsdWVcIilcbiAgcmVmcmVzaFRpcFZhbHVlOiBcIlJlZnJlc2hUaXBWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJVbmRvVGlwSWNvblwiKVxuICB1bmRvVGlwSWNvbjogXCJVbmRvVGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJVbmRvVGlwVmFsdWVcIilcbiAgdW5kb1RpcFZhbHVlOiBcIlVuZG9UaXBWYWx1ZVwiID0gbnVsbDtcbiAgYW5pbVByb3h5ID0gbnVsbDtcbiAgc2hvd1Jld2FyZHNOb2RlcyA9IFtdO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3Rhc2svVGFza0JveFRpcFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0U3BpbmUoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gIH1cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYmxvY2tCdG4sIHRoaXMub25CbG9ja0J0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIG9uQmxvY2tCdG5DbGljaygpIHtcbiAgICB0aGlzLnBsYXlPdXQoKTtcbiAgfVxuICBoaWRlUmV3YXJkc05vZGVzKCkge1xuICAgIHRoaXMucmVmcmVzaFRpcEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWZyZXNoVGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oaW50VGlwSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRUaXBWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnVuZG9UaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudW5kb1RpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGluaXRCb3hSZXdhcmQodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmhpZGVSZXdhcmRzTm9kZXMoKTtcbiAgICB2YXIgYSA9IGZ1bmN0aW9uIGEodCwgYSwgbykge1xuICAgICAgaWYgKHQgJiYgYSkge1xuICAgICAgICBlLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uX1wiICsgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9KTtcbiAgICAgICAgZS5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtX1wiICsgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2hvd1Jld2FyZHNOb2RlcyA9IFtdO1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5JdGVtcy5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIGkgPSB0Lkl0ZW1zW29dLFxuICAgICAgICByID0gdC5Db3VudHNbb10sXG4gICAgICAgIG4gPSB0aGlzLmdldFJld2FyZE5vZGVzKGkpLFxuICAgICAgICBzID0gbi5pY29uLFxuICAgICAgICBsID0gbi52YWx1ZTtcbiAgICAgIGlmIChzICYmIGwpIHtcbiAgICAgICAgbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyhyKTtcbiAgICAgICAgdGhpcy5zaG93UmV3YXJkc05vZGVzLnB1c2gocywgbCk7XG4gICAgICAgIGEocywgbCwgbyArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRSZXdhcmROb2Rlcyh0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIEVJdGVtVHlwZS5IaW50OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMuaGludFRpcEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaGludFRpcFZhbHVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVJdGVtVHlwZS5TaHVmZmxlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMucmVmcmVzaFRpcEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMucmVmcmVzaFRpcFZhbHVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVJdGVtVHlwZS5VbmRvOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMudW5kb1RpcEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMudW5kb1RpcFZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICB9XG4gIGluaXRTcGluZSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJveEFuaW0pICYmIHRoaXMuYm94QW5pbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5ib3hBbmltKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnJlc2V0KFwiXCIpO1xuICAgICAgdGhpcy5hbmltUHJveHkubWFya1JlYWR5KFwiXCIpO1xuICAgIH1cbiAgfVxuICBwbGF5SW4oKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgYSA9IE1hdGguZmxvb3IodGhpcy5zaG93UmV3YXJkc05vZGVzLmxlbmd0aCAvIDIpO1xuICAgIGlmIChhID4gMCAmJiBhIDw9IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLnNob3dSZXdhcmRzTm9kZXMpLCBpID0gby5uZXh0KCk7ICFpLmRvbmU7IGkgPSBvLm5leHQoKSkge1xuICAgICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHIpICYmIChyLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaSAmJiAhaS5kb25lICYmIChlID0gby5yZXR1cm4pICYmIGUuY2FsbChvKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGwgPSB0aGlzLmJveEFuaW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUobCwgXCJjbGlja19cIiArIGEsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUobCwgXCJpbml0X1wiICsgYSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcGxheU91dCgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gTWF0aC5mbG9vcih0aGlzLnNob3dSZXdhcmRzTm9kZXMubGVuZ3RoIC8gMik7XG4gICAgaWYgKGUgPiAwICYmIGUgPCAzKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuYm94QW5pbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShhLCBcIm91dF9cIiArIGUsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQubm9kZS5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc3RvcEF0Rmlyc3RGcmFtZSh0KSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFuaW1Qcm94eSkgJiYgdGhpcy5hbmltUHJveHkuc3RvcEF0Rmlyc3RGcmFtZU9mKHQpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5hbmltUHJveHkpIHtcbiAgICAgIHRoaXMuYW5pbVByb3h5LmNsZWFyKCk7XG4gICAgICB0aGlzLmFuaW1Qcm94eSA9IG51bGw7XG4gICAgfVxuICB9XG59Il19