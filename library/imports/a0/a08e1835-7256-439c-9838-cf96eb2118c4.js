"use strict";
cc._RF.push(module, 'a08e1g1clZDnJg4z5brIRjE', 'ComboModifier');
// Scripts/process/combo/ComboModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var ComboModifier = /** @class */ (function (_super) {
    __extends(ComboModifier, _super);
    function ComboModifier(t) {
        return _super.call(this, t) || this;
    }
    ComboModifier.prototype.addCombo = function (e) {
        this.context.getGameData().addComboNum(e);
    };
    ComboModifier.prototype.resetCombo = function () {
        this.context.getGameData().resetComboNum();
    };
    ComboModifier.prototype.lockClick = function () {
        var e = this.context.getGameData();
        e.addLockClickCount();
        var t = e.getLockClickCount();
        if (this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.context.tile2ComboChecker.checkIsBreakComboState(t) && this.tile2BreakCombo();
        }
        else {
            this.context.comboChecker.canBreakCombo() && this.breakCombo();
        }
    };
    ComboModifier.prototype.breakCombo = function () {
        this.resetCombo();
        this.context.getGameData().setHasBrokenCombo(true);
    };
    ComboModifier.prototype.tile2BreakCombo = function () {
        this.resetCombo();
        this.context.getGameData().setHasBrokenCombo(true);
    };
    ComboModifier.prototype.updateSlotLevel = function (e) {
        this.context.getGameData().setSlotLevel(e);
    };
    __decorate([
        mj.traitEvent("ComboMdf_breakCombo")
    ], ComboModifier.prototype, "breakCombo", null);
    return ComboModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ComboModifier = ComboModifier;

cc._RF.pop();