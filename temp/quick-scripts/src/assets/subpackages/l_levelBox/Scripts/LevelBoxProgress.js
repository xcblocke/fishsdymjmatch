"use strict";
cc._RF.push(module, '7d8cbq024BEXpIx2RMHO05d', 'LevelBoxProgress');
// subpackages/l_levelBox/Scripts/LevelBoxProgress.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var LevelBoxBarItem_1 = require("./LevelBoxBarItem");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DDebugInfo_1 = require("../../../Scripts/gamePlay/dot/DDebugInfo");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var LevelBoxProgress = /** @class */ (function (_super) {
    __extends(LevelBoxProgress, _super);
    function LevelBoxProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.barLayout = null;
        _this.barContainer = null;
        _this.boxBtn = null;
        _this.boxTipAnim = null;
        _this.conditionTip = null;
        _this.chestIcon = null;
        _this.currentBarItem = null;
        _this.hideBoxBtn = null;
        _this.showReward = false;
        _this.nextCallback = null;
        _this.levelBox = null;
        _this.showRewardsNodes = [];
        _this.boxTipProxy = null;
        _this.isLoaded = false;
        _this.dataReady = false;
        return _this;
    }
    LevelBoxProgress.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.OnButtonClick(this.boxBtn, this.onBoxBtnClick.bind(this));
        this.OnButtonClick(this.hideBoxBtn, this.onHideBoxBtnClick.bind(this));
        this.isLoaded = true;
        this.dataReady && this.playAction();
    };
    LevelBoxProgress.prototype.initComponents = function () {
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
        this.boxTipProxy = BaseSpine_1.default.refreshWithNode(this.boxTipAnim);
        this.boxTipProxy.markReady("");
    };
    LevelBoxProgress.prototype.getRewardNodes = function (t) {
        switch (t) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this.hintTipIcon,
                    value: this.hintTipValue
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this.refreshTipIcon,
                    value: this.refreshTipValue
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    LevelBoxProgress.prototype.showBoxRewardUI = function (t, e) {
        this.levelBox = t;
        this.nextCallback = e;
        this.dataReady = true;
        this.playAction();
    };
    LevelBoxProgress.prototype.reportDebugInfo = function () {
        var t = this.dumpTopScene();
        if (this.node.activeInHierarchy)
            DDebugInfo_1.DDebugInfo.dot("5454进度条UI已激活但未执行onload, 当前场景控制器: " + t);
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
                DDebugInfo_1.DDebugInfo.dot("5454进度条UI未激活节点或父节点未激活: " + i.join("->") + ", 当前场景控制器: " + t);
            }
            else {
                DDebugInfo_1.DDebugInfo.dot("5454进度条UI没有找到未激活的节点, 当前场景控制器: " + t);
            }
        }
    };
    LevelBoxProgress.prototype.dumpTopScene = function () {
        var t = [], e = ControllerManager.getInstance().getTopSceneController();
        if (e && e.subControllers && e.subControllers.length > 0)
            for (var i = e.subControllers.length - 1; i >= 0; i--) {
                var o = e.subControllers[i];
                o && o.constructor && t.push("" + mj.getClassName(o.constructor));
            }
        return t.join("->");
    };
    LevelBoxProgress.prototype.playAction = function () {
        var t, e;
        if (!this.showReward)
            if (this.isLoaded) {
                this.node.opacity = 255;
                null === (t = this.delegate) || void 0 === t || t.viewDoAction("moveSubTitleToBtnNextBottom");
                this.showReward = true;
                this.hideRewardsNodes();
                this.updateProgressBars(this.levelBox);
                this.updateProgressLabel(this.levelBox);
                this.updateBoxReward(this.levelBox);
                this.disableBtnNext();
                this.playProgressAnim();
                if (!this.levelBox.progress.isGain) {
                    null === (e = this.nextCallback) || void 0 === e || e.call(this);
                    this.nextCallback = null;
                }
            }
            else
                this.reportDebugInfo();
    };
    LevelBoxProgress.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
    };
    LevelBoxProgress.prototype.updateBoxReward = function (t) {
        var e = this, i = t.rewards, o = function o(t, i, o) {
            if (t && i) {
                e.boxTipProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                e.boxTipProxy.attachNode("hook_num_" + o, function () {
                    return i;
                });
            }
        };
        this.boxTipAnim.active = true;
        this.showRewardsNodes = [];
        for (var n = 0; n < i.items.length; n++) {
            var r = i.items[n], a = this.getRewardNodes(r.item), s = a.icon, l = a.value;
            if (s && l) {
                l.getComponent(cc.Label).string = r.count.toString();
                this.showRewardsNodes.push(s, l);
                o(s, l, n + 1);
            }
        }
        this.boxTipAnim.active = false;
        var c = this.barContainer.children.length;
        if (c > 0) {
            var p = this.barContainer.children[c - 1], d = p.convertToWorldSpaceAR(cc.v2(0, 0)), h = this.boxBtn.parent.convertToNodeSpaceAR(d), u = p.width + this.boxBtn.width / 2 - 50;
            this.boxBtn.setPosition(h.x + u, h.y);
        }
    };
    LevelBoxProgress.prototype.getItemWidth = function (t) {
        return t >= 10 ? 76 : t > 4 ? 133 : 154;
    };
    LevelBoxProgress.prototype.updateProgressBars = function (t) {
        var e = t.progress;
        this.currentBarItem = null;
        var i = e.current, o = e.total, n = e.change;
        this.barContainer.destroyAllChildren();
        this.barLayout.active = true;
        for (var r = this.getItemWidth(o), a = 0; a < o; a++) {
            var s = this.createUISync(LevelBoxBarItem_1.default);
            if (cc.isValid(s)) {
                var l = s.getComponent(LevelBoxBarItem_1.default);
                l.setPathIndex(0 === a ? LevelBoxBarItem_1.ELevelBoxBarPos.First : a === o - 1 ? LevelBoxBarItem_1.ELevelBoxBarPos.Last : LevelBoxBarItem_1.ELevelBoxBarPos.Middle);
                l.setItemSize(r);
                this.barContainer.addChild(s);
                var c = a < i - 1 ? LevelBoxBarItem_1.ELevelBoxBarState.Completed : LevelBoxBarItem_1.ELevelBoxBarState.Normal;
                a !== i - 1 || n || (c = LevelBoxBarItem_1.ELevelBoxBarState.Completed);
                l.setState(c);
                a === i - 1 && (this.currentBarItem = l);
            }
        }
        this.barContainer.getComponent(cc.Layout).updateLayout();
        this.barLayout.active = false;
    };
    LevelBoxProgress.prototype.updateProgressLabel = function (t) {
        var e = LevelBoxTypes_1.LevelBoxConditionKey[t.progress.condType], i = t.progress.condValue, o = I18NStrings_1.default.stringFormat.apply(I18NStrings_1.default, __spreadArrays([I18NStrings_1.default.get(e)], i));
        I18NStrings_1.default.setText(this.conditionTip, o, e, i);
    };
    LevelBoxProgress.prototype.disableBtnNext = function () {
        var t, e = this, i = 1;
        if (this.levelBox.progress.isGain)
            i = 5;
        else {
            var o = {
                delayTime: i
            };
            mj.triggerInternalEvent("WinVw_btnNextDelay", this, [o]);
            i = o.delayTime;
        }
        null === (t = this.delegate) || void 0 === t || t.viewDoAction("disableBtnNext");
        cc.tween(this.node).delay(i).call(function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
        }).start();
    };
    LevelBoxProgress.prototype.playProgressAnim = function () {
        this.playBarBoxEnterAnim();
        if (this.levelBox.progress.change) {
            this.playHighLightAnim();
        }
        else {
            this.animCompleted();
        }
    };
    LevelBoxProgress.prototype.playBarBoxEnterAnim = function () {
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
    LevelBoxProgress.prototype.playHighLightAnim = function () {
        var t = this;
        if (cc.isValid(this.currentBarItem)) {
            var e = {
                delayTime: 0
            };
            mj.triggerInternalEvent("LevelBox_pbDelay", this, [e]);
            var i = this.getCompleteDelay();
            cc.tween(this.currentBarItem.node).delay(1.9 + e.delayTime).call(function () {
                t.playCurBarHighLightAnim();
            }).delay(i).call(function () {
                t.animCompleted();
            }).start();
        }
    };
    LevelBoxProgress.prototype.getCompleteDelay = function () {
        return 0.3;
    };
    LevelBoxProgress.prototype.playCurBarHighLightAnim = function () {
        cc.isValid(this.currentBarItem) && this.currentBarItem.setState(LevelBoxBarItem_1.ELevelBoxBarState.HighLight);
    };
    LevelBoxProgress.prototype.animCompleted = function () {
        var t, e = this;
        if (this.levelBox.progress.isGain) {
            null === (t = this.nextCallback) || void 0 === t || t.call(this);
            this.nextCallback = null;
            this.scheduleOnce(function () {
                e.showNextBox();
            }, 1);
        }
    };
    LevelBoxProgress.prototype.onHideBoxBtnClick = function () {
        var t, e;
        cc.isValid(this.boxTipAnim) && (this.boxTipAnim.active = false);
        cc.isValid(this.hideBoxBtn) && (this.hideBoxBtn.active = false);
        if (this.showRewardsNodes.length > 0)
            try {
                for (var i = __values(this.showRewardsNodes), o = i.next(); !o.done; o = i.next()) {
                    var n = o.value;
                    cc.isValid(n) && (n.active = false);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    o && !o.done && (e = i.return) && e.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
    };
    LevelBoxProgress.prototype.showNextBox = function () {
        if (this.levelBox.nextBox) {
            this.hideRewardsNodes();
            this.updateProgressBars(this.levelBox.nextBox);
            this.barLayout.active = true;
            this.updateBoxReward(this.levelBox.nextBox);
            this.updateProgressLabel(this.levelBox.nextBox);
        }
    };
    LevelBoxProgress.prototype.onBoxBtnClick = function () {
        var t, e, i = Math.floor(this.showRewardsNodes.length / 2), o = this.boxTipAnim.getComponent(sp.Skeleton);
        this.boxTipAnim.active = true;
        if (i > 0 && i < 3) {
            try {
                for (var n = __values(this.showRewardsNodes), r = n.next(); !r.done; r = n.next()) {
                    var a = r.value;
                    cc.isValid(a) && (a.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    r && !r.done && (e = n.return) && e.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            GameUtils_1.default.playSpine(o, "click_" + i, false, function () {
                GameUtils_1.default.playSpine(o, "init_" + i, true);
            });
            this.hideBoxBtn.active = true;
        }
    };
    LevelBoxProgress.prefabUrl = "prefabs/levelBox/BoxProgress";
    __decorate([
        mj.node("HintTipValue")
    ], LevelBoxProgress.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], LevelBoxProgress.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], LevelBoxProgress.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], LevelBoxProgress.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("BarLayout")
    ], LevelBoxProgress.prototype, "barLayout", void 0);
    __decorate([
        mj.node("BarLayout/BarContainer")
    ], LevelBoxProgress.prototype, "barContainer", void 0);
    __decorate([
        mj.node("BoxBtn")
    ], LevelBoxProgress.prototype, "boxBtn", void 0);
    __decorate([
        mj.node("BoxBtn/BoxTipAnim")
    ], LevelBoxProgress.prototype, "boxTipAnim", void 0);
    __decorate([
        mj.node("BarLayout/Condition")
    ], LevelBoxProgress.prototype, "conditionTip", void 0);
    __decorate([
        mj.node("BoxBtn/Chest")
    ], LevelBoxProgress.prototype, "chestIcon", void 0);
    __decorate([
        mj.traitEvent("LvBoxPrgs_initCpts")
    ], LevelBoxProgress.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("LvBoxPrgs_upBoxReward")
    ], LevelBoxProgress.prototype, "updateBoxReward", null);
    __decorate([
        mj.traitEvent("LvBoxPrgs_upProgBars")
    ], LevelBoxProgress.prototype, "updateProgressBars", null);
    __decorate([
        mj.traitEvent("LvBoxPrgs_upProgLabel")
    ], LevelBoxProgress.prototype, "updateProgressLabel", null);
    __decorate([
        mj.traitEvent("LvBoxProg_barBoxEnter")
    ], LevelBoxProgress.prototype, "playBarBoxEnterAnim", null);
    __decorate([
        mj.traitEvent("LvBoxPrgs_getCompDelay")
    ], LevelBoxProgress.prototype, "getCompleteDelay", null);
    __decorate([
        mj.traitEvent("LvBoxPrgs_playCurBarHigh")
    ], LevelBoxProgress.prototype, "playCurBarHighLightAnim", null);
    __decorate([
        mj.traitEvent("LvBoxProg_showNextBox")
    ], LevelBoxProgress.prototype, "showNextBox", null);
    LevelBoxProgress = __decorate([
        mj.class
    ], LevelBoxProgress);
    return LevelBoxProgress;
}(BaseUI_1.default));
exports.default = LevelBoxProgress;

cc._RF.pop();