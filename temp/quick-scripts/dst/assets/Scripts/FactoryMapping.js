
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FactoryMapping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24b89FPRfNI/7X0zpJmqGTK', 'FactoryMapping');
// Scripts/FactoryMapping.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.mappingStrategy = exports.FactoryMapping = void 0;
var Common_1 = require("./types/Common");
var FactoryMapping = /** @class */ (function () {
    function FactoryMapping() {
    }
    FactoryMapping.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryMapping.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    FactoryMapping.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryMapping.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryMapping.strategies = new Map();
    return FactoryMapping;
}());
exports.FactoryMapping = FactoryMapping;
var mappingStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.mapping = function (t) {
                Date.now();
                var o = e.prototype.mapping.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t);
        FactoryMapping.register(e, o);
        return o;
    };
};
exports.mappingStrategy = mappingStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhY3RvcnlNYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTBDO0FBQzFDO0lBQUE7SUFhQSxDQUFDO0lBWFEsdUJBQVEsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLHNCQUFPLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBMEI7UUFBMUIsa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsYUFBYTtJQUFHLENBQUM7SUFDekMsa0JBQUcsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDTSwwQkFBVyxHQUFsQjtRQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVhNLHlCQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVloQyxxQkFBQztDQWJELEFBYUMsSUFBQTtBQWJZLHdDQUFjO0FBY3BCLElBQUksZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUN0QyxPQUFPLFVBQVUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDakIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBbkJTLFFBQUEsZUFBZSxtQkFtQnhCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRURDQ29sb3IgfSBmcm9tICcuL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgRmFjdG9yeU1hcHBpbmcge1xuICBzdGF0aWMgc3RyYXRlZ2llcyA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIHJlZ2lzdGVyKGUsIHQpIHtcbiAgICB0aGlzLnN0cmF0ZWdpZXMuaGFzKGUpIHx8IHRoaXMuc3RyYXRlZ2llcy5zZXQoZSwgdCk7XG4gIH1cbiAgc3RhdGljIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX01BUFBJTkcpIHt9XG4gIHN0YXRpYyBnZXQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5zdHJhdGVnaWVzLmdldChlKTtcbiAgICByZXR1cm4gdCA/IG5ldyB0KCkgOiBudWxsO1xuICB9XG4gIHN0YXRpYyBnZXRBbGxOYW1lcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0cmF0ZWdpZXMua2V5cygpKTtcbiAgfVxufVxuZXhwb3J0IHZhciBtYXBwaW5nU3RyYXRlZ3kgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgbyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfX2V4dGVuZHModCwgZSk7XG4gICAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gW10sIG8gPSAwOyBvIDwgYXJndW1lbnRzLmxlbmd0aDsgbysrKSB0W29dID0gYXJndW1lbnRzW29dO1xuICAgICAgICByZXR1cm4gZS5hcHBseSh0aGlzLCBbLi4udF0pIHx8IHRoaXM7XG4gICAgICB9XG4gICAgICB0LnByb3RvdHlwZS5tYXBwaW5nID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIG8gPSBlLnByb3RvdHlwZS5tYXBwaW5nLmNhbGwodGhpcywgdCk7XG4gICAgICAgIERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB0O1xuICAgIH0odCk7XG4gICAgRmFjdG9yeU1hcHBpbmcucmVnaXN0ZXIoZSwgbyk7XG4gICAgcmV0dXJuIG87XG4gIH07XG59OyJdfQ==