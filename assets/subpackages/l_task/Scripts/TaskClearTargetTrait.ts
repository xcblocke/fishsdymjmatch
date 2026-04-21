import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TaskModel } from './model/TaskModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("TaskClearTargetTrait")
export default class TaskClearTargetTrait extends Trait {
  static traitKey = "TaskClearTarget";
  onLoad() {
    super.onLoad.call(this);
  }
  isTaskCard(t) {
    var e = TaskModel.getInstance();
    return !!e && e.getTaskCardResName() === t;
  }
  onCardUtil_atlasPathBundle(t, e) {
    var o;
    try {
      var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
      if (this.isTaskCard(i)) {
        var r = CardUtil.getFullPath(i),
          s = CardUtil.getCardBundleName(i),
          l = CardUtil.fromAtlas(i);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: r,
            bundleName: s,
            fromAtlas: l
          }
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + TaskClearTargetTrait.traitKey + "] 劫持失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}