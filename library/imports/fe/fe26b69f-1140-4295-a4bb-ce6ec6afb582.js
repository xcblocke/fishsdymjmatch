"use strict";
cc._RF.push(module, 'fe26bafEUBClaS7zm7Gr7WC', 'HallNormalBtnRankCardTrait');
// subpackages/l_hallNormalBtnRankCard/Scripts/HallNormalBtnRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallNormalBtnRankCardTrait = /** @class */ (function (_super) {
    __extends(HallNormalBtnRankCardTrait, _super);
    function HallNormalBtnRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallNormalBtnRankCardTrait_1 = HallNormalBtnRankCardTrait;
    Object.defineProperty(HallNormalBtnRankCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var t, e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.haveCardSkinKey) || "HallNormalBtnRankCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", e);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HallNormalBtnRankCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var t, e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.noCardSkinKey) || "HallNormalBtnNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", e);
        },
        enumerable: false,
        configurable: true
    });
    HallNormalBtnRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_onLoad = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            if (!cc.isValid(o)) {
                e();
                return;
            }
            this.createCardNode(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_onLoad 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            this.updateCardDisplay(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_updateUI 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            this.checkShouldShow();
            this.updateCardDisplay(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_forceUpdate 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.createCardNode = function (t) {
        var e = this.noCardConfigList;
        cc.isValid(t) && e && 0 !== e.length && NodeSkinTool_1.default.parseConfigList(t, e, GameTypeEnums_1.MjGameType.Normal, t.name);
    };
    HallNormalBtnRankCardTrait.prototype.updateCardDisplay = function (t) {
        if (cc.isValid(t))
            if (this.checkShouldShow()) {
                NodeSkinTool_1.default.parseConfigList(t, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, t.name);
                this.updateCardBg(cc.find("cardNode/cardBg", t));
                this.updateCardSprite(cc.find("cardNode/card", t));
            }
            else
                NodeSkinTool_1.default.parseConfigList(t, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, t.name);
    };
    HallNormalBtnRankCardTrait.prototype.checkShouldShow = function () {
        var t, e, a;
        try {
            var r = mj.getClassByName("RankModel");
            if (!r)
                return false;
            var o = null === (t = r.getInstance) || void 0 === t ? void 0 : t.call(r);
            return null !== (a = null === (e = null == o ? void 0 : o.hasOpeningActivity) || void 0 === e ? void 0 : e.call(o)) && void 0 !== a && a;
        }
        catch (t) {
            return false;
        }
    };
    HallNormalBtnRankCardTrait.prototype.updateCardBg = function (t) {
        if (cc.isValid(t)) {
            var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), a = e.path, r = e.bundleName, o = e.fromAtlas;
            BaseSprite_1.default.refreshWithNode(t, a, o, false, r);
        }
    };
    HallNormalBtnRankCardTrait.prototype.updateCardSprite = function (t) {
        cc.isValid(t) && this.updateImgCard(t);
    };
    HallNormalBtnRankCardTrait.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), a = CardUtil_1.default.getAtlasPathAndBundleName(e), r = a.path, o = a.bundleName, i = a.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, r, i, false, o);
    };
    var HallNormalBtnRankCardTrait_1;
    HallNormalBtnRankCardTrait.traitKey = "HallNormalBtnRankCard";
    HallNormalBtnRankCardTrait = HallNormalBtnRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("HallNormalBtnRankCardTrait")
    ], HallNormalBtnRankCardTrait);
    return HallNormalBtnRankCardTrait;
}(Trait_1.default));
exports.default = HallNormalBtnRankCardTrait;

cc._RF.pop();