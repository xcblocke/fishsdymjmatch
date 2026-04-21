"use strict";
cc._RF.push(module, '9855ccaVh9B9Y+qwP1aqMVa', 'CardLockDarkenEffect');
// Scripts/CardLockDarkenEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLockDarkenEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var CardLockDarkenEffect = /** @class */ (function (_super) {
    __extends(CardLockDarkenEffect, _super);
    function CardLockDarkenEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.CardLockDarken;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(CardLockDarkenEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return CardLockDarkenEffect;
}(BaseEffect_1.default));
exports.CardLockDarkenEffect = CardLockDarkenEffect;

cc._RF.pop();