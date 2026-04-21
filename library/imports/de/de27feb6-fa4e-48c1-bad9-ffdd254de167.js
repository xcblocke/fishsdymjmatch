"use strict";
cc._RF.push(module, 'de27f62+k5IwbrZ/90lTeFn', 'Tile2GuideEffect');
// subpackages/l_tile2Guide/Scripts/Tile2GuideEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2GuideEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var Tile2GuideEffect = /** @class */ (function (_super) {
    __extends(Tile2GuideEffect, _super);
    function Tile2GuideEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Guide;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2GuideEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2GuideEffect;
}(BaseEffect_1.default));
exports.Tile2GuideEffect = Tile2GuideEffect;

cc._RF.pop();