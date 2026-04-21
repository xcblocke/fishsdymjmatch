
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankRobotConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ba12HMpyxBHr9vZ1SgD9U0', 'RankRobotConfig');
// subpackages/l_rank/Scripts/RankRobotConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var RankRobotConfig = /** @class */ (function () {
    function RankRobotConfig() {
        this._robotNames = [];
        this._leaderboards = [];
        this._rewards = [];
        this._winStreaks = [];
        this.CONFIG_BASE_PATH = "config/rank/";
        this._loaded = false;
        this._lastPeriodUsedNames = new Set();
        this._currentPeriodUsedNames = new Set();
    }
    RankRobotConfig_1 = RankRobotConfig;
    Object.defineProperty(RankRobotConfig.prototype, "isLoaded", {
        get: function () {
            return this._loaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankRobotConfig.prototype, "robotNameCount", {
        get: function () {
            return this._robotNames.length;
        },
        enumerable: false,
        configurable: true
    });
    RankRobotConfig.getInstance = function () {
        this._instance || (this._instance = new RankRobotConfig_1());
        return this._instance;
    };
    RankRobotConfig.prototype.loadAll = function () {
        if (this._loaded)
            return true;
        try {
            this._robotNames = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.robot_name);
            this._leaderboards = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_col_leader_board);
            this._rewards = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_col_reward);
            this._winStreaks = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_win_streak_boost);
            if (0 === this._robotNames.length || 0 === this._leaderboards.length || 0 === this._rewards.length || 0 === this._winStreaks.length) {
                console.error("[RankRobotConfig] 配置加载失败: 配置为空");
                return false;
            }
            this._loaded = true;
            return true;
        }
        catch (t) {
            console.error("[RankRobotConfig] 配置加载失败: " + (t.message || t));
            return false;
        }
    };
    RankRobotConfig.prototype.getRandomRobotName = function (t) {
        this._loaded || this.loadAll();
        if (0 === this._robotNames.length) {
            console.error("[RankRobotConfig] 机器人名字配置为空");
            return {
                name: "Bot" + Math.random(),
                index: -1
            };
        }
        var e, o = 0, n = 2 * this._robotNames.length;
        do {
            e = Math.floor(Math.random() * this._robotNames.length);
            if (++o > n) {
                do {
                    e = Math.floor(Math.random() * this._robotNames.length);
                } while (t.has(e));
                break;
            }
        } while (t.has(e) || this._lastPeriodUsedNames.has(e));
        var a = this._robotNames[e].RobotName;
        this._currentPeriodUsedNames.add(e);
        return {
            name: a,
            index: e
        };
    };
    RankRobotConfig.prototype.startNewPeriod = function () {
        this._lastPeriodUsedNames.clear();
        this._lastPeriodUsedNames = new Set(this._currentPeriodUsedNames);
        this._currentPeriodUsedNames.clear();
    };
    RankRobotConfig.prototype.getNameCDInfo = function () {
        return {
            total: this._robotNames.length,
            inCD: this._lastPeriodUsedNames.size,
            available: this._robotNames.length - this._lastPeriodUsedNames.size - this._currentPeriodUsedNames.size,
            currentUsed: this._currentPeriodUsedNames.size
        };
    };
    RankRobotConfig.prototype.resetNameCD = function () {
        this._lastPeriodUsedNames.clear();
        this._currentPeriodUsedNames.clear();
    };
    RankRobotConfig.prototype.getRewards = function () {
        return this._rewards;
    };
    RankRobotConfig.prototype.getRewardByRank = function (t) {
        var e = this.getRewards().find(function (e) {
            return e.Rank === t;
        });
        return e ? e.Reward : 0;
    };
    RankRobotConfig.prototype.getWinStreakConfig = function () {
        return 0 === this._winStreaks.length ? {
            ID: 1,
            WinStreak1: 1,
            WinStreak2: 1.5,
            WinStreak3: 2
        } : this._winStreaks[0];
    };
    RankRobotConfig.prototype.getWinStreakRates = function () {
        var t = this.getWinStreakConfig(), e = [];
        for (var o in t)
            if (o.startsWith("WinStreak")) {
                var n = o.match(/WinStreak(\d+)/);
                if (n) {
                    var a = parseInt(n[1]);
                    e.push({
                        index: a,
                        value: t[o]
                    });
                }
            }
        e.sort(function (t, e) {
            return t.index - e.index;
        });
        return e.map(function (t) {
            return t.value;
        });
    };
    RankRobotConfig.prototype.getWinStreakRate = function (t) {
        var e = this.getWinStreakRates();
        if (0 === e.length)
            return 1;
        var o = Math.min(t - 1, e.length - 1);
        return e[Math.max(0, o)] || 1;
    };
    RankRobotConfig.prototype.clear = function () {
        this._robotNames = [];
        this._leaderboards = [];
        this._rewards = [];
        this._winStreaks = [];
        this._loaded = false;
        this._lastPeriodUsedNames.clear();
        this._currentPeriodUsedNames.clear();
    };
    var RankRobotConfig_1;
    RankRobotConfig._instance = null;
    __decorate([
        mj.traitEvent("RankRobotCfg_getRewards")
    ], RankRobotConfig.prototype, "getRewards", null);
    __decorate([
        mj.traitEvent("RankRobotCfg_winRates")
    ], RankRobotConfig.prototype, "getWinStreakRates", null);
    RankRobotConfig = RankRobotConfig_1 = __decorate([
        mj.class("RankRobotConfigLoader")
    ], RankRobotConfig);
    return RankRobotConfig;
}());
exports.default = RankRobotConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rUm9ib3RDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF3RTtBQUN4RSw2RUFBNEU7QUFFNUU7SUFBQTtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFDbEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLDRCQUF1QixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFpSXRDLENBQUM7d0JBeklvQixlQUFlO0lBVWxDLHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwyQ0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDTSwyQkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlCLElBQUk7WUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUFVLENBQUMsT0FBTyxDQUFDLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyx1QkFBVSxD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SUFDaEMsQ0FBQztJQUNELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O0lBL0hNLHlCQUFTLEdBQUcsSUFBSSxDQUFDO0lBMkV4QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7cURBR3hDO0lBZ0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs0REFvQnRDO0lBekhrQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixlQUFlLENBeUluQztJQUFELHNCQUFDO0NBeklELEFBeUlDLElBQUE7a0JBeklvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5AbWouY2xhc3MoXCJSYW5rUm9ib3RDb25maWdMb2FkZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtSb2JvdENvbmZpZyB7XG4gIF9yb2JvdE5hbWVzID0gW107XG4gIF9sZWFkZXJib2FyZHMgPSBbXTtcbiAgX3Jld2FyZHMgPSBbXTtcbiAgX3dpblN0cmVha3MgPSBbXTtcbiAgQ09ORklHX0JBU0VfUEFUSCA9IFwiY29uZmlnL3JhbmsvXCI7XG4gIF9sb2FkZWQgPSBmYWxzZTtcbiAgX2xhc3RQZXJpb2RVc2VkTmFtZXMgPSBuZXcgU2V0KCk7XG4gIF9jdXJyZW50UGVyaW9kVXNlZE5hbWVzID0gbmV3IFNldCgpO1xuICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcbiAgZ2V0IGlzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7XG4gIH1cbiAgZ2V0IHJvYm90TmFtZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2JvdE5hbWVzLmxlbmd0aDtcbiAgfVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IFJhbmtSb2JvdENvbmZpZygpKTtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cbiAgbG9hZEFsbCgpIHtcbiAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fcm9ib3ROYW1lcyA9IERhdGFSZWFkZXIuZ2V0TGlzdChDb25maWdUeXBlLnJvYm90X25hbWUpO1xuICAgICAgdGhpcy5fbGVhZGVyYm9hcmRzID0gRGF0YVJlYWRlci5nZXRMaXN0KENvbmZpZ1R5cGUucmFua19jb2xfbGVhZGVyX2JvYXJkKTtcbiAgICAgIHRoaXMuX3Jld2FyZHMgPSBEYXRhUmVhZGVyLmdldExpc3QoQ29uZmlnVHlwZS5yYW5rX2NvbF9yZXdhcmQpO1xuICAgICAgdGhpcy5fd2luU3RyZWFrcyA9IERhdGFSZWFkZXIuZ2V0TGlzdChDb25maWdUeXBlLnJhbmtfd2luX3N0cmVha19ib29zdCk7XG4gICAgICBpZiAoMCA9PT0gdGhpcy5fcm9ib3ROYW1lcy5sZW5ndGggfHwgMCA9PT0gdGhpcy5fbGVhZGVyYm9hcmRzLmxlbmd0aCB8fCAwID09PSB0aGlzLl9yZXdhcmRzLmxlbmd0aCB8fCAwID09PSB0aGlzLl93aW5TdHJlYWtzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1JhbmtSb2JvdENvbmZpZ10g6YWN572u5Yqg6L295aSx6LSlOiDphY3nva7kuLrnqbpcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1JhbmtSb2JvdENvbmZpZ10g6YWN572u5Yqg6L295aSx6LSlOiBcIiArICh0Lm1lc3NhZ2UgfHwgdCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBnZXRSYW5kb21Sb2JvdE5hbWUodCkge1xuICAgIHRoaXMuX2xvYWRlZCB8fCB0aGlzLmxvYWRBbGwoKTtcbiAgICBpZiAoMCA9PT0gdGhpcy5fcm9ib3ROYW1lcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmFua1JvYm90Q29uZmlnXSDmnLrlmajkurrlkI3lrZfphY3nva7kuLrnqbpcIik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcIkJvdFwiICsgTWF0aC5yYW5kb20oKSxcbiAgICAgICAgaW5kZXg6IC0xXG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgZSxcbiAgICAgIG8gPSAwLFxuICAgICAgbiA9IDIgKiB0aGlzLl9yb2JvdE5hbWVzLmxlbmd0aDtcbiAgICBkbyB7XG4gICAgICBlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fcm9ib3ROYW1lcy5sZW5ndGgpO1xuICAgICAgaWYgKCsrbyA+IG4pIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9yb2JvdE5hbWVzLmxlbmd0aCk7XG4gICAgICAgIH0gd2hpbGUgKHQuaGFzKGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSB3aGlsZSAodC5oYXMoZSkgfHwgdGhpcy5fbGFzdFBlcmlvZFVzZWROYW1lcy5oYXMoZSkpO1xuICAgIHZhciBhID0gdGhpcy5fcm9ib3ROYW1lc1tlXS5Sb2JvdE5hbWU7XG4gICAgdGhpcy5fY3VycmVudFBlcmlvZFVzZWROYW1lcy5hZGQoZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGEsXG4gICAgICBpbmRleDogZVxuICAgIH07XG4gIH1cbiAgc3RhcnROZXdQZXJpb2QoKSB7XG4gICAgdGhpcy5fbGFzdFBlcmlvZFVzZWROYW1lcy5jbGVhcigpO1xuICAgIHRoaXMuX2xhc3RQZXJpb2RVc2VkTmFtZXMgPSBuZXcgU2V0KHRoaXMuX2N1cnJlbnRQZXJpb2RVc2VkTmFtZXMpO1xuICAgIHRoaXMuX2N1cnJlbnRQZXJpb2RVc2VkTmFtZXMuY2xlYXIoKTtcbiAgfVxuICBnZXROYW1lQ0RJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3RhbDogdGhpcy5fcm9ib3ROYW1lcy5sZW5ndGgsXG4gICAgICBpbkNEOiB0aGlzLl9sYXN0UGVyaW9kVXNlZE5hbWVzLnNpemUsXG4gICAgICBhdmFpbGFibGU6IHRoaXMuX3JvYm90TmFtZXMubGVuZ3RoIC0gdGhpcy5fbGFzdFBlcmlvZFVzZWROYW1lcy5zaXplIC0gdGhpcy5fY3VycmVudFBlcmlvZFVzZWROYW1lcy5zaXplLFxuICAgICAgY3VycmVudFVzZWQ6IHRoaXMuX2N1cnJlbnRQZXJpb2RVc2VkTmFtZXMuc2l6ZVxuICAgIH07XG4gIH1cbiAgcmVzZXROYW1lQ0QoKSB7XG4gICAgdGhpcy5fbGFzdFBlcmlvZFVzZWROYW1lcy5jbGVhcigpO1xuICAgIHRoaXMuX2N1cnJlbnRQZXJpb2RVc2VkTmFtZXMuY2xlYXIoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtSb2JvdENmZ19nZXRSZXdhcmRzXCIpXG4gIGdldFJld2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jld2FyZHM7XG4gIH1cbiAgZ2V0UmV3YXJkQnlSYW5rKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0UmV3YXJkcygpLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLlJhbmsgPT09IHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGUgPyBlLlJld2FyZCA6IDA7XG4gIH1cbiAgZ2V0V2luU3RyZWFrQ29uZmlnKCkge1xuICAgIHJldHVybiAwID09PSB0aGlzLl93aW5TdHJlYWtzLmxlbmd0aCA/IHtcbiAgICAgIElEOiAxLFxuICAgICAgV2luU3RyZWFrMTogMSxcbiAgICAgIFdpblN0cmVhazI6IDEuNSxcbiAgICAgIFdpblN0cmVhazM6IDJcbiAgICB9IDogdGhpcy5fd2luU3RyZWFrc1swXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtSb2JvdENmZ193aW5SYXRlc1wiKVxuICBnZXRXaW5TdHJlYWtSYXRlcygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0V2luU3RyZWFrQ29uZmlnKCksXG4gICAgICBlID0gW107XG4gICAgZm9yICh2YXIgbyBpbiB0KSBpZiAoby5zdGFydHNXaXRoKFwiV2luU3RyZWFrXCIpKSB7XG4gICAgICB2YXIgbiA9IG8ubWF0Y2goL1dpblN0cmVhayhcXGQrKS8pO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGEgPSBwYXJzZUludChuWzFdKTtcbiAgICAgICAgZS5wdXNoKHtcbiAgICAgICAgICBpbmRleDogYSxcbiAgICAgICAgICB2YWx1ZTogdFtvXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZS5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICByZXR1cm4gdC5pbmRleCAtIGUuaW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIGUubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICB9KTtcbiAgfVxuICBnZXRXaW5TdHJlYWtSYXRlKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0V2luU3RyZWFrUmF0ZXMoKTtcbiAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiAxO1xuICAgIHZhciBvID0gTWF0aC5taW4odCAtIDEsIGUubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGVbTWF0aC5tYXgoMCwgbyldIHx8IDE7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fcm9ib3ROYW1lcyA9IFtdO1xuICAgIHRoaXMuX2xlYWRlcmJvYXJkcyA9IFtdO1xuICAgIHRoaXMuX3Jld2FyZHMgPSBbXTtcbiAgICB0aGlzLl93aW5TdHJlYWtzID0gW107XG4gICAgdGhpcy5fbG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdFBlcmlvZFVzZWROYW1lcy5jbGVhcigpO1xuICAgIHRoaXMuX2N1cnJlbnRQZXJpb2RVc2VkTmFtZXMuY2xlYXIoKTtcbiAgfVxufSJdfQ==