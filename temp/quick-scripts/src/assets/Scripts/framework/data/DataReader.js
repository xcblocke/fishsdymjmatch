"use strict";
cc._RF.push(module, '3be882BqOBHD4xDd2CD8lr8', 'DataReader');
// Scripts/framework/data/DataReader.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReader = void 0;
var ConfigType_1 = require("../../gamePlay/base/data/ConfigType");
var ResManager_1 = require("../manager/ResManager");
var CommonUtils_1 = require("../utils/CommonUtils");
var DataReader = /** @class */ (function () {
    function DataReader() {
    }
    DataReader.checkNativeConfig = function (e) {
        if (!this.table[e]) {
            // console.log("加载。。 " + e);
            // if (cc.sys.isNative) {
            this.loadNativeConfig(e, this.prePath);
            // } else {
            //     this.loadNativeConfig(e, this.prePath);
            // }
        }
    };
    DataReader.getByKey = function (e, t, o) {
        if (t) {
            var n = "string" == typeof e ? e : e.name;
            o && (n = n + "_" + o);
            this.checkNativeConfig(n);
            var i = this.table[n];
            if (i) {
                var a = i["" + t];
                return a ? CommonUtils_1.deepClone(a) : null;
            }
        }
    };
    DataReader.getList = function (e) {
        var t = "string" == typeof e ? e : e.name;
        this.checkNativeConfig(t);
        return this.tableList[t + "__list"] || [];
    };
    DataReader.getLen = function (e) {
        this.checkNativeConfig(e);
        var t = this.tableList[e + "__list"];
        return t ? t.length : 0;
    };
    DataReader.getTypeList = function (e, t, o) {
        var n = "string" == typeof e ? e : e.name, i = this.getList(n);
        if (!i || 0 === i.length)
            return [];
        for (var r = [], a = 0, l = i.length; a < l; a++) {
            var s = i[a];
            s[t] === o && r.push(s);
        }
        return r;
    };
    DataReader.mergeTable = function (e, t) {
        var o, i = "string" == typeof e ? e : e.name, r = this.getList(e), a = this.getList(t), l = this.table[i], s = null === (o = ConfigType_1.ConfigType[i]) || void 0 === o ? void 0 : o.keys[0];
        if (l && r && s)
            for (var c = function c(e) {
                var t = a[e];
                if (!t)
                    return "continue";
                var o = t[s];
                if (!o)
                    return "continue";
                var n = "" + o;
                if (l[n]) {
                    var i = r.findIndex(function (e) {
                        return "" + e[s] === n;
                    });
                    -1 !== i && (r[i] = t);
                }
                else
                    r.push(t);
                l[n] = t;
            }, u = 0; u < a.length; u++)
                c(u);
    };
    DataReader.getListByKeys = function (e, t) {
        if (!t || 0 === t.length)
            return [];
        var o = "string" == typeof e ? e : e.name;
        this.checkNativeConfig(o);
        var n = this.table[o];
        if (!n)
            return [];
        for (var i = [], r = 0; r < t.length; r++) {
            var a = t[r];
            if (a) {
                var l = n["" + a];
                l && i.push(l);
            }
        }
        return i;
    };
    DataReader.registerTable = function (e, t) {
        if (e) {
            this.table[e] = t;
        }
        else {
            console.error("[DataReader] registerTable: 表名不能为空");
        }
    };
    DataReader.registerTableList = function (e, t) {
        if (e) {
            this.tableList[e + "__list"] = t;
        }
        else {
            console.error("[DataReader] registerTableList: 表名不能为空");
        }
    };
    DataReader.clearTable = function (e) {
        delete this.table[e];
        delete this.tableList[e + "__list"];
    };
    DataReader.clearAll = function () {
        this.table = {};
        this.tableList = {};
    };
    DataReader.hasTable = function (e) {
        return !!this.table[e] || !!this.tableList[e + "__list"];
    };
    DataReader.loadBaseConfig = function () {
        for (var e = this, t = [], o = 0; o < ConfigType_1.ConfigType.tableList.length; o++)
            t.push(this.prePath + "/" + ConfigType_1.ConfigType.tableList[o]);
        return ResManager_1.resManager.loadRes(t, cc.JsonAsset, "mainRes").then(function (t) {
            e.parseConfig(t);
            if (Array.isArray(t)) {
                t.forEach(function (e) {
                    cc.isValid(e) && e.decRef();
                });
            }
            else {
                cc.isValid(t) && t.decRef();
            }
        });
    };
    DataReader.loadNativeConfig = function (e, t) {
        var o = CommonUtils_1.getDataByBuildResPath(t + "/" + e, true, ".json");
        if (o) {
            // var n = JSON.parse(o),
            //     i = n.json || n[5][0][2];
            this.parseConfigData(e, o);
        }
    };
    DataReader.loadConfig = function (e, t) {
        var _this = this;
        ResManager_1.resManager.getBundle("mainRes").load(t + "/" + e, cc.JsonAsset, function (error, assets) {
            _this.parseConfigData(e, assets.json);
        });
    };
    DataReader.parseConfig = function (e) {
        if (Array.isArray(e))
            for (var t = 0; t < e.length; t++)
                this.parseConfig(e[t]);
        else {
            var o = e.json, n = e.name;
            this.parseConfigData(n, o);
        }
    };
    DataReader.parseConfigData = function (e, t) {
        if (t) {
            var o = t.baseName;
            ConfigType_1.ConfigType[o] || (ConfigType_1.ConfigType[o] = {});
            var i = {}, r = ConfigType_1.ConfigType[o].names, a = t.data, l = [];
            for (var s in a) {
                for (var c = a[s], u = c.length, p = {}, f = 0; f < u; f++)
                    p[r[f]] = c[f];
                i["" + p["" + ConfigType_1.ConfigType[o].keys[0]]] = p;
                l.push(p);
            }
            this.registerTable(e, i);
            this.registerTableList(e, l);
        }
    };
    DataReader.table = {};
    DataReader.tableList = {};
    DataReader.prePath = "config/data";
    return DataReader;
}());
exports.DataReader = DataReader;

cc._RF.pop();