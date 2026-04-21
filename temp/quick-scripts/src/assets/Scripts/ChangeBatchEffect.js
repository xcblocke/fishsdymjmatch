"use strict";
cc._RF.push(module, 'f3297uYy8tLPYywnxiToqhp', 'ChangeBatchEffect');
// Scripts/ChangeBatchEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ChangeBatchEffect = /** @class */ (function (_super) {
    __extends(ChangeBatchEffect, _super);
    function ChangeBatchEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ChangeBatch;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ChangeBatchEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ChangeBatchEffect;
}(BaseEffect_1.default));
exports.ChangeBatchEffect = ChangeBatchEffect;

cc._RF.pop();