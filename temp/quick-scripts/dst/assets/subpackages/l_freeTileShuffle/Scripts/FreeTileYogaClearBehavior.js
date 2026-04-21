
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_freeTileShuffle/Scripts/FreeTileYogaClearBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZyZWVUaWxlU2h1ZmZsZS9TY3JpcHRzL0ZyZWVUaWxlWW9nYUNsZWFyQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBb0U7QUFDcEUsbUZBQWtHO0FBQ2xHLCtFQUEwRTtBQUMxRSw2RUFBNEU7QUFDNUUsMkVBQXNFO0FBQ3RFLHdGQUFxRztBQUNyRyxpRkFBNkU7QUFDN0UsMEZBQXFGO0FBQ3JGLHNGQUFpRjtBQUNqRixvRkFBbUY7QUFDbkYsMEVBQXFFO0FBQ3JFO0lBQStDLDZDQUFpQjtJQUFoRTtRQUFBLHFFQWtTQztRQWpTQyxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBZ1MzQixDQUFDO0lBL1JDLHlDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDUixDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNULElBQUk7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDN0Qs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QUFDO2lCQUNKO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDWixDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDM0I7YUFDRjs7Z0JBQU0sQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseURBQXFCLEdBQXJCO1FBQ0UsaUNBQWUsQ0FBQyxLQUFLLENBQUM7WUFDcEIsU0FBUyxFQUFFLDhCQUFjLENBQUMsY0FBYztZQUN4QyxJQUFJLEVBQUUsZUFBZTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQWxTQSxBQWtTQyxDQWxTOEMscUNBQWlCLEdBa1MvRDtBQWxTWSw4REFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSwgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVDb2xsZWN0RnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQ29sbGVjdEludGVyZmFjdCc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgWW9nYUNhcmRCZWhhdmlvciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvWW9nYUNhcmRCZWhhdmlvcic7XG5pbXBvcnQgeyBSZXNJZCwgRUF1ZGlvSUQsIE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVHJhdmVsR2FtZURhdGEnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBHb2FsQWNoaWV2ZUl0ZW0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9pdGVtcy9Hb2FsQWNoaWV2ZUl0ZW0nO1xuZXhwb3J0IGNsYXNzIEZyZWVUaWxlWW9nYUNsZWFyQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF9hbmltYXRpbmdDb3VudCA9IDA7XG4gIF9oYXNUcmlnZ2VyZWRXaW4gPSBmYWxzZTtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGksXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGwsXG4gICAgICBmLFxuICAgICAgdSA9IHRoaXMsXG4gICAgICBwID0gZS5kYXRhLnRpbGVJZHM7XG4gICAgaWYgKHAgJiYgMCAhPT0gcC5sZW5ndGgpIHtcbiAgICAgIHZhciBkID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICAgIGlmIChkKSB7XG4gICAgICAgIHZhciB5ID0gW10sXG4gICAgICAgICAgdiA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGcgPSBfX3ZhbHVlcyhwKSwgVCA9IGcubmV4dCgpOyAhVC5kb25lOyBUID0gZy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBtID0gVC52YWx1ZSxcbiAgICAgICAgICAgICAgXyA9IGQuZ2V0VGlsZU9iamVjdChtKTtcbiAgICAgICAgICAgIGlmIChfICYmIF8uaXNWYWxpZCAmJiBfLnJlc0lkID09PSBSZXNJZC5lbVlvZ2FDYXJkSWQpIHtcbiAgICAgICAgICAgICAgdi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aWxlSWQ6IG0sXG4gICAgICAgICAgICAgICAgdHlwZTogXy50eXBlLFxuICAgICAgICAgICAgICAgIGNhcmRJZDogXy5jYXJkSWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGQuY2xlYXJUaWxlKG0sIEVDb2xsZWN0RnJvbS5Gcm9tWW9nYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmIChyID0gZy5yZXR1cm4pICYmIHIuY2FsbChnKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeCA9IF9fdmFsdWVzKHYpLCBiID0geC5uZXh0KCk7ICFiLmRvbmU7IGIgPSB4Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIEMgPSBiLnZhbHVlLFxuICAgICAgICAgICAgICBTID0gbnVsbCA9PT0gKGYgPSBkLmNvbGxlY3RTeXN0ZW0pIHx8IHZvaWQgMCA9PT0gZiA/IHZvaWQgMCA6IGYuZ2V0Q29sbGVjdERldGFpbEJ5Q2FyZElkKEMudHlwZSwgQy5jYXJkSWQpO1xuICAgICAgICAgICAgUyAmJiB5LnB1c2goUyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYiAmJiAhYi5kb25lICYmIChvID0geC5yZXR1cm4pICYmIG8uY2FsbCh4KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9hbmltYXRpbmdDb3VudCA9IHYubGVuZ3RoO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciB3ID0gX192YWx1ZXModiksIE0gPSB3Lm5leHQoKTsgIU0uZG9uZTsgTSA9IHcubmV4dCgpKSB7XG4gICAgICAgICAgICAgIEMgPSBNLnZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLnBsYXlGbHlBbmltYXRpb24oQy50aWxlSWQsIEMudHlwZSwgQy5jYXJkSWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1Ll9hbmltYXRpbmdDb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmICh1Ll9hbmltYXRpbmdDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICB1LnVwZGF0ZUNvbGxlY3RUYXJnZXRVSSh5KTtcbiAgICAgICAgICAgICAgICAgIHUuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmIChsID0gdy5yZXR1cm4pICYmIGwuY2FsbCh3KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBwbGF5Rmx5QW5pbWF0aW9uKGUsIHQsIHIsIGkpIHtcbiAgICB2YXIgbyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChlKTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIGEgPSB0ICsgXCJfXCIgKyByLFxuICAgICAgICBzID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlV29ybGRQb3NpdGlvbihlKSxcbiAgICAgICAgYyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0VGFyZ2V0UG9zaXRpb24oYSk7XG4gICAgICBpZiAoIWMpIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcudG9wUm9vdE5vZGUucG9zaXRpb247XG4gICAgICAgIGMgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcudG9wUm9vdE5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihmKTtcbiAgICAgIH1cbiAgICAgIG8uaGlkZSgpO1xuICAgICAgdGhpcy5jb250ZXh0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZSk7XG4gICAgICB2YXIgcCA9IF9fcmVhZCh0aGlzLmdldEFuaW1QYXRoKCksIDIpLFxuICAgICAgICBkID0gcFswXSxcbiAgICAgICAgeSA9IHBbMV0sXG4gICAgICAgIHYgPSBCYXNlU3BpbmUuY3JlYXRlKHksIFwiaW5cIiwgMSwgbnVsbCwgZmFsc2UsIGQpO1xuICAgICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LmVmZmVjdE5vZGUuYWRkQ2hpbGQodi5ub2RlKTtcbiAgICAgIHZhciBnID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmVmZmVjdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocyksXG4gICAgICAgIFQgPSBuZXcgY2MuVmVjMyhnLngsIGcueSwgMCksXG4gICAgICAgIG0gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZWZmZWN0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjKSxcbiAgICAgICAgXyA9IG5ldyBjYy5WZWMzKGcueCwgZy55IC0gMjAwLCAwKTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNvbGxlY3Rpb25TaG93KTtcbiAgICAgIFlvZ2FDYXJkQmVoYXZpb3IucGxheVR3b1N0YWdlQW5pbWF0aW9uKHYubm9kZSwgVCwgXywgbSwgMC4xNSwgMC40NCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHYubm9kZSkgJiYgdi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGkoKTtcbiAgfVxuICBnZXRBbmltUGF0aCgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LmdhbWVDdHIuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICB2YXIgZSA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckpvdXJuZXkoKSxcbiAgICAgICAgdCA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldENvbmZpZyhlKTtcbiAgICAgIGlmICh0ICYmIHQueW9nYUFuaW0pIHtcbiAgICAgICAgdmFyIHIgPSB0LnlvZ2FBbmltLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgcmV0dXJuIDIgPT09IHIubGVuZ3RoID8gW3JbMF0sIFwic3BpbmUvXCIgKyByWzFdXSA6IFtcIm1haW5SZXNcIiwgXCJzcGluZS95b2dhL1wiICsgdC55b2dhQW5pbV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXCJtYWluUmVzXCIsIFwic3BpbmUveW9nYS9nYW1lcGxheV9vYnN0YWNsZVwiXTtcbiAgfVxuICB1cGRhdGVDb2xsZWN0VGFyZ2V0VUkoZSkge1xuICAgIHZhciB0LCByO1xuICAgIGlmICgwICE9PSBlLmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKGUpLCBvID0gaS5uZXh0KCk7ICFvLmRvbmU7IG8gPSBpLm5leHQoKSkge1xuICAgICAgICAgIHZhciBuID0gby52YWx1ZSxcbiAgICAgICAgICAgIGwgPSBuLnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCA/IFwiXCIgKyBuLnR5cGUgOiBuLnR5cGUgKyBcIl9cIiArIG4uY2FyZElkLFxuICAgICAgICAgICAgcyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0VGFyZ2V0SXRlbShsKTtcbiAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgcy51cGRhdGVEYXRhKG4pO1xuICAgICAgICAgICAgcy5wbGF5Q29sbGVjdEFuaW1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG8gJiYgIW8uZG9uZSAmJiAociA9IGkucmV0dXJuKSAmJiByLmNhbGwoaSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tVbmxvY2tlZFlvZ2FBbmRXaW4oKTtcbiAgICB9IGVsc2UgdGhpcy5jaGVja1VubG9ja2VkWW9nYUFuZFdpbigpO1xuICB9XG4gIGNoZWNrVW5sb2NrZWRZb2dhQW5kV2luKCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSBbXTtcbiAgICAgIGUudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKHIsIGkpIHtcbiAgICAgICAgci5pc1ZhbGlkICYmIHIucmVzSWQgPT09IFJlc0lkLmVtWW9nYUNhcmRJZCAmJiAoZS5pc0NhcmRMb2NrKHIpIHx8IHQucHVzaChpKSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jbGVhcllvZ2FUaWxlcyh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tBbmRUcmlnZ2VyV2luKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHRoaXMuY2hlY2tBbmRUcmlnZ2VyV2luKCk7XG4gIH1cbiAgY2xlYXJZb2dhVGlsZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGksXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgZiA9IHRoaXMsXG4gICAgICB1ID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICBpZiAodSkge1xuICAgICAgdmFyIHAgPSBbXSxcbiAgICAgICAgZCA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKGUpLCB2ID0geS5uZXh0KCk7ICF2LmRvbmU7IHYgPSB5Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBnID0gdi52YWx1ZSxcbiAgICAgICAgICAgIFQgPSB1LmdldFRpbGVPYmplY3QoZyk7XG4gICAgICAgICAgaWYgKFQgJiYgVC5pc1ZhbGlkICYmIFQucmVzSWQgPT09IFJlc0lkLmVtWW9nYUNhcmRJZCkge1xuICAgICAgICAgICAgZC5wdXNoKHtcbiAgICAgICAgICAgICAgdGlsZUlkOiBnLFxuICAgICAgICAgICAgICB0eXBlOiBULnR5cGUsXG4gICAgICAgICAgICAgIGNhcmRJZDogVC5jYXJkSWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdS5jbGVhclRpbGUoZywgRUNvbGxlY3RGcm9tLkZyb21Zb2dhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2ICYmICF2LmRvbmUgJiYgKHIgPSB5LnJldHVybikgJiYgci5jYWxsKHkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBtID0gX192YWx1ZXMoZCksIF8gPSBtLm5leHQoKTsgIV8uZG9uZTsgXyA9IG0ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHggPSBfLnZhbHVlLFxuICAgICAgICAgICAgYiA9IG51bGwgPT09IChzID0gdS5jb2xsZWN0U3lzdGVtKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmdldENvbGxlY3REZXRhaWxCeUNhcmRJZCh4LnR5cGUsIHguY2FyZElkKTtcbiAgICAgICAgICBiICYmIHAucHVzaChiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF8gJiYgIV8uZG9uZSAmJiAobyA9IG0ucmV0dXJuKSAmJiBvLmNhbGwobSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW5nQ291bnQgPSBkLmxlbmd0aDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBDID0gX192YWx1ZXMoZCksIFMgPSBDLm5leHQoKTsgIVMuZG9uZTsgUyA9IEMubmV4dCgpKSB7XG4gICAgICAgICAgICB4ID0gUy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucGxheUZseUFuaW1hdGlvbih4LnRpbGVJZCwgeC50eXBlLCB4LmNhcmRJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmLl9hbmltYXRpbmdDb3VudC0tO1xuICAgICAgICAgICAgICBmLl9hbmltYXRpbmdDb3VudCA8PSAwICYmIGYudXBkYXRlQ29sbGVjdFRhcmdldFVJKHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgUyAmJiAhUy5kb25lICYmIChsID0gQy5yZXR1cm4pICYmIGwuY2FsbChDKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5jaGVja0FuZFRyaWdnZXJXaW4oKTtcbiAgICB9IGVsc2UgdGhpcy5jaGVja0FuZFRyaWdnZXJXaW4oKTtcbiAgfVxuICBjaGVja0FuZFRyaWdnZXJXaW4oKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNUcmlnZ2VyZWRXaW4gJiYgdGhpcy5jb250ZXh0LmdhbWVDdHIuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICB2YXIgZSA9IFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCk7XG4gICAgICBpZiAoIWUgfHwgIWUuaXNBdXRvTWVyZ2luZygpKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgICByID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5jb2xsZWN0U3lzdGVtO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIGlmIChyLmlzQWxsQ29sbGVjdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc1RyaWdnZXJlZFdpbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgaSA9IFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgICBpICYmIGkuc2V0QXV0b01lcmdpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXlHb2FsQWNoaWV2ZUFuZFN0YXJ0QXV0b01lcmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlHb2FsQWNoaWV2ZUFuZFN0YXJ0QXV0b01lcmdlKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZWZmZWN0Tm9kZTtcbiAgICBHb2FsQWNoaWV2ZUl0ZW0uY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICBpZiAocikge1xuICAgICAgICByLnNldFBhcmVudCh0KTtcbiAgICAgICAgci5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICB2YXIgaSA9IHIuZ2V0Q29tcG9uZW50KEdvYWxBY2hpZXZlSXRlbSk7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgaS5wbGF5U291bmQoKTtcbiAgICAgICAgICBpLnBsYXlBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS50cmlnZ2VyU3RhcnRBdXRvTWVyZ2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByLmRlc3Ryb3koKTtcbiAgICAgICAgICBlLnRyaWdnZXJTdGFydEF1dG9NZXJnZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZS50cmlnZ2VyU3RhcnRBdXRvTWVyZ2UoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlLnRyaWdnZXJTdGFydEF1dG9NZXJnZSgpO1xuICAgIH0pO1xuICB9XG4gIHRyaWdnZXJTdGFydEF1dG9NZXJnZSgpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydEF1dG9NZXJnZSxcbiAgICAgIHR5cGU6IFwidHJhdmVsVmljdG9yeVwiXG4gICAgfSk7XG4gIH1cbn0iXX0=