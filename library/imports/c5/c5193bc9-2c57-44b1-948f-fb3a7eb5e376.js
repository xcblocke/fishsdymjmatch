"use strict";
cc._RF.push(module, 'c5193vJLFdEsZSP+zp+teN2', 'TouchCancelEffect');
// Scripts/TouchCancelEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchCancelEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var TouchCancelEffect = /** @class */ (function (_super) {
    __extends(TouchCancelEffect, _super);
    function TouchCancelEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.TouchCancel;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(TouchCancelEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return TouchCancelEffect;
}(BaseEffect_1.default));
exports.TouchCancelEffect = TouchCancelEffect;

cc._RF.pop();