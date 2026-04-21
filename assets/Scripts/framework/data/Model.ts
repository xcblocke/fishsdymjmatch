
import {SingletonFactory} from "../utils/SingletonFactory";

@mj.class("Model")
export default class Model {
    _eventEnabled = true;
    _modelName = mj.getClassName(this.constructor);
    localData = null;

    get eventEnabled() {
        return this._eventEnabled;
    }

    set eventEnabled(e) {
        this._eventEnabled = e;
    }

    constructor() {
        this.initLocalData();
        this.registerListeners();
    }

    static getInstance() {
        return SingletonFactory.getInstance(this);
    }

    initLocalData() {
        var e = this._modelName;
        this.localData = new Proxy({}, {
            get: function (t, o, n) {
                var i = e + "_" + o;
                if (!t.hasOwnProperty(o)) {
                    var r = cc.sys.localStorage.getItem(i) || "";
                    if (r) try {
                        r = JSON.parse(r);
                    } catch (e) {
                        r = void 0;
                    }
                    t[o] = r;
                }
                return Reflect.get(t, o, n);
            },
            set: function (t, o, n, i) {
                var r = e + "_" + o;
                if (t[o] !== n || "object" == typeof n) {
                    var a = JSON.stringify(n);
                    cc.sys.localStorage.setItem(r, a);
                }
                return Reflect.set(t, o, n, i);
            }
        });
    }

    registerListeners() {
        var e = this,
            t = this.getMessageListeners(),
            o = function o(o) {
                t.hasOwnProperty(o) && mj.EventManager.on(o, function () {
                    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                    e.eventEnabled && t[o].apply(t, [...n]);
                }, n);
            },
            n = this;
        for (var i in t) o(i);
    }

    getMessageListeners() {
        return {};
    }

    dispatchEvent(e) {
        for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        t.unshift(e);
        mj.EventManager.emit.apply(mj.EventManager, t);
    }

    getControllerByName(e) {
        return cc.js.getClassByName("ControllerManager").getInstance().getControByName(e);
    }

    pushController() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var o = cc.js.getClassByName("ControllerManager").getInstance();
        o.pushViewByController.apply(o, e);
    }

    popToTargetController() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var o = cc.js.getClassByName("ControllerManager").getInstance();
        o.popToTargetViewByName.apply(o, e);
    }

    closeViewByName(e) {
        cc.js.getClassByName("ControllerManager").getInstance().closeViewByName(e);
    }
}