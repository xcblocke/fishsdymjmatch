"use strict";
cc._RF.push(module, '52605iH481MJLz5uKn1dm89', 'Tile2ComboChecker');
// Scripts/process/combo/Tile2ComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var Tile2ComboChecker = /** @class */ (function (_super) {
    __extends(Tile2ComboChecker, _super);
    function Tile2ComboChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ComboChecker.prototype.getComboLimit = function () {
        return 5;
    };
    Tile2ComboChecker.prototype.getBreakLimit = function () {
        return 1;
    };
    Tile2ComboChecker.prototype.checkIsComboState = function (e) {
        return !!UserModel_1.default.getInstance().isGuideFinished() && e >= this.getComboLimit();
    };
    Tile2ComboChecker.prototype.checkIsBreakComboState = function (e) {
        return e >= this.getBreakLimit();
    };
    Tile2ComboChecker.prototype.getComboDisplayThresholds = function () {
        return [5, 10, 15, 20, 30, 40, 50];
    };
    Tile2ComboChecker.prototype.canShowComboDisplay = function (e) {
        return this.getComboDisplayThresholds().includes(e);
    };
    Tile2ComboChecker.prototype.getScreenEdgeThresholds = function () {
        return [5, 15, 30];
    };
    Tile2ComboChecker.prototype.canShowScreenEdge = function (e) {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4 ? e > 0 && e % 5 == 0 : this.getScreenEdgeThresholds().includes(e);
    };
    Tile2ComboChecker.prototype.getReachedScreenEdgeThreshold = function (e) {
        for (var t = this.getScreenEdgeThresholds(), o = t.length - 1; o >= 0; o--)
            if (e >= t[o])
                return t[o];
        return 0;
    };
    Tile2ComboChecker.prototype.canShowScreenTop = function (e) {
        return e.advanced;
    };
    Tile2ComboChecker.prototype.getSlotLevelThresholds = function () {
        return [[30, 5], [20, 4], [15, 3], [10, 2], [5, 1]];
    };
    Tile2ComboChecker.prototype.getSlotLevel = function (e) {
        var t, o;
        try {
            for (var n = __values(this.getSlotLevelThresholds()), i = n.next(); !i.done; i = n.next()) {
                var r = __read(i.value, 2), s = r[0], c = r[1];
                if (e >= s)
                    return c;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    Tile2ComboChecker.prototype.canSlotAdvance = function (e, t) {
        return !!UserModel_1.default.getInstance().isGuideFinished() && e > t;
    };
    Tile2ComboChecker.prototype.checkComboDisplayState = function () {
        var e = this.context.getGameData(), t = e.getComboNum(), o = this.checkIsComboState(t), n = e.getSlotLevel(), i = this.getSlotLevel(e.getCurMaxCombo()), r = !(this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3) && this.canSlotAdvance(i, n), a = this.showTopEffect();
        return {
            comboNum: t,
            comboState: o,
            showComboDisplay: o && this.canShowComboDisplay(t),
            showScreenEdge: o && this.canShowScreenEdge(t),
            showScreenTop: o && r && a,
            showSlotAdvance: r,
            slotLevel: r ? i : n
        };
    };
    Tile2ComboChecker.prototype.showTopEffect = function () {
        return true;
    };
    __decorate([
        mj.traitEvent("T2CmbChk_showTopEff")
    ], Tile2ComboChecker.prototype, "showTopEffect", null);
    return Tile2ComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ComboChecker = Tile2ComboChecker;

cc._RF.pop();