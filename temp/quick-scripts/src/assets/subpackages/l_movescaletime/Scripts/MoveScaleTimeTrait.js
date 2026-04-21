"use strict";
cc._RF.push(module, 'f0788Tg0dBA+54ONKLiu+Uf', 'MoveScaleTimeTrait');
// subpackages/l_movescaletime/Scripts/MoveScaleTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MoveScaleTimeTrait = /** @class */ (function (_super) {
    __extends(MoveScaleTimeTrait, _super);
    function MoveScaleTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveScaleTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MoveScaleTimeTrait.prototype.onMoveStateAni_duration = function (t, e) {
        e({
            returnVal: this._traitData.duration || 0.05,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveScaleTimeTrait.prototype.onScaleStateAni_duration = function (t, e) {
        e({
            returnVal: this._traitData.duration || 0.05,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveScaleTimeTrait.traitKey = "MoveScaleTime";
    MoveScaleTimeTrait = __decorate([
        mj.trait,
        mj.class("MoveScaleTimeTrait")
    ], MoveScaleTimeTrait);
    return MoveScaleTimeTrait;
}(Trait_1.default));
exports.default = MoveScaleTimeTrait;

cc._RF.pop();