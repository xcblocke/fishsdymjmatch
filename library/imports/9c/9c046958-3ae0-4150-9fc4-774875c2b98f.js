"use strict";
cc._RF.push(module, '9c046lYOuBBUJ/Ed0h1wrmP', 'ScoreFlotEffect');
// Scripts/ScoreFlotEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreFlotEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ScoreFlotEffect = /** @class */ (function (_super) {
    __extends(ScoreFlotEffect, _super);
    function ScoreFlotEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ScoreFloat;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ScoreFlotEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ScoreFlotEffect;
}(BaseEffect_1.default));
exports.ScoreFlotEffect = ScoreFlotEffect;

cc._RF.pop();