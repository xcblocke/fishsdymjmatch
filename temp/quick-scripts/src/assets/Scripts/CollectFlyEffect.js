"use strict";
cc._RF.push(module, '0696daiQglJwo+Fv2nXfdjg', 'CollectFlyEffect');
// Scripts/CollectFlyEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectFlyEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var CollectFlyEffect = /** @class */ (function (_super) {
    __extends(CollectFlyEffect, _super);
    function CollectFlyEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.CollectFly;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(CollectFlyEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return CollectFlyEffect;
}(BaseEffect_1.default));
exports.CollectFlyEffect = CollectFlyEffect;

cc._RF.pop();