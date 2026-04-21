import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
@mj.trait
@mj.class("FlowerCardStarTrait")
export default class FlowerCardStarTrait extends Trait {
  _exchangeNames = {
    H_lan: "H_mei",
    H_zhu: "H_mei",
    H_ju: "H_mei",
    J_xia: "J_chun",
    J_qiu: "J_chun",
    J_dong: "J_chun"
  };
  _config = {};
  _gameType = MjGameType.None;
  static traitKey = "FlowerCardStar";
  get _flowerSeriesList() {
    return FlowerStarConfigUtil.getFullList();
  }
  onLoad() {
    var t, r, a, o, i, n;
    super.onLoad.call(this);
    this._config = {
      Normal: null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.Normal) && void 0 !== r ? r : 0,
      DailyChallenge: null !== (o = null === (a = this._traitData) || void 0 === a ? void 0 : a.DailyChallenge) && void 0 !== o ? o : 0,
      Travel: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.Travel) && void 0 !== n ? n : 0,
      priority: ELowPriorityBundlePriority.DefaultCardXingyunHuaPai
    };
  }
  onFlowerCS_shouldLimit(e, t) {
    var r,
      a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
    if (this.isGameTypeOpen(a) || this.isAllStar()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      t();
    }
  }
  onFlowerCS_preloadAll(e, t) {
    var r,
      a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
    if (this.isGameTypeOpen(a) || this.isAllStar()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      t();
    }
  }
  onFlowerCS_getAllModeData(e, t) {
    var r = e.beforReturnVal;
    if (r) for (var a = 0; a < r.length; a++) if ((o = r[a]).currentSeries) {
      if (o.currentSeries.isLocal || "mainRes" === o.currentSeries.bundle) continue;
      LowPriorityBundleLoader.getInstance().addTask(o.currentSeries.bundle, this._config.priority);
    }
    for (a = 0; a < this._flowerSeriesList.length; a++) {
      var o;
      (o = this._flowerSeriesList[a]).isLocal || "mainRes" === o.bundle || LowPriorityBundleLoader.getInstance().addTask(o.bundle, this._config.priority);
    }
    t({
      returnVal: r
    });
  }
  onFlowerCS_isBundleReady(e, t) {
    var r,
      a = e.args[0],
      o = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
    if (this.isGameTypeOpen(o) || this.isAllStar()) {
      var i = LowPriorityBundleLoader.getInstance().isBundlePreLoaded(a);
      t({
        returnType: TraitCallbackReturnType.jump,
        returnVal: i
      });
    } else t();
  }
  onFlowerCS_getResName(e, t) {
    var r,
      a = e.args[0];
    this._exchangeNames[a] && (a = this._exchangeNames[a]);
    var o = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType;
    if (this.isGameTypeOpen(o) || this.isAllStar()) {
      t({
        returnType: TraitCallbackReturnType.jump,
        returnVal: a
      });
    } else {
      t();
    }
  }
  onInitViewBhv_crtTls(e, t) {
    var r, a;
    this._gameType = null === (a = null === (r = e.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType;
    t();
  }
  isGameTypeOpen(e) {
    return 1 == this._config[e];
  }
  isAllStar() {
    return 1 == this._config.Travel && 1 == this._config.DailyChallenge && 1 == this._config.Normal;
  }
  onFlowerCS_getFlowerSeries(e, t) {
    if (this.isGameTypeOpen(this._gameType) || this.isAllStar()) {
      t({
        returnType: TraitCallbackReturnType.jump,
        returnVal: this._flowerSeriesList
      });
    } else {
      t();
    }
  }
  onFlowerCS_setLastSeriesId(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      this.localData.lastSeriesId = e.args[0];
      this.localData = this.localData;
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else t();
  }
  onFlowerCS_getLastSeriesId(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      t({
        returnType: TraitCallbackReturnType.return,
        returnVal: this.localData.lastSeriesId > 0 ? this.localData.lastSeriesId : 1
      });
    } else {
      t();
    }
  }
  onFlowerCS_setSeqId(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      this.localData.sequenceSeriesId = e.args[0];
      this.localData = this.localData;
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else t();
  }
  onFlowerCS_getSeqId(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      t({
        returnType: TraitCallbackReturnType.jump,
        returnVal: this.localData.sequenceSeriesId > 0 ? this.localData.sequenceSeriesId : 1
      });
    } else {
      t();
    }
  }
  onClearEffBhv_isSpCard(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      t({
        returnVal: false
      });
    } else {
      t();
    }
  }
}