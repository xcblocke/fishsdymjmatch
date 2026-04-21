"use strict";
cc._RF.push(module, 'c88b5J41ZFNioJ5l7A08Ax5', 'CoverLockTipTrait');
// subpackages/l_coverTip/Scripts/CoverLockTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ClickCoverLockTipBehavior_1 = require("./ClickCoverLockTipBehavior");
var ClickCoverLockTipEffect_1 = require("./ClickCoverLockTipEffect");
var CoverLockTipTrait = /** @class */ (function (_super) {
    __extends(CoverLockTipTrait, _super);
    function CoverLockTipTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._prefab = null;
        return _this;
    }
    CoverLockTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    CoverLockTipTrait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ClickCoverLockTip, ClickCoverLockTipBehavior_1.ClickCoverLockTipBehavior);
    };
    CoverLockTipTrait.prototype.onIptTchStart_pushCvr = function (t, e) {
        this.pushHasCoverEffects(t);
        e();
    };
    CoverLockTipTrait.prototype.pushHasCoverEffects = function (t) {
        var e = new ClickCoverLockTipEffect_1.ClickCoverLockTipEffect({
            tileId: t.args[0],
            coverLockTipTrait: this
        });
        t.ins.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    CoverLockTipTrait.traitKey = "CoverLockTip";
    CoverLockTipTrait = __decorate([
        mj.trait,
        mj.class("CoverLockTipTrait")
    ], CoverLockTipTrait);
    return CoverLockTipTrait;
}(Trait_1.default));
exports.default = CoverLockTipTrait;

cc._RF.pop();