"use strict";
cc._RF.push(module, '8b2edFRzn1IsZpuZ+6MVH+h', 'AllClearChecker');
// Scripts/process/allClear/AllClearChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var AllClearChecker = /** @class */ (function (_super) {
    __extends(AllClearChecker, _super);
    function AllClearChecker(t) {
        return _super.call(this, t) || this;
    }
    AllClearChecker.prototype.getMinTiles = function () {
        return 4;
    };
    AllClearChecker.prototype.getMaxTiles = function () {
        return 10;
    };
    AllClearChecker.prototype.getTriggerRate = function () {
        return 0.5;
    };
    AllClearChecker.prototype.getTotalTileCount = function () {
        return this.context.getTileMapObject().getCurTilesCnt();
    };
    AllClearChecker.prototype.canTrigger = function () {
        if (this.context.getGameData().getHasBrokenCombo())
            return false;
        var e = this.getTotalTileCount(), t = this.getMinTiles(), o = this.getMaxTiles();
        if (e < t || e > o)
            return false;
        var n = this.getTriggerRate();
        return Math.random() < n;
    };
    AllClearChecker.prototype.checkInAllClear = function () {
        var e, t = this.context.getGameData();
        if (null === (e = null == t ? void 0 : t.getHasTriggeredAllClear) || void 0 === e ? void 0 : e.call(t))
            return {
                allClear: false,
                effectId: 0,
                ids: []
            };
        var o = this.checkAllClear();
        o.effectId;
        if (!o.isShow)
            return {
                allClear: o.isShow,
                effectId: o.effectId,
                ids: []
            };
        var n = this.context.getTileMapObject().aliveTiles().map(function (e) {
            return e.id;
        });
        return {
            allClear: o.isShow,
            effectId: o.effectId,
            ids: n
        };
    };
    AllClearChecker.prototype.checkAllClear = function () {
        return {
            isShow: false,
            effectId: 0
        };
    };
    __decorate([
        mj.traitEvent("AllClrChk_minTiles")
    ], AllClearChecker.prototype, "getMinTiles", null);
    __decorate([
        mj.traitEvent("AllClrChk_maxTiles")
    ], AllClearChecker.prototype, "getMaxTiles", null);
    __decorate([
        mj.traitEvent("AllClrChk_triRate")
    ], AllClearChecker.prototype, "getTriggerRate", null);
    __decorate([
        mj.traitEvent("AllClrChk_canTrig")
    ], AllClearChecker.prototype, "canTrigger", null);
    __decorate([
        mj.traitEvent("AllClrChk_allClr")
    ], AllClearChecker.prototype, "checkAllClear", null);
    return AllClearChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.AllClearChecker = AllClearChecker;

cc._RF.pop();