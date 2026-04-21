"use strict";
cc._RF.push(module, 'abb2cc0I6xOt5tC/JgRsUoj', 'ValentineHallBtnTrait');
// subpackages/r_valentineHallBtn/Scripts/ValentineHallBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var ValentineHallBtnTrait = /** @class */ (function (_super) {
    __extends(ValentineHallBtnTrait, _super);
    function ValentineHallBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineHallBtnTrait_1 = ValentineHallBtnTrait;
    ValentineHallBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "ClassicBtn_updateUI"
            }, {
                event: "ClassicBtn_forceUpdate"
            }]);
    };
    ValentineHallBtnTrait.prototype.isEffectActive = function () {
        var t = mj.getClassByName("ValentineModel"), e = mj.getClassByName("ComplexValentineTrait");
        return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
    };
    ValentineHallBtnTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        this.updateHallNormalBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        this.updateHallNormalBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onTravelBtn_forceUpdate = function (t, e) {
        this.updateHallTravelBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        this.updateHallTravelBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onClassicBtn_updateUI = function (t, e) {
        this.updateHallClassicBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onClassicBtn_forceUpdate = function (t, e) {
        this.updateHallClassicBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.updateHallNormalBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("BgBtn", t.node), n = cc.find("BgBtn/Label", t.node);
            if (this.isEffectActive()) {
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_orange", false, true, "r_valentineHallBtn");
                this.changeLabelColor(n, cc.color(255, 248, 242, 255));
            }
            else {
                BaseSprite_1.default.refreshWithNode(e, "texture/win/result_btn_up", false, true);
                this.changeLabelColor(n);
            }
        }
    };
    ValentineHallBtnTrait.prototype.updateHallTravelBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("Root/BgBtn", t.node), n = cc.find("Root/Timer/Time", t.node), o = cc.find("Root/Timer/Icon", t.node), r = cc.find("Root/Title", t.node), i = cc.find("Root/Lock/Desc", t.node);
            if (this.isEffectActive()) {
                this.changeLabelColor(n, cc.color(243, 157, 207, 255));
                this.changeLabelColor(i, cc.color(255, 248, 242, 255));
                this.changeLabelColor(r, cc.color(255, 222, 248, 255));
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
                BaseSprite_1.default.refreshWithNode(o, "texture/main_img_time", false, true, "r_valentineHallBtn");
            }
            else {
                this.changeLabelColor(n);
                this.changeLabelColor(i);
                this.changeLabelColor(r);
                BaseSprite_1.default.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
                BaseSprite_1.default.refreshWithNode(o, "texture/hall/main_img_time", false, true);
            }
        }
    };
    ValentineHallBtnTrait.prototype.updateHallClassicBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("BgBtn", t.node), n = cc.find("BgBtn/Label", t.node);
            if (this.isEffectActive()) {
                this.changeLabelColor(n, cc.color(255, 222, 248, 255));
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
            }
            else {
                this.changeLabelColor(n);
                BaseSprite_1.default.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
            }
        }
    };
    ValentineHallBtnTrait.prototype.changeLabelColor = function (t, e) {
        var o = ValentineHallBtnTrait_1.traitKey + "_originalColor_";
        t[o] || (t[o] = t.color);
        (e = e || t[o]) && this.setLabelColor(t, e);
    };
    ValentineHallBtnTrait.prototype.setLabelColor = function (t, e) {
        if (!cc.isValid(t))
            return false;
        t.color = e;
        return true;
    };
    var ValentineHallBtnTrait_1;
    ValentineHallBtnTrait.traitKey = "ValentineHallBtn";
    __decorate([
        mj.traitEvent("ValHallBtn_setLabCol")
    ], ValentineHallBtnTrait.prototype, "setLabelColor", null);
    ValentineHallBtnTrait = ValentineHallBtnTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineHallBtnTrait")
    ], ValentineHallBtnTrait);
    return ValentineHallBtnTrait;
}(Trait_1.default));
exports.default = ValentineHallBtnTrait;

cc._RF.pop();