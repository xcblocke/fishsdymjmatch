"use strict";
cc._RF.push(module, '567f1R732lJZrsmENpxsxdP', 'ChangeCardLayoutTrait');
// subpackages/l_changeCardLayout/Scripts/ChangeCardLayoutTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeCardLayoutTrait = /** @class */ (function (_super) {
    __extends(ChangeCardLayoutTrait, _super);
    function ChangeCardLayoutTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeCardLayoutTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeCardLayoutTrait.prototype.getGmCardSpaceOffset = function () {
        return null;
    };
    ChangeCardLayoutTrait.prototype.onMainGameCtrl_crtCardLyt = function (t, r) {
        var e = t.beforReturnVal;
        if (e) {
            var a = this._traitData.cardSpaceOffset;
            this.getGmCardSpaceOffset();
            if (a && 2 === a.length) {
                var n = [e.cardSpace[0] + a[0], e.cardSpace[1] + a[1]], i = Object.assign(Object.assign({}, e), {
                    cardSpace: n
                });
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: i
                });
            }
            else
                r();
        }
        else
            r();
    };
    ChangeCardLayoutTrait.traitKey = "ChangeCardLayout";
    ChangeCardLayoutTrait = __decorate([
        mj.trait,
        mj.class("ChangeCardLayoutTrait")
    ], ChangeCardLayoutTrait);
    return ChangeCardLayoutTrait;
}(Trait_1.default));
exports.default = ChangeCardLayoutTrait;

cc._RF.pop();