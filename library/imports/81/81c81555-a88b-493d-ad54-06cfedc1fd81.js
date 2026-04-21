"use strict";
cc._RF.push(module, '81c81VVqItJPa1UBs/twf2B', 'Patch1ParamsTrait');
// subpackages/l_patch1Params/Scripts/Patch1ParamsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch1ParamsTrait = /** @class */ (function (_super) {
    __extends(Patch1ParamsTrait, _super);
    function Patch1ParamsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch1ParamsTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            patch0101: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0101) && void 0 !== e ? e : -1
        };
    };
    Patch1ParamsTrait.prototype.onExtNormLv_getPatch0101 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0101;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch1ParamsTrait.traitKey = "Patch1Params";
    Patch1ParamsTrait = __decorate([
        mj.trait,
        mj.class("Patch1ParamsTrait")
    ], Patch1ParamsTrait);
    return Patch1ParamsTrait;
}(ExtractTrait_1.default));
exports.default = Patch1ParamsTrait;

cc._RF.pop();