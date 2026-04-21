
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/LayerDDA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8dbf7aYdn1NUK9ObPMN3BFa', 'LayerDDA');
// Scripts/core/dynamicCurve/LayerDDA.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerDDA = void 0;
var IDynamicCurve_1 = require("../../types/IDynamicCurve");
var FactoryDDA_1 = require("../../FactoryDDA");
var Common_1 = require("../../types/Common");
var LayerDDA = /** @class */ (function () {
    function LayerDDA() {
        this.strategies = [];
    }
    LayerDDA.prototype.filter = function (e) {
        var t, o;
        this.strategies.sort(function (e, t) {
            return t.getPriority() - e.getPriority();
        });
        try {
            for (var a = __values(this.strategies), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = __read(s.filter(e), 2), u = c[0], p = c[1];
                if (u === IDynamicCurve_1.EDDAFilter.LEVEL)
                    return [true, p];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return [false, null];
    };
    LayerDDA.prototype.pushStrategies = function (e) {
        var t, o;
        this.strategies = [];
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var l = r.value, s = FactoryDDA_1.FactoryDDA.get(l.name);
                if (s) {
                    this.strategies.push(s);
                    l.param && s.setStrategyParam(l.param);
                    void 0 !== l.priority && s.setPriority(l.priority);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    LayerDDA.prototype.addStrategy = function (e) {
        var t = FactoryDDA_1.FactoryDDA.get(e.name);
        if (t) {
            this.strategies.push(t);
            e.param && t.setStrategyParam(e.param);
            void 0 !== e.priority && t.setPriority(e.priority);
        }
    };
    LayerDDA.prototype.clearStrategies = function () {
        this.strategies = [];
    };
    LayerDDA.prototype.getStrategyName = function () {
        return this.strategies.map(function (e) {
            return e.name;
        }).join(",");
    };
    LayerDDA.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    return LayerDDA;
}());
exports.LayerDDA = LayerDDA;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyRERBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXVEO0FBQ3ZELCtDQUE4QztBQUM5Qyw2Q0FBOEM7QUFDOUM7SUFBQTtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFxRWxCLENBQUM7SUFwRUMseUJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLEtBQUs7b0JBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7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QUE7QUF0RVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRERBRmlsdGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvSUR5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgeyBGYWN0b3J5RERBIH0gZnJvbSAnLi4vLi4vRmFjdG9yeUREQSc7XG5pbXBvcnQgeyBFRENDb2xvciB9IGZyb20gJy4uLy4uL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgTGF5ZXJEREEge1xuICBzdHJhdGVnaWVzID0gW107XG4gIGZpbHRlcihlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgdGhpcy5zdHJhdGVnaWVzLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0LmdldFByaW9yaXR5KCkgLSBlLmdldFByaW9yaXR5KCk7XG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyh0aGlzLnN0cmF0ZWdpZXMpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWUsXG4gICAgICAgICAgYyA9IF9fcmVhZChzLmZpbHRlcihlKSwgMiksXG4gICAgICAgICAgdSA9IGNbMF0sXG4gICAgICAgICAgcCA9IGNbMV07XG4gICAgICAgIGlmICh1ID09PSBFRERBRmlsdGVyLkxFVkVMKSByZXR1cm4gW3RydWUsIHBdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSBhLnJldHVybikgJiYgby5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICB9XG4gIHB1c2hTdHJhdGVnaWVzKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0aGlzLnN0cmF0ZWdpZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKGUpLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IHIudmFsdWUsXG4gICAgICAgICAgcyA9IEZhY3RvcnlEREEuZ2V0KGwubmFtZSk7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgdGhpcy5zdHJhdGVnaWVzLnB1c2gocyk7XG4gICAgICAgICAgbC5wYXJhbSAmJiBzLnNldFN0cmF0ZWd5UGFyYW0obC5wYXJhbSk7XG4gICAgICAgICAgdm9pZCAwICE9PSBsLnByaW9yaXR5ICYmIHMuc2V0UHJpb3JpdHkobC5wcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGRTdHJhdGVneShlKSB7XG4gICAgdmFyIHQgPSBGYWN0b3J5RERBLmdldChlLm5hbWUpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnN0cmF0ZWdpZXMucHVzaCh0KTtcbiAgICAgIGUucGFyYW0gJiYgdC5zZXRTdHJhdGVneVBhcmFtKGUucGFyYW0pO1xuICAgICAgdm9pZCAwICE9PSBlLnByaW9yaXR5ICYmIHQuc2V0UHJpb3JpdHkoZS5wcmlvcml0eSk7XG4gICAgfVxuICB9XG4gIGNsZWFyU3RyYXRlZ2llcygpIHtcbiAgICB0aGlzLnN0cmF0ZWdpZXMgPSBbXTtcbiAgfVxuICBnZXRTdHJhdGVneU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ2llcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLm5hbWU7XG4gICAgfSkuam9pbihcIixcIik7XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuTEFZRVJfRERBKSB7fVxufSJdfQ==