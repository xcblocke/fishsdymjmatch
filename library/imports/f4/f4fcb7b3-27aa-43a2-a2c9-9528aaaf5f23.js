"use strict";
cc._RF.push(module, 'f4fcbezJ6pDoqLJlSiqr18j', 'AddLevelEnterAniEffect');
// Scripts/AddLevelEnterAniEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelEnterAniEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddLevelEnterAniEffect = /** @class */ (function (_super) {
    __extends(AddLevelEnterAniEffect, _super);
    function AddLevelEnterAniEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddLevelEnterAni;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddLevelEnterAniEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddLevelEnterAniEffect;
}(BaseEffect_1.default));
exports.AddLevelEnterAniEffect = AddLevelEnterAniEffect;

cc._RF.pop();