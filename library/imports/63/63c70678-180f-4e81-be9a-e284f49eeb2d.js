"use strict";
cc._RF.push(module, '63c70Z4GA9Ogb6a4oT0nust', 'DaxiaoClearTipEffect');
// Scripts/DaxiaoClearTipEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearTipEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DaxiaoClearTipEffect = /** @class */ (function (_super) {
    __extends(DaxiaoClearTipEffect, _super);
    function DaxiaoClearTipEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DaxiaoClearTipEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DaxiaoClearTipEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DaxiaoClearTipEffect;
}(BaseEffect_1.default));
exports.DaxiaoClearTipEffect = DaxiaoClearTipEffect;

cc._RF.pop();