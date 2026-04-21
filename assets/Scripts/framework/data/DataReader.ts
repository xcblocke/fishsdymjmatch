import {ConfigType} from "../../gamePlay/base/data/ConfigType";
import {resManager} from "../manager/ResManager";
import {deepClone, getDataByBuildResPath} from "../utils/CommonUtils";

export class DataReader {
    static table = {};
    static tableList = {};
    static prePath = "config/data";

    static checkNativeConfig(e) {
        if (!this.table[e]) {
            // console.log("加载。。 " + e);
            // if (cc.sys.isNative) {
            this.loadNativeConfig(e, this.prePath);
            // } else {
            //     this.loadNativeConfig(e, this.prePath);
            // }
        }
    }

    static getByKey(e, t, o?) {
        if (t) {
            var n = "string" == typeof e ? e : e.name;
            o && (n = n + "_" + o);
            this.checkNativeConfig(n);
            var i = this.table[n];
            if (i) {
                var a = i["" + t];
                return a ? deepClone(a) : null;
            }
        }
    }

    static getList(e) {
        var t = "string" == typeof e ? e : e.name;
        this.checkNativeConfig(t);
        return this.tableList[t + "__list"] || [];
    }

    static getLen(e) {
        this.checkNativeConfig(e);
        var t = this.tableList[e + "__list"];
        return t ? t.length : 0;
    }

    static getTypeList(e, t, o) {
        var n = "string" == typeof e ? e : e.name,
            i = this.getList(n);
        if (!i || 0 === i.length) return [];
        for (var r = [], a = 0, l = i.length; a < l; a++) {
            var s = i[a];
            s[t] === o && r.push(s);
        }
        return r;
    }

    static mergeTable(e, t) {
        var o,
            i = "string" == typeof e ? e : e.name,
            r = this.getList(e),
            a = this.getList(t),
            l = this.table[i],
            s = null === (o = ConfigType[i]) || void 0 === o ? void 0 : o.keys[0];
        if (l && r && s) for (var c = function c(e) {
            var t = a[e];
            if (!t) return "continue";
            var o = t[s];
            if (!o) return "continue";
            var n = "" + o;
            if (l[n]) {
                var i = r.findIndex(function (e) {
                    return "" + e[s] === n;
                });
                -1 !== i && (r[i] = t);
            } else r.push(t);
            l[n] = t;
        }, u = 0; u < a.length; u++) c(u);
    }

    static getListByKeys(e, t) {
        if (!t || 0 === t.length) return [];
        var o = "string" == typeof e ? e : e.name;
        this.checkNativeConfig(o);
        var n = this.table[o];
        if (!n) return [];
        for (var i = [], r = 0; r < t.length; r++) {
            var a = t[r];
            if (a) {
                var l = n["" + a];
                l && i.push(l);
            }
        }
        return i;
    }

    static registerTable(e, t) {
        if (e) {
            this.table[e] = t;
        } else {
            console.error("[DataReader] registerTable: 表名不能为空");
        }
    }

    static registerTableList(e, t) {
        if (e) {
            this.tableList[e + "__list"] = t;
        } else {
            console.error("[DataReader] registerTableList: 表名不能为空");
        }
    }

    static clearTable(e) {
        delete this.table[e];
        delete this.tableList[e + "__list"];
    }

    static clearAll() {
        this.table = {};
        this.tableList = {};
    }

    static hasTable(e) {
        return !!this.table[e] || !!this.tableList[e + "__list"];
    }

    static loadBaseConfig() {
        for (var e = this, t = [], o = 0; o < ConfigType.tableList.length; o++) t.push(this.prePath + "/" + ConfigType.tableList[o]);
        return resManager.loadRes(t, cc.JsonAsset, "mainRes").then(function (t) {
            e.parseConfig(t);
            if (Array.isArray(t)) {
                t.forEach(function (e) {
                    cc.isValid(e) && e.decRef();
                });
            } else {
                cc.isValid(t) && t.decRef();
            }
        });
    }

    static loadNativeConfig(e, t) {
        var o = getDataByBuildResPath(t + "/" + e, true, ".json");
        if (o) {
            // var n = JSON.parse(o),
            //     i = n.json || n[5][0][2];
            this.parseConfigData(e, o);
        }
    }

    static loadConfig(e, t) {
        resManager.getBundle("mainRes").load(t + "/" + e, cc.JsonAsset, (error, assets: cc.JsonAsset) => {
            this.parseConfigData(e, assets.json);
        });
    }

    static parseConfig(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) this.parseConfig(e[t]); else {
            var o = e.json,
                n = e.name;
            this.parseConfigData(n, o);
        }
    }

    static parseConfigData(e, t) {
        if (t) {
            var o = t.baseName;
            ConfigType[o] || (ConfigType[o] = {});
            var i = {},
                r = ConfigType[o].names,
                a = t.data,
                l = [];
            for (var s in a) {
                for (var c = a[s], u = c.length, p = {}, f = 0; f < u; f++) p[r[f]] = c[f];
                i["" + p["" + ConfigType[o].keys[0]]] = p;
                l.push(p);
            }
            this.registerTable(e, i);
            this.registerTableList(e, l);
        }
    }
}