"use strict";
cc._RF.push(module, '00803k9tLFJ3Jxt1LEV7GSo', 'FirstClearUnComboTrait');
// subpackages/l_firstClearUnCombo/Scripts/FirstClearUnComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FirstClearUnComboTrait = /** @class */ (function (_super) {
    __extends(FirstClearUnComboTrait, _super);
    function FirstClearUnComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstClearUnComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FirstClearUnComboTrait.prototype.onComboChk_canBreakCb = function (t, r) {
        if (0 !== t.ins.context.getGameData().getClearTileCount()) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    FirstClearUnComboTrait.traitKey = "FirstClearUnCombo";
    FirstClearUnComboTrait = __decorate([
        mj.trait,
        mj.class("FirstClearUnComboTrait")
    ], FirstClearUnComboTrait);
    return FirstClearUnComboTrait;
}(Trait_1.default));
exports.default = FirstClearUnComboTrait;

cc._RF.pop();