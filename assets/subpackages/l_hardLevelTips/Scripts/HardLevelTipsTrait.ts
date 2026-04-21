import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { UpdateLevelEffect } from '../../../Scripts/UpdateLevelEffect';
import { UpdateScoreEffect } from '../../../Scripts/UpdateScoreEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { HardLevelTipsBehavior } from './HardLevelTipsBehavior';
import { HardLevelTipsEffect } from './HardLevelTipsEffect';
@mj.trait
@mj.class("HardLevelTipsTrait")
export default class HardLevelTipsTrait extends ExtractTrait {
  static traitKey = "HardLevelTips";
  onLoad() {
    super.onLoad.call(this);
    this.registerBehaviors();
  }
  registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior);
  }
  onIptInitView_exec(e, t) {
    var r, o;
    if (this.checkGameMode()) {
      var i = e.ins.gameContext,
        a = i.getIsNewGame(),
        n = i.getGameData().getLevelId(),
        c = ExtractTool.getInstance().isHardLevel(n),
        p = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
      c && (a || p) && this.pushHardLevelTipsEffect(e, n);
      t();
    } else t();
  }
  pushHardLevelTipsEffect(e, t) {
    var r = this.getAniName(t),
      o = new HardLevelTipsEffect({
        aniName: r
      });
    e.ins.pushEffect(o, EInsertType.Parallel);
    this.pushUpdateLevelEffect(e.ins);
    this.pushUpdateScoreEffect(e.ins);
  }
  pushUpdateLevelEffect(e) {
    var t = new UpdateLevelEffect({
      level: e.gameContext.getGameData().getLevelId()
    });
    e.pushEffect(t, EInsertType.Parallel);
  }
  pushUpdateScoreEffect(e) {
    var t = e.gameContext.getGameData(),
      r = new UpdateScoreEffect({
        addScore: 0,
        targetScore: t.getScore(),
        isShowCombo: false
      });
    e.pushEffect(r, EInsertType.Parallel);
  }
  getAniName(e) {
    return ExtractTool.getInstance().isExpertUI(e) ? "in_2" : "in_1";
  }
}