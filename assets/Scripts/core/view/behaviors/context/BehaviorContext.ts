import { BaseContext } from '../../../simulator/context/BaseContext';
import { RandomGenerator } from '../../../simulator/structures/RandomGenerator';
export class BehaviorContext extends BaseContext {
  _layoutScale = 1;
  _tileNodeMap = new Map();
  _lastCollisionWorldPos = null;
  _autoMergeTimerHandles = new Set();
  applauseAudioId = null;
  _collectTargetPositions = new Map();
  _collectTargetItems = new Map();
  get gameType() {
    return this._gameType;
  }
  get gameView() {
    return this._gameView;
  }
  get gameCtr() {
    return this.gameView.delegate;
  }
  get layoutScale() {
    return this._layoutScale;
  }
  get randomGenerator() {
    this._randomGenerator || (this._randomGenerator = new RandomGenerator());
    return this._randomGenerator;
  }
  getTile2SlotType() {
    return this.gameView.getTile2SlotType();
  }
  setLayoutScale(e) {
    this._layoutScale = e;
  }
  getTileNodeWorldPosition(e) {
    var t,
      o = null === (t = this.getTileMapObject()) || void 0 === t ? void 0 : t.getTileObject(e);
    if (!o) return cc.v2(0, 0);
    var n = o.getPosition();
    return this.getTileNodeManager().getFirstLayer().convertToWorldSpaceAR(n);
  }
  getTileNodeMap() {
    return this._tileNodeMap;
  }
  setTileNodeMap(e) {
    this._tileNodeMap = e;
  }
  setTileMapObject(e) {
    this._tileMapObject = e;
  }
  getTileMapObject() {
    return this._tileMapObject;
  }
  setTileNodeManager(e) {
    this._tileNodeManager = e;
  }
  getTileNodeManager() {
    return this._tileNodeManager;
  }
  getTileNodeByTileId(e) {
    var t;
    return null === (t = this._tileNodeMap) || void 0 === t ? void 0 : t.get(e);
  }
  removeTileNodeByTileIds(e) {
    var t = this;
    e.forEach(function (e) {
      var o,
        n,
        i = t._tileNodeMap.get(e);
      if (i) {
        i.clear();
        var r = null === (o = i.info) || void 0 === o ? void 0 : o.layerIndex;
        r >= 0 && (null === (n = t.getTileNodeManager().getSameLayerMap(r)) || void 0 === n || n.delete(e));
      }
      t._tileNodeMap.delete(e);
    });
  }
  removeTileNodeByTileId(e) {
    var t,
      o,
      n = this._tileNodeMap.get(e);
    if (n) {
      n.stopAllAnimation();
      n.clear();
      var i = null === (t = n.info) || void 0 === t ? void 0 : t.layerIndex;
      i >= 0 && (null === (o = this.getTileNodeManager().getSameLayerMap(i)) || void 0 === o || o.delete(e));
    }
    this._tileNodeMap.delete(e);
  }
  setLastCollisionWorldPos(e) {
    this._lastCollisionWorldPos = e ? cc.v3(e.x, e.y, e.z || 0) : null;
  }
  getLastCollisionWorldPos() {
    return this._lastCollisionWorldPos;
  }
  registerAutoMergeTimer(e) {
    this._autoMergeTimerHandles.add(e);
  }
  clearAutoMergeTimers() {
    var e = this;
    if (0 !== this._autoMergeTimerHandles.size) {
      this._autoMergeTimerHandles.forEach(function (t) {
        var o;
        null === (o = e.gameView.timerComponent) || void 0 === o || o.clearTimer(t);
      });
      this._autoMergeTimerHandles.clear();
    }
  }
  hasAutoMergeTimers() {
    return this._autoMergeTimerHandles.size > 0;
  }
  setCollectTargetPosition(e, t) {
    this._collectTargetPositions.set(e, cc.v3(t.x, t.y, t.z || 0));
  }
  getCollectTargetPosition(e) {
    return this._collectTargetPositions.get(e) || null;
  }
  getAllCollectTargetPositions() {
    return this._collectTargetPositions;
  }
  clearCollectTargetPositions() {
    this._collectTargetPositions.clear();
  }
  registerCollectTargetItem(e, t) {
    this._collectTargetItems.set(e, t);
  }
  getCollectTargetItem(e) {
    return this._collectTargetItems.get(e) || null;
  }
  getAllCollectTargetItems() {
    return this._collectTargetItems;
  }
  clearCollectTargetItems() {
    this._collectTargetItems.clear();
  }
}