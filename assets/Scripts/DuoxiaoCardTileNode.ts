import BaseLabel from './gamePlay/base/ui/BaseLabel';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeZIndexMap, ETileNodeNames } from './BaseTileNode';
import { TileNodeObject } from './TileNodeObject';
export class DuoxiaoCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.DuoxiaoCard;
  refreshNode(t) {
    super.refreshNode.call(this, t);
    this._duoxiaoFlagNode || (this._duoxiaoFlagNode = this.createDuoxiaoFlag());
    this.updateDuoxiaoFlag();
  }
  createDuoxiaoFlag() {
    if (!this.tileNode.getChildByName("DuoxiaoCardFlagNode")) {
      var e = new cc.Node();
      e.name = "DuoxiaoCardFlagNode";
      this.tileNode.addChild(e);
      e.scale = 1 * this.info.tileObject.layoutScale;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
      return e;
    }
  }
  updateDuoxiaoFlag() {
    var e = this;
    if (this._duoxiaoFlagNode) {
      var t = BaseSpine.refreshWithNode(this._duoxiaoFlagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
      t.setAnimation("init", -1, null, false);
      t.attachNode("hook_number", function () {
        var t = e.info.tileObject.getDuoxiaoCount().toString(),
          o = BaseLabel.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
        o.node.name = "DuoxiaoCardCountNode";
        o.setColor(new cc.Color().fromHEX("#013713"));
        o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
        return o.node;
      });
    }
  }
}