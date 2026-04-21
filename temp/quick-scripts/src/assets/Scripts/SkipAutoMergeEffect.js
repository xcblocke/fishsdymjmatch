"use strict";
cc._RF.push(module, '0f91cdZX2ZMF6tUqNOaCt+u', 'SkipAutoMergeEffect');
// Scripts/SkipAutoMergeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAutoMergeEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var SkipAutoMergeEffect = /** @class */ (function (_super) {
    __extends(SkipAutoMergeEffect, _super);
    function SkipAutoMergeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.SkipAutoMerge;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(SkipAutoMergeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return SkipAutoMergeEffect;
}(BaseEffect_1.default));
exports.SkipAutoMergeEffect = SkipAutoMergeEffect;

cc._RF.pop();