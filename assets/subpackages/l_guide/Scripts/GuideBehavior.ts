import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import GuideUI from './GuideUI';
export default class GuideBehavior extends GameBehaviorsBase {
  _behaviorKey = "GuideBehavior";
  @mj.traitEvent("GuideBhv_finish")
  finishGuide() {}
  @mj.traitEvent("GuideBhv_start")
  start(t) {
    var e = this,
      i = this.context.gameView.guideRootNode,
      n = i.guideUI,
      o = i.getChildByName("guideNode"),
      a = this.context.getTileNodeMap().get(t.data.tileId),
      s = this.context.gameView.topRootNode,
      p = this.context.gameView.bottomRootNode,
      u = s.getChildByName("btnBack"),
      l = s.getChildByName("btnSettings");
    if (a && !t.data.finishGuide) {
      p.active = false;
      u.active = false;
      l.active = false;
      var d = a.layerNode.convertToWorldSpaceAR(a.info.tileObject.getPosition());
      if (o) {
        n.setGuidePosition(t.data.tileId, d, t.data.showHand);
        n.setText(t.data.text, t.data.guideStep);
        this.finish(EBehaviorEnum.Success);
      } else GuideUI.createUI().then(function (o) {
        o.parent = e.context.gameView.guideRootNode;
        o.name = "guideNode";
        n = o.getComponent(GuideUI);
        i.guideUI = n;
        n.setGuidePosition(t.data.tileId, d, t.data.showHand);
        n.setText(t.data.text, t.data.guideStep);
        e.finish(EBehaviorEnum.Success);
      });
    } else {
      if (o) {
        o.destroy();
        i.guideUI = null;
      }
      this.finishGuide();
      this.finish(EBehaviorEnum.Success);
      l.active = true;
    }
  }
}