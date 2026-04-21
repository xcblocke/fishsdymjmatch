import UIView from '../../../../Scripts/framework/ui/UIView';
import { EDailySignState } from '../DailySignClassicTypes';
import DailySignClassicModel from '../model/DailySignClassicModel';
import AdManager from '../../../../Scripts/base/ad/AdManager';
import { EGetItemReasonId, EItemId } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EAdPosition } from '../../../../Scripts/gamePlay/dot/DGameAdShow';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import SignClassicRewardView, { ERewardType } from './SignClassicRewardView';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import { DotGameGetItem } from '../../../../Scripts/gamePlay/dot/DGameGetItem';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
@mj.class
export default class DailySignClassicView extends UIView {
  @mj.node("content/top/btn_close")
  btnClose: "content/top/btn_close" = null;
  @mj.node("content/top/lbl_title")
  lblTitle: "content/top/lbl_title" = null;
  @mj.node("content/progressBar")
  progressBar: "content/progressBar" = null;
  @mj.node("content/box/start/task_bar_icon")
  progressIcon: "content/box/start/task_bar_icon" = null;
  @mj.node("content/box/start/task_bar_icon/label")
  progressDayLabel: "content/box/start/task_bar_icon/label" = null;
  @mj.node("content/box/node3")
  box3Days: "content/box/node3" = null;
  @mj.node("content/box/node6")
  box6Days: "content/box/node6" = null;
  @mj.node("content/box/node9")
  box9Days: "content/box/node9" = null;
  @mj.node("content/box/node12")
  box12Days: "content/box/node12" = null;
  @mj.node("content/days/day1")
  day1: "content/days/day1" = null;
  @mj.node("content/days/day2")
  day2: "content/days/day2" = null;
  @mj.node("content/days/day3")
  day3: "content/days/day3" = null;
  @mj.node("content/days/day4")
  day4: "content/days/day4" = null;
  @mj.node("content/days/day5")
  day5: "content/days/day5" = null;
  @mj.node("content/days/day6")
  day6: "content/days/day6" = null;
  @mj.node("content/days/day7")
  day7: "content/days/day7" = null;
  @mj.node("content/btns/claimBtn")
  claimBtn: "content/btns/claimBtn" = null;
  @mj.node("content/btns/adClaimBtn")
  adClaimBtn: "content/btns/adClaimBtn" = null;
  @mj.node("content/bottomTip/tip1")
  tipLabel: "content/bottomTip/tip1" = null;
  @mj.node("content/bottomTip/timeTip")
  timeLabel: "content/bottomTip/timeTip" = null;
  dayNodes = [];
  boxNodes = [];
  countdownTimer = null;
  model = null;
  justClaimedDay = -1;
  lastCheckDate = "";
  static prefabUrl = "prefab/DailySignClassic";
  onLoad() {
    super.onLoad.call(this);
    this.model = DailySignClassicModel.getInstance();
    this.dayNodes = [this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7];
    this.boxNodes = [this.box3Days, this.box6Days, this.box9Days, this.box12Days];
    this.setAdButtonText();
    this.registerButtonEvents();
  }
  viewDidLoad() {
    this.refreshUI();
  }
  viewDidShow() {
    this.refreshUI();
  }
  setAdButtonText() {
    var t;
    if (cc.isValid(this.adClaimBtn)) {
      var e = null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node;
      e && I18NStrings.setText(e, "Claim x2", "Common_Reward_Claim_Ads", [2]);
    }
  }
  registerButtonEvents() {
    var t = this;
    this.OnButtonClick(this.btnClose, this.onCloseBtnClick.bind(this));
    this.OnButtonClick(this.claimBtn, function () {
      return t.onClaim(false);
    });
    this.OnButtonClick(this.adClaimBtn, function () {
      return t.onClaim(true);
    });
    this.dayNodes.forEach(function (e, i) {
      if (cc.isValid(e)) {
        var o = cc.find("bg", e);
        cc.isValid(o) && t.OnButtonClick(o, function () {
          t.onDayBgClick(i + 1);
        });
      }
    });
    this.boxNodes.forEach(function (e, i) {
      if (cc.isValid(e)) {
        var o = cc.find("btn_box_close", e);
        cc.isValid(o) && t.OnButtonClick(o, function () {
          t.onBoxClick(i);
        });
      }
    });
  }
  refreshUI() {
    var t = this.model.getConfig(),
      e = this.model.getConsecutiveDays(),
      i = this.model.getLongTermDays(),
      o = this.model.checkTodaySigned();
    this.updateProgress(i, t.maxLongTermDays);
    this.updateWeeklyDisplay(e || 1, t.weeklyRewards);
    this.updateLongTermBoxes(i, t.longTermRewards, this.model.localData.claimedLongTermRewards);
    if (o) {
      this.setClaimButtonsVisible(false);
      this.setCountdownVisible(true);
      this.startCountdown();
    } else {
      this.setClaimButtonsVisible(true);
      this.setCountdownVisible(false);
    }
  }
  onCloseBtnClick() {
    var t;
    this.notifyHallButtonUpdate();
    null === (t = this.delegate) || void 0 === t || t.close();
  }
  notifyHallButtonUpdate() {
    mj.EventManager.emit("DAILY_SIGN_VIEW_CLOSED");
  }
  onDayBgClick(t) {
    this.model.getDayState(t) === EDailySignState.Claimable && this.onClaim(false);
  }
  onClaim(t) {
    this.model.checkTodaySigned() || (t ? this.playAdAndClaim() : this.claimReward(false));
  }
  playAdAndClaim() {
    var t = this;
    AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
      onSuccess: function () {
        t.claimReward(true);
      },
      onFailed: function () {}
    });
  }
  claimReward(t) {
    if (!this.model.checkTodaySigned()) {
      this.model.getConsecutiveDays();
      if (6 === this.model.getCurrentWeeklyReward().day) {
        this.playDay7AnimationAndClaim(t);
      } else {
        this.executeClaimReward(t);
      }
    }
  }
  playDay7AnimationAndClaim(t) {
    var e = this,
      i = this.dayNodes[6];
    if (cc.isValid(i)) {
      cc.find("bg/prop", i).getComponent(sp.Skeleton).setAnimation(0, "in", false);
      this.scheduleOnce(function () {
        e.executeClaimReward(t);
      }, 0.7);
    } else this.executeClaimReward(t);
  }
  executeClaimReward(t) {
    this.model.signIn();
    var e = this.model.getCurrentWeeklyReward();
    this.justClaimedDay = e.day;
    var i = t ? 2 : 1,
      o = e.hint * i,
      n = e.shuffle * i;
    this.giveReward(o, n, t);
    var a = {
      day: e.day,
      hint: o,
      shuffle: n
    };
    this.showRewardPanel(e.day, a);
  }
  showRewardPanel(t, e, i = ERewardType.Daily, o?) {
    var n = this;
    SignClassicRewardView.createUI().then(function (a) {
      if (a && n.node && cc.isValid(n.node)) {
        n.node.addChild(a);
        var s = a.getComponent(SignClassicRewardView);
        if (s) {
          s.onCloseCallback = function () {
            n.refreshUI();
          };
          s.showReward(t, e, i, o);
        }
      }
    }).catch(function () {
      n.refreshUI();
    });
  }
  giveReward(t, e, i) {
    var o = this.model.getConsecutiveDays(),
      n = EGetItemReasonId.DailySignClassic,
      a = i ? "经典版连续登录_激励翻倍_第" + o + "天" : "经典版连续登录_第" + o + "天",
      s = UserModel.getInstance().getCurrentGameData();
    if (t > 0) {
      s.changeHitTipsNums(t);
      var r = s.getHitTipsNums();
      DotGameGetItem.dotGetItem(s, {
        itemId: EItemId.Hint,
        number: t,
        afterNum: r,
        reasonId: n,
        reasonInfo: a
      });
    }
    if (e > 0) {
      s.changeShuffleNums(e);
      r = s.getShuffleNums();
      DotGameGetItem.dotGetItem(s, {
        itemId: EItemId.Shuffle,
        number: e,
        afterNum: r,
        reasonId: n,
        reasonInfo: a
      });
    }
  }
  onBoxClick(t) {
    var e = this.model.getConfig().longTermRewards[t];
    if (e) {
      this.model.getLongTermDays(), this.model.isLongTermRewardClaimed(e.totalDays);
      this.model.canClaimLongTermReward(e.totalDays) && this.claimLongTermReward(t, e);
    }
  }
  claimLongTermReward(t, e) {
    this.model.claimLongTermReward(e.totalDays);
    var i = EGetItemReasonId.DailySignClassic,
      o = "经典版累计登录_第" + e.totalDays + "天",
      n = UserModel.getInstance().getCurrentGameData();
    if (e.hint > 0) {
      n.changeHitTipsNums(e.hint);
      var a = n.getHitTipsNums();
      DotGameGetItem.dotGetItem(n, {
        itemId: EItemId.Hint,
        number: e.hint,
        afterNum: a,
        reasonId: i,
        reasonInfo: o
      });
    }
    if (e.shuffle > 0) {
      n.changeShuffleNums(e.shuffle);
      a = n.getShuffleNums();
      DotGameGetItem.dotGetItem(n, {
        itemId: EItemId.Shuffle,
        number: e.shuffle,
        afterNum: a,
        reasonId: i,
        reasonInfo: o
      });
    }
    var s = {
      day: e.totalDays,
      hint: e.hint,
      shuffle: e.shuffle
    };
    this.showRewardPanel(e.totalDays, s, ERewardType.Box, t);
  }
  updateProgress(t) {
    var e = this.model.getConfig().longTermRewards,
      i = this.calculateSegmentedProgress(t, e);
    i > 0 && i < 0.1 && (i = 0.1);
    this.progressBar.getComponent(cc.ProgressBar).progress = i;
    if (cc.isValid(this.progressDayLabel)) {
      var o = this.progressDayLabel.getComponent(cc.Label);
      o && (o.string = "" + t);
    }
  }
  calculateSegmentedProgress(t, e) {
    if (t <= 0) return 0;
    var i = [0.25, 0.5, 0.75, 1],
      o = e.map(function (t) {
        return t.totalDays;
      });
    if (t >= o[o.length - 1]) return 1;
    for (var n = 0; n < o.length; n++) {
      var a = o[n],
        s = i[n];
      if (t <= a) {
        var r = 0 === n ? 0 : o[n - 1],
          l = 0 === n ? 0 : i[n - 1];
        return l + (t - r) / (a - r) * (s - l);
      }
    }
    return 1;
  }
  updateWeeklyDisplay(t, e) {
    var i = this;
    this.dayNodes.forEach(function (t, o) {
      if (cc.isValid(t)) {
        var n = o + 1,
          a = e.find(function (t) {
            return t.day === n;
          });
        if (a) {
          var s = i.model.getDayState(n);
          i.updateDayReward(t, a, s);
        }
      }
    });
  }
  updateDayReward(t, e, i) {
    if (cc.isValid(t)) {
      var o = i === EDailySignState.Claimed,
        n = i === EDailySignState.Claimable,
        a = (EDailySignState.Locked, cc.find("bg/prop", t)),
        s = cc.find("bg/mask", t),
        l = cc.find("bg/lingqu", t),
        c = cc.find("bg/text", t);
      if (cc.isValid(a)) {
        cc.isValid(c) && I18NStrings.setText(c, "Day " + e.day, "Dailylog2_text2", [e.day]);
        if (7 === e.day) {
          var d = a.getComponent(sp.Skeleton);
          if (d) {
            var u = "";
            u = o ? "init2" : "init1";
            d.setAnimation(0, u, true);
          }
        }
        var h = cc.find("item1", a);
        if (cc.isValid(h)) {
          var f = e.shuffle > 0;
          h.active = f;
          if (f) {
            var y = cc.find("icon", h);
            cc.isValid(y) && this.loadAndSetIcon(y, "mainRes", "texture/boxReward/reward_icon_refresh");
            var g = cc.find("count", h);
            cc.isValid(g) && (C = g.getComponent(cc.Label)) && (C.string = "" + e.shuffle);
          }
        }
        var v = cc.find("item2", a);
        if (cc.isValid(v)) {
          var D = e.hint > 0;
          v.active = D;
          if (D) {
            var w = cc.find("icon", v);
            cc.isValid(w) && this.loadAndSetIcon(w, "mainRes", "texture/boxReward/reward_icon_hint");
            var _ = cc.find("count", v);
            if (cc.isValid(_)) {
              var C;
              (C = _.getComponent(cc.Label)) && (C.string = "" + e.hint);
            }
          }
        }
        var S = cc.find("bg/spine", t);
        if (cc.isValid(S)) {
          S.active = n;
          if (n) {
            var b = S.getComponent(sp.Skeleton);
            if (b) {
              u = "";
              u = 7 === e.day ? "init_3" : 1 == (e.shuffle > 0 ? 1 : 0) + (e.hint > 0 ? 1 : 0) ? "init_1" : "init_2";
              b.setAnimation(0, u, true);
            }
          }
        }
        var k = cc.find("bg", t);
        if (cc.isValid(k)) if (n) {
          var T = ["texture/iteam_bg_choose", "texture/iteam_bg01_choose"];
          7 === e.day && (T = ["texture/iteam_bg_choose", "texture/iteam_bg02_choose"]);
          BaseSprite.refreshWithNode(k, T[0], false, true, "r_dailySignClassic");
          var R = cc.find("bg1", k);
          cc.isValid(R) && BaseSprite.refreshWithNode(R, T[1], false, true, "r_dailySignClassic");
          c.color = new cc.Color(149, 93, 2, 255);
          var I = cc.find("bg/text_today", t);
          if (cc.isValid(I)) {
            I18NStrings.setText(I, "Today", "Dailylog2_text4");
            I.active = true;
            c.active = false;
          }
        } else {
          BaseSprite.refreshWithNode(k, "texture/iteam_bg", false, true, "r_dailySignClassic");
          R = cc.find("bg1", k);
          cc.isValid(R) && BaseSprite.refreshWithNode(R, 7 === e.day ? "texture/iteam_bg02" : "texture/iteam_bg01", false, true, "r_dailySignClassic");
          c.color = new cc.Color(245, 152, 98, 255);
          I = cc.find("bg/text_today", t);
          if (cc.isValid(I)) {
            I.active = false;
            c.active = true;
          }
        }
        if (o) {
          s.active = true;
          l.active = true;
          if (this.justClaimedDay === e.day) {
            var L = l.getComponent(sp.Skeleton);
            L && L.setAnimation(0, "in", false);
            this.justClaimedDay = -1;
          }
        } else {
          s.active = false;
          l.active = false;
        }
      }
    }
  }
  loadAndSetIcon(t, e, i) {
    cc.isValid(t) && BaseSprite.refreshWithNode(t, i, false, true, e);
  }
  updateLongTermBoxes(t, e, i) {
    var o = this;
    this.boxNodes.forEach(function (n, a) {
      if (cc.isValid(n)) {
        var s = e[a];
        if (s) {
          var r = t >= s.totalDays,
            l = i.includes(s.totalDays);
          o.updateBoxDayText(n, s.totalDays);
          o.updateBoxState(n, r, l);
        }
      }
    });
  }
  updateBoxDayText(t, e) {
    if (cc.isValid(t)) {
      var i = cc.find("textBg/text", t);
      if (cc.isValid(i)) {
        var o = i.getComponent(cc.Label);
        o && (o.string = "" + e);
      }
    }
  }
  updateBoxState(t, e, i) {
    if (cc.isValid(t)) {
      var o = cc.find("btn_box_close", t),
        n = cc.find("sp_box_open1", t),
        a = cc.find("spine_canGet", t);
      cc.isValid(o) && cc.Tween.stopAllByTarget(o);
      if (i) {
        o && (o.active = false);
        n && (n.active = true);
        a && (a.active = false);
      } else if (e) {
        o && (o.active = true);
        n && (n.active = false);
        a && (a.active = true);
      } else {
        o && (o.active = true);
        n && (n.active = false);
        a && (a.active = false);
      }
    }
  }
  setClaimButtonsVisible(t) {
    cc.isValid(this.claimBtn) && (this.claimBtn.active = t);
    cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = t);
  }
  setCountdownVisible(t) {
    cc.isValid(this.tipLabel) && (this.tipLabel.active = t);
    cc.isValid(this.timeLabel) && (this.timeLabel.active = t);
  }
  startCountdown() {
    var t = this;
    this.stopCountdown();
    this.lastCheckDate = this.getCurrentDate();
    var e = function e() {
      var e = t.getCurrentDate();
      if (e === t.lastCheckDate) {
        var i = t.model.getTimeToNextDay(),
          o = t.model.formatCountdown(i);
        t.updateCountdown(o);
      } else {
        t.lastCheckDate = e;
        t.refreshUI();
      }
    };
    e();
    this.countdownTimer = setInterval(e, 1000);
  }
  getCurrentDate() {
    var t = new Date();
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
  }
  updateCountdown(t) {
    if (cc.isValid(this.timeLabel)) {
      var e = this.timeLabel.getComponent(cc.Label);
      e && (e.string = t);
    }
  }
  stopCountdown() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
  playBoxOpenAnim(t, e) {
    var i = this.boxNodes[t];
    if (cc.isValid(i)) {
      var o = cc.find("open", i);
      if (cc.isValid(o)) {
        var n = o.getComponent(sp.Skeleton);
        if (n) {
          n.setAnimation(0, "open", false);
          n.setCompleteListener(function () {
            n.setCompleteListener(null);
            null == e || e();
          });
        } else null == e || e();
      } else null == e || e();
    } else null == e || e();
  }
  playClaimEffect(t) {
    null == t || t();
  }
  playDay7PropInAnim(t) {
    var e = this.day7;
    if (cc.isValid(e)) {
      var i = cc.find("bg/prop", e);
      if (cc.isValid(i)) {
        var o = i.getComponent(sp.Skeleton);
        if (o) {
          o.setAnimation(0, "in", false);
          o.setCompleteListener(function () {
            o.setCompleteListener(null);
            null == t || t();
          });
        } else null == t || t();
      } else null == t || t();
    } else null == t || t();
  }
  onDestroy() {
    this.stopCountdown();
    cc.isValid(this.btnClose) && this.btnClose.off(cc.Node.EventType.TOUCH_END, this.onCloseBtnClick, this);
    cc.isValid(this.claimBtn) && this.claimBtn.off(cc.Node.EventType.TOUCH_END);
    cc.isValid(this.adClaimBtn) && this.adClaimBtn.off(cc.Node.EventType.TOUCH_END);
    super.onDestroy && super.onDestroy.call(this);
  }
}