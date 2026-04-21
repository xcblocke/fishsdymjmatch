import BaseSpine from './gamePlay/base/ui/BaseSpine';
import { EGameEvent } from './simulator/constant/GameEvent';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { BaseTileNode } from './BaseTileNode';
export class TileNodeObject extends BaseTileNode {
  _initType = ETileNodeShowType.Normal;
  @mj.traitEvent("TileNodeObj_getScale")
  getSelectedScale() {
    return this.info.tileObject.getSelectScale() || 1;
  }
  playSelectAnimation(e) {
    this._shadowCardStateCtl.playEnterAni(this.dragRootNode);
    this._cardStateCtl.playEnterAni(this.dragRootNode, function () {
      null == e || e();
    });
  }
  selectedFinish() {
    mj.EventManager.emit(EGameEvent.TileNode_SelectedFinish, this);
  }
  @mj.traitEvent("TileNodeObj_BeginSelected")
  selected() {
    var e = this,
      t = function t() {
        e.selectedFinish();
      };
    if (this.isSelect()) t();else {
      mj.EventManager.emit(EGameEvent.TileNode_BeginSelected, this);
      this.context.gameType == MjGameType.Classic && this.cancelDropToPosition();
      this.showSelectEffect();
      this.playSelectAnimation(t);
    }
  }
  cancelSelectedAnimation(e) {
    var t = this;
    this._cardStateCtl.playExitAni(this.layerNode, function () {
      t.resetSiblingIndex();
      null == e || e();
    });
    this._shadowCardStateCtl.playExitAni(this.shadowLayerNode);
  }
  @mj.traitEvent("TileNodeObj_UnSelected")
  cancelSelected() {
    var e = this,
      t = function t() {
        e.resetPosition();
        e.cancelSelectedFinish();
      };
    if (this.isSelect()) {
      mj.EventManager.emit(EGameEvent.TileNode_BeginUnSelected, this);
      this.hideSelectEffect();
      this.cancelSelectedAnimation(function () {
        t();
      });
    } else t();
  }
  clearCancelSelected() {
    this.hidePropHint();
    this.hideSelectEffect();
    this._shadowCardStateCtl.forceEnter(this.dragRootNode);
    this._cardStateCtl.forceEnter(this.dragRootNode);
  }
  @mj.traitEvent("TileNodeObj_reToNormal")
  resetToNormal() {
    this.hidePropHint();
    this.hideSelectEffect();
    this.imgLockBg.active = false;
  }
  resetPosition() {}
  @mj.traitEvent("TileNodeObj_touchEnd")
  touchEndForMove() {
    this._shadowCardStateCtl.forceEnter(this.dragRootNode);
    this._cardStateCtl.forceEnter(this.dragRootNode);
    this.resetSiblingIndex();
  }
  cancelTouch() {
    if (this.isSelect()) {
      this._shadowCardStateCtl.forceEnter(this.dragRootNode);
      this._cardStateCtl.forceEnter(this.dragRootNode);
      this.resetSiblingIndex();
    } else {
      this._cardStateCtl.forceExit(this.layerNode);
      this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
      this.resetSiblingIndex();
    }
  }
  @mj.traitEvent("TileNodeObj_setPosition")
  setPositionWithDelta(e = true, t?) {
    this._shadowCardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
    this._cardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
  }
  attachNodeStateAnis(e) {
    var t, o;
    try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) i.value.reset();
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    this._nodeStateAnis = e;
  }
  stopAllAnimation() {
    this._cardStateCtl.forceExit(this.layerNode);
    this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
  }
  playAttachEnterAni(e, t) {
    for (var o = this, n = function n(n) {
        i._nodeStateAnis[n].playAni(e, function () {
          n === o._nodeStateAnis.length - 1 && (null == t || t());
        });
      }, i = this, r = 0; r < this._nodeStateAnis.length; r++) n(r);
  }
  playHintAnimation(e, t) {
    var o, n;
    null === (o = this._cardStateCtl) || void 0 === o || o.playHintEnterAni(e, t);
    null === (n = this._shadowCardStateCtl) || void 0 === n || n.playHintEnterAni(e);
  }
  exitHintAnimation() {
    var e, t;
    null === (e = this._cardStateCtl) || void 0 === e || e.playHintExitAni();
    null === (t = this._shadowCardStateCtl) || void 0 === t || t.playHintExitAni();
  }
  pauseHintShake() {
    var e, t;
    null === (e = this._cardStateCtl) || void 0 === e || e.pauseHint();
    null === (t = this._shadowCardStateCtl) || void 0 === t || t.pauseHint();
  }
  resumeHintShake() {
    var e, t;
    null === (e = this._cardStateCtl) || void 0 === e || e.resumeHint();
    null === (t = this._shadowCardStateCtl) || void 0 === t || t.resumeHint();
  }
  playSelectLoopAnimation(e) {
    var t, o;
    null === (t = this._tileNodeStateCtl) || void 0 === t || t.playSelectLoopEnterAni(e);
    null === (o = this._shadowNodeStateCtl) || void 0 === o || o.playSelectLoopEnterAni(e);
  }
  stopSelectLoopAnimation() {
    var e, t;
    null === (e = this._tileNodeStateCtl) || void 0 === e || e.playSelectLoopExitAni();
    null === (t = this._shadowNodeStateCtl) || void 0 === t || t.playSelectLoopExitAni();
  }
  isSelectLoopPlaying() {
    var e;
    return (null === (e = this._tileNodeStateCtl) || void 0 === e ? void 0 : e.isSelectLoopPlaying()) || false;
  }
  playAttachExitAni(e, t) {
    for (var o = this, n = function n(n) {
        i._nodeStateAnis[n].exitAni(e, function () {
          n === o._nodeStateAnis.length - 1 && (null == t || t());
        });
      }, i = this, r = 0; r < this._nodeStateAnis.length; r++) n(r);
  }
  forceEnterAttachEnterAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].forceEnter(e);
    null == t || t();
  }
  forceExitAttachExitAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].forceExit(e);
    null == t || t();
  }
  forceEnterPlayAttachEnterAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].playAniForce(e, t);
  }
  forceExitPlayAttachExitAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].exitAniForce(e, t);
  }
  @mj.traitEvent("TileNodeObj_playAnim")
  playAnimNodeAnimation(e, t, o = true, n?, i?, r?, a?) {
    this.stopAnimNodeAnimation();
    var s = this.updateTempAnimNode(),
      c = BaseSpine.refreshWithNode(s, e, a);
    i && c.attachNode("hook_mahjong", i);
    if (r) {
      c.stopAtFirstFrameOf(t);
    } else {
      c.setAnimation(t, o ? -1 : 1, n);
    }
    return c;
  }
  stopAnimNodeAnimation() {
    this.tileNode.parent = this.animNode;
    this.tileNode.setPosition(0, 0, 0);
    this.tileNode.setScale(1 / this.info.tileObject.layoutScale);
    this.tileNode.angle = 0;
    this.destroyTempAnimNode();
  }
  dropToPosition(e) {
    this._cardStateCtl.playDropAni(this.layerNode, e);
    this._shadowCardStateCtl.playDropAni(this.shadowLayerNode, function () {});
  }
  cancelDropToPosition(e) {
    this._cardStateCtl.cancelDropAni(this.layerNode, e);
    this._shadowCardStateCtl.cancelDropAni(this.shadowLayerNode, function () {});
  }
}