"use strict";
cc._RF.push(module, '5444dFAskpCPLB3pfJsD3Z1', 'FullComboChecker');
// Scripts/process/fullcombo/FullComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullComboChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../gamePlay/user/UserModel");
var FullComboChecker = /** @class */ (function (_super) {
    __extends(FullComboChecker, _super);
    function FullComboChecker(t) {
        return _super.call(this, t) || this;
    }
    FullComboChecker.prototype.getFullLimit = function () {
        return [10, 16];
    };
    FullComboChecker.prototype.getFullRate = function () {
        return [1, 0.5];
    };
    FullComboChecker.prototype.getDailyChallengeFullLimit = function () {
        return [10, 16];
    };
    FullComboChecker.prototype.getDailyChallengeFullRate = function () {
        return [1, 0.5];
    };
    FullComboChecker.prototype.canFullCombo = function () {
        var e = this.context.getGameData();
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return false;
        var t = this.context.getTileMapObject().getCurTilesCnt();
        if (!e.getHasBrokenCombo()) {
            var o = void 0, n = void 0;
            if (this.context.gameType === GameTypeEnums_1.MjGameType.DailyChallenge) {
                o = this.getDailyChallengeFullLimit();
                n = this.getDailyChallengeFullRate();
            }
            else {
                o = this.getFullLimit();
                n = this.getFullRate();
            }
            var i = Math.random();
            if (t === o[0])
                return i < n[0];
            if (t === o[1])
                return i < n[1];
        }
        return false;
    };
    FullComboChecker.prototype.getAllCardPair = function () {
        var e = this.context.getTileMapObject().getAllCardTiles();
        if (e.length < 2)
            return [];
        this.sortCardsByPriority(e);
        var t = this.getCardPair(e);
        this.sortPairs(t);
        return t;
    };
    FullComboChecker.prototype.getCardPair = function (e) {
        for (var t = [], o = this.context.getTileMapObject(), n = __spreadArrays(e); n.length > 0;) {
            var i = n[0];
            n.splice(0, 1);
            for (var r = -1, a = -1, s = 0; s < n.length; s++) {
                var c = n[s];
                if (o.compare(i, c)) {
                    var u = this.calculatePairScore(i, c);
                    if (-1 === r || u > a) {
                        r = s;
                        a = u;
                    }
                }
            }
            if (-1 !== r) {
                var p = [i, c = n[r]];
                t.push(p);
                n.splice(r, 1);
            }
        }
        return t;
    };
    FullComboChecker.prototype.calculatePairScore = function (e, t) {
        var o = this.context.getTileMapObject(), n = o.isCardLock(e), i = o.isCardLock(t), r = 0;
        0 === n && 0 === i && (r += 1000);
        r += (e.layer + t.layer) / 2 * 100;
        return (r += 10 * Math.min(e.layer, t.layer)) - (n + i);
    };
    FullComboChecker.prototype.sortPairs = function (e) {
        var t = this.context.getTileMapObject();
        e.sort(function (e, o) {
            var n = e[0], i = e[1], r = o[0], a = o[1], l = t.isCardLock(n), s = t.isCardLock(i), c = t.isCardLock(r), u = t.isCardLock(a), p = 0 === l && 0 === s;
            if (p !== (0 === c && 0 === u))
                return p ? -1 : 1;
            var f = (n.layer + i.layer) / 2, d = (r.layer + a.layer) / 2;
            if (f !== d)
                return d - f;
            var h = Math.min(n.layer, i.layer), y = Math.min(r.layer, a.layer);
            if (h !== y)
                return y - h;
            var m = l + s, v = c + u;
            return m !== v ? m - v : Math.random() < 0.5 ? -1 : 1;
        });
    };
    FullComboChecker.prototype.sortCardsByPriority = function (e) {
        var t = this.context.getTileMapObject();
        e.sort(function (e, o) {
            var n = t.isCardLock(e), i = t.isCardLock(o), r = 0 === n;
            return r !== (0 === i) ? r ? -1 : 1 : e.layer !== o.layer ? o.layer - e.layer : n !== i ? n - i : Math.random() < 0.5 ? -1 : 1;
        });
    };
    __decorate([
        mj.traitEvent("FullComboChk_getLim")
    ], FullComboChecker.prototype, "getFullLimit", null);
    __decorate([
        mj.traitEvent("FullComboChk_rate")
    ], FullComboChecker.prototype, "getFullRate", null);
    __decorate([
        mj.traitEvent("FullComboChk_getDCLim")
    ], FullComboChecker.prototype, "getDailyChallengeFullLimit", null);
    __decorate([
        mj.traitEvent("FullComboChk_getDCRate")
    ], FullComboChecker.prototype, "getDailyChallengeFullRate", null);
    __decorate([
        mj.traitEvent("FullComboChk_canFullCb")
    ], FullComboChecker.prototype, "canFullCombo", null);
    return FullComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.FullComboChecker = FullComboChecker;

cc._RF.pop();