"use strict";
cc._RF.push(module, '3b35eP4N8VG64H+ChKEzcMA', 'UpdateMatchNumEffect');
// Scripts/UpdateMatchNumEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatchNumEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateMatchNumEffect = /** @class */ (function (_super) {
    __extends(UpdateMatchNumEffect, _super);
    function UpdateMatchNumEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateMatchNum;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateMatchNumEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateMatchNumEffect;
}(BaseEffect_1.default));
exports.UpdateMatchNumEffect = UpdateMatchNumEffect;

cc._RF.pop();