"use strict";
cc._RF.push(module, 'fa0cfc3yTdKxY8FgwtZfKkI', 'Tile2DianZanTrait');
// subpackages/l_dianzan/Scripts/Tile2DianZanTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DianZanTrait = /** @class */ (function (_super) {
    __extends(Tile2DianZanTrait, _super);
    function Tile2DianZanTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DianZanTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DianZanTrait.prototype.onT2DianZCheck_isDianZan = function (t, e) {
        var n, r = (null === (n = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === n ? void 0 : n.getLevelId()) || 0;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r > 1
        });
    };
    Tile2DianZanTrait.prototype.getSpineUrl = function () {
        return this.traitData.spineUrl || "spine/dianzan/gameplay_hand";
    };
    Tile2DianZanTrait.prototype.getSpineBundleName = function () {
        return this.traitData.spineBundle || "mainRes";
    };
    Tile2DianZanTrait.prototype.getAnimName = function () {
        return "" + (this.traitData.animPrefix || "in_") + (Math.floor(5 * Math.random()) + 1);
    };
    Tile2DianZanTrait.prototype.getScale = function () {
        return this.traitData.scale || 1;
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_spUrl = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getSpineUrl(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_spBundle = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getSpineBundleName(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_animName = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getAnimName(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_scale = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getScale(r)
        });
    };
    Tile2DianZanTrait.traitKey = "Tile2DianZan";
    Tile2DianZanTrait = __decorate([
        mj.trait,
        mj.class("Tile2DianZanTrait")
    ], Tile2DianZanTrait);
    return Tile2DianZanTrait;
}(Trait_1.default));
exports.default = Tile2DianZanTrait;

cc._RF.pop();