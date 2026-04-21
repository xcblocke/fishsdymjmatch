"use strict";
cc._RF.push(module, 'bc11fMg6N5N7LvXCNgluql5', 'LogValueLimitTrait');
// subpackages/l_logValueLimit/Scripts/LogValueLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LogValueLimitTrait = /** @class */ (function (_super) {
    __extends(LogValueLimitTrait, _super);
    function LogValueLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogValueLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LogValueLimitTrait.prototype.onExtDimension_getLogLimit = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.logLimit;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else
            e();
    };
    LogValueLimitTrait.traitKey = "LogValueLimit";
    LogValueLimitTrait = __decorate([
        mj.trait,
        mj.class("LogValueLimitTrait")
    ], LogValueLimitTrait);
    return LogValueLimitTrait;
}(ExtractTrait_1.default));
exports.default = LogValueLimitTrait;

cc._RF.pop();