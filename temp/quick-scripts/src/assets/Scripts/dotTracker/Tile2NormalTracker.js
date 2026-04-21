"use strict";
cc._RF.push(module, '1e107dBkq5Bo7l9sw8TtsyM', 'Tile2NormalTracker');
// Scripts/dotTracker/Tile2NormalTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NormalTracker = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2DotTracker_1 = require("./Tile2DotTracker");
var Tile2NormalTracker = /** @class */ (function (_super) {
    __extends(Tile2NormalTracker, _super);
    function Tile2NormalTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        return _this;
    }
    return Tile2NormalTracker;
}(Tile2DotTracker_1.Tile2DotTracker));
exports.Tile2NormalTracker = Tile2NormalTracker;

cc._RF.pop();