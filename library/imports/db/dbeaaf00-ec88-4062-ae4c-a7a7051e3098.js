"use strict";
cc._RF.push(module, 'dbeaa8A7IhAYq5Mp6cFHjCY', 'Tile2ScreenTopEffectBehavior');
// Scripts/base/Tile2ScreenTopEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenTopEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ScreenTopEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScreenTopEffectBehavior, _super);
    function Tile2ScreenTopEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScreenTopEffectBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_fall", EffectLayerEnum_1.EffectLayer.Middle, "animation");
        this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_top", EffectLayerEnum_1.EffectLayer.Middle, "in");
    };
    Tile2ScreenTopEffectBehavior.prototype.createSpineOnLayer = function (e, t, o) {
        var n, i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.getEffectLayer(t);
        if (cc.isValid(i)) {
            var a = BaseSpine_1.default.create(e, o, 1, null, true);
            if (a && cc.isValid(a.node)) {
                a.node.parent = i;
                var l = i.height * (1 - i.anchorY);
                a.node.setPosition(cc.v3(0, l, 0));
                a.node.active = true;
            }
        }
    };
    return Tile2ScreenTopEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScreenTopEffectBehavior = Tile2ScreenTopEffectBehavior;

cc._RF.pop();