
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_normalNewRecord/Scripts/NormalNewRecordUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d5b70u4lpFjJzHJ8H7ZIxJ', 'NormalNewRecordUI');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var NormalNewRecordUI = /** @class */ (function (_super) {
    __extends(NormalNewRecordUI, _super);
    function NormalNewRecordUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbTitleNode = null;
        _this.spineNode = null;
        _this.lbScoreOriginal = null;
        _this.lbTitleOriginal = null;
        return _this;
    }
    NormalNewRecordUI_1 = NormalNewRecordUI;
    NormalNewRecordUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.tryPlayAction();
    };
    NormalNewRecordUI.prototype.tryPlayAction = function () {
        this.node.opacity = 255;
        this.playEnterAnimation();
    };
    NormalNewRecordUI.prototype.initComponents = function () {
        var e, t = this;
        this.lbTitleNode = this.node.getChildByName("lb_title");
        this.spineNode = this.node.getChildByName("spine_score");
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineNode);
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return t.lbTitleNode;
        });
        this.node.opacity = 0;
        this.lbTitleNode.opacity = 0;
        var r = this.node.parent;
        this.lbTitleOriginal = r.getChildByName("lbl_scoreDec");
        this.lbScoreOriginal = null === (e = r.getChildByName("lbl_score")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        I18NStrings_1.default.setText(this.lbTitleNode, "New Record!", "Mahjong_NewRecord");
    };
    NormalNewRecordUI.prototype.canScoreRoll = function () {
        return true;
    };
    NormalNewRecordUI.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    NormalNewRecordUI.prototype.playSpine = function () {
        var e = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            e.animProxy && e.animProxy.setAnimation("init", -1);
        });
    };
    NormalNewRecordUI.prototype.playTitleAnimation = function () {
        cc.isValid(this.lbTitleNode) && cc.tween(this.lbTitleNode).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    NormalNewRecordUI.prototype.playTitleNormalAnimation = function () {
        this.lbTitleOriginal && cc.tween(this.lbTitleOriginal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    NormalNewRecordUI.prototype.playScoreAnimation = function () {
        var e = this;
        if (this.lbScoreOriginal) {
            var t = NormalGameData_1.default.getInstance().getPreBestScore(), o = NormalGameData_1.default.getInstance().getMaxScore();
            if (this.canScoreRoll()) {
                this.lbScoreOriginal.string = t.toString();
                this.scheduleOnce(function () {
                    var i = t, n = o, a = NormalNewRecordUI_1.SCORE_SCROLL_DURATION, s = 0, c = function c(t) {
                        s += t;
                        var r = Math.min(s / a, 1), o = cc.easing.sineOut(r), l = Math.floor(i + (n - i) * o);
                        e.lbScoreOriginal.string = l.toString();
                        if (r >= 1) {
                            e.unschedule(c);
                            e.lbScoreOriginal.string = n.toString();
                        }
                    };
                    e.schedule(c, 0);
                }, 2.67);
            }
        }
    };
    NormalNewRecordUI.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        cc.isValid(this.lbTitleNode) && cc.Tween.stopAllByTarget(this.lbTitleNode);
        cc.isValid(this.lbScoreOriginal) && cc.Tween.stopAllByTarget(this.lbScoreOriginal);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var NormalNewRecordUI_1;
    NormalNewRecordUI.prefabUrl = "prefabs/ui/WinFullComboView";
    NormalNewRecordUI.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.traitEvent("NorNewRrdUI_canRoll")
    ], NormalNewRecordUI.prototype, "canScoreRoll", null);
    NormalNewRecordUI = NormalNewRecordUI_1 = __decorate([
        mj.class
    ], NormalNewRecordUI);
    return NormalNewRecordUI;
}(BaseUI_1.default));
exports.default = NormalNewRecordUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX25vcm1hbE5ld1JlY29yZC9TY3JpcHRzL05vcm1hbE5ld1JlY29yZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBaUY7QUFDakYsMkVBQXNFO0FBQ3RFLCtEQUEwRDtBQUMxRCx5RUFBb0U7QUFFcEU7SUFBK0MscUNBQU07SUFBckQ7UUFBQSxxRUFrR0M7UUFqR0MsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZSxHQUFHLElBQUksQ0FBQzs7SUE4RnpCLENBQUM7MEJBbEdvQixpQkFBaUI7SUFPcEMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QseUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsMENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMs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T0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25GLGlCQUFNLFNBQVMsSUFBSSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7O0lBNUZNLDJCQUFTLEdBQUcsNkJBQTZCLENBQUM7SUFDMUMsdUNBQXFCLEdBQUcsR0FBRyxDQUFDO0lBNEJuQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7eURBR3BDO0lBcENrQixpQkFBaUI7UUFEckMsRUFBRSxDQUFDLEtBQUs7T0FDWSxpQkFBaUIsQ0FrR3JDO0lBQUQsd0JBQUM7Q0FsR0QsQUFrR0MsQ0FsRzhDLGdCQUFNLEdBa0dwRDtrQkFsR29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsTmV3UmVjb3JkVUkgZXh0ZW5kcyBCYXNlVUkge1xuICBsYlRpdGxlTm9kZSA9IG51bGw7XG4gIHNwaW5lTm9kZSA9IG51bGw7XG4gIGxiU2NvcmVPcmlnaW5hbCA9IG51bGw7XG4gIGxiVGl0bGVPcmlnaW5hbCA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvV2luRnVsbENvbWJvVmlld1wiO1xuICBzdGF0aWMgU0NPUkVfU0NST0xMX0RVUkFUSU9OID0gMC41O1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMudHJ5UGxheUFjdGlvbigpO1xuICB9XG4gIHRyeVBsYXlBY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5wbGF5RW50ZXJBbmltYXRpb24oKTtcbiAgfVxuICBpbml0Q29tcG9uZW50cygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzO1xuICAgIHRoaXMubGJUaXRsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl90aXRsZVwiKTtcbiAgICB0aGlzLnNwaW5lTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX3Njb3JlXCIpO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLnNwaW5lTm9kZSk7XG4gICAgdGhpcy5hbmltUHJveHkubWFya1JlYWR5KFwiXCIpO1xuICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX3R4dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5sYlRpdGxlTm9kZTtcbiAgICB9KTtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5sYlRpdGxlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICB2YXIgciA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgdGhpcy5sYlRpdGxlT3JpZ2luYWwgPSByLmdldENoaWxkQnlOYW1lKFwibGJsX3Njb3JlRGVjXCIpO1xuICAgIHRoaXMubGJTY29yZU9yaWdpbmFsID0gbnVsbCA9PT0gKGUgPSByLmdldENoaWxkQnlOYW1lKFwibGJsX3Njb3JlXCIpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmxiVGl0bGVOb2RlLCBcIk5ldyBSZWNvcmQhXCIsIFwiTWFoam9uZ19OZXdSZWNvcmRcIik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJOb3JOZXdScmRVSV9jYW5Sb2xsXCIpXG4gIGNhblNjb3JlUm9sbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBwbGF5RW50ZXJBbmltYXRpb24oKSB7XG4gICAgdGhpcy5wbGF5U3BpbmUoKTtcbiAgICB0aGlzLnBsYXlUaXRsZUFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheVRpdGxlTm9ybWFsQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5wbGF5U2NvcmVBbmltYXRpb24oKTtcbiAgfVxuICBwbGF5U3BpbmUoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYW5pbVByb3h5ICYmIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuYW5pbVByb3h5ICYmIGUuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlUaXRsZUFuaW1hdGlvbigpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMubGJUaXRsZU5vZGUpICYmIGNjLnR3ZWVuKHRoaXMubGJUaXRsZU5vZGUpLmRlbGF5KDEuNzMpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5VGl0bGVOb3JtYWxBbmltYXRpb24oKSB7XG4gICAgdGhpcy5sYlRpdGxlT3JpZ2luYWwgJiYgY2MudHdlZW4odGhpcy5sYlRpdGxlT3JpZ2luYWwpLmRlbGF5KDEuNzMpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheVNjb3JlQW5pbWF0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5sYlNjb3JlT3JpZ2luYWwpIHtcbiAgICAgIHZhciB0ID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRQcmVCZXN0U2NvcmUoKSxcbiAgICAgICAgbyA9IE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TWF4U2NvcmUoKTtcbiAgICAgIGlmICh0aGlzLmNhblNjb3JlUm9sbCgpKSB7XG4gICAgICAgIHRoaXMubGJTY29yZU9yaWdpbmFsLnN0cmluZyA9IHQudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpID0gdCxcbiAgICAgICAgICAgIG4gPSBvLFxuICAgICAgICAgICAgYSA9IE5vcm1hbE5ld1JlY29yZFVJLlNDT1JFX1NDUk9MTF9EVVJBVElPTixcbiAgICAgICAgICAgIHMgPSAwLFxuICAgICAgICAgICAgYyA9IGZ1bmN0aW9uIGModCkge1xuICAgICAgICAgICAgICBzICs9IHQ7XG4gICAgICAgICAgICAgIHZhciByID0gTWF0aC5taW4ocyAvIGEsIDEpLFxuICAgICAgICAgICAgICAgIG8gPSBjYy5lYXNpbmcuc2luZU91dChyKSxcbiAgICAgICAgICAgICAgICBsID0gTWF0aC5mbG9vcihpICsgKG4gLSBpKSAqIG8pO1xuICAgICAgICAgICAgICBlLmxiU2NvcmVPcmlnaW5hbC5zdHJpbmcgPSBsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGlmIChyID49IDEpIHtcbiAgICAgICAgICAgICAgICBlLnVuc2NoZWR1bGUoYyk7XG4gICAgICAgICAgICAgICAgZS5sYlNjb3JlT3JpZ2luYWwuc3RyaW5nID0gbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGUuc2NoZWR1bGUoYywgMCk7XG4gICAgICAgIH0sIDIuNjcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmxiVGl0bGVOb2RlKSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYlRpdGxlTm9kZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmxiU2NvcmVPcmlnaW5hbCkgJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubGJTY29yZU9yaWdpbmFsKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=