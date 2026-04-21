"use strict";
cc._RF.push(module, '895fcgBHdJBwrY/pgq3X0ZQ', 'UpdateCollectTargetEffect');
// Scripts/UpdateCollectTargetEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollectTargetEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateCollectTargetEffect = /** @class */ (function (_super) {
    __extends(UpdateCollectTargetEffect, _super);
    function UpdateCollectTargetEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateCollectTarget;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateCollectTargetEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateCollectTargetEffect;
}(BaseEffect_1.default));
exports.UpdateCollectTargetEffect = UpdateCollectTargetEffect;

cc._RF.pop();