"use strict";
cc._RF.push(module, 'd20ff4NelNDRIzua2VTF2ds', 'DuoxiaoChecker');
// Scripts/process/tileTypes/DuoxiaoChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var DuoxiaoChecker = /** @class */ (function (_super) {
    __extends(DuoxiaoChecker, _super);
    function DuoxiaoChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoChecker.prototype.isInDuoxiaoCombo = function () {
        return this._context.getDuoxiaoClearCount() > 0;
    };
    DuoxiaoChecker.prototype.isHasDuoxiaoCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        return !(!n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && !i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard));
    };
    DuoxiaoChecker.prototype.canShowDuoxiaoCombo = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        return !(!n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && !i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard)) || this._context.getDuoxiaoClearCount() > 0;
    };
    DuoxiaoChecker.prototype.getCanClearDuoxiaoCardInfos = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) || i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard)) {
            var r = 0, l = 0;
            n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && (r = n.getDuoxiaoCount());
            i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && (l = i.getDuoxiaoCount());
            return {
                tileId1: t,
                tileId2: o,
                count1: r,
                count2: l,
                count: r + l
            };
        }
    };
    return DuoxiaoChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DuoxiaoChecker;

cc._RF.pop();