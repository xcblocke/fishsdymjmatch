"use strict";
cc._RF.push(module, '4d9d8a/jOxJ9LQdE7ZKdLTL', 'Tile2RevertBehavior');
// Scripts/base/Tile2RevertBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2RevertBehavior = /** @class */ (function (_super) {
    __extends(Tile2RevertBehavior, _super);
    function Tile2RevertBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RevertBehavior.prototype.start = function (e) {
        var t = this, o = e.data.tileId, n = this.context.getTileNodeMap().get(o);
        if (n) {
            var i = this.context.gameView, a = null == i ? void 0 : i.slotBarView;
            a && a.removeSlotBar([o]);
            n.tile2RevertFromSlotBar(function () {
                n.tile2RollCard();
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
            this.playRevertSound();
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RevertBehavior.prototype.playRevertSound = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
    };
    return Tile2RevertBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RevertBehavior = Tile2RevertBehavior;

cc._RF.pop();