import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("TravelTopCollectTrait")
export default class TravelTopCollectTrait extends Trait {
  static traitKey = "TravelTopCollect";
  onTravelGmVw_initExpands(e, t) {
    var r = e.ins;
    r.gameType === MjGameType.Travel && this.fixTopCollectNode(r);
    t();
  }
  fixTopCollectNode(e) {
    if (e && e.nodeCollect) {
      var t = BaseSprite.create("texture/gamePlayTop/gameplay_bg", "mainRes", cc.Sprite.SizeMode.CUSTOM);
      t.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
      t.node.name = "nodeCollectBg";
      t.node.setPosition(e.nodeCollect.position);
      t.node.setContentSize(cc.size(726, 152));
      t.node.parent = e.nodeCollect.parent;
      t.node.setSiblingIndex(e.nodeCollect.getSiblingIndex());
    }
  }
  getOffsetY(e) {
    var t = 8;
    if (1 === e.length && e[0].type === ETileType.Yoga) switch (TravelGameModel.getInstance().getCurJourney()) {
      case "Journey01":
        t = -2;
        break;
      case "Journey02":
        t = 0;
        break;
      case "Journey03":
        t = 4;
        break;
      case "Journey04":
        t = -6;
        break;
      default:
        t = -2;
    }
    return t;
  }
  onInitColTagBhv_crtItems(e, t) {
    var r = __read(e.args, 1)[0],
      o = this.getOffsetY(r);
    e.args[0] = r;
    e.args[1] = r.length > 6 ? 20 : 15;
    e.args[2] = 157;
    e.args[3] = 0.56;
    e.args[4] = o;
    t();
  }
}