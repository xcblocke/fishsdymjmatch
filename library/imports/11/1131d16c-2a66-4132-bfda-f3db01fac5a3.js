"use strict";
cc._RF.push(module, '1131dFsKmZBMr/a89sB+sWj', 'BeforeEndEffect');
// Scripts/BeforeEndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeEndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BeforeEndEffect = /** @class */ (function (_super) {
    __extends(BeforeEndEffect, _super);
    function BeforeEndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BeforeWin;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BeforeEndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BeforeEndEffect;
}(BaseEffect_1.default));
exports.BeforeEndEffect = BeforeEndEffect;

cc._RF.pop();