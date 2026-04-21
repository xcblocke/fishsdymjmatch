"use strict";
cc._RF.push(module, '7ca20ntdu5JaphzgqN5YPAq', 'DynamicCurveTrait');
// subpackages/l_dynamicCurve/Scripts/DynamicCurveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DynamicCurveTrait = /** @class */ (function (_super) {
    __extends(DynamicCurveTrait, _super);
    function DynamicCurveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DynamicCurveTrait.prototype, "isOpen", {
        get: function () {
            var e, t;
            return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.isOpen) || void 0 === t || t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCurveTrait.prototype, "isPreLoad", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.preLoad) && void 0 !== t && t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCurveTrait.prototype, "forceLoaded", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.forceLoaded) && void 0 !== t && t;
        },
        enumerable: false,
        configurable: true
    });
    DynamicCurveTrait.prototype.onDCMgr_isEnabled = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this.isOpen
        });
    };
    DynamicCurveTrait.prototype.onLoginM_enterGame = function (e, t) {
        if (this.isOpen) {
            DynamicCurve_1.default.instance.init();
            if (this.isPreLoad) {
                if (this.forceLoaded)
                    DynamicCurve_1.default.instance.preLoadLevelLibrary().then(function () {
                        t();
                    }).catch(function () {
                        t();
                    });
                else {
                    DynamicCurve_1.default.instance.preLoadLevelLibrary();
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    DynamicCurveTrait.traitKey = "DynamicCurve";
    DynamicCurveTrait = __decorate([
        mj.trait,
        mj.class("DynamicCurveTrait")
    ], DynamicCurveTrait);
    return DynamicCurveTrait;
}(Trait_1.default));
exports.default = DynamicCurveTrait;

cc._RF.pop();