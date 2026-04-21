"use strict";
cc._RF.push(module, '730df3KsiZG8ZR67iyHYBRr', 'ClassicFailEffect');
// Scripts/ClassicFailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicFailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClassicFailEffect = /** @class */ (function (_super) {
    __extends(ClassicFailEffect, _super);
    function ClassicFailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClassicFail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClassicFailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClassicFailEffect;
}(BaseEffect_1.default));
exports.ClassicFailEffect = ClassicFailEffect;

cc._RF.pop();