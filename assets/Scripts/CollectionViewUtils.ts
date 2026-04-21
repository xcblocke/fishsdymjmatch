export class CollectionViewUtils {
  _isCreating = false;
  _createdCellMap = {};
  _waitCreateQueue = [];
  _recycleQueue = {};
  _frameIndexInfo = [0, 0, 0, 0];
  _isReload = false;
  _isCreateAllOver = false;
  _zoomIng = false;
  _cellNumSize = new cc.Size(0, 0);
  _cellSize = new cc.Size(0, 0);
  _viewSize = new cc.Size(0, 0);
  _isReuse = false;
  _isSchedule = false;
  _extraOffset = 0;
  _minScale = 0;
  _maxScale = 2;
  _moveTimeForPerCell = 0;
  _reloadDataSchedule = false;
  _isCreateAll = false;
  _scheduleTime = 0;
  _isCellUseActive = false;
  _view = null;
  _delegate = null;
  _innerContainerSize = new cc.Size(this._cellSize.width * this._cellNumSize.width, this._cellSize.height * this._cellNumSize.height);
  _visibleRect = null;
  _callback1 = null;
  constructor(e) {
    this._view = e.view;
    this._delegate = e.delegate;
    this._cellSize = e.cellSize;
    this._isReuse = e.isReuse;
    this._isSchedule = e.isSchedule || false;
    this._reloadDataSchedule = e.reloadDataSchedule;
    this._isCreateAll = e.isCreateAll;
    e.cellNumSize && (this._cellNumSize = e.cellNumSize);
    "number" == typeof e.extraOffset && (this._extraOffset = e.extraOffset);
    "number" == typeof e.minScale && (this._minScale = e.minScale);
    "number" == typeof e.maxScale && (this._maxScale = e.maxScale);
    "number" == typeof e.moveTimeForPerCell && (this._moveTimeForPerCell = e.moveTimeForPerCell);
    void 0 !== e.isCellActive && (this._isCellUseActive = e.isCellActive);
    this._view.content.setContentSize(this._innerContainerSize);
    this.resetViewSize();
    this._view.node.on("scrolling", this.onEventForCollectionView.bind(this));
  }
  resetViewSize() {
    this._viewSize = this._view.node.getContentSize();
    this._visibleRect = new cc.Rect(0, 0, this._viewSize.width, this._viewSize.height);
    this._scheduleTime = this._moveTimeForPerCell / (this._viewSize.width / this._cellSize.width + this._viewSize.height / this._cellSize.height + 2) * 0.5;
  }
  onEventForCollectionView(e = {}) {
    if (this._isReload && !this._zoomIng) {
      this._delegate.onEventForCollectionView && this._delegate.onEventForCollectionView();
      var t = e.immediately;
      this.checkUpdateCell(t);
    }
  }
  reloadData(e = false) {
    this._isCreating = false;
    this._isCreateAllOver = false;
    for (var t in this._createdCellMap) (o = this._createdCellMap[Number(t)]) instanceof cc.Node && o.destroy();
    for (var t in this._recycleQueue) {
      var o;
      if (o = this._recycleQueue[Number(t)]) for (var n = 0; n < o.length; n++) {
        var i = o[n];
        i instanceof cc.Node && i.destroy();
      }
    }
    this._recycleQueue = {};
    this._createdCellMap = {};
    this._waitCreateQueue = [];
    this._frameIndexInfo = [0, 0, 0, 0];
    this._view.unschedule(this._callback2);
    this._delegate.numSizeOfCells && (this._cellNumSize = this._delegate.numSizeOfCells());
    var r = this._view.content,
      a = this._view.getContentPosition(),
      l = r.scale,
      s = this._cellSize.width * this._cellNumSize.width,
      c = this._cellSize.height * this._cellNumSize.height;
    this._innerContainerSize = new cc.Size(s, c);
    var u = new cc.Size(this._innerContainerSize.width * l, this._innerContainerSize.height * l);
    this._view.content.setContentSize(u);
    this._view.setContentPosition(a);
    if (e) {
      var p = new cc.Vec2(0, this._viewSize.height - this._innerContainerSize.height);
      this._view.setContentPosition(p);
    }
    this._isReload = true;
    this.checkUpdateCell(!this._reloadDataSchedule);
  }
  setExtraOffset(e) {
    this._extraOffset = e;
  }
  getCellByRowAndCol(e, t) {
    var o = e * this._cellNumSize.width + t;
    return this._createdCellMap[o];
  }
  dequeueCellByKey(e) {
    e = e || "def";
    var t = this._recycleQueue[e];
    return t && t.length > 0 ? t.pop() : null;
  }
  getCountOfCell() {
    var e = 0;
    for (var t in this._createdCellMap) true === this._createdCellMap[Number(t)] && (e += 1);
    return e;
  }
  getCurrentCells() {
    var e = [];
    for (var t in this._createdCellMap) {
      var o = this._createdCellMap[Number(t)];
      o instanceof cc.Node && e.push(o);
    }
    return e;
  }
  zoomScaleByTime(e, t, o) {
    var n = this._view.content;
    o = o || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
    if (e != n.scale) {
      var i = n.scale,
        r = e - i,
        a = new Date();
      this._callback1 && this._view.unschedule(this._callback1);
      this._callback1 = function () {
        var e = (new Date().getTime() - a.getTime()) / 1000 / t,
          n = i + r * (e = e > 1 ? 1 : e);
        this.setZoomScale(n, o);
        e >= 1 && this._view.unschedule(this._callback1);
      };
      this._view.schedule(this._callback1, 0);
    }
  }
  zoomScaleToCenterByTime(e, t, o, n, i, r, a) {
    o = o || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
    n = n || o;
    var l = this._view.content,
      s = l.scale,
      c = 0;
    e && e > 0 && (c = e - s);
    var u = new cc.Vec2(n.x - o.x, n.y - o.y),
      p = new Date().getTime() / 1000,
      f = p;
    this._callback1 && this._view.unschedule(this._callback1);
    this._zoomIng = true;
    this._callback1 = function () {
      var e = new Date().getTime() / 1000,
        n = e;
      e - p > t && (n = p + t);
      var d = n - f;
      f = n;
      var h = d / t;
      if (r && e - p >= r) {
        i && i();
        i = null;
      }
      if (e - p >= t) {
        this._view.unschedule(this._callback1);
        i && i();
        i = null;
        a && a();
        a = null;
      }
      var y,
        m = new cc.Vec2(u.x * h, u.y * h),
        v = this._view.content.node.position;
      if (0 != c) {
        var g = s + c * h,
          _ = Math.max(this._minScale, Math.min(this._maxScale, g));
        s = g;
        if ((y = cc.size(this._innerContainerSize.width * _, this._innerContainerSize.height * _)).height < this._viewSize.height || y.width < this._viewSize.width) return;
        this._zoomIng = true;
        var T = l.convertToNodeSpaceAR(o);
        l.scale = _;
        this._view.content.size = y;
        var C = l.convertToWorldSpaceAR(T),
          b = o.sub(C),
          E = m.add(b);
        o = o.add(m);
        v = this._view.content.position.add(E);
      } else {
        this._zoomIng = true;
        y = cc.size(this._innerContainerSize.width, this._innerContainerSize.height);
        o = o.add(m);
        v = v.add(m);
      }
      v.x = v.x > 0 ? 0 : v.x;
      v.y = v.y > 0 ? 0 : v.y;
      var S = this._viewSize.width - y.width,
        I = this._viewSize.height - y.height;
      v.x = v.x < S ? S : v.x;
      v.y = v.y < I ? I : v.y;
      this._view.content.position = v;
      this._zoomIng = false;
      this.checkUpdateCell();
    };
    this._view.schedule(this._callback1, 0);
  }
  setZoomScale(e, t) {
    var o = this._view.content;
    t = t || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
    if (e != o.scale) {
      var n = Math.max(this._minScale, Math.min(this._maxScale, e)),
        i = cc.size(this._innerContainerSize.width * n, this._innerContainerSize.height * n);
      if (!(i.height < this._viewSize.height || i.width < this._viewSize.width)) {
        this._zoomIng = true;
        var r = o.convertToNodeSpaceAR(t);
        o.scale = n;
        this._view.content.width = i.width;
        this._view.content.height = i.height;
        var a = o.convertToWorldSpaceAR(r),
          l = t.sub(a),
          s = this._view.content.position.add(l);
        s.x = s.x > 0 ? 0 : s.x;
        s.y = s.y > 0 ? 0 : s.y;
        var c = this._viewSize.width - i.width,
          u = this._viewSize.height - i.height;
        s.x = s.x < c ? c : s.x;
        s.y = s.y < u ? u : s.y;
        this._view.content.position = s;
        this._zoomIng = false;
        this.checkUpdateCell();
      }
    }
  }
  createCellByInfo(e, t) {
    var o = e[0] * this._cellNumSize.width + e[1],
      n = this._cellNumSize.height - 1 - e[0],
      i = this._delegate.cellAtIndex(this._view, n, e[1]);
    i.anchorX = 0;
    i.anchorY = 0;
    i.setPosition(new cc.Vec2(e[1] * this._cellSize.width, e[0] * this._cellSize.height));
    i.parent || this._view.content.addChild(i);
    this._createdCellMap[o] = i;
    this._setCellActive(i, false);
    if (!t || e[1] >= this._frameIndexInfo[0] && e[1] <= this._frameIndexInfo[1] && e[0] >= this._frameIndexInfo[2] && e[0] <= this._frameIndexInfo[3]) {
      this._setCellActive(i, true);
      this._delegate.cellWillShow && this._delegate.cellWillShow(this._view, n, e[1], i);
    }
  }
  createCellImmediate() {
    for (var e = this, t = function t() {
        var t = e._waitCreateQueue.pop();
        if (!t) {
          e._isCreating = false;
          return false;
        }
        e.createCellByInfo(t, true);
        return true;
      }; t(););
  }
  createCellByQueue() {
    if (this._waitCreateQueue.length > 0 && !this._isCreating) {
      this._isCreating = true;
      this._callback2 && this._view.unschedule(this._callback2);
      var e = new Date().getTime() / 1000,
        t = this;
      this._callback2 = function () {
        for (var o = function o() {
            var e = t._waitCreateQueue.pop();
            if (!e) {
              t._view.unschedule(t._callback2);
              t._isCreating = false;
              return false;
            }
            t.createCellByInfo(e, true);
            return true;
          }, n = new Date(); o() && n.getTime() - e < 0.06666666666666667;);
        e = n.getTime() / 1000;
      };
      this._view.schedule(this._callback2, this._scheduleTime || 0);
    }
  }
  reFreshCurCells(e) {
    for (var t in this._createdCellMap) if (this._createdCellMap.hasOwnProperty(Number(t))) {
      var o = this._createdCellMap[Number(t)],
        n = Math.floor(Number(t) / this._cellNumSize.width),
        i = Number(t) % this._cellNumSize.width;
      if (o instanceof cc.Node && this._isCellActive(o)) {
        this._setCellActive(o, false);
        this._delegate.cellWillHide && this._delegate.cellWillHide(this._view, n, i, o);
        if (this._isReuse) {
          var r = o.cellType;
          r || (r = "def");
          var a = this._recycleQueue[r] || {};
          a.push(o);
          this._createdCellMap[Number(t)] = null;
          this._recycleQueue[r] = a;
        }
      }
    }
    this.checkUpdateCell(e);
  }
  checkUpdateCell(e) {
    if (this._isReload) {
      var t = this._view.content.getScale(new cc.Vec2()),
        o = this._view.content.position;
      this._visibleRect.x = -o.x < 0 ? 0 : -o.x;
      this._visibleRect.y = -o.y < 0 ? 0 : -o.y;
      this._visibleRect.x /= t.x;
      this._visibleRect.y /= t.y;
      this._visibleRect.height = this._viewSize.height / t.y;
      this._visibleRect.width = this._viewSize.width / t.x;
      this._visibleRect.x = Math.min(this._visibleRect.x, this._innerContainerSize.width - this._viewSize.width / t.x);
      this._visibleRect.y = Math.min(this._visibleRect.y, this._innerContainerSize.height - this._viewSize.height / t.y);
      var n = this._visibleRect.y + this._visibleRect.height,
        i = this._visibleRect.y,
        r = this._visibleRect.x,
        a = this._visibleRect.x + this._visibleRect.width;
      if (this._extraOffset) {
        n + this._extraOffset <= this._innerContainerSize.height && (n += this._extraOffset);
        i - this._extraOffset >= 0 && (i -= this._extraOffset);
        r - this._extraOffset >= 0 && (r -= this._extraOffset);
        a + this._extraOffset <= this._innerContainerSize.width && (a += this._extraOffset);
      }
      var l = Math.floor(r / this._cellSize.width),
        s = Math.ceil(a / this._cellSize.width);
      s -= 1;
      var c = Math.floor(i / this._cellSize.height),
        u = Math.ceil(n / this._cellSize.height);
      u -= 1;
      l = Math.max(0, l);
      c = Math.max(0, c);
      this._frameIndexInfo = [l, s, c, u];
      for (var p = l; p < s + 1; p++) for (var f = c; f < u + 1; f++) {
        var d = f,
          h = this._cellNumSize.height - 1 - d,
          y = p,
          m = d * this._cellNumSize.width + y,
          v = this._createdCellMap[m];
        if (v) {
          if (1 != v && !this._isCellActive(v)) {
            this._setCellActive(v, true);
            this._delegate.cellWillShow && this._delegate.cellWillShow(this._view, h, y, v);
          }
        } else if (this._isSchedule && !e) {
          this._createdCellMap[m] = true;
          var g = [d, y];
          this._waitCreateQueue.unshift(g);
        } else {
          var _ = this._delegate.cellAtIndex(this._view, h, y);
          _.anchorX = 0;
          _.anchorY = 0;
          this._setCellActive(_, true);
          this._delegate.cellWillShow && this._delegate.cellWillShow(this._view, h, y, _);
          _.setPosition(new cc.Vec2(y * this._cellSize.width, d * this._cellSize.height));
          _.parent || this._view.content.addChild(_);
          this._createdCellMap[m] = _;
        }
      }
      if (this._waitCreateQueue.length > 0 && e) for (;;) {
        if (!(E = this._waitCreateQueue.pop())) {
          this._callback2 && this._view.unschedule(this._callback2);
          this._isCreating = false;
          break;
        }
        this.createCellByInfo(E);
      }
      if (this._isCreateAll && !this._isCreateAllOver) {
        for (p = 0; p < this._cellNumSize.height; p++) for (f = 0; f < this._cellNumSize.width; f++) {
          y = f, m = (d = p) * this._cellNumSize.width + y;
          if (!this._createdCellMap[m]) {
            this._createdCellMap[m] = true;
            this._waitCreateQueue.push([p, f]);
          }
        }
        this._isCreateAllOver = true;
      }
      if (e) {
        this.createCellImmediate();
      } else {
        this.createCellByQueue();
      }
      for (var p in this._createdCellMap) {
        var T = this._createdCellMap[Number(p)];
        d = Math.floor(Number(p) / this._cellNumSize.width), h = this._cellNumSize.height - 1 - d, y = Number(p) % this._cellNumSize.width;
        if (!cc.rect(l, c, s - l, u - c).contains(new cc.Vec2(y, d)) && T instanceof cc.Node) if (this._isCellActive(T)) {
          this._setCellActive(T, false);
          this._delegate.cellWillHide && this._delegate.cellWillHide(this._view, h, y, T);
          if (this._isReuse) {
            var C = T.cellType;
            C || (C = "def");
            var b = this._recycleQueue[C] || [];
            b.push(T);
            delete this._createdCellMap[Number(p)];
            this._recycleQueue[C] = b;
          }
        } else if (!this._isCreateAll) for (f = 0; f < this._waitCreateQueue.length; f++) {
          var E;
          if ((m = (E = this._waitCreateQueue[f])[1] * this._cellNumSize.width + E[2]) === Number(p)) {
            this._waitCreateQueue.splice(f, 1);
            delete this._createdCellMap[m];
            break;
          }
        }
      }
    }
  }
  _isCellActive(e) {
    return this._isCellUseActive ? e.active : 255 === e.opacity;
  }
  _setCellActive(e, t) {
    if (this._isCellUseActive) {
      e.active = t;
    } else {
      e.opacity = t ? 255 : 0;
    }
  }
}