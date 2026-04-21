"use strict";
cc._RF.push(module, '5a3bcsqMfxEEbQJVVixq2TS', 'ClassicReviveEffect');
// Scripts/ClassicReviveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClassicReviveEffect = /** @class */ (function (_super) {
    __extends(ClassicReviveEffect, _super);
    function ClassicReviveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClassicRevive;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClassicReviveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClassicReviveEffect;
}(BaseEffect_1.default));
exports.ClassicReviveEffect = ClassicReviveEffect;

cc._RF.pop();