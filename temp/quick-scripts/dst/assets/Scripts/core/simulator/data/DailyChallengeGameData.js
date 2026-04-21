
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/DailyChallengeGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae6c9j1l7NAApmz+/Jdu9Wu', 'DailyChallengeGameData');
// Scripts/core/simulator/data/DailyChallengeGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var DailyChallengeGameData = /** @class */ (function (_super) {
    __extends(DailyChallengeGameData, _super);
    function DailyChallengeGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        _this.isLocalEmpty(_this.localData.dailyChallengeTimestamp) && (_this.localData.dailyChallengeTimestamp = "");
        return _this;
    }
    DailyChallengeGameData.prototype.getDailyChallengeTimestamp = function () {
        return this.localData.dailyChallengeTimestamp;
    };
    DailyChallengeGameData.prototype.setDailyChallengeTimestamp = function (e) {
        this.localData.dailyChallengeTimestamp = e;
        this.localData.lastUpdateTime = Date.now();
    };
    DailyChallengeGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.originalLevelData = "";
        this.localData.originalLevelDataWithSpecialCards = "";
    };
    DailyChallengeGameData = __decorate([
        mj.class("DailyChallengeGameData")
    ], DailyChallengeGameData);
    return DailyChallengeGameData;
}(GameData_1.default));
exports.default = DailyChallengeGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvRGFpbHlDaGFsbGVuZ2VHYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXVEO0FBQ3ZELHVDQUFrQztBQUVsQztJQUFvRCwwQ0FBUTtJQUUxRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQUpELGVBQVMsR0FBRywwQkFBVSxDQUFDLGNBQWMsQ0FBQztRQUdwQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBQzdHLENBQUM7SUFDRCwyREFBMEIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUNELDJEQUEwQixHQUExQixVQUEyQixDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsOENBQWEsR0FBYjtRQUNFLGlCQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsR0FBRyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQWpCa0Isc0JBQXNCO1FBRDFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FrQjFDO0lBQUQsNkJBQUM7Q0FsQkQsQUFrQkMsQ0FsQm1ELGtCQUFRLEdBa0IzRDtrQkFsQm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhJztcbkBtai5jbGFzcyhcIkRhaWx5Q2hhbGxlbmdlR2FtZURhdGFcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Q2hhbGxlbmdlR2FtZURhdGEgZXh0ZW5kcyBHYW1lRGF0YSB7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXApICYmICh0aGlzLmxvY2FsRGF0YS5kYWlseUNoYWxsZW5nZVRpbWVzdGFtcCA9IFwiXCIpO1xuICB9XG4gIGdldERhaWx5Q2hhbGxlbmdlVGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5kYWlseUNoYWxsZW5nZVRpbWVzdGFtcDtcbiAgfVxuICBzZXREYWlseUNoYWxsZW5nZVRpbWVzdGFtcChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgfVxuICByZXNldEdhbWVEYXRhKCkge1xuICAgIHN1cGVyLnJlc2V0R2FtZURhdGEuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbExldmVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGFXaXRoU3BlY2lhbENhcmRzID0gXCJcIjtcbiAgfVxufSJdfQ==