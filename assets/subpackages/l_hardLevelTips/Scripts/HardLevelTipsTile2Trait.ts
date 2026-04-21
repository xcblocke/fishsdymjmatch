import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { HardLevelTipsBehavior } from './HardLevelTipsBehavior';
import { HardLevelTipsEffect } from './HardLevelTipsEffect';
@mj.trait
@mj.class("HardLevelTipsTile2Trait")
export default class HardLevelTipsTile2Trait extends Trait {
  static traitKey = "HardLevelTipsTile2";
  onLoad() {
    super.onLoad.call(this);
    this.registerBehaviors();
  }
  registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior);
  }
  isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  onIptTile2InitVw_pushEff(e, t) {
    var r, o;
    if (this.isTile2Mode()) {
      var i = e.ins.gameContext,
        a = i.getIsNewGame(),
        s = i.getGameData().getLevelId(),
        n = ExtractTool.getInstance().isHardLevel(s),
        c = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
      n && (a || c) && this.pushHardLevelTipsEffect(e, s);
      t();
    } else t();
  }
  pushHardLevelTipsEffect(e, t) {
    var r = ExtractTool.getInstance().isExpertUI(t) ? "in_2" : "in_1",
      o = new HardLevelTipsEffect({
        aniName: r
      });
    e.ins.pushEffect(o, EInsertType.Parallel);
  }
}