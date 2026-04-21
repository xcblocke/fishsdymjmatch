"use strict";
cc._RF.push(module, 'e49f1A2LfhAKbMYnD4uKczK', 'MainPropPosTrait');
// subpackages/l_mainPropPos/Scripts/MainPropPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MainPropPosTrait = /** @class */ (function (_super) {
    __extends(MainPropPosTrait, _super);
    function MainPropPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPropPosTrait.prototype.onMainGmVw_calcAreaSz = function (t, e) {
        var r, o = t.ins;
        if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._bottomRootNode;
            if (cc.isValid(i)) {
                if (!i.getChildByName("nodePropBg")) {
                    var n = new cc.Node("nodePropBg");
                    n.setAnchorPoint(0.5, 1);
                    n.height = 640;
                    i.addChild(n);
                    n.setSiblingIndex(0);
                    var c = n.addComponent(cc.Widget);
                    c.isAlignLeft = c.isAlignRight = true;
                    c.isAlignTop = true;
                    c.left = c.right = 0;
                    c.top = 55;
                    c.target = i;
                    n.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                    BaseSprite_1.default.refreshWithNode(n, "texture/journeyMap/01/journey_bg_dn", false, true);
                    this.createNodePropBg(o, n);
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    MainPropPosTrait.prototype.createNodePropBg = function () { };
    MainPropPosTrait.traitKey = "MainPropPos";
    __decorate([
        mj.traitEvent("MainPrPosTrait_crtNoPrBg")
    ], MainPropPosTrait.prototype, "createNodePropBg", null);
    MainPropPosTrait = __decorate([
        mj.trait,
        mj.class("MainPropPosTrait")
    ], MainPropPosTrait);
    return MainPropPosTrait;
}(Trait_1.default));
exports.default = MainPropPosTrait;

cc._RF.pop();