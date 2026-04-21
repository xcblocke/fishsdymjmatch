"use strict";
cc._RF.push(module, '58386PvpJBAM7NOBh13blJV', 'UnSelectEffect');
// Scripts/UnSelectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnSelectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UnSelectEffect = /** @class */ (function (_super) {
    __extends(UnSelectEffect, _super);
    function UnSelectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UnSelect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UnSelectEffect.prototype, "tileId", {
        get: function () {
            return this._data.tileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnSelectEffect.prototype, "withAnimation", {
        get: function () {
            return this._data.withAnimation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnSelectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UnSelectEffect;
}(BaseEffect_1.default));
exports.UnSelectEffect = UnSelectEffect;

cc._RF.pop();