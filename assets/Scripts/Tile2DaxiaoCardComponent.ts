import BaseSpine from './gamePlay/base/ui/BaseSpine';
import { TileNodeZIndexMap, ETileNodeNames } from './BaseTileNode';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2DaxiaoCardComponent extends TileNodeComponent {
  onRefreshNode() {
    this._flagNode || (this._flagNode = this._createFlag());
    this._updateFlag();
  }
  onUnbind() {
    this._flagNode && cc.isValid(this._flagNode) && this._flagNode.destroy();
    this._flagNode = null;
  }
  _createFlag() {
    var e = this._host.tileNode,
      t = e.getChildByName("DaxiaoCardFlagNode");
    if (t) return t;
    var o = new cc.Node("DaxiaoCardFlagNode");
    e.addChild(o);
    o.scale = 1 * this._host.info.tileObject.layoutScale;
    o.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
    return o;
  }
  _updateFlag() {
    this._flagNode && BaseSpine.refreshWithNode(this._flagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
  }
}