"use strict";
cc._RF.push(module, '431677q0khIjJdXtp16VXyK', 'RemoveDragAudioTrait');
// subpackages/l_removeDragAudio/Scripts/RemoveDragAudioTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RemoveDragAudioTrait = /** @class */ (function (_super) {
    __extends(RemoveDragAudioTrait, _super);
    function RemoveDragAudioTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveDragAudioTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    RemoveDragAudioTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "Tile2MoveBhv_playAudio",
                type: 0
            }]);
    };
    RemoveDragAudioTrait.prototype.onMoveBhv_playAudio = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemoveDragAudioTrait.prototype.onTile2MoveBhv_playAudio = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemoveDragAudioTrait.traitKey = "RemoveDragAudio";
    RemoveDragAudioTrait = __decorate([
        mj.trait,
        mj.class("RemoveDragAudioTrait")
    ], RemoveDragAudioTrait);
    return RemoveDragAudioTrait;
}(Trait_1.default));
exports.default = RemoveDragAudioTrait;

cc._RF.pop();