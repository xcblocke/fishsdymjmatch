
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_timeoutStopCombo/Scripts/TimeoutStopComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69f59NKL0NLv5AzcdftuYI+', 'TimeoutStopComboTrait');
// subpackages/l_timeoutStopCombo/Scripts/TimeoutStopComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TimeoutCheckerComponent_1 = require("./TimeoutCheckerComponent");
var TimeoutStopComboTrait = /** @class */ (function (_super) {
    __extends(TimeoutStopComboTrait, _super);
    function TimeoutStopComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClickTime = 0;
        _this._timeoutSeconds = 10;
        _this._timerNode = null;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._isInStop = false;
        _this._isInComplete = false;
        return _this;
    }
    TimeoutStopComboTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        (null === (e = this._traitData) || void 0 === e ? void 0 : e.timeout) && (this._timeoutSeconds = this._traitData.timeout);
    };
    TimeoutStopComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, i;
        this._gameType = null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
        this._isInComplete = false;
        this._isInStop = false;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            this.updateTime();
        }
        else {
            this.stopTimer();
        }
        e();
    };
    TimeoutStopComboTrait.prototype.onIptTchStart_exec = function (t, e) {
        this.updateTime();
        this._isInStop = false;
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        this.updateTime();
        this._isInStop = true;
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdVw_setContent = function (t, e) {
        this._isInStop = true;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onUISetDlg_close = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onShuffleBhv_onAnimEnd = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onFailVw_show = function (t, e) {
        this._isInStop = true;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdVw_closeClick = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdCtrl_onAdSuccess = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onComboChk_canBreakCb = function (t, e) {
        if (this._gameType != GameTypeEnums_1.MjGameType.Normal) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
    };
    TimeoutStopComboTrait.prototype.onIptStartAutoMrg_exec = function (t, e) {
        this._isInComplete = true;
        this.stopTimer();
        e();
    };
    TimeoutStopComboTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this._isInComplete = true;
        this.stopTimer();
        e();
    };
    TimeoutStopComboTrait.prototype.updateTime = function () {
        var t;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            var e = ControllerManager_1.default.getInstance().getControByName("MainGameController");
            e && (this._lastClickTime = (null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0);
            this.startTimer();
        }
    };
    TimeoutStopComboTrait.prototype.startTimer = function () {
        var t;
        if (!(this._isInComplete || this._timerNode && cc.isValid(this._timerNode))) {
            this._timerNode = new cc.Node("TimeoutChecker");
            this._timerNode.addComponent(TimeoutCheckerComponent_1.default).init(this.checkTimeout.bind(this), 1);
            var e = null === (t = ControllerManager_1.default.getInstance().getTopSceneController()) || void 0 === t ? void 0 : t.rootView;
            e && (this._timerNode.parent = e);
        }
    };
    TimeoutStopComboTrait.prototype.stopTimer = function () {
        if (this._timerNode && cc.isValid(this._timerNode)) {
            this._timerNode.destroy();
            this._timerNode = null;
        }
    };
    TimeoutStopComboTrait.prototype.checkTimeout = function () {
        var t;
        if (!this._isInStop) {
            var e = ControllerManager_1.default.getInstance().getControByName("MainGameController");
            if (e) {
                if (((null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0) - this._lastClickTime >= this._timeoutSeconds) {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TimeoutBreakCombo
                    });
                    this.stopTimer();
                }
            }
        }
    };
    TimeoutStopComboTrait.traitKey = "TimeoutStopCombo";
    TimeoutStopComboTrait = __decorate([
        mj.trait,
        mj.class("TimeoutStopComboTrait")
    ], TimeoutStopComboTrait);
    return TimeoutStopComboTrait;
}(Trait_1.default));
exports.default = TimeoutStopComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbWVvdXRTdG9wQ29tYm8vU2NyaXB0cy9UaW1lb3V0U3RvcENvbWJvVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1GQUFtRjtBQUNuRix3RkFBb0Y7QUFDcEYsb0ZBQW1GO0FBQ25GLDBGQUFxRjtBQUNyRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHFFQUFnRTtBQUdoRTtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQW1JQztRQWxJQyxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsMEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDOUIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUE2SHhCLENBQUM7SUEzSEMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVILENBQUM7SUFDRCxvREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FB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QUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ2xJLGlDQUFlLENBQUMsS0FBSyxDQUFDO3dCQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxpQkFBaUI7cUJBQzVDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUEzSE0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQVBsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBbUl6QztJQUFELDRCQUFDO0NBbklELEFBbUlDLENBbklrRCxlQUFLLEdBbUl2RDtrQkFuSW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRpbWVvdXRDaGVja2VyQ29tcG9uZW50IGZyb20gJy4vVGltZW91dENoZWNrZXJDb21wb25lbnQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaW1lb3V0U3RvcENvbWJvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVvdXRTdG9wQ29tYm9UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2xhc3RDbGlja1RpbWUgPSAwO1xuICBfdGltZW91dFNlY29uZHMgPSAxMDtcbiAgX3RpbWVyTm9kZSA9IG51bGw7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9ybWFsO1xuICBfaXNJblN0b3AgPSBmYWxzZTtcbiAgX2lzSW5Db21wbGV0ZSA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbWVvdXRTdG9wQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50aW1lb3V0KSAmJiAodGhpcy5fdGltZW91dFNlY29uZHMgPSB0aGlzLl90cmFpdERhdGEudGltZW91dCk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgZSkge1xuICAgIHZhciBvLCBpO1xuICAgIHRoaXMuX2dhbWVUeXBlID0gbnVsbCA9PT0gKGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLl9jb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVUeXBlO1xuICAgIHRoaXMuX2lzSW5Db21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSW5TdG9wID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2dhbWVUeXBlID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uSXB0VGNoU3RhcnRfZXhlYyh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgdGhpcy5faXNJblN0b3AgPSBmYWxzZTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5IaXRUaXBzKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5TaHVmZmxlKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5TZXR0aW5ncyh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgdGhpcy5faXNJblN0b3AgPSB0cnVlO1xuICAgIGUoKTtcbiAgfVxuICBvbldhdGNoQWRWd19zZXRDb250ZW50KHQsIGUpIHtcbiAgICB0aGlzLl9pc0luU3RvcCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXREbGdfY2xvc2UodCwgZSkge1xuICAgIHRoaXMuX2lzSW5TdG9wID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uU2h1ZmZsZUJodl9vbkFuaW1FbmQodCwgZSkge1xuICAgIHRoaXMuX2lzSW5TdG9wID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uRmFpbFZ3X3Nob3codCwgZSkge1xuICAgIHRoaXMuX2lzSW5TdG9wID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25XYXRjaEFkVndfY2xvc2VDbGljayh0LCBlKSB7XG4gICAgdGhpcy5faXNJblN0b3AgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25XYXRjaEFkQ3RybF9vbkFkU3VjY2Vzcyh0LCBlKSB7XG4gICAgdGhpcy5faXNJblN0b3AgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Db21ib0Noa19jYW5CcmVha0NiKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fZ2FtZVR5cGUgIT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uSXB0U3RhcnRBdXRvTXJnX2V4ZWModCwgZSkge1xuICAgIHRoaXMuX2lzSW5Db21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25CZWZvcmVXaW5CaHZfZG9PdGhMZ2ModCwgZSkge1xuICAgIHRoaXMuX2lzSW5Db21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICBlKCk7XG4gIH1cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5fZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHZhciBlID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICBlICYmICh0aGlzLl9sYXN0Q2xpY2tUaW1lID0gKG51bGwgPT09ICh0ID0gZS5nZXRHYW1lVGltZSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmN1cnJlbnRUaW1lKSB8fCAwKTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfVxuICBzdGFydFRpbWVyKCkge1xuICAgIHZhciB0O1xuICAgIGlmICghKHRoaXMuX2lzSW5Db21wbGV0ZSB8fCB0aGlzLl90aW1lck5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl90aW1lck5vZGUpKSkge1xuICAgICAgdGhpcy5fdGltZXJOb2RlID0gbmV3IGNjLk5vZGUoXCJUaW1lb3V0Q2hlY2tlclwiKTtcbiAgICAgIHRoaXMuX3RpbWVyTm9kZS5hZGRDb21wb25lbnQoVGltZW91dENoZWNrZXJDb21wb25lbnQpLmluaXQodGhpcy5jaGVja1RpbWVvdXQuYmluZCh0aGlzKSwgMSk7XG4gICAgICB2YXIgZSA9IG51bGwgPT09ICh0ID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRUb3BTY2VuZUNvbnRyb2xsZXIoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5yb290VmlldztcbiAgICAgIGUgJiYgKHRoaXMuX3RpbWVyTm9kZS5wYXJlbnQgPSBlKTtcbiAgICB9XG4gIH1cbiAgc3RvcFRpbWVyKCkge1xuICAgIGlmICh0aGlzLl90aW1lck5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl90aW1lck5vZGUpKSB7XG4gICAgICB0aGlzLl90aW1lck5vZGUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fdGltZXJOb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgY2hlY2tUaW1lb3V0KCkge1xuICAgIHZhciB0O1xuICAgIGlmICghdGhpcy5faXNJblN0b3ApIHtcbiAgICAgIHZhciBlID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBpZiAoKChudWxsID09PSAodCA9IGUuZ2V0R2FtZVRpbWUoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jdXJyZW50VGltZSkgfHwgMCkgLSB0aGlzLl9sYXN0Q2xpY2tUaW1lID49IHRoaXMuX3RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGltZW91dEJyZWFrQ29tYm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19