"use strict";
cc._RF.push(module, 'c3d025R4dJIq4uVnAgPBAKG', 'SkipAutoMergeTrait');
// subpackages/l_skipAutoMerge/Scripts/SkipAutoMergeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipMode = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SkipMode;
(function (SkipMode) {
    SkipMode[SkipMode["Immediate"] = 0] = "Immediate";
    SkipMode[SkipMode["ClickThenDelay"] = 1] = "ClickThenDelay";
    SkipMode[SkipMode["DelayThenClick"] = 2] = "DelayThenClick";
})(SkipMode = exports.SkipMode || (exports.SkipMode = {}));
var SkipAutoMergeTrait = /** @class */ (function (_super) {
    __extends(SkipAutoMergeTrait, _super);
    function SkipAutoMergeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkipAutoMergeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            canSkip: void 0 === this._traitData.canSkip || this._traitData.canSkip,
            mode: e,
            delayTime: void 0 !== this._traitData.delayTime ? this._traitData.delayTime : 3
        };
        this._config.canSkip && this._config.mode;
    };
    SkipAutoMergeTrait.prototype.onStAutoMrgBhv_skipCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config
        });
    };
    SkipAutoMergeTrait.traitKey = "SkipAutoMerge";
    SkipAutoMergeTrait = __decorate([
        mj.trait,
        mj.class("SkipAutoMergeTrait")
    ], SkipAutoMergeTrait);
    return SkipAutoMergeTrait;
}(Trait_1.default));
exports.default = SkipAutoMergeTrait;

cc._RF.pop();