
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelDaysPush/Scripts/TravelDaysPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '058c0x+0PpLxbuGeVX3Cg+n', 'TravelDaysPushTrait');
// subpackages/l_travelDaysPush/Scripts/TravelDaysPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var c = {
    remainDaysThreshold: 4,
    pushHour: 14,
    opewaynum: "mblxdays1",
    taskType: "mblxdays01"
};
var TravelDaysPushTrait = /** @class */ (function (_super) {
    __extends(TravelDaysPushTrait, _super);
    function TravelDaysPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = Object.assign({}, c);
        _this._lastSession = -1;
        return _this;
    }
    TravelDaysPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.remainDaysThreshold && (this._config.remainDaysThreshold = this._traitData.remainDaysThreshold);
        }
    };
    TravelDaysPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    TravelDaysPushTrait.prototype.getTravelGameModel = function () {
        var t = mj.getClassByName("TravelGameModel");
        return null == t ? void 0 : t.getInstance();
    };
    TravelDaysPushTrait.prototype.isTravelActive = function () {
        var t, e = this.getTravelGameModel();
        return e && (null === (t = e.isSessionActive) || void 0 === t ? void 0 : t.call(e)) || false;
    };
    TravelDaysPushTrait.prototype.getCurrentSession = function () {
        var t, e = this.getTravelGameModel();
        return e && (null === (t = e.getCurSession) || void 0 === t ? void 0 : t.call(e)) || -1;
    };
    TravelDaysPushTrait.prototype.getRemainDays = function () {
        var t, e = this.getTravelGameModel();
        if (!e)
            return -1;
        var r = null === (t = e.getRemainTime) || void 0 === t ? void 0 : t.call(e);
        return void 0 === r || r < 0 ? -1 : Math.ceil(r / 86400);
    };
    TravelDaysPushTrait.prototype.checkNewSession = function () {
        var t = this.getCurrentSession();
        if (t !== this._lastSession) {
            this._lastSession = t;
            return true;
        }
        return false;
    };
    TravelDaysPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            if (!this.isTravelActive()) {
                e();
                return;
            }
            JumpManager_1.default.getInstance().jumpToTravelMap();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    TravelDaysPushTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    TravelDaysPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.checkNewSession())
            this.removePush();
        else if (this.isTravelActive()) {
            var t = this.getRemainDays();
            if (!(t < 0)) {
                t <= this.getConfig().remainDaysThreshold && this.sendPush();
            }
        }
    };
    TravelDaysPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        });
    };
    TravelDaysPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    TravelDaysPushTrait.traitKey = "TravelDaysPush";
    TravelDaysPushTrait = __decorate([
        mj.trait,
        mj.class("TravelDaysPushTrait")
    ], TravelDaysPushTrait);
    return TravelDaysPushTrait;
}(Trait_1.default));
exports.default = TravelDaysPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbERheXNQdXNoL1NjcmlwdHMvVHJhdmVsRGF5c1B1c2hUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELCtFQUEwRTtBQUMxRSxzRUFBaUU7QUFDakUsSUFBSSxDQUFDLEdBQUc7SUFDTixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLFdBQVc7SUFDdEIsUUFBUSxFQUFFLFlBQVk7Q0FDdkIsQ0FBQztBQUdGO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBbUZDO1FBbEZDLGFBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQWlGcEIsQ0FBQztJQS9FQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xGLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEcsS0FBSyxDQUFD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QW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUEvRU0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUhoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBbUZ2QztJQUFELDBCQUFDO0NBbkZELEFBbUZDLENBbkZnRCxlQUFLLEdBbUZyRDtrQkFuRm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgUHVzaE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3B1c2gvUHVzaE1hbmFnZXInO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbnZhciBjID0ge1xuICByZW1haW5EYXlzVGhyZXNob2xkOiA0LFxuICBwdXNoSG91cjogMTQsXG4gIG9wZXdheW51bTogXCJtYmx4ZGF5czFcIixcbiAgdGFza1R5cGU6IFwibWJseGRheXMwMVwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxEYXlzUHVzaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxEYXlzUHVzaFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgYyk7XG4gIF9sYXN0U2Vzc2lvbiA9IC0xO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbERheXNQdXNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fdHJhaXREYXRhKSB7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5UaW1lICYmICh0aGlzLl9jb25maWcucHVzaEhvdXIgPSB0aGlzLl90cmFpdERhdGEuVGltZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSAmJiAodGhpcy5fY29uZmlnLm9wZXdheW51bSA9IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUgJiYgKHRoaXMuX2NvbmZpZy50YXNrVHlwZSA9IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEucmVtYWluRGF5c1RocmVzaG9sZCAmJiAodGhpcy5fY29uZmlnLnJlbWFpbkRheXNUaHJlc2hvbGQgPSB0aGlzLl90cmFpdERhdGEucmVtYWluRGF5c1RocmVzaG9sZCk7XG4gICAgfVxuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGdldFRyYXZlbEdhbWVNb2RlbCgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVHJhdmVsR2FtZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gIH1cbiAgaXNUcmF2ZWxBY3RpdmUoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcy5nZXRUcmF2ZWxHYW1lTW9kZWwoKTtcbiAgICByZXR1cm4gZSAmJiAobnVsbCA9PT0gKHQgPSBlLmlzU2Vzc2lvbkFjdGl2ZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGUpKSB8fCBmYWxzZTtcbiAgfVxuICBnZXRDdXJyZW50U2Vzc2lvbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzLmdldFRyYXZlbEdhbWVNb2RlbCgpO1xuICAgIHJldHVybiBlICYmIChudWxsID09PSAodCA9IGUuZ2V0Q3VyU2Vzc2lvbikgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGUpKSB8fCAtMTtcbiAgfVxuICBnZXRSZW1haW5EYXlzKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZ2V0VHJhdmVsR2FtZU1vZGVsKCk7XG4gICAgaWYgKCFlKSByZXR1cm4gLTE7XG4gICAgdmFyIHIgPSBudWxsID09PSAodCA9IGUuZ2V0UmVtYWluVGltZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGUpO1xuICAgIHJldHVybiB2b2lkIDAgPT09IHIgfHwgciA8IDAgPyAtMSA6IE1hdGguY2VpbChyIC8gODY0MDApO1xuICB9XG4gIGNoZWNrTmV3U2Vzc2lvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q3VycmVudFNlc3Npb24oKTtcbiAgICBpZiAodCAhPT0gdGhpcy5fbGFzdFNlc3Npb24pIHtcbiAgICAgIHRoaXMuX2xhc3RTZXNzaW9uID0gdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKHQsIGUpIHtcbiAgICB2YXIgciA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGlmIChyICYmIHIub3Bld2F5bnVtID09PSB0aGlzLl9jb25maWcub3Bld2F5bnVtKSB7XG4gICAgICBpZiAoIXRoaXMuaXNUcmF2ZWxBY3RpdmUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvVHJhdmVsTWFwKCk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB0aGlzLmNoZWNrQW5kVHJpZ2dlclB1c2goKTtcbiAgICBlKCk7XG4gIH1cbiAgY2hlY2tBbmRUcmlnZ2VyUHVzaCgpIHtcbiAgICBpZiAodGhpcy5jaGVja05ld1Nlc3Npb24oKSkgdGhpcy5yZW1vdmVQdXNoKCk7ZWxzZSBpZiAodGhpcy5pc1RyYXZlbEFjdGl2ZSgpKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0UmVtYWluRGF5cygpO1xuICAgICAgaWYgKCEodCA8IDApKSB7XG4gICAgICAgIHQgPD0gdGhpcy5nZXRDb25maWcoKS5yZW1haW5EYXlzVGhyZXNob2xkICYmIHRoaXMuc2VuZFB1c2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2VuZFB1c2goKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldENvbmZpZygpLFxuICAgICAgZSA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFRpbWVzdGFtcCh0LnB1c2hIb3VyKTtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaCh7XG4gICAgICBvcGV3YXludW06IHQub3Bld2F5bnVtLFxuICAgICAgdGFza1R5cGU6IHQudGFza1R5cGUsXG4gICAgICBzZW5kVGltZTogZVxuICAgIH0pO1xuICB9XG4gIHJlbW92ZVB1c2goKSB7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2hSZW1vdmVkKHRoaXMuZ2V0Q29uZmlnKCkub3Bld2F5bnVtKTtcbiAgfVxufSJdfQ==