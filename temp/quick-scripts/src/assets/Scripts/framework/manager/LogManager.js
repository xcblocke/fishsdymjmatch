"use strict";
cc._RF.push(module, 'a863cCnvB1ES6lrp/cvN3dn', 'LogManager');
// Scripts/framework/manager/LogManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.logManager = void 0;
var n;
(function (n) {
    n[n["Net"] = 1] = "Net";
    n[n["Model"] = 2] = "Model";
    n[n["Business"] = 4] = "Business";
    n[n["View"] = 8] = "View";
    n[n["Config"] = 16] = "Config";
    n[n["Normal"] = 32] = "Normal";
})(n || (n = {}));
var i = /** @class */ (function () {
    function i() {
    }
    i.prototype.table = function (e) {
        console.table(e);
    };
    i.prototype.customColor = function (e, t, o) {
        this.logCall(e, "color:" + t + ";", n.Normal, o);
    };
    i.prototype.log = function (e, t) {
        this.logCall(e, "color:#000000;", n.Normal, t);
    };
    i.prototype.logNet = function (e, t) {
        this.logCall(e, "color:#ee7700;", n.Net, t);
    };
    i.prototype.logModel = function (e, t) {
        this.logCall(e, "color:Violet;", n.Model, t);
    };
    i.prototype.logBusiness = function (e, t) {
        this.logCall(e, "color:#3a5fcd;", n.Business, t);
    };
    i.prototype.logView = function (e, t) {
        this.logCall(e, "color:green;", n.View, t);
    };
    i.prototype.logConfig = function (e, t) {
        this.logCall(e, "color:gray;", n.Config, t);
    };
    i.prototype.logError = function (e, t) {
        this.logCall(e, "color:red;", n.Normal, t);
    };
    i.prototype.logCall = function () {
        this.getTimestamp(), this.getStackTrace(4);
    };
    i.prototype.getTimestamp = function () {
        var e = new Date();
        return "[" + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0") + ":" + e.getMilliseconds().toString().padStart(3, "0") + "]";
    };
    i.prototype.getStackTrace = function (e) {
        var t, o = (null === (t = new Error().stack) || void 0 === t ? void 0 : t.split("\n")) || [], n = [];
        o.forEach(function (e) {
            var o = e.substring(7).split(" ");
            var _t = {};
            _t[o[0]] = o[1];
            if (o.length < 2) {
                n.push(o[0]);
            }
            else {
                n.push(_t);
            }
        });
        if (n[e] && "object" == typeof n[e]) {
            var i = n[e];
            return "[" + Object.keys(i)[0] + "]";
        }
        return "";
    };
    return i;
}());
exports.logManager = new i();

cc._RF.pop();