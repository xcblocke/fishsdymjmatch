import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import ClassicBreakBestView from './ClassicBreakBestView';
export default class BreakBestScoreBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.breakType;
    this.showBreakEffect(t);
    this.finish(EBehaviorEnum.Success);
  }
  showBreakEffect(e) {
    var i = this;
    ClassicBreakBestView.createUI().then(function (t) {
      if (cc.isValid(i.context.gameView.node)) {
        t.setPosition(0, 0, 0);
        t.getComponent(ClassicBreakBestView).setBreakType(e);
        i.context.gameView.node.addChild(t);
      }
    }).catch(function (e) {
      console.error("[" + BreakBestScoreBehavior.name + "] 创建突破最高分视图失败:" + ((null == e ? void 0 : e.message) || "创建突破最高分视图失败"));
    });
  }
}