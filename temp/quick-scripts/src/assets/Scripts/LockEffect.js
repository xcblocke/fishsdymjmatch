"use strict";
cc._RF.push(module, '93008NwOUZKFqumtAy6jSn4', 'LockEffect');
// Scripts/LockEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LockEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var LockEffect = /** @class */ (function (_super) {
    __extends(LockEffect, _super);
    function LockEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.SelectLock;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(LockEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return LockEffect;
}(BaseEffect_1.default));
exports.LockEffect = LockEffect;

cc._RF.pop();