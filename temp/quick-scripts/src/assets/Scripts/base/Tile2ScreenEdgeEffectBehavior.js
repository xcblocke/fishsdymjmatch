"use strict";
cc._RF.push(module, '8812fZchx9AnaU8mmm0VbNi', 'Tile2ScreenEdgeEffectBehavior');
// Scripts/base/Tile2ScreenEdgeEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenEdgeEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2ScreenEdgeEffectItem_1 = require("../items/Tile2ScreenEdgeEffectItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var p = {
    5: 1,
    15: 2,
    30: 3
};
var Tile2ScreenEdgeEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScreenEdgeEffectBehavior, _super);
    function Tile2ScreenEdgeEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScreenEdgeEffectBehavior.clearParticles = function (e) {
        if (cc.isValid(e)) {
            var t = e.getChildByName("__comboEdgeParticles__");
            t && cc.isValid(t) && t.destroy();
        }
    };
    Tile2ScreenEdgeEffectBehavior.prototype.isSlot4 = function () {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4;
    };
    Tile2ScreenEdgeEffectBehavior.prototype.start = function (e) {
        var o;
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        var n = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.effectNode;
        if (cc.isValid(n))
            if (this.isSlot4())
                this.handleSlot4Effect(e, n);
            else if (e.data.isClear)
                Tile2ScreenEdgeEffectBehavior.clearParticles(n);
            else {
                var i = this.getStage(e.data.comboNum);
                i >= 4 && this.handleSlot4Effect(e, n);
                if (i && !(i >= 4)) {
                    Tile2ScreenEdgeEffectBehavior.clearParticles(n);
                    var r = cc.v2(-n.width / 2, n.height / 2), a = cc.v2(n.width / 2, n.height / 2);
                    e.data.skipBurst || this.createBurstSpines(n, i, r, a);
                    this.createParticleSpines(n, i, r, a);
                }
            }
    };
    Tile2ScreenEdgeEffectBehavior.prototype.getStage = function (e) {
        return p[e];
    };
    Tile2ScreenEdgeEffectBehavior.prototype.handleSlot4Effect = function (e, t) {
        e.data.isClear || this.createSlot4Item(t);
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createSlot4Item = function (e) {
        Tile2ScreenEdgeEffectItem_1.default.create().then(function (t) {
            if (t && cc.isValid(e)) {
                t.node.parent = e;
                t.playAnimation(function () {
                    cc.isValid(t.node) && t.node.destroy();
                });
            }
        });
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createBurstSpines = function (e, t, o, n) {
        var i = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "a", 1, null, true);
        i.node.parent = e;
        i.node.setPosition(o.x, o.y);
        var r = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "b", 1, null, true);
        r.node.parent = e;
        r.node.setPosition(n.x, n.y);
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createParticleSpines = function (e, t, o, n) {
        var i = new cc.Node("__comboEdgeParticles__");
        i.parent = e;
        var r = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "a", -1, null, false);
        r.node.parent = i;
        r.node.setPosition(o.x, o.y);
        var l = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "b", -1, null, false);
        l.node.parent = i;
        l.node.setPosition(n.x, n.y);
    };
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_isSlot4")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "isSlot4", null);
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_start")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_getStage")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "getStage", null);
    return Tile2ScreenEdgeEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScreenEdgeEffectBehavior = Tile2ScreenEdgeEffectBehavior;

cc._RF.pop();