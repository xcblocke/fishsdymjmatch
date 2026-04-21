"use strict";
cc._RF.push(module, '56703TLkUxJt6r2yWIUh0mk', 'Tile2UpdateScoreEffect');
// Scripts/Tile2UpdateScoreEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateScoreEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2UpdateScoreEffect = /** @class */ (function (_super) {
    __extends(Tile2UpdateScoreEffect, _super);
    function Tile2UpdateScoreEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateScore;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2UpdateScoreEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2UpdateScoreEffect;
}(BaseEffect_1.default));
exports.Tile2UpdateScoreEffect = Tile2UpdateScoreEffect;

cc._RF.pop();