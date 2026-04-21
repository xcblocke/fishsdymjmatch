"use strict";
cc._RF.push(module, '7acd60NS1JDkLTHyWVv9Fw5', 'SaveModifier');
// Scripts/process/save/SaveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var LevelGenRule_1 = require("../../core/simulator/config/LevelGenRule");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var SaveModifier = /** @class */ (function (_super) {
    __extends(SaveModifier, _super);
    function SaveModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveModifier.prototype.saveLevelDataToLocalStorage = function () {
        var e = this.getAllCardPosData(), t = LevelGenRule_1.default.serializeTilesToInlineString(e);
        this._context.getGameData().saveLevelData(t);
        this._context.gameType === GameTypeEnums_1.MjGameType.Classic && this.saveTileBatchInfos();
    };
    SaveModifier.prototype.saveTileBatchInfos = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (e) {
            if (e.isValid) {
                var o = e.pos;
                t.push({
                    key: o.x + "-" + o.y + "-" + o.z,
                    batchId: e.batchId
                });
            }
        });
        this._context.getGameData().saveTileBatchInfos(t);
    };
    SaveModifier.prototype.saveOriWithSpecialCards = function () {
        var e = this.getAllCardPosData(), t = LevelGenRule_1.default.serializeTilesToInlineString(e);
        this._context.getGameData().saveOriWithSpecialCards(t);
    };
    SaveModifier.prototype.getAllCardPosData = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (e) {
            var o = e.pos;
            t.push({
                id: e.resId,
                pos: {
                    x: o.x,
                    y: o.y,
                    z: o.z
                },
                isAlive: e.isValid
            });
        });
        t.sort(function (e, t) {
            return e.pos.z !== t.pos.z ? e.pos.z - t.pos.z : e.pos.y !== t.pos.y ? e.pos.y - t.pos.y : e.pos.x - t.pos.x;
        });
        return t;
    };
    return SaveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.SaveModifier = SaveModifier;

cc._RF.pop();