
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '699cf0KXWZAaKNELxpHkxsH', 'DailyView');
// subpackages/l_daily/Scripts/DailyView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DailyModel_1 = require("./DailyModel");
var DailyTypes_1 = require("./DailyTypes");
var DailyMonthCellItem_1 = require("./DailyMonthCellItem");
var DailyRewardListView_1 = require("./DailyRewardListView");
var DailyView = /** @class */ (function (_super) {
    __extends(DailyView, _super);
    function DailyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtTitle = null;
        _this._imgReward = null;
        _this._imgBtnReward = null;
        _this._txtDay = null;
        _this._btnLeft = null;
        _this._btnRight = null;
        _this._btnBack = null;
        _this._btnMore = null;
        _this._btnPlay = null;
        _this._txtPlayBtn = null;
        _this._rewardScrollView = null;
        _this._scrollViewNode = null;
        _this._itemMonth0 = null;
        _this._itemMonth1 = null;
        _this._itemMonth2 = null;
        _this._contentNode = null;
        _this._imgBottomBg = null;
        _this._effLight = null;
        _this._monthCellItem0 = null;
        _this._monthCellItem1 = null;
        _this._monthCellItem2 = null;
        _this._monthDataList = [];
        _this._currentMonthIndex = 0;
        _this._cellWidth = 750;
        _this._cellHeight = 600;
        _this._isAnimating = false;
        _this._isScrolling = false;
        _this._scrollStartTime = 0;
        _this._lastScrollOffset = cc.v2(0, 0);
        _this._dailyRewardListView = null;
        return _this;
    }
    DailyView_1 = DailyView;
    DailyView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initView();
    };
    DailyView.prototype.initView = function () {
        this.initScrollView();
        this.initMonthItems();
        this.registerEvents();
        this.registerScrollEvents();
        this.initRewardScrollView();
        this.initMonthCellsFrameBased();
    };
    DailyView.prototype.initRewardScrollView = function () {
        this._dailyRewardListView = this._rewardScrollView.addComponent(DailyRewardListView_1.default);
        this._dailyRewardListView.dailyScrollView = this._scrollViewNode;
        this._dailyRewardListView.delegate = this.delegate;
    };
    DailyView.prototype.initScrollView = function () {
        if (cc.isValid(this._scrollViewNode)) {
            this._scrollViewNode.horizontal = true;
            this._scrollViewNode.vertical = false;
            this._scrollViewNode.enabled = true;
            var t = this._scrollViewNode.content.getComponent(cc.Layout);
            t && (t.enabled = false);
            var e = this._scrollViewNode.node.getContentSize();
            this._cellWidth = e.width;
            this._cellHeight = e.height;
            if (this._contentNode) {
                this._contentNode.anchorX = 0;
                this._contentNode.anchorY = 0.5;
                this._contentNode.height = this._cellHeight;
                this._contentNode.x = -this._cellWidth / 2;
                this._contentNode.y = 0;
            }
        }
    };
    DailyView.prototype.initMonthItems = function () {
        var t, e, i;
        this._monthCellItem0 = this.initMonthItem(this._itemMonth0, -this._cellWidth);
        this._monthCellItem1 = this.initMonthItem(this._itemMonth1, 0);
        this._monthCellItem2 = this.initMonthItem(this._itemMonth2, this._cellWidth);
        var o = this.onDaySelect.bind(this);
        null === (t = this._monthCellItem0) || void 0 === t || t.setDaySelectCallback(o);
        null === (e = this._monthCellItem1) || void 0 === e || e.setDaySelectCallback(o);
        null === (i = this._monthCellItem2) || void 0 === i || i.setDaySelectCallback(o);
    };
    DailyView.prototype.initMonthItem = function (t, e) {
        if (!t)
            return null;
        var i = t.getComponent(DailyMonthCellItem_1.default);
        i || (i = t.addComponent(DailyMonthCellItem_1.default));
        t.x = e;
        t.active = false;
        return i;
    };
    DailyView.prototype.initMonthCellsFrameBased = function () {
        var t = [this._monthCellItem1, this._monthCellItem0, this._monthCellItem2];
        this.initNextMonthCell(t, 0);
    };
    DailyView.prototype.initNextMonthCell = function (t, e) {
        var i = this;
        if (cc.isValid(this.node) && !(e >= t.length)) {
            var o = t[e];
            if (o && !o.isInitialized()) {
                o.initViewAsync().then(function () {
                    return i.scheduleNextItem(t, e);
                }).catch(function (o) {
                    return i.handleInitError(t, e, o);
                });
            }
            else {
                this.scheduleNextItem(t, e);
            }
        }
    };
    DailyView.prototype.scheduleNextItem = function (t, e) {
        var i = this;
        cc.isValid(this.node) && this.scheduleOnce(function () {
            i.initNextMonthCell(t, e + 1);
        }, 0);
    };
    DailyView.prototype.handleInitError = function (t, e) {
        this.scheduleNextItem(t, e);
    };
    DailyView.prototype.registerEvents = function () {
        this.OnButtonClick(this._btnBack.node, this.onBackClick.bind(this));
        this.OnButtonClick(this._btnPlay.node, {
            func: this.onPlayClick.bind(this),
            clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
        });
        this.OnButtonClick(this._btnLeft.node, {
            func: this.onLeftClick.bind(this),
            ignoreClickAudio: true
        });
        this.OnButtonClick(this._btnRight.node, {
            func: this.onRightClick.bind(this),
            ignoreClickAudio: true
        });
        this.OnButtonClick(this._btnMore.node, this.onMoreClick.bind(this));
        this.OnButtonClick(this._imgBtnReward.node, this.onMoreClick.bind(this));
    };
    DailyView.prototype.registerScrollEvents = function () {
        if (this._scrollViewNode) {
            var t = this._scrollViewNode.node;
            t.on("scroll-began", this.onScrollBegan, this);
            t.on("scrolling", this.onScrolling, this);
            t.on("scroll-ended", this.onScrollEnded, this);
            t.on("touch-cancel", this.onScrollEnded, this);
        }
    };
    DailyView.prototype.showView = function () {
        if (this._effLight) {
            this._effLight.opacity = 50;
            cc.tween(this._effLight).to(0.4, {
                opacity: 255
            }).start();
        }
    };
    DailyView.prototype.showMonthList = function (t) {
        this._monthDataList = t;
        this._dailyRewardListView.showMonthList(t);
        this._dailyRewardListView.delegate = this.delegate;
    };
    DailyView.prototype.scrollToMonth = function (t, e) {
        if (e === void 0) { e = true; }
        this._dailyRewardListView.scrollToMonth(t, e);
        var i = this._monthDataList.findIndex(function (e) {
            return e.id === t;
        });
        if (!(i < 0)) {
            this._currentMonthIndex = i;
            this.updateThreeItems();
        }
    };
    DailyView.prototype.updateThreeItems = function () {
        this.updateItemData(this._monthCellItem0, this._itemMonth0, this._currentMonthIndex - 1, false);
        this.updateItemData(this._monthCellItem1, this._itemMonth1, this._currentMonthIndex, true);
        this.updateItemData(this._monthCellItem2, this._itemMonth2, this._currentMonthIndex + 1, false);
        this._contentNode.width = this._cellWidth * this._monthDataList.length;
        this._contentNode.x = this.calculateContentX();
        this.resetItemsPosition();
    };
    DailyView.prototype.updateItemData = function (t, e, i, o) {
        if (t && e)
            if (i >= 0 && i < this._monthDataList.length) {
                t.updateCell(this._monthDataList[i], o);
                e.active = true;
            }
            else
                e.active = false;
    };
    DailyView.prototype.calculateContentX = function () {
        return -this._currentMonthIndex * this._cellWidth - this._cellWidth / 2;
    };
    DailyView.prototype.refreshMonth = function (t, e) {
        this._dailyRewardListView.refreshMonth(t, e);
        var i = this._monthDataList.findIndex(function (e) {
            return e.id === t;
        });
        if (!(i < 0)) {
            this._monthDataList[i] = e;
            var o = i - this._currentMonthIndex;
            if (0 === o) {
                this._monthCellItem1.updateCell(e, true);
            }
            else {
                if (-1 === o) {
                    this._monthCellItem0.updateCell(e, false);
                }
                else {
                    1 === o && this._monthCellItem2.updateCell(e, false);
                }
            }
        }
    };
    DailyView.prototype.updateReward = function () { };
    DailyView.prototype.updatePlayButton = function (t) {
        this._txtPlayBtn && (this._txtPlayBtn.string = t.text);
        this._btnPlay && (this._btnPlay.interactable = t.enabled);
    };
    DailyView.prototype.updateMonth = function (t, e, i, o) {
        var n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
        if (n) {
            this._txtDay && (this._txtDay.string = GameUtils_1.default.formatDateStringToLanguage(n.Year + "-" + n.Month + "-" + o, null, true, false) || "");
            this.loadRewardIcon(this._imgReward, e, i);
        }
    };
    DailyView.prototype.loadRewardIcon = function (t, e, i) {
        if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e)) {
            var o = DailyModel_1.default.getInstance().getItemIconUrl(e);
            BaseSprite_1.default.refreshWithNode(t.node, o);
            if (i) {
                this.removeGrayEffect(t);
            }
            else {
                this.applyGrayEffect(t);
            }
            t.node.opacity = 255;
        }
    };
    DailyView.prototype.updateCellRewardIcon = function (t, e, i) {
        t && t.updateCell(e, i);
    };
    DailyView.prototype.applyGrayEffect = function (t) {
        t && cc.isValid(t.node) && t.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
    };
    DailyView.prototype.removeGrayEffect = function (t) {
        if (t && cc.isValid(t.node)) {
            t.setMaterial(0, null);
            t.getMaterial(0) || t.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
            t.node.color = cc.Color.WHITE;
            var e = t.spriteFrame;
            if (e) {
                t.spriteFrame = null;
                t.spriteFrame = e;
            }
        }
    };
    DailyView.prototype.updateNavButtons = function (t) {
        this._btnLeft && (this._btnLeft.node.active = t.leftEnabled);
        this._btnRight && (this._btnRight.node.active = t.rightEnabled);
    };
    DailyView.prototype.onDaySelect = function (t, e) {
        this.delegate.handleDaySelect(t, e);
    };
    DailyView.prototype.onBackClick = function () {
        this.delegate.closeView();
    };
    DailyView.prototype.onLeftClick = function () {
        if (!(this._isAnimating || this._currentMonthIndex <= 0)) {
            mj.audioManager.playEffect(DailyTypes_1.EDailyAudioID.DailyMonthSlide);
            this.delegate.handleChangeMonth(true);
        }
    };
    DailyView.prototype.onRightClick = function () {
        if (!(this._isAnimating || this._currentMonthIndex >= this._monthDataList.length - 1)) {
            mj.audioManager.playEffect(DailyTypes_1.EDailyAudioID.DailyMonthSlide);
            this.delegate.handleChangeMonth(false);
        }
    };
    DailyView.prototype.switchMonth = function (t) {
        if (0 !== t) {
            if (!(-1 === t && this._currentMonthIndex <= 0 || 1 === t && this._currentMonthIndex >= this._monthDataList.length - 1)) {
                mj.audioManager.playEffect(DailyTypes_1.EDailyAudioID.DailyMonthSlide);
                cc.Tween.stopAllByTarget(this._contentNode);
                this.prepareSwitch(t);
                this.animateSwitch(t);
            }
        }
        else
            this.bounceBack();
    };
    DailyView.prototype.prepareSwitch = function (t) {
        this._currentMonthIndex += t;
        this._isAnimating = true;
        this._scrollViewNode.enabled = false;
        this._rewardScrollView && (this._rewardScrollView.enabled = false);
        if (-1 === t) {
            this.updateItemData(this._monthCellItem2, this._itemMonth2, this._currentMonthIndex - 1, false);
        }
        else {
            this.updateItemData(this._monthCellItem0, this._itemMonth0, this._currentMonthIndex + 1, false);
        }
    };
    DailyView.prototype.animateSwitch = function (t) {
        var e = this;
        cc.tween(this._contentNode).to(DailyView_1.ANIMATION_DURATION, {
            x: this.calculateContentX()
        }, {
            easing: "backOut"
        }).call(function () {
            return e.onSwitchComplete(t);
        }).start();
    };
    DailyView.prototype.onSwitchComplete = function (t) {
        this.swapItemReferences(t);
        this.resetItemsPosition();
        this.restoreScrollState();
        this.updateNavButtonsState();
        this.delegate.handleChangeMonth(t < 0);
    };
    DailyView.prototype.swapItemReferences = function (t) {
        if (-1 === t) {
            var e = __read([this._itemMonth2, this._monthCellItem2], 2), i = e[0], o = e[1];
            this._itemMonth2 = this._itemMonth1;
            this._monthCellItem2 = this._monthCellItem1;
            this._itemMonth1 = this._itemMonth0;
            this._monthCellItem1 = this._monthCellItem0;
            this._itemMonth0 = i;
            this._monthCellItem0 = o;
        }
        else {
            var n = __read([this._itemMonth0, this._monthCellItem0], 2);
            i = n[0], o = n[1];
            this._itemMonth0 = this._itemMonth1;
            this._monthCellItem0 = this._monthCellItem1;
            this._itemMonth1 = this._itemMonth2;
            this._monthCellItem1 = this._monthCellItem2;
            this._itemMonth2 = i;
            this._monthCellItem2 = o;
        }
    };
    DailyView.prototype.restoreScrollState = function () {
        this._isAnimating = false;
        this._scrollViewNode.enabled = true;
        this._rewardScrollView && (this._rewardScrollView.enabled = true);
    };
    DailyView.prototype.updateNavButtonsState = function () {
        this._btnLeft && (this._btnLeft.node.active = this._currentMonthIndex > 0);
        this._btnRight && (this._btnRight.node.active = this._currentMonthIndex < this._monthDataList.length - 1);
    };
    DailyView.prototype.bounceBack = function () {
        var t = this;
        this._isAnimating = true;
        this._scrollViewNode.enabled = false;
        this._rewardScrollView && (this._rewardScrollView.enabled = false);
        cc.tween(this._contentNode).to(DailyView_1.ANIMATION_DURATION, {
            x: this.calculateContentX()
        }, {
            easing: "backOut"
        }).call(function () {
            t.restoreScrollState();
            t.updateNavButtonsState();
            t.resetItemsPosition();
        }).start();
    };
    DailyView.prototype.resetItemsPosition = function () {
        this._itemMonth0.x = (this._currentMonthIndex - 1) * this._cellWidth + this._cellWidth / 2;
        this._itemMonth1.x = this._currentMonthIndex * this._cellWidth + this._cellWidth / 2;
        this._itemMonth2.x = (this._currentMonthIndex + 1) * this._cellWidth + this._cellWidth / 2;
    };
    DailyView.prototype.onScrollBegan = function () {
        if (!this._isAnimating) {
            this._isScrolling = true;
            this._scrollStartTime = Date.now();
            this._lastScrollOffset = this._scrollViewNode.getScrollOffset();
        }
    };
    DailyView.prototype.onScrolling = function () { };
    DailyView.prototype.onScrollEnded = function () {
        if (this._isScrolling && !this._isAnimating) {
            this._isScrolling = false;
            var t = this._scrollViewNode.getScrollOffset().x - this._lastScrollOffset.x, e = Date.now() - this._scrollStartTime, i = this.calculateScrollDirection(t, e);
            this.performPageSwitch(i);
        }
    };
    DailyView.prototype.calculateScrollDirection = function (t, e) {
        var o = this._cellWidth / DailyView_1.SWIPE_THRESHOLD, n = Math.abs(t) / Math.max(e, 1), a = Math.abs(t) >= o, l = n >= DailyView_1.SWIPE_SPEED;
        return a || l ? t > 0 && this._currentMonthIndex > 0 ? -1 : t < 0 && this._currentMonthIndex < this._monthDataList.length - 1 ? 1 : 0 : 0;
    };
    DailyView.prototype.performPageSwitch = function (t) {
        this.switchMonth(t);
        this.scheduleOnce(this.resetContentPosition.bind(this), DailyView_1.ANIMATION_DURATION + DailyView_1.ANIMATION_BUFFER);
    };
    DailyView.prototype.resetContentPosition = function () {
        var t;
        (null === (t = this._scrollViewNode) || void 0 === t ? void 0 : t.content) && (this._contentNode.x = this.calculateContentX());
    };
    DailyView.prototype.onMoreClick = function () {
        this.delegate.handleMoreClick();
    };
    DailyView.prototype.onPlayClick = function () {
        this.delegate && cc.isValid(this.delegate.rootView) && this.delegate.handlePlayClick();
    };
    DailyView.prototype.onDestroy = function () {
        var e;
        if (null === (e = this._scrollViewNode) || void 0 === e ? void 0 : e.node) {
            var i = this._scrollViewNode.node;
            i.off("scroll-began", this.onScrollBegan, this);
            i.off("scrolling", this.onScrolling, this);
            i.off("scroll-ended", this.onScrollEnded, this);
            i.off("touch-cancel", this.onScrollEnded, this);
        }
        this._contentNode && cc.Tween.stopAllByTarget(this._contentNode);
        this._monthDataList = [];
        this._monthCellItem0 = null;
        this._monthCellItem1 = null;
        this._monthCellItem2 = null;
        DailyModel_1.default.getInstance().isSelectedDay = false;
        _super.prototype.onDestroy.call(this);
    };
    var DailyView_1;
    DailyView.prefabUrl = "prefabs/daily/DailyView";
    DailyView.bundleName = "mainRes";
    DailyView.ANIMATION_DURATION = 0.2;
    DailyView.ANIMATION_BUFFER = 0.05;
    DailyView.SWIPE_THRESHOLD = 4;
    DailyView.SWIPE_SPEED = 0.5;
    __decorate([
        mj.component("node_top/txt_title", cc.Label)
    ], DailyView.prototype, "_txtTitle", void 0);
    __decorate([
        mj.component("node_center/img_reward", cc.Sprite)
    ], DailyView.prototype, "_imgReward", void 0);
    __decorate([
        mj.component("node_center/img_reward", cc.Button)
    ], DailyView.prototype, "_imgBtnReward", void 0);
    __decorate([
        mj.component("node_bottom/txt_day", cc.Label)
    ], DailyView.prototype, "_txtDay", void 0);
    __decorate([
        mj.component("node_topBtn/btn_left", cc.Button)
    ], DailyView.prototype, "_btnLeft", void 0);
    __decorate([
        mj.component("node_topBtn/btn_right", cc.Button)
    ], DailyView.prototype, "_btnRight", void 0);
    __decorate([
        mj.component("node_top/btn_back", cc.Button)
    ], DailyView.prototype, "_btnBack", void 0);
    __decorate([
        mj.component("node_top/btn_more", cc.Button)
    ], DailyView.prototype, "_btnMore", void 0);
    __decorate([
        mj.component("node_bottom/btn_play", cc.Button)
    ], DailyView.prototype, "_btnPlay", void 0);
    __decorate([
        mj.component("node_bottom/btn_play/img_btn_play/label", cc.Label)
    ], DailyView.prototype, "_txtPlayBtn", void 0);
    __decorate([
        mj.component("nodeRewardView", cc.ScrollView)
    ], DailyView.prototype, "_rewardScrollView", void 0);
    __decorate([
        mj.component("nodeCollectView", cc.ScrollView)
    ], DailyView.prototype, "_scrollViewNode", void 0);
    __decorate([
        mj.node("nodeCollectView/view/content/item_month0")
    ], DailyView.prototype, "_itemMonth0", void 0);
    __decorate([
        mj.node("nodeCollectView/view/content/item_month1")
    ], DailyView.prototype, "_itemMonth1", void 0);
    __decorate([
        mj.node("nodeCollectView/view/content/item_month2")
    ], DailyView.prototype, "_itemMonth2", void 0);
    __decorate([
        mj.node("nodeCollectView/view/content")
    ], DailyView.prototype, "_contentNode", void 0);
    __decorate([
        mj.node("img_bottomBg")
    ], DailyView.prototype, "_imgBottomBg", void 0);
    __decorate([
        mj.node("eff_light")
    ], DailyView.prototype, "_effLight", void 0);
    __decorate([
        mj.traitEvent("DailyView_onLoad")
    ], DailyView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("DailyView_onPlayClick")
    ], DailyView.prototype, "onPlayClick", null);
    DailyView = DailyView_1 = __decorate([
        mj.class
    ], DailyView);
    return DailyView;
}(UIView_1.default));
exports.default = DailyView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUseUVBQXdFO0FBQ3hFLCtEQUEwRDtBQUMxRCw2RUFBNEU7QUFDNUUsMkVBQXNFO0FBQ3RFLDJDQUFzQztBQUN0QywyQ0FBNkM7QUFDN0MsMkRBQXNEO0FBQ3RELDZEQUF3RDtBQUV4RDtJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQWdiQztRQTlhQyxlQUFTLEdBQXlCLElBQUksQ0FBQztRQUV2QyxnQkFBVSxHQUE2QixJQUFJLENBQUM7UUFFNUMsbUJBQWEsR0FBNkIsSUFBSSxDQUFDO1FBRS9DLGFBQU8sR0FBMEIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBMkIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBNEIsSUFBSSxDQUFDO1FBRTFDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBMkIsSUFBSSxDQUFDO1FBRXhDLGlCQUFXLEdBQThDLElBQUksQ0FBQztRQUU5RCx1QkFBaUIsR0FBcUIsSUFBSSxDQUFDO1FBRTNDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxpQkFBVyxHQUErQyxJQUFJLENBQUM7UUFFL0QsaUJBQVcsR0FBK0MsSUFBSSxDQUFDO1FBRS9ELGlCQUFXLEdBQStDLElBQUksQ0FBQztRQUUvRCxrQkFBWSxHQUFtQyxJQUFJLENBQUM7UUFFcEQsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQzlCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztR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UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDO21EQUNZO0lBRXBEO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7bURBQ1k7SUFFcEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnREFDUztJQW9COUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzJDQUlqQztJQWlXRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7Z0RBR3RDO0lBOVprQixTQUFTO1FBRDdCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksU0FBUyxDQWdiN0I7SUFBRCxnQkFBQztDQWhiRCxBQWdiQyxDQWhic0MsZ0JBQU0sR0FnYjVDO2tCQWhib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBEYWlseU1vZGVsIGZyb20gJy4vRGFpbHlNb2RlbCc7XG5pbXBvcnQgeyBFRGFpbHlBdWRpb0lEIH0gZnJvbSAnLi9EYWlseVR5cGVzJztcbmltcG9ydCBEYWlseU1vbnRoQ2VsbEl0ZW0gZnJvbSAnLi9EYWlseU1vbnRoQ2VsbEl0ZW0nO1xuaW1wb3J0IERhaWx5UmV3YXJkTGlzdFZpZXcgZnJvbSAnLi9EYWlseVJld2FyZExpc3RWaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVfdG9wL3R4dF90aXRsZVwiLCBjYy5MYWJlbClcbiAgX3R4dFRpdGxlOiBcIm5vZGVfdG9wL3R4dF90aXRsZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVfY2VudGVyL2ltZ19yZXdhcmRcIiwgY2MuU3ByaXRlKVxuICBfaW1nUmV3YXJkOiBcIm5vZGVfY2VudGVyL2ltZ19yZXdhcmRcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJub2RlX2NlbnRlci9pbWdfcmV3YXJkXCIsIGNjLkJ1dHRvbilcbiAgX2ltZ0J0blJld2FyZDogXCJub2RlX2NlbnRlci9pbWdfcmV3YXJkXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZV9ib3R0b20vdHh0X2RheVwiLCBjYy5MYWJlbClcbiAgX3R4dERheTogXCJub2RlX2JvdHRvbS90eHRfZGF5XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZV90b3BCdG4vYnRuX2xlZnRcIiwgY2MuQnV0dG9uKVxuICBfYnRuTGVmdDogXCJub2RlX3RvcEJ0bi9idG5fbGVmdFwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVfdG9wQnRuL2J0bl9yaWdodFwiLCBjYy5CdXR0b24pXG4gIF9idG5SaWdodDogXCJub2RlX3RvcEJ0bi9idG5fcmlnaHRcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJub2RlX3RvcC9idG5fYmFja1wiLCBjYy5CdXR0b24pXG4gIF9idG5CYWNrOiBcIm5vZGVfdG9wL2J0bl9iYWNrXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZV90b3AvYnRuX21vcmVcIiwgY2MuQnV0dG9uKVxuICBfYnRuTW9yZTogXCJub2RlX3RvcC9idG5fbW9yZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVfYm90dG9tL2J0bl9wbGF5XCIsIGNjLkJ1dHRvbilcbiAgX2J0blBsYXk6IFwibm9kZV9ib3R0b20vYnRuX3BsYXlcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJub2RlX2JvdHRvbS9idG5fcGxheS9pbWdfYnRuX3BsYXkvbGFiZWxcIiwgY2MuTGFiZWwpXG4gIF90eHRQbGF5QnRuOiBcIm5vZGVfYm90dG9tL2J0bl9wbGF5L2ltZ19idG5fcGxheS9sYWJlbFwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVSZXdhcmRWaWV3XCIsIGNjLlNjcm9sbFZpZXcpXG4gIF9yZXdhcmRTY3JvbGxWaWV3OiBcIm5vZGVSZXdhcmRWaWV3XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZUNvbGxlY3RWaWV3XCIsIGNjLlNjcm9sbFZpZXcpXG4gIF9zY3JvbGxWaWV3Tm9kZTogXCJub2RlQ29sbGVjdFZpZXdcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwibm9kZUNvbGxlY3RWaWV3L3ZpZXcvY29udGVudC9pdGVtX21vbnRoMFwiKVxuICBfaXRlbU1vbnRoMDogXCJub2RlQ29sbGVjdFZpZXcvdmlldy9jb250ZW50L2l0ZW1fbW9udGgwXCIgPSBudWxsO1xuICBAbWoubm9kZShcIm5vZGVDb2xsZWN0Vmlldy92aWV3L2NvbnRlbnQvaXRlbV9tb250aDFcIilcbiAgX2l0ZW1Nb250aDE6IFwibm9kZUNvbGxlY3RWaWV3L3ZpZXcvY29udGVudC9pdGVtX21vbnRoMVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJub2RlQ29sbGVjdFZpZXcvdmlldy9jb250ZW50L2l0ZW1fbW9udGgyXCIpXG4gIF9pdGVtTW9udGgyOiBcIm5vZGVDb2xsZWN0Vmlldy92aWV3L2NvbnRlbnQvaXRlbV9tb250aDJcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwibm9kZUNvbGxlY3RWaWV3L3ZpZXcvY29udGVudFwiKVxuICBfY29udGVudE5vZGU6IFwibm9kZUNvbGxlY3RWaWV3L3ZpZXcvY29udGVudFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJpbWdfYm90dG9tQmdcIilcbiAgX2ltZ0JvdHRvbUJnOiBcImltZ19ib3R0b21CZ1wiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJlZmZfbGlnaHRcIilcbiAgX2VmZkxpZ2h0OiBcImVmZl9saWdodFwiID0gbnVsbDtcbiAgX21vbnRoQ2VsbEl0ZW0wID0gbnVsbDtcbiAgX21vbnRoQ2VsbEl0ZW0xID0gbnVsbDtcbiAgX21vbnRoQ2VsbEl0ZW0yID0gbnVsbDtcbiAgX21vbnRoRGF0YUxpc3QgPSBbXTtcbiAgX2N1cnJlbnRNb250aEluZGV4ID0gMDtcbiAgX2NlbGxXaWR0aCA9IDc1MDtcbiAgX2NlbGxIZWlnaHQgPSA2MDA7XG4gIF9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICBfaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgX3Njcm9sbFN0YXJ0VGltZSA9IDA7XG4gIF9sYXN0U2Nyb2xsT2Zmc2V0ID0gY2MudjIoMCwgMCk7XG4gIF9kYWlseVJld2FyZExpc3RWaWV3ID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9kYWlseS9EYWlseVZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgc3RhdGljIEFOSU1BVElPTl9EVVJBVElPTiA9IDAuMjtcbiAgc3RhdGljIEFOSU1BVElPTl9CVUZGRVIgPSAwLjA1O1xuICBzdGF0aWMgU1dJUEVfVEhSRVNIT0xEID0gNDtcbiAgc3RhdGljIFNXSVBFX1NQRUVEID0gMC41O1xuICBAbWoudHJhaXRFdmVudChcIkRhaWx5Vmlld19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgfVxuICBpbml0VmlldygpIHtcbiAgICB0aGlzLmluaXRTY3JvbGxWaWV3KCk7XG4gICAgdGhpcy5pbml0TW9udGhJdGVtcygpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnRzKCk7XG4gICAgdGhpcy5pbml0UmV3YXJkU2Nyb2xsVmlldygpO1xuICAgIHRoaXMuaW5pdE1vbnRoQ2VsbHNGcmFtZUJhc2VkKCk7XG4gIH1cbiAgaW5pdFJld2FyZFNjcm9sbFZpZXcoKSB7XG4gICAgdGhpcy5fZGFpbHlSZXdhcmRMaXN0VmlldyA9IHRoaXMuX3Jld2FyZFNjcm9sbFZpZXcuYWRkQ29tcG9uZW50KERhaWx5UmV3YXJkTGlzdFZpZXcpO1xuICAgIHRoaXMuX2RhaWx5UmV3YXJkTGlzdFZpZXcuZGFpbHlTY3JvbGxWaWV3ID0gdGhpcy5fc2Nyb2xsVmlld05vZGU7XG4gICAgdGhpcy5fZGFpbHlSZXdhcmRMaXN0Vmlldy5kZWxlZ2F0ZSA9IHRoaXMuZGVsZWdhdGU7XG4gIH1cbiAgaW5pdFNjcm9sbFZpZXcoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fc2Nyb2xsVmlld05vZGUpKSB7XG4gICAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXdOb2RlLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHZhciB0ID0gdGhpcy5fc2Nyb2xsVmlld05vZGUuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgIHQgJiYgKHQuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICAgIHZhciBlID0gdGhpcy5fc2Nyb2xsVmlld05vZGUubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgdGhpcy5fY2VsbFdpZHRoID0gZS53aWR0aDtcbiAgICAgIHRoaXMuX2NlbGxIZWlnaHQgPSBlLmhlaWdodDtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50Tm9kZSkge1xuICAgICAgICB0aGlzLl9jb250ZW50Tm9kZS5hbmNob3JYID0gMDtcbiAgICAgICAgdGhpcy5fY29udGVudE5vZGUuYW5jaG9yWSA9IDAuNTtcbiAgICAgICAgdGhpcy5fY29udGVudE5vZGUuaGVpZ2h0ID0gdGhpcy5fY2VsbEhlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGVudE5vZGUueCA9IC10aGlzLl9jZWxsV2lkdGggLyAyO1xuICAgICAgICB0aGlzLl9jb250ZW50Tm9kZS55ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5pdE1vbnRoSXRlbXMoKSB7XG4gICAgdmFyIHQsIGUsIGk7XG4gICAgdGhpcy5fbW9udGhDZWxsSXRlbTAgPSB0aGlzLmluaXRNb250aEl0ZW0odGhpcy5faXRlbU1vbnRoMCwgLXRoaXMuX2NlbGxXaWR0aCk7XG4gICAgdGhpcy5fbW9udGhDZWxsSXRlbTEgPSB0aGlzLmluaXRNb250aEl0ZW0odGhpcy5faXRlbU1vbnRoMSwgMCk7XG4gICAgdGhpcy5fbW9udGhDZWxsSXRlbTIgPSB0aGlzLmluaXRNb250aEl0ZW0odGhpcy5faXRlbU1vbnRoMiwgdGhpcy5fY2VsbFdpZHRoKTtcbiAgICB2YXIgbyA9IHRoaXMub25EYXlTZWxlY3QuYmluZCh0aGlzKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX21vbnRoQ2VsbEl0ZW0wKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5zZXREYXlTZWxlY3RDYWxsYmFjayhvKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX21vbnRoQ2VsbEl0ZW0xKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zZXREYXlTZWxlY3RDYWxsYmFjayhvKTtcbiAgICBudWxsID09PSAoaSA9IHRoaXMuX21vbnRoQ2VsbEl0ZW0yKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5zZXREYXlTZWxlY3RDYWxsYmFjayhvKTtcbiAgfVxuICBpbml0TW9udGhJdGVtKHQsIGUpIHtcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIHZhciBpID0gdC5nZXRDb21wb25lbnQoRGFpbHlNb250aENlbGxJdGVtKTtcbiAgICBpIHx8IChpID0gdC5hZGRDb21wb25lbnQoRGFpbHlNb250aENlbGxJdGVtKSk7XG4gICAgdC54ID0gZTtcbiAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybiBpO1xuICB9XG4gIGluaXRNb250aENlbGxzRnJhbWVCYXNlZCgpIHtcbiAgICB2YXIgdCA9IFt0aGlzLl9tb250aENlbGxJdGVtMSwgdGhpcy5fbW9udGhDZWxsSXRlbTAsIHRoaXMuX21vbnRoQ2VsbEl0ZW0yXTtcbiAgICB0aGlzLmluaXROZXh0TW9udGhDZWxsKHQsIDApO1xuICB9XG4gIGluaXROZXh0TW9udGhDZWxsKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiAhKGUgPj0gdC5sZW5ndGgpKSB7XG4gICAgICB2YXIgbyA9IHRbZV07XG4gICAgICBpZiAobyAmJiAhby5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgby5pbml0Vmlld0FzeW5jKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGkuc2NoZWR1bGVOZXh0SXRlbSh0LCBlKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICByZXR1cm4gaS5oYW5kbGVJbml0RXJyb3IodCwgZSwgbyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU5leHRJdGVtKHQsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzY2hlZHVsZU5leHRJdGVtKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGkuaW5pdE5leHRNb250aENlbGwodCwgZSArIDEpO1xuICAgIH0sIDApO1xuICB9XG4gIGhhbmRsZUluaXRFcnJvcih0LCBlKSB7XG4gICAgdGhpcy5zY2hlZHVsZU5leHRJdGVtKHQsIGUpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5CYWNrLm5vZGUsIHRoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0blBsYXkubm9kZSwge1xuICAgICAgZnVuYzogdGhpcy5vblBsYXlDbGljay5iaW5kKHRoaXMpLFxuICAgICAgY2xpY2tBdWRpbzogRURhaWx5QXVkaW9JRC5EYWlseURheVxuICAgIH0pO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5MZWZ0Lm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25MZWZ0Q2xpY2suYmluZCh0aGlzKSxcbiAgICAgIGlnbm9yZUNsaWNrQXVkaW86IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuUmlnaHQubm9kZSwge1xuICAgICAgZnVuYzogdGhpcy5vblJpZ2h0Q2xpY2suYmluZCh0aGlzKSxcbiAgICAgIGlnbm9yZUNsaWNrQXVkaW86IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuTW9yZS5ub2RlLCB0aGlzLm9uTW9yZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9pbWdCdG5SZXdhcmQubm9kZSwgdGhpcy5vbk1vcmVDbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICByZWdpc3RlclNjcm9sbEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmlld05vZGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fc2Nyb2xsVmlld05vZGUubm9kZTtcbiAgICAgIHQub24oXCJzY3JvbGwtYmVnYW5cIiwgdGhpcy5vblNjcm9sbEJlZ2FuLCB0aGlzKTtcbiAgICAgIHQub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNjcm9sbGluZywgdGhpcyk7XG4gICAgICB0Lm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgICB0Lm9uKFwidG91Y2gtY2FuY2VsXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgfVxuICB9XG4gIHNob3dWaWV3KCkge1xuICAgIGlmICh0aGlzLl9lZmZMaWdodCkge1xuICAgICAgdGhpcy5fZWZmTGlnaHQub3BhY2l0eSA9IDUwO1xuICAgICAgY2MudHdlZW4odGhpcy5fZWZmTGlnaHQpLnRvKDAuNCwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHNob3dNb250aExpc3QodCkge1xuICAgIHRoaXMuX21vbnRoRGF0YUxpc3QgPSB0O1xuICAgIHRoaXMuX2RhaWx5UmV3YXJkTGlzdFZpZXcuc2hvd01vbnRoTGlzdCh0KTtcbiAgICB0aGlzLl9kYWlseVJld2FyZExpc3RWaWV3LmRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcbiAgfVxuICBzY3JvbGxUb01vbnRoKHQsIGUgPSB0cnVlKSB7XG4gICAgdGhpcy5fZGFpbHlSZXdhcmRMaXN0Vmlldy5zY3JvbGxUb01vbnRoKHQsIGUpO1xuICAgIHZhciBpID0gdGhpcy5fbW9udGhEYXRhTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmlkID09PSB0O1xuICAgIH0pO1xuICAgIGlmICghKGkgPCAwKSkge1xuICAgICAgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPSBpO1xuICAgICAgdGhpcy51cGRhdGVUaHJlZUl0ZW1zKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVRocmVlSXRlbXMoKSB7XG4gICAgdGhpcy51cGRhdGVJdGVtRGF0YSh0aGlzLl9tb250aENlbGxJdGVtMCwgdGhpcy5faXRlbU1vbnRoMCwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggLSAxLCBmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVJdGVtRGF0YSh0aGlzLl9tb250aENlbGxJdGVtMSwgdGhpcy5faXRlbU1vbnRoMSwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXgsIHRydWUpO1xuICAgIHRoaXMudXBkYXRlSXRlbURhdGEodGhpcy5fbW9udGhDZWxsSXRlbTIsIHRoaXMuX2l0ZW1Nb250aDIsIHRoaXMuX2N1cnJlbnRNb250aEluZGV4ICsgMSwgZmFsc2UpO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlLndpZHRoID0gdGhpcy5fY2VsbFdpZHRoICogdGhpcy5fbW9udGhEYXRhTGlzdC5sZW5ndGg7XG4gICAgdGhpcy5fY29udGVudE5vZGUueCA9IHRoaXMuY2FsY3VsYXRlQ29udGVudFgoKTtcbiAgICB0aGlzLnJlc2V0SXRlbXNQb3NpdGlvbigpO1xuICB9XG4gIHVwZGF0ZUl0ZW1EYXRhKHQsIGUsIGksIG8pIHtcbiAgICBpZiAodCAmJiBlKSBpZiAoaSA+PSAwICYmIGkgPCB0aGlzLl9tb250aERhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgdC51cGRhdGVDZWxsKHRoaXMuX21vbnRoRGF0YUxpc3RbaV0sIG8pO1xuICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGNhbGN1bGF0ZUNvbnRlbnRYKCkge1xuICAgIHJldHVybiAtdGhpcy5fY3VycmVudE1vbnRoSW5kZXggKiB0aGlzLl9jZWxsV2lkdGggLSB0aGlzLl9jZWxsV2lkdGggLyAyO1xuICB9XG4gIHJlZnJlc2hNb250aCh0LCBlKSB7XG4gICAgdGhpcy5fZGFpbHlSZXdhcmRMaXN0Vmlldy5yZWZyZXNoTW9udGgodCwgZSk7XG4gICAgdmFyIGkgPSB0aGlzLl9tb250aERhdGFMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQgPT09IHQ7XG4gICAgfSk7XG4gICAgaWYgKCEoaSA8IDApKSB7XG4gICAgICB0aGlzLl9tb250aERhdGFMaXN0W2ldID0gZTtcbiAgICAgIHZhciBvID0gaSAtIHRoaXMuX2N1cnJlbnRNb250aEluZGV4O1xuICAgICAgaWYgKDAgPT09IG8pIHtcbiAgICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTEudXBkYXRlQ2VsbChlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgtMSA9PT0gbykge1xuICAgICAgICAgIHRoaXMuX21vbnRoQ2VsbEl0ZW0wLnVwZGF0ZUNlbGwoZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIDEgPT09IG8gJiYgdGhpcy5fbW9udGhDZWxsSXRlbTIudXBkYXRlQ2VsbChlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlUmV3YXJkKCkge31cbiAgdXBkYXRlUGxheUJ1dHRvbih0KSB7XG4gICAgdGhpcy5fdHh0UGxheUJ0biAmJiAodGhpcy5fdHh0UGxheUJ0bi5zdHJpbmcgPSB0LnRleHQpO1xuICAgIHRoaXMuX2J0blBsYXkgJiYgKHRoaXMuX2J0blBsYXkuaW50ZXJhY3RhYmxlID0gdC5lbmFibGVkKTtcbiAgfVxuICB1cGRhdGVNb250aCh0LCBlLCBpLCBvKSB7XG4gICAgdmFyIG4gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0KTtcbiAgICBpZiAobikge1xuICAgICAgdGhpcy5fdHh0RGF5ICYmICh0aGlzLl90eHREYXkuc3RyaW5nID0gR2FtZVV0aWxzLmZvcm1hdERhdGVTdHJpbmdUb0xhbmd1YWdlKG4uWWVhciArIFwiLVwiICsgbi5Nb250aCArIFwiLVwiICsgbywgbnVsbCwgdHJ1ZSwgZmFsc2UpIHx8IFwiXCIpO1xuICAgICAgdGhpcy5sb2FkUmV3YXJkSWNvbih0aGlzLl9pbWdSZXdhcmQsIGUsIGkpO1xuICAgIH1cbiAgfVxuICBsb2FkUmV3YXJkSWNvbih0LCBlLCBpKSB7XG4gICAgaWYgKERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgZSkpIHtcbiAgICAgIHZhciBvID0gRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEl0ZW1JY29uVXJsKGUpO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodC5ub2RlLCBvKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlR3JheUVmZmVjdCh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwbHlHcmF5RWZmZWN0KHQpO1xuICAgICAgfVxuICAgICAgdC5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUNlbGxSZXdhcmRJY29uKHQsIGUsIGkpIHtcbiAgICB0ICYmIHQudXBkYXRlQ2VsbChlLCBpKTtcbiAgfVxuICBhcHBseUdyYXlFZmZlY3QodCkge1xuICAgIHQgJiYgY2MuaXNWYWxpZCh0Lm5vZGUpICYmIHQuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKFwiMmQtZ3JheS1zcHJpdGVcIikpO1xuICB9XG4gIHJlbW92ZUdyYXlFZmZlY3QodCkge1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgdC5zZXRNYXRlcmlhbCgwLCBudWxsKTtcbiAgICAgIHQuZ2V0TWF0ZXJpYWwoMCkgfHwgdC5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbC5nZXRCdWlsdGluTWF0ZXJpYWwoXCIyZC1zcHJpdGVcIikpO1xuICAgICAgdC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICB2YXIgZSA9IHQuc3ByaXRlRnJhbWU7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0LnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgdC5zcHJpdGVGcmFtZSA9IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZU5hdkJ1dHRvbnModCkge1xuICAgIHRoaXMuX2J0bkxlZnQgJiYgKHRoaXMuX2J0bkxlZnQubm9kZS5hY3RpdmUgPSB0LmxlZnRFbmFibGVkKTtcbiAgICB0aGlzLl9idG5SaWdodCAmJiAodGhpcy5fYnRuUmlnaHQubm9kZS5hY3RpdmUgPSB0LnJpZ2h0RW5hYmxlZCk7XG4gIH1cbiAgb25EYXlTZWxlY3QodCwgZSkge1xuICAgIHRoaXMuZGVsZWdhdGUuaGFuZGxlRGF5U2VsZWN0KHQsIGUpO1xuICB9XG4gIG9uQmFja0NsaWNrKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2VWaWV3KCk7XG4gIH1cbiAgb25MZWZ0Q2xpY2soKSB7XG4gICAgaWYgKCEodGhpcy5faXNBbmltYXRpbmcgfHwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPD0gMCkpIHtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVEYWlseUF1ZGlvSUQuRGFpbHlNb250aFNsaWRlKTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuaGFuZGxlQ2hhbmdlTW9udGgodHJ1ZSk7XG4gICAgfVxuICB9XG4gIG9uUmlnaHRDbGljaygpIHtcbiAgICBpZiAoISh0aGlzLl9pc0FuaW1hdGluZyB8fCB0aGlzLl9jdXJyZW50TW9udGhJbmRleCA+PSB0aGlzLl9tb250aERhdGFMaXN0Lmxlbmd0aCAtIDEpKSB7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFRGFpbHlBdWRpb0lELkRhaWx5TW9udGhTbGlkZSk7XG4gICAgICB0aGlzLmRlbGVnYXRlLmhhbmRsZUNoYW5nZU1vbnRoKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoTW9udGgodCkge1xuICAgIGlmICgwICE9PSB0KSB7XG4gICAgICBpZiAoISgtMSA9PT0gdCAmJiB0aGlzLl9jdXJyZW50TW9udGhJbmRleCA8PSAwIHx8IDEgPT09IHQgJiYgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPj0gdGhpcy5fbW9udGhEYXRhTGlzdC5sZW5ndGggLSAxKSkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFRGFpbHlBdWRpb0lELkRhaWx5TW9udGhTbGlkZSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9jb250ZW50Tm9kZSk7XG4gICAgICAgIHRoaXMucHJlcGFyZVN3aXRjaCh0KTtcbiAgICAgICAgdGhpcy5hbmltYXRlU3dpdGNoKHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLmJvdW5jZUJhY2soKTtcbiAgfVxuICBwcmVwYXJlU3dpdGNoKHQpIHtcbiAgICB0aGlzLl9jdXJyZW50TW9udGhJbmRleCArPSB0O1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmV3YXJkU2Nyb2xsVmlldyAmJiAodGhpcy5fcmV3YXJkU2Nyb2xsVmlldy5lbmFibGVkID0gZmFsc2UpO1xuICAgIGlmICgtMSA9PT0gdCkge1xuICAgICAgdGhpcy51cGRhdGVJdGVtRGF0YSh0aGlzLl9tb250aENlbGxJdGVtMiwgdGhpcy5faXRlbU1vbnRoMiwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggLSAxLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlSXRlbURhdGEodGhpcy5fbW9udGhDZWxsSXRlbTAsIHRoaXMuX2l0ZW1Nb250aDAsIHRoaXMuX2N1cnJlbnRNb250aEluZGV4ICsgMSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBhbmltYXRlU3dpdGNoKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgY2MudHdlZW4odGhpcy5fY29udGVudE5vZGUpLnRvKERhaWx5Vmlldy5BTklNQVRJT05fRFVSQVRJT04sIHtcbiAgICAgIHg6IHRoaXMuY2FsY3VsYXRlQ29udGVudFgoKVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLm9uU3dpdGNoQ29tcGxldGUodCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBvblN3aXRjaENvbXBsZXRlKHQpIHtcbiAgICB0aGlzLnN3YXBJdGVtUmVmZXJlbmNlcyh0KTtcbiAgICB0aGlzLnJlc2V0SXRlbXNQb3NpdGlvbigpO1xuICAgIHRoaXMucmVzdG9yZVNjcm9sbFN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVOYXZCdXR0b25zU3RhdGUoKTtcbiAgICB0aGlzLmRlbGVnYXRlLmhhbmRsZUNoYW5nZU1vbnRoKHQgPCAwKTtcbiAgfVxuICBzd2FwSXRlbVJlZmVyZW5jZXModCkge1xuICAgIGlmICgtMSA9PT0gdCkge1xuICAgICAgdmFyIGUgPSBfX3JlYWQoW3RoaXMuX2l0ZW1Nb250aDIsIHRoaXMuX21vbnRoQ2VsbEl0ZW0yXSwgMiksXG4gICAgICAgIGkgPSBlWzBdLFxuICAgICAgICBvID0gZVsxXTtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDIgPSB0aGlzLl9pdGVtTW9udGgxO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTIgPSB0aGlzLl9tb250aENlbGxJdGVtMTtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDEgPSB0aGlzLl9pdGVtTW9udGgwO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTEgPSB0aGlzLl9tb250aENlbGxJdGVtMDtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDAgPSBpO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTAgPSBvO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbiA9IF9fcmVhZChbdGhpcy5faXRlbU1vbnRoMCwgdGhpcy5fbW9udGhDZWxsSXRlbTBdLCAyKTtcbiAgICAgIGkgPSBuWzBdLCBvID0gblsxXTtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDAgPSB0aGlzLl9pdGVtTW9udGgxO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTAgPSB0aGlzLl9tb250aENlbGxJdGVtMTtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDEgPSB0aGlzLl9pdGVtTW9udGgyO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTEgPSB0aGlzLl9tb250aENlbGxJdGVtMjtcbiAgICAgIHRoaXMuX2l0ZW1Nb250aDIgPSBpO1xuICAgICAgdGhpcy5fbW9udGhDZWxsSXRlbTIgPSBvO1xuICAgIH1cbiAgfVxuICByZXN0b3JlU2Nyb2xsU3RhdGUoKSB7XG4gICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9yZXdhcmRTY3JvbGxWaWV3ICYmICh0aGlzLl9yZXdhcmRTY3JvbGxWaWV3LmVuYWJsZWQgPSB0cnVlKTtcbiAgfVxuICB1cGRhdGVOYXZCdXR0b25zU3RhdGUoKSB7XG4gICAgdGhpcy5fYnRuTGVmdCAmJiAodGhpcy5fYnRuTGVmdC5ub2RlLmFjdGl2ZSA9IHRoaXMuX2N1cnJlbnRNb250aEluZGV4ID4gMCk7XG4gICAgdGhpcy5fYnRuUmlnaHQgJiYgKHRoaXMuX2J0blJpZ2h0Lm5vZGUuYWN0aXZlID0gdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPCB0aGlzLl9tb250aERhdGFMaXN0Lmxlbmd0aCAtIDEpO1xuICB9XG4gIGJvdW5jZUJhY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmV3YXJkU2Nyb2xsVmlldyAmJiAodGhpcy5fcmV3YXJkU2Nyb2xsVmlldy5lbmFibGVkID0gZmFsc2UpO1xuICAgIGNjLnR3ZWVuKHRoaXMuX2NvbnRlbnROb2RlKS50byhEYWlseVZpZXcuQU5JTUFUSU9OX0RVUkFUSU9OLCB7XG4gICAgICB4OiB0aGlzLmNhbGN1bGF0ZUNvbnRlbnRYKClcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0LnJlc3RvcmVTY3JvbGxTdGF0ZSgpO1xuICAgICAgdC51cGRhdGVOYXZCdXR0b25zU3RhdGUoKTtcbiAgICAgIHQucmVzZXRJdGVtc1Bvc2l0aW9uKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICByZXNldEl0ZW1zUG9zaXRpb24oKSB7XG4gICAgdGhpcy5faXRlbU1vbnRoMC54ID0gKHRoaXMuX2N1cnJlbnRNb250aEluZGV4IC0gMSkgKiB0aGlzLl9jZWxsV2lkdGggKyB0aGlzLl9jZWxsV2lkdGggLyAyO1xuICAgIHRoaXMuX2l0ZW1Nb250aDEueCA9IHRoaXMuX2N1cnJlbnRNb250aEluZGV4ICogdGhpcy5fY2VsbFdpZHRoICsgdGhpcy5fY2VsbFdpZHRoIC8gMjtcbiAgICB0aGlzLl9pdGVtTW9udGgyLnggPSAodGhpcy5fY3VycmVudE1vbnRoSW5kZXggKyAxKSAqIHRoaXMuX2NlbGxXaWR0aCArIHRoaXMuX2NlbGxXaWR0aCAvIDI7XG4gIH1cbiAgb25TY3JvbGxCZWdhbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zY3JvbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5fbGFzdFNjcm9sbE9mZnNldCA9IHRoaXMuX3Njcm9sbFZpZXdOb2RlLmdldFNjcm9sbE9mZnNldCgpO1xuICAgIH1cbiAgfVxuICBvblNjcm9sbGluZygpIHt9XG4gIG9uU2Nyb2xsRW5kZWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2Nyb2xsaW5nICYmICF0aGlzLl9pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHZhciB0ID0gdGhpcy5fc2Nyb2xsVmlld05vZGUuZ2V0U2Nyb2xsT2Zmc2V0KCkueCAtIHRoaXMuX2xhc3RTY3JvbGxPZmZzZXQueCxcbiAgICAgICAgZSA9IERhdGUubm93KCkgLSB0aGlzLl9zY3JvbGxTdGFydFRpbWUsXG4gICAgICAgIGkgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbERpcmVjdGlvbih0LCBlKTtcbiAgICAgIHRoaXMucGVyZm9ybVBhZ2VTd2l0Y2goaSk7XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVNjcm9sbERpcmVjdGlvbih0LCBlKSB7XG4gICAgdmFyIG8gPSB0aGlzLl9jZWxsV2lkdGggLyBEYWlseVZpZXcuU1dJUEVfVEhSRVNIT0xELFxuICAgICAgbiA9IE1hdGguYWJzKHQpIC8gTWF0aC5tYXgoZSwgMSksXG4gICAgICBhID0gTWF0aC5hYnModCkgPj0gbyxcbiAgICAgIGwgPSBuID49IERhaWx5Vmlldy5TV0lQRV9TUEVFRDtcbiAgICByZXR1cm4gYSB8fCBsID8gdCA+IDAgJiYgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPiAwID8gLTEgOiB0IDwgMCAmJiB0aGlzLl9jdXJyZW50TW9udGhJbmRleCA8IHRoaXMuX21vbnRoRGF0YUxpc3QubGVuZ3RoIC0gMSA/IDEgOiAwIDogMDtcbiAgfVxuICBwZXJmb3JtUGFnZVN3aXRjaCh0KSB7XG4gICAgdGhpcy5zd2l0Y2hNb250aCh0KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlc2V0Q29udGVudFBvc2l0aW9uLmJpbmQodGhpcyksIERhaWx5Vmlldy5BTklNQVRJT05fRFVSQVRJT04gKyBEYWlseVZpZXcuQU5JTUFUSU9OX0JVRkZFUik7XG4gIH1cbiAgcmVzZXRDb250ZW50UG9zaXRpb24oKSB7XG4gICAgdmFyIHQ7XG4gICAgKG51bGwgPT09ICh0ID0gdGhpcy5fc2Nyb2xsVmlld05vZGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY29udGVudCkgJiYgKHRoaXMuX2NvbnRlbnROb2RlLnggPSB0aGlzLmNhbGN1bGF0ZUNvbnRlbnRYKCkpO1xuICB9XG4gIG9uTW9yZUNsaWNrKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuaGFuZGxlTW9yZUNsaWNrKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseVZpZXdfb25QbGF5Q2xpY2tcIilcbiAgb25QbGF5Q2xpY2soKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZSAmJiBjYy5pc1ZhbGlkKHRoaXMuZGVsZWdhdGUucm9vdFZpZXcpICYmIHRoaXMuZGVsZWdhdGUuaGFuZGxlUGxheUNsaWNrKCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciBlO1xuICAgIGlmIChudWxsID09PSAoZSA9IHRoaXMuX3Njcm9sbFZpZXdOb2RlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUpIHtcbiAgICAgIHZhciBpID0gdGhpcy5fc2Nyb2xsVmlld05vZGUubm9kZTtcbiAgICAgIGkub2ZmKFwic2Nyb2xsLWJlZ2FuXCIsIHRoaXMub25TY3JvbGxCZWdhbiwgdGhpcyk7XG4gICAgICBpLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLm9uU2Nyb2xsaW5nLCB0aGlzKTtcbiAgICAgIGkub2ZmKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgICBpLm9mZihcInRvdWNoLWNhbmNlbFwiLCB0aGlzLm9uU2Nyb2xsRW5kZWQsIHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZW50Tm9kZSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fY29udGVudE5vZGUpO1xuICAgIHRoaXMuX21vbnRoRGF0YUxpc3QgPSBbXTtcbiAgICB0aGlzLl9tb250aENlbGxJdGVtMCA9IG51bGw7XG4gICAgdGhpcy5fbW9udGhDZWxsSXRlbTEgPSBudWxsO1xuICAgIHRoaXMuX21vbnRoQ2VsbEl0ZW0yID0gbnVsbDtcbiAgICBEYWlseU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZWxlY3RlZERheSA9IGZhbHNlO1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19