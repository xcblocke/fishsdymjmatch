const {
    ccclass
} = cc._decorator;
cc.macro.ENABLE_MULTI_TOUCH = false;
cc.macro.TOUCH_TIMEOUT = 50000;
cc.macro.CLEANUP_IMAGE_CACHE = true;
cc.dynamicAtlasManager.enabled = false;
var FILTERED_BASE_CLASSNAMES = ["UIView", "BaseUI", "ViewController", "Model", "cc.Component", "Trait"];
window["mj"] = {
    EventManager: new cc.EventTarget(),
    getClassName: (e, t = false) => {
        const n = e.prototype.__classname__;
        assert(n && (t || !FILTERED_BASE_CLASSNAMES.includes(n)) && n.length > 2, `不合规类名："${n}";${e.name}必须用@mj.class('${e.name}')进行修饰`);
        return n;
    },
    getClassByName: e => cc.js.getClassByName(e),
    class: e => {
        "function" == typeof e && assert(cc.js.isChildClassOf(e, cc.Component), `${e.name}不是cc.Component的子类,需显式传入类名：@mj.class('${e.name}')`);
        return ccclass(e);
    }
};
Date.prototype.format = function (e) {
    const t = {
        "Y+": this.getFullYear().toString(),
        "m+": (this.getMonth() + 1).toString(),
        "d+": this.getDate().toString(),
        "H+": this.getHours().toString(),
        "M+": this.getMinutes().toString(),
        "S+": this.getSeconds().toString(),
        "F+": this.getMilliseconds().toString()
    };
    for (const n in t) {
        const s = new RegExp("(" + n + ")").exec(e);
        if (s) {
            const o = t[n],
                c = 1 === s[1].length ? o : o.padStart(s[1].length, "0");
            e = e.replace(s[1], c);
        }
    }
    return e;
};

function assert(e, t) {
    if (!e) {
        const e = new Error(t),
            n = e.stack.split("\n");
        let s = (n[1] || "") + "\n";
        s += (n[2] || "") + "\n";
        s += n[3] || "";
        e.message = e.message + "\n" + s;
        if (!cc.sys.isNative) throw e;
        window["_reportError"] && window["_reportError"](e.message);
    }
};
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
    let n = 0;
    const s = (e = e || cc.Canvas.instance.node).children;
    n += s.length;
    for (let e = 0; e < s.length; e++) {
        const o = s[e];
        let c = o.name,
            r = o.parent,
            a = 0;
        for (; r && a < 20;) {
            c = r.name + "/" + c;
            r = r.parent;
            a++;
        }
        if (t[c]) {
            t[c]++;
        } else {
            t[c] = 1;
        }
        n += getCountNodeOfRootNode(o, t);
    }
    return n;
}