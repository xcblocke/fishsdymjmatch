"use strict";
cc._RF.push(module, '39aa0ZDKldMcKurFYi6OeEP', 'AutoMergeSpeedTrait');
// subpackages/l_autoMergeSpeed/Scripts/AutoMergeSpeedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var StartAutoMergeBehavior_1 = require("../../../Scripts/base/StartAutoMergeBehavior");
var s = {
    A1: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
        initialDelay: 0.33
    },
    A2: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
        initialDelay: 0.25
    },
    B1: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
        initialDelay: 0.33,
        decreaseStep: 0.02,
        minDelay: 0.1
    },
    B2: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
        initialDelay: 0.25,
        decreaseStep: 0.03,
        minDelay: 0.08
    }
};
var AutoMergeSpeedTrait = /** @class */ (function (_super) {
    __extends(AutoMergeSpeedTrait, _super);
    function AutoMergeSpeedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoMergeSpeedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initConfig();
    };
    AutoMergeSpeedTrait.prototype.initConfig = function () {
        if (this._traitData.mainlinePreset) {
            var t = this._traitData.mainlinePreset;
            this._mainlineConfig = Object.assign({}, s[t]);
        }
        else if (this._traitData.mainline) {
            this._mainlineConfig = this.buildConfig(this._traitData.mainline);
        }
        else {
            this._mainlineConfig = Object.assign({}, s.A1);
        }
        if (this._traitData.travelPreset) {
            t = this._traitData.travelPreset;
            this._travelConfig = Object.assign({}, s[t]);
        }
        else if (this._traitData.travel) {
            this._travelConfig = this.buildConfig(this._traitData.travel);
        }
        else {
            this._travelConfig = Object.assign({}, s.B1);
        }
    };
    AutoMergeSpeedTrait.prototype.buildConfig = function (t) {
        var e, r, i, n, a = null !== (e = null == t ? void 0 : t.type) && void 0 !== e ? e : StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant, o = {
            type: a,
            initialDelay: null !== (r = null == t ? void 0 : t.initialDelay) && void 0 !== r ? r : 0.33
        };
        if (a === StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate) {
            o.decreaseStep = null !== (i = null == t ? void 0 : t.decreaseStep) && void 0 !== i ? i : 0.02;
            o.minDelay = null !== (n = null == t ? void 0 : t.minDelay) && void 0 !== n ? n : 0.1;
        }
        return o;
    };
    AutoMergeSpeedTrait.prototype.onStAutoMrgBhv_mainSpd = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._mainlineConfig
        });
    };
    AutoMergeSpeedTrait.prototype.onStAutoMrgBhv_trvSpd = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._travelConfig
        });
    };
    AutoMergeSpeedTrait.traitKey = "AutoMergeSpeed";
    AutoMergeSpeedTrait = __decorate([
        mj.trait,
        mj.class("AutoMergeSpeedTrait")
    ], AutoMergeSpeedTrait);
    return AutoMergeSpeedTrait;
}(Trait_1.default));
exports.default = AutoMergeSpeedTrait;

cc._RF.pop();