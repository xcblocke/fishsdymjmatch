"use strict";
cc._RF.push(module, '5a79dC02z1A5Z2jI8tn70U+', 'NoLockPostPropTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockPostPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NoLockPostPropTrait = /** @class */ (function (_super) {
    __extends(NoLockPostPropTrait, _super);
    function NoLockPostPropTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPostPropUsage = false;
        return _this;
    }
    NoLockPostPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockPostPropTrait.prototype.onGameData_chgShuffle = function (t, r) {
        var e;
        (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
        r();
    };
    NoLockPostPropTrait.prototype.onGameData_chgHitTips = function (t, r) {
        var e;
        (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
        r();
    };
    NoLockPostPropTrait.prototype.onClearBhv_collision = function (t, r) {
        this._isPostPropUsage && (this._isPostPropUsage = false);
        r();
    };
    NoLockPostPropTrait.prototype.onMainGameCtrl_vwLoad = function (t, r) {
        this._isPostPropUsage = false;
        r();
    };
    NoLockPostPropTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        this._isPostPropUsage = false;
        r();
    };
    NoLockPostPropTrait.prototype.onNoLockPreClr_isEnabled = function (t, r) {
        if (this._isPostPropUsage) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            r();
        }
    };
    NoLockPostPropTrait.traitKey = "NoLockPostProp";
    NoLockPostPropTrait = __decorate([
        mj.trait,
        mj.class("NoLockPostPropTrait")
    ], NoLockPostPropTrait);
    return NoLockPostPropTrait;
}(Trait_1.default));
exports.default = NoLockPostPropTrait;

cc._RF.pop();