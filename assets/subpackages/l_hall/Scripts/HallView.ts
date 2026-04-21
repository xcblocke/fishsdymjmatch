import UIView from '../../../Scripts/framework/ui/UIView';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../Scripts/base/event/EventDefine';
import { TRAVEL_GAME_SESSION_CHANGE } from '../../../Scripts/config/TravelConfig';
import HallNormalBtn from './HallNormalBtn';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class HallView extends UIView {
  normalBtn = null;
  hallTheme = "";
  static prefabUrl = "prefabs/hall/HallBase";
  onLoad() {
    super.onLoad.call(this);
    this.initGm();
  }
  initGm() {}
  getMessageListeners() {
    var _t = {};
    _t[TRAVEL_GAME_SESSION_CHANGE] = this.onTravelChange.bind(this);
    _t[EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
    return _t;
  }
  @mj.traitEvent("HallVw_travelChange")
  onTravelChange() {}
  @mj.traitEvent("HallVw_initBtns")
  createButtons(t) {
    var e = this;
    (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
    HallNormalBtn.createUI().then(function (t) {
      if (cc.isValid(t) && cc.isValid(e.node)) {
        e.node.addChild(t);
        e.normalBtn = t;
        e.normalBtn.getComponent(HallNormalBtn).updateUI();
      }
    }).catch(function (t) {
      console.error("[HallView] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallNormalBtn按钮加载失败"));
    });
  }
  @mj.traitEvent("HallVw_updateUI")
  updateUI(t) {
    (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
    this.changeTheme(this.hallTheme, true);
    cc.isValid(this.normalBtn) && this.normalBtn.getComponent(HallNormalBtn).updateUI();
    this.onPopView();
  }
  @mj.traitEvent("HallVw_onPopView")
  onPopView() {}
  @mj.traitEvent("HallVw_forceUpdate")
  onForceUpdate() {}
  isSimpleHall() {
    return "Hall" === this.hallTheme;
  }
  @mj.traitEvent("HallVw_chgTheme")
  changeTheme(t, e) {
    if (t) {
      var o = DataReader.getTypeList(ConfigType.HallTheme, "SkinKey", t);
      if (o && 0 !== o.length) {
        NodeSkinTool.parseConfigList(this.node, o, MjGameType.Normal, "");
        e && (this.hallTheme = t);
      }
    }
  }
}