
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/BoxTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35f14A8Az9Jfp/PKbvdXwff', 'BoxTips');
// subpackages/l_rank/Scripts/BoxTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var BoxTips = /** @class */ (function (_super) {
    __extends(BoxTips, _super);
    function BoxTips() {
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
    BoxTips.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    BoxTips.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    BoxTips.prototype.onBlockBtnClick = function () {
        this.playOut();
    };
    BoxTips.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
        this.undoTipIcon.active = false;
        this.undoTipValue.active = false;
    };
    BoxTips.prototype.initBoxReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        var o = function o(t, o, n) {
            if (t && o) {
                e.animProxy.attachNode("hook_icon_" + n, function () {
                    return t;
                });
                e.animProxy.attachNode("hook_num_" + n, function () {
                    return o;
                });
            }
        };
        this.showRewardsNodes = [];
        for (var n = 0; n < t.Items.length; n++) {
            var a = t.Items[n], i = t.Counts[n], r = this.getRewardNodes(a), s = r.icon, l = r.value;
            if (s && l) {
                l.getComponent(cc.Label).string = String(i);
                this.showRewardsNodes.push(s, l);
                o(s, l, n + 1);
            }
        }
    };
    BoxTips.prototype.getRewardNodes = function (t) {
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
    BoxTips.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    BoxTips.prototype.playIn = function () {
        var t, e, o = Math.floor(this.showRewardsNodes.length / 2);
        if (o > 0 && o <= 3) {
            try {
                for (var n = __values(this.showRewardsNodes), a = n.next(); !a.done; a = n.next()) {
                    var i = a.value;
                    cc.isValid(i) && (i.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (e = n.return) && e.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + o, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + o, true);
            });
        }
    };
    BoxTips.prototype.playOut = function () {
        var t = this, e = Math.floor(this.showRewardsNodes.length / 2);
        if (e > 0 && e <= 3) {
            var o = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(o, "out_" + e, false, function () {
                t.node.destroy();
            });
        }
    };
    BoxTips.prototype.stopAtFirstFrame = function (t) {
        cc.isValid(this.animProxy) && this.animProxy.stopAtFirstFrameOf(t);
    };
    BoxTips.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    BoxTips.prefabUrl = "prefabs/rank/BoxTips";
    __decorate([
        mj.node("BoxAnim")
    ], BoxTips.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], BoxTips.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], BoxTips.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], BoxTips.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], BoxTips.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], BoxTips.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("UndoTipIcon")
    ], BoxTips.prototype, "undoTipIcon", void 0);
    __decorate([
        mj.node("UndoTipValue")
    ], BoxTips.prototype, "undoTipValue", void 0);
    BoxTips = __decorate([
        mj.class
    ], BoxTips);
    return BoxTips;
}(BaseUI_1.default));
exports.default = BoxTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9Cb3hUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUsK0RBQTBEO0FBQzFELHlFQUFvRTtBQUNwRSw2REFBNEQ7QUFFNUQ7SUFBcUMsMkJBQU07SUFBM0M7UUFBQSxxRUErSUM7UUE3SUMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFxQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3BDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsc0JBQWdCLEdBQUcsRUFBRSxDQUFDOztJQTZIeEIsQ0FBQztJQTNIQyx3QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELGlDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxL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LFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQTNITSxpQkFBUyxHQUFHLHNCQUFzQixDQUFDO0lBakIxQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzRDQUNPO0lBRTFCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NkNBQ1E7SUFFNUI7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnREFDVztJQUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7bURBQ2M7SUFFeEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztpREFDWTtJQUVwQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0RBQ2U7SUFFMUM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnREFDVztJQUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2lEQUNZO0lBaEJqQixPQUFPO1FBRDNCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksT0FBTyxDQStJM0I7SUFBRCxjQUFDO0NBL0lELEFBK0lDLENBL0lvQyxnQkFBTSxHQStJMUM7a0JBL0lvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBFSXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3VzZXIvSVVzZXJEYXRhJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94VGlwcyBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiQm94QW5pbVwiKVxuICBib3hBbmltOiBcIkJveEFuaW1cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiYmxvY2tCdG5cIilcbiAgYmxvY2tCdG46IFwiYmxvY2tCdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludFRpcEljb25cIilcbiAgaGludFRpcEljb246IFwiSGludFRpcEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFRpcEljb25cIilcbiAgcmVmcmVzaFRpcEljb246IFwiUmVmcmVzaFRpcEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludFRpcFZhbHVlXCIpXG4gIGhpbnRUaXBWYWx1ZTogXCJIaW50VGlwVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFRpcFZhbHVlXCIpXG4gIHJlZnJlc2hUaXBWYWx1ZTogXCJSZWZyZXNoVGlwVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVW5kb1RpcEljb25cIilcbiAgdW5kb1RpcEljb246IFwiVW5kb1RpcEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVW5kb1RpcFZhbHVlXCIpXG4gIHVuZG9UaXBWYWx1ZTogXCJVbmRvVGlwVmFsdWVcIiA9IG51bGw7XG4gIGFuaW1Qcm94eSA9IG51bGw7XG4gIHNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9yYW5rL0JveFRpcHNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFNwaW5lKCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmJsb2NrQnRuLCB0aGlzLm9uQmxvY2tCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBvbkJsb2NrQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5wbGF5T3V0KCk7XG4gIH1cbiAgaGlkZVJld2FyZHNOb2RlcygpIHtcbiAgICB0aGlzLnJlZnJlc2hUaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFRpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGludFRpcEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oaW50VGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy51bmRvVGlwSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnVuZG9UaXBWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBpbml0Qm94UmV3YXJkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5oaWRlUmV3YXJkc05vZGVzKCk7XG4gICAgdmFyIG8gPSBmdW5jdGlvbiBvKHQsIG8sIG4pIHtcbiAgICAgIGlmICh0ICYmIG8pIHtcbiAgICAgICAgZS5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfaWNvbl9cIiArIG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGUuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX251bV9cIiArIG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQuSXRlbXMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBhID0gdC5JdGVtc1tuXSxcbiAgICAgICAgaSA9IHQuQ291bnRzW25dLFxuICAgICAgICByID0gdGhpcy5nZXRSZXdhcmROb2RlcyhhKSxcbiAgICAgICAgcyA9IHIuaWNvbixcbiAgICAgICAgbCA9IHIudmFsdWU7XG4gICAgICBpZiAocyAmJiBsKSB7XG4gICAgICAgIGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoaSk7XG4gICAgICAgIHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5wdXNoKHMsIGwpO1xuICAgICAgICBvKHMsIGwsIG4gKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0UmV3YXJkTm9kZXModCkge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBFSXRlbVR5cGUuSGludDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmhpbnRUaXBJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmhpbnRUaXBWYWx1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLnJlZnJlc2hUaXBJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnJlZnJlc2hUaXBWYWx1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuVW5kbzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLnVuZG9UaXBJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnVuZG9UaXBWYWx1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgfVxuICBpbml0U3BpbmUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ib3hBbmltKSAmJiB0aGlzLmJveEFuaW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSkge1xuICAgICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYm94QW5pbSk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB9XG4gIH1cbiAgcGxheUluKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIG8gPSBNYXRoLmZsb29yKHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5sZW5ndGggLyAyKTtcbiAgICBpZiAobyA+IDAgJiYgbyA8PSAzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5zaG93UmV3YXJkc05vZGVzKSwgYSA9IG4ubmV4dCgpOyAhYS5kb25lOyBhID0gbi5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgaSA9IGEudmFsdWU7XG4gICAgICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGEgJiYgIWEuZG9uZSAmJiAoZSA9IG4ucmV0dXJuKSAmJiBlLmNhbGwobik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBsID0gdGhpcy5ib3hBbmltLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGwsIFwiY2xpY2tfXCIgKyBvLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGwsIFwiaW5pdF9cIiArIG8sIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHBsYXlPdXQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IE1hdGguZmxvb3IodGhpcy5zaG93UmV3YXJkc05vZGVzLmxlbmd0aCAvIDIpO1xuICAgIGlmIChlID4gMCAmJiBlIDw9IDMpIHtcbiAgICAgIHZhciBvID0gdGhpcy5ib3hBbmltLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKG8sIFwib3V0X1wiICsgZSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzdG9wQXRGaXJzdEZyYW1lKHQpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuYW5pbVByb3h5KSAmJiB0aGlzLmFuaW1Qcm94eS5zdG9wQXRGaXJzdEZyYW1lT2YodCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmFuaW1Qcm94eSkge1xuICAgICAgdGhpcy5hbmltUHJveHkuY2xlYXIoKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5ID0gbnVsbDtcbiAgICB9XG4gIH1cbn0iXX0=