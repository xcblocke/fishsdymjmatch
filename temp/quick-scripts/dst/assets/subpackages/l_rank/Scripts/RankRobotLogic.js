
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankRobotLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79987egSStAvLtpxgIj3NGf', 'RankRobotLogic');
// subpackages/l_rank/Scripts/RankRobotLogic.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ROBOT_LOGIC_PARAM = exports.DEFAULT_ROBOT_COUNT = void 0;
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var RankRobotConfig_1 = require("./RankRobotConfig");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
exports.DEFAULT_ROBOT_COUNT = 49;
exports.DEFAULT_ROBOT_LOGIC_PARAM = {
    robotsNum: exports.DEFAULT_ROBOT_COUNT,
    baseLevelConst: 7,
    minPoint: 2,
    rankThreshold: 10,
    rewardLimit: 3.6,
    timeThreshold: 0.6,
    intervalThreshold: 3600,
    initialBotsMin: 5,
    botsChasingLevel: 5,
    logBase: 2
};
var RankRobotLogic = /** @class */ (function () {
    function RankRobotLogic() {
        this._covertMap = new Map();
        this._winStreakStrategies = [1, 1.5, 2];
        this._lastWinStreakCount = 0;
        this._configLoader = null;
    }
    Object.defineProperty(RankRobotLogic.prototype, "configLoader", {
        get: function () {
            this._configLoader || (this._configLoader = RankRobotConfig_1.default.getInstance());
            this._configLoader.isLoaded || this.loadConfig();
            return this._configLoader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankRobotLogic.prototype, "nowTime", {
        get: function () {
            return Date.now();
        },
        enumerable: false,
        configurable: true
    });
    RankRobotLogic.prototype.initialize = function () {
        this._configLoader = RankRobotConfig_1.default.getInstance();
    };
    RankRobotLogic.prototype.loadConfig = function () {
        this._configLoader.loadAll();
        if (this._configLoader.isLoaded) {
            this._winStreakStrategies = this._configLoader.getWinStreakRates();
        }
        else {
            console.error("[RankRobotLogic] 配置加载失败");
        }
    };
    RankRobotLogic.prototype.activeNewActivity = function (t, e) {
        try {
            this.initRanks(t, e);
            this.initScore(t);
            this.startNewPeriod();
            t.rankList;
        }
        catch (t) {
            console.error("[RankRobotLogic] 激活新活动失败: " + (t.message || t));
        }
    };
    RankRobotLogic.prototype.initRanks = function (t, e) {
        var o = t.rankRobotCfg;
        this._covertMap.clear();
        if (t) {
            t.expectationBase = this.calcPBase(o, e);
            t.lastUpdateTime = this.nowTime;
            t.joinActInfo = {
                rank: 0,
                score: 0,
                passCount: 0,
                winStreakCount: 0,
                currentWinStreakRate: 1,
                isNeedRefreshRank: false,
                levelCollectCount: 0,
                totalCollectCount: 0
            };
            t.rankList = [];
            for (var n = UserInfoManager_1.default.getInstance(), i = new Set(), r = 0; r < o.robotsNum; r++) {
                var s = n.getRandomAvatarId(), c = n.getRandomFrameId(), d = this.getRandomRobotName(i), p = d.name, u = d.index;
                i.add(u);
                t.rankList.push({
                    id: "r" + (r + 1),
                    rank: r + 1,
                    name: p,
                    avatarId: s,
                    score: 0,
                    avatarFrameId: c
                });
                this._covertMap.set("r" + (r + 1), 0);
            }
            var h = UserModel_1.default.getInstance();
            t.rankList.push({
                id: "player",
                rank: o.robotsNum + 1,
                name: h.getUserName(),
                avatarId: h.getAvatarId(),
                score: 0,
                avatarFrameId: h.getFrameId()
            });
            this._covertMap.set("player", 0);
        }
    };
    RankRobotLogic.prototype.initScore = function (t) {
        if (t && t.rankList.length)
            for (var e = t.rankRobotCfg, o = this.initBotCnt(e.robotsNum, e.initialBotsMin), n = 0; n < e.robotsNum; n++) {
                var a = n < o ? e.minPoint : 0, i = n < o ? e.minPoint : 0;
                t.rankList[n].score = a;
                t.rankList[n].rank = n + 1;
                this._covertMap.set(t.rankList[n].id, i);
            }
    };
    RankRobotLogic.prototype.initBotCnt = function (t, e) {
        return Math.floor(Math.random() * (t - e)) + e;
    };
    RankRobotLogic.prototype.calcPBase = function (t, e) {
        return !t || !e || e <= 0 ? 0 : 2 * (Math.floor(t.baseLevelConst - Math.log10(e)) + t.minPoint / 2);
    };
    RankRobotLogic.prototype.levelPassed = function (t, e) {
        if (t) {
            t.joinActInfo.winStreakCount++;
            t.joinActInfo.totalCollectCount += e;
            var o = this.getWinStreakRate(t.joinActInfo.winStreakCount);
            t.joinActInfo.currentWinStreakRate = o;
            var n = Math.floor(e * o), a = 0 === t.joinActInfo.passCount;
            this.updateScore(t, n, a);
        }
    };
    RankRobotLogic.prototype.resetWinStreakCount = function (t) {
        if (t) {
            this._lastWinStreakCount = 0;
            t.joinActInfo.winStreakCount;
            t.joinActInfo.winStreakCount = 0;
            t.joinActInfo.currentWinStreakRate = 1;
        }
    };
    RankRobotLogic.prototype.resumeLastWinStreak = function (t) {
        if (t) {
            t.joinActInfo.winStreakCount = this._lastWinStreakCount;
            if (this._lastWinStreakCount >= 3) {
                t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[2];
            }
            else {
                if (2 === this._lastWinStreakCount) {
                    t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[1];
                }
                else {
                    t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[0];
                }
            }
        }
    };
    RankRobotLogic.prototype.updateScore = function (t, e, o) {
        if (t) {
            t.joinActInfo.passCount++;
            t.joinActInfo.score += e;
            t.joinActInfo.isNeedRefreshRank = true;
            this.updRbtScore(t, o, e);
        }
    };
    RankRobotLogic.prototype.updateScoreToRankList = function (t) {
        if (t) {
            for (var e = 0; e < t.rankList.length; e++) {
                var o = t.rankList[e];
                if (this.isMySelf(o.id)) {
                    o.score = t.joinActInfo.score;
                    break;
                }
            }
            this.sortRankList(t);
            this.updateRankAfterSort(t);
            t.joinActInfo.isNeedRefreshRank = false;
        }
    };
    RankRobotLogic.prototype.updateRankAfterSort = function (t) {
        if (null != t)
            for (var e = 0; e < t.rankList.length; e++) {
                t.rankList[e].rank = e + 1;
                if (this.isMySelf(t.rankList[e].id)) {
                    t.joinActInfo.rank = e + 1;
                    t.rankList[e].name = UserModel_1.default.getInstance().getUserName();
                }
            }
    };
    RankRobotLogic.prototype.sortRankList = function (t) {
        var e = this;
        if (t && t.rankList) {
            this.sortByScore(t);
            var o = t.rankList.findIndex(function (t) {
                return e.isMySelf(t.id);
            });
            if (-1 !== o) {
                var n = t.rankList[o].score, a = this.getSameScoreRange(o, n, t), i = a.sameScoreStart, r = a.sameScoreEnd;
                i !== r && this.updateRankForSameScore(t, o, n, i, r);
            }
        }
    };
    RankRobotLogic.prototype.updateRankForSameScore = function (t, e, o, n, a) {
        var i = n + 1, r = this.getTargetIdx(i, o, n, a);
        if (e !== r) {
            var s = t.rankList.splice(e, 1)[0];
            t.rankList.splice(r, 0, s);
        }
    };
    RankRobotLogic.prototype.sortByScore = function (t) {
        t && t.rankList && t.rankList.sort(function (t, e) {
            return e.score - t.score;
        });
    };
    RankRobotLogic.prototype.getTargetIdx = function (t, e, o, n) {
        return t < 6 || 0 == e ? o : n;
    };
    RankRobotLogic.prototype.getSameScoreRange = function (t, e, o) {
        for (var n = t, a = t; n > 0 && o.rankList[n - 1].score === e;)
            n--;
        for (; a < o.rankList.length - 1 && o.rankList[a + 1].score === e;)
            a++;
        return {
            sameScoreStart: n,
            sameScoreEnd: a
        };
    };
    RankRobotLogic.prototype.fstPassScore = function (t, e, o) {
        if (o === void 0) { o = 0; }
        var n = t.rankRobotCfg, a = 2 * (t.expectationBase / this.getR(t.rankRobotCfg.robotsNum, t, e) + n.minPoint / 2), i = Math.floor(a);
        if (e <= 6 && o > 0) {
            var r = Math.max(n.minPoint, o - 2), s = o + 2;
            a = (i = Math.floor(Math.random() * (s - r + 1)) + r) + Math.random();
        }
        return {
            score: i,
            covert: a
        };
    };
    RankRobotLogic.prototype.getR = function (t, e, o) {
        var n = e.rankRobotCfg, a = e.expectationBase;
        return o <= n.rankThreshold && o >= 1 ? Math.random() * (a / n.rewardLimit - 1) + 1 : o <= (t - n.rankThreshold) / 2 + n.rankThreshold && o >= 11 ? Math.random() * (a - a / n.rewardLimit) + a / n.rewardLimit : Math.random() * (t - a) + a;
    };
    RankRobotLogic.prototype.fix3PtBots = function (t) {
        if (t) {
            for (var e = t.rankRobotCfg, o = [], n = t.joinActInfo.score, a = 0; a < t.rankList.length; a++) {
                var i = t.rankList[a];
                3 === i.score && i.score !== n && o.push(a);
            }
            if (0 !== o.length) {
                o.sort(function () {
                    return Math.random() - 0.5;
                });
                var r = Math.ceil(0.5 * o.length);
                for (a = 0; a < o.length; a++) {
                    var s, l = o[a];
                    s = a < r ? e.initialBotsMin : Math.floor(11 * Math.random()) + 5;
                    t.rankList[l].score = s;
                    this._covertMap.set(t.rankList[l].id, s + Math.random());
                }
            }
        }
    };
    RankRobotLogic.prototype.othPassScore = function (t, e, o, n, a, i) {
        var r = t.rankRobotCfg, s = 0, l = 0, c = o;
        l = e > t.joinActInfo.rank && t.joinActInfo.passCount < r.baseLevelConst + r.botsChasingLevel ? (0 === a ? t.joinActInfo.score : a) - n + i : Math.abs(t.joinActInfo.rank - e) / (t.joinActInfo.passCount + 50 / r.minPoint);
        c += Math.random() * l;
        if (3 === (s = Math.floor(c)) || s < 2) {
            var d = [2, 4, 5, 6, 7, 8];
            c = (s = d[Math.floor(Math.random() * d.length)]) + Math.random();
        }
        return {
            score: s,
            covert: c
        };
    };
    RankRobotLogic.prototype.updRbtScore = function (t, e, o) {
        var n = this;
        if (t) {
            for (var a = t.rankList.findIndex(function (t) {
                return n.isMySelf(t.id);
            }), i = t.joinActInfo.score, r = t.rankList.length - 1; r >= 0; r--)
                if (r !== a) {
                    var s, l = t.rankList[r].rank, c = t.rankList[r], d = this._covertMap.get(c.id) || c.score, p = r > 0 && r - 1 !== a ? t.rankList[r - 1].score : r - 1 === a && r > 1 ? t.rankList[r - 2].score : 0;
                    s = e ? this.fstPassScore(t, l, i) : this.othPassScore(t, l, d, c.score, p, o);
                    c.score = s.score;
                    this._covertMap.set(c.id, s.covert);
                }
            e && this.fix3PtBots(t);
            this.sortRankList(t);
            t.lastUpdateTime = this.nowTime;
            for (var u = t.rankList.find(function (t) {
                return n.isMySelf(t.id);
            }); t.rankList.length > t.rankRobotCfg.robotsNum + 1;) {
                var h = t.rankList[t.rankList.length - 1];
                if (this.isMySelf(h.id))
                    break;
                this._covertMap.delete(h.id);
                t.rankList.pop();
            }
            for (r = 0; r < t.rankList.length; r++)
                t.rankList[r].rank = r + 1;
            if (u) {
                var f = t.rankList.findIndex(function (t) {
                    return n.isMySelf(t.id);
                });
                -1 !== f && (t.joinActInfo.rank = f + 1);
            }
        }
    };
    RankRobotLogic.prototype.autoUpdRbtScore = function (t) {
        if (t.localData.rankGameData) {
            var e = t.localData.rankGameData;
            if (e && e.rankRobotCfg) {
                var o = e.rankRobotCfg, n = this.nowTime - e.lastUpdateTime, a = 1000 * o.intervalThreshold, i = 86400000 * o.timeThreshold, r = t.getLeftTime();
                n > a && 1000 * r > i && this.updRbtScore(e, false, 0);
            }
        }
    };
    RankRobotLogic.prototype.startNewPeriod = function () {
        this.configLoader.startNewPeriod();
    };
    RankRobotLogic.prototype.getRandomRobotName = function (t) {
        return this.configLoader.isLoaded ? this.configLoader.getRandomRobotName(t) : {
            name: "Bot" + Math.random(),
            index: -1
        };
    };
    RankRobotLogic.prototype.getRewardByRank = function (t) {
        if (this.configLoader.isLoaded) {
            var e = this.configLoader.getRewardByRank(t);
            if (e > 0)
                return DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, e);
        }
        return null;
    };
    RankRobotLogic.prototype.getWinStreakRate = function (t) {
        if (t <= 0)
            return 1;
        if (this.configLoader.isLoaded)
            return this._configLoader.getWinStreakRate(t);
        if (0 === this._winStreakStrategies.length)
            return 1;
        var e = Math.min(t - 1, this._winStreakStrategies.length - 1);
        return this._winStreakStrategies[Math.max(0, e)] || 1;
    };
    RankRobotLogic.prototype.getWinStreakRateLevel = function (t) {
        if (0 === this._winStreakStrategies.length || t <= 0)
            return 0;
        var e = Math.min(t - 1, this._winStreakStrategies.length - 1);
        return Math.max(0, e);
    };
    RankRobotLogic.prototype.isMySelf = function (t) {
        return "player" === t;
    };
    __decorate([
        mj.traitEvent("RankRbtLgc_loadConfig")
    ], RankRobotLogic.prototype, "loadConfig", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_initRanks")
    ], RankRobotLogic.prototype, "initRanks", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_initScore")
    ], RankRobotLogic.prototype, "initScore", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_initBotCnt")
    ], RankRobotLogic.prototype, "initBotCnt", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_calcPBase")
    ], RankRobotLogic.prototype, "calcPBase", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_levelPassed")
    ], RankRobotLogic.prototype, "levelPassed", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_sortByScore")
    ], RankRobotLogic.prototype, "sortByScore", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_getTargetIdx")
    ], RankRobotLogic.prototype, "getTargetIdx", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_fstPassScore")
    ], RankRobotLogic.prototype, "fstPassScore", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_getR")
    ], RankRobotLogic.prototype, "getR", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_fix3PtBots")
    ], RankRobotLogic.prototype, "fix3PtBots", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_othPassScore")
    ], RankRobotLogic.prototype, "othPassScore", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_updRbtScore")
    ], RankRobotLogic.prototype, "updRbtScore", null);
    __decorate([
        mj.traitEvent("RankRbtLgc_autoUpdScore")
    ], RankRobotLogic.prototype, "autoUpdRbtScore", null);
    RankRobotLogic = __decorate([
        mj.class("RankRobotLogic")
    ], RankRobotLogic);
    return RankRobotLogic;
}());
exports.default = RankRobotLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rUm9ib3RMb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFrRjtBQUNsRixxREFBZ0Q7QUFDaEQsNkVBQTRFO0FBQzVFLHlFQUF3RTtBQUN4RSxzRUFBaUU7QUFDdEQsUUFBQSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBQSx5QkFBeUIsR0FBRztJQUNyQyxTQUFTLEVBQUUsMkJBQW1CO0lBQzlCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsYUFBYSxFQUFFLEVBQUU7SUFDakIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixjQUFjLEVBQUUsQ0FBQztJQUNqQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQztBQUVGO0lBQUE7UUFDRSxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBd1Z2QixDQUFDO0lBdlZDLHNCQUFJLHdDQUFZO2FBQWhCO1lBQ0UsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFF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QUFDO0lBRUQscUNBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNwQixDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdOLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENB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LEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7cURBV3ZDO0lBK0VEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztxREFLdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7c0RBR3hDO0lBVUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3NEQWN4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzs4Q0FLaEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7b0RBcUJ0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztzREFnQnhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3FEQW1DdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7eURBYXhDO0lBNVRrQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBNFZsQztJQUFELHFCQUFDO0NBNVZELEFBNFZDLElBQUE7a0JBNVZvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJJbmZvTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdXNlci9Vc2VySW5mb01hbmFnZXInO1xuaW1wb3J0IFJhbmtSb2JvdENvbmZpZyBmcm9tICcuL1JhbmtSb2JvdENvbmZpZyc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5leHBvcnQgdmFyIERFRkFVTFRfUk9CT1RfQ09VTlQgPSA0OTtcbmV4cG9ydCB2YXIgREVGQVVMVF9ST0JPVF9MT0dJQ19QQVJBTSA9IHtcbiAgcm9ib3RzTnVtOiBERUZBVUxUX1JPQk9UX0NPVU5ULFxuICBiYXNlTGV2ZWxDb25zdDogNyxcbiAgbWluUG9pbnQ6IDIsXG4gIHJhbmtUaHJlc2hvbGQ6IDEwLFxuICByZXdhcmRMaW1pdDogMy42LFxuICB0aW1lVGhyZXNob2xkOiAwLjYsXG4gIGludGVydmFsVGhyZXNob2xkOiAzNjAwLFxuICBpbml0aWFsQm90c01pbjogNSxcbiAgYm90c0NoYXNpbmdMZXZlbDogNSxcbiAgbG9nQmFzZTogMlxufTtcbkBtai5jbGFzcyhcIlJhbmtSb2JvdExvZ2ljXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rUm9ib3RMb2dpYyB7XG4gIF9jb3ZlcnRNYXAgPSBuZXcgTWFwKCk7XG4gIF93aW5TdHJlYWtTdHJhdGVnaWVzID0gWzEsIDEuNSwgMl07XG4gIF9sYXN0V2luU3RyZWFrQ291bnQgPSAwO1xuICBfY29uZmlnTG9hZGVyID0gbnVsbDtcbiAgZ2V0IGNvbmZpZ0xvYWRlcigpIHtcbiAgICB0aGlzLl9jb25maWdMb2FkZXIgfHwgKHRoaXMuX2NvbmZpZ0xvYWRlciA9IFJhbmtSb2JvdENvbmZpZy5nZXRJbnN0YW5jZSgpKTtcbiAgICB0aGlzLl9jb25maWdMb2FkZXIuaXNMb2FkZWQgfHwgdGhpcy5sb2FkQ29uZmlnKCk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0xvYWRlcjtcbiAgfVxuICBnZXQgbm93VGltZSgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfVxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2NvbmZpZ0xvYWRlciA9IFJhbmtSb2JvdENvbmZpZy5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19sb2FkQ29uZmlnXCIpXG4gIGxvYWRDb25maWcoKSB7XG4gICAgdGhpcy5fY29uZmlnTG9hZGVyLmxvYWRBbGwoKTtcbiAgICBpZiAodGhpcy5fY29uZmlnTG9hZGVyLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl93aW5TdHJlYWtTdHJhdGVnaWVzID0gdGhpcy5fY29uZmlnTG9hZGVyLmdldFdpblN0cmVha1JhdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmFua1JvYm90TG9naWNdIOmFjee9ruWKoOi9veWksei0pVwiKTtcbiAgICB9XG4gIH1cbiAgYWN0aXZlTmV3QWN0aXZpdHkodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRSYW5rcyh0LCBlKTtcbiAgICAgIHRoaXMuaW5pdFNjb3JlKHQpO1xuICAgICAgdGhpcy5zdGFydE5ld1BlcmlvZCgpO1xuICAgICAgdC5yYW5rTGlzdDtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1JhbmtSb2JvdExvZ2ljXSDmv4DmtLvmlrDmtLvliqjlpLHotKU6IFwiICsgKHQubWVzc2FnZSB8fCB0KSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19pbml0UmFua3NcIilcbiAgaW5pdFJhbmtzKHQsIGUpIHtcbiAgICB2YXIgbyA9IHQucmFua1JvYm90Q2ZnO1xuICAgIHRoaXMuX2NvdmVydE1hcC5jbGVhcigpO1xuICAgIGlmICh0KSB7XG4gICAgICB0LmV4cGVjdGF0aW9uQmFzZSA9IHRoaXMuY2FsY1BCYXNlKG8sIGUpO1xuICAgICAgdC5sYXN0VXBkYXRlVGltZSA9IHRoaXMubm93VGltZTtcbiAgICAgIHQuam9pbkFjdEluZm8gPSB7XG4gICAgICAgIHJhbms6IDAsXG4gICAgICAgIHNjb3JlOiAwLFxuICAgICAgICBwYXNzQ291bnQ6IDAsXG4gICAgICAgIHdpblN0cmVha0NvdW50OiAwLFxuICAgICAgICBjdXJyZW50V2luU3RyZWFrUmF0ZTogMSxcbiAgICAgICAgaXNOZWVkUmVmcmVzaFJhbms6IGZhbHNlLFxuICAgICAgICBsZXZlbENvbGxlY3RDb3VudDogMCxcbiAgICAgICAgdG90YWxDb2xsZWN0Q291bnQ6IDBcbiAgICAgIH07XG4gICAgICB0LnJhbmtMaXN0ID0gW107XG4gICAgICBmb3IgKHZhciBuID0gVXNlckluZm9NYW5hZ2VyLmdldEluc3RhbmNlKCksIGkgPSBuZXcgU2V0KCksIHIgPSAwOyByIDwgby5yb2JvdHNOdW07IHIrKykge1xuICAgICAgICB2YXIgcyA9IG4uZ2V0UmFuZG9tQXZhdGFySWQoKSxcbiAgICAgICAgICBjID0gbi5nZXRSYW5kb21GcmFtZUlkKCksXG4gICAgICAgICAgZCA9IHRoaXMuZ2V0UmFuZG9tUm9ib3ROYW1lKGkpLFxuICAgICAgICAgIHAgPSBkLm5hbWUsXG4gICAgICAgICAgdSA9IGQuaW5kZXg7XG4gICAgICAgIGkuYWRkKHUpO1xuICAgICAgICB0LnJhbmtMaXN0LnB1c2goe1xuICAgICAgICAgIGlkOiBcInJcIiArIChyICsgMSksXG4gICAgICAgICAgcmFuazogciArIDEsXG4gICAgICAgICAgbmFtZTogcCxcbiAgICAgICAgICBhdmF0YXJJZDogcyxcbiAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICBhdmF0YXJGcmFtZUlkOiBjXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb3ZlcnRNYXAuc2V0KFwiclwiICsgKHIgKyAxKSwgMCk7XG4gICAgICB9XG4gICAgICB2YXIgaCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgdC5yYW5rTGlzdC5wdXNoKHtcbiAgICAgICAgaWQ6IFwicGxheWVyXCIsXG4gICAgICAgIHJhbms6IG8ucm9ib3RzTnVtICsgMSxcbiAgICAgICAgbmFtZTogaC5nZXRVc2VyTmFtZSgpLFxuICAgICAgICBhdmF0YXJJZDogaC5nZXRBdmF0YXJJZCgpLFxuICAgICAgICBzY29yZTogMCxcbiAgICAgICAgYXZhdGFyRnJhbWVJZDogaC5nZXRGcmFtZUlkKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY292ZXJ0TWFwLnNldChcInBsYXllclwiLCAwKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rUmJ0TGdjX2luaXRTY29yZVwiKVxuICBpbml0U2NvcmUodCkge1xuICAgIGlmICh0ICYmIHQucmFua0xpc3QubGVuZ3RoKSBmb3IgKHZhciBlID0gdC5yYW5rUm9ib3RDZmcsIG8gPSB0aGlzLmluaXRCb3RDbnQoZS5yb2JvdHNOdW0sIGUuaW5pdGlhbEJvdHNNaW4pLCBuID0gMDsgbiA8IGUucm9ib3RzTnVtOyBuKyspIHtcbiAgICAgIHZhciBhID0gbiA8IG8gPyBlLm1pblBvaW50IDogMCxcbiAgICAgICAgaSA9IG4gPCBvID8gZS5taW5Qb2ludCA6IDA7XG4gICAgICB0LnJhbmtMaXN0W25dLnNjb3JlID0gYTtcbiAgICAgIHQucmFua0xpc3Rbbl0ucmFuayA9IG4gKyAxO1xuICAgICAgdGhpcy5fY292ZXJ0TWFwLnNldCh0LnJhbmtMaXN0W25dLmlkLCBpKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rUmJ0TGdjX2luaXRCb3RDbnRcIilcbiAgaW5pdEJvdENudCh0LCBlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0IC0gZSkpICsgZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtSYnRMZ2NfY2FsY1BCYXNlXCIpXG4gIGNhbGNQQmFzZSh0LCBlKSB7XG4gICAgcmV0dXJuICF0IHx8ICFlIHx8IGUgPD0gMCA/IDAgOiAyICogKE1hdGguZmxvb3IodC5iYXNlTGV2ZWxDb25zdCAtIE1hdGgubG9nMTAoZSkpICsgdC5taW5Qb2ludCAvIDIpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19sZXZlbFBhc3NlZFwiKVxuICBsZXZlbFBhc3NlZCh0LCBlKSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuam9pbkFjdEluZm8ud2luU3RyZWFrQ291bnQrKztcbiAgICAgIHQuam9pbkFjdEluZm8udG90YWxDb2xsZWN0Q291bnQgKz0gZTtcbiAgICAgIHZhciBvID0gdGhpcy5nZXRXaW5TdHJlYWtSYXRlKHQuam9pbkFjdEluZm8ud2luU3RyZWFrQ291bnQpO1xuICAgICAgdC5qb2luQWN0SW5mby5jdXJyZW50V2luU3RyZWFrUmF0ZSA9IG87XG4gICAgICB2YXIgbiA9IE1hdGguZmxvb3IoZSAqIG8pLFxuICAgICAgICBhID0gMCA9PT0gdC5qb2luQWN0SW5mby5wYXNzQ291bnQ7XG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKHQsIG4sIGEpO1xuICAgIH1cbiAgfVxuICByZXNldFdpblN0cmVha0NvdW50KHQpIHtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5fbGFzdFdpblN0cmVha0NvdW50ID0gMDtcbiAgICAgIHQuam9pbkFjdEluZm8ud2luU3RyZWFrQ291bnQ7XG4gICAgICB0LmpvaW5BY3RJbmZvLndpblN0cmVha0NvdW50ID0gMDtcbiAgICAgIHQuam9pbkFjdEluZm8uY3VycmVudFdpblN0cmVha1JhdGUgPSAxO1xuICAgIH1cbiAgfVxuICByZXN1bWVMYXN0V2luU3RyZWFrKHQpIHtcbiAgICBpZiAodCkge1xuICAgICAgdC5qb2luQWN0SW5mby53aW5TdHJlYWtDb3VudCA9IHRoaXMuX2xhc3RXaW5TdHJlYWtDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sYXN0V2luU3RyZWFrQ291bnQgPj0gMykge1xuICAgICAgICB0LmpvaW5BY3RJbmZvLmN1cnJlbnRXaW5TdHJlYWtSYXRlID0gdGhpcy5fd2luU3RyZWFrU3RyYXRlZ2llc1syXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgyID09PSB0aGlzLl9sYXN0V2luU3RyZWFrQ291bnQpIHtcbiAgICAgICAgICB0LmpvaW5BY3RJbmZvLmN1cnJlbnRXaW5TdHJlYWtSYXRlID0gdGhpcy5fd2luU3RyZWFrU3RyYXRlZ2llc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0LmpvaW5BY3RJbmZvLmN1cnJlbnRXaW5TdHJlYWtSYXRlID0gdGhpcy5fd2luU3RyZWFrU3RyYXRlZ2llc1swXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVTY29yZSh0LCBlLCBvKSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuam9pbkFjdEluZm8ucGFzc0NvdW50Kys7XG4gICAgICB0LmpvaW5BY3RJbmZvLnNjb3JlICs9IGU7XG4gICAgICB0LmpvaW5BY3RJbmZvLmlzTmVlZFJlZnJlc2hSYW5rID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkUmJ0U2NvcmUodCwgbywgZSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVNjb3JlVG9SYW5rTGlzdCh0KSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5yYW5rTGlzdC5sZW5ndGg7IGUrKykge1xuICAgICAgICB2YXIgbyA9IHQucmFua0xpc3RbZV07XG4gICAgICAgIGlmICh0aGlzLmlzTXlTZWxmKG8uaWQpKSB7XG4gICAgICAgICAgby5zY29yZSA9IHQuam9pbkFjdEluZm8uc2NvcmU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc29ydFJhbmtMaXN0KHQpO1xuICAgICAgdGhpcy51cGRhdGVSYW5rQWZ0ZXJTb3J0KHQpO1xuICAgICAgdC5qb2luQWN0SW5mby5pc05lZWRSZWZyZXNoUmFuayA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICB1cGRhdGVSYW5rQWZ0ZXJTb3J0KHQpIHtcbiAgICBpZiAobnVsbCAhPSB0KSBmb3IgKHZhciBlID0gMDsgZSA8IHQucmFua0xpc3QubGVuZ3RoOyBlKyspIHtcbiAgICAgIHQucmFua0xpc3RbZV0ucmFuayA9IGUgKyAxO1xuICAgICAgaWYgKHRoaXMuaXNNeVNlbGYodC5yYW5rTGlzdFtlXS5pZCkpIHtcbiAgICAgICAgdC5qb2luQWN0SW5mby5yYW5rID0gZSArIDE7XG4gICAgICAgIHQucmFua0xpc3RbZV0ubmFtZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFVzZXJOYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNvcnRSYW5rTGlzdCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0ICYmIHQucmFua0xpc3QpIHtcbiAgICAgIHRoaXMuc29ydEJ5U2NvcmUodCk7XG4gICAgICB2YXIgbyA9IHQucmFua0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlLmlzTXlTZWxmKHQuaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoLTEgIT09IG8pIHtcbiAgICAgICAgdmFyIG4gPSB0LnJhbmtMaXN0W29dLnNjb3JlLFxuICAgICAgICAgIGEgPSB0aGlzLmdldFNhbWVTY29yZVJhbmdlKG8sIG4sIHQpLFxuICAgICAgICAgIGkgPSBhLnNhbWVTY29yZVN0YXJ0LFxuICAgICAgICAgIHIgPSBhLnNhbWVTY29yZUVuZDtcbiAgICAgICAgaSAhPT0gciAmJiB0aGlzLnVwZGF0ZVJhbmtGb3JTYW1lU2NvcmUodCwgbywgbiwgaSwgcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZVJhbmtGb3JTYW1lU2NvcmUodCwgZSwgbywgbiwgYSkge1xuICAgIHZhciBpID0gbiArIDEsXG4gICAgICByID0gdGhpcy5nZXRUYXJnZXRJZHgoaSwgbywgbiwgYSk7XG4gICAgaWYgKGUgIT09IHIpIHtcbiAgICAgIHZhciBzID0gdC5yYW5rTGlzdC5zcGxpY2UoZSwgMSlbMF07XG4gICAgICB0LnJhbmtMaXN0LnNwbGljZShyLCAwLCBzKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rUmJ0TGdjX3NvcnRCeVNjb3JlXCIpXG4gIHNvcnRCeVNjb3JlKHQpIHtcbiAgICB0ICYmIHQucmFua0xpc3QgJiYgdC5yYW5rTGlzdC5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICByZXR1cm4gZS5zY29yZSAtIHQuc2NvcmU7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rUmJ0TGdjX2dldFRhcmdldElkeFwiKVxuICBnZXRUYXJnZXRJZHgodCwgZSwgbywgbikge1xuICAgIHJldHVybiB0IDwgNiB8fCAwID09IGUgPyBvIDogbjtcbiAgfVxuICBnZXRTYW1lU2NvcmVSYW5nZSh0LCBlLCBvKSB7XG4gICAgZm9yICh2YXIgbiA9IHQsIGEgPSB0OyBuID4gMCAmJiBvLnJhbmtMaXN0W24gLSAxXS5zY29yZSA9PT0gZTspIG4tLTtcbiAgICBmb3IgKDsgYSA8IG8ucmFua0xpc3QubGVuZ3RoIC0gMSAmJiBvLnJhbmtMaXN0W2EgKyAxXS5zY29yZSA9PT0gZTspIGErKztcbiAgICByZXR1cm4ge1xuICAgICAgc2FtZVNjb3JlU3RhcnQ6IG4sXG4gICAgICBzYW1lU2NvcmVFbmQ6IGFcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19mc3RQYXNzU2NvcmVcIilcbiAgZnN0UGFzc1Njb3JlKHQsIGUsIG8gPSAwKSB7XG4gICAgdmFyIG4gPSB0LnJhbmtSb2JvdENmZyxcbiAgICAgIGEgPSAyICogKHQuZXhwZWN0YXRpb25CYXNlIC8gdGhpcy5nZXRSKHQucmFua1JvYm90Q2ZnLnJvYm90c051bSwgdCwgZSkgKyBuLm1pblBvaW50IC8gMiksXG4gICAgICBpID0gTWF0aC5mbG9vcihhKTtcbiAgICBpZiAoZSA8PSA2ICYmIG8gPiAwKSB7XG4gICAgICB2YXIgciA9IE1hdGgubWF4KG4ubWluUG9pbnQsIG8gLSAyKSxcbiAgICAgICAgcyA9IG8gKyAyO1xuICAgICAgYSA9IChpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHMgLSByICsgMSkpICsgcikgKyBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc2NvcmU6IGksXG4gICAgICBjb3ZlcnQ6IGFcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19nZXRSXCIpXG4gIGdldFIodCwgZSwgbykge1xuICAgIHZhciBuID0gZS5yYW5rUm9ib3RDZmcsXG4gICAgICBhID0gZS5leHBlY3RhdGlvbkJhc2U7XG4gICAgcmV0dXJuIG8gPD0gbi5yYW5rVGhyZXNob2xkICYmIG8gPj0gMSA/IE1hdGgucmFuZG9tKCkgKiAoYSAvIG4ucmV3YXJkTGltaXQgLSAxKSArIDEgOiBvIDw9ICh0IC0gbi5yYW5rVGhyZXNob2xkKSAvIDIgKyBuLnJhbmtUaHJlc2hvbGQgJiYgbyA+PSAxMSA/IE1hdGgucmFuZG9tKCkgKiAoYSAtIGEgLyBuLnJld2FyZExpbWl0KSArIGEgLyBuLnJld2FyZExpbWl0IDogTWF0aC5yYW5kb20oKSAqICh0IC0gYSkgKyBhO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19maXgzUHRCb3RzXCIpXG4gIGZpeDNQdEJvdHModCkge1xuICAgIGlmICh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdC5yYW5rUm9ib3RDZmcsIG8gPSBbXSwgbiA9IHQuam9pbkFjdEluZm8uc2NvcmUsIGEgPSAwOyBhIDwgdC5yYW5rTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICB2YXIgaSA9IHQucmFua0xpc3RbYV07XG4gICAgICAgIDMgPT09IGkuc2NvcmUgJiYgaS5zY29yZSAhPT0gbiAmJiBvLnB1c2goYSk7XG4gICAgICB9XG4gICAgICBpZiAoMCAhPT0gby5sZW5ndGgpIHtcbiAgICAgICAgby5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByID0gTWF0aC5jZWlsKDAuNSAqIG8ubGVuZ3RoKTtcbiAgICAgICAgZm9yIChhID0gMDsgYSA8IG8ubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICB2YXIgcyxcbiAgICAgICAgICAgIGwgPSBvW2FdO1xuICAgICAgICAgIHMgPSBhIDwgciA/IGUuaW5pdGlhbEJvdHNNaW4gOiBNYXRoLmZsb29yKDExICogTWF0aC5yYW5kb20oKSkgKyA1O1xuICAgICAgICAgIHQucmFua0xpc3RbbF0uc2NvcmUgPSBzO1xuICAgICAgICAgIHRoaXMuX2NvdmVydE1hcC5zZXQodC5yYW5rTGlzdFtsXS5pZCwgcyArIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1JidExnY19vdGhQYXNzU2NvcmVcIilcbiAgb3RoUGFzc1Njb3JlKHQsIGUsIG8sIG4sIGEsIGkpIHtcbiAgICB2YXIgciA9IHQucmFua1JvYm90Q2ZnLFxuICAgICAgcyA9IDAsXG4gICAgICBsID0gMCxcbiAgICAgIGMgPSBvO1xuICAgIGwgPSBlID4gdC5qb2luQWN0SW5mby5yYW5rICYmIHQuam9pbkFjdEluZm8ucGFzc0NvdW50IDwgci5iYXNlTGV2ZWxDb25zdCArIHIuYm90c0NoYXNpbmdMZXZlbCA/ICgwID09PSBhID8gdC5qb2luQWN0SW5mby5zY29yZSA6IGEpIC0gbiArIGkgOiBNYXRoLmFicyh0LmpvaW5BY3RJbmZvLnJhbmsgLSBlKSAvICh0LmpvaW5BY3RJbmZvLnBhc3NDb3VudCArIDUwIC8gci5taW5Qb2ludCk7XG4gICAgYyArPSBNYXRoLnJhbmRvbSgpICogbDtcbiAgICBpZiAoMyA9PT0gKHMgPSBNYXRoLmZsb29yKGMpKSB8fCBzIDwgMikge1xuICAgICAgdmFyIGQgPSBbMiwgNCwgNSwgNiwgNywgOF07XG4gICAgICBjID0gKHMgPSBkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGQubGVuZ3RoKV0pICsgTWF0aC5yYW5kb20oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3JlOiBzLFxuICAgICAgY292ZXJ0OiBjXG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtSYnRMZ2NfdXBkUmJ0U2NvcmVcIilcbiAgdXBkUmJ0U2NvcmUodCwgZSwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAodCkge1xuICAgICAgZm9yICh2YXIgYSA9IHQucmFua0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIG4uaXNNeVNlbGYodC5pZCk7XG4gICAgICAgIH0pLCBpID0gdC5qb2luQWN0SW5mby5zY29yZSwgciA9IHQucmFua0xpc3QubGVuZ3RoIC0gMTsgciA+PSAwOyByLS0pIGlmIChyICE9PSBhKSB7XG4gICAgICAgIHZhciBzLFxuICAgICAgICAgIGwgPSB0LnJhbmtMaXN0W3JdLnJhbmssXG4gICAgICAgICAgYyA9IHQucmFua0xpc3Rbcl0sXG4gICAgICAgICAgZCA9IHRoaXMuX2NvdmVydE1hcC5nZXQoYy5pZCkgfHwgYy5zY29yZSxcbiAgICAgICAgICBwID0gciA+IDAgJiYgciAtIDEgIT09IGEgPyB0LnJhbmtMaXN0W3IgLSAxXS5zY29yZSA6IHIgLSAxID09PSBhICYmIHIgPiAxID8gdC5yYW5rTGlzdFtyIC0gMl0uc2NvcmUgOiAwO1xuICAgICAgICBzID0gZSA/IHRoaXMuZnN0UGFzc1Njb3JlKHQsIGwsIGkpIDogdGhpcy5vdGhQYXNzU2NvcmUodCwgbCwgZCwgYy5zY29yZSwgcCwgbyk7XG4gICAgICAgIGMuc2NvcmUgPSBzLnNjb3JlO1xuICAgICAgICB0aGlzLl9jb3ZlcnRNYXAuc2V0KGMuaWQsIHMuY292ZXJ0KTtcbiAgICAgIH1cbiAgICAgIGUgJiYgdGhpcy5maXgzUHRCb3RzKHQpO1xuICAgICAgdGhpcy5zb3J0UmFua0xpc3QodCk7XG4gICAgICB0Lmxhc3RVcGRhdGVUaW1lID0gdGhpcy5ub3dUaW1lO1xuICAgICAgZm9yICh2YXIgdSA9IHQucmFua0xpc3QuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbi5pc015U2VsZih0LmlkKTtcbiAgICAgIH0pOyB0LnJhbmtMaXN0Lmxlbmd0aCA+IHQucmFua1JvYm90Q2ZnLnJvYm90c051bSArIDE7KSB7XG4gICAgICAgIHZhciBoID0gdC5yYW5rTGlzdFt0LnJhbmtMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5pc015U2VsZihoLmlkKSkgYnJlYWs7XG4gICAgICAgIHRoaXMuX2NvdmVydE1hcC5kZWxldGUoaC5pZCk7XG4gICAgICAgIHQucmFua0xpc3QucG9wKCk7XG4gICAgICB9XG4gICAgICBmb3IgKHIgPSAwOyByIDwgdC5yYW5rTGlzdC5sZW5ndGg7IHIrKykgdC5yYW5rTGlzdFtyXS5yYW5rID0gciArIDE7XG4gICAgICBpZiAodSkge1xuICAgICAgICB2YXIgZiA9IHQucmFua0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIG4uaXNNeVNlbGYodC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAtMSAhPT0gZiAmJiAodC5qb2luQWN0SW5mby5yYW5rID0gZiArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtSYnRMZ2NfYXV0b1VwZFNjb3JlXCIpXG4gIGF1dG9VcGRSYnRTY29yZSh0KSB7XG4gICAgaWYgKHQubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkge1xuICAgICAgdmFyIGUgPSB0LmxvY2FsRGF0YS5yYW5rR2FtZURhdGE7XG4gICAgICBpZiAoZSAmJiBlLnJhbmtSb2JvdENmZykge1xuICAgICAgICB2YXIgbyA9IGUucmFua1JvYm90Q2ZnLFxuICAgICAgICAgIG4gPSB0aGlzLm5vd1RpbWUgLSBlLmxhc3RVcGRhdGVUaW1lLFxuICAgICAgICAgIGEgPSAxMDAwICogby5pbnRlcnZhbFRocmVzaG9sZCxcbiAgICAgICAgICBpID0gODY0MDAwMDAgKiBvLnRpbWVUaHJlc2hvbGQsXG4gICAgICAgICAgciA9IHQuZ2V0TGVmdFRpbWUoKTtcbiAgICAgICAgbiA+IGEgJiYgMTAwMCAqIHIgPiBpICYmIHRoaXMudXBkUmJ0U2NvcmUoZSwgZmFsc2UsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGFydE5ld1BlcmlvZCgpIHtcbiAgICB0aGlzLmNvbmZpZ0xvYWRlci5zdGFydE5ld1BlcmlvZCgpO1xuICB9XG4gIGdldFJhbmRvbVJvYm90TmFtZSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnTG9hZGVyLmlzTG9hZGVkID8gdGhpcy5jb25maWdMb2FkZXIuZ2V0UmFuZG9tUm9ib3ROYW1lKHQpIDoge1xuICAgICAgbmFtZTogXCJCb3RcIiArIE1hdGgucmFuZG9tKCksXG4gICAgICBpbmRleDogLTFcbiAgICB9O1xuICB9XG4gIGdldFJld2FyZEJ5UmFuayh0KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnTG9hZGVyLmlzTG9hZGVkKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uZmlnTG9hZGVyLmdldFJld2FyZEJ5UmFuayh0KTtcbiAgICAgIGlmIChlID4gMCkgcmV0dXJuIERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0V2luU3RyZWFrUmF0ZSh0KSB7XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIDE7XG4gICAgaWYgKHRoaXMuY29uZmlnTG9hZGVyLmlzTG9hZGVkKSByZXR1cm4gdGhpcy5fY29uZmlnTG9hZGVyLmdldFdpblN0cmVha1JhdGUodCk7XG4gICAgaWYgKDAgPT09IHRoaXMuX3dpblN0cmVha1N0cmF0ZWdpZXMubGVuZ3RoKSByZXR1cm4gMTtcbiAgICB2YXIgZSA9IE1hdGgubWluKHQgLSAxLCB0aGlzLl93aW5TdHJlYWtTdHJhdGVnaWVzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLl93aW5TdHJlYWtTdHJhdGVnaWVzW01hdGgubWF4KDAsIGUpXSB8fCAxO1xuICB9XG4gIGdldFdpblN0cmVha1JhdGVMZXZlbCh0KSB7XG4gICAgaWYgKDAgPT09IHRoaXMuX3dpblN0cmVha1N0cmF0ZWdpZXMubGVuZ3RoIHx8IHQgPD0gMCkgcmV0dXJuIDA7XG4gICAgdmFyIGUgPSBNYXRoLm1pbih0IC0gMSwgdGhpcy5fd2luU3RyZWFrU3RyYXRlZ2llcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgZSk7XG4gIH1cbiAgaXNNeVNlbGYodCkge1xuICAgIHJldHVybiBcInBsYXllclwiID09PSB0O1xuICB9XG59Il19