
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_Match1PropTips/Scripts/Match1PropTipsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX01hdGNoMVByb3BUaXBzL1NjcmlwdHMvTWF0Y2gxUHJvcFRpcHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUVBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSw4RUFBNkU7QUFDN0UsOEVBQTZFO0FBQzdFLGdFQUEyRDtBQUczRDtJQUFpRCx1Q0FBSztJQUF0RDs7SUErRUEsQ0FBQztJQTdFQyxpREFBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsc0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFKLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFF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QUFDLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU87U0FDUjtJQUNILENBQUM7SUE3RU0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBK0V2QztJQUFELDBCQUFDO0NBL0VELEFBK0VDLENBL0VnRCxlQUFLLEdBK0VyRDtrQkEvRW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBNYXRjaDFQcm9wVGlwc0VmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvTWF0Y2gxUHJvcFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZU1hcFNpbXVsYXRvciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvb2JqZWN0cy9UaWxlTWFwU2ltdWxhdG9yJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGNoMVByb3BUaXBzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoMVByb3BUaXBzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0Y2gxUHJvcFRpcHNcIjtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFR2FtZUV2ZW50LkVmZmVjdF9DbGVhckFmdGVyXSA9IHRoaXMub25DbGVhckFmdGVyLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uSXB0RW50ZXJBbmlGaW5fZXhjdXRlKHQsIGUpIHtcbiAgICB2YXIgciwgaTtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB0LmlucyxcbiAgICAgIG4gPSBudWxsID09PSAoaSA9IG51bGwgPT09IChyID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwocik7XG4gICAgbiAmJiAxID09PSBuLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSAmJiB0aGlzLnB1c2hFZmZlY3QobywgXCJzdGFydFwiKTtcbiAgfVxuICBvbkNsZWFyQWZ0ZXIodCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIGkgPSBudWxsID09PSAociA9IG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwoZSk7XG4gICAgaSAmJiAoMSA9PT0gaS5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKCkgPyB0aGlzLnB1c2hFZmZlY3QodCwgXCJzdGFydFwiKSA6IHRoaXMucHVzaEVmZmVjdCh0LCBcInN0b3BcIikpO1xuICB9XG4gIG9uSXB0VGNoU3RhcnRfZXhlYyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMub25DbGVhckFmdGVyKHQuaW5zKTtcbiAgfVxuICBvbklwdEJhc2VfcHVzaENsckVmZih0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LmlucywgXCJzdG9wXCIpO1xuICB9XG4gIG9uSXB0U2V0THZfbmV3R0NvbXAodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodC5pbnMsIFwic3RvcFwiKTtcbiAgfVxuICBvbklwdFNodWZmbGVfZXhlYyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LmlucywgXCJzdG9wXCIpO1xuICAgIHRoaXMub25DbGVhckFmdGVyKHQuaW5zKTtcbiAgfVxuICBvbklwdEhpdFRpcHNfZXhlYyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LmlucywgXCJzdG9wXCIpO1xuICB9XG4gIHB1c2hFZmZlY3QodCwgZSkge1xuICAgIHZhciByLCBpO1xuICAgIGlmICh0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5wdXNoRWZmZWN0ICYmIChcInN0b3BcIiAhPSBlIHx8IFwic3RvcFwiICE9IHRoaXMuX2N1cnJBY3Rpb24pKSB7XG4gICAgICB2YXIgbyA9IFwic3RhcnRcIiA9PT0gZSA/IHRoaXMuY2hlY2tJc0RlYWRBZnRlckNsZWFyKHQpIDogdm9pZCAwLFxuICAgICAgICBuID0gXCJzdGFydFwiID09PSBlID8gTWF0aC5tYXgoMCwgTnVtYmVyKG51bGwgIT09IChpID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZGVsYXlUaW1lKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMTApKSA6IDAsXG4gICAgICAgIGEgPSBuZXcgTWF0Y2gxUHJvcFRpcHNFZmZlY3Qoe1xuICAgICAgICAgIGFjdGlvbjogZSxcbiAgICAgICAgICBkZWxheVRpbWU6IG4sXG4gICAgICAgICAgd2lsbEJlRGVhZDogb1xuICAgICAgICB9KTtcbiAgICAgIHQucHVzaEVmZmVjdChhLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgICB0aGlzLl9jdXJyQWN0aW9uID0gZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tJc0RlYWRBZnRlckNsZWFyKHQpIHtcbiAgICB2YXIgZSwgciwgaSwgbztcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSBudWxsID09PSAociA9IG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwoZSk7XG4gICAgICBpZiAoIW4pIHJldHVybjtcbiAgICAgIHZhciBhID0gbi5nZXRDYW5NYXRjaFRpbGVzSGludCgpLFxuICAgICAgICBjID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICAgIGlmICghYyB8fCBjLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgICAgIHZhciBzID0gbnVsbCA9PT0gKGkgPSBjWzBdKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmlkLFxuICAgICAgICBwID0gbnVsbCA9PT0gKG8gPSBjWzFdKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmlkO1xuICAgICAgaWYgKCFzIHx8ICFwKSByZXR1cm47XG4gICAgICB2YXIgbCA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKHQuZ2FtZUNvbnRleHQpLFxuICAgICAgICBmID0gbC50aWxlT2JqZWN0TWFwKCkuZ2V0KHMpLFxuICAgICAgICBoID0gbC50aWxlT2JqZWN0TWFwKCkuZ2V0KHApO1xuICAgICAgaWYgKCEoZiAmJiBoICYmIGYuaXNWYWxpZCAmJiBoLmlzVmFsaWQpKSByZXR1cm47XG4gICAgICBmLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIGguaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgbC5vbkNsZWFyKFtmLCBoXSk7XG4gICAgICBsLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgIHJldHVybiBsLmNoZWNrSXNEZWFkKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufSJdfQ==