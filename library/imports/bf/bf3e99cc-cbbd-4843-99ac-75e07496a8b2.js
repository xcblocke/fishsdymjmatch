"use strict";
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