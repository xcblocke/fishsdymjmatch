"use strict";
cc._RF.push(module, 'cca840JYbFPE7PNECnz0xXH', 'InitViewEffect');
// Scripts/InitViewEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitViewEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var InitViewEffect = /** @class */ (function (_super) {
    __extends(InitViewEffect, _super);
    function InitViewEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.InitView;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(InitViewEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return InitViewEffect;
}(BaseEffect_1.default));
exports.InitViewEffect = InitViewEffect;

cc._RF.pop();