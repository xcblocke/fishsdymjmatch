"use strict";
cc._RF.push(module, '0e325aKG3BApbq4j8nhOgqd', 'WinNextBtnRankCardTrait');
// subpackages/l_winNextBtnRankCard/Scripts/WinNextBtnRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WinNextBtnRankCardTrait = /** @class */ (function (_super) {
    __extends(WinNextBtnRankCardTrait, _super);
    function WinNextBtnRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinNextBtnRankCardTrait_1 = WinNextBtnRankCardTrait;
    Object.defineProperty(WinNextBtnRankCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "WinBtnLevelRankCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinNextBtnRankCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "WinBtnLevelNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    WinNextBtnRankCardTrait.prototype.onTile2WinVw_onLoad = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            cc.isValid(i) && this.createCardNode(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onTile2WinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onWinVw_onLoad = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            cc.isValid(i) && this.createCardNode(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onWinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onTile2WinVw_show = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            this.updateCardDisplay(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onTile2WinVw_show 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onWinVw_showWinVw = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            this.updateCardDisplay(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onWinVw_showWinVw 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.createCardNode = function (e) {
        var t = this.noCardConfigList;
        cc.isValid(e) && t && 0 !== t.length && NodeSkinTool_1.default.parseConfigList(e, t, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    WinNextBtnRankCardTrait.prototype.updateCardDisplay = function (e) {
        if (cc.isValid(e))
            if (this.checkShouldShow()) {
                NodeSkinTool_1.default.parseConfigList(e, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                this.updateCardBg(cc.find("cardNode/cardBg", e));
                this.updateCardSprite(cc.find("cardNode/card", e));
            }
            else
                NodeSkinTool_1.default.parseConfigList(e, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    WinNextBtnRankCardTrait.prototype.checkShouldShow = function () {
        var e, t, r;
        try {
            var a = mj.getClassByName("RankModel");
            if (!a)
                return false;
            var i = null === (e = a.getInstance) || void 0 === e ? void 0 : e.call(a);
            return null !== (r = null === (t = null == i ? void 0 : i.hasOpeningActivity) || void 0 === t ? void 0 : t.call(i)) && void 0 !== r && r;
        }
        catch (e) {
            return false;
        }
    };
    WinNextBtnRankCardTrait.prototype.updateCardBg = function (e) {
        if (cc.isValid(e)) {
            var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), r = t.path, a = t.bundleName, i = t.fromAtlas;
            BaseSprite_1.default.refreshWithNode(e, r, i, false, a);
        }
    };
    WinNextBtnRankCardTrait.prototype.updateCardSprite = function (e) {
        cc.isValid(e) && this.updateImgCard(e);
    };
    WinNextBtnRankCardTrait.prototype.updateImgCard = function (e) {
        var t = UserModel_1.default.getInstance().getRankCardResName(), r = CardUtil_1.default.getAtlasPathAndBundleName(t), a = r.path, i = r.bundleName, n = r.fromAtlas;
        BaseSprite_1.default.refreshWithNode(e, a, n, false, i);
    };
    var WinNextBtnRankCardTrait_1;
    WinNextBtnRankCardTrait.traitKey = "WinNextBtnRankCard";
    WinNextBtnRankCardTrait = WinNextBtnRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("WinNextBtnRankCardTrait")
    ], WinNextBtnRankCardTrait);
    return WinNextBtnRankCardTrait;
}(Trait_1.default));
exports.default = WinNextBtnRankCardTrait;

cc._RF.pop();