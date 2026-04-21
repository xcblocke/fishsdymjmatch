import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { TableView } from '../../../Scripts/TableView';
import RankItem from './RankItem';
@mj.class
export default class RankListView extends BaseUI {
  _rankDataList = [];
  _cellHeight = 203;
  _cellWidth = 1050;
  _isScrolling = false;
  _scrollEndTimer = null;
  _delegate = null;
  onLoad() {
    super.onLoad.call(this);
    this._scrollView = this.node.getComponent(cc.ScrollView);
    var e = this.node.getContentSize();
    this._cellWidth = e.width;
    this.initTableView();
    this.initScrollEvents();
  }
  setDelegate(t) {
    this._delegate = t;
  }
  initScrollEvents() {
    this._scrollView.node.on("scrolling", this.onScrolling, this);
    this._scrollView.node.on("scroll-ended", this.onScrollEnded, this);
    this._scrollView.node.on("touch-start", this.onTouchStart, this);
  }
  onScrolling() {
    var t = this;
    if (!this._isScrolling) {
      this._isScrolling = true;
      this.setScrollViewInteractable(false);
    }
    if (null !== this._scrollEndTimer) {
      clearTimeout(this._scrollEndTimer);
      this._scrollEndTimer = null;
    }
    this._scrollEndTimer = setTimeout(function () {
      t.onScrollEnded();
    }, 100);
  }
  onScrollEnded() {
    if (this._isScrolling) {
      this._isScrolling = false;
      this.setScrollViewInteractable(true);
    }
    if (null !== this._scrollEndTimer) {
      clearTimeout(this._scrollEndTimer);
      this._scrollEndTimer = null;
    }
  }
  onTouchStart() {
    if (!this._isScrolling) {
      this._isScrolling = true;
      this.setScrollViewInteractable(false);
    }
  }
  setInteractable(t) {
    this.setScrollViewInteractable(t);
  }
  setScrollViewInteractable(t) {
    if (this._scrollView && cc.isValid(this._scrollView.node)) {
      var e = this._scrollView.content;
      e && cc.isValid(e) && this.setNodeInteractable(e, t);
    }
  }
  setNodeInteractable(t, e) {
    if (t && cc.isValid(t)) {
      var o = t.getComponent(cc.Button);
      o && (o.interactable = e);
      for (var n = 0; n < t.children.length; n++) this.setNodeInteractable(t.children[n], e);
    }
  }
  initTableView() {
    var t = this;
    this._tableView = new TableView({
      view: this._scrollView,
      isReused: true,
      isCellActive: false
    });
    this._tableView.cellSizeForTable = function () {
      return cc.size(t._cellWidth, t._cellHeight);
    };
    this._tableView.numberOfCellsInTableView = function () {
      return t._rankDataList.length;
    };
    this._tableView.cellAtIndex = function (e, o) {
      var n = t._tableView.dequeueCellByKey("rank");
      n || (n = RankItem.createCell("rank"));
      var a = n.getComponent(RankItem);
      if (a) {
        a.setDelegate(t._delegate);
        a.updateCell(t._rankDataList[o]);
      }
      return n;
    };
  }
  refreshList(t) {
    this._rankDataList = t;
    this._tableView.reloadData();
  }
  onDestroy() {
    if (this._scrollView && cc.isValid(this._scrollView.node)) {
      this._scrollView.node.off("scrolling", this.onScrolling, this);
      this._scrollView.node.off("scroll-ended", this.onScrollEnded, this);
      this._scrollView.node.off("touch-start", this.onTouchStart, this);
    }
    if (null !== this._scrollEndTimer) {
      clearTimeout(this._scrollEndTimer);
      this._scrollEndTimer = null;
    }
    super.onDestroy && super.onDestroy.call(this);
  }
}