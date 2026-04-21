"use strict";
cc._RF.push(module, '3db8bdi3oJJU5rC6yadTSmk', 'ChangeBatchAnimEffect');
// Scripts/ChangeBatchAnimEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchAnimEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ChangeBatchAnimEffect = /** @class */ (function (_super) {
    __extends(ChangeBatchAnimEffect, _super);
    function ChangeBatchAnimEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ChangeBatchAnim;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ChangeBatchAnimEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ChangeBatchAnimEffect;
}(BaseEffect_1.default));
exports.ChangeBatchAnimEffect = ChangeBatchAnimEffect;

cc._RF.pop();