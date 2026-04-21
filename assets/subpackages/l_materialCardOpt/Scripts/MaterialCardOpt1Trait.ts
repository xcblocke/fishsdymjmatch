import MaterialCardOptBaseTrait from './MaterialCardOptBaseTrait';
import MaterialCardOptListTrait from './MaterialCardOptListTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MaterialCardOpt1Trait")
export default class MaterialCardOpt1Trait extends MaterialCardOptBaseTrait {
  _startLevel = 10;
  _intervals = [3, 5, 6];
  _gameModes = [MjGameType.Normal];
  static traitKey = "MaterialCardOpt1";
  onLoad() {
    var e, r, a, i, o, n;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
    this._intervals = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervals) && void 0 !== i ? i : [3, 5, 6];
    this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [MjGameType.Normal];
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isGameModeMatch(this._gameModes)) {
        e();
        return;
      }
      var a = this.getCurrentGameDataLevel();
      if (this._shouldTrigger(a)) {
        this._triggerMaterialChange();
      } else {
        0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCardOpt1Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  _shouldTrigger(t) {
    if (t < this._startLevel) return false;
    if (t === this._startLevel) return true;
    for (var e = t - this._startLevel, r = 0; r < this._intervals.length; r++) {
      var a = this._intervals[r];
      if (r === this._intervals.length - 1) return e > 0 && e % a == 0;
      if (e === a) return true;
      if (!(e > a)) return false;
      e -= a;
    }
    return false;
  }
  _triggerMaterialChange() {
    var t = MaterialCardOptListTrait.getInstance();
    t && t.switchToNextMaterialCard();
  }
}