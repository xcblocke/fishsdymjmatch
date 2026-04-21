import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TouchSizeScaleTrait")
export default class TouchSizeScaleTrait extends Trait {
  static traitKey = "TouchSizeScale";
  onLoad() {
    super.onLoad.call(this);
  }
  getTouchSizeOffsets(t, e) {
    var r = this._traitData.canTouchScale || 1.2,
      o = this._traitData.canNotTouchScale || 0.8,
      i = e.getContentSize();
    if (t.isCardLock(e)) {
      var n, a;
      return [-(n = i.width * (1 - o) / 2), -n, -(a = i.height * (1 - o) / 2), -a];
    }
    return [-(n = i.width * (1 - r) / 2), -n, -(a = i.height * (1 - r) / 2), -a];
  }
  onTileMapObj_updTchSz(t, e) {
    var r = t.ins,
      o = t.args[0],
      i = this.getTouchSizeOffsets(r, o);
    o.updateTouchSizeOffsets(i);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump
    });
  }
  onGameMod_modifyLayout(t, e) {
    t.ins.context.getTileMapObject().updateTouchSizeOffsets();
    e();
  }
}