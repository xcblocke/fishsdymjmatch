"use strict";
cc._RF.push(module, '16347Gp7v9EgqMnF7SYFtQY', 'BehaviorContext');
// Scripts/core/view/behaviors/context/BehaviorContext.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorContext = void 0;
var BaseContext_1 = require("../../../simulator/context/BaseContext");
var RandomGenerator_1 = require("../../../simulator/structures/RandomGenerator");
var BehaviorContext = /** @class */ (function (_super) {
    __extends(BehaviorContext, _super);
    function BehaviorContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._layoutScale = 1;
        _this._tileNodeMap = new Map();
        _this._lastCollisionWorldPos = null;
        _this._autoMergeTimerHandles = new Set();
        _this.applauseAudioId = null;
        _this._collectTargetPositions = new Map();
        _this._collectTargetItems = new Map();
        return _this;
    }
    Object.defineProperty(BehaviorContext.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "gameView", {
        get: function () {
            return this._gameView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "gameCtr", {
        get: function () {
            return this.gameView.delegate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "layoutScale", {
        get: function () {
            return this._layoutScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "randomGenerator", {
        get: function () {
            this._randomGenerator || (this._randomGenerator = new RandomGenerator_1.RandomGenerator());
            return this._randomGenerator;
        },
        enumerable: false,
        configurable: true
    });
    BehaviorContext.prototype.getTile2SlotType = function () {
        return this.gameView.getTile2SlotType();
    };
    BehaviorContext.prototype.setLayoutScale = function (e) {
        this._layoutScale = e;
    };
    BehaviorContext.prototype.getTileNodeWorldPosition = function (e) {
        var t, o = null === (t = this.getTileMapObject()) || void 0 === t ? void 0 : t.getTileObject(e);
        if (!o)
            return cc.v2(0, 0);
        var n = o.getPosition();
        return this.getTileNodeManager().getFirstLayer().convertToWorldSpaceAR(n);
    };
    BehaviorContext.prototype.getTileNodeMap = function () {
        return this._tileNodeMap;
    };
    BehaviorContext.prototype.setTileNodeMap = function (e) {
        this._tileNodeMap = e;
    };
    BehaviorContext.prototype.setTileMapObject = function (e) {
        this._tileMapObject = e;
    };
    BehaviorContext.prototype.getTileMapObject = function () {
        return this._tileMapObject;
    };
    BehaviorContext.prototype.setTileNodeManager = function (e) {
        this._tileNodeManager = e;
    };
    BehaviorContext.prototype.getTileNodeManager = function () {
        return this._tileNodeManager;
    };
    BehaviorContext.prototype.getTileNodeByTileId = function (e) {
        var t;
        return null === (t = this._tileNodeMap) || void 0 === t ? void 0 : t.get(e);
    };
    BehaviorContext.prototype.removeTileNodeByTileIds = function (e) {
        var t = this;
        e.forEach(function (e) {
            var o, n, i = t._tileNodeMap.get(e);
            if (i) {
                i.clear();
                var r = null === (o = i.info) || void 0 === o ? void 0 : o.layerIndex;
                r >= 0 && (null === (n = t.getTileNodeManager().getSameLayerMap(r)) || void 0 === n || n.delete(e));
            }
            t._tileNodeMap.delete(e);
        });
    };
    BehaviorContext.prototype.removeTileNodeByTileId = function (e) {
        var t, o, n = this._tileNodeMap.get(e);
        if (n) {
            n.stopAllAnimation();
            n.clear();
            var i = null === (t = n.info) || void 0 === t ? void 0 : t.layerIndex;
            i >= 0 && (null === (o = this.getTileNodeManager().getSameLayerMap(i)) || void 0 === o || o.delete(e));
        }
        this._tileNodeMap.delete(e);
    };
    BehaviorContext.prototype.setLastCollisionWorldPos = function (e) {
        this._lastCollisionWorldPos = e ? cc.v3(e.x, e.y, e.z || 0) : null;
    };
    BehaviorContext.prototype.getLastCollisionWorldPos = function () {
        return this._lastCollisionWorldPos;
    };
    BehaviorContext.prototype.registerAutoMergeTimer = function (e) {
        this._autoMergeTimerHandles.add(e);
    };
    BehaviorContext.prototype.clearAutoMergeTimers = function () {
        var e = this;
        if (0 !== this._autoMergeTimerHandles.size) {
            this._autoMergeTimerHandles.forEach(function (t) {
                var o;
                null === (o = e.gameView.timerComponent) || void 0 === o || o.clearTimer(t);
            });
            this._autoMergeTimerHandles.clear();
        }
    };
    BehaviorContext.prototype.hasAutoMergeTimers = function () {
        return this._autoMergeTimerHandles.size > 0;
    };
    BehaviorContext.prototype.setCollectTargetPosition = function (e, t) {
        this._collectTargetPositions.set(e, cc.v3(t.x, t.y, t.z || 0));
    };
    BehaviorContext.prototype.getCollectTargetPosition = function (e) {
        return this._collectTargetPositions.get(e) || null;
    };
    BehaviorContext.prototype.getAllCollectTargetPositions = function () {
        return this._collectTargetPositions;
    };
    BehaviorContext.prototype.clearCollectTargetPositions = function () {
        this._collectTargetPositions.clear();
    };
    BehaviorContext.prototype.registerCollectTargetItem = function (e, t) {
        this._collectTargetItems.set(e, t);
    };
    BehaviorContext.prototype.getCollectTargetItem = function (e) {
        return this._collectTargetItems.get(e) || null;
    };
    BehaviorContext.prototype.getAllCollectTargetItems = function () {
        return this._collectTargetItems;
    };
    BehaviorContext.prototype.clearCollectTargetItems = function () {
        this._collectTargetItems.clear();
    };
    return BehaviorContext;
}(BaseContext_1.BaseContext));
exports.BehaviorContext = BehaviorContext;

cc._RF.pop();