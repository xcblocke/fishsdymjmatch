"use strict";
cc._RF.push(module, '51b7berCBhDRJeZBqXYYDD9', 'Tile2ResetMoveBehavior');
// Scripts/base/Tile2ResetMoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ResetMoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ResetMoveBehavior = /** @class */ (function (_super) {
    __extends(Tile2ResetMoveBehavior, _super);
    function Tile2ResetMoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ResetMoveBehavior.prototype.start = function (e) {
        var t = this, o = e.data.tileId, n = this.context.getTileNodeMap().get(o);
        if (n) {
            n.tile2ResetMove(function () {
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2ResetMoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ResetMoveBehavior = Tile2ResetMoveBehavior;

cc._RF.pop();