"use strict";
cc._RF.push(module, '99331J/3TNJcY6p4d+PAJsQ', 'HallThemeTrait');
// subpackages/l_hallTheme/Scripts/HallThemeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallThemeTrait = /** @class */ (function (_super) {
    __extends(HallThemeTrait, _super);
    function HallThemeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HallThemeTrait.prototype, "hallTheme", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.theme) && void 0 !== e ? e : "";
        },
        enumerable: false,
        configurable: true
    });
    HallThemeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallThemeTrait.prototype.onHallVw_chgTheme = function (t, e) {
        if (t.args[1]) {
            t.args[0] = this.hallTheme;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    HallThemeTrait.traitKey = "HallTheme";
    HallThemeTrait = __decorate([
        mj.trait,
        mj.class("HallThemeTrait")
    ], HallThemeTrait);
    return HallThemeTrait;
}(Trait_1.default));
exports.default = HallThemeTrait;

cc._RF.pop();