"use strict";
cc._RF.push(module, '7cbdepNka5CwLnoL+mDPSg9', 'T2RplcClkCardSndTrait');
// subpackages/l_t2RplcClkCardSnd/Scripts/T2RplcClkCardSndTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var T2RplcClkCardSndTrait = /** @class */ (function (_super) {
    __extends(T2RplcClkCardSndTrait, _super);
    function T2RplcClkCardSndTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2RplcClkCardSndTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerOldGameplayEvents();
    };
    T2RplcClkCardSndTrait.prototype.registerOldGameplayEvents = function () {
        this.registerEvent([{
                event: "SelectBhv_playNmlAud"
            }, {
                event: "SelectBhv_rollCardAud"
            }]);
    };
    T2RplcClkCardSndTrait.prototype.onT2UpSlotBarBhv_playTchAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Touch2);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onT2RollCardBhv_playRvlAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onSelectBhv_playNmlAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Touch2);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onSelectBhv_rollCardAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.traitKey = "T2RplcClkCardSnd";
    T2RplcClkCardSndTrait = __decorate([
        mj.trait,
        mj.class("T2RplcClkCardSndTrait")
    ], T2RplcClkCardSndTrait);
    return T2RplcClkCardSndTrait;
}(Trait_1.default));
exports.default = T2RplcClkCardSndTrait;

cc._RF.pop();