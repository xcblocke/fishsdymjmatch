"use strict";
cc._RF.push(module, '90314WygkxJcYBE/4MK2hbz', 'Tile2ReviveAnimTrait');
// subpackages/l_tile2ReviveAnim/Scripts/Tile2ReviveAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2ReviveAnimTrait = /** @class */ (function (_super) {
    __extends(Tile2ReviveAnimTrait, _super);
    function Tile2ReviveAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animType = 0;
        return _this;
    }
    Tile2ReviveAnimTrait.prototype.onLoad = function () {
        var e, r, i;
        _super.prototype.onLoad.call(this);
        this._animType = null !== (i = null === (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.config) || void 0 === r ? void 0 : r.animType) && void 0 !== i ? i : 0;
    };
    Tile2ReviveAnimTrait.prototype.onT2Revive_animType = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._animType
        });
    };
    Tile2ReviveAnimTrait.traitKey = "Tile2ReviveAnim";
    Tile2ReviveAnimTrait = __decorate([
        mj.trait,
        mj.class("Tile2ReviveAnimTrait")
    ], Tile2ReviveAnimTrait);
    return Tile2ReviveAnimTrait;
}(Trait_1.default));
exports.default = Tile2ReviveAnimTrait;

cc._RF.pop();