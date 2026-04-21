"use strict";
cc._RF.push(module, '49f6fHZUqlNNrg+xiNMd8tk', 'Tile2RollCardBehavior');
// Scripts/base/Tile2RollCardBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RollCardBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RollCardBehavior = /** @class */ (function (_super) {
    __extends(Tile2RollCardBehavior, _super);
    function Tile2RollCardBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.tileId, i = o.frontToBack, r = this.context.getTileNodeMap().get(n);
        if (r) {
            i || this.playRevealAudio();
            r.tile2RollCard(function () {
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RollCardBehavior.prototype.playRevealAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Overturn);
    };
    __decorate([
        mj.traitEvent("T2RollCardBhv_playRvlAud")
    ], Tile2RollCardBehavior.prototype, "playRevealAudio", null);
    return Tile2RollCardBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RollCardBehavior = Tile2RollCardBehavior;

cc._RF.pop();