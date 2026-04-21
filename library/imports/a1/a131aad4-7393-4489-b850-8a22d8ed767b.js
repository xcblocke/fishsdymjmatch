"use strict";
cc._RF.push(module, 'a131arUc5NEibhQiiLY7XZ7', 'StopComboWithSpecialTrait');
// subpackages/l_stopComboWithSpecial/Scripts/StopComboWithSpecialTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var StopComboWithSpecialTrait = /** @class */ (function (_super) {
    __extends(StopComboWithSpecialTrait, _super);
    function StopComboWithSpecialTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._typesToCheck = [];
        return _this;
    }
    StopComboWithSpecialTrait.prototype.onLoad = function () {
        var e, o, i;
        _super.prototype.onLoad.call(this);
        this._initTypesToCheck((null === (e = this.traitData) || void 0 === e ? void 0 : e.checkBomb) || false, (null === (o = this.traitData) || void 0 === o ? void 0 : o.checkDuoxiao) || false, (null === (i = this.traitData) || void 0 === i ? void 0 : i.checkDaxiao) || false);
    };
    StopComboWithSpecialTrait.prototype._initTypesToCheck = function (t, e, o) {
        this._typesToCheck = [];
        t && this._typesToCheck.push(TileTypeEnum_1.ETileType.Bomb);
        e && this._typesToCheck.push(TileTypeEnum_1.ETileType.DuoxiaoCard);
        o && this._typesToCheck.push(TileTypeEnum_1.ETileType.DaxiaoCard);
    };
    StopComboWithSpecialTrait.prototype.hasRemainSpecialTiles = function (t) {
        var e, o = (null == t ? void 0 : t.context) || (null == t ? void 0 : t._context), i = null === (e = null == o ? void 0 : o.getTileMapObject) || void 0 === e ? void 0 : e.call(o);
        return !(!i || "function" != typeof i.isBoardTileHasType) && 0 !== this._typesToCheck.length && i.isBoardTileHasType(this._typesToCheck, true);
    };
    StopComboWithSpecialTrait.prototype.onFullComboChk_canFullCb = function (t, e) {
        var o;
        if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopComboWithSpecialTrait.prototype.onRwdComboChk_sTriNow = function (t, e) {
        var o;
        if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopComboWithSpecialTrait.traitKey = "StopComboWithSpecial";
    StopComboWithSpecialTrait = __decorate([
        mj.trait,
        mj.class("StopComboWithSpecialTrait")
    ], StopComboWithSpecialTrait);
    return StopComboWithSpecialTrait;
}(Trait_1.default));
exports.default = StopComboWithSpecialTrait;

cc._RF.pop();