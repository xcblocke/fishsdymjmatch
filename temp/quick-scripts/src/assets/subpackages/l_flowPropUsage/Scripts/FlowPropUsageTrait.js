"use strict";
cc._RF.push(module, 'ca777NyIVRJH4waE3QW9mlg', 'FlowPropUsageTrait');
// subpackages/l_flowPropUsage/Scripts/FlowPropUsageTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowPropUsageTrait = /** @class */ (function (_super) {
    __extends(FlowPropUsageTrait, _super);
    function FlowPropUsageTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowPropUsageTrait.prototype.onLoad = function () {
        var e, a, r;
        _super.prototype.onLoad.call(this);
        this._introLevels = null !== (e = this._traitData.introLevels) && void 0 !== e ? e : 10;
        this._defaultStage = null !== (a = this._traitData.defaultStage) && void 0 !== a ? a : 2;
        this._upgradeStage = null !== (r = this._traitData.upgradeStage) && void 0 !== r ? r : 3;
        if (void 0 === this.localData.fpuUsedProp || null === this.localData.fpuUsedProp) {
            this.localData.fpuUsedProp = false;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        }
        if (!this.localData.fpuStage) {
            this.localData.fpuStage = this._defaultStage;
            this.localData.fpuStage = this.localData.fpuStage;
        }
    };
    FlowPropUsageTrait.prototype._markPropUsed = function () {
        if (!this.localData.fpuUsedProp && UserModel_1.default.getInstance().isGuideFinished()) {
            this.localData.fpuUsedProp = true;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        }
    };
    FlowPropUsageTrait.prototype.onIptT2Shuffle_used = function (t, e) {
        this._markPropUsed("shuffle");
        e();
    };
    FlowPropUsageTrait.prototype.onIptT2HitTips_used = function (t, e) {
        this._markPropUsed("hint");
        e();
    };
    FlowPropUsageTrait.prototype.onIptT2Revert_used = function (t, e) {
        this._markPropUsed("revert");
        e();
    };
    FlowPropUsageTrait.prototype.onFlwLv_getAbilStg = function (t, e) {
        var a = t.args[0] || 0;
        if (a > 0 && a <= this._introLevels) {
            this.localData.fpuUsedProp = false;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
            e();
        }
        else {
            this._evaluatePropUsage();
            var r = this.localData.fpuStage || this._defaultStage;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r - 1
            });
        }
    };
    FlowPropUsageTrait.prototype._evaluatePropUsage = function () {
        var t, e = !!this.localData.fpuUsedProp;
        this.localData.fpuUsedProp = false;
        this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        this.localData.fpuStage || this._defaultStage;
        t = e ? this._defaultStage : this._upgradeStage;
        this.localData.fpuStage = t;
        this.localData.fpuStage = this.localData.fpuStage;
    };
    FlowPropUsageTrait.traitKey = "FlowPropUsage";
    FlowPropUsageTrait = __decorate([
        mj.trait,
        mj.class("FlowPropUsageTrait")
    ], FlowPropUsageTrait);
    return FlowPropUsageTrait;
}(Trait_1.default));
exports.default = FlowPropUsageTrait;

cc._RF.pop();