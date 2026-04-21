
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/user/CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF1RTtBQUN2RSw4REFBNkQ7QUFDN0Qsc0RBQXFEO0FBQ3JELHlDQUFvQztBQUNwQztJQUFBO0lBc0VBLENBQUM7SUFuRVEsc0JBQWEsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ00sc0JBQWEsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsS0FBSyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyx1QkFBVSxDQUFDLFdBQVcsQ0FBQztJQUNySCxDQUFDO0lBQ00sNkJBQW9CLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUNNLG1CQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNNLGdCQUFPLEdBQWQ7UUFDRSxPQUFPLHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxpQkFBUSxHQUFmLFVBQWdCLENBQUM7UUFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtC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O0lBSUgsZUFBQztDQXRFRCxBQXNFQyxJQUFBO2tCQXRFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qQ2FyZElkIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL1VzZXJNb2RlbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVXRpbCB7XG4gIHN0YXRpYyBfY3VycmVudENvbmZpZ05hbWUgPSBDb25maWdUeXBlLmNhcmRfY29uZmlnLm5hbWU7XG4gIHN0YXRpYyBjYXJkSW5mb3MgPSB7fTtcbiAgc3RhdGljIHNldENvbmZpZ05hbWUoZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50Q29uZmlnTmFtZSAhPT0gZSkge1xuICAgICAgdGhpcy5fY3VycmVudENvbmZpZ05hbWUgPSBlO1xuICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXRDb25maWdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q29uZmlnTmFtZSA9PT0gQ29uZmlnVHlwZS5jYXJkX2NvbmZpZzIubmFtZSA/IENvbmZpZ1R5cGUuY2FyZF9jb25maWcyIDogQ29uZmlnVHlwZS5jYXJkX2NvbmZpZztcbiAgfVxuICBzdGF0aWMgZ2V0Q3VycmVudENvbmZpZ05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb25maWdOYW1lO1xuICB9XG4gIHN0YXRpYyBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FyZEluZm9zID0ge307XG4gIH1cbiAgc3RhdGljIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0TGlzdCh0aGlzLl9jdXJyZW50Q29uZmlnTmFtZSk7XG4gIH1cbiAgc3RhdGljIGdldEJ5S2V5KGUpIHtcbiAgICBlID0gXCJcIiArIGU7XG4gICAgaWYgKHRoaXMuY2FyZEluZm9zW2VdKSByZXR1cm4gdGhpcy5jYXJkSW5mb3NbZV07XG4gICAgdmFyIHQgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KHRoaXMuX2N1cnJlbnRDb25maWdOYW1lLCBlKTtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5jYXJkSW5mb3NbZV0gPSB0O1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHZhciBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBuID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIGkgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldEdhbWVEYXRhQnlHYW1lVHlwZShuKSxcbiAgICAgIGEgPSBcIlwiLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBjID0gXCJcIixcbiAgICAgIHUgPSBcIlwiLFxuICAgICAgcCA9IDA7XG4gICAgaWYgKGkpIHtcbiAgICAgIGEgPSBpLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCk7XG4gICAgICBzID0gaS5nZXRPcmlnaW5hbExldmVsRGF0YVdpdGhDYXJkSWQoKTtcbiAgICAgIGMgPSBpLmdldExldmVsSW5kZXgoKTtcbiAgICAgIHUgPSBpLmdldExldmVsTmFtZSgpO1xuICAgICAgcCA9IGkuZ2V0TGV2ZWxEaWZmaWN1bHR5KCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJbQ2FyZFV0aWxdIOiOt+WPlmNhcmRfaW5mb+S/oeaBr+W8guW4uCByZXNJZCA6IFwiICsgZSArIFwiICwgY29uZmlnTmFtZTogXCIgKyB0aGlzLl9jdXJyZW50Q29uZmlnTmFtZSArIFwiLCBwYXJhbXM6IFtvcmlnaW5hbExldmVsRGF0YV09PiBcXG4gICAgICAgICAgICBcIiArIGEgKyBcIiAgW29yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZF09PlwiICsgcyArIFwiICAgW2xldmVsSW5kZXhdPT5cIiArIGMgKyBcIiAsIFtsZXZlbE5hbWVdPT5cIiArIHUgKyBcIixbZGlmZmljdWx0eV09PlwiICsgcCk7XG4gICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0QnlLZXkodGhpcy5fY3VycmVudENvbmZpZ05hbWUsIFwiMFwiKTtcbiAgfVxuICBzdGF0aWMgZ2V0QXRsYXNOYW1lKCkge1xuICAgIHJldHVybiBcImF0bGFzL2NhcmRJY29uXCI7XG4gIH1cbiAgc3RhdGljIGdldENhcmRCdW5kbGVOYW1lKCkge1xuICAgIHJldHVybiBcIm1haW5SZXNcIjtcbiAgfVxuICBzdGF0aWMgZnJvbUF0bGFzKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXRpYyBnZXRGdWxsUGF0aCh0KSB7XG4gICAgcmV0dXJuIENhcmRVdGlsLmdldEF0bGFzTmFtZSh0KSArIFwiL1wiICsgdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZVwiKVxuICBzdGF0aWMgZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZSh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IENhcmRVdGlsLmdldEZ1bGxQYXRoKHQpLFxuICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUodCksXG4gICAgICBmcm9tQXRsYXM6IENhcmRVdGlsLmZyb21BdGxhcyh0KVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGlzRmxvd2VyQ2FyZElkKGUpIHtcbiAgICByZXR1cm4gISFlICYmIChlID49IDI4ICYmIGUgPD0gMzQgfHwgZSA9PSBNakNhcmRJZC5lbUZsb3dDYXJkSWQgfHwgZSA9PSBNakNhcmRJZC5lbVNlYXNvbkNhcmRJZCB8fCBlID49IE1qQ2FyZElkLmVtRmxvd0NhcmRJZE1laSAmJiBlIDw9IE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkRG9uZyk7XG4gIH1cbn0iXX0=