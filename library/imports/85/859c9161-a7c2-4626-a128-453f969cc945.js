"use strict";
cc._RF.push(module, '859c9Fhp8JGJqEoRT+WnMlF', 'UpdateScoreEffect');
// Scripts/UpdateScoreEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateScoreEffect = /** @class */ (function (_super) {
    __extends(UpdateScoreEffect, _super);
    function UpdateScoreEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateScore;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateScoreEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateScoreEffect;
}(BaseEffect_1.default));
exports.UpdateScoreEffect = UpdateScoreEffect;

cc._RF.pop();