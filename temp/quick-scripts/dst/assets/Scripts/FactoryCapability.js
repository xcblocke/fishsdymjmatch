
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FactoryCapability.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30a8cqey+xHMoPBrwMrhg/x', 'FactoryCapability');
// Scripts/FactoryCapability.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilityStrategy = exports.FactoryCapability = void 0;
var Common_1 = require("./types/Common");
var FactoryCapability = /** @class */ (function () {
    function FactoryCapability() {
    }
    FactoryCapability.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryCapability.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    FactoryCapability.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryCapability.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryCapability.strategies = new Map();
    return FactoryCapability;
}());
exports.FactoryCapability = FactoryCapability;
var capabilityStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.updateCapability = function (t) {
                Date.now();
                e.prototype.updateCapability.call(this, t);
                Date.now();
            };
            return t;
        }(t);
        FactoryCapability.register(e, o);
        return o;
    };
};
exports.capabilityStrategy = capabilityStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhY3RvcnlDYXBhYmlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTBDO0FBQzFDO0lBQUE7SUFhQSxDQUFDO0lBWFEsMEJBQVEsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBNkI7UUFBN0Isa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsZ0JBQWdCO0lBQUcsQ0FBQztJQUM1QyxxQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNNLDZCQUFXLEdBQWxCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBWE0sNEJBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBWWhDLHdCQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksOENBQWlCO0FBY3ZCLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0lBQ3pDLE9BQU8sVUFBVSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNqQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQztnQkFDUixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUM7WUFDdkMsQ0FBQztZQUNELENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDYixDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQlMsUUFBQSxrQkFBa0Isc0JBa0IzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVEQ0NvbG9yIH0gZnJvbSAnLi90eXBlcy9Db21tb24nO1xuZXhwb3J0IGNsYXNzIEZhY3RvcnlDYXBhYmlsaXR5IHtcbiAgc3RhdGljIHN0cmF0ZWdpZXMgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyByZWdpc3RlcihlLCB0KSB7XG4gICAgdGhpcy5zdHJhdGVnaWVzLmhhcyhlKSB8fCB0aGlzLnN0cmF0ZWdpZXMuc2V0KGUsIHQpO1xuICB9XG4gIHN0YXRpYyBsb2dJbmZvKGUsIHQgPSBFRENDb2xvci5MQVlFUl9DQVBBQklMSVRZKSB7fVxuICBzdGF0aWMgZ2V0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuc3RyYXRlZ2llcy5nZXQoZSk7XG4gICAgcmV0dXJuIHQgPyBuZXcgdCgpIDogbnVsbDtcbiAgfVxuICBzdGF0aWMgZ2V0QWxsTmFtZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zdHJhdGVnaWVzLmtleXMoKSk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgY2FwYWJpbGl0eVN0cmF0ZWd5ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIG8gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX19leHRlbmRzKHQsIGUpO1xuICAgICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBvID0gMDsgbyA8IGFyZ3VtZW50cy5sZW5ndGg7IG8rKykgdFtvXSA9IGFyZ3VtZW50c1tvXTtcbiAgICAgICAgcmV0dXJuIGUuYXBwbHkodGhpcywgWy4uLnRdKSB8fCB0aGlzO1xuICAgICAgfVxuICAgICAgdC5wcm90b3R5cGUudXBkYXRlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIERhdGUubm93KCk7XG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUNhcGFiaWxpdHkuY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgRGF0ZS5ub3coKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gdDtcbiAgICB9KHQpO1xuICAgIEZhY3RvcnlDYXBhYmlsaXR5LnJlZ2lzdGVyKGUsIG8pO1xuICAgIHJldHVybiBvO1xuICB9O1xufTsiXX0=