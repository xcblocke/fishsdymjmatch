
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winLayoutOpt/Scripts/WinLayoutOptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62082KBrj5GvbqGCn+I50FG', 'WinLayoutOptTrait');
// subpackages/l_winLayoutOpt/Scripts/WinLayoutOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var WinLayoutOptTrait = /** @class */ (function (_super) {
    __extends(WinLayoutOptTrait, _super);
    function WinLayoutOptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WinLayoutOptTrait.prototype, "barLayoutBottom", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.barLayoutBottom) || 18;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "levelBoxSpinePath", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.levelBoxSpinePath) || "spine/levelBox/result_rewardsCollection";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "normalSpinePath", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.normalSpinePath) || "spine/normal/result_rewardsCollection";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.bundle) || "l_winLayoutOpt";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "subtitleY", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.subtitleY) || -77;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "descAnimationDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.descAnimDelay) || 0.9;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "boxAnimDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.boxAnimDelay) || 0.01;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "btnNextDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.btnNextDelay) || 1.53;
        },
        enumerable: false,
        configurable: true
    });
    WinLayoutOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinLayoutOptTrait.prototype.onWinVw_getDescAniDly = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.descAnimationDelay
        });
    };
    WinLayoutOptTrait.prototype.onWinVw_popNextView = function (t, e) {
        t.ins.scheduleOnce(function () {
            e();
        }, this.boxAnimDelay);
    };
    WinLayoutOptTrait.prototype.onWinVw_getBtnNextDly = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.btnNextDelay
        });
    };
    WinLayoutOptTrait.prototype.isLevelBoxTraitEnabled = function () {
        var t = mj.getClassByName("LevelBoxTrait");
        return t && true === t.getInstance().eventEnabled;
    };
    WinLayoutOptTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var o = t.ins;
        if (o && "function" == typeof o.addPreloadRes) {
            var i = this.isLevelBoxTraitEnabled() ? this.levelBoxSpinePath : this.normalSpinePath, n = this.bundleName + ":" + i;
            o.addPreloadRes("SkeletonData", [n]);
        }
        e();
    };
    WinLayoutOptTrait.prototype.onLvBoxVw_initComps = function (t, e) {
        var o = t.ins;
        this.replaceRewardBoxSpine(o, this.levelBoxSpinePath);
        e();
    };
    WinLayoutOptTrait.prototype.onBoxOpenUI_initComponents = function (t, e) {
        var o = t.ins;
        this.replaceRewardBoxSpine(o, this.normalSpinePath);
        e();
    };
    WinLayoutOptTrait.prototype.replaceRewardBoxSpine = function (t, e) {
        var o = null == t ? void 0 : t.getAnimSkeleton;
        if (o && cc.isValid(o.node)) {
            var i = BaseSpine_1.default.refreshWithNode(o.node, e, this.bundleName);
            null == i || i.setOnReadyCallback(function () {
                cc.isValid(t) && "function" == typeof t.hookRewardNodes && t.hookRewardNodes();
            });
        }
    };
    WinLayoutOptTrait.prototype.onWinVw_mvSubTitToBtnBtm = function (t, e) {
        var o = t.ins;
        this.setSubtitlePosition(o);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    WinLayoutOptTrait.prototype.onDCWinVw_mvSubTitToBtnBtm = function (t, e) {
        var o = t.ins;
        this.setSubtitlePosition(o);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    WinLayoutOptTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var o = this, i = t.ins;
        i.scheduleOnce(function () {
            cc.isValid(i) && o.setSubtitlePosition(i);
        }, 0);
        e();
    };
    WinLayoutOptTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        var o = this, i = t.ins;
        i.scheduleOnce(function () {
            cc.isValid(i) && o.setSubtitlePosition(i);
        }, 0);
        e();
    };
    WinLayoutOptTrait.prototype.setSubtitlePosition = function (t) {
        var e;
        if (cc.isValid(t)) {
            var o = null === (e = t.getContentNode) || void 0 === e ? void 0 : e.call(t);
            if (cc.isValid(o)) {
                var i = o.getChildByName("lbl_subtitle");
                cc.isValid(i) && (i.y = this.subtitleY);
            }
        }
    };
    WinLayoutOptTrait.prototype.onLvBoxProg_barBoxEnter = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.onBoxRwdUI_barBoxEnter = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.onLvBoxProg_showNextBox = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.adjustBarLayoutPosition = function (t, e) {
        if (e === void 0) { e = false; }
        var o, i;
        if (cc.isValid(null == t ? void 0 : t.node)) {
            var n = t.node.getChildByName("BarLayout"), r = t.node.getChildByName("BoxBtn");
            if (n) {
                NodeSkinTool_1.default.applyWidgetInfo(n, {
                    isAlignBottom: true,
                    bottom: this.barLayoutBottom,
                    isAlignTop: false,
                    isAlignVerticalCenter: false
                });
                var a = n.getComponent(cc.Widget);
                a && a.updateAlignment();
            }
            var l = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.boxBtnOffset) && void 0 !== i ? i : 24;
            r && n && (e && t.scheduleOnce ? t.scheduleOnce(function () {
                cc.isValid(r) && cc.isValid(n) && (r.y = n.y + l);
            }, 0) : r.y = n.y + l);
        }
    };
    WinLayoutOptTrait.traitKey = "WinLayoutOpt";
    WinLayoutOptTrait = __decorate([
        mj.trait,
        mj.class("WinLayoutOptTrait")
    ], WinLayoutOptTrait);
    return WinLayoutOptTrait;
}(Trait_1.default));
exports.default = WinLayoutOptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkxheW91dE9wdC9TY3JpcHRzL1dpbkxheW91dE9wdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDhEQUF5RDtBQUN6RCx5RUFBb0U7QUFHcEU7SUFBK0MscUNBQUs7SUFBcEQ7O0lBc0tBLENBQUM7SUFwS0Msc0JBQUksOENBQWU7YUFBbkI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0YsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxnREFBaUI7YUFBckI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLHlDQUF5QyxDQUFDO1FBQ3RJLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQWU7YUFBbkI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSx1Q0FBdUMsQ0FBQztRQUNsSSxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlD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RDtrQkF0S29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgTm9kZVNraW5Ub29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvTm9kZVNraW5Ub29sJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpbkxheW91dE9wdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5MYXlvdXRPcHRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5MYXlvdXRPcHRcIjtcbiAgZ2V0IGJhckxheW91dEJvdHRvbSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmJhckxheW91dEJvdHRvbSkgfHwgMTg7XG4gIH1cbiAgZ2V0IGxldmVsQm94U3BpbmVQYXRoKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubGV2ZWxCb3hTcGluZVBhdGgpIHx8IFwic3BpbmUvbGV2ZWxCb3gvcmVzdWx0X3Jld2FyZHNDb2xsZWN0aW9uXCI7XG4gIH1cbiAgZ2V0IG5vcm1hbFNwaW5lUGF0aCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5vcm1hbFNwaW5lUGF0aCkgfHwgXCJzcGluZS9ub3JtYWwvcmVzdWx0X3Jld2FyZHNDb2xsZWN0aW9uXCI7XG4gIH1cbiAgZ2V0IGJ1bmRsZU5hbWUoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5idW5kbGUpIHx8IFwibF93aW5MYXlvdXRPcHRcIjtcbiAgfVxuICBnZXQgc3VidGl0bGVZKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3VidGl0bGVZKSB8fCAtNzc7XG4gIH1cbiAgZ2V0IGRlc2NBbmltYXRpb25EZWxheSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRlc2NBbmltRGVsYXkpIHx8IDAuOTtcbiAgfVxuICBnZXQgYm94QW5pbURlbGF5KCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYm94QW5pbURlbGF5KSB8fCAwLjAxO1xuICB9XG4gIGdldCBidG5OZXh0RGVsYXkoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5idG5OZXh0RGVsYXkpIHx8IDEuNTM7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uV2luVndfZ2V0RGVzY0FuaURseSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmRlc2NBbmltYXRpb25EZWxheVxuICAgIH0pO1xuICB9XG4gIG9uV2luVndfcG9wTmV4dFZpZXcodCwgZSkge1xuICAgIHQuaW5zLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlKCk7XG4gICAgfSwgdGhpcy5ib3hBbmltRGVsYXkpO1xuICB9XG4gIG9uV2luVndfZ2V0QnRuTmV4dERseSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmJ0bk5leHREZWxheVxuICAgIH0pO1xuICB9XG4gIGlzTGV2ZWxCb3hUcmFpdEVuYWJsZWQoKSB7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIkxldmVsQm94VHJhaXRcIik7XG4gICAgcmV0dXJuIHQgJiYgdHJ1ZSA9PT0gdC5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZDtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKHQsIGUpIHtcbiAgICB2YXIgbyA9IHQuaW5zO1xuICAgIGlmIChvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygby5hZGRQcmVsb2FkUmVzKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuaXNMZXZlbEJveFRyYWl0RW5hYmxlZCgpID8gdGhpcy5sZXZlbEJveFNwaW5lUGF0aCA6IHRoaXMubm9ybWFsU3BpbmVQYXRoLFxuICAgICAgICBuID0gdGhpcy5idW5kbGVOYW1lICsgXCI6XCIgKyBpO1xuICAgICAgby5hZGRQcmVsb2FkUmVzKFwiU2tlbGV0b25EYXRhXCIsIFtuXSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkx2Qm94VndfaW5pdENvbXBzKHQsIGUpIHtcbiAgICB2YXIgbyA9IHQuaW5zO1xuICAgIHRoaXMucmVwbGFjZVJld2FyZEJveFNwaW5lKG8sIHRoaXMubGV2ZWxCb3hTcGluZVBhdGgpO1xuICAgIGUoKTtcbiAgfVxuICBvbkJveE9wZW5VSV9pbml0Q29tcG9uZW50cyh0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICB0aGlzLnJlcGxhY2VSZXdhcmRCb3hTcGluZShvLCB0aGlzLm5vcm1hbFNwaW5lUGF0aCk7XG4gICAgZSgpO1xuICB9XG4gIHJlcGxhY2VSZXdhcmRCb3hTcGluZSh0LCBlKSB7XG4gICAgdmFyIG8gPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEFuaW1Ta2VsZXRvbjtcbiAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8ubm9kZSkpIHtcbiAgICAgIHZhciBpID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShvLm5vZGUsIGUsIHRoaXMuYnVuZGxlTmFtZSk7XG4gICAgICBudWxsID09IGkgfHwgaS5zZXRPblJlYWR5Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5ob29rUmV3YXJkTm9kZXMgJiYgdC5ob29rUmV3YXJkTm9kZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbldpblZ3X212U3ViVGl0VG9CdG5CdG0odCwgZSkge1xuICAgIHZhciBvID0gdC5pbnM7XG4gICAgdGhpcy5zZXRTdWJ0aXRsZVBvc2l0aW9uKG8pO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbkRDV2luVndfbXZTdWJUaXRUb0J0bkJ0bSh0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICB0aGlzLnNldFN1YnRpdGxlUG9zaXRpb24obyk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB2YXIgbyA9IHRoaXMsXG4gICAgICBpID0gdC5pbnM7XG4gICAgaS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChpKSAmJiBvLnNldFN1YnRpdGxlUG9zaXRpb24oaSk7XG4gICAgfSwgMCk7XG4gICAgZSgpO1xuICB9XG4gIG9uRENXaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIHZhciBvID0gdGhpcyxcbiAgICAgIGkgPSB0LmlucztcbiAgICBpLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGkpICYmIG8uc2V0U3VidGl0bGVQb3NpdGlvbihpKTtcbiAgICB9LCAwKTtcbiAgICBlKCk7XG4gIH1cbiAgc2V0U3VidGl0bGVQb3NpdGlvbih0KSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKGUgPSB0LmdldENvbnRlbnROb2RlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwodCk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgICB2YXIgaSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfc3VidGl0bGVcIik7XG4gICAgICAgIGNjLmlzVmFsaWQoaSkgJiYgKGkueSA9IHRoaXMuc3VidGl0bGVZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25MdkJveFByb2dfYmFyQm94RW50ZXIodCwgZSkge1xuICAgIHZhciBvID0gdC5pbnM7XG4gICAgdGhpcy5hZGp1c3RCYXJMYXlvdXRQb3NpdGlvbihvLCB0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Cb3hSd2RVSV9iYXJCb3hFbnRlcih0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICB0aGlzLmFkanVzdEJhckxheW91dFBvc2l0aW9uKG8sIHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkx2Qm94UHJvZ19zaG93TmV4dEJveCh0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICB0aGlzLmFkanVzdEJhckxheW91dFBvc2l0aW9uKG8sIHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBhZGp1c3RCYXJMYXlvdXRQb3NpdGlvbih0LCBlID0gZmFsc2UpIHtcbiAgICB2YXIgbywgaTtcbiAgICBpZiAoY2MuaXNWYWxpZChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm5vZGUpKSB7XG4gICAgICB2YXIgbiA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhckxheW91dFwiKSxcbiAgICAgICAgciA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJveEJ0blwiKTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIE5vZGVTa2luVG9vbC5hcHBseVdpZGdldEluZm8obiwge1xuICAgICAgICAgIGlzQWxpZ25Cb3R0b206IHRydWUsXG4gICAgICAgICAgYm90dG9tOiB0aGlzLmJhckxheW91dEJvdHRvbSxcbiAgICAgICAgICBpc0FsaWduVG9wOiBmYWxzZSxcbiAgICAgICAgICBpc0FsaWduVmVydGljYWxDZW50ZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYSA9IG4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGEgJiYgYS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ib3hCdG5PZmZzZXQpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAyNDtcbiAgICAgIHIgJiYgbiAmJiAoZSAmJiB0LnNjaGVkdWxlT25jZSA/IHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZChyKSAmJiBjYy5pc1ZhbGlkKG4pICYmIChyLnkgPSBuLnkgKyBsKTtcbiAgICAgIH0sIDApIDogci55ID0gbi55ICsgbCk7XG4gICAgfVxuICB9XG59Il19