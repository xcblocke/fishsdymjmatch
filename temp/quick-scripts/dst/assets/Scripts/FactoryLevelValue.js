
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FactoryLevelValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c661eZlhGVP1q9dWrH8zMCj', 'FactoryLevelValue');
// Scripts/FactoryLevelValue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.levelStrategy = exports.FactoryLevelValue = void 0;
var Common_1 = require("./types/Common");
var FactoryLevelValue = /** @class */ (function () {
    function FactoryLevelValue() {
    }
    FactoryLevelValue.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryLevelValue.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    FactoryLevelValue.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryLevelValue.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryLevelValue.strategies = new Map();
    return FactoryLevelValue;
}());
exports.FactoryLevelValue = FactoryLevelValue;
var levelStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.calculateLevelValue = function (t) {
                Date.now();
                var o = e.prototype.calculateLevelValue.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t);
        FactoryLevelValue.register(e, o);
        return o;
    };
};
exports.levelStrategy = levelStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhY3RvcnlMZXZlbFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTBDO0FBQzFDO0lBQUE7SUFhQSxDQUFDO0lBWFEsMEJBQVEsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBOEI7UUFBOUIsa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsaUJBQWlCO0lBQUcsQ0FBQztJQUM3QyxxQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNNLDZCQUFXLEdBQWxCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBWE0sNEJBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBWWhDLHdCQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksOENBQWlCO0FBY3ZCLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxPQUFPLFVBQVUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDakIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBbkJTLFFBQUEsYUFBYSxpQkFtQnRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRURDQ29sb3IgfSBmcm9tICcuL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgRmFjdG9yeUxldmVsVmFsdWUge1xuICBzdGF0aWMgc3RyYXRlZ2llcyA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIHJlZ2lzdGVyKGUsIHQpIHtcbiAgICB0aGlzLnN0cmF0ZWdpZXMuaGFzKGUpIHx8IHRoaXMuc3RyYXRlZ2llcy5zZXQoZSwgdCk7XG4gIH1cbiAgc3RhdGljIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX0xFVkVMX1ZBTFVFKSB7fVxuICBzdGF0aWMgZ2V0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuc3RyYXRlZ2llcy5nZXQoZSk7XG4gICAgcmV0dXJuIHQgPyBuZXcgdCgpIDogbnVsbDtcbiAgfVxuICBzdGF0aWMgZ2V0QWxsTmFtZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zdHJhdGVnaWVzLmtleXMoKSk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgbGV2ZWxTdHJhdGVneSA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciBvID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF9fZXh0ZW5kcyh0LCBlKTtcbiAgICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSBbXSwgbyA9IDA7IG8gPCBhcmd1bWVudHMubGVuZ3RoOyBvKyspIHRbb10gPSBhcmd1bWVudHNbb107XG4gICAgICAgIHJldHVybiBlLmFwcGx5KHRoaXMsIFsuLi50XSkgfHwgdGhpcztcbiAgICAgIH1cbiAgICAgIHQucHJvdG90eXBlLmNhbGN1bGF0ZUxldmVsVmFsdWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbyA9IGUucHJvdG90eXBlLmNhbGN1bGF0ZUxldmVsVmFsdWUuY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSh0KTtcbiAgICBGYWN0b3J5TGV2ZWxWYWx1ZS5yZWdpc3RlcihlLCBvKTtcbiAgICByZXR1cm4gbztcbiAgfTtcbn07Il19