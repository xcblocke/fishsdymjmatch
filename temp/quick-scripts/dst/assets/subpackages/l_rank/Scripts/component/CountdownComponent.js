
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/component/CountdownComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8764113ZRNAbrwhHThaMgBa', 'CountdownComponent');
// subpackages/l_rank/Scripts/component/CountdownComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var CountdownComponent = /** @class */ (function (_super) {
    __extends(CountdownComponent, _super);
    function CountdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = null;
        _this._remainingTime = -1;
        _this._accumulatedTime = 0;
        _this._finishCallback = null;
        _this._customFormatFunc = null;
        return _this;
    }
    CountdownComponent.prototype.onLoad = function () {
        this._label = this.node.getComponent(cc.Label);
        this._label;
    };
    CountdownComponent.prototype.setRemainTime = function (t, e) {
        if (e === void 0) { e = null; }
        t < 0 && (t = 0);
        this._remainingTime = 1000 * t;
        this._accumulatedTime = 0;
        this.updateLabel();
        this._finishCallback = e;
    };
    CountdownComponent.prototype.stop = function () {
        this._remainingTime = -1;
        this._accumulatedTime = 0;
    };
    CountdownComponent.prototype.setFormatFunc = function (t) {
        this._customFormatFunc = t;
        this._remainingTime >= 0 && this.updateLabel();
    };
    CountdownComponent.prototype.update = function (t) {
        var e;
        if (!(this._remainingTime < 0) && this._label) {
            this._accumulatedTime += 1000 * t;
            if (this._accumulatedTime >= 1000) {
                this._remainingTime -= Math.floor(this._accumulatedTime);
                this._accumulatedTime = this._accumulatedTime % 1000;
                this._remainingTime <= 0 && (this._remainingTime = 0);
                this.updateLabel();
                if (this._remainingTime <= 0) {
                    this._remainingTime = -1;
                    null === (e = this._finishCallback) || void 0 === e || e.call(this);
                }
            }
        }
    };
    CountdownComponent.prototype.updateLabel = function () {
        this._label && (this._label.string = this.formatCountdown(this._remainingTime));
    };
    CountdownComponent.prototype.formatCountdown = function (t) {
        if (t <= 0)
            return this.getFormatString(0, 0, 0);
        var e = Math.floor(t / 1000), o = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60;
        return this.getFormatString(o, n, a);
    };
    CountdownComponent.prototype.getFormatString = function (t, e, o) {
        if (this._customFormatFunc)
            return this._customFormatFunc(t, e, o);
        var n = function n(t) {
            return t.toString().padStart(2, "0");
        };
        return n(t) + ":" + n(e) + ":" + n(o);
    };
    CountdownComponent.prototype.onDestroy = function () {
        this.stop();
    };
    CountdownComponent = __decorate([
        mj.class,
        requireComponent(cc.Label)
    ], CountdownComponent);
    return CountdownComponent;
}(cc.Component));
exports.default = CountdownComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9jb21wb25lbnQvQ291bnRkb3duQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBSUYsRUFBRSxDQUFDLFVBQVUsRUFIZixPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixnQkFBZ0Isc0JBQ0QsQ0FBQztBQUdsQjtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQThEQztRQTdEQyxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsb0JBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDOztJQXlEM0IsQ0FBQztJQXhEQyxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNkLENBQUM7SUFDRCwwQ0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQVE7UUFBUixrQkFBQSxFQUFBLFFBQVE7UUFDdkIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELGlDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFD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QyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUE3RGtCLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7T0FDTixrQkFBa0IsQ0E4RHRDO0lBQUQseUJBQUM7Q0E5REQsQUE4REMsQ0E5RCtDLEVBQUUsQ0FBQyxTQUFTLEdBOEQzRDtrQkE5RG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHksXG4gIHJlcXVpcmVDb21wb25lbnRcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQG1qLmNsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5MYWJlbClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZG93bkNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIF9sYWJlbCA9IG51bGw7XG4gIF9yZW1haW5pbmdUaW1lID0gLTE7XG4gIF9hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICBfZmluaXNoQ2FsbGJhY2sgPSBudWxsO1xuICBfY3VzdG9tRm9ybWF0RnVuYyA9IG51bGw7XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLl9sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xhYmVsO1xuICB9XG4gIHNldFJlbWFpblRpbWUodCwgZSA9IG51bGwpIHtcbiAgICB0IDwgMCAmJiAodCA9IDApO1xuICAgIHRoaXMuX3JlbWFpbmluZ1RpbWUgPSAxMDAwICogdDtcbiAgICB0aGlzLl9hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB0aGlzLl9maW5pc2hDYWxsYmFjayA9IGU7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9yZW1haW5pbmdUaW1lID0gLTE7XG4gICAgdGhpcy5fYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgfVxuICBzZXRGb3JtYXRGdW5jKHQpIHtcbiAgICB0aGlzLl9jdXN0b21Gb3JtYXRGdW5jID0gdDtcbiAgICB0aGlzLl9yZW1haW5pbmdUaW1lID49IDAgJiYgdGhpcy51cGRhdGVMYWJlbCgpO1xuICB9XG4gIHVwZGF0ZSh0KSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKCEodGhpcy5fcmVtYWluaW5nVGltZSA8IDApICYmIHRoaXMuX2xhYmVsKSB7XG4gICAgICB0aGlzLl9hY2N1bXVsYXRlZFRpbWUgKz0gMTAwMCAqIHQ7XG4gICAgICBpZiAodGhpcy5fYWNjdW11bGF0ZWRUaW1lID49IDEwMDApIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nVGltZSAtPSBNYXRoLmZsb29yKHRoaXMuX2FjY3VtdWxhdGVkVGltZSk7XG4gICAgICAgIHRoaXMuX2FjY3VtdWxhdGVkVGltZSA9IHRoaXMuX2FjY3VtdWxhdGVkVGltZSAlIDEwMDA7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ1RpbWUgPD0gMCAmJiAodGhpcy5fcmVtYWluaW5nVGltZSA9IDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICAgICAgICB0aGlzLl9yZW1haW5pbmdUaW1lID0gLTE7XG4gICAgICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9maW5pc2hDYWxsYmFjaykgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVMYWJlbCgpIHtcbiAgICB0aGlzLl9sYWJlbCAmJiAodGhpcy5fbGFiZWwuc3RyaW5nID0gdGhpcy5mb3JtYXRDb3VudGRvd24odGhpcy5fcmVtYWluaW5nVGltZSkpO1xuICB9XG4gIGZvcm1hdENvdW50ZG93bih0KSB7XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIHRoaXMuZ2V0Rm9ybWF0U3RyaW5nKDAsIDAsIDApO1xuICAgIHZhciBlID0gTWF0aC5mbG9vcih0IC8gMTAwMCksXG4gICAgICBvID0gTWF0aC5mbG9vcihlIC8gMzYwMCksXG4gICAgICBuID0gTWF0aC5mbG9vcihlICUgMzYwMCAvIDYwKSxcbiAgICAgIGEgPSBlICUgNjA7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybWF0U3RyaW5nKG8sIG4sIGEpO1xuICB9XG4gIGdldEZvcm1hdFN0cmluZyh0LCBlLCBvKSB7XG4gICAgaWYgKHRoaXMuX2N1c3RvbUZvcm1hdEZ1bmMpIHJldHVybiB0aGlzLl9jdXN0b21Gb3JtYXRGdW5jKHQsIGUsIG8pO1xuICAgIHZhciBuID0gZnVuY3Rpb24gbih0KSB7XG4gICAgICByZXR1cm4gdC50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBuKHQpICsgXCI6XCIgKyBuKGUpICsgXCI6XCIgKyBuKG8pO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfVxufSJdfQ==