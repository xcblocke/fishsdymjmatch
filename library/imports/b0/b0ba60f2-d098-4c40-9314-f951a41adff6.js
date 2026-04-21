"use strict";
cc._RF.push(module, 'b0ba6Dy0JhMQJMU+VGkGt/2', 'Tile2MoveBehavior');
// Scripts/base/Tile2MoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
this && this.__values;
var Tile2MoveBehavior = /** @class */ (function (_super) {
    __extends(Tile2MoveBehavior, _super);
    function Tile2MoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MoveBehavior.prototype.start = function (e) {
        var t = e.data.tileId;
        if (t) {
            var o = this.context.getTileNodeMap().get(t);
            if (!o) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            o.tile2PlayMove(e.data.delta);
            e.data.iFirstMove && this.playAudio();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2MoveBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Drag);
    };
    __decorate([
        mj.traitEvent("Tile2MoveBhv_playAudio")
    ], Tile2MoveBehavior.prototype, "playAudio", null);
    return Tile2MoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MoveBehavior = Tile2MoveBehavior;

cc._RF.pop();