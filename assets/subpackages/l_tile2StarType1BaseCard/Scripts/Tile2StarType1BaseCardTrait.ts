import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
var p = ["gym2", "farmproduce", "skiing", "livingroom", "countrylife", "music", "wildlife", "spices", "royalwedding", "bakery", "puzzles", "bags", "easter", "parkwalk", "pets", "cardnight", "paris", "birdwatch", "social", "soups", "shoes", "dailygoods", "dogs", "cats", "fashion", "nursery", "fabric", "jewelry", "herbaltea", "breakfast", "retrotech", "cleaning"];
var d = ["W", "b", "t"];
@mj.trait
@mj.class("Tile2StarType1BaseCardTrait")
export default class Tile2StarType1BaseCardTrait extends Trait {
  _whitelistThemes = null;
  static traitKey = "Tile2StarType1BaseCard";
  getSuitGroupCountFromContext(t) {
    var e,
      r,
      i = t.ins;
    if (i && "function" == typeof i.getSuitGroupCount) return Math.min(3, Math.max(1, i.getSuitGroupCount()));
    var n = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
    return Math.min(3, Math.max(1, n));
  }
  onLoad() {
    super.onLoad.call(this);
    this.addWhitelistBundlesToLoader();
  }
  getWhitelistThemes() {
    if (this._whitelistThemes) return this._whitelistThemes;
    var t = FlowerStarConfigUtil.getStarList(),
      e = new Set(p);
    this._whitelistThemes = t.filter(function (t) {
      return e.has(t.name);
    });
    return this._whitelistThemes;
  }
  addWhitelistBundlesToLoader() {
    var t = LowPriorityBundleLoader.getInstance(),
      e = this.getWhitelistThemes();
    new Set(e.filter(function (t) {
      return !t.isLocal;
    }).map(function (t) {
      return t.bundle;
    })).forEach(function (e) {
      return t.addTask(e, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    });
  }
  onTile2Star_drawLevel(t, e) {
    var r = t.args[0];
    if (1 === ExtractTool.getInstance().getLevelType(r)) {
      var i = this.getSuitGroupCountFromContext(t),
        n = this.drawRandomSuits(i);
      if (n.length < i) e();else {
        for (var a = [], o = [], s = 0; s < i; s++) {
          var u = this.drawThemeFromWhitelist(o);
          if (!u) {
            e();
            return;
          }
          a.push(u);
          o.push(u.name);
        }
        var c = n.map(function (t, e) {
            return {
              suit: t,
              themeId: a[e].name,
              bundle: a[e].bundle
            };
          }),
          f = a.map(function (t) {
            return t.name;
          });
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: {
            forLevelId: r,
            entries: c,
            themeIds: f
          }
        });
      }
    } else e();
  }
  drawRandomSuits(t) {
    for (var e = [...d], r = [], i = 0; i < t && e.length > 0; i++) {
      var n = Math.floor(Math.random() * e.length);
      r.push(e[n]);
      e.splice(n, 1);
    }
    return r;
  }
  drawThemeFromWhitelist(t) {
    var e = new Set(t),
      r = this.getWhitelistThemes().filter(function (t) {
        return !e.has(t.name) && (!!t.isLocal || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(t.bundle));
      });
    if (0 === r.length) {
      var i = this.getWhitelistThemes().filter(function (t) {
        return !e.has(t.name);
      });
      return 0 === i.length ? null : i[Math.floor(Math.random() * i.length)];
    }
    return r[Math.floor(Math.random() * r.length)];
  }
}