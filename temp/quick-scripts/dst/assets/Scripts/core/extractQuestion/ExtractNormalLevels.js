
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/extractQuestion/ExtractNormalLevels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '349d3Q8pKNIF63wy6707vnV', 'ExtractNormalLevels');
// Scripts/core/extractQuestion/ExtractNormalLevels.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractDimension = void 0;
var ResManager_1 = require("../../framework/manager/ResManager");
var TraitManager_1 = require("../../framework/trait/TraitManager");
var DDebugInfo_1 = require("../../gamePlay/dot/DDebugInfo");
var GameTypeEnums_1 = require("../simulator/constant/GameTypeEnums");
function h(e, t) {
    return e.getUint32(t, true) === 1280724019 ? {
        isV3: true,
        dataOffset: t + 4,
        recordSize: 20
    } : {
        isV3: false,
        dataOffset: t,
        recordSize: 16
    };
}
var ExtractDimension = /** @class */ (function () {
    function ExtractDimension() {
    }
    ExtractDimension.saveData = function (e) {
        e && cc.sys.localStorage.setItem("ExtractQuestion", JSON.stringify(e));
    };
    ExtractDimension.getData = function () {
        var e = cc.sys.localStorage.getItem("ExtractQuestion");
        if (e)
            try {
                return JSON.parse(e);
            }
            catch (e) {
                return {};
            }
        return {};
    };
    ExtractDimension.getConfigData = function () {
        return ExtractNormalLevels.getInstance().getConfigData();
    };
    ExtractDimension.getOriginConfigData = function () {
        return ExtractNormalLevels.getInstance().getOriginConfigData();
    };
    ExtractDimension.isOpenPatch1 = function () {
        return true;
    };
    ExtractDimension.isOpenPatch2 = function () {
        return true;
    };
    ExtractDimension.isOpenPatch3 = function () {
        return true;
    };
    ExtractDimension.isOpenPatch4 = function () {
        return true;
    };
    ExtractDimension.getUserAbilityValue = function () {
        var e = this.getData();
        return null == e ? void 0 : e.ru;
    };
    ExtractDimension.getAdjustedRU = function (e, t) {
        return t && Array.isArray(t) && t.length > 0 ? this.calculateStackedFactor(t) * this.getfinalFactorRate() : e;
    };
    ExtractDimension.getAdjustNengRU = function (e, t) {
        return t && Array.isArray(t) && t.length > 0 ? this.calculateStackedFactor(t) * this.getfinalFactorRateN() * e : e;
    };
    ExtractDimension.getInitialDu = function () {
        return 400;
    };
    ExtractDimension.getEt = function (e) {
        var t = this.getData(), o = this.getConfigData();
        if (!o)
            return 0;
        if (!t.subArr || 0 == t.subArr.length)
            return 0;
        this.checkFixedRUAndDU();
        var n = (t = this.getData()).chooseIndex, i = t.subArr;
        n = Math.min(n, i.length - 1);
        n = Math.max(0, n);
        if (!t.subArr[n]) {
            console.error("【关卡抽取】子区间数据不存在 - 索引: " + n);
            return 0;
        }
        var r = this.getM(), a = 400 == t.subArr[n].du ? t.ru : t.subArr[n].ru;
        a = Math.max(a, o.MinDiffulty);
        var l = Math.max(e, o.MinDiffulty);
        return 1 / r * l * (l / a);
    };
    ExtractDimension.getM = function () {
        return 6;
    };
    ExtractDimension.getK = function (e) {
        return e.MaxDiffulty - e.MinDiffulty;
    };
    ExtractDimension.getLogBase = function () {
        return 1.2;
    };
    ExtractDimension.getLogValueLimit = function () {
        return 10;
    };
    ExtractDimension.getPatch0401 = function () {
        return 0.35;
    };
    ExtractDimension.getAllDirectReadWeights = function () {
        return [[15, 45, 30, 10], [1, 6, 33, 66]];
    };
    ExtractDimension.getPatch0301 = function () {
        return 0.7;
    };
    ExtractDimension.getPatch0101 = function () {
        return -1;
    };
    ExtractDimension.getPatch0201 = function () {
        return 0.5;
    };
    ExtractDimension.getPatch0202 = function () {
        return 5;
    };
    ExtractDimension.getDimensionOrder = function () {
        return [1, 2, 3, 2];
    };
    ExtractDimension.getLevelPriorityOrder = function () {
        return [1, 2, 3, 4];
    };
    ExtractDimension.getDeathFailAdjust = function (e) {
        if (e === void 0) { e = 0; }
        return -2;
    };
    ExtractDimension.getDeathPassAdjust = function (e) {
        if (e === void 0) { e = 0; }
        return 1;
    };
    ExtractDimension.hasDeathDirectAdjust = function () {
        return false;
    };
    ExtractDimension.getDeathDirectAdjust = function () {
        return 0;
    };
    ExtractDimension.UpdateCapability = function (t, o, n) {
        var i = this.getData(), r = this.getOriginConfigData();
        if (r && i.subArr && 0 != i.subArr.length) {
            this.checkFixedRUAndDU();
            if (this.isFix)
                this.isFix = false;
            else {
                var a = (i = this.getData()).chooseIndex, l = i.subArr;
                a = Math.min(a, l.length - 1);
                a = Math.max(0, a);
                if (i.subArr[a]) {
                    var s = this.getK(r), c = this.getM(), u = 400 == i.subArr[a].du ? i.ru : i.subArr[a].ru;
                    u = Math.max(u, r.MinDiffulty);
                    var p = Math.max(t, r.MinDiffulty), f = 1 / c * p * (p / u);
                    this.updateTriggerSupportMechanismState(i, o, f);
                    var d = f / o, h = Math.log(d), y = Math.abs(1.25 - d), m = this.getLogBase(), v = Math.log(n + 1) / Math.log(m), g = ExtractDimension.getLogValueLimit(), _ = Math.min(v, g), T = s * h * (l[a].du / 350) * _ / g, C = l[a].ru, b = 0.8 * C, E = r.MaxDiffulty - 0.2 * (r.MaxDiffulty - r.MinDiffulty);
                    l[a].ru = Math.max(b, Math.min(C + T, E));
                    C = l[a].ru;
                    l[a].ru = Math.max(l[a].ru, r.MinDiffulty);
                    l[a].du;
                    if (y > 0.75) {
                        l[a].du = Math.min(l[a].du + 20 * y, 350);
                        l[a].du = Math.max(l[a].du, 30);
                    }
                    else
                        l[a].du = Math.max(0.6 * l[a].du, 30);
                    i.diffcult = p;
                    this.updateOverall(i);
                    u = 400 == l[a].du ? i.ru : l[a].ru;
                    var S = {
                        expectTime: f,
                        actualTime: o,
                        difficulty: p,
                        dimensionName: l[a].dimensionName,
                        levelID: n,
                        rt: o / f
                    };
                    this.afterCapabilityUpdate(S);
                    return S;
                }
                console.error("【关卡抽取】子区间数据不存在 - 索引: " + a);
            }
        }
    };
    ExtractDimension.afterCapabilityUpdate = function () { };
    ExtractDimension.updateTriggerSupportMechanismState = function (e, t, o) {
        1 === e.tiggerPatch3 && t <= 1.5 * o && (e.tiggerPatch3 = 2);
    };
    ExtractDimension.updateOverall = function (e) {
        for (var t = this.getOriginConfigData(), o = [], n = 0; n < e.subArr.length; n++)
            e.subArr[n].du != this.InitDu && o.push([e.subArr[n].ru, e.subArr[n].du]);
        if (o.length > 0) {
            var i = 0, r = 0;
            for (n = 0; n < o.length; ++n) {
                i += o[n][0] / o[n][1];
                r += 1 / o[n][1];
            }
            e.ru = Math.max(i / r, t.MinDiffulty);
        }
        var a = [];
        for (n = 0; n < e.subArr.length; n++)
            e.subArr[n].du != this.InitDu && a.push(e.subArr[n].du);
        if (a.length > 0) {
            var l = 0;
            a.forEach(function (e) {
                l += 1 / e;
            });
            e.du = Math.max(a.length / l, 30);
        }
        this.saveData(e);
    };
    ExtractDimension.getLevelName = function (e, t) {
        var o, n;
        if (!e) {
            console.error("【关卡抽取】没有传游戏表数据");
            return t;
        }
        var r = this.getData().historyIndex || [], a = ExtractNormalLevels.getInstance();
        if (e.includes(t) && (f = a.getAllIndexesInTable(t)).length > 0 && !f.every(function (e) {
            return r.includes(e);
        })) {
            f.filter(function (e) {
                return !r.includes(e);
            }).length;
            return t;
        }
        var l = this.getLevelPriorityOrder(), s = function s(e, t) {
            for (var o = e.split("_"), n = t.split("_"), i = 0, r = Math.min(o.length, n.length), a = 0; a < r; a++) {
                var s = (a < l.length ? l[a] : a) - 1;
                if (!(s >= r))
                    if (o[s] == n[s])
                        i += Number(Math.pow(10, o.length - a));
                    else if (Number(o[a]) && Number(n[a])) {
                        var c = Math.abs(Number(o[a]) - Number(n[a]));
                        i += Number(Math.pow(10, o.length - a) / (c + 1));
                    }
            }
            return i;
        }, c = e.filter(function (e) {
            return e !== t;
        }).map(function (e) {
            return {
                name: e,
                similarity: s(t, e)
            };
        }).sort(function (e, t) {
            return t.similarity - e.similarity;
        });
        try {
            for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
                var f, d = p.value.name;
                if (0 !== (f = a.getAllIndexesInTable(d)).length && !f.every(function (e) {
                    return r.includes(e);
                })) {
                    f.filter(function (e) {
                        return !r.includes(e);
                    }).length;
                    return d;
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (n = u.return) && n.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return c[0].name;
    };
    ExtractDimension.getTileCountDimension = function () {
        return "03";
    };
    ExtractDimension.getMaJiangWeiDu = function (e, t, o, n) {
        for (var i = ExtractNormalLevels.getInstance(), r = this.getDimensionOrder(), a = 0, l = 0, s = [], c = 0; c < r.length; c++) {
            var u = "";
            switch (r[c]) {
                case 1:
                    if (null === (u = this.getNengLiWeiDu(n))) {
                        console.error("【关卡抽取】能力值维度计算失败，触发兜底");
                        return null;
                    }
                    break;
                case 2:
                    u = this.GetDimension(a);
                    a++;
                    break;
                case 3:
                    u = this.getDeathLvMension(t, n, o, l, e);
                    l++;
                    break;
                case 4:
                    u = this.getTileCountDimension(n);
            }
            s.push(u);
        }
        var p = s.join("_"), f = i.getAllNamesData();
        return this.getLevelName(f, p);
    };
    ExtractDimension.getGuideNum = function () {
        var e, t = TraitManager_1.default.getInstance().getTraitData("FixedLevels");
        return (null === (e = null == t ? void 0 : t.fixLevelArr) || void 0 === e ? void 0 : e.length) || 0;
    };
    ExtractDimension.getMaxNotDieLevel = function () {
        return 4;
    };
    ExtractDimension.getDeathLvMension = function (e, t, o, n, i) {
        if (n === void 0) { n = 0; }
        o || (o = this.getMaxNotDieLevel());
        "number" != typeof e && (e = 1);
        var r = this.getData(), a = r.dieDimensionValue || 1;
        if (t <= o)
            a = 1;
        else if (this.hasDeathDirectAdjust(i)) {
            var l = this.getDeathDirectAdjust(i);
            a = Math.max(1, Math.min(4, a + l));
        }
        else
            switch (e) {
                case 0:
                    var s = this.getDeathFailAdjust(n);
                    a = Math.max(a + s, 1);
                    break;
                case 1:
                    var c = this.getDeathPassAdjust(n);
                    a = Math.min(a + c, 4);
            }
        r.dieDimensionValue = a;
        this.saveData(r);
        return "0" + Math.abs(a);
    };
    ExtractDimension.GetDimension = function (e) {
        if (e === void 0) { e = 0; }
        var t = this.getAllDirectReadWeights(), o = JSON.parse(JSON.stringify(t));
        o = o[e];
        var n = 0;
        o.forEach(function (e) {
            n += Number(e);
        });
        for (var i = Math.floor(Math.random() * (n + 1)), r = 0, a = 1, l = 0; l < o.length; ++l)
            if (i <= (r += o[l])) {
                a = l + 1;
                break;
            }
        return "0" + a;
    };
    ExtractDimension.checkFixedRUAndDU = function () {
        var e, t = null === (e = mj.getClassByName("ExtractTool")) || void 0 === e ? void 0 : e.getCurrentGameType();
        if (t === GameTypeEnums_1.MjGameType.Normal || t === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var o = this.getData(), n = this.getOriginConfigData();
            if (o && o.subArr && n) {
                if (o.subArr) {
                    this.printSubArrStatus("打印修正前的能力值区间和置信度区间", o.subArr);
                    var i = [];
                    o.subArr && o.subArr.length > 0 && o.subArr.length !== n.CapabilityDimensionName.length && (this.isFix = true);
                    for (var r = function r(e) {
                        var t = n.CapabilityDimensionName[e], r = o.subArr.find(function (e) {
                            return e.dimensionName === t;
                        });
                        if (null == r) {
                            l.isFix = true;
                            r = {
                                index: e,
                                dimensionName: t,
                                subSmin: n.DiffultyIntervals[2 * e],
                                subSmax: n.DiffultyIntervals[2 * e + 1],
                                ru: n.DiffultyIntervals[2 * e],
                                du: l.InitDu,
                                isOpen: true,
                                bValue: 0,
                                dieResult: 1
                            };
                        }
                        else if (n.DiffultyIntervals[2 * e] !== r.subSmin || n.DiffultyIntervals[2 * e + 1] !== r.subSmax) {
                            l.isFix = true;
                            r.ru = n.DiffultyIntervals[2 * e] + (r.ru - r.subSmin) * (n.DiffultyIntervals[2 * e + 1] - n.DiffultyIntervals[2 * e]) / (r.subSmax - r.subSmin);
                            r.subSmin = n.DiffultyIntervals[2 * e];
                            r.subSmax = n.DiffultyIntervals[2 * e + 1];
                            r.ru = Math.max(r.ru, n.MinDiffulty);
                            r.du === l.InitDu && r.ru !== n.DiffultyIntervals[2 * e] && (r.ru = n.DiffultyIntervals[2 * e]);
                        }
                        r.index = e;
                        i.push(r);
                    }, l = this, s = 0; s < n.CapabilityDimensionName.length; s++)
                        r(s);
                    this.isFix && i.length > 0 && (o.subArr = i);
                }
                if (this.isFix) {
                    o.currentAllCapabilityDimensionName || (o.currentAllCapabilityDimensionName = []);
                    o.currentAllCapabilityDimensionName = __spreadArrays(n.CapabilityDimensionName);
                    this.updateOverall(o);
                    this.printSubArrStatus("打印能力值区间,置信度区间", o.subArr);
                }
            }
        }
    };
    ExtractDimension.printSubArrStatus = function (e, t) {
        for (var o = 0; o < t.length; o++)
            (null == (n = t[o]).ru || isNaN(n.ru)) && (n.ru = n.subSmin);
        var n;
    };
    ExtractDimension.getAlterItem = function () {
        return null;
    };
    ExtractDimension.getInitialCapabilityRU = function (e, t) {
        return t.MinDiffulty;
    };
    ExtractDimension.getNengLiWeiDu = function (e) {
        var t = this.getData(), o = this.getConfigData();
        if (!o) {
            console.error("【关卡抽取】能力值维度计算失败 - 配置数据不存在");
            return null;
        }
        var n = this.getOriginConfigData(), i = !t.ru, r = t.ru, l = t.du;
        r = r ? Math.max(r, o.MinDiffulty) : o.MinDiffulty;
        r = this.getAdjustNengRU(r);
        l = l ? Math.max(l, 30) : 30;
        if (i) {
            t.subArr = [];
            for (var s = n.DiffultyIntervals, c = n.CapabilityDimensionName, u = 0; u < s.length; u += 2) {
                var p = {
                    isOpen: true
                };
                p.ru = this.getInitialCapabilityRU(u, n);
                p.du = this.getInitialDu();
                p.bValue = 0;
                p.index = Math.floor(u / 2);
                p.subSmin = s[u];
                p.subSmax = s[u + 1];
                p.dimensionName = c[Math.floor(u / 2)];
                t.subArr.push(p);
            }
            r = (O = t.subArr[0]).ru;
            t.ru = O.ru;
            t.tiggerPatch3 = 0;
        }
        else {
            this.checkFixedRUAndDU();
            t = this.getData();
            this.isFix = false;
        }
        for (var f = Math.log(e) / Math.log(1.3), d = r * Math.min(f, 10) / 100, h = new Date().getTime(), y = o.MinDiffulty, m = o.MaxDiffulty, v = 0, g = 0, _ = 0;;) {
            _++;
            if (new Date().getTime() - h >= this.timeOutMax) {
                console.error("计算超时(" + this.timeOutMax + "ms)，循环次数: " + _ + "，默认使用索引0");
                v = Math.max(0, v);
                break;
            }
            g = this.getD(r, d, y, m, t, e);
            var T = this.getAlterItem(e), C = null != T && T.sortCapabilityDimensionNameList && T.sortCapabilityDimensionNameList.length > 0, b = [];
            if (C) {
                var E = this.FixDUseAlterDimensionNameList(g, t.subArr, T, o);
                g = E.fixedD;
                b = E.alterItems;
            }
            var S = [];
            if (this.isOpenPatch2() && l < 250) {
                var I = this.getPatch0201(), w = this.getPatch0202(), B = Math.min.apply(Math, __spreadArrays(t.subArr.map(function (e) {
                    return e.subSmin;
                }))), x = Math.floor(Math.min(t.subArr.length / 3 + 1, w));
                for (u = 0; u < t.subArr.length; ++u)
                    if ((O = t.subArr[u]).isOpen) {
                        if (S.length < x && O.subSmax <= B + I * (r - B)) {
                            O.du = 400;
                            O.isOpen = false;
                            S.push(u);
                        }
                    }
                    else
                        S.push(u);
            }
            var M = [];
            for (u = 0; u < t.subArr.length; u++) {
                var O = t.subArr[u];
                o.CapabilityDimensionName.includes(O.dimensionName) && O.subSmin <= g && g <= O.subSmax && !S.includes(u) && M.push(u);
            }
            C && (M = this.BeforeAlterDimensionNameList(b, S, g));
            if (0 == M.length) {
                var D = Number.MAX_VALUE;
                for (u = 0; u < t.subArr.length; u++) {
                    O = t.subArr[u];
                    if (Math.abs(g - O.subSmin) < D) {
                        g = O.subSmin;
                        D = Math.abs(g - O.subSmin);
                    }
                    if (Math.abs(g - O.subSmax) < D) {
                        g = O.subSmax;
                        D = Math.abs(g - O.subSmax);
                    }
                }
                var P = this.getD(r, d, y, m, t, e);
                g = Math.max(g, P);
                for (u = 0; u < t.subArr.length; u++) {
                    O = t.subArr[u];
                    o.CapabilityDimensionName.includes(O.dimensionName) && O.subSmin <= g && g <= O.subSmax && !S.includes(u) && M.push(u);
                }
            }
            if (M.length > 0) {
                v = M[Math.floor(Math.random() * M.length)];
                if (!this.isOpenPatch4()) {
                    N = v;
                    if (!this.isOpenPatch1())
                        break;
                    v = this.SelectCapabilityRange(t.subArr, M, v);
                    C && (v = this.AlterChooseIndexFix(N, v));
                    break;
                }
                var A = true;
                for (u = 0; u < M.length; ++u) {
                    var R = M[u];
                    if (t.subArr[R] && t.subArr[R].bValue < 1) {
                        A = false;
                        break;
                    }
                }
                A && this.AllDullValReduce(t.subArr, M);
                if (!A) {
                    var N = v;
                    if (this.IsSatisfy(t.subArr, v)) {
                        M = this.GetCanSelectIndexList(t.subArr, M);
                        if (this.isOpenPatch1()) {
                            v = this.SelectCapabilityRange(t.subArr, M, v);
                            C && (v = this.AlterChooseIndexFix(N, v));
                            this.AddDullVal(t.subArr, v);
                            N != v && this.DullValReduce(t.subArr, N);
                        }
                        break;
                    }
                    v = (M = this.GetCanSelectIndexList(t.subArr, M))[Math.floor(Math.random() * M.length)];
                    this.isOpenPatch1() && (v = this.SelectCapabilityRange(t.subArr, M, v));
                    C && (v = this.AlterChooseIndexFix(N, v));
                    this.AddDullVal(t.subArr, v);
                    N != v && this.DullValReduce(t.subArr, N);
                    break;
                }
            }
        }
        var j = 400 == t.subArr[v].du ? r : t.subArr[v].ru, k = n.CapabilityDimensionName;
        t && null == t.currentAllCapabilityDimensionName && (t.currentAllCapabilityDimensionName = __spreadArrays(n.CapabilityDimensionName));
        t.chooseIndex = v;
        t.diffcult = g;
        t.ru = r;
        t.du = l;
        this.saveData(t);
        if (0 == j) {
            return k[v];
        }
        return k[v];
    };
    ExtractDimension.SelectCapabilityRange = function (e, t, o) {
        var n = JSON.parse(JSON.stringify(e));
        if (t.length > 0 && e[o].du == this.InitDu) {
            var i = 0;
            n.sort(function (e, t) {
                return e.subSmin - t.subSmin;
            });
            for (var r = 0; r < n.length; r++)
                if (e[o].index === n[r].index) {
                    i = r;
                    break;
                }
            var a = null, l = 0;
            for (r = 0; r < n.length; r++)
                if (n[r].du < this.InitDu)
                    if (null == a)
                        a = n[r];
                    else if (n[r].subSmin > a.subSmin) {
                        a = n[r];
                        l = r;
                    }
            var s, c = this.getPatch0101();
            s = -1 != c ? c : Math.min(Math.max(n.length / 5, 1), 3) + l;
            var u = Math.floor(Math.min(s, i)), p = Math.floor(Math.max(s, i));
            for (r = u; r <= p; r++) {
                var f = n[r];
                if (f.bValue < 1) {
                    o = f.index;
                    break;
                }
            }
        }
        return o;
    };
    ExtractDimension.DullValReduce = function (e, t) {
        var o = e.find(function (e) {
            return e.index == t;
        });
        if (null != o && o.bValue >= 1) {
            o.bValue -= 1;
            o.bValue = Math.min(o.bValue, 0.3);
        }
    };
    ExtractDimension.AddDullVal = function (e, t) {
        e[t].bValue += this.getPatch0401();
    };
    ExtractDimension.GetCanSelectIndexList = function (e, t) {
        for (var o = [], n = 0; n < t.length; n++) {
            var i = e[t[n]];
            null != i && i.bValue < 1 && o.push(t[n]);
        }
        return o;
    };
    ExtractDimension.IsSatisfy = function (e, t) {
        var o = true;
        e[t].bValue >= 1 && (o = false);
        return o;
    };
    ExtractDimension.AllDullValReduce = function (e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = e[t[o]];
            if (null != n && n.bValue >= 1) {
                n.bValue -= 1;
                n.bValue = Math.min(n.bValue, 0.3);
            }
        }
    };
    ExtractDimension.clamp = function (e, t, o) {
        return Math.max(t, Math.min(e, o));
    };
    ExtractDimension.calcDifficultyValue = function (e, t, o) {
        var n = 1 - Math.random(), i = 1 - Math.random();
        return e * o + t * (Math.sqrt(-2 * Math.log(n)) * Math.sin(2 * Math.PI * i));
    };
    ExtractDimension.getD = function (e, t, o, n, i, r) {
        var a = this.getAdjustedRU(0.9), l = this.getM(), s = this.calcDifficultyValue(e, t, a, l, r);
        s = this.clamp(s, o, n);
        if (this.isOpenPatch3()) {
            var c = this.getPatch0301();
            if (e <= n - c * (n - o) || 0 == i.tiggerPatch3 || 2 == i.tiggerPatch3) {
                0 == i.tiggerPatch3 && (i.tiggerPatch3 = 1);
                var u = Math.min(Math.log(r) / Math.log(1.2), 10) / 10 * (n - c * (n - o));
                s = Math.max(s, u);
            }
            else
                i.tiggerPatch3 = 0;
        }
        return s;
    };
    ExtractDimension.BeforeAlterDimensionNameList = function (e, t, o) {
        this._alterIndexs = [];
        var n = this.getConfigData();
        if (null != e)
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                n.CapabilityDimensionName.includes(r.dimensionName) && r.subSmin <= o && o <= r.subSmax && !t.includes(e[i].index) && this._alterIndexs.push(r.index);
            }
        return this._alterIndexs;
    };
    ExtractDimension.FixDUseAlterDimensionNameList = function (e, t, o, n) {
        this.alterIntervalItems = [];
        if (null != t) {
            for (var i = 0, r = function r(e) {
                var r = o.sortCapabilityDimensionNameList[e], a = t.find(function (e) {
                    return Number(e.dimensionName) === Number(r);
                });
                if (null != a) {
                    if (!n.CapabilityDimensionName.includes(a.dimensionName))
                        return "continue";
                    if (a.isOpen && i < o.alterMaxCount) {
                        i++;
                        l.alterIntervalItems.push(a);
                    }
                    else
                        a.isOpen;
                }
            }, l = this, s = 0; s < o.sortCapabilityDimensionNameList.length; s++)
                r(s);
            if (this.alterIntervalItems.length > 0) {
                var c = Math.min.apply(Math, __spreadArrays(this.alterIntervalItems.map(function (e) {
                    return e.subSmin;
                }))), u = Math.max.apply(Math, __spreadArrays(this.alterIntervalItems.map(function (e) {
                    return e.subSmax;
                })));
                e = this.clamp(e, c, u);
            }
        }
        return {
            fixedD: e,
            alterItems: this.alterIntervalItems
        };
    };
    ExtractDimension.AlterChooseIndexFix = function (e, t) {
        return this._alterIndexs.includes(t) ? t : e;
    };
    ExtractDimension.calculateStackedFactor = function (t, o) {
        if (o === void 0) { o = ExtractDimension.DECAY_COEFFICIENT; }
        if (!t || 0 === t.length)
            return 1;
        var n = t.filter(function (e) {
            return e > 0;
        });
        if (0 === n.length)
            return 1;
        var i = n.filter(function (e) {
            return e > 1;
        }), r = n.filter(function (e) {
            return e < 1;
        }), a = 1;
        if (i.length > 0) {
            i.sort(function (e, t) {
                return t - e;
            });
            for (var l = 0, s = 0; s < i.length; s++) {
                var c = Math.pow(s + 1, o);
                l += (i[s] - 1) / c;
            }
            a = 1 + l;
        }
        var u = 1;
        if (r.length > 0) {
            r.sort(function (e, t) {
                return e - t;
            });
            for (l = 0, s = 0; s < r.length; s++) {
                c = Math.pow(s + 1, o);
                l += (1 - r[s]) / c;
            }
            u = 1 - l;
        }
        return a * u;
    };
    ExtractDimension.getfinalFactorRate = function () {
        return 1;
    };
    ExtractDimension.getfinalFactorRateN = function () {
        return 1;
    };
    ExtractDimension.DECAY_COEFFICIENT = 2;
    ExtractDimension.InitDu = 400;
    ExtractDimension._alterIndexs = [];
    ExtractDimension.alterIntervalItems = [];
    ExtractDimension.isFix = false;
    ExtractDimension.timeOutMax = 1000;
    __decorate([
        mj.traitEvent("ExtNormLv_isOpenPatch1")
    ], ExtractDimension, "isOpenPatch1", null);
    __decorate([
        mj.traitEvent("ExtNormLv_isOpenPatch2")
    ], ExtractDimension, "isOpenPatch2", null);
    __decorate([
        mj.traitEvent("ExtNormLv_isOpenPatch3")
    ], ExtractDimension, "isOpenPatch3", null);
    __decorate([
        mj.traitEvent("ExtNormLv_isOpenPatch4")
    ], ExtractDimension, "isOpenPatch4", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getAdjRU")
    ], ExtractDimension, "getAdjustedRU", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getAdNengRU")
    ], ExtractDimension, "getAdjustNengRU", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getInitDu")
    ], ExtractDimension, "getInitialDu", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getM")
    ], ExtractDimension, "getM", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getK")
    ], ExtractDimension, "getK", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getLogBase")
    ], ExtractDimension, "getLogBase", null);
    __decorate([
        mj.traitEvent("ExtDimension_getLogLimit")
    ], ExtractDimension, "getLogValueLimit", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getPatch0401")
    ], ExtractDimension, "getPatch0401", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getAllDirWgt")
    ], ExtractDimension, "getAllDirectReadWeights", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getPatch0301")
    ], ExtractDimension, "getPatch0301", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getPatch0101")
    ], ExtractDimension, "getPatch0101", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getPatch0201")
    ], ExtractDimension, "getPatch0201", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getPatch0202")
    ], ExtractDimension, "getPatch0202", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getDimOrder")
    ], ExtractDimension, "getDimensionOrder", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getLvPriority")
    ], ExtractDimension, "getLevelPriorityOrder", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getDeathFail")
    ], ExtractDimension, "getDeathFailAdjust", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getDeathPass")
    ], ExtractDimension, "getDeathPassAdjust", null);
    __decorate([
        mj.traitEvent("ExtNormLv_hasDeathDirAdj")
    ], ExtractDimension, "hasDeathDirectAdjust", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getDeathDirAdj")
    ], ExtractDimension, "getDeathDirectAdjust", null);
    __decorate([
        mj.traitEvent("ExtNormLv_afCapUpd")
    ], ExtractDimension, "afterCapabilityUpdate", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getTileDim")
    ], ExtractDimension, "getTileCountDimension", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getMaxNDieLevel")
    ], ExtractDimension, "getMaxNotDieLevel", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getDeathLv")
    ], ExtractDimension, "getDeathLvMension", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getAlItem")
    ], ExtractDimension, "getAlterItem", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getInitCapRU")
    ], ExtractDimension, "getInitialCapabilityRU", null);
    __decorate([
        mj.traitEvent("ExtNormLv_calcD")
    ], ExtractDimension, "calcDifficultyValue", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getFactorR")
    ], ExtractDimension, "getfinalFactorRate", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getFactorRN")
    ], ExtractDimension, "getfinalFactorRateN", null);
    return ExtractDimension;
}());
exports.ExtractDimension = ExtractDimension;
var ExtractNormalLevels = /** @class */ (function () {
    function ExtractNormalLevels() {
        this.ma_level_data_cache = new Map();
        this.hsMaNames_cache = new Map();
        this.hsMaJiangOffsetData_cache = new Map();
        this.boardConfig_cache = new Map();
        this.configData_cache = new Map();
        this.originConfigData_cache = new Map();
        this.douDiPool = ["5766107262616731932,383933332822769685,4900216562683745616,41095389822124036,1224979098823034132,2199023271937,2181562498|5100370653488349184,14196712783490417665,11167422489152470122,3466010882182243137,16795252511285666460,4213988854207979850,9766340019486911261,14713730", "96053358710359324,384213434813666640,1536853739254666560,3071455678158776832,9835863931229833216,6052837899188609024,5570561,0,184717953466368,0,0|1353618213883084800,16541374402814109488,7418455172701072581,1234879667824128792,7252133587563775800,9356967769722231429,9807873288643736482,9390159067529055542,2337024575873", "96053358708786444,384213434813666640,4765108938846852416,2459265564309227588,2345053365248,328708,2199023779840,0|16727823603365576704,1061864921858400376,2630396856456466538,7128413616981427659,14639033766153183398,2419426444226313928,4136670723235213457,6958934178", "96053358705116418,384213434813666640,1536853739254666560,3071455091895915776,12285822575196014592,9943959693906944000,2,71468255805440,285873023221760,0|9950778240102563840,9273442818478825612,9701602938060874835,9459121076330695215,2904957723266384524,10485412014393245234,11224971798880258273,895096939569940146,9159682272732203", "6148539482895680284,1501108272189440,6147413857842238805,4701934277864275969,1172080512186188033,20305866976985092,291186967482467328,73202202839089156,275952697344,83598068083064832,0,0,0|3048252441611993088,542300874672188688,9402051156148135043,12234642479049509677,6937876678751885350,7073677616768395507,14019330341746386924,1738812890087295370,10825422438358592024,8107697726856259713,437995869138684990", "96053358706689292,384213434813666640,767864102881154368,2314850573540821504,5717598189127680,4785074606186656,19140298424745984,0|17540311512093032448,16948835284721200412,13418664854064272562,9334988706581625219,1272417319990305345,867244408022565410,5982065266687769166,152190045000273", "96053358704067852,384213434813666640,1446799338893301056,5372794536111132672,5123897332736,12105675798371894276,72636504227840,0|9638405323425316864,9827270696521485398,9408582854040597715,16363176449728843971,5311441943916774554,12464147034045750409,4226255245758986350,2489629992860822025,243", "96053358711407900,384213434813666640,1536853739254666560,3071455126255479296,11709361822892730368,5764607523036897280,1152944869230247936,71468272844804,35184372088832,8,0|4802867672188452864,1320812676024157964,9383861709292736179,2313643634584853345,1486242587004275884,1277444539061837350,17981943860102317038,12187966324709362188,3795204790097908209,243589416", "6148539482895942428,1501108272189440,6147413857842238805,3001666833301505,12285820516295516168,11302979544023042,41120,23995741764583424,1152921504606851072,16|6999824157265362944,880518749676437681,13322471267948581497,8746320609512794210,10022965902437933616,653309591772043379,13457232673933816138,25478001921156001,4196137326120347846,262943721", "6148539482892010268,1501108272189440,6147413857842238805,18190665398960129,36028887280454305,24017732265645378,564053760091280,343597427328,96053335802532864,0,335677442,383931868233416704,0|1735031008635387904,4906250784285442174,6361937669624271603,16161227607138302348,12619670051171090976,86276553052160393,14225235943738845674,398201626775127457,2203190587287650002,5984310461655546177,16585843311341382330,10235356202986938664,51115", "96053358710359298,384213434813666640,1536853739254666560,3071455678158951680,2929168222208,9943956807689609216,23364622090242,0,0,0|3119061806484553728,2920861024515333252,12686826237293996665,10992339537937197741,2923992449931774209,8818614417156779588,1735577256192258656,5199673034945469876,13729677864147", "96053358708000028,384213434813666640,1536853739254666560,5931242174904870144,18019384967910400,144115189220905297,2378184277252113474,21990299729922,0,0,65536|6542095354572046336,1554069998940488964,918950233787478507,2928378881694647150,17270257160248044844,11855024954106466885,5820910123181687616,4943898281770640390,1040351587428343891,3276959366912557", "96053358710359308,384213434813666640,1536853739254666560,756606203056182528,5717599266570497,19945829187648,72341268038418432,0|13342914462672224256,1809384924164525480,1507174318737400330,13883528959309519790,12156387482634609042,3593954528005097827,4651244771985494959,1842192790614859966,4724764642473", "6148539482889913116,1501108272189440,6147413857842238805,4701828724748009473,6088866713468994177,21009468541435906,4634291977494547024,1125900176335360,9223389908486459520,72339069014638594,0,268435460,0|13271551910038470656,16843047968690018974,2775385741615245483,13481559337539224545,2595415811865872510,2315915296611478211,15260751219677905678,7606061489923932266,737198453995968209,14418329016433250890,14416534836372341528,6798300993051256", "96053358703805698,384213434813666640,1536853739254666560,4616190804539823360,3044433348388717584,9800969856250552321,288300814689112080,45035996273704976,43084414976,4507997673881600,562949953421312,0,0|9386940789671591936,5729856150251831374,5093601081481672384,4894496260880107084,7226818915599074400,10671856150608515675,1189836532233458406,9812483273723792564,11575061016981584440,668104397440", "5766107262620401948,383933332822769685,576621282431341904,95983243094401346,9367487225288197460,1459236648033323008,34078977|10600647721951952896,7181697790154780094,9836033121320150034,16964257887913382819,2096502217229223822,10471086374183845114,1292112614334935556,7928229814184780462,362720", "96053358704067852,384213434813666640,1154140129904907584,1170936540919301380,1441157399792849936,1134730363801600,72339086261616640,0,1157425104234217472,0|15577548184086380544,16299692986942954769,9345539043454330538,8286730420882008527,13858070918238389644,1878531716980544539,4859116276590692075,2631404608268362320,138", "96053358705116428,384213434813666640,767864102881154368,3071455678158776832,2929168394240,288236217308626944,17867069521921,0|15071490807624105984,6957519091727354753,2752560479475547154,738766722100366083,7642935447376743094,10958112989609887323,9405673680974281601,10741232650120800368,63933003500519144", "6148539482891748124,1501108272189440,6147413857842238805,1459738300550299649,36380916696743937,1478844213105986,18031990695561760,4611686362024773632,1,0|1372549983047254016,16227191942089952538,6501839056159134971,11177288058323241252,838139312314345624,13446424910554505851,12905803778503901824,9542635601462863968,12407914210771024902,33487", "96053358708000002,384213434813666640,1536853739254666560,613690362335417600,577657022099628305,361425037011780612,5764607542965567493,5,565148976676864,0|11187815394469478400,77764912542248456,13041167267229470794,3048575082477003689,11891906585022410144,673858928425875073,11572307356509057125,2907227365001267074,12563147824342278323,451831049024227"];
    }
    ExtractNormalLevels.getInstance = function () {
        this._instance || (this._instance = new ExtractNormalLevels());
        return this._instance;
    };
    ExtractNormalLevels.prototype.getCacheKey = function () {
        var e = mj.getClassByName("ExtractTool");
        if (e) {
            var t = e.getCurrentGameType(), o = e.getCurrentJourneyType();
            return "Travel" === t && o ? t + "_" + o : t;
        }
        return "Normal";
    };
    ExtractNormalLevels.prototype.setLevelData = function (e, t) {
        this.ma_level_data_cache.set(e, t);
    };
    ExtractNormalLevels.prototype.getLevelData = function () {
        var e = this.getCacheKey();
        return this.ma_level_data_cache.get(e) || null;
    };
    ExtractNormalLevels.prototype.getAllNamesData = function () {
        var e = this.getCacheKey();
        return this.hsMaNames_cache.get(e) || null;
    };
    ExtractNormalLevels.prototype.setAllNamesData = function (e, t) {
        this.hsMaNames_cache.set(e, t);
    };
    ExtractNormalLevels.prototype.setLevelDataOffset = function (e, t) {
        this.hsMaJiangOffsetData_cache.set(e, t);
    };
    ExtractNormalLevels.prototype.getlevelDataOffset = function () {
        var e = this.getCacheKey();
        return this.hsMaJiangOffsetData_cache.get(e) || null;
    };
    ExtractNormalLevels.prototype.getBoardConfig = function () {
        var e = this.getCacheKey();
        this.boardConfig_cache.has(e) || this.boardConfig_cache.set(e, new Map());
        return this.boardConfig_cache.get(e);
    };
    ExtractNormalLevels.prototype.getConfigData = function () {
        var e = this.getCacheKey();
        return this.configData_cache.get(e);
    };
    ExtractNormalLevels.prototype.setConfigData = function (e, t) {
        this.configData_cache.set(e, t);
    };
    ExtractNormalLevels.prototype.getOriginConfigData = function () {
        var e = this.getCacheKey();
        return this.originConfigData_cache.get(e);
    };
    ExtractNormalLevels.prototype.setOriginConfigData = function (e, t) {
        this.originConfigData_cache.set(e, t);
    };
    ExtractNormalLevels.prototype.loadLevelOffsetByteData = function (e, t, o) {
        var n = this, a = o || this.getCacheKey();
        return new Promise(function (o, s) {
            new Date().getTime();
            var c = n.getlevelDataOffset();
            if (c)
                o(c);
            else {
                var u = __read(n.getOffsetPath(e, t), 2), p = u[0], f = u[1], d = function d(e) {
                    for (var t, r, l = [], s = new Uint8Array(e), c = 0; c < e.byteLength; c++)
                        l.push(s[c]);
                    for (var u = new DataView(e), p = 0, f = {}, d = []; p < e.byteLength;) {
                        var h = u.getInt32(p, true);
                        p += 4;
                        var y = l.slice(p, p + h), m = "";
                        try {
                            for (var v = (t = void 0, __values(y)), g = v.next(); !g.done; g = v.next()) {
                                var _ = g.value;
                                m += String.fromCharCode(_);
                            }
                        }
                        catch (e) {
                            t = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                g && !g.done && (r = v.return) && r.call(v);
                            }
                            finally {
                                if (t)
                                    throw t.error;
                            }
                        }
                        d.push(m);
                        p += h;
                        var T = u.getInt32(p, true);
                        p += 4;
                        var C = u.getInt32(p, true);
                        p += 4;
                        var b = {};
                        b.fileLeng = C;
                        b.startOffset = T;
                        b.fileName = m;
                        f[m] = b;
                        n.setAllNamesData(a, d);
                    }
                    n.setLevelDataOffset(a, f);
                    o(f);
                };
                ResManager_1.resManager.loadRes(p, cc.BufferAsset, f).then(function (e) {
                    if (e) {
                        if (e instanceof cc.BufferAsset) {
                            var t = e._buffer;
                            d(t);
                            e.decRef();
                        }
                        else
                            s(new Error("Loaded resource is not BufferAsset"));
                    }
                    else
                        s(new Error("Failed to load BufferAsset"));
                }).catch(function (e) {
                    s(e);
                });
            }
        });
    };
    ExtractNormalLevels.prototype.loadLevelByteData = function (e, t, o) {
        var n = this, i = o || this.getCacheKey();
        return new Promise(function (o, a) {
            var s = __read(n.getLevelDataPath(e, t), 2), c = s[0], u = s[1];
            new Date().getTime();
            ResManager_1.resManager.loadRes(c, cc.BufferAsset, u).then(function (e) {
                if (e) {
                    if (e instanceof cc.BufferAsset) {
                        var t = e._buffer;
                        n.setLevelData(i, t.slice(0));
                        o(null);
                        e.decRef();
                    }
                    else
                        a(new Error("Loaded resource is not BufferAsset"));
                }
                else
                    a(new Error("Failed to load BufferAsset"));
            }).catch(function (e) {
                a(e);
            });
        });
    };
    ExtractNormalLevels.prototype.loadConfigData = function (e, t, o) {
        var n = this, i = o || this.getCacheKey();
        return new Promise(function (o, a) {
            new Date().getTime();
            var s = n.originConfigData_cache.get(i);
            if (s) {
                var c = n.processConfigData(s);
                n.setConfigData(i, c);
                o(c);
            }
            else {
                var u = __read(n.getConfigPath(e, t), 2), p = u[0], f = u[1];
                ResManager_1.resManager.loadRes(p, cc.JsonAsset, f).then(function (e) {
                    if (e) {
                        n.setOriginConfigData(i, e.json);
                        var t = n.processConfigData(e.json);
                        n.setConfigData(i, t);
                        o(t);
                        e.decRef();
                    }
                    else {
                        console.error("【关卡抽取】 配置数据加载失败:", p);
                        a(new Error("Failed to load config data"));
                    }
                }).catch(function (e) {
                    console.error("【关卡抽取】 配置数据加载异常:", e);
                    a(e);
                });
            }
        });
    };
    ExtractNormalLevels.prototype.processConfigData = function (e) {
        return e;
    };
    ExtractNormalLevels.prototype.getAllIndexesInTable = function (e) {
        if (!this.getAllNamesData().includes(e))
            return [];
        var t = this.getLevelData(), o = this.getlevelDataOffset()[e];
        if (!o)
            return [];
        var n = o.startOffset, i = (o.fileLeng, new DataView(t)), r = i.byteLength;
        if (n + 4 > r) {
            console.error("【关卡抽取】获取表索引 - 表 " + e + " 偏移越界，offset: " + n + ", byteLength: " + r);
            return [];
        }
        var a = h(i, n);
        n = a.dataOffset;
        var l = a.recordSize, s = i.getInt32(n, true);
        n += 4;
        for (var c = Math.min(n + s, r), u = []; n + l <= c;) {
            var p = i.getInt32(n, true);
            n += 4;
            i.getFloat32(n, true);
            n += 4;
            if (a.isV3) {
                i.getInt32(n, true);
                n += 4;
            }
            i.getInt32(n, true);
            n += 4;
            i.getInt32(n, true);
            n += 4;
            u.push(p);
        }
        return u;
    };
    ExtractNormalLevels.prototype.getByteContentByType = function (e, t) {
        var o = this.getAllNamesData(), n = ExtractDimension.getData(), i = n.historyIndex || [];
        if (o.includes(e)) {
            var r = this.getLevelData(), a = this.getlevelDataOffset()[e], l = a.startOffset, s = a.fileLeng + l, c = new DataView(r), u = c.byteLength, p = Number.MAX_VALUE, f = 0, d = 0;
            if (l + 4 > u) {
                console.error("【关卡抽取】 获取关卡内容 - 表 " + e + " 偏移越界，offset: " + l + ", byteLength: " + u);
                return null;
            }
            var m = h(c, l);
            l = m.dataOffset;
            var v = m.recordSize, g = c.getInt32(l, true);
            l += 4;
            for (var _ = Math.min(l + g, u), T = 8, C = null; l + v <= _;) {
                var b = c.getInt32(l, true);
                l += 4;
                var E = c.getFloat32(l, true);
                l += 4;
                if (m.isV3) {
                    c.getInt32(l, true);
                    l += 4;
                }
                var S = c.getInt32(l, true);
                l += 4;
                var I = c.getInt32(l, true);
                l += 4;
                if (Math.abs(E - t) < p && !i.includes(b)) {
                    f = S;
                    d = I;
                    p = Math.abs(E - t);
                    T = E;
                    C = b;
                }
            }
            i.push(C);
            i.length > 100 && i.splice(0, 1);
            n.historyIndex = i;
            ExtractDimension.saveData(n);
            var w = r.slice(l, s).slice(f, f + d), B = new Uint8Array(w);
            return {
                contentByteData: this.decodeUTF8(B),
                contentDiff: T,
                fileName: e,
                index: C
            };
        }
        return null;
    };
    ExtractNormalLevels.prototype.decodeUTF8 = function (e) {
        for (var t = "", o = 0; o < e.length;) {
            var n = e[o];
            if (0 == (128 & n)) {
                t += String.fromCharCode(n);
                o++;
            }
            else if (192 == (224 & n)) {
                if (!(o + 1 < e.length))
                    break;
                var i = (31 & n) << 6 | 63 & e[o + 1];
                t += String.fromCharCode(i);
                o += 2;
            }
            else if (224 == (240 & n)) {
                if (!(o + 2 < e.length))
                    break;
                i = (15 & n) << 12 | (63 & e[o + 1]) << 6 | 63 & e[o + 2];
                t += String.fromCharCode(i);
                o += 3;
            }
            else if (240 == (248 & n)) {
                if (!(o + 3 < e.length))
                    break;
                if ((i = (7 & n) << 18 | (63 & e[o + 1]) << 12 | (63 & e[o + 2]) << 6 | 63 & e[o + 3]) > 65535) {
                    var r = Math.floor((i - 65536) / 1024) + 55296, a = (i - 65536) % 1024 + 56320;
                    t += String.fromCharCode(r, a);
                }
                else
                    t += String.fromCharCode(i);
                o += 4;
            }
            else
                o++;
        }
        return t;
    };
    ExtractNormalLevels.prototype.extractDimension = function (e) {
        return ExtractDimension.getMaJiangWeiDu(e.levelID, e.dieResult, e.maxNotDieLevel, e.reallyLevelID);
    };
    ExtractNormalLevels.prototype.getByteContent = function (e) {
        var t = this.extractDimension(e), o = ExtractDimension.getData();
        return this.getByteContentByType(t, o.diffcult);
    };
    ExtractNormalLevels.prototype.initData = function (e, t) {
        var o = this.getCacheKey();
        return Promise.all([this.loadLevelOffsetByteData(e, t, o), this.loadLevelByteData(e, t, o), this.loadConfigData(e, t, o)]).then(function () {
            return true;
        });
    };
    ExtractNormalLevels.prototype.get16BitValue = function (e) {
        if ("undefined" != typeof BigInt) {
            for (var t = BigInt(0), o = BigInt(1), n = BigInt(24), i = BigInt(65535), r = t, a = BigInt(e) >> n & i, l = 0; l < 16; l++) {
                r = r << o | a & o;
                a >>= o;
            }
            return Number(r);
        }
        var s = bigNum(e).shiftRight(24).and(bigNum(65535)), c = bigNum.zero, u = s;
        for (l = 0; l < 16; l++) {
            c = c.shiftLeft(1).or(u.and(bigNum.one));
            u = u.shiftRight(1);
        }
        return c.toJSNumber();
    };
    ExtractNormalLevels.prototype.getRandomContent = function () {
        var e = this.getAllNamesData();
        if (!e || 0 === e.length)
            return Promise.resolve(null);
        var t = e[Math.floor(Math.random() * e.length)], o = this.getAllIndexesInTable(t);
        if (!o || 0 === o.length)
            return Promise.resolve(null);
        var n = o[Math.floor(Math.random() * o.length)];
        return this.getContentByTableAndIndex(t, n);
    };
    ExtractNormalLevels.prototype.getByteDataByIndex = function (e, t) {
        var o = this.getLevelData(), n = this.getlevelDataOffset();
        if (!o || !n)
            return null;
        var i = n[e];
        if (!i)
            return null;
        var r = i.startOffset, a = new DataView(o), l = a.byteLength;
        if (r + 4 > l) {
            console.error("【关卡抽取】[能力值] 表 " + e + " 偏移越界，offset: " + r + ", byteLength: " + l);
            return null;
        }
        var s = h(a, r);
        r = s.dataOffset;
        var c = s.recordSize, u = a.getInt32(r, true);
        r += 4;
        for (var p = Math.min(r + u, l); r + c <= p;) {
            var f = a.getInt32(r, true);
            r += 4;
            var d = a.getFloat32(r, true);
            r += 4;
            var y = 0;
            if (s.isV3) {
                y = a.getInt32(r, true);
                r += 4;
            }
            var m = a.getInt32(r, true);
            r += 4;
            var v = a.getInt32(r, true);
            r += 4;
            if (f === t) {
                var g = o.slice(p, i.startOffset + i.fileLeng).slice(m, m + v), _ = new Uint8Array(g);
                return {
                    contentByteStr: this.decodeUTF8(_),
                    difficulty: d,
                    index: f,
                    tileCount: y
                };
            }
        }
        return null;
    };
    ExtractNormalLevels.prototype.getContentByTableAndIndex = function (e, t) {
        var o = this.getByteDataByIndex(e, t);
        if (!o)
            return Promise.resolve(null);
        var n = o.contentByteStr, i = o.difficulty, r = o.index, a = this.get16BitValue(n.split(",")[0].trim()), l = e.split("_")[0] + "_" + e.split("_")[1], s = e.split("_")[0] || "random";
        return this.loadBoardAndBuildContent(l, a, n).then(function (t) {
            return t ? [t, i, r.toString(), e, s] : null;
        });
    };
    ExtractNormalLevels.prototype.loadBoardAndBuildContent = function (e, t, o) {
        var n = this, i = this.getBoardConfig();
        if (i.has(e)) {
            var a = i.get(e), s = this.buildContentFromBoard(a, t, o);
            return Promise.resolve(s || null);
        }
        var c = __read(this.getJsonPath(e), 2), u = c[0], p = c[1];
        return ResManager_1.resManager.loadRes(u + e, cc.JsonAsset, p).then(function (r) {
            if (!r)
                return null;
            i.set(e, r.json);
            return n.buildContentFromBoard(r.json, t, o) || null;
        }).catch(function () {
            return null;
        });
    };
    ExtractNormalLevels.prototype.buildContentFromBoard = function (e, t, o) {
        if (!e)
            return "";
        for (var n = 0; n < e.length; n++)
            if (Number(e[n].Index) == Number(t))
                return (e[n].Content + "|" + o).toString();
        return "";
    };
    ExtractNormalLevels.prototype.getContent = function (e) {
        var t = this, o = new Date().getTime(), n = this.getByteContent(e);
        if (!n)
            return Promise.resolve([this.getDouDiData(), 55, "兜底索引", "兜底表名", "07"]);
        var i = n.fileName.split("_")[0] + "_" + n.fileName.split("_")[1], a = n.contentByteData, s = this.get16BitValue(a.split(",")[0].trim()), u = null, p = this.getBoardConfig();
        if (p.has(i)) {
            u = p.get(i);
            return Promise.resolve(this.processContentData(u, s, a, n, o));
        }
        var f = __read(this.getJsonPath(i, e.gameType, e.journeyType), 2), d = f[0], h = f[1];
        return ResManager_1.resManager.loadRes(d + i, cc.JsonAsset, h).then(function (e) {
            if (!e) {
                var r = t.getDouDiData();
                DDebugInfo_1.DDebugInfo.dot("抽题异常 Board配置加载失败: " + i + " index: " + s);
                return [r, 55, "兜底索引", "兜底表名", "07"];
            }
            p.set(i, e.json);
            return t.processContentData(e.json, s, a, n, o);
        }).catch(function (e) {
            console.error("【关卡抽取】 抽题异常，返回兜底数据", e);
            console.error("【关卡抽取】 抽题异常，返回兜底数据,error:" + e.message + "堆栈: " + e.stack);
            return [t.getDouDiData(), 55, "兜底索引", "兜底表名", "07"];
        });
    };
    ExtractNormalLevels.prototype.processContentData = function (e, t, o, n) {
        var i = "";
        if (e)
            for (var r = 0; r < e.length; r++)
                if (Number(e[r].Index) == Number(t)) {
                    i = (e[r].Content + "|" + o).toString();
                    break;
                }
        if (!i) {
            i = this.getDouDiData();
            DDebugInfo_1.DDebugInfo.dot("抽题异常 题库异常,fileName: " + n.fileName + " 造型index: " + t + " 哈希index :" + n.index + " - 未找到对应内容，使用兜底数据");
        }
        new Date().getTime();
        return [i, n.contentDiff, n.index, n.fileName, n.fileName.split("_")[0]];
    };
    ExtractNormalLevels.prototype.updateCapability = function (e, t, o) {
        return ExtractDimension.UpdateCapability(e, t, o);
    };
    ExtractNormalLevels.prototype.getData = function () {
        return ExtractDimension.getData();
    };
    ExtractNormalLevels.prototype.getDouDiData = function () {
        return this.douDiPool[Math.floor(Math.random() * this.douDiPool.length)];
    };
    ExtractNormalLevels.prototype.getConfigPath = function () {
        return ["byteData/level_file_config", "mainRes"];
    };
    ExtractNormalLevels.prototype.getOffsetPath = function () {
        return ["byteData/level_data_offsets", "mainRes"];
    };
    ExtractNormalLevels.prototype.getLevelDataPath = function () {
        return ["byteData/level_data", "mainRes"];
    };
    ExtractNormalLevels.prototype.getJsonPath = function () {
        return ["config/boards/", "mainRes"];
    };
    ExtractNormalLevels._instance = null;
    __decorate([
        mj.traitEvent("ExtNormLv_processConfig")
    ], ExtractNormalLevels.prototype, "processConfigData", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getAllIdxInTbl")
    ], ExtractNormalLevels.prototype, "getAllIndexesInTable", null);
    __decorate([
        mj.traitEvent("ExtNormLv_initData")
    ], ExtractNormalLevels.prototype, "initData", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getContByTblIdx")
    ], ExtractNormalLevels.prototype, "getContentByTableAndIndex", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getContent")
    ], ExtractNormalLevels.prototype, "getContent", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getConfigPath")
    ], ExtractNormalLevels.prototype, "getConfigPath", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getOffsetPath")
    ], ExtractNormalLevels.prototype, "getOffsetPath", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getLevDataPath")
    ], ExtractNormalLevels.prototype, "getLevelDataPath", null);
    __decorate([
        mj.traitEvent("ExtNormLv_getJsonPath")
    ], ExtractNormalLevels.prototype, "getJsonPath", null);
    return ExtractNormalLevels;
}());
exports.default = ExtractNormalLevels;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3ROb3JtYWxMZXZlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZ0U7QUFDaEUsbUVBQThEO0FBQzlELDREQUEyRDtBQUMzRCxxRUFBaUU7QUFDakUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDakIsVUFBVSxFQUFFLEVBQUU7S0FDZixDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksRUFBRSxLQUFLO1FBQ1gsVUFBVSxFQUFFLENBQUM7UUFDYixVQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7QUFDSixDQUFDO0FBQ0Q7SUFBQTtJQTR1QkEsQ0FBQztJQXJ1QlEseUJBQVEsR0FBZixVQUFnQixDQUFDO1FBQ2YsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNNLHdCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUM7WUFBRSxJQUFJO2dCQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDTSw4QkFBYSxHQUFwQjtRQUNFLE9B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LENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQTFlTSw2QkFBUyxHQUFHLElBQUksQ0FBQztJQTRLeEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2dFQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzttRUFrQ3pDO0lBaUdEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt1REFNbkM7SUF5RUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO3dFQWExQztJQTBCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7eURBK0JyQztJQXdCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7NERBR3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzREQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzsrREFHekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7MERBR3RDO0lBQ0gsMEJBQUM7Q0FuZkQsQUFtZkMsSUFBQTtrQkFuZm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmltcG9ydCBUcmFpdE1hbmFnZXIgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBERGVidWdJbmZvIH0gZnJvbSAnLi4vLi4vZ2FtZVBsYXkvZG90L0REZWJ1Z0luZm8nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmZ1bmN0aW9uIGgoZSwgdCkge1xuICByZXR1cm4gZS5nZXRVaW50MzIodCwgdHJ1ZSkgPT09IDEyODA3MjQwMTkgPyB7XG4gICAgaXNWMzogdHJ1ZSxcbiAgICBkYXRhT2Zmc2V0OiB0ICsgNCxcbiAgICByZWNvcmRTaXplOiAyMFxuICB9IDoge1xuICAgIGlzVjM6IGZhbHNlLFxuICAgIGRhdGFPZmZzZXQ6IHQsXG4gICAgcmVjb3JkU2l6ZTogMTZcbiAgfTtcbn1cbmV4cG9ydCBjbGFzcyBFeHRyYWN0RGltZW5zaW9uIHtcbiAgc3RhdGljIERFQ0FZX0NPRUZGSUNJRU5UID0gMjtcbiAgc3RhdGljIEluaXREdSA9IDQwMDtcbiAgc3RhdGljIF9hbHRlckluZGV4cyA9IFtdO1xuICBzdGF0aWMgYWx0ZXJJbnRlcnZhbEl0ZW1zID0gW107XG4gIHN0YXRpYyBpc0ZpeCA9IGZhbHNlO1xuICBzdGF0aWMgdGltZU91dE1heCA9IDEwMDA7XG4gIHN0YXRpYyBzYXZlRGF0YShlKSB7XG4gICAgZSAmJiBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFeHRyYWN0UXVlc3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICB9XG4gIHN0YXRpYyBnZXREYXRhKCkge1xuICAgIHZhciBlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRXh0cmFjdFF1ZXN0aW9uXCIpO1xuICAgIGlmIChlKSB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbiAgc3RhdGljIGdldENvbmZpZ0RhdGEoKSB7XG4gICAgcmV0dXJuIEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKS5nZXRDb25maWdEYXRhKCk7XG4gIH1cbiAgc3RhdGljIGdldE9yaWdpbkNvbmZpZ0RhdGEoKSB7XG4gICAgcmV0dXJuIEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKS5nZXRPcmlnaW5Db25maWdEYXRhKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfaXNPcGVuUGF0Y2gxXCIpXG4gIHN0YXRpYyBpc09wZW5QYXRjaDEoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfaXNPcGVuUGF0Y2gyXCIpXG4gIHN0YXRpYyBpc09wZW5QYXRjaDIoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfaXNPcGVuUGF0Y2gzXCIpXG4gIHN0YXRpYyBpc09wZW5QYXRjaDMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfaXNPcGVuUGF0Y2g0XCIpXG4gIHN0YXRpYyBpc09wZW5QYXRjaDQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc3RhdGljIGdldFVzZXJBYmlsaXR5VmFsdWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5ydTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRBZGpSVVwiKVxuICBzdGF0aWMgZ2V0QWRqdXN0ZWRSVShlLCB0KSB7XG4gICAgcmV0dXJuIHQgJiYgQXJyYXkuaXNBcnJheSh0KSAmJiB0Lmxlbmd0aCA+IDAgPyB0aGlzLmNhbGN1bGF0ZVN0YWNrZWRGYWN0b3IodCkgKiB0aGlzLmdldGZpbmFsRmFjdG9yUmF0ZSgpIDogZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRBZE5lbmdSVVwiKVxuICBzdGF0aWMgZ2V0QWRqdXN0TmVuZ1JVKGUsIHQpIHtcbiAgICByZXR1cm4gdCAmJiBBcnJheS5pc0FycmF5KHQpICYmIHQubGVuZ3RoID4gMCA/IHRoaXMuY2FsY3VsYXRlU3RhY2tlZEZhY3Rvcih0KSAqIHRoaXMuZ2V0ZmluYWxGYWN0b3JSYXRlTigpICogZSA6IGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0SW5pdER1XCIpXG4gIHN0YXRpYyBnZXRJbml0aWFsRHUoKSB7XG4gICAgcmV0dXJuIDQwMDtcbiAgfVxuICBzdGF0aWMgZ2V0RXQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXREYXRhKCksXG4gICAgICBvID0gdGhpcy5nZXRDb25maWdEYXRhKCk7XG4gICAgaWYgKCFvKSByZXR1cm4gMDtcbiAgICBpZiAoIXQuc3ViQXJyIHx8IDAgPT0gdC5zdWJBcnIubGVuZ3RoKSByZXR1cm4gMDtcbiAgICB0aGlzLmNoZWNrRml4ZWRSVUFuZERVKCk7XG4gICAgdmFyIG4gPSAodCA9IHRoaXMuZ2V0RGF0YSgpKS5jaG9vc2VJbmRleCxcbiAgICAgIGkgPSB0LnN1YkFycjtcbiAgICBuID0gTWF0aC5taW4obiwgaS5sZW5ndGggLSAxKTtcbiAgICBuID0gTWF0aC5tYXgoMCwgbik7XG4gICAgaWYgKCF0LnN1YkFycltuXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkeWtkOWMuumXtOaVsOaNruS4jeWtmOWcqCAtIOe0ouW8lTogXCIgKyBuKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgciA9IHRoaXMuZ2V0TSgpLFxuICAgICAgYSA9IDQwMCA9PSB0LnN1YkFycltuXS5kdSA/IHQucnUgOiB0LnN1YkFycltuXS5ydTtcbiAgICBhID0gTWF0aC5tYXgoYSwgby5NaW5EaWZmdWx0eSk7XG4gICAgdmFyIGwgPSBNYXRoLm1heChlLCBvLk1pbkRpZmZ1bHR5KTtcbiAgICByZXR1cm4gMSAvIHIgKiBsICogKGwgLyBhKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRNXCIpXG4gIHN0YXRpYyBnZXRNKCkge1xuICAgIHJldHVybiA2O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEtcIilcbiAgc3RhdGljIGdldEsoZSkge1xuICAgIHJldHVybiBlLk1heERpZmZ1bHR5IC0gZS5NaW5EaWZmdWx0eTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRMb2dCYXNlXCIpXG4gIHN0YXRpYyBnZXRMb2dCYXNlKCkge1xuICAgIHJldHVybiAxLjI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHREaW1lbnNpb25fZ2V0TG9nTGltaXRcIilcbiAgc3RhdGljIGdldExvZ1ZhbHVlTGltaXQoKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldFBhdGNoMDQwMVwiKVxuICBzdGF0aWMgZ2V0UGF0Y2gwNDAxKCkge1xuICAgIHJldHVybiAwLjM1O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEFsbERpcldndFwiKVxuICBzdGF0aWMgZ2V0QWxsRGlyZWN0UmVhZFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIFtbMTUsIDQ1LCAzMCwgMTBdLCBbMSwgNiwgMzMsIDY2XV07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0UGF0Y2gwMzAxXCIpXG4gIHN0YXRpYyBnZXRQYXRjaDAzMDEoKSB7XG4gICAgcmV0dXJuIDAuNztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRQYXRjaDAxMDFcIilcbiAgc3RhdGljIGdldFBhdGNoMDEwMSgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0UGF0Y2gwMjAxXCIpXG4gIHN0YXRpYyBnZXRQYXRjaDAyMDEoKSB7XG4gICAgcmV0dXJuIDAuNTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRQYXRjaDAyMDJcIilcbiAgc3RhdGljIGdldFBhdGNoMDIwMigpIHtcbiAgICByZXR1cm4gNTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXREaW1PcmRlclwiKVxuICBzdGF0aWMgZ2V0RGltZW5zaW9uT3JkZXIoKSB7XG4gICAgcmV0dXJuIFsxLCAyLCAzLCAyXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRMdlByaW9yaXR5XCIpXG4gIHN0YXRpYyBnZXRMZXZlbFByaW9yaXR5T3JkZXIoKSB7XG4gICAgcmV0dXJuIFsxLCAyLCAzLCA0XTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXREZWF0aEZhaWxcIilcbiAgc3RhdGljIGdldERlYXRoRmFpbEFkanVzdChlID0gMCkge1xuICAgIHJldHVybiAtMjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXREZWF0aFBhc3NcIilcbiAgc3RhdGljIGdldERlYXRoUGFzc0FkanVzdChlID0gMCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2hhc0RlYXRoRGlyQWRqXCIpXG4gIHN0YXRpYyBoYXNEZWF0aERpcmVjdEFkanVzdCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0RGVhdGhEaXJBZGpcIilcbiAgc3RhdGljIGdldERlYXRoRGlyZWN0QWRqdXN0KCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHN0YXRpYyBVcGRhdGVDYXBhYmlsaXR5KHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgciA9IHRoaXMuZ2V0T3JpZ2luQ29uZmlnRGF0YSgpO1xuICAgIGlmIChyICYmIGkuc3ViQXJyICYmIDAgIT0gaS5zdWJBcnIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNoZWNrRml4ZWRSVUFuZERVKCk7XG4gICAgICBpZiAodGhpcy5pc0ZpeCkgdGhpcy5pc0ZpeCA9IGZhbHNlO2Vsc2Uge1xuICAgICAgICB2YXIgYSA9IChpID0gdGhpcy5nZXREYXRhKCkpLmNob29zZUluZGV4LFxuICAgICAgICAgIGwgPSBpLnN1YkFycjtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGwubGVuZ3RoIC0gMSk7XG4gICAgICAgIGEgPSBNYXRoLm1heCgwLCBhKTtcbiAgICAgICAgaWYgKGkuc3ViQXJyW2FdKSB7XG4gICAgICAgICAgdmFyIHMgPSB0aGlzLmdldEsociksXG4gICAgICAgICAgICBjID0gdGhpcy5nZXRNKCksXG4gICAgICAgICAgICB1ID0gNDAwID09IGkuc3ViQXJyW2FdLmR1ID8gaS5ydSA6IGkuc3ViQXJyW2FdLnJ1O1xuICAgICAgICAgIHUgPSBNYXRoLm1heCh1LCByLk1pbkRpZmZ1bHR5KTtcbiAgICAgICAgICB2YXIgcCA9IE1hdGgubWF4KHQsIHIuTWluRGlmZnVsdHkpLFxuICAgICAgICAgICAgZiA9IDEgLyBjICogcCAqIChwIC8gdSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyU3VwcG9ydE1lY2hhbmlzbVN0YXRlKGksIG8sIGYpO1xuICAgICAgICAgIHZhciBkID0gZiAvIG8sXG4gICAgICAgICAgICBoID0gTWF0aC5sb2coZCksXG4gICAgICAgICAgICB5ID0gTWF0aC5hYnMoMS4yNSAtIGQpLFxuICAgICAgICAgICAgbSA9IHRoaXMuZ2V0TG9nQmFzZSgpLFxuICAgICAgICAgICAgdiA9IE1hdGgubG9nKG4gKyAxKSAvIE1hdGgubG9nKG0pLFxuICAgICAgICAgICAgZyA9IEV4dHJhY3REaW1lbnNpb24uZ2V0TG9nVmFsdWVMaW1pdCgpLFxuICAgICAgICAgICAgXyA9IE1hdGgubWluKHYsIGcpLFxuICAgICAgICAgICAgVCA9IHMgKiBoICogKGxbYV0uZHUgLyAzNTApICogXyAvIGcsXG4gICAgICAgICAgICBDID0gbFthXS5ydSxcbiAgICAgICAgICAgIGIgPSAwLjggKiBDLFxuICAgICAgICAgICAgRSA9IHIuTWF4RGlmZnVsdHkgLSAwLjIgKiAoci5NYXhEaWZmdWx0eSAtIHIuTWluRGlmZnVsdHkpO1xuICAgICAgICAgIGxbYV0ucnUgPSBNYXRoLm1heChiLCBNYXRoLm1pbihDICsgVCwgRSkpO1xuICAgICAgICAgIEMgPSBsW2FdLnJ1O1xuICAgICAgICAgIGxbYV0ucnUgPSBNYXRoLm1heChsW2FdLnJ1LCByLk1pbkRpZmZ1bHR5KTtcbiAgICAgICAgICBsW2FdLmR1O1xuICAgICAgICAgIGlmICh5ID4gMC43NSkge1xuICAgICAgICAgICAgbFthXS5kdSA9IE1hdGgubWluKGxbYV0uZHUgKyAyMCAqIHksIDM1MCk7XG4gICAgICAgICAgICBsW2FdLmR1ID0gTWF0aC5tYXgobFthXS5kdSwgMzApO1xuICAgICAgICAgIH0gZWxzZSBsW2FdLmR1ID0gTWF0aC5tYXgoMC42ICogbFthXS5kdSwgMzApO1xuICAgICAgICAgIGkuZGlmZmN1bHQgPSBwO1xuICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmFsbChpKTtcbiAgICAgICAgICB1ID0gNDAwID09IGxbYV0uZHUgPyBpLnJ1IDogbFthXS5ydTtcbiAgICAgICAgICB2YXIgUyA9IHtcbiAgICAgICAgICAgIGV4cGVjdFRpbWU6IGYsXG4gICAgICAgICAgICBhY3R1YWxUaW1lOiBvLFxuICAgICAgICAgICAgZGlmZmljdWx0eTogcCxcbiAgICAgICAgICAgIGRpbWVuc2lvbk5hbWU6IGxbYV0uZGltZW5zaW9uTmFtZSxcbiAgICAgICAgICAgIGxldmVsSUQ6IG4sXG4gICAgICAgICAgICBydDogbyAvIGZcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuYWZ0ZXJDYXBhYmlsaXR5VXBkYXRlKFMpO1xuICAgICAgICAgIHJldHVybiBTO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgJDlhbPljaHmir3lj5bjgJHlrZDljLrpl7TmlbDmja7kuI3lrZjlnKggLSDntKLlvJU6IFwiICsgYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2FmQ2FwVXBkXCIpXG4gIHN0YXRpYyBhZnRlckNhcGFiaWxpdHlVcGRhdGUoKSB7fVxuICBzdGF0aWMgdXBkYXRlVHJpZ2dlclN1cHBvcnRNZWNoYW5pc21TdGF0ZShlLCB0LCBvKSB7XG4gICAgMSA9PT0gZS50aWdnZXJQYXRjaDMgJiYgdCA8PSAxLjUgKiBvICYmIChlLnRpZ2dlclBhdGNoMyA9IDIpO1xuICB9XG4gIHN0YXRpYyB1cGRhdGVPdmVyYWxsKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5nZXRPcmlnaW5Db25maWdEYXRhKCksIG8gPSBbXSwgbiA9IDA7IG4gPCBlLnN1YkFyci5sZW5ndGg7IG4rKykgZS5zdWJBcnJbbl0uZHUgIT0gdGhpcy5Jbml0RHUgJiYgby5wdXNoKFtlLnN1YkFycltuXS5ydSwgZS5zdWJBcnJbbl0uZHVdKTtcbiAgICBpZiAoby5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgIHIgPSAwO1xuICAgICAgZm9yIChuID0gMDsgbiA8IG8ubGVuZ3RoOyArK24pIHtcbiAgICAgICAgaSArPSBvW25dWzBdIC8gb1tuXVsxXTtcbiAgICAgICAgciArPSAxIC8gb1tuXVsxXTtcbiAgICAgIH1cbiAgICAgIGUucnUgPSBNYXRoLm1heChpIC8gciwgdC5NaW5EaWZmdWx0eSk7XG4gICAgfVxuICAgIHZhciBhID0gW107XG4gICAgZm9yIChuID0gMDsgbiA8IGUuc3ViQXJyLmxlbmd0aDsgbisrKSBlLnN1YkFycltuXS5kdSAhPSB0aGlzLkluaXREdSAmJiBhLnB1c2goZS5zdWJBcnJbbl0uZHUpO1xuICAgIGlmIChhLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBsID0gMDtcbiAgICAgIGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBsICs9IDEgLyBlO1xuICAgICAgfSk7XG4gICAgICBlLmR1ID0gTWF0aC5tYXgoYS5sZW5ndGggLyBsLCAzMCk7XG4gICAgfVxuICAgIHRoaXMuc2F2ZURhdGEoZSk7XG4gIH1cbiAgc3RhdGljIGdldExldmVsTmFtZShlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKCFlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CR5rKh5pyJ5Lyg5ri45oiP6KGo5pWw5o2uXCIpO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHZhciByID0gdGhpcy5nZXREYXRhKCkuaGlzdG9yeUluZGV4IHx8IFtdLFxuICAgICAgYSA9IEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoZS5pbmNsdWRlcyh0KSAmJiAoZiA9IGEuZ2V0QWxsSW5kZXhlc0luVGFibGUodCkpLmxlbmd0aCA+IDAgJiYgIWYuZXZlcnkoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiByLmluY2x1ZGVzKGUpO1xuICAgIH0pKSB7XG4gICAgICBmLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIXIuaW5jbHVkZXMoZSk7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgdmFyIGwgPSB0aGlzLmdldExldmVsUHJpb3JpdHlPcmRlcigpLFxuICAgICAgcyA9IGZ1bmN0aW9uIHMoZSwgdCkge1xuICAgICAgICBmb3IgKHZhciBvID0gZS5zcGxpdChcIl9cIiksIG4gPSB0LnNwbGl0KFwiX1wiKSwgaSA9IDAsIHIgPSBNYXRoLm1pbihvLmxlbmd0aCwgbi5sZW5ndGgpLCBhID0gMDsgYSA8IHI7IGErKykge1xuICAgICAgICAgIHZhciBzID0gKGEgPCBsLmxlbmd0aCA/IGxbYV0gOiBhKSAtIDE7XG4gICAgICAgICAgaWYgKCEocyA+PSByKSkgaWYgKG9bc10gPT0gbltzXSkgaSArPSBOdW1iZXIoTWF0aC5wb3coMTAsIG8ubGVuZ3RoIC0gYSkpO2Vsc2UgaWYgKE51bWJlcihvW2FdKSAmJiBOdW1iZXIoblthXSkpIHtcbiAgICAgICAgICAgIHZhciBjID0gTWF0aC5hYnMoTnVtYmVyKG9bYV0pIC0gTnVtYmVyKG5bYV0pKTtcbiAgICAgICAgICAgIGkgKz0gTnVtYmVyKE1hdGgucG93KDEwLCBvLmxlbmd0aCAtIGEpIC8gKGMgKyAxKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSxcbiAgICAgIGMgPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSAhPT0gdDtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGUsXG4gICAgICAgICAgc2ltaWxhcml0eTogcyh0LCBlKVxuICAgICAgICB9O1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdC5zaW1pbGFyaXR5IC0gZS5zaW1pbGFyaXR5O1xuICAgICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhjKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYsXG4gICAgICAgICAgZCA9IHAudmFsdWUubmFtZTtcbiAgICAgICAgaWYgKDAgIT09IChmID0gYS5nZXRBbGxJbmRleGVzSW5UYWJsZShkKSkubGVuZ3RoICYmICFmLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHIuaW5jbHVkZXMoZSk7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgZi5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhci5pbmNsdWRlcyhlKTtcbiAgICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY1swXS5uYW1lO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldFRpbGVEaW1cIilcbiAgc3RhdGljIGdldFRpbGVDb3VudERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gXCIwM1wiO1xuICB9XG4gIHN0YXRpYyBnZXRNYUppYW5nV2VpRHUoZSwgdCwgbywgbikge1xuICAgIGZvciAodmFyIGkgPSBFeHRyYWN0Tm9ybWFsTGV2ZWxzLmdldEluc3RhbmNlKCksIHIgPSB0aGlzLmdldERpbWVuc2lvbk9yZGVyKCksIGEgPSAwLCBsID0gMCwgcyA9IFtdLCBjID0gMDsgYyA8IHIubGVuZ3RoOyBjKyspIHtcbiAgICAgIHZhciB1ID0gXCJcIjtcbiAgICAgIHN3aXRjaCAocltjXSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKG51bGwgPT09ICh1ID0gdGhpcy5nZXROZW5nTGlXZWlEdShuKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgJDlhbPljaHmir3lj5bjgJHog73lipvlgLznu7TluqborqHnrpflpLHotKXvvIzop6blj5HlhZzlupVcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB1ID0gdGhpcy5HZXREaW1lbnNpb24oYSk7XG4gICAgICAgICAgYSsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdSA9IHRoaXMuZ2V0RGVhdGhMdk1lbnNpb24odCwgbiwgbywgbCwgZSk7XG4gICAgICAgICAgbCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdSA9IHRoaXMuZ2V0VGlsZUNvdW50RGltZW5zaW9uKG4pO1xuICAgICAgfVxuICAgICAgcy5wdXNoKHUpO1xuICAgIH1cbiAgICB2YXIgcCA9IHMuam9pbihcIl9cIiksXG4gICAgICBmID0gaS5nZXRBbGxOYW1lc0RhdGEoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbE5hbWUoZiwgcCk7XG4gIH1cbiAgc3RhdGljIGdldEd1aWRlTnVtKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IFRyYWl0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRyYWl0RGF0YShcIkZpeGVkTGV2ZWxzXCIpO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmZpeExldmVsQXJyKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmxlbmd0aCkgfHwgMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRNYXhORGllTGV2ZWxcIilcbiAgc3RhdGljIGdldE1heE5vdERpZUxldmVsKCkge1xuICAgIHJldHVybiA0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldERlYXRoTHZcIilcbiAgc3RhdGljIGdldERlYXRoTHZNZW5zaW9uKGUsIHQsIG8sIG4gPSAwLCBpPykge1xuICAgIG8gfHwgKG8gPSB0aGlzLmdldE1heE5vdERpZUxldmVsKCkpO1xuICAgIFwibnVtYmVyXCIgIT0gdHlwZW9mIGUgJiYgKGUgPSAxKTtcbiAgICB2YXIgciA9IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgYSA9IHIuZGllRGltZW5zaW9uVmFsdWUgfHwgMTtcbiAgICBpZiAodCA8PSBvKSBhID0gMTtlbHNlIGlmICh0aGlzLmhhc0RlYXRoRGlyZWN0QWRqdXN0KGkpKSB7XG4gICAgICB2YXIgbCA9IHRoaXMuZ2V0RGVhdGhEaXJlY3RBZGp1c3QoaSk7XG4gICAgICBhID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oNCwgYSArIGwpKTtcbiAgICB9IGVsc2Ugc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHZhciBzID0gdGhpcy5nZXREZWF0aEZhaWxBZGp1c3Qobik7XG4gICAgICAgIGEgPSBNYXRoLm1heChhICsgcywgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0RGVhdGhQYXNzQWRqdXN0KG4pO1xuICAgICAgICBhID0gTWF0aC5taW4oYSArIGMsIDQpO1xuICAgIH1cbiAgICByLmRpZURpbWVuc2lvblZhbHVlID0gYTtcbiAgICB0aGlzLnNhdmVEYXRhKHIpO1xuICAgIHJldHVybiBcIjBcIiArIE1hdGguYWJzKGEpO1xuICB9XG4gIHN0YXRpYyBHZXREaW1lbnNpb24oZSA9IDApIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0QWxsRGlyZWN0UmVhZFdlaWdodHMoKSxcbiAgICAgIG8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICBvID0gb1tlXTtcbiAgICB2YXIgbiA9IDA7XG4gICAgby5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBuICs9IE51bWJlcihlKTtcbiAgICB9KTtcbiAgICBmb3IgKHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG4gKyAxKSksIHIgPSAwLCBhID0gMSwgbCA9IDA7IGwgPCBvLmxlbmd0aDsgKytsKSBpZiAoaSA8PSAociArPSBvW2xdKSkge1xuICAgICAgYSA9IGwgKyAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBcIjBcIiArIGE7XG4gIH1cbiAgc3RhdGljIGNoZWNrRml4ZWRSVUFuZERVKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IG51bGwgPT09IChlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJFeHRyYWN0VG9vbFwiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICBpZiAodCA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgdCA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldERhdGEoKSxcbiAgICAgICAgbiA9IHRoaXMuZ2V0T3JpZ2luQ29uZmlnRGF0YSgpO1xuICAgICAgaWYgKG8gJiYgby5zdWJBcnIgJiYgbikge1xuICAgICAgICBpZiAoby5zdWJBcnIpIHtcbiAgICAgICAgICB0aGlzLnByaW50U3ViQXJyU3RhdHVzKFwi5omT5Y2w5L+u5q2j5YmN55qE6IO95Yqb5YC85Yy66Ze05ZKM572u5L+h5bqm5Yy66Ze0XCIsIG8uc3ViQXJyKTtcbiAgICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICAgIG8uc3ViQXJyICYmIG8uc3ViQXJyLmxlbmd0aCA+IDAgJiYgby5zdWJBcnIubGVuZ3RoICE9PSBuLkNhcGFiaWxpdHlEaW1lbnNpb25OYW1lLmxlbmd0aCAmJiAodGhpcy5pc0ZpeCA9IHRydWUpO1xuICAgICAgICAgIGZvciAodmFyIHIgPSBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBuLkNhcGFiaWxpdHlEaW1lbnNpb25OYW1lW2VdLFxuICAgICAgICAgICAgICAgIHIgPSBvLnN1YkFyci5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZS5kaW1lbnNpb25OYW1lID09PSB0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAobnVsbCA9PSByKSB7XG4gICAgICAgICAgICAgICAgbC5pc0ZpeCA9IHRydWU7XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBlLFxuICAgICAgICAgICAgICAgICAgZGltZW5zaW9uTmFtZTogdCxcbiAgICAgICAgICAgICAgICAgIHN1YlNtaW46IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGVdLFxuICAgICAgICAgICAgICAgICAgc3ViU21heDogbi5EaWZmdWx0eUludGVydmFsc1syICogZSArIDFdLFxuICAgICAgICAgICAgICAgICAgcnU6IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGVdLFxuICAgICAgICAgICAgICAgICAgZHU6IGwuSW5pdER1LFxuICAgICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgYlZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgZGllUmVzdWx0OiAxXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuLkRpZmZ1bHR5SW50ZXJ2YWxzWzIgKiBlXSAhPT0gci5zdWJTbWluIHx8IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGUgKyAxXSAhPT0gci5zdWJTbWF4KSB7XG4gICAgICAgICAgICAgICAgbC5pc0ZpeCA9IHRydWU7XG4gICAgICAgICAgICAgICAgci5ydSA9IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGVdICsgKHIucnUgLSByLnN1YlNtaW4pICogKG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGUgKyAxXSAtIG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGVdKSAvIChyLnN1YlNtYXggLSByLnN1YlNtaW4pO1xuICAgICAgICAgICAgICAgIHIuc3ViU21pbiA9IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGVdO1xuICAgICAgICAgICAgICAgIHIuc3ViU21heCA9IG4uRGlmZnVsdHlJbnRlcnZhbHNbMiAqIGUgKyAxXTtcbiAgICAgICAgICAgICAgICByLnJ1ID0gTWF0aC5tYXgoci5ydSwgbi5NaW5EaWZmdWx0eSk7XG4gICAgICAgICAgICAgICAgci5kdSA9PT0gbC5Jbml0RHUgJiYgci5ydSAhPT0gbi5EaWZmdWx0eUludGVydmFsc1syICogZV0gJiYgKHIucnUgPSBuLkRpZmZ1bHR5SW50ZXJ2YWxzWzIgKiBlXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgci5pbmRleCA9IGU7XG4gICAgICAgICAgICAgIGkucHVzaChyKTtcbiAgICAgICAgICAgIH0sIGwgPSB0aGlzLCBzID0gMDsgcyA8IG4uQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUubGVuZ3RoOyBzKyspIHIocyk7XG4gICAgICAgICAgdGhpcy5pc0ZpeCAmJiBpLmxlbmd0aCA+IDAgJiYgKG8uc3ViQXJyID0gaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNGaXgpIHtcbiAgICAgICAgICBvLmN1cnJlbnRBbGxDYXBhYmlsaXR5RGltZW5zaW9uTmFtZSB8fCAoby5jdXJyZW50QWxsQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUgPSBbXSk7XG4gICAgICAgICAgby5jdXJyZW50QWxsQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUgPSBbLi4ubi5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZV07XG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVyYWxsKG8pO1xuICAgICAgICAgIHRoaXMucHJpbnRTdWJBcnJTdGF0dXMoXCLmiZPljbDog73lipvlgLzljLrpl7Qs572u5L+h5bqm5Yy66Ze0XCIsIG8uc3ViQXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcHJpbnRTdWJBcnJTdGF0dXMoZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGg7IG8rKykgKG51bGwgPT0gKG4gPSB0W29dKS5ydSB8fCBpc05hTihuLnJ1KSkgJiYgKG4ucnUgPSBuLnN1YlNtaW4pO1xuICAgIHZhciBuO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEFsSXRlbVwiKVxuICBzdGF0aWMgZ2V0QWx0ZXJJdGVtKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEluaXRDYXBSVVwiKVxuICBzdGF0aWMgZ2V0SW5pdGlhbENhcGFiaWxpdHlSVShlLCB0KSB7XG4gICAgcmV0dXJuIHQuTWluRGlmZnVsdHk7XG4gIH1cbiAgc3RhdGljIGdldE5lbmdMaVdlaUR1KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgbyA9IHRoaXMuZ2V0Q29uZmlnRGF0YSgpO1xuICAgIGlmICghbykge1xuICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkeiDveWKm+WAvOe7tOW6puiuoeeul+Wksei0pSAtIOmFjee9ruaVsOaNruS4jeWtmOWcqFwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZ2V0T3JpZ2luQ29uZmlnRGF0YSgpLFxuICAgICAgaSA9ICF0LnJ1LFxuICAgICAgciA9IHQucnUsXG4gICAgICBsID0gdC5kdTtcbiAgICByID0gciA/IE1hdGgubWF4KHIsIG8uTWluRGlmZnVsdHkpIDogby5NaW5EaWZmdWx0eTtcbiAgICByID0gdGhpcy5nZXRBZGp1c3ROZW5nUlUocik7XG4gICAgbCA9IGwgPyBNYXRoLm1heChsLCAzMCkgOiAzMDtcbiAgICBpZiAoaSkge1xuICAgICAgdC5zdWJBcnIgPSBbXTtcbiAgICAgIGZvciAodmFyIHMgPSBuLkRpZmZ1bHR5SW50ZXJ2YWxzLCBjID0gbi5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZSwgdSA9IDA7IHUgPCBzLmxlbmd0aDsgdSArPSAyKSB7XG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBwLnJ1ID0gdGhpcy5nZXRJbml0aWFsQ2FwYWJpbGl0eVJVKHUsIG4pO1xuICAgICAgICBwLmR1ID0gdGhpcy5nZXRJbml0aWFsRHUoKTtcbiAgICAgICAgcC5iVmFsdWUgPSAwO1xuICAgICAgICBwLmluZGV4ID0gTWF0aC5mbG9vcih1IC8gMik7XG4gICAgICAgIHAuc3ViU21pbiA9IHNbdV07XG4gICAgICAgIHAuc3ViU21heCA9IHNbdSArIDFdO1xuICAgICAgICBwLmRpbWVuc2lvbk5hbWUgPSBjW01hdGguZmxvb3IodSAvIDIpXTtcbiAgICAgICAgdC5zdWJBcnIucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHIgPSAoTyA9IHQuc3ViQXJyWzBdKS5ydTtcbiAgICAgIHQucnUgPSBPLnJ1O1xuICAgICAgdC50aWdnZXJQYXRjaDMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrRml4ZWRSVUFuZERVKCk7XG4gICAgICB0ID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICB0aGlzLmlzRml4ID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGYgPSBNYXRoLmxvZyhlKSAvIE1hdGgubG9nKDEuMyksIGQgPSByICogTWF0aC5taW4oZiwgMTApIC8gMTAwLCBoID0gbmV3IERhdGUoKS5nZXRUaW1lKCksIHkgPSBvLk1pbkRpZmZ1bHR5LCBtID0gby5NYXhEaWZmdWx0eSwgdiA9IDAsIGcgPSAwLCBfID0gMDs7KSB7XG4gICAgICBfKys7XG4gICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBoID49IHRoaXMudGltZU91dE1heCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi6K6h566X6LaF5pe2KFwiICsgdGhpcy50aW1lT3V0TWF4ICsgXCJtcynvvIzlvqrnjq/mrKHmlbA6IFwiICsgXyArIFwi77yM6buY6K6k5L2/55So57Si5byVMFwiKTtcbiAgICAgICAgdiA9IE1hdGgubWF4KDAsIHYpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGcgPSB0aGlzLmdldEQociwgZCwgeSwgbSwgdCwgZSk7XG4gICAgICB2YXIgVCA9IHRoaXMuZ2V0QWx0ZXJJdGVtKGUpLFxuICAgICAgICBDID0gbnVsbCAhPSBUICYmIFQuc29ydENhcGFiaWxpdHlEaW1lbnNpb25OYW1lTGlzdCAmJiBULnNvcnRDYXBhYmlsaXR5RGltZW5zaW9uTmFtZUxpc3QubGVuZ3RoID4gMCxcbiAgICAgICAgYiA9IFtdO1xuICAgICAgaWYgKEMpIHtcbiAgICAgICAgdmFyIEUgPSB0aGlzLkZpeERVc2VBbHRlckRpbWVuc2lvbk5hbWVMaXN0KGcsIHQuc3ViQXJyLCBULCBvKTtcbiAgICAgICAgZyA9IEUuZml4ZWREO1xuICAgICAgICBiID0gRS5hbHRlckl0ZW1zO1xuICAgICAgfVxuICAgICAgdmFyIFMgPSBbXTtcbiAgICAgIGlmICh0aGlzLmlzT3BlblBhdGNoMigpICYmIGwgPCAyNTApIHtcbiAgICAgICAgdmFyIEkgPSB0aGlzLmdldFBhdGNoMDIwMSgpLFxuICAgICAgICAgIHcgPSB0aGlzLmdldFBhdGNoMDIwMigpLFxuICAgICAgICAgIEIgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBbLi4udC5zdWJBcnIubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5zdWJTbWluO1xuICAgICAgICAgIH0pXSksXG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5taW4odC5zdWJBcnIubGVuZ3RoIC8gMyArIDEsIHcpKTtcbiAgICAgICAgZm9yICh1ID0gMDsgdSA8IHQuc3ViQXJyLmxlbmd0aDsgKyt1KSBpZiAoKE8gPSB0LnN1YkFyclt1XSkuaXNPcGVuKSB7XG4gICAgICAgICAgaWYgKFMubGVuZ3RoIDwgeCAmJiBPLnN1YlNtYXggPD0gQiArIEkgKiAociAtIEIpKSB7XG4gICAgICAgICAgICBPLmR1ID0gNDAwO1xuICAgICAgICAgICAgTy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIFMucHVzaCh1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBTLnB1c2godSk7XG4gICAgICB9XG4gICAgICB2YXIgTSA9IFtdO1xuICAgICAgZm9yICh1ID0gMDsgdSA8IHQuc3ViQXJyLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgIHZhciBPID0gdC5zdWJBcnJbdV07XG4gICAgICAgIG8uQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUuaW5jbHVkZXMoTy5kaW1lbnNpb25OYW1lKSAmJiBPLnN1YlNtaW4gPD0gZyAmJiBnIDw9IE8uc3ViU21heCAmJiAhUy5pbmNsdWRlcyh1KSAmJiBNLnB1c2godSk7XG4gICAgICB9XG4gICAgICBDICYmIChNID0gdGhpcy5CZWZvcmVBbHRlckRpbWVuc2lvbk5hbWVMaXN0KGIsIFMsIGcpKTtcbiAgICAgIGlmICgwID09IE0ubGVuZ3RoKSB7XG4gICAgICAgIHZhciBEID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgZm9yICh1ID0gMDsgdSA8IHQuc3ViQXJyLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgTyA9IHQuc3ViQXJyW3VdO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhnIC0gTy5zdWJTbWluKSA8IEQpIHtcbiAgICAgICAgICAgIGcgPSBPLnN1YlNtaW47XG4gICAgICAgICAgICBEID0gTWF0aC5hYnMoZyAtIE8uc3ViU21pbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChNYXRoLmFicyhnIC0gTy5zdWJTbWF4KSA8IEQpIHtcbiAgICAgICAgICAgIGcgPSBPLnN1YlNtYXg7XG4gICAgICAgICAgICBEID0gTWF0aC5hYnMoZyAtIE8uc3ViU21heCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBQID0gdGhpcy5nZXREKHIsIGQsIHksIG0sIHQsIGUpO1xuICAgICAgICBnID0gTWF0aC5tYXgoZywgUCk7XG4gICAgICAgIGZvciAodSA9IDA7IHUgPCB0LnN1YkFyci5sZW5ndGg7IHUrKykge1xuICAgICAgICAgIE8gPSB0LnN1YkFyclt1XTtcbiAgICAgICAgICBvLkNhcGFiaWxpdHlEaW1lbnNpb25OYW1lLmluY2x1ZGVzKE8uZGltZW5zaW9uTmFtZSkgJiYgTy5zdWJTbWluIDw9IGcgJiYgZyA8PSBPLnN1YlNtYXggJiYgIVMuaW5jbHVkZXModSkgJiYgTS5wdXNoKHUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoTS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHYgPSBNW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE0ubGVuZ3RoKV07XG4gICAgICAgIGlmICghdGhpcy5pc09wZW5QYXRjaDQoKSkge1xuICAgICAgICAgIE4gPSB2O1xuICAgICAgICAgIGlmICghdGhpcy5pc09wZW5QYXRjaDEoKSkgYnJlYWs7XG4gICAgICAgICAgdiA9IHRoaXMuU2VsZWN0Q2FwYWJpbGl0eVJhbmdlKHQuc3ViQXJyLCBNLCB2KTtcbiAgICAgICAgICBDICYmICh2ID0gdGhpcy5BbHRlckNob29zZUluZGV4Rml4KE4sIHYpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgQSA9IHRydWU7XG4gICAgICAgIGZvciAodSA9IDA7IHUgPCBNLmxlbmd0aDsgKyt1KSB7XG4gICAgICAgICAgdmFyIFIgPSBNW3VdO1xuICAgICAgICAgIGlmICh0LnN1YkFycltSXSAmJiB0LnN1YkFycltSXS5iVmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBBID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQSAmJiB0aGlzLkFsbER1bGxWYWxSZWR1Y2UodC5zdWJBcnIsIE0pO1xuICAgICAgICBpZiAoIUEpIHtcbiAgICAgICAgICB2YXIgTiA9IHY7XG4gICAgICAgICAgaWYgKHRoaXMuSXNTYXRpc2Z5KHQuc3ViQXJyLCB2KSkge1xuICAgICAgICAgICAgTSA9IHRoaXMuR2V0Q2FuU2VsZWN0SW5kZXhMaXN0KHQuc3ViQXJyLCBNKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlblBhdGNoMSgpKSB7XG4gICAgICAgICAgICAgIHYgPSB0aGlzLlNlbGVjdENhcGFiaWxpdHlSYW5nZSh0LnN1YkFyciwgTSwgdik7XG4gICAgICAgICAgICAgIEMgJiYgKHYgPSB0aGlzLkFsdGVyQ2hvb3NlSW5kZXhGaXgoTiwgdikpO1xuICAgICAgICAgICAgICB0aGlzLkFkZER1bGxWYWwodC5zdWJBcnIsIHYpO1xuICAgICAgICAgICAgICBOICE9IHYgJiYgdGhpcy5EdWxsVmFsUmVkdWNlKHQuc3ViQXJyLCBOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2ID0gKE0gPSB0aGlzLkdldENhblNlbGVjdEluZGV4TGlzdCh0LnN1YkFyciwgTSkpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE0ubGVuZ3RoKV07XG4gICAgICAgICAgdGhpcy5pc09wZW5QYXRjaDEoKSAmJiAodiA9IHRoaXMuU2VsZWN0Q2FwYWJpbGl0eVJhbmdlKHQuc3ViQXJyLCBNLCB2KSk7XG4gICAgICAgICAgQyAmJiAodiA9IHRoaXMuQWx0ZXJDaG9vc2VJbmRleEZpeChOLCB2KSk7XG4gICAgICAgICAgdGhpcy5BZGREdWxsVmFsKHQuc3ViQXJyLCB2KTtcbiAgICAgICAgICBOICE9IHYgJiYgdGhpcy5EdWxsVmFsUmVkdWNlKHQuc3ViQXJyLCBOKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaiA9IDQwMCA9PSB0LnN1YkFyclt2XS5kdSA/IHIgOiB0LnN1YkFyclt2XS5ydSxcbiAgICAgIGsgPSBuLkNhcGFiaWxpdHlEaW1lbnNpb25OYW1lO1xuICAgIHQgJiYgbnVsbCA9PSB0LmN1cnJlbnRBbGxDYXBhYmlsaXR5RGltZW5zaW9uTmFtZSAmJiAodC5jdXJyZW50QWxsQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUgPSBbLi4ubi5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZV0pO1xuICAgIHQuY2hvb3NlSW5kZXggPSB2O1xuICAgIHQuZGlmZmN1bHQgPSBnO1xuICAgIHQucnUgPSByO1xuICAgIHQuZHUgPSBsO1xuICAgIHRoaXMuc2F2ZURhdGEodCk7XG4gICAgaWYgKDAgPT0gaikge1xuICAgICAgcmV0dXJuIGtbdl07XG4gICAgfVxuICAgIHJldHVybiBrW3ZdO1xuICB9XG4gIHN0YXRpYyBTZWxlY3RDYXBhYmlsaXR5UmFuZ2UoZSwgdCwgbykge1xuICAgIHZhciBuID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgaWYgKHQubGVuZ3RoID4gMCAmJiBlW29dLmR1ID09IHRoaXMuSW5pdER1KSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBuLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUuc3ViU21pbiAtIHQuc3ViU21pbjtcbiAgICAgIH0pO1xuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBuLmxlbmd0aDsgcisrKSBpZiAoZVtvXS5pbmRleCA9PT0gbltyXS5pbmRleCkge1xuICAgICAgICBpID0gcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgYSA9IG51bGwsXG4gICAgICAgIGwgPSAwO1xuICAgICAgZm9yIChyID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIGlmIChuW3JdLmR1IDwgdGhpcy5Jbml0RHUpIGlmIChudWxsID09IGEpIGEgPSBuW3JdO2Vsc2UgaWYgKG5bcl0uc3ViU21pbiA+IGEuc3ViU21pbikge1xuICAgICAgICBhID0gbltyXTtcbiAgICAgICAgbCA9IHI7XG4gICAgICB9XG4gICAgICB2YXIgcyxcbiAgICAgICAgYyA9IHRoaXMuZ2V0UGF0Y2gwMTAxKCk7XG4gICAgICBzID0gLTEgIT0gYyA/IGMgOiBNYXRoLm1pbihNYXRoLm1heChuLmxlbmd0aCAvIDUsIDEpLCAzKSArIGw7XG4gICAgICB2YXIgdSA9IE1hdGguZmxvb3IoTWF0aC5taW4ocywgaSkpLFxuICAgICAgICBwID0gTWF0aC5mbG9vcihNYXRoLm1heChzLCBpKSk7XG4gICAgICBmb3IgKHIgPSB1OyByIDw9IHA7IHIrKykge1xuICAgICAgICB2YXIgZiA9IG5bcl07XG4gICAgICAgIGlmIChmLmJWYWx1ZSA8IDEpIHtcbiAgICAgICAgICBvID0gZi5pbmRleDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBzdGF0aWMgRHVsbFZhbFJlZHVjZShlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmluZGV4ID09IHQ7XG4gICAgfSk7XG4gICAgaWYgKG51bGwgIT0gbyAmJiBvLmJWYWx1ZSA+PSAxKSB7XG4gICAgICBvLmJWYWx1ZSAtPSAxO1xuICAgICAgby5iVmFsdWUgPSBNYXRoLm1pbihvLmJWYWx1ZSwgMC4zKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIEFkZER1bGxWYWwoZSwgdCkge1xuICAgIGVbdF0uYlZhbHVlICs9IHRoaXMuZ2V0UGF0Y2gwNDAxKCk7XG4gIH1cbiAgc3RhdGljIEdldENhblNlbGVjdEluZGV4TGlzdChlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IFtdLCBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gZVt0W25dXTtcbiAgICAgIG51bGwgIT0gaSAmJiBpLmJWYWx1ZSA8IDEgJiYgby5wdXNoKHRbbl0pO1xuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBzdGF0aWMgSXNTYXRpc2Z5KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRydWU7XG4gICAgZVt0XS5iVmFsdWUgPj0gMSAmJiAobyA9IGZhbHNlKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBzdGF0aWMgQWxsRHVsbFZhbFJlZHVjZShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgbiA9IGVbdFtvXV07XG4gICAgICBpZiAobnVsbCAhPSBuICYmIG4uYlZhbHVlID49IDEpIHtcbiAgICAgICAgbi5iVmFsdWUgLT0gMTtcbiAgICAgICAgbi5iVmFsdWUgPSBNYXRoLm1pbihuLmJWYWx1ZSwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIGNsYW1wKGUsIHQsIG8pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodCwgTWF0aC5taW4oZSwgbykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2NhbGNEXCIpXG4gIHN0YXRpYyBjYWxjRGlmZmljdWx0eVZhbHVlKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IDEgLSBNYXRoLnJhbmRvbSgpLFxuICAgICAgaSA9IDEgLSBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBlICogbyArIHQgKiAoTWF0aC5zcXJ0KC0yICogTWF0aC5sb2cobikpICogTWF0aC5zaW4oMiAqIE1hdGguUEkgKiBpKSk7XG4gIH1cbiAgc3RhdGljIGdldEQoZSwgdCwgbywgbiwgaSwgcikge1xuICAgIHZhciBhID0gdGhpcy5nZXRBZGp1c3RlZFJVKDAuOSksXG4gICAgICBsID0gdGhpcy5nZXRNKCksXG4gICAgICBzID0gdGhpcy5jYWxjRGlmZmljdWx0eVZhbHVlKGUsIHQsIGEsIGwsIHIpO1xuICAgIHMgPSB0aGlzLmNsYW1wKHMsIG8sIG4pO1xuICAgIGlmICh0aGlzLmlzT3BlblBhdGNoMygpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuZ2V0UGF0Y2gwMzAxKCk7XG4gICAgICBpZiAoZSA8PSBuIC0gYyAqIChuIC0gbykgfHwgMCA9PSBpLnRpZ2dlclBhdGNoMyB8fCAyID09IGkudGlnZ2VyUGF0Y2gzKSB7XG4gICAgICAgIDAgPT0gaS50aWdnZXJQYXRjaDMgJiYgKGkudGlnZ2VyUGF0Y2gzID0gMSk7XG4gICAgICAgIHZhciB1ID0gTWF0aC5taW4oTWF0aC5sb2cocikgLyBNYXRoLmxvZygxLjIpLCAxMCkgLyAxMCAqIChuIC0gYyAqIChuIC0gbykpO1xuICAgICAgICBzID0gTWF0aC5tYXgocywgdSk7XG4gICAgICB9IGVsc2UgaS50aWdnZXJQYXRjaDMgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuICBzdGF0aWMgQmVmb3JlQWx0ZXJEaW1lbnNpb25OYW1lTGlzdChlLCB0LCBvKSB7XG4gICAgdGhpcy5fYWx0ZXJJbmRleHMgPSBbXTtcbiAgICB2YXIgbiA9IHRoaXMuZ2V0Q29uZmlnRGF0YSgpO1xuICAgIGlmIChudWxsICE9IGUpIGZvciAodmFyIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHIgPSBlW2ldO1xuICAgICAgbi5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZS5pbmNsdWRlcyhyLmRpbWVuc2lvbk5hbWUpICYmIHIuc3ViU21pbiA8PSBvICYmIG8gPD0gci5zdWJTbWF4ICYmICF0LmluY2x1ZGVzKGVbaV0uaW5kZXgpICYmIHRoaXMuX2FsdGVySW5kZXhzLnB1c2goci5pbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hbHRlckluZGV4cztcbiAgfVxuICBzdGF0aWMgRml4RFVzZUFsdGVyRGltZW5zaW9uTmFtZUxpc3QoZSwgdCwgbywgbikge1xuICAgIHRoaXMuYWx0ZXJJbnRlcnZhbEl0ZW1zID0gW107XG4gICAgaWYgKG51bGwgIT0gdCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgICB2YXIgciA9IG8uc29ydENhcGFiaWxpdHlEaW1lbnNpb25OYW1lTGlzdFtlXSxcbiAgICAgICAgICAgIGEgPSB0LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihlLmRpbWVuc2lvbk5hbWUpID09PSBOdW1iZXIocik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobnVsbCAhPSBhKSB7XG4gICAgICAgICAgICBpZiAoIW4uQ2FwYWJpbGl0eURpbWVuc2lvbk5hbWUuaW5jbHVkZXMoYS5kaW1lbnNpb25OYW1lKSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIGlmIChhLmlzT3BlbiAmJiBpIDwgby5hbHRlck1heENvdW50KSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgbC5hbHRlckludGVydmFsSXRlbXMucHVzaChhKTtcbiAgICAgICAgICAgIH0gZWxzZSBhLmlzT3BlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGwgPSB0aGlzLCBzID0gMDsgcyA8IG8uc29ydENhcGFiaWxpdHlEaW1lbnNpb25OYW1lTGlzdC5sZW5ndGg7IHMrKykgcihzKTtcbiAgICAgIGlmICh0aGlzLmFsdGVySW50ZXJ2YWxJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgWy4uLnRoaXMuYWx0ZXJJbnRlcnZhbEl0ZW1zLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuc3ViU21pbjtcbiAgICAgICAgICB9KV0pLFxuICAgICAgICAgIHUgPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4udGhpcy5hbHRlckludGVydmFsSXRlbXMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5zdWJTbWF4O1xuICAgICAgICAgIH0pXSk7XG4gICAgICAgIGUgPSB0aGlzLmNsYW1wKGUsIGMsIHUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZml4ZWREOiBlLFxuICAgICAgYWx0ZXJJdGVtczogdGhpcy5hbHRlckludGVydmFsSXRlbXNcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBBbHRlckNob29zZUluZGV4Rml4KGUsIHQpIHtcbiAgICByZXR1cm4gdGhpcy5fYWx0ZXJJbmRleHMuaW5jbHVkZXModCkgPyB0IDogZTtcbiAgfVxuICBzdGF0aWMgY2FsY3VsYXRlU3RhY2tlZEZhY3Rvcih0LCBvID0gRXh0cmFjdERpbWVuc2lvbi5ERUNBWV9DT0VGRklDSUVOVCkge1xuICAgIGlmICghdCB8fCAwID09PSB0Lmxlbmd0aCkgcmV0dXJuIDE7XG4gICAgdmFyIG4gPSB0LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgPiAwO1xuICAgIH0pO1xuICAgIGlmICgwID09PSBuLmxlbmd0aCkgcmV0dXJuIDE7XG4gICAgdmFyIGkgPSBuLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSA+IDE7XG4gICAgICB9KSxcbiAgICAgIHIgPSBuLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSA8IDE7XG4gICAgICB9KSxcbiAgICAgIGEgPSAxO1xuICAgIGlmIChpLmxlbmd0aCA+IDApIHtcbiAgICAgIGkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdCAtIGU7XG4gICAgICB9KTtcbiAgICAgIGZvciAodmFyIGwgPSAwLCBzID0gMDsgcyA8IGkubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLnBvdyhzICsgMSwgbyk7XG4gICAgICAgIGwgKz0gKGlbc10gLSAxKSAvIGM7XG4gICAgICB9XG4gICAgICBhID0gMSArIGw7XG4gICAgfVxuICAgIHZhciB1ID0gMTtcbiAgICBpZiAoci5sZW5ndGggPiAwKSB7XG4gICAgICByLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgLSB0O1xuICAgICAgfSk7XG4gICAgICBmb3IgKGwgPSAwLCBzID0gMDsgcyA8IHIubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgYyA9IE1hdGgucG93KHMgKyAxLCBvKTtcbiAgICAgICAgbCArPSAoMSAtIHJbc10pIC8gYztcbiAgICAgIH1cbiAgICAgIHUgPSAxIC0gbDtcbiAgICB9XG4gICAgcmV0dXJuIGEgKiB1O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEZhY3RvclJcIilcbiAgc3RhdGljIGdldGZpbmFsRmFjdG9yUmF0ZSgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRGYWN0b3JSTlwiKVxuICBzdGF0aWMgZ2V0ZmluYWxGYWN0b3JSYXRlTigpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdE5vcm1hbExldmVscyB7XG4gIG1hX2xldmVsX2RhdGFfY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGhzTWFOYW1lc19jYWNoZSA9IG5ldyBNYXAoKTtcbiAgaHNNYUppYW5nT2Zmc2V0RGF0YV9jYWNoZSA9IG5ldyBNYXAoKTtcbiAgYm9hcmRDb25maWdfY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbmZpZ0RhdGFfY2FjaGUgPSBuZXcgTWFwKCk7XG4gIG9yaWdpbkNvbmZpZ0RhdGFfY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGRvdURpUG9vbCA9IFtcIjU3NjYxMDcyNjI2MTY3MzE5MzIsMzgzOTMzMzMyODIyNzY5Njg1LDQ5MDAyMTY1NjI2ODM3NDU2MTYsNDEwOTUzODk4MjIxMjQwMzYsMTIyNDk3OTA5ODgyMzAzNDEzMiwyMTk5MDIzMjcxOTM3LDIxODE1NjI0OTh8NTEwMDM3MDY1MzQ4ODM0OTE4NCwxNDE5NjcxMjc4MzQ5MDQxNzY2NSwxMTE2NzQyMjQ4OTE1MjQ3MDEyMiwzNDY2MDEwODgyMTgyMjQzMTM3LDE2Nzk1MjUyNTExMjg1NjY2NDYwLDQyMTM5ODg4NTQyMDc5Nzk4NTAsOTc2NjM0MDAxOTQ4NjkxMTI2MSwxNDcxMzczMFwiLCBcIjk2MDUzMzU4NzEwMzU5MzI0LDM4NDIxMzQzNDgxMzY2NjY0MCwxNTM2ODUzNzM5MjU0NjY2NTYwLDMwNzE0NTU2NzgxNTg3NzY4MzIsOTgzNTg2MzkzMTIyOTgzMzIxNiw2MDUyODM3ODk5MTg4NjA5MDI0LDU1NzA1NjEsMCwxODQ3MTc5NTM0NjYzNjgsMCwwfDEzNTM2MTgyMTM4ODMwODQ4MDAsMTY1NDEzNzQ0MDI4MTQxMDk0ODgsNzQxODQ1NTE3MjcwMTA3MjU4MSwxMjM0ODc5NjY3ODI0MTI4NzkyLDcyNTIxMzM1ODc1NjM3NzU4MDAsOTM1Njk2Nzc2OTcyMjIzMTQyOSw5ODA3ODczMjg4NjQzNzM2NDgyLDkzOTAxNTkwNjc1MjkwNTU1NDIsMjMzNzAyNDU3NTg3M1wiLCBcIjk2MDUzMzU4NzA4Nzg2NDQ0LDM4NDIxMzQzNDgxMzY2NjY0MCw0NzY1MTA4OTM4ODQ2ODUyNDE2LDI0NTkyNjU1NjQzMDkyMjc1ODgsMjM0NTA1MzM2NTI0OCwzMjg3MDgsMjE5OTAyMzc3OTg0MCwwfDE2NzI3ODIzNjAzMzY1NTc2NzA0LDEwNjE4NjQ5MjE4NTg0MDAzNzYsMjYzMDM5Njg1NjQ1NjQ2NjUzOCw3MTI4NDEzNjE2OTgxNDI3NjU5LDE0NjM5MDMzNzY2MTUzMTgzMzk4LDI0MTk0MjY0NDQyMjYzMTM5MjgsNDEzNjY3MDcyMzIzNTIxMzQ1Nyw2OTU4OTM0MTc4XCIsIFwiOTYwNTMzNTg3MDUxMTY0MTgsMzg0MjEzNDM0ODEzNjY2NjQwLDE1MzY4NTM3MzkyNTQ2NjY1NjAsMzA3MTQ1NTA5MTg5NTkxNTc3NiwxMjI4NTgyMjU3NTE5NjAxNDU5Miw5OTQzOTU5NjkzOTA2OTQ0MDAwLDIsNzE0NjgyNTU4MDU0NDAsMjg1ODczMDIzMjIxNzYwLDB8OTk1MDc3ODI0MDEwMjU2Mzg0MCw5MjczNDQyODE4NDc4ODI1NjEyLDk3MDE2MDI5MzgwNjA4NzQ4MzUsOTQ1OTEyMTA3NjMzMDY5NTIxNSwyOTA0OTU3NzIzMjY2Mzg0NTI0LDEwNDg1NDEyMDE0MzkzMjQ1MjM0LDExMjI0OTcxNzk4ODgwMjU4MjczLDg5NTA5NjkzOTU2OTk0MDE0Niw5MTU5NjgyMjcyNzMyMjAzXCIsIFwiNjE0ODUzOTQ4Mjg5NTY4MDI4NCwxNTAxMTA4MjcyMTg5NDQwLDYxNDc0MTM4NTc4NDIyMzg4MDUsNDcwMTkzNDI3Nzg2NDI3NTk2OSwxMTcyMDgwNTEyMTg2MTg4MDMzLDIwMzA1ODY2OTc2OTg1MDkyLDI5MTE4Njk2NzQ4MjQ2NzMyOCw3MzIwMjIwMjgzOTA4OTE1NiwyNzU5NTI2OTczNDQsODM1OTgwNjgwODMwNjQ4MzIsMCwwLDB8MzA0ODI1MjQ0MTYxMTk5MzA4OCw1NDIzMDA4NzQ2NzIxODg2ODgsOTQwMjA1MTE1NjE0ODEzNTA0MywxMjIzNDY0MjQ3OTA0OTUwOTY3Nyw2OTM3ODc2Njc4NzUxODg1MzUwLDcwNzM2Nzc2MTY3NjgzOTU1MDcsMTQwMTkzMzAzNDE3NDYzODY5MjQsMTczODgxMjg5MDA4NzI5NTM3MCwxMDgyNTQyMjQzODM1ODU5MjAyNCw4MTA3Njk3NzI2ODU2MjU5NzEzLDQzNzk5NTg2OTEzODY4NDk5MFwiLCBcIjk2MDUzMzU4NzA2Njg5MjkyLDM4NDIxMzQzNDgxMzY2NjY0MCw3Njc4NjQxMDI4ODExNTQzNjgsMjMxNDg1MDU3MzU0MDgyMTUwNCw1NzE3NTk4MTg5MTI3NjgwLDQ3ODUwNzQ2MDYxODY2NTYsMTkxNDAyOTg0MjQ3NDU5ODQsMHwxNzU0MDMxMTUxMjA5MzAzMjQ0OCwxNjk0ODgzNTI4NDcyMTIwMDQxMiwxMzQxODY2NDg1NDA2NDI3MjU2Miw5MzM0OTg4NzA2NTgxNjI1MjE5LDEyNzI0MTczMTk5OTAzMDUzNDUsODY3MjQ0NDA4MDIyNTY1NDEwLDU5ODIwNjUyNjY2ODc3NjkxNjYsMTUyMTkwMDQ1MDAwMjczXCIsIFwiOTYwNTMzNTg3MDQwNjc4NTIsMzg0MjEzNDM0ODEzNjY2NjQwLDE0NDY3OTkzMzg4OTMzMDEwNTYsNTM3Mjc5NDUzNjExMTEzMjY3Miw1MTIzODk3MzMyNzM2LDEyMTA1Njc1Nzk4MzcxODk0Mjc2LDcyNjM2NTA0MjI3ODQwLDB8OTYzODQwNTMyMzQyNTMxNjg2NCw5ODI3MjcwNjk2NTIxNDg1Mzk4LDk0MDg1ODI4NTQwNDA1OTc3MTUsMTYzNjMxNzY0NDk3Mjg4NDM5NzEsNTMxMTQ0MTk0MzkxNjc3NDU1NCwxMjQ2NDE0NzAzNDA0NTc1MDQwOSw0MjI2MjU1MjQ1NzU4OTg2MzUwLDI0ODk2Mjk5OTI4NjA4MjIwMjUsMjQzXCIsIFwiOTYwNTMzNTg3MTE0MDc5MDAsMzg0MjEzNDM0ODEzNjY2NjQwLDE1MzY4NTM3MzkyNTQ2NjY1NjAsMzA3MTQ1NTEyNjI1NTQ3OTI5NiwxMTcwOTM2MTgyMjg5MjczMDM2OCw1NzY0NjA3NTIzMDM2ODk3MjgwLDExNTI5NDQ4NjkyMzAyNDc5MzYsNzE0NjgyNzI4NDQ4MDQsMzUxODQzNzIwODg4MzIsOCwwfDQ4MDI4Njc2NzIxODg0NTI4NjQsMTMyMDgxMjY3NjAyNDE1Nzk2NCw5MzgzODYxNzA5MjkyNzM2MTc5LDIzMTM2NDM2MzQ1ODQ4NTMzNDUsMTQ4NjI0MjU4NzAwNDI3NTg4NCwxMjc3NDQ0NTM5MDYxODM3MzUwLDE3OTgxOTQzODYwMTAyMzE3MDM4LDEyMTg3OTY2MzI0NzA5MzYyMTg4LDM3OTUyMDQ3OTAwOTc5MDgyMDksMjQzNTg5NDE2XCIsIFwiNjE0ODUzOTQ4Mjg5NTk0MjQyOCwxNTAxMTA4MjcyMTg5NDQwLDYxNDc0MTM4NTc4NDIyMzg4MDUsMzAwMTY2NjgzMzMwMTUwNSwxMjI4NTgyMDUxNjI5NTUxNjE2OCwxMTMwMjk3OTU0NDAyMzA0Miw0MTEyMCwyMzk5NTc0MTc2NDU4MzQyNCwxMTUyOTIxNTA0NjA2ODUxMDcyLDE2fDY5OTk4MjQxNTcyNjUzNjI5NDQsODgwNTE4NzQ5Njc2NDM3NjgxLDEzMzIyNDcxMjY3OTQ4NTgxNDk3LDg3NDYzMjA2MDk1MTI3OTQyMTAsMTAwMjI5NjU5MDI0Mzc5MzM2MTYsNjUzMzA5NTkxNzcyMDQzMzc5LDEzNDU3MjMyNjczOTMzODE2MTM4LDI1NDc4MDAxOTIxMTU2MDAxLDQxOTYxMzczMjYxMjAzNDc4NDYsMjYyOTQzNzIxXCIsIFwiNjE0ODUzOTQ4Mjg5MjAxMDI2OCwxNTAxMTA4MjcyMTg5NDQwLDYxNDc0MTM4NTc4NDIyMzg4MDUsMTgxOTA2NjUzOTg5NjAxMjksMzYwMjg4ODcyODA0NTQzMDUsMjQwMTc3MzIyNjU2NDUzNzgsNTY0MDUzNzYwMDkxMjgwLDM0MzU5NzQyNzMyOCw5NjA1MzMzNTgwMjUzMjg2NCwwLDMzNTY3NzQ0MiwzODM5MzE4NjgyMzM0MTY3MDQsMHwxNzM1MDMxMDA4NjM1Mzg3OTA0LDQ5MDYyNTA3ODQyODU0NDIxNzQsNjM2MTkzNzY2OTYyNDI3MTYwMywxNjE2MTIyNzYwNzEzODMwMjM0OCwxMjYxOTY3MDA1MTE3MTA5MDk3Niw4NjI3NjU1MzA1MjE2MDM5MywxNDIyNTIzNTk0MzczODg0NTY3NCwzOTgyMDE2MjY3NzUxMjc0NTcsMjIwMzE5MDU4NzI4NzY1MDAwMiw1OTg0MzEwNDYxNjU1NTQ2MTc3LDE2NTg1ODQzMzExMzQxMzgyMzMwLDEwMjM1MzU2MjAyOTg2OTM4NjY0LDUxMTE1XCIsIFwiOTYwNTMzNTg3MTAzNTkyOTgsMzg0MjEzNDM0ODEzNjY2NjQwLDE1MzY4NTM3MzkyNTQ2NjY1NjAsMzA3MTQ1NTY3ODE1ODk1MTY4MCwyOTI5MTY4MjIyMjA4LDk5NDM5NTY4MDc2ODk2MDkyMTYsMjMzNjQ2MjIwOTAyNDIsMCwwLDB8MzExOTA2MTgwNjQ4NDU1MzcyOCwyOTIwODYxMDI0NTE1MzMzMjUyLDEyNjg2ODI2MjM3MjkzOTk2NjY1LDEwOTkyMzM5NTM3OTM3MTk3NzQxLDI5MjM5OTI0NDk5MzE3NzQyMDksODgxODYxNDQxNzE1Njc3OTU4OCwxNzM1NTc3MjU2MTkyMjU4NjU2LDUxOTk2NzMwMzQ5NDU0Njk4NzYsMTM3Mjk2Nzc4NjQxNDdcIiwgXCI5NjA1MzM1ODcwODAwMDAyOCwzODQyMTM0MzQ4MTM2NjY2NDAsMTUzNjg1MzczOTI1NDY2NjU2MCw1OTMxMjQyMTc0OTA0ODcwMTQ0LDE4MDE5Mzg0OTY3OTEwNDAwLDE0NDExNTE4OTIyMDkwNTI5NywyMzc4MTg0Mjc3MjUyMTEzNDc0LDIxOTkwMjk5NzI5OTIyLDAsMCw2NTUzNnw2NTQyMDk1MzU0NTcyMDQ2MzM2LDE1NTQwNjk5OTg5NDA0ODg5NjQsOTE4OTUwMjMzNzg3NDc4NTA3LDI5MjgzNzg4ODE2OTQ2NDcxNTAsMTcyNzAyNTcxNjAyNDgwNDQ4NDQsMTE4NTUwMjQ5NTQxMDY0NjY4ODUsNTgyMDkxMDEyMzE4MTY4NzYxNiw0OTQzODk4MjgxNzcwNjQwMzkwLDEwNDAzNTE1ODc0MjgzNDM4OTEsMzI3Njk1OTM2NjkxMjU1N1wiLCBcIjk2MDUzMzU4NzEwMzU5MzA4LDM4NDIxMzQzNDgxMzY2NjY0MCwxNTM2ODUzNzM5MjU0NjY2NTYwLDc1NjYwNjIwMzA1NjE4MjUyOCw1NzE3NTk5MjY2NTcwNDk3LDE5OTQ1ODI5MTg3NjQ4LDcyMzQxMjY4MDM4NDE4NDMyLDB8MTMzNDI5MTQ0NjI2NzIyMjQyNTYsMTgwOTM4NDkyNDE2NDUyNTQ4MCwxNTA3MTc0MzE4NzM3NDAwMzMwLDEzODgzNTI4OTU5MzA5NTE5NzkwLDEyMTU2Mzg3NDgyNjM0NjA5MDQyLDM1OTM5NTQ1MjgwMDUwOTc4MjcsNDY1MTI0NDc3MTk4NTQ5NDk1OSwxODQyMTkyNzkwNjE0ODU5OTY2LDQ3MjQ3NjQ2NDI0NzNcIiwgXCI2MTQ4NTM5NDgyODg5OTEzMTE2LDE1MDExMDgyNzIxODk0NDAsNjE0NzQxMzg1Nzg0MjIzODgwNSw0NzAxODI4NzI0NzQ4MDA5NDczLDYwODg4NjY3MTM0Njg5OTQxNzcsMjEwMDk0Njg1NDE0MzU5MDYsNDYzNDI5MTk3NzQ5NDU0NzAyNCwxMTI1OTAwMTc2MzM1MzYwLDkyMjMzODk5MDg0ODY0NTk1MjAsNzIzMzkwNjkwMTQ2Mzg1OTQsMCwyNjg0MzU0NjAsMHwxMzI3MTU1MTkxMDAzODQ3MDY1NiwxNjg0MzA0Nzk2ODY5MDAxODk3NCwyNzc1Mzg1NzQxNjE1MjQ1NDgzLDEzNDgxNTU5MzM3NTM5MjI0NTQ1LDI1OTU0MTU4MTE4NjU4NzI1MTAsMjMxNTkxNTI5NjYxMTQ3ODIxMSwxNTI2MDc1MTIxOTY3NzkwNTY3OCw3NjA2MDYxNDg5OTIzOTMyMjY2LDczNzE5ODQ1Mzk5NTk2ODIwOSwxNDQxODMyOTAxNjQzMzI1MDg5MCwxNDQxNjUzNDgzNjM3MjM0MTUyOCw2Nzk4MzAwOTkzMDUxMjU2XCIsIFwiOTYwNTMzNTg3MDM4MDU2OTgsMzg0MjEzNDM0ODEzNjY2NjQwLDE1MzY4NTM3MzkyNTQ2NjY1NjAsNDYxNjE5MDgwNDUzOTgyMzM2MCwzMDQ0NDMzMzQ4Mzg4NzE3NTg0LDk4MDA5Njk4NTYyNTA1NTIzMjEsMjg4MzAwODE0Njg5MTEyMDgwLDQ1MDM1OTk2MjczNzA0OTc2LDQzMDg0NDE0OTc2LDQ1MDc5OTc2NzM4ODE2MDAsNTYyOTQ5OTUzNDIxMzEyLDAsMHw5Mzg2OTQwNzg5NjcxNTkxOTM2LDU3Mjk4NTYxNTAyNTE4MzEzNzQsNTA5MzYwMTA4MTQ4MTY3MjM4NCw0ODk0NDk2MjYwODgwMTA3MDg0LDcyMjY4MTg5MTU1OTkwNzQ0MDAsMTA2NzE4NTYxNTA2MDg1MTU2NzUsMTE4OTgzNjUzMjIzMzQ1ODQwNiw5ODEyNDgzMjczNzIzNzkyNTY0LDExNTc1MDYxMDE2OTgxNTg0NDQwLDY2ODEwNDM5NzQ0MFwiLCBcIjU3NjYxMDcyNjI2MjA0MDE5NDgsMzgzOTMzMzMyODIyNzY5Njg1LDU3NjYyMTI4MjQzMTM0MTkwNCw5NTk4MzI0MzA5NDQwMTM0Niw5MzY3NDg3MjI1Mjg4MTk3NDYwLDE0NTkyMzY2NDgwMzMzMjMwMDgsMzQwNzg5Nzd8MTA2MDA2NDc3MjE5NTE5NTI4OTYsNzE4MTY5Nzc5MDE1NDc4MDA5NCw5ODM2MDMzMTIxMzIwMTUwMDM0LDE2OTY0MjU3ODg3OTEzMzgyODE5LDIwOTY1MDIyMTcyMjkyMjM4MjIsMTA0NzEwODYzNzQxODM4NDUxMTQsMTI5MjExMjYxNDMzNDkzNTU1Niw3OTI4MjI5ODE0MTg0NzgwNDYyLDM2MjcyMFwiLCBcIjk2MDUzMzU4NzA0MDY3ODUyLDM4NDIxMzQzNDgxMzY2NjY0MCwxMTU0MTQwMTI5OTA0OTA3NTg0LDExNzA5MzY1NDA5MTkzMDEzODAsMTQ0MTE1NzM5OTc5Mjg0OTkzNiwxMTM0NzMwMzYzODAxNjAwLDcyMzM5MDg2MjYxNjE2NjQwLDAsMTE1NzQyNTEwNDIzNDIxNzQ3MiwwfDE1NTc3NTQ4MTg0MDg2MzgwNTQ0LDE2Mjk5NjkyOTg2OTQyOTU0NzY5LDkzNDU1MzkwNDM0NTQzMzA1MzgsODI4NjczMDQyMDg4MjAwODUyNywxMzg1ODA3MDkxODIzODM4OTY0NCwxODc4NTMxNzE2OTgwNTQ0NTM5LDQ4NTkxMTYyNzY1OTA2OTIwNzUsMjYzMTQwNDYwODI2ODM2MjMyMCwxMzhcIiwgXCI5NjA1MzM1ODcwNTExNjQyOCwzODQyMTM0MzQ4MTM2NjY2NDAsNzY3ODY0MTAyODgxMTU0MzY4LDMwNzE0NTU2NzgxNTg3NzY4MzIsMjkyOTE2ODM5NDI0MCwyODgyMzYyMTczMDg2MjY5NDQsMTc4NjcwNjk1MjE5MjEsMHwxNTA3MTQ5MDgwNzYyNDEwNTk4NCw2OTU3NTE5MDkxNzI3MzU0NzUzLDI3NTI1NjA0Nzk0NzU1NDcxNTQsNzM4NzY2NzIyMTAwMzY2MDgzLDc2NDI5MzU0NDczNzY3NDMwOTQsMTA5NTgxMTI5ODk2MDk4ODczMjMsOTQwNTY3MzY4MDk3NDI4MTYwMSwxMDc0MTIzMjY1MDEyMDgwMDM2OCw2MzkzMzAwMzUwMDUxOTE0NFwiLCBcIjYxNDg1Mzk0ODI4OTE3NDgxMjQsMTUwMTEwODI3MjE4OTQ0MCw2MTQ3NDEzODU3ODQyMjM4ODA1LDE0NTk3MzgzMDA1NTAyOTk2NDksMzYzODA5MTY2OTY3NDM5MzcsMTQ3ODg0NDIxMzEwNTk4NiwxODAzMTk5MDY5NTU2MTc2MCw0NjExNjg2MzYyMDI0NzczNjMyLDEsMHwxMzcyNTQ5OTgzMDQ3MjU0MDE2LDE2MjI3MTkxOTQyMDg5OTUyNTM4LDY1MDE4MzkwNTYxNTkxMzQ5NzEsMTExNzcyODgwNTgzMjMyNDEyNTIsODM4MTM5MzEyMzE0MzQ1NjI0LDEzNDQ2NDI0OTEwNTU0NTA1ODUxLDEyOTA1ODAzNzc4NTAzOTAxODI0LDk1NDI2MzU2MDE0NjI4NjM5NjgsMTI0MDc5MTQyMTA3NzEwMjQ5MDIsMzM0ODdcIiwgXCI5NjA1MzM1ODcwODAwMDAwMiwzODQyMTM0MzQ4MTM2NjY2NDAsMTUzNjg1MzczOTI1NDY2NjU2MCw2MTM2OTAzNjIzMzU0MTc2MDAsNTc3NjU3MDIyMDk5NjI4MzA1LDM2MTQyNTAzNzAxMTc4MDYxMiw1NzY0NjA3NTQyOTY1NTY3NDkzLDUsNTY1MTQ4OTc2Njc2ODY0LDB8MTExODc4MTUzOTQ0Njk0Nzg0MDAsNzc3NjQ5MTI1NDIyNDg0NTYsMTMwNDExNjcyNjcyMjk0NzA3OTQsMzA0ODU3NTA4MjQ3NzAwMzY4OSwxMTg5MTkwNjU4NTAyMjQxMDE0NCw2NzM4NTg5Mjg0MjU4NzUwNzMsMTE1NzIzMDczNTY1MDkwNTcxMjUsMjkwNzIyNzM2NTAwMTI2NzA3NCwxMjU2MzE0NzgyNDM0MjI3ODMyMyw0NTE4MzEwNDkwMjQyMjdcIl07XG4gIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IEV4dHJhY3ROb3JtYWxMZXZlbHMoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIGdldENhY2hlS2V5KCkge1xuICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJFeHRyYWN0VG9vbFwiKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSBlLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgICBvID0gZS5nZXRDdXJyZW50Sm91cm5leVR5cGUoKTtcbiAgICAgIHJldHVybiBcIlRyYXZlbFwiID09PSB0ICYmIG8gPyB0ICsgXCJfXCIgKyBvIDogdDtcbiAgICB9XG4gICAgcmV0dXJuIFwiTm9ybWFsXCI7XG4gIH1cbiAgc2V0TGV2ZWxEYXRhKGUsIHQpIHtcbiAgICB0aGlzLm1hX2xldmVsX2RhdGFfY2FjaGUuc2V0KGUsIHQpO1xuICB9XG4gIGdldExldmVsRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q2FjaGVLZXkoKTtcbiAgICByZXR1cm4gdGhpcy5tYV9sZXZlbF9kYXRhX2NhY2hlLmdldChlKSB8fCBudWxsO1xuICB9XG4gIGdldEFsbE5hbWVzRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q2FjaGVLZXkoKTtcbiAgICByZXR1cm4gdGhpcy5oc01hTmFtZXNfY2FjaGUuZ2V0KGUpIHx8IG51bGw7XG4gIH1cbiAgc2V0QWxsTmFtZXNEYXRhKGUsIHQpIHtcbiAgICB0aGlzLmhzTWFOYW1lc19jYWNoZS5zZXQoZSwgdCk7XG4gIH1cbiAgc2V0TGV2ZWxEYXRhT2Zmc2V0KGUsIHQpIHtcbiAgICB0aGlzLmhzTWFKaWFuZ09mZnNldERhdGFfY2FjaGUuc2V0KGUsIHQpO1xuICB9XG4gIGdldGxldmVsRGF0YU9mZnNldCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q2FjaGVLZXkoKTtcbiAgICByZXR1cm4gdGhpcy5oc01hSmlhbmdPZmZzZXREYXRhX2NhY2hlLmdldChlKSB8fCBudWxsO1xuICB9XG4gIGdldEJvYXJkQ29uZmlnKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDYWNoZUtleSgpO1xuICAgIHRoaXMuYm9hcmRDb25maWdfY2FjaGUuaGFzKGUpIHx8IHRoaXMuYm9hcmRDb25maWdfY2FjaGUuc2V0KGUsIG5ldyBNYXAoKSk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRDb25maWdfY2FjaGUuZ2V0KGUpO1xuICB9XG4gIGdldENvbmZpZ0RhdGEoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENhY2hlS2V5KCk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YV9jYWNoZS5nZXQoZSk7XG4gIH1cbiAgc2V0Q29uZmlnRGF0YShlLCB0KSB7XG4gICAgdGhpcy5jb25maWdEYXRhX2NhY2hlLnNldChlLCB0KTtcbiAgfVxuICBnZXRPcmlnaW5Db25maWdEYXRhKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDYWNoZUtleSgpO1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkNvbmZpZ0RhdGFfY2FjaGUuZ2V0KGUpO1xuICB9XG4gIHNldE9yaWdpbkNvbmZpZ0RhdGEoZSwgdCkge1xuICAgIHRoaXMub3JpZ2luQ29uZmlnRGF0YV9jYWNoZS5zZXQoZSwgdCk7XG4gIH1cbiAgbG9hZExldmVsT2Zmc2V0Qnl0ZURhdGEoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIGEgPSBvIHx8IHRoaXMuZ2V0Q2FjaGVLZXkoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8sIHMpIHtcbiAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIGMgPSBuLmdldGxldmVsRGF0YU9mZnNldCgpO1xuICAgICAgaWYgKGMpIG8oYyk7ZWxzZSB7XG4gICAgICAgIHZhciB1ID0gX19yZWFkKG4uZ2V0T2Zmc2V0UGF0aChlLCB0KSwgMiksXG4gICAgICAgICAgcCA9IHVbMF0sXG4gICAgICAgICAgZiA9IHVbMV0sXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uIGQoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgdCwgciwgbCA9IFtdLCBzID0gbmV3IFVpbnQ4QXJyYXkoZSksIGMgPSAwOyBjIDwgZS5ieXRlTGVuZ3RoOyBjKyspIGwucHVzaChzW2NdKTtcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSBuZXcgRGF0YVZpZXcoZSksIHAgPSAwLCBmID0ge30sIGQgPSBbXTsgcCA8IGUuYnl0ZUxlbmd0aDspIHtcbiAgICAgICAgICAgICAgdmFyIGggPSB1LmdldEludDMyKHAsIHRydWUpO1xuICAgICAgICAgICAgICBwICs9IDQ7XG4gICAgICAgICAgICAgIHZhciB5ID0gbC5zbGljZShwLCBwICsgaCksXG4gICAgICAgICAgICAgICAgbSA9IFwiXCI7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiA9ICh0ID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgXyA9IGcudmFsdWU7XG4gICAgICAgICAgICAgICAgICBtICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZyAmJiAhZy5kb25lICYmIChyID0gdi5yZXR1cm4pICYmIHIuY2FsbCh2KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGQucHVzaChtKTtcbiAgICAgICAgICAgICAgcCArPSBoO1xuICAgICAgICAgICAgICB2YXIgVCA9IHUuZ2V0SW50MzIocCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHAgKz0gNDtcbiAgICAgICAgICAgICAgdmFyIEMgPSB1LmdldEludDMyKHAsIHRydWUpO1xuICAgICAgICAgICAgICBwICs9IDQ7XG4gICAgICAgICAgICAgIHZhciBiID0ge307XG4gICAgICAgICAgICAgIGIuZmlsZUxlbmcgPSBDO1xuICAgICAgICAgICAgICBiLnN0YXJ0T2Zmc2V0ID0gVDtcbiAgICAgICAgICAgICAgYi5maWxlTmFtZSA9IG07XG4gICAgICAgICAgICAgIGZbbV0gPSBiO1xuICAgICAgICAgICAgICBuLnNldEFsbE5hbWVzRGF0YShhLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4uc2V0TGV2ZWxEYXRhT2Zmc2V0KGEsIGYpO1xuICAgICAgICAgICAgbyhmKTtcbiAgICAgICAgICB9O1xuICAgICAgICByZXNNYW5hZ2VyLmxvYWRSZXMocCwgY2MuQnVmZmVyQXNzZXQsIGYpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBjYy5CdWZmZXJBc3NldCkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGUuX2J1ZmZlcjtcbiAgICAgICAgICAgICAgZCh0KTtcbiAgICAgICAgICAgICAgZS5kZWNSZWYoKTtcbiAgICAgICAgICAgIH0gZWxzZSBzKG5ldyBFcnJvcihcIkxvYWRlZCByZXNvdXJjZSBpcyBub3QgQnVmZmVyQXNzZXRcIikpO1xuICAgICAgICAgIH0gZWxzZSBzKG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIEJ1ZmZlckFzc2V0XCIpKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsb2FkTGV2ZWxCeXRlRGF0YShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgaSA9IG8gfHwgdGhpcy5nZXRDYWNoZUtleSgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobywgYSkge1xuICAgICAgdmFyIHMgPSBfX3JlYWQobi5nZXRMZXZlbERhdGFQYXRoKGUsIHQpLCAyKSxcbiAgICAgICAgYyA9IHNbMF0sXG4gICAgICAgIHUgPSBzWzFdO1xuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICByZXNNYW5hZ2VyLmxvYWRSZXMoYywgY2MuQnVmZmVyQXNzZXQsIHUpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGNjLkJ1ZmZlckFzc2V0KSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuX2J1ZmZlcjtcbiAgICAgICAgICAgIG4uc2V0TGV2ZWxEYXRhKGksIHQuc2xpY2UoMCkpO1xuICAgICAgICAgICAgbyhudWxsKTtcbiAgICAgICAgICAgIGUuZGVjUmVmKCk7XG4gICAgICAgICAgfSBlbHNlIGEobmV3IEVycm9yKFwiTG9hZGVkIHJlc291cmNlIGlzIG5vdCBCdWZmZXJBc3NldFwiKSk7XG4gICAgICAgIH0gZWxzZSBhKG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIEJ1ZmZlckFzc2V0XCIpKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGEoZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBsb2FkQ29uZmlnRGF0YShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgaSA9IG8gfHwgdGhpcy5nZXRDYWNoZUtleSgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobywgYSkge1xuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgcyA9IG4ub3JpZ2luQ29uZmlnRGF0YV9jYWNoZS5nZXQoaSk7XG4gICAgICBpZiAocykge1xuICAgICAgICB2YXIgYyA9IG4ucHJvY2Vzc0NvbmZpZ0RhdGEocyk7XG4gICAgICAgIG4uc2V0Q29uZmlnRGF0YShpLCBjKTtcbiAgICAgICAgbyhjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB1ID0gX19yZWFkKG4uZ2V0Q29uZmlnUGF0aChlLCB0KSwgMiksXG4gICAgICAgICAgcCA9IHVbMF0sXG4gICAgICAgICAgZiA9IHVbMV07XG4gICAgICAgIHJlc01hbmFnZXIubG9hZFJlcyhwLCBjYy5Kc29uQXNzZXQsIGYpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgbi5zZXRPcmlnaW5Db25maWdEYXRhKGksIGUuanNvbik7XG4gICAgICAgICAgICB2YXIgdCA9IG4ucHJvY2Vzc0NvbmZpZ0RhdGEoZS5qc29uKTtcbiAgICAgICAgICAgIG4uc2V0Q29uZmlnRGF0YShpLCB0KTtcbiAgICAgICAgICAgIG8odCk7XG4gICAgICAgICAgICBlLmRlY1JlZigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CRIOmFjee9ruaVsOaNruWKoOi9veWksei0pTpcIiwgcCk7XG4gICAgICAgICAgICBhKG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIGNvbmZpZyBkYXRhXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkSDphY3nva7mlbDmja7liqDovb3lvILluLg6XCIsIGUpO1xuICAgICAgICAgIGEoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X3Byb2Nlc3NDb25maWdcIilcbiAgcHJvY2Vzc0NvbmZpZ0RhdGEoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0Tm9ybUx2X2dldEFsbElkeEluVGJsXCIpXG4gIGdldEFsbEluZGV4ZXNJblRhYmxlKGUpIHtcbiAgICBpZiAoIXRoaXMuZ2V0QWxsTmFtZXNEYXRhKCkuaW5jbHVkZXMoZSkpIHJldHVybiBbXTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0TGV2ZWxEYXRhKCksXG4gICAgICBvID0gdGhpcy5nZXRsZXZlbERhdGFPZmZzZXQoKVtlXTtcbiAgICBpZiAoIW8pIHJldHVybiBbXTtcbiAgICB2YXIgbiA9IG8uc3RhcnRPZmZzZXQsXG4gICAgICBpID0gKG8uZmlsZUxlbmcsIG5ldyBEYXRhVmlldyh0KSksXG4gICAgICByID0gaS5ieXRlTGVuZ3RoO1xuICAgIGlmIChuICsgNCA+IHIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgJDlhbPljaHmir3lj5bjgJHojrflj5booajntKLlvJUgLSDooaggXCIgKyBlICsgXCIg5YGP56e76LaK55WM77yMb2Zmc2V0OiBcIiArIG4gKyBcIiwgYnl0ZUxlbmd0aDogXCIgKyByKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGEgPSBoKGksIG4pO1xuICAgIG4gPSBhLmRhdGFPZmZzZXQ7XG4gICAgdmFyIGwgPSBhLnJlY29yZFNpemUsXG4gICAgICBzID0gaS5nZXRJbnQzMihuLCB0cnVlKTtcbiAgICBuICs9IDQ7XG4gICAgZm9yICh2YXIgYyA9IE1hdGgubWluKG4gKyBzLCByKSwgdSA9IFtdOyBuICsgbCA8PSBjOykge1xuICAgICAgdmFyIHAgPSBpLmdldEludDMyKG4sIHRydWUpO1xuICAgICAgbiArPSA0O1xuICAgICAgaS5nZXRGbG9hdDMyKG4sIHRydWUpO1xuICAgICAgbiArPSA0O1xuICAgICAgaWYgKGEuaXNWMykge1xuICAgICAgICBpLmdldEludDMyKG4sIHRydWUpO1xuICAgICAgICBuICs9IDQ7XG4gICAgICB9XG4gICAgICBpLmdldEludDMyKG4sIHRydWUpO1xuICAgICAgbiArPSA0O1xuICAgICAgaS5nZXRJbnQzMihuLCB0cnVlKTtcbiAgICAgIG4gKz0gNDtcbiAgICAgIHUucHVzaChwKTtcbiAgICB9XG4gICAgcmV0dXJuIHU7XG4gIH1cbiAgZ2V0Qnl0ZUNvbnRlbnRCeVR5cGUoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRBbGxOYW1lc0RhdGEoKSxcbiAgICAgIG4gPSBFeHRyYWN0RGltZW5zaW9uLmdldERhdGEoKSxcbiAgICAgIGkgPSBuLmhpc3RvcnlJbmRleCB8fCBbXTtcbiAgICBpZiAoby5pbmNsdWRlcyhlKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldExldmVsRGF0YSgpLFxuICAgICAgICBhID0gdGhpcy5nZXRsZXZlbERhdGFPZmZzZXQoKVtlXSxcbiAgICAgICAgbCA9IGEuc3RhcnRPZmZzZXQsXG4gICAgICAgIHMgPSBhLmZpbGVMZW5nICsgbCxcbiAgICAgICAgYyA9IG5ldyBEYXRhVmlldyhyKSxcbiAgICAgICAgdSA9IGMuYnl0ZUxlbmd0aCxcbiAgICAgICAgcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgIGYgPSAwLFxuICAgICAgICBkID0gMDtcbiAgICAgIGlmIChsICsgNCA+IHUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkSDojrflj5blhbPljaHlhoXlrrkgLSDooaggXCIgKyBlICsgXCIg5YGP56e76LaK55WM77yMb2Zmc2V0OiBcIiArIGwgKyBcIiwgYnl0ZUxlbmd0aDogXCIgKyB1KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgbSA9IGgoYywgbCk7XG4gICAgICBsID0gbS5kYXRhT2Zmc2V0O1xuICAgICAgdmFyIHYgPSBtLnJlY29yZFNpemUsXG4gICAgICAgIGcgPSBjLmdldEludDMyKGwsIHRydWUpO1xuICAgICAgbCArPSA0O1xuICAgICAgZm9yICh2YXIgXyA9IE1hdGgubWluKGwgKyBnLCB1KSwgVCA9IDgsIEMgPSBudWxsOyBsICsgdiA8PSBfOykge1xuICAgICAgICB2YXIgYiA9IGMuZ2V0SW50MzIobCwgdHJ1ZSk7XG4gICAgICAgIGwgKz0gNDtcbiAgICAgICAgdmFyIEUgPSBjLmdldEZsb2F0MzIobCwgdHJ1ZSk7XG4gICAgICAgIGwgKz0gNDtcbiAgICAgICAgaWYgKG0uaXNWMykge1xuICAgICAgICAgIGMuZ2V0SW50MzIobCwgdHJ1ZSk7XG4gICAgICAgICAgbCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBTID0gYy5nZXRJbnQzMihsLCB0cnVlKTtcbiAgICAgICAgbCArPSA0O1xuICAgICAgICB2YXIgSSA9IGMuZ2V0SW50MzIobCwgdHJ1ZSk7XG4gICAgICAgIGwgKz0gNDtcbiAgICAgICAgaWYgKE1hdGguYWJzKEUgLSB0KSA8IHAgJiYgIWkuaW5jbHVkZXMoYikpIHtcbiAgICAgICAgICBmID0gUztcbiAgICAgICAgICBkID0gSTtcbiAgICAgICAgICBwID0gTWF0aC5hYnMoRSAtIHQpO1xuICAgICAgICAgIFQgPSBFO1xuICAgICAgICAgIEMgPSBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpLnB1c2goQyk7XG4gICAgICBpLmxlbmd0aCA+IDEwMCAmJiBpLnNwbGljZSgwLCAxKTtcbiAgICAgIG4uaGlzdG9yeUluZGV4ID0gaTtcbiAgICAgIEV4dHJhY3REaW1lbnNpb24uc2F2ZURhdGEobik7XG4gICAgICB2YXIgdyA9IHIuc2xpY2UobCwgcykuc2xpY2UoZiwgZiArIGQpLFxuICAgICAgICBCID0gbmV3IFVpbnQ4QXJyYXkodyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50Qnl0ZURhdGE6IHRoaXMuZGVjb2RlVVRGOChCKSxcbiAgICAgICAgY29udGVudERpZmY6IFQsXG4gICAgICAgIGZpbGVOYW1lOiBlLFxuICAgICAgICBpbmRleDogQ1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGVjb2RlVVRGOChlKSB7XG4gICAgZm9yICh2YXIgdCA9IFwiXCIsIG8gPSAwOyBvIDwgZS5sZW5ndGg7KSB7XG4gICAgICB2YXIgbiA9IGVbb107XG4gICAgICBpZiAoMCA9PSAoMTI4ICYgbikpIHtcbiAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4pO1xuICAgICAgICBvKys7XG4gICAgICB9IGVsc2UgaWYgKDE5MiA9PSAoMjI0ICYgbikpIHtcbiAgICAgICAgaWYgKCEobyArIDEgPCBlLmxlbmd0aCkpIGJyZWFrO1xuICAgICAgICB2YXIgaSA9ICgzMSAmIG4pIDw8IDYgfCA2MyAmIGVbbyArIDFdO1xuICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgIG8gKz0gMjtcbiAgICAgIH0gZWxzZSBpZiAoMjI0ID09ICgyNDAgJiBuKSkge1xuICAgICAgICBpZiAoIShvICsgMiA8IGUubGVuZ3RoKSkgYnJlYWs7XG4gICAgICAgIGkgPSAoMTUgJiBuKSA8PCAxMiB8ICg2MyAmIGVbbyArIDFdKSA8PCA2IHwgNjMgJiBlW28gKyAyXTtcbiAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgICAgICBvICs9IDM7XG4gICAgICB9IGVsc2UgaWYgKDI0MCA9PSAoMjQ4ICYgbikpIHtcbiAgICAgICAgaWYgKCEobyArIDMgPCBlLmxlbmd0aCkpIGJyZWFrO1xuICAgICAgICBpZiAoKGkgPSAoNyAmIG4pIDw8IDE4IHwgKDYzICYgZVtvICsgMV0pIDw8IDEyIHwgKDYzICYgZVtvICsgMl0pIDw8IDYgfCA2MyAmIGVbbyArIDNdKSA+IDY1NTM1KSB7XG4gICAgICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKChpIC0gNjU1MzYpIC8gMTAyNCkgKyA1NTI5NixcbiAgICAgICAgICAgIGEgPSAoaSAtIDY1NTM2KSAlIDEwMjQgKyA1NjMyMDtcbiAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUociwgYSk7XG4gICAgICAgIH0gZWxzZSB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgIG8gKz0gNDtcbiAgICAgIH0gZWxzZSBvKys7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGV4dHJhY3REaW1lbnNpb24oZSkge1xuICAgIHJldHVybiBFeHRyYWN0RGltZW5zaW9uLmdldE1hSmlhbmdXZWlEdShlLmxldmVsSUQsIGUuZGllUmVzdWx0LCBlLm1heE5vdERpZUxldmVsLCBlLnJlYWxseUxldmVsSUQpO1xuICB9XG4gIGdldEJ5dGVDb250ZW50KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZXh0cmFjdERpbWVuc2lvbihlKSxcbiAgICAgIG8gPSBFeHRyYWN0RGltZW5zaW9uLmdldERhdGEoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRCeXRlQ29udGVudEJ5VHlwZSh0LCBvLmRpZmZjdWx0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9pbml0RGF0YVwiKVxuICBpbml0RGF0YShlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldENhY2hlS2V5KCk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLmxvYWRMZXZlbE9mZnNldEJ5dGVEYXRhKGUsIHQsIG8pLCB0aGlzLmxvYWRMZXZlbEJ5dGVEYXRhKGUsIHQsIG8pLCB0aGlzLmxvYWRDb25maWdEYXRhKGUsIHQsIG8pXSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBnZXQxNkJpdFZhbHVlKGUpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgQmlnSW50KSB7XG4gICAgICBmb3IgKHZhciB0ID0gQmlnSW50KDApLCBvID0gQmlnSW50KDEpLCBuID0gQmlnSW50KDI0KSwgaSA9IEJpZ0ludCg2NTUzNSksIHIgPSB0LCBhID0gQmlnSW50KGUpID4+IG4gJiBpLCBsID0gMDsgbCA8IDE2OyBsKyspIHtcbiAgICAgICAgciA9IHIgPDwgbyB8IGEgJiBvO1xuICAgICAgICBhID4+PSBvO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE51bWJlcihyKTtcbiAgICB9XG4gICAgdmFyIHMgPSBiaWdOdW0oZSkuc2hpZnRSaWdodCgyNCkuYW5kKGJpZ051bSg2NTUzNSkpLFxuICAgICAgYyA9IGJpZ051bS56ZXJvLFxuICAgICAgdSA9IHM7XG4gICAgZm9yIChsID0gMDsgbCA8IDE2OyBsKyspIHtcbiAgICAgIGMgPSBjLnNoaWZ0TGVmdCgxKS5vcih1LmFuZChiaWdOdW0ub25lKSk7XG4gICAgICB1ID0gdS5zaGlmdFJpZ2h0KDEpO1xuICAgIH1cbiAgICByZXR1cm4gYy50b0pTTnVtYmVyKCk7XG4gIH1cbiAgZ2V0UmFuZG9tQ29udGVudCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0QWxsTmFtZXNEYXRhKCk7XG4gICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciB0ID0gZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCldLFxuICAgICAgbyA9IHRoaXMuZ2V0QWxsSW5kZXhlc0luVGFibGUodCk7XG4gICAgaWYgKCFvIHx8IDAgPT09IG8ubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciBuID0gb1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvLmxlbmd0aCldO1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRCeVRhYmxlQW5kSW5kZXgodCwgbik7XG4gIH1cbiAgZ2V0Qnl0ZURhdGFCeUluZGV4KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0TGV2ZWxEYXRhKCksXG4gICAgICBuID0gdGhpcy5nZXRsZXZlbERhdGFPZmZzZXQoKTtcbiAgICBpZiAoIW8gfHwgIW4pIHJldHVybiBudWxsO1xuICAgIHZhciBpID0gbltlXTtcbiAgICBpZiAoIWkpIHJldHVybiBudWxsO1xuICAgIHZhciByID0gaS5zdGFydE9mZnNldCxcbiAgICAgIGEgPSBuZXcgRGF0YVZpZXcobyksXG4gICAgICBsID0gYS5ieXRlTGVuZ3RoO1xuICAgIGlmIChyICsgNCA+IGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgJDlhbPljaHmir3lj5bjgJFb6IO95Yqb5YC8XSDooaggXCIgKyBlICsgXCIg5YGP56e76LaK55WM77yMb2Zmc2V0OiBcIiArIHIgKyBcIiwgYnl0ZUxlbmd0aDogXCIgKyBsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgcyA9IGgoYSwgcik7XG4gICAgciA9IHMuZGF0YU9mZnNldDtcbiAgICB2YXIgYyA9IHMucmVjb3JkU2l6ZSxcbiAgICAgIHUgPSBhLmdldEludDMyKHIsIHRydWUpO1xuICAgIHIgKz0gNDtcbiAgICBmb3IgKHZhciBwID0gTWF0aC5taW4ociArIHUsIGwpOyByICsgYyA8PSBwOykge1xuICAgICAgdmFyIGYgPSBhLmdldEludDMyKHIsIHRydWUpO1xuICAgICAgciArPSA0O1xuICAgICAgdmFyIGQgPSBhLmdldEZsb2F0MzIociwgdHJ1ZSk7XG4gICAgICByICs9IDQ7XG4gICAgICB2YXIgeSA9IDA7XG4gICAgICBpZiAocy5pc1YzKSB7XG4gICAgICAgIHkgPSBhLmdldEludDMyKHIsIHRydWUpO1xuICAgICAgICByICs9IDQ7XG4gICAgICB9XG4gICAgICB2YXIgbSA9IGEuZ2V0SW50MzIociwgdHJ1ZSk7XG4gICAgICByICs9IDQ7XG4gICAgICB2YXIgdiA9IGEuZ2V0SW50MzIociwgdHJ1ZSk7XG4gICAgICByICs9IDQ7XG4gICAgICBpZiAoZiA9PT0gdCkge1xuICAgICAgICB2YXIgZyA9IG8uc2xpY2UocCwgaS5zdGFydE9mZnNldCArIGkuZmlsZUxlbmcpLnNsaWNlKG0sIG0gKyB2KSxcbiAgICAgICAgICBfID0gbmV3IFVpbnQ4QXJyYXkoZyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29udGVudEJ5dGVTdHI6IHRoaXMuZGVjb2RlVVRGOChfKSxcbiAgICAgICAgICBkaWZmaWN1bHR5OiBkLFxuICAgICAgICAgIGluZGV4OiBmLFxuICAgICAgICAgIHRpbGVDb3VudDogeVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRDb250QnlUYmxJZHhcIilcbiAgZ2V0Q29udGVudEJ5VGFibGVBbmRJbmRleChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEJ5dGVEYXRhQnlJbmRleChlLCB0KTtcbiAgICBpZiAoIW8pIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgdmFyIG4gPSBvLmNvbnRlbnRCeXRlU3RyLFxuICAgICAgaSA9IG8uZGlmZmljdWx0eSxcbiAgICAgIHIgPSBvLmluZGV4LFxuICAgICAgYSA9IHRoaXMuZ2V0MTZCaXRWYWx1ZShuLnNwbGl0KFwiLFwiKVswXS50cmltKCkpLFxuICAgICAgbCA9IGUuc3BsaXQoXCJfXCIpWzBdICsgXCJfXCIgKyBlLnNwbGl0KFwiX1wiKVsxXSxcbiAgICAgIHMgPSBlLnNwbGl0KFwiX1wiKVswXSB8fCBcInJhbmRvbVwiO1xuICAgIHJldHVybiB0aGlzLmxvYWRCb2FyZEFuZEJ1aWxkQ29udGVudChsLCBhLCBuKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCA/IFt0LCBpLCByLnRvU3RyaW5nKCksIGUsIHNdIDogbnVsbDtcbiAgICB9KTtcbiAgfVxuICBsb2FkQm9hcmRBbmRCdWlsZENvbnRlbnQoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIGkgPSB0aGlzLmdldEJvYXJkQ29uZmlnKCk7XG4gICAgaWYgKGkuaGFzKGUpKSB7XG4gICAgICB2YXIgYSA9IGkuZ2V0KGUpLFxuICAgICAgICBzID0gdGhpcy5idWlsZENvbnRlbnRGcm9tQm9hcmQoYSwgdCwgbyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMgfHwgbnVsbCk7XG4gICAgfVxuICAgIHZhciBjID0gX19yZWFkKHRoaXMuZ2V0SnNvblBhdGgoZSksIDIpLFxuICAgICAgdSA9IGNbMF0sXG4gICAgICBwID0gY1sxXTtcbiAgICByZXR1cm4gcmVzTWFuYWdlci5sb2FkUmVzKHUgKyBlLCBjYy5Kc29uQXNzZXQsIHApLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIGlmICghcikgcmV0dXJuIG51bGw7XG4gICAgICBpLnNldChlLCByLmpzb24pO1xuICAgICAgcmV0dXJuIG4uYnVpbGRDb250ZW50RnJvbUJvYXJkKHIuanNvbiwgdCwgbykgfHwgbnVsbDtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuICBidWlsZENvbnRlbnRGcm9tQm9hcmQoZSwgdCwgbykge1xuICAgIGlmICghZSkgcmV0dXJuIFwiXCI7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSBpZiAoTnVtYmVyKGVbbl0uSW5kZXgpID09IE51bWJlcih0KSkgcmV0dXJuIChlW25dLkNvbnRlbnQgKyBcInxcIiArIG8pLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0Q29udGVudFwiKVxuICBnZXRDb250ZW50KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBuID0gdGhpcy5nZXRCeXRlQ29udGVudChlKTtcbiAgICBpZiAoIW4pIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3RoaXMuZ2V0RG91RGlEYXRhKCksIDU1LCBcIuWFnOW6lee0ouW8lVwiLCBcIuWFnOW6leihqOWQjVwiLCBcIjA3XCJdKTtcbiAgICB2YXIgaSA9IG4uZmlsZU5hbWUuc3BsaXQoXCJfXCIpWzBdICsgXCJfXCIgKyBuLmZpbGVOYW1lLnNwbGl0KFwiX1wiKVsxXSxcbiAgICAgIGEgPSBuLmNvbnRlbnRCeXRlRGF0YSxcbiAgICAgIHMgPSB0aGlzLmdldDE2Qml0VmFsdWUoYS5zcGxpdChcIixcIilbMF0udHJpbSgpKSxcbiAgICAgIHUgPSBudWxsLFxuICAgICAgcCA9IHRoaXMuZ2V0Qm9hcmRDb25maWcoKTtcbiAgICBpZiAocC5oYXMoaSkpIHtcbiAgICAgIHUgPSBwLmdldChpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9jZXNzQ29udGVudERhdGEodSwgcywgYSwgbiwgbykpO1xuICAgIH1cbiAgICB2YXIgZiA9IF9fcmVhZCh0aGlzLmdldEpzb25QYXRoKGksIGUuZ2FtZVR5cGUsIGUuam91cm5leVR5cGUpLCAyKSxcbiAgICAgIGQgPSBmWzBdLFxuICAgICAgaCA9IGZbMV07XG4gICAgcmV0dXJuIHJlc01hbmFnZXIubG9hZFJlcyhkICsgaSwgY2MuSnNvbkFzc2V0LCBoKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUpIHtcbiAgICAgICAgdmFyIHIgPSB0LmdldERvdURpRGF0YSgpO1xuICAgICAgICBERGVidWdJbmZvLmRvdChcIuaKvemimOW8guW4uCBCb2FyZOmFjee9ruWKoOi9veWksei0pTogXCIgKyBpICsgXCIgaW5kZXg6IFwiICsgcyk7XG4gICAgICAgIHJldHVybiBbciwgNTUsIFwi5YWc5bqV57Si5byVXCIsIFwi5YWc5bqV6KGo5ZCNXCIsIFwiMDdcIl07XG4gICAgICB9XG4gICAgICBwLnNldChpLCBlLmpzb24pO1xuICAgICAgcmV0dXJuIHQucHJvY2Vzc0NvbnRlbnREYXRhKGUuanNvbiwgcywgYSwgbiwgbyk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgJDlhbPljaHmir3lj5bjgJEg5oq96aKY5byC5bi477yM6L+U5Zue5YWc5bqV5pWw5o2uXCIsIGUpO1xuICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkSDmir3popjlvILluLjvvIzov5Tlm57lhZzlupXmlbDmja4sZXJyb3I6XCIgKyBlLm1lc3NhZ2UgKyBcIuWghuagiDogXCIgKyBlLnN0YWNrKTtcbiAgICAgIHJldHVybiBbdC5nZXREb3VEaURhdGEoKSwgNTUsIFwi5YWc5bqV57Si5byVXCIsIFwi5YWc5bqV6KGo5ZCNXCIsIFwiMDdcIl07XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0NvbnRlbnREYXRhKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IFwiXCI7XG4gICAgaWYgKGUpIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykgaWYgKE51bWJlcihlW3JdLkluZGV4KSA9PSBOdW1iZXIodCkpIHtcbiAgICAgIGkgPSAoZVtyXS5Db250ZW50ICsgXCJ8XCIgKyBvKS50b1N0cmluZygpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghaSkge1xuICAgICAgaSA9IHRoaXMuZ2V0RG91RGlEYXRhKCk7XG4gICAgICBERGVidWdJbmZvLmRvdChcIuaKvemimOW8guW4uCDpopjlupPlvILluLgsZmlsZU5hbWU6IFwiICsgbi5maWxlTmFtZSArIFwiIOmAoOWei2luZGV4OiBcIiArIHQgKyBcIiDlk4jluIxpbmRleCA6XCIgKyBuLmluZGV4ICsgXCIgLSDmnKrmib7liLDlr7nlupTlhoXlrrnvvIzkvb/nlKjlhZzlupXmlbDmja5cIik7XG4gICAgfVxuICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHJldHVybiBbaSwgbi5jb250ZW50RGlmZiwgbi5pbmRleCwgbi5maWxlTmFtZSwgbi5maWxlTmFtZS5zcGxpdChcIl9cIilbMF1dO1xuICB9XG4gIHVwZGF0ZUNhcGFiaWxpdHkoZSwgdCwgbykge1xuICAgIHJldHVybiBFeHRyYWN0RGltZW5zaW9uLlVwZGF0ZUNhcGFiaWxpdHkoZSwgdCwgbyk7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gRXh0cmFjdERpbWVuc2lvbi5nZXREYXRhKCk7XG4gIH1cbiAgZ2V0RG91RGlEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRvdURpUG9vbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRvdURpUG9vbC5sZW5ndGgpXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRDb25maWdQYXRoXCIpXG4gIGdldENvbmZpZ1BhdGgoKSB7XG4gICAgcmV0dXJuIFtcImJ5dGVEYXRhL2xldmVsX2ZpbGVfY29uZmlnXCIsIFwibWFpblJlc1wiXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkV4dE5vcm1Mdl9nZXRPZmZzZXRQYXRoXCIpXG4gIGdldE9mZnNldFBhdGgoKSB7XG4gICAgcmV0dXJuIFtcImJ5dGVEYXRhL2xldmVsX2RhdGFfb2Zmc2V0c1wiLCBcIm1haW5SZXNcIl07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0TGV2RGF0YVBhdGhcIilcbiAgZ2V0TGV2ZWxEYXRhUGF0aCgpIHtcbiAgICByZXR1cm4gW1wiYnl0ZURhdGEvbGV2ZWxfZGF0YVwiLCBcIm1haW5SZXNcIl07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFeHROb3JtTHZfZ2V0SnNvblBhdGhcIilcbiAgZ2V0SnNvblBhdGgoKSB7XG4gICAgcmV0dXJuIFtcImNvbmZpZy9ib2FyZHMvXCIsIFwibWFpblJlc1wiXTtcbiAgfVxufSJdfQ==