"use strict";
cc._RF.push(module, '2125bOPBz1HsaHA0hStDM+P', 'PushBatchInfoEffect');
// Scripts/PushBatchInfoEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PushBatchInfoEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var PushBatchInfoEffect = /** @class */ (function (_super) {
    __extends(PushBatchInfoEffect, _super);
    function PushBatchInfoEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.PushBatchInfo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(PushBatchInfoEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return PushBatchInfoEffect;
}(BaseEffect_1.default));
exports.PushBatchInfoEffect = PushBatchInfoEffect;

cc._RF.pop();