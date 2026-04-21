"use strict";
cc._RF.push(module, 'fbbf4JFJh5GC6MwRv0ePhnv', 'Tile2UpdateRevertItemEffect');
// Scripts/Tile2UpdateRevertItemEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateRevertItemEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2UpdateRevertItemEffect = /** @class */ (function (_super) {
    __extends(Tile2UpdateRevertItemEffect, _super);
    function Tile2UpdateRevertItemEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateRevertItem;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2UpdateRevertItemEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2UpdateRevertItemEffect;
}(BaseEffect_1.default));
exports.Tile2UpdateRevertItemEffect = Tile2UpdateRevertItemEffect;

cc._RF.pop();