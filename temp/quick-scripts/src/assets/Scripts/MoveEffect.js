"use strict";
cc._RF.push(module, '99b9fWdI5JCYYrICht+2ofy', 'MoveEffect');
// Scripts/MoveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var MoveEffect = /** @class */ (function (_super) {
    __extends(MoveEffect, _super);
    function MoveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Move;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(MoveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return MoveEffect;
}(BaseEffect_1.default));
exports.MoveEffect = MoveEffect;

cc._RF.pop();