import { DataReader } from '../../../Scripts/framework/data/DataReader';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import DailyModel from './DailyModel';
import { EDailyAudioID } from './DailyTypes';
import DailyRewardCellItem from './DailyRewardCellItem';
export default class DailyRewardListView extends BaseUI {
  _scrollView = null;
  _contentNode = null;
  _itemReward0 = null;
  _itemReward1 = null;
  _itemReward2 = null;
  _rewardCellItem0 = null;
  _rewardCellItem1 = null;
  _rewardCellItem2 = null;
  _cellWidth = 750;
  _cellHeight = 510;
  delegate = null;
  _monthDataList = [];
  _currentMonthIndex = 0;
  _isAnimating = false;
  _isScrolling = false;
  _scrollStartTime = 0;
  _lastScrollOffset = cc.v2(0, 0);
  dailyScrollView = null;
  static ANIMATION_DURATION = 0.2;
  static ANIMATION_BUFFER = 0.05;
  static SWIPE_THRESHOLD = 4;
  onLoad() {
    super.onLoad.call(this);
    this.initView();
  }
  initView() {
    this.initScrollView();
    this.initRewardItems();
    this.registerScrollEvents();
  }
  initScrollView() {
    this._scrollView = this.node.getComponent(cc.ScrollView);
    this._contentNode = cc.find("view/content", this.node);
    this._itemReward0 = cc.find("view/content/item_reward0", this.node);
    this._itemReward1 = cc.find("view/content/item_reward1", this.node);
    this._itemReward2 = cc.find("view/content/item_reward2", this.node);
    this._scrollView.horizontal = true;
    this._scrollView.vertical = false;
    this._scrollView.enabled = true;
    var t = this._contentNode.getComponent(cc.Layout);
    t && (t.enabled = false);
    var e = this._scrollView.node.getContentSize();
    this._cellWidth = e.width;
    this._cellHeight = e.height;
    var i = this._contentNode;
    if (i) {
      i.anchorX = 0;
      i.anchorY = 0.5;
      i.width = 3 * this._cellWidth;
      i.height = this._cellHeight;
      i.x = -this._cellWidth / 2;
      i.y = 0;
    }
  }
  initRewardItems() {
    this._rewardCellItem0 = this.initRewardItem(this._itemReward0, -this._cellWidth);
    this._rewardCellItem1 = this.initRewardItem(this._itemReward1, 0);
    this._rewardCellItem2 = this.initRewardItem(this._itemReward2, this._cellWidth);
  }
  initRewardItem(t, e) {
    if (!t) return null;
    var i = t.getComponent(DailyRewardCellItem);
    i || (i = t.addComponent(DailyRewardCellItem));
    t.x = e;
    t.active = false;
    return i;
  }
  @mj.traitEvent("DailyRwdLVw_regScrollEvts")
  registerScrollEvents() {
    this.node.on("scroll-began", this.onScrollBegan, this);
    this.node.on("scrolling", this.onScrolling, this);
    this.node.on("scroll-ended", this.onScrollEnded, this);
    this.node.on("touch-cancel", this.onScrollEnded, this);
  }
  showMonthList(t) {
    this._monthDataList = t;
  }
  scrollToMonth(t, e = true) {
    var i = this._monthDataList.findIndex(function (e) {
      return e.id === t;
    });
    if (!(i < 0)) {
      this._currentMonthIndex = i;
      this.updateThreeItems();
    }
  }
  updateThreeItems() {
    this.updateItemData(this._rewardCellItem0, this._itemReward0, this._currentMonthIndex - 1, false);
    this.updateItemData(this._rewardCellItem1, this._itemReward1, this._currentMonthIndex, true);
    this.updateItemData(this._rewardCellItem2, this._itemReward2, this._currentMonthIndex + 1, false);
    this._contentNode.width = this._cellWidth * this._monthDataList.length;
    this._contentNode.x = this.calculateContentX();
    this.resetItemsPosition();
  }
  updateItemData(t, e, i) {
    if (t && e) if (i >= 0 && i < this._monthDataList.length) {
      var o = this._monthDataList[i];
      this.updateCellRewardIcon(t, o);
      e.active = true;
    } else e.active = false;
  }
  calculateContentX() {
    return -this._currentMonthIndex * this._cellWidth - this._cellWidth / 2;
  }
  refreshMonth(t, e) {
    var i = this._monthDataList.findIndex(function (e) {
      return e.id === t;
    });
    if (!(i < 0)) {
      this._monthDataList[i] = e;
      var o = i - this._currentMonthIndex;
      if (0 === o) {
        this.updateCellRewardIcon(this._rewardCellItem1, e);
      } else {
        if (-1 === o) {
          this.updateCellRewardIcon(this._rewardCellItem0, e);
        } else {
          1 === o && this.updateCellRewardIcon(this._rewardCellItem2, e);
        }
      }
    }
  }
  loadRewardIcon(t, e, i) {
    if (DataReader.getByKey(ConfigType.item_config, e)) {
      var o = DailyModel.getInstance().getItemIconUrl(e);
      BaseSprite.refreshWithNode(t.node, o);
      if (i) {
        this.removeGrayEffect(t);
        t.node.opacity = 255;
      } else {
        this.applyGrayEffect(t);
        t.node.opacity = 255;
      }
    }
  }
  updateCellRewardIcon(t, e) {
    if (t) {
      var i = t._imgReward;
      if (i && cc.isValid(i.node)) {
        var o = e.id,
          n = this.delegate.getRewardIconData(o);
        t.updateCell(n);
        this.loadRewardIcon(i, n.rewardId, n.completed);
      }
    }
  }
  applyGrayEffect(t) {
    if (t && cc.isValid(t.node)) {
      var e = cc.Material.getBuiltinMaterial("2d-gray-sprite");
      t.setMaterial(0, e);
    }
  }
  removeGrayEffect(t) {
    if (t && cc.isValid(t.node)) {
      t.setMaterial(0, null);
      if (!t.getMaterial(0)) {
        var e = cc.Material.getBuiltinMaterial("2d-sprite");
        t.setMaterial(0, e);
      }
      t.node.color = cc.Color.WHITE;
      var i = t.spriteFrame;
      if (i) {
        t.spriteFrame = null;
        t.spriteFrame = i;
      }
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
    this._scrollView.enabled = false;
    this.dailyScrollView && (this.dailyScrollView.enabled = false);
    if (-1 === t) {
      this.updateItemData(this._rewardCellItem2, this._itemReward2, this._currentMonthIndex - 1, false);
    } else {
      this.updateItemData(this._rewardCellItem0, this._itemReward0, this._currentMonthIndex + 1, false);
    }
  }
  animateSwitch(t) {
    var i = this;
    cc.tween(this._contentNode).to(DailyRewardListView.ANIMATION_DURATION, {
      x: this.calculateContentX()
    }, {
      easing: "backOut"
    }).call(function () {
      return i.onSwitchComplete(t);
    }).start();
  }
  onSwitchComplete(t) {
    this.swapItemReferences(t);
    this.resetItemsPosition();
    this.restoreScrollState();
    this.delegate.handleChangeMonth(t < 0);
  }
  swapItemReferences(t) {
    if (-1 === t) {
      var e = __read([this._itemReward2, this._rewardCellItem2], 2),
        i = e[0],
        o = e[1];
      this._itemReward2 = this._itemReward1;
      this._rewardCellItem2 = this._rewardCellItem1;
      this._itemReward1 = this._itemReward0;
      this._rewardCellItem1 = this._rewardCellItem0;
      this._itemReward0 = i;
      this._rewardCellItem0 = o;
    } else {
      var n = __read([this._itemReward0, this._rewardCellItem0], 2);
      i = n[0], o = n[1];
      this._itemReward0 = this._itemReward1;
      this._rewardCellItem0 = this._rewardCellItem1;
      this._itemReward1 = this._itemReward2;
      this._rewardCellItem1 = this._rewardCellItem2;
      this._itemReward2 = i;
      this._rewardCellItem2 = o;
    }
  }
  restoreScrollState() {
    this._isAnimating = false;
    this._scrollView.enabled = true;
    this.dailyScrollView && (this.dailyScrollView.enabled = true);
  }
  bounceBack() {
    var t = this;
    this._isAnimating = true;
    this._scrollView.enabled = false;
    this.dailyScrollView && (this.dailyScrollView.enabled = false);
    cc.tween(this._contentNode).to(DailyRewardListView.ANIMATION_DURATION, {
      x: this.calculateContentX()
    }).call(function () {
      t.restoreScrollState();
      t.resetItemsPosition();
    }).start();
  }
  resetItemsPosition() {
    this._itemReward0.x = (this._currentMonthIndex - 1) * this._cellWidth + this._cellWidth / 2;
    this._itemReward1.x = this._currentMonthIndex * this._cellWidth + this._cellWidth / 2;
    this._itemReward2.x = (this._currentMonthIndex + 1) * this._cellWidth + this._cellWidth / 2;
  }
  onScrollBegan() {
    if (!this._isAnimating) {
      this._isScrolling = true;
      this._scrollStartTime = Date.now();
      this._lastScrollOffset = this._scrollView.getScrollOffset();
    }
  }
  onScrolling() {}
  onScrollEnded() {
    if (this._isScrolling && !this._isAnimating) {
      this._isScrolling = false;
      var t = this._scrollView.getScrollOffset().x - this._lastScrollOffset.x,
        e = this.calculateScrollDirection(t);
      this.performPageSwitch(e);
    }
  }
  calculateScrollDirection(t) {
    var i = this._cellWidth / DailyRewardListView.SWIPE_THRESHOLD;
    return Math.abs(t) < i ? 0 : t > 0 && this._currentMonthIndex > 0 ? -1 : t < 0 && this._currentMonthIndex < this._monthDataList.length - 1 ? 1 : 0;
  }
  performPageSwitch(t) {
    this.switchMonth(t);
    this.scheduleOnce(this.resetContentPosition.bind(this), DailyRewardListView.ANIMATION_DURATION + DailyRewardListView.ANIMATION_BUFFER);
  }
  resetContentPosition() {
    this._contentNode && cc.isValid(this._contentNode) && (this._contentNode.x = this.calculateContentX());
  }
  onDestroy() {
    if (this.node) {
      this.node.off("scroll-began", this.onScrollBegan, this);
      this.node.off("scrolling", this.onScrolling, this);
      this.node.off("scroll-ended", this.onScrollEnded, this);
      this.node.off("touch-cancel", this.onScrollEnded, this);
    }
    this._contentNode && cc.Tween.stopAllByTarget(this._contentNode);
    this._monthDataList = [];
    this._rewardCellItem0 = null;
    this._rewardCellItem1 = null;
    this._rewardCellItem2 = null;
    this._isAnimating = false;
    this._isScrolling = false;
    this._currentMonthIndex = 0;
    super.onDestroy.call(this);
  }
}