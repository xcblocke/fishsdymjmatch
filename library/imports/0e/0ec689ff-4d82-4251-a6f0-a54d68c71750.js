"use strict";
cc._RF.push(module, '0ec68n/TYJCUabwpU1oxxdQ', 'PolygonButton');
// Scripts/PolygonButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var PolygonButton = /** @class */ (function (_super) {
    __extends(PolygonButton, _super);
    function PolygonButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRegularPolygon = true;
        _this.showDebugPolygon = false;
        _this.clickAnim = false;
        _this.pointCount = 0;
        _this.radius = 0;
        _this.offset = cc.Vec2.ZERO;
        _this.points = [];
        _this._isMove = false;
        _this._ignoreClickAudio = false;
        _this._clickAnim = false;
        _this._scaleX = 1;
        _this._scaleY = 1;
        _this._originalHitTest = null;
        return _this;
    }
    PolygonButton.prototype.onLoad = function () {
        this._originalHitTest = this.node._hitTest.bind(this.node);
        this.node._hitTest = this._hitTest.bind(this);
        this.isRegularPolygon && this.calcPoints();
    };
    PolygonButton.prototype.start = function () {
        if (this.showDebugPolygon) {
            this.showPolygon();
        }
        else {
            this.clearPolygonShow();
        }
        var e = this.node;
        this._scaleX = e.scaleX;
        this._scaleY = e.scaleY;
        e.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        e.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    PolygonButton.prototype.onDestroy = function () {
        var e = this.node;
        e.off(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        e.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        e.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        e.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    PolygonButton.prototype.initParams = function (e) {
        this.points = e.points ? e.points : this.points;
        this._clickAnim = e.clickAnim ? e.clickAnim : this._clickAnim;
        var t = e.regularPolygon;
        if (t) {
            this.radius = t.radius ? t.radius : this.radius;
            this.pointCount = t.pointCount ? t.pointCount : this.pointCount;
            this.offset = t.offset ? t.offset : this.offset;
            this.calcPoints();
        }
    };
    PolygonButton.prototype.registerClick = function (e) {
        this._callback = e;
    };
    PolygonButton.prototype._hitTest = function (e) {
        return !!this.checkBtnPolygonCollider(e) && this._originalHitTest(e, this.node);
    };
    PolygonButton.prototype.onTouchBegin = function (e) {
        this._isMove = false;
        e.stopPropagation();
        this.clickAnim && this.playClickAnim(0.9 * this._scaleX, 0.9 * this._scaleY);
    };
    PolygonButton.prototype.onTouchMove = function (e) {
        var t = e.getLocation(), o = e.getStartLocation();
        t.sub(o).mag() > 20 && (this._isMove = true);
    };
    PolygonButton.prototype.onTouchEnd = function (e) {
        e.stopPropagation();
        this._isMove || this._callback && this._callback(e);
        this.onTouchCancel(e);
    };
    PolygonButton.prototype.onTouchCancel = function () {
        this._isMove = false;
        this.clickAnim && this.playClickAnim(this._scaleX, this._scaleY);
    };
    PolygonButton.prototype.playClickAnim = function (e, t) {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(0.1, {
            scaleX: e,
            scaleY: t
        }).start();
    };
    PolygonButton.prototype.checkBtnPolygonCollider = function (e) {
        if (this.points.length < 3)
            return true;
        var t = this.node.convertToNodeSpaceAR(e);
        return cc.Intersection.pointInPolygon(t, this.points);
    };
    PolygonButton.prototype.calcPoints = function () {
        this.points = [];
        for (var e = 0; e < this.pointCount; e++) {
            var t = this.offset.x + this.radius * Math.cos(2 * Math.PI * e / this.pointCount), o = this.offset.y + this.radius * Math.sin(2 * Math.PI * e / this.pointCount);
            this.points[e] = cc.v2(t, o);
        }
    };
    PolygonButton.prototype.showPolygon = function (e, t, o, n) {
        if (e === void 0) { e = 2; }
        if (t === void 0) { t = cc.Color.RED; }
        if (o === void 0) { o = true; }
        if (n === void 0) { n = cc.color(255, 0, 0, 50); }
        var i = this.node.getChildByName("PolygonButtonDebugNode");
        if (null == i) {
            i = new cc.Node("PolygonButtonDebugNode");
            this.node.addChild(i, 10000, "PolygonButtonDebugNode");
        }
        i.width = this.node.width;
        i.height = this.node.height;
        i.setAnchorPoint(this.node.getAnchorPoint());
        i.setPosition(0, 0);
        var r = i.getComponent(cc.Graphics) || i.addComponent(cc.Graphics);
        r.clear();
        r.lineWidth = e;
        r.strokeColor = t;
        r.fillColor = n;
        var a = this.points[0];
        r.moveTo(a.x, a.y);
        for (var l = 1; l < this.points.length; l++) {
            var s = this.points[l];
            r.lineTo(s.x, s.y);
        }
        r.lineTo(a.x, a.y);
        r.moveTo(a.x, a.y);
        o && r.fill();
        r.stroke();
    };
    PolygonButton.prototype.clearPolygonShow = function () {
        var e = this.node.getChildByName("PolygonButtonDebugNode");
        null != e && e.destroy();
    };
    __decorate([
        property({
            displayName: "是否为正多边形"
        })
    ], PolygonButton.prototype, "isRegularPolygon", void 0);
    __decorate([
        property({
            displayName: "是否显示调试框"
        })
    ], PolygonButton.prototype, "showDebugPolygon", void 0);
    __decorate([
        property({
            displayName: "是否播放点击缩放动画"
        })
    ], PolygonButton.prototype, "clickAnim", void 0);
    __decorate([
        property({
            type: cc.Integer,
            displayName: "正多边形顶点数量",
            visible: function () {
                return this.isRegularPolygon;
            }
        })
    ], PolygonButton.prototype, "pointCount", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: "正多边形半径",
            visible: function () {
                return this.isRegularPolygon;
            }
        })
    ], PolygonButton.prototype, "radius", void 0);
    __decorate([
        property({
            displayName: "坐标偏移",
            tooltip: "多边形区域距离坐标原点偏移",
            visible: function () {
                return this.isRegularPolygon;
            }
        })
    ], PolygonButton.prototype, "offset", void 0);
    __decorate([
        property({
            type: [cc.Vec2],
            tooltip: "多边形定点位置信息（局部坐标，至少3个点）",
            visible: function () {
                return !this.isRegularPolygon;
            }
        })
    ], PolygonButton.prototype, "points", void 0);
    PolygonButton = __decorate([
        ccclass,
        executeInEditMode()
    ], PolygonButton);
    return PolygonButton;
}(cc.Component));
exports.default = PolygonButton;

cc._RF.pop();