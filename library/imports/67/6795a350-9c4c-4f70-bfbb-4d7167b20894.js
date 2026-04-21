"use strict";
cc._RF.push(module, '6795aNQnExPcL+7TXFnsgiU', 'EndEffect');
// Scripts/EndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var EndEffect = /** @class */ (function (_super) {
    __extends(EndEffect, _super);
    function EndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.End;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(EndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return EndEffect;
}(BaseEffect_1.default));
exports.EndEffect = EndEffect;

cc._RF.pop();