"use strict";
cc._RF.push(module, 'ca672UPF7RFk4MvVkA5A/3B', 'InitNextLevelEffect');
// Scripts/InitNextLevelEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitNextLevelEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var InitNextLevelEffect = /** @class */ (function (_super) {
    __extends(InitNextLevelEffect, _super);
    function InitNextLevelEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.InitNextLevel;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(InitNextLevelEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return InitNextLevelEffect;
}(BaseEffect_1.default));
exports.InitNextLevelEffect = InitNextLevelEffect;

cc._RF.pop();