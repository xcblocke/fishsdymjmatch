"use strict";
cc._RF.push(module, 'bc75dd/DCxPxKC2iK5xw6vn', 'GetMaxNoDieLevelTrait');
// subpackages/l_getMaxNoDie/Scripts/GetMaxNoDieLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GetMaxNoDieLevelTrait = /** @class */ (function (_super) {
    __extends(GetMaxNoDieLevelTrait, _super);
    function GetMaxNoDieLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetMaxNoDieLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GetMaxNoDieLevelTrait.prototype.onExtNormLv_getMaxNDieLevel = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.maxNoDieLevel;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    GetMaxNoDieLevelTrait.traitKey = "GetMaxNoDieLevel";
    GetMaxNoDieLevelTrait = __decorate([
        mj.trait,
        mj.class("GetMaxNoDieLevelTrait")
    ], GetMaxNoDieLevelTrait);
    return GetMaxNoDieLevelTrait;
}(ExtractTrait_1.default));
exports.default = GetMaxNoDieLevelTrait;

cc._RF.pop();