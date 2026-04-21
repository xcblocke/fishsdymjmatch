"use strict";
cc._RF.push(module, '05b18vxoLxDO5kbdKAZmuhx', 'NormalNewRecordBehavior');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var NormalNewRecordBehavior = /** @class */ (function (_super) {
    __extends(NormalNewRecordBehavior, _super);
    function NormalNewRecordBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalNewRecordBehavior.prototype.start = function () {
        this.showClearLayerWords();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    NormalNewRecordBehavior.prototype.showClearLayerWords = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBreakRecord);
        var e = BaseSpine_1.default.create("spine/gameplay_newRecord", "in", 1, null, true, "r_normalNewRecord");
        e.node.setPosition(0, 180, 0);
        this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
    };
    return NormalNewRecordBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = NormalNewRecordBehavior;

cc._RF.pop();