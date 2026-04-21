"use strict";
cc._RF.push(module, '95f39YlKaZNqaHwcTdLqPyi', 'ReplaceHardExpertBtnTrait');
// subpackages/r_replaceHardExpertBtn/Scripts/ReplaceHardExpertBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ReplaceHardExpertBtnTrait = /** @class */ (function (_super) {
    __extends(ReplaceHardExpertBtnTrait, _super);
    function ReplaceHardExpertBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReplaceHardExpertBtnTrait_1 = ReplaceHardExpertBtnTrait;
    ReplaceHardExpertBtnTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onTLMapVw_viewShow = function (t, e) {
        this.updateTravelMapBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onWinVw_showWinVw = function (t, e) {
        this.updateWinViewBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this.updateTLWinViewBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.updateWinViewBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isNormalHard(), n = this.isNormalExpert(), a = t._btnNext, i = cc.find("content/bg_up", a);
            if (e || n) {
                var o = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
                BaseSprite_1.default.refreshWithNode(i, o, false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else
                BaseSprite_1.default.refreshWithNode(i, "texture/win/result_btn_up", false, true);
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateTLWinViewBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isTravelHard(), n = t._btnNext, a = cc.find("content/bg_up", n);
            if (e) {
                BaseSprite_1.default.refreshWithNode(a, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else {
                BaseSprite_1.default.refreshWithNode(a, "texture/win/result_btn_up", false, true);
            }
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateTravelMapBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isTravelHard(), n = cc.find("Bottom/LevelBtn/BgBtn", t.node);
            if (e) {
                BaseSprite_1.default.refreshWithNode(n, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else {
                BaseSprite_1.default.refreshWithNode(n, "texture/win/result_btn_up", false, true);
            }
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateHallNormalBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isNormalHard(), n = this.isNormalExpert(), a = cc.find("BgBtn", t.node);
            if (e || n) {
                var i = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
                BaseSprite_1.default.refreshWithNode(a, i, false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else
                BaseSprite_1.default.refreshWithNode(a, "texture/win/result_btn_up", false, true);
        }
    };
    ReplaceHardExpertBtnTrait.prototype.isNormalHard = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        return ExtractTool_1.default.getInstance().isHardUI(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isNormalExpert = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        return ExtractTool_1.default.getInstance().isExpertUI(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isTravelHard = function () {
        var t = TravelGameData_1.default.getInstance().getLevelId();
        return TravelGameModel_1.default.getInstance().isHardLevel(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isValentineEffectActive = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null != e && (null === (t = e.getInstance()) || void 0 === t ? void 0 : t.isEffectActive());
    };
    var ReplaceHardExpertBtnTrait_1;
    ReplaceHardExpertBtnTrait.traitKey = "ReplaceHardExpertBtn";
    ReplaceHardExpertBtnTrait.BUNDLE_NAME = "r_replaceHardExpertBtn";
    ReplaceHardExpertBtnTrait = ReplaceHardExpertBtnTrait_1 = __decorate([
        mj.trait,
        mj.class("ReplaceHardExpertBtnTrait")
    ], ReplaceHardExpertBtnTrait);
    return ReplaceHardExpertBtnTrait;
}(Trait_1.default));
exports.default = ReplaceHardExpertBtnTrait;

cc._RF.pop();