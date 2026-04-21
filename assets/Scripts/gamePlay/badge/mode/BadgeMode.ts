import { EGetItemReasonId } from '../../../core/simulator/constant/GameTypeEnums';
import TravelGameData from '../../../core/simulator/data/TravelGameData';
import { DataReader } from '../../../framework/data/DataReader';
import I18NStrings from '../../../framework/data/I18NStrings';
import Model from '../../../framework/data/Model';
import { ConfigType } from '../../base/data/ConfigType';
import { DotGameGetItem } from '../../dot/DGameGetItem';
import UserModel from '../../user/UserModel';
export enum BadgeType {
  Journey = 4,
  Daily = 5,
}
@mj.class("BadgeMode")
export default class BadgeMode extends Model {
  get badges() {
    this.localData.badgeInfo || (this.localData.badgeInfo = {
      badges: {}
    });
    return this.localData.badgeInfo.badges;
  }
  @mj.traitEvent("BadgeMode_addBadge")
  addBadge(e, t, o, n) {
    if (e && !(e <= 0)) {
      var i = e.toString(),
        r = DataReader.getByKey(ConfigType.item_config, e);
      t || (t = r ? r.Type : 0);
      var a = Date.now();
      n && (n += a);
      this.badges[i] = {
        itemId: e,
        timestamp: a,
        type: t,
        session: o,
        expireTime: n
      };
      var l = UserModel.getInstance().getCurrentGameData();
      DotGameGetItem.dotGetItem(l, {
        itemId: "" + e,
        itemName: I18NStrings.getCN(null == r ? void 0 : r.NameKey),
        number: 1,
        afterNum: 1,
        reasonId: this.getReasonId(t),
        reasonInfo: this.getReasonInfo(t, o)
      });
      this.save();
    }
  }
  getReasonId(e) {
    switch (e) {
      case BadgeType.Daily:
        return EGetItemReasonId.DailyChallengeAd;
      case BadgeType.Journey:
        return EGetItemReasonId.Journey;
    }
  }
  getReasonInfo(e, t) {
    switch (e) {
      case BadgeType.Daily:
        var o = DataReader.getByKey(ConfigType.daily_challenge, t);
        return "每日挑战奖励_完成_" + (null == o ? void 0 : o.Year) + "年" + (null == o ? void 0 : o.Month) + "月挑战";
      case BadgeType.Journey:
        return "旅行活动奖励_到达第" + TravelGameData.getInstance().getCurrentLevelId() + "关";
    }
  }
  removeBadge(e) {
    if (e) {
      var t = e.toString();
      if (this.badges[t]) {
        delete this.badges[t];
        this.save();
      }
    }
  }
  hasBadge(e) {
    if (!e) return false;
    var t = e.toString();
    return !!this.badges[t];
  }
  getBadgesByType(e) {
    var t = Date.now(),
      o = Object.values(this.badges).filter(function (o) {
        return o.type === e && !(o.expireTime > 0 && o.expireTime < t);
      });
    null == o || o.sort(function (e, t) {
      return e.itemId - t.itemId;
    });
    return o;
  }
  getBadge(e) {
    return this.badges["" + e] || null;
  }
  clearBadgesByType(e) {
    var t = this,
      o = 0;
    Object.keys(this.badges).forEach(function (n) {
      if (t.badges[n].type === e) {
        delete t.badges[n];
        o++;
      }
    });
    return o;
  }
  save() {
    this.localData.badgeInfo = {
      badges: this.badges
    };
  }
}