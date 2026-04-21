
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyChallengeMedalPush/Scripts/DailyChallengeMedalPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2139cXgtqtJ/L6pSi0qUqdh', 'DailyChallengeMedalPushTrait');
// subpackages/l_dailyChallengeMedalPush/Scripts/DailyChallengeMedalPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var DailyChallengeMedalPushTrait = /** @class */ (function (_super) {
    __extends(DailyChallengeMedalPushTrait, _super);
    function DailyChallengeMedalPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            progressThreshold: 0.5,
            maxConsecutiveDays: 7,
            minTriggerIntervalDays: 3,
            pushHour: 21,
            opewaynum: "mbtzmedal1",
            taskType: "mbtzmedal01"
        };
        return _this;
    }
    DailyChallengeMedalPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.progressThreshold && (this._config.progressThreshold = this._traitData.progressThreshold);
            void 0 !== this._traitData.maxConsecutiveDays && (this._config.maxConsecutiveDays = this._traitData.maxConsecutiveDays);
            void 0 !== this._traitData.minTriggerIntervalDays && (this._config.minTriggerIntervalDays = this._traitData.minTriggerIntervalDays);
        }
    };
    DailyChallengeMedalPushTrait.prototype.getDailyModel = function () {
        var t = mj.getClassByName("DailyModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengeMedalPushTrait.prototype.getCurrentDailyId = function () {
        var t = this.getDailyModel();
        if (!t)
            return 0;
        var e = t.getToday();
        return (null == e ? void 0 : e.id) || 0;
    };
    DailyChallengeMedalPushTrait.prototype.getMonthTotalDays = function () {
        var t = new Date();
        return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    };
    DailyChallengeMedalPushTrait.prototype.getCompletedDays = function () {
        var t, e, r = this.getDailyModel();
        if (!r)
            return 0;
        var a = this.getCurrentDailyId();
        if (0 === a)
            return 0;
        var o = r.getMonthData(a);
        if (!o || 0 === o.length)
            return 0;
        var i = 0;
        try {
            for (var s = __values(o), l = s.next(); !l.done; l = s.next())
                3 === l.value.status && i++;
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (e = s.return) && e.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    DailyChallengeMedalPushTrait.prototype.hasMonthMedal = function () {
        var t = this.getDailyModel();
        if (!t)
            return false;
        var e = this.getCurrentDailyId();
        return 0 !== e && t.isMonthCompleted(e);
    };
    DailyChallengeMedalPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    DailyChallengeMedalPushTrait.prototype.onDCWinCtrl_viewShow = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    DailyChallengeMedalPushTrait.prototype.onBadgeMode_addBadge = function (t, e) {
        var r, a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (a) {
            var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, a);
            if (5 === (o ? o.Type : 0)) {
                this.hasMonthMedal() && this.cancelPush();
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DailyChallengeMedalPushTrait.prototype.getPushTimestamp = function () {
        var t = new Date(), e = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
        t.getTime() > e.getTime() && e.setDate(e.getDate() + 1);
        return e.getTime();
    };
    DailyChallengeMedalPushTrait.prototype.checkProgressThreshold = function (t, e) {
        return !(e <= 0) && t >= Math.floor(e * this._config.progressThreshold);
    };
    DailyChallengeMedalPushTrait.prototype.sendPush = function () {
        var t = this.getPushTimestamp();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: this._config.opewaynum,
            taskType: this._config.taskType,
            sendTime: t
        }, {
            keyNum: "progress_" + Math.floor(100 * this._config.progressThreshold)
        });
    };
    DailyChallengeMedalPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    DailyChallengeMedalPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.hasMonthMedal())
            this.cancelPush();
        else {
            var t = this.getCompletedDays(), e = this.getMonthTotalDays();
            this.checkProgressThreshold(t, e) && this.sendPush();
        }
    };
    DailyChallengeMedalPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            this.showPopView(function (t) {
                e({
                    isBreak: t
                });
            });
        }
        else {
            e();
        }
    };
    DailyChallengeMedalPushTrait.prototype.showPopView = function (t) {
        JumpManager_1.default.getInstance().jumpToDailyChallenge();
        null == t || t(true);
    };
    DailyChallengeMedalPushTrait.traitKey = "DailyChallengeMedalPush";
    __decorate([
        mj.traitEvent("DCMedalPush_showPopVw")
    ], DailyChallengeMedalPushTrait.prototype, "showPopView", null);
    DailyChallengeMedalPushTrait = __decorate([
        mj.trait,
        mj.class("DailyChallengeMedalPushTrait")
    ], DailyChallengeMedalPushTrait);
    return DailyChallengeMedalPushTrait;
}(Trait_1.default));
exports.default = DailyChallengeMedalPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5Q2hhbGxlbmdlTWVkYWxQdXNoL1NjcmlwdHMvRGFpbHlDaGFsbGVuZ2VNZWRhbFB1c2hUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLGdFQUEyRDtBQUMzRCw2RUFBNEU7QUFDNUUsc0VBQWlFO0FBQ2pFLCtFQUEwRTtBQUcxRTtJQUEwRCxnREFBSztJQUEvRDtRQUFBLHFFQW1JQztRQWxJQyxhQUFPLEdBQUc7WUFDUixpQkFBaUIsRUFBRSxHQUFHO1lBQ3RCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsc0JBQXNCLEVBQUUsQ0FBQztZQUN6QixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7O0lBMkhKLENBQUM7SUF6SEMsNkNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0YsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xHLEtBQUssQ0FBQyxLQUFLLElB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QUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUF6SE0scUNBQVEsR0FBRyx5QkFBeUIsQ0FBQztJQXNINUM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO21FQUl0QztJQWxJa0IsNEJBQTRCO1FBRmhELEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztPQUNwQiw0QkFBNEIsQ0FtSWhEO0lBQUQsbUNBQUM7Q0FuSUQsQUFtSUMsQ0FuSXlELGVBQUssR0FtSTlEO2tCQW5Jb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5Q2hhbGxlbmdlTWVkYWxQdXNoVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Q2hhbGxlbmdlTWVkYWxQdXNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7XG4gICAgcHJvZ3Jlc3NUaHJlc2hvbGQ6IDAuNSxcbiAgICBtYXhDb25zZWN1dGl2ZURheXM6IDcsXG4gICAgbWluVHJpZ2dlckludGVydmFsRGF5czogMyxcbiAgICBwdXNoSG91cjogMjEsXG4gICAgb3Bld2F5bnVtOiBcIm1idHptZWRhbDFcIixcbiAgICB0YXNrVHlwZTogXCJtYnR6bWVkYWwwMVwiXG4gIH07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGFpbHlDaGFsbGVuZ2VNZWRhbFB1c2hcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLl90cmFpdERhdGEpIHtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlRpbWUgJiYgKHRoaXMuX2NvbmZpZy5wdXNoSG91ciA9IHRoaXMuX3RyYWl0RGF0YS5UaW1lKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlBsYW5Db2RlICYmICh0aGlzLl9jb25maWcub3Bld2F5bnVtID0gdGhpcy5fdHJhaXREYXRhLlBsYW5Db2RlKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlN0cmF0ZWd5Q29kZSAmJiAodGhpcy5fY29uZmlnLnRhc2tUeXBlID0gdGhpcy5fdHJhaXREYXRhLlN0cmF0ZWd5Q29kZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5wcm9ncmVzc1RocmVzaG9sZCAmJiAodGhpcy5fY29uZmlnLnByb2dyZXNzVGhyZXNob2xkID0gdGhpcy5fdHJhaXREYXRhLnByb2dyZXNzVGhyZXNob2xkKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLm1heENvbnNlY3V0aXZlRGF5cyAmJiAodGhpcy5fY29uZmlnLm1heENvbnNlY3V0aXZlRGF5cyA9IHRoaXMuX3RyYWl0RGF0YS5tYXhDb25zZWN1dGl2ZURheXMpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEubWluVHJpZ2dlckludGVydmFsRGF5cyAmJiAodGhpcy5fY29uZmlnLm1pblRyaWdnZXJJbnRlcnZhbERheXMgPSB0aGlzLl90cmFpdERhdGEubWluVHJpZ2dlckludGVydmFsRGF5cyk7XG4gICAgfVxuICB9XG4gIGdldERhaWx5TW9kZWwoKSB7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIkRhaWx5TW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXRDdXJyZW50RGFpbHlJZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0RGFpbHlNb2RlbCgpO1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG4gICAgdmFyIGUgPSB0LmdldFRvZGF5KCk7XG4gICAgcmV0dXJuIChudWxsID09IGUgPyB2b2lkIDAgOiBlLmlkKSB8fCAwO1xuICB9XG4gIGdldE1vbnRoVG90YWxEYXlzKCkge1xuICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUodC5nZXRGdWxsWWVhcigpLCB0LmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG4gIH1cbiAgZ2V0Q29tcGxldGVkRGF5cygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByID0gdGhpcy5nZXREYWlseU1vZGVsKCk7XG4gICAgaWYgKCFyKSByZXR1cm4gMDtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudERhaWx5SWQoKTtcbiAgICBpZiAoMCA9PT0gYSkgcmV0dXJuIDA7XG4gICAgdmFyIG8gPSByLmdldE1vbnRoRGF0YShhKTtcbiAgICBpZiAoIW8gfHwgMCA9PT0gby5sZW5ndGgpIHJldHVybiAwO1xuICAgIHZhciBpID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKG8pLCBsID0gcy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBzLm5leHQoKSkgMyA9PT0gbC52YWx1ZS5zdGF0dXMgJiYgaSsrO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKGUgPSBzLnJldHVybikgJiYgZS5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIGhhc01vbnRoTWVkYWwoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldERhaWx5TW9kZWwoKTtcbiAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudERhaWx5SWQoKTtcbiAgICByZXR1cm4gMCAhPT0gZSAmJiB0LmlzTW9udGhDb21wbGV0ZWQoZSk7XG4gIH1cbiAgb25QdXNoTWdyX2luaXQodCwgZSkge1xuICAgIHRoaXMuY2hlY2tBbmRUcmlnZ2VyUHVzaCgpO1xuICAgIGUoKTtcbiAgfVxuICBvbkRDV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgdGhpcy5jaGVja0FuZFRyaWdnZXJQdXNoKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uQmFkZ2VNb2RlX2FkZEJhZGdlKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXTtcbiAgICBpZiAoYSkge1xuICAgICAgdmFyIG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuaXRlbV9jb25maWcsIGEpO1xuICAgICAgaWYgKDUgPT09IChvID8gby5UeXBlIDogMCkpIHtcbiAgICAgICAgdGhpcy5oYXNNb250aE1lZGFsKCkgJiYgdGhpcy5jYW5jZWxQdXNoKCk7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBnZXRQdXNoVGltZXN0YW1wKCkge1xuICAgIHZhciB0ID0gbmV3IERhdGUoKSxcbiAgICAgIGUgPSBuZXcgRGF0ZSh0LmdldEZ1bGxZZWFyKCksIHQuZ2V0TW9udGgoKSwgdC5nZXREYXRlKCksIHRoaXMuX2NvbmZpZy5wdXNoSG91ciwgMCwgMCwgMCk7XG4gICAgdC5nZXRUaW1lKCkgPiBlLmdldFRpbWUoKSAmJiBlLnNldERhdGUoZS5nZXREYXRlKCkgKyAxKTtcbiAgICByZXR1cm4gZS5nZXRUaW1lKCk7XG4gIH1cbiAgY2hlY2tQcm9ncmVzc1RocmVzaG9sZCh0LCBlKSB7XG4gICAgcmV0dXJuICEoZSA8PSAwKSAmJiB0ID49IE1hdGguZmxvb3IoZSAqIHRoaXMuX2NvbmZpZy5wcm9ncmVzc1RocmVzaG9sZCk7XG4gIH1cbiAgc2VuZFB1c2goKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFB1c2hUaW1lc3RhbXAoKTtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaCh7XG4gICAgICBvcGV3YXludW06IHRoaXMuX2NvbmZpZy5vcGV3YXludW0sXG4gICAgICB0YXNrVHlwZTogdGhpcy5fY29uZmlnLnRhc2tUeXBlLFxuICAgICAgc2VuZFRpbWU6IHRcbiAgICB9LCB7XG4gICAgICBrZXlOdW06IFwicHJvZ3Jlc3NfXCIgKyBNYXRoLmZsb29yKDEwMCAqIHRoaXMuX2NvbmZpZy5wcm9ncmVzc1RocmVzaG9sZClcbiAgICB9KTtcbiAgfVxuICBjYW5jZWxQdXNoKCkge1xuICAgIFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2VuZEdhbWVQdXNoUmVtb3ZlZCh0aGlzLl9jb25maWcub3Bld2F5bnVtKTtcbiAgfVxuICBjaGVja0FuZFRyaWdnZXJQdXNoKCkge1xuICAgIGlmICh0aGlzLmhhc01vbnRoTWVkYWwoKSkgdGhpcy5jYW5jZWxQdXNoKCk7ZWxzZSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0Q29tcGxldGVkRGF5cygpLFxuICAgICAgICBlID0gdGhpcy5nZXRNb250aFRvdGFsRGF5cygpO1xuICAgICAgdGhpcy5jaGVja1Byb2dyZXNzVGhyZXNob2xkKHQsIGUpICYmIHRoaXMuc2VuZFB1c2goKTtcbiAgICB9XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKHQsIGUpIHtcbiAgICB2YXIgciA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGlmIChyICYmIHIub3Bld2F5bnVtID09PSB0aGlzLl9jb25maWcub3Bld2F5bnVtKSB7XG4gICAgICB0aGlzLnNob3dQb3BWaWV3KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDTWVkYWxQdXNoX3Nob3dQb3BWd1wiKVxuICBzaG93UG9wVmlldyh0KSB7XG4gICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9EYWlseUNoYWxsZW5nZSgpO1xuICAgIG51bGwgPT0gdCB8fCB0KHRydWUpO1xuICB9XG59Il19