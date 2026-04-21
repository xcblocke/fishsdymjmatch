"use strict";
cc._RF.push(module, '4f4031y+ZBNnIRy2JZfMiyg', 'Tile2ScreenEdgeEffect');
// Scripts/Tile2ScreenEdgeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenEdgeEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ScreenEdgeEffect = /** @class */ (function (_super) {
    __extends(Tile2ScreenEdgeEffect, _super);
    function Tile2ScreenEdgeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ScreenEdgeEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ScreenEdgeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ScreenEdgeEffect;
}(BaseEffect_1.default));
exports.Tile2ScreenEdgeEffect = Tile2ScreenEdgeEffect;

cc._RF.pop();