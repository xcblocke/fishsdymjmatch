"use strict";
cc._RF.push(module, '10bf3uxKrNIBZ51Jxu0BUOU', 'TouchMoveSizeTrait');
// subpackages/l_touchmovesize/Scripts/TouchMoveSizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var TouchMoveSizeTrait = /** @class */ (function (_super) {
    __extends(TouchMoveSizeTrait, _super);
    function TouchMoveSizeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchMoveSizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchMoveSizeTrait.prototype.onTileSelector_exMultiple = function (t, e) {
        t.ins;
        var r, o, i, n, a, l, c = this._traitData.multiple || 1.5;
        if (null === (r = this._traitData) || void 0 === r ? void 0 : r.isUseMemLimit) {
            var p = (null === (o = this._traitData) || void 0 === o ? void 0 : o.allMemoryRange) || [5, 11], f = Number(null !== (i = p[0]) && void 0 !== i ? i : 5), s = Number(null !== (n = p[1]) && void 0 !== n ? n : 11), d = Number(null !== (l = null === (a = LoginModel_1.default.getInstance()) || void 0 === a ? void 0 : a.allMemory) && void 0 !== l ? l : 0);
            if (!(d > 1024 * f && d < 1024 * s)) {
                e();
                return;
            }
        }
        e({
            returnVal: c,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TouchMoveSizeTrait.traitKey = "TouchMoveSize";
    TouchMoveSizeTrait = __decorate([
        mj.trait,
        mj.class("TouchMoveSizeTrait")
    ], TouchMoveSizeTrait);
    return TouchMoveSizeTrait;
}(Trait_1.default));
exports.default = TouchMoveSizeTrait;

cc._RF.pop();