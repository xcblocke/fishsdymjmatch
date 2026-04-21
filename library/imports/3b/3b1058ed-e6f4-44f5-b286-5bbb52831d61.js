"use strict";
cc._RF.push(module, '3b105jt5vRE9bKGW7tSgx1h', 'Global');
// Scripts/Global.ts

var ccclass = cc._decorator.ccclass;
cc.macro.ENABLE_MULTI_TOUCH = false;
cc.macro.TOUCH_TIMEOUT = 50000;
cc.macro.CLEANUP_IMAGE_CACHE = true;
cc.dynamicAtlasManager.enabled = false;
var FILTERED_BASE_CLASSNAMES = ["UIView", "BaseUI", "ViewController", "Model", "cc.Component", "Trait"];
window["mj"] = {
    EventManager: new cc.EventTarget(),
    getClassName: function (e, t) {
        if (t === void 0) { t = false; }
        var n = e.prototype.__classname__;
        assert(n && (t || !FILTERED_BASE_CLASSNAMES.includes(n)) && n.length > 2, "\u4E0D\u5408\u89C4\u7C7B\u540D\uFF1A\"" + n + "\";" + e.name + "\u5FC5\u987B\u7528@mj.class('" + e.name + "')\u8FDB\u884C\u4FEE\u9970");
        return n;
    },
    getClassByName: function (e) { return cc.js.getClassByName(e); },
    class: function (e) {
        "function" == typeof e && assert(cc.js.isChildClassOf(e, cc.Component), e.name + "\u4E0D\u662Fcc.Component\u7684\u5B50\u7C7B,\u9700\u663E\u5F0F\u4F20\u5165\u7C7B\u540D\uFF1A@mj.class('" + e.name + "')");
        return ccclass(e);
    }
};
Date.prototype.format = function (e) {
    var t = {
        "Y+": this.getFullYear().toString(),
        "m+": (this.getMonth() + 1).toString(),
        "d+": this.getDate().toString(),
        "H+": this.getHours().toString(),
        "M+": this.getMinutes().toString(),
        "S+": this.getSeconds().toString(),
        "F+": this.getMilliseconds().toString()
    };
    for (var n in t) {
        var s = new RegExp("(" + n + ")").exec(e);
        if (s) {
            var o = t[n], c_1 = 1 === s[1].length ? o : o.padStart(s[1].length, "0");
            e = e.replace(s[1], c_1);
        }
    }
    return e;
};
function assert(e, t) {
    if (!e) {
        var e_1 = new Error(t), n = e_1.stack.split("\n");
        var s = (n[1] || "") + "\n";
        s += (n[2] || "") + "\n";
        s += n[3] || "";
        e_1.message = e_1.message + "\n" + s;
        if (!cc.sys.isNative)
            throw e_1;
        window["_reportError"] && window["_reportError"](e_1.message);
    }
}
;
window["assert"] = assert;
var c = new Set();
// window['jsb'] && (console.trace = function (e) {
//   const t = new Error(e),
//     n = t.stack.split("\n");
//   let s = (n[1] || "") + "\n";
//   s += (n[2] || "") + "\n";
//   s += n[3] || "";
//   t.message = t.message + "\n" + s;
//   t.message;
//   return t.message || "";
// });
// if (window['jsb']) cc.sys.isMobile || jsb.onError(function (...e) {
//   const t = e.join("");
//   cc.game.emit("jsError", t);
// });else if (cc.sys.isBrowser) {
//   window['onerror'] = function (...e) {
//     setTimeout(() => {
//       window['alert'](e[4] && e[4].stack);
//     }, 1);
//   };
//   window['onunhandledrejection'] = function (e) {
//     setTimeout(() => {
//       window['alert'](e.reason.stack);
//     }, 1);
//   };
// }
function getCountNodeOfRootNode(e, t) {
    t = t || {};
    var n = 0;
    var s = (e = e || cc.Canvas.instance.node).children;
    n += s.length;
    for (var e_2 = 0; e_2 < s.length; e_2++) {
        var o = s[e_2];
        var c_2 = o.name, r = o.parent, a = 0;
        for (; r && a < 20;) {
            c_2 = r.name + "/" + c_2;
            r = r.parent;
            a++;
        }
        if (t[c_2]) {
            t[c_2]++;
        }
        else {
            t[c_2] = 1;
        }
        n += getCountNodeOfRootNode(o, t);
    }
    return n;
}

cc._RF.pop();