"use strict";
cc._RF.push(module, '88415cMdo5OWbo1iRvaRnCm', 'Change3dAvatarTrait');
// subpackages/r_change3dAvatar/Scripts/Change3dAvatarTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Change3dAvatarTrait = /** @class */ (function (_super) {
    __extends(Change3dAvatarTrait, _super);
    function Change3dAvatarTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Change3dAvatarTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Change3dAvatarTrait.prototype.onUICellItem_getDftIconBdNm = function (t, r) {
        r();
    };
    Change3dAvatarTrait.prototype.onInfoMgr_getDftIconBdNm = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: "r_change3dAvatar"
        });
    };
    Change3dAvatarTrait.traitKey = "Change3dAvatar";
    Change3dAvatarTrait = __decorate([
        mj.trait,
        mj.class("Change3dAvatarTrait")
    ], Change3dAvatarTrait);
    return Change3dAvatarTrait;
}(Trait_1.default));
exports.default = Change3dAvatarTrait;

cc._RF.pop();