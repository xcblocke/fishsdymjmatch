import { FlipNodeStateAni } from '../../ani/FlipNodeStateAni';
export class FlipStateCtl {
  _stateMap = new Map();
  _targetNode = null;
  constructor(e, t) {
    this._targetNode = e;
    this._stateMap.set("flip", new FlipNodeStateAni(e, t));
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
        null === (o = r._stateMap.get(t)) || void 0 === o || o.applyImmediate(e[0]);
      });
      a();
    } else {
      var l = 0;
      t.forEach(function (e, o) {
        var i, s;
        if (n) {
          null === (i = r._stateMap.get(o)) || void 0 === i || i.playAni(e[0], function () {
            ++l === t.size && a();
          });
        } else {
          null === (s = r._stateMap.get(o)) || void 0 === s || s.exitAni(e[0], function () {
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
  playEnterAni(e) {
    this.playParallel(null, new Map([["flip", []]]), e, true);
  }
  playExitAni(e) {
    this.playParallel(null, new Map([["flip", []]]), e, false);
  }
  forceExit(e) {
    var t = this;
    ["flip"].forEach(function (e) {
      var o;
      null === (o = t._stateMap.get(e)) || void 0 === o || o.forceExit();
    });
    null == e || e();
  }
  forceEnter() {
    var e = this;
    ["flip"].forEach(function (t) {
      var o;
      null === (o = e._stateMap.get(t)) || void 0 === o || o.forceEnter();
    });
  }
}