import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Card6AutoClearTrait")
export default class Card6AutoClearTrait extends Trait {
  static traitKey = "Card6AutoClear";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData.config || {};
    null == this._config.initRate && (this._config.initRate = 100);
    null == this._config.decreaseRate && (this._config.decreaseRate = 40);
    null == this._config.increaseRate && (this._config.increaseRate = 50);
    null == this._config.minTiles && (this._config.minTiles = 6);
    null == this._config.maxTiles && (this._config.maxTiles = 6);
    null == this._config.openLevel && (this._config.openLevel = 10);
    GameUtils.isEmpty(this.localData.curRate) && (this.localData.curRate = this._config.initRate);
  }
  onAllClearTt_minTiles(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: this._config.minTiles
    });
  }
  onAllClrChk_canTrig(t, e) {
    var i,
      r,
      a,
      n,
      l = function l(t) {
        return e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: t
        });
      };
    if (this._isGuideActive()) l(false);else {
      if (UserModel.getInstance().getMainGameData().getLevelId() < this._config.openLevel) l(false);else {
        var u = null === (i = t.ins) || void 0 === i ? void 0 : i.context;
        if (u) {
          var f = null === (r = u.getTileMapObject) || void 0 === r ? void 0 : r.call(u);
          if (f) {
            var p = null !== (n = null === (a = f.getCurTilesCnt) || void 0 === a ? void 0 : a.call(f)) && void 0 !== n ? n : 0;
            if (p < this._config.minTiles || p > this._config.maxTiles) l(false);else {
              var _ = this.localData.curRate / 100,
                d = Math.random() < _,
                h = d ? -this._config.decreaseRate : this._config.increaseRate;
              this.localData.curRate = GameUtils.clamp(this.localData.curRate + h, 0, 100);
              l(d);
            }
          } else l(false);
        } else l(false);
      }
    }
  }
  _isGuideActive() {
    var t = UserModel.getInstance().getMainGameData().getLevelId();
    return !UserModel.getInstance().isGuideFinished() || 1 === t;
  }
}