"use strict";
cc._RF.push(module, '5a3f0x5cYhPRZRPlZlEvFnq', 'Tile2UpdateComboBehavior');
// Scripts/base/Tile2UpdateComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2ComboItem_1 = require("../items/Tile2ComboItem");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateComboBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateComboBehavior, _super);
    function Tile2UpdateComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateComboBehavior.prototype.start = function (e) {
        var o = this;
        Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node) && this.stopAndRecycleCurrentCombo();
        Tile2UpdateComboBehavior._comboAnimationId++;
        var n = Tile2UpdateComboBehavior._comboAnimationId;
        Tile2ComboItem_1.default.create().then(function (i) {
            if (i)
                if (n === Tile2UpdateComboBehavior._comboAnimationId) {
                    Tile2UpdateComboBehavior._currentComboItem = i;
                    var r = o.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
                    i.node.parent = r;
                    i.node.active = true;
                    i.setComboNum(e.data.comboNum);
                    i.adjustSpinePositions();
                    i.node.scale = 1;
                    var a = o.getComboPosition();
                    a.x -= 0.5 * i.getLabelWidth();
                    a.y += o.getOffsetY();
                    i.node.position = a;
                    i.playComboAnimation(function () {
                        o.checkAndFinish(n, i);
                    });
                }
                else
                    i.node.destroy();
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2UpdateComboBehavior.prototype.getComboPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY)), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2UpdateComboBehavior.prototype.getOffsetY = function () {
        return -90;
    };
    Tile2UpdateComboBehavior.prototype.stopAndRecycleCurrentCombo = function () {
        if (Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node)) {
            Tile2UpdateComboBehavior._currentComboItem.stopAllAnimations();
            Tile2UpdateComboBehavior._currentComboItem.node.destroy();
            Tile2UpdateComboBehavior._currentComboItem = null;
        }
    };
    Tile2UpdateComboBehavior.prototype.checkAndFinish = function (e, o) {
        if (e === Tile2UpdateComboBehavior._comboAnimationId && Tile2UpdateComboBehavior._currentComboItem === o) {
            o.node.destroy();
            Tile2UpdateComboBehavior._currentComboItem = null;
        }
    };
    Tile2UpdateComboBehavior._currentComboItem = null;
    Tile2UpdateComboBehavior._comboAnimationId = 0;
    __decorate([
        mj.traitEvent("T2UpdComboBhv_getOfsY")
    ], Tile2UpdateComboBehavior.prototype, "getOffsetY", null);
    return Tile2UpdateComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateComboBehavior = Tile2UpdateComboBehavior;

cc._RF.pop();