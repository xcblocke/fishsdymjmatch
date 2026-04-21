"use strict";
cc._RF.push(module, 'f0b7b8/jthJFoTUYAfjA81l', 'InitCollectTargetEffect');
// Scripts/InitCollectTargetEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCollectTargetEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var InitCollectTargetEffect = /** @class */ (function (_super) {
    __extends(InitCollectTargetEffect, _super);
    function InitCollectTargetEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.InitCollectTarget;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(InitCollectTargetEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return InitCollectTargetEffect;
}(BaseEffect_1.default));
exports.InitCollectTargetEffect = InitCollectTargetEffect;

cc._RF.pop();