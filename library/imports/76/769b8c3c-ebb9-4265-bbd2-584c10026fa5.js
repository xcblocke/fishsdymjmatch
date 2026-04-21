"use strict";
cc._RF.push(module, '769b8w867lCZbvSWEwQAm+l', 'Tile2CheerEffect');
// Scripts/Tile2CheerEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2CheerEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2CheerEffect = /** @class */ (function (_super) {
    __extends(Tile2CheerEffect, _super);
    function Tile2CheerEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Cheer;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2CheerEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2CheerEffect;
}(BaseEffect_1.default));
exports.Tile2CheerEffect = Tile2CheerEffect;

cc._RF.pop();