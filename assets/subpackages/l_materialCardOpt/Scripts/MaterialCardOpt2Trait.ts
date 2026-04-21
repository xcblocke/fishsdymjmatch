import MaterialCardOptBaseTrait from './MaterialCardOptBaseTrait';
import MaterialCardOptListTrait from './MaterialCardOptListTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MaterialCardOpt2Trait")
export default class MaterialCardOpt2Trait extends MaterialCardOptBaseTrait {
  _startLevel = 10;
  _intervalRange = [3, 5];
  _gameModes = [MjGameType.Normal];
  static traitKey = "MaterialCardOpt2";
  onLoad() {
    var e, r, a, i, o, n;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
    this._intervalRange = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervalRange) && void 0 !== i ? i : [3, 5];
    this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [MjGameType.Normal];
    this.isLocalEmpty(this.localData.modeData) && (this.localData.modeData = {});
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isGameModeMatch(this._gameModes)) {
        e();
        return;
      }
      var a = this.getCurrentGameDataLevel();
      if (a >= this._getNextTriggerLevel()) {
        var i = this._generateRandomInterval();
        this._setNextTriggerLevel(a + i);
        this._triggerMaterialChange();
      } else 0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
      e();
    } catch (t) {
      console.error("[" + MaterialCardOpt2Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  _getNextTriggerLevel() {
    var t,
      e = this.getCurrentGameType();
    return null !== (t = this.localData.modeData[e]) && void 0 !== t ? t : this._startLevel;
  }
  _setNextTriggerLevel(t) {
    var e = this.getCurrentGameType();
    this.localData.modeData[e] = t;
    this.localData.modeData = this.localData.modeData;
  }
  _generateRandomInterval() {
    var t = __read(this._intervalRange, 2),
      e = t[0],
      r = t[1];
    return e + Math.floor(Math.random() * (r - e + 1));
  }
  _triggerMaterialChange() {
    var t = MaterialCardOptListTrait.getInstance();
    t && t.switchToNextMaterialCard();
  }
}