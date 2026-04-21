"use strict";
cc._RF.push(module, 'a5374jT/hhFApnKRe8X7xtm', 'CardUtil');
// Scripts/gamePlay/user/CardUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../framework/data/DataReader");
var ConfigType_1 = require("../base/data/ConfigType");
var UserModel_1 = require("./UserModel");
var CardUtil = /** @class */ (function () {
    function CardUtil() {
    }
    CardUtil.setConfigName = function (e) {
        if (this._currentConfigName !== e) {
            this._currentConfigName = e;
            this.clearCache();
        }
    };
    CardUtil.getConfigName = function () {
        return this._currentConfigName === ConfigType_1.ConfigType.card_config2.name ? ConfigType_1.ConfigType.card_config2 : ConfigType_1.ConfigType.card_config;
    };
    CardUtil.getCurrentConfigName = function () {
        return this._currentConfigName;
    };
    CardUtil.clearCache = function () {
        this.cardInfos = {};
    };
    CardUtil.getList = function () {
        return DataReader_1.DataReader.getList(this._currentConfigName);
    };
    CardUtil.getByKey = function (e) {
        e = "" + e;
        if (this.cardInfos[e])
            return this.cardInfos[e];
        var t = DataReader_1.DataReader.getByKey(this._currentConfigName, e);
        if (t) {
            this.cardInfos[e] = t;
            return t;
        }
        var o = UserModel_1.default.getInstance(), n = null == o ? void 0 : o.getCurrentGameType(), i = null == o ? void 0 : o.getGameDataByGameType(n), a = "", s = "", c = "", u = "", p = 0;
        if (i) {
            a = i.getOriginalLevelData();
            s = i.getOriginalLevelDataWithCardId();
            c = i.getLevelIndex();
            u = i.getLevelName();
            p = i.getLevelDifficulty();
        }
        console.error("[CardUtil] 获取card_info信息异常 resId : " + e + " , configName: " + this._currentConfigName + ", params: [originalLevelData]=> \n            " + a + "  [originalLevelDataWithCardId]=>" + s + "   [levelIndex]=>" + c + " , [levelName]=>" + u + ",[difficulty]=>" + p);
        return DataReader_1.DataReader.getByKey(this._currentConfigName, "0");
    };
    CardUtil.getAtlasName = function () {
        return "atlas/cardIcon";
    };
    CardUtil.getCardBundleName = function () {
        return "mainRes";
    };
    CardUtil.fromAtlas = function () {
        return true;
    };
    CardUtil.getFullPath = function (t) {
        return CardUtil.getAtlasName(t) + "/" + t;
    };
    CardUtil.getAtlasPathAndBundleName = function (t) {
        return {
            path: CardUtil.getFullPath(t),
            bundleName: CardUtil.getCardBundleName(t),
            fromAtlas: CardUtil.fromAtlas(t)
        };
    };
    CardUtil.isFlowerCardId = function (e) {
        return !!e && (e >= 28 && e <= 34 || e == GameTypeEnums_1.MjCardId.emFlowCardId || e == GameTypeEnums_1.MjCardId.emSeasonCardId || e >= GameTypeEnums_1.MjCardId.emFlowCardIdMei && e <= GameTypeEnums_1.MjCardId.emSeasonCardIdDong);
    };
    CardUtil._currentConfigName = ConfigType_1.ConfigType.card_config.name;
    CardUtil.cardInfos = {};
    __decorate([
        mj.traitEvent("CardUtil_atlasPathBundle")
    ], CardUtil, "getAtlasPathAndBundleName", null);
    return CardUtil;
}());
exports.default = CardUtil;

cc._RF.pop();