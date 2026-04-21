"use strict";
cc._RF.push(module, '00c78Udh1tIx7LBFyxyHWqD', 'ClickShowLockEffect');
// Scripts/ClickShowLockEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickShowLockEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClickShowLockEffect = /** @class */ (function (_super) {
    __extends(ClickShowLockEffect, _super);
    function ClickShowLockEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClickShowLock;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClickShowLockEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClickShowLockEffect;
}(BaseEffect_1.default));
exports.ClickShowLockEffect = ClickShowLockEffect;

cc._RF.pop();