"use strict";
cc._RF.push(module, 'efb6430njtAkJQS3ykAre9L', 'YogaCardEffect');
// Scripts/YogaCardEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.YogaCardEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var YogaCardEffect = /** @class */ (function (_super) {
    __extends(YogaCardEffect, _super);
    function YogaCardEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.YogaCard;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(YogaCardEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return YogaCardEffect;
}(BaseEffect_1.default));
exports.YogaCardEffect = YogaCardEffect;

cc._RF.pop();