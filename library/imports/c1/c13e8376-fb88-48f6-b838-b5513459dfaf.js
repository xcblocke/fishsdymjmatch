"use strict";
cc._RF.push(module, 'c13e8N2+4hI9rg4tVE0Wd+v', 'ZeroRemainFullComboTrait');
// subpackages/l_zeroRemainFullCombo/Scripts/ZeroRemainFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ZeroRemainFullComboTrait = /** @class */ (function (_super) {
    __extends(ZeroRemainFullComboTrait, _super);
    function ZeroRemainFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isZeroRemainFullCombo = false;
        return _this;
    }
    ZeroRemainFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, o) {
        this._isZeroRemainFullCombo = false;
        o();
    };
    ZeroRemainFullComboTrait.prototype.onFullComboChk_canFullCb = function (t, o) {
        var e, r, i, n = t.ins, l = (null == n ? void 0 : n.context) || (null == n ? void 0 : n._context), u = null === (e = null == l ? void 0 : l.getTileMapObject) || void 0 === e ? void 0 : e.call(l), a = null !== (i = null === (r = null == u ? void 0 : u.getCurTilesCnt) || void 0 === r ? void 0 : r.call(u)) && void 0 !== i ? i : -1;
        this._isZeroRemainFullCombo = 0 === a;
        this._isZeroRemainFullCombo;
        o();
    };
    ZeroRemainFullComboTrait.prototype.onFullComboBhv_skipMerge = function (t, o) {
        if (this._isZeroRemainFullCombo) {
            o({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            o();
        }
    };
    ZeroRemainFullComboTrait.prototype.onClrNormHlp_bfrPushEnd = function (t, o) {
        var e;
        if (this._isZeroRemainFullCombo) {
            var r = t.ins, i = null == r ? void 0 : r._options;
            if (null === (e = null == i ? void 0 : i.fullComboEffectOptions) || void 0 === e ? void 0 : e.newEffectId) {
                i.insertEndEffectId = i.fullComboEffectOptions.newEffectId;
                i.insertEndEffectType = BehaviorsEnum_1.EInsertType.Serial;
            }
        }
        o();
    };
    ZeroRemainFullComboTrait.traitKey = "ZeroRemainFullCombo";
    ZeroRemainFullComboTrait = __decorate([
        mj.trait,
        mj.class("ZeroRemainFullComboTrait")
    ], ZeroRemainFullComboTrait);
    return ZeroRemainFullComboTrait;
}(Trait_1.default));
exports.default = ZeroRemainFullComboTrait;

cc._RF.pop();