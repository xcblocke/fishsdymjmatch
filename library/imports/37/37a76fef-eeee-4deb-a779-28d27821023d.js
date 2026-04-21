"use strict";
cc._RF.push(module, '37a76/v7u5N66d5KNJ4IQI9', 'Model');
// Scripts/framework/data/Model.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../utils/SingletonFactory");
var Model = /** @class */ (function () {
    function Model() {
        this._eventEnabled = true;
        this._modelName = mj.getClassName(this.constructor);
        this.localData = null;
        this.initLocalData();
        this.registerListeners();
    }
    Object.defineProperty(Model.prototype, "eventEnabled", {
        get: function () {
            return this._eventEnabled;
        },
        set: function (e) {
            this._eventEnabled = e;
        },
        enumerable: false,
        configurable: true
    });
    Model.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    Model.prototype.initLocalData = function () {
        var e = this._modelName;
        this.localData = new Proxy({}, {
            get: function (t, o, n) {
                var i = e + "_" + o;
                if (!t.hasOwnProperty(o)) {
                    var r = cc.sys.localStorage.getItem(i) || "";
                    if (r)
                        try {
                            r = JSON.parse(r);
                        }
                        catch (e) {
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
    };
    Model.prototype.registerListeners = function () {
        var e = this, t = this.getMessageListeners(), o = function o(o) {
            t.hasOwnProperty(o) && mj.EventManager.on(o, function () {
                for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                e.eventEnabled && t[o].apply(t, __spreadArrays(n));
            }, n);
        }, n = this;
        for (var i in t)
            o(i);
    };
    Model.prototype.getMessageListeners = function () {
        return {};
    };
    Model.prototype.dispatchEvent = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        t.unshift(e);
        mj.EventManager.emit.apply(mj.EventManager, t);
    };
    Model.prototype.getControllerByName = function (e) {
        return cc.js.getClassByName("ControllerManager").getInstance().getControByName(e);
    };
    Model.prototype.pushController = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var o = cc.js.getClassByName("ControllerManager").getInstance();
        o.pushViewByController.apply(o, e);
    };
    Model.prototype.popToTargetController = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var o = cc.js.getClassByName("ControllerManager").getInstance();
        o.popToTargetViewByName.apply(o, e);
    };
    Model.prototype.closeViewByName = function (e) {
        cc.js.getClassByName("ControllerManager").getInstance().closeViewByName(e);
    };
    Model = __decorate([
        mj.class("Model")
    ], Model);
    return Model;
}());
exports.default = Model;

cc._RF.pop();