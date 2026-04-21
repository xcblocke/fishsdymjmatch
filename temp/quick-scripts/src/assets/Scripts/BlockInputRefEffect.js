"use strict";
cc._RF.push(module, '7c36f5o88RKkIpz7BpE9ixz', 'BlockInputRefEffect');
// Scripts/BlockInputRefEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputRefEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BlockInputRefEffect = /** @class */ (function (_super) {
    __extends(BlockInputRefEffect, _super);
    function BlockInputRefEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BlockInputRef;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BlockInputRefEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BlockInputRefEffect;
}(BaseEffect_1.default));
exports.BlockInputRefEffect = BlockInputRefEffect;

cc._RF.pop();