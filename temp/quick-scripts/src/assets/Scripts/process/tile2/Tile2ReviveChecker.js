"use strict";
cc._RF.push(module, '57720Bo0/5KI4bWqLWnQk5z', 'Tile2ReviveChecker');
// Scripts/process/tile2/Tile2ReviveChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ReviveChecker = /** @class */ (function (_super) {
    __extends(Tile2ReviveChecker, _super);
    function Tile2ReviveChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ReviveChecker.prototype.getReviveCount = function () {
        return this._context.getGameData().getReviveNums();
    };
    Tile2ReviveChecker.prototype.hasRevive = function () {
        return this._context.getGameData().hasRevive();
    };
    return Tile2ReviveChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ReviveChecker = Tile2ReviveChecker;

cc._RF.pop();