"use strict";
cc._RF.push(module, '86630/qjBZFEZfu/mhag8Vi', 'LowLoadUnLoadedTrait');
// subpackages/l_lowLoadUnloaded/Scripts/LowLoadUnLoadedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowLoadUnLoadedTrait = /** @class */ (function (_super) {
    __extends(LowLoadUnLoadedTrait, _super);
    function LowLoadUnLoadedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowLoadUnLoadedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowLoadUnLoadedTrait.prototype.onLowPriLoader_addLoadCnt = function (t, r) {
        var e;
        if (1 != (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump
            });
        }
    };
    LowLoadUnLoadedTrait.traitKey = "LowLoadUnLoaded";
    LowLoadUnLoadedTrait = __decorate([
        mj.trait,
        mj.class("LowLoadUnLoadedTrait")
    ], LowLoadUnLoadedTrait);
    return LowLoadUnLoadedTrait;
}(Trait_1.default));
exports.default = LowLoadUnLoadedTrait;

cc._RF.pop();