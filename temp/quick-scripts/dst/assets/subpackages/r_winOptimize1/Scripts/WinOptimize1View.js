
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winOptimize1/Scripts/WinOptimize1View.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cab12jlu1ZJU7B48gpYkM71', 'WinOptimize1View');
// subpackages/r_winOptimize1/Scripts/WinOptimize1View.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var WinOptimize1View = /** @class */ (function (_super) {
    __extends(WinOptimize1View, _super);
    function WinOptimize1View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineVictory = null;
        _this.spineScore = null;
        _this.lblTitleOpt = null;
        _this.isShown = false;
        return _this;
    }
    WinOptimize1View.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimize1View.prototype.showUI = function (t) {
        if (!this.isShown) {
            this.isShown = true;
            var i = this.getTitleNode(t);
            if (i) {
                this.hideOriginalSpine(t);
                this.setTitle(i);
                this.alignSpineScore(t);
                this.playSpineAnimation();
                this.playTitleAnimation();
            }
        }
    };
    WinOptimize1View.prototype.playTitleAnimation = function () {
        if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
            this.lblTitleOpt.node.scale = 1.8;
            this.lblTitleOpt.node.opacity = 0;
            this.lblTitleOpt.node.stopAllActions();
            cc.tween(this.lblTitleOpt.node).to(0.2, {
                scale: 0.7
            }, {
                easing: cc.easing.sineInOut
            }).to(0.13, {
                scale: 1.05
            }, {
                easing: cc.easing.sineInOut
            }).to(0.1, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }).start();
            cc.tween(this.lblTitleOpt.node).to(0.43, {
                opacity: 255
            }).start();
        }
    };
    WinOptimize1View.prototype.alignSpineScore = function (t) {
        if (cc.isValid(t) && cc.isValid(this.spineScore)) {
            var i = t.getChildByName("lbl_score");
            cc.isValid(i) && (this.spineScore.node.y = i.y);
        }
    };
    WinOptimize1View.prototype.playSpineAnimation = function () {
        var t = this;
        this.spineVictory && CommonUtils_1.playSpineAnim(this.spineVictory, 1, "in_1", function () {
            CommonUtils_1.playSpineAnim(t.spineVictory, -1, "init");
        });
        this.spineScore && CommonUtils_1.playSpineAnim(this.spineScore, 1, "in_2");
    };
    WinOptimize1View.prototype.hideOriginalSpine = function (t) {
        if (cc.isValid(t)) {
            var i = t.getChildByName("spin_wellDone");
            cc.isValid(i) && (i.active = false);
            var e = t.getChildByName("light_node");
            cc.isValid(e) && (e.active = false);
        }
    };
    WinOptimize1View.prototype.getTitleNode = function (t) {
        if (!cc.isValid(t))
            return null;
        var i = t.getChildByName("lbl_title");
        return cc.isValid(i) ? i : null;
    };
    WinOptimize1View.prototype.setTitle = function (t) {
        var i = t.getComponent(cc.Label);
        if (i) {
            t.active = false;
            cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = i.string);
        }
    };
    WinOptimize1View.prototype.onDestroy = function () {
        var i;
        _super.prototype.onDestroy.call(this);
        cc.isValid(null === (i = this.lblTitleOpt) || void 0 === i ? void 0 : i.node) && this.lblTitleOpt.node.stopAllActions();
        this.isShown = false;
    };
    WinOptimize1View.prefabUrl = "prefabs/WinOptimize1";
    WinOptimize1View.bundleName = "r_winOptimize1";
    __decorate([
        mj.component("spine_victory", sp.Skeleton)
    ], WinOptimize1View.prototype, "spineVictory", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinOptimize1View.prototype, "spineScore", void 0);
    __decorate([
        mj.component("lb_title_opt", cc.Label)
    ], WinOptimize1View.prototype, "lblTitleOpt", void 0);
    WinOptimize1View = __decorate([
        mj.class
    ], WinOptimize1View);
    return WinOptimize1View;
}(BaseUI_1.default));
exports.default = WinOptimize1View;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbk9wdGltaXplMS9TY3JpcHRzL1dpbk9wdGltaXplMVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw0RUFBNkU7QUFFN0U7SUFBOEMsb0NBQU07SUFBcEQ7UUFBQSxxRUF3RkM7UUF0RkMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBRXJDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUFpRmxCLENBQUM7SUE5RUMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUNELDZDQUFrQixHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcs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QUNSO0lBRWpDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDSjtJQU5oQixnQkFBZ0I7UUFEcEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxnQkFBZ0IsQ0F3RnBDO0lBQUQsdUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RjZDLGdCQUFNLEdBd0ZuRDtrQkF4Rm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IHBsYXlTcGluZUFuaW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbk9wdGltaXplMVZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwic3BpbmVfdmljdG9yeVwiLCBzcC5Ta2VsZXRvbilcbiAgc3BpbmVWaWN0b3J5OiBcInNwaW5lX3ZpY3RvcnlcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJzcGluZV9zY29yZVwiLCBzcC5Ta2VsZXRvbilcbiAgc3BpbmVTY29yZTogXCJzcGluZV9zY29yZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImxiX3RpdGxlX29wdFwiLCBjYy5MYWJlbClcbiAgbGJsVGl0bGVPcHQ6IFwibGJfdGl0bGVfb3B0XCIgPSBudWxsO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvV2luT3B0aW1pemUxXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX3dpbk9wdGltaXplMVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgc2hvd1VJKHQpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRUaXRsZU5vZGUodCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0aGlzLmhpZGVPcmlnaW5hbFNwaW5lKHQpO1xuICAgICAgICB0aGlzLnNldFRpdGxlKGkpO1xuICAgICAgICB0aGlzLmFsaWduU3BpbmVTY29yZSh0KTtcbiAgICAgICAgdGhpcy5wbGF5U3BpbmVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5wbGF5VGl0bGVBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheVRpdGxlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLmxibFRpdGxlT3B0ICYmIGNjLmlzVmFsaWQodGhpcy5sYmxUaXRsZU9wdC5ub2RlKSkge1xuICAgICAgdGhpcy5sYmxUaXRsZU9wdC5ub2RlLnNjYWxlID0gMS44O1xuICAgICAgdGhpcy5sYmxUaXRsZU9wdC5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5sYmxUaXRsZU9wdC5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmxibFRpdGxlT3B0Lm5vZGUpLnRvKDAuMiwge1xuICAgICAgICBzY2FsZTogMC43XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICAgIH0pLnRvKDAuMSwge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmxibFRpdGxlT3B0Lm5vZGUpLnRvKDAuNDMsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBhbGlnblNwaW5lU2NvcmUodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQodGhpcy5zcGluZVNjb3JlKSkge1xuICAgICAgdmFyIGkgPSB0LmdldENoaWxkQnlOYW1lKFwibGJsX3Njb3JlXCIpO1xuICAgICAgY2MuaXNWYWxpZChpKSAmJiAodGhpcy5zcGluZVNjb3JlLm5vZGUueSA9IGkueSk7XG4gICAgfVxuICB9XG4gIHBsYXlTcGluZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5zcGluZVZpY3RvcnkgJiYgcGxheVNwaW5lQW5pbSh0aGlzLnNwaW5lVmljdG9yeSwgMSwgXCJpbl8xXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXlTcGluZUFuaW0odC5zcGluZVZpY3RvcnksIC0xLCBcImluaXRcIik7XG4gICAgfSk7XG4gICAgdGhpcy5zcGluZVNjb3JlICYmIHBsYXlTcGluZUFuaW0odGhpcy5zcGluZVNjb3JlLCAxLCBcImluXzJcIik7XG4gIH1cbiAgaGlkZU9yaWdpbmFsU3BpbmUodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX3dlbGxEb25lXCIpO1xuICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaWdodF9ub2RlXCIpO1xuICAgICAgY2MuaXNWYWxpZChlKSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGdldFRpdGxlTm9kZSh0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHQpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfdGl0bGVcIik7XG4gICAgcmV0dXJuIGNjLmlzVmFsaWQoaSkgPyBpIDogbnVsbDtcbiAgfVxuICBzZXRUaXRsZSh0KSB7XG4gICAgdmFyIGkgPSB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgaWYgKGkpIHtcbiAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubGJsVGl0bGVPcHQpICYmICh0aGlzLmxibFRpdGxlT3B0LnN0cmluZyA9IGkuc3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciBpO1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGkgPSB0aGlzLmxibFRpdGxlT3B0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLm5vZGUpICYmIHRoaXMubGJsVGl0bGVPcHQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICB9XG59Il19