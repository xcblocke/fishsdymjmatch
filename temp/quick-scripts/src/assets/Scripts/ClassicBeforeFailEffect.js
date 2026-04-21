"use strict";
cc._RF.push(module, '62db0/2gahIxr0IPWt09o7+', 'ClassicBeforeFailEffect');
// Scripts/ClassicBeforeFailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicBeforeFailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClassicBeforeFailEffect = /** @class */ (function (_super) {
    __extends(ClassicBeforeFailEffect, _super);
    function ClassicBeforeFailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClassicBeforeFail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClassicBeforeFailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClassicBeforeFailEffect;
}(BaseEffect_1.default));
exports.ClassicBeforeFailEffect = ClassicBeforeFailEffect;

cc._RF.pop();