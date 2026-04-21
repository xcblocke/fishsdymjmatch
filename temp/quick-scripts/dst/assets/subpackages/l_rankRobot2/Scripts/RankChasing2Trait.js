
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankRobot2/Scripts/RankChasing2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42b89zF+BJJFJxHDyODKtrv', 'RankChasing2Trait');
// subpackages/l_rankRobot2/Scripts/RankChasing2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankChasing2Trait = /** @class */ (function (_super) {
    __extends(RankChasing2Trait, _super);
    function RankChasing2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankChasing2Trait_1 = RankChasing2Trait;
    RankChasing2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        try {
            this.initLocalDataDefaults();
        }
        catch (t) {
            console.error("[" + RankChasing2Trait_1.traitKey + "] 加载失败: " + ((null == t ? void 0 : t.message) || t));
        }
    };
    RankChasing2Trait.prototype.getBaseConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.baseConfig) || {
            botsNum: 50,
            gradCoef: 0.018
        };
    };
    RankChasing2Trait.prototype.getActiveConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.activeConfig) || {
            expGamesDefault: 11,
            activeDaysCount: 2,
            expGamesActiveBase: 1.8,
            expGamesActiveOffset: 6.5
        };
    };
    RankChasing2Trait.prototype.getJumpConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.jumpConfig) || {
            jumpCoef: 0.4,
            jumpOffsetX: 1,
            jumpOffsetY: 0.2
        };
    };
    RankChasing2Trait.prototype.getPointsConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.pointsConfig) || {
            initPoints: {
                0: 4,
                2: 3,
                4: 3
            },
            addPointsTop: {
                2: 3,
                3: 2,
                4: 5,
                6: 3,
                8: 1
            },
            stagPoints: {
                0: 1,
                2: 1
            }
        };
    };
    RankChasing2Trait.prototype.getChasingConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.chasingConfig) || {
            botChasingCount: 5,
            botChasingInterval: 4,
            chasingBotsMaxPoint: 6
        };
    };
    RankChasing2Trait.prototype.getTimeConfig = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.timeConfig) || {
            stagTimeInterval: 3600,
            stagTimeControl: 0.6,
            periodTime: 86400
        };
    };
    RankChasing2Trait.prototype.initLocalDataDefaults = function () {
        this.localData.activityStartTime || (this.localData.activityStartTime = 0);
        this.localData.botPointMaxMap || (this.localData.botPointMaxMap = {});
        this.localData.clearLevels || (this.localData.clearLevels = 0);
        this.localData.timeRefresh || (this.localData.timeRefresh = 0);
        this.localData.cachedExpGames || (this.localData.cachedExpGames = 0);
    };
    RankChasing2Trait.prototype.onRankRbtLgc_levelPassed = function (t, a) {
        this.localData.timeRefresh = Date.now();
        this.localData.clearLevels = (this.localData.clearLevels || 0) + 1;
        a();
    };
    RankChasing2Trait.prototype.onRankRbtLgc_initScore = function (t, a) {
        var r, o, i, s;
        try {
            var l = t.args[0], f = t.ins;
            if (!(null == l ? void 0 : l.rankList)) {
                a();
                return;
            }
            var u = this.getPointsConfig(), h = l.rankList;
            this.localData.activityStartTime = l.actStartTime || 0;
            this.localData.botPointMaxMap = {};
            this.localData.clearLevels = 0;
            this.localData.timeRefresh = 0;
            try {
                for (var p = __values(h), d = p.next(); !d.done; d = p.next()) {
                    var g = d.value;
                    f.isMySelf(g.id) || (g.score = this.weightedRandom(u.initPoints));
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    d && !d.done && (o = p.return) && o.call(p);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            f.sortRankList(l);
            f.updateRankAfterSort(l);
            this.localData.botPointMaxMap = {};
            try {
                for (var v = __values(h), y = v.next(); !y.done; y = v.next()) {
                    g = y.value;
                    f.isMySelf(g.id) || (this.localData.botPointMaxMap[g.id] = this.calculateBotPointMax(g.rank));
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    y && !y.done && (s = v.return) && s.call(v);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            this.localData.cachedExpGames = this.calculateExpGames();
            this.localData.botPointMaxMap = this.localData.botPointMaxMap;
            a({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        catch (t) {
            console.error("[" + RankChasing2Trait_1.traitKey + "] 初始化积分失败: " + ((null == t ? void 0 : t.message) || t));
            a();
        }
    };
    RankChasing2Trait.prototype.onRankRbtLgc_updRbtScore = function (t, a) {
        try {
            var r = t.args[0], o = t.args[1], i = t.args[2] || 0, n = t.ins;
            if (!(null == r ? void 0 : r.rankList) || 0 == r.rankList.length) {
                a();
                return;
            }
            if (o) {
                this.handleFirstPass(n, r, i);
            }
            else {
                this.handleSubsequentPass(n, r, i);
            }
            a({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        catch (t) {
            console.error("[" + RankChasing2Trait_1.traitKey + "] 通关处理失败: " + ((null == t ? void 0 : t.message) || t));
            a();
        }
    };
    RankChasing2Trait.prototype.onRankRbtLgc_autoUpdScore = function (t, a) {
        var r, o;
        try {
            var i = t.args[0], n = t.ins, s = null === (r = null == i ? void 0 : i.localData) || void 0 === r ? void 0 : r.rankGameData, l = null == s ? void 0 : s.rankList;
            if (!l || 0 == l.length) {
                a();
                return;
            }
            var f = this.getTimeConfig(), u = Date.now(), h = this.localData.timeRefresh || 0, p = 1000 * ((null === (o = i.getLeftTime) || void 0 === o ? void 0 : o.call(i)) || 0), d = h > 0 && u - h > 1000 * f.stagTimeInterval, g = p > f.stagTimeControl * f.periodTime * 1000;
            if (d && g) {
                this.handleStagScore(n, l, 0, false);
                this.localData.timeRefresh = Date.now();
                n.sortRankList(s);
                n.updateRankAfterSort(s);
            }
            a({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        catch (t) {
            console.error("[" + RankChasing2Trait_1.traitKey + "] 自动更新失败: " + ((null == t ? void 0 : t.message) || t));
            a();
        }
    };
    RankChasing2Trait.prototype.handleFirstPass = function (t, a) {
        var e, r, o = this.getJumpConfig(), i = a.rankList, s = this.localData.botPointMaxMap || {};
        try {
            for (var l = __values(i), c = l.next(); !c.done; c = l.next()) {
                var f = c.value;
                if (!t.isMySelf(f.id)) {
                    var u = s[f.id] || this.calculateBotPointMax(f.rank), h = (f.score, Math.floor(u * (o.jumpCoef / (f.rank + o.jumpOffsetX) + o.jumpOffsetY)));
                    h < 2 && (h = 2);
                    3 === h && h++;
                    f.score += h;
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (r = l.return) && r.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        t.sortRankList(a);
        t.updateRankAfterSort(a);
    };
    RankChasing2Trait.prototype.handleSubsequentPass = function (t, a, e) {
        var r = a.rankList, o = this.getActiveConfig(), i = this.getBaseConfig(), n = this.localData.cachedExpGames || o.expGamesDefault, s = this.localData.clearLevels || 0, l = r.find(function (a) {
            return t.isMySelf(a.id);
        }), c = (null == l ? void 0 : l.rank) || i.botsNum + 1, f = (null == l ? void 0 : l.score) || 0, u = n - s;
        if (u > 0) {
            var h = Math.floor(c / u);
            this.handleNormalChasing(t, r, c, f, h, e);
        }
        else
            this.handleAdvancedChasing(t, r, c, f, e, n, s);
        t.sortRankList(a);
        t.updateRankAfterSort(a);
    };
    RankChasing2Trait.prototype.handleNormalChasing = function (t, a, e, r, o, i) {
        var s, l, c = this.getChasingConfig(), f = this.getPointsConfig(), u = this.localData.botPointMaxMap || {};
        try {
            for (var h = __values(a), p = h.next(); !p.done; p = h.next()) {
                var d = p.value;
                if (!t.isMySelf(d.id)) {
                    d.score;
                    if (d.rank > e) {
                        var g = r - d.score;
                        (y = Math.floor(Math.random() * (g + i + 1))) < 2 && (y = 0);
                        y > c.chasingBotsMaxPoint && (y = c.chasingBotsMaxPoint - 2);
                        d.score += y;
                    }
                    else if (d.rank >= e - o) {
                        g = d.score - r;
                        (y = Math.floor(Math.random() * (g + 1))) < 2 && (y = 0);
                        d.score += y;
                    }
                    else {
                        var v = u[d.id] || 0;
                        if (d.score < v) {
                            var y = this.weightedRandom(f.addPointsTop);
                            d.score += y;
                        }
                    }
                }
            }
        }
        catch (t) {
            s = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (l = h.return) && l.call(h);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
    };
    RankChasing2Trait.prototype.handleAdvancedChasing = function (t, a, e, r, o, i, n) {
        var s = this.getChasingConfig(), l = i - n, c = Math.floor(-l / (s.botChasingCount + s.botChasingInterval));
        if (n < (s.botChasingCount + s.botChasingInterval) * c + i + s.botChasingCount) {
            var f = Math.floor(e / Math.max(1, -l));
            this.handleNormalChasing(t, a, e, r, f, o);
        }
        else
            this.handleStagScore(t, a, r, true);
    };
    RankChasing2Trait.prototype.handleStagScore = function (t, a, e, r) {
        var o, i, s = this.getPointsConfig();
        try {
            for (var l = __values(a), c = l.next(); !c.done; c = l.next()) {
                var f = c.value;
                if (!t.isMySelf(f.id)) {
                    var u = this.weightedRandom(s.stagPoints);
                    r && f.score + u > e && (u = 0);
                    f.score += u;
                }
            }
        }
        catch (t) {
            o = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (i = l.return) && i.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    RankChasing2Trait.prototype.getRankRecordLevelTrait = function () {
        var t = mj.getClassByName("RankRecordLevelTrait");
        return t ? t.getInstance() : null;
    };
    RankChasing2Trait.prototype.calculateExpGames = function () {
        var t = this.getActiveConfig(), a = this.getPastDaysPassCount(t.activeDaysCount), e = this.getActiveDays(t.activeDaysCount);
        if (e < 1)
            return t.expGamesDefault;
        var r = a / e;
        return Math.floor(Math.log(r) / Math.log(t.expGamesActiveBase) + t.expGamesActiveOffset) + 1;
    };
    RankChasing2Trait.prototype.getPastDaysPassCount = function (t) {
        var a, e = this.getRankRecordLevelTrait();
        if (!e)
            return 1;
        var r = (null === (a = e.getDailyPassCounts) || void 0 === a ? void 0 : a.call(e)) || [], o = e.getLastUpdateZeroTimeMS(), i = r.length;
        if (0 === i || !o)
            return 1;
        for (var n = 0, s = o === new Date().setHours(0, 0, 0, 0) ? i - 2 : i - 1, l = 0; s >= 0 && l < t; s--, l++)
            n += r[s];
        return Math.max(1, n);
    };
    RankChasing2Trait.prototype.getActiveDays = function (t) {
        var a, e = this.getRankRecordLevelTrait();
        if (!e)
            return 0;
        var r = (null === (a = e.getDailyPassCounts) || void 0 === a ? void 0 : a.call(e)) || [], o = e.getLastUpdateZeroTimeMS(), i = r.length;
        if (0 === i || !o)
            return 0;
        for (var n = o === new Date().setHours(0, 0, 0, 0) ? i - 2 : i - 1, s = Math.max(0, n - t + 1), l = 0, c = n; c >= s; c--)
            r[c] > 0 && l++;
        return l;
    };
    RankChasing2Trait.prototype.calculateBotPointMax = function (t) {
        var a = this.getBaseConfig();
        return Math.floor(a.gradCoef * Math.pow(a.botsNum - t, 2));
    };
    RankChasing2Trait.prototype.weightedRandom = function (t) {
        var a, e, r = Object.entries(t), o = r.reduce(function (t, a) {
            return t + __read(a, 2)[1];
        }, 0), i = Math.random() * o;
        try {
            for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
                var f = __read(c.value, 2), u = f[0];
                if ((i -= f[1]) <= 0)
                    return Number(u);
            }
        }
        catch (t) {
            a = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (e = l.return) && e.call(l);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return Number(r[0][0]);
    };
    var RankChasing2Trait_1;
    RankChasing2Trait.traitKey = "RankChasing2";
    __decorate([
        mj.traitEvent("RkChasing2_baseCfg")
    ], RankChasing2Trait.prototype, "getBaseConfig", null);
    __decorate([
        mj.traitEvent("RkChasing2_activeCfg")
    ], RankChasing2Trait.prototype, "getActiveConfig", null);
    __decorate([
        mj.traitEvent("RkChasing2_jumpCfg")
    ], RankChasing2Trait.prototype, "getJumpConfig", null);
    __decorate([
        mj.traitEvent("RkChasing2_pointsCfg")
    ], RankChasing2Trait.prototype, "getPointsConfig", null);
    __decorate([
        mj.traitEvent("RkChasing2_chasingCfg")
    ], RankChasing2Trait.prototype, "getChasingConfig", null);
    __decorate([
        mj.traitEvent("RkChasing2_timeCfg")
    ], RankChasing2Trait.prototype, "getTimeConfig", null);
    RankChasing2Trait = RankChasing2Trait_1 = __decorate([
        mj.trait,
        mj.class("RankChasing2Trait")
    ], RankChasing2Trait);
    return RankChasing2Trait;
}(Trait_1.default));
exports.default = RankChasing2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtSb2JvdDIvU2NyaXB0cy9SYW5rQ2hhc2luZzJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUErQyxxQ0FBSztJQUFwRDs7SUE0WUEsQ0FBQzswQkE1WW9CLGlCQUFpQjtJQUVwQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLG1CQUFpQixDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RztJQUNILENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDakYsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FB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b0JBQW9CLENBQUM7MERBT25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzREQVNyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzswREFRbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NERBcUJyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs2REFRdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7MERBUW5DO0lBNUVrQixpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBNFlyQztJQUFELHdCQUFDO0NBNVlELEFBNFlDLENBNVk4QyxlQUFLLEdBNFluRDtrQkE1WW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmtDaGFzaW5nMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQ2hhc2luZzJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rQ2hhc2luZzJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRMb2NhbERhdGFEZWZhdWx0cygpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rQ2hhc2luZzJUcmFpdC50cmFpdEtleSArIFwiXSDliqDovb3lpLHotKU6IFwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IHQpKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0NoYXNpbmcyX2Jhc2VDZmdcIilcbiAgZ2V0QmFzZUNvbmZpZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmJhc2VDb25maWcpIHx8IHtcbiAgICAgIGJvdHNOdW06IDUwLFxuICAgICAgZ3JhZENvZWY6IDAuMDE4XG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJrQ2hhc2luZzJfYWN0aXZlQ2ZnXCIpXG4gIGdldEFjdGl2ZUNvbmZpZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFjdGl2ZUNvbmZpZykgfHwge1xuICAgICAgZXhwR2FtZXNEZWZhdWx0OiAxMSxcbiAgICAgIGFjdGl2ZURheXNDb3VudDogMixcbiAgICAgIGV4cEdhbWVzQWN0aXZlQmFzZTogMS44LFxuICAgICAgZXhwR2FtZXNBY3RpdmVPZmZzZXQ6IDYuNVxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0NoYXNpbmcyX2p1bXBDZmdcIilcbiAgZ2V0SnVtcENvbmZpZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lmp1bXBDb25maWcpIHx8IHtcbiAgICAgIGp1bXBDb2VmOiAwLjQsXG4gICAgICBqdW1wT2Zmc2V0WDogMSxcbiAgICAgIGp1bXBPZmZzZXRZOiAwLjJcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmtDaGFzaW5nMl9wb2ludHNDZmdcIilcbiAgZ2V0UG9pbnRzQ29uZmlnKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucG9pbnRzQ29uZmlnKSB8fCB7XG4gICAgICBpbml0UG9pbnRzOiB7XG4gICAgICAgIDA6IDQsXG4gICAgICAgIDI6IDMsXG4gICAgICAgIDQ6IDNcbiAgICAgIH0sXG4gICAgICBhZGRQb2ludHNUb3A6IHtcbiAgICAgICAgMjogMyxcbiAgICAgICAgMzogMixcbiAgICAgICAgNDogNSxcbiAgICAgICAgNjogMyxcbiAgICAgICAgODogMVxuICAgICAgfSxcbiAgICAgIHN0YWdQb2ludHM6IHtcbiAgICAgICAgMDogMSxcbiAgICAgICAgMjogMVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0NoYXNpbmcyX2NoYXNpbmdDZmdcIilcbiAgZ2V0Q2hhc2luZ0NvbmZpZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNoYXNpbmdDb25maWcpIHx8IHtcbiAgICAgIGJvdENoYXNpbmdDb3VudDogNSxcbiAgICAgIGJvdENoYXNpbmdJbnRlcnZhbDogNCxcbiAgICAgIGNoYXNpbmdCb3RzTWF4UG9pbnQ6IDZcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmtDaGFzaW5nMl90aW1lQ2ZnXCIpXG4gIGdldFRpbWVDb25maWcoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50aW1lQ29uZmlnKSB8fCB7XG4gICAgICBzdGFnVGltZUludGVydmFsOiAzNjAwLFxuICAgICAgc3RhZ1RpbWVDb250cm9sOiAwLjYsXG4gICAgICBwZXJpb2RUaW1lOiA4NjQwMFxuICAgIH07XG4gIH1cbiAgaW5pdExvY2FsRGF0YURlZmF1bHRzKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmFjdGl2aXR5U3RhcnRUaW1lIHx8ICh0aGlzLmxvY2FsRGF0YS5hY3Rpdml0eVN0YXJ0VGltZSA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLmJvdFBvaW50TWF4TWFwIHx8ICh0aGlzLmxvY2FsRGF0YS5ib3RQb2ludE1heE1hcCA9IHt9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbGVhckxldmVscyB8fCAodGhpcy5sb2NhbERhdGEuY2xlYXJMZXZlbHMgPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS50aW1lUmVmcmVzaCB8fCAodGhpcy5sb2NhbERhdGEudGltZVJlZnJlc2ggPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5jYWNoZWRFeHBHYW1lcyB8fCAodGhpcy5sb2NhbERhdGEuY2FjaGVkRXhwR2FtZXMgPSAwKTtcbiAgfVxuICBvblJhbmtSYnRMZ2NfbGV2ZWxQYXNzZWQodCwgYSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnRpbWVSZWZyZXNoID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbGVhckxldmVscyA9ICh0aGlzLmxvY2FsRGF0YS5jbGVhckxldmVscyB8fCAwKSArIDE7XG4gICAgYSgpO1xuICB9XG4gIG9uUmFua1JidExnY19pbml0U2NvcmUodCwgYSkge1xuICAgIHZhciByLCBvLCBpLCBzO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbCA9IHQuYXJnc1swXSxcbiAgICAgICAgZiA9IHQuaW5zO1xuICAgICAgaWYgKCEobnVsbCA9PSBsID8gdm9pZCAwIDogbC5yYW5rTGlzdCkpIHtcbiAgICAgICAgYSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdSA9IHRoaXMuZ2V0UG9pbnRzQ29uZmlnKCksXG4gICAgICAgIGggPSBsLnJhbmtMaXN0O1xuICAgICAgdGhpcy5sb2NhbERhdGEuYWN0aXZpdHlTdGFydFRpbWUgPSBsLmFjdFN0YXJ0VGltZSB8fCAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEuYm90UG9pbnRNYXhNYXAgPSB7fTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmNsZWFyTGV2ZWxzID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnRpbWVSZWZyZXNoID0gMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhoKSwgZCA9IHAubmV4dCgpOyAhZC5kb25lOyBkID0gcC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZyA9IGQudmFsdWU7XG4gICAgICAgICAgZi5pc015U2VsZihnLmlkKSB8fCAoZy5zY29yZSA9IHRoaXMud2VpZ2h0ZWRSYW5kb20odS5pbml0UG9pbnRzKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKG8gPSBwLnJldHVybikgJiYgby5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmLnNvcnRSYW5rTGlzdChsKTtcbiAgICAgIGYudXBkYXRlUmFua0FmdGVyU29ydChsKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmJvdFBvaW50TWF4TWFwID0ge307XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXMoaCksIHkgPSB2Lm5leHQoKTsgIXkuZG9uZTsgeSA9IHYubmV4dCgpKSB7XG4gICAgICAgICAgZyA9IHkudmFsdWU7XG4gICAgICAgICAgZi5pc015U2VsZihnLmlkKSB8fCAodGhpcy5sb2NhbERhdGEuYm90UG9pbnRNYXhNYXBbZy5pZF0gPSB0aGlzLmNhbGN1bGF0ZUJvdFBvaW50TWF4KGcucmFuaykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeSAmJiAheS5kb25lICYmIChzID0gdi5yZXR1cm4pICYmIHMuY2FsbCh2KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEuY2FjaGVkRXhwR2FtZXMgPSB0aGlzLmNhbGN1bGF0ZUV4cEdhbWVzKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5ib3RQb2ludE1heE1hcCA9IHRoaXMubG9jYWxEYXRhLmJvdFBvaW50TWF4TWFwO1xuICAgICAgYSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFJhbmtDaGFzaW5nMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOWIneWni+WMluenr+WIhuWksei0pTogXCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgdCkpO1xuICAgICAgYSgpO1xuICAgIH1cbiAgfVxuICBvblJhbmtSYnRMZ2NfdXBkUmJ0U2NvcmUodCwgYSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgciA9IHQuYXJnc1swXSxcbiAgICAgICAgbyA9IHQuYXJnc1sxXSxcbiAgICAgICAgaSA9IHQuYXJnc1syXSB8fCAwLFxuICAgICAgICBuID0gdC5pbnM7XG4gICAgICBpZiAoIShudWxsID09IHIgPyB2b2lkIDAgOiByLnJhbmtMaXN0KSB8fCAwID09IHIucmFua0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIGEoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaXJzdFBhc3MobiwgciwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN1YnNlcXVlbnRQYXNzKG4sIHIsIGkpO1xuICAgICAgfVxuICAgICAgYSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFJhbmtDaGFzaW5nMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOmAmuWFs+WkhOeQhuWksei0pTogXCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgdCkpO1xuICAgICAgYSgpO1xuICAgIH1cbiAgfVxuICBvblJhbmtSYnRMZ2NfYXV0b1VwZFNjb3JlKHQsIGEpIHtcbiAgICB2YXIgciwgbztcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSB0LmFyZ3NbMF0sXG4gICAgICAgIG4gPSB0LmlucyxcbiAgICAgICAgcyA9IG51bGwgPT09IChyID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5sb2NhbERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmFua0dhbWVEYXRhLFxuICAgICAgICBsID0gbnVsbCA9PSBzID8gdm9pZCAwIDogcy5yYW5rTGlzdDtcbiAgICAgIGlmICghbCB8fCAwID09IGwubGVuZ3RoKSB7XG4gICAgICAgIGEoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGYgPSB0aGlzLmdldFRpbWVDb25maWcoKSxcbiAgICAgICAgdSA9IERhdGUubm93KCksXG4gICAgICAgIGggPSB0aGlzLmxvY2FsRGF0YS50aW1lUmVmcmVzaCB8fCAwLFxuICAgICAgICBwID0gMTAwMCAqICgobnVsbCA9PT0gKG8gPSBpLmdldExlZnRUaW1lKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNhbGwoaSkpIHx8IDApLFxuICAgICAgICBkID0gaCA+IDAgJiYgdSAtIGggPiAxMDAwICogZi5zdGFnVGltZUludGVydmFsLFxuICAgICAgICBnID0gcCA+IGYuc3RhZ1RpbWVDb250cm9sICogZi5wZXJpb2RUaW1lICogMTAwMDtcbiAgICAgIGlmIChkICYmIGcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGFnU2NvcmUobiwgbCwgMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50aW1lUmVmcmVzaCA9IERhdGUubm93KCk7XG4gICAgICAgIG4uc29ydFJhbmtMaXN0KHMpO1xuICAgICAgICBuLnVwZGF0ZVJhbmtBZnRlclNvcnQocyk7XG4gICAgICB9XG4gICAgICBhKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua0NoYXNpbmcyVHJhaXQudHJhaXRLZXkgKyBcIl0g6Ieq5Yqo5pu05paw5aSx6LSlOiBcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCB0KSk7XG4gICAgICBhKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUZpcnN0UGFzcyh0LCBhKSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbyA9IHRoaXMuZ2V0SnVtcENvbmZpZygpLFxuICAgICAgaSA9IGEucmFua0xpc3QsXG4gICAgICBzID0gdGhpcy5sb2NhbERhdGEuYm90UG9pbnRNYXhNYXAgfHwge307XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhpKSwgYyA9IGwubmV4dCgpOyAhYy5kb25lOyBjID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBjLnZhbHVlO1xuICAgICAgICBpZiAoIXQuaXNNeVNlbGYoZi5pZCkpIHtcbiAgICAgICAgICB2YXIgdSA9IHNbZi5pZF0gfHwgdGhpcy5jYWxjdWxhdGVCb3RQb2ludE1heChmLnJhbmspLFxuICAgICAgICAgICAgaCA9IChmLnNjb3JlLCBNYXRoLmZsb29yKHUgKiAoby5qdW1wQ29lZiAvIChmLnJhbmsgKyBvLmp1bXBPZmZzZXRYKSArIG8uanVtcE9mZnNldFkpKSk7XG4gICAgICAgICAgaCA8IDIgJiYgKGggPSAyKTtcbiAgICAgICAgICAzID09PSBoICYmIGgrKztcbiAgICAgICAgICBmLnNjb3JlICs9IGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChyID0gbC5yZXR1cm4pICYmIHIuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0LnNvcnRSYW5rTGlzdChhKTtcbiAgICB0LnVwZGF0ZVJhbmtBZnRlclNvcnQoYSk7XG4gIH1cbiAgaGFuZGxlU3Vic2VxdWVudFBhc3ModCwgYSwgZSkge1xuICAgIHZhciByID0gYS5yYW5rTGlzdCxcbiAgICAgIG8gPSB0aGlzLmdldEFjdGl2ZUNvbmZpZygpLFxuICAgICAgaSA9IHRoaXMuZ2V0QmFzZUNvbmZpZygpLFxuICAgICAgbiA9IHRoaXMubG9jYWxEYXRhLmNhY2hlZEV4cEdhbWVzIHx8IG8uZXhwR2FtZXNEZWZhdWx0LFxuICAgICAgcyA9IHRoaXMubG9jYWxEYXRhLmNsZWFyTGV2ZWxzIHx8IDAsXG4gICAgICBsID0gci5maW5kKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0LmlzTXlTZWxmKGEuaWQpO1xuICAgICAgfSksXG4gICAgICBjID0gKG51bGwgPT0gbCA/IHZvaWQgMCA6IGwucmFuaykgfHwgaS5ib3RzTnVtICsgMSxcbiAgICAgIGYgPSAobnVsbCA9PSBsID8gdm9pZCAwIDogbC5zY29yZSkgfHwgMCxcbiAgICAgIHUgPSBuIC0gcztcbiAgICBpZiAodSA+IDApIHtcbiAgICAgIHZhciBoID0gTWF0aC5mbG9vcihjIC8gdSk7XG4gICAgICB0aGlzLmhhbmRsZU5vcm1hbENoYXNpbmcodCwgciwgYywgZiwgaCwgZSk7XG4gICAgfSBlbHNlIHRoaXMuaGFuZGxlQWR2YW5jZWRDaGFzaW5nKHQsIHIsIGMsIGYsIGUsIG4sIHMpO1xuICAgIHQuc29ydFJhbmtMaXN0KGEpO1xuICAgIHQudXBkYXRlUmFua0FmdGVyU29ydChhKTtcbiAgfVxuICBoYW5kbGVOb3JtYWxDaGFzaW5nKHQsIGEsIGUsIHIsIG8sIGkpIHtcbiAgICB2YXIgcyxcbiAgICAgIGwsXG4gICAgICBjID0gdGhpcy5nZXRDaGFzaW5nQ29uZmlnKCksXG4gICAgICBmID0gdGhpcy5nZXRQb2ludHNDb25maWcoKSxcbiAgICAgIHUgPSB0aGlzLmxvY2FsRGF0YS5ib3RQb2ludE1heE1hcCB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKGEpLCBwID0gaC5uZXh0KCk7ICFwLmRvbmU7IHAgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IHAudmFsdWU7XG4gICAgICAgIGlmICghdC5pc015U2VsZihkLmlkKSkge1xuICAgICAgICAgIGQuc2NvcmU7XG4gICAgICAgICAgaWYgKGQucmFuayA+IGUpIHtcbiAgICAgICAgICAgIHZhciBnID0gciAtIGQuc2NvcmU7XG4gICAgICAgICAgICAoeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnICsgaSArIDEpKSkgPCAyICYmICh5ID0gMCk7XG4gICAgICAgICAgICB5ID4gYy5jaGFzaW5nQm90c01heFBvaW50ICYmICh5ID0gYy5jaGFzaW5nQm90c01heFBvaW50IC0gMik7XG4gICAgICAgICAgICBkLnNjb3JlICs9IHk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkLnJhbmsgPj0gZSAtIG8pIHtcbiAgICAgICAgICAgIGcgPSBkLnNjb3JlIC0gcjtcbiAgICAgICAgICAgICh5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGcgKyAxKSkpIDwgMiAmJiAoeSA9IDApO1xuICAgICAgICAgICAgZC5zY29yZSArPSB5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdiA9IHVbZC5pZF0gfHwgMDtcbiAgICAgICAgICAgIGlmIChkLnNjb3JlIDwgdikge1xuICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMud2VpZ2h0ZWRSYW5kb20oZi5hZGRQb2ludHNUb3ApO1xuICAgICAgICAgICAgICBkLnNjb3JlICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcyA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobCA9IGgucmV0dXJuKSAmJiBsLmNhbGwoaCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocykgdGhyb3cgcy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaGFuZGxlQWR2YW5jZWRDaGFzaW5nKHQsIGEsIGUsIHIsIG8sIGksIG4pIHtcbiAgICB2YXIgcyA9IHRoaXMuZ2V0Q2hhc2luZ0NvbmZpZygpLFxuICAgICAgbCA9IGkgLSBuLFxuICAgICAgYyA9IE1hdGguZmxvb3IoLWwgLyAocy5ib3RDaGFzaW5nQ291bnQgKyBzLmJvdENoYXNpbmdJbnRlcnZhbCkpO1xuICAgIGlmIChuIDwgKHMuYm90Q2hhc2luZ0NvdW50ICsgcy5ib3RDaGFzaW5nSW50ZXJ2YWwpICogYyArIGkgKyBzLmJvdENoYXNpbmdDb3VudCkge1xuICAgICAgdmFyIGYgPSBNYXRoLmZsb29yKGUgLyBNYXRoLm1heCgxLCAtbCkpO1xuICAgICAgdGhpcy5oYW5kbGVOb3JtYWxDaGFzaW5nKHQsIGEsIGUsIHIsIGYsIG8pO1xuICAgIH0gZWxzZSB0aGlzLmhhbmRsZVN0YWdTY29yZSh0LCBhLCByLCB0cnVlKTtcbiAgfVxuICBoYW5kbGVTdGFnU2NvcmUodCwgYSwgZSwgcikge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIHMgPSB0aGlzLmdldFBvaW50c0NvbmZpZygpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoYSksIGMgPSBsLm5leHQoKTsgIWMuZG9uZTsgYyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gYy52YWx1ZTtcbiAgICAgICAgaWYgKCF0LmlzTXlTZWxmKGYuaWQpKSB7XG4gICAgICAgICAgdmFyIHUgPSB0aGlzLndlaWdodGVkUmFuZG9tKHMuc3RhZ1BvaW50cyk7XG4gICAgICAgICAgciAmJiBmLnNjb3JlICsgdSA+IGUgJiYgKHUgPSAwKTtcbiAgICAgICAgICBmLnNjb3JlICs9IHU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChpID0gbC5yZXR1cm4pICYmIGkuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRSYW5rUmVjb3JkTGV2ZWxUcmFpdCgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua1JlY29yZExldmVsVHJhaXRcIik7XG4gICAgcmV0dXJuIHQgPyB0LmdldEluc3RhbmNlKCkgOiBudWxsO1xuICB9XG4gIGNhbGN1bGF0ZUV4cEdhbWVzKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRBY3RpdmVDb25maWcoKSxcbiAgICAgIGEgPSB0aGlzLmdldFBhc3REYXlzUGFzc0NvdW50KHQuYWN0aXZlRGF5c0NvdW50KSxcbiAgICAgIGUgPSB0aGlzLmdldEFjdGl2ZURheXModC5hY3RpdmVEYXlzQ291bnQpO1xuICAgIGlmIChlIDwgMSkgcmV0dXJuIHQuZXhwR2FtZXNEZWZhdWx0O1xuICAgIHZhciByID0gYSAvIGU7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5sb2cocikgLyBNYXRoLmxvZyh0LmV4cEdhbWVzQWN0aXZlQmFzZSkgKyB0LmV4cEdhbWVzQWN0aXZlT2Zmc2V0KSArIDE7XG4gIH1cbiAgZ2V0UGFzdERheXNQYXNzQ291bnQodCkge1xuICAgIHZhciBhLFxuICAgICAgZSA9IHRoaXMuZ2V0UmFua1JlY29yZExldmVsVHJhaXQoKTtcbiAgICBpZiAoIWUpIHJldHVybiAxO1xuICAgIHZhciByID0gKG51bGwgPT09IChhID0gZS5nZXREYWlseVBhc3NDb3VudHMpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuY2FsbChlKSkgfHwgW10sXG4gICAgICBvID0gZS5nZXRMYXN0VXBkYXRlWmVyb1RpbWVNUygpLFxuICAgICAgaSA9IHIubGVuZ3RoO1xuICAgIGlmICgwID09PSBpIHx8ICFvKSByZXR1cm4gMTtcbiAgICBmb3IgKHZhciBuID0gMCwgcyA9IG8gPT09IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkgPyBpIC0gMiA6IGkgLSAxLCBsID0gMDsgcyA+PSAwICYmIGwgPCB0OyBzLS0sIGwrKykgbiArPSByW3NdO1xuICAgIHJldHVybiBNYXRoLm1heCgxLCBuKTtcbiAgfVxuICBnZXRBY3RpdmVEYXlzKHQpIHtcbiAgICB2YXIgYSxcbiAgICAgIGUgPSB0aGlzLmdldFJhbmtSZWNvcmRMZXZlbFRyYWl0KCk7XG4gICAgaWYgKCFlKSByZXR1cm4gMDtcbiAgICB2YXIgciA9IChudWxsID09PSAoYSA9IGUuZ2V0RGFpbHlQYXNzQ291bnRzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNhbGwoZSkpIHx8IFtdLFxuICAgICAgbyA9IGUuZ2V0TGFzdFVwZGF0ZVplcm9UaW1lTVMoKSxcbiAgICAgIGkgPSByLmxlbmd0aDtcbiAgICBpZiAoMCA9PT0gaSB8fCAhbykgcmV0dXJuIDA7XG4gICAgZm9yICh2YXIgbiA9IG8gPT09IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkgPyBpIC0gMiA6IGkgLSAxLCBzID0gTWF0aC5tYXgoMCwgbiAtIHQgKyAxKSwgbCA9IDAsIGMgPSBuOyBjID49IHM7IGMtLSkgcltjXSA+IDAgJiYgbCsrO1xuICAgIHJldHVybiBsO1xuICB9XG4gIGNhbGN1bGF0ZUJvdFBvaW50TWF4KHQpIHtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0QmFzZUNvbmZpZygpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGEuZ3JhZENvZWYgKiBNYXRoLnBvdyhhLmJvdHNOdW0gLSB0LCAyKSk7XG4gIH1cbiAgd2VpZ2h0ZWRSYW5kb20odCkge1xuICAgIHZhciBhLFxuICAgICAgZSxcbiAgICAgIHIgPSBPYmplY3QuZW50cmllcyh0KSxcbiAgICAgIG8gPSByLnJlZHVjZShmdW5jdGlvbiAodCwgYSkge1xuICAgICAgICByZXR1cm4gdCArIF9fcmVhZChhLCAyKVsxXTtcbiAgICAgIH0sIDApLFxuICAgICAgaSA9IE1hdGgucmFuZG9tKCkgKiBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMociksIGMgPSBsLm5leHQoKTsgIWMuZG9uZTsgYyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gX19yZWFkKGMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSBmWzBdO1xuICAgICAgICBpZiAoKGkgLT0gZlsxXSkgPD0gMCkgcmV0dXJuIE51bWJlcih1KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChlID0gbC5yZXR1cm4pICYmIGUuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHJbMF1bMF0pO1xuICB9XG59Il19