
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CollectionViewUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd1f58QzhlMYqlGGwuJ4nwJ', 'CollectionViewUtils');
// Scripts/CollectionViewUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionViewUtils = void 0;
var CollectionViewUtils = /** @class */ (function () {
    function CollectionViewUtils(e) {
        this._isCreating = false;
        this._createdCellMap = {};
        this._waitCreateQueue = [];
        this._recycleQueue = {};
        this._frameIndexInfo = [0, 0, 0, 0];
        this._isReload = false;
        this._isCreateAllOver = false;
        this._zoomIng = false;
        this._cellNumSize = new cc.Size(0, 0);
        this._cellSize = new cc.Size(0, 0);
        this._viewSize = new cc.Size(0, 0);
        this._isReuse = false;
        this._isSchedule = false;
        this._extraOffset = 0;
        this._minScale = 0;
        this._maxScale = 2;
        this._moveTimeForPerCell = 0;
        this._reloadDataSchedule = false;
        this._isCreateAll = false;
        this._scheduleTime = 0;
        this._isCellUseActive = false;
        this._view = null;
        this._delegate = null;
        this._innerContainerSize = new cc.Size(this._cellSize.width * this._cellNumSize.width, this._cellSize.height * this._cellNumSize.height);
        this._visibleRect = null;
        this._callback1 = null;
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
    CollectionViewUtils.prototype.resetViewSize = function () {
        this._viewSize = this._view.node.getContentSize();
        this._visibleRect = new cc.Rect(0, 0, this._viewSize.width, this._viewSize.height);
        this._scheduleTime = this._moveTimeForPerCell / (this._viewSize.width / this._cellSize.width + this._viewSize.height / this._cellSize.height + 2) * 0.5;
    };
    CollectionViewUtils.prototype.onEventForCollectionView = function (e) {
        if (e === void 0) { e = {}; }
        if (this._isReload && !this._zoomIng) {
            this._delegate.onEventForCollectionView && this._delegate.onEventForCollectionView();
            var t = e.immediately;
            this.checkUpdateCell(t);
        }
    };
    CollectionViewUtils.prototype.reloadData = function (e) {
        if (e === void 0) { e = false; }
        this._isCreating = false;
        this._isCreateAllOver = false;
        for (var t in this._createdCellMap)
            (o = this._createdCellMap[Number(t)]) instanceof cc.Node && o.destroy();
        for (var t in this._recycleQueue) {
            var o;
            if (o = this._recycleQueue[Number(t)])
                for (var n = 0; n < o.length; n++) {
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
        var r = this._view.content, a = this._view.getContentPosition(), l = r.scale, s = this._cellSize.width * this._cellNumSize.width, c = this._cellSize.height * this._cellNumSize.height;
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
    };
    CollectionViewUtils.prototype.setExtraOffset = function (e) {
        this._extraOffset = e;
    };
    CollectionViewUtils.prototype.getCellByRowAndCol = function (e, t) {
        var o = e * this._cellNumSize.width + t;
        return this._createdCellMap[o];
    };
    CollectionViewUtils.prototype.dequeueCellByKey = function (e) {
        e = e || "def";
        var t = this._recycleQueue[e];
        return t && t.length > 0 ? t.pop() : null;
    };
    CollectionViewUtils.prototype.getCountOfCell = function () {
        var e = 0;
        for (var t in this._createdCellMap)
            true === this._createdCellMap[Number(t)] && (e += 1);
        return e;
    };
    CollectionViewUtils.prototype.getCurrentCells = function () {
        var e = [];
        for (var t in this._createdCellMap) {
            var o = this._createdCellMap[Number(t)];
            o instanceof cc.Node && e.push(o);
        }
        return e;
    };
    CollectionViewUtils.prototype.zoomScaleByTime = function (e, t, o) {
        var n = this._view.content;
        o = o || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
        if (e != n.scale) {
            var i = n.scale, r = e - i, a = new Date();
            this._callback1 && this._view.unschedule(this._callback1);
            this._callback1 = function () {
                var e = (new Date().getTime() - a.getTime()) / 1000 / t, n = i + r * (e = e > 1 ? 1 : e);
                this.setZoomScale(n, o);
                e >= 1 && this._view.unschedule(this._callback1);
            };
            this._view.schedule(this._callback1, 0);
        }
    };
    CollectionViewUtils.prototype.zoomScaleToCenterByTime = function (e, t, o, n, i, r, a) {
        o = o || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
        n = n || o;
        var l = this._view.content, s = l.scale, c = 0;
        e && e > 0 && (c = e - s);
        var u = new cc.Vec2(n.x - o.x, n.y - o.y), p = new Date().getTime() / 1000, f = p;
        this._callback1 && this._view.unschedule(this._callback1);
        this._zoomIng = true;
        this._callback1 = function () {
            var e = new Date().getTime() / 1000, n = e;
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
            var y, m = new cc.Vec2(u.x * h, u.y * h), v = this._view.content.node.position;
            if (0 != c) {
                var g = s + c * h, _ = Math.max(this._minScale, Math.min(this._maxScale, g));
                s = g;
                if ((y = cc.size(this._innerContainerSize.width * _, this._innerContainerSize.height * _)).height < this._viewSize.height || y.width < this._viewSize.width)
                    return;
                this._zoomIng = true;
                var T = l.convertToNodeSpaceAR(o);
                l.scale = _;
                this._view.content.size = y;
                var C = l.convertToWorldSpaceAR(T), b = o.sub(C), E = m.add(b);
                o = o.add(m);
                v = this._view.content.position.add(E);
            }
            else {
                this._zoomIng = true;
                y = cc.size(this._innerContainerSize.width, this._innerContainerSize.height);
                o = o.add(m);
                v = v.add(m);
            }
            v.x = v.x > 0 ? 0 : v.x;
            v.y = v.y > 0 ? 0 : v.y;
            var S = this._viewSize.width - y.width, I = this._viewSize.height - y.height;
            v.x = v.x < S ? S : v.x;
            v.y = v.y < I ? I : v.y;
            this._view.content.position = v;
            this._zoomIng = false;
            this.checkUpdateCell();
        };
        this._view.schedule(this._callback1, 0);
    };
    CollectionViewUtils.prototype.setZoomScale = function (e, t) {
        var o = this._view.content;
        t = t || this._view.node.convertToWorldSpaceAR(new cc.Vec2(0.5 * this._viewSize.width, 0.5 * this._viewSize.height));
        if (e != o.scale) {
            var n = Math.max(this._minScale, Math.min(this._maxScale, e)), i = cc.size(this._innerContainerSize.width * n, this._innerContainerSize.height * n);
            if (!(i.height < this._viewSize.height || i.width < this._viewSize.width)) {
                this._zoomIng = true;
                var r = o.convertToNodeSpaceAR(t);
                o.scale = n;
                this._view.content.width = i.width;
                this._view.content.height = i.height;
                var a = o.convertToWorldSpaceAR(r), l = t.sub(a), s = this._view.content.position.add(l);
                s.x = s.x > 0 ? 0 : s.x;
                s.y = s.y > 0 ? 0 : s.y;
                var c = this._viewSize.width - i.width, u = this._viewSize.height - i.height;
                s.x = s.x < c ? c : s.x;
                s.y = s.y < u ? u : s.y;
                this._view.content.position = s;
                this._zoomIng = false;
                this.checkUpdateCell();
            }
        }
    };
    CollectionViewUtils.prototype.createCellByInfo = function (e, t) {
        var o = e[0] * this._cellNumSize.width + e[1], n = this._cellNumSize.height - 1 - e[0], i = this._delegate.cellAtIndex(this._view, n, e[1]);
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
    };
    CollectionViewUtils.prototype.createCellImmediate = function () {
        for (var e = this, t = function t() {
            var t = e._waitCreateQueue.pop();
            if (!t) {
                e._isCreating = false;
                return false;
            }
            e.createCellByInfo(t, true);
            return true;
        }; t();)
            ;
    };
    CollectionViewUtils.prototype.createCellByQueue = function () {
        if (this._waitCreateQueue.length > 0 && !this._isCreating) {
            this._isCreating = true;
            this._callback2 && this._view.unschedule(this._callback2);
            var e = new Date().getTime() / 1000, t = this;
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
                }, n = new Date(); o() && n.getTime() - e < 0.06666666666666667;)
                    ;
                e = n.getTime() / 1000;
            };
            this._view.schedule(this._callback2, this._scheduleTime || 0);
        }
    };
    CollectionViewUtils.prototype.reFreshCurCells = function (e) {
        for (var t in this._createdCellMap)
            if (this._createdCellMap.hasOwnProperty(Number(t))) {
                var o = this._createdCellMap[Number(t)], n = Math.floor(Number(t) / this._cellNumSize.width), i = Number(t) % this._cellNumSize.width;
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
    };
    CollectionViewUtils.prototype.checkUpdateCell = function (e) {
        if (this._isReload) {
            var t = this._view.content.getScale(new cc.Vec2()), o = this._view.content.position;
            this._visibleRect.x = -o.x < 0 ? 0 : -o.x;
            this._visibleRect.y = -o.y < 0 ? 0 : -o.y;
            this._visibleRect.x /= t.x;
            this._visibleRect.y /= t.y;
            this._visibleRect.height = this._viewSize.height / t.y;
            this._visibleRect.width = this._viewSize.width / t.x;
            this._visibleRect.x = Math.min(this._visibleRect.x, this._innerContainerSize.width - this._viewSize.width / t.x);
            this._visibleRect.y = Math.min(this._visibleRect.y, this._innerContainerSize.height - this._viewSize.height / t.y);
            var n = this._visibleRect.y + this._visibleRect.height, i = this._visibleRect.y, r = this._visibleRect.x, a = this._visibleRect.x + this._visibleRect.width;
            if (this._extraOffset) {
                n + this._extraOffset <= this._innerContainerSize.height && (n += this._extraOffset);
                i - this._extraOffset >= 0 && (i -= this._extraOffset);
                r - this._extraOffset >= 0 && (r -= this._extraOffset);
                a + this._extraOffset <= this._innerContainerSize.width && (a += this._extraOffset);
            }
            var l = Math.floor(r / this._cellSize.width), s = Math.ceil(a / this._cellSize.width);
            s -= 1;
            var c = Math.floor(i / this._cellSize.height), u = Math.ceil(n / this._cellSize.height);
            u -= 1;
            l = Math.max(0, l);
            c = Math.max(0, c);
            this._frameIndexInfo = [l, s, c, u];
            for (var p = l; p < s + 1; p++)
                for (var f = c; f < u + 1; f++) {
                    var d = f, h = this._cellNumSize.height - 1 - d, y = p, m = d * this._cellNumSize.width + y, v = this._createdCellMap[m];
                    if (v) {
                        if (1 != v && !this._isCellActive(v)) {
                            this._setCellActive(v, true);
                            this._delegate.cellWillShow && this._delegate.cellWillShow(this._view, h, y, v);
                        }
                    }
                    else if (this._isSchedule && !e) {
                        this._createdCellMap[m] = true;
                        var g = [d, y];
                        this._waitCreateQueue.unshift(g);
                    }
                    else {
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
            if (this._waitCreateQueue.length > 0 && e)
                for (;;) {
                    if (!(E = this._waitCreateQueue.pop())) {
                        this._callback2 && this._view.unschedule(this._callback2);
                        this._isCreating = false;
                        break;
                    }
                    this.createCellByInfo(E);
                }
            if (this._isCreateAll && !this._isCreateAllOver) {
                for (p = 0; p < this._cellNumSize.height; p++)
                    for (f = 0; f < this._cellNumSize.width; f++) {
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
            }
            else {
                this.createCellByQueue();
            }
            for (var p in this._createdCellMap) {
                var T = this._createdCellMap[Number(p)];
                d = Math.floor(Number(p) / this._cellNumSize.width), h = this._cellNumSize.height - 1 - d, y = Number(p) % this._cellNumSize.width;
                if (!cc.rect(l, c, s - l, u - c).contains(new cc.Vec2(y, d)) && T instanceof cc.Node)
                    if (this._isCellActive(T)) {
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
                    }
                    else if (!this._isCreateAll)
                        for (f = 0; f < this._waitCreateQueue.length; f++) {
                            var E;
                            if ((m = (E = this._waitCreateQueue[f])[1] * this._cellNumSize.width + E[2]) === Number(p)) {
                                this._waitCreateQueue.splice(f, 1);
                                delete this._createdCellMap[m];
                                break;
                            }
                        }
            }
        }
    };
    CollectionViewUtils.prototype._isCellActive = function (e) {
        return this._isCellUseActive ? e.active : 255 === e.opacity;
    };
    CollectionViewUtils.prototype._setCellActive = function (e, t) {
        if (this._isCellUseActive) {
            e.active = t;
        }
        else {
            e.opacity = t ? 255 : 0;
        }
    };
    return CollectionViewUtils;
}());
exports.CollectionViewUtils = CollectionViewUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbGxlY3Rpb25WaWV3VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQTJCRSw2QkFBWSxDQUFDO1FBMUJiLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsY0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsSUFBSSxDQUFD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LElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyRjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQzFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUMzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FB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c291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25WaWV3VXRpbHMge1xuICBfaXNDcmVhdGluZyA9IGZhbHNlO1xuICBfY3JlYXRlZENlbGxNYXAgPSB7fTtcbiAgX3dhaXRDcmVhdGVRdWV1ZSA9IFtdO1xuICBfcmVjeWNsZVF1ZXVlID0ge307XG4gIF9mcmFtZUluZGV4SW5mbyA9IFswLCAwLCAwLCAwXTtcbiAgX2lzUmVsb2FkID0gZmFsc2U7XG4gIF9pc0NyZWF0ZUFsbE92ZXIgPSBmYWxzZTtcbiAgX3pvb21JbmcgPSBmYWxzZTtcbiAgX2NlbGxOdW1TaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gIF9jZWxsU2l6ZSA9IG5ldyBjYy5TaXplKDAsIDApO1xuICBfdmlld1NpemUgPSBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgX2lzUmV1c2UgPSBmYWxzZTtcbiAgX2lzU2NoZWR1bGUgPSBmYWxzZTtcbiAgX2V4dHJhT2Zmc2V0ID0gMDtcbiAgX21pblNjYWxlID0gMDtcbiAgX21heFNjYWxlID0gMjtcbiAgX21vdmVUaW1lRm9yUGVyQ2VsbCA9IDA7XG4gIF9yZWxvYWREYXRhU2NoZWR1bGUgPSBmYWxzZTtcbiAgX2lzQ3JlYXRlQWxsID0gZmFsc2U7XG4gIF9zY2hlZHVsZVRpbWUgPSAwO1xuICBfaXNDZWxsVXNlQWN0aXZlID0gZmFsc2U7XG4gIF92aWV3ID0gbnVsbDtcbiAgX2RlbGVnYXRlID0gbnVsbDtcbiAgX2lubmVyQ29udGFpbmVyU2l6ZSA9IG5ldyBjYy5TaXplKHRoaXMuX2NlbGxTaXplLndpZHRoICogdGhpcy5fY2VsbE51bVNpemUud2lkdGgsIHRoaXMuX2NlbGxTaXplLmhlaWdodCAqIHRoaXMuX2NlbGxOdW1TaXplLmhlaWdodCk7XG4gIF92aXNpYmxlUmVjdCA9IG51bGw7XG4gIF9jYWxsYmFjazEgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fdmlldyA9IGUudmlldztcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IGUuZGVsZWdhdGU7XG4gICAgdGhpcy5fY2VsbFNpemUgPSBlLmNlbGxTaXplO1xuICAgIHRoaXMuX2lzUmV1c2UgPSBlLmlzUmV1c2U7XG4gICAgdGhpcy5faXNTY2hlZHVsZSA9IGUuaXNTY2hlZHVsZSB8fCBmYWxzZTtcbiAgICB0aGlzLl9yZWxvYWREYXRhU2NoZWR1bGUgPSBlLnJlbG9hZERhdGFTY2hlZHVsZTtcbiAgICB0aGlzLl9pc0NyZWF0ZUFsbCA9IGUuaXNDcmVhdGVBbGw7XG4gICAgZS5jZWxsTnVtU2l6ZSAmJiAodGhpcy5fY2VsbE51bVNpemUgPSBlLmNlbGxOdW1TaXplKTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiBlLmV4dHJhT2Zmc2V0ICYmICh0aGlzLl9leHRyYU9mZnNldCA9IGUuZXh0cmFPZmZzZXQpO1xuICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUubWluU2NhbGUgJiYgKHRoaXMuX21pblNjYWxlID0gZS5taW5TY2FsZSk7XG4gICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5tYXhTY2FsZSAmJiAodGhpcy5fbWF4U2NhbGUgPSBlLm1heFNjYWxlKTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiBlLm1vdmVUaW1lRm9yUGVyQ2VsbCAmJiAodGhpcy5fbW92ZVRpbWVGb3JQZXJDZWxsID0gZS5tb3ZlVGltZUZvclBlckNlbGwpO1xuICAgIHZvaWQgMCAhPT0gZS5pc0NlbGxBY3RpdmUgJiYgKHRoaXMuX2lzQ2VsbFVzZUFjdGl2ZSA9IGUuaXNDZWxsQWN0aXZlKTtcbiAgICB0aGlzLl92aWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUodGhpcy5faW5uZXJDb250YWluZXJTaXplKTtcbiAgICB0aGlzLnJlc2V0Vmlld1NpemUoKTtcbiAgICB0aGlzLl92aWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5vbkV2ZW50Rm9yQ29sbGVjdGlvblZpZXcuYmluZCh0aGlzKSk7XG4gIH1cbiAgcmVzZXRWaWV3U2l6ZSgpIHtcbiAgICB0aGlzLl92aWV3U2l6ZSA9IHRoaXMuX3ZpZXcubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMuX3Zpc2libGVSZWN0ID0gbmV3IGNjLlJlY3QoMCwgMCwgdGhpcy5fdmlld1NpemUud2lkdGgsIHRoaXMuX3ZpZXdTaXplLmhlaWdodCk7XG4gICAgdGhpcy5fc2NoZWR1bGVUaW1lID0gdGhpcy5fbW92ZVRpbWVGb3JQZXJDZWxsIC8gKHRoaXMuX3ZpZXdTaXplLndpZHRoIC8gdGhpcy5fY2VsbFNpemUud2lkdGggKyB0aGlzLl92aWV3U2l6ZS5oZWlnaHQgLyB0aGlzLl9jZWxsU2l6ZS5oZWlnaHQgKyAyKSAqIDAuNTtcbiAgfVxuICBvbkV2ZW50Rm9yQ29sbGVjdGlvblZpZXcoZSA9IHt9KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVsb2FkICYmICF0aGlzLl96b29tSW5nKSB7XG4gICAgICB0aGlzLl9kZWxlZ2F0ZS5vbkV2ZW50Rm9yQ29sbGVjdGlvblZpZXcgJiYgdGhpcy5fZGVsZWdhdGUub25FdmVudEZvckNvbGxlY3Rpb25WaWV3KCk7XG4gICAgICB2YXIgdCA9IGUuaW1tZWRpYXRlbHk7XG4gICAgICB0aGlzLmNoZWNrVXBkYXRlQ2VsbCh0KTtcbiAgICB9XG4gIH1cbiAgcmVsb2FkRGF0YShlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNDcmVhdGVBbGxPdmVyID0gZmFsc2U7XG4gICAgZm9yICh2YXIgdCBpbiB0aGlzLl9jcmVhdGVkQ2VsbE1hcCkgKG8gPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtOdW1iZXIodCldKSBpbnN0YW5jZW9mIGNjLk5vZGUgJiYgby5kZXN0cm95KCk7XG4gICAgZm9yICh2YXIgdCBpbiB0aGlzLl9yZWN5Y2xlUXVldWUpIHtcbiAgICAgIHZhciBvO1xuICAgICAgaWYgKG8gPSB0aGlzLl9yZWN5Y2xlUXVldWVbTnVtYmVyKHQpXSkgZm9yICh2YXIgbiA9IDA7IG4gPCBvLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBpID0gb1tuXTtcbiAgICAgICAgaSBpbnN0YW5jZW9mIGNjLk5vZGUgJiYgaS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlY3ljbGVRdWV1ZSA9IHt9O1xuICAgIHRoaXMuX2NyZWF0ZWRDZWxsTWFwID0ge307XG4gICAgdGhpcy5fd2FpdENyZWF0ZVF1ZXVlID0gW107XG4gICAgdGhpcy5fZnJhbWVJbmRleEluZm8gPSBbMCwgMCwgMCwgMF07XG4gICAgdGhpcy5fdmlldy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrMik7XG4gICAgdGhpcy5fZGVsZWdhdGUubnVtU2l6ZU9mQ2VsbHMgJiYgKHRoaXMuX2NlbGxOdW1TaXplID0gdGhpcy5fZGVsZWdhdGUubnVtU2l6ZU9mQ2VsbHMoKSk7XG4gICAgdmFyIHIgPSB0aGlzLl92aWV3LmNvbnRlbnQsXG4gICAgICBhID0gdGhpcy5fdmlldy5nZXRDb250ZW50UG9zaXRpb24oKSxcbiAgICAgIGwgPSByLnNjYWxlLFxuICAgICAgcyA9IHRoaXMuX2NlbGxTaXplLndpZHRoICogdGhpcy5fY2VsbE51bVNpemUud2lkdGgsXG4gICAgICBjID0gdGhpcy5fY2VsbFNpemUuaGVpZ2h0ICogdGhpcy5fY2VsbE51bVNpemUuaGVpZ2h0O1xuICAgIHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZSA9IG5ldyBjYy5TaXplKHMsIGMpO1xuICAgIHZhciB1ID0gbmV3IGNjLlNpemUodGhpcy5faW5uZXJDb250YWluZXJTaXplLndpZHRoICogbCwgdGhpcy5faW5uZXJDb250YWluZXJTaXplLmhlaWdodCAqIGwpO1xuICAgIHRoaXMuX3ZpZXcuY29udGVudC5zZXRDb250ZW50U2l6ZSh1KTtcbiAgICB0aGlzLl92aWV3LnNldENvbnRlbnRQb3NpdGlvbihhKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHAgPSBuZXcgY2MuVmVjMigwLCB0aGlzLl92aWV3U2l6ZS5oZWlnaHQgLSB0aGlzLl9pbm5lckNvbnRhaW5lclNpemUuaGVpZ2h0KTtcbiAgICAgIHRoaXMuX3ZpZXcuc2V0Q29udGVudFBvc2l0aW9uKHApO1xuICAgIH1cbiAgICB0aGlzLl9pc1JlbG9hZCA9IHRydWU7XG4gICAgdGhpcy5jaGVja1VwZGF0ZUNlbGwoIXRoaXMuX3JlbG9hZERhdGFTY2hlZHVsZSk7XG4gIH1cbiAgc2V0RXh0cmFPZmZzZXQoZSkge1xuICAgIHRoaXMuX2V4dHJhT2Zmc2V0ID0gZTtcbiAgfVxuICBnZXRDZWxsQnlSb3dBbmRDb2woZSwgdCkge1xuICAgIHZhciBvID0gZSAqIHRoaXMuX2NlbGxOdW1TaXplLndpZHRoICsgdDtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZENlbGxNYXBbb107XG4gIH1cbiAgZGVxdWV1ZUNlbGxCeUtleShlKSB7XG4gICAgZSA9IGUgfHwgXCJkZWZcIjtcbiAgICB2YXIgdCA9IHRoaXMuX3JlY3ljbGVRdWV1ZVtlXTtcbiAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDAgPyB0LnBvcCgpIDogbnVsbDtcbiAgfVxuICBnZXRDb3VudE9mQ2VsbCgpIHtcbiAgICB2YXIgZSA9IDA7XG4gICAgZm9yICh2YXIgdCBpbiB0aGlzLl9jcmVhdGVkQ2VsbE1hcCkgdHJ1ZSA9PT0gdGhpcy5fY3JlYXRlZENlbGxNYXBbTnVtYmVyKHQpXSAmJiAoZSArPSAxKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBnZXRDdXJyZW50Q2VsbHMoKSB7XG4gICAgdmFyIGUgPSBbXTtcbiAgICBmb3IgKHZhciB0IGluIHRoaXMuX2NyZWF0ZWRDZWxsTWFwKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2NyZWF0ZWRDZWxsTWFwW051bWJlcih0KV07XG4gICAgICBvIGluc3RhbmNlb2YgY2MuTm9kZSAmJiBlLnB1c2gobyk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIHpvb21TY2FsZUJ5VGltZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLl92aWV3LmNvbnRlbnQ7XG4gICAgbyA9IG8gfHwgdGhpcy5fdmlldy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZXcgY2MuVmVjMigwLjUgKiB0aGlzLl92aWV3U2l6ZS53aWR0aCwgMC41ICogdGhpcy5fdmlld1NpemUuaGVpZ2h0KSk7XG4gICAgaWYgKGUgIT0gbi5zY2FsZSkge1xuICAgICAgdmFyIGkgPSBuLnNjYWxlLFxuICAgICAgICByID0gZSAtIGksXG4gICAgICAgIGEgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy5fY2FsbGJhY2sxICYmIHRoaXMuX3ZpZXcudW5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjazEpO1xuICAgICAgdGhpcy5fY2FsbGJhY2sxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGEuZ2V0VGltZSgpKSAvIDEwMDAgLyB0LFxuICAgICAgICAgIG4gPSBpICsgciAqIChlID0gZSA+IDEgPyAxIDogZSk7XG4gICAgICAgIHRoaXMuc2V0Wm9vbVNjYWxlKG4sIG8pO1xuICAgICAgICBlID49IDEgJiYgdGhpcy5fdmlldy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrMSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fdmlldy5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjazEsIDApO1xuICAgIH1cbiAgfVxuICB6b29tU2NhbGVUb0NlbnRlckJ5VGltZShlLCB0LCBvLCBuLCBpLCByLCBhKSB7XG4gICAgbyA9IG8gfHwgdGhpcy5fdmlldy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZXcgY2MuVmVjMigwLjUgKiB0aGlzLl92aWV3U2l6ZS53aWR0aCwgMC41ICogdGhpcy5fdmlld1NpemUuaGVpZ2h0KSk7XG4gICAgbiA9IG4gfHwgbztcbiAgICB2YXIgbCA9IHRoaXMuX3ZpZXcuY29udGVudCxcbiAgICAgIHMgPSBsLnNjYWxlLFxuICAgICAgYyA9IDA7XG4gICAgZSAmJiBlID4gMCAmJiAoYyA9IGUgLSBzKTtcbiAgICB2YXIgdSA9IG5ldyBjYy5WZWMyKG4ueCAtIG8ueCwgbi55IC0gby55KSxcbiAgICAgIHAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsXG4gICAgICBmID0gcDtcbiAgICB0aGlzLl9jYWxsYmFjazEgJiYgdGhpcy5fdmlldy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrMSk7XG4gICAgdGhpcy5fem9vbUluZyA9IHRydWU7XG4gICAgdGhpcy5fY2FsbGJhY2sxID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsXG4gICAgICAgIG4gPSBlO1xuICAgICAgZSAtIHAgPiB0ICYmIChuID0gcCArIHQpO1xuICAgICAgdmFyIGQgPSBuIC0gZjtcbiAgICAgIGYgPSBuO1xuICAgICAgdmFyIGggPSBkIC8gdDtcbiAgICAgIGlmIChyICYmIGUgLSBwID49IHIpIHtcbiAgICAgICAgaSAmJiBpKCk7XG4gICAgICAgIGkgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGUgLSBwID49IHQpIHtcbiAgICAgICAgdGhpcy5fdmlldy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrMSk7XG4gICAgICAgIGkgJiYgaSgpO1xuICAgICAgICBpID0gbnVsbDtcbiAgICAgICAgYSAmJiBhKCk7XG4gICAgICAgIGEgPSBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHksXG4gICAgICAgIG0gPSBuZXcgY2MuVmVjMih1LnggKiBoLCB1LnkgKiBoKSxcbiAgICAgICAgdiA9IHRoaXMuX3ZpZXcuY29udGVudC5ub2RlLnBvc2l0aW9uO1xuICAgICAgaWYgKDAgIT0gYykge1xuICAgICAgICB2YXIgZyA9IHMgKyBjICogaCxcbiAgICAgICAgICBfID0gTWF0aC5tYXgodGhpcy5fbWluU2NhbGUsIE1hdGgubWluKHRoaXMuX21heFNjYWxlLCBnKSk7XG4gICAgICAgIHMgPSBnO1xuICAgICAgICBpZiAoKHkgPSBjYy5zaXplKHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS53aWR0aCAqIF8sIHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS5oZWlnaHQgKiBfKSkuaGVpZ2h0IDwgdGhpcy5fdmlld1NpemUuaGVpZ2h0IHx8IHkud2lkdGggPCB0aGlzLl92aWV3U2l6ZS53aWR0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl96b29tSW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIFQgPSBsLmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICBsLnNjYWxlID0gXztcbiAgICAgICAgdGhpcy5fdmlldy5jb250ZW50LnNpemUgPSB5O1xuICAgICAgICB2YXIgQyA9IGwuY29udmVydFRvV29ybGRTcGFjZUFSKFQpLFxuICAgICAgICAgIGIgPSBvLnN1YihDKSxcbiAgICAgICAgICBFID0gbS5hZGQoYik7XG4gICAgICAgIG8gPSBvLmFkZChtKTtcbiAgICAgICAgdiA9IHRoaXMuX3ZpZXcuY29udGVudC5wb3NpdGlvbi5hZGQoRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl96b29tSW5nID0gdHJ1ZTtcbiAgICAgICAgeSA9IGNjLnNpemUodGhpcy5faW5uZXJDb250YWluZXJTaXplLndpZHRoLCB0aGlzLl9pbm5lckNvbnRhaW5lclNpemUuaGVpZ2h0KTtcbiAgICAgICAgbyA9IG8uYWRkKG0pO1xuICAgICAgICB2ID0gdi5hZGQobSk7XG4gICAgICB9XG4gICAgICB2LnggPSB2LnggPiAwID8gMCA6IHYueDtcbiAgICAgIHYueSA9IHYueSA+IDAgPyAwIDogdi55O1xuICAgICAgdmFyIFMgPSB0aGlzLl92aWV3U2l6ZS53aWR0aCAtIHkud2lkdGgsXG4gICAgICAgIEkgPSB0aGlzLl92aWV3U2l6ZS5oZWlnaHQgLSB5LmhlaWdodDtcbiAgICAgIHYueCA9IHYueCA8IFMgPyBTIDogdi54O1xuICAgICAgdi55ID0gdi55IDwgSSA/IEkgOiB2Lnk7XG4gICAgICB0aGlzLl92aWV3LmNvbnRlbnQucG9zaXRpb24gPSB2O1xuICAgICAgdGhpcy5fem9vbUluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGVja1VwZGF0ZUNlbGwoKTtcbiAgICB9O1xuICAgIHRoaXMuX3ZpZXcuc2NoZWR1bGUodGhpcy5fY2FsbGJhY2sxLCAwKTtcbiAgfVxuICBzZXRab29tU2NhbGUoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fdmlldy5jb250ZW50O1xuICAgIHQgPSB0IHx8IHRoaXMuX3ZpZXcubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV3IGNjLlZlYzIoMC41ICogdGhpcy5fdmlld1NpemUud2lkdGgsIDAuNSAqIHRoaXMuX3ZpZXdTaXplLmhlaWdodCkpO1xuICAgIGlmIChlICE9IG8uc2NhbGUpIHtcbiAgICAgIHZhciBuID0gTWF0aC5tYXgodGhpcy5fbWluU2NhbGUsIE1hdGgubWluKHRoaXMuX21heFNjYWxlLCBlKSksXG4gICAgICAgIGkgPSBjYy5zaXplKHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS53aWR0aCAqIG4sIHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS5oZWlnaHQgKiBuKTtcbiAgICAgIGlmICghKGkuaGVpZ2h0IDwgdGhpcy5fdmlld1NpemUuaGVpZ2h0IHx8IGkud2lkdGggPCB0aGlzLl92aWV3U2l6ZS53aWR0aCkpIHtcbiAgICAgICAgdGhpcy5fem9vbUluZyA9IHRydWU7XG4gICAgICAgIHZhciByID0gby5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgby5zY2FsZSA9IG47XG4gICAgICAgIHRoaXMuX3ZpZXcuY29udGVudC53aWR0aCA9IGkud2lkdGg7XG4gICAgICAgIHRoaXMuX3ZpZXcuY29udGVudC5oZWlnaHQgPSBpLmhlaWdodDtcbiAgICAgICAgdmFyIGEgPSBvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihyKSxcbiAgICAgICAgICBsID0gdC5zdWIoYSksXG4gICAgICAgICAgcyA9IHRoaXMuX3ZpZXcuY29udGVudC5wb3NpdGlvbi5hZGQobCk7XG4gICAgICAgIHMueCA9IHMueCA+IDAgPyAwIDogcy54O1xuICAgICAgICBzLnkgPSBzLnkgPiAwID8gMCA6IHMueTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl92aWV3U2l6ZS53aWR0aCAtIGkud2lkdGgsXG4gICAgICAgICAgdSA9IHRoaXMuX3ZpZXdTaXplLmhlaWdodCAtIGkuaGVpZ2h0O1xuICAgICAgICBzLnggPSBzLnggPCBjID8gYyA6IHMueDtcbiAgICAgICAgcy55ID0gcy55IDwgdSA/IHUgOiBzLnk7XG4gICAgICAgIHRoaXMuX3ZpZXcuY29udGVudC5wb3NpdGlvbiA9IHM7XG4gICAgICAgIHRoaXMuX3pvb21JbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGVja1VwZGF0ZUNlbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3JlYXRlQ2VsbEJ5SW5mbyhlLCB0KSB7XG4gICAgdmFyIG8gPSBlWzBdICogdGhpcy5fY2VsbE51bVNpemUud2lkdGggKyBlWzFdLFxuICAgICAgbiA9IHRoaXMuX2NlbGxOdW1TaXplLmhlaWdodCAtIDEgLSBlWzBdLFxuICAgICAgaSA9IHRoaXMuX2RlbGVnYXRlLmNlbGxBdEluZGV4KHRoaXMuX3ZpZXcsIG4sIGVbMV0pO1xuICAgIGkuYW5jaG9yWCA9IDA7XG4gICAgaS5hbmNob3JZID0gMDtcbiAgICBpLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKGVbMV0gKiB0aGlzLl9jZWxsU2l6ZS53aWR0aCwgZVswXSAqIHRoaXMuX2NlbGxTaXplLmhlaWdodCkpO1xuICAgIGkucGFyZW50IHx8IHRoaXMuX3ZpZXcuY29udGVudC5hZGRDaGlsZChpKTtcbiAgICB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtvXSA9IGk7XG4gICAgdGhpcy5fc2V0Q2VsbEFjdGl2ZShpLCBmYWxzZSk7XG4gICAgaWYgKCF0IHx8IGVbMV0gPj0gdGhpcy5fZnJhbWVJbmRleEluZm9bMF0gJiYgZVsxXSA8PSB0aGlzLl9mcmFtZUluZGV4SW5mb1sxXSAmJiBlWzBdID49IHRoaXMuX2ZyYW1lSW5kZXhJbmZvWzJdICYmIGVbMF0gPD0gdGhpcy5fZnJhbWVJbmRleEluZm9bM10pIHtcbiAgICAgIHRoaXMuX3NldENlbGxBY3RpdmUoaSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9kZWxlZ2F0ZS5jZWxsV2lsbFNob3cgJiYgdGhpcy5fZGVsZWdhdGUuY2VsbFdpbGxTaG93KHRoaXMuX3ZpZXcsIG4sIGVbMV0sIGkpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVDZWxsSW1tZWRpYXRlKCkge1xuICAgIGZvciAodmFyIGUgPSB0aGlzLCB0ID0gZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdmFyIHQgPSBlLl93YWl0Q3JlYXRlUXVldWUucG9wKCk7XG4gICAgICAgIGlmICghdCkge1xuICAgICAgICAgIGUuX2lzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZS5jcmVhdGVDZWxsQnlJbmZvKHQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07IHQoKTspO1xuICB9XG4gIGNyZWF0ZUNlbGxCeVF1ZXVlKCkge1xuICAgIGlmICh0aGlzLl93YWl0Q3JlYXRlUXVldWUubGVuZ3RoID4gMCAmJiAhdGhpcy5faXNDcmVhdGluZykge1xuICAgICAgdGhpcy5faXNDcmVhdGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9jYWxsYmFjazIgJiYgdGhpcy5fdmlldy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrMik7XG4gICAgICB2YXIgZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCxcbiAgICAgICAgdCA9IHRoaXM7XG4gICAgICB0aGlzLl9jYWxsYmFjazIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIG8gPSBmdW5jdGlvbiBvKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0Ll93YWl0Q3JlYXRlUXVldWUucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgdC5fdmlldy51bnNjaGVkdWxlKHQuX2NhbGxiYWNrMik7XG4gICAgICAgICAgICAgIHQuX2lzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5jcmVhdGVDZWxsQnlJbmZvKGUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSwgbiA9IG5ldyBEYXRlKCk7IG8oKSAmJiBuLmdldFRpbWUoKSAtIGUgPCAwLjA2NjY2NjY2NjY2NjY2NjY3Oyk7XG4gICAgICAgIGUgPSBuLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICB9O1xuICAgICAgdGhpcy5fdmlldy5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjazIsIHRoaXMuX3NjaGVkdWxlVGltZSB8fCAwKTtcbiAgICB9XG4gIH1cbiAgcmVGcmVzaEN1ckNlbGxzKGUpIHtcbiAgICBmb3IgKHZhciB0IGluIHRoaXMuX2NyZWF0ZWRDZWxsTWFwKSBpZiAodGhpcy5fY3JlYXRlZENlbGxNYXAuaGFzT3duUHJvcGVydHkoTnVtYmVyKHQpKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtOdW1iZXIodCldLFxuICAgICAgICBuID0gTWF0aC5mbG9vcihOdW1iZXIodCkgLyB0aGlzLl9jZWxsTnVtU2l6ZS53aWR0aCksXG4gICAgICAgIGkgPSBOdW1iZXIodCkgJSB0aGlzLl9jZWxsTnVtU2l6ZS53aWR0aDtcbiAgICAgIGlmIChvIGluc3RhbmNlb2YgY2MuTm9kZSAmJiB0aGlzLl9pc0NlbGxBY3RpdmUobykpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2VsbEFjdGl2ZShvLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLmNlbGxXaWxsSGlkZSAmJiB0aGlzLl9kZWxlZ2F0ZS5jZWxsV2lsbEhpZGUodGhpcy5fdmlldywgbiwgaSwgbyk7XG4gICAgICAgIGlmICh0aGlzLl9pc1JldXNlKSB7XG4gICAgICAgICAgdmFyIHIgPSBvLmNlbGxUeXBlO1xuICAgICAgICAgIHIgfHwgKHIgPSBcImRlZlwiKTtcbiAgICAgICAgICB2YXIgYSA9IHRoaXMuX3JlY3ljbGVRdWV1ZVtyXSB8fCB7fTtcbiAgICAgICAgICBhLnB1c2gobyk7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlZENlbGxNYXBbTnVtYmVyKHQpXSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fcmVjeWNsZVF1ZXVlW3JdID0gYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrVXBkYXRlQ2VsbChlKTtcbiAgfVxuICBjaGVja1VwZGF0ZUNlbGwoZSkge1xuICAgIGlmICh0aGlzLl9pc1JlbG9hZCkge1xuICAgICAgdmFyIHQgPSB0aGlzLl92aWV3LmNvbnRlbnQuZ2V0U2NhbGUobmV3IGNjLlZlYzIoKSksXG4gICAgICAgIG8gPSB0aGlzLl92aWV3LmNvbnRlbnQucG9zaXRpb247XG4gICAgICB0aGlzLl92aXNpYmxlUmVjdC54ID0gLW8ueCA8IDAgPyAwIDogLW8ueDtcbiAgICAgIHRoaXMuX3Zpc2libGVSZWN0LnkgPSAtby55IDwgMCA/IDAgOiAtby55O1xuICAgICAgdGhpcy5fdmlzaWJsZVJlY3QueCAvPSB0Lng7XG4gICAgICB0aGlzLl92aXNpYmxlUmVjdC55IC89IHQueTtcbiAgICAgIHRoaXMuX3Zpc2libGVSZWN0LmhlaWdodCA9IHRoaXMuX3ZpZXdTaXplLmhlaWdodCAvIHQueTtcbiAgICAgIHRoaXMuX3Zpc2libGVSZWN0LndpZHRoID0gdGhpcy5fdmlld1NpemUud2lkdGggLyB0Lng7XG4gICAgICB0aGlzLl92aXNpYmxlUmVjdC54ID0gTWF0aC5taW4odGhpcy5fdmlzaWJsZVJlY3QueCwgdGhpcy5faW5uZXJDb250YWluZXJTaXplLndpZHRoIC0gdGhpcy5fdmlld1NpemUud2lkdGggLyB0LngpO1xuICAgICAgdGhpcy5fdmlzaWJsZVJlY3QueSA9IE1hdGgubWluKHRoaXMuX3Zpc2libGVSZWN0LnksIHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS5oZWlnaHQgLSB0aGlzLl92aWV3U2l6ZS5oZWlnaHQgLyB0LnkpO1xuICAgICAgdmFyIG4gPSB0aGlzLl92aXNpYmxlUmVjdC55ICsgdGhpcy5fdmlzaWJsZVJlY3QuaGVpZ2h0LFxuICAgICAgICBpID0gdGhpcy5fdmlzaWJsZVJlY3QueSxcbiAgICAgICAgciA9IHRoaXMuX3Zpc2libGVSZWN0LngsXG4gICAgICAgIGEgPSB0aGlzLl92aXNpYmxlUmVjdC54ICsgdGhpcy5fdmlzaWJsZVJlY3Qud2lkdGg7XG4gICAgICBpZiAodGhpcy5fZXh0cmFPZmZzZXQpIHtcbiAgICAgICAgbiArIHRoaXMuX2V4dHJhT2Zmc2V0IDw9IHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS5oZWlnaHQgJiYgKG4gKz0gdGhpcy5fZXh0cmFPZmZzZXQpO1xuICAgICAgICBpIC0gdGhpcy5fZXh0cmFPZmZzZXQgPj0gMCAmJiAoaSAtPSB0aGlzLl9leHRyYU9mZnNldCk7XG4gICAgICAgIHIgLSB0aGlzLl9leHRyYU9mZnNldCA+PSAwICYmIChyIC09IHRoaXMuX2V4dHJhT2Zmc2V0KTtcbiAgICAgICAgYSArIHRoaXMuX2V4dHJhT2Zmc2V0IDw9IHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS53aWR0aCAmJiAoYSArPSB0aGlzLl9leHRyYU9mZnNldCk7XG4gICAgICB9XG4gICAgICB2YXIgbCA9IE1hdGguZmxvb3IociAvIHRoaXMuX2NlbGxTaXplLndpZHRoKSxcbiAgICAgICAgcyA9IE1hdGguY2VpbChhIC8gdGhpcy5fY2VsbFNpemUud2lkdGgpO1xuICAgICAgcyAtPSAxO1xuICAgICAgdmFyIGMgPSBNYXRoLmZsb29yKGkgLyB0aGlzLl9jZWxsU2l6ZS5oZWlnaHQpLFxuICAgICAgICB1ID0gTWF0aC5jZWlsKG4gLyB0aGlzLl9jZWxsU2l6ZS5oZWlnaHQpO1xuICAgICAgdSAtPSAxO1xuICAgICAgbCA9IE1hdGgubWF4KDAsIGwpO1xuICAgICAgYyA9IE1hdGgubWF4KDAsIGMpO1xuICAgICAgdGhpcy5fZnJhbWVJbmRleEluZm8gPSBbbCwgcywgYywgdV07XG4gICAgICBmb3IgKHZhciBwID0gbDsgcCA8IHMgKyAxOyBwKyspIGZvciAodmFyIGYgPSBjOyBmIDwgdSArIDE7IGYrKykge1xuICAgICAgICB2YXIgZCA9IGYsXG4gICAgICAgICAgaCA9IHRoaXMuX2NlbGxOdW1TaXplLmhlaWdodCAtIDEgLSBkLFxuICAgICAgICAgIHkgPSBwLFxuICAgICAgICAgIG0gPSBkICogdGhpcy5fY2VsbE51bVNpemUud2lkdGggKyB5LFxuICAgICAgICAgIHYgPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFttXTtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICBpZiAoMSAhPSB2ICYmICF0aGlzLl9pc0NlbGxBY3RpdmUodikpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldENlbGxBY3RpdmUodiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5jZWxsV2lsbFNob3cgJiYgdGhpcy5fZGVsZWdhdGUuY2VsbFdpbGxTaG93KHRoaXMuX3ZpZXcsIGgsIHksIHYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NjaGVkdWxlICYmICFlKSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlZENlbGxNYXBbbV0gPSB0cnVlO1xuICAgICAgICAgIHZhciBnID0gW2QsIHldO1xuICAgICAgICAgIHRoaXMuX3dhaXRDcmVhdGVRdWV1ZS51bnNoaWZ0KGcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfID0gdGhpcy5fZGVsZWdhdGUuY2VsbEF0SW5kZXgodGhpcy5fdmlldywgaCwgeSk7XG4gICAgICAgICAgXy5hbmNob3JYID0gMDtcbiAgICAgICAgICBfLmFuY2hvclkgPSAwO1xuICAgICAgICAgIHRoaXMuX3NldENlbGxBY3RpdmUoXywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fZGVsZWdhdGUuY2VsbFdpbGxTaG93ICYmIHRoaXMuX2RlbGVnYXRlLmNlbGxXaWxsU2hvdyh0aGlzLl92aWV3LCBoLCB5LCBfKTtcbiAgICAgICAgICBfLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHkgKiB0aGlzLl9jZWxsU2l6ZS53aWR0aCwgZCAqIHRoaXMuX2NlbGxTaXplLmhlaWdodCkpO1xuICAgICAgICAgIF8ucGFyZW50IHx8IHRoaXMuX3ZpZXcuY29udGVudC5hZGRDaGlsZChfKTtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVkQ2VsbE1hcFttXSA9IF87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl93YWl0Q3JlYXRlUXVldWUubGVuZ3RoID4gMCAmJiBlKSBmb3IgKDs7KSB7XG4gICAgICAgIGlmICghKEUgPSB0aGlzLl93YWl0Q3JlYXRlUXVldWUucG9wKCkpKSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2syICYmIHRoaXMuX3ZpZXcudW5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjazIpO1xuICAgICAgICAgIHRoaXMuX2lzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxCeUluZm8oRSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNDcmVhdGVBbGwgJiYgIXRoaXMuX2lzQ3JlYXRlQWxsT3Zlcikge1xuICAgICAgICBmb3IgKHAgPSAwOyBwIDwgdGhpcy5fY2VsbE51bVNpemUuaGVpZ2h0OyBwKyspIGZvciAoZiA9IDA7IGYgPCB0aGlzLl9jZWxsTnVtU2l6ZS53aWR0aDsgZisrKSB7XG4gICAgICAgICAgeSA9IGYsIG0gPSAoZCA9IHApICogdGhpcy5fY2VsbE51bVNpemUud2lkdGggKyB5O1xuICAgICAgICAgIGlmICghdGhpcy5fY3JlYXRlZENlbGxNYXBbbV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWRDZWxsTWFwW21dID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3dhaXRDcmVhdGVRdWV1ZS5wdXNoKFtwLCBmXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzQ3JlYXRlQWxsT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxJbW1lZGlhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2VsbEJ5UXVldWUoKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHAgaW4gdGhpcy5fY3JlYXRlZENlbGxNYXApIHtcbiAgICAgICAgdmFyIFQgPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtOdW1iZXIocCldO1xuICAgICAgICBkID0gTWF0aC5mbG9vcihOdW1iZXIocCkgLyB0aGlzLl9jZWxsTnVtU2l6ZS53aWR0aCksIGggPSB0aGlzLl9jZWxsTnVtU2l6ZS5oZWlnaHQgLSAxIC0gZCwgeSA9IE51bWJlcihwKSAlIHRoaXMuX2NlbGxOdW1TaXplLndpZHRoO1xuICAgICAgICBpZiAoIWNjLnJlY3QobCwgYywgcyAtIGwsIHUgLSBjKS5jb250YWlucyhuZXcgY2MuVmVjMih5LCBkKSkgJiYgVCBpbnN0YW5jZW9mIGNjLk5vZGUpIGlmICh0aGlzLl9pc0NlbGxBY3RpdmUoVCkpIHtcbiAgICAgICAgICB0aGlzLl9zZXRDZWxsQWN0aXZlKFQsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5jZWxsV2lsbEhpZGUgJiYgdGhpcy5fZGVsZWdhdGUuY2VsbFdpbGxIaWRlKHRoaXMuX3ZpZXcsIGgsIHksIFQpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JldXNlKSB7XG4gICAgICAgICAgICB2YXIgQyA9IFQuY2VsbFR5cGU7XG4gICAgICAgICAgICBDIHx8IChDID0gXCJkZWZcIik7XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuX3JlY3ljbGVRdWV1ZVtDXSB8fCBbXTtcbiAgICAgICAgICAgIGIucHVzaChUKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtOdW1iZXIocCldO1xuICAgICAgICAgICAgdGhpcy5fcmVjeWNsZVF1ZXVlW0NdID0gYjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzQ3JlYXRlQWxsKSBmb3IgKGYgPSAwOyBmIDwgdGhpcy5fd2FpdENyZWF0ZVF1ZXVlLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgdmFyIEU7XG4gICAgICAgICAgaWYgKChtID0gKEUgPSB0aGlzLl93YWl0Q3JlYXRlUXVldWVbZl0pWzFdICogdGhpcy5fY2VsbE51bVNpemUud2lkdGggKyBFWzJdKSA9PT0gTnVtYmVyKHApKSB7XG4gICAgICAgICAgICB0aGlzLl93YWl0Q3JlYXRlUXVldWUuc3BsaWNlKGYsIDEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NyZWF0ZWRDZWxsTWFwW21dO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9pc0NlbGxBY3RpdmUoZSkge1xuICAgIHJldHVybiB0aGlzLl9pc0NlbGxVc2VBY3RpdmUgPyBlLmFjdGl2ZSA6IDI1NSA9PT0gZS5vcGFjaXR5O1xuICB9XG4gIF9zZXRDZWxsQWN0aXZlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5faXNDZWxsVXNlQWN0aXZlKSB7XG4gICAgICBlLmFjdGl2ZSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUub3BhY2l0eSA9IHQgPyAyNTUgOiAwO1xuICAgIH1cbiAgfVxufSJdfQ==