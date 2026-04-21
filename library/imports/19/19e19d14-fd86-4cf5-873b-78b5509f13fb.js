"use strict";
cc._RF.push(module, '19e190U/YZM9Yc7eLVQnxP7', 'StartAutoMergeEffect');
// Scripts/StartAutoMergeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAutoMergeEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var StartAutoMergeEffect = /** @class */ (function (_super) {
    __extends(StartAutoMergeEffect, _super);
    function StartAutoMergeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.StartAutoMerge;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(StartAutoMergeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return StartAutoMergeEffect;
}(BaseEffect_1.default));
exports.StartAutoMergeEffect = StartAutoMergeEffect;

cc._RF.pop();