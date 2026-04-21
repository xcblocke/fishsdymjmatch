"use strict";
cc._RF.push(module, '2f936oQr3xBy6NXYJYHp+8b', 'TravelEndEffect');
// Scripts/TravelEndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelEndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var TravelEndEffect = /** @class */ (function (_super) {
    __extends(TravelEndEffect, _super);
    function TravelEndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.TravelEnd;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(TravelEndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return TravelEndEffect;
}(BaseEffect_1.default));
exports.TravelEndEffect = TravelEndEffect;

cc._RF.pop();