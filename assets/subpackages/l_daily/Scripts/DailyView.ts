import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import UIView from '../../../Scripts/framework/ui/UIView';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import DailyModel from './DailyModel';
import { EDailyAudioID } from './DailyTypes';
import DailyMonthCellItem from './DailyMonthCellItem';
import DailyRewardListView from './DailyRewardListView';
@mj.class
export default class DailyView extends UIView {
  @mj.component("node_top/txt_title", cc.Label)
  _txtTitle: "node_top/txt_title" = null;
  @mj.component("node_center/img_reward", cc.Sprite)
  _imgReward: "node_center/img_reward" = null;
  @mj.component("node_center/img_reward", cc.Button)
  _imgBtnReward: "node_center/img_reward" = null;
  @mj.component("node_bottom/txt_day", cc.Label)
  _txtDay: "node_bottom/txt_day" = null;
  @mj.component("node_topBtn/btn_left", cc.Button)
  _btnLeft: "node_topBtn/btn_left" = null;
  @mj.component("node_topBtn/btn_right", cc.Button)
  _btnRight: "node_topBtn/btn_right" = null;
  @mj.component("node_top/btn_back", cc.Button)
  _btnBack: "node_top/btn_back" = null;
  @mj.component("node_top/btn_more", cc.Button)
  _btnMore: "node_top/btn_more" = null;
  @mj.component("node_bottom/btn_play", cc.Button)
  _btnPlay: "node_bottom/btn_play" = null;
  @mj.component("node_bottom/btn_play/img_btn_play/label", cc.Label)
  _txtPlayBtn: "node_bottom/btn_play/img_btn_play/label" = null;
  @mj.component("nodeRewardView", cc.ScrollView)
  _rewardScrollView: "nodeRewardView" = null;
  @mj.component("nodeCollectView", cc.ScrollView)
  _scrollViewNode: "nodeCollectView" = null;
  @mj.node("nodeCollectView/view/content/item_month0")
  _itemMonth0: "nodeCollectView/view/content/item_month0" = null;
  @mj.node("nodeCollectView/view/content/item_month1")
  _itemMonth1: "nodeCollectView/view/content/item_month1" = null;
  @mj.node("nodeCollectView/view/content/item_month2")
  _itemMonth2: "nodeCollectView/view/content/item_month2" = null;
  @mj.node("nodeCollectView/view/content")
  _contentNode: "nodeCollectView/view/content" = null;
  @mj.node("img_bottomBg")
  _imgBottomBg: "img_bottomBg" = null;
  @mj.node("eff_light")
  _effLight: "eff_light" = null;
  _monthCellItem0 = null;
  _monthCellItem1 = null;
  _monthCellItem2 = null;
  _monthDataList = [];
  _currentMonthIndex = 0;
  _cellWidth = 750;
  _cellHeight = 600;
  _isAnimating = false;
  _isScrolling = false;
  _scrollStartTime = 0;
  _lastScrollOffset = cc.v2(0, 0);
  _dailyRewardListView = null;
  static prefabUrl = "prefabs/daily/DailyView";
  static bundleName = "mainRes";
  static ANIMATION_DURATION = 0.2;
  static ANIMATION_BUFFER = 0.05;
  static SWIPE_THRESHOLD = 4;
  static SWIPE_SPEED = 0.5;
  @mj.traitEvent("DailyView_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.initView();
  }
  initView() {
    this.initScrollView();
    this.initMonthItems();
    this.registerEvents();
    this.registerScrollEvents();
    this.initRewardScrollView();
    this.initMonthCellsFrameBased();
  }
  initRewardScrollView() {
    this._dailyRewardListView = this._rewardScrollView.addComponent(DailyRewardListView);
    this._dailyRewardListView.dailyScrollView = this._scrollViewNode;
    this._dailyRewardListView.delegate = this.delegate;
  }
  initScrollView() {
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
  }
  initMonthItems() {
    var t, e, i;
    this._monthCellItem0 = this.initMonthItem(this._itemMonth0, -this._cellWidth);
    this._monthCellItem1 = this.initMonthItem(this._itemMonth1, 0);
    this._monthCellItem2 = this.initMonthItem(this._itemMonth2, this._cellWidth);
    var o = this.onDaySelect.bind(this);
    null === (t = this._monthCellItem0) || void 0 === t || t.setDaySelectCallback(o);
    null === (e = this._monthCellItem1) || void 0 === e || e.setDaySelectCallback(o);
    null === (i = this._monthCellItem2) || void 0 === i || i.setDaySelectCallback(o);
  }
  initMonthItem(t, e) {
    if (!t) return null;
    var i = t.getComponent(DailyMonthCellItem);
    i || (i = t.addComponent(DailyMonthCellItem));
    t.x = e;
    t.active = false;
    return i;
  }
  initMonthCellsFrameBased() {
    var t = [this._monthCellItem1, this._monthCellItem0, this._monthCellItem2];
    this.initNextMonthCell(t, 0);
  }
  initNextMonthCell(t, e) {
    var i = this;
    if (cc.isValid(this.node) && !(e >= t.length)) {
      var o = t[e];
      if (o && !o.isInitialized()) {
        o.initViewAsync().then(function () {
          return i.scheduleNextItem(t, e);
        }).catch(function (o) {
          return i.handleInitError(t, e, o);
        });
      } else {
        this.scheduleNextItem(t, e);
      }
    }
  }
  scheduleNextItem(t, e) {
    var i = this;
    cc.isValid(this.node) && this.scheduleOnce(function () {
      i.initNextMonthCell(t, e + 1);
    }, 0);
  }
  handleInitError(t, e) {
    this.scheduleNextItem(t, e);
  }
  registerEvents() {
    this.OnButtonClick(this._btnBack.node, this.onBackClick.bind(this));
    this.OnButtonClick(this._btnPlay.node, {
      func: this.onPlayClick.bind(this),
      clickAudio: EDailyAudioID.DailyDay
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
  }
  registerScrollEvents() {
    if (this._scrollViewNode) {
      var t = this._scrollViewNode.node;
      t.on("scroll-began", this.onScrollBegan, this);
      t.on("scrolling", this.onScrolling, this);
      t.on("scroll-ended", this.onScrollEnded, this);
      t.on("touch-cancel", this.onScrollEnded, this);
    }
  }
  showView() {
    if (this._effLight) {
      this._effLight.opacity = 50;
      cc.tween(this._effLight).to(0.4, {
        opacity: 255
      }).start();
    }
  }
  showMonthList(t) {
    this._monthDataList = t;
    this._dailyRewardListView.showMonthList(t);
    this._dailyRewardListView.delegate = this.delegate;
  }
  scrollToMonth(t, e = true) {
    this._dailyRewardListView.scrollToMonth(t, e);
    var i = this._monthDataList.findIndex(function (e) {
      return e.id === t;
    });
    if (!(i < 0)) {
      this._currentMonthIndex = i;
      this.updateThreeItems();
    }
  }
  updateThreeItems() {
    this.updateItemData(this._monthCellItem0, this._itemMonth0, this._currentMonthIndex - 1, false);
    this.updateItemData(this._monthCellItem1, this._itemMonth1, this._currentMonthIndex, true);
    this.updateItemData(this._monthCellItem2, this._itemMonth2, this._currentMonthIndex + 1, false);
    this._contentNode.width = this._cellWidth * this._monthDataList.length;
    this._contentNode.x = this.calculateContentX();
    this.resetItemsPosition();
  }
  updateItemData(t, e, i, o) {
    if (t && e) if (i >= 0 && i < this._monthDataList.length) {
      t.updateCell(this._monthDataList[i], o);
      e.active = true;
    } else e.active = false;
  }
  calculateContentX() {
    return -this._currentMonthIndex * this._cellWidth - this._cellWidth / 2;
  }
  refreshMonth(t, e) {
    this._dailyRewardListView.refreshMonth(t, e);
    var i = this._monthDataList.findIndex(function (e) {
      return e.id === t;
    });
    if (!(i < 0)) {
      this._monthDataList[i] = e;
      var o = i - this._currentMonthIndex;
      if (0 === o) {
        this._monthCellItem1.updateCell(e, true);
      } else {
        if (-1 === o) {
          this._monthCellItem0.updateCell(e, false);
        } else {
          1 === o && this._monthCellItem2.updateCell(e, false);
        }
      }
    }
  }
  updateReward() {}
  updatePlayButton(t) {
    this._txtPlayBtn && (this._txtPlayBtn.string = t.text);
    this._btnPlay && (this._btnPlay.interactable = t.enabled);
  }
  updateMonth(t, e, i, o) {
    var n = DataReader.getByKey(ConfigType.daily_challenge, t);
    if (n) {
      this._txtDay && (this._txtDay.string = GameUtils.formatDateStringToLanguage(n.Year + "-" + n.Month + "-" + o, null, true, false) || "");
      this.loadRewardIcon(this._imgReward, e, i);
    }
  }
  loadRewardIcon(t, e, i) {
    if (DataReader.getByKey(ConfigType.item_config, e)) {
      var o = DailyModel.getInstance().getItemIconUrl(e);
      BaseSprite.refreshWithNode(t.node, o);
      if (i) {
        this.removeGrayEffect(t);
      } else {
        this.applyGrayEffect(t);
      }
      t.node.opacity = 255;
    }
  }
  updateCellRewardIcon(t, e, i) {
    t && t.updateCell(e, i);
  }
  applyGrayEffect(t) {
    t && cc.isValid(t.node) && t.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
  }
  removeGrayEffect(t) {
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
  }
  updateNavButtons(t) {
    this._btnLeft && (this._btnLeft.node.active = t.leftEnabled);
    this._btnRight && (this._btnRight.node.active = t.rightEnabled);
  }
  onDaySelect(t, e) {
    this.delegate.handleDaySelect(t, e);
  }
  onBackClick() {
    this.delegate.closeView();
  }
  onLeftClick() {
    if (!(this._isAnimating || this._currentMonthIndex <= 0)) {
      mj.audioManager.playEffect(EDailyAudioID.DailyMonthSlide);
      this.delegate.handleChangeMonth(true);
    }
  }
  onRightClick() {
    if (!(this._isAnimating || this._currentMonthIndex >= this._monthDataList.length - 1)) {
      mj.audioManager.playEffect(EDailyAudioID.DailyMonthSlide);
      this.delegate.handleChangeMonth(false);
    }
  }
  switchMonth(t) {
    if (0 !== t) {
      if (!(-1 === t && this._currentMonthIndex <= 0 || 1 === t && this._currentMonthIndex >= this._monthDataList.length - 1)) {
        mj.audioManager.playEffect(EDailyAudioID.DailyMonthSlide);
        cc.Tween.stopAllByTarget(this._contentNode);
        this.prepareSwitch(t);
        this.animateSwitch(t);
      }
    } else this.bounceBack();
  }
  prepareSwitch(t) {
    this._currentMonthIndex += t;
    this._isAnimating = true;
    this._scrollViewNode.enabled = false;
    this._rewardScrollView && (this._rewardScrollView.enabled = false);
    if (-1 === t) {
      this.updateItemData(this._monthCellItem2, this._itemMonth2, this._currentMonthIndex - 1, false);
    } else {
      this.updateItemData(this._monthCellItem0, this._itemMonth0, this._currentMonthIndex + 1, false);
    }
  }
  animateSwitch(t) {
    var e = this;
    cc.tween(this._contentNode).to(DailyView.ANIMATION_DURATION, {
      x: this.calculateContentX()
    }, {
      easing: "backOut"
    }).call(function () {
      return e.onSwitchComplete(t);
    }).start();
  }
  onSwitchComplete(t) {
    this.swapItemReferences(t);
    this.resetItemsPosition();
    this.restoreScrollState();
    this.updateNavButtonsState();
    this.delegate.handleChangeMonth(t < 0);
  }
  swapItemReferences(t) {
    if (-1 === t) {
      var e = __read([this._itemMonth2, this._monthCellItem2], 2),
        i = e[0],
        o = e[1];
      this._itemMonth2 = this._itemMonth1;
      this._monthCellItem2 = this._monthCellItem1;
      this._itemMonth1 = this._itemMonth0;
      this._monthCellItem1 = this._monthCellItem0;
      this._itemMonth0 = i;
      this._monthCellItem0 = o;
    } else {
      var n = __read([this._itemMonth0, this._monthCellItem0], 2);
      i = n[0], o = n[1];
      this._itemMonth0 = this._itemMonth1;
      this._monthCellItem0 = this._monthCellItem1;
      this._itemMonth1 = this._itemMonth2;
      this._monthCellItem1 = this._monthCellItem2;
      this._itemMonth2 = i;
      this._monthCellItem2 = o;
    }
  }
  restoreScrollState() {
    this._isAnimating = false;
    this._scrollViewNode.enabled = true;
    this._rewardScrollView && (this._rewardScrollView.enabled = true);
  }
  updateNavButtonsState() {
    this._btnLeft && (this._btnLeft.node.active = this._currentMonthIndex > 0);
    this._btnRight && (this._btnRight.node.active = this._currentMonthIndex < this._monthDataList.length - 1);
  }
  bounceBack() {
    var t = this;
    this._isAnimating = true;
    this._scrollViewNode.enabled = false;
    this._rewardScrollView && (this._rewardScrollView.enabled = false);
    cc.tween(this._contentNode).to(DailyView.ANIMATION_DURATION, {
      x: this.calculateContentX()
    }, {
      easing: "backOut"
    }).call(function () {
      t.restoreScrollState();
      t.updateNavButtonsState();
      t.resetItemsPosition();
    }).start();
  }
  resetItemsPosition() {
    this._itemMonth0.x = (this._currentMonthIndex - 1) * this._cellWidth + this._cellWidth / 2;
    this._itemMonth1.x = this._currentMonthIndex * this._cellWidth + this._cellWidth / 2;
    this._itemMonth2.x = (this._currentMonthIndex + 1) * this._cellWidth + this._cellWidth / 2;
  }
  onScrollBegan() {
    if (!this._isAnimating) {
      this._isScrolling = true;
      this._scrollStartTime = Date.now();
      this._lastScrollOffset = this._scrollViewNode.getScrollOffset();
    }
  }
  onScrolling() {}
  onScrollEnded() {
    if (this._isScrolling && !this._isAnimating) {
      this._isScrolling = false;
      var t = this._scrollViewNode.getScrollOffset().x - this._lastScrollOffset.x,
        e = Date.now() - this._scrollStartTime,
        i = this.calculateScrollDirection(t, e);
      this.performPageSwitch(i);
    }
  }
  calculateScrollDirection(t, e) {
    var o = this._cellWidth / DailyView.SWIPE_THRESHOLD,
      n = Math.abs(t) / Math.max(e, 1),
      a = Math.abs(t) >= o,
      l = n >= DailyView.SWIPE_SPEED;
    return a || l ? t > 0 && this._currentMonthIndex > 0 ? -1 : t < 0 && this._currentMonthIndex < this._monthDataList.length - 1 ? 1 : 0 : 0;
  }
  performPageSwitch(t) {
    this.switchMonth(t);
    this.scheduleOnce(this.resetContentPosition.bind(this), DailyView.ANIMATION_DURATION + DailyView.ANIMATION_BUFFER);
  }
  resetContentPosition() {
    var t;
    (null === (t = this._scrollViewNode) || void 0 === t ? void 0 : t.content) && (this._contentNode.x = this.calculateContentX());
  }
  onMoreClick() {
    this.delegate.handleMoreClick();
  }
  @mj.traitEvent("DailyView_onPlayClick")
  onPlayClick() {
    this.delegate && cc.isValid(this.delegate.rootView) && this.delegate.handlePlayClick();
  }
  onDestroy() {
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
    DailyModel.getInstance().isSelectedDay = false;
    super.onDestroy.call(this);
  }
}