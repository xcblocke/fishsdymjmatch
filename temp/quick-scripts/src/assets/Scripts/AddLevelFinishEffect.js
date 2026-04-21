"use strict";
cc._RF.push(module, '534f07qt1JKRIFxnJlK1guV', 'AddLevelFinishEffect');
// Scripts/AddLevelFinishEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelFinishEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddLevelFinishEffect = /** @class */ (function (_super) {
    __extends(AddLevelFinishEffect, _super);
    function AddLevelFinishEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddLevelFinish;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddLevelFinishEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddLevelFinishEffect;
}(BaseEffect_1.default));
exports.AddLevelFinishEffect = AddLevelFinishEffect;

cc._RF.pop();