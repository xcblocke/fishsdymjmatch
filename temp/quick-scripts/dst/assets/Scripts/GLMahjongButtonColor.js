
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GLMahjongButtonColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f05dadkJsRF1qsasLYO4rcC', 'GLMahjongButtonColor');
// Scripts/GLMahjongButtonColor.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLMahjongButtonColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GLMahjongButtonColor = /** @class */ (function (_super) {
    __extends(GLMahjongButtonColor, _super);
    function GLMahjongButtonColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grayBrightness = 210;
        _this.duration = 0.1;
        _this.originalColor = cc.Color.WHITE;
        _this.button = null;
        _this.originalChildColors = new Map();
        return _this;
    }
    GLMahjongButtonColor.prototype.onLoad = function () {
        this.button || (this.button = this.getComponent(cc.Button));
        if (this.button) {
            this.originalColor = this.node.color.clone();
            this.saveChildrenColors(this.node);
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    GLMahjongButtonColor.prototype.saveChildrenColors = function (e) {
        var t = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                t.originalChildColors.set(e, e.color.clone());
                t.saveChildrenColors(e);
            }
        });
    };
    GLMahjongButtonColor.prototype.onTouchStart = function () {
        if (this.button.interactable) {
            var e = cc.color(this.grayBrightness, this.grayBrightness, this.grayBrightness, 255);
            cc.tween(this.node).to(this.duration, {
                color: e
            }).start();
            this.applyGrayToChildren(this.node, e);
        }
    };
    GLMahjongButtonColor.prototype.applyGrayToChildren = function (e, t) {
        var o = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                cc.tween(e).to(o.duration, {
                    color: t
                }).start();
                o.applyGrayToChildren(e, t);
            }
        });
    };
    GLMahjongButtonColor.prototype.onTouchEnd = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.color = this.originalColor.clone();
        this.restoreChildrenColors(this.node);
    };
    GLMahjongButtonColor.prototype.restoreChildrenColors = function (e) {
        var t = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                cc.Tween.stopAllByTarget(e);
                var o = t.originalChildColors.get(e);
                o && (e.color = o.clone());
                t.restoreChildrenColors(e);
            }
        });
    };
    GLMahjongButtonColor.prototype.onDestroy = function () {
        if (this.node) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        this.originalChildColors.clear();
    };
    GLMahjongButtonColor = __decorate([
        ccclass
    ], GLMahjongButtonColor);
    return GLMahjongButtonColor;
}(cc.Component));
exports.GLMahjongButtonColor = GLMahjongButtonColor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dMTWFoam9uZ0J1dHRvbkNvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUdGLEVBQUUsQ0FBQyxVQUFVLEVBRmYsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUNPLENBQUM7QUFFbEI7SUFBMEMsd0NBQVk7SUFBdEQ7UUFBQSxxRUFxRUM7UUFwRUMsb0JBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLG1CQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDL0IsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLHlCQUFtQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBZ0VsQyxDQUFDO0lBL0RDLHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFD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Q0FBQztJQUNMLENBQUM7SUFDRCx3Q0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXBFVSxvQkFBb0I7UUFEaEMsT0FBTztPQUNLLG9CQUFvQixDQXFFaEM7SUFBRCwyQkFBQztDQXJFRCxBQXFFQyxDQXJFeUMsRUFBRSxDQUFDLFNBQVMsR0FxRXJEO0FBckVZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBHTE1haGpvbmdCdXR0b25Db2xvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGdyYXlCcmlnaHRuZXNzID0gMjEwO1xuICBkdXJhdGlvbiA9IDAuMTtcbiAgb3JpZ2luYWxDb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICBidXR0b24gPSBudWxsO1xuICBvcmlnaW5hbENoaWxkQ29sb3JzID0gbmV3IE1hcCgpO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5idXR0b24gfHwgKHRoaXMuYnV0dG9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSk7XG4gICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsQ29sb3IgPSB0aGlzLm5vZGUuY29sb3IuY2xvbmUoKTtcbiAgICAgIHRoaXMuc2F2ZUNoaWxkcmVuQ29sb3JzKHRoaXMubm9kZSk7XG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cbiAgfVxuICBzYXZlQ2hpbGRyZW5Db2xvcnMoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHQub3JpZ2luYWxDaGlsZENvbG9ycy5zZXQoZSwgZS5jb2xvci5jbG9uZSgpKTtcbiAgICAgICAgdC5zYXZlQ2hpbGRyZW5Db2xvcnMoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25Ub3VjaFN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmJ1dHRvbi5pbnRlcmFjdGFibGUpIHtcbiAgICAgIHZhciBlID0gY2MuY29sb3IodGhpcy5ncmF5QnJpZ2h0bmVzcywgdGhpcy5ncmF5QnJpZ2h0bmVzcywgdGhpcy5ncmF5QnJpZ2h0bmVzcywgMjU1KTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGhpcy5kdXJhdGlvbiwge1xuICAgICAgICBjb2xvcjogZVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIHRoaXMuYXBwbHlHcmF5VG9DaGlsZHJlbih0aGlzLm5vZGUsIGUpO1xuICAgIH1cbiAgfVxuICBhcHBseUdyYXlUb0NoaWxkcmVuKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICBjYy50d2VlbihlKS50byhvLmR1cmF0aW9uLCB7XG4gICAgICAgICAgY29sb3I6IHRcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgby5hcHBseUdyYXlUb0NoaWxkcmVuKGUsIHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uVG91Y2hFbmQoKSB7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5vcmlnaW5hbENvbG9yLmNsb25lKCk7XG4gICAgdGhpcy5yZXN0b3JlQ2hpbGRyZW5Db2xvcnModGhpcy5ub2RlKTtcbiAgfVxuICByZXN0b3JlQ2hpbGRyZW5Db2xvcnMoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICAgICAgdmFyIG8gPSB0Lm9yaWdpbmFsQ2hpbGRDb2xvcnMuZ2V0KGUpO1xuICAgICAgICBvICYmIChlLmNvbG9yID0gby5jbG9uZSgpKTtcbiAgICAgICAgdC5yZXN0b3JlQ2hpbGRyZW5Db2xvcnMoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMub3JpZ2luYWxDaGlsZENvbG9ycy5jbGVhcigpO1xuICB9XG59Il19