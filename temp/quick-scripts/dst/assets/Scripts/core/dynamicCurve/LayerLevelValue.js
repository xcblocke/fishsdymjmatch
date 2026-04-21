
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/LayerLevelValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fdf2avkClNkaeBLGT8XAXT', 'LayerLevelValue');
// Scripts/core/dynamicCurve/LayerLevelValue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerLevelValue = void 0;
var Common_1 = require("../../types/Common");
var FactoryLevelValue_1 = require("../../FactoryLevelValue");
var LayerLevelValue = /** @class */ (function () {
    function LayerLevelValue() {
        this.strategy = null;
    }
    LayerLevelValue.getAvailableStrategies = function () {
        return FactoryLevelValue_1.FactoryLevelValue.getAllNames();
    };
    LayerLevelValue.prototype.setStrategy = function (e) {
        var t = FactoryLevelValue_1.FactoryLevelValue.get(e.name);
        if (t) {
            this.strategy = t;
            e.param && t.setStrategyParam(e.param);
            return true;
        }
        return false;
    };
    LayerLevelValue.prototype.getStrategyName = function () {
        var e;
        return (null === (e = this.strategy) || void 0 === e ? void 0 : e.name) || "未设置策略";
    };
    LayerLevelValue.prototype.fillLevelValue = function (e) {
        this.strategy && this.strategy.fillLevelValue(e);
    };
    LayerLevelValue.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    return LayerLevelValue;
}());
exports.LayerLevelValue = LayerLevelValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyTGV2ZWxWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE4QztBQUM5Qyw2REFBNEQ7QUFDNUQ7SUFBQTtRQUNFLGFBQVEsR0FBRyxJQUFJLENBQUM7SUFxQmxCLENBQUM7SUFwQlEsc0NBQXNCLEdBQTdCO1FBQ0UsT0FBTyxxQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxxQ0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDO0lBQ3JGLENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGlDQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBOEI7UUFBOUIsa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsaUJBQWlCO0lBQUcsQ0FBQztJQUMvQyxzQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRENDb2xvciB9IGZyb20gJy4uLy4uL3R5cGVzL0NvbW1vbic7XG5pbXBvcnQgeyBGYWN0b3J5TGV2ZWxWYWx1ZSB9IGZyb20gJy4uLy4uL0ZhY3RvcnlMZXZlbFZhbHVlJztcbmV4cG9ydCBjbGFzcyBMYXllckxldmVsVmFsdWUge1xuICBzdHJhdGVneSA9IG51bGw7XG4gIHN0YXRpYyBnZXRBdmFpbGFibGVTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiBGYWN0b3J5TGV2ZWxWYWx1ZS5nZXRBbGxOYW1lcygpO1xuICB9XG4gIHNldFN0cmF0ZWd5KGUpIHtcbiAgICB2YXIgdCA9IEZhY3RvcnlMZXZlbFZhbHVlLmdldChlLm5hbWUpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnN0cmF0ZWd5ID0gdDtcbiAgICAgIGUucGFyYW0gJiYgdC5zZXRTdHJhdGVneVBhcmFtKGUucGFyYW0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBnZXRTdHJhdGVneU5hbWUoKSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IHRoaXMuc3RyYXRlZ3kpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubmFtZSkgfHwgXCLmnKrorr7nva7nrZbnlaVcIjtcbiAgfVxuICBmaWxsTGV2ZWxWYWx1ZShlKSB7XG4gICAgdGhpcy5zdHJhdGVneSAmJiB0aGlzLnN0cmF0ZWd5LmZpbGxMZXZlbFZhbHVlKGUpO1xuICB9XG4gIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX0xFVkVMX1ZBTFVFKSB7fVxufSJdfQ==