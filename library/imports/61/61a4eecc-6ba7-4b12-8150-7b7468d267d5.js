"use strict";
cc._RF.push(module, '61a4e7Ma6dLEoFQe3Ro0mfV', 'BlockInputEffect');
// Scripts/BlockInputEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BlockInputEffect = /** @class */ (function (_super) {
    __extends(BlockInputEffect, _super);
    function BlockInputEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BlockInput;
        _this._data = null;
        _this._data = t;
        void 0 === _this._data.block && (_this._data.block = true);
        return _this;
    }
    Object.defineProperty(BlockInputEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BlockInputEffect;
}(BaseEffect_1.default));
exports.BlockInputEffect = BlockInputEffect;

cc._RF.pop();