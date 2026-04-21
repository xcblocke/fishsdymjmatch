import Trait from '../../../Scripts/framework/trait/Trait';
import DragCardEffect from './DragCardEffect';
@mj.trait
@mj.class("ValentineDragCardEffectTrait")
export default class ValentineDragCardEffectTrait extends Trait {
  nodePool = [];
  static traitKey = "ValentineDragCardEffect";
  get tailType() {
    return null != this._traitData.tailType ? this._traitData.tailType : "short";
  }
  onMainGameCtrl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", ['r_valentineDragCardEffect:prefabs/DragCardEffect1', 'r_valentineDragCardEffect:prefabs/DragCardEffect2']);
  }
  onTileNodeObj_touchEnd(t, e) {
    e();
    var r = t.ins.cardNode;
    if (null != r.r_valentineDragCardEffect) if ("isLoading" == r.r_valentineDragCardEffect) r.r_valentineDragCardEffect = null;else {
      var n = r.r_valentineDragCardEffect;
      r.r_valentineDragCardEffect = null;
      if (cc.isValid(n)) {
        n.parent = null;
        this.nodePool.push(n);
      }
    }
  }
  onTileNodeObj_setPosition(t, e) {
    e();
    if (this.isDragCardEffectActive()) {
      var r = t.ins.cardNode;
      if (null == r.r_valentineDragCardEffect) if (this.nodePool.length > 0) {
        var n = this.nodePool.splice(0, 1)[0];
        r.r_valentineDragCardEffect = n;
        n.parent = r;
        n.setSiblingIndex(0);
      } else {
        r.r_valentineDragCardEffect = "isLoading";
        this.load(r);
      }
    }
  }
  load(t) {
    var e = "short" == this.tailType ? "prefabs/DragCardEffect1" : "prefabs/DragCardEffect2";
    DragCardEffect.createUI(e).then(function (e) {
      if (cc.isValid(e) && cc.isValid(t) && "isLoading" == t.r_valentineDragCardEffect) {
        t.r_valentineDragCardEffect = e;
        e.parent = t;
        e.setSiblingIndex(0);
      }
    }).catch(function (t) {
      console.error()
      console.error("[" + ValentineDragCardEffectTrait.traitKey + "] 游戏内创建拖拽特效失败:" + ((null == t ? void 0 : t.message) || "拖拽效果加载失败"));
    });
  }
  isDragCardEffectActive() {
    if (null != this._traitData.dragCardEffect) return this._traitData.dragCardEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}