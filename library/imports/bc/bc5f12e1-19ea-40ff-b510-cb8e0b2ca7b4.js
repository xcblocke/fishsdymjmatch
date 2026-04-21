"use strict";
cc._RF.push(module, 'bc5f1LhGepA/7UQy44LLKe0', 'MoveBehavior');
// Scripts/base/MoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
this && this.__values;
var MoveBehavior = /** @class */ (function (_super) {
    __extends(MoveBehavior, _super);
    function MoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveBehavior.prototype.start = function (e) {
        var t = e.data.tileId;
        if (t) {
            var o = this.context.getTileNodeMap().get(t);
            if (!o) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            o.selected();
            o.setPositionWithDelta(true, e.data.delta);
            e.data.iFirstMove && this.playAudio();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MoveBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Drag);
    };
    __decorate([
        mj.traitEvent("MoveBhv_playAudio")
    ], MoveBehavior.prototype, "playAudio", null);
    return MoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.MoveBehavior = MoveBehavior;

cc._RF.pop();