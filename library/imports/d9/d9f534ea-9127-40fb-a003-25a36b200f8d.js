"use strict";
cc._RF.push(module, 'd9f53TqkSdA+6ADJaNrIA+N', 'AddLevelDropAniEffect');
// Scripts/AddLevelDropAniEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropAniEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddLevelDropAniEffect = /** @class */ (function (_super) {
    __extends(AddLevelDropAniEffect, _super);
    function AddLevelDropAniEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddLevelDropAni;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddLevelDropAniEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddLevelDropAniEffect;
}(BaseEffect_1.default));
exports.AddLevelDropAniEffect = AddLevelDropAniEffect;

cc._RF.pop();