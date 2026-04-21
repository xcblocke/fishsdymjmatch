"use strict";
cc._RF.push(module, '5e46c3xSHJMSYkUDOrXuq6s', 'BlockInputRefWithParamEffect');
// Scripts/BlockInputRefWithParamEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputRefWithParamEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BlockInputRefWithParamEffect = /** @class */ (function (_super) {
    __extends(BlockInputRefWithParamEffect, _super);
    function BlockInputRefWithParamEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BlockInputRefWithParam;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BlockInputRefWithParamEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BlockInputRefWithParamEffect;
}(BaseEffect_1.default));
exports.BlockInputRefWithParamEffect = BlockInputRefWithParamEffect;

cc._RF.pop();