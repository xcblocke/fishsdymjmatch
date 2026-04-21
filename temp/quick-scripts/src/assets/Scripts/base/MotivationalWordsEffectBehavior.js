"use strict";
cc._RF.push(module, '1331a1WdE1E16VRBo4mJHkx', 'MotivationalWordsEffectBehavior');
// Scripts/base/MotivationalWordsEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var MotivationalWordsEffectBehavior = /** @class */ (function (_super) {
    __extends(MotivationalWordsEffectBehavior, _super);
    function MotivationalWordsEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsEffectBehavior.prototype.start = function (e) {
        var t = this.context.gameView.effectNode, o = this.context.gameView.gameObjectPool.get(this.getPoolName());
        if (o && cc.isValid(t)) {
            o.parent = t;
            o.setPosition(cc.v3(0, 0, 0));
            o.active = true;
            this.playAni(o, e);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MotivationalWordsEffectBehavior.prototype.playAni = function (e) {
        var t, o, n = this, i = null === (t = cc.find("leftNode/spin", e)) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton), r = null === (o = cc.find("rightNode/spin", e)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton);
        if (i && r) {
            var s = this.getEffectAnimationName();
            GameUtils_1.default.playSpine(i, s, false, function () {
                n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                n.context.gameView.gameObjectPool.push(n.getPoolName(), e);
            });
            GameUtils_1.default.playSpine(r, s, false, function () { });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MotivationalWordsEffectBehavior.prototype.getPoolName = function () {
        return enumRes_1.PoolName.MotivationalWordsEffect;
    };
    MotivationalWordsEffectBehavior.prototype.getEffectAnimationName = function () {
        return "in";
    };
    __decorate([
        mj.traitEvent("MotivWdsEff_playAni")
    ], MotivationalWordsEffectBehavior.prototype, "playAni", null);
    __decorate([
        mj.traitEvent("MotivWdsEff_poolName")
    ], MotivationalWordsEffectBehavior.prototype, "getPoolName", null);
    __decorate([
        mj.traitEvent("MotivWdsEff_getAni")
    ], MotivationalWordsEffectBehavior.prototype, "getEffectAnimationName", null);
    return MotivationalWordsEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = MotivationalWordsEffectBehavior;

cc._RF.pop();