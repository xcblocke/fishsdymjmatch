"use strict";
cc._RF.push(module, '08b947ZtalDX5x+Or6W/p47', 'CapabilityChangeTrait');
// subpackages/l_capabilityChange/Scripts/CapabilityChangeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CapabilityChangeTrait = /** @class */ (function (_super) {
    __extends(CapabilityChangeTrait, _super);
    function CapabilityChangeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CapabilityChangeTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            logBase: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.logBase) && void 0 !== e ? e : 1.2
        };
    };
    CapabilityChangeTrait.prototype.onExtNormLv_getLogBase = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.logBase;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    CapabilityChangeTrait.traitKey = "CapabilityChange";
    CapabilityChangeTrait = __decorate([
        mj.trait,
        mj.class("CapabilityChangeTrait")
    ], CapabilityChangeTrait);
    return CapabilityChangeTrait;
}(ExtractTrait_1.default));
exports.default = CapabilityChangeTrait;

cc._RF.pop();