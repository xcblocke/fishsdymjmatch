"use strict";
cc._RF.push(module, '91b66HZp8lL/KzTAukkUpk/', 'Tile2InitBottomEffect');
// Scripts/Tile2InitBottomEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitBottomEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2InitBottomEffect = /** @class */ (function (_super) {
    __extends(Tile2InitBottomEffect, _super);
    function Tile2InitBottomEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2InitBottom;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2InitBottomEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2InitBottomEffect;
}(BaseEffect_1.default));
exports.Tile2InitBottomEffect = Tile2InitBottomEffect;

cc._RF.pop();