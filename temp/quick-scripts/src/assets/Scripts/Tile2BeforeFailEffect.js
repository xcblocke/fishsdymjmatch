"use strict";
cc._RF.push(module, '8757btpm2JMbLJeCQOZKJC9', 'Tile2BeforeFailEffect');
// Scripts/Tile2BeforeFailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeFailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2BeforeFailEffect = /** @class */ (function (_super) {
    __extends(Tile2BeforeFailEffect, _super);
    function Tile2BeforeFailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2BeforeFail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2BeforeFailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2BeforeFailEffect;
}(BaseEffect_1.default));
exports.Tile2BeforeFailEffect = Tile2BeforeFailEffect;

cc._RF.pop();