import { DropNodeStateAni } from './ani/DropNodeStateAni';
import { HintNodeStateAni } from './fsm/ani/HintNodeStateAni';
import { LockMaskNodeStateAni } from './tilenodes/fsm/ani/LockMaskNodeStateAni';
import { MoveNodeStateAni } from './ani/MoveNodeStateAni';
import { ScaleNodeStateAni } from './ani/ScaleNodeStateAni';
import { SelectLoopNodeStateAni } from './ani/SelectLoopNodeStateAni';
export class NormalStateCtl {
  _stateMap = new Map();
  _targetNode = null;
  _baseTileNode = null;
  constructor(e, t) {
    this._targetNode = e;
    this._baseTileNode = t;
  }
  getState(e) {
    if (!this._stateMap.has(e)) switch (e) {
      case "move":
        this._stateMap.set("move", new MoveNodeStateAni(this._targetNode, this._baseTileNode));
        break;
      case "scale":
        this._stateMap.set("scale", new ScaleNodeStateAni(this._targetNode, this._baseTileNode));
        break;
      case "hint":
        this._stateMap.set("hint", new HintNodeStateAni(this._targetNode, this._baseTileNode));
        break;
      case "selectLoop":
        this._stateMap.set("selectLoop", new SelectLoopNodeStateAni(this._targetNode, this._baseTileNode));
        break;
      case "lockMask":
        this._stateMap.set("lockMask", new LockMaskNodeStateAni(this._targetNode, this._baseTileNode));
        break;
      case "drop":
        this._stateMap.set("drop", new DropNodeStateAni(this._targetNode, this._baseTileNode));
    }
    return this._stateMap.get(e);
  }
  playParallel(e, t, o, n = true, i = false) {
    var r = this;
    e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
    var a = function a() {
      null == o || o();
    };
    if (i) {
      t.forEach(function (e, t) {
        var o;
        null === (o = r.getState(t)) || void 0 === o || o.applyImmediate(e[0]);
      });
      a();
    } else {
      var l = 0;
      t.forEach(function (e, o) {
        var i, s;
        if (n) {
          null === (i = r.getState(o)) || void 0 === i || i.playAni(e[0], function () {
            ++l === t.size && a();
          });
        } else {
          null === (s = r.getState(o)) || void 0 === s || s.exitAni(e[0], function () {
            ++l === t.size && a();
          });
        }
      });
    }
  }
  moveToParentKeepWorld(e, t) {
    if (t && e.parent !== t) {
      var o = e.convertToWorldSpaceAR(cc.v2(0, 0)),
        n = t.convertToNodeSpaceAR(o);
      e.parent = t;
      e.setPosition(n.x, n.y);
    }
  }
  @mj.traitEvent("NormStCtl_getMvSt")
  getMoveAndScaleStates() {
    return new Map([["move", []], ["scale", []]]);
  }
  playEnterAni(e, t) {
    this.playParallel(e, this.getMoveAndScaleStates(), t, true);
  }
  playExitAni(e, t) {
    this.playParallel(e, this.getMoveAndScaleStates(), t, false);
  }
  forceExit(e, t) {
    var o = this;
    e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
    ["move", "scale"].forEach(function (e) {
      var t;
      null === (t = o.getState(e)) || void 0 === t || t.forceExit();
    });
    null == t || t();
  }
  forceExitMove(e, t) {
    var o;
    this.playEnterAni(e);
    null === (o = this.getState("move")) || void 0 === o || o.applyImmediate(t);
  }
  forceEnter(e, t) {
    var o = this;
    e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
    ["move", "scale"].forEach(function (e) {
      var t;
      null === (t = o.getState(e)) || void 0 === t || t.forceEnter();
    });
    null == t || t();
  }
  playHintEnterAni(e, t) {
    this.playParallel(null, new Map([["hint", [e]]]), t, true);
  }
  playHintExitAni(e) {
    this.playParallel(null, new Map([["hint", []]]), e, false);
  }
  pauseHint() {
    var e = this.getState("hint");
    null == e || e.pauseShake();
  }
  resumeHint() {
    var e = this.getState("hint");
    null == e || e.resumeShake();
  }
  playSelectLoopEnterAni(e, t) {
    this.playParallel(null, new Map([["selectLoop", [e]]]), t, true);
  }
  playSelectLoopExitAni(e) {
    this.playParallel(null, new Map([["selectLoop", []]]), e, false);
  }
  isSelectLoopPlaying() {
    var e = this.getState("selectLoop");
    return (null == e ? void 0 : e.isLooping()) || false;
  }
  playLockMaskEnterAni(e) {
    this.playParallel(null, new Map([["lockMask", []]]), e, true);
  }
  playLockMaskExitAni(e) {
    this.playParallel(null, new Map([["lockMask", []]]), e, false);
  }
  playDropAni(e, t) {
    this.playParallel(e, new Map([["drop", [{
      isDrop: true
    }]]]), t, true);
  }
  cancelDropAni(e) {
    this.playParallel(e, new Map([["drop", [{
      isDrop: true
    }]]]), null, true, true);
  }
}