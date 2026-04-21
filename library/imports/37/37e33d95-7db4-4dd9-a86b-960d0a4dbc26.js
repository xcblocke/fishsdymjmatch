"use strict";
cc._RF.push(module, '37e332VfbRN2ahrlg0KTbwm', 'MapView');
// Scripts/map/MapView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapView = void 0;
var n = {
    kHorizontal: 0,
    kVertical: 1
};
var MapView = /** @class */ (function () {
    function MapView(e) {
        this._viewSize = new cc.Size(0, 0);
        this._preInnerContainerSize = null;
        this._innerContainerSize = null;
        this._direction = n.kHorizontal;
        this._cellPositions = {};
        this._cellSize = {};
        this._countOfItems = 0;
        this._createdCellMap = {};
        this._poolMap = {};
        this._viewMaskRect = new cc.Rect(0, 0, 0, 0);
        this.viewContentSize = null;
        this.elementTypeAtIndex = null;
        this.elementPosAtIndex = null;
        this.elementSizeAtIndex = null;
        this.elementCount = null;
        this.elementAtIndex = null;
        this.scrollViewDidScroll = null;
        this.elementWillHide = null;
        this.elementWillShow = null;
        this.elementWillMove = null;
        this._view = null;
        this._view = e.view;
        this._viewSize = this._view.node.getContentSize();
        this._view.node.on("scrolling", this.onEventForCollectionView.bind(this));
        this._direction = this._view.horizontal ? n.kHorizontal : n.kVertical;
        this._view.content.destroyAllChildren();
        this._view.cancelInnerEvents = false;
    }
    MapView.prototype.resetViewSize = function () {
        if (cc.isValid(this._view) && cc.isValid(this._view.node)) {
            this._viewSize = this._view.node.getContentSize();
            var e = this._view.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
            this._viewMaskRect = cc.rect(e.x - this._viewSize.width / 2, e.y - this._viewSize.height / 2 * 1.25, this._viewSize.width, 1.25 * this._viewSize.height);
        }
    };
    MapView.prototype.onEventForCollectionView = function () {
        this.scrollViewDidScroll && this.scrollViewDidScroll(this._view);
        this.checkUpdateCell(true);
    };
    MapView.prototype.reloadData = function () {
        this._view.content.destroyAllChildren();
        this._innerContainerSize = this.viewContentSize(this._view);
        this._countOfItems = this.elementCount(this._view);
        this._view.content.setContentSize(this._innerContainerSize);
        var e = this._view.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
        this._viewMaskRect = cc.rect(e.x - this._viewSize.width / 2, e.y - this._viewSize.height / 2 * 1.25, this._viewSize.width, 1.25 * this._viewSize.height);
        this.updateCellPosAndSize();
        this.updateContentPosition();
        this.checkUpdateCell();
    };
    MapView.prototype.updateCellPosAndSize = function () {
        this._cellPositions = {};
        this._cellSize = {};
        for (var e = 0; e < this._countOfItems; e++) {
            this._cellPositions[e] = this.elementPosAtIndex(this._view, e);
            this._cellSize[e] = this.elementSizeAtIndex(this._view, e);
        }
    };
    MapView.prototype.updateContentPosition = function () {
        if (this._direction == n.kHorizontal)
            this._view.setContentPosition(new cc.Vec2(0, 0));
        else {
            var e = this._innerContainerSize.height - this._viewSize.height;
            this._view.setContentPosition(new cc.Vec2(0, e));
        }
    };
    MapView.prototype.getContentPosition = function () {
        return this._view.getContentPosition();
    };
    MapView.prototype.setContentPosition = function (e, t) {
        if (t === void 0) { t = false; }
        var o = this.getTargetOffset(e);
        this._view.setContentPosition(o);
        this.checkUpdateCell(false, t);
    };
    MapView.prototype._setCellActive = function (e, t) {
        cc.isValid(e) && (e.active = t);
    };
    MapView.prototype._getCellPool = function (e) {
        this._poolMap[e] || (this._poolMap[e] = new cc.NodePool());
        return this._poolMap[e];
    };
    MapView.prototype._isCellActive = function (e) {
        return !!cc.isValid(e) && e.active;
    };
    MapView.prototype._getCellType = function (e) {
        return cc.isValid(e) ? e.cellType : "default";
    };
    MapView.prototype.checkUpdateCell = function (e, t) {
        if (e === void 0) { e = false; }
        if (t === void 0) { t = false; }
        for (var o in this._cellPositions) {
            var n = Number(o), i = this._cellPositions[o], r = this._cellSize[o], a = this._view.content.convertToWorldSpaceAR(i), l = cc.rect(a.x - r.width / 2, a.y - r.height / 2, r.width, r.height);
            if (this._viewMaskRect.intersects(l)) {
                var s = this._createdCellMap[o];
                if (cc.isValid(s)) {
                    if (!this._isCellActive(s) || this._isCellActive(s) && t) {
                        this._setCellActive(s, true);
                        this.elementWillShow(this._view, n, s);
                    }
                }
                else {
                    var c = this.elementTypeAtIndex(this._view, n) || "default";
                    s = this._getCellPool(c).get();
                    cc.isValid(s) || (s = this.elementAtIndex(this._view, n));
                    this._setCellActive(s, true);
                    s.setPosition(i);
                    this._view.content.addChild(s);
                    s.parent || this._view.content.addChild(s);
                    this.elementWillShow(this._view, n, s);
                    this._createdCellMap[n] = s;
                }
                e && s instanceof cc.Node && this._isCellActive(s) && this.elementWillMove && this.elementWillMove(this._view, n, s);
            }
            else {
                s = this._createdCellMap[o];
                if (cc.isValid(s)) {
                    c = this._getCellType(s);
                    this._setCellActive(s, false);
                    this.elementWillHide && this.elementWillHide(this._view, n, s);
                    this._getCellPool(c).put(s);
                    this._createdCellMap[n] = null;
                }
            }
        }
    };
    MapView.prototype.clear = function () {
        for (var e in this._poolMap)
            this._poolMap[e].clear();
        for (var t in this._createdCellMap) {
            var o = this._createdCellMap[t];
            cc.isValid(o) && o.destroy();
        }
        this._createdCellMap = {};
        this._cellPositions = {};
        this._cellSize = {};
        this._countOfItems = 0;
    };
    MapView.prototype.scrollToPos = function (e, t) {
        if (t === void 0) { t = 0.1; }
        if (this._view) {
            var o = this.getTargetOffset(e);
            this._view.scrollToOffset(cc.v2(0, o.y), t);
        }
    };
    MapView.prototype.getTargetOffset = function (e) {
        var t = cc.Canvas.instance.node.convertToWorldSpaceAR(cc.Vec2.ZERO), o = this._view.content.convertToNodeSpaceAR(t).sub(e), i = this._view.getScrollOffset().add(o);
        if (this._direction == n.kHorizontal) {
            i.y = 0;
        }
        else {
            i.x = 0;
        }
        return i;
    };
    return MapView;
}());
exports.MapView = MapView;

cc._RF.pop();