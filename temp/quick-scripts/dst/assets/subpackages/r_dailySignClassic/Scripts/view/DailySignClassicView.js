
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/view/DailySignClassicView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy92aWV3L0RhaWx5U2lnbkNsYXNzaWNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0Qsa0VBQTJEO0FBQzNELHdFQUFtRTtBQUNuRSxtRUFBOEQ7QUFDOUQsMkZBQXNHO0FBQ3RHLDRFQUEyRTtBQUMzRSw4RUFBeUU7QUFDekUsaUVBQTZFO0FBQzdFLHlFQUFvRTtBQUNwRSw4RUFBK0U7QUFDL0UsOEVBQXlFO0FBRXpFO0lBQWtELHdDQUFNO0lBQXhEO1FBQUEscUVBNmdCQztRQTNnQkMsY0FBUSxHQUE0QixJQUFJLENBQUM7UUFFekMsY0FBUSxHQUE0QixJQUFJLENBQUM7UUFFekMsaUJBQVcsR0FBMEIsSUFBSSxDQUFDO1FBRTFDLGtCQUFZLEdBQXNDLElBQUksQ0FBQztRQUV2RCxzQkFBZ0IsR0FBNEMsSUFBSSxDQUFDO1FBRWpFLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGVBQVMsR0FBeUIsSUFBSSxDQUFDO1FBRXZDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBd0IsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBNEIsSUFBSSxDQUFDO1FBRXpDLGdCQUFVLEdBQThCLElBQUksQ0FBQztRQUU3QyxjQUFRLEdBQTZCLElBQUksQ0FBQztRQUUxQyxlQUFTLEdBQWdDLElBQUksQ0FBQztRQUM5QyxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FB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b250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IEVEYWlseVNpZ25TdGF0ZSB9IGZyb20gJy4uL0RhaWx5U2lnbkNsYXNzaWNUeXBlcyc7XG5pbXBvcnQgRGFpbHlTaWduQ2xhc3NpY01vZGVsIGZyb20gJy4uL21vZGVsL0RhaWx5U2lnbkNsYXNzaWNNb2RlbCc7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHsgRUdldEl0ZW1SZWFzb25JZCwgRUl0ZW1JZCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBTaWduQ2xhc3NpY1Jld2FyZFZpZXcsIHsgRVJld2FyZFR5cGUgfSBmcm9tICcuL1NpZ25DbGFzc2ljUmV3YXJkVmlldyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRG90R2FtZUdldEl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0nO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25DbGFzc2ljVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIEBtai5ub2RlKFwiY29udGVudC90b3AvYnRuX2Nsb3NlXCIpXG4gIGJ0bkNsb3NlOiBcImNvbnRlbnQvdG9wL2J0bl9jbG9zZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L3RvcC9sYmxfdGl0bGVcIilcbiAgbGJsVGl0bGU6IFwiY29udGVudC90b3AvbGJsX3RpdGxlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvcHJvZ3Jlc3NCYXJcIilcbiAgcHJvZ3Jlc3NCYXI6IFwiY29udGVudC9wcm9ncmVzc0JhclwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L2JveC9zdGFydC90YXNrX2Jhcl9pY29uXCIpXG4gIHByb2dyZXNzSWNvbjogXCJjb250ZW50L2JveC9zdGFydC90YXNrX2Jhcl9pY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm94L3N0YXJ0L3Rhc2tfYmFyX2ljb24vbGFiZWxcIilcbiAgcHJvZ3Jlc3NEYXlMYWJlbDogXCJjb250ZW50L2JveC9zdGFydC90YXNrX2Jhcl9pY29uL2xhYmVsXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm94L25vZGUzXCIpXG4gIGJveDNEYXlzOiBcImNvbnRlbnQvYm94L25vZGUzXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm94L25vZGU2XCIpXG4gIGJveDZEYXlzOiBcImNvbnRlbnQvYm94L25vZGU2XCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm94L25vZGU5XCIpXG4gIGJveDlEYXlzOiBcImNvbnRlbnQvYm94L25vZGU5XCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm94L25vZGUxMlwiKVxuICBib3gxMkRheXM6IFwiY29udGVudC9ib3gvbm9kZTEyXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvZGF5cy9kYXkxXCIpXG4gIGRheTE6IFwiY29udGVudC9kYXlzL2RheTFcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiY29udGVudC9kYXlzL2RheTJcIilcbiAgZGF5MjogXCJjb250ZW50L2RheXMvZGF5MlwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L2RheXMvZGF5M1wiKVxuICBkYXkzOiBcImNvbnRlbnQvZGF5cy9kYXkzXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvZGF5cy9kYXk0XCIpXG4gIGRheTQ6IFwiY29udGVudC9kYXlzL2RheTRcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiY29udGVudC9kYXlzL2RheTVcIilcbiAgZGF5NTogXCJjb250ZW50L2RheXMvZGF5NVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L2RheXMvZGF5NlwiKVxuICBkYXk2OiBcImNvbnRlbnQvZGF5cy9kYXk2XCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvZGF5cy9kYXk3XCIpXG4gIGRheTc6IFwiY29udGVudC9kYXlzL2RheTdcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiY29udGVudC9idG5zL2NsYWltQnRuXCIpXG4gIGNsYWltQnRuOiBcImNvbnRlbnQvYnRucy9jbGFpbUJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L2J0bnMvYWRDbGFpbUJ0blwiKVxuICBhZENsYWltQnRuOiBcImNvbnRlbnQvYnRucy9hZENsYWltQnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYm90dG9tVGlwL3RpcDFcIilcbiAgdGlwTGFiZWw6IFwiY29udGVudC9ib3R0b21UaXAvdGlwMVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50L2JvdHRvbVRpcC90aW1lVGlwXCIpXG4gIHRpbWVMYWJlbDogXCJjb250ZW50L2JvdHRvbVRpcC90aW1lVGlwXCIgPSBudWxsO1xuICBkYXlOb2RlcyA9IFtdO1xuICBib3hOb2RlcyA9IFtdO1xuICBjb3VudGRvd25UaW1lciA9IG51bGw7XG4gIG1vZGVsID0gbnVsbDtcbiAganVzdENsYWltZWREYXkgPSAtMTtcbiAgbGFzdENoZWNrRGF0ZSA9IFwiXCI7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYi9EYWlseVNpZ25DbGFzc2ljXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm1vZGVsID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5kYXlOb2RlcyA9IFt0aGlzLmRheTEsIHRoaXMuZGF5MiwgdGhpcy5kYXkzLCB0aGlzLmRheTQsIHRoaXMuZGF5NSwgdGhpcy5kYXk2LCB0aGlzLmRheTddO1xuICAgIHRoaXMuYm94Tm9kZXMgPSBbdGhpcy5ib3gzRGF5cywgdGhpcy5ib3g2RGF5cywgdGhpcy5ib3g5RGF5cywgdGhpcy5ib3gxMkRheXNdO1xuICAgIHRoaXMuc2V0QWRCdXR0b25UZXh0KCk7XG4gICAgdGhpcy5yZWdpc3RlckJ1dHRvbkV2ZW50cygpO1xuICB9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMucmVmcmVzaFVJKCk7XG4gIH1cbiAgdmlld0RpZFNob3coKSB7XG4gICAgdGhpcy5yZWZyZXNoVUkoKTtcbiAgfVxuICBzZXRBZEJ1dHRvblRleHQoKSB7XG4gICAgdmFyIHQ7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSkge1xuICAgICAgdmFyIGUgPSBudWxsID09PSAodCA9IHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub2RlO1xuICAgICAgZSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KGUsIFwiQ2xhaW0geDJcIiwgXCJDb21tb25fUmV3YXJkX0NsYWltX0Fkc1wiLCBbMl0pO1xuICAgIH1cbiAgfVxuICByZWdpc3RlckJ1dHRvbkV2ZW50cygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYnRuQ2xvc2UsIHRoaXMub25DbG9zZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmNsYWltQnRuLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkNsYWltKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5hZENsYWltQnRuLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkNsYWltKHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMuZGF5Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5maW5kKFwiYmdcIiwgZSk7XG4gICAgICAgIGNjLmlzVmFsaWQobykgJiYgdC5PbkJ1dHRvbkNsaWNrKG8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0Lm9uRGF5QmdDbGljayhpICsgMSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYm94Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5maW5kKFwiYnRuX2JveF9jbG9zZVwiLCBlKTtcbiAgICAgICAgY2MuaXNWYWxpZChvKSAmJiB0Lk9uQnV0dG9uQ2xpY2sobywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQub25Cb3hDbGljayhpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVmcmVzaFVJKCkge1xuICAgIHZhciB0ID0gdGhpcy5tb2RlbC5nZXRDb25maWcoKSxcbiAgICAgIGUgPSB0aGlzLm1vZGVsLmdldENvbnNlY3V0aXZlRGF5cygpLFxuICAgICAgaSA9IHRoaXMubW9kZWwuZ2V0TG9uZ1Rlcm1EYXlzKCksXG4gICAgICBvID0gdGhpcy5tb2RlbC5jaGVja1RvZGF5U2lnbmVkKCk7XG4gICAgdGhpcy51cGRhdGVQcm9ncmVzcyhpLCB0Lm1heExvbmdUZXJtRGF5cyk7XG4gICAgdGhpcy51cGRhdGVXZWVrbHlEaXNwbGF5KGUgfHwgMSwgdC53ZWVrbHlSZXdhcmRzKTtcbiAgICB0aGlzLnVwZGF0ZUxvbmdUZXJtQm94ZXMoaSwgdC5sb25nVGVybVJld2FyZHMsIHRoaXMubW9kZWwubG9jYWxEYXRhLmNsYWltZWRMb25nVGVybVJld2FyZHMpO1xuICAgIGlmIChvKSB7XG4gICAgICB0aGlzLnNldENsYWltQnV0dG9uc1Zpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5zZXRDb3VudGRvd25WaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5zdGFydENvdW50ZG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldENsYWltQnV0dG9uc1Zpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnNldENvdW50ZG93blZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQ7XG4gICAgdGhpcy5ub3RpZnlIYWxsQnV0dG9uVXBkYXRlKCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICB9XG4gIG5vdGlmeUhhbGxCdXR0b25VcGRhdGUoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJEQUlMWV9TSUdOX1ZJRVdfQ0xPU0VEXCIpO1xuICB9XG4gIG9uRGF5QmdDbGljayh0KSB7XG4gICAgdGhpcy5tb2RlbC5nZXREYXlTdGF0ZSh0KSA9PT0gRURhaWx5U2lnblN0YXRlLkNsYWltYWJsZSAmJiB0aGlzLm9uQ2xhaW0oZmFsc2UpO1xuICB9XG4gIG9uQ2xhaW0odCkge1xuICAgIHRoaXMubW9kZWwuY2hlY2tUb2RheVNpZ25lZCgpIHx8ICh0ID8gdGhpcy5wbGF5QWRBbmRDbGFpbSgpIDogdGhpcy5jbGFpbVJld2FyZChmYWxzZSkpO1xuICB9XG4gIHBsYXlBZEFuZENsYWltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuY2xhaW1SZXdhcmQodHJ1ZSk7XG4gICAgICB9LFxuICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSk7XG4gIH1cbiAgY2xhaW1SZXdhcmQodCkge1xuICAgIGlmICghdGhpcy5tb2RlbC5jaGVja1RvZGF5U2lnbmVkKCkpIHtcbiAgICAgIHRoaXMubW9kZWwuZ2V0Q29uc2VjdXRpdmVEYXlzKCk7XG4gICAgICBpZiAoNiA9PT0gdGhpcy5tb2RlbC5nZXRDdXJyZW50V2Vla2x5UmV3YXJkKCkuZGF5KSB7XG4gICAgICAgIHRoaXMucGxheURheTdBbmltYXRpb25BbmRDbGFpbSh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUNsYWltUmV3YXJkKHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5RGF5N0FuaW1hdGlvbkFuZENsYWltKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBpID0gdGhpcy5kYXlOb2Rlc1s2XTtcbiAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgY2MuZmluZChcImJnL3Byb3BcIiwgaSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpblwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuZXhlY3V0ZUNsYWltUmV3YXJkKHQpO1xuICAgICAgfSwgMC43KTtcbiAgICB9IGVsc2UgdGhpcy5leGVjdXRlQ2xhaW1SZXdhcmQodCk7XG4gIH1cbiAgZXhlY3V0ZUNsYWltUmV3YXJkKHQpIHtcbiAgICB0aGlzLm1vZGVsLnNpZ25JbigpO1xuICAgIHZhciBlID0gdGhpcy5tb2RlbC5nZXRDdXJyZW50V2Vla2x5UmV3YXJkKCk7XG4gICAgdGhpcy5qdXN0Q2xhaW1lZERheSA9IGUuZGF5O1xuICAgIHZhciBpID0gdCA/IDIgOiAxLFxuICAgICAgbyA9IGUuaGludCAqIGksXG4gICAgICBuID0gZS5zaHVmZmxlICogaTtcbiAgICB0aGlzLmdpdmVSZXdhcmQobywgbiwgdCk7XG4gICAgdmFyIGEgPSB7XG4gICAgICBkYXk6IGUuZGF5LFxuICAgICAgaGludDogbyxcbiAgICAgIHNodWZmbGU6IG5cbiAgICB9O1xuICAgIHRoaXMuc2hvd1Jld2FyZFBhbmVsKGUuZGF5LCBhKTtcbiAgfVxuICBzaG93UmV3YXJkUGFuZWwodCwgZSwgaSA9IEVSZXdhcmRUeXBlLkRhaWx5LCBvPykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBTaWduQ2xhc3NpY1Jld2FyZFZpZXcuY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoYSAmJiBuLm5vZGUgJiYgY2MuaXNWYWxpZChuLm5vZGUpKSB7XG4gICAgICAgIG4ubm9kZS5hZGRDaGlsZChhKTtcbiAgICAgICAgdmFyIHMgPSBhLmdldENvbXBvbmVudChTaWduQ2xhc3NpY1Jld2FyZFZpZXcpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIHMub25DbG9zZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbi5yZWZyZXNoVUkoKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHMuc2hvd1Jld2FyZCh0LCBlLCBpLCBvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG4ucmVmcmVzaFVJKCk7XG4gICAgfSk7XG4gIH1cbiAgZ2l2ZVJld2FyZCh0LCBlLCBpKSB7XG4gICAgdmFyIG8gPSB0aGlzLm1vZGVsLmdldENvbnNlY3V0aXZlRGF5cygpLFxuICAgICAgbiA9IEVHZXRJdGVtUmVhc29uSWQuRGFpbHlTaWduQ2xhc3NpYyxcbiAgICAgIGEgPSBpID8gXCLnu4/lhbjniYjov57nu63nmbvlvZVf5r+A5Yqx57+75YCNX+esrFwiICsgbyArIFwi5aSpXCIgOiBcIue7j+WFuOeJiOi/nue7reeZu+W9lV/nrKxcIiArIG8gKyBcIuWkqVwiLFxuICAgICAgcyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpO1xuICAgIGlmICh0ID4gMCkge1xuICAgICAgcy5jaGFuZ2VIaXRUaXBzTnVtcyh0KTtcbiAgICAgIHZhciByID0gcy5nZXRIaXRUaXBzTnVtcygpO1xuICAgICAgRG90R2FtZUdldEl0ZW0uZG90R2V0SXRlbShzLCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5IaW50LFxuICAgICAgICBudW1iZXI6IHQsXG4gICAgICAgIGFmdGVyTnVtOiByLFxuICAgICAgICByZWFzb25JZDogbixcbiAgICAgICAgcmVhc29uSW5mbzogYVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlID4gMCkge1xuICAgICAgcy5jaGFuZ2VTaHVmZmxlTnVtcyhlKTtcbiAgICAgIHIgPSBzLmdldFNodWZmbGVOdW1zKCk7XG4gICAgICBEb3RHYW1lR2V0SXRlbS5kb3RHZXRJdGVtKHMsIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlNodWZmbGUsXG4gICAgICAgIG51bWJlcjogZSxcbiAgICAgICAgYWZ0ZXJOdW06IHIsXG4gICAgICAgIHJlYXNvbklkOiBuLFxuICAgICAgICByZWFzb25JbmZvOiBhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25Cb3hDbGljayh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLm1vZGVsLmdldENvbmZpZygpLmxvbmdUZXJtUmV3YXJkc1t0XTtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5tb2RlbC5nZXRMb25nVGVybURheXMoKSwgdGhpcy5tb2RlbC5pc0xvbmdUZXJtUmV3YXJkQ2xhaW1lZChlLnRvdGFsRGF5cyk7XG4gICAgICB0aGlzLm1vZGVsLmNhbkNsYWltTG9uZ1Rlcm1SZXdhcmQoZS50b3RhbERheXMpICYmIHRoaXMuY2xhaW1Mb25nVGVybVJld2FyZCh0LCBlKTtcbiAgICB9XG4gIH1cbiAgY2xhaW1Mb25nVGVybVJld2FyZCh0LCBlKSB7XG4gICAgdGhpcy5tb2RlbC5jbGFpbUxvbmdUZXJtUmV3YXJkKGUudG90YWxEYXlzKTtcbiAgICB2YXIgaSA9IEVHZXRJdGVtUmVhc29uSWQuRGFpbHlTaWduQ2xhc3NpYyxcbiAgICAgIG8gPSBcIue7j+WFuOeJiOe0r+iuoeeZu+W9lV/nrKxcIiArIGUudG90YWxEYXlzICsgXCLlpKlcIixcbiAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKTtcbiAgICBpZiAoZS5oaW50ID4gMCkge1xuICAgICAgbi5jaGFuZ2VIaXRUaXBzTnVtcyhlLmhpbnQpO1xuICAgICAgdmFyIGEgPSBuLmdldEhpdFRpcHNOdW1zKCk7XG4gICAgICBEb3RHYW1lR2V0SXRlbS5kb3RHZXRJdGVtKG4sIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLkhpbnQsXG4gICAgICAgIG51bWJlcjogZS5oaW50LFxuICAgICAgICBhZnRlck51bTogYSxcbiAgICAgICAgcmVhc29uSWQ6IGksXG4gICAgICAgIHJlYXNvbkluZm86IG9cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZS5zaHVmZmxlID4gMCkge1xuICAgICAgbi5jaGFuZ2VTaHVmZmxlTnVtcyhlLnNodWZmbGUpO1xuICAgICAgYSA9IG4uZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdEdldEl0ZW0obiwge1xuICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuU2h1ZmZsZSxcbiAgICAgICAgbnVtYmVyOiBlLnNodWZmbGUsXG4gICAgICAgIGFmdGVyTnVtOiBhLFxuICAgICAgICByZWFzb25JZDogaSxcbiAgICAgICAgcmVhc29uSW5mbzogb1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBzID0ge1xuICAgICAgZGF5OiBlLnRvdGFsRGF5cyxcbiAgICAgIGhpbnQ6IGUuaGludCxcbiAgICAgIHNodWZmbGU6IGUuc2h1ZmZsZVxuICAgIH07XG4gICAgdGhpcy5zaG93UmV3YXJkUGFuZWwoZS50b3RhbERheXMsIHMsIEVSZXdhcmRUeXBlLkJveCwgdCk7XG4gIH1cbiAgdXBkYXRlUHJvZ3Jlc3ModCkge1xuICAgIHZhciBlID0gdGhpcy5tb2RlbC5nZXRDb25maWcoKS5sb25nVGVybVJld2FyZHMsXG4gICAgICBpID0gdGhpcy5jYWxjdWxhdGVTZWdtZW50ZWRQcm9ncmVzcyh0LCBlKTtcbiAgICBpID4gMCAmJiBpIDwgMC4xICYmIChpID0gMC4xKTtcbiAgICB0aGlzLnByb2dyZXNzQmFyLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSBpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucHJvZ3Jlc3NEYXlMYWJlbCkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5wcm9ncmVzc0RheUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBvICYmIChvLnN0cmluZyA9IFwiXCIgKyB0KTtcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlU2VnbWVudGVkUHJvZ3Jlc3ModCwgZSkge1xuICAgIGlmICh0IDw9IDApIHJldHVybiAwO1xuICAgIHZhciBpID0gWzAuMjUsIDAuNSwgMC43NSwgMV0sXG4gICAgICBvID0gZS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQudG90YWxEYXlzO1xuICAgICAgfSk7XG4gICAgaWYgKHQgPj0gb1tvLmxlbmd0aCAtIDFdKSByZXR1cm4gMTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IG8ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBhID0gb1tuXSxcbiAgICAgICAgcyA9IGlbbl07XG4gICAgICBpZiAodCA8PSBhKSB7XG4gICAgICAgIHZhciByID0gMCA9PT0gbiA/IDAgOiBvW24gLSAxXSxcbiAgICAgICAgICBsID0gMCA9PT0gbiA/IDAgOiBpW24gLSAxXTtcbiAgICAgICAgcmV0dXJuIGwgKyAodCAtIHIpIC8gKGEgLSByKSAqIChzIC0gbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9XG4gIHVwZGF0ZVdlZWtseURpc3BsYXkodCwgZSkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB0aGlzLmRheU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBuID0gbyArIDEsXG4gICAgICAgICAgYSA9IGUuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuZGF5ID09PSBuO1xuICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIHZhciBzID0gaS5tb2RlbC5nZXREYXlTdGF0ZShuKTtcbiAgICAgICAgICBpLnVwZGF0ZURheVJld2FyZCh0LCBhLCBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZURheVJld2FyZCh0LCBlLCBpKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gaSA9PT0gRURhaWx5U2lnblN0YXRlLkNsYWltZWQsXG4gICAgICAgIG4gPSBpID09PSBFRGFpbHlTaWduU3RhdGUuQ2xhaW1hYmxlLFxuICAgICAgICBhID0gKEVEYWlseVNpZ25TdGF0ZS5Mb2NrZWQsIGNjLmZpbmQoXCJiZy9wcm9wXCIsIHQpKSxcbiAgICAgICAgcyA9IGNjLmZpbmQoXCJiZy9tYXNrXCIsIHQpLFxuICAgICAgICBsID0gY2MuZmluZChcImJnL2xpbmdxdVwiLCB0KSxcbiAgICAgICAgYyA9IGNjLmZpbmQoXCJiZy90ZXh0XCIsIHQpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgY2MuaXNWYWxpZChjKSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KGMsIFwiRGF5IFwiICsgZS5kYXksIFwiRGFpbHlsb2cyX3RleHQyXCIsIFtlLmRheV0pO1xuICAgICAgICBpZiAoNyA9PT0gZS5kYXkpIHtcbiAgICAgICAgICB2YXIgZCA9IGEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgdmFyIHUgPSBcIlwiO1xuICAgICAgICAgICAgdSA9IG8gPyBcImluaXQyXCIgOiBcImluaXQxXCI7XG4gICAgICAgICAgICBkLnNldEFuaW1hdGlvbigwLCB1LCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGggPSBjYy5maW5kKFwiaXRlbTFcIiwgYSk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGgpKSB7XG4gICAgICAgICAgdmFyIGYgPSBlLnNodWZmbGUgPiAwO1xuICAgICAgICAgIGguYWN0aXZlID0gZjtcbiAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgdmFyIHkgPSBjYy5maW5kKFwiaWNvblwiLCBoKTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQoeSkgJiYgdGhpcy5sb2FkQW5kU2V0SWNvbih5LCBcIm1haW5SZXNcIiwgXCJ0ZXh0dXJlL2JveFJld2FyZC9yZXdhcmRfaWNvbl9yZWZyZXNoXCIpO1xuICAgICAgICAgICAgdmFyIGcgPSBjYy5maW5kKFwiY291bnRcIiwgaCk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGcpICYmIChDID0gZy5nZXRDb21wb25lbnQoY2MuTGFiZWwpKSAmJiAoQy5zdHJpbmcgPSBcIlwiICsgZS5zaHVmZmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHYgPSBjYy5maW5kKFwiaXRlbTJcIiwgYSk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHYpKSB7XG4gICAgICAgICAgdmFyIEQgPSBlLmhpbnQgPiAwO1xuICAgICAgICAgIHYuYWN0aXZlID0gRDtcbiAgICAgICAgICBpZiAoRCkge1xuICAgICAgICAgICAgdmFyIHcgPSBjYy5maW5kKFwiaWNvblwiLCB2KTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQodykgJiYgdGhpcy5sb2FkQW5kU2V0SWNvbih3LCBcIm1haW5SZXNcIiwgXCJ0ZXh0dXJlL2JveFJld2FyZC9yZXdhcmRfaWNvbl9oaW50XCIpO1xuICAgICAgICAgICAgdmFyIF8gPSBjYy5maW5kKFwiY291bnRcIiwgdik7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChfKSkge1xuICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgKEMgPSBfLmdldENvbXBvbmVudChjYy5MYWJlbCkpICYmIChDLnN0cmluZyA9IFwiXCIgKyBlLmhpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgUyA9IGNjLmZpbmQoXCJiZy9zcGluZVwiLCB0KTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoUykpIHtcbiAgICAgICAgICBTLmFjdGl2ZSA9IG47XG4gICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIHZhciBiID0gUy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgdSA9IFwiXCI7XG4gICAgICAgICAgICAgIHUgPSA3ID09PSBlLmRheSA/IFwiaW5pdF8zXCIgOiAxID09IChlLnNodWZmbGUgPiAwID8gMSA6IDApICsgKGUuaGludCA+IDAgPyAxIDogMCkgPyBcImluaXRfMVwiIDogXCJpbml0XzJcIjtcbiAgICAgICAgICAgICAgYi5zZXRBbmltYXRpb24oMCwgdSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gY2MuZmluZChcImJnXCIsIHQpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChrKSkgaWYgKG4pIHtcbiAgICAgICAgICB2YXIgVCA9IFtcInRleHR1cmUvaXRlYW1fYmdfY2hvb3NlXCIsIFwidGV4dHVyZS9pdGVhbV9iZzAxX2Nob29zZVwiXTtcbiAgICAgICAgICA3ID09PSBlLmRheSAmJiAoVCA9IFtcInRleHR1cmUvaXRlYW1fYmdfY2hvb3NlXCIsIFwidGV4dHVyZS9pdGVhbV9iZzAyX2Nob29zZVwiXSk7XG4gICAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaywgVFswXSwgZmFsc2UsIHRydWUsIFwicl9kYWlseVNpZ25DbGFzc2ljXCIpO1xuICAgICAgICAgIHZhciBSID0gY2MuZmluZChcImJnMVwiLCBrKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKFIpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKFIsIFRbMV0sIGZhbHNlLCB0cnVlLCBcInJfZGFpbHlTaWduQ2xhc3NpY1wiKTtcbiAgICAgICAgICBjLmNvbG9yID0gbmV3IGNjLkNvbG9yKDE0OSwgOTMsIDIsIDI1NSk7XG4gICAgICAgICAgdmFyIEkgPSBjYy5maW5kKFwiYmcvdGV4dF90b2RheVwiLCB0KTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChJKSkge1xuICAgICAgICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dChJLCBcIlRvZGF5XCIsIFwiRGFpbHlsb2cyX3RleHQ0XCIpO1xuICAgICAgICAgICAgSS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaywgXCJ0ZXh0dXJlL2l0ZWFtX2JnXCIsIGZhbHNlLCB0cnVlLCBcInJfZGFpbHlTaWduQ2xhc3NpY1wiKTtcbiAgICAgICAgICBSID0gY2MuZmluZChcImJnMVwiLCBrKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKFIpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKFIsIDcgPT09IGUuZGF5ID8gXCJ0ZXh0dXJlL2l0ZWFtX2JnMDJcIiA6IFwidGV4dHVyZS9pdGVhbV9iZzAxXCIsIGZhbHNlLCB0cnVlLCBcInJfZGFpbHlTaWduQ2xhc3NpY1wiKTtcbiAgICAgICAgICBjLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI0NSwgMTUyLCA5OCwgMjU1KTtcbiAgICAgICAgICBJID0gY2MuZmluZChcImJnL3RleHRfdG9kYXlcIiwgdCk7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoSSkpIHtcbiAgICAgICAgICAgIEkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5qdXN0Q2xhaW1lZERheSA9PT0gZS5kYXkpIHtcbiAgICAgICAgICAgIHZhciBMID0gbC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgTCAmJiBMLnNldEFuaW1hdGlvbigwLCBcImluXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuanVzdENsYWltZWREYXkgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvYWRBbmRTZXRJY29uKHQsIGUsIGkpIHtcbiAgICBjYy5pc1ZhbGlkKHQpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIGksIGZhbHNlLCB0cnVlLCBlKTtcbiAgfVxuICB1cGRhdGVMb25nVGVybUJveGVzKHQsIGUsIGkpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdGhpcy5ib3hOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChuLCBhKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgICB2YXIgcyA9IGVbYV07XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgdmFyIHIgPSB0ID49IHMudG90YWxEYXlzLFxuICAgICAgICAgICAgbCA9IGkuaW5jbHVkZXMocy50b3RhbERheXMpO1xuICAgICAgICAgIG8udXBkYXRlQm94RGF5VGV4dChuLCBzLnRvdGFsRGF5cyk7XG4gICAgICAgICAgby51cGRhdGVCb3hTdGF0ZShuLCByLCBsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZUJveERheVRleHQodCwgZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgaSA9IGNjLmZpbmQoXCJ0ZXh0QmcvdGV4dFwiLCB0KTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgIHZhciBvID0gaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBvICYmIChvLnN0cmluZyA9IFwiXCIgKyBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlQm94U3RhdGUodCwgZSwgaSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgbyA9IGNjLmZpbmQoXCJidG5fYm94X2Nsb3NlXCIsIHQpLFxuICAgICAgICBuID0gY2MuZmluZChcInNwX2JveF9vcGVuMVwiLCB0KSxcbiAgICAgICAgYSA9IGNjLmZpbmQoXCJzcGluZV9jYW5HZXRcIiwgdCk7XG4gICAgICBjYy5pc1ZhbGlkKG8pICYmIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChvKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIG8gJiYgKG8uYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBuICYmIChuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICBhICYmIChhLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoZSkge1xuICAgICAgICBvICYmIChvLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICBuICYmIChuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgYSAmJiAoYS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8gJiYgKG8uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICAgIG4gJiYgKG4uYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBhICYmIChhLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0Q2xhaW1CdXR0b25zVmlzaWJsZSh0KSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiAodGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSB0KTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgKHRoaXMuYWRDbGFpbUJ0bi5hY3RpdmUgPSB0KTtcbiAgfVxuICBzZXRDb3VudGRvd25WaXNpYmxlKHQpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMudGlwTGFiZWwpICYmICh0aGlzLnRpcExhYmVsLmFjdGl2ZSA9IHQpO1xuICAgIGNjLmlzVmFsaWQodGhpcy50aW1lTGFiZWwpICYmICh0aGlzLnRpbWVMYWJlbC5hY3RpdmUgPSB0KTtcbiAgfVxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5zdG9wQ291bnRkb3duKCk7XG4gICAgdGhpcy5sYXN0Q2hlY2tEYXRlID0gdGhpcy5nZXRDdXJyZW50RGF0ZSgpO1xuICAgIHZhciBlID0gZnVuY3Rpb24gZSgpIHtcbiAgICAgIHZhciBlID0gdC5nZXRDdXJyZW50RGF0ZSgpO1xuICAgICAgaWYgKGUgPT09IHQubGFzdENoZWNrRGF0ZSkge1xuICAgICAgICB2YXIgaSA9IHQubW9kZWwuZ2V0VGltZVRvTmV4dERheSgpLFxuICAgICAgICAgIG8gPSB0Lm1vZGVsLmZvcm1hdENvdW50ZG93bihpKTtcbiAgICAgICAgdC51cGRhdGVDb3VudGRvd24obyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0Lmxhc3RDaGVja0RhdGUgPSBlO1xuICAgICAgICB0LnJlZnJlc2hVSSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgZSgpO1xuICAgIHRoaXMuY291bnRkb3duVGltZXIgPSBzZXRJbnRlcnZhbChlLCAxMDAwKTtcbiAgfVxuICBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKHQuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyB0LmdldERhdGUoKTtcbiAgfVxuICB1cGRhdGVDb3VudGRvd24odCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMudGltZUxhYmVsKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLnRpbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgZSAmJiAoZS5zdHJpbmcgPSB0KTtcbiAgICB9XG4gIH1cbiAgc3RvcENvdW50ZG93bigpIHtcbiAgICBpZiAodGhpcy5jb3VudGRvd25UaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50ZG93blRpbWVyKTtcbiAgICAgIHRoaXMuY291bnRkb3duVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICBwbGF5Qm94T3BlbkFuaW0odCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5ib3hOb2Rlc1t0XTtcbiAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgdmFyIG8gPSBjYy5maW5kKFwib3BlblwiLCBpKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgIG4uc2V0QW5pbWF0aW9uKDAsIFwib3BlblwiLCBmYWxzZSk7XG4gICAgICAgICAgbi5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG4uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBudWxsID09IGUgfHwgZSgpO1xuICAgICAgfSBlbHNlIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfSBlbHNlIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgcGxheUNsYWltRWZmZWN0KHQpIHtcbiAgICBudWxsID09IHQgfHwgdCgpO1xuICB9XG4gIHBsYXlEYXk3UHJvcEluQW5pbSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmRheTc7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciBpID0gY2MuZmluZChcImJnL3Byb3BcIiwgZSk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICB2YXIgbyA9IGkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICBvLnNldEFuaW1hdGlvbigwLCBcImluXCIsIGZhbHNlKTtcbiAgICAgICAgICBvLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgby5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgICB9IGVsc2UgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICB9IGVsc2UgbnVsbCA9PSB0IHx8IHQoKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQ291bnRkb3duKCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmJ0bkNsb3NlKSAmJiB0aGlzLmJ0bkNsb3NlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbG9zZUJ0bkNsaWNrLCB0aGlzKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pICYmIHRoaXMuY2xhaW1CdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIHRoaXMuYWRDbGFpbUJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=