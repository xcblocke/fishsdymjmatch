import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import BaseCell from '../../../Scripts/base/ui/BaseCell';
import { EDailyAudioID, DailyStatus } from './DailyTypes';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { DotGameBtnClick, EBadgeClickType } from '../../../Scripts/dot/DGameBtnClick';
import DailyModel from './DailyModel';
@mj.class
export default class DailyCollectCellItem extends BaseCell {
  _txtTime = null;
  _startCellHeight = 660;
  _firstCellHeight = 500;
  _cellHeight = 400;
  _itemNodes = [];
  static prefabUrl = "prefabs/daily/DailyCollectList";
  static bundleName = "mainRes";
  uiOnLoad() {
    var t,
      e,
      i,
      o,
      n,
      a,
      l = this;
    this._txtTime = null === (t = cc.find("txt_time", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    for (var r = function r(t) {
        var r = cc.find("items/item_" + t, s._cellUI);
        if (!r) return "continue";
        s._itemNodes[t] = {
          container: r,
          imgBg: null === (e = cc.find("img_bg", r)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
          imgItem: null === (i = cc.find("img_item", r)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
          imgGrayItem: null === (o = cc.find("img_grayItem", r)) || void 0 === o ? void 0 : o.getComponent(cc.Sprite),
          txtDay: null === (n = cc.find("img_bg/txt_day", r)) || void 0 === n ? void 0 : n.getComponent(cc.Label),
          effItemLight: null === (a = cc.find("eff_itemLight", r)) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton),
          btnNode: cc.find("btn_item", r)
        };
        s._itemNodes[t].btnNode && s.OnButtonClick(s._itemNodes[t].btnNode, {
          func: function () {
            return l.onItemClick(t);
          },
          clickAudio: EDailyAudioID.DailyDay
        });
      }, s = this, d = 0; d < 3; d++) r(d);
    this.initCellSize();
  }
  initCellSize() {
    this._cellHeight = 450;
    this._startCellHeight = 660;
    this._firstCellHeight = 500;
  }
  updateUI() {
    if (this._data && this._data.items) {
      if ((this._data.first || this._data.start) && this._data.items[0]) {
        var t = DataReader.getByKey(ConfigType.daily_challenge, this._data.items[0].id);
        t && (this._txtTime.string = t.Year.toString());
      } else this._txtTime.string = "";
      this._cellUI.active = !this._data.empty;
      this.widgetUI();
      for (var e = 0; e < 3; e++) {
        var i = this._data.items[e],
          o = this._itemNodes[e];
        if (o) if (i) {
          o.container.active = true;
          i.monthTxt && I18NStrings.setText(o.txtDay.node, i.monthTxt[0], i.monthTxt[1]);
          o.imgItem.node.active = i.status === DailyStatus.Completed;
          o.imgGrayItem.node.active = i.status != DailyStatus.Completed;
          o.effItemLight.node.active = i.status === DailyStatus.Completed;
          var n = 2000 * Math.random() + 200;
          this.playEffItemLight(o, n);
          if (i.status === DailyStatus.Completed) {
            this.loadCollectIcon(o.imgItem, i.rewardItemId, true);
          } else {
            this.loadCollectIcon(o.imgGrayItem, i.rewardItemId, false);
          }
        } else o.container.active = false;
      }
    }
  }
  playEffItemLight(t, e) {
    setTimeout(function () {
      t && cc.isValid(t.effItemLight) && t.effItemLight.node.active && playSpineAnim(t.effItemLight, -1, "init");
    }, e);
  }
  widgetUI() {
    if (this._data.start) {
      this._cellUI.height = this._startCellHeight;
      this.node.height = this._startCellHeight;
    } else if (this._data.first) {
      this._cellUI.height = this._firstCellHeight;
      this.node.height = this._firstCellHeight;
    } else {
      this._cellUI.height = this._cellHeight;
      this.node.height = this._cellHeight;
    }
  }
  loadCollectIcon(t, e, i) {
    if (DataReader.getByKey(ConfigType.item_config, e)) {
      var o = DailyModel.getInstance().getItemIconUrl(e),
        n = i ? o : o + "_gray";
      BaseSprite.refreshWithNode(t.node, n);
    }
  }
  onItemClick(t) {
    if (this._data && this._data.items && this._data.items[t]) {
      var e = this._data.items[t],
        i = DataReader.getByKey(ConfigType.daily_challenge, e.id);
      if (e.status === DailyStatus.Completed || this._data.type != BadgeType.Daily) {
        DotGameBtnClick.dotBadge(EBadgeClickType.RewardHas, i.Year + "年" + i.Month + "月");
        ControllerManager.getInstance().pushViewByController("DailyRewardController", {
          itemId: e.rewardItemId,
          dailyId: e.id
        });
      } else {
        DotGameBtnClick.dotBadge(EBadgeClickType.RewardNot, i.Year + "年" + i.Month + "月");
        ControllerManager.getInstance().pushViewByController("DailyController", {
          showReward: true,
          isShowAction: false,
          success: false,
          isReuse: true,
          specifiedDate: true,
          isReplace: true,
          id: e.id
        });
      }
    }
  }
  getCellData() {
    return this._data;
  }
}