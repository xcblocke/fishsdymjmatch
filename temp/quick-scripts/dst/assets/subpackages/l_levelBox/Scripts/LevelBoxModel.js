
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f569b6iDxpK4ZFy4YYodHIJ', 'LevelBoxModel');
// subpackages/l_levelBox/Scripts/LevelBoxModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var LevelBoxModel = /** @class */ (function (_super) {
    __extends(LevelBoxModel, _super);
    function LevelBoxModel() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.curType) && (_this.localData.curType = LevelBoxTypes_1.ELevelBoxCondType.None);
        _this.isLocalEmpty(_this.localData.progress) && (_this.localData.progress = 0);
        _this.isLocalEmpty(_this.localData.rewardCount) && (_this.localData.rewardCount = 0);
        _this.isLocalEmpty(_this.localData.curBoxLimits) && (_this.localData.curBoxLimits = []);
        return _this;
    }
    LevelBoxModel.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    LevelBoxModel.prototype.setNewBox = function (t) {
        this.localData.curType = t;
        this.localData.progress = 0;
        this.localData.rewardCount++;
    };
    LevelBoxModel.prototype.setProgress = function (t) {
        this.localData.progress = t;
    };
    LevelBoxModel.prototype.addProgress = function () {
        this.localData.progress++;
    };
    LevelBoxModel.prototype.getCurBox = function () {
        return this.localData.curType;
    };
    LevelBoxModel.prototype.getProgress = function () {
        return this.localData.progress;
    };
    LevelBoxModel.prototype.getRewardCount = function () {
        return this.localData.rewardCount;
    };
    LevelBoxModel.prototype.getCurBoxLimits = function (t) {
        t && t.length > 0 && this.localData.curBoxLimits.length !== t.length && (this.localData.curBoxLimits = t);
        return this.localData.curBoxLimits;
    };
    LevelBoxModel.prototype.setCurBoxLimits = function (t) {
        this.localData.curBoxLimits = t;
    };
    __decorate([
        mj.traitEvent("LevelBoxMdl_setNewBox")
    ], LevelBoxModel.prototype, "setNewBox", null);
    LevelBoxModel = __decorate([
        mj.class("LevelBoxModel")
    ], LevelBoxModel);
    return LevelBoxModel;
}(Model_1.default));
exports.default = LevelBoxModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELGlEQUFvRDtBQUVwRDtJQUEyQyxpQ0FBSztJQUM5QztRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQUpDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLGlDQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9GLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztJQUN2RixDQUFDO0lBQ0Qsb0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsaUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsdUNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUcsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBQ0QsdUNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUExQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2tEQUt0QztJQWhCa0IsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0F1Q2pDO0lBQUQsb0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2QzBDLGVBQUssR0F1Qy9DO2tCQXZDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCB7IEVMZXZlbEJveENvbmRUeXBlIH0gZnJvbSAnLi9MZXZlbEJveFR5cGVzJztcbkBtai5jbGFzcyhcIkxldmVsQm94TW9kZWxcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQm94TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VyVHlwZSkgJiYgKHRoaXMubG9jYWxEYXRhLmN1clR5cGUgPSBFTGV2ZWxCb3hDb25kVHlwZS5Ob25lKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5wcm9ncmVzcykgJiYgKHRoaXMubG9jYWxEYXRhLnByb2dyZXNzID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmV3YXJkQ291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb3VudCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmN1ckJveExpbWl0cykgJiYgKHRoaXMubG9jYWxEYXRhLmN1ckJveExpbWl0cyA9IFtdKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxldmVsQm94TWRsX3NldE5ld0JveFwiKVxuICBzZXROZXdCb3godCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmN1clR5cGUgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb3VudCsrO1xuICB9XG4gIHNldFByb2dyZXNzKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzcyA9IHQ7XG4gIH1cbiAgYWRkUHJvZ3Jlc3MoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3MrKztcbiAgfVxuICBnZXRDdXJCb3goKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1clR5cGU7XG4gIH1cbiAgZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzO1xuICB9XG4gIGdldFJld2FyZENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb3VudDtcbiAgfVxuICBnZXRDdXJCb3hMaW1pdHModCkge1xuICAgIHQgJiYgdC5sZW5ndGggPiAwICYmIHRoaXMubG9jYWxEYXRhLmN1ckJveExpbWl0cy5sZW5ndGggIT09IHQubGVuZ3RoICYmICh0aGlzLmxvY2FsRGF0YS5jdXJCb3hMaW1pdHMgPSB0KTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY3VyQm94TGltaXRzO1xuICB9XG4gIHNldEN1ckJveExpbWl0cyh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VyQm94TGltaXRzID0gdDtcbiAgfVxufSJdfQ==