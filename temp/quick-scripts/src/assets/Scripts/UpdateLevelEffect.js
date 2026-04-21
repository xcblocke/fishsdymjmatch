"use strict";
cc._RF.push(module, '47995l29VNDMI+ghVRO/ZpT', 'UpdateLevelEffect');
// Scripts/UpdateLevelEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLevelEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateLevelEffect = /** @class */ (function (_super) {
    __extends(UpdateLevelEffect, _super);
    function UpdateLevelEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateLevel;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateLevelEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateLevelEffect;
}(BaseEffect_1.default));
exports.UpdateLevelEffect = UpdateLevelEffect;

cc._RF.pop();