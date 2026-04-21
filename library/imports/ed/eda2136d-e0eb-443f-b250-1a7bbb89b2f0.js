"use strict";
cc._RF.push(module, 'eda21Nt4OtEP7JQGnu7ibLw', 'NoLockOnNewGameTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockOnNewGameTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var NoLockOnNewGameTrait = /** @class */ (function (_super) {
    __extends(NoLockOnNewGameTrait, _super);
    function NoLockOnNewGameTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoLockOnNewGameTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockOnNewGameTrait.prototype.onNoLockPreClr_isEnabled = function (t, r) {
        var e, o = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameData();
        if (o) {
            if (0 !== o.getClearTileCount()) {
                r();
            }
            else {
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
        else {
            r();
        }
    };
    NoLockOnNewGameTrait.traitKey = "NoLockOnNewGame";
    NoLockOnNewGameTrait = __decorate([
        mj.trait,
        mj.class("NoLockOnNewGameTrait")
    ], NoLockOnNewGameTrait);
    return NoLockOnNewGameTrait;
}(Trait_1.default));
exports.default = NoLockOnNewGameTrait;

cc._RF.pop();