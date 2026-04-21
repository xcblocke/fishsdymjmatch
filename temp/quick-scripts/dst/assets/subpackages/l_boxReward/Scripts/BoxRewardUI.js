
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/BoxRewardUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0JveFJld2FyZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTBGO0FBQzFGLG9GQUFtRjtBQUNuRiwyRUFBc0U7QUFDdEUsK0RBQTBEO0FBQzFELHlFQUFvRTtBQUNwRSwyQ0FBd0U7QUFDeEUsMEZBQXFGO0FBQ3JGLHVFQUFzRTtBQUN0RSxzRUFBaUU7QUFDakUsOERBQXlEO0FBQ3pELDRFQUF1RTtBQUN2RSxJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDekIscURBQVEsQ0FBQTtJQUNSLHFEQUFRLENBQUE7SUFDUiwyREFBVyxDQUFBO0lBQ1gsNkRBQVksQ0FBQTtJQUNaLDJEQUFXLENBQUE7SUFDWCwrREFBYSxDQUFBO0FBQ2YsQ0FBQyxFQVBXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBTzFCO0FBRUQ7SUFBeUMsK0JBQU07SUFBL0M7UUFBQSxxRUFtWUM7UUFqWUMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBcUIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQTZCLElBQUksQ0FBQztRQUU5QyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBcUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFDNUIsa0JBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQ3BDLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JB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Q0FBQyxzQkFBc0IsQ0FBQztrREFLckM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7d0RBSXhDO0lBc0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztrREFVckM7SUFVRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7NENBZ0IvQjtJQWFEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztvREFxQnRDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3NEQXdCckM7SUF4VGtCLFdBQVc7UUFEL0IsRUFBRSxDQUFDLEtBQUs7T0FDWSxXQUFXLENBbVkvQjtJQUFELGtCQUFDO0NBbllELEFBbVlDLENBbll3QyxnQkFBTSxHQW1ZOUM7a0JBbllvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCb3hCYXJJdGVtLCB7IEVCb3hCYXJQb3MsIEVCb3hCYXJJdGVtU3RhdGUgfSBmcm9tICcuL0JveEJhckl0ZW0nO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgRERlYnVnSW5mbyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0REZWJ1Z0luZm8nO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0FkYXB0ZXInO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmV4cG9ydCBlbnVtIEVCb3hSZXdhcmRTdGF0ZSB7XG4gIE5vbmUgPSAwLFxuICBIaWRlID0gMSxcbiAgRW50ZXJlZCA9IDIsXG4gIENhbkNsaWNrID0gMyxcbiAgQ2xpY2tlZCA9IDQsXG4gIENvbXBsZXRlZCA9IDUsXG59XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFJld2FyZFVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJIaW50VGlwVmFsdWVcIilcbiAgaGludFRpcFZhbHVlOiBcIkhpbnRUaXBWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwVmFsdWVcIilcbiAgcmVmcmVzaFRpcFZhbHVlOiBcIlJlZnJlc2hUaXBWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VGlwSWNvblwiKVxuICBoaW50VGlwSWNvbjogXCJIaW50VGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVGlwSWNvblwiKVxuICByZWZyZXNoVGlwSWNvbjogXCJSZWZyZXNoVGlwSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCYXJMYXlvdXRcIilcbiAgYmFyTGF5b3V0OiBcIkJhckxheW91dFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCYXJMYXlvdXQvQmFyQ29udGFpbmVyXCIpXG4gIGJhckNvbnRhaW5lcjogXCJCYXJMYXlvdXQvQmFyQ29udGFpbmVyXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJveEJ0blwiKVxuICBib3hCdG46IFwiQm94QnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJveEJ0bi9Cb3hBbmltXCIpXG4gIGJveEFuaW06IFwiQm94QnRuL0JveEFuaW1cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiTGV2ZWxUaXBcIilcbiAgbGV2ZWxUaXA6IFwiTGV2ZWxUaXBcIiA9IG51bGw7XG4gIGN1cnJlbnRTdGF0ZSA9IEVCb3hSZXdhcmRTdGF0ZS5Ob25lO1xuICBjdXJyZW50QmFySXRlbSA9IG51bGw7XG4gIGN1cnJlbnRQYXNzTGV2ZWwgPSAxO1xuICBjb25maWcgPSBudWxsO1xuICBoaWRlQm94QnRuID0gbnVsbDtcbiAgc2hvd1Jld2FyZCA9IGZhbHNlO1xuICBuZXh0Q2FsbGJhY2sgPSBudWxsO1xuICBpc0xvYWRlZCA9IGZhbHNlO1xuICBkYXRhUmVhZHkgPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9ib3hSZXdhcmQvUmV3YXJkVUlcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hSd2RVSV9zaG93Qm94UmV3YXJkVUlcIilcbiAgc2hvd0JveFJld2FyZFVJKHQsIGUsIGkpIHtcbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGk7XG4gICAgdGhpcy5jb25maWcgPSBlO1xuICAgIHRoaXMuY3VycmVudFBhc3NMZXZlbCA9IHQgPiAwID8gdCAtIDEgOiAxO1xuICAgIHRoaXMuZGF0YVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnBsYXlBY3Rpb24oKTtcbiAgfVxuICByZXBvcnREZWJ1Z0luZm8oKSB7XG4gICAgdmFyIHQgPSB0aGlzLmR1bXBUb3BTY2VuZSgpO1xuICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkpIEREZWJ1Z0luZm8uZG90KFwi5YWz5Y2h5a6d566x6L+b5bqm5p2hVUnlt7Lmv4DmtLvoioLngrnkvYbmnKrmiafooYxvbmxvYWQsIOW9k+WJjeWcuuaZr+aOp+WItuWZqDogXCIgKyB0KTtlbHNlIHtcbiAgICAgIHZhciBlID0gZnVuY3Rpb24gZSh0LCBpID0gW10pIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgICAgaS5wdXNoKHQubmFtZSk7XG4gICAgICAgICAgICBpZiAodC5hY3RpdmUpIHJldHVybiBlKHQucGFyZW50LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGkgPSBbXTtcbiAgICAgIGUodGhpcy5ub2RlLCBpKTtcbiAgICAgIGlmIChpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgRERlYnVnSW5mby5kb3QoXCLlhbPljaHlrp3nrrHov5vluqbmnaFVSeeCueacqua/gOa0uzogXCIgKyBpLmpvaW4oXCItPlwiKSArIFwiLCDlvZPliY3lnLrmma/mjqfliLblmag6IFwiICsgdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBERGVidWdJbmZvLmRvdChcIuWFs+WNoeWuneeusei/m+W6puadoVVJ5rKh5pyJ5om+5Yiw5pyq5r+A5rS755qE6IqC54K5LCDlvZPliY3lnLrmma/mjqfliLblmag6IFwiICsgdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGR1bXBUb3BTY2VuZSgpIHtcbiAgICB2YXIgdCA9IFtdLFxuICAgICAgZSA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0VG9wU2NlbmVDb250cm9sbGVyKCk7XG4gICAgaWYgKGUgJiYgZS5zdWJDb250cm9sbGVycyAmJiBlLnN1YkNvbnRyb2xsZXJzLmxlbmd0aCA+IDApIGZvciAodmFyIGkgPSBlLnN1YkNvbnRyb2xsZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgbyA9IGUuc3ViQ29udHJvbGxlcnNbaV07XG4gICAgICBvICYmIG8uY29uc3RydWN0b3IgJiYgdC5wdXNoKFwiXCIgKyBtai5nZXRDbGFzc05hbWUoby5jb25zdHJ1Y3RvcikpO1xuICAgIH1cbiAgICByZXR1cm4gdC5qb2luKFwiLT5cIik7XG4gIH1cbiAgcGxheUFjdGlvbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBpID0gdGhpcztcbiAgICBpZiAoIXRoaXMuc2hvd1Jld2FyZCkgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5zaG93UmV3YXJkID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgIHRoaXMuY3JlYXRlQmFycygpO1xuICAgICAgbnVsbCA9PT0gKHQgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC52aWV3RG9BY3Rpb24oXCJkaXNhYmxlQnRuTmV4dFwiKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRUJveFJld2FyZFN0YXRlLkVudGVyZWQpO1xuICAgICAgdmFyIG8gPSAyLFxuICAgICAgICBuID0gZmFsc2UsXG4gICAgICAgIGEgPSBtai5nZXRDbGFzc0J5TmFtZShcIk5vcm1hbEJveFRyYWl0XCIpO1xuICAgICAgYSAmJiB0cnVlID09PSBhLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmIChuID0gdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5jYW5HYWluQm94UmV3YXJkKCkpIHtcbiAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgdmFyIGwgPSB0aGlzLmdldFJld2FyZExldmVsKCksXG4gICAgICAgICAgICBkID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2FtZVR5cGUsXG4gICAgICAgICAgICBwID0gR2FtZVV0aWxzLmdldElucHV0QWRkUHJvcFR5cGUoZCksXG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBpbnB1dFR5cGU6IHAsXG4gICAgICAgICAgICAgIHByb3BUeXBlOiBcInNodWZmbGVcIixcbiAgICAgICAgICAgICAgbnVtOiB0aGlzLmNvbmZpZy5yZWZyZXNoLFxuICAgICAgICAgICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5MZXZlbEJveCxcbiAgICAgICAgICAgICAgcmVhc29uSW5mbzogXCLkuLvlhbPljaHlrp3nrrHlpZblirFf5Yiw6L6+56ysXCIgKyBsICsgXCLlhbNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGggPSB7XG4gICAgICAgICAgICAgIGlucHV0VHlwZTogcCxcbiAgICAgICAgICAgICAgcHJvcFR5cGU6IFwiaGl0VGlwc1wiLFxuICAgICAgICAgICAgICBudW06IHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICAgICAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLkxldmVsQm94LFxuICAgICAgICAgICAgICByZWFzb25JbmZvOiBcIuS4u+WFs+WNoeWuneeuseWlluWKsV/liLDovr7nrKxcIiArIGwgKyBcIuWFs1wiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh1KTtcbiAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoaCk7XG4gICAgICAgIH1cbiAgICAgICAgbyA9IDU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZiA9IHtcbiAgICAgICAgICBkZWxheVRpbWU6IG9cbiAgICAgICAgfTtcbiAgICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJXaW5Wd19idG5OZXh0RGVsYXlcIiwgdGhpcywgW2ZdKTtcbiAgICAgICAgbyA9IGYuZGVsYXlUaW1lO1xuICAgICAgICBudWxsID09PSAoZSA9IHRoaXMubmV4dENhbGxiYWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheShvKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIG51bGwgPT09ICh0ID0gaS5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQudmlld0RvQWN0aW9uKFwiZW5hYmxlQnRuTmV4dFwiKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMucmVwb3J0RGVidWdJbmZvKCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmNoZWNrTm9kZXMoKSkge1xuICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYm94QnRuLCB0aGlzLm9uQm94QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5oaWRlQm94QnRuLCB0aGlzLm9uSGlkZUJveEJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGUgfHwgZS52aWV3RG9BY3Rpb24oXCJtb3ZlU3ViVGl0bGVUb0J0bk5leHRCb3R0b21cIik7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0YVJlYWR5ICYmIHRoaXMucGxheUFjdGlvbigpO1xuICAgIH0gZWxzZSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgY2hlY2tOb2RlcygpIHtcbiAgICByZXR1cm4gISEoY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hUaXBJY29uKSAmJiBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaFRpcFZhbHVlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuaGludFRpcEljb24pICYmIGNjLmlzVmFsaWQodGhpcy5oaW50VGlwVmFsdWUpICYmIGNjLmlzVmFsaWQodGhpcy5sZXZlbFRpcCkgJiYgY2MuaXNWYWxpZCh0aGlzLmJhckxheW91dCkgJiYgY2MuaXNWYWxpZCh0aGlzLmJveEFuaW0pICYmIGNjLmlzVmFsaWQodGhpcy5ib3hCdG4pKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJveFJ3ZFVJX2luaXRDcHRzXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuaW5pdEJveEFuaW0oKTtcbiAgICB0aGlzLmhpZGVCb3hCdG4gPSBuZXcgY2MuTm9kZSgpO1xuICAgIHRoaXMuaGlkZUJveEJ0bi5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5oaWRlQm94QnRuKTtcbiAgICB0aGlzLmhpZGVCb3hCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgdmFyIHQgPSB0aGlzLmhpZGVCb3hCdG4uYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgdC5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICB0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xuICAgIHQuaXNBbGlnbkxlZnQgPSB0cnVlO1xuICAgIHQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICB0LnRvcCA9IDA7XG4gICAgdC5ib3R0b20gPSAwO1xuICAgIHQubGVmdCA9IDA7XG4gICAgdC5yaWdodCA9IDA7XG4gICAgQWRhcHRlci5hZGFwdEJnU2l6ZSh0aGlzLmhpZGVCb3hCdG4pO1xuICAgIEFkYXB0ZXIuaWdub3JlU2FmZVJlY3QodGhpcy5oaWRlQm94QnRuKTtcbiAgICB0aGlzLnNldFN0YXRlKEVCb3hSZXdhcmRTdGF0ZS5IaWRlKTtcbiAgfVxuICBzZXRTdGF0ZSh0KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlICE9PSB0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHQ7XG4gICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBFQm94UmV3YXJkU3RhdGUuSGlkZTpcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRUJveFJld2FyZFN0YXRlLkVudGVyZWQ6XG4gICAgICAgICAgdGhpcy5wbGF5RW50ZXJBbmltKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRUJveFJld2FyZFN0YXRlLkNhbkNsaWNrOlxuICAgICAgICAgIHRoaXMuc2V0Qm94Q2FuQ2xpY2tTdGF0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVCb3hSZXdhcmRTdGF0ZS5DbGlja2VkOlxuICAgICAgICAgIHRoaXMucGxheUJveENsaWNrQW5pbSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVCb3hSZXdhcmRTdGF0ZS5Db21wbGV0ZWQ6XG4gICAgICAgICAgdGhpcy5zZXRCb3hDYW5DbGlja1N0YXRlKCk7XG4gICAgICAgICAgdGhpcy5wbGF5Q29tcGxldGVkQW5pbSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVCb3hSZXdhcmRTdGF0ZS5Ob25lOlxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRSZXdhcmRMZXZlbCgpIHtcbiAgICByZXR1cm4gKE1hdGguZmxvb3IoKHRoaXMuY3VycmVudFBhc3NMZXZlbCAtIDEpIC8gdGhpcy5jb25maWcubGV2ZWwpICsgMSkgKiB0aGlzLmNvbmZpZy5sZXZlbDtcbiAgfVxuICBnZXRSZXdhcmROb2RlcygpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIGljb246IHRoaXMucmVmcmVzaFRpcEljb24sXG4gICAgICB2YWx1ZTogdGhpcy5yZWZyZXNoVGlwVmFsdWVcbiAgICB9LCB7XG4gICAgICBpY29uOiB0aGlzLmhpbnRUaXBJY29uLFxuICAgICAgdmFsdWU6IHRoaXMuaGludFRpcFZhbHVlXG4gICAgfV07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hSd2RVSV91cGRhdGVMYWJlbFwiKVxuICB1cGRhdGVMYWJlbCgpIHtcbiAgICB0aGlzLnVwZGF0ZVJld2FyZENvdW50KCk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmxldmVsVGlwLCBcIkx2LlwiICsgdGhpcy5nZXRSZXdhcmRMZXZlbCgpLCBcIk1haGpvbmdUaWxlc19NYWluUGFnZV9UYXJnZXRMZXZlbFwiLCBbdGhpcy5nZXRSZXdhcmRMZXZlbCgpXSk7XG4gICAgdGhpcy5sZXZlbFRpcC5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94UndkVUlfdXBkYXRlUndkQ291bnRcIilcbiAgdXBkYXRlUmV3YXJkQ291bnQoKSB7XG4gICAgdGhpcy5yZWZyZXNoVGlwVmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvbmZpZy5yZWZyZXNoLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5oaW50VGlwVmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvbmZpZy5oaW50LnRvU3RyaW5nKCk7XG4gIH1cbiAgY3JlYXRlQmFycygpIHtcbiAgICB0aGlzLmN1cnJlbnRCYXJJdGVtID0gbnVsbDtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLmxldmVsLFxuICAgICAgZSA9ICh0aGlzLmN1cnJlbnRQYXNzTGV2ZWwgLSAxKSAlIHQ7XG4gICAgdGhpcy5iYXJDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB0aGlzLmJhckxheW91dC5hY3RpdmUgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25maWcubGV2ZWw7IGkrKykge1xuICAgICAgdmFyIG8gPSB0aGlzLmNyZWF0ZVVJU3luYyhCb3hCYXJJdGVtKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoQm94QmFySXRlbSk7XG4gICAgICAgIG4uc2V0UGF0aEluZGV4KDAgPT09IGkgPyBFQm94QmFyUG9zLkZpcnN0IDogaSA9PT0gdGhpcy5jb25maWcubGV2ZWwgLSAxID8gRUJveEJhclBvcy5MYXN0IDogRUJveEJhclBvcy5NaWRkbGUpO1xuICAgICAgICB0aGlzLmJhckNvbnRhaW5lci5hZGRDaGlsZChvKTtcbiAgICAgICAgdmFyIGEgPSBpIDwgZSA/IEVCb3hCYXJJdGVtU3RhdGUuQ29tcGxldGVkIDogRUJveEJhckl0ZW1TdGF0ZS5Ob3JtYWw7XG4gICAgICAgIG4uc2V0U3RhdGUoYSk7XG4gICAgICAgIGkgPT09IGUgJiYgKHRoaXMuY3VycmVudEJhckl0ZW0gPSBuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iYXJDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5iYXJMYXlvdXQuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hSd2RVSV9pbml0Qm94QW5pbVwiKVxuICBpbml0Qm94QW5pbSgpIHtcbiAgICB0aGlzLmFuaW1Qcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5ib3hBbmltKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19pY29uXzFcIiwgdGhpcy5yZWZyZXNoVGlwSWNvbiwgMSk7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19udW1fMVwiLCB0aGlzLnJlZnJlc2hUaXBWYWx1ZSwgMSk7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19pY29uXzJcIiwgdGhpcy5oaW50VGlwSWNvbiwgMSk7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19udW1fMlwiLCB0aGlzLmhpbnRUaXBWYWx1ZSwgMSk7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19udW1cIiwgdGhpcy5sZXZlbFRpcCwgMSk7XG4gIH1cbiAgYXR0YWNoTm9kZSh0LCBlLCBpID0gMSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVByb3h5KSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9KTtcbiAgICAgIGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94UndkVUlfcmVzZXRcIilcbiAgcmVzZXQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoVGlwSWNvbikgJiYgY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hUaXBWYWx1ZSkgJiYgY2MuaXNWYWxpZCh0aGlzLmhpbnRUaXBJY29uKSAmJiBjYy5pc1ZhbGlkKHRoaXMuaGludFRpcFZhbHVlKSAmJiBjYy5pc1ZhbGlkKHRoaXMubGV2ZWxUaXApICYmIGNjLmlzVmFsaWQodGhpcy5iYXJMYXlvdXQpICYmIGNjLmlzVmFsaWQodGhpcy5ib3hCdG4pKSB7XG4gICAgICB0aGlzLnJlZnJlc2hUaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWZyZXNoVGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmhpbnRUaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5oaW50VGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJhckxheW91dC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmJveEJ0bik7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5iYXJMYXlvdXQpO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubGV2ZWxUaXApO1xuICAgICAgdGhpcy5ib3hCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnN0b3BBdEZpcnN0RnJhbWVPZihcImluXCIpO1xuICAgICAgdGhpcy5ib3hCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZUJveEJ0bkNhbkNsaWNrKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQm94QnRuQ2FuQ2xpY2sodCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5ib3hCdG4pICYmICh0aGlzLmJveEJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0KTtcbiAgfVxuICBzZXRCb3hDYW5DbGlja1N0YXRlKCkge1xuICAgIHRoaXMuaGlkZUJveEJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRUaXBWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRUaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFRpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFRpcEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VCb3hCdG5DYW5DbGljayh0cnVlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJveFJ3ZFVJX3BsYXlFbnRlckFuaVwiKVxuICBwbGF5RW50ZXJBbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmN1cnJlbnRCYXJJdGVtKSAmJiBjYy5pc1ZhbGlkKHRoaXMubGV2ZWxUaXApKSB7XG4gICAgICB0aGlzLnBsYXlCYXJCb3hFbnRlcigpO1xuICAgICAgdmFyIGUgPSB7XG4gICAgICAgIGRlbGF5VGltZTogMFxuICAgICAgfTtcbiAgICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiTGV2ZWxCb3hfcGJEZWxheVwiLCB0aGlzLCBbZV0pO1xuICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50QmFySXRlbS5ub2RlKS5kZWxheSgxLjkgKyBlLmRlbGF5VGltZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuY3VycmVudEJhckl0ZW0pKSB7XG4gICAgICAgICAgdC5jdXJyZW50QmFySXRlbS5zZXRTdGF0ZShFQm94QmFySXRlbVN0YXRlLkhpZ2hMaWdodCk7XG4gICAgICAgICAgY2MuaXNWYWxpZCh0LmJveEFuaW0pICYmIHQuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuZW50ZXJDb21wbGV0ZWRBbmltKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmxldmVsVGlwKS5kZWxheSgyLjIgKyBlLmRlbGF5VGltZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5sZXZlbFRpcCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJveFJ3ZFVJX2JhckJveEVudGVyXCIpXG4gIHBsYXlCYXJCb3hFbnRlcigpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJhckxheW91dCkgJiYgY2MuaXNWYWxpZCh0aGlzLmJveEJ0bikpIHtcbiAgICAgIHRoaXMuYmFyTGF5b3V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmJhckxheW91dC5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuYmFyTGF5b3V0LnNjYWxlID0gMC43O1xuICAgICAgdGhpcy5ib3hCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYm94QnRuLnNjYWxlID0gMC43O1xuICAgICAgdGhpcy5ib3hCdG4ub3BhY2l0eSA9IDA7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5iYXJMYXlvdXQpO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYm94QnRuKTtcbiAgICAgIHZhciB0ID0gY2MudHdlZW4oKS5kZWxheSgxLjEzKS50bygwLjIsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1LFxuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjE0LCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJblxuICAgICAgfSk7XG4gICAgICB0LmNsb25lKHRoaXMuYmFyTGF5b3V0KS5zdGFydCgpO1xuICAgICAgdC5jbG9uZSh0aGlzLmJveEJ0bikuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgY2FuR2FpbkJveFJld2FyZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLnJld2FyZExldmVscyxcbiAgICAgIGUgPSAodGhpcy5jdXJyZW50UGFzc0xldmVsIC0gMSkgJSB0aGlzLmNvbmZpZy5sZXZlbDtcbiAgICByZXR1cm4gdC5pbmNsdWRlcyhlICsgMSk7XG4gIH1cbiAgZW50ZXJDb21wbGV0ZWRBbmltKCkge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLmNhbkdhaW5Cb3hSZXdhcmQoKSkgdGhpcy5zZXRTdGF0ZShFQm94UmV3YXJkU3RhdGUuQ29tcGxldGVkKTtlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRUJveFJld2FyZFN0YXRlLkNhbkNsaWNrKTtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQudmlld0RvQWN0aW9uKFwiZW5hYmxlQnRuTmV4dFwiKTtcbiAgICB9XG4gIH1cbiAgb25Cb3hCdG5DbGljaygpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuYm94QnRuKSAmJiB0aGlzLnNldFN0YXRlKEVCb3hSZXdhcmRTdGF0ZS5DbGlja2VkKTtcbiAgfVxuICBvbkhpZGVCb3hCdG5DbGljaygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJveEFuaW0pKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5zdG9wQXRGaXJzdEZyYW1lT2YoXCJjbGlja1wiKTtcbiAgICAgIHRoaXMuaGlkZUJveEJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGludFRpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5oaW50VGlwSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmcmVzaFRpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWZyZXNoVGlwSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRUJveFJld2FyZFN0YXRlLkNhbkNsaWNrKTtcbiAgICB9XG4gIH1cbiAgcGxheUJveENsaWNrQW5pbSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm94QW5pbSkpIHtcbiAgICAgIHRoaXMuY2hhbmdlQm94QnRuQ2FuQ2xpY2soZmFsc2UpO1xuICAgICAgdGhpcy5ib3hBbmltLmFjdGl2ZSA9IHRydWU7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMuYW5pbVByb3h5LmdldFNrZWxldG9uKCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgaWYgKFwiZXZlbnRfcmV3YXJkc1wiID09PSBpLmRhdGEubmFtZSkge1xuICAgICAgICAgIGlmICghKGNjLmlzVmFsaWQoZS5oaW50VGlwVmFsdWUpICYmIGNjLmlzVmFsaWQoZS5oaW50VGlwSWNvbikgJiYgY2MuaXNWYWxpZChlLnJlZnJlc2hUaXBWYWx1ZSkgJiYgY2MuaXNWYWxpZChlLnJlZnJlc2hUaXBJY29uKSkpIHJldHVybjtcbiAgICAgICAgICBlLmhpbnRUaXBWYWx1ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGUuaGludFRpcEljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBlLnJlZnJlc2hUaXBWYWx1ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGUucmVmcmVzaFRpcEljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBlLmhpZGVCb3hCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5zZXRBbmltYXRpb24oXCJjbGlja1wiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHBsYXlDb21wbGV0ZWRBbmltKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlLnBhcmVudCkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50LnBhcmVudCkpIHtcbiAgICAgIHZhciBpID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJOb3JtYWxCb3hUcmFpdFwiKTtcbiAgICAgIGkgJiYgaS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCB8fCBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnZpZXdEb0FjdGlvbihcImhpZGVDb250ZW50XCIpO1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIk5vcm1hbEJveENvbnRyb2xsZXJcIiwge1xuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgICByZXdhcmRMZXZlbDogdGhpcy5nZXRSZXdhcmRMZXZlbCgpXG4gICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgaSwgbztcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgICB2YXIgbiA9IHQub25VSURlc3Ryb3kuYmluZCh0KTtcbiAgICAgICAgICB0Lm9uVUlEZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBuKHQpO1xuICAgICAgICAgICAgbnVsbCA9PT0gKGkgPSBlLm5leHRDYWxsYmFjaykgfHwgdm9pZCAwID09PSBpIHx8IGkuY2FsbChlLCB0cnVlKTtcbiAgICAgICAgICAgIGUubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGwgPT09IChpID0gZS5uZXh0Q2FsbGJhY2spIHx8IHZvaWQgMCA9PT0gaSB8fCBpLmNhbGwoZSwgdHJ1ZSk7XG4gICAgICAgICAgZS5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG51bGwgPT09IChvID0gZS5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBvIHx8IG8udmlld0RvQWN0aW9uKFwiZW5hYmxlQnRuTmV4dFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==