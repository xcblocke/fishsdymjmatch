
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankRobot2/Scripts/RankRecordLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8c36certxDC7DUDAmr9jfn', 'RankRecordLevelTrait');
// subpackages/l_rankRobot2/Scripts/RankRecordLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankRecordLevelTrait = /** @class */ (function (_super) {
    __extends(RankRecordLevelTrait, _super);
    function RankRecordLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._retentionDays = 7;
        return _this;
    }
    RankRecordLevelTrait_1 = RankRecordLevelTrait;
    RankRecordLevelTrait.prototype.onLoad = function () {
        var a;
        _super.prototype.onLoad.call(this);
        try {
            this._retentionDays = (null === (a = this._traitData) || void 0 === a ? void 0 : a.retentionDays) || 7;
            this.cleanupOldData(this._retentionDays);
        }
        catch (t) {
            console.error("[" + RankRecordLevelTrait_1.traitKey + "] 加载失败: " + ((null == t ? void 0 : t.message) || t));
        }
    };
    RankRecordLevelTrait.prototype.getDailyPassCounts = function () {
        this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
        return this.localData.dailyPassCounts || [];
    };
    RankRecordLevelTrait.prototype.getLastUpdateZeroTimeMS = function () {
        this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
        return this.localData.lastUpdateZeroTimeMS || 0;
    };
    RankRecordLevelTrait.prototype.onGameMod_modifyWin = function (t, a) {
        try {
            this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
            this.recordPassToday();
        }
        catch (t) {
            console.error("[" + RankRecordLevelTrait_1.traitKey + "] 记录通关失败: " + ((null == t ? void 0 : t.message) || t));
        }
        finally {
            a();
        }
    };
    RankRecordLevelTrait.prototype.migrateFromOldTrait = function () {
        var t, a;
        if (!this.localData.hasMigratedFromOldTrait)
            try {
                var e = mj.getClassByName("RankDynScoreTrait");
                if (e) {
                    var r = e.getInstance();
                    if ((null === (a = null === (t = null == r ? void 0 : r.localData) || void 0 === t ? void 0 : t.dailyPassCounts) || void 0 === a ? void 0 : a.length) > 0) {
                        this.localData.dailyPassCounts = __spreadArrays(r.localData.dailyPassCounts);
                        this.localData.lastUpdateZeroTimeMS = r.localData.lastUpdateZeroTimeMS || 0;
                    }
                }
                this.localData.hasMigratedFromOldTrait = true;
            }
            catch (t) {
                this.localData.hasMigratedFromOldTrait = true;
            }
    };
    RankRecordLevelTrait.prototype.recordPassToday = function () {
        var t = new Date().setHours(0, 0, 0, 0), a = this.localData.dailyPassCounts || [];
        if (0 === a.length || !this.localData.lastUpdateZeroTimeMS || this.localData.lastUpdateZeroTimeMS !== t) {
            a.push(1);
        }
        else {
            a[a.length - 1]++;
        }
        this.localData.lastUpdateZeroTimeMS = t;
        this.localData.dailyPassCounts = a;
    };
    RankRecordLevelTrait.prototype.cleanupOldData = function (t) {
        var a;
        if (this.localData.hasMigratedFromOldTrait) {
            var e = (null === (a = this.localData.dailyPassCounts) || void 0 === a ? void 0 : a.length) || 0;
            if (!(e <= t)) {
                var r = e - t;
                this.localData.dailyPassCounts.splice(0, r);
                this.localData.dailyPassCounts = this.localData.dailyPassCounts;
            }
        }
    };
    var RankRecordLevelTrait_1;
    RankRecordLevelTrait.traitKey = "RankRecordLevel";
    RankRecordLevelTrait = RankRecordLevelTrait_1 = __decorate([
        mj.trait,
        mj.class("RankRecordLevelTrait")
    ], RankRecordLevelTrait);
    return RankRecordLevelTrait;
}(Trait_1.default));
exports.default = RankRecordLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtSb2JvdDIvU2NyaXB0cy9SYW5rUmVjb3JkTGV2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBcUVDO1FBcEVDLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQW9FckIsQ0FBQzs2QkFyRW9CLG9CQUFvQjtJQUd2QyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUk7WUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxzQkFBb0IsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0c7SUFDSCxDQUFDO0lBQ0QsaURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUs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QUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw2Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQzthQUNqRTtTQUNGO0lBQ0gsQ0FBQzs7SUFsRU0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUZqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBcUV4QztJQUFELDJCQUFDO0NBckVELEFBcUVDLENBckVpRCxlQUFLLEdBcUV0RDtrQkFyRW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmtSZWNvcmRMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rUmVjb3JkTGV2ZWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3JldGVudGlvbkRheXMgPSA3O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtSZWNvcmRMZXZlbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3JldGVudGlvbkRheXMgPSAobnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEucmV0ZW50aW9uRGF5cykgfHwgNztcbiAgICAgIHRoaXMuY2xlYW51cE9sZERhdGEodGhpcy5fcmV0ZW50aW9uRGF5cyk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFJhbmtSZWNvcmRMZXZlbFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKoOi9veWksei0pTogXCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgdCkpO1xuICAgIH1cbiAgfVxuICBnZXREYWlseVBhc3NDb3VudHMoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzTWlncmF0ZWRGcm9tT2xkVHJhaXQgfHwgdGhpcy5taWdyYXRlRnJvbU9sZFRyYWl0KCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cyB8fCBbXTtcbiAgfVxuICBnZXRMYXN0VXBkYXRlWmVyb1RpbWVNUygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNNaWdyYXRlZEZyb21PbGRUcmFpdCB8fCB0aGlzLm1pZ3JhdGVGcm9tT2xkVHJhaXQoKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVplcm9UaW1lTVMgfHwgMDtcbiAgfVxuICBvbkdhbWVNb2RfbW9kaWZ5V2luKHQsIGEpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzTWlncmF0ZWRGcm9tT2xkVHJhaXQgfHwgdGhpcy5taWdyYXRlRnJvbU9sZFRyYWl0KCk7XG4gICAgICB0aGlzLnJlY29yZFBhc3NUb2RheSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rUmVjb3JkTGV2ZWxUcmFpdC50cmFpdEtleSArIFwiXSDorrDlvZXpgJrlhbPlpLHotKU6IFwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IHQpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYSgpO1xuICAgIH1cbiAgfVxuICBtaWdyYXRlRnJvbU9sZFRyYWl0KCkge1xuICAgIHZhciB0LCBhO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEuaGFzTWlncmF0ZWRGcm9tT2xkVHJhaXQpIHRyeSB7XG4gICAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua0R5blNjb3JlVHJhaXRcIik7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgciA9IGUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKChudWxsID09PSAoYSA9IG51bGwgPT09ICh0ID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5sb2NhbERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGFpbHlQYXNzQ291bnRzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlQYXNzQ291bnRzID0gWy4uLnIubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50c107XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVplcm9UaW1lTVMgPSByLmxvY2FsRGF0YS5sYXN0VXBkYXRlWmVyb1RpbWVNUyB8fCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsRGF0YS5oYXNNaWdyYXRlZEZyb21PbGRUcmFpdCA9IHRydWU7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzTWlncmF0ZWRGcm9tT2xkVHJhaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZWNvcmRQYXNzVG9kYXkoKSB7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cyB8fCBbXTtcbiAgICBpZiAoMCA9PT0gYS5sZW5ndGggfHwgIXRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVaZXJvVGltZU1TIHx8IHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVaZXJvVGltZU1TICE9PSB0KSB7XG4gICAgICBhLnB1c2goMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFbYS5sZW5ndGggLSAxXSsrO1xuICAgIH1cbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlWmVyb1RpbWVNUyA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEuZGFpbHlQYXNzQ291bnRzID0gYTtcbiAgfVxuICBjbGVhbnVwT2xkRGF0YSh0KSB7XG4gICAgdmFyIGE7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmhhc01pZ3JhdGVkRnJvbU9sZFRyYWl0KSB7XG4gICAgICB2YXIgZSA9IChudWxsID09PSAoYSA9IHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5sZW5ndGgpIHx8IDA7XG4gICAgICBpZiAoIShlIDw9IHQpKSB7XG4gICAgICAgIHZhciByID0gZSAtIHQ7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cy5zcGxpY2UoMCwgcik7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cyA9IHRoaXMubG9jYWxEYXRhLmRhaWx5UGFzc0NvdW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=