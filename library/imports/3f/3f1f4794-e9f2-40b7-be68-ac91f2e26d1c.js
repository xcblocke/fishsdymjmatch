"use strict";
cc._RF.push(module, '3f1f4eU6fJAt75orJHy4m0c', 'Tile2MagnetHideBehavior');
// Scripts/base/Tile2MagnetHideBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetHideBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2MagnetItem_1 = require("../items/Tile2MagnetItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2MagnetHideBehavior = /** @class */ (function (_super) {
    __extends(Tile2MagnetHideBehavior, _super);
    function Tile2MagnetHideBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetHideBehavior.prototype.start = function (e) {
        try {
            var t = this.context.gameView, o = null == t ? void 0 : t.nodeTopEffectRoot;
            if (!o || !cc.isValid(o)) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var n = o.getChildByName("magnetNode");
            if (!n || !cc.isValid(n) || !n.active) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            if (e.data.isWin || e.data.isDead) {
                var i = n.getComponent(Tile2MagnetItem_1.default);
                null == i || i.forceExitWithoutAni();
            }
        }
        catch (e) { }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2MagnetHideBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MagnetHideBehavior = Tile2MagnetHideBehavior;

cc._RF.pop();