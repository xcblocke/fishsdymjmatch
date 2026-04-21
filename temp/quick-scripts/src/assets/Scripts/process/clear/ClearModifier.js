"use strict";
cc._RF.push(module, 'fb3dcGSlRBKqaWJVH2cw2zn', 'ClearModifier');
// Scripts/process/clear/ClearModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var ClearModifier = /** @class */ (function (_super) {
    __extends(ClearModifier, _super);
    function ClearModifier(t) {
        return _super.call(this, t) || this;
    }
    ClearModifier.prototype.fixMergeType = function (e, t) {
        if (t === void 0) { t = GameTypeEnums_1.EMergeType.Normal; }
        t === GameTypeEnums_1.EMergeType.Normal && (e.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge ? t = GameTypeEnums_1.EMergeType.FullCombo : e.inputType === GameInputEnum_1.EGameInputEnum.DuoxiaoAutoMerge && (t = GameTypeEnums_1.EMergeType.Duoxiao));
        return t;
    };
    ClearModifier.prototype.modifyClear = function (e, t) {
        if (t === void 0) { t = GameTypeEnums_1.EMergeType.Normal; }
        var o = (t = this.fixMergeType(e, t)) !== GameTypeEnums_1.EMergeType.Normal;
        this._context.trackerModifier.triggerClear(e, t, o);
        var n = this._context.getTileMapObject().clear(o);
        this._context.getGameData().addAutoCollectTilesNum(t === GameTypeEnums_1.EMergeType.FullCombo ? n.length : 0);
        this._context.getGameData().addStepCount(1);
        this.modifyManualMatchCount(e);
        this._context.saveModifier.saveLevelDataToLocalStorage();
        return n;
    };
    ClearModifier.prototype.modifyTileTypesClear = function () {
        var e = {}, t = this.collectYogaCardIds();
        e.yogaCardIds = t;
        this._context.saveModifier.saveLevelDataToLocalStorage();
        return e;
    };
    ClearModifier.prototype.collectYogaCardIds = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (o, n) {
            if (o.isValid && o.resId === GameTypeEnums_1.ResId.emYogaCardId && !e.isCardLock(o)) {
                t.push(n);
                e.clearTile(n, CollectInterfact_1.ECollectFrom.FromYoga);
            }
        });
        return t;
    };
    ClearModifier.prototype.modifyManualMatchCount = function (e) {
        if ([GameInputEnum_1.EGameInputEnum.TouchStart, GameInputEnum_1.EGameInputEnum.TouchEnd].includes(e.inputType)) {
            this._context.getGameData().updateNonAutoStepCount();
            this._context.getGameData().updateClearTimeInterval();
        }
    };
    ClearModifier.prototype.modifyAutoCollectTilesNum = function (e, t) {
        e.inputType === GameInputEnum_1.EGameInputEnum.Tile2AutoMerge && this._context.getGameData().addAutoCollectTilesNum(t);
    };
    return ClearModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClearModifier = ClearModifier;

cc._RF.pop();