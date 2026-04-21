"use strict";
cc._RF.push(module, '8869eqi2i9K87cpKmS8qy7E', 'Patch2ParamsTrait');
// subpackages/l_patch2Params/Scripts/Patch2ParamsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch2ParamsTrait = /** @class */ (function (_super) {
    __extends(Patch2ParamsTrait, _super);
    function Patch2ParamsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch2ParamsTrait.prototype.onLoad = function () {
        var r, e, o, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            patch0201: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0201) && void 0 !== e ? e : 0.5,
            patch0202: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.patch0202) && void 0 !== a ? a : 5
        };
    };
    Patch2ParamsTrait.prototype.onExtNormLv_getPatch0201 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0201;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch2ParamsTrait.prototype.onExtNormLv_getPatch0202 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0202;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch2ParamsTrait.traitKey = "Patch2Params";
    Patch2ParamsTrait = __decorate([
        mj.trait,
        mj.class("Patch2ParamsTrait")
    ], Patch2ParamsTrait);
    return Patch2ParamsTrait;
}(ExtractTrait_1.default));
exports.default = Patch2ParamsTrait;

cc._RF.pop();