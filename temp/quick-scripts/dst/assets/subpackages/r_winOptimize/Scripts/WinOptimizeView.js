
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winOptimize/Scripts/WinOptimizeView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '098b3mErTxGEbtudy5UIaoz', 'WinOptimizeView');
// subpackages/r_winOptimize/Scripts/WinOptimizeView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var WinOptimizeView = /** @class */ (function (_super) {
    __extends(WinOptimizeView, _super);
    function WinOptimizeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineVictory = null;
        _this.lblTitleOpt = null;
        _this.isShown = false;
        return _this;
    }
    WinOptimizeView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimizeView.prototype.showUI = function (t) {
        if (!this.isShown) {
            this.isShown = true;
            var e = this.getTitleNode(t);
            if (e) {
                this.setTitle(e);
                this.playSpineAnimation();
                this.playTitleAnimation();
            }
        }
    };
    WinOptimizeView.prototype.playTitleAnimation = function () {
        if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
            this.lblTitleOpt.node.opacity = 255;
            this.lblTitleOpt.node.scale = 0;
            this.lblTitleOpt.node.stopAllActions();
            cc.tween(this.lblTitleOpt.node).delay(0.2).to(0.33, {
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
    WinOptimizeView.prototype.playSpineAnimation = function () {
        this.spineVictory && this.spineVictory.setAnimation(0, "in", false);
    };
    WinOptimizeView.prototype.getTitleNode = function (t) {
        if (!cc.isValid(t))
            return null;
        var e = t.getChildByName("lbl_title");
        return cc.isValid(e) ? e : null;
    };
    WinOptimizeView.prototype.setTitle = function (t) {
        var e = t.getComponent(cc.Label);
        if (e) {
            t.active = false;
            cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = e.string);
        }
    };
    WinOptimizeView.prototype.onDestroy = function () {
        var e;
        _super.prototype.onDestroy.call(this);
        cc.isValid(null === (e = this.lblTitleOpt) || void 0 === e ? void 0 : e.node) && this.lblTitleOpt.node.stopAllActions();
        this.isShown = false;
    };
    WinOptimizeView.prefabUrl = "prefabs/WinOptimize";
    WinOptimizeView.bundleName = "r_winOptimize";
    __decorate([
        mj.component("spine_victory", sp.Skeleton)
    ], WinOptimizeView.prototype, "spineVictory", void 0);
    __decorate([
        mj.component("lb_title_opt", cc.Label)
    ], WinOptimizeView.prototype, "lblTitleOpt", void 0);
    WinOptimizeView = __decorate([
        mj.class
    ], WinOptimizeView);
    return WinOptimizeView;
}(BaseUI_1.default));
exports.default = WinOptimizeView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbk9wdGltaXplL1NjcmlwdHMvV2luT3B0aW1pemVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFFMUQ7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUEyREM7UUF6REMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBRXJDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxhQUFPLEdBQUcsS0FBSyxDQUFDOztJQXNEbEIsQ0FBQztJQW5EQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUNELDRDQUFrQixHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDbEQsS0FBSyxFQUFFLEdBQUc7YUFDWCxFQUFFO2dCQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7YUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7YUFDVCxFQUFFO2dCQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDMUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUNELG1DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4SCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBcERNLHlCQUFTLEdBQUcscUJBQXFCLENBQUM7SUFDbEMsMEJBQVUsR0FBRyxlQUFlLENBQUM7SUFMcEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO3lEQUNOO0lBRXJDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDSjtJQUpoQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZUFBZSxDQTJEbkM7SUFBRCxzQkFBQztDQTNERCxBQTJEQyxDQTNENEMsZ0JBQU0sR0EyRGxEO2tCQTNEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luT3B0aW1pemVWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLmNvbXBvbmVudChcInNwaW5lX3ZpY3RvcnlcIiwgc3AuU2tlbGV0b24pXG4gIHNwaW5lVmljdG9yeTogXCJzcGluZV92aWN0b3J5XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibGJfdGl0bGVfb3B0XCIsIGNjLkxhYmVsKVxuICBsYmxUaXRsZU9wdDogXCJsYl90aXRsZV9vcHRcIiA9IG51bGw7XG4gIGlzU2hvd24gPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9XaW5PcHRpbWl6ZVwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl93aW5PcHRpbWl6ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgc2hvd1VJKHQpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRUaXRsZU5vZGUodCk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0aGlzLnNldFRpdGxlKGUpO1xuICAgICAgICB0aGlzLnBsYXlTcGluZUFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLnBsYXlUaXRsZUFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5VGl0bGVBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMubGJsVGl0bGVPcHQgJiYgY2MuaXNWYWxpZCh0aGlzLmxibFRpdGxlT3B0Lm5vZGUpKSB7XG4gICAgICB0aGlzLmxibFRpdGxlT3B0Lm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMubGJsVGl0bGVPcHQubm9kZS5zY2FsZSA9IDA7XG4gICAgICB0aGlzLmxibFRpdGxlT3B0Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubGJsVGl0bGVPcHQubm9kZSkuZGVsYXkoMC4yKS50bygwLjMzLCB7XG4gICAgICAgIHNjYWxlOiAxLjJcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhcnRPdXRcbiAgICAgIH0pLnRvKDAuMiwge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFydEluXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5U3BpbmVBbmltYXRpb24oKSB7XG4gICAgdGhpcy5zcGluZVZpY3RvcnkgJiYgdGhpcy5zcGluZVZpY3Rvcnkuc2V0QW5pbWF0aW9uKDAsIFwiaW5cIiwgZmFsc2UpO1xuICB9XG4gIGdldFRpdGxlTm9kZSh0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHQpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfdGl0bGVcIik7XG4gICAgcmV0dXJuIGNjLmlzVmFsaWQoZSkgPyBlIDogbnVsbDtcbiAgfVxuICBzZXRUaXRsZSh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgaWYgKGUpIHtcbiAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubGJsVGl0bGVPcHQpICYmICh0aGlzLmxibFRpdGxlT3B0LnN0cmluZyA9IGUuc3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLmxibFRpdGxlT3B0KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUpICYmIHRoaXMubGJsVGl0bGVPcHQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICB9XG59Il19