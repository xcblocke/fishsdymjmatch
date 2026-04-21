import ExtractTrait from '../../../Scripts/ExtractTrait';
import { resManager } from '../../../Scripts/framework/manager/ResManager';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FixedLevelsTrait")
export default class FixedLevelsTrait extends ExtractTrait {
  _strategyMinLevel = 2;
  _strategyMaxLevel = 30;
  static traitKey = "FixedLevels";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "ExtractTool_getFixedLvStr",
      priority: 0,
      type: TraitEventPositionType.befor
    }]);
    if (this._traitData.strategy) {
      this._strategyMinLevel = this._traitData.strategyMinLevel || 2;
      this._strategyMaxLevel = this._traitData.strategyMaxLevel || 30;
      this.initStrategyData();
    }
  }
  initStrategyData() {
    var t = this._traitData.strategy,
      e = this._strategyMinLevel,
      r = this._strategyMaxLevel,
      a = this.localData.levelData ? Object.keys(this.localData.levelData).length : 0,
      i = r - e + 1;
    this.localData.strategy === t && a === i || this.preloadAndRandomize();
  }
  preloadAndRandomize() {
    for (var t = this, e = this._traitData.strategy, r = this._strategyMinLevel, a = this._strategyMaxLevel, i = this._traitData.strategyBundle || "mainRes", n = this._traitData.strategyPath || "byteData/fixLevel/" + e + "/", o = [], l = r; l <= a; l++) {
      var c = l.toString().padStart(2, "0");
      o.push("" + n + c);
    }
    resManager.loadRes(o, cc.JsonAsset, i).then(function (a) {
      var i = Array.isArray(a) ? a : [a],
        n = {};
      i.forEach(function (t, e) {
        if (t && t.json) {
          var a = (e + r).toString().padStart(2, "0"),
            i = t.json;
          if (i && i.length > 0) {
            var o = Math.floor(Math.random() * i.length);
            n[a] = i[o];
          }
          t.decRef();
        }
      });
      t.localData.strategy = e;
      t.localData.levelData = n;
      t.localData.levelData = t.localData.levelData;
    }).catch(function () {});
  }
  onExtractTool_isFixedLevel(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0];
      if (this.checkIsStrategyLevelID(r)) {
        var a = this._strategyMaxLevel;
        e(r && r >= 1 && r <= a ? {
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        } : {
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: false
        });
      } else if (r && r <= this._traitData.fixLevelArr.length) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      } else {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: false
        });
      }
    } else e();
  }
  onExtractTool_getFixedLvStr(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0];
      if (this.checkIsStrategyLevelID(r)) {
        var a = this.getStrategyLevelData(r);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: a
        });
      } else e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._traitData.fixLevelArr[r - 1]
      });
    } else e();
  }
  checkIsStrategyLevelID(t) {
    if (!this._traitData.strategy || !this.localData.levelData) return false;
    var e = t.toString().padStart(2, "0");
    return !!this.localData.levelData[e];
  }
  getStrategyLevelData(t) {
    var e;
    if (1 === t) return this._traitData.fixLevelArr && this._traitData.fixLevelArr[0] ? this._traitData.fixLevelArr[0] : "1513209549243287040,24499269";
    var r = t.toString().padStart(2, "0");
    return (null === (e = this.localData.levelData) || void 0 === e ? void 0 : e[r]) || null;
  }
  onExtNormLv_getCont(t, e) {
    e();
  }
}