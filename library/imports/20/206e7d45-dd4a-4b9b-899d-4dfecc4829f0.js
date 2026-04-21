"use strict";
cc._RF.push(module, '206e71F3UpLm4mdTf7MSCnw', 'FailEffect');
// Scripts/FailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var FailEffect = /** @class */ (function (_super) {
    __extends(FailEffect, _super);
    function FailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Fail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(FailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return FailEffect;
}(BaseEffect_1.default));
exports.FailEffect = FailEffect;

cc._RF.pop();