"use strict";
cc._RF.push(module, 'bbda7oG/gBMz6giGqBXrM63', 'DailySignClassicView');
// subpackages/r_dailySignClassic/Scripts/view/DailySignClassicView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var DailySignClassicTypes_1 = require("../DailySignClassicTypes");
var DailySignClassicModel_1 = require("../model/DailySignClassicModel");
var AdManager_1 = require("../../../../Scripts/base/ad/AdManager");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var DGameAdShow_1 = require("../../../../Scripts/gamePlay/dot/DGameAdShow");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var SignClassicRewardView_1 = require("./SignClassicRewardView");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var DGameGetItem_1 = require("../../../../Scripts/gamePlay/dot/DGameGetItem");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var DailySignClassicView = /** @class */ (function (_super) {
    __extends(DailySignClassicView, _super);
    function DailySignClassicView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.lblTitle = null;
        _this.progressBar = null;
        _this.progressIcon = null;
        _this.progressDayLabel = null;
        _this.box3Days = null;
        _this.box6Days = null;
        _this.box9Days = null;
        _this.box12Days = null;
        _this.day1 = null;
        _this.day2 = null;
        _this.day3 = null;
        _this.day4 = null;
        _this.day5 = null;
        _this.day6 = null;
        _this.day7 = null;
        _this.claimBtn = null;
        _this.adClaimBtn = null;
        _this.tipLabel = null;
        _this.timeLabel = null;
        _this.dayNodes = [];
        _this.boxNodes = [];
        _this.countdownTimer = null;
        _this.model = null;
        _this.justClaimedDay = -1;
        _this.lastCheckDate = "";
        return _this;
    }
    DailySignClassicView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.model = DailySignClassicModel_1.default.getInstance();
        this.dayNodes = [this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7];
        this.boxNodes = [this.box3Days, this.box6Days, this.box9Days, this.box12Days];
        this.setAdButtonText();
        this.registerButtonEvents();
    };
    DailySignClassicView.prototype.viewDidLoad = function () {
        this.refreshUI();
    };
    DailySignClassicView.prototype.viewDidShow = function () {
        this.refreshUI();
    };
    DailySignClassicView.prototype.setAdButtonText = function () {
        var t;
        if (cc.isValid(this.adClaimBtn)) {
            var e = null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node;
            e && I18NStrings_1.default.setText(e, "Claim x2", "Common_Reward_Claim_Ads", [2]);
        }
    };
    DailySignClassicView.prototype.registerButtonEvents = function () {
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
    };
    DailySignClassicView.prototype.refreshUI = function () {
        var t = this.model.getConfig(), e = this.model.getConsecutiveDays(), i = this.model.getLongTermDays(), o = this.model.checkTodaySigned();
        this.updateProgress(i, t.maxLongTermDays);
        this.updateWeeklyDisplay(e || 1, t.weeklyRewards);
        this.updateLongTermBoxes(i, t.longTermRewards, this.model.localData.claimedLongTermRewards);
        if (o) {
            this.setClaimButtonsVisible(false);
            this.setCountdownVisible(true);
            this.startCountdown();
        }
        else {
            this.setClaimButtonsVisible(true);
            this.setCountdownVisible(false);
        }
    };
    DailySignClassicView.prototype.onCloseBtnClick = function () {
        var t;
        this.notifyHallButtonUpdate();
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    DailySignClassicView.prototype.notifyHallButtonUpdate = function () {
        mj.EventManager.emit("DAILY_SIGN_VIEW_CLOSED");
    };
    DailySignClassicView.prototype.onDayBgClick = function (t) {
        this.model.getDayState(t) === DailySignClassicTypes_1.EDailySignState.Claimable && this.onClaim(false);
    };
    DailySignClassicView.prototype.onClaim = function (t) {
        this.model.checkTodaySigned() || (t ? this.playAdAndClaim() : this.claimReward(false));
    };
    DailySignClassicView.prototype.playAdAndClaim = function () {
        var t = this;
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
            onSuccess: function () {
                t.claimReward(true);
            },
            onFailed: function () { }
        });
    };
    DailySignClassicView.prototype.claimReward = function (t) {
        if (!this.model.checkTodaySigned()) {
            this.model.getConsecutiveDays();
            if (6 === this.model.getCurrentWeeklyReward().day) {
                this.playDay7AnimationAndClaim(t);
            }
            else {
                this.executeClaimReward(t);
            }
        }
    };
    DailySignClassicView.prototype.playDay7AnimationAndClaim = function (t) {
        var e = this, i = this.dayNodes[6];
        if (cc.isValid(i)) {
            cc.find("bg/prop", i).getComponent(sp.Skeleton).setAnimation(0, "in", false);
            this.scheduleOnce(function () {
                e.executeClaimReward(t);
            }, 0.7);
        }
        else
            this.executeClaimReward(t);
    };
    DailySignClassicView.prototype.executeClaimReward = function (t) {
        this.model.signIn();
        var e = this.model.getCurrentWeeklyReward();
        this.justClaimedDay = e.day;
        var i = t ? 2 : 1, o = e.hint * i, n = e.shuffle * i;
        this.giveReward(o, n, t);
        var a = {
            day: e.day,
            hint: o,
            shuffle: n
        };
        this.showRewardPanel(e.day, a);
    };
    DailySignClassicView.prototype.showRewardPanel = function (t, e, i, o) {
        if (i === void 0) { i = SignClassicRewardView_1.ERewardType.Daily; }
        var n = this;
        SignClassicRewardView_1.default.createUI().then(function (a) {
            if (a && n.node && cc.isValid(n.node)) {
                n.node.addChild(a);
                var s = a.getComponent(SignClassicRewardView_1.default);
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
    };
    DailySignClassicView.prototype.giveReward = function (t, e, i) {
        var o = this.model.getConsecutiveDays(), n = GameTypeEnums_1.EGetItemReasonId.DailySignClassic, a = i ? "经典版连续登录_激励翻倍_第" + o + "天" : "经典版连续登录_第" + o + "天", s = UserModel_1.default.getInstance().getCurrentGameData();
        if (t > 0) {
            s.changeHitTipsNums(t);
            var r = s.getHitTipsNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(s, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: t,
                afterNum: r,
                reasonId: n,
                reasonInfo: a
            });
        }
        if (e > 0) {
            s.changeShuffleNums(e);
            r = s.getShuffleNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(s, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: e,
                afterNum: r,
                reasonId: n,
                reasonInfo: a
            });
        }
    };
    DailySignClassicView.prototype.onBoxClick = function (t) {
        var e = this.model.getConfig().longTermRewards[t];
        if (e) {
            this.model.getLongTermDays(), this.model.isLongTermRewardClaimed(e.totalDays);
            this.model.canClaimLongTermReward(e.totalDays) && this.claimLongTermReward(t, e);
        }
    };
    DailySignClassicView.prototype.claimLongTermReward = function (t, e) {
        this.model.claimLongTermReward(e.totalDays);
        var i = GameTypeEnums_1.EGetItemReasonId.DailySignClassic, o = "经典版累计登录_第" + e.totalDays + "天", n = UserModel_1.default.getInstance().getCurrentGameData();
        if (e.hint > 0) {
            n.changeHitTipsNums(e.hint);
            var a = n.getHitTipsNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(n, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: e.hint,
                afterNum: a,
                reasonId: i,
                reasonInfo: o
            });
        }
        if (e.shuffle > 0) {
            n.changeShuffleNums(e.shuffle);
            a = n.getShuffleNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(n, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
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
        this.showRewardPanel(e.totalDays, s, SignClassicRewardView_1.ERewardType.Box, t);
    };
    DailySignClassicView.prototype.updateProgress = function (t) {
        var e = this.model.getConfig().longTermRewards, i = this.calculateSegmentedProgress(t, e);
        i > 0 && i < 0.1 && (i = 0.1);
        this.progressBar.getComponent(cc.ProgressBar).progress = i;
        if (cc.isValid(this.progressDayLabel)) {
            var o = this.progressDayLabel.getComponent(cc.Label);
            o && (o.string = "" + t);
        }
    };
    DailySignClassicView.prototype.calculateSegmentedProgress = function (t, e) {
        if (t <= 0)
            return 0;
        var i = [0.25, 0.5, 0.75, 1], o = e.map(function (t) {
            return t.totalDays;
        });
        if (t >= o[o.length - 1])
            return 1;
        for (var n = 0; n < o.length; n++) {
            var a = o[n], s = i[n];
            if (t <= a) {
                var r = 0 === n ? 0 : o[n - 1], l = 0 === n ? 0 : i[n - 1];
                return l + (t - r) / (a - r) * (s - l);
            }
        }
        return 1;
    };
    DailySignClassicView.prototype.updateWeeklyDisplay = function (t, e) {
        var i = this;
        this.dayNodes.forEach(function (t, o) {
            if (cc.isValid(t)) {
                var n = o + 1, a = e.find(function (t) {
                    return t.day === n;
                });
                if (a) {
                    var s = i.model.getDayState(n);
                    i.updateDayReward(t, a, s);
                }
            }
        });
    };
    DailySignClassicView.prototype.updateDayReward = function (t, e, i) {
        if (cc.isValid(t)) {
            var o = i === DailySignClassicTypes_1.EDailySignState.Claimed, n = i === DailySignClassicTypes_1.EDailySignState.Claimable, a = (DailySignClassicTypes_1.EDailySignState.Locked, cc.find("bg/prop", t)), s = cc.find("bg/mask", t), l = cc.find("bg/lingqu", t), c = cc.find("bg/text", t);
            if (cc.isValid(a)) {
                cc.isValid(c) && I18NStrings_1.default.setText(c, "Day " + e.day, "Dailylog2_text2", [e.day]);
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
                if (cc.isValid(k))
                    if (n) {
                        var T = ["texture/iteam_bg_choose", "texture/iteam_bg01_choose"];
                        7 === e.day && (T = ["texture/iteam_bg_choose", "texture/iteam_bg02_choose"]);
                        BaseSprite_1.default.refreshWithNode(k, T[0], false, true, "r_dailySignClassic");
                        var R = cc.find("bg1", k);
                        cc.isValid(R) && BaseSprite_1.default.refreshWithNode(R, T[1], false, true, "r_dailySignClassic");
                        c.color = new cc.Color(149, 93, 2, 255);
                        var I = cc.find("bg/text_today", t);
                        if (cc.isValid(I)) {
                            I18NStrings_1.default.setText(I, "Today", "Dailylog2_text4");
                            I.active = true;
                            c.active = false;
                        }
                    }
                    else {
                        BaseSprite_1.default.refreshWithNode(k, "texture/iteam_bg", false, true, "r_dailySignClassic");
                        R = cc.find("bg1", k);
                        cc.isValid(R) && BaseSprite_1.default.refreshWithNode(R, 7 === e.day ? "texture/iteam_bg02" : "texture/iteam_bg01", false, true, "r_dailySignClassic");
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
                }
                else {
                    s.active = false;
                    l.active = false;
                }
            }
        }
    };
    DailySignClassicView.prototype.loadAndSetIcon = function (t, e, i) {
        cc.isValid(t) && BaseSprite_1.default.refreshWithNode(t, i, false, true, e);
    };
    DailySignClassicView.prototype.updateLongTermBoxes = function (t, e, i) {
        var o = this;
        this.boxNodes.forEach(function (n, a) {
            if (cc.isValid(n)) {
                var s = e[a];
                if (s) {
                    var r = t >= s.totalDays, l = i.includes(s.totalDays);
                    o.updateBoxDayText(n, s.totalDays);
                    o.updateBoxState(n, r, l);
                }
            }
        });
    };
    DailySignClassicView.prototype.updateBoxDayText = function (t, e) {
        if (cc.isValid(t)) {
            var i = cc.find("textBg/text", t);
            if (cc.isValid(i)) {
                var o = i.getComponent(cc.Label);
                o && (o.string = "" + e);
            }
        }
    };
    DailySignClassicView.prototype.updateBoxState = function (t, e, i) {
        if (cc.isValid(t)) {
            var o = cc.find("btn_box_close", t), n = cc.find("sp_box_open1", t), a = cc.find("spine_canGet", t);
            cc.isValid(o) && cc.Tween.stopAllByTarget(o);
            if (i) {
                o && (o.active = false);
                n && (n.active = true);
                a && (a.active = false);
            }
            else if (e) {
                o && (o.active = true);
                n && (n.active = false);
                a && (a.active = true);
            }
            else {
                o && (o.active = true);
                n && (n.active = false);
                a && (a.active = false);
            }
        }
    };
    DailySignClassicView.prototype.setClaimButtonsVisible = function (t) {
        cc.isValid(this.claimBtn) && (this.claimBtn.active = t);
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = t);
    };
    DailySignClassicView.prototype.setCountdownVisible = function (t) {
        cc.isValid(this.tipLabel) && (this.tipLabel.active = t);
        cc.isValid(this.timeLabel) && (this.timeLabel.active = t);
    };
    DailySignClassicView.prototype.startCountdown = function () {
        var t = this;
        this.stopCountdown();
        this.lastCheckDate = this.getCurrentDate();
        var e = function e() {
            var e = t.getCurrentDate();
            if (e === t.lastCheckDate) {
                var i = t.model.getTimeToNextDay(), o = t.model.formatCountdown(i);
                t.updateCountdown(o);
            }
            else {
                t.lastCheckDate = e;
                t.refreshUI();
            }
        };
        e();
        this.countdownTimer = setInterval(e, 1000);
    };
    DailySignClassicView.prototype.getCurrentDate = function () {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    };
    DailySignClassicView.prototype.updateCountdown = function (t) {
        if (cc.isValid(this.timeLabel)) {
            var e = this.timeLabel.getComponent(cc.Label);
            e && (e.string = t);
        }
    };
    DailySignClassicView.prototype.stopCountdown = function () {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
        }
    };
    DailySignClassicView.prototype.playBoxOpenAnim = function (t, e) {
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
                }
                else
                    null == e || e();
            }
            else
                null == e || e();
        }
        else
            null == e || e();
    };
    DailySignClassicView.prototype.playClaimEffect = function (t) {
        null == t || t();
    };
    DailySignClassicView.prototype.playDay7PropInAnim = function (t) {
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
                }
                else
                    null == t || t();
            }
            else
                null == t || t();
        }
        else
            null == t || t();
    };
    DailySignClassicView.prototype.onDestroy = function () {
        this.stopCountdown();
        cc.isValid(this.btnClose) && this.btnClose.off(cc.Node.EventType.TOUCH_END, this.onCloseBtnClick, this);
        cc.isValid(this.claimBtn) && this.claimBtn.off(cc.Node.EventType.TOUCH_END);
        cc.isValid(this.adClaimBtn) && this.adClaimBtn.off(cc.Node.EventType.TOUCH_END);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    DailySignClassicView.prefabUrl = "prefab/DailySignClassic";
    __decorate([
        mj.node("content/top/btn_close")
    ], DailySignClassicView.prototype, "btnClose", void 0);
    __decorate([
        mj.node("content/top/lbl_title")
    ], DailySignClassicView.prototype, "lblTitle", void 0);
    __decorate([
        mj.node("content/progressBar")
    ], DailySignClassicView.prototype, "progressBar", void 0);
    __decorate([
        mj.node("content/box/start/task_bar_icon")
    ], DailySignClassicView.prototype, "progressIcon", void 0);
    __decorate([
        mj.node("content/box/start/task_bar_icon/label")
    ], DailySignClassicView.prototype, "progressDayLabel", void 0);
    __decorate([
        mj.node("content/box/node3")
    ], DailySignClassicView.prototype, "box3Days", void 0);
    __decorate([
        mj.node("content/box/node6")
    ], DailySignClassicView.prototype, "box6Days", void 0);
    __decorate([
        mj.node("content/box/node9")
    ], DailySignClassicView.prototype, "box9Days", void 0);
    __decorate([
        mj.node("content/box/node12")
    ], DailySignClassicView.prototype, "box12Days", void 0);
    __decorate([
        mj.node("content/days/day1")
    ], DailySignClassicView.prototype, "day1", void 0);
    __decorate([
        mj.node("content/days/day2")
    ], DailySignClassicView.prototype, "day2", void 0);
    __decorate([
        mj.node("content/days/day3")
    ], DailySignClassicView.prototype, "day3", void 0);
    __decorate([
        mj.node("content/days/day4")
    ], DailySignClassicView.prototype, "day4", void 0);
    __decorate([
        mj.node("content/days/day5")
    ], DailySignClassicView.prototype, "day5", void 0);
    __decorate([
        mj.node("content/days/day6")
    ], DailySignClassicView.prototype, "day6", void 0);
    __decorate([
        mj.node("content/days/day7")
    ], DailySignClassicView.prototype, "day7", void 0);
    __decorate([
        mj.node("content/btns/claimBtn")
    ], DailySignClassicView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("content/btns/adClaimBtn")
    ], DailySignClassicView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("content/bottomTip/tip1")
    ], DailySignClassicView.prototype, "tipLabel", void 0);
    __decorate([
        mj.node("content/bottomTip/timeTip")
    ], DailySignClassicView.prototype, "timeLabel", void 0);
    DailySignClassicView = __decorate([
        mj.class
    ], DailySignClassicView);
    return DailySignClassicView;
}(UIView_1.default));
exports.default = DailySignClassicView;

cc._RF.pop();