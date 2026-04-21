"use strict";
cc._RF.push(module, 'c7a70jtUvhGxqi143dO3lC3', 'BoringValueTrait');
// subpackages/l_boringValue/Scripts/BoringValueTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BoringValueTrait = /** @class */ (function (_super) {
    __extends(BoringValueTrait, _super);
    function BoringValueTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoringValueTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            patch0401: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0401) && void 0 !== e ? e : 0.35
        };
    };
    BoringValueTrait.prototype.onExtNormLv_getPatch0401 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0401;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    BoringValueTrait.traitKey = "BoringValue";
    BoringValueTrait = __decorate([
        mj.trait,
        mj.class("BoringValueTrait")
    ], BoringValueTrait);
    return BoringValueTrait;
}(ExtractTrait_1.default));
exports.default = BoringValueTrait;

cc._RF.pop();