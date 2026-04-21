
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelStrategyBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc718cTdXxLDLugHhgJpL7D', 'LevelStrategyBase');
// Scripts/LevelStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelStrategyBase = void 0;
var Common_1 = require("./types/Common");
var LevelStrategyBase = /** @class */ (function () {
    function LevelStrategyBase() {
        this.param = {};
    }
    LevelStrategyBase.prototype.fillLevelValue = function (e) {
        var t = this.getPValueKey(), o = e.levelModel.getCachedData(t, []);
        if (o.length !== e.levels.length) {
            o = this.calculateLevelValue(e);
            e.levelModel.cacheData(t, o);
        }
        for (var i = 0; i < e.levels.length; i++)
            e.levels[i][Common_1.LevelValueKey] = o[i];
        return e.levels;
    };
    LevelStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    LevelStrategyBase.prototype.getPValueKey = function () {
        var e = this, t = Object.keys(this.param);
        t.sort();
        var o = t.map(function (t) {
            return t + "=" + e.param[t];
        }).join("_");
        return Common_1.PrefixLevelValue + "_" + this.name + "_[" + o + "]";
    };
    LevelStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    LevelStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    return LevelStrategyBase;
}());
exports.LevelStrategyBase = LevelStrategyBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsU3RyYXRlZ3lCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJFO0FBQzNFO0lBQUE7UUFDRSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBMkJiLENBQUM7SUExQkMsMENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELG1DQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBOEI7UUFBOUIsa0JBQUEsRUFBQSxJQUFJLGlCQUFRLENBQUMsaUJBQWlCO0lBQUcsQ0FBQztJQUM3Qyx3Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPLHlCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDSCx3QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGV2ZWxWYWx1ZUtleSwgRURDQ29sb3IsIFByZWZpeExldmVsVmFsdWUgfSBmcm9tICcuL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgTGV2ZWxTdHJhdGVneUJhc2Uge1xuICBwYXJhbSA9IHt9O1xuICBmaWxsTGV2ZWxWYWx1ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFBWYWx1ZUtleSgpLFxuICAgICAgbyA9IGUubGV2ZWxNb2RlbC5nZXRDYWNoZWREYXRhKHQsIFtdKTtcbiAgICBpZiAoby5sZW5ndGggIT09IGUubGV2ZWxzLmxlbmd0aCkge1xuICAgICAgbyA9IHRoaXMuY2FsY3VsYXRlTGV2ZWxWYWx1ZShlKTtcbiAgICAgIGUubGV2ZWxNb2RlbC5jYWNoZURhdGEodCwgbyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5sZXZlbHMubGVuZ3RoOyBpKyspIGUubGV2ZWxzW2ldW0xldmVsVmFsdWVLZXldID0gb1tpXTtcbiAgICByZXR1cm4gZS5sZXZlbHM7XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuTEFZRVJfTEVWRUxfVkFMVUUpIHt9XG4gIGdldFBWYWx1ZUtleSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gT2JqZWN0LmtleXModGhpcy5wYXJhbSk7XG4gICAgdC5zb3J0KCk7XG4gICAgdmFyIG8gPSB0Lm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgKyBcIj1cIiArIGUucGFyYW1bdF07XG4gICAgfSkuam9pbihcIl9cIik7XG4gICAgcmV0dXJuIFByZWZpeExldmVsVmFsdWUgKyBcIl9cIiArIHRoaXMubmFtZSArIFwiX1tcIiArIG8gKyBcIl1cIjtcbiAgfVxuICBzZXRTdHJhdGVneVBhcmFtKGUpIHtcbiAgICB0aGlzLnBhcmFtID0gZTtcbiAgfVxuICBnZXRTdHJhdGVneVBhcmFtKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtO1xuICB9XG59Il19