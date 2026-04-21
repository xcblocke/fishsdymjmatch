"use strict";
cc._RF.push(module, 'c746ddW7elAXbuSpMgajhMz', 'NoLockPreClearTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockPreClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NoLockPreClearTrait = /** @class */ (function (_super) {
    __extends(NoLockPreClearTrait, _super);
    function NoLockPreClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoLockPreClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockPreClearTrait.prototype.isIgnoreLockEnabled = function () {
        return false;
    };
    NoLockPreClearTrait.prototype.onIptTchStart_Lock = function (t, r) {
        if (this.isIgnoreLockEnabled()) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    NoLockPreClearTrait.prototype.onComboChk_canBreakCb = function (t, r) {
        if (this.isIgnoreLockEnabled()) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
        else {
            r();
        }
    };
    NoLockPreClearTrait.traitKey = "NoLockPreClear";
    __decorate([
        mj.traitEvent("NoLockPreClr_isEnabled")
    ], NoLockPreClearTrait.prototype, "isIgnoreLockEnabled", null);
    NoLockPreClearTrait = __decorate([
        mj.trait,
        mj.class("NoLockPreClearTrait")
    ], NoLockPreClearTrait);
    return NoLockPreClearTrait;
}(Trait_1.default));
exports.default = NoLockPreClearTrait;

cc._RF.pop();