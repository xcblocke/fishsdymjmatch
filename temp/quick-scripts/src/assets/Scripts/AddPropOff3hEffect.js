"use strict";
cc._RF.push(module, 'e1a7fxEg+xLQJczBB12W+1n', 'AddPropOff3hEffect');
// Scripts/AddPropOff3hEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPropOff3hEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddPropOff3hEffect = /** @class */ (function (_super) {
    __extends(AddPropOff3hEffect, _super);
    function AddPropOff3hEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddPropOff3h;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddPropOff3hEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddPropOff3hEffect;
}(BaseEffect_1.default));
exports.AddPropOff3hEffect = AddPropOff3hEffect;

cc._RF.pop();