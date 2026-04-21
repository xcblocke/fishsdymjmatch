
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TableView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b0f4pHJWhJuoLr6DYf+QVi', 'TableView');
// Scripts/TableView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = void 0;
var n = {
    kHorizontal: 0,
    kVertical: 1
};
var TableView = /** @class */ (function () {
    function TableView(e) {
        this._isCreating = false;
        this._isReload = false;
        this._isReused = true;
        this._viewSize = new cc.Size(0, 0);
        this._preInnerContainerSize = null;
        this._innerContainerSize = null;
        this._direction = n.kHorizontal;
        this._countOfItems = 0;
        this._vCellsPositions = {};
        this._maxBounceDistance = 0;
        this._isCellUseActive = false;
        this._showIndexOffset = 0;
        this._hideMaskSize = false;
        this.cellSizeForTable = null;
        this.numberOfCellsInTableView = null;
        this.cellAtIndex = null;
        this.scrollViewDidScroll = null;
        this.cellWillHide = null;
        this.cellWillShow = null;
        this.cellWillMove = null;
        this._view = null;
        this._recycleQueue = null;
        this._createdCellMap = null;
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
    TableView.prototype.resetViewSize = function () {
        this._viewSize = this._view.node.getContentSize();
        this.addWidgetForView();
    };
    TableView.prototype.onEventForCollectionView = function () {
        if (this._isReload && this._view && cc.isValid(this._view.node)) {
            this.scrollViewDidScroll && this.scrollViewDidScroll(this._view);
            this.checkUpdateCell(true);
        }
    };
    TableView.prototype.reloadData = function (e, t) {
        this._countOfItems = this.numberOfCellsInTableView(this._view);
        this.updateCellPositions();
        this.updateContentPosition(e, t);
        this._isCreating = false;
        for (var o in this._createdCellMap)
            (n = this._createdCellMap[Number(o)]) instanceof cc.Node && cc.isValid(n) && n.destroy();
        for (var o in this._recycleQueue) {
            var n;
            if (n = this._recycleQueue[Number(o)])
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    r instanceof cc.Node && cc.isValid(n) && r.destroy();
                }
        }
        this._recycleQueue = {};
        this._createdCellMap = {};
        this._isReload = true;
        this.checkUpdateCell();
    };
    TableView.prototype.initBounceDistance = function () {
        var e, t, o, n;
        if (this._view.horizontal) {
            null === (t = (e = this._view).setMaxBounceDistance) || void 0 === t || t.call(e, this._viewSize.width / 2);
        }
        else {
            null === (n = (o = this._view).setMaxBounceDistance) || void 0 === n || n.call(o, this._viewSize.height / 2);
        }
    };
    TableView.prototype.updateCellPositions = function () {
        var e = 0, t = 0;
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
    };
    TableView.prototype.addWidgetForView = function () {
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
        }
        else if (this._direction == n.kVertical) {
            i.left = 0;
            i.right = 0;
        }
        i.updateAlignment();
        this.initBounceDistance();
    };
    TableView.prototype.updateContentPosition = function (e, t) {
        this._view.content.setContentSize(this._innerContainerSize);
        if (this._direction == n.kHorizontal) {
            var o = this._viewSize.width - this._innerContainerSize.width, i = 0, r = o < 0 ? o : 0, a = 0;
            e && (a = e.x);
            if (a < r) {
                a = r;
            }
            else {
                a > i && (a = i);
            }
            this._view.setContentPosition(new cc.Vec2(a, 0));
        }
        else {
            var l = this._viewSize.height - this._innerContainerSize.height;
            if (l < 0) {
                i = 0;
                l = r = l;
                if (e)
                    if (t)
                        l = e.y;
                    else {
                        var s = this._preInnerContainerSize.height - Math.abs(e.y);
                        l = -(this._innerContainerSize.height - s);
                    }
                if (l <= r) {
                    l = r;
                }
                else {
                    l >= i && (l = i);
                }
            }
            this._view.setContentPosition(new cc.Vec2(0, l));
        }
    };
    TableView.prototype.dequeueCellByKey = function (e) {
        e = e || "def";
        var t = this._recycleQueue[e];
        return t && t.length > 0 ? t.pop() : null;
    };
    TableView.prototype.getCellByIndex = function (e) {
        return this._createdCellMap[e];
    };
    TableView.prototype.getCountOfCell = function () {
        return this.getCurrentCells().length;
    };
    TableView.prototype.getCurrentCells = function () {
        var e = [];
        for (var t in this._createdCellMap) {
            var o = this._createdCellMap[Number(t)];
            o instanceof cc.Node && o.active && e.push(o);
        }
        return e;
    };
    TableView.prototype.getContentPosition = function () {
        return this._view.getContentPosition();
    };
    TableView.prototype.setContentPosition = function (e, t) {
        if (t === void 0) { t = false; }
        this._view.setContentPosition(e);
        this.checkUpdateCell(false, t);
    };
    TableView.prototype.reFreshCurCells = function () {
        this.updateCellPositions();
        for (var e in this._createdCellMap) {
            var t = Number(e), o = this._createdCellMap[t];
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
    };
    TableView.prototype.getStartNEndIndex = function () {
        if (0 == this._countOfItems)
            return {
                startIndex: 0,
                endIndex: 0
            };
        var e = null, t = null;
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
            }
            else {
                var a = Math.abs(o), l = a + this._viewSize.width;
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
        }
        else {
            var c = this._view.getContentPosition().y;
            c > 0 && (c = 0);
            var u = Math.abs(c), p = u + this._viewSize.height;
            for (i = 0; i < this._countOfItems; i++) {
                r = this._vCellsPositions[i];
                if (null === e && r <= p) {
                    e = i;
                    break;
                }
            }
            if (this._innerContainerSize.height <= this._viewSize.height)
                t = this._countOfItems - 1;
            else
                for (i = this._countOfItems - 1; i >= 0; i--) {
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
    };
    TableView.prototype.checkUpdateCell = function (e, t) {
        if (e === void 0) { e = false; }
        if (t === void 0) { t = false; }
        if (this._isReload) {
            for (var o = this.getStartNEndIndex(), n = o.startIndex, i = o.endIndex, r = n; r < i; r++) {
                var a = this._createdCellMap[r];
                if (a) {
                    if (!this._isCellActive(a) || this._isCellActive(a) && t) {
                        this._setCellActive(a, true);
                        this.cellWillShow && this.cellWillShow(this._view, r, a);
                    }
                }
                else {
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
    };
    TableView.prototype._isCellActive = function (e) {
        return this._isCellUseActive ? e.active : 255 === e.opacity;
    };
    TableView.prototype._setCellActive = function (e, t) {
        if (this._isCellUseActive)
            e.active = t;
        else {
            "number" != typeof e.realScale && (e.realScale = e.scale);
            e.scale = t ? e.realScale : 0;
            e.opacity = t ? 255 : 0;
            e.active = true;
        }
    };
    TableView.prototype.getCellPosition = function (e) {
        var t = this._vCellsPositions[e];
        switch (this._direction) {
            case n.kHorizontal:
                return new cc.Vec2(t, 0);
            default:
                return new cc.Vec2(0, t);
        }
    };
    TableView.prototype.clearCellChildren = function () {
        this.getCurrentCells().forEach(function (e) {
            e.destroyAllChildren();
        });
    };
    TableView.prototype.refreshTableView = function (e, t) {
        this.reloadData();
        for (var o = this.numberOfCellsInTableView(this._view), n = 0, i = 0; i < o; i++)
            (a = this.getCellByIndex(i)) && a.active && n++;
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
    };
    TableView.prototype.scrollToPos = function (e) {
        if (this._view) {
            var t = this._view.content.convertToWorldSpaceAR(e), o = this._view.node.convertToWorldSpaceAR(cc.Vec2.ZERO).sub(t), n = this._view.getScrollOffset().add(o);
            this._view.scrollToOffset(cc.v2(-n.x, n.y), 0.1);
        }
    };
    TableView.prototype.scrollToOffset = function (e, t) {
        if (t === void 0) { t = 0.1; }
        this._view && this._view.scrollToOffset(e, t);
    };
    TableView.prototype.scrollToBottom = function (e) {
        if (e === void 0) { e = 0.1; }
        this._view && this._view.scrollToBottom(e);
    };
    TableView.prototype.scrollToTop = function (e) {
        if (e === void 0) { e = 0.1; }
        this._view && this._view.scrollToTop(e);
    };
    TableView.prototype.scrollToIndex = function (e, t) {
        if (t === void 0) { t = 0.3; }
        if (this._view && !(e < 0 || e >= this._countOfItems)) {
            0 === Object.keys(this._vCellsPositions).length && this.updateCellPositions();
            var o, i = this._vCellsPositions[e], r = this.cellSizeForTable(this._view, e);
            if (this._direction === n.kHorizontal) {
                var a = i + 0.5 * r.width;
                o = cc.v2(a, 0.5 * r.height);
            }
            else {
                var l = i + 0.5 * r.height;
                o = cc.v2(0.5 * r.width, l);
            }
            var s, c = this._view.content.convertToWorldSpaceAR(o), u = this._view.node.convertToWorldSpaceAR(cc.Vec2.ZERO).sub(c), p = this._view.getScrollOffset();
            s = this._direction === n.kHorizontal ? cc.v2(p.x - u.x, p.y) : cc.v2(p.x, p.y + u.y);
            this.scrollToOffset(s, t);
        }
    };
    return TableView;
}());
exports.TableView = TableView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxHQUFHO0lBQ04sV0FBVyxFQUFFLENBQUM7SUFDZCxTQUFTLEVBQUUsQ0FBQztDQUNiLENBQUM7QUFDRjtJQXdCRSxtQkFBWSxDQUFDO1FBdkJiLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsNkJBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFB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RUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUM5RCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBM1lBLEFBMllDLElBQUE7QUEzWVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbiA9IHtcbiAga0hvcml6b250YWw6IDAsXG4gIGtWZXJ0aWNhbDogMVxufTtcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXcge1xuICBfaXNDcmVhdGluZyA9IGZhbHNlO1xuICBfaXNSZWxvYWQgPSBmYWxzZTtcbiAgX2lzUmV1c2VkID0gdHJ1ZTtcbiAgX3ZpZXdTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gIF9wcmVJbm5lckNvbnRhaW5lclNpemUgPSBudWxsO1xuICBfaW5uZXJDb250YWluZXJTaXplID0gbnVsbDtcbiAgX2RpcmVjdGlvbiA9IG4ua0hvcml6b250YWw7XG4gIF9jb3VudE9mSXRlbXMgPSAwO1xuICBfdkNlbGxzUG9zaXRpb25zID0ge307XG4gIF9tYXhCb3VuY2VEaXN0YW5jZSA9IDA7XG4gIF9pc0NlbGxVc2VBY3RpdmUgPSBmYWxzZTtcbiAgX3Nob3dJbmRleE9mZnNldCA9IDA7XG4gIF9oaWRlTWFza1NpemUgPSBmYWxzZTtcbiAgY2VsbFNpemVGb3JUYWJsZSA9IG51bGw7XG4gIG51bWJlck9mQ2VsbHNJblRhYmxlVmlldyA9IG51bGw7XG4gIGNlbGxBdEluZGV4ID0gbnVsbDtcbiAgc2Nyb2xsVmlld0RpZFNjcm9sbCA9IG51bGw7XG4gIGNlbGxXaWxsSGlkZSA9IG51bGw7XG4gIGNlbGxXaWxsU2hvdyA9IG51bGw7XG4gIGNlbGxXaWxsTW92ZSA9IG51bGw7XG4gIF92aWV3ID0gbnVsbDtcbiAgX3JlY3ljbGVRdWV1ZSA9IG51bGw7XG4gIF9jcmVhdGVkQ2VsbE1hcCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKGUpIHtcbiAgICB0aGlzLl92aWV3ID0gZS52aWV3O1xuICAgIHZvaWQgMCAhPT0gZS5pc1JldXNlZCAmJiAodGhpcy5faXNSZXVzZWQgPSBlLmlzUmV1c2VkKTtcbiAgICB2b2lkIDAgIT09IGUuaXNDZWxsQWN0aXZlICYmICh0aGlzLl9pc0NlbGxVc2VBY3RpdmUgPSBlLmlzQ2VsbEFjdGl2ZSk7XG4gICAgdm9pZCAwICE9PSBlLnNob3dJbmRleE9mZnNldCAmJiAodGhpcy5fc2hvd0luZGV4T2Zmc2V0ID0gZS5zaG93SW5kZXhPZmZzZXQpO1xuICAgIHZvaWQgMCAhPT0gZS5oaWRlTWFza1NpemUgJiYgKHRoaXMuX2hpZGVNYXNrU2l6ZSA9IGUuaGlkZU1hc2tTaXplKTtcbiAgICB0aGlzLl92aWV3U2l6ZSA9IHRoaXMuX3ZpZXcubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMuX3ZpZXcubm9kZS5vbihcInNjcm9sbGluZ1wiLCB0aGlzLm9uRXZlbnRGb3JDb2xsZWN0aW9uVmlldy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB0aGlzLl92aWV3Lmhvcml6b250YWwgPyBuLmtIb3Jpem9udGFsIDogbi5rVmVydGljYWw7XG4gICAgdGhpcy5fdmlldy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgIHRoaXMuX3ZpZXcuY2FuY2VsSW5uZXJFdmVudHMgPSBmYWxzZTtcbiAgICB0aGlzLmFkZFdpZGdldEZvclZpZXcoKTtcbiAgfVxuICByZXNldFZpZXdTaXplKCkge1xuICAgIHRoaXMuX3ZpZXdTaXplID0gdGhpcy5fdmlldy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgdGhpcy5hZGRXaWRnZXRGb3JWaWV3KCk7XG4gIH1cbiAgb25FdmVudEZvckNvbGxlY3Rpb25WaWV3KCkge1xuICAgIGlmICh0aGlzLl9pc1JlbG9hZCAmJiB0aGlzLl92aWV3ICYmIGNjLmlzVmFsaWQodGhpcy5fdmlldy5ub2RlKSkge1xuICAgICAgdGhpcy5zY3JvbGxWaWV3RGlkU2Nyb2xsICYmIHRoaXMuc2Nyb2xsVmlld0RpZFNjcm9sbCh0aGlzLl92aWV3KTtcbiAgICAgIHRoaXMuY2hlY2tVcGRhdGVDZWxsKHRydWUpO1xuICAgIH1cbiAgfVxuICByZWxvYWREYXRhKGUsIHQpIHtcbiAgICB0aGlzLl9jb3VudE9mSXRlbXMgPSB0aGlzLm51bWJlck9mQ2VsbHNJblRhYmxlVmlldyh0aGlzLl92aWV3KTtcbiAgICB0aGlzLnVwZGF0ZUNlbGxQb3NpdGlvbnMoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnRQb3NpdGlvbihlLCB0KTtcbiAgICB0aGlzLl9pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgZm9yICh2YXIgbyBpbiB0aGlzLl9jcmVhdGVkQ2VsbE1hcCkgKG4gPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtOdW1iZXIobyldKSBpbnN0YW5jZW9mIGNjLk5vZGUgJiYgY2MuaXNWYWxpZChuKSAmJiBuLmRlc3Ryb3koKTtcbiAgICBmb3IgKHZhciBvIGluIHRoaXMuX3JlY3ljbGVRdWV1ZSkge1xuICAgICAgdmFyIG47XG4gICAgICBpZiAobiA9IHRoaXMuX3JlY3ljbGVRdWV1ZVtOdW1iZXIobyldKSBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHIgPSBuW2ldO1xuICAgICAgICByIGluc3RhbmNlb2YgY2MuTm9kZSAmJiBjYy5pc1ZhbGlkKG4pICYmIHIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9yZWN5Y2xlUXVldWUgPSB7fTtcbiAgICB0aGlzLl9jcmVhdGVkQ2VsbE1hcCA9IHt9O1xuICAgIHRoaXMuX2lzUmVsb2FkID0gdHJ1ZTtcbiAgICB0aGlzLmNoZWNrVXBkYXRlQ2VsbCgpO1xuICB9XG4gIGluaXRCb3VuY2VEaXN0YW5jZSgpIHtcbiAgICB2YXIgZSwgdCwgbywgbjtcbiAgICBpZiAodGhpcy5fdmlldy5ob3Jpem9udGFsKSB7XG4gICAgICBudWxsID09PSAodCA9IChlID0gdGhpcy5fdmlldykuc2V0TWF4Qm91bmNlRGlzdGFuY2UpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNhbGwoZSwgdGhpcy5fdmlld1NpemUud2lkdGggLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnVsbCA9PT0gKG4gPSAobyA9IHRoaXMuX3ZpZXcpLnNldE1heEJvdW5jZURpc3RhbmNlKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5jYWxsKG8sIHRoaXMuX3ZpZXdTaXplLmhlaWdodCAvIDIpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVDZWxsUG9zaXRpb25zKCkge1xuICAgIHZhciBlID0gMCxcbiAgICAgIHQgPSAwO1xuICAgIHRoaXMuX3ZDZWxsc1Bvc2l0aW9ucyA9IHt9O1xuICAgIHN3aXRjaCAodGhpcy5fZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIG4ua0hvcml6b250YWw6XG4gICAgICAgIHQgPSB0aGlzLl92aWV3U2l6ZS5oZWlnaHQ7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5fY291bnRPZkl0ZW1zOyBvKyspIHtcbiAgICAgICAgICB0aGlzLl92Q2VsbHNQb3NpdGlvbnNbb10gPSBlO1xuICAgICAgICAgIGUgKz0gdGhpcy5jZWxsU2l6ZUZvclRhYmxlKHRoaXMuX3ZpZXcsIG8pLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZSA9IHRoaXMuX3ZpZXdTaXplLndpZHRoO1xuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgdGhpcy5fY291bnRPZkl0ZW1zOyBvKyspIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuX2NvdW50T2ZJdGVtcyAtIDEgLSBvO1xuICAgICAgICAgIHRoaXMuX3ZDZWxsc1Bvc2l0aW9uc1tpXSA9IHQ7XG4gICAgICAgICAgdCArPSB0aGlzLmNlbGxTaXplRm9yVGFibGUodGhpcy5fdmlldywgaSkuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ByZUlubmVyQ29udGFpbmVyU2l6ZSA9IHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZSAmJiB0aGlzLl9pbm5lckNvbnRhaW5lclNpemUgfHwgbmV3IGNjLlNpemUoZSwgdCk7XG4gICAgdGhpcy5faW5uZXJDb250YWluZXJTaXplID0gbmV3IGNjLlNpemUoZSwgdCk7XG4gIH1cbiAgYWRkV2lkZ2V0Rm9yVmlldygpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3ZpZXcuY29udGVudDtcbiAgICBpZiAoIXRoaXMuX2hpZGVNYXNrU2l6ZSkge1xuICAgICAgdmFyIHQgPSBlLnBhcmVudDtcbiAgICAgIHQuc2V0QW5jaG9yUG9pbnQobmV3IGNjLlZlYzIoMCwgMCkpO1xuICAgICAgdmFyIG8gPSB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpIHx8IHQuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICBvLmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xuICAgICAgby5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgICBvLmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgby5pc0FsaWduUmlnaHQgPSB0cnVlO1xuICAgICAgby50b3AgPSAwO1xuICAgICAgby5ib3R0b20gPSAwO1xuICAgICAgby5sZWZ0ID0gMDtcbiAgICAgIG8ucmlnaHQgPSAwO1xuICAgICAgby51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICB9XG4gICAgZS5zZXRBbmNob3JQb2ludChuZXcgY2MuVmVjMigwLCAwKSk7XG4gICAgZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLCAwKSk7XG4gICAgdmFyIGkgPSBlLmdldENvbXBvbmVudChjYy5XaWRnZXQpIHx8IGUuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PSBuLmtIb3Jpem9udGFsKSB7XG4gICAgICBpLnRvcCA9IDA7XG4gICAgICBpLmJvdHRvbSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kaXJlY3Rpb24gPT0gbi5rVmVydGljYWwpIHtcbiAgICAgIGkubGVmdCA9IDA7XG4gICAgICBpLnJpZ2h0ID0gMDtcbiAgICB9XG4gICAgaS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICB0aGlzLmluaXRCb3VuY2VEaXN0YW5jZSgpO1xuICB9XG4gIHVwZGF0ZUNvbnRlbnRQb3NpdGlvbihlLCB0KSB7XG4gICAgdGhpcy5fdmlldy5jb250ZW50LnNldENvbnRlbnRTaXplKHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZSk7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PSBuLmtIb3Jpem9udGFsKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX3ZpZXdTaXplLndpZHRoIC0gdGhpcy5faW5uZXJDb250YWluZXJTaXplLndpZHRoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgciA9IG8gPCAwID8gbyA6IDAsXG4gICAgICAgIGEgPSAwO1xuICAgICAgZSAmJiAoYSA9IGUueCk7XG4gICAgICBpZiAoYSA8IHIpIHtcbiAgICAgICAgYSA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID4gaSAmJiAoYSA9IGkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmlldy5zZXRDb250ZW50UG9zaXRpb24obmV3IGNjLlZlYzIoYSwgMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbCA9IHRoaXMuX3ZpZXdTaXplLmhlaWdodCAtIHRoaXMuX2lubmVyQ29udGFpbmVyU2l6ZS5oZWlnaHQ7XG4gICAgICBpZiAobCA8IDApIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIGwgPSByID0gbDtcbiAgICAgICAgaWYgKGUpIGlmICh0KSBsID0gZS55O2Vsc2Uge1xuICAgICAgICAgIHZhciBzID0gdGhpcy5fcHJlSW5uZXJDb250YWluZXJTaXplLmhlaWdodCAtIE1hdGguYWJzKGUueSk7XG4gICAgICAgICAgbCA9IC0odGhpcy5faW5uZXJDb250YWluZXJTaXplLmhlaWdodCAtIHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsIDw9IHIpIHtcbiAgICAgICAgICBsID0gcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsID49IGkgJiYgKGwgPSBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fdmlldy5zZXRDb250ZW50UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgbCkpO1xuICAgIH1cbiAgfVxuICBkZXF1ZXVlQ2VsbEJ5S2V5KGUpIHtcbiAgICBlID0gZSB8fCBcImRlZlwiO1xuICAgIHZhciB0ID0gdGhpcy5fcmVjeWNsZVF1ZXVlW2VdO1xuICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMCA/IHQucG9wKCkgOiBudWxsO1xuICB9XG4gIGdldENlbGxCeUluZGV4KGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZENlbGxNYXBbZV07XG4gIH1cbiAgZ2V0Q291bnRPZkNlbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudENlbGxzKCkubGVuZ3RoO1xuICB9XG4gIGdldEN1cnJlbnRDZWxscygpIHtcbiAgICB2YXIgZSA9IFtdO1xuICAgIGZvciAodmFyIHQgaW4gdGhpcy5fY3JlYXRlZENlbGxNYXApIHtcbiAgICAgIHZhciBvID0gdGhpcy5fY3JlYXRlZENlbGxNYXBbTnVtYmVyKHQpXTtcbiAgICAgIG8gaW5zdGFuY2VvZiBjYy5Ob2RlICYmIG8uYWN0aXZlICYmIGUucHVzaChvKTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZ2V0Q29udGVudFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LmdldENvbnRlbnRQb3NpdGlvbigpO1xuICB9XG4gIHNldENvbnRlbnRQb3NpdGlvbihlLCB0ID0gZmFsc2UpIHtcbiAgICB0aGlzLl92aWV3LnNldENvbnRlbnRQb3NpdGlvbihlKTtcbiAgICB0aGlzLmNoZWNrVXBkYXRlQ2VsbChmYWxzZSwgdCk7XG4gIH1cbiAgcmVGcmVzaEN1ckNlbGxzKCkge1xuICAgIHRoaXMudXBkYXRlQ2VsbFBvc2l0aW9ucygpO1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5fY3JlYXRlZENlbGxNYXApIHtcbiAgICAgIHZhciB0ID0gTnVtYmVyKGUpLFxuICAgICAgICBvID0gdGhpcy5fY3JlYXRlZENlbGxNYXBbdF07XG4gICAgICBpZiAobyBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmdldENlbGxQb3NpdGlvbih0KTtcbiAgICAgICAgby5zZXRQb3NpdGlvbihuKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2VsbEFjdGl2ZShvKSkge1xuICAgICAgICAgIHRoaXMuX3NldENlbGxBY3RpdmUobywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuY2VsbFdpbGxIaWRlICYmIHRoaXMuY2VsbFdpbGxIaWRlKHRoaXMuX3ZpZXcsIHQsIG8pO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JldXNlZCkge1xuICAgICAgICAgICAgdmFyIGkgPSBvLmNlbGxUeXBlO1xuICAgICAgICAgICAgaSB8fCAoaSA9IFwiZGVmXCIpO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLl9yZWN5Y2xlUXVldWVbaV0gfHwgW107XG4gICAgICAgICAgICByLnB1c2gobyk7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkQ2VsbE1hcFt0XSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9yZWN5Y2xlUXVldWVbaV0gPSByO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrVXBkYXRlQ2VsbCgpO1xuICB9XG4gIGdldFN0YXJ0TkVuZEluZGV4KCkge1xuICAgIGlmICgwID09IHRoaXMuX2NvdW50T2ZJdGVtcykgcmV0dXJuIHtcbiAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICBlbmRJbmRleDogMFxuICAgIH07XG4gICAgdmFyIGUgPSBudWxsLFxuICAgICAgdCA9IG51bGw7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PSBuLmtIb3Jpem9udGFsKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX3ZpZXcuZ2V0Q29udGVudFBvc2l0aW9uKCkueDtcbiAgICAgIGlmIChvID4gMCkge1xuICAgICAgICBlID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2NvdW50T2ZJdGVtcyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdmFyIHIgPSB0aGlzLl92Q2VsbHNQb3NpdGlvbnNbaV07XG4gICAgICAgICAgaWYgKG51bGwgPT09IHQgJiYgciA8PSB0aGlzLl92aWV3U2l6ZS53aWR0aCAtIG8pIHtcbiAgICAgICAgICAgIHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhID0gTWF0aC5hYnMobyksXG4gICAgICAgICAgbCA9IGEgKyB0aGlzLl92aWV3U2l6ZS53aWR0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2NvdW50T2ZJdGVtczsgaSsrKSB7XG4gICAgICAgICAgciA9IHRoaXMuX3ZDZWxsc1Bvc2l0aW9uc1tpXTtcbiAgICAgICAgICB2YXIgcyA9IHRoaXMuY2VsbFNpemVGb3JUYWJsZSh0aGlzLl92aWV3LCBpKS53aWR0aDtcbiAgICAgICAgICBpZiAobnVsbCA9PT0gZSAmJiByICsgcyA+PSBhKSB7XG4gICAgICAgICAgICBlID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSB0aGlzLl9jb3VudE9mSXRlbXMgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHIgPSB0aGlzLl92Q2VsbHNQb3NpdGlvbnNbaV07XG4gICAgICAgICAgaWYgKG51bGwgPT09IHQgJiYgciA8PSBsKSB7XG4gICAgICAgICAgICB0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudWxsID09PSB0ICYmICh0ID0gZSk7XG4gICAgICAgIHQgKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGMgPSB0aGlzLl92aWV3LmdldENvbnRlbnRQb3NpdGlvbigpLnk7XG4gICAgICBjID4gMCAmJiAoYyA9IDApO1xuICAgICAgdmFyIHUgPSBNYXRoLmFicyhjKSxcbiAgICAgICAgcCA9IHUgKyB0aGlzLl92aWV3U2l6ZS5oZWlnaHQ7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fY291bnRPZkl0ZW1zOyBpKyspIHtcbiAgICAgICAgciA9IHRoaXMuX3ZDZWxsc1Bvc2l0aW9uc1tpXTtcbiAgICAgICAgaWYgKG51bGwgPT09IGUgJiYgciA8PSBwKSB7XG4gICAgICAgICAgZSA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbm5lckNvbnRhaW5lclNpemUuaGVpZ2h0IDw9IHRoaXMuX3ZpZXdTaXplLmhlaWdodCkgdCA9IHRoaXMuX2NvdW50T2ZJdGVtcyAtIDE7ZWxzZSBmb3IgKGkgPSB0aGlzLl9jb3VudE9mSXRlbXMgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICByID0gdGhpcy5fdkNlbGxzUG9zaXRpb25zW2ldO1xuICAgICAgICB2YXIgZiA9IHRoaXMuY2VsbFNpemVGb3JUYWJsZSh0aGlzLl92aWV3LCBpKS5oZWlnaHQ7XG4gICAgICAgIGlmIChudWxsID09PSB0ICYmIHIgKyBmID49IHUpIHtcbiAgICAgICAgICB0ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbnVsbCA9PT0gdCAmJiAodCA9IGUpO1xuICAgICAgdCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRJbmRleDogTWF0aC5tYXgoZSAtIHRoaXMuX3Nob3dJbmRleE9mZnNldCwgMCksXG4gICAgICBlbmRJbmRleDogTWF0aC5taW4odCArIHRoaXMuX3Nob3dJbmRleE9mZnNldCwgdGhpcy5fY291bnRPZkl0ZW1zKVxuICAgIH07XG4gIH1cbiAgY2hlY2tVcGRhdGVDZWxsKGUgPSBmYWxzZSwgdCA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVsb2FkKSB7XG4gICAgICBmb3IgKHZhciBvID0gdGhpcy5nZXRTdGFydE5FbmRJbmRleCgpLCBuID0gby5zdGFydEluZGV4LCBpID0gby5lbmRJbmRleCwgciA9IG47IHIgPCBpOyByKyspIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtyXTtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2lzQ2VsbEFjdGl2ZShhKSB8fCB0aGlzLl9pc0NlbGxBY3RpdmUoYSkgJiYgdCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Q2VsbEFjdGl2ZShhLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY2VsbFdpbGxTaG93ICYmIHRoaXMuY2VsbFdpbGxTaG93KHRoaXMuX3ZpZXcsIHIsIGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbCA9IHRoaXMuY2VsbEF0SW5kZXgodGhpcy5fdmlldywgcik7XG4gICAgICAgICAgdGhpcy5fc2V0Q2VsbEFjdGl2ZShsLCB0cnVlKTtcbiAgICAgICAgICBsLmFuY2hvclggPSAwO1xuICAgICAgICAgIGwuYW5jaG9yWSA9IDA7XG4gICAgICAgICAgdmFyIHMgPSB0aGlzLmdldENlbGxQb3NpdGlvbihyKTtcbiAgICAgICAgICBsLnNldFBvc2l0aW9uKHMpO1xuICAgICAgICAgIGwucGFyZW50IHx8IHRoaXMuX3ZpZXcuY29udGVudC5hZGRDaGlsZChsKTtcbiAgICAgICAgICB0aGlzLmNlbGxXaWxsU2hvdyAmJiB0aGlzLmNlbGxXaWxsU2hvdyh0aGlzLl92aWV3LCByLCBsKTtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVkQ2VsbE1hcFtyXSA9IGw7XG4gICAgICAgIH1cbiAgICAgICAgZSAmJiBhIGluc3RhbmNlb2YgY2MuTm9kZSAmJiB0aGlzLl9pc0NlbGxBY3RpdmUoYSkgJiYgdGhpcy5jZWxsV2lsbE1vdmUgJiYgdGhpcy5jZWxsV2lsbE1vdmUodGhpcy5fdmlldywgciwgYSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBjIGluIHRoaXMuX2NyZWF0ZWRDZWxsTWFwKSB7XG4gICAgICAgIHIgPSBOdW1iZXIoYyk7XG4gICAgICAgIHZhciB1ID0gdGhpcy5fY3JlYXRlZENlbGxNYXBbcl07XG4gICAgICAgIGlmICgociA8IG4gfHwgciA+IGkgLSAxKSAmJiB1IGluc3RhbmNlb2YgY2MuTm9kZSAmJiB0aGlzLl9pc0NlbGxBY3RpdmUodSkpIHtcbiAgICAgICAgICB0aGlzLl9zZXRDZWxsQWN0aXZlKHUsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmNlbGxXaWxsSGlkZSAmJiB0aGlzLmNlbGxXaWxsSGlkZSh0aGlzLl92aWV3LCByLCB1KTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSZXVzZWQpIHtcbiAgICAgICAgICAgIHZhciBwID0gdS5jZWxsVHlwZTtcbiAgICAgICAgICAgIHAgfHwgKHAgPSBcImRlZlwiKTtcbiAgICAgICAgICAgIHZhciBmID0gdGhpcy5fcmVjeWNsZVF1ZXVlW3BdIHx8IFtdO1xuICAgICAgICAgICAgZi5wdXNoKHUpO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZENlbGxNYXBbcl0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcmVjeWNsZVF1ZXVlW3BdID0gZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2lzQ2VsbEFjdGl2ZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQ2VsbFVzZUFjdGl2ZSA/IGUuYWN0aXZlIDogMjU1ID09PSBlLm9wYWNpdHk7XG4gIH1cbiAgX3NldENlbGxBY3RpdmUoZSwgdCkge1xuICAgIGlmICh0aGlzLl9pc0NlbGxVc2VBY3RpdmUpIGUuYWN0aXZlID0gdDtlbHNlIHtcbiAgICAgIFwibnVtYmVyXCIgIT0gdHlwZW9mIGUucmVhbFNjYWxlICYmIChlLnJlYWxTY2FsZSA9IGUuc2NhbGUpO1xuICAgICAgZS5zY2FsZSA9IHQgPyBlLnJlYWxTY2FsZSA6IDA7XG4gICAgICBlLm9wYWNpdHkgPSB0ID8gMjU1IDogMDtcbiAgICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0Q2VsbFBvc2l0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3ZDZWxsc1Bvc2l0aW9uc1tlXTtcbiAgICBzd2l0Y2ggKHRoaXMuX2RpcmVjdGlvbikge1xuICAgICAgY2FzZSBuLmtIb3Jpem9udGFsOlxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodCwgMCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoMCwgdCk7XG4gICAgfVxuICB9XG4gIGNsZWFyQ2VsbENoaWxkcmVuKCkge1xuICAgIHRoaXMuZ2V0Q3VycmVudENlbGxzKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICB9KTtcbiAgfVxuICByZWZyZXNoVGFibGVWaWV3KGUsIHQpIHtcbiAgICB0aGlzLnJlbG9hZERhdGEoKTtcbiAgICBmb3IgKHZhciBvID0gdGhpcy5udW1iZXJPZkNlbGxzSW5UYWJsZVZpZXcodGhpcy5fdmlldyksIG4gPSAwLCBpID0gMDsgaSA8IG87IGkrKykgKGEgPSB0aGlzLmdldENlbGxCeUluZGV4KGkpKSAmJiBhLmFjdGl2ZSAmJiBuKys7XG4gICAgdmFyIHIgPSB0IC8gKG4gPSBuIHx8IDEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBvOyBpKyspIHtcbiAgICAgIHZhciBhO1xuICAgICAgaWYgKChhID0gdGhpcy5nZXRDZWxsQnlJbmRleChpKSkgJiYgYS5hY3RpdmUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGEpO1xuICAgICAgICBjYy50d2VlbihhKS5zZXQoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkuZGVsYXkoZSkudG8oMC4xLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIGUgKz0gcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2Nyb2xsVG9Qb3MoZSkge1xuICAgIGlmICh0aGlzLl92aWV3KSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX3ZpZXcuY29udGVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZSksXG4gICAgICAgIG8gPSB0aGlzLl92aWV3Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykuc3ViKHQpLFxuICAgICAgICBuID0gdGhpcy5fdmlldy5nZXRTY3JvbGxPZmZzZXQoKS5hZGQobyk7XG4gICAgICB0aGlzLl92aWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKC1uLngsIG4ueSksIDAuMSk7XG4gICAgfVxuICB9XG4gIHNjcm9sbFRvT2Zmc2V0KGUsIHQgPSAwLjEpIHtcbiAgICB0aGlzLl92aWV3ICYmIHRoaXMuX3ZpZXcuc2Nyb2xsVG9PZmZzZXQoZSwgdCk7XG4gIH1cbiAgc2Nyb2xsVG9Cb3R0b20oZSA9IDAuMSkge1xuICAgIHRoaXMuX3ZpZXcgJiYgdGhpcy5fdmlldy5zY3JvbGxUb0JvdHRvbShlKTtcbiAgfVxuICBzY3JvbGxUb1RvcChlID0gMC4xKSB7XG4gICAgdGhpcy5fdmlldyAmJiB0aGlzLl92aWV3LnNjcm9sbFRvVG9wKGUpO1xuICB9XG4gIHNjcm9sbFRvSW5kZXgoZSwgdCA9IDAuMykge1xuICAgIGlmICh0aGlzLl92aWV3ICYmICEoZSA8IDAgfHwgZSA+PSB0aGlzLl9jb3VudE9mSXRlbXMpKSB7XG4gICAgICAwID09PSBPYmplY3Qua2V5cyh0aGlzLl92Q2VsbHNQb3NpdGlvbnMpLmxlbmd0aCAmJiB0aGlzLnVwZGF0ZUNlbGxQb3NpdGlvbnMoKTtcbiAgICAgIHZhciBvLFxuICAgICAgICBpID0gdGhpcy5fdkNlbGxzUG9zaXRpb25zW2VdLFxuICAgICAgICByID0gdGhpcy5jZWxsU2l6ZUZvclRhYmxlKHRoaXMuX3ZpZXcsIGUpO1xuICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gbi5rSG9yaXpvbnRhbCkge1xuICAgICAgICB2YXIgYSA9IGkgKyAwLjUgKiByLndpZHRoO1xuICAgICAgICBvID0gY2MudjIoYSwgMC41ICogci5oZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSBpICsgMC41ICogci5oZWlnaHQ7XG4gICAgICAgIG8gPSBjYy52MigwLjUgKiByLndpZHRoLCBsKTtcbiAgICAgIH1cbiAgICAgIHZhciBzLFxuICAgICAgICBjID0gdGhpcy5fdmlldy5jb250ZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihvKSxcbiAgICAgICAgdSA9IHRoaXMuX3ZpZXcubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKS5zdWIoYyksXG4gICAgICAgIHAgPSB0aGlzLl92aWV3LmdldFNjcm9sbE9mZnNldCgpO1xuICAgICAgcyA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gbi5rSG9yaXpvbnRhbCA/IGNjLnYyKHAueCAtIHUueCwgcC55KSA6IGNjLnYyKHAueCwgcC55ICsgdS55KTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9PZmZzZXQocywgdCk7XG4gICAgfVxuICB9XG59Il19