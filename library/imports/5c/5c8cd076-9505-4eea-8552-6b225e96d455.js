"use strict";
cc._RF.push(module, '5c8cdB2lQVO6oVSayJeltRV', 'GuideDragZTrait');
// subpackages/l_guideDragZ/Scripts/GuideDragZTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideDragZTrait = /** @class */ (function (_super) {
    __extends(GuideDragZTrait, _super);
    function GuideDragZTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideDragZTrait_1 = GuideDragZTrait;
    GuideDragZTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideDragZTrait.prototype.onGuideBhv_start = function (t, r) {
        var o;
        try {
            var i = t.ins, n = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
            if (n) {
                var a = n.guideRootNode, u = n.nodeDragCardRoot;
                if (a && u) {
                    var c = a.getSiblingIndex(), f = u.getSiblingIndex();
                    c > f && a.setSiblingIndex(f);
                }
            }
            r();
        }
        catch (t) {
            console.error("[" + GuideDragZTrait_1.traitKey + "] 调整引导层级失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var GuideDragZTrait_1;
    GuideDragZTrait.traitKey = "GuideDragZ";
    GuideDragZTrait = GuideDragZTrait_1 = __decorate([
        mj.trait,
        mj.class("GuideDragZTrait")
    ], GuideDragZTrait);
    return GuideDragZTrait;
}(Trait_1.default));
exports.default = GuideDragZTrait;

cc._RF.pop();