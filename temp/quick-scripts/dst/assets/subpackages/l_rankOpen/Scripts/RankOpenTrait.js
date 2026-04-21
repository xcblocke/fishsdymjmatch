
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankOpen/Scripts/RankOpenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7169q55UZLgLc4ebdcAi0h', 'RankOpenTrait');
// subpackages/l_rankOpen/Scripts/RankOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankOpenTrait = /** @class */ (function (_super) {
    __extends(RankOpenTrait, _super);
    function RankOpenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankOpenTrait_1 = RankOpenTrait;
    RankOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankOpenTrait.prototype.getRankUnlockLevel = function () {
        var t, e;
        return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : RankOpenTrait_1.DEFAULT_RANK_LEVEL;
    };
    RankOpenTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    RankOpenTrait.prototype.isRankUnlocked = function () {
        var t = this.getCurrentLevel(), e = this.getRankUnlockLevel();
        return 0 === e || t > e;
    };
    RankOpenTrait.prototype.onRankTrait_getLimitLv = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RankOpenTrait.prototype.onRankModel_getUnlockLevel = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RankOpenTrait.prototype.onHallRankBLockTt_unlockLv = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    var RankOpenTrait_1;
    RankOpenTrait.traitKey = "RankOpen";
    RankOpenTrait.DEFAULT_RANK_LEVEL = 10;
    __decorate([
        mj.traitEvent("RankOpenTrait_getLv")
    ], RankOpenTrait.prototype, "getRankUnlockLevel", null);
    __decorate([
        mj.traitEvent("RankOpenTrait_isUnlock")
    ], RankOpenTrait.prototype, "isRankUnlocked", null);
    RankOpenTrait = RankOpenTrait_1 = __decorate([
        mj.trait,
        mj.class("RankOpenTrait")
    ], RankOpenTrait);
    return RankOpenTrait;
}(Trait_1.default));
exports.default = RankOpenTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtPcGVuL1NjcmlwdHMvUmFua09wZW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBMkMsaUNBQUs7SUFBaEQ7O0lBNENBLENBQUM7c0JBNUNvQixhQUFhO0lBR2hDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ3RKLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkYsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsOENBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOztJQTFDTSxzQkFBUSxHQUFHLFVBQVUsQ0FBQztJQUN0QixnQ0FBa0IsR0FBRyxFQUFFLENBQUM7SUFLL0I7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzJEQUlwQztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt1REFLdkM7SUFuQmtCLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0E0Q2pDO0lBQUQsb0JBQUM7Q0E1Q0QsQUE0Q0MsQ0E1QzBDLGVBQUssR0E0Qy9DO2tCQTVDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmtPcGVuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtPcGVuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua09wZW5cIjtcbiAgc3RhdGljIERFRkFVTFRfUkFOS19MRVZFTCA9IDEwO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rT3BlblRyYWl0X2dldEx2XCIpXG4gIGdldFJhbmtVbmxvY2tMZXZlbCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5sZXZlbExpbWl0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogUmFua09wZW5UcmFpdC5ERUZBVUxUX1JBTktfTEVWRUw7XG4gIH1cbiAgZ2V0Q3VycmVudExldmVsKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoTWpHYW1lVHlwZS5Ob3JtYWwpLmdldExldmVsSWQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtPcGVuVHJhaXRfaXNVbmxvY2tcIilcbiAgaXNSYW5rVW5sb2NrZWQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1cnJlbnRMZXZlbCgpLFxuICAgICAgZSA9IHRoaXMuZ2V0UmFua1VubG9ja0xldmVsKCk7XG4gICAgcmV0dXJuIDAgPT09IGUgfHwgdCA+IGU7XG4gIH1cbiAgb25SYW5rVHJhaXRfZ2V0TGltaXRMdih0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldFJhbmtVbmxvY2tMZXZlbCgpO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIG9uUmFua01vZGVsX2dldFVubG9ja0xldmVsKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0UmFua1VubG9ja0xldmVsKCk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiByXG4gICAgfSk7XG4gIH1cbiAgb25IYWxsUmFua0JMb2NrVHRfdW5sb2NrTHYodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5nZXRSYW5rVW5sb2NrTGV2ZWwoKTtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxufSJdfQ==