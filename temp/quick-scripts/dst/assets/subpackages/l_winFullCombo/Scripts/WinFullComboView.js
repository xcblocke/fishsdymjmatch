
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winFullCombo/Scripts/WinFullComboView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0a0a9Lgo5ICJzW/vd6NP16', 'WinFullComboView');
// subpackages/l_winFullCombo/Scripts/WinFullComboView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var WinFullComboView = /** @class */ (function (_super) {
    __extends(WinFullComboView, _super);
    function WinFullComboView() {
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
    WinFullComboView_1 = WinFullComboView;
    WinFullComboView.prototype.showFullComboUI = function (t, e) {
        var o;
        if (!this.isShown) {
            var i = t.data;
            this._score = i.score;
            this._settlementScore = i.settlementScore;
            this.nodeTitleNormal = e.getChildByName("lbl_scoreDec");
            this.lbScore = null === (o = e.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
            this.lbTitleFullCombo && (NormalGameData_1.default.getInstance().getHasTriggeredFullCombo() ? I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", "TILE_FullCombo") : I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", "MahjongTiles_EpicPlay"));
            this.isShown = true;
            this.playEnterAnimation();
        }
    };
    WinFullComboView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.initNodeStates();
    };
    WinFullComboView.prototype.initComponents = function () {
        this.spineScore && this.initSpineScore();
    };
    WinFullComboView.prototype.initSpineScore = function () {
        var t = this;
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineScore.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return t.lbTitleFullCombo.node;
        });
    };
    WinFullComboView.prototype.initNodeStates = function () {
        this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
        this.lbScore && (this.lbScore.node.opacity = 255);
    };
    WinFullComboView.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    WinFullComboView.prototype.playSpine = function () {
        var t = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            t.animProxy && t.animProxy.setAnimation("init", -1);
        });
    };
    WinFullComboView.prototype.playTitleAnimation = function () {
        this.lbTitleFullCombo && cc.tween(this.lbTitleFullCombo.node).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboView.prototype.playTitleNormalAnimation = function () {
        this.nodeTitleNormal && cc.tween(this.nodeTitleNormal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboView.prototype.playScoreAnimation = function () {
        var t = this;
        if (this.lbScore && this._settlementScore > this._score) {
            this.lbScore.string = this._score.toString();
            this.scheduleOnce(function () {
                var e = t._score, i = t._settlementScore, r = WinFullComboView_1.SCORE_SCROLL_DURATION, n = 0, l = function l(o) {
                    n += o;
                    var a = Math.min(n / r, 1), s = cc.easing.sineOut(a), c = Math.floor(e + (i - e) * s);
                    t.lbScore.string = c.toString();
                    if (a >= 1) {
                        t.unschedule(l);
                        t.lbScore.string = i.toString();
                    }
                };
                t.schedule(l, 0);
            }, 2.67);
        }
    };
    WinFullComboView.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this.lbTitleFullCombo && cc.Tween.stopAllByTarget(this.lbTitleFullCombo);
        this.lbScore && cc.Tween.stopAllByTarget(this.lbScore);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var WinFullComboView_1;
    WinFullComboView.prefabUrl = "prefabs/ui/WinFullComboView";
    WinFullComboView.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.component("lb_title", cc.Label)
    ], WinFullComboView.prototype, "lbTitleFullCombo", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinFullComboView.prototype, "spineScore", void 0);
    WinFullComboView = WinFullComboView_1 = __decorate([
        mj.class
    ], WinFullComboView);
    return WinFullComboView;
}(BaseUI_1.default));
exports.default = WinFullComboView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkZ1bGxDb21iby9TY3JpcHRzL1dpbkZ1bGxDb21ib1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUFpRjtBQUNqRiwyRUFBc0U7QUFDdEUsK0RBQTBEO0FBQzFELHlFQUFvRTtBQUVwRTtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQXVHQztRQXRHQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0lBOEZ2QixDQUFDO3lCQXZHb0IsZ0JBQWdCO0lBWW5DLDBDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMs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QXZHb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5GdWxsQ29tYm9WaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgbGJTY29yZSA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJsYl90aXRsZVwiLCBjYy5MYWJlbClcbiAgbGJUaXRsZUZ1bGxDb21ibzogXCJsYl90aXRsZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcInNwaW5lX3Njb3JlXCIsIHNwLlNrZWxldG9uKVxuICBzcGluZVNjb3JlOiBcInNwaW5lX3Njb3JlXCIgPSBudWxsO1xuICBub2RlVGl0bGVOb3JtYWwgPSBudWxsO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIF9zY29yZSA9IDA7XG4gIF9zZXR0bGVtZW50U2NvcmUgPSAwO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL1dpbkZ1bGxDb21ib1ZpZXdcIjtcbiAgc3RhdGljIFNDT1JFX1NDUk9MTF9EVVJBVElPTiA9IDAuNTtcbiAgc2hvd0Z1bGxDb21ib1VJKHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdmFyIGkgPSB0LmRhdGE7XG4gICAgICB0aGlzLl9zY29yZSA9IGkuc2NvcmU7XG4gICAgICB0aGlzLl9zZXR0bGVtZW50U2NvcmUgPSBpLnNldHRsZW1lbnRTY29yZTtcbiAgICAgIHRoaXMubm9kZVRpdGxlTm9ybWFsID0gZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZURlY1wiKTtcbiAgICAgIHRoaXMubGJTY29yZSA9IG51bGwgPT09IChvID0gZS5nZXRDaGlsZEJ5TmFtZShcImxibF9zY29yZVwiKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgdGhpcy5sYlRpdGxlRnVsbENvbWJvICYmIChOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEhhc1RyaWdnZXJlZEZ1bGxDb21ibygpID8gSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmxiVGl0bGVGdWxsQ29tYm8ubm9kZSwgXCJcIiwgXCJUSUxFX0Z1bGxDb21ib1wiKSA6IEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5sYlRpdGxlRnVsbENvbWJvLm5vZGUsIFwiXCIsIFwiTWFoam9uZ1RpbGVzX0VwaWNQbGF5XCIpKTtcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlFbnRlckFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMuaW5pdE5vZGVTdGF0ZXMoKTtcbiAgfVxuICBpbml0Q29tcG9uZW50cygpIHtcbiAgICB0aGlzLnNwaW5lU2NvcmUgJiYgdGhpcy5pbml0U3BpbmVTY29yZSgpO1xuICB9XG4gIGluaXRTcGluZVNjb3JlKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmFuaW1Qcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5zcGluZVNjb3JlLm5vZGUpO1xuICAgIHRoaXMuYW5pbVByb3h5LnJlc2V0KFwiXCIpO1xuICAgIHRoaXMuYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va190eHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQubGJUaXRsZUZ1bGxDb21iby5ub2RlO1xuICAgIH0pO1xuICB9XG4gIGluaXROb2RlU3RhdGVzKCkge1xuICAgIHRoaXMubGJUaXRsZUZ1bGxDb21ibyAmJiAodGhpcy5sYlRpdGxlRnVsbENvbWJvLm5vZGUub3BhY2l0eSA9IDApO1xuICAgIHRoaXMubGJTY29yZSAmJiAodGhpcy5sYlNjb3JlLm5vZGUub3BhY2l0eSA9IDI1NSk7XG4gIH1cbiAgcGxheUVudGVyQW5pbWF0aW9uKCkge1xuICAgIHRoaXMucGxheVNwaW5lKCk7XG4gICAgdGhpcy5wbGF5VGl0bGVBbmltYXRpb24oKTtcbiAgICB0aGlzLnBsYXlUaXRsZU5vcm1hbEFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheVNjb3JlQW5pbWF0aW9uKCk7XG4gIH1cbiAgcGxheVNwaW5lKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmFuaW1Qcm94eSAmJiB0aGlzLmFuaW1Qcm94eS5zZXRBbmltYXRpb24oXCJpblwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LmFuaW1Qcm94eSAmJiB0LmFuaW1Qcm94eS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5VGl0bGVBbmltYXRpb24oKSB7XG4gICAgdGhpcy5sYlRpdGxlRnVsbENvbWJvICYmIGNjLnR3ZWVuKHRoaXMubGJUaXRsZUZ1bGxDb21iby5ub2RlKS5kZWxheSgxLjczKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheVRpdGxlTm9ybWFsQW5pbWF0aW9uKCkge1xuICAgIHRoaXMubm9kZVRpdGxlTm9ybWFsICYmIGNjLnR3ZWVuKHRoaXMubm9kZVRpdGxlTm9ybWFsKS5kZWxheSgxLjczKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHBsYXlTY29yZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMubGJTY29yZSAmJiB0aGlzLl9zZXR0bGVtZW50U2NvcmUgPiB0aGlzLl9zY29yZSkge1xuICAgICAgdGhpcy5sYlNjb3JlLnN0cmluZyA9IHRoaXMuX3Njb3JlLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdC5fc2NvcmUsXG4gICAgICAgICAgaSA9IHQuX3NldHRsZW1lbnRTY29yZSxcbiAgICAgICAgICByID0gV2luRnVsbENvbWJvVmlldy5TQ09SRV9TQ1JPTExfRFVSQVRJT04sXG4gICAgICAgICAgbiA9IDAsXG4gICAgICAgICAgbCA9IGZ1bmN0aW9uIGwobykge1xuICAgICAgICAgICAgbiArPSBvO1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLm1pbihuIC8gciwgMSksXG4gICAgICAgICAgICAgIHMgPSBjYy5lYXNpbmcuc2luZU91dChhKSxcbiAgICAgICAgICAgICAgYyA9IE1hdGguZmxvb3IoZSArIChpIC0gZSkgKiBzKTtcbiAgICAgICAgICAgIHQubGJTY29yZS5zdHJpbmcgPSBjLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoYSA+PSAxKSB7XG4gICAgICAgICAgICAgIHQudW5zY2hlZHVsZShsKTtcbiAgICAgICAgICAgICAgdC5sYlNjb3JlLnN0cmluZyA9IGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB0LnNjaGVkdWxlKGwsIDApO1xuICAgICAgfSwgMi42Nyk7XG4gICAgfVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICB0aGlzLmxiVGl0bGVGdWxsQ29tYm8gJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubGJUaXRsZUZ1bGxDb21ibyk7XG4gICAgdGhpcy5sYlNjb3JlICYmIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmxiU2NvcmUpO1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==