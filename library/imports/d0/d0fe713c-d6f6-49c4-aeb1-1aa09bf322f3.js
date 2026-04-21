"use strict";
cc._RF.push(module, 'd0fe7E81vZJxK6xGqCb8yLz', 'Tile2DuoxiaoComboBehavior');
// Scripts/base/Tile2DuoxiaoComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DuoxiaoComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2DuoxiaoComboBehavior = /** @class */ (function (_super) {
    __extends(Tile2DuoxiaoComboBehavior, _super);
    function Tile2DuoxiaoComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DuoxiaoComboBehavior.prototype.start = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2DuoxiaoAutoMerge,
            duoxiaoCount: e.data.duoxiaoCount
        });
        this.finish();
    };
    return Tile2DuoxiaoComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2DuoxiaoComboBehavior = Tile2DuoxiaoComboBehavior;

cc._RF.pop();