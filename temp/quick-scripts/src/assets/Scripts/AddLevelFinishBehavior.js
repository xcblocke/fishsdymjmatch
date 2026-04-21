"use strict";
cc._RF.push(module, '5d7ee7GtutJVK2wJKPmpa3m', 'AddLevelFinishBehavior');
// Scripts/AddLevelFinishBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelFinishBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelFinishBehavior = /** @class */ (function (_super) {
    __extends(AddLevelFinishBehavior, _super);
    function AddLevelFinishBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelFinishBehavior.prototype.start = function (e) {
        if (e.data.isOpenGenerateState) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.DropClassic
            });
        }
        else {
            this.context.getTileNodeManager().destoryEmptyLayerNodes();
        }
        this.finish();
    };
    return AddLevelFinishBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelFinishBehavior = AddLevelFinishBehavior;

cc._RF.pop();