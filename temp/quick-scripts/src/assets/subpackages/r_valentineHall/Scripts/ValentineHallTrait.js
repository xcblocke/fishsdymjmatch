"use strict";
cc._RF.push(module, '6a402uVDjxNcYz9rmB723qB', 'ValentineHallTrait');
// subpackages/r_valentineHall/Scripts/ValentineHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineHallTrait = /** @class */ (function (_super) {
    __extends(ValentineHallTrait, _super);
    function ValentineHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValentineHallTrait.prototype, "replaceAllHall", {
        get: function () {
            var t, e;
            return null === (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.replaceAllHall) || void 0 === e || e;
        },
        enumerable: false,
        configurable: true
    });
    ValentineHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ValentineHallTrait.prototype.isEffectActive = function () {
        var t = mj.getClassByName("ValentineModel"), e = mj.getClassByName("ComplexValentineTrait");
        return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
    };
    ValentineHallTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    ValentineHallTrait.prototype.onHallVw_forceUpdate = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    ValentineHallTrait.prototype.updateHallUI = function (t) {
        t.constructor.getUrl();
        cc.isValid(t.node) && (this.replaceAllHall || "Hall" !== t.hallTheme) && (this.isEffectActive() ? t.changeTheme("Hall4", false) : t.changeTheme(t.hallTheme, false));
    };
    ValentineHallTrait.traitKey = "ValentineHall";
    ValentineHallTrait = __decorate([
        mj.trait,
        mj.class("ValentineHallTrait")
    ], ValentineHallTrait);
    return ValentineHallTrait;
}(Trait_1.default));
exports.default = ValentineHallTrait;

cc._RF.pop();