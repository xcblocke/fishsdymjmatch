"use strict";
cc._RF.push(module, '842b4VT5MdMmbs+ejCm9LMV', 'SelectSpine2Trait');
// subpackages/l_selectspine/Scripts/SelectSpine2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SelectSpine2Trait = /** @class */ (function (_super) {
    __extends(SelectSpine2Trait, _super);
    function SelectSpine2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine2Trait.prototype.getPicConfig = function (e) {
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
    SelectSpine2Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine2Trait.prototype.getType2 = function (e) {
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e);
        if (e == GameTypeEnums_1.MjGameType.Normal) {
            if (1 == this.localData[e])
                return this.getPicConfig(1);
            var i = t.getLevelId(), a = ExtractTool_1.default.getInstance().isHardUI(i);
            if (ExtractTool_1.default.getInstance().isExpertUI(i))
                return this.getPicConfig(3);
            if (a)
                return this.getPicConfig(2);
        }
        else if (e == GameTypeEnums_1.MjGameType.Travel) {
            if (1 == this.localData[e])
                return this.getPicConfig(1);
            var r = TravelGameModel_1.default.getInstance();
            i = TravelGameData_1.default.getInstance().getLevelId();
            if (r.isHardLevel(i))
                return this.getPicConfig(2);
        }
    };
    SelectSpine2Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = i.context.gameType, s = this.getType2(n);
        if (s && s.bgPic && s.spine && s.animation) {
            if (cc.isValid(a) && cc.isValid(r)) {
                var o = BaseSprite_1.default.refreshWithNode(a, s.bgPic, false, false, "l_selectspine");
                o.node.getComponent(cc.Sprite).trim = false;
                o.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                o.node.setScale(i.info.tileObject.layoutScale);
                BaseSpine_1.default.refreshWithNode(r, s.spine, "l_selectspine").setAnimation(s.animation, -1);
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
    SelectSpine2Trait.prototype.onAdMgr_videoSuccess = function (e, t) {
        var i = UserModel_1.default.getInstance().getCurrentGameType();
        i && (this.localData[i] = 1);
        t();
    };
    SelectSpine2Trait.prototype.onGsListener_onNewGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        a && (this.localData[a] = 0);
        t();
    };
    SelectSpine2Trait.prototype.onGsListener_onReplayGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        a && (this.localData[a] = 0);
        t();
    };
    SelectSpine2Trait.traitKey = "SelectSpine2";
    SelectSpine2Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine2Trait")
    ], SelectSpine2Trait);
    return SelectSpine2Trait;
}(Trait_1.default));
exports.default = SelectSpine2Trait;

cc._RF.pop();