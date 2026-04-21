import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { DotGameBtnClick, EBadgeClickType } from '../../../Scripts/dot/DGameBtnClick';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.class
export default class DailyRewardCellItem extends BaseUI {
  _data = null;
  _imgReward = null;
  _imgDiban = null;
  onLoad() {
    super.onLoad.call(this);
    var e = cc.find("view/img_reward", this.node);
    e && (this._imgReward = e.getComponent(cc.Sprite));
    var i = cc.find("view/img_bg/img_diban", this.node);
    i && (this._imgDiban = i.getComponent(cc.Sprite));
    this.initView();
  }
  initView() {
    this.registerEvents();
  }
  registerEvents() {
    var t;
    (null === (t = this._imgReward) || void 0 === t ? void 0 : t.node) && this.OnButtonClick(this._imgReward.node, this.onMoreClick.bind(this));
  }
  updateCell(t) {
    this._data = t;
    this.updateUI();
  }
  updateUI() {
    if (this._data.completed) {
      this.loadImgDiban("texture/daily/challenge_img_diban_1");
    } else {
      this.loadImgDiban("texture/daily/challenge_img_diban_2");
    }
  }
  loadImgDiban(t) {
    BaseSprite.refreshWithNode(this._imgDiban.node, t);
  }
  onMoreClick() {
    DotGameBtnClick.dotBadge(EBadgeClickType.DailyBtn);
    ControllerManager.getInstance().pushViewByController("DailyCollController", {
      isShowAction: false,
      enterType: 1
    });
  }
  getCellData() {
    return this._data;
  }
  onDestroy() {
    var e, i;
    this._data = null;
    null === (i = null === (e = this._imgReward) || void 0 === e ? void 0 : e.node) || void 0 === i || i.off(cc.Node.EventType.TOUCH_END, this.onMoreClick, this);
    super.onDestroy.call(this);
  }
}