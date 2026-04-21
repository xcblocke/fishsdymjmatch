import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("FailFreeShuffleTrait")
export default class FailFreeShuffleTrait extends Trait {
  _config = {
    freeCount: 4
  };
  static traitKey = "FailFreeShuffle";
  onLoad() {
    var t, o;
    super.onLoad.call(this);
    this._config = {
      freeCount: null !== (o = null === (t = this._traitData) || void 0 === t ? void 0 : t.freeCount) && void 0 !== o ? o : 4
    };
    this.isLocalEmpty(this.localData.usedFreeShuffleCount) && (this.localData.usedFreeShuffleCount = 0);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  getRemainingFreeCount() {
    return Math.max(0, this._config.freeCount - this.localData.usedFreeShuffleCount);
  }
  hasFreeCount() {
    return this.getRemainingFreeCount() > 0;
  }
  consumeFreeCount() {
    this.localData.usedFreeShuffleCount = this.localData.usedFreeShuffleCount + 1;
  }
  onGameUI_onBtnShuffle(e, t) {
    t();
  }
  onFailBhv_start(e, t) {
    var o, r, n;
    if (this.hasFreeCount()) {
      var i = e.ins,
        l = null === (n = null === (r = null === (o = e.args) || void 0 === o ? void 0 : o[0]) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.isGM;
      if ((null == i ? void 0 : i.context) && !l && !i.context.getTileMapObject().checkIsDead([])) {
        t();
        return;
      }
      this.showFreeShuffleDialog();
      i && "function" == typeof i.finish && i.finish();
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
  showFreeShuffleDialog() {
    var e = this;
    ControllerManager.getInstance().closeViewByName("WatchAdGetPropController");
    this.pushController("FailFreeShuffleDialogController", {
      onFreeShuffle: function () {
        e.executeFreeShuffleAndConsume();
      },
      onClose: function () {},
      bgStyle: null
    });
  }
  executeFreeShuffleAndConsume() {
    this.consumeFreeCount();
    GameInteraction.input({
      inputType: EGameInputEnum.Shuffle,
      from: EShuffleFrom.Free
    });
  }
}