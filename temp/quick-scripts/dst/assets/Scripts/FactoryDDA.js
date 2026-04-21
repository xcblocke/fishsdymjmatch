
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FactoryDDA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73e61Sdwk9CRac4/lSQ6MRI', 'FactoryDDA');
// Scripts/FactoryDDA.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ddaStrategy = exports.FactoryDDA = void 0;
var Common_1 = require("./types/Common");
var FactoryDDA = /** @class */ (function () {
    function FactoryDDA() {
    }
    FactoryDDA.register = function (e) {
        this.strategies.has(e.name) || this.strategies.set(e.name, e);
    };
    FactoryDDA.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    FactoryDDA.get = function (e) {
        var t;
        return null !== (t = this.strategies.get(e)) && void 0 !== t ? t : null;
    };
    FactoryDDA.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryDDA.getAllStrategies = function () {
        return Array.from(this.strategies.values());
    };
    FactoryDDA.strategies = new Map();
    return FactoryDDA;
}());
exports.FactoryDDA = FactoryDDA;
var ddaStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.filter = function (t) {
                Date.now();
                var o = e.prototype.filter.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t), n = new o();
        n.setPriority(e);
        FactoryDDA.register(n);
        return o;
    };
};
exports.ddaStrategy = ddaStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhY3RvcnlEREEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMEM7QUFDMUM7SUFBQTtJQWdCQSxDQUFDO0lBZFEsbUJBQVEsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNNLGtCQUFPLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBc0I7UUFBdEIsa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsU0FBUztJQUFHLENBQUM7SUFDckMsY0FBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7SUFDTSxzQkFBVyxHQUFsQjtRQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNNLDJCQUFnQixHQUF2QjtRQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWRNLHFCQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWVoQyxpQkFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLGdDQUFVO0FBaUJoQixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsT0FBTyxVQUFVLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQ2YsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDSixDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXJCUyxRQUFBLFdBQVcsZUFxQnBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRURDQ29sb3IgfSBmcm9tICcuL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgRmFjdG9yeUREQSB7XG4gIHN0YXRpYyBzdHJhdGVnaWVzID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgcmVnaXN0ZXIoZSkge1xuICAgIHRoaXMuc3RyYXRlZ2llcy5oYXMoZS5uYW1lKSB8fCB0aGlzLnN0cmF0ZWdpZXMuc2V0KGUubmFtZSwgZSk7XG4gIH1cbiAgc3RhdGljIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX0REQSkge31cbiAgc3RhdGljIGdldChlKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5zdHJhdGVnaWVzLmdldChlKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IG51bGw7XG4gIH1cbiAgc3RhdGljIGdldEFsbE5hbWVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RyYXRlZ2llcy5rZXlzKCkpO1xuICB9XG4gIHN0YXRpYyBnZXRBbGxTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RyYXRlZ2llcy52YWx1ZXMoKSk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgZGRhU3RyYXRlZ3kgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgbyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF9fZXh0ZW5kcyh0LCBlKTtcbiAgICAgICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgICBmb3IgKHZhciB0ID0gW10sIG8gPSAwOyBvIDwgYXJndW1lbnRzLmxlbmd0aDsgbysrKSB0W29dID0gYXJndW1lbnRzW29dO1xuICAgICAgICAgIHJldHVybiBlLmFwcGx5KHRoaXMsIFsuLi50XSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIERhdGUubm93KCk7XG4gICAgICAgICAgdmFyIG8gPSBlLnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgICBEYXRlLm5vdygpO1xuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0odCksXG4gICAgICBuID0gbmV3IG8oKTtcbiAgICBuLnNldFByaW9yaXR5KGUpO1xuICAgIEZhY3RvcnlEREEucmVnaXN0ZXIobik7XG4gICAgcmV0dXJuIG87XG4gIH07XG59OyJdfQ==