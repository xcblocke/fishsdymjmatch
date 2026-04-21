"use strict";
cc._RF.push(module, '41445DfM1dNcq3aU+ayLivF', 'SelectSpine1Trait');
// subpackages/l_selectspine/Scripts/SelectSpine1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var SelectSpine1Trait = /** @class */ (function (_super) {
    __extends(SelectSpine1Trait, _super);
    function SelectSpine1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine1Trait.prototype.getPicConfig = function (e) {
        return 1 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_greenLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_green"
        } : 2 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_purpleLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_purple"
        } : {
            bgPic: "texture/selecttex/gameplay_select_mj_redLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_red"
        };
    };
    SelectSpine1Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine1Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = (i.context.gameType, this.getPicConfig(1));
        if (n && n.bgPic && n.spine && n.animation) {
            if (cc.isValid(a) && cc.isValid(r)) {
                var s = BaseSprite_1.default.refreshWithNode(a, n.bgPic, false, false, "l_selectspine");
                s.node.getComponent(cc.Sprite).trim = false;
                s.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                s.node.setScale(i.info.tileObject.layoutScale);
                BaseSpine_1.default.refreshWithNode(r, n.spine, "l_selectspine").setAnimation(n.animation, -1);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    SelectSpine1Trait.traitKey = "SelectSpine1";
    SelectSpine1Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine1Trait")
    ], SelectSpine1Trait);
    return SelectSpine1Trait;
}(Trait_1.default));
exports.default = SelectSpine1Trait;

cc._RF.pop();