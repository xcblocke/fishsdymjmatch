import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { DianZanBehavior } from './DianZanBehavior';
import { DianZanEffect } from './DianZanEffect';
@mj.trait
@mj.class("DianZanTrait")
export default class DianZanTrait extends Trait {
  _beforeClearMatchNum = 0;
  _afterClearMatchNum = 0;
  static traitKey = "DianZan";
  onLoad() {
    super.onLoad.call(this);
    this._registerBehaviors();
  }
  _registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.ShowDianZan, DianZanBehavior);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Effect_ClearAfter] = this.onEffectClearAfterCB.bind(this);
    _t[EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
    return _t;
  }
  onEffectInitViewCB(t) {
    this._beforeClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
  }
  onEffectClearAfterCB(t, e) {
    Date.now(), Math.random().toString(36).substr(2, 9);
    e.options.input.inputType !== EGameInputEnum.AutoMerge && this._handlePushClearEffect(t, e);
  }
  @mj.traitEvent("DianZanTt_checkDZ")
  _checkDianZan() {
    return this._afterClearMatchNum >= this._beforeClearMatchNum;
  }
  @mj.traitEvent("DianZanTt_checkDZSpecial")
  checkDianZanSpecial() {
    return true;
  }
  _handlePushClearEffect(t, e) {
    this._afterClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
    if (this._checkDianZan()) {
      if (!UserModel.getInstance().isGuideFinished() || !this.checkDianZanSpecial(e.tileId, e.lastTileId)) return;
      var n = new DianZanEffect({
        tileId: e.tileId,
        lastTileId: e.lastTileId
      });
      t.pushEffect(n, EInsertType.Parallel);
    }
    this._beforeClearMatchNum = this._afterClearMatchNum;
  }
}