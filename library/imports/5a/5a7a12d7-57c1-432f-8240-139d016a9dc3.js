"use strict";
cc._RF.push(module, '5a7a1LXV8FDL4JAE50Bap3D', 'RedDotCtrlTrait');
// subpackages/l_redDotCtrl/Scripts/RedDotCtrlTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RedDotCtrlTrait = /** @class */ (function (_super) {
    __extends(RedDotCtrlTrait, _super);
    function RedDotCtrlTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedDotCtrlTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RedDotCtrlTrait.prototype.onRedDotCtrl_showRedDot = function (t, r) {
        var e = t.args;
        if (e && e.length > 0) {
            var o = e[0];
            o && (o.show = this._traitData.show);
        }
        r({
            returnType: TraitCallbackReturnType.return
        });
    };
    RedDotCtrlTrait.traitKey = "RedDotCtrl";
    RedDotCtrlTrait = __decorate([
        mj.trait,
        mj.class("RedDotCtrlTrait")
    ], RedDotCtrlTrait);
    return RedDotCtrlTrait;
}(Trait_1.default));
exports.default = RedDotCtrlTrait;

cc._RF.pop();