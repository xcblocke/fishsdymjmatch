
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CapabilityStrategyBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0552aOls4FMC4kgqecVTgMA', 'CapabilityStrategyBase');
// Scripts/CapabilityStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategyBase = exports.sigmoid = void 0;
var Common_1 = require("./types/Common");
var sigmoid = function (e) {
    return 1 / (1 + Math.exp(-e));
};
exports.sigmoid = sigmoid;
var CapabilityStrategyBase = /** @class */ (function () {
    function CapabilityStrategyBase() {
        this.param = {};
    }
    CapabilityStrategyBase.prototype.getPValueKey = function () {
        var e = this, t = Object.keys(this.param);
        t.sort();
        var o = t.map(function (t) {
            return t + "=" + e.param[t];
        }).join("_");
        return Common_1.PrefixCapability + "_" + this.name + "_[" + o + "]";
    };
    CapabilityStrategyBase.prototype.getCapability = function (e) {
        var t = this.getPValueKey();
        return e.extractModel.getCachedData(t, e.defaultCapability);
    };
    CapabilityStrategyBase.prototype.setCapability = function (e, t) {
        var o = this.getPValueKey();
        e.extractModel.cacheData(o, t);
    };
    CapabilityStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    CapabilityStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    CapabilityStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    return CapabilityStrategyBase;
}());
exports.CapabilityStrategyBase = CapabilityStrategyBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NhcGFiaWxpdHlTdHJhdGVneUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBNEQ7QUFDckQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUZTLFFBQUEsT0FBTyxXQUVoQjtBQUNGO0lBQUE7UUFDRSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBeUJiLENBQUM7SUF4QkMsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsT0FBTyx5QkFBZ0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsOENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELDhDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCx3Q0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQTZCO1FBQTdCLGtCQUFBLEVBQUEsSUFBSSxpQkFBUSxDQUFDLGdCQUFnQjtJQUFHLENBQUM7SUFDNUMsaURBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELGlEQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZWZpeENhcGFiaWxpdHksIEVEQ0NvbG9yIH0gZnJvbSAnLi90eXBlcy9Db21tb24nO1xuZXhwb3J0IHZhciBzaWdtb2lkID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIDEgLyAoMSArIE1hdGguZXhwKC1lKSk7XG59O1xuZXhwb3J0IGNsYXNzIENhcGFiaWxpdHlTdHJhdGVneUJhc2Uge1xuICBwYXJhbSA9IHt9O1xuICBnZXRQVmFsdWVLZXkoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IE9iamVjdC5rZXlzKHRoaXMucGFyYW0pO1xuICAgIHQuc29ydCgpO1xuICAgIHZhciBvID0gdC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ICsgXCI9XCIgKyBlLnBhcmFtW3RdO1xuICAgIH0pLmpvaW4oXCJfXCIpO1xuICAgIHJldHVybiBQcmVmaXhDYXBhYmlsaXR5ICsgXCJfXCIgKyB0aGlzLm5hbWUgKyBcIl9bXCIgKyBvICsgXCJdXCI7XG4gIH1cbiAgZ2V0Q2FwYWJpbGl0eShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFBWYWx1ZUtleSgpO1xuICAgIHJldHVybiBlLmV4dHJhY3RNb2RlbC5nZXRDYWNoZWREYXRhKHQsIGUuZGVmYXVsdENhcGFiaWxpdHkpO1xuICB9XG4gIHNldENhcGFiaWxpdHkoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRQVmFsdWVLZXkoKTtcbiAgICBlLmV4dHJhY3RNb2RlbC5jYWNoZURhdGEobywgdCk7XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuTEFZRVJfQ0FQQUJJTElUWSkge31cbiAgc2V0U3RyYXRlZ3lQYXJhbShlKSB7XG4gICAgdGhpcy5wYXJhbSA9IGU7XG4gIH1cbiAgZ2V0U3RyYXRlZ3lQYXJhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbTtcbiAgfVxufSJdfQ==