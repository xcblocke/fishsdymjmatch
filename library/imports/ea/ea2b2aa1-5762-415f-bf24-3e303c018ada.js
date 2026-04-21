"use strict";
cc._RF.push(module, 'ea2b2qhV2JBX78kPjA8AYra', 'BoxRewardUI');
// subpackages/l_boxReward/Scripts/BoxRewardUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EBoxRewardState = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BoxBarItem_1 = require("./BoxBarItem");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DDebugInfo_1 = require("../../../Scripts/gamePlay/dot/DDebugInfo");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var EBoxRewardState;
(function (EBoxRewardState) {
    EBoxRewardState[EBoxRewardState["None"] = 0] = "None";
    EBoxRewardState[EBoxRewardState["Hide"] = 1] = "Hide";
    EBoxRewardState[EBoxRewardState["Entered"] = 2] = "Entered";
    EBoxRewardState[EBoxRewardState["CanClick"] = 3] = "CanClick";
    EBoxRewardState[EBoxRewardState["Clicked"] = 4] = "Clicked";
    EBoxRewardState[EBoxRewardState["Completed"] = 5] = "Completed";
})(EBoxRewardState = exports.EBoxRewardState || (exports.EBoxRewardState = {}));
var BoxRewardUI = /** @class */ (function (_super) {
    __extends(BoxRewardUI, _super);
    function BoxRewardUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.barLayout = null;
        _this.barContainer = null;
        _this.boxBtn = null;
        _this.boxAnim = null;
        _this.levelTip = null;
        _this.currentState = EBoxRewardState.None;
        _this.currentBarItem = null;
        _this.currentPassLevel = 1;
        _this.config = null;
        _this.hideBoxBtn = null;
        _this.showReward = false;
        _this.nextCallback = null;
        _this.isLoaded = false;
        _this.dataReady = false;
        return _this;
    }
    BoxRewardUI.prototype.showBoxRewardUI = function (t, e, i) {
        this.nextCallback = i;
        this.config = e;
        this.currentPassLevel = t > 0 ? t - 1 : 1;
        this.dataReady = true;
        this.playAction();
    };
    BoxRewardUI.prototype.reportDebugInfo = function () {
        var t = this.dumpTopScene();
        if (this.node.activeInHierarchy)
            DDebugInfo_1.DDebugInfo.dot("关卡宝箱进度条UI已激活节点但未执行onload, 当前场景控制器: " + t);
        else {
            var e = function e(t, i) {
                if (i === void 0) { i = []; }
                if (cc.isValid(t)) {
                    i.push(t.name);
                    if (t.active)
                        return e(t.parent, i);
                }
            }, i = [];
            e(this.node, i);
            if (i.length > 0) {
                DDebugInfo_1.DDebugInfo.dot("关卡宝箱进度条UI点未激活: " + i.join("->") + ", 当前场景控制器: " + t);
            }
            else {
                DDebugInfo_1.DDebugInfo.dot("关卡宝箱进度条UI没有找到未激活的节点, 当前场景控制器: " + t);
            }
        }
    };
    BoxRewardUI.prototype.dumpTopScene = function () {
        var t = [], e = ControllerManager_1.default.getInstance().getTopSceneController();
        if (e && e.subControllers && e.subControllers.length > 0)
            for (var i = e.subControllers.length - 1; i >= 0; i--) {
                var o = e.subControllers[i];
                o && o.constructor && t.push("" + mj.getClassName(o.constructor));
            }
        return t.join("->");
    };
    BoxRewardUI.prototype.playAction = function () {
        var t, e, i = this;
        if (!this.showReward)
            if (this.isLoaded) {
                this.node.opacity = 255;
                this.showReward = true;
                this.updateLabel();
                this.createBars();
                null === (t = this.delegate) || void 0 === t || t.viewDoAction("disableBtnNext");
                this.setState(EBoxRewardState.Entered);
                var o = 2, n = false, a = mj.getClassByName("NormalBoxTrait");
                a && true === a.getInstance().eventEnabled && (n = true);
                if (this.canGainBoxReward()) {
                    if (!n) {
                        var l = this.getRewardLevel(), d = UserModel_1.default.getInstance().getMainGameData().gameType, p = GameUtils_1.default.getInputAddPropType(d), u = {
                            inputType: p,
                            propType: "shuffle",
                            num: this.config.refresh,
                            reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                            reasonInfo: "主关卡宝箱奖励_到达第" + l + "关"
                        }, h = {
                            inputType: p,
                            propType: "hitTips",
                            num: this.config.hint,
                            reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                            reasonInfo: "主关卡宝箱奖励_到达第" + l + "关"
                        };
                        GameInteraction_1.GameInteraction.input(u);
                        GameInteraction_1.GameInteraction.input(h);
                    }
                    o = 5;
                }
                else {
                    var f = {
                        delayTime: o
                    };
                    mj.triggerInternalEvent("WinVw_btnNextDelay", this, [f]);
                    o = f.delayTime;
                    null === (e = this.nextCallback) || void 0 === e || e.call(this, false);
                    this.nextCallback = null;
                }
                cc.tween(this.node).delay(o).call(function () {
                    var t;
                    null === (t = i.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
                }).start();
            }
            else
                this.reportDebugInfo();
    };
    BoxRewardUI.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        if (this.checkNodes()) {
            this.initComponents();
            this.OnButtonClick(this.boxBtn, this.onBoxBtnClick.bind(this));
            this.OnButtonClick(this.hideBoxBtn, this.onHideBoxBtnClick.bind(this));
            null === (e = this.delegate) || void 0 === e || e.viewDoAction("moveSubTitleToBtnNextBottom");
            this.isLoaded = true;
            this.dataReady && this.playAction();
        }
        else
            this.node.active = false;
    };
    BoxRewardUI.prototype.checkNodes = function () {
        return !!(cc.isValid(this.refreshTipIcon) && cc.isValid(this.refreshTipValue) && cc.isValid(this.hintTipIcon) && cc.isValid(this.hintTipValue) && cc.isValid(this.levelTip) && cc.isValid(this.barLayout) && cc.isValid(this.boxAnim) && cc.isValid(this.boxBtn));
    };
    BoxRewardUI.prototype.initComponents = function () {
        this.initBoxAnim();
        this.hideBoxBtn = new cc.Node();
        this.hideBoxBtn.addComponent(cc.Button);
        this.node.addChild(this.hideBoxBtn);
        this.hideBoxBtn.active = false;
        var t = this.hideBoxBtn.addComponent(cc.Widget);
        t.isAlignTop = true;
        t.isAlignBottom = true;
        t.isAlignLeft = true;
        t.isAlignRight = true;
        t.top = 0;
        t.bottom = 0;
        t.left = 0;
        t.right = 0;
        Adapter_1.default.adaptBgSize(this.hideBoxBtn);
        Adapter_1.default.ignoreSafeRect(this.hideBoxBtn);
        this.setState(EBoxRewardState.Hide);
    };
    BoxRewardUI.prototype.setState = function (t) {
        if (this.currentState !== t) {
            this.currentState = t;
            switch (t) {
                case EBoxRewardState.Hide:
                    this.reset();
                    break;
                case EBoxRewardState.Entered:
                    this.playEnterAnim();
                    break;
                case EBoxRewardState.CanClick:
                    this.setBoxCanClickState();
                    break;
                case EBoxRewardState.Clicked:
                    this.playBoxClickAnim();
                    break;
                case EBoxRewardState.Completed:
                    this.setBoxCanClickState();
                    this.playCompletedAnim();
                    break;
                case EBoxRewardState.None:
            }
        }
    };
    BoxRewardUI.prototype.getRewardLevel = function () {
        return (Math.floor((this.currentPassLevel - 1) / this.config.level) + 1) * this.config.level;
    };
    BoxRewardUI.prototype.getRewardNodes = function () {
        return [{
                icon: this.refreshTipIcon,
                value: this.refreshTipValue
            }, {
                icon: this.hintTipIcon,
                value: this.hintTipValue
            }];
    };
    BoxRewardUI.prototype.updateLabel = function () {
        this.updateRewardCount();
        I18NStrings_1.default.setText(this.levelTip, "Lv." + this.getRewardLevel(), "MahjongTiles_MainPage_TargetLevel", [this.getRewardLevel()]);
        this.levelTip.active = true;
    };
    BoxRewardUI.prototype.updateRewardCount = function () {
        this.refreshTipValue.getComponent(cc.Label).string = this.config.refresh.toString();
        this.hintTipValue.getComponent(cc.Label).string = this.config.hint.toString();
    };
    BoxRewardUI.prototype.createBars = function () {
        this.currentBarItem = null;
        var t = this.config.level, e = (this.currentPassLevel - 1) % t;
        this.barContainer.removeAllChildren();
        this.barLayout.active = true;
        for (var i = 0; i < this.config.level; i++) {
            var o = this.createUISync(BoxBarItem_1.default);
            if (cc.isValid(o)) {
                var n = o.getComponent(BoxBarItem_1.default);
                n.setPathIndex(0 === i ? BoxBarItem_1.EBoxBarPos.First : i === this.config.level - 1 ? BoxBarItem_1.EBoxBarPos.Last : BoxBarItem_1.EBoxBarPos.Middle);
                this.barContainer.addChild(o);
                var a = i < e ? BoxBarItem_1.EBoxBarItemState.Completed : BoxBarItem_1.EBoxBarItemState.Normal;
                n.setState(a);
                i === e && (this.currentBarItem = n);
            }
        }
        this.barContainer.getComponent(cc.Layout).updateLayout();
        this.barLayout.active = false;
    };
    BoxRewardUI.prototype.initBoxAnim = function () {
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.attachNode("hook_icon_1", this.refreshTipIcon, 1);
        this.attachNode("hook_num_1", this.refreshTipValue, 1);
        this.attachNode("hook_icon_2", this.hintTipIcon, 1);
        this.attachNode("hook_num_2", this.hintTipValue, 1);
        this.attachNode("hook_num", this.levelTip, 1);
    };
    BoxRewardUI.prototype.attachNode = function (t, e, i) {
        if (i === void 0) { i = 1; }
        if (cc.isValid(this.animProxy) && cc.isValid(e)) {
            this.animProxy.attachNode(t, function () {
                return e;
            });
            e.setPosition(0, 0);
        }
    };
    BoxRewardUI.prototype.reset = function () {
        if (cc.isValid(this.refreshTipIcon) && cc.isValid(this.refreshTipValue) && cc.isValid(this.hintTipIcon) && cc.isValid(this.hintTipValue) && cc.isValid(this.levelTip) && cc.isValid(this.barLayout) && cc.isValid(this.boxBtn)) {
            this.refreshTipIcon.active = false;
            this.refreshTipValue.active = false;
            this.hintTipIcon.active = false;
            this.hintTipValue.active = false;
            this.barLayout.active = false;
            cc.Tween.stopAllByTarget(this.boxBtn);
            cc.Tween.stopAllByTarget(this.barLayout);
            cc.Tween.stopAllByTarget(this.levelTip);
            this.boxBtn.active = true;
            this.animProxy.stopAtFirstFrameOf("in");
            this.boxBtn.active = false;
            this.changeBoxBtnCanClick(false);
        }
    };
    BoxRewardUI.prototype.changeBoxBtnCanClick = function (t) {
        cc.isValid(this.boxBtn) && (this.boxBtn.getComponent(cc.Button).interactable = t);
    };
    BoxRewardUI.prototype.setBoxCanClickState = function () {
        this.hideBoxBtn.active = false;
        this.hintTipValue.active = false;
        this.hintTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.refreshTipIcon.active = false;
        this.changeBoxBtnCanClick(true);
    };
    BoxRewardUI.prototype.playEnterAnim = function () {
        var t = this;
        if (cc.isValid(this.currentBarItem) && cc.isValid(this.levelTip)) {
            this.playBarBoxEnter();
            var e = {
                delayTime: 0
            };
            mj.triggerInternalEvent("LevelBox_pbDelay", this, [e]);
            cc.tween(this.currentBarItem.node).delay(1.9 + e.delayTime).call(function () {
                if (cc.isValid(t.currentBarItem)) {
                    t.currentBarItem.setState(BoxBarItem_1.EBoxBarItemState.HighLight);
                    cc.isValid(t.boxAnim) && t.animProxy.setAnimation("in", 1, function () {
                        t.enterCompletedAnim();
                    });
                }
            }).start();
            cc.tween(this.levelTip).delay(2.2 + e.delayTime).call(function () {
                cc.isValid(t.levelTip);
            }).start();
        }
    };
    BoxRewardUI.prototype.playBarBoxEnter = function () {
        if (cc.isValid(this.barLayout) && cc.isValid(this.boxBtn)) {
            this.barLayout.active = true;
            this.barLayout.opacity = 0;
            this.barLayout.scale = 0.7;
            this.boxBtn.active = true;
            this.boxBtn.scale = 0.7;
            this.boxBtn.opacity = 0;
            cc.Tween.stopAllByTarget(this.barLayout);
            cc.Tween.stopAllByTarget(this.boxBtn);
            var t = cc.tween().delay(1.13).to(0.2, {
                opacity: 255,
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.14, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            });
            t.clone(this.barLayout).start();
            t.clone(this.boxBtn).start();
        }
    };
    BoxRewardUI.prototype.canGainBoxReward = function () {
        var t = this.config.rewardLevels, e = (this.currentPassLevel - 1) % this.config.level;
        return t.includes(e + 1);
    };
    BoxRewardUI.prototype.enterCompletedAnim = function () {
        var t;
        if (this.canGainBoxReward())
            this.setState(EBoxRewardState.Completed);
        else {
            this.setState(EBoxRewardState.CanClick);
            null === (t = this.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
        }
    };
    BoxRewardUI.prototype.onBoxBtnClick = function () {
        cc.isValid(this.boxBtn) && this.setState(EBoxRewardState.Clicked);
    };
    BoxRewardUI.prototype.onHideBoxBtnClick = function () {
        if (cc.isValid(this.boxAnim)) {
            this.animProxy.stopAtFirstFrameOf("click");
            this.hideBoxBtn.active = false;
            this.hintTipValue.active = false;
            this.hintTipIcon.active = false;
            this.refreshTipValue.active = false;
            this.refreshTipIcon.active = false;
            this.setState(EBoxRewardState.CanClick);
        }
    };
    BoxRewardUI.prototype.playBoxClickAnim = function () {
        var t, e = this;
        if (cc.isValid(this.boxAnim)) {
            this.changeBoxBtnCanClick(false);
            this.boxAnim.active = true;
            null === (t = this.animProxy.getSkeleton()) || void 0 === t || t.setEventListener(function (t, i) {
                if ("event_rewards" === i.data.name) {
                    if (!(cc.isValid(e.hintTipValue) && cc.isValid(e.hintTipIcon) && cc.isValid(e.refreshTipValue) && cc.isValid(e.refreshTipIcon)))
                        return;
                    e.hintTipValue.active = true;
                    e.hintTipIcon.active = true;
                    e.refreshTipValue.active = true;
                    e.refreshTipIcon.active = true;
                    e.hideBoxBtn.active = true;
                }
            });
            this.animProxy.setAnimation("click", 1, function () {
                e.animProxy.setAnimation("init", -1);
            });
        }
    };
    BoxRewardUI.prototype.playCompletedAnim = function () {
        var t, e = this;
        if (cc.isValid(this.node.parent) && cc.isValid(this.node.parent.parent)) {
            var i = mj.getClassByName("NormalBoxTrait");
            i && i.getInstance().eventEnabled || null === (t = this.delegate) || void 0 === t || t.viewDoAction("hideContent");
            ControllerManager_1.default.getInstance().pushViewByController("NormalBoxController", {
                config: this.config,
                rewardLevel: this.getRewardLevel()
            }, function (t) {
                var i, o;
                if (cc.isValid(t)) {
                    var n = t.onUIDestroy.bind(t);
                    t.onUIDestroy = function () {
                        var i;
                        n(t);
                        null === (i = e.nextCallback) || void 0 === i || i.call(e, true);
                        e.nextCallback = null;
                    };
                }
                else {
                    null === (i = e.nextCallback) || void 0 === i || i.call(e, true);
                    e.nextCallback = null;
                }
                null === (o = e.delegate) || void 0 === o || o.viewDoAction("enableBtnNext");
            });
        }
    };
    BoxRewardUI.prefabUrl = "prefabs/boxReward/RewardUI";
    __decorate([
        mj.node("HintTipValue")
    ], BoxRewardUI.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], BoxRewardUI.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], BoxRewardUI.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], BoxRewardUI.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("BarLayout")
    ], BoxRewardUI.prototype, "barLayout", void 0);
    __decorate([
        mj.node("BarLayout/BarContainer")
    ], BoxRewardUI.prototype, "barContainer", void 0);
    __decorate([
        mj.node("BoxBtn")
    ], BoxRewardUI.prototype, "boxBtn", void 0);
    __decorate([
        mj.node("BoxBtn/BoxAnim")
    ], BoxRewardUI.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("LevelTip")
    ], BoxRewardUI.prototype, "levelTip", void 0);
    __decorate([
        mj.traitEvent("BoxRwdUI_showBoxRewardUI")
    ], BoxRewardUI.prototype, "showBoxRewardUI", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_initCpts")
    ], BoxRewardUI.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_updateLabel")
    ], BoxRewardUI.prototype, "updateLabel", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_updateRwdCount")
    ], BoxRewardUI.prototype, "updateRewardCount", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_initBoxAnim")
    ], BoxRewardUI.prototype, "initBoxAnim", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_reset")
    ], BoxRewardUI.prototype, "reset", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_playEnterAni")
    ], BoxRewardUI.prototype, "playEnterAnim", null);
    __decorate([
        mj.traitEvent("BoxRwdUI_barBoxEnter")
    ], BoxRewardUI.prototype, "playBarBoxEnter", null);
    BoxRewardUI = __decorate([
        mj.class
    ], BoxRewardUI);
    return BoxRewardUI;
}(BaseUI_1.default));
exports.default = BoxRewardUI;

cc._RF.pop();