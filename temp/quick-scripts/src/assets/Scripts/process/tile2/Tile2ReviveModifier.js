"use strict";
cc._RF.push(module, '044ecUXOg5CvpVyvA5OeZ9f', 'Tile2ReviveModifier');
// Scripts/process/tile2/Tile2ReviveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ReviveModifier = /** @class */ (function (_super) {
    __extends(Tile2ReviveModifier, _super);
    function Tile2ReviveModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2ReviveModifier.prototype.initRevive = function () {
        this.context.getGameData().getReviveNums();
    };
    Tile2ReviveModifier.prototype.useRevive = function () {
        var e = this.context.getGameData().getReviveNums();
        this.context.getGameData().changeReviveNums(-1);
        return e > 0;
    };
    Tile2ReviveModifier.prototype.addReviveCount = function (e) {
        if (e === void 0) { e = 1; }
        this.context.getGameData().changeReviveNums(e);
    };
    return Tile2ReviveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ReviveModifier = Tile2ReviveModifier;

cc._RF.pop();