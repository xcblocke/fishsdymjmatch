"use strict";
cc._RF.push(module, '86cd7Eny/VLp6ZqV2eB3mku', 'WScoreTrait');
// subpackages/l_wScore/Scripts/WScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WScoreTrait = /** @class */ (function (_super) {
    __extends(WScoreTrait, _super);
    function WScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = this._traitData.timeRate;
        this._config = {
            timeRate: Array.isArray(r) && r.length >= 2 ? [r[0], r[1]] : [0.5, 2],
            wRate: void 0 !== this._traitData.wRate ? this._traitData.wRate : 1
        };
    };
    WScoreTrait.prototype.onScoreMod_setlmTmRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: {
                minRatio: this._config.timeRate[0],
                maxRatio: this._config.timeRate[1]
            }
        });
    };
    WScoreTrait.prototype.onScoreMod_setlmWRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.wRate
        });
    };
    WScoreTrait.traitKey = "WScore";
    WScoreTrait = __decorate([
        mj.trait,
        mj.class("WScoreTrait")
    ], WScoreTrait);
    return WScoreTrait;
}(Trait_1.default));
exports.default = WScoreTrait;

cc._RF.pop();