"use strict";
cc._RF.push(module, '87807UjNSpKELp8C5LWnR+4', 'Tile2EndEffect');
// Scripts/Tile2EndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2EndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2EndEffect = /** @class */ (function (_super) {
    __extends(Tile2EndEffect, _super);
    function Tile2EndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2End;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2EndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2EndEffect;
}(BaseEffect_1.default));
exports.Tile2EndEffect = Tile2EndEffect;

cc._RF.pop();