"use strict";
cc._RF.push(module, '494f0ioKFhJC6Jgbr6w0+FY', 'Tile2NormalGameData');
// Scripts/core/simulator/data/Tile2NormalGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var Tile2GameData_1 = require("./Tile2GameData");
var Tile2NormalGameData = /** @class */ (function (_super) {
    __extends(Tile2NormalGameData, _super);
    function Tile2NormalGameData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        return _this;
    }
    Tile2NormalGameData = __decorate([
        mj.class("Tile2NormalGameData")
    ], Tile2NormalGameData);
    return Tile2NormalGameData;
}(Tile2GameData_1.default));
exports.default = Tile2NormalGameData;

cc._RF.pop();