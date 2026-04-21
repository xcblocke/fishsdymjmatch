"use strict";
cc._RF.push(module, '6ac57SmdqNP37PgVVMn6Wga', 'ButtonScaleTrait');
// subpackages/l_buttonScale/Scripts/ButtonScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ButtonScaleTrait = /** @class */ (function (_super) {
    __extends(ButtonScaleTrait, _super);
    function ButtonScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var o = cc.Button.prototype._onTouchMove, e = cc.Button.prototype._onMouseMoveIn, n = cc.Button.prototype._onMouseMoveOut;
        cc.Button.prototype._onTouchMove = function (t) {
            this.transition !== cc.Button.Transition.SCALE && o.call(this, t);
        };
        cc.Button.prototype._onMouseMoveIn = function (t) {
            this.transition !== cc.Button.Transition.SCALE && e.call(this, t);
        };
        cc.Button.prototype._onMouseMoveOut = function (t) {
            this.transition !== cc.Button.Transition.SCALE && n.call(this, t);
        };
    };
    ButtonScaleTrait.traitKey = "ButtonScale";
    ButtonScaleTrait = __decorate([
        mj.trait,
        mj.class("ButtonScaleTrait")
    ], ButtonScaleTrait);
    return ButtonScaleTrait;
}(Trait_1.default));
exports.default = ButtonScaleTrait;

cc._RF.pop();