
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winFullComboOpt/Scripts/WinFullComboOptView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9c49VxzHRIR5vOHqJ9thdi', 'WinFullComboOptView');
// subpackages/r_winFullComboOpt/Scripts/WinFullComboOptView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WinFullComboOptView = /** @class */ (function (_super) {
    __extends(WinFullComboOptView, _super);
    function WinFullComboOptView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.lbTitleFullCombo = null;
        _this.spineScore = null;
        _this.nodeTitleNormal = null;
        _this.isShown = false;
        _this._score = 0;
        _this._settlementScore = 0;
        return _this;
    }
    WinFullComboOptView_1 = WinFullComboOptView;
    WinFullComboOptView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.initNodeStates();
    };
    WinFullComboOptView.prototype.showFullComboUI = function (e, t) {
        var i;
        if (!this.isShown) {
            var o = e.data;
            this._score = o.score;
            this._settlementScore = o.settlementScore;
            this.nodeTitleNormal = t.getChildByName("lbl_scoreDec");
            this.lbScore = null === (i = t.getChildByName("lbl_score")) || void 0 === i ? void 0 : i.getComponent(cc.Label);
            this.spineScore && this.lbScore && (this.spineScore.node.y = this.lbScore.node.y);
            this.lbTitleFullCombo && I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", this.getTitleKey());
            this.isShown = true;
            this.playEnterAnimation();
        }
    };
    WinFullComboOptView.prototype.getTitleKey = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? "TILE_FullCombo" : NormalGameData_1.default.getInstance().getHasTriggeredFullCombo() ? "TILE_FullCombo" : "MahjongTiles_EpicPlay";
    };
    WinFullComboOptView.prototype.initComponents = function () {
        this.spineScore && this.initSpineScore();
    };
    WinFullComboOptView.prototype.initSpineScore = function () {
        var e = this;
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineScore.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return e.lbTitleFullCombo.node;
        });
    };
    WinFullComboOptView.prototype.initNodeStates = function () {
        this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
        this.lbScore && (this.lbScore.node.opacity = 255);
    };
    WinFullComboOptView.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playVibrateBombo();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    WinFullComboOptView.prototype.playVibrateBombo = function () {
        var e = this;
        this.scheduleOnce(function () {
            cc.isValid(e.animProxy) && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2WinViewBomb);
        }, 1.93);
    };
    WinFullComboOptView.prototype.playSpine = function () {
        var e = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            e.animProxy && e.animProxy.setAnimation("init", -1);
        });
    };
    WinFullComboOptView.prototype.playTitleAnimation = function () {
        this.lbTitleFullCombo && cc.tween(this.lbTitleFullCombo.node).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboOptView.prototype.playTitleNormalAnimation = function () {
        this.nodeTitleNormal && cc.tween(this.nodeTitleNormal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboOptView.prototype.playScoreAnimation = function () {
        var e = this;
        if (this.lbScore && this._settlementScore > this._score) {
            this.lbScore.string = this._score.toString();
            this.scheduleOnce(function () {
                var t = e._score, o = e._settlementScore, r = WinFullComboOptView_1.SCORE_SCROLL_DURATION, n = 0, s = function s(i) {
                    n += i;
                    var l = Math.min(n / r, 1), a = cc.easing.sineOut(l), _ = Math.floor(t + (o - t) * a);
                    e.lbScore.string = _.toString();
                    if (l >= 1) {
                        e.unschedule(s);
                        e.lbScore.string = o.toString();
                    }
                };
                e.schedule(s, 0);
            }, 2.67);
        }
    };
    WinFullComboOptView.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this.lbTitleFullCombo && cc.Tween.stopAllByTarget(this.lbTitleFullCombo);
        this.lbScore && cc.Tween.stopAllByTarget(this.lbScore);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var WinFullComboOptView_1;
    WinFullComboOptView.prefabUrl = "prefabs/WinFullComboOptView";
    WinFullComboOptView.bundleName = "r_winFullComboOpt";
    WinFullComboOptView.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.component("lb_title", cc.Label)
    ], WinFullComboOptView.prototype, "lbTitleFullCombo", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinFullComboOptView.prototype, "spineScore", void 0);
    __decorate([
        mj.traitEvent("WinFullComboOpt_getKey")
    ], WinFullComboOptView.prototype, "getTitleKey", null);
    WinFullComboOptView = WinFullComboOptView_1 = __decorate([
        mj.class
    ], WinFullComboOptView);
    return WinFullComboOptView;
}(BaseUI_1.default));
exports.default = WinFullComboOptView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbkZ1bGxDb21ib09wdC9TY3JpcHRzL1dpbkZ1bGxDb21ib09wdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixzRkFBaUY7QUFDakYsMkVBQXNFO0FBQ3RFLCtEQUEwRDtBQUMxRCx5RUFBb0U7QUFDcEUsd0ZBQXdIO0FBQ3hILHNFQUFpRTtBQUVqRTtJQUFpRCx1Q0FBTTtJQUF2RDtRQUFBLHFFQW9IQztRQW5IQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0lBMkd2QixDQUFDOzRCQXBIb0IsbUJBQW1CO0lBYXRDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELDZDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZ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O1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxpQkFBTSxTQUFTLElBQUksaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOztJQXpHTSw2QkFBUyxHQUFHLDZCQUE2QixDQUFDO0lBQzFDLDhCQUFVLEdBQUcsbUJBQW1CLENBQUM7SUFDakMseUNBQXFCLEdBQUcsR0FBRyxDQUFDO0lBVG5DO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztpRUFDQztJQUVwQztRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkRBQ1I7SUE0QmpDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzswREFHdkM7SUFuQ2tCLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSztPQUNZLG1CQUFtQixDQW9IdkM7SUFBRCwwQkFBQztDQXBIRCxBQW9IQyxDQXBIZ0QsZ0JBQU0sR0FvSHREO2tCQXBIb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCwgRVZpYnJhdGVQb2ludCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbkZ1bGxDb21ib09wdFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBsYlNjb3JlID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImxiX3RpdGxlXCIsIGNjLkxhYmVsKVxuICBsYlRpdGxlRnVsbENvbWJvOiBcImxiX3RpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwic3BpbmVfc2NvcmVcIiwgc3AuU2tlbGV0b24pXG4gIHNwaW5lU2NvcmU6IFwic3BpbmVfc2NvcmVcIiA9IG51bGw7XG4gIG5vZGVUaXRsZU5vcm1hbCA9IG51bGw7XG4gIGlzU2hvd24gPSBmYWxzZTtcbiAgX3Njb3JlID0gMDtcbiAgX3NldHRsZW1lbnRTY29yZSA9IDA7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvV2luRnVsbENvbWJvT3B0Vmlld1wiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl93aW5GdWxsQ29tYm9PcHRcIjtcbiAgc3RhdGljIFNDT1JFX1NDUk9MTF9EVVJBVElPTiA9IDAuNTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbiAgICB0aGlzLmluaXROb2RlU3RhdGVzKCk7XG4gIH1cbiAgc2hvd0Z1bGxDb21ib1VJKGUsIHQpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdmFyIG8gPSBlLmRhdGE7XG4gICAgICB0aGlzLl9zY29yZSA9IG8uc2NvcmU7XG4gICAgICB0aGlzLl9zZXR0bGVtZW50U2NvcmUgPSBvLnNldHRsZW1lbnRTY29yZTtcbiAgICAgIHRoaXMubm9kZVRpdGxlTm9ybWFsID0gdC5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZURlY1wiKTtcbiAgICAgIHRoaXMubGJTY29yZSA9IG51bGwgPT09IChpID0gdC5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZVwiKSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgdGhpcy5zcGluZVNjb3JlICYmIHRoaXMubGJTY29yZSAmJiAodGhpcy5zcGluZVNjb3JlLm5vZGUueSA9IHRoaXMubGJTY29yZS5ub2RlLnkpO1xuICAgICAgdGhpcy5sYlRpdGxlRnVsbENvbWJvICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5sYlRpdGxlRnVsbENvbWJvLm5vZGUsIFwiXCIsIHRoaXMuZ2V0VGl0bGVLZXkoKSk7XG4gICAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5RW50ZXJBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5GdWxsQ29tYm9PcHRfZ2V0S2V5XCIpXG4gIGdldFRpdGxlS2V5KCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA/IFwiVElMRV9GdWxsQ29tYm9cIiA6IE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCkgPyBcIlRJTEVfRnVsbENvbWJvXCIgOiBcIk1haGpvbmdUaWxlc19FcGljUGxheVwiO1xuICB9XG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuc3BpbmVTY29yZSAmJiB0aGlzLmluaXRTcGluZVNjb3JlKCk7XG4gIH1cbiAgaW5pdFNwaW5lU2NvcmUoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLnNwaW5lU2NvcmUubm9kZSk7XG4gICAgdGhpcy5hbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgdGhpcy5hbmltUHJveHkubWFya1JlYWR5KFwiXCIpO1xuICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX3R4dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5sYlRpdGxlRnVsbENvbWJvLm5vZGU7XG4gICAgfSk7XG4gIH1cbiAgaW5pdE5vZGVTdGF0ZXMoKSB7XG4gICAgdGhpcy5sYlRpdGxlRnVsbENvbWJvICYmICh0aGlzLmxiVGl0bGVGdWxsQ29tYm8ubm9kZS5vcGFjaXR5ID0gMCk7XG4gICAgdGhpcy5sYlNjb3JlICYmICh0aGlzLmxiU2NvcmUubm9kZS5vcGFjaXR5ID0gMjU1KTtcbiAgfVxuICBwbGF5RW50ZXJBbmltYXRpb24oKSB7XG4gICAgdGhpcy5wbGF5U3BpbmUoKTtcbiAgICB0aGlzLnBsYXlWaWJyYXRlQm9tYm8oKTtcbiAgICB0aGlzLnBsYXlUaXRsZUFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheVRpdGxlTm9ybWFsQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5wbGF5U2NvcmVBbmltYXRpb24oKTtcbiAgfVxuICBwbGF5VmlicmF0ZUJvbWJvKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGUuYW5pbVByb3h5KSAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZywgRVZpYnJhdGVQb2ludC5UaWxlMldpblZpZXdCb21iKTtcbiAgICB9LCAxLjkzKTtcbiAgfVxuICBwbGF5U3BpbmUoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYW5pbVByb3h5ICYmIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuYW5pbVByb3h5ICYmIGUuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlUaXRsZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmxiVGl0bGVGdWxsQ29tYm8gJiYgY2MudHdlZW4odGhpcy5sYlRpdGxlRnVsbENvbWJvLm5vZGUpLmRlbGF5KDEuNzMpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5VGl0bGVOb3JtYWxBbmltYXRpb24oKSB7XG4gICAgdGhpcy5ub2RlVGl0bGVOb3JtYWwgJiYgY2MudHdlZW4odGhpcy5ub2RlVGl0bGVOb3JtYWwpLmRlbGF5KDEuNzMpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheVNjb3JlQW5pbWF0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5sYlNjb3JlICYmIHRoaXMuX3NldHRsZW1lbnRTY29yZSA+IHRoaXMuX3Njb3JlKSB7XG4gICAgICB0aGlzLmxiU2NvcmUuc3RyaW5nID0gdGhpcy5fc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBlLl9zY29yZSxcbiAgICAgICAgICBvID0gZS5fc2V0dGxlbWVudFNjb3JlLFxuICAgICAgICAgIHIgPSBXaW5GdWxsQ29tYm9PcHRWaWV3LlNDT1JFX1NDUk9MTF9EVVJBVElPTixcbiAgICAgICAgICBuID0gMCxcbiAgICAgICAgICBzID0gZnVuY3Rpb24gcyhpKSB7XG4gICAgICAgICAgICBuICs9IGk7XG4gICAgICAgICAgICB2YXIgbCA9IE1hdGgubWluKG4gLyByLCAxKSxcbiAgICAgICAgICAgICAgYSA9IGNjLmVhc2luZy5zaW5lT3V0KGwpLFxuICAgICAgICAgICAgICBfID0gTWF0aC5mbG9vcih0ICsgKG8gLSB0KSAqIGEpO1xuICAgICAgICAgICAgZS5sYlNjb3JlLnN0cmluZyA9IF8udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChsID49IDEpIHtcbiAgICAgICAgICAgICAgZS51bnNjaGVkdWxlKHMpO1xuICAgICAgICAgICAgICBlLmxiU2NvcmUuc3RyaW5nID0gby50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIGUuc2NoZWR1bGUocywgMCk7XG4gICAgICB9LCAyLjY3KTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubGJUaXRsZUZ1bGxDb21ibyAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYlRpdGxlRnVsbENvbWJvKTtcbiAgICB0aGlzLmxiU2NvcmUgJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubGJTY29yZSk7XG4gICAgc3VwZXIub25EZXN0cm95ICYmIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19