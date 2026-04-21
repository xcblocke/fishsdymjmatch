
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignSimpleUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86269FC7IVLLJaHG0Pl3Ia2', 'DailySignSimpleUI');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DailySignSimpleItem_1 = require("./DailySignSimpleItem");
var DailySignSimpleModel_1 = require("./DailySignSimpleModel");
var DailySignTipView_1 = require("./DailySignTipView");
var DailySignSimpleUI = /** @class */ (function (_super) {
    __extends(DailySignSimpleUI, _super);
    function DailySignSimpleUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        _this._model = null;
        _this._itemsCreated = 0;
        _this.onClaimReward = null;
        _this._dailySignTipNode = null;
        return _this;
    }
    DailySignSimpleUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._model = DailySignSimpleModel_1.default.getInstance();
        this.createItems();
    };
    DailySignSimpleUI.prototype.createItems = function () {
        for (var t = this, e = [new cc.Vec3(-390, -3, 0), new cc.Vec3(-260, -3, 0), new cc.Vec3(-132, -3, 0), new cc.Vec3(0, -3, 0), new cc.Vec3(132, -3, 0), new cc.Vec3(258, -3, 0), new cc.Vec3(390, -3, 0)], i = function i(i) {
            var o = i;
            DailySignSimpleItem_1.default.createUI().then(function (i) {
                if (i && cc.isValid(t.node)) {
                    i.parent = t.node;
                    i.position = e[o];
                    var n = i.getComponent(DailySignSimpleItem_1.default);
                    t._items[o] = n;
                    n.setIndex(o);
                    n.onClaimCallback = t.onItemClaimCallback.bind(t);
                    n.onBoxClickCallback = t.onBoxClickCallback.bind(t);
                    t._itemsCreated++;
                    if (7 === t._itemsCreated) {
                        t.refreshAllItems();
                        t.scheduleOnce(function () {
                            t.updateProgressBar(null);
                        }, 0);
                    }
                }
            });
        }, o = 0; o < 7; o++)
            i(o);
    };
    DailySignSimpleUI.prototype.onItemClaimCallback = function (t) {
        if (this._model && this._model.claimToday()) {
            var e = this._model.getRewardForDay(t);
            this.onClaimReward && this.onClaimReward(t, e);
        }
    };
    DailySignSimpleUI.prototype.refreshAllItems = function () {
        if (this._model)
            for (var t = 0; t < 7; t++) {
                var e = this._items[t];
                e && cc.isValid(e.node) && e.refresh();
            }
    };
    DailySignSimpleUI.prototype.refreshItem = function (t) {
        if (!(t < 0 || t >= 7)) {
            var e = this._items[t];
            e && cc.isValid(e.node) && e.refresh();
        }
    };
    DailySignSimpleUI.prototype.getProgress = function () {
        return this._model ? this._model.getCurrentProgress() + "/7" : "0/7";
    };
    DailySignSimpleUI.prototype.updateProgressBar = function (t, e) {
        if (t === void 0) { t = null; }
        if (e === void 0) { e = 0.166; }
        var i, o = this;
        if (this._model && this.node && cc.isValid(this.node)) {
            var n = null === (i = cc.find("contentNode/progressBar", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.ProgressBar);
            if (n) {
                var a = 0.03 + (this._model.getCurrentProgress() - 1) / 6, r = a > 1 ? 1 : a;
                if (null !== t ? t : this._model.hasNewProgress()) {
                    var s = 0.03 + ((this._model.localData.lastShownProgress || 0) - 1) / 6, l = s < 0 ? 0 : s > 1 ? 1 : s;
                    n.progress = l;
                    cc.tween(n).to(e, {
                        progress: r
                    }, {
                        easing: "sineOut"
                    }).call(function () {
                        o.playTodayReadyAnimation();
                        o._model.markProgressShown();
                    }).start();
                }
                else {
                    n.progress = r;
                    this._model.markProgressShown();
                    this.playTodayReadyAnimation();
                }
            }
        }
    };
    DailySignSimpleUI.prototype.playTodayReadyAnimation = function () {
        if (this._model)
            for (var t = 0; t < 7; t++) {
                var e = this._items[t];
                if (e && cc.isValid(e.node) && this._model.getDayState(t) === DailySignSimpleModel_1.DailySignSimpleState.Ready) {
                    e.playReadyAnimation();
                    break;
                }
            }
    };
    DailySignSimpleUI.prototype.onBoxClickCallback = function (t, e) {
        var i = this._model.getRewardForDay(t);
        this.showDailySignTip(e, i, t);
    };
    DailySignSimpleUI.prototype.showDailySignTip = function (t, e) {
        var i = this;
        this.removeDailySignTip();
        DailySignTipView_1.default.createUI().then(function (o) {
            if (cc.isValid(i.node)) {
                var n = i.node.parent;
                if (n && cc.isValid(n)) {
                    var a = n.convertToNodeSpaceAR(t);
                    o.parent = n;
                    o.setPosition(a.x, a.y + 70);
                    var r = o.getComponent(DailySignTipView_1.default);
                    r.initReward(e);
                    r.playIn();
                    r.onClickCallback = function () {
                        i.removeDailySignTip();
                    };
                    i._dailySignTipNode = o;
                }
            }
        }).catch(function () { });
    };
    DailySignSimpleUI.prototype.removeDailySignTip = function () {
        cc.isValid(this._dailySignTipNode) && this._dailySignTipNode.destroy();
        this._dailySignTipNode = null;
    };
    DailySignSimpleUI.prototype.showTipForDay = function (t) {
        if (!(t < 0 || t >= 7)) {
            var e = this._items[t];
            if (e && cc.isValid(e.node)) {
                var i = e.node.getChildByName("box");
                if (i) {
                    var o = i.convertToWorldSpaceAR(cc.Vec2.ZERO), n = cc.v3(o.x, o.y, 0), a = this._model.getRewardForDay(t);
                    this.showDailySignTip(n, a, t);
                }
            }
        }
    };
    DailySignSimpleUI.prototype.onDestroy = function () {
        this.removeDailySignTip();
        _super.prototype.onDestroy.call(this);
    };
    DailySignSimpleUI.prefabUrl = "prefabs/DailySignSimple";
    DailySignSimpleUI.bundleName = "r_dailySignSimple";
    DailySignSimpleUI = __decorate([
        mj.class
    ], DailySignSimpleUI);
    return DailySignSimpleUI;
}(BaseUI_1.default));
exports.default = DailySignSimpleUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblNpbXBsZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBQ3hELCtEQUFvRjtBQUNwRix1REFBa0Q7QUFFbEQ7SUFBK0MscUNBQU07SUFBckQ7UUFBQSxxRUE2SUM7UUE1SUMsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQix1QkFBaUIsR0FBRyxJQUFJLENBQUM7O0lBd0kzQixDQUFDO0lBcklDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCx1Q0FBVyxHQUFYO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENB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LElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF0SU0sMkJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyw0QkFBVSxHQUFHLG1CQUFtQixDQUFDO0lBUHJCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSztPQUNZLGlCQUFpQixDQTZJckM7SUFBRCx3QkFBQztDQTdJRCxBQTZJQyxDQTdJOEMsZ0JBQU0sR0E2SXBEO2tCQTdJb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IERhaWx5U2lnblNpbXBsZUl0ZW0gZnJvbSAnLi9EYWlseVNpZ25TaW1wbGVJdGVtJztcbmltcG9ydCBEYWlseVNpZ25TaW1wbGVNb2RlbCwgeyBEYWlseVNpZ25TaW1wbGVTdGF0ZSB9IGZyb20gJy4vRGFpbHlTaWduU2ltcGxlTW9kZWwnO1xuaW1wb3J0IERhaWx5U2lnblRpcFZpZXcgZnJvbSAnLi9EYWlseVNpZ25UaXBWaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlTaWduU2ltcGxlVUkgZXh0ZW5kcyBCYXNlVUkge1xuICBfaXRlbXMgPSBbXTtcbiAgX21vZGVsID0gbnVsbDtcbiAgX2l0ZW1zQ3JlYXRlZCA9IDA7XG4gIG9uQ2xhaW1SZXdhcmQgPSBudWxsO1xuICBfZGFpbHlTaWduVGlwTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvRGFpbHlTaWduU2ltcGxlXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX2RhaWx5U2lnblNpbXBsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbW9kZWwgPSBEYWlseVNpZ25TaW1wbGVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgfVxuICBjcmVhdGVJdGVtcygpIHtcbiAgICBmb3IgKHZhciB0ID0gdGhpcywgZSA9IFtuZXcgY2MuVmVjMygtMzkwLCAtMywgMCksIG5ldyBjYy5WZWMzKC0yNjAsIC0zLCAwKSwgbmV3IGNjLlZlYzMoLTEzMiwgLTMsIDApLCBuZXcgY2MuVmVjMygwLCAtMywgMCksIG5ldyBjYy5WZWMzKDEzMiwgLTMsIDApLCBuZXcgY2MuVmVjMygyNTgsIC0zLCAwKSwgbmV3IGNjLlZlYzMoMzkwLCAtMywgMCldLCBpID0gZnVuY3Rpb24gaShpKSB7XG4gICAgICAgIHZhciBvID0gaTtcbiAgICAgICAgRGFpbHlTaWduU2ltcGxlSXRlbS5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBpZiAoaSAmJiBjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgICAgICAgIGkucGFyZW50ID0gdC5ub2RlO1xuICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGVbb107XG4gICAgICAgICAgICB2YXIgbiA9IGkuZ2V0Q29tcG9uZW50KERhaWx5U2lnblNpbXBsZUl0ZW0pO1xuICAgICAgICAgICAgdC5faXRlbXNbb10gPSBuO1xuICAgICAgICAgICAgbi5zZXRJbmRleChvKTtcbiAgICAgICAgICAgIG4ub25DbGFpbUNhbGxiYWNrID0gdC5vbkl0ZW1DbGFpbUNhbGxiYWNrLmJpbmQodCk7XG4gICAgICAgICAgICBuLm9uQm94Q2xpY2tDYWxsYmFjayA9IHQub25Cb3hDbGlja0NhbGxiYWNrLmJpbmQodCk7XG4gICAgICAgICAgICB0Ll9pdGVtc0NyZWF0ZWQrKztcbiAgICAgICAgICAgIGlmICg3ID09PSB0Ll9pdGVtc0NyZWF0ZWQpIHtcbiAgICAgICAgICAgICAgdC5yZWZyZXNoQWxsSXRlbXMoKTtcbiAgICAgICAgICAgICAgdC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQudXBkYXRlUHJvZ3Jlc3NCYXIobnVsbCk7XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBvID0gMDsgbyA8IDc7IG8rKykgaShvKTtcbiAgfVxuICBvbkl0ZW1DbGFpbUNhbGxiYWNrKHQpIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwuY2xhaW1Ub2RheSgpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX21vZGVsLmdldFJld2FyZEZvckRheSh0KTtcbiAgICAgIHRoaXMub25DbGFpbVJld2FyZCAmJiB0aGlzLm9uQ2xhaW1SZXdhcmQodCwgZSk7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hBbGxJdGVtcygpIHtcbiAgICBpZiAodGhpcy5fbW9kZWwpIGZvciAodmFyIHQgPSAwOyB0IDwgNzsgdCsrKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2l0ZW1zW3RdO1xuICAgICAgZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgZS5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hJdGVtKHQpIHtcbiAgICBpZiAoISh0IDwgMCB8fCB0ID49IDcpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2l0ZW1zW3RdO1xuICAgICAgZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgZS5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG4gIGdldFByb2dyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbCA/IHRoaXMuX21vZGVsLmdldEN1cnJlbnRQcm9ncmVzcygpICsgXCIvN1wiIDogXCIwLzdcIjtcbiAgfVxuICB1cGRhdGVQcm9ncmVzc0Jhcih0ID0gbnVsbCwgZSA9IDAuMTY2KSB7XG4gICAgdmFyIGksXG4gICAgICBvID0gdGhpcztcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5ub2RlICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgdmFyIG4gPSBudWxsID09PSAoaSA9IGNjLmZpbmQoXCJjb250ZW50Tm9kZS9wcm9ncmVzc0JhclwiLCB0aGlzLm5vZGUpKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgYSA9IDAuMDMgKyAodGhpcy5fbW9kZWwuZ2V0Q3VycmVudFByb2dyZXNzKCkgLSAxKSAvIDYsXG4gICAgICAgICAgciA9IGEgPiAxID8gMSA6IGE7XG4gICAgICAgIGlmIChudWxsICE9PSB0ID8gdCA6IHRoaXMuX21vZGVsLmhhc05ld1Byb2dyZXNzKCkpIHtcbiAgICAgICAgICB2YXIgcyA9IDAuMDMgKyAoKHRoaXMuX21vZGVsLmxvY2FsRGF0YS5sYXN0U2hvd25Qcm9ncmVzcyB8fCAwKSAtIDEpIC8gNixcbiAgICAgICAgICAgIGwgPSBzIDwgMCA/IDAgOiBzID4gMSA/IDEgOiBzO1xuICAgICAgICAgIG4ucHJvZ3Jlc3MgPSBsO1xuICAgICAgICAgIGNjLnR3ZWVuKG4pLnRvKGUsIHtcbiAgICAgICAgICAgIHByb2dyZXNzOiByXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgby5wbGF5VG9kYXlSZWFkeUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgby5fbW9kZWwubWFya1Byb2dyZXNzU2hvd24oKTtcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG4ucHJvZ3Jlc3MgPSByO1xuICAgICAgICAgIHRoaXMuX21vZGVsLm1hcmtQcm9ncmVzc1Nob3duKCk7XG4gICAgICAgICAgdGhpcy5wbGF5VG9kYXlSZWFkeUFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlUb2RheVJlYWR5QW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9tb2RlbCkgZm9yICh2YXIgdCA9IDA7IHQgPCA3OyB0KyspIHtcbiAgICAgIHZhciBlID0gdGhpcy5faXRlbXNbdF07XG4gICAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgdGhpcy5fbW9kZWwuZ2V0RGF5U3RhdGUodCkgPT09IERhaWx5U2lnblNpbXBsZVN0YXRlLlJlYWR5KSB7XG4gICAgICAgIGUucGxheVJlYWR5QW5pbWF0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkJveENsaWNrQ2FsbGJhY2sodCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5fbW9kZWwuZ2V0UmV3YXJkRm9yRGF5KHQpO1xuICAgIHRoaXMuc2hvd0RhaWx5U2lnblRpcChlLCBpLCB0KTtcbiAgfVxuICBzaG93RGFpbHlTaWduVGlwKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgdGhpcy5yZW1vdmVEYWlseVNpZ25UaXAoKTtcbiAgICBEYWlseVNpZ25UaXBWaWV3LmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoaS5ub2RlKSkge1xuICAgICAgICB2YXIgbiA9IGkubm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmIChuICYmIGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgICB2YXIgYSA9IG4uY29udmVydFRvTm9kZVNwYWNlQVIodCk7XG4gICAgICAgICAgby5wYXJlbnQgPSBuO1xuICAgICAgICAgIG8uc2V0UG9zaXRpb24oYS54LCBhLnkgKyA3MCk7XG4gICAgICAgICAgdmFyIHIgPSBvLmdldENvbXBvbmVudChEYWlseVNpZ25UaXBWaWV3KTtcbiAgICAgICAgICByLmluaXRSZXdhcmQoZSk7XG4gICAgICAgICAgci5wbGF5SW4oKTtcbiAgICAgICAgICByLm9uQ2xpY2tDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGkucmVtb3ZlRGFpbHlTaWduVGlwKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpLl9kYWlseVNpZ25UaXBOb2RlID0gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICByZW1vdmVEYWlseVNpZ25UaXAoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9kYWlseVNpZ25UaXBOb2RlKSAmJiB0aGlzLl9kYWlseVNpZ25UaXBOb2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kYWlseVNpZ25UaXBOb2RlID0gbnVsbDtcbiAgfVxuICBzaG93VGlwRm9yRGF5KHQpIHtcbiAgICBpZiAoISh0IDwgMCB8fCB0ID49IDcpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2l0ZW1zW3RdO1xuICAgICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICAgIHZhciBpID0gZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHZhciBvID0gaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgICAgIG4gPSBjYy52MyhvLngsIG8ueSwgMCksXG4gICAgICAgICAgICBhID0gdGhpcy5fbW9kZWwuZ2V0UmV3YXJkRm9yRGF5KHQpO1xuICAgICAgICAgIHRoaXMuc2hvd0RhaWx5U2lnblRpcChuLCBhLCB0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZW1vdmVEYWlseVNpZ25UaXAoKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==