"use strict";
cc._RF.push(module, 'bbed7P5nBtENp0VV9cdARBM', 'Tile2MoveEffect');
// Scripts/Tile2MoveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2MoveEffect = /** @class */ (function (_super) {
    __extends(Tile2MoveEffect, _super);
    function Tile2MoveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Move;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2MoveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2MoveEffect;
}(BaseEffect_1.default));
exports.Tile2MoveEffect = Tile2MoveEffect;

cc._RF.pop();