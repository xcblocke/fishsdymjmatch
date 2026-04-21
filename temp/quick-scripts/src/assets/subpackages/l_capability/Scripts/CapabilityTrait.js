"use strict";
cc._RF.push(module, '879d9oaZNZFw6njEv42f20a', 'CapabilityTrait');
// subpackages/l_capability/Scripts/CapabilityTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CapabilityTrait = /** @class */ (function (_super) {
    __extends(CapabilityTrait, _super);
    function CapabilityTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CapabilityTrait.prototype, "strategy", {
        get: function () {
            return this.traitData.strategy;
        },
        enumerable: false,
        configurable: true
    });
    CapabilityTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.checkChange();
    };
    CapabilityTrait.prototype.checkChange = function () {
        var t = this.localData.curStrategyStr, e = JSON.stringify(this.strategy);
        if (e !== t) {
            this.localData.curStrategyStr = e;
            DynamicCurve_1.default.instance.resetCapabilityCache();
        }
    };
    CapabilityTrait.prototype.onDCMgr_setCapSgy = function (t, e) {
        if (this.strategy) {
            t.args[0] = this.strategy;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    CapabilityTrait.traitKey = "Capability";
    CapabilityTrait = __decorate([
        mj.trait,
        mj.class("CapabilityTrait")
    ], CapabilityTrait);
    return CapabilityTrait;
}(Trait_1.default));
exports.default = CapabilityTrait;

cc._RF.pop();