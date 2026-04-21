"use strict";
cc._RF.push(module, '4c5a28ez5RGzLCshTVjKtk4', 'FreeTileYogaClearBehavior');
// subpackages/l_freeTileShuffle/Scripts/FreeTileYogaClearBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeTileYogaClearBehavior = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var CollectInterfact_1 = require("../../../Scripts/constant/CollectInterfact");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var YogaCardBehavior_1 = require("../../../Scripts/base/YogaCardBehavior");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GoalAchieveItem_1 = require("../../../Scripts/items/GoalAchieveItem");
var FreeTileYogaClearBehavior = /** @class */ (function (_super) {
    __extends(FreeTileYogaClearBehavior, _super);
    function FreeTileYogaClearBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animatingCount = 0;
        _this._hasTriggeredWin = false;
        return _this;
    }
    FreeTileYogaClearBehavior.prototype.start = function (e) {
        var t, r, i, o, n, l, f, u = this, p = e.data.tileIds;
        if (p && 0 !== p.length) {
            var d = this.context.getTileMapObject();
            if (d) {
                var y = [], v = [];
                try {
                    for (var g = __values(p), T = g.next(); !T.done; T = g.next()) {
                        var m = T.value, _ = d.getTileObject(m);
                        if (_ && _.isValid && _.resId === GameTypeEnums_1.ResId.emYogaCardId) {
                            v.push({
                                tileId: m,
                                type: _.type,
                                cardId: _.cardId
                            });
                            d.clearTile(m, CollectInterfact_1.ECollectFrom.FromYoga);
                        }
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        T && !T.done && (r = g.return) && r.call(g);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                try {
                    for (var x = __values(v), b = x.next(); !b.done; b = x.next()) {
                        var C = b.value, S = null === (f = d.collectSystem) || void 0 === f ? void 0 : f.getCollectDetailByCardId(C.type, C.cardId);
                        S && y.push(S);
                    }
                }
                catch (e) {
                    i = {
                        error: e
                    };
                }
                finally {
                    try {
                        b && !b.done && (o = x.return) && o.call(x);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
                if (v.length > 0) {
                    this._animatingCount = v.length;
                    try {
                        for (var w = __values(v), M = w.next(); !M.done; M = w.next()) {
                            C = M.value;
                            this.playFlyAnimation(C.tileId, C.type, C.cardId, function () {
                                u._animatingCount--;
                                if (u._animatingCount <= 0) {
                                    u.updateCollectTargetUI(y);
                                    u.finish(GameInputEnum_1.EBehaviorEnum.Success);
                                }
                            });
                        }
                    }
                    catch (e) {
                        n = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            M && !M.done && (l = w.return) && l.call(w);
                        }
                        finally {
                            if (n)
                                throw n.error;
                        }
                    }
                }
                else
                    this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    FreeTileYogaClearBehavior.prototype.playFlyAnimation = function (e, t, r, i) {
        var o = this.context.getTileNodeMap().get(e);
        if (o) {
            var a = t + "_" + r, s = this.context.getTileNodeWorldPosition(e), c = this.context.getCollectTargetPosition(a);
            if (!c) {
                var f = this.context.gameView.topRootNode.position;
                c = this.context.gameView.topRootNode.parent.convertToWorldSpaceAR(f);
            }
            o.hide();
            this.context.removeTileNodeByTileId(e);
            var p = __read(this.getAnimPath(), 2), d = p[0], y = p[1], v = BaseSpine_1.default.create(y, "in", 1, null, false, d);
            this.context.gameView.effectNode.addChild(v.node);
            var g = this.context.gameView.effectNode.convertToNodeSpaceAR(s), T = new cc.Vec3(g.x, g.y, 0), m = this.context.gameView.effectNode.convertToNodeSpaceAR(c), _ = new cc.Vec3(g.x, g.y - 200, 0);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.CollectionShow);
            YogaCardBehavior_1.default.playTwoStageAnimation(v.node, T, _, m, 0.15, 0.44, function () {
                cc.isValid(v.node) && v.node.destroy();
                i();
            });
        }
        else
            i();
    };
    FreeTileYogaClearBehavior.prototype.getAnimPath = function () {
        if (this.context.gameCtr.gameType === GameTypeEnums_1.MjGameType.Travel) {
            var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getConfig(e);
            if (t && t.yogaAnim) {
                var r = t.yogaAnim.split(":");
                return 2 === r.length ? [r[0], "spine/" + r[1]] : ["mainRes", "spine/yoga/" + t.yogaAnim];
            }
        }
        return ["mainRes", "spine/yoga/gameplay_obstacle"];
    };
    FreeTileYogaClearBehavior.prototype.updateCollectTargetUI = function (e) {
        var t, r;
        if (0 !== e.length) {
            try {
                for (var i = __values(e), o = i.next(); !o.done; o = i.next()) {
                    var n = o.value, l = n.type === TileTypeEnum_1.ETileType.RollCard ? "" + n.type : n.type + "_" + n.cardId, s = this.context.getCollectTargetItem(l);
                    if (s) {
                        s.updateData(n);
                        s.playCollectAnimation();
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.checkUnlockedYogaAndWin();
        }
        else
            this.checkUnlockedYogaAndWin();
    };
    FreeTileYogaClearBehavior.prototype.checkUnlockedYogaAndWin = function () {
        var e = this.context.getTileMapObject();
        if (e) {
            var t = [];
            e.tileObjectMap().forEach(function (r, i) {
                r.isValid && r.resId === GameTypeEnums_1.ResId.emYogaCardId && (e.isCardLock(r) || t.push(i));
            });
            if (t.length > 0) {
                this.clearYogaTiles(t);
            }
            else {
                this.checkAndTriggerWin();
            }
        }
        else
            this.checkAndTriggerWin();
    };
    FreeTileYogaClearBehavior.prototype.clearYogaTiles = function (e) {
        var t, r, i, o, n, l, s, f = this, u = this.context.getTileMapObject();
        if (u) {
            var p = [], d = [];
            try {
                for (var y = __values(e), v = y.next(); !v.done; v = y.next()) {
                    var g = v.value, T = u.getTileObject(g);
                    if (T && T.isValid && T.resId === GameTypeEnums_1.ResId.emYogaCardId) {
                        d.push({
                            tileId: g,
                            type: T.type,
                            cardId: T.cardId
                        });
                        u.clearTile(g, CollectInterfact_1.ECollectFrom.FromYoga);
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    v && !v.done && (r = y.return) && r.call(y);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            try {
                for (var m = __values(d), _ = m.next(); !_.done; _ = m.next()) {
                    var x = _.value, b = null === (s = u.collectSystem) || void 0 === s ? void 0 : s.getCollectDetailByCardId(x.type, x.cardId);
                    b && p.push(b);
                }
            }
            catch (e) {
                i = {
                    error: e
                };
            }
            finally {
                try {
                    _ && !_.done && (o = m.return) && o.call(m);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            if (d.length > 0) {
                this._animatingCount = d.length;
                try {
                    for (var C = __values(d), S = C.next(); !S.done; S = C.next()) {
                        x = S.value;
                        this.playFlyAnimation(x.tileId, x.type, x.cardId, function () {
                            f._animatingCount--;
                            f._animatingCount <= 0 && f.updateCollectTargetUI(p);
                        });
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        S && !S.done && (l = C.return) && l.call(C);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            }
            else
                this.checkAndTriggerWin();
        }
        else
            this.checkAndTriggerWin();
    };
    FreeTileYogaClearBehavior.prototype.checkAndTriggerWin = function () {
        if (!this._hasTriggeredWin && this.context.gameCtr.gameType === GameTypeEnums_1.MjGameType.Travel) {
            var e = TravelGameData_1.default.getInstance();
            if (!e || !e.isAutoMerging()) {
                var t = this.context.getTileMapObject(), r = null == t ? void 0 : t.collectSystem;
                if (r) {
                    if (r.isAllCollected()) {
                        this._hasTriggeredWin = true;
                        var i = TravelGameData_1.default.getInstance();
                        i && i.setAutoMerging(true);
                        this.playGoalAchieveAndStartAutoMerge();
                    }
                }
            }
        }
    };
    FreeTileYogaClearBehavior.prototype.playGoalAchieveAndStartAutoMerge = function () {
        var e = this, t = this.context.gameView.effectNode;
        GoalAchieveItem_1.default.createUI().then(function (r) {
            if (r) {
                r.setParent(t);
                r.position = cc.v3(0, 0, 0);
                var i = r.getComponent(GoalAchieveItem_1.default);
                if (i) {
                    i.playSound();
                    i.playAnimation(function () {
                        e.triggerStartAutoMerge();
                    });
                }
                else {
                    r.destroy();
                    e.triggerStartAutoMerge();
                }
            }
            else
                e.triggerStartAutoMerge();
        }).catch(function () {
            e.triggerStartAutoMerge();
        });
    };
    FreeTileYogaClearBehavior.prototype.triggerStartAutoMerge = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
            type: "travelVictory"
        });
    };
    return FreeTileYogaClearBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.FreeTileYogaClearBehavior = FreeTileYogaClearBehavior;

cc._RF.pop();