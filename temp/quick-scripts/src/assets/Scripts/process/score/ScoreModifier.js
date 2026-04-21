"use strict";
cc._RF.push(module, 'd5c2eBtablGqrN5dv/iQ2Eq', 'ScoreModifier');
// Scripts/process/score/ScoreModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var UserModel_1 = require("../../gamePlay/user/UserModel");
var ScoreModifier = /** @class */ (function (_super) {
    __extends(ScoreModifier, _super);
    function ScoreModifier(t) {
        return _super.call(this, t) || this;
    }
    ScoreModifier.prototype.getSettlementTimeRate = function () {
        return {
            minRatio: 0.5,
            maxRatio: 2
        };
    };
    ScoreModifier.prototype.getSettlementWRate = function () {
        return 1;
    };
    ScoreModifier.prototype.calSettlementScore = function (e, t) {
        if (e === void 0) { e = 0; }
        var o, n = this.context.getGameData(), i = n.getScore(), r = n.getCurLevelComboMaxLimit(), a = this.getSettlementTimeRate(), l = a.minRatio, s = a.maxRatio;
        if (t && t > 0) {
            var c = t / Math.max(e, 0.1);
            o = 45 * r * Math.max(l, Math.min(s, c));
        }
        else {
            c = 1.25 * r / Math.max(e, 0.1);
            o = 45 * r * Math.max(l, Math.min(s, c));
        }
        var u = this.getSettlementWRate(), p = (o = Math.floor(o * u)) + i, f = i, d = 2 * i, h = Math.max(f, Math.min(d, p)), y = Math.floor(h);
        n.setSettlementScore(y);
        return y;
    };
    ScoreModifier.prototype.getPerfectMaxScore = function () {
        var e = this.getBaseScore(), t = this.getBaseComboScore(), o = this.getComboMaxScore(), n = this.context.getGameData().getCurLevelComboMaxLimit(), i = 0, r = 0, a = 0;
        if (o > 0) {
            var l = Math.floor(o / t) + 1, s = Math.max(0, n - l + 1), c = n - s;
            c > 0 && (i = c * e + t * (c - 1) * c / 2);
            r = s * (e + o);
            a = Math.floor(i + r);
        }
        else {
            n > 0 && (i = n * e + t * (n - 1) * n / 2);
            a = Math.floor(i + r);
        }
        return a;
    };
    ScoreModifier.prototype.calAddScore = function (e) {
        if (e === void 0) { e = 1; }
        var t = this.context.getGameData(), o = t.getComboNum(), n = this.getBaseScore() * e, i = o > 1 ? (o - 1) * this.getBaseComboScore() : 0, r = this.getComboMaxScore();
        1 === t.getLevelId() && (i = this.setFirstLevelComboScore(i));
        r > 0 && i > r && (i = r);
        var a = n + i;
        t.addScore(a);
        return a;
    };
    ScoreModifier.prototype.calAddScoreClassic = function () {
        var e = this.context.getGameData(), t = e.getScoreCombo(), o = e.getCurrentBatchId() + 1, n = this.getBaseScore(), i = t > 1 ? (t - 1) * this.getBaseComboScore() : 0, r = this.getComboMaxScore();
        r > 0 && i > r && (i = r);
        var a = n + i, l = this.getBaseStepMScore();
        a = Math.min(a, l);
        var s = this.getBatchRate(), c = 1 + Math.log(o * s), u = this.getDayMultiplier(), p = Math.floor(a * c * u);
        p = this.applyScoreMultiplier(p);
        e.addScore(p);
        return p;
    };
    ScoreModifier.prototype.applyScoreMultiplier = function (e) {
        return e;
    };
    ScoreModifier.prototype.getBaseStepMScore = function () {
        return 500;
    };
    ScoreModifier.prototype.getDayMultiplier = function () {
        return 1;
    };
    ScoreModifier.prototype.getBatchRate = function () {
        return 1;
    };
    ScoreModifier.prototype.getLoginDays = function () {
        return UserModel_1.default.getInstance().getGameActiveDays() || 1;
    };
    ScoreModifier.prototype.setFirstLevelComboScore = function () {
        return 0;
    };
    ScoreModifier.prototype.getBaseScore = function () {
        return 30;
    };
    ScoreModifier.prototype.getBaseComboScore = function () {
        return 10;
    };
    ScoreModifier.prototype.getComboMaxScore = function () {
        return 90;
    };
    __decorate([
        mj.traitEvent("ScoreMod_setlmTmRt")
    ], ScoreModifier.prototype, "getSettlementTimeRate", null);
    __decorate([
        mj.traitEvent("ScoreMod_setlmWRt")
    ], ScoreModifier.prototype, "getSettlementWRate", null);
    __decorate([
        mj.traitEvent("ScoreMod_applyMultiplier")
    ], ScoreModifier.prototype, "applyScoreMultiplier", null);
    __decorate([
        mj.traitEvent("ScoreMod_baseStepMScore")
    ], ScoreModifier.prototype, "getBaseStepMScore", null);
    __decorate([
        mj.traitEvent("ScoreMod_dayMul")
    ], ScoreModifier.prototype, "getDayMultiplier", null);
    __decorate([
        mj.traitEvent("ScoreMod_batchRate")
    ], ScoreModifier.prototype, "getBatchRate", null);
    __decorate([
        mj.traitEvent("ScoreMod_set1stComboScr")
    ], ScoreModifier.prototype, "setFirstLevelComboScore", null);
    __decorate([
        mj.traitEvent("ScoreMod_baseScr")
    ], ScoreModifier.prototype, "getBaseScore", null);
    __decorate([
        mj.traitEvent("ScoreMod_baseComboScr")
    ], ScoreModifier.prototype, "getBaseComboScore", null);
    __decorate([
        mj.traitEvent("ScoreMod_maxComboScr")
    ], ScoreModifier.prototype, "getComboMaxScore", null);
    return ScoreModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ScoreModifier = ScoreModifier;

cc._RF.pop();