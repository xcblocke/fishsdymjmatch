
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxProgress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hQcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDZEQUE0RDtBQUM1RCxpREFBdUQ7QUFDdkQseUVBQW9FO0FBQ3BFLHFEQUF3RjtBQUN4Riw0RUFBdUU7QUFDdkUsMkVBQXNFO0FBQ3RFLHVFQUFzRTtBQUN0RSw4REFBeUQ7QUFFekQ7SUFBOEMsb0NBQU07SUFBcEQ7UUFBQSxxRUE4VkM7UUE1VkMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBcUIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQTZCLElBQUksQ0FBQztRQUU5QyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQXdCLElBQUksQ0FBQztRQUV2QyxrQkFBWSxHQUEwQixJQUFJLENBQUM7UUFFM0MsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFDakMsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQWlVcEIsQ0FBQztJQS9UQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7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QUFVLENBQUMsdUJBQXVCLENBQUM7dURBU3RDO0lBaFVrQixnQkFBZ0I7UUFEcEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxnQkFBZ0IsQ0E4VnBDO0lBQUQsdUJBQUM7Q0E5VkQsQUE4VkMsQ0E5VjZDLGdCQUFNLEdBOFZuRDtrQkE5Vm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IEVJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdXNlci9JVXNlckRhdGEnO1xuaW1wb3J0IHsgTGV2ZWxCb3hDb25kaXRpb25LZXkgfSBmcm9tICcuL0xldmVsQm94VHlwZXMnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBMZXZlbEJveEJhckl0ZW0sIHsgRUxldmVsQm94QmFyUG9zLCBFTGV2ZWxCb3hCYXJTdGF0ZSB9IGZyb20gJy4vTGV2ZWxCb3hCYXJJdGVtJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgeyBERGVidWdJbmZvIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvRERlYnVnSW5mbyc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9BZGFwdGVyJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCb3hQcm9ncmVzcyBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiSGludFRpcFZhbHVlXCIpXG4gIGhpbnRUaXBWYWx1ZTogXCJIaW50VGlwVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFRpcFZhbHVlXCIpXG4gIHJlZnJlc2hUaXBWYWx1ZTogXCJSZWZyZXNoVGlwVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludFRpcEljb25cIilcbiAgaGludFRpcEljb246IFwiSGludFRpcEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFRpcEljb25cIilcbiAgcmVmcmVzaFRpcEljb246IFwiUmVmcmVzaFRpcEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQmFyTGF5b3V0XCIpXG4gIGJhckxheW91dDogXCJCYXJMYXlvdXRcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQmFyTGF5b3V0L0JhckNvbnRhaW5lclwiKVxuICBiYXJDb250YWluZXI6IFwiQmFyTGF5b3V0L0JhckNvbnRhaW5lclwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCb3hCdG5cIilcbiAgYm94QnRuOiBcIkJveEJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCb3hCdG4vQm94VGlwQW5pbVwiKVxuICBib3hUaXBBbmltOiBcIkJveEJ0bi9Cb3hUaXBBbmltXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJhckxheW91dC9Db25kaXRpb25cIilcbiAgY29uZGl0aW9uVGlwOiBcIkJhckxheW91dC9Db25kaXRpb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQm94QnRuL0NoZXN0XCIpXG4gIGNoZXN0SWNvbjogXCJCb3hCdG4vQ2hlc3RcIiA9IG51bGw7XG4gIGN1cnJlbnRCYXJJdGVtID0gbnVsbDtcbiAgaGlkZUJveEJ0biA9IG51bGw7XG4gIHNob3dSZXdhcmQgPSBmYWxzZTtcbiAgbmV4dENhbGxiYWNrID0gbnVsbDtcbiAgbGV2ZWxCb3ggPSBudWxsO1xuICBzaG93UmV3YXJkc05vZGVzID0gW107XG4gIGJveFRpcFByb3h5ID0gbnVsbDtcbiAgaXNMb2FkZWQgPSBmYWxzZTtcbiAgZGF0YVJlYWR5ID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvbGV2ZWxCb3gvQm94UHJvZ3Jlc3NcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ib3hCdG4sIHRoaXMub25Cb3hCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5oaWRlQm94QnRuLCB0aGlzLm9uSGlkZUJveEJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgIHRoaXMuZGF0YVJlYWR5ICYmIHRoaXMucGxheUFjdGlvbigpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hQcmdzX2luaXRDcHRzXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuaGlkZUJveEJ0biA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdGhpcy5oaWRlQm94QnRuLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmhpZGVCb3hCdG4pO1xuICAgIHRoaXMuaGlkZUJveEJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgdCA9IHRoaXMuaGlkZUJveEJ0bi5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICB0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgIHQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgdC5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgdC5pc0FsaWduUmlnaHQgPSB0cnVlO1xuICAgIHQudG9wID0gMDtcbiAgICB0LmJvdHRvbSA9IDA7XG4gICAgdC5sZWZ0ID0gMDtcbiAgICB0LnJpZ2h0ID0gMDtcbiAgICBBZGFwdGVyLmFkYXB0QmdTaXplKHRoaXMuaGlkZUJveEJ0bik7XG4gICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdCh0aGlzLmhpZGVCb3hCdG4pO1xuICAgIHRoaXMuYm94VGlwUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYm94VGlwQW5pbSk7XG4gICAgdGhpcy5ib3hUaXBQcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gIH1cbiAgZ2V0UmV3YXJkTm9kZXModCkge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBFSXRlbVR5cGUuSGludDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmhpbnRUaXBJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmhpbnRUaXBWYWx1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLnJlZnJlc2hUaXBJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnJlZnJlc2hUaXBWYWx1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgfVxuICBzaG93Qm94UmV3YXJkVUkodCwgZSkge1xuICAgIHRoaXMubGV2ZWxCb3ggPSB0O1xuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZTtcbiAgICB0aGlzLmRhdGFSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5wbGF5QWN0aW9uKCk7XG4gIH1cbiAgcmVwb3J0RGVidWdJbmZvKCkge1xuICAgIHZhciB0ID0gdGhpcy5kdW1wVG9wU2NlbmUoKTtcbiAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSBERGVidWdJbmZvLmRvdChcIjU0NTTov5vluqbmnaFVSeW3sua/gOa0u+S9huacquaJp+ihjG9ubG9hZCwg5b2T5YmN5Zy65pmv5o6n5Yi25ZmoOiBcIiArIHQpO2Vsc2Uge1xuICAgICAgdmFyIGUgPSBmdW5jdGlvbiBlKHQsIGkgPSBbXSkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgICBpLnB1c2godC5uYW1lKTtcbiAgICAgICAgICAgIGlmICh0LmFjdGl2ZSkgcmV0dXJuIGUodC5wYXJlbnQsIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaSA9IFtdO1xuICAgICAgZSh0aGlzLm5vZGUsIGkpO1xuICAgICAgaWYgKGkubGVuZ3RoID4gMCkge1xuICAgICAgICBERGVidWdJbmZvLmRvdChcIjU0NTTov5vluqbmnaFVSeacqua/gOa0u+iKgueCueaIlueItuiKgueCueacqua/gOa0uzogXCIgKyBpLmpvaW4oXCItPlwiKSArIFwiLCDlvZPliY3lnLrmma/mjqfliLblmag6IFwiICsgdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBERGVidWdJbmZvLmRvdChcIjU0NTTov5vluqbmnaFVSeayoeacieaJvuWIsOacqua/gOa0u+eahOiKgueCuSwg5b2T5YmN5Zy65pmv5o6n5Yi25ZmoOiBcIiArIHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkdW1wVG9wU2NlbmUoKSB7XG4gICAgdmFyIHQgPSBbXSxcbiAgICAgIGUgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgIGlmIChlICYmIGUuc3ViQ29udHJvbGxlcnMgJiYgZS5zdWJDb250cm9sbGVycy5sZW5ndGggPiAwKSBmb3IgKHZhciBpID0gZS5zdWJDb250cm9sbGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIG8gPSBlLnN1YkNvbnRyb2xsZXJzW2ldO1xuICAgICAgbyAmJiBvLmNvbnN0cnVjdG9yICYmIHQucHVzaChcIlwiICsgbWouZ2V0Q2xhc3NOYW1lKG8uY29uc3RydWN0b3IpKTtcbiAgICB9XG4gICAgcmV0dXJuIHQuam9pbihcIi0+XCIpO1xuICB9XG4gIHBsYXlBY3Rpb24oKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgaWYgKCF0aGlzLnNob3dSZXdhcmQpIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQudmlld0RvQWN0aW9uKFwibW92ZVN1YlRpdGxlVG9CdG5OZXh0Qm90dG9tXCIpO1xuICAgICAgdGhpcy5zaG93UmV3YXJkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZVJld2FyZHNOb2RlcygpO1xuICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcnModGhpcy5sZXZlbEJveCk7XG4gICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzTGFiZWwodGhpcy5sZXZlbEJveCk7XG4gICAgICB0aGlzLnVwZGF0ZUJveFJld2FyZCh0aGlzLmxldmVsQm94KTtcbiAgICAgIHRoaXMuZGlzYWJsZUJ0bk5leHQoKTtcbiAgICAgIHRoaXMucGxheVByb2dyZXNzQW5pbSgpO1xuICAgICAgaWYgKCF0aGlzLmxldmVsQm94LnByb2dyZXNzLmlzR2Fpbikge1xuICAgICAgICBudWxsID09PSAoZSA9IHRoaXMubmV4dENhbGxiYWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHRoaXMucmVwb3J0RGVidWdJbmZvKCk7XG4gIH1cbiAgaGlkZVJld2FyZHNOb2RlcygpIHtcbiAgICB0aGlzLnJlZnJlc2hUaXBJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFRpcFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGludFRpcEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oaW50VGlwVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMdkJveFByZ3NfdXBCb3hSZXdhcmRcIilcbiAgdXBkYXRlQm94UmV3YXJkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBpID0gdC5yZXdhcmRzLFxuICAgICAgbyA9IGZ1bmN0aW9uIG8odCwgaSwgbykge1xuICAgICAgICBpZiAodCAmJiBpKSB7XG4gICAgICAgICAgZS5ib3hUaXBQcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uX1wiICsgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS5ib3hUaXBQcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fXCIgKyBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB0aGlzLmJveFRpcEFuaW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGkuaXRlbXMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciByID0gaS5pdGVtc1tuXSxcbiAgICAgICAgYSA9IHRoaXMuZ2V0UmV3YXJkTm9kZXMoci5pdGVtKSxcbiAgICAgICAgcyA9IGEuaWNvbixcbiAgICAgICAgbCA9IGEudmFsdWU7XG4gICAgICBpZiAocyAmJiBsKSB7XG4gICAgICAgIGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByLmNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5wdXNoKHMsIGwpO1xuICAgICAgICBvKHMsIGwsIG4gKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ib3hUaXBBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBjID0gdGhpcy5iYXJDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmIChjID4gMCkge1xuICAgICAgdmFyIHAgPSB0aGlzLmJhckNvbnRhaW5lci5jaGlsZHJlbltjIC0gMV0sXG4gICAgICAgIGQgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXG4gICAgICAgIGggPSB0aGlzLmJveEJ0bi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZCksXG4gICAgICAgIHUgPSBwLndpZHRoICsgdGhpcy5ib3hCdG4ud2lkdGggLyAyIC0gNTA7XG4gICAgICB0aGlzLmJveEJ0bi5zZXRQb3NpdGlvbihoLnggKyB1LCBoLnkpO1xuICAgIH1cbiAgfVxuICBnZXRJdGVtV2lkdGgodCkge1xuICAgIHJldHVybiB0ID49IDEwID8gNzYgOiB0ID4gNCA/IDEzMyA6IDE1NDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94UHJnc191cFByb2dCYXJzXCIpXG4gIHVwZGF0ZVByb2dyZXNzQmFycyh0KSB7XG4gICAgdmFyIGUgPSB0LnByb2dyZXNzO1xuICAgIHRoaXMuY3VycmVudEJhckl0ZW0gPSBudWxsO1xuICAgIHZhciBpID0gZS5jdXJyZW50LFxuICAgICAgbyA9IGUudG90YWwsXG4gICAgICBuID0gZS5jaGFuZ2U7XG4gICAgdGhpcy5iYXJDb250YWluZXIuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgdGhpcy5iYXJMYXlvdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciByID0gdGhpcy5nZXRJdGVtV2lkdGgobyksIGEgPSAwOyBhIDwgbzsgYSsrKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuY3JlYXRlVUlTeW5jKExldmVsQm94QmFySXRlbSk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChzKSkge1xuICAgICAgICB2YXIgbCA9IHMuZ2V0Q29tcG9uZW50KExldmVsQm94QmFySXRlbSk7XG4gICAgICAgIGwuc2V0UGF0aEluZGV4KDAgPT09IGEgPyBFTGV2ZWxCb3hCYXJQb3MuRmlyc3QgOiBhID09PSBvIC0gMSA/IEVMZXZlbEJveEJhclBvcy5MYXN0IDogRUxldmVsQm94QmFyUG9zLk1pZGRsZSk7XG4gICAgICAgIGwuc2V0SXRlbVNpemUocik7XG4gICAgICAgIHRoaXMuYmFyQ29udGFpbmVyLmFkZENoaWxkKHMpO1xuICAgICAgICB2YXIgYyA9IGEgPCBpIC0gMSA/IEVMZXZlbEJveEJhclN0YXRlLkNvbXBsZXRlZCA6IEVMZXZlbEJveEJhclN0YXRlLk5vcm1hbDtcbiAgICAgICAgYSAhPT0gaSAtIDEgfHwgbiB8fCAoYyA9IEVMZXZlbEJveEJhclN0YXRlLkNvbXBsZXRlZCk7XG4gICAgICAgIGwuc2V0U3RhdGUoYyk7XG4gICAgICAgIGEgPT09IGkgLSAxICYmICh0aGlzLmN1cnJlbnRCYXJJdGVtID0gbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmFyQ29udGFpbmVyLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xuICAgIHRoaXMuYmFyTGF5b3V0LmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hQcmdzX3VwUHJvZ0xhYmVsXCIpXG4gIHVwZGF0ZVByb2dyZXNzTGFiZWwodCkge1xuICAgIHZhciBlID0gTGV2ZWxCb3hDb25kaXRpb25LZXlbdC5wcm9ncmVzcy5jb25kVHlwZV0sXG4gICAgICBpID0gdC5wcm9ncmVzcy5jb25kVmFsdWUsXG4gICAgICBvID0gSTE4TlN0cmluZ3Muc3RyaW5nRm9ybWF0LmFwcGx5KEkxOE5TdHJpbmdzLCBbLi4uW0kxOE5TdHJpbmdzLmdldChlKV0sIC4uLmldKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuY29uZGl0aW9uVGlwLCBvLCBlLCBpKTtcbiAgfVxuICBkaXNhYmxlQnRuTmV4dCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzLFxuICAgICAgaSA9IDE7XG4gICAgaWYgKHRoaXMubGV2ZWxCb3gucHJvZ3Jlc3MuaXNHYWluKSBpID0gNTtlbHNlIHtcbiAgICAgIHZhciBvID0ge1xuICAgICAgICBkZWxheVRpbWU6IGlcbiAgICAgIH07XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIldpblZ3X2J0bk5leHREZWxheVwiLCB0aGlzLCBbb10pO1xuICAgICAgaSA9IG8uZGVsYXlUaW1lO1xuICAgIH1cbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnZpZXdEb0FjdGlvbihcImRpc2FibGVCdG5OZXh0XCIpO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoaSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIG51bGwgPT09ICh0ID0gZS5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQudmlld0RvQWN0aW9uKFwiZW5hYmxlQnRuTmV4dFwiKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHBsYXlQcm9ncmVzc0FuaW0oKSB7XG4gICAgdGhpcy5wbGF5QmFyQm94RW50ZXJBbmltKCk7XG4gICAgaWYgKHRoaXMubGV2ZWxCb3gucHJvZ3Jlc3MuY2hhbmdlKSB7XG4gICAgICB0aGlzLnBsYXlIaWdoTGlnaHRBbmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5pbUNvbXBsZXRlZCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94UHJvZ19iYXJCb3hFbnRlclwiKVxuICBwbGF5QmFyQm94RW50ZXJBbmltKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYmFyTGF5b3V0KSAmJiBjYy5pc1ZhbGlkKHRoaXMuYm94QnRuKSkge1xuICAgICAgdGhpcy5iYXJMYXlvdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYmFyTGF5b3V0Lm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5iYXJMYXlvdXQuc2NhbGUgPSAwLjc7XG4gICAgICB0aGlzLmJveEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5ib3hCdG4uc2NhbGUgPSAwLjc7XG4gICAgICB0aGlzLmJveEJ0bi5vcGFjaXR5ID0gMDtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmJhckxheW91dCk7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ib3hCdG4pO1xuICAgICAgdmFyIHQgPSBjYy50d2VlbigpLmRlbGF5KDEuMTMpLnRvKDAuMiwge1xuICAgICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgIH0pLnRvKDAuMTQsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICB9KTtcbiAgICAgIHQuY2xvbmUodGhpcy5iYXJMYXlvdXQpLnN0YXJ0KCk7XG4gICAgICB0LmNsb25lKHRoaXMuYm94QnRuKS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5SGlnaExpZ2h0QW5pbSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jdXJyZW50QmFySXRlbSkpIHtcbiAgICAgIHZhciBlID0ge1xuICAgICAgICBkZWxheVRpbWU6IDBcbiAgICAgIH07XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkxldmVsQm94X3BiRGVsYXlcIiwgdGhpcywgW2VdKTtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRDb21wbGV0ZURlbGF5KCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRCYXJJdGVtLm5vZGUpLmRlbGF5KDEuOSArIGUuZGVsYXlUaW1lKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wbGF5Q3VyQmFySGlnaExpZ2h0QW5pbSgpO1xuICAgICAgfSkuZGVsYXkoaSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuYW5pbUNvbXBsZXRlZCgpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMdkJveFByZ3NfZ2V0Q29tcERlbGF5XCIpXG4gIGdldENvbXBsZXRlRGVsYXkoKSB7XG4gICAgcmV0dXJuIDAuMztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94UHJnc19wbGF5Q3VyQmFySGlnaFwiKVxuICBwbGF5Q3VyQmFySGlnaExpZ2h0QW5pbSgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuY3VycmVudEJhckl0ZW0pICYmIHRoaXMuY3VycmVudEJhckl0ZW0uc2V0U3RhdGUoRUxldmVsQm94QmFyU3RhdGUuSGlnaExpZ2h0KTtcbiAgfVxuICBhbmltQ29tcGxldGVkKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMubGV2ZWxCb3gucHJvZ3Jlc3MuaXNHYWluKSB7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMubmV4dENhbGxiYWNrKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnNob3dOZXh0Qm94KCk7XG4gICAgICB9LCAxKTtcbiAgICB9XG4gIH1cbiAgb25IaWRlQm94QnRuQ2xpY2soKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmJveFRpcEFuaW0pICYmICh0aGlzLmJveFRpcEFuaW0uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaWRlQm94QnRuKSAmJiAodGhpcy5oaWRlQm94QnRuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBpZiAodGhpcy5zaG93UmV3YXJkc05vZGVzLmxlbmd0aCA+IDApIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModGhpcy5zaG93UmV3YXJkc05vZGVzKSwgbyA9IGkubmV4dCgpOyAhby5kb25lOyBvID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIG4gPSBvLnZhbHVlO1xuICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIChuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChlID0gaS5yZXR1cm4pICYmIGUuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94UHJvZ19zaG93TmV4dEJveFwiKVxuICBzaG93TmV4dEJveCgpIHtcbiAgICBpZiAodGhpcy5sZXZlbEJveC5uZXh0Qm94KSB7XG4gICAgICB0aGlzLmhpZGVSZXdhcmRzTm9kZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXJzKHRoaXMubGV2ZWxCb3gubmV4dEJveCk7XG4gICAgICB0aGlzLmJhckxheW91dC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVCb3hSZXdhcmQodGhpcy5sZXZlbEJveC5uZXh0Qm94KTtcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NMYWJlbCh0aGlzLmxldmVsQm94Lm5leHRCb3gpO1xuICAgIH1cbiAgfVxuICBvbkJveEJ0bkNsaWNrKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIGkgPSBNYXRoLmZsb29yKHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5sZW5ndGggLyAyKSxcbiAgICAgIG8gPSB0aGlzLmJveFRpcEFuaW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLmJveFRpcEFuaW0uYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaSA+IDAgJiYgaSA8IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLnNob3dSZXdhcmRzTm9kZXMpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICAgIHZhciBhID0gci52YWx1ZTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGEpICYmIChhLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgciAmJiAhci5kb25lICYmIChlID0gbi5yZXR1cm4pICYmIGUuY2FsbChuKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShvLCBcImNsaWNrX1wiICsgaSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShvLCBcImluaXRfXCIgKyBpLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oaWRlQm94QnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG59Il19