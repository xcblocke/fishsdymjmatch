"use strict";
cc._RF.push(module, 'b3678CST4JDOrTeE3gQHExC', 'ClearEffect');
// Scripts/ClearEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClearEffect = /** @class */ (function (_super) {
    __extends(ClearEffect, _super);
    function ClearEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Clear;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClearEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClearEffect;
}(BaseEffect_1.default));
exports.ClearEffect = ClearEffect;

cc._RF.pop();