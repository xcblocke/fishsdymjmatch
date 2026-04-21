"use strict";
cc._RF.push(module, 'ecf34ldQUlC9qfAxI8b2eIk', 'Match1PropTipsTrait');
// subpackages/l_Match1PropTips/Scripts/Match1PropTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Match1PropTipsEffect_1 = require("../../../Scripts/Match1PropTipsEffect");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Match1PropTipsTrait = /** @class */ (function (_super) {
    __extends(Match1PropTipsTrait, _super);
    function Match1PropTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Match1PropTipsTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_ClearAfter] = this.onClearAfter.bind(this);
        return _t;
    };
    Match1PropTipsTrait.prototype.onIptEnterAniFin_excute = function (t, e) {
        var r, i;
        e();
        var o = t.ins, n = null === (i = null === (r = null == o ? void 0 : o.gameContext) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === i ? void 0 : i.call(r);
        n && 1 === n.getCanMatchCardPairNum() && this.pushEffect(o, "start");
    };
    Match1PropTipsTrait.prototype.onClearAfter = function (t) {
        var e, r, i = null === (r = null === (e = null == t ? void 0 : t.gameContext) || void 0 === e ? void 0 : e.getTileMapObject) || void 0 === r ? void 0 : r.call(e);
        i && (1 === i.getCanMatchCardPairNum() ? this.pushEffect(t, "start") : this.pushEffect(t, "stop"));
    };
    Match1PropTipsTrait.prototype.onIptTchStart_exec = function (t, e) {
        e();
        this.onClearAfter(t.ins);
    };
    Match1PropTipsTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        e();
        this.pushEffect(t.ins, "stop");
    };
    Match1PropTipsTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        e();
        this.pushEffect(t.ins, "stop");
    };
    Match1PropTipsTrait.prototype.onIptShuffle_exec = function (t, e) {
        e();
        this.pushEffect(t.ins, "stop");
        this.onClearAfter(t.ins);
    };
    Match1PropTipsTrait.prototype.onIptHitTips_exec = function (t, e) {
        e();
        this.pushEffect(t.ins, "stop");
    };
    Match1PropTipsTrait.prototype.pushEffect = function (t, e) {
        var r, i;
        if (t && "function" == typeof t.pushEffect && ("stop" != e || "stop" != this._currAction)) {
            var o = "start" === e ? this.checkIsDeadAfterClear(t) : void 0, n = "start" === e ? Math.max(0, Number(null !== (i = null === (r = this._traitData) || void 0 === r ? void 0 : r.delayTime) && void 0 !== i ? i : 10)) : 0, a = new Match1PropTipsEffect_1.Match1PropTipsEffect({
                action: e,
                delayTime: n,
                willBeDead: o
            });
            t.pushEffect(a, BehaviorsEnum_1.EInsertType.Parallel);
            this._currAction = e;
        }
    };
    Match1PropTipsTrait.prototype.checkIsDeadAfterClear = function (t) {
        var e, r, i, o;
        try {
            var n = null === (r = null === (e = null == t ? void 0 : t.gameContext) || void 0 === e ? void 0 : e.getTileMapObject) || void 0 === r ? void 0 : r.call(e);
            if (!n)
                return;
            var a = n.getCanMatchTilesHint(), c = null == a ? void 0 : a[0];
            if (!c || c.length < 2)
                return;
            var s = null === (i = c[0]) || void 0 === i ? void 0 : i.id, p = null === (o = c[1]) || void 0 === o ? void 0 : o.id;
            if (!s || !p)
                return;
            var l = TileMapSimulator_1.TileMapSimulator.createSim(t.gameContext), f = l.tileObjectMap().get(s), h = l.tileObjectMap().get(p);
            if (!(f && h && f.isValid && h.isValid))
                return;
            f.isValid = false;
            h.isValid = false;
            l.onClear([f, h]);
            l.updateCanMatchTiles();
            return l.checkIsDead();
        }
        catch (t) {
            return;
        }
    };
    Match1PropTipsTrait.traitKey = "Match1PropTips";
    Match1PropTipsTrait = __decorate([
        mj.trait,
        mj.class("Match1PropTipsTrait")
    ], Match1PropTipsTrait);
    return Match1PropTipsTrait;
}(Trait_1.default));
exports.default = Match1PropTipsTrait;

cc._RF.pop();