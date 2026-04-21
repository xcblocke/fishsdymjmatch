"use strict";
cc._RF.push(module, '704f7/XlbdDmJV+mVKBGCID', 'PropToUpRightTrait');
// subpackages/l_propToUpRight/Scripts/PropToUpRightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var PropToUpRightTrait = /** @class */ (function (_super) {
    __extends(PropToUpRightTrait, _super);
    function PropToUpRightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropToUpRightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropToUpRightTrait.prototype.onGameUI_onLoad = function (e, t) {
        var o = e.ins;
        if (o && cc.isValid(o.node)) {
            var n = o.node.getChildByName("nodeTop"), r = o.node.getChildByName("nodeBottom"), i = o.btnSettings.position, a = n.width, c = n.convertToWorldSpaceAR(cc.v2(a / 2, 5)), p = r.convertToNodeSpaceAR(c);
            o.btnShuffle.setPosition(p.x - 140 - 72, p.y);
            o.btnHitTips.setPosition(p.x - 20 - 72, p.y);
            this.adjustBtn(o.btnShuffle, "gameplay_icon_refresh");
            this.adjustBtn(o.btnHitTips, "gameplay_icon_hint");
            o.btnSettings.setPosition(-i.x, i.y);
            var s = o.node.getChildByName("nodeTop").getChildByName("levelDesc").getComponent(cc.Label);
            s.fontSize = 36;
            s.node.setAnchorPoint(0.5, 0.5);
            s.node.position = new cc.Vec2(-304.8, 33.83);
            var l = o.node.getChildByName("nodeTop").getChildByName("labelLevel").getComponent(cc.Label);
            l.fontSize = 36;
            l.node.setAnchorPoint(0.5, 0.5);
            l.node.position = new cc.Vec2(-304.9, -14.6);
            t();
        }
        else
            t();
    };
    PropToUpRightTrait.prototype.onGameUI_adaptLv = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    PropToUpRightTrait.prototype.adjustBtn = function (e, t) {
        if (cc.isValid(e)) {
            e.setContentSize(new cc.Size(103, 103));
            var o = e.getChildByName("Background"), n = e.getChildByName("propCornerItem"), r = e.getChildByName("propCornerItem").getChildByName("nodeVideo"), i = e.getChildByName("propCornerItem").getChildByName("nodeNum"), a = e.getChildByName("propCornerItem").getChildByName("nodeNum").getChildByName("labelNum");
            a.getComponent(cc.Label).fontSize = 32;
            a.color = new cc.Color(247, 222, 222);
            a.setPosition(0, 2);
            n.setPosition(50, 27);
            o.setContentSize(new cc.Size(0, 0));
            r.setContentSize(new cc.Size(0, 0));
            r.x = -10;
            i.setContentSize(new cc.Size(0, 0));
            BaseSprite_1.default.refreshWithNode(o, "textures/" + t, false, false, "l_propToUpRight");
            BaseSprite_1.default.refreshWithNode(r, "textures/gameplay_icon_ad", false, false, "l_propToUpRight");
            BaseSprite_1.default.refreshWithNode(i, "textures/gameplay_icon_time", false, false, "l_propToUpRight");
        }
    };
    PropToUpRightTrait.traitKey = "PropToUpRight";
    PropToUpRightTrait = __decorate([
        mj.trait,
        mj.class("PropToUpRightTrait")
    ], PropToUpRightTrait);
    return PropToUpRightTrait;
}(Trait_1.default));
exports.default = PropToUpRightTrait;

cc._RF.pop();