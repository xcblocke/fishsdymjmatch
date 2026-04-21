"use strict";
cc._RF.push(module, '9705awKaa1H0bSaa9jcEz8j', 'BreakBestScoreEffect');
// subpackages/l_classicBest/Scripts/BreakBestScoreEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakBestScoreEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BreakBestScoreEffect = /** @class */ (function (_super) {
    __extends(BreakBestScoreEffect, _super);
    function BreakBestScoreEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BreakBestScore;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BreakBestScoreEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BreakBestScoreEffect;
}(BaseEffect_1.default));
exports.BreakBestScoreEffect = BreakBestScoreEffect;

cc._RF.pop();