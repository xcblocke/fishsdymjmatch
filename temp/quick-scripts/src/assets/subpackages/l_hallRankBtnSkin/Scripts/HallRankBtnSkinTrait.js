"use strict";
cc._RF.push(module, 'ed7f0sJQrBGu4gAVRyvRMak', 'HallRankBtnSkinTrait');
// subpackages/l_hallRankBtnSkin/Scripts/HallRankBtnSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HallRankBtnSkinTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnSkinTrait, _super);
    function HallRankBtnSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallRankBtnSkinTrait.prototype.onHallRankBLockTt_crtBtnSp = function (t, n) {
        var e = t.ins, r = t.args[0];
        if (!cc.isValid(e._rankUnopenSpine) && cc.isValid(r)) {
            var i = BaseSpine_1.default.create("spine/main_enter_locked", "init", -1, null, false, "l_hallRankBtnSkin");
            i.node.parent = r;
            i.node.position = cc.v3(0, 0, 0);
            i.node.setSiblingIndex(0);
            e._rankUnopenSpine = i;
            n({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            n();
    };
    HallRankBtnSkinTrait.prototype.onRankBtn_initComp = function (t, n) {
        var e = t.ins;
        if (cc.isValid(e) && cc.isValid(e.node)) {
            var r = cc.find("bg/down", e.node), i = cc.find("bg/up", e.node), o = BaseSpine_1.default.refreshWithNode(r, "spine/main_enter_unlock", "l_hallRankBtnSkin");
            o.setAnimation("init_down", -1, null, false);
            o.attachNode("hook_photo", function () {
                return e._cardSprNode;
            });
            BaseSpine_1.default.refreshWithNode(i, "spine/main_enter_unlock", "l_hallRankBtnSkin").setAnimation("init_up", -1, null, false);
            n({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            n();
    };
    HallRankBtnSkinTrait.traitKey = "HallRankBtnSkin";
    HallRankBtnSkinTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnSkinTrait")
    ], HallRankBtnSkinTrait);
    return HallRankBtnSkinTrait;
}(Trait_1.default));
exports.default = HallRankBtnSkinTrait;

cc._RF.pop();