import { MjGameType, ETile2SlotType } from '../core/simulator/constant/GameTypeEnums';
import MainGameView from '../game/view/MainGameView';
import { BehaviorsMapping } from '../mapping/BehaviorsMapping';
@mj.class
export default class Tile2GameView extends MainGameView {
  _logName = "Tile2GameView";
  _gameType = MjGameType.Tile2Normal;
  _slotBarView = null;
  _nodeBottomView = null;
  _nodeTopView = null;
  _disPlayMap = new Map();
  _disPlayCheckTimer = 0;
  static prefabUrl = "prefabs/game/MainGameTile2";
  get slotBarView() {
    return this._slotBarView;
  }
  get nodeBottomView() {
    return this._nodeBottomView;
  }
  get nodeTopView() {
    return this._nodeTopView;
  }
  getSlotBarNode() {
    return this.node.getChildByName("GLMahjongGameView").getChildByName("nodeSlotBar");
  }
  setSlotBarView(e) {
    this._slotBarView = e;
  }
  getTile2SlotType() {
    return this.delegate.getTile2SlotType();
  }
  setNodeBottomView(e) {
    this._nodeBottomView = e;
  }
  getBottomNode() {
    return this._bottomRootNode;
  }
  setNodeTopView(e) {
    this._nodeTopView = e;
  }
  getTopNode() {
    return this._topRootNode;
  }
  changeTopLocalBottom() {
    var e = this.getSlotBarNode();
    e.getComponent(cc.Widget).updateAlignment();
    var t = this.getTile2SlotType() === ETile2SlotType.Slot4 ? -12 : 0,
      o = e.convertToWorldSpaceAR(cc.v2(0, -e.height * e.anchorY - 40 + t));
    return e.parent.convertToNodeSpaceAR(o);
  }
  @mj.traitEvent("Tile2GmVw_initLayers")
  initLayers() {
    this.initEffectLayers();
    this._nodeCardRoot = this._gameNode.getChildByName("nodeCardRoot");
    this._nodeDragCardRoot = this._gameNode.getChildByName("nodeDragCardRoot");
    this._swallowEventNode = this._gameNode.getChildByName("nodeSwallowEvent");
    this._guideRootNode = this._gameNode.getChildByName("guideRoot");
    this._topRootNode = this._gameNode.getChildByName("nodeTop");
    this._bottomRootNode = this._gameNode.getChildByName("nodeBottom");
  }
  initCountBlockNode() {
    this._countBlockNode = new cc.Node("CountBlockNode");
    this._countBlockNode.setAnchorPoint(0.5, 0.5);
    this._countBlockNode.parent = this._gameNode;
    this._countBlockNode.zIndex = 9999;
    this._countBlockNode.addComponent(cc.BlockInputEvents);
    this._countBlockNode.setContentSize(9999, 9999);
    this.resetCountBlockNode();
  }
  initScoreItem() {}
  clearAllNode() {
    var t;
    super.clearAllNode.call(this);
    null === (t = this._nodeTopView) || void 0 === t || t.resetScore();
  }
  startSimulator() {
    var t;
    null === (t = this._slotBarView) || void 0 === t || t.resetSlotBar();
    super.startSimulator.call(this);
  }
  onSimulatorDisplay(t) {
    var o,
      n = null === (o = t.behaviorExecution) || void 0 === o ? void 0 : o.key;
    if (null != n && null != this._gameBehaviorParser) {
      this._disPlayMap.set(n, 0);
      this.delegate.addDisPlayingCount();
    }
    super.onSimulatorDisplay.call(this, t);
  }
  onDisplayFinish(t, o, n, i) {
    var r = i;
    if (null != r && this._disPlayMap.has(r)) {
      this._disPlayMap.delete(r);
      this.delegate.removeDisPlayingCount();
    }
    super.onDisplayFinish.call(this, t, o, n, i);
  }
  clearBehaviorParser() {
    var t, o;
    null === (t = this.delegate) || void 0 === t || t.resetDisPlayingCount();
    null === (o = this._disPlayMap) || void 0 === o || o.clear();
    super.clearBehaviorParser.call(this);
  }
  initSimulatorDisplay() {
    var t,
      o = this;
    this.delegate.resetDisPlayingCount();
    this._disPlayMap.clear();
    super.initSimulatorDisplay.call(this);
    var n = [BehaviorsMapping.Tile2ClearEffect, BehaviorsMapping.Empty, BehaviorsMapping.Tile2ScoreFloat];
    null === (t = this._gameBehaviorParser) || void 0 === t || t.setProgressCallback(function (e, t) {
      if (e.length > 0 && e.every(function (e) {
        return n.includes(e);
      }) && o._disPlayMap.has(t)) {
        o._disPlayMap.delete(t);
        o.delegate.removeDisPlayingCount();
      }
    });
  }
  update(t) {
    super.update.call(this, t);
    this._disPlayCheckTimer += t;
    this.checkDisplayTimeout();
  }
  checkDisplayTimeout() {
    var e = this;
    if (this._disPlayCheckTimer >= 0.5) {
      this._disPlayCheckTimer -= 0.5;
      this._disPlayMap.forEach(function (t, o) {
        var n = t + 0.5;
        if (n > 2) {
          e._disPlayMap.delete(o);
          e.delegate.removeDisPlayingCount();
        } else e._disPlayMap.set(o, n);
      });
    }
  }
}