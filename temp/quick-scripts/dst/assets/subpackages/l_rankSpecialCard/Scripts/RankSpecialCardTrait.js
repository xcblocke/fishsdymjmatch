
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankSpecialCard/Scripts/RankSpecialCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e104DcnGlMerP1EYS/+Chj', 'RankSpecialCardTrait');
// subpackages/l_rankSpecialCard/Scripts/RankSpecialCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankSpecialCardTrait = /** @class */ (function (_super) {
    __extends(RankSpecialCardTrait, _super);
    function RankSpecialCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankCollectCard = null;
        return _this;
    }
    RankSpecialCardTrait_1 = RankSpecialCardTrait;
    RankSpecialCardTrait.prototype.onRankColCard_initUI = function (t, e) {
        this._rankCollectCard = t.ins;
        e();
    };
    RankSpecialCardTrait.prototype.onRankColCard_clearNode = function (t, e) {
        this._rankCollectCard = null;
        e();
    };
    RankSpecialCardTrait.prototype.onRankTrait_chkSpCard = function (t, e) {
        var r, o, n = Array.isArray(null === (r = t.args) || void 0 === r ? void 0 : r[0]) ? t.args[0] : [], i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
        this.checkSpecialCard(n, i);
    };
    RankSpecialCardTrait.prototype.checkRankColCardValid = function () {
        return this._rankCollectCard && cc.isValid(this._rankCollectCard.node);
    };
    RankSpecialCardTrait.prototype.showRankCollectCard = function () {
        if (!this.checkRankColCardValid())
            return false;
        if (this._rankCollectCard.node.active)
            return true;
        this._rankCollectCard.setVisible(true);
        "function" == typeof this._rankCollectCard.startShowAnimation && this._rankCollectCard.startShowAnimation();
        return true;
    };
    RankSpecialCardTrait.prototype.isSpecialCard = function (t) {
        var e, r, o = null === (e = t.args) || void 0 === e ? void 0 : e[0], n = null === (r = t.args) || void 0 === r ? void 0 : r[1];
        if (!o || !n)
            return false;
        var i = t.ins.context.getTileNodeMap(), a = null == i ? void 0 : i.get(o);
        return !!(a && a.info && a.info.tileObject) && !!(a.info.tileObject.type == TileTypeEnum_1.ETileType.RankCard);
    };
    RankSpecialCardTrait.prototype.getRankModel = function () {
        var t = mj.getClassByName("RankModel");
        return t ? t.getInstance() : null;
    };
    RankSpecialCardTrait.prototype.onClearEffBhv_playCollision = function (t, e) {
        var r = this.getRankModel();
        if (r) {
            if (r.hasOpeningActivity()) {
                if (this.isSpecialCard(t)) {
                    e({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                    var o = t.ins;
                    o && "function" == typeof o.finish && o.finish();
                    this.checkSpecialCard(null, o.context);
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    RankSpecialCardTrait.prototype.checkSpecialCard = function (t, e) {
        var r = this.getRankModel();
        if (r) {
            r.getLevelCollectCount();
            r.addLevelCollectCount(2);
            r.getLevelCollectCount();
            if (this.showRankCollectCard()) {
                "function" == typeof this._rankCollectCard.addPendingCard && this._rankCollectCard.addPendingCard(2);
                var o = e.getLastCollisionWorldPos();
                if (o) {
                    var n = this._rankCollectCard.getCardWorldPosition();
                    n && this.showColEff(o, n, t, e);
                }
            }
        }
    };
    RankSpecialCardTrait.prototype.showColEff = function (t, e, o, n) {
        var i = this;
        try {
            var a = n.gameView;
            if (!cc.isValid(a) || !cc.isValid(a.nodeTopEffectRoot))
                return;
            var l = mj.getClassByName("RankSpecialCardEffect");
            if (!l)
                return;
            l.createUI(l.getUrl()).then(function (r) {
                var n, l;
                if (cc.isValid(r))
                    if (a && cc.isValid(a.nodeTopEffectRoot) && (null === (l = null === (n = i._rankCollectCard) || void 0 === n ? void 0 : n.node) || void 0 === l ? void 0 : l.activeInHierarchy)) {
                        a.nodeTopEffectRoot.addChild(r);
                        var c = a.nodeTopEffectRoot.convertToNodeSpaceAR(t);
                        r.position = cc.v3(c.x, c.y, 0);
                        var s = r.getComponent("RankSpecialCardEffect"), d = true;
                        if (s && o && o.length >= 2) {
                            s.updatePos(o);
                            d = false;
                        }
                        s.refreshCards().then(function () {
                            if (d) {
                                null == s || s.resetCardPositions();
                                null == s || s.playCollisionAndSeparation();
                            }
                        }).then(function () {
                            var t, o;
                            if (null === (o = null === (t = i._rankCollectCard) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.activeInHierarchy) {
                                null == s || s.playEffect(e, d, i._rankCollectCard.node, function () {
                                    cc.isValid(r) && r.destroy();
                                });
                            }
                            else {
                                null == r || r.destroy();
                            }
                        });
                    }
                    else
                        r.destroy();
            });
        }
        catch (t) {
            console.error("[" + RankSpecialCardTrait_1.traitKey + "] 创建特效失败: " + t.message);
        }
    };
    var RankSpecialCardTrait_1;
    RankSpecialCardTrait.traitKey = "RankSpecialCard";
    __decorate([
        mj.traitEvent("RkSpCardTrait_showColEff")
    ], RankSpecialCardTrait.prototype, "showColEff", null);
    RankSpecialCardTrait = RankSpecialCardTrait_1 = __decorate([
        mj.trait,
        mj.class("RankSpecialCardTrait")
    ], RankSpecialCardTrait);
    return RankSpecialCardTrait;
}(Trait_1.default));
exports.default = RankSpecialCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtTcGVjaWFsQ2FyZC9TY3JpcHRzL1JhbmtTcGVjaWFsQ2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsaUZBQTZFO0FBRzdFO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBdUhDO1FBdEhDLHNCQUFnQixHQUFHLElBQUksQ0FBQzs7SUFzSDFCLENBQUM7NkJBdkhvQixvQkFBb0I7SUFHdkMsbURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUN6RixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUcsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsNENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFDcEMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBQ0QsMkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFDRCwwREFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUM7d0JBQ0EsT0FBTyxFQUFFLElBQUk7d0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07cUJBQzNDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNkLENBQUMsSUFBSSxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3hDOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtnQkFDOUIsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ3JELENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFBRSxPQUFPO1lBQy9ELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQ2YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7d0JBQ2xNLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxFQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZixDQUFDLEdBQUcsS0FBSyxDQUFDO3lCQUNYO3dCQUNELENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxFQUFFO2dDQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0NBQ3BDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUM7NkJBQzdDO3dCQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDTixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ1QsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7Z0NBQ3JJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7b0NBQ3ZELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dDQUMvQixDQUFDLENBQUMsQ0FBQzs2QkFDSjtpQ0FBTTtnQ0FDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFDMUI7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7O3dCQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxzQkFBb0IsQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvRTtJQUNILENBQUM7O0lBcEhNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUE2RXBDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzswREF3Q3pDO0lBdEhrQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBdUh4QztJQUFELDJCQUFDO0NBdkhELEFBdUhDLENBdkhpRCxlQUFLLEdBdUh0RDtrQkF2SG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rU3BlY2lhbENhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1NwZWNpYWxDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yYW5rQ29sbGVjdENhcmQgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtTcGVjaWFsQ2FyZFwiO1xuICBvblJhbmtDb2xDYXJkX2luaXRVSSh0LCBlKSB7XG4gICAgdGhpcy5fcmFua0NvbGxlY3RDYXJkID0gdC5pbnM7XG4gICAgZSgpO1xuICB9XG4gIG9uUmFua0NvbENhcmRfY2xlYXJOb2RlKHQsIGUpIHtcbiAgICB0aGlzLl9yYW5rQ29sbGVjdENhcmQgPSBudWxsO1xuICAgIGUoKTtcbiAgfVxuICBvblJhbmtUcmFpdF9jaGtTcENhcmQodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIG4gPSBBcnJheS5pc0FycmF5KG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdKSA/IHQuYXJnc1swXSA6IFtdLFxuICAgICAgaSA9IG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzFdO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICAgIHRoaXMuY2hlY2tTcGVjaWFsQ2FyZChuLCBpKTtcbiAgfVxuICBjaGVja1JhbmtDb2xDYXJkVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmtDb2xsZWN0Q2FyZCAmJiBjYy5pc1ZhbGlkKHRoaXMuX3JhbmtDb2xsZWN0Q2FyZC5ub2RlKTtcbiAgfVxuICBzaG93UmFua0NvbGxlY3RDYXJkKCkge1xuICAgIGlmICghdGhpcy5jaGVja1JhbmtDb2xDYXJkVmFsaWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLl9yYW5rQ29sbGVjdENhcmQubm9kZS5hY3RpdmUpIHJldHVybiB0cnVlO1xuICAgIHRoaXMuX3JhbmtDb2xsZWN0Q2FyZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5fcmFua0NvbGxlY3RDYXJkLnN0YXJ0U2hvd0FuaW1hdGlvbiAmJiB0aGlzLl9yYW5rQ29sbGVjdENhcmQuc3RhcnRTaG93QW5pbWF0aW9uKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNTcGVjaWFsQ2FyZCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbyA9IG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdLFxuICAgICAgbiA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzFdO1xuICAgIGlmICghbyB8fCAhbikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gdC5pbnMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLFxuICAgICAgYSA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZ2V0KG8pO1xuICAgIHJldHVybiAhIShhICYmIGEuaW5mbyAmJiBhLmluZm8udGlsZU9iamVjdCkgJiYgISEoYS5pbmZvLnRpbGVPYmplY3QudHlwZSA9PSBFVGlsZVR5cGUuUmFua0NhcmQpO1xuICB9XG4gIGdldFJhbmtNb2RlbCgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIHJldHVybiB0ID8gdC5nZXRJbnN0YW5jZSgpIDogbnVsbDtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X3BsYXlDb2xsaXNpb24odCwgZSkge1xuICAgIHZhciByID0gdGhpcy5nZXRSYW5rTW9kZWwoKTtcbiAgICBpZiAocikge1xuICAgICAgaWYgKHIuaGFzT3BlbmluZ0FjdGl2aXR5KCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTcGVjaWFsQ2FyZCh0KSkge1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBvID0gdC5pbnM7XG4gICAgICAgICAgbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG8uZmluaXNoICYmIG8uZmluaXNoKCk7XG4gICAgICAgICAgdGhpcy5jaGVja1NwZWNpYWxDYXJkKG51bGwsIG8uY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgY2hlY2tTcGVjaWFsQ2FyZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldFJhbmtNb2RlbCgpO1xuICAgIGlmIChyKSB7XG4gICAgICByLmdldExldmVsQ29sbGVjdENvdW50KCk7XG4gICAgICByLmFkZExldmVsQ29sbGVjdENvdW50KDIpO1xuICAgICAgci5nZXRMZXZlbENvbGxlY3RDb3VudCgpO1xuICAgICAgaWYgKHRoaXMuc2hvd1JhbmtDb2xsZWN0Q2FyZCgpKSB7XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5fcmFua0NvbGxlY3RDYXJkLmFkZFBlbmRpbmdDYXJkICYmIHRoaXMuX3JhbmtDb2xsZWN0Q2FyZC5hZGRQZW5kaW5nQ2FyZCgyKTtcbiAgICAgICAgdmFyIG8gPSBlLmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpO1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgIHZhciBuID0gdGhpcy5fcmFua0NvbGxlY3RDYXJkLmdldENhcmRXb3JsZFBvc2l0aW9uKCk7XG4gICAgICAgICAgbiAmJiB0aGlzLnNob3dDb2xFZmYobywgbiwgdCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa1NwQ2FyZFRyYWl0X3Nob3dDb2xFZmZcIilcbiAgc2hvd0NvbEVmZih0LCBlLCBvLCBuKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG4uZ2FtZVZpZXc7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQoYSkgfHwgIWNjLmlzVmFsaWQoYS5ub2RlVG9wRWZmZWN0Um9vdCkpIHJldHVybjtcbiAgICAgIHZhciBsID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rU3BlY2lhbENhcmRFZmZlY3RcIik7XG4gICAgICBpZiAoIWwpIHJldHVybjtcbiAgICAgIGwuY3JlYXRlVUkobC5nZXRVcmwoKSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgbiwgbDtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocikpIGlmIChhICYmIGNjLmlzVmFsaWQoYS5ub2RlVG9wRWZmZWN0Um9vdCkgJiYgKG51bGwgPT09IChsID0gbnVsbCA9PT0gKG4gPSBpLl9yYW5rQ29sbGVjdENhcmQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubm9kZSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5hY3RpdmVJbkhpZXJhcmNoeSkpIHtcbiAgICAgICAgICBhLm5vZGVUb3BFZmZlY3RSb290LmFkZENoaWxkKHIpO1xuICAgICAgICAgIHZhciBjID0gYS5ub2RlVG9wRWZmZWN0Um9vdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgICByLnBvc2l0aW9uID0gY2MudjMoYy54LCBjLnksIDApO1xuICAgICAgICAgIHZhciBzID0gci5nZXRDb21wb25lbnQoXCJSYW5rU3BlY2lhbENhcmRFZmZlY3RcIiksXG4gICAgICAgICAgICBkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocyAmJiBvICYmIG8ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIHMudXBkYXRlUG9zKG8pO1xuICAgICAgICAgICAgZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzLnJlZnJlc2hDYXJkcygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgbnVsbCA9PSBzIHx8IHMucmVzZXRDYXJkUG9zaXRpb25zKCk7XG4gICAgICAgICAgICAgIG51bGwgPT0gcyB8fCBzLnBsYXlDb2xsaXNpb25BbmRTZXBhcmF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCwgbztcbiAgICAgICAgICAgIGlmIChudWxsID09PSAobyA9IG51bGwgPT09ICh0ID0gaS5fcmFua0NvbGxlY3RDYXJkKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5vZGUpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgICAgICAgbnVsbCA9PSBzIHx8IHMucGxheUVmZmVjdChlLCBkLCBpLl9yYW5rQ29sbGVjdENhcmQubm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmlzVmFsaWQocikgJiYgci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbnVsbCA9PSByIHx8IHIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Ugci5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua1NwZWNpYWxDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yib5bu654m55pWI5aSx6LSlOiBcIiArIHQubWVzc2FnZSk7XG4gICAgfVxuICB9XG59Il19