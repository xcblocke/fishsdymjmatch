import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import { DataReader } from '../../../../Scripts/framework/data/DataReader';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import UIView from '../../../../Scripts/framework/ui/UIView';
import BadgeMode from '../../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { ConfigType } from '../../../../Scripts/gamePlay/base/data/ConfigType';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import { DotGameBtnClick, EBadgeClickType } from '../../../../Scripts/dot/DGameBtnClick';
import DailyModel from '../DailyModel';
import { EDailyAudioID } from '../DailyTypes';
@mj.class
export default class DailyRewardView extends UIView {
  @mj.component("txt_name", cc.Label)
  _txtName: "txt_name" = null;
  @mj.component("txt_time", cc.Label)
  _txtTime: "txt_time" = null;
  @mj.component("eff_reward", sp.Skeleton)
  _effReward: "eff_reward" = null;
  @mj.component("img_reward", cc.Sprite)
  _imgReward: "img_reward" = null;
  @mj.component("btn_play", cc.Button)
  _btnPlay: "btn_play" = null;
  _isClose = false;
  static prefabUrl = "prefabs/daily/DailyRewardView";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvents();
  }
  registerEvents() {
    this.OnButtonClick(this._btnPlay.node, {
      func: this.onCloseView.bind(this),
      clickAudio: EDailyAudioID.BadgeSite
    });
  }
  show(t, e = false) {
    var i,
      o,
      n = this;
    var a = DataReader.getByKey(ConfigType.item_config, t);
    if (a) {
      if (null === (i = this.delegate.args) || void 0 === i ? void 0 : i.isGetReward) {
        e = true;
        mj.audioManager.playEffect(EDailyAudioID.BadgeTags);
      }
      this._txtName.string = I18NStrings.get(a.NameKey);
      var c = BadgeMode.getInstance().getBadge(t);
      if (c) {
        var _ = new Date(c.timestamp),
          m = _.getFullYear(),
          g = _.getMonth() + 1,
          D = _.getDate();
        this._txtTime.string = GameUtils.formatDateStringToLanguage(m + "-" + g + "-" + D, null, true, true) || "";
        DotGameBtnClick.dotBadge(EBadgeClickType.BadgeShow, "" + I18NStrings.getCN(a.NameKey));
      } else {
        var v = (null === (o = this.delegate.args) || void 0 === o ? void 0 : o.dailyId) || 0,
          w = DataReader.getByKey(ConfigType.daily_challenge, v);
        if (e) {
          DotGameBtnClick.dotBadge(EBadgeClickType.RewardGet, w.Year + "年" + w.Month + "月");
        } else {
          DotGameBtnClick.dotBadge(EBadgeClickType.RewardShow, w.Year + "年" + w.Month + "月");
        }
      }
      if (e) {
        this._effReward.setAnimation(0, "in_badge", false);
        this.isAutoClose() && this.scheduleOnce(function () {
          n.onCloseView();
        }, 3);
        cc.tween(this._imgReward.node).set({
          scale: 0.3
        }).to(0.15, {
          scale: 1
        }).start();
      } else this._effReward.setAnimation(0, "init_back", true);
      var C = DailyModel.getInstance().getItemIconUrl(t);
      BaseSprite.refreshWithNode(this._imgReward.node, C);
    } else this.delegate.close();
  }
  @mj.traitEvent("DailyRewardVv_autoClose")
  isAutoClose() {
    return true;
  }
  onCloseView() {
    if (!this._isClose) {
      this._isClose = true;
      this.delegate.close();
    }
  }
}