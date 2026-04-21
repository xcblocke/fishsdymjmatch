"use strict";
cc._RF.push(module, '4e9fdcuXgdOdIG1lhVM8aFa', 'RandomEnterAnimTrait');
// subpackages/l_randomEnterAnim/Scripts/RandomEnterAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EnterAnimationManager_1 = require("../../../Scripts/animation/manager/EnterAnimationManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RandomEnterAnimTrait = /** @class */ (function (_super) {
    __extends(RandomEnterAnimTrait, _super);
    function RandomEnterAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomEnterAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.strategies = this.localData.strategies || {};
        this.registerEvent([{
                event: "IptT2SetLv_selEnterAnim"
            }]);
    };
    RandomEnterAnimTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    RandomEnterAnimTrait.prototype.getStrategy = function () {
        var t = this.getCurrentGameType();
        return this.localData.strategies[t] || "";
    };
    RandomEnterAnimTrait.prototype.saveStrategy = function (t) {
        var e = this.getCurrentGameType();
        this.localData.strategies[e] = t;
        this.localData.strategies = this.localData.strategies;
    };
    RandomEnterAnimTrait.prototype.selectRandomStrategy = function (t) {
        return t[Math.floor(Math.random() * t.length)];
    };
    RandomEnterAnimTrait.prototype.onIptSetLv_selEnterAnim = function (t, e) {
        this.handleSelectEnterAnim(t, e);
    };
    RandomEnterAnimTrait.prototype.onIptT2SetLv_selEnterAnim = function (t, e) {
        this.handleSelectEnterAnim(t, e);
    };
    RandomEnterAnimTrait.prototype.handleSelectEnterAnim = function (t, e) {
        var r, n;
        try {
            var a = EnterAnimationManager_1.EnterAnimationManager.getInstance(), i = a.getAvailableStrategies();
            if (0 === i.length)
                return;
            var s = null !== (r = this._traitData.randomOnReplay) && void 0 !== r && r;
            null !== (n = this._traitData.enableTopMaskEnter) && void 0 !== n && n || (i = i.filter(function (t) {
                return "TopMaskEnter" !== t;
            }));
            if (0 === i.length)
                return;
            var c = t.args[0], l = t.args[1], p = void 0;
            if (c && !l || l && s) {
                p = this.selectRandomStrategy(i);
                this.saveStrategy(p);
            }
            else
                p = this.getStrategy();
            p && a.setStrategy(p);
        }
        catch (t) { }
        finally {
            e();
        }
    };
    RandomEnterAnimTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        try {
            t.ins.playEnterAnimation();
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        catch (t) {
            e();
        }
    };
    RandomEnterAnimTrait.traitKey = "RandomEnterAnim";
    RandomEnterAnimTrait = __decorate([
        mj.trait,
        mj.class("RandomEnterAnimTrait")
    ], RandomEnterAnimTrait);
    return RandomEnterAnimTrait;
}(Trait_1.default));
exports.default = RandomEnterAnimTrait;

cc._RF.pop();