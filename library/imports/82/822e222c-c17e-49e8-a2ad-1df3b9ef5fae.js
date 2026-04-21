"use strict";
cc._RF.push(module, '822e2IswX5J6KKtHfO571+u', 'ClearAnimTrait');
// subpackages/l_clearAnim/Scripts/ClearAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearAnimTrait = /** @class */ (function (_super) {
    __extends(ClearAnimTrait, _super);
    function ClearAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearAnimTrait_1 = ClearAnimTrait;
    ClearAnimTrait.prototype.onClearBhv_playMove = function (t, r) {
        try {
            var n = __read(t.args, 6), i = n[0], o = n[1], c = n[2], u = n[3], f = n[4], s = n[5], p = Math.abs(u[0].x - u[1].x), y = c, _ = cc.easing.cubicIn;
            if (p < 2 * i.width) {
                y = c + 0.05;
                _ = cc.easing.expoIn;
            }
            if (i && cc.isValid(i) && u && u.length > 0)
                cc.tween(i).to(o, {
                    position: u[0]
                }, {
                    easing: cc.easing.circOut
                }).to(y, {
                    position: u[1]
                }, {
                    easing: _
                }).call(function () {
                    null == f || f();
                    null == s || s();
                }).start();
            else {
                null == f || f();
                null == s || s();
            }
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        catch (t) {
            console.error("[" + ClearAnimTrait_1.traitKey + "] 消除动画异常: " + t.message);
            r();
        }
    };
    var ClearAnimTrait_1;
    ClearAnimTrait.traitKey = "ClearAnim";
    ClearAnimTrait = ClearAnimTrait_1 = __decorate([
        mj.trait,
        mj.class("ClearAnimTrait")
    ], ClearAnimTrait);
    return ClearAnimTrait;
}(Trait_1.default));
exports.default = ClearAnimTrait;

cc._RF.pop();