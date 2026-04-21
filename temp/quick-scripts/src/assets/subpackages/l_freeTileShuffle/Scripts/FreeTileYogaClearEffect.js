"use strict";
cc._RF.push(module, 'f0a887UlclJ9JERK+9UK6W5', 'FreeTileYogaClearEffect');
// subpackages/l_freeTileShuffle/Scripts/FreeTileYogaClearEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeTileYogaClearEffect = exports.FreeTileYogaClearMapping = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
exports.FreeTileYogaClearMapping = "freeTileYogaClear";
var FreeTileYogaClearEffect = /** @class */ (function (_super) {
    __extends(FreeTileYogaClearEffect, _super);
    function FreeTileYogaClearEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = exports.FreeTileYogaClearMapping;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(FreeTileYogaClearEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return FreeTileYogaClearEffect;
}(BaseEffect_1.default));
exports.FreeTileYogaClearEffect = FreeTileYogaClearEffect;

cc._RF.pop();