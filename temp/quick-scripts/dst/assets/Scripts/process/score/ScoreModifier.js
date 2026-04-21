
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/score/ScoreModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3Mvc2NvcmUvU2NvcmVNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCwyREFBc0Q7QUFDdEQ7SUFBbUMsaUNBQWM7SUFDL0MsdUJBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCw2Q0FBcUIsR0FBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsMENBQWtCLEdBQWxCLFVBQW1CLENBQUssRUFBRSxDQUFFO1FBQVQsa0JBQUEsRUFBQSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUM5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLEVBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFB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QUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzJEQUdsQztJQThFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7NkRBR3pDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzBEQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzt5REFHaEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7cURBR25DO0lBS0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2dFQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztxREFHakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7MERBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3lEQUdyQztJQUNILG9CQUFDO0NBOUhELEFBOEhDLENBOUhrQywrQkFBYyxHQThIaEQ7QUE5SFksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIFNjb3JlTW9kaWZpZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlTW9kX3NldGxtVG1SdFwiKVxuICBnZXRTZXR0bGVtZW50VGltZVJhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pblJhdGlvOiAwLjUsXG4gICAgICBtYXhSYXRpbzogMlxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZU1vZF9zZXRsbVdSdFwiKVxuICBnZXRTZXR0bGVtZW50V1JhdGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgY2FsU2V0dGxlbWVudFNjb3JlKGUgPSAwLCB0Pykge1xuICAgIHZhciBvLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgaSA9IG4uZ2V0U2NvcmUoKSxcbiAgICAgIHIgPSBuLmdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpLFxuICAgICAgYSA9IHRoaXMuZ2V0U2V0dGxlbWVudFRpbWVSYXRlKCksXG4gICAgICBsID0gYS5taW5SYXRpbyxcbiAgICAgIHMgPSBhLm1heFJhdGlvO1xuICAgIGlmICh0ICYmIHQgPiAwKSB7XG4gICAgICB2YXIgYyA9IHQgLyBNYXRoLm1heChlLCAwLjEpO1xuICAgICAgbyA9IDQ1ICogciAqIE1hdGgubWF4KGwsIE1hdGgubWluKHMsIGMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYyA9IDEuMjUgKiByIC8gTWF0aC5tYXgoZSwgMC4xKTtcbiAgICAgIG8gPSA0NSAqIHIgKiBNYXRoLm1heChsLCBNYXRoLm1pbihzLCBjKSk7XG4gICAgfVxuICAgIHZhciB1ID0gdGhpcy5nZXRTZXR0bGVtZW50V1JhdGUoKSxcbiAgICAgIHAgPSAobyA9IE1hdGguZmxvb3IobyAqIHUpKSArIGksXG4gICAgICBmID0gaSxcbiAgICAgIGQgPSAyICogaSxcbiAgICAgIGggPSBNYXRoLm1heChmLCBNYXRoLm1pbihkLCBwKSksXG4gICAgICB5ID0gTWF0aC5mbG9vcihoKTtcbiAgICBuLnNldFNldHRsZW1lbnRTY29yZSh5KTtcbiAgICByZXR1cm4geTtcbiAgfVxuICBnZXRQZXJmZWN0TWF4U2NvcmUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEJhc2VTY29yZSgpLFxuICAgICAgdCA9IHRoaXMuZ2V0QmFzZUNvbWJvU2NvcmUoKSxcbiAgICAgIG8gPSB0aGlzLmdldENvbWJvTWF4U2NvcmUoKSxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDdXJMZXZlbENvbWJvTWF4TGltaXQoKSxcbiAgICAgIGkgPSAwLFxuICAgICAgciA9IDAsXG4gICAgICBhID0gMDtcbiAgICBpZiAobyA+IDApIHtcbiAgICAgIHZhciBsID0gTWF0aC5mbG9vcihvIC8gdCkgKyAxLFxuICAgICAgICBzID0gTWF0aC5tYXgoMCwgbiAtIGwgKyAxKSxcbiAgICAgICAgYyA9IG4gLSBzO1xuICAgICAgYyA+IDAgJiYgKGkgPSBjICogZSArIHQgKiAoYyAtIDEpICogYyAvIDIpO1xuICAgICAgciA9IHMgKiAoZSArIG8pO1xuICAgICAgYSA9IE1hdGguZmxvb3IoaSArIHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuID4gMCAmJiAoaSA9IG4gKiBlICsgdCAqIChuIC0gMSkgKiBuIC8gMik7XG4gICAgICBhID0gTWF0aC5mbG9vcihpICsgcik7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIGNhbEFkZFNjb3JlKGUgPSAxKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIG8gPSB0LmdldENvbWJvTnVtKCksXG4gICAgICBuID0gdGhpcy5nZXRCYXNlU2NvcmUoKSAqIGUsXG4gICAgICBpID0gbyA+IDEgPyAobyAtIDEpICogdGhpcy5nZXRCYXNlQ29tYm9TY29yZSgpIDogMCxcbiAgICAgIHIgPSB0aGlzLmdldENvbWJvTWF4U2NvcmUoKTtcbiAgICAxID09PSB0LmdldExldmVsSWQoKSAmJiAoaSA9IHRoaXMuc2V0Rmlyc3RMZXZlbENvbWJvU2NvcmUoaSkpO1xuICAgIHIgPiAwICYmIGkgPiByICYmIChpID0gcik7XG4gICAgdmFyIGEgPSBuICsgaTtcbiAgICB0LmFkZFNjb3JlKGEpO1xuICAgIHJldHVybiBhO1xuICB9XG4gIGNhbEFkZFNjb3JlQ2xhc3NpYygpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IGUuZ2V0U2NvcmVDb21ibygpLFxuICAgICAgbyA9IGUuZ2V0Q3VycmVudEJhdGNoSWQoKSArIDEsXG4gICAgICBuID0gdGhpcy5nZXRCYXNlU2NvcmUoKSxcbiAgICAgIGkgPSB0ID4gMSA/ICh0IC0gMSkgKiB0aGlzLmdldEJhc2VDb21ib1Njb3JlKCkgOiAwLFxuICAgICAgciA9IHRoaXMuZ2V0Q29tYm9NYXhTY29yZSgpO1xuICAgIHIgPiAwICYmIGkgPiByICYmIChpID0gcik7XG4gICAgdmFyIGEgPSBuICsgaSxcbiAgICAgIGwgPSB0aGlzLmdldEJhc2VTdGVwTVNjb3JlKCk7XG4gICAgYSA9IE1hdGgubWluKGEsIGwpO1xuICAgIHZhciBzID0gdGhpcy5nZXRCYXRjaFJhdGUoKSxcbiAgICAgIGMgPSAxICsgTWF0aC5sb2cobyAqIHMpLFxuICAgICAgdSA9IHRoaXMuZ2V0RGF5TXVsdGlwbGllcigpLFxuICAgICAgcCA9IE1hdGguZmxvb3IoYSAqIGMgKiB1KTtcbiAgICBwID0gdGhpcy5hcHBseVNjb3JlTXVsdGlwbGllcihwKTtcbiAgICBlLmFkZFNjb3JlKHApO1xuICAgIHJldHVybiBwO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2NvcmVNb2RfYXBwbHlNdWx0aXBsaWVyXCIpXG4gIGFwcGx5U2NvcmVNdWx0aXBsaWVyKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlTW9kX2Jhc2VTdGVwTVNjb3JlXCIpXG4gIGdldEJhc2VTdGVwTVNjb3JlKCkge1xuICAgIHJldHVybiA1MDA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZU1vZF9kYXlNdWxcIilcbiAgZ2V0RGF5TXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlTW9kX2JhdGNoUmF0ZVwiKVxuICBnZXRCYXRjaFJhdGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZ2V0TG9naW5EYXlzKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQWN0aXZlRGF5cygpIHx8IDE7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZU1vZF9zZXQxc3RDb21ib1NjclwiKVxuICBzZXRGaXJzdExldmVsQ29tYm9TY29yZSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlTW9kX2Jhc2VTY3JcIilcbiAgZ2V0QmFzZVNjb3JlKCkge1xuICAgIHJldHVybiAzMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlTW9kX2Jhc2VDb21ib1NjclwiKVxuICBnZXRCYXNlQ29tYm9TY29yZSgpIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZU1vZF9tYXhDb21ib1NjclwiKVxuICBnZXRDb21ib01heFNjb3JlKCkge1xuICAgIHJldHVybiA5MDtcbiAgfVxufSJdfQ==