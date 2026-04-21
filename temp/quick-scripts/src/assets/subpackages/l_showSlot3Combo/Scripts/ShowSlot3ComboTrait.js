"use strict";
cc._RF.push(module, '7d4ccFIHDZJ9aKg+tJTnZqM', 'ShowSlot3ComboTrait');
// subpackages/l_showSlot3Combo/Scripts/ShowSlot3ComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ShowSlot3ComboTrait = /** @class */ (function (_super) {
    __extends(ShowSlot3ComboTrait, _super);
    function ShowSlot3ComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COMBO_STAGE_MAP = {
            5: 1,
            10: 1,
            15: 2,
            20: 2,
            25: 2,
            30: 3
        };
        return _this;
    }
    ShowSlot3ComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ShowSlot3ComboTrait.prototype.onT2CmbChk_showTopEff = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEdgeBhv_isSlot4 = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2SlotAdvBhv_isShow4 = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onIptT2InitSlotBar_isSlot3 = function (t, r) {
        r({
            returnVal: true,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEdgeBhv_getStage = function (t, r) {
        var e = t.args[0] || 0;
        if (e % 5 != 0)
            r();
        else {
            var o = this.COMBO_STAGE_MAP[e];
            e > 30 && (o = 4);
            r({
                returnVal: o,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEEffIt_getSpPh = function (t, r) {
        r({
            returnVal: "spine/motivationalWords/gameplay_combo10",
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.traitKey = "ShowSlot3Combo";
    ShowSlot3ComboTrait = __decorate([
        mj.trait,
        mj.class("ShowSlot3ComboTrait")
    ], ShowSlot3ComboTrait);
    return ShowSlot3ComboTrait;
}(Trait_1.default));
exports.default = ShowSlot3ComboTrait;

cc._RF.pop();