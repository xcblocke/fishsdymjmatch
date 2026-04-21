"use strict";
cc._RF.push(module, 'f39ffF+E1BHKL+SZfqNEhWx', 'PureRandomExtractTrait');
// subpackages/l_pureRandom/Scripts/PureRandomExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PureRandomExtractTrait = /** @class */ (function (_super) {
    __extends(PureRandomExtractTrait, _super);
    function PureRandomExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureRandomExtractTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PureRandomExtractTrait.prototype.onExtNormLv_getContent = function (t, r) {
        new Date().getTime();
        var e = ExtractNormalLevels_1.default.getInstance().getRandomContent();
        if (e) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else {
            r();
        }
    };
    PureRandomExtractTrait.prototype.onExtractTool_upCapability = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: null
        });
    };
    PureRandomExtractTrait.prototype.onExtractStatic_getContent = function (t, r) {
        var e = ExtractStatic_1.default.getInstance().getRandomContent();
        if (e) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else {
            r();
        }
    };
    PureRandomExtractTrait.prototype.onDCMgr_getCont = function (t, r) {
        var e = UserModel_1.default.getInstance().getCurrentGameType(), n = new Promise(function (t, r) {
            DynamicCurve_1.default.instance.getRandomContent(e).then(function (e) {
                if (e) {
                    t(e);
                }
                else {
                    r(new Error("动态纯随机抽题失败"));
                }
            }).catch(function (t) {
                console.error("[关卡抽取 随机抽题] 动态纯随机抽题异常: " + t.message);
                r(t);
            });
        });
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: n
        });
    };
    PureRandomExtractTrait.traitKey = "PureRandomExtract";
    PureRandomExtractTrait = __decorate([
        mj.trait,
        mj.class("PureRandomExtractTrait")
    ], PureRandomExtractTrait);
    return PureRandomExtractTrait;
}(Trait_1.default));
exports.default = PureRandomExtractTrait;

cc._RF.pop();