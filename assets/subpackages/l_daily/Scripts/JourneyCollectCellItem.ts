import { DataReader } from '../../../Scripts/framework/data/DataReader';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import BaseCell from '../../../Scripts/base/ui/BaseCell';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { DotGameBtnClick, EBadgeClickType } from '../../../Scripts/dot/DGameBtnClick';
import { EDailyAudioID } from './DailyTypes';
@mj.class
export default class JourneyCollectCellItem extends BaseCell {
  _txtJourney = null;
  _startCellHeight = 660;
  _firstCellHeight = 500;
  _cellHeight = 400;
  _itemNodes = [];
  static prefabUrl = "prefabs/daily/JourneyCollectList";
  static bundleName = "mainRes";
  uiOnLoad() {
    var t,
      e,
      i,
      o,
      n,
      a = this;
    this._txtJourney = null === (t = cc.find("img_nameBg/txt_journey", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    for (var l = function l(t) {
        var l = cc.find("items/item_" + t, r._cellUI);
        if (!l) return "continue";
        r._itemNodes[t] = {
          container: l,
          imgItem: null === (e = cc.find("img_item", l)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
          imgGrayItem: null === (i = cc.find("img_grayItem", l)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
          txtDay: null === (o = cc.find("txt_day", l)) || void 0 === o ? void 0 : o.getComponent(cc.Label),
          effItemLight: null === (n = cc.find("eff_itemLight", l)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton),
          btnNode: cc.find("btn_item", l)
        };
        r._itemNodes[t].effItemLight.node.active = false;
        r._itemNodes[t].btnNode && r.OnButtonClick(r._itemNodes[t].btnNode, {
          func: function () {
            return a.onItemClick(t);
          },
          clickAudio: EDailyAudioID.DailyDay
        });
      }, r = this, s = 0; s < 3; s++) l(s);
    this.initCellSize();
  }
  initCellSize() {
    this._cellHeight = 450;
    this._startCellHeight = 660;
    this._firstCellHeight = 500;
  }
  updateUI() {
    if (this._data && this._data.items) {
      if (this._data) {
        var t = DataReader.getByKey(ConfigType.Travel, this._data.session);
        t && (this._txtJourney.string = I18NStrings.get(t.name));
      }
      this._cellUI.active = !this._data.empty;
      this.widgetUI();
      for (var e = function e(t) {
          var e = i._data.items[t],
            o = i._itemNodes[t];
          if (!o) return "continue";
          if (!e) {
            o.container.active = false;
            return "continue";
          }
          o.container.active = true;
          o.imgItem.node.active = true;
          var n = DataReader.getByKey(ConfigType.item_config, e.itemId),
            a = n && n.Scale > 0 ? 0.01 * n.Scale : 0.65;
          o.imgItem.node.scale = a;
          var r = 2000 * Math.random() + 200;
          setTimeout(function () {
            o && cc.isValid(o.effItemLight) && playSpineAnim(o.effItemLight, -1, "init");
          }, r);
          i.loadCollectIcon(o.imgItem, e.itemId, true);
        }, i = this, o = 0; o < 3; o++) e(o);
    }
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
  loadCollectIcon(t, e) {
    var i = DataReader.getByKey(ConfigType.item_config, e);
    i && BaseSprite.refreshWithNode(t.node, "texture/badge/" + i.Icon);
  }
  onItemClick(t) {
    if (this._data && this._data.items && this._data.items[t]) {
      var e = this._data.items[t];
      if (e) {
        var i = DataReader.getByKey(ConfigType.item_config, e.itemId);
        DotGameBtnClick.dotBadge(EBadgeClickType.Badge, "" + I18NStrings.getCN(i.NameKey));
        ControllerManager.getInstance().pushViewByController("DailyRewardController", {
          itemId: e.itemId
        });
      }
    }
  }
  getCellData() {
    return this._data;
  }
}