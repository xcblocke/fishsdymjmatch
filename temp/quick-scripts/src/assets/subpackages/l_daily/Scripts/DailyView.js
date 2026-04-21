"use strict";
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