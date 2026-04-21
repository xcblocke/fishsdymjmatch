import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("PropGetEffectTrait")
export default class PropGetEffectTrait extends Trait {
  static traitKey = "PropGetEffect";
  static SPINE_PATH = "spine/overview_claimAdd";
  static ANIM_IN_TRAIL = "in_trail";
  static ANIM_IN_FEED = "in_feed";
  onChest_AdClose(e, t) {
    var n,
      o = e.ins,
      c = null === (n = e.args) || void 0 === n ? void 0 : n[0];
    if (cc.isValid(null == o ? void 0 : o.node)) {
      if (c && c.refreshIcon && c.refreshValue && c.hintIcon && c.hintValue && c.adClaimBtn && c.adScale) {
        var a = c.refreshIcon,
          i = c.refreshValue,
          r = c.hintIcon,
          l = c.hintValue,
          s = c.adClaimBtn,
          d = c.claimBtn,
          u = c.adScale,
          f = c.onClose;
        cc.isValid(i) && i.getComponent(cc.Label);
        cc.isValid(l) && l.getComponent(cc.Label);
        try {
          this.playRewardEffect(o, a, i, r, l, s, d, u, function () {
            cc.isValid(i) && i.getComponent(cc.Label);
            cc.isValid(l) && l.getComponent(cc.Label);
            try {
              null == f || f();
            } catch (e) {}
          });
        } catch (e) {
          null == f || f();
        }
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else t();
    } else t();
  }
  playRewardEffect(e, t, n, o, c, a, i, r, d) {
    var u = this;
    try {
      var f = UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
      this.playButtonScaleOut(a, i, function () {
        try {
          u.playTrailAndFeedback(e, t, n, o, c, a, i, r, function () {
            try {
              u.hideUIAndFadeMask(e, t, n, o, c);
              if (f) {
                u.playPropsDrop(e, t, n, o, c, a, i, d);
              } else {
                d();
              }
            } catch (e) {
              d();
            }
          });
        } catch (e) {
          d();
        }
      });
    } catch (e) {
      d();
    }
  }
  playButtonScaleOut(e, t, n) {
    try {
      var o = [e, t].filter(function (e) {
        return cc.isValid(e);
      });
      if (0 === o.length) {
        setTimeout(n, 200);
        return;
      }
      var c = 0,
        a = function a() {
          ++c >= o.length && n();
        };
      o.forEach(function (e, t) {
        try {
          cc.tween(e).delay(0.06 * t).to(0.06, {
            scale: 1.05
          }, {
            easing: "sineOut"
          }).to(0.07, {
            scale: 0.5
          }, {
            easing: "sineIn"
          }).call(function () {
            try {
              e.active = false;
            } catch (e) {}
            a();
          }).start();
        } catch (e) {
          a();
        }
      });
    } catch (e) {
      setTimeout(n, 200);
    }
  }
  playTrailAndFeedback(e, t, n, o, c, a, i, r, l) {
    var s = this;
    try {
      var d = this.buildPropList(t, n, o, c, r);
      if (0 === d.length) {
        l();
        return;
      }
      var u = 0,
        f = function f() {
          ++u >= d.length && l();
        };
      d.forEach(function (t) {
        var n = t.icon,
          o = t.value,
          c = t.delay,
          r = t.newCount;
        try {
          s.playTrailForProp(e, n, o, a, i, c, r, f);
        } catch (e) {
          f();
        }
      });
    } catch (e) {
      l();
    }
  }
  buildPropList(e, t, n, o, c) {
    var a = [];
    if (cc.isValid(e) && cc.isValid(t)) {
      var i = (l = t.getComponent(cc.Label)) && parseInt(l.string) || 0;
      if (i > 0) {
        var r = i * c;
        a.push({
          icon: e,
          value: t,
          newCount: r
        });
      }
    }
    if (cc.isValid(n) && cc.isValid(o)) {
      var l,
        s = (l = o.getComponent(cc.Label)) && parseInt(l.string) || 0;
      if (s > 0) {
        r = s * c;
        a.push({
          icon: n,
          value: o,
          newCount: r
        });
      }
    }
    a.forEach(function (e, t) {
      e.delay = 0.1 * t;
    });
    return a;
  }
  playTrailForProp(e, t, o, c, a, i, l, s) {
    var d = this,
      u = c || a;
    if (!cc.isValid(u)) return s();
    var f = "trail_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      p = new cc.Node(f);
    e.node.addChild(p);
    p.zIndex = 100;
    var v = e.node.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.Vec2.ZERO)),
      y = e.node.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.Vec2.ZERO));
    p.setPosition(v);
    BaseSpine.refreshWithNode(p, PropGetEffectTrait.SPINE_PATH, "r_propGetEffect").setAnimation(PropGetEffectTrait.ANIM_IN_TRAIL, 1, function () {});
    var h = Date.now();
    cc.tween(p).delay(i).call(function () {
      ((Date.now() - h) / 1000).toFixed(2);
    }).to(0.5, {
      position: y
    }, {
      easing: "sineOut"
    }).call(function () {
      ((Date.now() - h) / 1000).toFixed(2);
      cc.isValid(p) && p.destroy();
      d.playFeedback(e, o, l, s);
    }).start();
  }
  playFeedback(e, t, o, c) {
    if (cc.isValid(t)) {
      var a = new cc.Node("feed");
      e.node.addChild(a);
      a.zIndex = 100;
      a.setPosition(e.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO)));
      BaseSpine.refreshWithNode(a, PropGetEffectTrait.SPINE_PATH, "r_propGetEffect").setAnimation(PropGetEffectTrait.ANIM_IN_FEED, 1, function () {
        cc.isValid(a) && a.destroy();
      });
      var i = t.getComponent(cc.Label);
      if (i && o > 0) {
        i.string;
        i.string = String(o);
      }
      var l = t.scale;
      cc.tween(t).to(0.06, {
        scale: 1.2 * l
      }, {
        easing: "sineOut"
      }).to(0.07, {
        scale: l
      }, {
        easing: "sineIn"
      }).delay(0.5).call(function () {
        c();
      }).start();
    } else c();
  }
  hideUIAndFadeMask(e, t, n, o, c) {
    var a, i, r;
    [t, n, o, c].forEach(function (t) {
      if (cc.isValid(t)) {
        var n = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
        t.removeFromParent(false);
        e.node.addChild(t);
        t.setPosition(e.node.convertToNodeSpaceAR(n));
      }
    });
    e.node.children.forEach(function (e) {
      e === t || e === n || e === o || e === c || e.name.startsWith("trail_") || "feed" === e.name || (e.active = false);
    });
    var l = (null === (a = e.animSkeleton) || void 0 === a ? void 0 : a.node) || (null === (r = null === (i = e.getAnimSkeleton) || void 0 === i ? void 0 : i.call(e)) || void 0 === r ? void 0 : r.node) || cc.find("BoxAnim", e.node);
    l && (l.active = false);
    this.fadeMask(e);
  }
  fadeMask(e) {
    var t,
      n,
      o = cc.find("bg", e.node) || cc.find("bgMask", e.node);
    cc.isValid(o) && cc.tween(o).to(0.5, {
      opacity: 0
    }, {
      easing: "sineOut"
    }).start();
    var c = null === (n = null === (t = e.node.parent) || void 0 === t ? void 0 : t.getChildByName) || void 0 === n ? void 0 : n.call(t, "BlurBg");
    cc.isValid(c) && cc.tween(c).to(0.5, {
      opacity: 0
    }, {
      easing: "sineOut"
    }).start();
  }
  playPropsDrop(e, t, n, o, c, a, i, r) {
    var l = this;
    try {
      var s = [{
        icon: t,
        value: n,
        delay: 0
      }, {
        icon: o,
        value: c,
        delay: 0.2
      }].filter(function (e) {
        return cc.isValid(e.icon) && cc.isValid(e.value);
      });
      if (0 === s.length) {
        setTimeout(r, 200);
        return;
      }
      var d = 0,
        u = function u() {
          ++d >= s.length && setTimeout(r, 200);
        };
      s.forEach(function (t) {
        var n = t.icon,
          o = t.value,
          c = t.delay;
        try {
          l.playPropDrop(e, n, o, a, i, c, u);
        } catch (e) {
          u();
        }
      });
    } catch (e) {
      setTimeout(r, 200);
    }
  }
  playPropDrop(e, t, n, o, c, a, i) {
    var r = this;
    try {
      var l = o || c;
      if (!cc.isValid(l)) {
        i();
        return;
      }
      var s = l.convertToWorldSpaceAR(cc.Vec2.ZERO),
        d = [t, n],
        u = 0,
        f = function f() {
          if (++u >= d.length) try {
            r.playBtnFeedback(e, l, i);
          } catch (e) {
            setTimeout(i, 200);
          }
        };
      d.forEach(function (e) {
        if (!cc.isValid(e)) return f();
        try {
          var t = e.scale,
            n = e.parent.convertToNodeSpaceAR(s),
            o = cc.v3(n.x, n.y, 0);
          cc.tween(e).delay(a).to(0.2, {
            scale: 1.3 * t
          }, {
            easing: "sineOut"
          }).to(0.1, {
            scale: 0.5 * t
          }, {
            easing: "sineIn"
          }).start();
          cc.tween(e).delay(a + 0.2).to(0.3, {
            position: o
          }, {
            easing: "sineOut"
          }).to(0.2, {
            opacity: 0
          }, {
            easing: "sineOut"
          }).call(f).start();
        } catch (e) {
          f();
        }
      });
    } catch (e) {
      i();
    }
  }
  playBtnFeedback(e, t, o) {
    try {
      var c = new cc.Node("btnFeed");
      e.node.addChild(c);
      c.zIndex = 100;
      c.setPosition(e.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO)));
      BaseSpine.refreshWithNode(c, PropGetEffectTrait.SPINE_PATH, "r_propGetEffect").setAnimation(PropGetEffectTrait.ANIM_IN_FEED, 1, function () {
        return cc.isValid(c) && c.destroy();
      });
      if (cc.isValid(t)) {
        var a = t.scale;
        cc.tween(t).to(0.06, {
          scale: 1.05 * a
        }, {
          easing: "sineOut"
        }).to(0.07, {
          scale: a
        }, {
          easing: "sineIn"
        }).call(function () {
          return setTimeout(o, 200);
        }).start();
      } else setTimeout(o, 200);
    } catch (e) {
      setTimeout(o, 200);
    }
  }
}