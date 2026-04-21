
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/data/Model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4REFBMkQ7QUFHM0Q7SUFhSTtRQVpBLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBV2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFYRCxzQkFBSSwrQkFBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsQ0FBQztZQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBV00saUJBQVcsR0FBbEI7UUFDSSxPQUFPLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNkJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDM0IsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdDLElBQUksQ0FBQzt3QkFBRSxJQUFJOzRCQUNQ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LENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFDQUFxQixHQUFyQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLENBQUM7UUFDYixFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBMUZnQixLQUFLO1FBRHpCLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ0csS0FBSyxDQTJGekI7SUFBRCxZQUFDO0NBM0ZELEFBMkZDLElBQUE7a0JBM0ZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1NpbmdsZXRvbkZhY3Rvcnl9IGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25GYWN0b3J5XCI7XG5cbkBtai5jbGFzcyhcIk1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICAgX2V2ZW50RW5hYmxlZCA9IHRydWU7XG4gICAgX21vZGVsTmFtZSA9IG1qLmdldENsYXNzTmFtZSh0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICBsb2NhbERhdGEgPSBudWxsO1xuXG4gICAgZ2V0IGV2ZW50RW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50RW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgZXZlbnRFbmFibGVkKGUpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRFbmFibGVkID0gZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0TG9jYWxEYXRhKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICAgIH1cblxuICAgIGluaXRMb2NhbERhdGEoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5fbW9kZWxOYW1lO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodCwgbywgbikge1xuICAgICAgICAgICAgICAgIHZhciBpID0gZSArIFwiX1wiICsgbztcbiAgICAgICAgICAgICAgICBpZiAoIXQuaGFzT3duUHJvcGVydHkobykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gSlNPTi5wYXJzZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0W29dID0gcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHQsIG8sIG4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHQsIG8sIG4sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGUgKyBcIl9cIiArIG87XG4gICAgICAgICAgICAgICAgaWYgKHRbb10gIT09IG4gfHwgXCJvYmplY3RcIiA9PSB0eXBlb2Ygbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IEpTT04uc3RyaW5naWZ5KG4pO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0ociwgYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh0LCBvLCBuLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcyxcbiAgICAgICAgICAgIHQgPSB0aGlzLmdldE1lc3NhZ2VMaXN0ZW5lcnMoKSxcbiAgICAgICAgICAgIG8gPSBmdW5jdGlvbiBvKG8pIHtcbiAgICAgICAgICAgICAgICB0Lmhhc093blByb3BlcnR5KG8pICYmIG1qLkV2ZW50TWFuYWdlci5vbihvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIG5baV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGUuZXZlbnRFbmFibGVkICYmIHRbb10uYXBwbHkodCwgWy4uLm5dKTtcbiAgICAgICAgICAgICAgICB9LCBuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0KSBvKGkpO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaEV2ZW50KGUpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBvID0gMTsgbyA8IGFyZ3VtZW50cy5sZW5ndGg7IG8rKykgdFtvIC0gMV0gPSBhcmd1bWVudHNbb107XG4gICAgICAgIHQudW5zaGlmdChlKTtcbiAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQuYXBwbHkobWouRXZlbnRNYW5hZ2VyLCB0KTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9sbGVyQnlOYW1lKGUpIHtcbiAgICAgICAgcmV0dXJuIGNjLmpzLmdldENsYXNzQnlOYW1lKFwiQ29udHJvbGxlck1hbmFnZXJcIikuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoZSk7XG4gICAgfVxuXG4gICAgcHVzaENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIGVbdF0gPSBhcmd1bWVudHNbdF07XG4gICAgICAgIHZhciBvID0gY2MuanMuZ2V0Q2xhc3NCeU5hbWUoXCJDb250cm9sbGVyTWFuYWdlclwiKS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBvLnB1c2hWaWV3QnlDb250cm9sbGVyLmFwcGx5KG8sIGUpO1xuICAgIH1cblxuICAgIHBvcFRvVGFyZ2V0Q29udHJvbGxlcigpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICAgICAgdmFyIG8gPSBjYy5qcy5nZXRDbGFzc0J5TmFtZShcIkNvbnRyb2xsZXJNYW5hZ2VyXCIpLmdldEluc3RhbmNlKCk7XG4gICAgICAgIG8ucG9wVG9UYXJnZXRWaWV3QnlOYW1lLmFwcGx5KG8sIGUpO1xuICAgIH1cblxuICAgIGNsb3NlVmlld0J5TmFtZShlKSB7XG4gICAgICAgIGNjLmpzLmdldENsYXNzQnlOYW1lKFwiQ29udHJvbGxlck1hbmFnZXJcIikuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoZSk7XG4gICAgfVxufSJdfQ==