import Trait from '../../../Scripts/framework/trait/Trait';
import { ETravelRewardType } from '../../../Scripts/config/TravelConfig';
var o;
(o = {})[105] = 101;
o[106] = 101;
o[107] = 101;
o[108] = 101;
o[205] = 201;
o[206] = 201;
o[207] = 201;
o[208] = 201;
o[607] = 601;
o[608] = 601;
o[609] = 601;
o[610] = 601;
var u = o;
@mj.trait
@mj.class("TravelBoxRewardTrait")
export default class TravelBoxRewardTrait extends Trait {
  static traitKey = "TravelBoxReward";
  getReplaceInfo() {
    var e;
    return null !== (e = this.traitData.replace) && void 0 !== e ? e : [[19, -1], [31, 1002101], [61, 1002102], [81, 1002103]];
  }
  onTLGameModel_getReward(e, t) {
    var r,
      n,
      o = e.beforReturnVal;
    if (!o || o.length <= 0) t();else {
      for (var i = this.getReplaceInfo(), a = i.filter(function (e) {
          return -1 === e[1];
        }), l = function l(e) {
          var t = o[e];
          if (t.type === ETravelRewardType.EGiftBox) {
            var r = i.find(function (e) {
              return e[0] === t.lv;
            });
            r && -1 !== r[1] && (t.reward = r[1]);
          }
        }, u = 0; u < o.length; u++) l(u);
      var p = function p(e) {
        var t = o.findIndex(function (t) {
          return t.lv === e[0];
        });
        -1 !== t && o.splice(t, 1);
      };
      try {
        for (var s = __values(a), v = s.next(); !v.done; v = s.next()) p(v.value);
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          v && !v.done && (n = s.return) && n.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      t({
        returnVal: o
      });
    }
  }
  onTLMapVw_updateMapEleCfg(e, t) {
    var r,
      n,
      o = e.ins.stateConfig;
    if (!o || !o.elements || o.elements.length <= 0) t();else {
      var i = this.getReplaceInfo().filter(function (e) {
          return -1 === e[1];
        }),
        a = function a(e) {
          i.find(function (t) {
            return t[0] === e.level;
          }) && (e.type = u[e.type]);
        };
      try {
        for (var l = __values(o.elements), c = l.next(); !c.done; c = l.next()) a(c.value);
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          c && !c.done && (n = l.return) && n.call(l);
        } finally {
          if (r) throw r.error;
        }
      }
      t();
    }
  }
}