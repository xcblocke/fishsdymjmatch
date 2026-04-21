
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignTipView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39b49zR9ElPK7IfV8M0EcyV', 'DailySignTipView');
// subpackages/r_dailySignSimple/Scripts/DailySignTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var DailySignTipView = /** @class */ (function (_super) {
    __extends(DailySignTipView, _super);
    function DailySignTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxAnim = null;
        _this.blockBtn = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.animProxy = null;
        _this.showRewardsNodes = [];
        _this.onClickCallback = null;
        return _this;
    }
    DailySignTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    DailySignTipView.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    DailySignTipView.prototype.onBlockBtnClick = function () {
        this.onClickCallback && this.onClickCallback();
    };
    DailySignTipView.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
    };
    DailySignTipView.prototype.initReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        this.showRewardsNodes = [];
        if (t.shuffleCount > 0) {
            this.refreshTipIcon.active = true;
            this.refreshTipValue.active = true;
            this.refreshTipValue.getComponent(cc.Label).string = String(t.shuffleCount);
            this.showRewardsNodes.push(this.refreshTipIcon, this.refreshTipValue);
            if (this.animProxy) {
                var i = this.showRewardsNodes.length / 2;
                this.animProxy.attachNode("hook_icon_" + i, function () {
                    return e.refreshTipIcon;
                });
                this.animProxy.attachNode("hook_num_" + i, function () {
                    return e.refreshTipValue;
                });
            }
        }
        if (t.hintCount > 0) {
            this.hintTipIcon.active = true;
            this.hintTipValue.active = true;
            this.hintTipValue.getComponent(cc.Label).string = String(t.hintCount);
            this.showRewardsNodes.push(this.hintTipIcon, this.hintTipValue);
            if (this.animProxy) {
                i = this.showRewardsNodes.length / 2;
                this.animProxy.attachNode("hook_icon_" + i, function () {
                    return e.hintTipIcon;
                });
                this.animProxy.attachNode("hook_num_" + i, function () {
                    return e.hintTipValue;
                });
            }
        }
    };
    DailySignTipView.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    DailySignTipView.prototype.playIn = function () {
        var t, e, i = Math.floor(this.showRewardsNodes.length / 2);
        if (i > 0 && i < 3) {
            try {
                for (var o = __values(this.showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
                    var a = n.value;
                    cc.isValid(a) && (a.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    n && !n.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + i, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + i, true);
            });
            l.node.scale = 0.9;
        }
    };
    DailySignTipView.prototype.playOut = function (t) {
        var e = this, i = Math.floor(this.showRewardsNodes.length / 2);
        if (i > 0 && i < 3) {
            var o = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(o, "out_" + i, false, function () {
                t && t();
                e.node.destroy();
            });
        }
    };
    DailySignTipView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    DailySignTipView.prefabUrl = "prefabs/DailySignTip";
    DailySignTipView.bundleName = "r_dailySignSimple";
    __decorate([
        mj.node("BoxAnim")
    ], DailySignTipView.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], DailySignTipView.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], DailySignTipView.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], DailySignTipView.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], DailySignTipView.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], DailySignTipView.prototype, "refreshTipValue", void 0);
    DailySignTipView = __decorate([
        mj.class
    ], DailySignTipView);
    return DailySignTipView;
}(BaseUI_1.default));
exports.default = DailySignTipView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblRpcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSwrREFBMEQ7QUFDMUQseUVBQW9FO0FBRXBFO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBMkhDO1FBekhDLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBcUIsSUFBSSxDQUFDO1FBRXhDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxxQkFBZSxHQUFzQixJQUFJLENBQUM7UUFDMUMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWUsR0FBRyxJQUFJLENBQUM7O0lBNEd6QixDQUFDO0lBekdDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHlDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsMENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FB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RSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cURBQ087SUFFMUI7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztzREFDUTtJQUU1QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3lEQUNXO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs0REFDYztJQUV4QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOzBEQUNZO0lBRXBDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs2REFDZTtJQVp2QixnQkFBZ0I7UUFEcEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxnQkFBZ0IsQ0EySHBDO0lBQUQsdUJBQUM7Q0EzSEQsQUEySEMsQ0EzSDZDLGdCQUFNLEdBMkhuRDtrQkEzSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25UaXBWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJCb3hBbmltXCIpXG4gIGJveEFuaW06IFwiQm94QW5pbVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJibG9ja0J0blwiKVxuICBibG9ja0J0bjogXCJibG9ja0J0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VGlwSWNvblwiKVxuICBoaW50VGlwSWNvbjogXCJIaW50VGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwSWNvblwiKVxuICByZWZyZXNoVGlwSWNvbjogXCJSZWZyZXNoVGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VGlwVmFsdWVcIilcbiAgaGludFRpcFZhbHVlOiBcIkhpbnRUaXBWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwVmFsdWVcIilcbiAgcmVmcmVzaFRpcFZhbHVlOiBcIlJlZnJlc2hUaXBWYWx1ZVwiID0gbnVsbDtcbiAgYW5pbVByb3h5ID0gbnVsbDtcbiAgc2hvd1Jld2FyZHNOb2RlcyA9IFtdO1xuICBvbkNsaWNrQ2FsbGJhY2sgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0RhaWx5U2lnblRpcFwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9kYWlseVNpZ25TaW1wbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFNwaW5lKCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmJsb2NrQnRuLCB0aGlzLm9uQmxvY2tCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBvbkJsb2NrQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5vbkNsaWNrQ2FsbGJhY2sgJiYgdGhpcy5vbkNsaWNrQ2FsbGJhY2soKTtcbiAgfVxuICBoaWRlUmV3YXJkc05vZGVzKCkge1xuICAgIHRoaXMucmVmcmVzaFRpcEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWZyZXNoVGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oaW50VGlwSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRUaXBWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBpbml0UmV3YXJkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5oaWRlUmV3YXJkc05vZGVzKCk7XG4gICAgdGhpcy5zaG93UmV3YXJkc05vZGVzID0gW107XG4gICAgaWYgKHQuc2h1ZmZsZUNvdW50ID4gMCkge1xuICAgICAgdGhpcy5yZWZyZXNoVGlwSWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZWZyZXNoVGlwVmFsdWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVmcmVzaFRpcFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RyaW5nKHQuc2h1ZmZsZUNvdW50KTtcbiAgICAgIHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5wdXNoKHRoaXMucmVmcmVzaFRpcEljb24sIHRoaXMucmVmcmVzaFRpcFZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmFuaW1Qcm94eSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5sZW5ndGggLyAyO1xuICAgICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uX1wiICsgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLnJlZnJlc2hUaXBJY29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtX1wiICsgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLnJlZnJlc2hUaXBWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0LmhpbnRDb3VudCA+IDApIHtcbiAgICAgIHRoaXMuaGludFRpcEljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGludFRpcFZhbHVlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmhpbnRUaXBWYWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0LmhpbnRDb3VudCk7XG4gICAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMucHVzaCh0aGlzLmhpbnRUaXBJY29uLCB0aGlzLmhpbnRUaXBWYWx1ZSk7XG4gICAgICBpZiAodGhpcy5hbmltUHJveHkpIHtcbiAgICAgICAgaSA9IHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5sZW5ndGggLyAyO1xuICAgICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uX1wiICsgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLmhpbnRUaXBJY29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtX1wiICsgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLmhpbnRUaXBWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGluaXRTcGluZSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJveEFuaW0pICYmIHRoaXMuYm94QW5pbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5ib3hBbmltKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnJlc2V0KFwiXCIpO1xuICAgICAgdGhpcy5hbmltUHJveHkubWFya1JlYWR5KFwiXCIpO1xuICAgIH1cbiAgfVxuICBwbGF5SW4oKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IE1hdGguZmxvb3IodGhpcy5zaG93UmV3YXJkc05vZGVzLmxlbmd0aCAvIDIpO1xuICAgIGlmIChpID4gMCAmJiBpIDwgMykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHRoaXMuc2hvd1Jld2FyZHNOb2RlcyksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGEgPSBuLnZhbHVlO1xuICAgICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgKGEuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuICYmICFuLmRvbmUgJiYgKGUgPSBvLnJldHVybikgJiYgZS5jYWxsKG8pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbCA9IHRoaXMuYm94QW5pbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShsLCBcImNsaWNrX1wiICsgaSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShsLCBcImluaXRfXCIgKyBpLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgbC5ub2RlLnNjYWxlID0gMC45O1xuICAgIH1cbiAgfVxuICBwbGF5T3V0KHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBpID0gTWF0aC5mbG9vcih0aGlzLnNob3dSZXdhcmRzTm9kZXMubGVuZ3RoIC8gMik7XG4gICAgaWYgKGkgPiAwICYmIGkgPCAzKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuYm94QW5pbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShvLCBcIm91dF9cIiArIGksIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQgJiYgdCgpO1xuICAgICAgICBlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5hbmltUHJveHkpIHtcbiAgICAgIHRoaXMuYW5pbVByb3h5LmNsZWFyKCk7XG4gICAgICB0aGlzLmFuaW1Qcm94eSA9IG51bGw7XG4gICAgfVxuICB9XG59Il19