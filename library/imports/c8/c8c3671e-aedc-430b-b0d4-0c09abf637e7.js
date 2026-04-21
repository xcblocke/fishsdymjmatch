"use strict";
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