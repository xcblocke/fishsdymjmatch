import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ELevelDiff } from './NormalBtnEnum';
import NormalBtnDiffUI from './NormalBtnDiffUI';
@mj.trait
@mj.class("NormalBtnDiff")
export default class NormalBtnDiffTrait extends Trait {
  static traitKey = "NormalBtnDiff";
  onLoad() {
    super.onLoad.call(this);
    this.isLocalEmpty(this.localData.lastLevelDiff) && (this.localData.lastLevelDiff = ELevelDiff.Normal);
    this.registerEvent([{
      event: "GameMod_modifyWinTile2",
      type: 2
    }]);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onHallCtl_initRes(t, e) {
    t.ins.addPreloadRes("Prefab", NormalBtnDiffUI.getUrl());
    e();
  }
  onHallNmlBtn_updateUI(t, e) {
    var o = cc.find("NormalBtnDiff", t.ins.node);
    if (!cc.isValid(o)) {
      o = t.ins.createUISync(NormalBtnDiffUI);
      if (cc.isValid(o)) {
        t.ins.node.addChild(o);
        o.setPosition(0, 0);
        o.setSiblingIndex(1);
      }
    }
    if (cc.isValid(o)) {
      var r = o.getComponent(NormalBtnDiffUI),
        i = cc.find("BgWood", t.ins.node);
      cc.isValid(i) && (i.active = true);
      if (cc.isValid(r)) {
        var n = this.localData.lastLevelDiff;
        r.updateDiff(n) && n != ELevelDiff.Normal && (i.active = false);
      }
    }
    e();
  }
  onGameMod_modifyWin(t, e) {
    this.recordDiff(t.ins);
    e();
  }
  onGameMod_modifyWinTile2(t, e) {
    this.recordDiff(t.ins);
    e();
  }
  recordDiff(t) {
    var e = t.context.getGameData().getLevelId(),
      o = ExtractTool.getInstance().isExpertUI(e),
      r = ExtractTool.getInstance().isHardUI(e);
    this.localData.lastLevelDiff = o ? ELevelDiff.Expert : r ? ELevelDiff.Hard : ELevelDiff.Normal;
  }
}