"use strict";
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