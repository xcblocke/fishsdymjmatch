"use strict";
cc._RF.push(module, 'b029604TGdHraGyuguMf4g2', 'SelectSpine3Trait');
// subpackages/l_selectspine/Scripts/SelectSpine3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SelectSpine3Trait = /** @class */ (function (_super) {
    __extends(SelectSpine3Trait, _super);
    function SelectSpine3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine3Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine3Trait.prototype.getPicConfig = function (e) {
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
    SelectSpine3Trait.prototype.onGsListener_onReplayGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        if (a && a == GameTypeEnums_1.MjGameType.DailyChallenge) {
            var r = UserModel_1.default.getInstance().getGameDataByGameType(a);
            this.localData[a] = r.getDailyChallengeTimestamp();
        }
        t();
    };
    SelectSpine3Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine3Trait.prototype.getDailyIdByYearMonth = function (e, t) {
        var i, a, r = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge);
        try {
            for (var n = __values(r), o = n.next(); !o.done; o = n.next()) {
                var c = o.value;
                if (c.Year === e && c.Month === t)
                    return c.ID;
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (a = n.return) && a.call(n);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
    };
    SelectSpine3Trait.prototype.getDailyModel = function () {
        var e = mj.getClassByName("DailyModel");
        return null == e ? void 0 : e.getInstance();
    };
    SelectSpine3Trait.prototype.getFile = function (e) {
        var t;
        if (e != GameTypeEnums_1.MjGameType.DailyChallenge) {
            if (UserModel_1.default.getInstance().getGameDataByGameType(e).getReplayCount() > 1)
                return this.getPicConfig(1);
        }
        else {
            var i = UserModel_1.default.getInstance().getGameDataByGameType(e).getDailyChallengeTimestamp();
            if (i) {
                var a = i.split("-"), r = parseInt(a[0]), n = parseInt(a[1]), s = parseInt(a[2]), l = this.getDailyIdByYearMonth(r, n);
                if (null != l && 3 == (null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.getDayStatus(l, s)))
                    return this.getPicConfig(1);
                if (i == this.localData[e])
                    return this.getPicConfig(1);
            }
        }
    };
    SelectSpine3Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = i.context.gameType, s = this.getFile(n);
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
    SelectSpine3Trait.traitKey = "SelectSpine3";
    SelectSpine3Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine3Trait")
    ], SelectSpine3Trait);
    return SelectSpine3Trait;
}(Trait_1.default));
exports.default = SelectSpine3Trait;

cc._RF.pop();