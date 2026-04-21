"use strict";
cc._RF.push(module, 'ecad8fiRUBPMbwC/s9+s2XR', 'Tile2MagnetMergeEffect');
// Scripts/Tile2MagnetMergeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetMergeEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2MagnetMergeEffect = /** @class */ (function (_super) {
    __extends(Tile2MagnetMergeEffect, _super);
    function Tile2MagnetMergeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2MagnetMerge;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2MagnetMergeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2MagnetMergeEffect;
}(BaseEffect_1.default));
exports.Tile2MagnetMergeEffect = Tile2MagnetMergeEffect;

cc._RF.pop();