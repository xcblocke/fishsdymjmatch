"use strict";
cc._RF.push(module, 'c3f18t0yIdLhYkmRj2s1SUp', 'UnifyDynamicLibTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyDynamicLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnifyBaseTrait_1 = require("./UnifyBaseTrait");
var UnifyUtils_1 = require("./UnifyUtils");
var UnifyDynamicLibTrait = /** @class */ (function (_super) {
    __extends(UnifyDynamicLibTrait, _super);
    function UnifyDynamicLibTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnifyDynamicLibTrait.prototype.getPath = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_getLvPath = function (t, e) {
        var r = t.args[0];
        if (this.isSupportMode(r)) {
            var n = this.getPath();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n.map(function (t) {
                    return [t[0], t[1]];
                })
            });
        }
        else
            e();
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_parseLvData = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], n = UnifyUtils_1.default.parseLevelData(r);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_setCurLvData = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            if (r) {
                var n = ExtractTool_1.default.getCurrentGameType(), i = UserModel_1.default.getInstance().getGameDataByGameType(n).getLevelId();
                this.cacheCurLvData(n, i, r);
            }
            e();
        }
        else
            e();
    };
    UnifyDynamicLibTrait.traitKey = "UnifyDynamicLib";
    UnifyDynamicLibTrait = __decorate([
        mj.trait,
        mj.class("UnifyDynamicLibTrait")
    ], UnifyDynamicLibTrait);
    return UnifyDynamicLibTrait;
}(UnifyBaseTrait_1.default));
exports.default = UnifyDynamicLibTrait;

cc._RF.pop();