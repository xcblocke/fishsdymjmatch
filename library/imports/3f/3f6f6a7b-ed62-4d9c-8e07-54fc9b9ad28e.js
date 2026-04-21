"use strict";
cc._RF.push(module, '3f6f6p77WJNnI4HVPybmtKO', 'GlobalClickEffectTrait');
// subpackages/r_globalClickEffect/Scripts/GlobalClickEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EClickType = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var EClickType;
(function (EClickType) {
    EClickType[EClickType["Flower"] = 1] = "Flower";
    EClickType[EClickType["Bubble"] = 2] = "Bubble";
})(EClickType = exports.EClickType || (exports.EClickType = {}));
var GlobalClickEffectTrait = /** @class */ (function (_super) {
    __extends(GlobalClickEffectTrait, _super);
    function GlobalClickEffectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalClickEffectTrait_1 = GlobalClickEffectTrait;
    Object.defineProperty(GlobalClickEffectTrait.prototype, "clickType", {
        get: function () {
            return null != this._traitData.clickType ? this._traitData.clickType : EClickType.Flower;
        },
        enumerable: false,
        configurable: true
    });
    GlobalClickEffectTrait.prototype.onTopTouchView_start = function (e, t) {
        if (this.isValentineEffActive())
            t();
        else {
            this.addClickEffect(e.args[0]);
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    GlobalClickEffectTrait.prototype.addClickEffect = function (e) {
        var t = cc.Canvas.instance.node, i = "in_" + this.clickType, n = BaseSpine_1.default.create(GlobalClickEffectTrait_1.CLICK_EFF_PATH, i, 1, null, true, GlobalClickEffectTrait_1.BUNDLE_NAME);
        n.node.zIndex = 999;
        n.node.parent = t;
        var o = e.getLocation(), c = t.convertToNodeSpaceAR(cc.v3(o.x, o.y, 0));
        n.node.position = c;
    };
    GlobalClickEffectTrait.prototype.isValentineEffActive = function () {
        var e, t, r = mj.getClassByName("ValentineModel");
        return null != r && (null === (t = null === (e = r.getInstance) || void 0 === e ? void 0 : e.call(r)) || void 0 === t ? void 0 : t.isEffectActive());
    };
    var GlobalClickEffectTrait_1;
    GlobalClickEffectTrait.traitKey = "GlobalClickEffect";
    GlobalClickEffectTrait.BUNDLE_NAME = "r_globalClickEffect";
    GlobalClickEffectTrait.CLICK_EFF_PATH = "spine/gameplay_touch";
    GlobalClickEffectTrait = GlobalClickEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("GlobalClickEffectTrait")
    ], GlobalClickEffectTrait);
    return GlobalClickEffectTrait;
}(Trait_1.default));
exports.default = GlobalClickEffectTrait;

cc._RF.pop();