"use strict";
cc._RF.push(module, 'beb99ikEt5G5I+UTCbTdKAG', 'RollCardClearTrait');
// subpackages/l_rollcardclear/Scripts/RollCardClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RollCardClearTrait = /** @class */ (function (_super) {
    __extends(RollCardClearTrait, _super);
    function RollCardClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardClearTrait.prototype.onRollCTNode_clearCelSel = function (t, r) {
        var e;
        null === (e = t.ins._tileFlipStateCtl) || void 0 === e || e.forceEnter();
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RollCardClearTrait.traitKey = "RollCardClear";
    RollCardClearTrait = __decorate([
        mj.trait,
        mj.class("RollCardClearTrait")
    ], RollCardClearTrait);
    return RollCardClearTrait;
}(Trait_1.default));
exports.default = RollCardClearTrait;

cc._RF.pop();