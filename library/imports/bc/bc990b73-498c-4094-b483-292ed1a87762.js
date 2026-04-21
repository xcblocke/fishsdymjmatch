"use strict";
cc._RF.push(module, 'bc990tzSYxAlLSDKS7RqHdi', 'Tile2NoValidTilesEffect');
// Scripts/Tile2NoValidTilesEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoValidTilesEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2NoValidTilesEffect = /** @class */ (function (_super) {
    __extends(Tile2NoValidTilesEffect, _super);
    function Tile2NoValidTilesEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2NoValidTiles;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2NoValidTilesEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2NoValidTilesEffect;
}(BaseEffect_1.default));
exports.Tile2NoValidTilesEffect = Tile2NoValidTilesEffect;

cc._RF.pop();