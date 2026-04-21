"use strict";
cc._RF.push(module, '6d1bdcFp0dK3alsHDhjhYyY', 'CleanViewEffect');
// Scripts/CleanViewEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanViewEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var CleanViewEffect = /** @class */ (function (_super) {
    __extends(CleanViewEffect, _super);
    function CleanViewEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.CleanView;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(CleanViewEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return CleanViewEffect;
}(BaseEffect_1.default));
exports.CleanViewEffect = CleanViewEffect;

cc._RF.pop();