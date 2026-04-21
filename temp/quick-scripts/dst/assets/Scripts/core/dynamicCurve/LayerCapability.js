
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/LayerCapability.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ddd6mOoeFE4IWddzuizrq3', 'LayerCapability');
// Scripts/core/dynamicCurve/LayerCapability.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerCapability = void 0;
var FactoryCapability_1 = require("../../FactoryCapability");
var Common_1 = require("../../types/Common");
var LayerCapability = /** @class */ (function () {
    function LayerCapability() {
        this.strategy = null;
    }
    LayerCapability.getAvailableStrategies = function () {
        return FactoryCapability_1.FactoryCapability.getAllNames();
    };
    LayerCapability.prototype.setStrategy = function (e) {
        var t = FactoryCapability_1.FactoryCapability.get(e.name);
        if (t) {
            this.strategy = t;
            e.param && t.setStrategyParam(e.param);
            return true;
        }
        return false;
    };
    LayerCapability.prototype.getStrategyName = function () {
        var e;
        return (null === (e = this.strategy) || void 0 === e ? void 0 : e.name) || "未设置策略";
    };
    LayerCapability.prototype.updateCapability = function (e) {
        this.strategy && this.strategy.updateCapability(e);
    };
    LayerCapability.prototype.getCapability = function (e) {
        return this.strategy ? this.strategy.getCapability(e) : e.defaultCapability;
    };
    LayerCapability.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    return LayerCapability;
}());
exports.LayerCapability = LayerCapability;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyQ2FwYWJpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCw2Q0FBOEM7QUFDOUM7SUFBQTtRQUNFLGFBQVEsR0FBRyxJQUFJLENBQUM7SUF3QmxCLENBQUM7SUF2QlEsc0NBQXNCLEdBQTdCO1FBQ0UsT0FBTyxxQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxxQ0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDO0lBQ3JGLENBQUM7SUFDRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELHVDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQzlFLENBQUM7SUFDRCxpQ0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQTZCO1FBQTdCLGtCQUFBLEVBQUEsSUFBSSxpQkFBUSxDQUFDLGdCQUFnQjtJQUFHLENBQUM7SUFDOUMsc0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdG9yeUNhcGFiaWxpdHkgfSBmcm9tICcuLi8uLi9GYWN0b3J5Q2FwYWJpbGl0eSc7XG5pbXBvcnQgeyBFRENDb2xvciB9IGZyb20gJy4uLy4uL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgTGF5ZXJDYXBhYmlsaXR5IHtcbiAgc3RyYXRlZ3kgPSBudWxsO1xuICBzdGF0aWMgZ2V0QXZhaWxhYmxlU3RyYXRlZ2llcygpIHtcbiAgICByZXR1cm4gRmFjdG9yeUNhcGFiaWxpdHkuZ2V0QWxsTmFtZXMoKTtcbiAgfVxuICBzZXRTdHJhdGVneShlKSB7XG4gICAgdmFyIHQgPSBGYWN0b3J5Q2FwYWJpbGl0eS5nZXQoZS5uYW1lKTtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5zdHJhdGVneSA9IHQ7XG4gICAgICBlLnBhcmFtICYmIHQuc2V0U3RyYXRlZ3lQYXJhbShlLnBhcmFtKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0U3RyYXRlZ3lOYW1lKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSB0aGlzLnN0cmF0ZWd5KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5hbWUpIHx8IFwi5pyq6K6+572u562W55WlXCI7XG4gIH1cbiAgdXBkYXRlQ2FwYWJpbGl0eShlKSB7XG4gICAgdGhpcy5zdHJhdGVneSAmJiB0aGlzLnN0cmF0ZWd5LnVwZGF0ZUNhcGFiaWxpdHkoZSk7XG4gIH1cbiAgZ2V0Q2FwYWJpbGl0eShlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kgPyB0aGlzLnN0cmF0ZWd5LmdldENhcGFiaWxpdHkoZSkgOiBlLmRlZmF1bHRDYXBhYmlsaXR5O1xuICB9XG4gIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX0NBUEFCSUxJVFkpIHt9XG59Il19