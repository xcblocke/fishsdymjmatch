import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { ETileNodeZIndex, ETileNodeNames } from '../../../Scripts/BaseTileNode';
@mj.trait
@mj.class("Tile2RollCardLightTrait")
export default class Tile2RollCardLightTrait extends Trait {
  static traitKey = "Tile2RollCardLight";
  onLoad() {
    super.onLoad.call(this);
  }
  getSpineCfg() {
    return {
      path: "spine/gameplay_mj_choose_light",
      bundle: this.traitData.bundleName || "l_tile2RollCardLight"
    };
  }
  getLightSize() {
    return cc.v2(163, 201);
  }
  onTile2FlipAni_playEnter(e, t) {
    var i = this.getTile2Node(e),
      r = this.getSpineCfg();
    if (i && r.path) {
      var o = i.tileNode;
      if (cc.isValid(o)) {
        var n = o.getChildByName("Tile2RollCardLight");
        if (!n || !cc.isValid(n)) {
          (n = new cc.Node("Tile2RollCardLight")).parent = o;
          n.zIndex = ETileNodeZIndex.RollCardLight;
          var l = o.getChildByName(ETileNodeNames.imgCardBg);
          if (l) {
            var s = this.getLightSize();
            if (l.width && l.height) {
              var p = l.width,
                d = l.height,
                f = p / s.x,
                u = d / s.y;
              n.setScale(f, u, 1);
            }
          }
        }
        if (n) {
          n.active = true;
          var h = BaseSpine.refreshWithNode(n, r.path, r.bundle);
          h.setAnimation("in", 1, function () {
            h.setAnimation("idle", -1);
          });
        }
        t();
      } else t();
    } else t();
  }
  onTile2FlipAni_playExit(e, t) {
    var i = this.getTile2Node(e);
    if (i && cc.isValid(i.tileNode)) {
      var r = i.tileNode.getChildByName("Tile2RollCardLight");
      if (r && r.activeInHierarchy) {
        var o = r.getComponent(BaseSpine);
        o && o.setAnimation("out", 1);
      }
      t();
    } else t();
  }
  onRollCrdComp_playFly(e, t) {
    var i,
      r = null === (i = e.ins._host) || void 0 === i ? void 0 : i.tileNode;
    if (r && cc.isValid(r)) {
      var o = r.getChildByName("Tile2RollCardLight");
      if (o && o.activeInHierarchy) {
        var n = o.getComponent(BaseSpine);
        n && n.setAnimation("fly", 1, function () {
          o.active = false;
        });
      }
      t();
    } else t();
  }
  getTile2Node(e) {
    var t = null == e ? void 0 : e.ins;
    return (null == t ? void 0 : t._baseTileNode) || null;
  }
}