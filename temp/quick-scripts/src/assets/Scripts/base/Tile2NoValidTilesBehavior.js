"use strict";
cc._RF.push(module, '6d820fZmhZPv6fsvHthwR+e', 'Tile2NoValidTilesBehavior');
// Scripts/base/Tile2NoValidTilesBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoValidTilesBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2NoValidTilesBehavior = /** @class */ (function (_super) {
    __extends(Tile2NoValidTilesBehavior, _super);
    function Tile2NoValidTilesBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NoValidTilesBehavior.prototype.start = function () {
        var e = I18NStrings_1.default.get("Tile4_back_tool_cannot_use", "No valid tiles");
        mj.EventManager.emit("SHOWTILE2TIPS", e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NoValidTilesBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NoValidTilesBehavior = Tile2NoValidTilesBehavior;

cc._RF.pop();