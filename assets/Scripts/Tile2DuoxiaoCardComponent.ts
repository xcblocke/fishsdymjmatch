import BaseLabel from './gamePlay/base/ui/BaseLabel';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
import { TileNodeZIndexMap, ETileNodeNames } from './BaseTileNode';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2DuoxiaoCardComponent extends TileNodeComponent {
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
      t = e.getChildByName("DuoxiaoCardFlagNode");
    if (t) return t;
    var o = new cc.Node("DuoxiaoCardFlagNode");
    e.addChild(o);
    o.scale = 1 * this._host.info.tileObject.layoutScale;
    o.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
    return o;
  }
  _updateFlag() {
    var e = this;
    if (this._flagNode) {
      var t = BaseSpine.refreshWithNode(this._flagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
      t.setAnimation("init", -1, null, false);
      t.attachNode("hook_number", function () {
        var t = e._host.info.tileObject.getDuoxiaoCount().toString(),
          o = BaseLabel.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
        o.node.name = "DuoxiaoCardCountNode";
        o.setColor(new cc.Color().fromHEX("#013713"));
        o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
        return o.node;
      });
    }
  }
}