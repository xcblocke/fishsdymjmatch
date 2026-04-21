"use strict";
cc._RF.push(module, '7eddekr16lICask8xLBmWqM', 'GuideEffect');
// subpackages/l_guide/Scripts/GuideEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var GuideEffect = /** @class */ (function (_super) {
    __extends(GuideEffect, _super);
    function GuideEffect(e) {
        var _this = _super.call(this, e) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Guide;
        _this._data = null;
        _this._data = e;
        return _this;
    }
    Object.defineProperty(GuideEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return GuideEffect;
}(BaseEffect_1.default));
exports.GuideEffect = GuideEffect;

cc._RF.pop();