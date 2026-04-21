
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelActiveView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b2bb625FOs4YKuUHXDD0o', 'TravelActiveView');
// Scripts/view/TravelActiveView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var UIView_1 = require("../framework/ui/UIView");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var TravelConfig_1 = require("../config/TravelConfig");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var TravelActiveView = /** @class */ (function (_super) {
    __extends(TravelActiveView, _super);
    function TravelActiveView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.titleLabel = null;
        _this.descLabel = null;
        _this.timerLabel = null;
        _this.playBtn = null;
        _this.playBtnLabel = null;
        _this.journeyIcon = null;
        _this.config = null;
        _this.isNewSession = false;
        return _this;
    }
    TravelActiveView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
    };
    TravelActiveView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
        return _e;
    };
    TravelActiveView.prototype.onTravelGameSessionEnd = function () {
        var e;
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.viewDidLoad = function (e) {
        this.config = e.config;
        this.isNewSession = e.isNewSession;
        var t = __read(this.getOpenImg(this.config.openImg), 2), o = t[0], n = t[1];
        I18NStrings_1.default.setText(this.titleLabel.node, "Adventure", this.config.name);
        I18NStrings_1.default.setText(this.descLabel.node, this.config.openDesc, this.config.openDesc);
        BaseSprite_1.default.refreshWithNode(this.journeyIcon.node, n, false, false, o);
        this.updateTime();
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogDisplayed);
    };
    TravelActiveView.prototype.getOpenImg = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journeyMap/" + e];
    };
    TravelActiveView.prototype.viewDidShow = function () { };
    TravelActiveView.prototype.updateTime = function () {
        var e = this, t = TravelGameModel_1.default.getInstance().getRemainTime();
        this.isNewSession && (t = this.config.duration);
        var o = __read(GameUtils_1.default.getRemainTimeParts(t), 4), n = o[0], i = o[1], r = (o[2], o[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel.node, r(n) + "d" + r(i) + "h", "Common_CountDown_Hour", [n, i]);
        this.isNewSession || this.scheduleOnce(function () {
            e.updateTime();
        }, 5);
    };
    TravelActiveView.prototype.onCloseBtnClick = function () {
        var e;
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogClosed);
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.onPlayBtnClick = function () {
        var e;
        if (TravelGameModel_1.default.getInstance().isSessionActive() || this.isNewSession) {
            this.isNewSession && this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_START);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelGameStart);
            this.gotoTravelMap();
        }
        else
            null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.gotoTravelMap = function () {
        var e = this;
        ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {}, function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        });
    };
    TravelActiveView.prefabUrl = "prefabs/journey/JourneyActiveDialog";
    __decorate([
        mj.node("Content/Top/CloseBtn")
    ], TravelActiveView.prototype, "closeBtn", void 0);
    __decorate([
        mj.component("Content/Top/Label", cc.Label)
    ], TravelActiveView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("Content/Desc", cc.Label)
    ], TravelActiveView.prototype, "descLabel", void 0);
    __decorate([
        mj.component("Content/Timer/Label", cc.Label)
    ], TravelActiveView.prototype, "timerLabel", void 0);
    __decorate([
        mj.node("Content/PlayBtn")
    ], TravelActiveView.prototype, "playBtn", void 0);
    __decorate([
        mj.component("Content/PlayBtn/Bg/Label", cc.Label)
    ], TravelActiveView.prototype, "playBtnLabel", void 0);
    __decorate([
        mj.component("Content/Icon", cc.Sprite)
    ], TravelActiveView.prototype, "journeyIcon", void 0);
    __decorate([
        mj.traitEvent("TravelVw_closeBtnClk")
    ], TravelActiveView.prototype, "onCloseBtnClick", null);
    __decorate([
        mj.traitEvent("TravelVw_playBtnClk")
    ], TravelActiveView.prototype, "onPlayBtnClick", null);
    __decorate([
        mj.traitEvent("TravelVw_gotoTravelMap")
    ], TravelActiveView.prototype, "gotoTravelMap", null);
    TravelActiveView = __decorate([
        mj.class
    ], TravelActiveView);
    return TravelActiveView;
}(UIView_1.default));
exports.default = TravelActiveView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsQWN0aXZlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDZEQUF3RDtBQUN4RCw0RUFBdUU7QUFDdkUsaURBQTRDO0FBQzVDLDZEQUF3RDtBQUN4RCxzREFBMkU7QUFDM0UsdURBQTRGO0FBQzVGLDRFQUF1RTtBQUV2RTtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQXVGQztRQXJGQyxjQUFRLEdBQTJCLElBQUksQ0FBQztRQUV4QyxnQkFBVSxHQUF3QixJQUFJLENBQUM7UUFFdkMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBMEIsSUFBSSxDQUFDO1FBRXpDLGFBQU8sR0FBc0IsSUFBSSxDQUFDO1FBRWxDLGtCQUFZLEdBQStCLElBQUksQ0FBQztRQUVoRCxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGtCQUFZLEdBQUcsS0FBSyxDQUFDOztJQXVFdkIsQ0FBQztJQXJFQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLHNDQUF1QixDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNy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WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVIb21lUGFnZUNsaWNrVHlwZSB9IGZyb20gJy4uL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX1NFU1NJT05fRU5ELCBUUkFWRUxfR0FNRV9TRVNTSU9OX1NUQVJUIH0gZnJvbSAnLi4vY29uZmlnL1RyYXZlbENvbmZpZyc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxBY3RpdmVWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLm5vZGUoXCJDb250ZW50L1RvcC9DbG9zZUJ0blwiKVxuICBjbG9zZUJ0bjogXCJDb250ZW50L1RvcC9DbG9zZUJ0blwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkNvbnRlbnQvVG9wL0xhYmVsXCIsIGNjLkxhYmVsKVxuICB0aXRsZUxhYmVsOiBcIkNvbnRlbnQvVG9wL0xhYmVsXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiQ29udGVudC9EZXNjXCIsIGNjLkxhYmVsKVxuICBkZXNjTGFiZWw6IFwiQ29udGVudC9EZXNjXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiQ29udGVudC9UaW1lci9MYWJlbFwiLCBjYy5MYWJlbClcbiAgdGltZXJMYWJlbDogXCJDb250ZW50L1RpbWVyL0xhYmVsXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkNvbnRlbnQvUGxheUJ0blwiKVxuICBwbGF5QnRuOiBcIkNvbnRlbnQvUGxheUJ0blwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkNvbnRlbnQvUGxheUJ0bi9CZy9MYWJlbFwiLCBjYy5MYWJlbClcbiAgcGxheUJ0bkxhYmVsOiBcIkNvbnRlbnQvUGxheUJ0bi9CZy9MYWJlbFwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkNvbnRlbnQvSWNvblwiLCBjYy5TcHJpdGUpXG4gIGpvdXJuZXlJY29uOiBcIkNvbnRlbnQvSWNvblwiID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgaXNOZXdTZXNzaW9uID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9Kb3VybmV5QWN0aXZlRGlhbG9nXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMucGxheUJ0biwgdGhpcy5vblBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lW1RSQVZFTF9HQU1FX1NFU1NJT05fRU5EXSA9IHRoaXMub25UcmF2ZWxHYW1lU2Vzc2lvbkVuZC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBvblRyYXZlbEdhbWVTZXNzaW9uRW5kKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgfVxuICB2aWV3RGlkTG9hZChlKSB7XG4gICAgdGhpcy5jb25maWcgPSBlLmNvbmZpZztcbiAgICB0aGlzLmlzTmV3U2Vzc2lvbiA9IGUuaXNOZXdTZXNzaW9uO1xuICAgIHZhciB0ID0gX19yZWFkKHRoaXMuZ2V0T3BlbkltZyh0aGlzLmNvbmZpZy5vcGVuSW1nKSwgMiksXG4gICAgICBvID0gdFswXSxcbiAgICAgIG4gPSB0WzFdO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aXRsZUxhYmVsLm5vZGUsIFwiQWR2ZW50dXJlXCIsIHRoaXMuY29uZmlnLm5hbWUpO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5kZXNjTGFiZWwubm9kZSwgdGhpcy5jb25maWcub3BlbkRlc2MsIHRoaXMuY29uZmlnLm9wZW5EZXNjKTtcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmpvdXJuZXlJY29uLm5vZGUsIG4sIGZhbHNlLCBmYWxzZSwgbyk7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLlRyYXZlbERpYWxvZ0Rpc3BsYXllZCk7XG4gIH1cbiAgZ2V0T3BlbkltZyhlKSB7XG4gICAgdmFyIHQgPSBlLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4gMiA9PT0gdC5sZW5ndGggPyBbdFswXSwgXCJ0ZXh0dXJlL1wiICsgdFsxXV0gOiBbXCJtYWluUmVzXCIsIFwidGV4dHVyZS9qb3VybmV5TWFwL1wiICsgZV07XG4gIH1cbiAgdmlld0RpZFNob3coKSB7fVxuICB1cGRhdGVUaW1lKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSZW1haW5UaW1lKCk7XG4gICAgdGhpcy5pc05ld1Nlc3Npb24gJiYgKHQgPSB0aGlzLmNvbmZpZy5kdXJhdGlvbik7XG4gICAgdmFyIG8gPSBfX3JlYWQoR2FtZVV0aWxzLmdldFJlbWFpblRpbWVQYXJ0cyh0KSwgNCksXG4gICAgICBuID0gb1swXSxcbiAgICAgIGkgPSBvWzFdLFxuICAgICAgciA9IChvWzJdLCBvWzNdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIH0pO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aW1lckxhYmVsLm5vZGUsIHIobikgKyBcImRcIiArIHIoaSkgKyBcImhcIiwgXCJDb21tb25fQ291bnREb3duX0hvdXJcIiwgW24sIGldKTtcbiAgICB0aGlzLmlzTmV3U2Vzc2lvbiB8fCB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLnVwZGF0ZVRpbWUoKTtcbiAgICB9LCA1KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYXZlbFZ3X2Nsb3NlQnRuQ2xrXCIpXG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICB2YXIgZTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuVHJhdmVsRGlhbG9nQ2xvc2VkKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNsb3NlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUcmF2ZWxWd19wbGF5QnRuQ2xrXCIpXG4gIG9uUGxheUJ0bkNsaWNrKCkge1xuICAgIHZhciBlO1xuICAgIGlmIChUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1Nlc3Npb25BY3RpdmUoKSB8fCB0aGlzLmlzTmV3U2Vzc2lvbikge1xuICAgICAgdGhpcy5pc05ld1Nlc3Npb24gJiYgdGhpcy5kaXNwYXRjaEV2ZW50KFRSQVZFTF9HQU1FX1NFU1NJT05fU1RBUlQpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLlRyYXZlbEdhbWVTdGFydCk7XG4gICAgICB0aGlzLmdvdG9UcmF2ZWxNYXAoKTtcbiAgICB9IGVsc2UgbnVsbCA9PT0gKGUgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jbG9zZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsVndfZ290b1RyYXZlbE1hcFwiKVxuICBnb3RvVHJhdmVsTWFwKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsTWFwQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IGUuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn0iXX0=