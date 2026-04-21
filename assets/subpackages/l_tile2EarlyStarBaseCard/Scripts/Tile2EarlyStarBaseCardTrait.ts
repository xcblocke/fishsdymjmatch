import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
var h = ["gym2", "farmproduce", "livingroom", "countrylife", "music", "puzzles", "bakery", "bags", "easter", "pets"];
var d = ["W", "b", "t"];
@mj.trait
@mj.class("Tile2EarlyStarBaseCardTrait")
export default class Tile2EarlyStarBaseCardTrait extends Trait {
  _resolvedThemes = null;
  static traitKey = "Tile2EarlyStarBaseCard";
  getSuitGroupCountFromContext(t) {
    var e,
      r,
      a = t.ins;
    if (a && "function" == typeof a.getSuitGroupCount) return Math.min(3, Math.max(1, a.getSuitGroupCount()));
    var o = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
    return Math.min(3, Math.max(1, o));
  }
  onLoad() {
    super.onLoad.call(this);
    this.localData.shuffledThemeNames && 0 !== this.localData.shuffledThemeNames.length || (this.localData.shuffledThemeNames = this.shuffleArray([...h]));
    this.localData.usedCount = Math.max(0, Math.floor(Number(this.localData.usedCount) || 0));
    this.saveLocalData();
    this.addRoyalBundlesToLoader();
  }
  getResolvedThemes() {
    if (this._resolvedThemes) return this._resolvedThemes;
    var t = FlowerStarConfigUtil.getStarList(),
      e = new Map(t.map(function (t) {
        return [t.name, t];
      }));
    this._resolvedThemes = this.localData.shuffledThemeNames.map(function (t) {
      return e.get(t);
    }).filter(function (t) {
      return !!t;
    });
    return this._resolvedThemes;
  }
  addRoyalBundlesToLoader() {
    var t = LowPriorityBundleLoader.getInstance(),
      e = this.getResolvedThemes();
    new Set(e.filter(function (t) {
      return !t.isLocal;
    }).map(function (t) {
      return t.bundle;
    })).forEach(function (e) {
      return t.addTask(e, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    });
  }
  onTile2Star_drawLevel(t, e) {
    var r = this.getSuitGroupCountFromContext(t);
    if (this.localData.usedCount + r > 10) e();else {
      for (var a = t.args[0], o = [], n = 0; n < r; n++) {
        var i = this.localData.usedCount + n,
          s = this.pickReadyThemeAt(i);
        if (!s) {
          e();
          return;
        }
        o.push(s);
      }
      var u = this.drawRandomSuits(r);
      if (u.length < r) e();else {
        var f = u.map(function (t, e) {
            return {
              suit: t,
              themeId: o[e].name,
              bundle: o[e].bundle
            };
          }),
          c = o.map(function (t) {
            return t.name;
          });
        this.localData.usedCount = this.localData.usedCount + r;
        this.saveLocalData();
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: {
            forLevelId: a,
            entries: f,
            themeIds: c
          }
        });
      }
    }
  }
  drawRandomSuits(t) {
    for (var e = [...d], r = [], a = 0; a < t && e.length > 0; a++) {
      var o = Math.floor(Math.random() * e.length);
      r.push(e[o]);
      e.splice(o, 1);
    }
    return r;
  }
  pickReadyThemeAt(t) {
    var e,
      r,
      a = this.getResolvedThemes();
    if (t >= a.length) return null;
    var o = a[t];
    if (this.isBundleReady(o)) return o;
    for (var n = t + 1; n < a.length; n++) if (this.isBundleReady(a[n])) {
      var s = this.localData.shuffledThemeNames;
      e = __read([a[n], a[t]], 2), a[t] = e[0], a[n] = e[1];
      r = __read([s[n], s[t]], 2), s[t] = r[0], s[n] = r[1];
      this.localData.shuffledThemeNames = s;
      this.saveLocalData();
      return a[t];
    }
    return o;
  }
  isBundleReady(t) {
    return !!t.isLocal || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(t.bundle);
  }
  shuffleArray(t) {
    for (var e, r = t.length - 1; r > 0; r--) {
      var a = Math.floor(Math.random() * (r + 1));
      e = __read([t[a], t[r]], 2), t[r] = e[0], t[a] = e[1];
    }
    return t;
  }
  saveLocalData() {
    this.localData.shuffledThemeNames = this.localData.shuffledThemeNames;
    this.localData.usedCount = this.localData.usedCount;
  }
}