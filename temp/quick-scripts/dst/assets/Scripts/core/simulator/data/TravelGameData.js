
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/TravelGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69f32cFJN9LkJ8Dc57bdhwN', 'TravelGameData');
// Scripts/core/simulator/data/TravelGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var TravelGameData = /** @class */ (function (_super) {
    __extends(TravelGameData, _super);
    function TravelGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        _this._isAutoMerging = false;
        _this.isLocalEmpty(_this.localData.collectData) && (_this.localData.collectData = "");
        return _this;
    }
    TravelGameData.prototype.setJourneyType = function (e) {
        this.localData.journeyType = e;
    };
    TravelGameData.prototype.getJourneyType = function () {
        return this.localData.journeyType;
    };
    TravelGameData.prototype.getCollectData = function () {
        return this.localData.collectData;
    };
    TravelGameData.prototype.setCollectData = function (e) {
        this.localData.collectData = e;
        this.localData.lastUpdateTime = Date.now();
    };
    TravelGameData.prototype.setAutoMerging = function (e) {
        this._isAutoMerging = e;
    };
    TravelGameData.prototype.isAutoMerging = function () {
        return this._isAutoMerging;
    };
    TravelGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.collectData = "";
        this._isAutoMerging = false;
    };
    TravelGameData.prototype.resetTravel = function () {
        this.resetGameData();
        this.localData.levelId = 1;
        this.localData.currentLevelId = 1;
        this.localData.levelData = "";
        this.localData.originalLevelData = "";
        this.localData.originalLevelDataWithSpecialCards = "";
    };
    TravelGameData = __decorate([
        mj.class("TravelGameData")
    ], TravelGameData);
    return TravelGameData;
}(GameData_1.default));
exports.default = TravelGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVHJhdmVsR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF1RDtBQUN2RCx1Q0FBa0M7QUFFbEM7SUFBNEMsa0NBQVE7SUFHbEQ7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFMRCxlQUFTLEdBQUcsMEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDOUIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFHckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBQ3JGLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsdUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNELHVDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxpQkFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxHQUFHLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBdENrQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBdUNsQztJQUFELHFCQUFDO0NBdkNELEFBdUNDLENBdkMyQyxrQkFBUSxHQXVDbkQ7a0JBdkNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vR2FtZURhdGEnO1xuQG1qLmNsYXNzKFwiVHJhdmVsR2FtZURhdGFcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbEdhbWVEYXRhIGV4dGVuZHMgR2FtZURhdGEge1xuICBfZ2FtZVR5cGUgPSBNakdhbWVUeXBlLlRyYXZlbDtcbiAgX2lzQXV0b01lcmdpbmcgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jb2xsZWN0RGF0YSkgJiYgKHRoaXMubG9jYWxEYXRhLmNvbGxlY3REYXRhID0gXCJcIik7XG4gIH1cbiAgc2V0Sm91cm5leVR5cGUoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmpvdXJuZXlUeXBlID0gZTtcbiAgfVxuICBnZXRKb3VybmV5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuam91cm5leVR5cGU7XG4gIH1cbiAgZ2V0Q29sbGVjdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmNvbGxlY3REYXRhO1xuICB9XG4gIHNldENvbGxlY3REYXRhKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jb2xsZWN0RGF0YSA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICB9XG4gIHNldEF1dG9NZXJnaW5nKGUpIHtcbiAgICB0aGlzLl9pc0F1dG9NZXJnaW5nID0gZTtcbiAgfVxuICBpc0F1dG9NZXJnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0F1dG9NZXJnaW5nO1xuICB9XG4gIHJlc2V0R2FtZURhdGEoKSB7XG4gICAgc3VwZXIucmVzZXRHYW1lRGF0YS5jYWxsKHRoaXMpO1xuICAgIHRoaXMubG9jYWxEYXRhLmNvbGxlY3REYXRhID0gXCJcIjtcbiAgICB0aGlzLl9pc0F1dG9NZXJnaW5nID0gZmFsc2U7XG4gIH1cbiAgcmVzZXRUcmF2ZWwoKSB7XG4gICAgdGhpcy5yZXNldEdhbWVEYXRhKCk7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxJZCA9IDE7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQgPSAxO1xuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhV2l0aFNwZWNpYWxDYXJkcyA9IFwiXCI7XG4gIH1cbn0iXX0=