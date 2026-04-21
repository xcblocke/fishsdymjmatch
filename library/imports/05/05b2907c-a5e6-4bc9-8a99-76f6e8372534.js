"use strict";
cc._RF.push(module, '05b29B8peZLyYqZdvboNyU0', 'Tile2ClearEffectBehavior');
// Scripts/base/Tile2ClearEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ClearEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ClearEffectBehavior, _super);
    function Tile2ClearEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ClearEffectBehavior.prototype.start = function (e) {
        var t = e.data.tileIds;
        if (!t || t.length < 2)
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            var o = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0), n = this.context.gameView.nodeTopEffectRoot, i = new cc.Node("Tile2ClearEffect");
            i.parent = n;
            var r = n.convertToNodeSpaceAR(o);
            i.position = cc.v3(r.x, r.y, 0);
            this.playAni(i, e, r);
        }
    };
    Tile2ClearEffectBehavior.prototype.playAni = function (e, t, o) {
        var n = this, i = this.getAniCfg(t, o), r = i.path, s = i.bundle, c = i.animName;
        BaseSpine_1.default.refreshWithNode(e, r, s).setAnimation(c, 1, function () {
            cc.isValid(e) && e.destroy();
            n.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2ClearEffectBehavior.prototype.getAniCfg = function () {
        return {
            path: "spine/clear/gameplay_elimination_a",
            animName: "in"
        };
    };
    __decorate([
        mj.traitEvent("T2ClearEffBhv_playAni")
    ], Tile2ClearEffectBehavior.prototype, "playAni", null);
    __decorate([
        mj.traitEvent("T2ClearEffBhv_getAniCfg")
    ], Tile2ClearEffectBehavior.prototype, "getAniCfg", null);
    return Tile2ClearEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ClearEffectBehavior = Tile2ClearEffectBehavior;

cc._RF.pop();