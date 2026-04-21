"use strict";
cc._RF.push(module, '754c9Ve4X1G7a4b4vpefjGN', 'EmptyEffect');
// Scripts/EmptyEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var EmptyEffect = /** @class */ (function (_super) {
    __extends(EmptyEffect, _super);
    function EmptyEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Empty;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(EmptyEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return EmptyEffect;
}(BaseEffect_1.default));
exports.EmptyEffect = EmptyEffect;

cc._RF.pop();