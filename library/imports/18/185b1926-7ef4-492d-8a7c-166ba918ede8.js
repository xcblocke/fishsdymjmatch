"use strict";
cc._RF.push(module, '185b1kmfvRJLYp8FmupGO3o', 'Tile2FlowerClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var Tile2ClearEffectEffect_1 = require("../../../Scripts/Tile2ClearEffectEffect");
var Tile2FlowerClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerClearTrait, _super);
    function Tile2FlowerClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerClearTrait.prototype.getClearCondition = function () {
        return null;
    };
    Tile2FlowerClearTrait.prototype.onClearT2Hlp_newClrEffEff = function (t, e) {
        var r = this.createTile2ClearEffectEffect(t);
        if (r) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    Tile2FlowerClearTrait.prototype.onClearT4Hlp_newClrEffEff = function (t, e) {
        var r = this.createTile2ClearEffectEffect(t);
        if (r) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    Tile2FlowerClearTrait.prototype.createTile2ClearEffectEffect = function (t) {
        var e, r, o, i, n = this.getClearCondition();
        if (!n)
            return null;
        var l = null === (e = t.args) || void 0 === e ? void 0 : e[0], u = null === (r = t.args) || void 0 === r ? void 0 : r[1], f = null === (o = t.args) || void 0 === o ? void 0 : o[2];
        if (!l || !u || !f)
            return null;
        if (l && !CardUtil_1.default.isFlowerCardId(l.cardId))
            return null;
        var p = null === (i = t.ins._gameContext) || void 0 === i ? void 0 : i.tile2SlotBarData, s = f.slotBarSnapshotBefore, d = !s.includes(l.id) && !s.includes(u.id);
        if (n.notRightClearEnable && d)
            return null;
        var y = n.stepCount && n.stepCount > 0, _ = Math.max(p.getTileStep(l.id), p.getTileStep(u.id));
        if (y && _ < n.stepCount)
            return null;
        var C = new Tile2ClearEffectEffect_1.Tile2ClearEffectEffect({
            tileIds: [l.id, u.id],
            cardIds: [l.cardId, u.cardId]
        });
        n.notRightClearEnable && (C.data.isRightClear = false);
        C.data.noClearStep = y ? n.stepCount : 0;
        return C;
    };
    Tile2FlowerClearTrait.prototype.onFlowerCS_chkFlowerEff = function (t, e) {
        t.ins;
        var r, o, i, n, l, c = null === (r = t.args) || void 0 === r ? void 0 : r[0], u = true;
        if (CardUtil_1.default.isFlowerCardId(null === (i = null === (o = null == c ? void 0 : c.data) || void 0 === o ? void 0 : o.cardIds) || void 0 === i ? void 0 : i[0])) {
            var f = null === (n = c.data) || void 0 === n ? void 0 : n.noClearStep, p = null === (l = c.data) || void 0 === l ? void 0 : l.isRightClear, s = null != f, d = null != p;
            u = d && s ? !p && f >= 0 : d ? !p : !s || f >= 0;
        }
        else
            u = false;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: u
        });
    };
    Tile2FlowerClearTrait.traitKey = "Tile2FlowerClear";
    __decorate([
        mj.traitEvent("T2FlowerClr_clearCon")
    ], Tile2FlowerClearTrait.prototype, "getClearCondition", null);
    Tile2FlowerClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerClearTrait")
    ], Tile2FlowerClearTrait);
    return Tile2FlowerClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerClearTrait;

cc._RF.pop();