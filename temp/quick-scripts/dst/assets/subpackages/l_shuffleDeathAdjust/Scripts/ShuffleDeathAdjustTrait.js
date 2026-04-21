
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleDeathAdjust/Scripts/ShuffleDeathAdjustTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ed6d3/OXhB6pzM6QViuvUs', 'ShuffleDeathAdjustTrait');
// subpackages/l_shuffleDeathAdjust/Scripts/ShuffleDeathAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleDeathAdjustTrait = /** @class */ (function (_super) {
    __extends(ShuffleDeathAdjustTrait, _super);
    function ShuffleDeathAdjustTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleDeathAdjustTrait_1 = ShuffleDeathAdjustTrait;
    ShuffleDeathAdjustTrait.prototype.onLoad = function () {
        var e, r, o, a, i, n, s, u;
        _super.prototype.onLoad.call(this);
        this._config = {
            startLevel: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 12,
            checkInterval: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.checkInterval) && void 0 !== a ? a : 3,
            historySize: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.historySize) && void 0 !== n ? n : 7
        };
        null !== (s = (u = this.localData).shuffleHistory) && void 0 !== s || (u.shuffleHistory = []);
    };
    ShuffleDeathAdjustTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    ShuffleDeathAdjustTrait.prototype.getGameData = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal);
    };
    ShuffleDeathAdjustTrait.prototype.isCheckPoint = function (t) {
        var e = this._config, r = e.startLevel, o = e.checkInterval;
        return t >= r && (t - r) % o == 0;
    };
    ShuffleDeathAdjustTrait.prototype.getRecentShuffleCount = function () {
        return (this.localData.shuffleHistory || []).reduce(function (t, e) {
            return t + e;
        }, 0);
    };
    ShuffleDeathAdjustTrait.prototype.calcAdjustment = function () {
        var t = this.getGameData().getShuffleNums(), e = this.getRecentShuffleCount(), r = 2;
        if (t <= 5) {
            r = 0;
        }
        else {
            t <= 10 && (r = 1);
        }
        var o = 2;
        if (e > 4) {
            o = 0;
        }
        else {
            e > 2 && (o = 1);
        }
        return [[0, -1, -2], [1, 0, -1], [2, 1, 0]][r][o];
    };
    ShuffleDeathAdjustTrait.prototype.onGsListener_onGameEnd = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = this.getGameData().getUsedShuffle();
            this.localData.shuffleHistory = this.localData.shuffleHistory || [];
            this.localData.shuffleHistory.push(o);
            this.localData.shuffleHistory.length > this._config.historySize && this.localData.shuffleHistory.shift();
            this.localData.shuffleHistory = this.localData.shuffleHistory;
            e();
        }
        catch (t) {
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 记录洗牌使用次数失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleDeathAdjustTrait.prototype.onExtNormLv_hasDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isCheckPoint(o)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 检查统计点失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleDeathAdjustTrait.prototype.onExtNormLv_getDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isCheckPoint(o)) {
                var a = this.calcAdjustment();
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: a
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 获取调整值失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var ShuffleDeathAdjustTrait_1;
    ShuffleDeathAdjustTrait.traitKey = "ShuffleDeathAdjust";
    ShuffleDeathAdjustTrait = ShuffleDeathAdjustTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleDeathAdjustTrait")
    ], ShuffleDeathAdjustTrait);
    return ShuffleDeathAdjustTrait;
}(ExtractTrait_1.default));
exports.default = ShuffleDeathAdjustTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVEZWF0aEFkanVzdC9TY3JpcHRzL1NodWZmbGVEZWF0aEFkanVzdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBQ3hGLHdGQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBcUQsMkNBQVk7SUFBakU7O0lBMEdBLENBQUM7Z0NBMUdvQix1QkFBdUI7SUFFMUMsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixVQUFVLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFILGFBQWEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0gs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O1NBQ0w7SUFDSCxDQUFDOztJQXhHTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0EwRzNDO0lBQUQsOEJBQUM7Q0ExR0QsQUEwR0MsQ0ExR29ELHNCQUFZLEdBMEdoRTtrQkExR29CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTaHVmZmxlRGVhdGhBZGp1c3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1ZmZsZURlYXRoQWRqdXN0VHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNodWZmbGVEZWF0aEFkanVzdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIG8sIGEsIGksIG4sIHMsIHU7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgc3RhcnRMZXZlbDogbnVsbCAhPT0gKHIgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5zdGFydExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTIsXG4gICAgICBjaGVja0ludGVydmFsOiBudWxsICE9PSAoYSA9IG51bGwgPT09IChvID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNoZWNrSW50ZXJ2YWwpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAzLFxuICAgICAgaGlzdG9yeVNpemU6IG51bGwgIT09IChuID0gbnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaGlzdG9yeVNpemUpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiA3XG4gICAgfTtcbiAgICBudWxsICE9PSAocyA9ICh1ID0gdGhpcy5sb2NhbERhdGEpLnNodWZmbGVIaXN0b3J5KSAmJiB2b2lkIDAgIT09IHMgfHwgKHUuc2h1ZmZsZUhpc3RvcnkgPSBbXSk7XG4gIH1cbiAgZ2V0Q3VycmVudExldmVsKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoTWpHYW1lVHlwZS5Ob3JtYWwpLmdldExldmVsSWQoKTtcbiAgfVxuICBnZXRHYW1lRGF0YSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKTtcbiAgfVxuICBpc0NoZWNrUG9pbnQodCkge1xuICAgIHZhciBlID0gdGhpcy5fY29uZmlnLFxuICAgICAgciA9IGUuc3RhcnRMZXZlbCxcbiAgICAgIG8gPSBlLmNoZWNrSW50ZXJ2YWw7XG4gICAgcmV0dXJuIHQgPj0gciAmJiAodCAtIHIpICUgbyA9PSAwO1xuICB9XG4gIGdldFJlY2VudFNodWZmbGVDb3VudCgpIHtcbiAgICByZXR1cm4gKHRoaXMubG9jYWxEYXRhLnNodWZmbGVIaXN0b3J5IHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHJldHVybiB0ICsgZTtcbiAgICB9LCAwKTtcbiAgfVxuICBjYWxjQWRqdXN0bWVudCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpLFxuICAgICAgZSA9IHRoaXMuZ2V0UmVjZW50U2h1ZmZsZUNvdW50KCksXG4gICAgICByID0gMjtcbiAgICBpZiAodCA8PSA1KSB7XG4gICAgICByID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA8PSAxMCAmJiAociA9IDEpO1xuICAgIH1cbiAgICB2YXIgbyA9IDI7XG4gICAgaWYgKGUgPiA0KSB7XG4gICAgICBvID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZSA+IDIgJiYgKG8gPSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIFtbMCwgLTEsIC0yXSwgWzEsIDAsIC0xXSwgWzIsIDEsIDBdXVtyXVtvXTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25HYW1lRW5kKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gdGhpcy5nZXRHYW1lRGF0YSgpLmdldFVzZWRTaHVmZmxlKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlSGlzdG9yeSA9IHRoaXMubG9jYWxEYXRhLnNodWZmbGVIaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5sb2NhbERhdGEuc2h1ZmZsZUhpc3RvcnkucHVzaChvKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnNodWZmbGVIaXN0b3J5Lmxlbmd0aCA+IHRoaXMuX2NvbmZpZy5oaXN0b3J5U2l6ZSAmJiB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlSGlzdG9yeS5zaGlmdCgpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuc2h1ZmZsZUhpc3RvcnkgPSB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlSGlzdG9yeTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgU2h1ZmZsZURlYXRoQWRqdXN0VHJhaXQudHJhaXRLZXkgKyBcIl0g6K6w5b2V5rSX54mM5L2/55So5qyh5pWw5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfaGFzRGVhdGhEaXJBZGoodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSB0LmFyZ3NbMF07XG4gICAgICBpZiAodGhpcy5pc0NoZWNrUG9pbnQobykpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFNodWZmbGVEZWF0aEFkanVzdFRyYWl0LnRyYWl0S2V5ICsgXCJdIOajgOafpee7n+iuoeeCueWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2dldERlYXRoRGlyQWRqKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gdC5hcmdzWzBdO1xuICAgICAgaWYgKHRoaXMuaXNDaGVja1BvaW50KG8pKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQWRqdXN0bWVudCgpO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgU2h1ZmZsZURlYXRoQWRqdXN0VHJhaXQudHJhaXRLZXkgKyBcIl0g6I635Y+W6LCD5pW05YC85aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=