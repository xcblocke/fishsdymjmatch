import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
var s = {
  0: "good",
  1: "great",
  2: "excellent",
  3: "amazing",
  4: "in"
};
var f = {
  0: {
    faceWidth: 80,
    faceHeight: 100,
    wordWidth: 280,
    wordHeight: 120,
    gap: 5
  },
  1: {
    faceWidth: 80,
    faceHeight: 100,
    wordWidth: 320,
    wordHeight: 120,
    gap: 5
  },
  2: {
    faceWidth: 100,
    faceHeight: 100,
    wordWidth: 470,
    wordHeight: 120,
    gap: 5
  },
  3: {
    faceWidth: 120,
    faceHeight: 100,
    wordWidth: 520,
    wordHeight: 120,
    gap: 5
  }
};
@mj.trait
@mj.class("T2CheerFWTrait")
export default class T2CheerFWTrait extends Trait {
  static traitKey = "T2CheerFW";
  onT2CheerBhv_createNode(e, t) {
    var r = e.args[0],
      n = e.args[1],
      i = e.args[2],
      o = e.args[3],
      a = 4 === i ? this._createSingleSpineNode(r, n, i, o) : this._createDoubleSpineNode(r, n, i, o);
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: a
    });
  }
  onT2CheerBhv_getAniNm(e, t) {
    var r = e.args[0];
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: s[r] || "good"
    });
  }
  _createDoubleSpineNode(e, t, r, n) {
    var i = new cc.Node("CheerContainer");
    i.parent = e;
    i.position = t;
    var o = new cc.Node("spinFace");
    o.parent = i;
    var a = new cc.Node("spinWord");
    a.parent = i;
    this._alignHorizontalCenter(o, a, r);
    var c = BaseSpine.refreshWithNode(o, "spine/tile2Cheer/gameplay_word_face_a", "mainRes"),
      f = BaseSpine.refreshWithNode(a, "spine/tile2Cheer/gameplay_word_face_b", "mainRes"),
      u = 0,
      l = function l() {
        if (!(++u < 2)) {
          var e = s[r] || "good";
          null == c || c.setAnimation(e, 1);
          null == f || f.setAnimation(e, 1, function () {
            n(i);
          });
        }
      };
    c.setOnReadyCallback(l);
    f.setOnReadyCallback(l);
    return i;
  }
  _createSingleSpineNode(e, t, r, n) {
    var i = new cc.Node("CheerContainer");
    i.parent = e;
    i.position = t;
    var o = new cc.Node("spinEffect");
    o.parent = i;
    var a = BaseSpine.refreshWithNode(o, "spine/tile2Cheer/gameplay_moreAwesome", "mainRes");
    a.setOnReadyCallback(function () {
      var e = s[r] || "in";
      a.setAnimation(e, 1, function () {
        n(i);
      });
    });
    return i;
  }
  _alignHorizontalCenter(e, t, r) {
    var n,
      i = null !== (n = f[r]) && void 0 !== n ? n : f[0],
      o = i.faceWidth,
      a = i.faceHeight,
      c = i.wordWidth,
      p = i.wordHeight,
      s = o + i.gap + c;
    e.setContentSize(o, a);
    e.position = cc.v3(-s / 2 + o / 2, 0, 0);
    t.setContentSize(c, p);
    t.position = cc.v3(s / 2 - c / 2, 0, 0);
  }
}