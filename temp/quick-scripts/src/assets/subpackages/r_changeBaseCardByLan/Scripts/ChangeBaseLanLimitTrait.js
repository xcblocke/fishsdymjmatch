"use strict";
cc._RF.push(module, '116c6aHaw9Ii7ci63YznPXg', 'ChangeBaseLanLimitTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseLanLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ChangeBaseLanLimitTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseLanLimitTrait, _super);
    function ChangeBaseLanLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeBaseLanLimitTrait.prototype.onLangSelTrt_changeLang = function (t, e) {
        if (1 != this._traitData.limit) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    ChangeBaseLanLimitTrait.prototype.onChCardByLanTt_getLBdle = function (t, e) {
        var a, r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
        if (r) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    ChangeBaseLanLimitTrait.prototype.onLangSelUI_checkIsSel = function (t, e) {
        var a, r, n = null === (a = t.args) || void 0 === a ? void 0 : a[1];
        if (n = CommonUtils_1.formatLanguageCodeToString(n)) {
            var i = mj.getClassByName("ChangeBaseCardByLanTrait"), o = null === (r = null == i ? void 0 : i.getInstance) || void 0 === r ? void 0 : r.call(i);
            if (o) {
                var s = o.getLanActiveSkin(), c = o.getBundleByLang(n), u = !!s && s === c;
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: u
                });
            }
            else
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: false
                });
        }
        else
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    ChangeBaseLanLimitTrait.traitKey = "ChangeBaseLanLimit";
    ChangeBaseLanLimitTrait = __decorate([
        mj.trait,
        mj.class("LanguageNotOpenTrait")
    ], ChangeBaseLanLimitTrait);
    return ChangeBaseLanLimitTrait;
}(Trait_1.default));
exports.default = ChangeBaseLanLimitTrait;

cc._RF.pop();