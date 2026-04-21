
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/Tile2GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41deeV/ZPtKt41/OttUK41+', 'Tile2GameData');
// Scripts/core/simulator/data/Tile2GameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameGetItem_1 = require("../../../gamePlay/dot/DGameGetItem");
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var Tile2GameData = /** @class */ (function (_super) {
    __extends(Tile2GameData, _super);
    function Tile2GameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        _this.isLocalEmpty(_this.localData.rankCardCount) && (_this.localData.rankCardCount = 0);
        _this.isLocalEmpty(_this.localData.isBreakBest) && (_this.localData.isBreakBest = false);
        _this.isLocalEmpty(_this.localData.preBestScore) && (_this.localData.preBestScore = 0);
        _this.isLocalEmpty(_this.localData.slotBarIds) && (_this.localData.slotBarIds = []);
        _this.isLocalEmpty(_this.localData.slotBarCount) && (_this.localData.slotBarCount = 0);
        _this.isLocalEmpty(_this.localData.lastWinScore) && (_this.localData.lastWinScore = 0);
        _this.isLocalEmpty(_this.localData.lastWinComboNum) && (_this.localData.lastWinComboNum = 0);
        _this.isLocalEmpty(_this.localData.lastWinDuration) && (_this.localData.lastWinDuration = 0);
        _this.isLocalEmpty(_this.localData.tileTypesExtra) && (_this.localData.tileTypesExtra = "");
        _this.isLocalEmpty(_this.localData.originalTileTypesExtra) && (_this.localData.originalTileTypesExtra = "");
        _this.isLocalEmpty(_this.localData.originalReplaceInfo) && (_this.localData.originalReplaceInfo = "");
        _this.isLocalEmpty(_this.localData.slotLevel) && (_this.localData.slotLevel = 0);
        return _this;
    }
    Object.defineProperty(Tile2GameData.prototype, "slotBarIds", {
        get: function () {
            return this.localData.slotBarIds || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2GameData.prototype, "slotBarCount", {
        get: function () {
            return this.localData.slotBarCount || 0;
        },
        enumerable: false,
        configurable: true
    });
    Tile2GameData.prototype.getFreeReviveInitCount = function () {
        return 5;
    };
    Tile2GameData.prototype.ensureReviveCountInit = function () {
        if (this.isLocalEmpty(this.localData.reviveCount)) {
            var e = this.getFreeReviveInitCount();
            this.localData.reviveCount = e;
            e > 0 && DGameGetItem_1.DotGameGetItem.dotGetItem(this, {
                itemId: GameTypeEnums_1.EItemId.Revive,
                number: e,
                afterNum: e,
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送" + e + "次复活"
            });
        }
    };
    Tile2GameData.prototype.setTileTypesExtra = function (e) {
        this.localData.tileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getTileTypesExtra = function () {
        return this.localData.tileTypesExtra;
    };
    Tile2GameData.prototype.setOriginalTileTypesExtra = function (e) {
        this.localData.originalTileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getOriginalTileTypesExtra = function () {
        return this.localData.originalTileTypesExtra || "";
    };
    Tile2GameData.prototype.setOriginalReplaceInfo = function (e) {
        this.localData.originalReplaceInfo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getOriginalReplaceInfo = function () {
        var e = {};
        try {
            if (this.localData.originalReplaceInfo) {
                var t = JSON.parse(this.localData.originalReplaceInfo);
                "object" == typeof t && (e = t);
            }
        }
        catch (e) { }
        return e;
    };
    Tile2GameData.prototype.onNewGameReset = function () {
        this.setRankCardCount(0);
        this.isLocalEmpty(this.localData.hasTriggeredAllClear) && (this.localData.hasTriggeredAllClear = false);
    };
    Tile2GameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.hasTriggeredAllClear = false;
        this.localData.isBreakBest = false;
        this.localData.preBestScore = this.localData.maxScore;
        this.localData.slotBarIds = [];
        this.localData.slotBarIds = this.localData.slotBarIds;
        this.localData.slotLevel = 0;
    };
    Tile2GameData.prototype.setRankCardCount = function (e) {
        this.localData.rankCardCount = e;
    };
    Tile2GameData.prototype.getRankCardCount = function () {
        return this.localData.rankCardCount;
    };
    Tile2GameData.prototype.updateMaxScore = function (t) {
        _super.prototype.updateMaxScore.call(this, t);
        t > this.localData.preBestScore && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
    };
    Tile2GameData.prototype.getPreBestScore = function () {
        return this.localData.preBestScore;
    };
    Tile2GameData.prototype.isBreakBest = function () {
        return this.localData.isBreakBest;
    };
    Tile2GameData.prototype.addSlotBarId = function (e, t) {
        if (t === void 0) { t = -1; }
        this.localData.slotBarIds.splice(t, 0, e);
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.removeSlotBarId = function (e) {
        this.localData.slotBarIds = this.localData.slotBarIds.filter(function (t) {
            return t !== e;
        });
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.resetSlotBarIds = function (e) {
        this.localData.slotBarIds = e;
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.resetSlotBarCount = function (e) {
        this.localData.slotBarCount = e;
    };
    Tile2GameData.prototype.getReviveNums = function () {
        this.ensureReviveCountInit();
        return this.localData.reviveCount || 0;
    };
    Tile2GameData.prototype.changeReviveNums = function (e, t) {
        if (t === void 0) { t = false; }
        if (t)
            this.localData.reviveCount = e;
        else {
            this.ensureReviveCountInit();
            this.localData.reviveCount = this.localData.reviveCount + e;
        }
    };
    Tile2GameData.prototype.hasRevive = function () {
        return this.getReviveNums() > 0;
    };
    Tile2GameData.prototype.getLastWinScore = function () {
        return this.localData.lastWinScore || 0;
    };
    Tile2GameData.prototype.getLastWinComboNum = function () {
        return this.localData.lastWinComboNum || 0;
    };
    Tile2GameData.prototype.getLastWinDuration = function () {
        return this.localData.lastWinDuration || 0;
    };
    Tile2GameData.prototype.getSlotLevel = function () {
        return this.localData.slotLevel || 0;
    };
    Tile2GameData.prototype.setSlotLevel = function (e) {
        this.localData.slotLevel = e;
    };
    Tile2GameData.prototype.saveLastWinResult = function (e, t, o) {
        this.localData.lastWinScore = e;
        this.localData.lastWinComboNum = t;
        this.localData.lastWinDuration = o;
        this.localData.lastWinScore = this.localData.lastWinScore;
        this.localData.lastWinComboNum = this.localData.lastWinComboNum;
        this.localData.lastWinDuration = this.localData.lastWinDuration;
    };
    Tile2GameData.prototype.getHasTriggeredAllClear = function () {
        return this.localData.hasTriggeredAllClear;
    };
    Tile2GameData.prototype.setHasTriggeredAllClear = function (e) {
        if (e === void 0) { e = true; }
        this.localData.hasTriggeredAllClear = e;
        this.localData.lastUpdateTime = Date.now();
    };
    __decorate([
        mj.traitEvent("T2GD_getFrRvInitCnt")
    ], Tile2GameData.prototype, "getFreeReviveInitCount", null);
    Tile2GameData = __decorate([
        mj.class("Tile2GameData")
    ], Tile2GameData);
    return Tile2GameData;
}(GameData_1.default));
exports.default = Tile2GameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVGlsZTJHYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQW9FO0FBQ3BFLDJEQUFrRjtBQUNsRix1Q0FBa0M7QUFFbEM7SUFBMkMsaUNBQVE7SUFRakQ7UUFBQSxZQUNFLGlCQUFPLFNBYVI7UUFyQkQsZUFBUyxHQUFHLDBCQUFVLENBQUMsV0FBVyxDQUFDO1FBU2pDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxD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QUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQXBJRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7K0RBR3BDO0lBMUJrQixhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQTZKakM7SUFBRCxvQkFBQztDQTdKRCxBQTZKQyxDQTdKMEMsa0JBQVEsR0E2SmxEO2tCQTdKb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZVBsYXkvZG90L0RHYW1lR2V0SXRlbSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlLCBFSXRlbUlkLCBFR2V0SXRlbVJlYXNvbklkIH0gZnJvbSAnLi4vY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi9HYW1lRGF0YSc7XG5AbWouY2xhc3MoXCJUaWxlMkdhbWVEYXRhXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkdhbWVEYXRhIGV4dGVuZHMgR2FtZURhdGEge1xuICBfZ2FtZVR5cGUgPSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICBnZXQgc2xvdEJhcklkcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcyB8fCBbXTtcbiAgfVxuICBnZXQgc2xvdEJhckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zbG90QmFyQ291bnQgfHwgMDtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnJhbmtDYXJkQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5yYW5rQ2FyZENvdW50ID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QpICYmICh0aGlzLmxvY2FsRGF0YS5pc0JyZWFrQmVzdCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5wcmVCZXN0U2NvcmUpICYmICh0aGlzLmxvY2FsRGF0YS5wcmVCZXN0U2NvcmUgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzKSAmJiAodGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcyA9IFtdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5zbG90QmFyQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5zbG90QmFyQ291bnQgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0V2luU2NvcmUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0V2luU2NvcmUgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0V2luQ29tYm9OdW0pICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0V2luQ29tYm9OdW0gPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0V2luRHVyYXRpb24pICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0V2luRHVyYXRpb24gPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYSkgJiYgKHRoaXMubG9jYWxEYXRhLnRpbGVUeXBlc0V4dHJhID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEub3JpZ2luYWxUaWxlVHlwZXNFeHRyYSkgJiYgKHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsVGlsZVR5cGVzRXh0cmEgPSBcIlwiKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbFJlcGxhY2VJbmZvKSAmJiAodGhpcy5sb2NhbERhdGEub3JpZ2luYWxSZXBsYWNlSW5mbyA9IFwiXCIpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnNsb3RMZXZlbCkgJiYgKHRoaXMubG9jYWxEYXRhLnNsb3RMZXZlbCA9IDApO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJHRF9nZXRGclJ2SW5pdENudFwiKVxuICBnZXRGcmVlUmV2aXZlSW5pdENvdW50KCkge1xuICAgIHJldHVybiA1O1xuICB9XG4gIGVuc3VyZVJldml2ZUNvdW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuZ2V0RnJlZVJldml2ZUluaXRDb3VudCgpO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQgPSBlO1xuICAgICAgZSA+IDAgJiYgRG90R2FtZUdldEl0ZW0uZG90R2V0SXRlbSh0aGlzLCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5SZXZpdmUsXG4gICAgICAgIG51bWJlcjogZSxcbiAgICAgICAgYWZ0ZXJOdW06IGUsXG4gICAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLlN5c3RlbUdpZnQsXG4gICAgICAgIHJlYXNvbkluZm86IFwi6aaW5qyh6L+b5YWl6YCBXCIgKyBlICsgXCLmrKHlpI3mtLtcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNldFRpbGVUeXBlc0V4dHJhKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYSA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICB9XG4gIGdldFRpbGVUeXBlc0V4dHJhKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYTtcbiAgfVxuICBzZXRPcmlnaW5hbFRpbGVUeXBlc0V4dHJhKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbFRpbGVUeXBlc0V4dHJhID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gIH1cbiAgZ2V0T3JpZ2luYWxUaWxlVHlwZXNFeHRyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEub3JpZ2luYWxUaWxlVHlwZXNFeHRyYSB8fCBcIlwiO1xuICB9XG4gIHNldE9yaWdpbmFsUmVwbGFjZUluZm8oZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsUmVwbGFjZUluZm8gPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgfVxuICBnZXRPcmlnaW5hbFJlcGxhY2VJbmZvKCkge1xuICAgIHZhciBlID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbFJlcGxhY2VJbmZvKSB7XG4gICAgICAgIHZhciB0ID0gSlNPTi5wYXJzZSh0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbFJlcGxhY2VJbmZvKTtcbiAgICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiAoZSA9IHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgb25OZXdHYW1lUmVzZXQoKSB7XG4gICAgdGhpcy5zZXRSYW5rQ2FyZENvdW50KDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc1RyaWdnZXJlZEFsbENsZWFyKSAmJiAodGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkQWxsQ2xlYXIgPSBmYWxzZSk7XG4gIH1cbiAgcmVzZXRHYW1lRGF0YSgpIHtcbiAgICBzdXBlci5yZXNldEdhbWVEYXRhLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkQWxsQ2xlYXIgPSBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0JyZWFrQmVzdCA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZSA9IHRoaXMubG9jYWxEYXRhLm1heFNjb3JlO1xuICAgIHRoaXMubG9jYWxEYXRhLnNsb3RCYXJJZHMgPSBbXTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzID0gdGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcztcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90TGV2ZWwgPSAwO1xuICB9XG4gIHNldFJhbmtDYXJkQ291bnQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnJhbmtDYXJkQ291bnQgPSBlO1xuICB9XG4gIGdldFJhbmtDYXJkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnJhbmtDYXJkQ291bnQ7XG4gIH1cbiAgdXBkYXRlTWF4U2NvcmUodCkge1xuICAgIHN1cGVyLnVwZGF0ZU1heFNjb3JlLmNhbGwodGhpcywgdCk7XG4gICAgdCA+IHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZSAmJiAhdGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QgJiYgKHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0ID0gdHJ1ZSk7XG4gIH1cbiAgZ2V0UHJlQmVzdFNjb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5wcmVCZXN0U2NvcmU7XG4gIH1cbiAgaXNCcmVha0Jlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0O1xuICB9XG4gIGFkZFNsb3RCYXJJZChlLCB0ID0gLTEpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzLnNwbGljZSh0LCAwLCBlKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzID0gdGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcztcbiAgfVxuICByZW1vdmVTbG90QmFySWQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnNsb3RCYXJJZHMgPSB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IGU7XG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcyA9IHRoaXMubG9jYWxEYXRhLnNsb3RCYXJJZHM7XG4gIH1cbiAgcmVzZXRTbG90QmFySWRzKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90QmFySWRzID0gdGhpcy5sb2NhbERhdGEuc2xvdEJhcklkcztcbiAgfVxuICByZXNldFNsb3RCYXJDb3VudChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuc2xvdEJhckNvdW50ID0gZTtcbiAgfVxuICBnZXRSZXZpdmVOdW1zKCkge1xuICAgIHRoaXMuZW5zdXJlUmV2aXZlQ291bnRJbml0KCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnJldml2ZUNvdW50IHx8IDA7XG4gIH1cbiAgY2hhbmdlUmV2aXZlTnVtcyhlLCB0ID0gZmFsc2UpIHtcbiAgICBpZiAodCkgdGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQgPSBlO2Vsc2Uge1xuICAgICAgdGhpcy5lbnN1cmVSZXZpdmVDb3VudEluaXQoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJldml2ZUNvdW50ID0gdGhpcy5sb2NhbERhdGEucmV2aXZlQ291bnQgKyBlO1xuICAgIH1cbiAgfVxuICBoYXNSZXZpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmV2aXZlTnVtcygpID4gMDtcbiAgfVxuICBnZXRMYXN0V2luU2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RXaW5TY29yZSB8fCAwO1xuICB9XG4gIGdldExhc3RXaW5Db21ib051bSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdFdpbkNvbWJvTnVtIHx8IDA7XG4gIH1cbiAgZ2V0TGFzdFdpbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0V2luRHVyYXRpb24gfHwgMDtcbiAgfVxuICBnZXRTbG90TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnNsb3RMZXZlbCB8fCAwO1xuICB9XG4gIHNldFNsb3RMZXZlbChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuc2xvdExldmVsID0gZTtcbiAgfVxuICBzYXZlTGFzdFdpblJlc3VsdChlLCB0LCBvKSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFdpblNjb3JlID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0V2luQ29tYm9OdW0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RXaW5EdXJhdGlvbiA9IG87XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFdpblNjb3JlID0gdGhpcy5sb2NhbERhdGEubGFzdFdpblNjb3JlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RXaW5Db21ib051bSA9IHRoaXMubG9jYWxEYXRhLmxhc3RXaW5Db21ib051bTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0V2luRHVyYXRpb24gPSB0aGlzLmxvY2FsRGF0YS5sYXN0V2luRHVyYXRpb247XG4gIH1cbiAgZ2V0SGFzVHJpZ2dlcmVkQWxsQ2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmhhc1RyaWdnZXJlZEFsbENsZWFyO1xuICB9XG4gIHNldEhhc1RyaWdnZXJlZEFsbENsZWFyKGUgPSB0cnVlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkQWxsQ2xlYXIgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgfVxufSJdfQ==