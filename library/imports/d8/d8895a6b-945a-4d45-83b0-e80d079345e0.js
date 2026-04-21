"use strict";
cc._RF.push(module, 'd8895prlFpNRYOw6A0Hk0Xg', 'ClearLayerBehavior');
// subpackages/r_clearLayerWords/Scripts/ClearLayerBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClearLayerBehavior = /** @class */ (function (_super) {
    __extends(ClearLayerBehavior, _super);
    function ClearLayerBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearLayerBehavior.prototype.start = function () {
        this.showClearLayerWords();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ClearLayerBehavior.prototype.showClearLayerWords = function () {
        var e = BaseSpine_1.default.create("spine/gameplay_layerClear", "layerClear", 1, null, true, "r_clearLayerWords");
        e.node.setPosition(0, 180, 0);
        this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
    };
    return ClearLayerBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = ClearLayerBehavior;

cc._RF.pop();