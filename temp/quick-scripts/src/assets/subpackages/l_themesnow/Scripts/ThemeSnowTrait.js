"use strict";
cc._RF.push(module, '87dbcaEyrROMaR+2apHHZ5C', 'ThemeSnowTrait');
// subpackages/l_themesnow/Scripts/ThemeSnowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ThemeSnowTrait = /** @class */ (function (_super) {
    __extends(ThemeSnowTrait, _super);
    function ThemeSnowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeSnowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ThemeSnowTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        e.ins.addPreloadRes("SpriteFrame", ["l_themesnow:texture/gameplay_btn_hint", "l_themesnow:texture/gameplay_btn_refresh", "l_themesnow:texture/gameplay_img1", "l_themesnow:texture/gameplay_img2", "l_themesnow:texture/gameplay_pic_snow"]);
        t();
    };
    ThemeSnowTrait.prototype.onMainGmVw_beChangeTheme = function (e, t) {
        var o = e.ins, r = (e.args[0], e.args[1]);
        e.args[2];
        if ("ThemeSnow" == r || "" == r) {
            e.args[1] = "ThemeSnow";
            t();
        }
        else {
            this.resetOtherNodes(o);
            t();
        }
    };
    ThemeSnowTrait.prototype.resetOtherNodes = function (e) {
        var t;
        if (cc.isValid(null == e ? void 0 : e.node)) {
            var o = null === (t = e.bottomRootNode) || void 0 === t ? void 0 : t.getChildByName("nodePropBg"), r = null == o ? void 0 : o.getChildByName("gameplay_pic_snow");
            cc.isValid(r) && r.destroy();
            var i = e.node.getChildByName("bg");
            if (i) {
                var n = i.getChildByName("gameplay_img1"), a = i.getChildByName("gameplay_img2");
                cc.isValid(n) && n.destroy();
                cc.isValid(a) && a.destroy();
            }
        }
    };
    ThemeSnowTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var o = e.ins, r = (e.args[0], e.args[1]);
        e.args[2];
        if ("ThemeSnow" == r || "" == r) {
            e.args[1] = "ThemeSnow";
            this.changeThemeRes(o);
            t();
        }
        else
            t();
    };
    ThemeSnowTrait.prototype.onMainGmVw_resetTheme = function (e, t) {
        var o = e.ins, r = (e.args[0], e.args[1]);
        e.args[2];
        "" == r && this.changeThemeRes(o);
        e.args[1] = "ThemeSnow";
        t();
    };
    ThemeSnowTrait.prototype.changeThemeRes = function (e) {
        var t, o, r, i = e.gameUI;
        if (i) {
            var n = null === (t = i.btnShuffle) || void 0 === t ? void 0 : t.getChildByName("Background"), a = null === (o = i.btnHitTips) || void 0 === o ? void 0 : o.getChildByName("Background");
            BaseSprite_1.default.refreshWithNode(n, "texture/gameplay_btn_refresh", false, true, "l_themesnow");
            BaseSprite_1.default.refreshWithNode(a, "texture/gameplay_btn_hint", false, true, "l_themesnow");
        }
        var p = e.node.getChildByName("bg");
        if (p) {
            var c = new cc.Node("gameplay_img1");
            c.parent = p;
            var l = c.addComponent(cc.Widget);
            l.isAlignTop = true;
            l.top = 0;
            BaseSprite_1.default.refreshWithNode(c, "texture/gameplay_img1", false, true, "l_themesnow");
            c.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
            l.updateAlignment();
            c.setPosition(-305, c.position.y);
            var d = new cc.Node("gameplay_img2");
            d.parent = p;
            var m = d.addComponent(cc.Widget);
            m.isAlignTop = true;
            m.top = 0;
            BaseSprite_1.default.refreshWithNode(d, "texture/gameplay_img2", false, true, "l_themesnow");
            d.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
            m.updateAlignment();
            d.setPosition(389, d.position.y);
        }
        var g = null === (r = e.bottomRootNode) || void 0 === r ? void 0 : r.getChildByName("nodePropBg");
        g && this.changeBar(g);
    };
    ThemeSnowTrait.prototype.isCurTheme = function (e) {
        var t, o = null === (t = UserModel_1.default.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
        return "ThemeSnow" == o || "" == o;
    };
    ThemeSnowTrait.prototype.changeBar = function (e) {
        if (cc.isValid(e)) {
            var t = new cc.Node("gameplay_pic_snow");
            t.parent = e;
            var o = t.addComponent(cc.Widget);
            o.isAlignTop = true;
            o.isAlignLeft = true;
            o.isAlignRight = true;
            o.top = -62;
            o.left = 0;
            o.right = 0;
            var r = t.addComponent(cc.Sprite);
            r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            r.type = cc.Sprite.Type.SIMPLE;
            BaseSprite_1.default.refreshWithNode(t, "texture/gameplay_pic_snow", false, true, "l_themesnow");
            t.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        }
    };
    ThemeSnowTrait.prototype.onMainPrPosTrait_crtNoPrBg = function (e, t) {
        var o = e.args[0];
        this.isCurTheme(o.gameType) && this.changeBar(e.args[1]);
        t();
    };
    ThemeSnowTrait.traitKey = "ThemeSnow";
    ThemeSnowTrait = __decorate([
        mj.trait,
        mj.class("ThemeSnowTrait")
    ], ThemeSnowTrait);
    return ThemeSnowTrait;
}(Trait_1.default));
exports.default = ThemeSnowTrait;

cc._RF.pop();