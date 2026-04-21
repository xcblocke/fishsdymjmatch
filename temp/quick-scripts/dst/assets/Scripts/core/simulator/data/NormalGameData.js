
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/NormalGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7116yFA2tM7bMjUGO5tE1e', 'NormalGameData');
// Scripts/core/simulator/data/NormalGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var NormalGameData = /** @class */ (function (_super) {
    __extends(NormalGameData, _super);
    function NormalGameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this.isLocalEmpty(_this.localData.rankCardCount) && (_this.localData.rankCardCount = 0);
        _this.isLocalEmpty(_this.localData.isBreakBest) && (_this.localData.isBreakBest = false);
        _this.isLocalEmpty(_this.localData.preBestScore) && (_this.localData.preBestScore = 0);
        return _this;
    }
    NormalGameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.isBreakBest = false;
        this.localData.preBestScore = this.localData.maxScore;
    };
    NormalGameData.prototype.setRankCardCount = function (e) {
        this.localData.rankCardCount = e;
    };
    NormalGameData.prototype.getRankCardCount = function () {
        return this.localData.rankCardCount;
    };
    NormalGameData.prototype.updateMaxScore = function (t) {
        _super.prototype.updateMaxScore.call(this, t);
        t > this.localData.preBestScore && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
    };
    NormalGameData.prototype.getPreBestScore = function () {
        return this.localData.preBestScore;
    };
    NormalGameData.prototype.isBreakBest = function () {
        return this.localData.isBreakBest;
    };
    NormalGameData = __decorate([
        mj.class("NormalGameData")
    ], NormalGameData);
    return NormalGameData;
}(GameData_1.default));
exports.default = NormalGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF1RDtBQUN2RCx1Q0FBa0M7QUFFbEM7SUFBNEMsa0NBQVE7SUFFbEQ7UUFBQSxZQUNFLGlCQUFPLFNBSVI7UUFORCxlQUFTLEdBQUcsMEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFHNUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBQ3RGLENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsaUJBQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDeEQsQ0FBQztJQUNELHlDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QseUNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsdUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxpQkFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQTVCa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQTZCbEM7SUFBRCxxQkFBQztDQTdCRCxBQTZCQyxDQTdCMkMsa0JBQVEsR0E2Qm5EO2tCQTdCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhJztcbkBtai5jbGFzcyhcIk5vcm1hbEdhbWVEYXRhXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxHYW1lRGF0YSBleHRlbmRzIEdhbWVEYXRhIHtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmFua0NhcmRDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLnJhbmtDYXJkQ291bnQgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5pc0JyZWFrQmVzdCkgJiYgKHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0ID0gZmFsc2UpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZSkgJiYgKHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZSA9IDApO1xuICB9XG4gIHJlc2V0R2FtZURhdGEoKSB7XG4gICAgc3VwZXIucmVzZXRHYW1lRGF0YS5jYWxsKHRoaXMpO1xuICAgIHRoaXMubG9jYWxEYXRhLmlzQnJlYWtCZXN0ID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEucHJlQmVzdFNjb3JlID0gdGhpcy5sb2NhbERhdGEubWF4U2NvcmU7XG4gIH1cbiAgc2V0UmFua0NhcmRDb3VudChlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmFua0NhcmRDb3VudCA9IGU7XG4gIH1cbiAgZ2V0UmFua0NhcmRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmFua0NhcmRDb3VudDtcbiAgfVxuICB1cGRhdGVNYXhTY29yZSh0KSB7XG4gICAgc3VwZXIudXBkYXRlTWF4U2NvcmUuY2FsbCh0aGlzLCB0KTtcbiAgICB0ID4gdGhpcy5sb2NhbERhdGEucHJlQmVzdFNjb3JlICYmICF0aGlzLmxvY2FsRGF0YS5pc0JyZWFrQmVzdCAmJiAodGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3QgPSB0cnVlKTtcbiAgfVxuICBnZXRQcmVCZXN0U2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnByZUJlc3RTY29yZTtcbiAgfVxuICBpc0JyZWFrQmVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaXNCcmVha0Jlc3Q7XG4gIH1cbn0iXX0=