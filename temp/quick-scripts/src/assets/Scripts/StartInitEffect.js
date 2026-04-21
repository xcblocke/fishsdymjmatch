"use strict";
cc._RF.push(module, 'adfe4TeHDxAoZRfvfuSLcmC', 'StartInitEffect');
// Scripts/StartInitEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartInitEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var StartInitEffect = /** @class */ (function (_super) {
    __extends(StartInitEffect, _super);
    function StartInitEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.StartInit;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(StartInitEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return StartInitEffect;
}(BaseEffect_1.default));
exports.StartInitEffect = StartInitEffect;

cc._RF.pop();