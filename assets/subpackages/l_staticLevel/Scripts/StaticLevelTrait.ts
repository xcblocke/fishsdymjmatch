import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import ExtractStatic from '../../../Scripts/core/extractQuestion/ExtractStatic';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
var f = {
  Flower: 35,
  Season: 36,
  Yoga: 37,
  Bomb: 38,
  TravelEgypt: 39,
  Rank: 50
};
@mj.trait
@mj.class("StaticLevelTrait")
export default class StaticLevelTrait extends ExtractTrait {
  static traitKey = "StaticLevel";
  onLoad() {
    var e,
      r,
      a,
      o = this;
    super.onLoad.call(this);
    this._config = {
      dataPath: "byteData/static/" + (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath),
      bundleName: null !== (a = null === (r = this._traitData) || void 0 === r ? void 0 : r.bundleName) && void 0 !== a ? a : "mainRes"
    };
    ExtractStatic.getInstance().loadData(null, function () {
      o.eventEnabled = false;
    });
  }
  onExtractTool_canUseStatic(t, e) {
    if (this.checkGameMode() && ExtractStatic.getInstance().isDataLoaded()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onExtractStatic_getPatch(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: [this._config.dataPath, this._config.bundleName]
    });
  }
  onIptSetLv_reGenFaces(t, e) {
    var r;
    if (this.checkGameMode()) {
      var a = t.ins,
        o = t.args[0].levelData;
      if (o.isNewGame && !o.isRestart && ExtractTool.getInstance().canUseStaticContentByLevelID(o.levelId)) {
        var n = a.tileMapObject,
          l = this.collectOriginalCardIds(n.mapLayers());
        if (0 !== l.size) {
          for (var s = Array.from({
              length: 34
            }, function (t, e) {
              return e;
            }), f = s.length - 1; f > 0; f--) {
            var p = Math.floor(Math.random() * (f + 1));
            r = __read([s[p], s[f]], 2), s[f] = r[0], s[p] = r[1];
          }
          var d = {};
          Array.from(l).sort(function (t, e) {
            return t - e;
          }).forEach(function (t, e) {
            d[t] = s[e % 34];
          });
          n.mapLayers().forEach(function (t) {
            t.allCards.forEach(function (t) {
              l.has(t.cardId) && n.changeTileResId(t.id, d[t.cardId]);
            });
          });
          if (this.isNext()) {
            e();
          } else {
            e({
              returnType: TraitCallbackReturnType.return,
              isBreak: true
            });
          }
        } else e();
      } else e();
    } else e();
  }
  @mj.traitEvent("StaticLvTt_isNext")
  isNext() {
    return false;
  }
  collectOriginalCardIds(t) {
    var e = new Set(),
      r = new Set(Object.values(f));
    t.forEach(function (t) {
      t.allCards.forEach(function (t) {
        !r.has(t.cardId) && t.resId >= 0 && t.resId <= 33 && e.add(t.cardId);
      });
    });
    return e;
  }
}