"use strict";
cc._RF.push(module, 'da5a7/kS/9EcLVXSprZy6Ju', 'Tile2ComboEffect');
// Scripts/Tile2ComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ComboEffect = /** @class */ (function (_super) {
    __extends(Tile2ComboEffect, _super);
    function Tile2ComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ComboEffect;
}(BaseEffect_1.default));
exports.Tile2ComboEffect = Tile2ComboEffect;

cc._RF.pop();