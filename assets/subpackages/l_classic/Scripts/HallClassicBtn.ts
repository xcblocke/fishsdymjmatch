import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../Scripts/base/event/EventDefine';
@mj.class
export default class HallClassicBtn extends BaseUI {
  @mj.component("BgBtn/Label", cc.Label)
  levelLabel: "BgBtn/Label" = null;
  levelId = 0;
  @mj.node("BgBtn")
  _bgBtnNode: "BgBtn" = null;
  static prefabUrl = "prefabs/hall/HallClassicBtn";
  static bundleName = "mainRes";
  get BgBtnNode() {
    return this._bgBtnNode;
  }
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
    return _t;
  }
  @mj.traitEvent("ClassicBtn_updateUI")
  updateUI() {}
  @mj.traitEvent("ClassicBtn_forceUpdate")
  onForceUpdate() {}
  onBtnClick() {
    ControllerManager.getInstance().pushViewByController("ClassicController");
    DotGameBtnClick.dotHall(EHomePageClickType.Classic, this.levelId);
  }
}