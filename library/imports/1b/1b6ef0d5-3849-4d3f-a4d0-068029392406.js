"use strict";
cc._RF.push(module, '1b6efDVOElNP6TQBoApOSQG', 'UpdateShufflePropEffect');
// Scripts/UpdateShufflePropEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShufflePropEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateShufflePropEffect = /** @class */ (function (_super) {
    __extends(UpdateShufflePropEffect, _super);
    function UpdateShufflePropEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateShuffleProp;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateShufflePropEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateShufflePropEffect;
}(BaseEffect_1.default));
exports.UpdateShufflePropEffect = UpdateShufflePropEffect;

cc._RF.pop();