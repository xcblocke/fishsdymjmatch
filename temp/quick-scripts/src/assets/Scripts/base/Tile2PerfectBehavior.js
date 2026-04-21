"use strict";
cc._RF.push(module, 'a0dc9bhxU5Dmo6nZBEA5p2G', 'Tile2PerfectBehavior');
// Scripts/base/Tile2PerfectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2PerfectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2PerfectBehavior = /** @class */ (function (_super) {
    __extends(Tile2PerfectBehavior, _super);
    function Tile2PerfectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2PerfectBehavior.prototype.start = function (e) {
        var t;
        if (null === (t = e.data) || void 0 === t ? void 0 : t.isClear) {
            this.removePlayingPerfect();
        }
        else {
            this.addPerfectEffect();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2PerfectBehavior.prototype.removePlayingPerfect = function () {
        var e, o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (o && cc.isValid(o)) {
            var n = o.getChildByName(Tile2PerfectBehavior.PERFECT_NODE_NAME);
            n && cc.isValid(n) && n.destroy();
        }
    };
    Tile2PerfectBehavior.prototype.addPerfectEffect = function () {
        var e, o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (o && cc.isValid(o)) {
            this.removePlayingPerfect();
            var n = BaseSpine_1.default.create("spine/tile2Perfect/gameplay_word_perfect", "in", 1, null, true);
            n.node.name = Tile2PerfectBehavior.PERFECT_NODE_NAME;
            n.node.parent = o;
            n.node.position = this.getPerfectPosition();
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Perfect);
        }
    };
    Tile2PerfectBehavior.prototype.getPerfectPosition = function () {
        var e = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), t = this.context.getLastCollisionWorldPos();
        if (t) {
            var o = e.convertToNodeSpaceAR(t);
            return cc.v3(o.x, o.y);
        }
        return cc.v3(0, 0, 0);
    };
    Tile2PerfectBehavior.PERFECT_NODE_NAME = "Tile2PerfectEffectNode";
    return Tile2PerfectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2PerfectBehavior = Tile2PerfectBehavior;

cc._RF.pop();