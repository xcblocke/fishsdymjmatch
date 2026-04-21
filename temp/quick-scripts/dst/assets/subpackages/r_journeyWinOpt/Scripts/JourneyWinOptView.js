
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_journeyWinOpt/Scripts/JourneyWinOptView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2pvdXJuZXlXaW5PcHQvU2NyaXB0cy9Kb3VybmV5V2luT3B0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFEO0lBQStDLHFDQUFNO0lBQXJEO1FBQUEscUVBZ0hDO1FBOUdDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsd0JBQWtCLEdBQW1CLElBQUksQ0FBQztRQUUxQyxrQkFBWSxHQUE0QixJQUFJLENBQUM7UUFDN0MsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixvQkFBYyxHQUFHLENBQUMsQ0FBQzs7SUFzR3JCLENBQUM7SUFuR0Msa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGtDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDRCx3Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QUMxSCxDQUFDO0lBcEdNLDJCQUFTLEdBQUcsdUJBQXVCLENBQUM7SUFDcEMsNEJBQVUsR0FBRyxpQkFBaUIsQ0FBQztJQVZ0QztRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkRBQ047SUFFckM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNKO0lBRW5DO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7aUVBQ2tCO0lBRTFDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDOzJEQUNUO0lBUjFCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSztPQUNZLGlCQUFpQixDQWdIckM7SUFBRCx3QkFBQztDQWhIRCxBQWdIQyxDQWhIOEMsZ0JBQU0sR0FnSHBEO2tCQWhIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3VybmV5V2luT3B0VmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5jb21wb25lbnQoXCJzcGluZV92aWN0b3J5XCIsIHNwLlNrZWxldG9uKVxuICBzcGluZVZpY3Rvcnk6IFwic3BpbmVfdmljdG9yeVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImxiX3RpdGxlX29wdFwiLCBjYy5MYWJlbClcbiAgbGJsVGl0bGVPcHQ6IFwibGJfdGl0bGVfb3B0XCIgPSBudWxsO1xuICBAbWoubm9kZShcInByb2dyZXNzX29wdFwiKVxuICBwcm9ncmVzc19jb250YWluZXI6IFwicHJvZ3Jlc3Nfb3B0XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwicHJvZ3Jlc3Nfb3B0L1Byb2dyZXNzXCIsIGNjLlByb2dyZXNzQmFyKVxuICBwcm9ncmVzc19iYXI6IFwicHJvZ3Jlc3Nfb3B0L1Byb2dyZXNzXCIgPSBudWxsO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIHRhcmdldFByb2dyZXNzID0gMDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9Kb3VybmV5V2luT3B0XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX2pvdXJuZXlXaW5PcHRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIHNob3dVSSh0KSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgICB2YXIgZSA9IHRoaXMuZ2V0VGl0bGVOb2RlKHQpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdGhpcy5zZXRUaXRsZShlKTtcbiAgICAgICAgdGhpcy5wbGF5U3BpbmVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5wbGF5VGl0bGVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5kZWFsUHJvZ3Jlc3ModCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlYWxQcm9ncmVzcyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5wcm9ncmVzc19jb250YWluZXIpICYmICh0aGlzLnByb2dyZXNzX2NvbnRhaW5lci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdmFyIHIgPSBjYy5maW5kKFwicHJvZ3Jlc3NcIiwgdCksXG4gICAgICBpID0gY2MuZmluZChcInByb2dyZXNzL1Byb2dyZXNzXCIsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgIHZhciBvID0gaS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdGhpcy50YXJnZXRQcm9ncmVzcyA9IG8uZW5kUHJvZ3Jlc3MgfHwgMDtcbiAgICAgICAgY2MuaXNWYWxpZCh0aGlzLnByb2dyZXNzX2JhcikgJiYgKHRoaXMucHJvZ3Jlc3NfYmFyLnByb2dyZXNzID0gby5wcm9ncmVzcyk7XG4gICAgICAgIGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBuID0gci5nZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleChuKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUucGxheVByb2dyZXNzQmFyQW5pbWF0aW9uKCk7XG4gICAgICAgIH0sIDAuNik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlUaXRsZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoY2MuaXNWYWxpZChudWxsID09PSAodCA9IHRoaXMubGJsVGl0bGVPcHQpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubm9kZSkpIHtcbiAgICAgIHRoaXMubGJsVGl0bGVPcHQubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5sYmxUaXRsZU9wdC5ub2RlLnNjYWxlID0gMDtcbiAgICAgIHRoaXMubGJsVGl0bGVPcHQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgY2MudHdlZW4odGhpcy5sYmxUaXRsZU9wdC5ub2RlKS5kZWxheSgwLjUpLnRvKDAuMiwge1xuICAgICAgICBzY2FsZTogMS4yXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YXJ0T3V0XG4gICAgICB9KS50bygwLjIsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhcnRJblxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVByb2dyZXNzQmFyQW5pbWF0aW9uKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucHJvZ3Jlc3NfYmFyKSAmJiBjYy5pc1ZhbGlkKHRoaXMucHJvZ3Jlc3NfY29udGFpbmVyKSkge1xuICAgICAgdGhpcy5wcm9ncmVzc19jb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NfY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5wcm9ncmVzc19jb250YWluZXIuc2NhbGUgPSAwLjc7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wcm9ncmVzc19jb250YWluZXIpO1xuICAgICAgY2MudHdlZW4odGhpcy5wcm9ncmVzc19jb250YWluZXIpLnRvKDAuMywge1xuICAgICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgIH0pLnRvKDAuMTQsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucHJvZ3Jlc3NfYmFyKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NfYmFyKS5kZWxheSgwLjYpLnRvKDAuMywge1xuICAgICAgICBwcm9ncmVzczogdGhpcy50YXJnZXRQcm9ncmVzc1xuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5PdXRcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlTcGluZUFuaW1hdGlvbigpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuc3BpbmVWaWN0b3J5KSAmJiB0aGlzLnNwaW5lVmljdG9yeS5zZXRBbmltYXRpb24oMCwgXCJpblwiLCBmYWxzZSk7XG4gIH1cbiAgZ2V0VGl0bGVOb2RlKHQpIHtcbiAgICBpZiAoIWNjLmlzVmFsaWQodCkpIHJldHVybiBudWxsO1xuICAgIHZhciBlID0gdC5nZXRDaGlsZEJ5TmFtZShcImxibF90aXRsZVwiKTtcbiAgICByZXR1cm4gY2MuaXNWYWxpZChlKSA/IGUgOiBudWxsO1xuICB9XG4gIHNldFRpdGxlKHQpIHtcbiAgICB2YXIgZSA9IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICBpZiAoZSkge1xuICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5sYmxUaXRsZU9wdCkgJiYgKHRoaXMubGJsVGl0bGVPcHQuc3RyaW5nID0gZS5zdHJpbmcpO1xuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnByb2dyZXNzX2NvbnRhaW5lcikgJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucHJvZ3Jlc3NfY29udGFpbmVyKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucHJvZ3Jlc3NfYmFyKSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wcm9ncmVzc19iYXIpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLmxibFRpdGxlT3B0KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUpICYmIHRoaXMubGJsVGl0bGVPcHQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICB9XG59Il19