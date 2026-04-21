
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyChallengePush/Scripts/DailyChallengePushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d75fpaeTpFhpjq11KD4kEa', 'DailyChallengePushTrait');
// subpackages/l_dailyChallengePush/Scripts/DailyChallengePushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var DailyChallengePushTrait = /** @class */ (function (_super) {
    __extends(DailyChallengePushTrait, _super);
    function DailyChallengePushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pushHour = 21;
        _this._opewaynum = "mjdailytz1";
        _this._taskType = "mjdailytz01";
        _this._isDailyUnlocked = false;
        return _this;
    }
    DailyChallengePushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._taskType = this._traitData.StrategyCode);
        }
    };
    DailyChallengePushTrait.prototype.getDailyModel = function () {
        var t = mj.getClassByName("DailyModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengePushTrait.prototype.getDailyTrait = function () {
        var t = mj.getClassByName("DailyTrait");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengePushTrait.prototype.isDailyChallengeUnlocked = function () {
        var t, e;
        return null !== (e = null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.isOpen()) && void 0 !== e && e;
    };
    DailyChallengePushTrait.prototype.isTodayChallengeCompleted = function () {
        var t = this.getDailyModel();
        if (!t)
            return true;
        var e = t.getToday();
        return !((null == e ? void 0 : e.id) && (null == e ? void 0 : e.day)) || 3 === t.getDayStatus(e.id, e.day);
    };
    DailyChallengePushTrait.prototype.canSendPush = function () {
        if (!this.isDailyChallengeUnlocked())
            return false;
        this._isDailyUnlocked = true;
        return !(new Date().getHours() >= this._pushHour || this.isTodayChallengeCompleted());
    };
    DailyChallengePushTrait.prototype.onPushMgr_init = function (t, e) {
        this._isDailyUnlocked = this.isDailyChallengeUnlocked();
        this.tryTriggerPush();
        e();
    };
    DailyChallengePushTrait.prototype.onHallVw_updateUI = function (t, e) {
        this._isDailyUnlocked || this.tryTriggerPush();
        e();
    };
    DailyChallengePushTrait.prototype.onWinVw_showWinVw = function (t, e) {
        if (this._isDailyUnlocked)
            e();
        else {
            var i = this.getDailyTrait();
            if (null == i ? void 0 : i.isOpenDaily()) {
                this._isDailyUnlocked = true;
                this.tryTriggerPush();
            }
            e();
        }
    };
    DailyChallengePushTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this.isTodayChallengeCompleted() && PushManager_1.default.getInstance().sendGamePushRemoved(this._opewaynum);
        e();
    };
    DailyChallengePushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if ((null == i ? void 0 : i.opewaynum) !== this._opewaynum)
            e();
        else {
            JumpManager_1.default.getInstance().jumpToDailyChallenge();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    DailyChallengePushTrait.prototype.tryTriggerPush = function () {
        if (this.canSendPush()) {
            var t = PushManager_1.default.getInstance().getPushTimestamp(this._pushHour);
            PushManager_1.default.getInstance().sendGamePush({
                opewaynum: this._opewaynum,
                taskType: this._taskType,
                sendTime: t
            }, {
                keyNum: "today"
            });
        }
    };
    DailyChallengePushTrait.traitKey = "DailyChallengePush";
    DailyChallengePushTrait = __decorate([
        mj.trait,
        mj.class("DailyChallengePushTrait")
    ], DailyChallengePushTrait);
    return DailyChallengePushTrait;
}(Trait_1.default));
exports.default = DailyChallengePushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5Q2hhbGxlbmdlUHVzaC9TY3JpcHRzL0RhaWx5Q2hhbGxlbmdlUHVzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLCtFQUEwRTtBQUcxRTtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQWtGQztRQWpGQyxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsZUFBUyxHQUFHLGFBQWEsQ0FBQztRQUMxQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBOEUzQixDQUFDO0lBNUVDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7SUFDRCwrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxD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RjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQWtGM0M7SUFBRCw4QkFBQztDQWxGRCxBQWtGQyxDQWxGb0QsZUFBSyxHQWtGekQ7a0JBbEZvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5Q2hhbGxlbmdlUHVzaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUNoYWxsZW5nZVB1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3B1c2hIb3VyID0gMjE7XG4gIF9vcGV3YXludW0gPSBcIm1qZGFpbHl0ejFcIjtcbiAgX3Rhc2tUeXBlID0gXCJtamRhaWx5dHowMVwiO1xuICBfaXNEYWlseVVubG9ja2VkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGFpbHlDaGFsbGVuZ2VQdXNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fdHJhaXREYXRhKSB7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5UaW1lICYmICh0aGlzLl9wdXNoSG91ciA9IHRoaXMuX3RyYWl0RGF0YS5UaW1lKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlBsYW5Db2RlICYmICh0aGlzLl9vcGV3YXludW0gPSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlICYmICh0aGlzLl90YXNrVHlwZSA9IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUpO1xuICAgIH1cbiAgfVxuICBnZXREYWlseU1vZGVsKCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJEYWlseU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0RGFpbHlUcmFpdCgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiRGFpbHlUcmFpdFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGlzRGFpbHlDaGFsbGVuZ2VVbmxvY2tlZCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuZ2V0RGFpbHlNb2RlbCgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzT3BlbigpKSAmJiB2b2lkIDAgIT09IGUgJiYgZTtcbiAgfVxuICBpc1RvZGF5Q2hhbGxlbmdlQ29tcGxldGVkKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXREYWlseU1vZGVsKCk7XG4gICAgaWYgKCF0KSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgZSA9IHQuZ2V0VG9kYXkoKTtcbiAgICByZXR1cm4gISgobnVsbCA9PSBlID8gdm9pZCAwIDogZS5pZCkgJiYgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZGF5KSkgfHwgMyA9PT0gdC5nZXREYXlTdGF0dXMoZS5pZCwgZS5kYXkpO1xuICB9XG4gIGNhblNlbmRQdXNoKCkge1xuICAgIGlmICghdGhpcy5pc0RhaWx5Q2hhbGxlbmdlVW5sb2NrZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuX2lzRGFpbHlVbmxvY2tlZCA9IHRydWU7XG4gICAgcmV0dXJuICEobmV3IERhdGUoKS5nZXRIb3VycygpID49IHRoaXMuX3B1c2hIb3VyIHx8IHRoaXMuaXNUb2RheUNoYWxsZW5nZUNvbXBsZXRlZCgpKTtcbiAgfVxuICBvblB1c2hNZ3JfaW5pdCh0LCBlKSB7XG4gICAgdGhpcy5faXNEYWlseVVubG9ja2VkID0gdGhpcy5pc0RhaWx5Q2hhbGxlbmdlVW5sb2NrZWQoKTtcbiAgICB0aGlzLnRyeVRyaWdnZXJQdXNoKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB0aGlzLl9pc0RhaWx5VW5sb2NrZWQgfHwgdGhpcy50cnlUcmlnZ2VyUHVzaCgpO1xuICAgIGUoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2lzRGFpbHlVbmxvY2tlZCkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldERhaWx5VHJhaXQoKTtcbiAgICAgIGlmIChudWxsID09IGkgPyB2b2lkIDAgOiBpLmlzT3BlbkRhaWx5KCkpIHtcbiAgICAgICAgdGhpcy5faXNEYWlseVVubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cnlUcmlnZ2VyUHVzaCgpO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkRDV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB0aGlzLmlzVG9kYXlDaGFsbGVuZ2VDb21wbGV0ZWQoKSAmJiBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaFJlbW92ZWQodGhpcy5fb3Bld2F5bnVtKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKHQsIGUpIHtcbiAgICB2YXIgaSA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGlmICgobnVsbCA9PSBpID8gdm9pZCAwIDogaS5vcGV3YXludW0pICE9PSB0aGlzLl9vcGV3YXludW0pIGUoKTtlbHNlIHtcbiAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvRGFpbHlDaGFsbGVuZ2UoKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB0cnlUcmlnZ2VyUHVzaCgpIHtcbiAgICBpZiAodGhpcy5jYW5TZW5kUHVzaCgpKSB7XG4gICAgICB2YXIgdCA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFRpbWVzdGFtcCh0aGlzLl9wdXNoSG91cik7XG4gICAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaCh7XG4gICAgICAgIG9wZXdheW51bTogdGhpcy5fb3Bld2F5bnVtLFxuICAgICAgICB0YXNrVHlwZTogdGhpcy5fdGFza1R5cGUsXG4gICAgICAgIHNlbmRUaW1lOiB0XG4gICAgICB9LCB7XG4gICAgICAgIGtleU51bTogXCJ0b2RheVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=