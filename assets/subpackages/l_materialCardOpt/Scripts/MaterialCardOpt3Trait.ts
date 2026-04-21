import MaterialCardOptBaseTrait from './MaterialCardOptBaseTrait';
import MaterialCardOptListTrait from './MaterialCardOptListTrait';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MaterialCardOpt3Trait")
export default class MaterialCardOpt3Trait extends MaterialCardOptBaseTrait {
  _startLevel = 10;
  _baseProb = 50;
  _probIncrement = 0;
  _gameModes = [MjGameType.Normal];
  static traitKey = "MaterialCardOpt3";
  onLoad() {
    var e, r, a, i, o, n, l, s;
    super.onLoad.call(this);
    var u = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.prob) && void 0 !== r ? r : [50];
    this._startLevel = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.startLevel) && void 0 !== i ? i : 10;
    this._baseProb = null !== (o = u[0]) && void 0 !== o ? o : 50;
    this._probIncrement = null !== (n = u[1]) && void 0 !== n ? n : 0;
    this._gameModes = null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.gameModes) && void 0 !== s ? s : [MjGameType.Normal];
    this.isLocalEmpty(this.localData.accumProb) && (this.localData.accumProb = {});
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isGameModeMatch(this._gameModes)) {
        e();
        return;
      }
      var a = this.getCurrentGameType(),
        i = this.getCurrentGameDataLevel();
      if (i < this._startLevel) {
        0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
        e();
        return;
      }
      if (this._isHardLevel(i)) {
        this._ensureAccumProbInitialized(a);
        this._tryTrigger(a);
      } else 0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
      e();
    } catch (t) {
      console.error("[" + MaterialCardOpt3Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  _ensureAccumProbInitialized(t) {
    if (null == this.localData.accumProb[t]) {
      this.localData.accumProb[t] = 0;
      this.localData.accumProb = this.localData.accumProb;
    }
  }
  _isHardLevel(t) {
    return GameUtils.isTypeHardLevel(this.getCurrentGameType(), t);
  }
  _tryTrigger(t) {
    var e = this.localData.accumProb[t],
      r = Math.min(100, this._baseProb + e);
    if (100 * Math.random() < r) {
      this._triggerMaterialChange();
      this.localData.accumProb[t] = 0;
      this.localData.accumProb = this.localData.accumProb;
    } else {
      var a = e + this._probIncrement;
      this.localData.accumProb[t] = a;
      this.localData.accumProb = this.localData.accumProb;
    }
  }
  _triggerMaterialChange() {
    var t = MaterialCardOptListTrait.getInstance();
    t && t.switchToNextMaterialCard();
  }
}