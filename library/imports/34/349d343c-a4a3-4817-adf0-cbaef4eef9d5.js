"use strict";
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