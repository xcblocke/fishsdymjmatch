
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaotile2/Scripts/DaxiaoTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5638dl5ePBMMrHkSuJfeK34', 'DaxiaoTile2Trait');
// subpackages/l_daxiaotile2/Scripts/DaxiaoTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var r;
(function (r) {
    r[r["Tag1"] = 1] = "Tag1";
    r[r["Tag2"] = 2] = "Tag2";
    r[r["Tag3"] = 3] = "Tag3";
    r[r["Tag4"] = 4] = "Tag4";
    r[r["Tag5"] = 5] = "Tag5";
    r[r["Tag6"] = 6] = "Tag6";
})(r || (r = {}));
var DaxiaoTile2Trait = /** @class */ (function (_super) {
    __extends(DaxiaoTile2Trait, _super);
    function DaxiaoTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._tag = this._traitData.tag || r.Tag1;
        this._minLevel = this._traitData.minLevel || 18;
        this._count = this._traitData.count || 1;
        this.initLocalDataDefaults();
        this.applyColdStartBreak();
    };
    DaxiaoTile2Trait.prototype.initLocalDataDefaults = function () {
        GameUtils_1.default.isEmpty(this.localData.lastRoundWin) && (this.localData.lastRoundWin = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundPopupRevive) && (this.localData.lastRoundPopupRevive = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundWatchedRewardAd) && (this.localData.lastRoundWatchedRewardAd = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundWatchedInterAd) && (this.localData.lastRoundWatchedInterAd = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundUsedItem) && (this.localData.lastRoundUsedItem = false);
        GameUtils_1.default.isEmpty(this.localData.winStreakCount) && (this.localData.winStreakCount = 0);
    };
    DaxiaoTile2Trait.prototype.applyColdStartBreak = function () {
        this.localData.lastRoundWin = false;
        this._resetWinStreakCount();
    };
    DaxiaoTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    DaxiaoTile2Trait.prototype.getGameData = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Tile2Normal);
    };
    DaxiaoTile2Trait.prototype.isWinStreak = function () {
        return this.localData.lastRoundWin && !this.localData.lastRoundPopupRevive;
    };
    DaxiaoTile2Trait.prototype.hasUsedItemLastRound = function () {
        return this.localData.lastRoundUsedItem;
    };
    DaxiaoTile2Trait.prototype.shouldGenDaxiao = function () {
        var t = this.getGameData();
        if (!t)
            return false;
        switch (this._tag) {
            case r.Tag1:
                var a = t.getLevelId() >= this._minLevel, e = AdManager_1.default.getInstance().checkVideoAdIsReady();
                return a && e;
            case r.Tag2:
                return t.getLevelId() >= this._minLevel;
            case r.Tag3:
                return this.localData.lastRoundWatchedRewardAd;
            case r.Tag4:
                return this.localData.lastRoundWatchedInterAd;
            case r.Tag5:
                var o = this.localData.winStreakCount || 0, i = this.localData.lastRoundWatchedInterAd;
                return o >= 2 && i;
            case r.Tag6:
                o = this.localData.winStreakCount || 0;
                var n = this.hasUsedItemLastRound();
                return o >= 2 && n;
            default:
                return false;
        }
    };
    DaxiaoTile2Trait.prototype._addWinStreakCount = function () {
        this.localData.winStreakCount = (this.localData.winStreakCount || 0) + 1;
    };
    DaxiaoTile2Trait.prototype._resetWinStreakCount = function () {
        this.localData.winStreakCount = 0;
    };
    DaxiaoTile2Trait.prototype.onT2GameCtrl_getTileTypes = function (t, a) {
        if (this.isWinStreak()) {
            this._addWinStreakCount();
        }
        else {
            this._resetWinStreakCount();
        }
        var e = this.shouldGenDaxiao();
        this.localData.lastRoundPopupRevive = false;
        this.localData.lastRoundWatchedInterAd = false;
        this.localData.lastRoundWatchedRewardAd = false;
        if (e) {
            this._resetWinStreakCount();
            a({
                returnVal: t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard
            });
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype.onDaxiaoCardType_getCount = function (t, a) {
        if (this.isTile2Mode()) {
            a({
                returnVal: this._count,
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            a();
        }
    };
    DaxiaoTile2Trait.prototype.onTile2WinVw_onLoad = function (t, a) {
        this._handleRoundEnd(true);
        a();
    };
    DaxiaoTile2Trait.prototype.onTile2FailVw_onLoad = function (t, a) {
        this.localData.lastRoundPopupRevive = true;
        a();
    };
    DaxiaoTile2Trait.prototype.onAdMgr_interAdClose = function (t, a) {
        var e;
        if (this.isTile2Mode()) {
            this.localData.lastRoundWatchedInterAd = true;
            null === (e = t.args) || void 0 === e || e[0];
            a();
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype.onAdMgr_videoSuccess = function (t, a) {
        if (this.isTile2Mode()) {
            this.localData.lastRoundWatchedRewardAd = true;
            a();
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype._handleRoundEnd = function (t) {
        this.localData.lastRoundWin = t;
        var a = this.getGameData();
        a && (this.localData.lastRoundUsedItem = !!(a.getUsedShuffle() || a.getUsedHitTips() || a.getUsedRevert() || a.getUsedMagnet()));
    };
    DaxiaoTile2Trait.traitKey = "DaxiaoTile2";
    DaxiaoTile2Trait = __decorate([
        mj.trait,
        mj.class("DaxiaoTile2Trait")
    ], DaxiaoTile2Trait);
    return DaxiaoTile2Trait;
}(Trait_1.default));
exports.default = DaxiaoTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb3RpbGUyL1NjcmlwdHMvRGF4aWFvVGlsZTJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGlGQUE2RTtBQUM3RSw0RUFBdUU7QUFDdkUsZ0VBQTJEO0FBQzNELGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsSUFBSyxDQU9KO0FBUEQsV0FBSyxDQUFDO0lBQ0oseUJBQVEsQ0FBQTtJQUNSLHlCQUFRLENBQUE7SUFDUix5QkFBUSxDQUFBO0lBQ1IseUJBQVEsQ0FBQTtJQUNSLHlCQUFRLENBQUE7SUFDUix5QkFBUSxDQUFBO0FBQ1YsQ0FBQyxFQVBJLENBQUMsS0FBRCxDQUFDLFFBT0w7QUFHRDtJQUE4QyxvQ0FBSztJQUFuRDs7SUF5SEEsQ0FBQztJQXZIQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELGdEQUFxQixHQUFyQjtRQUNFLG1CQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN4RixtQkFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3hHLG1CQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEgsbUJBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5RyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2xHLG1CQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQ0FBVyxHQUFYO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxXQUFXLENBQUM7SUFDakYsQ0FBQztJQUNELHNDQUFXLEdBQVg7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0Qsc0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0lBQzdFLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7SUFDMUMsQ0FBQztJQUNELDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxDQUFDLENBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDdEMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxDQUFDLElBQUk7Z0JBQ1QsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQyxLQUFLLENBQUMsQ0FBQyxJQUFJO2dCQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRCxLQUFLLENBQUMsQ0FBQyxJQUFJO2dCQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztZQUNoRCxLQUFLLENBQUMsQ0FBQyxJQUFJO2dCQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxJQUFJLENBQUMsRUFDeEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLENBQUMsSUFBSTtnQkFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQjtnQkFDRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDRCw2Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsK0NBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyx3QkFBUyxDQUFDLFVBQVU7YUFDekQsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsb0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ3RCLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUMzQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztZQUM5QyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwwQ0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBdkhNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXlIcEM7SUFBRCx1QkFBQztDQXpIRCxBQXlIQyxDQXpINkMsZUFBSyxHQXlIbEQ7a0JBekhvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZW51bSByIHtcbiAgVGFnMSA9IDEsXG4gIFRhZzIgPSAyLFxuICBUYWczID0gMyxcbiAgVGFnNCA9IDQsXG4gIFRhZzUgPSA1LFxuICBUYWc2ID0gNixcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGF4aWFvVGlsZTJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF4aWFvVGlsZTJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYXhpYW9UaWxlMlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fdGFnID0gdGhpcy5fdHJhaXREYXRhLnRhZyB8fCByLlRhZzE7XG4gICAgdGhpcy5fbWluTGV2ZWwgPSB0aGlzLl90cmFpdERhdGEubWluTGV2ZWwgfHwgMTg7XG4gICAgdGhpcy5fY291bnQgPSB0aGlzLl90cmFpdERhdGEuY291bnQgfHwgMTtcbiAgICB0aGlzLmluaXRMb2NhbERhdGFEZWZhdWx0cygpO1xuICAgIHRoaXMuYXBwbHlDb2xkU3RhcnRCcmVhaygpO1xuICB9XG4gIGluaXRMb2NhbERhdGFEZWZhdWx0cygpIHtcbiAgICBHYW1lVXRpbHMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXaW4pICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXaW4gPSBmYWxzZSk7XG4gICAgR2FtZVV0aWxzLmlzRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFJvdW5kUG9wdXBSZXZpdmUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRQb3B1cFJldml2ZSA9IGZhbHNlKTtcbiAgICBHYW1lVXRpbHMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkUmV3YXJkQWQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkUmV3YXJkQWQgPSBmYWxzZSk7XG4gICAgR2FtZVV0aWxzLmlzRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2F0Y2hlZEludGVyQWQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkSW50ZXJBZCA9IGZhbHNlKTtcbiAgICBHYW1lVXRpbHMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRVc2VkSXRlbSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RSb3VuZFVzZWRJdGVtID0gZmFsc2UpO1xuICAgIEdhbWVVdGlscy5pc0VtcHR5KHRoaXMubG9jYWxEYXRhLndpblN0cmVha0NvdW50KSAmJiAodGhpcy5sb2NhbERhdGEud2luU3RyZWFrQ291bnQgPSAwKTtcbiAgfVxuICBhcHBseUNvbGRTdGFydEJyZWFrKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RSb3VuZFdpbiA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2V0V2luU3RyZWFrQ291bnQoKTtcbiAgfVxuICBpc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgZ2V0R2FtZURhdGEoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLlRpbGUyTm9ybWFsKTtcbiAgfVxuICBpc1dpblN0cmVhaygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2luICYmICF0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRQb3B1cFJldml2ZTtcbiAgfVxuICBoYXNVc2VkSXRlbUxhc3RSb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kVXNlZEl0ZW07XG4gIH1cbiAgc2hvdWxkR2VuRGF4aWFvKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRHYW1lRGF0YSgpO1xuICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAodGhpcy5fdGFnKSB7XG4gICAgICBjYXNlIHIuVGFnMTpcbiAgICAgICAgdmFyIGEgPSB0LmdldExldmVsSWQoKSA+PSB0aGlzLl9taW5MZXZlbCxcbiAgICAgICAgICBlID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpO1xuICAgICAgICByZXR1cm4gYSAmJiBlO1xuICAgICAgY2FzZSByLlRhZzI6XG4gICAgICAgIHJldHVybiB0LmdldExldmVsSWQoKSA+PSB0aGlzLl9taW5MZXZlbDtcbiAgICAgIGNhc2Ugci5UYWczOlxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2F0Y2hlZFJld2FyZEFkO1xuICAgICAgY2FzZSByLlRhZzQ6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkSW50ZXJBZDtcbiAgICAgIGNhc2Ugci5UYWc1OlxuICAgICAgICB2YXIgbyA9IHRoaXMubG9jYWxEYXRhLndpblN0cmVha0NvdW50IHx8IDAsXG4gICAgICAgICAgaSA9IHRoaXMubG9jYWxEYXRhLmxhc3RSb3VuZFdhdGNoZWRJbnRlckFkO1xuICAgICAgICByZXR1cm4gbyA+PSAyICYmIGk7XG4gICAgICBjYXNlIHIuVGFnNjpcbiAgICAgICAgbyA9IHRoaXMubG9jYWxEYXRhLndpblN0cmVha0NvdW50IHx8IDA7XG4gICAgICAgIHZhciBuID0gdGhpcy5oYXNVc2VkSXRlbUxhc3RSb3VuZCgpO1xuICAgICAgICByZXR1cm4gbyA+PSAyICYmIG47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIF9hZGRXaW5TdHJlYWtDb3VudCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS53aW5TdHJlYWtDb3VudCA9ICh0aGlzLmxvY2FsRGF0YS53aW5TdHJlYWtDb3VudCB8fCAwKSArIDE7XG4gIH1cbiAgX3Jlc2V0V2luU3RyZWFrQ291bnQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEud2luU3RyZWFrQ291bnQgPSAwO1xuICB9XG4gIG9uVDJHYW1lQ3RybF9nZXRUaWxlVHlwZXModCwgYSkge1xuICAgIGlmICh0aGlzLmlzV2luU3RyZWFrKCkpIHtcbiAgICAgIHRoaXMuX2FkZFdpblN0cmVha0NvdW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2V0V2luU3RyZWFrQ291bnQoKTtcbiAgICB9XG4gICAgdmFyIGUgPSB0aGlzLnNob3VsZEdlbkRheGlhbygpO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RSb3VuZFBvcHVwUmV2aXZlID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2F0Y2hlZEludGVyQWQgPSBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkUmV3YXJkQWQgPSBmYWxzZTtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5fcmVzZXRXaW5TdHJlYWtDb3VudCgpO1xuICAgICAgYSh7XG4gICAgICAgIHJldHVyblZhbDogdC5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLkRheGlhb0NhcmRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgb25EYXhpYW9DYXJkVHlwZV9nZXRDb3VudCh0LCBhKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgYSh7XG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fY291bnQsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEoKTtcbiAgICB9XG4gIH1cbiAgb25UaWxlMldpblZ3X29uTG9hZCh0LCBhKSB7XG4gICAgdGhpcy5faGFuZGxlUm91bmRFbmQodHJ1ZSk7XG4gICAgYSgpO1xuICB9XG4gIG9uVGlsZTJGYWlsVndfb25Mb2FkKHQsIGEpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRQb3B1cFJldml2ZSA9IHRydWU7XG4gICAgYSgpO1xuICB9XG4gIG9uQWRNZ3JfaW50ZXJBZENsb3NlKHQsIGEpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRXYXRjaGVkSW50ZXJBZCA9IHRydWU7XG4gICAgICBudWxsID09PSAoZSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBlIHx8IGVbMF07XG4gICAgICBhKCk7XG4gICAgfSBlbHNlIGEoKTtcbiAgfVxuICBvbkFkTWdyX3ZpZGVvU3VjY2Vzcyh0LCBhKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2F0Y2hlZFJld2FyZEFkID0gdHJ1ZTtcbiAgICAgIGEoKTtcbiAgICB9IGVsc2UgYSgpO1xuICB9XG4gIF9oYW5kbGVSb3VuZEVuZCh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFJvdW5kV2luID0gdDtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0R2FtZURhdGEoKTtcbiAgICBhICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Um91bmRVc2VkSXRlbSA9ICEhKGEuZ2V0VXNlZFNodWZmbGUoKSB8fCBhLmdldFVzZWRIaXRUaXBzKCkgfHwgYS5nZXRVc2VkUmV2ZXJ0KCkgfHwgYS5nZXRVc2VkTWFnbmV0KCkpKTtcbiAgfVxufSJdfQ==