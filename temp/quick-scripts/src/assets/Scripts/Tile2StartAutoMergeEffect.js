"use strict";
cc._RF.push(module, '1bee0On7oJOl4BkcoIcYEQ0', 'Tile2StartAutoMergeEffect');
// Scripts/Tile2StartAutoMergeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2StartAutoMergeEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2StartAutoMergeEffect = /** @class */ (function (_super) {
    __extends(Tile2StartAutoMergeEffect, _super);
    function Tile2StartAutoMergeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2StartAutoMerge;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2StartAutoMergeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2StartAutoMergeEffect;
}(BaseEffect_1.default));
exports.Tile2StartAutoMergeEffect = Tile2StartAutoMergeEffect;

cc._RF.pop();