import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("LevelHighLightTrait")
export default class LevelHighLightTrait extends Trait {
  _enabledLevels = [];
  static traitKey = "LevelHighLight";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._enabledLevels = (null === (e = this._traitData) || void 0 === e ? void 0 : e.levels) || [1, 2];
    this.localData.hasManuallySet || (this.localData.hasManuallySet = 0);
    this.localData.isSetInitHighlight || (this.localData.isSetInitHighlight = 0);
  }
  onUISetDlg_onLckHLClk(t, e) {
    this.localData.hasManuallySet = 1;
    e();
  }
  onIptSetLv_setData(t, e) {
    try {
      var r = t.args[0];
      if (!r) {
        e();
        return;
      }
      var a = r.levelId,
        o = UserModel.getInstance();
      if (0 === this.localData.isSetInitHighlight) {
        this.localData.isSetInitHighlight = 1;
        this.localData.isLockHighlightEnabled = o.isLockHighlightEnabled();
      }
      if (1 === this.localData.hasManuallySet) {
        e();
        return;
      }
      if (this._enabledLevels.includes(a)) {
        o.setLockHighlightEnabled(true);
      } else {
        o.setLockHighlightEnabled(this.localData.isLockHighlightEnabled);
      }
      e();
    } catch (t) {
      console.error("[" + LevelHighLightTrait.traitKey + "] 处理关卡设置事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}