"use strict";
cc._RF.push(module, '0e231jRAVFBtLHbfC1Wm7m5', 'EasyHttp');
// Scripts/framework/network/EasyHttp.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.easyHttpRequest = exports.generateTraceId = void 0;
var Config_1 = require("../../Config");
var i = /** @class */ (function () {
    function i() {
    }
    i.prototype.getParam = function (e) {
        var t = "";
        for (var o in e) {
            var n = void 0 !== e[o] ? e[o] : "";
            t += "&" + o + "=" + encodeURIComponent(n);
        }
        return t ? t.substring(1) : "";
    };
    i.prototype.getUrl = function (e, t) {
        var o = e.indexOf("?") < 0 ? "?" : "&";
        return e + o + this.getParam(t);
    };
    return i;
}());
function generateTraceId() {
    return "" + Date.now() + (Math.floor(100000 * Math.random()) + 1).toString(16).padStart(6, "0");
}
exports.generateTraceId = generateTraceId;
var easyHttpRequest = function (e) {
    var t, o;
    if (!e.url)
        throw new Error("easyHttpRequest: URL不能为空");
    var a = e.method || "GET";
    e.noBlockUI || mj.EventManager.emit(Config_1.SHOWBLOCK);
    if ("GET" === a && e.data) {
        var l = new i();
        e.url = l.getUrl(e.url, e.data);
        e.data = null;
    }
    var s = (null === (t = e.headers) || void 0 === t ? void 0 : t["X-Trace-ID"]) || generateTraceId(), c = new XMLHttpRequest();
    e.timeout && (c.timeout = e.timeout);
    var u = {}, p = function p(t) {
        var o;
        null === (o = e.onError) || void 0 === o || o.call(e, c.status, c.responseText, t, u);
    };
    c.addEventListener("abort", function () {
        p("abort");
    });
    c.ontimeout = function () {
        p("timeout");
    };
    c.onerror = function (t) {
        var o = JSON.stringify(t);
        e.noBlockUI || mj.EventManager.emit(Config_1.HIDEBLOCK);
        e.ignoreTips || mj.EventManager.emit(Config_1.SHOWTIPS, o);
        p(o);
    };
    c.onreadystatechange = function () {
        var t, o = "readyState_" + c.readyState;
        u[o] = u[o] || Date.now();
        if (4 === c.readyState) {
            e.noBlockUI || mj.EventManager.emit(Config_1.HIDEBLOCK);
            if (c.status >= 200 && c.status < 400)
                null === (t = e.onSuccess) || void 0 === t || t.call(e, c.status, c.responseText, u);
            else {
                p();
                var i = "HTTP错误: " + e.url + ", status:" + c.status;
                e.ignoreTips || mj.EventManager.emit(Config_1.SHOWTIPS, i);
            }
        }
    };
    c.open(a, e.url);
    if (e.headers)
        for (var f in e.headers)
            c.setRequestHeader(f, e.headers[f]);
    (null === (o = e.headers) || void 0 === o ? void 0 : o["X-Trace-ID"]) || c.setRequestHeader("X-Trace-ID", s);
    c.send(e.data);
    return s;
};
exports.easyHttpRequest = easyHttpRequest;

cc._RF.pop();