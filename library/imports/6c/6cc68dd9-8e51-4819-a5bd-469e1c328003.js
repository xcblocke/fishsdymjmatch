"use strict";
cc._RF.push(module, '6cc683ZjlFIGaW9Rp4cMoAD', 'AddLevelDropEffect');
// Scripts/AddLevelDropEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddLevelDropEffect = /** @class */ (function (_super) {
    __extends(AddLevelDropEffect, _super);
    function AddLevelDropEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddLevelDrop;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddLevelDropEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddLevelDropEffect;
}(BaseEffect_1.default));
exports.AddLevelDropEffect = AddLevelDropEffect;

cc._RF.pop();