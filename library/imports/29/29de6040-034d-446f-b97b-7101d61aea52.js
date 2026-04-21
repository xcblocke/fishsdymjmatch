"use strict";
cc._RF.push(module, '29de6BAA01Eb7l7cQHWGupS', 'ChangeDefaultSkinTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeDefaultSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var ChangeDefaultSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeDefaultSkinTrait, _super);
    function ChangeDefaultSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeDefaultSkinTrait.prototype.onChCardByLanTt_getDSk = function (t, e) {
        var a, r, n, i, o, c, u, p, d = "EN";
        if (1 === (null === (a = this._traitData) || void 0 === a ? void 0 : a.langType))
            d = (null === (n = null === (r = this._traitData) || void 0 === r ? void 0 : r.langCode) || void 0 === n ? void 0 : n[0]) || "EN";
        else if (2 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.langType)) {
            d = "US" === (LoginModel_1.default.getInstance().country || "").toUpperCase() ? (null === (c = null === (o = this._traitData) || void 0 === o ? void 0 : o.langCode) || void 0 === c ? void 0 : c[0]) || "EN" : (null === (p = null === (u = this._traitData) || void 0 === u ? void 0 : u.langCode) || void 0 === p ? void 0 : p[1]) || "EN";
        }
        d || (d = "EN");
        d = "l_lanCard" + d;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: d
        });
    };
    ChangeDefaultSkinTrait.traitKey = "ChangeDefaultSkin";
    ChangeDefaultSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeDefaultSkinTrait")
    ], ChangeDefaultSkinTrait);
    return ChangeDefaultSkinTrait;
}(Trait_1.default));
exports.default = ChangeDefaultSkinTrait;

cc._RF.pop();