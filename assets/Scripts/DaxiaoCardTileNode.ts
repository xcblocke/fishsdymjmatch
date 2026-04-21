import BaseSpine from './gamePlay/base/ui/BaseSpine';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeZIndexMap, ETileNodeNames } from './BaseTileNode';
import { TileNodeObject } from './TileNodeObject';
export class DaxiaoCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.DaxiaoCard;
  refreshNode(t) {
    super.refreshNode.call(this, t);
    this._daxiaoFlagNode || (this._daxiaoFlagNode = this.createDaxiaoFlag());
    this.updateDaxiaoFlag();
  }
  createDaxiaoFlag() {
    if (!this.tileNode.getChildByName("DaxiaoCardFlagNode")) {
      var e = new cc.Node();
      e.name = "DaxiaoCardFlagNode";
      this.tileNode.addChild(e);
      e.scale = 1 * this.info.tileObject.layoutScale;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
      return e;
    }
  }
  updateDaxiaoFlag() {
    this._daxiaoFlagNode && BaseSpine.refreshWithNode(this._daxiaoFlagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
  }
  realShowSelectEffect() {
    super.realShowSelectEffect.call(this);
  }
  hideSelectEffect() {
    super.hideSelectEffect.call(this);
  }
}