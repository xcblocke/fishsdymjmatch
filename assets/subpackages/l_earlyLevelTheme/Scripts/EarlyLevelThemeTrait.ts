import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
var p = [25, 66, 28, 73, 11, 24, 7, 34, 65, 31];
@mj.trait
@mj.class("EarlyLevelThemeTrait")
export default class EarlyLevelThemeTrait extends Trait {
  static traitKey = "EarlyLevelTheme";
  onLoad() {
    super.onLoad.call(this);
    this.localData.shuffledThemeIds && 0 !== this.localData.shuffledThemeIds.length || (this.localData.shuffledThemeIds = this.shuffleArray([...p]));
    this.localData.levelThemeMap || (this.localData.levelThemeMap = {});
  }
  shuffleArray(e) {
    for (var t, r = e.length - 1; r > 0; r--) {
      var n = Math.floor(Math.random() * (r + 1));
      t = __read([e[n], e[r]], 2), e[r] = t[0], e[n] = t[1];
    }
    return e;
  }
  isMainLineMode() {
    var e = UserModel.getInstance().getCurrentGameType();
    return e === MjGameType.Normal || e === MjGameType.Tile2Normal;
  }
  getMainLevelId() {
    var e;
    return (null === (e = UserModel.getInstance().getMainGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
  }
  onFlowerCS_getThemePeriod(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: 2,
      isBreak: true
    });
  }
  onFlowerCS_sortQueue(e, t) {
    var r,
      n,
      a,
      o,
      i = e.ins,
      s = i._remoteDownloadQueue;
    if (s && 0 !== s.length) {
      var f = i.getFlowerSeries(),
        c = new Set(),
        d = function d(e) {
          var t = f.find(function (t) {
            return t.id === e;
          });
          t && !t.isLocal && c.add(t.bundle);
        };
      try {
        for (var h = __values(p), y = h.next(); !y.done; y = h.next()) d(y.value);
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          y && !y.done && (n = h.return) && n.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
      var v = [],
        m = [];
      try {
        for (var T = __values(s), _ = T.next(); !_.done; _ = T.next()) {
          var g = _.value;
          if (c.has(g)) {
            v.push(g);
          } else {
            m.push(g);
          }
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          _ && !_.done && (o = T.return) && o.call(T);
        } finally {
          if (a) throw a.error;
        }
      }
      s.length = 0;
      s.push.apply(s, [...v, ...m]);
      t();
    } else t();
  }
  isBundleReady(e, t) {
    return !!t.isLocal || !!e.isBundleReady && e.isBundleReady(t.bundle);
  }
  findReadySeries(e, t, r, n, a) {
    if (n >= 0 && n < r.length && !a.has(r[n])) {
      var o = t.find(function (e) {
        return e.id === r[n];
      });
      if (o && this.isBundleReady(e, o)) return o;
    }
    for (var i = function i(o) {
        if (o === n) return "continue";
        if (a.has(r[o])) return "continue";
        var i = t.find(function (e) {
          return e.id === r[o];
        });
        return i && l.isBundleReady(e, i) ? {
          value: i
        } : void 0;
      }, l = this, u = 0; u < r.length; u++) {
      var s = i(u);
      if ("object" == typeof s) return s.value;
    }
    return null;
  }
  onFlowerCS_drawFlower(e, t) {
    if (this.isMainLineMode()) {
      var r = this.getMainLevelId(),
        n = e.ins,
        a = n.getFlowerSeries(),
        o = this.localData.levelThemeMap,
        i = Object.keys(o).length;
      if (void 0 === o[r]) {
        if (i >= 10) t();else {
          var l = new Set();
          for (var u in o) l.add(o[u]);
          var s = this.localData.shuffledThemeIds,
            c = i,
            d = this.findReadySeries(n, a, s, c, l);
          if (d) {
            o[r] = d.id;
            this.localData.levelThemeMap = o;
            n.saveModeData({
              currentSeries: d
            });
            n.setLastSeriesId(d.id);
            t({
              returnType: TraitCallbackReturnType.return,
              isBreak: true,
              returnVal: d
            });
          } else t();
        }
      } else {
        var p = a.find(function (e) {
          return e.id === o[r];
        });
        if (p && this.isBundleReady(n, p)) {
          n.saveModeData({
            currentSeries: p
          });
          n.setLastSeriesId(p.id);
          t({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: p
          });
          return;
        }
        t();
      }
    } else t();
  }
}