"use strict";
cc._RF.push(module, '09d63UyRq9G6qxby7lONy83', 'Tile2ShuffleEffect');
// Scripts/Tile2ShuffleEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ShuffleEffect = /** @class */ (function (_super) {
    __extends(Tile2ShuffleEffect, _super);
    function Tile2ShuffleEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Shuffle;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ShuffleEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ShuffleEffect;
}(BaseEffect_1.default));
exports.Tile2ShuffleEffect = Tile2ShuffleEffect;

cc._RF.pop();