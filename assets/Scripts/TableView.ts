var n = {
  kHorizontal: 0,
  kVertical: 1
};
export class TableView {
  _isCreating = false;
  _isReload = false;
  _isReused = true;
  _viewSize = new cc.Size(0, 0);
  _preInnerContainerSize = null;
  _innerContainerSize = null;
  _direction = n.kHorizontal;
  _countOfItems = 0;
  _vCellsPositions = {};
  _maxBounceDistance = 0;
  _isCellUseActive = false;
  _showIndexOffset = 0;
  _hideMaskSize = false;
  cellSizeForTable = null;
  numberOfCellsInTableView = null;
  cellAtIndex = null;
  scrollViewDidScroll = null;
  cellWillHide = null;
  cellWillShow = null;
  cellWillMove = null;
  _view = null;
  _recycleQueue = null;
  _createdCellMap = null;
  constructor(e) {
    this._view = e.view;
    void 0 !== e.isReused && (this._isReused = e.isReused);
    void 0 !== e.isCellActive && (this._isCellUseActive = e.isCellActive);
    void 0 !== e.showIndexOffset && (this._showIndexOffset = e.showIndexOffset);
    void 0 !== e.hideMaskSize && (this._hideMaskSize = e.hideMaskSize);
    this._viewSize = this._view.node.getContentSize();
    this._view.node.on("scrolling", this.onEventForCollectionView.bind(this));
    this._direction = this._view.horizontal ? n.kHorizontal : n.kVertical;
    this._view.content.destroyAllChildren();
    this._view.cancelInnerEvents = false;
    this.addWidgetForView();
  }
  resetViewSize() {
    this._viewSize = this._view.node.getContentSize();
    this.addWidgetForView();
  }
  onEventForCollectionView() {
    if (this._isReload && this._view && cc.isValid(this._view.node)) {
      this.scrollViewDidScroll && this.scrollViewDidScroll(this._view);
      this.checkUpdateCell(true);
    }
  }
  reloadData(e, t) {
    this._countOfItems = this.numberOfCellsInTableView(this._view);
    this.updateCellPositions();
    this.updateContentPosition(e, t);
    this._isCreating = false;
    for (var o in this._createdCellMap) (n = this._createdCellMap[Number(o)]) instanceof cc.Node && cc.isValid(n) && n.destroy();
    for (var o in this._recycleQueue) {
      var n;
      if (n = this._recycleQueue[Number(o)]) for (var i = 0; i < n.length; i++) {
        var r = n[i];
        r instanceof cc.Node && cc.isValid(n) && r.destroy();
      }
    }
    this._recycleQueue = {};
    this._createdCellMap = {};
    this._isReload = true;
    this.checkUpdateCell();
  }
  initBounceDistance() {
    var e, t, o, n;
    if (this._view.horizontal) {
      null === (t = (e = this._view).setMaxBounceDistance) || void 0 === t || t.call(e, this._viewSize.width / 2);
    } else {
      null === (n = (o = this._view).setMaxBounceDistance) || void 0 === n || n.call(o, this._viewSize.height / 2);
    }
  }
  updateCellPositions() {
    var e = 0,
      t = 0;
    this._vCellsPositions = {};
    switch (this._direction) {
      case n.kHorizontal:
        t = this._viewSize.height;
        for (var o = 0; o < this._countOfItems; o++) {
          this._vCellsPositions[o] = e;
          e += this.cellSizeForTable(this._view, o).width;
        }
        break;
      default:
        e = this._viewSize.width;
        for (o = 0; o < this._countOfItems; o++) {
          var i = this._countOfItems - 1 - o;
          this._vCellsPositions[i] = t;
          t += this.cellSizeForTable(this._view, i).height;
        }
    }
    this._preInnerContainerSize = this._innerContainerSize && this._innerContainerSize || new cc.Size(e, t);
    this._innerContainerSize = new cc.Size(e, t);
  }
  addWidgetForView() {
    var e = this._view.content;
    if (!this._hideMaskSize) {
      var t = e.parent;
      t.setAnchorPoint(new cc.Vec2(0, 0));
      var o = t.getComponent(cc.Widget) || t.addComponent(cc.Widget);
      o.isAlignBottom = true;
      o.isAlignLeft = true;
      o.isAlignTop = true;
      o.isAlignRight = true;
      o.top = 0;
      o.bottom = 0;
      o.left = 0;
      o.right = 0;
      o.updateAlignment();
    }
    e.setAnchorPoint(new cc.Vec2(0, 0));
    e.setPosition(new cc.Vec2(0, 0));
    var i = e.getComponent(cc.Widget) || e.addComponent(cc.Widget);
    if (this._direction == n.kHorizontal) {
      i.top = 0;
      i.bottom = 0;
    } else if (this._direction == n.kVertical) {
      i.left = 0;
      i.right = 0;
    }
    i.updateAlignment();
    this.initBounceDistance();
  }
  updateContentPosition(e, t) {
    this._view.content.setContentSize(this._innerContainerSize);
    if (this._direction == n.kHorizontal) {
      var o = this._viewSize.width - this._innerContainerSize.width,
        i = 0,
        r = o < 0 ? o : 0,
        a = 0;
      e && (a = e.x);
      if (a < r) {
        a = r;
      } else {
        a > i && (a = i);
      }
      this._view.setContentPosition(new cc.Vec2(a, 0));
    } else {
      var l = this._viewSize.height - this._innerContainerSize.height;
      if (l < 0) {
        i = 0;
        l = r = l;
        if (e) if (t) l = e.y;else {
          var s = this._preInnerContainerSize.height - Math.abs(e.y);
          l = -(this._innerContainerSize.height - s);
        }
        if (l <= r) {
          l = r;
        } else {
          l >= i && (l = i);
        }
      }
      this._view.setContentPosition(new cc.Vec2(0, l));
    }
  }
  dequeueCellByKey(e) {
    e = e || "def";
    var t = this._recycleQueue[e];
    return t && t.length > 0 ? t.pop() : null;
  }
  getCellByIndex(e) {
    return this._createdCellMap[e];
  }
  getCountOfCell() {
    return this.getCurrentCells().length;
  }
  getCurrentCells() {
    var e = [];
    for (var t in this._createdCellMap) {
      var o = this._createdCellMap[Number(t)];
      o instanceof cc.Node && o.active && e.push(o);
    }
    return e;
  }
  getContentPosition() {
    return this._view.getContentPosition();
  }
  setContentPosition(e, t = false) {
    this._view.setContentPosition(e);
    this.checkUpdateCell(false, t);
  }
  reFreshCurCells() {
    this.updateCellPositions();
    for (var e in this._createdCellMap) {
      var t = Number(e),
        o = this._createdCellMap[t];
      if (o instanceof cc.Node) {
        var n = this.getCellPosition(t);
        o.setPosition(n);
        if (this._isCellActive(o)) {
          this._setCellActive(o, false);
          this.cellWillHide && this.cellWillHide(this._view, t, o);
          if (this._isReused) {
            var i = o.cellType;
            i || (i = "def");
            var r = this._recycleQueue[i] || [];
            r.push(o);
            this._createdCellMap[t] = null;
            this._recycleQueue[i] = r;
          }
        }
      }
    }
    this.checkUpdateCell();
  }
  getStartNEndIndex() {
    if (0 == this._countOfItems) return {
      startIndex: 0,
      endIndex: 0
    };
    var e = null,
      t = null;
    if (this._direction == n.kHorizontal) {
      var o = this._view.getContentPosition().x;
      if (o > 0) {
        e = 0;
        for (var i = this._countOfItems - 1; i >= 0; i--) {
          var r = this._vCellsPositions[i];
          if (null === t && r <= this._viewSize.width - o) {
            t = i;
            break;
          }
        }
        t += 1;
      } else {
        var a = Math.abs(o),
          l = a + this._viewSize.width;
        for (i = 0; i < this._countOfItems; i++) {
          r = this._vCellsPositions[i];
          var s = this.cellSizeForTable(this._view, i).width;
          if (null === e && r + s >= a) {
            e = i;
            break;
          }
        }
        for (i = this._countOfItems - 1; i >= 0; i--) {
          r = this._vCellsPositions[i];
          if (null === t && r <= l) {
            t = i;
            break;
          }
        }
        null === t && (t = e);
        t += 1;
      }
    } else {
      var c = this._view.getContentPosition().y;
      c > 0 && (c = 0);
      var u = Math.abs(c),
        p = u + this._viewSize.height;
      for (i = 0; i < this._countOfItems; i++) {
        r = this._vCellsPositions[i];
        if (null === e && r <= p) {
          e = i;
          break;
        }
      }
      if (this._innerContainerSize.height <= this._viewSize.height) t = this._countOfItems - 1;else for (i = this._countOfItems - 1; i >= 0; i--) {
        r = this._vCellsPositions[i];
        var f = this.cellSizeForTable(this._view, i).height;
        if (null === t && r + f >= u) {
          t = i;
          break;
        }
      }
      null === t && (t = e);
      t += 1;
    }
    return {
      startIndex: Math.max(e - this._showIndexOffset, 0),
      endIndex: Math.min(t + this._showIndexOffset, this._countOfItems)
    };
  }
  checkUpdateCell(e = false, t = false) {
    if (this._isReload) {
      for (var o = this.getStartNEndIndex(), n = o.startIndex, i = o.endIndex, r = n; r < i; r++) {
        var a = this._createdCellMap[r];
        if (a) {
          if (!this._isCellActive(a) || this._isCellActive(a) && t) {
            this._setCellActive(a, true);
            this.cellWillShow && this.cellWillShow(this._view, r, a);
          }
        } else {
          var l = this.cellAtIndex(this._view, r);
          this._setCellActive(l, true);
          l.anchorX = 0;
          l.anchorY = 0;
          var s = this.getCellPosition(r);
          l.setPosition(s);
          l.parent || this._view.content.addChild(l);
          this.cellWillShow && this.cellWillShow(this._view, r, l);
          this._createdCellMap[r] = l;
        }
        e && a instanceof cc.Node && this._isCellActive(a) && this.cellWillMove && this.cellWillMove(this._view, r, a);
      }
      for (var c in this._createdCellMap) {
        r = Number(c);
        var u = this._createdCellMap[r];
        if ((r < n || r > i - 1) && u instanceof cc.Node && this._isCellActive(u)) {
          this._setCellActive(u, false);
          this.cellWillHide && this.cellWillHide(this._view, r, u);
          if (this._isReused) {
            var p = u.cellType;
            p || (p = "def");
            var f = this._recycleQueue[p] || [];
            f.push(u);
            this._createdCellMap[r] = null;
            this._recycleQueue[p] = f;
          }
        }
      }
    }
  }
  _isCellActive(e) {
    return this._isCellUseActive ? e.active : 255 === e.opacity;
  }
  _setCellActive(e, t) {
    if (this._isCellUseActive) e.active = t;else {
      "number" != typeof e.realScale && (e.realScale = e.scale);
      e.scale = t ? e.realScale : 0;
      e.opacity = t ? 255 : 0;
      e.active = true;
    }
  }
  getCellPosition(e) {
    var t = this._vCellsPositions[e];
    switch (this._direction) {
      case n.kHorizontal:
        return new cc.Vec2(t, 0);
      default:
        return new cc.Vec2(0, t);
    }
  }
  clearCellChildren() {
    this.getCurrentCells().forEach(function (e) {
      e.destroyAllChildren();
    });
  }
  refreshTableView(e, t) {
    this.reloadData();
    for (var o = this.numberOfCellsInTableView(this._view), n = 0, i = 0; i < o; i++) (a = this.getCellByIndex(i)) && a.active && n++;
    var r = t / (n = n || 1);
    for (i = 0; i < o; i++) {
      var a;
      if ((a = this.getCellByIndex(i)) && a.active) {
        cc.Tween.stopAllByTarget(a);
        cc.tween(a).set({
          opacity: 0
        }).delay(e).to(0.1, {
          opacity: 255
        }).start();
        e += r;
      }
    }
  }
  scrollToPos(e) {
    if (this._view) {
      var t = this._view.content.convertToWorldSpaceAR(e),
        o = this._view.node.convertToWorldSpaceAR(cc.Vec2.ZERO).sub(t),
        n = this._view.getScrollOffset().add(o);
      this._view.scrollToOffset(cc.v2(-n.x, n.y), 0.1);
    }
  }
  scrollToOffset(e, t = 0.1) {
    this._view && this._view.scrollToOffset(e, t);
  }
  scrollToBottom(e = 0.1) {
    this._view && this._view.scrollToBottom(e);
  }
  scrollToTop(e = 0.1) {
    this._view && this._view.scrollToTop(e);
  }
  scrollToIndex(e, t = 0.3) {
    if (this._view && !(e < 0 || e >= this._countOfItems)) {
      0 === Object.keys(this._vCellsPositions).length && this.updateCellPositions();
      var o,
        i = this._vCellsPositions[e],
        r = this.cellSizeForTable(this._view, e);
      if (this._direction === n.kHorizontal) {
        var a = i + 0.5 * r.width;
        o = cc.v2(a, 0.5 * r.height);
      } else {
        var l = i + 0.5 * r.height;
        o = cc.v2(0.5 * r.width, l);
      }
      var s,
        c = this._view.content.convertToWorldSpaceAR(o),
        u = this._view.node.convertToWorldSpaceAR(cc.Vec2.ZERO).sub(c),
        p = this._view.getScrollOffset();
      s = this._direction === n.kHorizontal ? cc.v2(p.x - u.x, p.y) : cc.v2(p.x, p.y + u.y);
      this.scrollToOffset(s, t);
    }
  }
}