"use strict";
cc._RF.push(module, '8ad08g4dmxBxpI3XvWSisvv', 'GoalAchieveEffect');
// Scripts/GoalAchieveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalAchieveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var GoalAchieveEffect = /** @class */ (function (_super) {
    __extends(GoalAchieveEffect, _super);
    function GoalAchieveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.GoalAchieve;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(GoalAchieveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return GoalAchieveEffect;
}(BaseEffect_1.default));
exports.GoalAchieveEffect = GoalAchieveEffect;

cc._RF.pop();