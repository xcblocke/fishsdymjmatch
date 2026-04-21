
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tipsPropClear/Scripts/TipsPropAutoClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66ce59QklZBp5lcZnuIP1i6', 'TipsPropAutoClearTrait');
// subpackages/l_tipsPropClear/Scripts/TipsPropAutoClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var TipsPropAutoClearTrait = /** @class */ (function (_super) {
    __extends(TipsPropAutoClearTrait, _super);
    function TipsPropAutoClearTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingAutoMerge = null;
        return _this;
    }
    TipsPropAutoClearTrait.prototype.onIptHitTips_findHint = function (e, t) {
        var i, r, n, o, a, c, d, p, f, v, h, g, m = Date.now(), _ = Math.max(0, Number(null !== (c = null === (a = this._traitData) || void 0 === a ? void 0 : a.timeoutMs) && void 0 !== c ? c : 50)), y = e.ins, T = null == y ? void 0 : y.gameContext, M = null === (d = e.args) || void 0 === d ? void 0 : d[0];
        if (T && M && 0 !== M.length) {
            var b = null === (p = T.getTileMapObject) || void 0 === p ? void 0 : p.call(T);
            if (b) {
                var A = b.getCanMatchCardPairNum();
                if (A < 2)
                    t();
                else {
                    var j = 0, w = [], I = [];
                    try {
                        for (var O = __values(M), x = O.next(); !x.done; x = O.next()) {
                            var C = x.value;
                            if (C && !(C.length < 2)) {
                                var P = C[0], k = C[1], S = ((null === (f = b.getAdjacentLockCards(P)) || void 0 === f ? void 0 : f.length) || 0) + ((null === (v = b.getAdjacentLockCards(k)) || void 0 === v ? void 0 : v.length) || 0);
                                I.push({
                                    tile1: P,
                                    tile2: k,
                                    score: S
                                });
                            }
                        }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            x && !x.done && (r = O.return) && r.call(O);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    if (0 !== I.length) {
                        I.sort(function (e, t) {
                            return t.score - e.score;
                        });
                        var G = Math.max(1, Number(null !== (g = null === (h = this._traitData) || void 0 === h ? void 0 : h.maxSimulate) && void 0 !== g ? g : 20)), E = I.slice(0, G);
                        try {
                            for (var N = __values(E), R = N.next(); !R.done; R = N.next()) {
                                var V = R.value;
                                if (Date.now() - m >= _)
                                    break;
                                var H = TileMapSimulator_1.TileMapSimulator.createSim(T), q = H.tileObjectMap().get(V.tile1.id), D = H.tileObjectMap().get(V.tile2.id);
                                if (q && D && q.isValid && D.isValid) {
                                    q.isValid = false;
                                    D.isValid = false;
                                    H.onClear([q, D]);
                                    H.updateCanMatchTiles();
                                    var B = H.getCanMatchCardPairNum();
                                    if (B > j) {
                                        j = B;
                                        w = [[V.tile1, V.tile2]];
                                    }
                                    else
                                        B === j && B > A && w.push([V.tile1, V.tile2]);
                                }
                            }
                        }
                        catch (e) {
                            n = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                R && !R.done && (o = N.return) && o.call(N);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                        if (0 !== w.length) {
                            var F = w[Math.floor(Math.random() * w.length)];
                            t({
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: F,
                                isBreak: true
                            });
                        }
                        else
                            t();
                    }
                    else
                        t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.prototype.onHitTipsBhv_trgHint = function (e, t) {
        var i, r, n, o, l = e.beforReturnVal || {}, a = l.tileNode1, u = l.tileNode2;
        if (a && u) {
            var c = null === (i = null == a ? void 0 : a.tileObject) || void 0 === i ? void 0 : i.id, s = null === (r = null == u ? void 0 : u.tileObject) || void 0 === r ? void 0 : r.id;
            if (c && s) {
                var d = e.ins, p = null == d ? void 0 : d.context;
                if (p) {
                    var f = null === (n = p.getTileMapObject) || void 0 === n ? void 0 : n.call(p), v = null === (o = p.getTileNodeManager) || void 0 === o ? void 0 : o.call(p);
                    if (f && v) {
                        var h = f.unselectAllTileIds();
                        h && h.length > 0 && h.forEach(function (e) {
                            var t = v.getTileNodeByTileId(e);
                            if (t) {
                                t.cancelSelected();
                                t.hidePropHint();
                                t.stopAllAnimation();
                            }
                        });
                    }
                }
                this._pendingAutoMerge = {
                    tileId1: c,
                    tileId2: s,
                    remain: 2
                };
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.prototype.onHintAnim_onEnd = function (e, t) {
        var i, r, n = null === (i = e.args) || void 0 === i ? void 0 : i[0], o = null === (r = null == n ? void 0 : n.tileObject) || void 0 === r ? void 0 : r.id;
        if (o && this._pendingAutoMerge) {
            if (o === this._pendingAutoMerge.tileId1 || o === this._pendingAutoMerge.tileId2) {
                this._pendingAutoMerge.remain -= 1;
                if (this._pendingAutoMerge.remain <= 0) {
                    var l = this._pendingAutoMerge, a = l.tileId1, u = l.tileId2;
                    this._pendingAutoMerge = null;
                    cc.isValid(n) && GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TipsPropAutoMerge,
                        tileId1: a,
                        tileId2: u
                    });
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.traitKey = "TipsPropAutoClear";
    TipsPropAutoClearTrait = __decorate([
        mj.trait,
        mj.class("TipsPropAutoClearTrait")
    ], TipsPropAutoClearTrait);
    return TipsPropAutoClearTrait;
}(Trait_1.default));
exports.default = TipsPropAutoClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpcHNQcm9wQ2xlYXIvU2NyaXB0cy9UaXBzUHJvcEF1dG9DbGVhclRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLG1GQUFtRjtBQUNuRiw4RUFBNkU7QUFDN0Usb0ZBQW1GO0FBR25GO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBb0tDO1FBbktDLHVCQUFpQixHQUFHLElBQUksQ0FBQzs7SUFtSzNCLENBQUM7SUFqS0Msc0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdEksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0QyxDQUFDLEdBQUcsSUFBSSxL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LENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksaUNBQWUsQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLFNBQVMsRUFBRSw4QkFBYyxDQUFDLGlCQUFpQjt3QkFDM0MsT0FBTyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLENBQUM7cUJBQ1gsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELENBQUMsRUFBRSxDQUFDO2FBQ0w7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBaktNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFGbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQW9LMUM7SUFBRCw2QkFBQztDQXBLRCxBQW9LQyxDQXBLbUQsZUFBSyxHQW9LeEQ7a0JBcEtvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IFRpbGVNYXBTaW11bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL29iamVjdHMvVGlsZU1hcFNpbXVsYXRvcic7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaXBzUHJvcEF1dG9DbGVhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzUHJvcEF1dG9DbGVhclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcGVuZGluZ0F1dG9NZXJnZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlwc1Byb3BBdXRvQ2xlYXJcIjtcbiAgb25JcHRIaXRUaXBzX2ZpbmRIaW50KGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBuLFxuICAgICAgbyxcbiAgICAgIGEsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIHAsXG4gICAgICBmLFxuICAgICAgdixcbiAgICAgIGgsXG4gICAgICBnLFxuICAgICAgbSA9IERhdGUubm93KCksXG4gICAgICBfID0gTWF0aC5tYXgoMCwgTnVtYmVyKG51bGwgIT09IChjID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEudGltZW91dE1zKSAmJiB2b2lkIDAgIT09IGMgPyBjIDogNTApKSxcbiAgICAgIHkgPSBlLmlucyxcbiAgICAgIFQgPSBudWxsID09IHkgPyB2b2lkIDAgOiB5LmdhbWVDb250ZXh0LFxuICAgICAgTSA9IG51bGwgPT09IChkID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IGQgPyB2b2lkIDAgOiBkWzBdO1xuICAgIGlmIChUICYmIE0gJiYgMCAhPT0gTS5sZW5ndGgpIHtcbiAgICAgIHZhciBiID0gbnVsbCA9PT0gKHAgPSBULmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gcCA/IHZvaWQgMCA6IHAuY2FsbChUKTtcbiAgICAgIGlmIChiKSB7XG4gICAgICAgIHZhciBBID0gYi5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKCk7XG4gICAgICAgIGlmIChBIDwgMikgdCgpO2Vsc2Uge1xuICAgICAgICAgIHZhciBqID0gMCxcbiAgICAgICAgICAgIHcgPSBbXSxcbiAgICAgICAgICAgIEkgPSBbXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgTyA9IF9fdmFsdWVzKE0pLCB4ID0gTy5uZXh0KCk7ICF4LmRvbmU7IHggPSBPLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgQyA9IHgudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChDICYmICEoQy5sZW5ndGggPCAyKSkge1xuICAgICAgICAgICAgICAgIHZhciBQID0gQ1swXSxcbiAgICAgICAgICAgICAgICAgIGsgPSBDWzFdLFxuICAgICAgICAgICAgICAgICAgUyA9ICgobnVsbCA9PT0gKGYgPSBiLmdldEFkamFjZW50TG9ja0NhcmRzKFApKSB8fCB2b2lkIDAgPT09IGYgPyB2b2lkIDAgOiBmLmxlbmd0aCkgfHwgMCkgKyAoKG51bGwgPT09ICh2ID0gYi5nZXRBZGphY2VudExvY2tDYXJkcyhrKSkgfHwgdm9pZCAwID09PSB2ID8gdm9pZCAwIDogdi5sZW5ndGgpIHx8IDApO1xuICAgICAgICAgICAgICAgIEkucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0aWxlMTogUCxcbiAgICAgICAgICAgICAgICAgIHRpbGUyOiBrLFxuICAgICAgICAgICAgICAgICAgc2NvcmU6IFNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB4ICYmICF4LmRvbmUgJiYgKHIgPSBPLnJldHVybikgJiYgci5jYWxsKE8pO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgwICE9PSBJLmxlbmd0aCkge1xuICAgICAgICAgICAgSS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0LnNjb3JlIC0gZS5zY29yZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIEcgPSBNYXRoLm1heCgxLCBOdW1iZXIobnVsbCAhPT0gKGcgPSBudWxsID09PSAoaCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBoID8gdm9pZCAwIDogaC5tYXhTaW11bGF0ZSkgJiYgdm9pZCAwICE9PSBnID8gZyA6IDIwKSksXG4gICAgICAgICAgICAgIEUgPSBJLnNsaWNlKDAsIEcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgTiA9IF9fdmFsdWVzKEUpLCBSID0gTi5uZXh0KCk7ICFSLmRvbmU7IFIgPSBOLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBWID0gUi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIG0gPj0gXykgYnJlYWs7XG4gICAgICAgICAgICAgICAgdmFyIEggPSBUaWxlTWFwU2ltdWxhdG9yLmNyZWF0ZVNpbShUKSxcbiAgICAgICAgICAgICAgICAgIHEgPSBILnRpbGVPYmplY3RNYXAoKS5nZXQoVi50aWxlMS5pZCksXG4gICAgICAgICAgICAgICAgICBEID0gSC50aWxlT2JqZWN0TWFwKCkuZ2V0KFYudGlsZTIuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChxICYmIEQgJiYgcS5pc1ZhbGlkICYmIEQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgcS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBELmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIEgub25DbGVhcihbcSwgRF0pO1xuICAgICAgICAgICAgICAgICAgSC51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgICAgICAgICAgICB2YXIgQiA9IEguZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKEIgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBCO1xuICAgICAgICAgICAgICAgICAgICB3ID0gW1tWLnRpbGUxLCBWLnRpbGUyXV07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgQiA9PT0gaiAmJiBCID4gQSAmJiB3LnB1c2goW1YudGlsZTEsIFYudGlsZTJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBSICYmICFSLmRvbmUgJiYgKG8gPSBOLnJldHVybikgJiYgby5jYWxsKE4pO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoMCAhPT0gdy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmFyIEYgPSB3W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHcubGVuZ3RoKV07XG4gICAgICAgICAgICAgIHQoe1xuICAgICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgICByZXR1cm5WYWw6IEYsXG4gICAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSGl0VGlwc0Jodl90cmdIaW50KGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBuLFxuICAgICAgbyxcbiAgICAgIGwgPSBlLmJlZm9yUmV0dXJuVmFsIHx8IHt9LFxuICAgICAgYSA9IGwudGlsZU5vZGUxLFxuICAgICAgdSA9IGwudGlsZU5vZGUyO1xuICAgIGlmIChhICYmIHUpIHtcbiAgICAgIHZhciBjID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaWQsXG4gICAgICAgIHMgPSBudWxsID09PSAociA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUudGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5pZDtcbiAgICAgIGlmIChjICYmIHMpIHtcbiAgICAgICAgdmFyIGQgPSBlLmlucyxcbiAgICAgICAgICBwID0gbnVsbCA9PSBkID8gdm9pZCAwIDogZC5jb250ZXh0O1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgIHZhciBmID0gbnVsbCA9PT0gKG4gPSBwLmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbChwKSxcbiAgICAgICAgICAgIHYgPSBudWxsID09PSAobyA9IHAuZ2V0VGlsZU5vZGVNYW5hZ2VyKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNhbGwocCk7XG4gICAgICAgICAgaWYgKGYgJiYgdikge1xuICAgICAgICAgICAgdmFyIGggPSBmLnVuc2VsZWN0QWxsVGlsZUlkcygpO1xuICAgICAgICAgICAgaCAmJiBoLmxlbmd0aCA+IDAgJiYgaC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gdi5nZXRUaWxlTm9kZUJ5VGlsZUlkKGUpO1xuICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHQuY2FuY2VsU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICB0LmhpZGVQcm9wSGludCgpO1xuICAgICAgICAgICAgICAgIHQuc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGVuZGluZ0F1dG9NZXJnZSA9IHtcbiAgICAgICAgICB0aWxlSWQxOiBjLFxuICAgICAgICAgIHRpbGVJZDI6IHMsXG4gICAgICAgICAgcmVtYWluOiAyXG4gICAgICAgIH07XG4gICAgICAgIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkhpbnRBbmltX29uRW5kKGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBuID0gbnVsbCA9PT0gKGkgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF0sXG4gICAgICBvID0gbnVsbCA9PT0gKHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaWQ7XG4gICAgaWYgKG8gJiYgdGhpcy5fcGVuZGluZ0F1dG9NZXJnZSkge1xuICAgICAgaWYgKG8gPT09IHRoaXMuX3BlbmRpbmdBdXRvTWVyZ2UudGlsZUlkMSB8fCBvID09PSB0aGlzLl9wZW5kaW5nQXV0b01lcmdlLnRpbGVJZDIpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0F1dG9NZXJnZS5yZW1haW4gLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdBdXRvTWVyZ2UucmVtYWluIDw9IDApIHtcbiAgICAgICAgICB2YXIgbCA9IHRoaXMuX3BlbmRpbmdBdXRvTWVyZ2UsXG4gICAgICAgICAgICBhID0gbC50aWxlSWQxLFxuICAgICAgICAgICAgdSA9IGwudGlsZUlkMjtcbiAgICAgICAgICB0aGlzLl9wZW5kaW5nQXV0b01lcmdlID0gbnVsbDtcbiAgICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpcHNQcm9wQXV0b01lcmdlLFxuICAgICAgICAgICAgdGlsZUlkMTogYSxcbiAgICAgICAgICAgIHRpbGVJZDI6IHVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=