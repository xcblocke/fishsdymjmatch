
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_timeoutStopCombo/Scripts/TimeoutCheckerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf3e9nMy71IQ5msdeB0lqiy', 'TimeoutCheckerComponent');
// subpackages/l_timeoutStopCombo/Scripts/TimeoutCheckerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeoutCheckerComponent = /** @class */ (function (_super) {
    __extends(TimeoutCheckerComponent, _super);
    function TimeoutCheckerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._checkCallback = null;
        _this._checkInterval = 0.5;
        _this._accumulatedTime = 0;
        return _this;
    }
    TimeoutCheckerComponent.prototype.init = function (t, e) {
        if (e === void 0) { e = 0.5; }
        this._checkCallback = t;
        this._checkInterval = e;
        this._accumulatedTime = 0;
    };
    TimeoutCheckerComponent.prototype.update = function (t) {
        if (this._checkCallback) {
            this._accumulatedTime += t;
            if (this._accumulatedTime >= this._checkInterval) {
                this._checkCallback();
                this._accumulatedTime = 0;
            }
        }
    };
    TimeoutCheckerComponent.prototype.onDestroy = function () {
        this._checkCallback = null;
    };
    TimeoutCheckerComponent = __decorate([
        ccclass
    ], TimeoutCheckerComponent);
    return TimeoutCheckerComponent;
}(cc.Component));
exports.default = TimeoutCheckerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbWVvdXRTdG9wQ29tYm8vU2NyaXB0cy9UaW1lb3V0Q2hlY2tlckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUdGLEVBQUUsQ0FBQyxVQUFVLEVBRmYsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUNPLENBQUM7QUFFbEI7SUFBcUQsMkNBQVk7SUFBakU7UUFBQSxxRUFxQkM7UUFwQkMsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQWtCdkIsQ0FBQztJQWpCQyxzQ0FBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLENBQU87UUFBUCxrQkFBQSxFQUFBLE9BQU87UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCx3Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUNELDJDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBcEJrQix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQXFCM0M7SUFBRCw4QkFBQztDQXJCRCxBQXFCQyxDQXJCb0QsRUFBRSxDQUFDLFNBQVMsR0FxQmhFO2tCQXJCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZW91dENoZWNrZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBfY2hlY2tDYWxsYmFjayA9IG51bGw7XG4gIF9jaGVja0ludGVydmFsID0gMC41O1xuICBfYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgaW5pdCh0LCBlID0gMC41KSB7XG4gICAgdGhpcy5fY2hlY2tDYWxsYmFjayA9IHQ7XG4gICAgdGhpcy5fY2hlY2tJbnRlcnZhbCA9IGU7XG4gICAgdGhpcy5fYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgfVxuICB1cGRhdGUodCkge1xuICAgIGlmICh0aGlzLl9jaGVja0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9hY2N1bXVsYXRlZFRpbWUgKz0gdDtcbiAgICAgIGlmICh0aGlzLl9hY2N1bXVsYXRlZFRpbWUgPj0gdGhpcy5fY2hlY2tJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9jaGVja0NhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX2FjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jaGVja0NhbGxiYWNrID0gbnVsbDtcbiAgfVxufSJdfQ==