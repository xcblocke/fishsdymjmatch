
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PolygonButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BvbHlnb25CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FJRixFQUFFLENBQUMsVUFBVSxFQUhmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLGlCQUFpQix1QkFDRixDQUFDO0FBR2xCO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBbUtDO1FBL0pDLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUl4QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFJekIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQVF2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLFlBQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQVF0QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osc0JBQWdCLEdBQUcsSUFBSSxDQUFDOztJQWlIMUIsQ0FBQztJQWhIQyw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lB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QUFDO0NBbktELEFBbUtDLENBbkswQyxFQUFFLENBQUMsU0FBUyxHQW1LdEQ7a0JBbktvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZXhlY3V0ZUluRWRpdE1vZGVcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KHtcbiAgICBkaXNwbGF5TmFtZTogXCLmmK/lkKbkuLrmraPlpJrovrnlvaJcIlxuICB9KVxuICBpc1JlZ3VsYXJQb2x5Z29uID0gdHJ1ZTtcbiAgQHByb3BlcnR5KHtcbiAgICBkaXNwbGF5TmFtZTogXCLmmK/lkKbmmL7npLrosIPor5XmoYZcIlxuICB9KVxuICBzaG93RGVidWdQb2x5Z29uID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7XG4gICAgZGlzcGxheU5hbWU6IFwi5piv5ZCm5pKt5pS+54K55Ye757yp5pS+5Yqo55S7XCJcbiAgfSlcbiAgY2xpY2tBbmltID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICBkaXNwbGF5TmFtZTogXCLmraPlpJrovrnlvaLpobbngrnmlbDph49cIixcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1JlZ3VsYXJQb2x5Z29uO1xuICAgIH1cbiAgfSlcbiAgcG9pbnRDb3VudDogbnVtYmVyID0gMDtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICBkaXNwbGF5TmFtZTogXCLmraPlpJrovrnlvaLljYrlvoRcIixcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1JlZ3VsYXJQb2x5Z29uO1xuICAgIH1cbiAgfSlcbiAgcmFkaXVzOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoe1xuICAgIGRpc3BsYXlOYW1lOiBcIuWdkOagh+WBj+enu1wiLFxuICAgIHRvb2x0aXA6IFwi5aSa6L655b2i5Yy65Z+f6Led56a75Z2Q5qCH5Y6f54K55YGP56e7XCIsXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNSZWd1bGFyUG9seWdvbjtcbiAgICB9XG4gIH0pXG4gIG9mZnNldCA9IGNjLlZlYzIuWkVSTztcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBbY2MuVmVjMl0sXG4gICAgdG9vbHRpcDogXCLlpJrovrnlvaLlrprngrnkvY3nva7kv6Hmga/vvIjlsYDpg6jlnZDmoIfvvIzoh7PlsJEz5Liq54K577yJXCIsXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmlzUmVndWxhclBvbHlnb247XG4gICAgfVxuICB9KVxuICBwb2ludHM6IFtjYy5WZWMyXSA9IFtdO1xuICBfaXNNb3ZlID0gZmFsc2U7XG4gIF9pZ25vcmVDbGlja0F1ZGlvID0gZmFsc2U7XG4gIF9jbGlja0FuaW0gPSBmYWxzZTtcbiAgX3NjYWxlWCA9IDE7XG4gIF9zY2FsZVkgPSAxO1xuICBfb3JpZ2luYWxIaXRUZXN0ID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuX29yaWdpbmFsSGl0VGVzdCA9IHRoaXMubm9kZS5faGl0VGVzdC5iaW5kKHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLl9oaXRUZXN0ID0gdGhpcy5faGl0VGVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNSZWd1bGFyUG9seWdvbiAmJiB0aGlzLmNhbGNQb2ludHMoKTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5zaG93RGVidWdQb2x5Z29uKSB7XG4gICAgICB0aGlzLnNob3dQb2x5Z29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQb2x5Z29uU2hvdygpO1xuICAgIH1cbiAgICB2YXIgZSA9IHRoaXMubm9kZTtcbiAgICB0aGlzLl9zY2FsZVggPSBlLnNjYWxlWDtcbiAgICB0aGlzLl9zY2FsZVkgPSBlLnNjYWxlWTtcbiAgICBlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdpbiwgdGhpcyk7XG4gICAgZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICBlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICBlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGU7XG4gICAgZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2luLCB0aGlzKTtcbiAgICBlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICBlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICB9XG4gIGluaXRQYXJhbXMoZSkge1xuICAgIHRoaXMucG9pbnRzID0gZS5wb2ludHMgPyBlLnBvaW50cyA6IHRoaXMucG9pbnRzO1xuICAgIHRoaXMuX2NsaWNrQW5pbSA9IGUuY2xpY2tBbmltID8gZS5jbGlja0FuaW0gOiB0aGlzLl9jbGlja0FuaW07XG4gICAgdmFyIHQgPSBlLnJlZ3VsYXJQb2x5Z29uO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnJhZGl1cyA9IHQucmFkaXVzID8gdC5yYWRpdXMgOiB0aGlzLnJhZGl1cztcbiAgICAgIHRoaXMucG9pbnRDb3VudCA9IHQucG9pbnRDb3VudCA/IHQucG9pbnRDb3VudCA6IHRoaXMucG9pbnRDb3VudDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdC5vZmZzZXQgPyB0Lm9mZnNldCA6IHRoaXMub2Zmc2V0O1xuICAgICAgdGhpcy5jYWxjUG9pbnRzKCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZTtcbiAgfVxuICBfaGl0VGVzdChlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jaGVja0J0blBvbHlnb25Db2xsaWRlcihlKSAmJiB0aGlzLl9vcmlnaW5hbEhpdFRlc3QoZSwgdGhpcy5ub2RlKTtcbiAgfVxuICBvblRvdWNoQmVnaW4oZSkge1xuICAgIHRoaXMuX2lzTW92ZSA9IGZhbHNlO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbGlja0FuaW0gJiYgdGhpcy5wbGF5Q2xpY2tBbmltKDAuOSAqIHRoaXMuX3NjYWxlWCwgMC45ICogdGhpcy5fc2NhbGVZKTtcbiAgfVxuICBvblRvdWNoTW92ZShlKSB7XG4gICAgdmFyIHQgPSBlLmdldExvY2F0aW9uKCksXG4gICAgICBvID0gZS5nZXRTdGFydExvY2F0aW9uKCk7XG4gICAgdC5zdWIobykubWFnKCkgPiAyMCAmJiAodGhpcy5faXNNb3ZlID0gdHJ1ZSk7XG4gIH1cbiAgb25Ub3VjaEVuZChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9pc01vdmUgfHwgdGhpcy5fY2FsbGJhY2sgJiYgdGhpcy5fY2FsbGJhY2soZSk7XG4gICAgdGhpcy5vblRvdWNoQ2FuY2VsKGUpO1xuICB9XG4gIG9uVG91Y2hDYW5jZWwoKSB7XG4gICAgdGhpcy5faXNNb3ZlID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja0FuaW0gJiYgdGhpcy5wbGF5Q2xpY2tBbmltKHRoaXMuX3NjYWxlWCwgdGhpcy5fc2NhbGVZKTtcbiAgfVxuICBwbGF5Q2xpY2tBbmltKGUsIHQpIHtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMSwge1xuICAgICAgc2NhbGVYOiBlLFxuICAgICAgc2NhbGVZOiB0XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBjaGVja0J0blBvbHlnb25Db2xsaWRlcihlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDMpIHJldHVybiB0cnVlO1xuICAgIHZhciB0ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpO1xuICAgIHJldHVybiBjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24odCwgdGhpcy5wb2ludHMpO1xuICB9XG4gIGNhbGNQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMucG9pbnRDb3VudDsgZSsrKSB7XG4gICAgICB2YXIgdCA9IHRoaXMub2Zmc2V0LnggKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogZSAvIHRoaXMucG9pbnRDb3VudCksXG4gICAgICAgIG8gPSB0aGlzLm9mZnNldC55ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIGUgLyB0aGlzLnBvaW50Q291bnQpO1xuICAgICAgdGhpcy5wb2ludHNbZV0gPSBjYy52Mih0LCBvKTtcbiAgICB9XG4gIH1cbiAgc2hvd1BvbHlnb24oZSA9IDIsIHQgPSBjYy5Db2xvci5SRUQsIG8gPSB0cnVlLCBuID0gY2MuY29sb3IoMjU1LCAwLCAwLCA1MCkpIHtcbiAgICB2YXIgaSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBvbHlnb25CdXR0b25EZWJ1Z05vZGVcIik7XG4gICAgaWYgKG51bGwgPT0gaSkge1xuICAgICAgaSA9IG5ldyBjYy5Ob2RlKFwiUG9seWdvbkJ1dHRvbkRlYnVnTm9kZVwiKTtcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpLCAxMDAwMCwgXCJQb2x5Z29uQnV0dG9uRGVidWdOb2RlXCIpO1xuICAgIH1cbiAgICBpLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgIGkuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICBpLnNldEFuY2hvclBvaW50KHRoaXMubm9kZS5nZXRBbmNob3JQb2ludCgpKTtcbiAgICBpLnNldFBvc2l0aW9uKDAsIDApO1xuICAgIHZhciByID0gaS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpIHx8IGkuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICByLmNsZWFyKCk7XG4gICAgci5saW5lV2lkdGggPSBlO1xuICAgIHIuc3Ryb2tlQ29sb3IgPSB0O1xuICAgIHIuZmlsbENvbG9yID0gbjtcbiAgICB2YXIgYSA9IHRoaXMucG9pbnRzWzBdO1xuICAgIHIubW92ZVRvKGEueCwgYS55KTtcbiAgICBmb3IgKHZhciBsID0gMTsgbCA8IHRoaXMucG9pbnRzLmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgcyA9IHRoaXMucG9pbnRzW2xdO1xuICAgICAgci5saW5lVG8ocy54LCBzLnkpO1xuICAgIH1cbiAgICByLmxpbmVUbyhhLngsIGEueSk7XG4gICAgci5tb3ZlVG8oYS54LCBhLnkpO1xuICAgIG8gJiYgci5maWxsKCk7XG4gICAgci5zdHJva2UoKTtcbiAgfVxuICBjbGVhclBvbHlnb25TaG93KCkge1xuICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUG9seWdvbkJ1dHRvbkRlYnVnTm9kZVwiKTtcbiAgICBudWxsICE9IGUgJiYgZS5kZXN0cm95KCk7XG4gIH1cbn0iXX0=