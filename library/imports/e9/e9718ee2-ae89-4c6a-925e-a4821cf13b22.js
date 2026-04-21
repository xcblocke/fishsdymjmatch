"use strict";
cc._RF.push(module, 'e97187irolMapJepIIc8Tsi', 'TravelBtnYogaCardTrait');
// subpackages/l_travelBtnYogaCard/Scripts/TravelBtnYogaCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TravelBtnYogaCardTrait = /** @class */ (function (_super) {
    __extends(TravelBtnYogaCardTrait, _super);
    function TravelBtnYogaCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnYogaCardTrait_1 = TravelBtnYogaCardTrait;
    Object.defineProperty(TravelBtnYogaCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "HallTravelBtnHaveCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelBtnYogaCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "HallTravelBtnNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    TravelBtnYogaCardTrait.prototype.onTravelBtn_onLoad = function (e, t) {
        try {
            var a = e.ins, o = null == a ? void 0 : a.rootNode;
            if (!cc.isValid(o)) {
                t();
                return;
            }
            this.createCardNode(o);
            t();
        }
        catch (e) {
            console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] onTravelBtn_onLoad 错误: " + (null == e ? void 0 : e.message));
            t();
        }
    };
    TravelBtnYogaCardTrait.prototype.onTravelBtn_updateUI = function (e, t) {
        try {
            var a = e.ins, o = null == a ? void 0 : a.rootNode;
            this.updateCardDisplay(o, null == a ? void 0 : a.journeyKey);
            t();
        }
        catch (e) {
            console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] onTravelBtn_updateUI 错误: " + (null == e ? void 0 : e.message));
            t();
        }
    };
    TravelBtnYogaCardTrait.prototype.createCardNode = function (e) {
        var t = this.noCardConfigList;
        cc.isValid(e) && t && 0 !== t.length && NodeSkinTool_1.default.parseConfigList(e, t, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    TravelBtnYogaCardTrait.prototype.updateCardDisplay = function (e, t) {
        if (cc.isValid(e)) {
            var r = TravelGameModel_1.default.getInstance().isUnlocked();
            if (t && r) {
                NodeSkinTool_1.default.parseConfigList(e, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                this.updateCardSprite(cc.find("cardNode/card", e), t);
            }
            else {
                NodeSkinTool_1.default.parseConfigList(e, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                if (!r) {
                    var a = e.getChildByName("Title");
                    a && (a.x = 30);
                }
            }
        }
    };
    TravelBtnYogaCardTrait.prototype.updateCardSprite = function (e, t) {
        if (cc.isValid(e))
            try {
                var a = TravelGameModel_1.default.getInstance().getConfig(t);
                if (!(null == a ? void 0 : a.yoga))
                    return;
                var o = "texture/journey/yoga/" + a.yoga;
                BaseSprite_1.default.refreshWithNode(e, o, false, false, "mainRes");
            }
            catch (e) {
                console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] 刷新瑜伽牌图片失败: " + (null == e ? void 0 : e.message));
            }
    };
    var TravelBtnYogaCardTrait_1;
    TravelBtnYogaCardTrait.traitKey = "TravelBtnYogaCard";
    TravelBtnYogaCardTrait = TravelBtnYogaCardTrait_1 = __decorate([
        mj.trait,
        mj.class("TravelBtnYogaCardTrait")
    ], TravelBtnYogaCardTrait);
    return TravelBtnYogaCardTrait;
}(Trait_1.default));
exports.default = TravelBtnYogaCardTrait;

cc._RF.pop();