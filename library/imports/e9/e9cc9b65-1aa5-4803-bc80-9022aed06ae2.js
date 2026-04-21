"use strict";
cc._RF.push(module, 'e9cc9tlGqVIA7yAkCKu0Gri', 'SelectEffect');
// Scripts/SelectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var SelectEffect = /** @class */ (function (_super) {
    __extends(SelectEffect, _super);
    function SelectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Select;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(SelectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return SelectEffect;
}(BaseEffect_1.default));
exports.SelectEffect = SelectEffect;

cc._RF.pop();