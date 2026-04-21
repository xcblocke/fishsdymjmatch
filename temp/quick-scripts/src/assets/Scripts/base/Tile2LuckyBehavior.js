"use strict";
cc._RF.push(module, 'd5663jxDSNHoK/2JSVIExuK', 'Tile2LuckyBehavior');
// Scripts/base/Tile2LuckyBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2LuckyBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2LuckyBehavior = /** @class */ (function (_super) {
    __extends(Tile2LuckyBehavior, _super);
    function Tile2LuckyBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2LuckyBehavior.prototype.start = function (e) {
        this.addLuckyEffect(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2LuckyBehavior.prototype.addLuckyEffect = function () {
        var e, t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (t && cc.isValid(t)) {
            var o = BaseSpine_1.default.create("spine/tile2Lucky/gameplay_word_lucky", "in", 1, null, true);
            o.node.parent = t;
            o.node.position = this.getSlotBarBottomPosition();
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Lucky);
        }
    };
    Tile2LuckyBehavior.prototype.getSlotBarBottomPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2LuckyBehavior.prototype.getOffsetY = function () {
        return -60;
    };
    return Tile2LuckyBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2LuckyBehavior = Tile2LuckyBehavior;

cc._RF.pop();