"use strict";
cc._RF.push(module, '0ddbcC++41KuLfGKJrmSm6f', 'DailySignSimpleTrait');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DailySignSimpleUI_1 = require("./DailySignSimpleUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DailySignSimpleModel_1 = require("./DailySignSimpleModel");
var DailySignSimpleRewardView_1 = require("./DailySignSimpleRewardView");
var EventTrackingManager_1 = require("../../../Scripts/base/event/EventTrackingManager");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var EventData_1 = require("../../../Scripts/base/event/EventData");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DailySignSimpleTrait = /** @class */ (function (_super) {
    __extends(DailySignSimpleTrait, _super);
    function DailySignSimpleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._uiNode = null;
        _this._uiComponent = null;
        _this._model = null;
        return _this;
    }
    DailySignSimpleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._model = DailySignSimpleModel_1.default.getInstance();
        this._traitData && this._traitData.rewards && this._model.setRewardsConfig(this._traitData.rewards);
    };
    DailySignSimpleTrait.prototype.isFeatureEnabled = function () {
        var t = mj.getClassByName("TaskTrait");
        if (!t)
            return false;
        var e = t.getInstance();
        if (!e || true !== e.eventEnabled)
            return false;
        var i = mj.getClassByName("TaskModel");
        return !!i && i.getInstance().isTaskOpen();
    };
    DailySignSimpleTrait.prototype.onHallVw_onPopView = function (t, e) {
        if (this.isFeatureEnabled() && this.showTaskPopView()) {
            e({
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    DailySignSimpleTrait.prototype.showTaskPopView = function () {
        if (this.hasClaimableSign())
            try {
                ControllerManager_1.default.getInstance().pushViewByController("TaskController");
                return true;
            }
            catch (t) { }
        return false;
    };
    DailySignSimpleTrait.prototype.hasClaimableSign = function () {
        var t = this._model.getCurrentDay();
        return this._model.getDayState(t) === DailySignSimpleModel_1.DailySignSimpleState.Ready;
    };
    DailySignSimpleTrait.prototype.onTaskListView_onLoad = function (t, e) {
        if (this.isFeatureEnabled()) {
            t.ins._cellHeight = 170;
            e();
        }
        else
            e();
    };
    DailySignSimpleTrait.prototype.onTaskItemVw_onLoad = function (t, e) {
        if (this.isFeatureEnabled()) {
            var i = t.ins;
            i.contentNode.getChildByName("sp_bg").height = 160;
            i.progressBar.node.setPosition(-166.86, -35.57, 0);
            i.progressLabel.node.setPosition(-162, -36.57, 0);
            i.rewardBtn.node.width = 182.5;
            i.rewardBtn.node.height = 74;
            i.rewardBtn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).fontSize = 37;
            i.rewardBtn.node.getChildByName("Background").getChildByName("Label").setPosition(0, 3, 0);
            i.nodeTitleNormal.setPosition(-49, 1.53, 0);
            i.nodeTitleNormal.getChildByName("lb_title").getComponent(cc.Label).fontSize = 37;
            i.nodeTitleNormal.getChildByName("lb_title").setPosition(-360, 30, 0);
            i.nodeTitleIcon.setPosition(-46, 5.57, 0);
            i.nodeTitleIcon.getChildByName("lb_title").setPosition(-320, 25, 0);
            i.nodeTitleIcon.getChildByName("lb_title").getComponent(cc.Label).fontSize = 37;
            var o = i.nodeTitleIcon.getChildByName("node_mj");
            if (o) {
                o.setPosition(-347, 25, 0);
                o.setScale(0.26);
            }
            i.node.height = 170;
            e();
        }
        else
            e();
    };
    DailySignSimpleTrait.prototype.onTaskView_initUI = function (t, e) {
        var i = t.ins;
        if (this.isFeatureEnabled()) {
            this._model.updateAccumulatedDays();
            this.updateUI(i);
            this.attachDailySignUI(i);
            i.getTaskListView() && i.getTaskListView().getTableView() && i.getTaskListView().getTableView().resetViewSize();
            e();
        }
        else
            e();
    };
    DailySignSimpleTrait.prototype.updateUI = function (t) {
        var e, i, o, n, a, r, s = t.node.getChildByName("content").getChildByName("board_bg");
        if (s) {
            BaseSprite_1.default.refreshWithNode(s, "texture/daily_bg_pop_1", false, true, "r_dailySignSimple");
            s.width = 978;
            s.height = 1186;
            s.setPosition(0, -79.4, 0);
        }
        var d = cc.find("content/top/top_bg", t.node);
        if (d) {
            BaseSprite_1.default.refreshWithNode(d, "texture/daily_bg_pop_2", false, true, "r_dailySignSimple");
            var h = d.getComponent(cc.Sprite);
            h && (h.sizeMode = cc.Sprite.SizeMode.RAW);
        }
        var p = cc.find("content/top", t.node);
        p && BaseUI_1.default.createUI("prefabs/DailySignSimpleTitle", "r_dailySignSimple").then(function (t) {
            if (t && cc.isValid(p)) {
                p.addChild(t);
                t.setPosition(-2, 147, 0);
            }
        }).catch(function () { });
        t._topNode.setPosition(0, 47, 0);
        t._progressBar.node.setPosition(0, 43, 0);
        t._progressBar.node.width = 814;
        t._progressBar.totalLength = 814;
        t._progressBar.node.getChildByName("progressImgBar").width = 814;
        t._progressBar.node.getChildByName("progressImgBar").setPosition(-407, 0, 0);
        cc.find("content/box", t.node).setPosition(15, -186, 0);
        var y = null === (e = t._boxClose1) || void 0 === e ? void 0 : e.getChildByName("Background");
        if (y) {
            y.width = 125.1;
            y.height = 104.4;
        }
        var f = null === (i = t._boxClose2) || void 0 === i ? void 0 : i.getChildByName("Background");
        if (f) {
            f.width = 133.45;
            f.height = 116.45;
        }
        var m = null === (o = t._boxClose3) || void 0 === o ? void 0 : o.getChildByName("Background");
        if (m) {
            m.width = 164.43;
            m.height = 140.94;
        }
        t._boxClose1.setPosition(-240, 224, 0);
        t._boxClose2.setPosition(29.8, 232, 0);
        t._boxClose3.setPosition(314, 244, 0);
        t._boxOpen1.setScale(0.9);
        t._boxOpen2.setScale(0.85);
        t._boxOpen3.setScale(0.87);
        t._boxOpen1.setPosition(-237, 237, 0);
        t._boxOpen2.setPosition(34.36, 241, 0);
        t._boxOpen3.setPosition(320, 253, 0);
        t._scrollView.node.setPosition(0, -372, 0);
        t._scrollView.node.width = 900;
        t._scrollView.node.height = 519;
        t._scrollView.node.getChildByName("view").height = 519;
        cc.find("content/btns", t.node).setPosition(0, -196.6, 0);
        cc.find("content/btns/bg", t.node).setPosition(-270, 125, 0);
        var g = cc.find("content/btns/bg/daily_bg_l", t.node);
        g.setPosition(-30, 3, 0);
        g.width = 300;
        g.height = 60;
        var _ = cc.find("content/btns/bg/daily_bg_m", t.node);
        _.setPosition(270, 3, 0);
        _.width = 300;
        _.height = 60;
        var S = cc.find("content/btns/bg/daily_bg_r", t.node);
        S.setPosition(571.7, 3, 0);
        S.width = 300;
        S.height = 60;
        var v = cc.find("content/btns/btn1", t.node);
        v.setPosition(-302.3, 127, 0);
        var C = null == v ? void 0 : v.getChildByName("Background");
        C && C.setScale(0.85);
        var D = cc.find("content/btns/btn2", t.node);
        D.setPosition(0, 127, 0);
        var w = null == D ? void 0 : D.getChildByName("Background");
        w && w.setScale(0.85);
        var b = cc.find("content/btns/btn3", t.node);
        b.setPosition(300.36, 127, 0);
        var T = null == b ? void 0 : b.getChildByName("Background");
        T && T.setScale(0.85);
        t._stageBtn1Select.setPosition(-304.3, 127, 0);
        var B = null === (n = t._stageBtn1Select) || void 0 === n ? void 0 : n.getChildByName("Background");
        if (B) {
            B.height = 60;
            var I = B.getChildByName("label");
            I && I.setScale(0.85);
        }
        t._stageBtn2Select.setPosition(0, 127, 0);
        var k = null === (a = t._stageBtn2Select) || void 0 === a ? void 0 : a.getChildByName("Background");
        if (k) {
            k.height = 60;
            var P = k.getChildByName("label");
            P && P.setScale(0.85);
        }
        t._stageBtn3Select.setPosition(301.2, 127, 0);
        var R = null === (r = t._stageBtn3Select) || void 0 === r ? void 0 : r.getChildByName("Background");
        if (R) {
            R.height = 60;
            var N = R.getChildByName("label");
            N && (N.scaleX = -0.85);
        }
        t._btn2Lock.setPosition(0, 125, 0);
        t._btn2Lock.getChildByName("Background").height = 60;
        t._btn3Lock.setPosition(302.38, 125, 0);
        t._btn3Lock.getChildByName("Background").height = 60;
        cc.find("content/top/lbl_title", t.node).getComponent(I18NComponent_1.default).setTranslateId("Dailylog_title1", "Daily Bonus");
    };
    DailySignSimpleTrait.prototype.attachDailySignUI = function (t) {
        var e = this;
        if (t && cc.isValid(t.node))
            if (this._uiNode && cc.isValid(this._uiNode)) {
                this._uiNode.parent || (this._uiNode.parent = t.node);
                if (this._uiComponent) {
                    this._uiComponent.refreshAllItems();
                    this._uiComponent.updateProgressBar(null);
                }
                this.trackPageShow();
            }
            else
                DailySignSimpleUI_1.default.createUI().then(function (i) {
                    if (i && cc.isValid(t.node)) {
                        i.parent = t.node;
                        i.setPosition(0, 377, 0);
                        e._uiNode = i;
                        e._uiComponent = i.getComponent(DailySignSimpleUI_1.default);
                        e._uiComponent && (e._uiComponent.onClaimReward = e.onClaimReward.bind(e));
                        e.trackPageShow();
                    }
                });
    };
    DailySignSimpleTrait.prototype.trackPageShow = function () {
        var t = this._model.getCurrentDay() + 1, e = this._model.getCurrentProgress();
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.PageShow, {
            page_name: "每日登录页面曝光",
            current_day: t,
            accumulated_days: e
        });
    };
    DailySignSimpleTrait.prototype.onClaimReward = function (t, e) {
        this.showRewardPanel(t, e);
    };
    DailySignSimpleTrait.prototype.showRewardPanel = function (t, e) {
        var i = this;
        DailySignSimpleRewardView_1.default.createUI().then(function (o) {
            var n;
            if (o) {
                var a = null === (n = i._uiNode) || void 0 === n ? void 0 : n.parent;
                if (a && cc.isValid(a)) {
                    a.addChild(o);
                    var r = o.getComponent(DailySignSimpleRewardView_1.default);
                    if (r) {
                        r.onCloseCallback = function () {
                            i.refreshUI();
                            i.showNextDayTipIfAvailable(t);
                        };
                        r.showReward(t, e);
                    }
                }
            }
        }).catch(function () { });
    };
    DailySignSimpleTrait.prototype.refreshUI = function () {
        if (this._uiComponent && cc.isValid(this._uiComponent.node)) {
            this._uiComponent.refreshAllItems();
            this._uiComponent.updateProgressBar(false);
        }
    };
    DailySignSimpleTrait.prototype.getProgress = function () {
        return this._model ? this._model.getProgressText() : "0/7";
    };
    DailySignSimpleTrait.prototype.showNextDayTipIfAvailable = function (t) {
        var e = t + 1;
        e >= 7 || this._uiComponent && cc.isValid(this._uiComponent.node) && this._uiComponent.showTipForDay(e);
    };
    DailySignSimpleTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t.removeDailySignTip = this.onRemoveDailySignTip.bind(this);
        return _t;
    };
    DailySignSimpleTrait.prototype.onRemoveDailySignTip = function () {
        this._uiComponent && cc.isValid(this._uiComponent.node) && this._uiComponent.removeDailySignTip();
    };
    DailySignSimpleTrait.prototype.onTaskItemLtVw_onLoad = function (t, e) {
        t.ins.spineBg.node.scaleY = 0.8;
        e();
    };
    DailySignSimpleTrait.traitKey = "DailySignSimple";
    __decorate([
        mj.traitEvent("DSSimple_showPopVw")
    ], DailySignSimpleTrait.prototype, "showTaskPopView", null);
    DailySignSimpleTrait = __decorate([
        mj.trait,
        mj.class("DailySignSimpleTrait")
    ], DailySignSimpleTrait);
    return DailySignSimpleTrait;
}(Trait_1.default));
exports.default = DailySignSimpleTrait;

cc._RF.pop();