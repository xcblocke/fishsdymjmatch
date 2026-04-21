"use strict";
cc._RF.push(module, 'b4c2d3dOC9CRarVZrYTHboO', 'AllClearBehavior');
// Scripts/AllClearBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var VibrateManager_1 = require("./gamePlay/base/vibrate/VibrateManager");
var AllClearBehavior = /** @class */ (function (_super) {
    __extends(AllClearBehavior, _super);
    function AllClearBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 12000;
        _this._effectId = 0;
        _this._allClearRemoveVibrateDone = false;
        _this._allClearRevealRollMaxWaitSec = 0.8;
        return _this;
    }
    AllClearBehavior.prototype.start = function (e) {
        if (this.shouldSkip())
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            this.context.gameView.setSwallowEventNodeActive(true);
            this.play(e);
        }
    };
    AllClearBehavior.prototype.play = function (e) {
        var t, o, n = e.data.effectId, i = null !== (t = e.data.tileIds) && void 0 !== t ? t : this._getAllTileIds(), r = null !== (o = e.data.isSkip) && void 0 !== o && o;
        this._effectId = n;
        this._allClearRemoveVibrateDone = false;
        this.playVibrateFullCombo();
        var a = AllClearStrategyRegistry_1.AllClearStrategyRegistry.getOrDefault(n);
        if (a) {
            var l = null;
            if (this.isPreFullCombo()) {
                l = 1 !== n ? AllClearStrategyRegistry_1.AllClearStrategyRegistry.get(1) : null;
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.FullCombo);
            }
            this._playViaStrategy(a, i, r, l);
        }
        else {
            this.context.gameView.setSwallowEventNodeActive(false);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    AllClearBehavior.prototype.isPreFullCombo = function () {
        return false;
    };
    AllClearBehavior.prototype.playVibrateFullCombo = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.RewardStrong, VibrateManager_1.EVibratePoint.Tile2FullCombo);
    };
    AllClearBehavior.prototype._playViaStrategy = function (e, t, o, n) {
        var i = this;
        return new Promise(function (o) {
            var a = i._buildContext(o);
            if (n) {
                var l = Object.assign(Object.assign({}, a), {
                    onComplete: function () {
                        i.playStrategy(e, t, a);
                    }
                });
                n.play(t, l);
            }
            else
                i.playStrategy(e, t, a);
        }).then(function () {
            i.context.gameView.setSwallowEventNodeActive(false);
            i.shouldSkipAutoMerge() || o || i.autoMerger();
            i.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    AllClearBehavior.prototype.playStrategy = function (e, t, o) {
        var n = this;
        e && this._revealAllClearBackRollCardsThen(t, function () {
            e.play(t, o);
            n.playAudio();
        });
    };
    AllClearBehavior.prototype._clearTile2LockDarkenForTile = function (e) {
        var t = this.context.getTileNodeMap().get(e);
        t && cc.isValid(t.tileNode) && t.tile2SetLockDarken(false, false);
    };
    AllClearBehavior.prototype._revealAllClearBackRollCardIfNeeded = function (e, t) {
        var o = this.context.getTileMapObject();
        if (o) {
            var n = o.getTileObject(e);
            if (n && n.isHasRollCard() && n.getIsBack()) {
                n.setIsBack(false);
                var i = this.context.getTileNodeMap().get(e);
                if (i && cc.isValid(i.tileNode)) {
                    i.tile2RevealRollCard(false, t);
                }
                else {
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    AllClearBehavior.prototype._revealAllClearBackRollCardsThen = function (e, t) {
        var o;
        if (e)
            for (var n = 0; n < e.length; n++)
                this._clearTile2LockDarkenForTile(e[n]);
        for (var i, r = 0, a = (i = false, function () {
            if (!i) {
                i = true;
                t();
            }
        }), l = function l() {
            --r <= 0 && a();
        }, s = 0; s < e.length; s++) {
            var c = this.context.getTileMapObject(), u = null == c ? void 0 : c.getTileObject(e[s]), p = this.context.getTileNodeMap().get(e[s]);
            u && u.isHasRollCard() && u.getIsBack() && p && cc.isValid(p.tileNode) && r++;
        }
        if (r <= 0 || 1 == this._effectId)
            a();
        else {
            null === (o = this.context.gameView.timerComponent) || void 0 === o || o.doOnce(this._allClearRevealRollMaxWaitSec, a);
            for (s = 0; s < e.length; s++)
                this._revealAllClearBackRollCardIfNeeded(e[s], l);
        }
    };
    AllClearBehavior.prototype._getAllTileIds = function () {
        return this.context.getTileMapObject().aliveTiles().map(function (e) {
            return e.id;
        });
    };
    AllClearBehavior.prototype._buildContext = function (e) {
        var t, o, n, i, r = this, a = this.context.gameView.nodeTopEffectRoot, c = function c() {
            var e, t;
            try {
                for (var o = __values(r.context.getTileNodeMap()), n = o.next(); !n.done; n = o.next()) {
                    var i = __read(n.value, 2)[1];
                    if ((null == i ? void 0 : i.tileObject) && !i.tileObject.getIsInSlotBar() && cc.isValid(i.cardNode))
                        return i.cardNode;
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    n && !n.done && (t = o.return) && t.call(o);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            return null;
        };
        return {
            effectNode: a,
            layoutScale: this.context.layoutScale,
            loadRes: function (e, t, o) {
                return r.context.gameCtr.loadRes(e, t, o);
            },
            getTileNodePos: function (e) {
                var t = r.context.getTileNodeMap().get(e);
                return t ? r._toLocalPos(t.cardNode, a) : null;
            },
            getReferenceBoardCardNode: c,
            cloneTileNode: function (e) {
                var t = r.context.getTileNodeMap().get(e);
                if (!t)
                    return null;
                var o = cc.instantiate(t.cardNode);
                t.tileObject.getIsInSlotBar() && IAllClearStrategy_1.applyAllClearSlotCardNodeScaleToBoard(o, t.cardNode, c());
                return o;
            },
            removeTileNode: function (e) {
                if (r._effectId >= 2 && r._effectId <= 8 && !r._allClearRemoveVibrateDone) {
                    r._allClearRemoveVibrateDone = true;
                    VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.RewardStrong);
                }
                r.context.removeTileNodeByTileId(e);
            },
            getTileObject: function (e) {
                var t = r.context.getTileNodeMap().get(e);
                return t ? t.info.tileObject : null;
            },
            getTileNode: function (e) {
                var t;
                return null !== (t = r.context.getTileNodeMap().get(e)) && void 0 !== t ? t : null;
            },
            getRandomIndexes: function (e) {
                return r.context.randomGenerator.shuffle(Array.from({
                    length: e
                }, function (e, t) {
                    return t;
                }));
            },
            getCardSpace: function () {
                return 0;
            },
            onShake: function () {
                return r.context.gameView.playShake();
            },
            onComplete: e,
            beamOriginWorld: (i = null !== (n = null === (o = null === (t = r.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem) || void 0 === o ? void 0 : o.node) && void 0 !== n ? n : null, i && cc.isValid(i) ? i.convertToWorldSpaceAR(cc.v2(0, 0)) : null)
        };
    };
    AllClearBehavior.prototype._toLocalPos = function (e, t) {
        var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y, 0);
    };
    AllClearBehavior.prototype.autoMerger = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2StartAutoMerge,
            type: "allClear"
        });
    };
    AllClearBehavior.prototype.playAudio = function () {
        var e = GameTypeEnums_1.EAudioID.AllClear;
        if (1 === this._effectId) {
            e = GameTypeEnums_1.EAudioID.FullCombo;
        }
        else {
            8 === this._effectId && (e = GameTypeEnums_1.EAudioID.AllClearGather);
        }
        mj.audioManager.playEffect(e);
    };
    AllClearBehavior.prototype.shouldSkip = function () {
        return false;
    };
    AllClearBehavior.prototype.shouldSkipAutoMerge = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("AllClearBhv_isPreFCb")
    ], AllClearBehavior.prototype, "isPreFullCombo", null);
    __decorate([
        mj.traitEvent("AllClearBhv_playAud")
    ], AllClearBehavior.prototype, "playAudio", null);
    __decorate([
        mj.traitEvent("AllClearBhv_skip")
    ], AllClearBehavior.prototype, "shouldSkip", null);
    __decorate([
        mj.traitEvent("AllClearBhv_skipMrg")
    ], AllClearBehavior.prototype, "shouldSkipAutoMerge", null);
    return AllClearBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AllClearBehavior = AllClearBehavior;

cc._RF.pop();