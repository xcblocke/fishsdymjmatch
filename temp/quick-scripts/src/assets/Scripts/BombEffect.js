"use strict";
cc._RF.push(module, '44124s1DjBP9L/DlK7Jm0BO', 'BombEffect');
// Scripts/BombEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BombEffect = /** @class */ (function (_super) {
    __extends(BombEffect, _super);
    function BombEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Bomb;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BombEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BombEffect;
}(BaseEffect_1.default));
exports.BombEffect = BombEffect;

cc._RF.pop();