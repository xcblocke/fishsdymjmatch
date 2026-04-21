
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/LayerMapping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb283bhEK5Iqq+/ffi+cyH9', 'LayerMapping');
// Scripts/core/dynamicCurve/LayerMapping.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerMapping = void 0;
var Common_1 = require("../../types/Common");
var FactoryMapping_1 = require("../../FactoryMapping");
var LayerMapping = /** @class */ (function () {
    function LayerMapping() {
        this.strategies = [];
    }
    LayerMapping.getAvailableStrategies = function () {
        return FactoryMapping_1.FactoryMapping.getAllNames();
    };
    LayerMapping.prototype.pushStrategy = function (e) {
        var t = FactoryMapping_1.FactoryMapping.get(e.name);
        if (t) {
            this.strategies.push(t);
            e.param && t.setStrategyParam(e.param);
        }
    };
    LayerMapping.prototype.setStrategies = function (e) {
        var t, o;
        this.strategies = [];
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var a = r.value;
                this.pushStrategy(a);
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
        this.pushStrategy({
            name: "Mapping0"
        });
    };
    LayerMapping.prototype.getStrategyName = function () {
        return this.strategies.map(function (e) {
            return e.name;
        }).join(",");
    };
    LayerMapping.prototype.mapping = function (e) {
        var t, o;
        if (0 === this.strategies.length)
            return null;
        try {
            for (var i = __values(this.strategies), r = i.next(); !r.done; r = i.next()) {
                var a = r.value.mapping(e);
                if (a)
                    return a;
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
        return null;
    };
    LayerMapping.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    return LayerMapping;
}());
exports.LayerMapping = LayerMapping;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyTWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE4QztBQUM5Qyx1REFBc0Q7QUFDdEQ7SUFBQTtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7SUE2RGxCLENBQUM7SUE1RFEsbUNBQXNCLEdBQTdCO1FBQ0UsT0FBTywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLCtCQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDRCxvQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDcEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlDLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQztvQkFBRSxPQUFPLENBQUMsQ0FBQzthQUNqQjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsOEJBQU8sR0FBUCxVQUFRLENBQUMsRUFBRSxDQUEwQjtRQUExQixrQkFBQSxFQUFBLElBQUksaUJBQVEsQ0FBQyxhQUFhO0lBQUcsQ0FBQztJQUMzQyxtQkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRENDb2xvciB9IGZyb20gJy4uLy4uL3R5cGVzL0NvbW1vbic7XG5pbXBvcnQgeyBGYWN0b3J5TWFwcGluZyB9IGZyb20gJy4uLy4uL0ZhY3RvcnlNYXBwaW5nJztcbmV4cG9ydCBjbGFzcyBMYXllck1hcHBpbmcge1xuICBzdHJhdGVnaWVzID0gW107XG4gIHN0YXRpYyBnZXRBdmFpbGFibGVTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiBGYWN0b3J5TWFwcGluZy5nZXRBbGxOYW1lcygpO1xuICB9XG4gIHB1c2hTdHJhdGVneShlKSB7XG4gICAgdmFyIHQgPSBGYWN0b3J5TWFwcGluZy5nZXQoZS5uYW1lKTtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5zdHJhdGVnaWVzLnB1c2godCk7XG4gICAgICBlLnBhcmFtICYmIHQuc2V0U3RyYXRlZ3lQYXJhbShlLnBhcmFtKTtcbiAgICB9XG4gIH1cbiAgc2V0U3RyYXRlZ2llcyhlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgdGhpcy5zdHJhdGVnaWVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhlKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSByLnZhbHVlO1xuICAgICAgICB0aGlzLnB1c2hTdHJhdGVneShhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnB1c2hTdHJhdGVneSh7XG4gICAgICBuYW1lOiBcIk1hcHBpbmcwXCJcbiAgICB9KTtcbiAgfVxuICBnZXRTdHJhdGVneU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ2llcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLm5hbWU7XG4gICAgfSkuam9pbihcIixcIik7XG4gIH1cbiAgbWFwcGluZyhlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKDAgPT09IHRoaXMuc3RyYXRlZ2llcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModGhpcy5zdHJhdGVnaWVzKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSByLnZhbHVlLm1hcHBpbmcoZSk7XG4gICAgICAgIGlmIChhKSByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsb2dJbmZvKGUsIHQgPSBFRENDb2xvci5MQVlFUl9NQVBQSU5HKSB7fVxufSJdfQ==