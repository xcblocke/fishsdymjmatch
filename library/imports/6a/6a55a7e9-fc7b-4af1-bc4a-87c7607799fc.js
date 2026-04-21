"use strict";
cc._RF.push(module, '6a55afp/HtK8bxKh8dgd5n8', 'AllClearEffect');
// Scripts/AllClearEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AllClearEffect = /** @class */ (function (_super) {
    __extends(AllClearEffect, _super);
    function AllClearEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AllClear;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AllClearEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AllClearEffect;
}(BaseEffect_1.default));
exports.AllClearEffect = AllClearEffect;

cc._RF.pop();