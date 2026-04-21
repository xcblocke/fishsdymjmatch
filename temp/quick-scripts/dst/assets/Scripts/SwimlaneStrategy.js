
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SwimlaneStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7db5MZqNJC5IqLA3yiQQFk', 'SwimlaneStrategy');
// Scripts/SwimlaneStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SwimlaneStrategy = void 0;
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var SwimlaneStrategy = /** @class */ (function () {
    function SwimlaneStrategy() {
        this._config = IClassicExtractTypes_1.DEFAULT_SWIMLANE_CONFIG;
    }
    SwimlaneStrategy_1 = SwimlaneStrategy;
    SwimlaneStrategy.getInstance = function () {
        SwimlaneStrategy_1._instance || (SwimlaneStrategy_1._instance = new SwimlaneStrategy_1());
        return SwimlaneStrategy_1._instance;
    };
    SwimlaneStrategy.prototype.selectDifficultyType = function (e, t, o, n, r) {
        var a, l = this._config, s = false;
        if (o >= l.hardModeThresholdSeconds) {
            a = l.afterTimeDifficulty;
            l.hardModeThresholdSeconds, IClassicExtractTypes_1.EDifficultyType[a];
        }
        else {
            var c = t > 0 ? e / t : 0;
            if (c >= l.scoreThresholdPercent) {
                var u = l.afterThresholdRotation;
                a = u[r % u.length];
                (100 * c).toFixed(0), l.scoreThresholdPercent, IClassicExtractTypes_1.EDifficultyType[a];
                s = true;
            }
            else {
                a = this._selectRandomFromPool(l.beforeThresholdPool);
                (100 * c).toFixed(0), l.scoreThresholdPercent, IClassicExtractTypes_1.EDifficultyType[a];
            }
        }
        return {
            difficultyType: a,
            rotationUsed: s
        };
    };
    SwimlaneStrategy.prototype._selectRandomFromPool = function (e) {
        return 0 === e.length ? IClassicExtractTypes_1.EDifficultyType.Medium : e[Math.floor(Math.random() * e.length)];
    };
    var SwimlaneStrategy_1;
    SwimlaneStrategy = SwimlaneStrategy_1 = __decorate([
        mj.class("SwimlaneStrategy")
    ], SwimlaneStrategy);
    return SwimlaneStrategy;
}());
exports.SwimlaneStrategy = SwimlaneStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N3aW1sYW5lU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBa0Y7QUFFbEY7SUFBQTtRQUNFLFlBQU8sR0FBRyw4Q0FBdUIsQ0FBQztJQWdDcEMsQ0FBQzt5QkFqQ1ksZ0JBQWdCO0lBRXBCLDRCQUFXLEdBQWxCO1FBQ0Usa0JBQWdCLENBQUMsU0FBUyxJQUFJLENBQUMsa0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sa0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0JBQXdCLEVBQUU7WUFDbkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUMxQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsc0NBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO2dCQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsc0NBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNWO2lCQUFNO2dCQUNMLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsc0NBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRTtTQUNGO1FBQ0QsT0FBTztZQUNMLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBQ0QsZ0RBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsc0NBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOztJQWhDVSxnQkFBZ0I7UUFENUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNoQixnQkFBZ0IsQ0FpQzVCO0lBQUQsdUJBQUM7Q0FqQ0QsQUFpQ0MsSUFBQTtBQWpDWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX1NXSU1MQU5FX0NPTkZJRywgRURpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi9JQ2xhc3NpY0V4dHJhY3RUeXBlcyc7XG5AbWouY2xhc3MoXCJTd2ltbGFuZVN0cmF0ZWd5XCIpXG5leHBvcnQgY2xhc3MgU3dpbWxhbmVTdHJhdGVneSB7XG4gIF9jb25maWcgPSBERUZBVUxUX1NXSU1MQU5FX0NPTkZJRztcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIFN3aW1sYW5lU3RyYXRlZ3kuX2luc3RhbmNlIHx8IChTd2ltbGFuZVN0cmF0ZWd5Ll9pbnN0YW5jZSA9IG5ldyBTd2ltbGFuZVN0cmF0ZWd5KCkpO1xuICAgIHJldHVybiBTd2ltbGFuZVN0cmF0ZWd5Ll9pbnN0YW5jZTtcbiAgfVxuICBzZWxlY3REaWZmaWN1bHR5VHlwZShlLCB0LCBvLCBuLCByKSB7XG4gICAgdmFyIGEsXG4gICAgICBsID0gdGhpcy5fY29uZmlnLFxuICAgICAgcyA9IGZhbHNlO1xuICAgIGlmIChvID49IGwuaGFyZE1vZGVUaHJlc2hvbGRTZWNvbmRzKSB7XG4gICAgICBhID0gbC5hZnRlclRpbWVEaWZmaWN1bHR5O1xuICAgICAgbC5oYXJkTW9kZVRocmVzaG9sZFNlY29uZHMsIEVEaWZmaWN1bHR5VHlwZVthXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGMgPSB0ID4gMCA/IGUgLyB0IDogMDtcbiAgICAgIGlmIChjID49IGwuc2NvcmVUaHJlc2hvbGRQZXJjZW50KSB7XG4gICAgICAgIHZhciB1ID0gbC5hZnRlclRocmVzaG9sZFJvdGF0aW9uO1xuICAgICAgICBhID0gdVtyICUgdS5sZW5ndGhdO1xuICAgICAgICAoMTAwICogYykudG9GaXhlZCgwKSwgbC5zY29yZVRocmVzaG9sZFBlcmNlbnQsIEVEaWZmaWN1bHR5VHlwZVthXTtcbiAgICAgICAgcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID0gdGhpcy5fc2VsZWN0UmFuZG9tRnJvbVBvb2wobC5iZWZvcmVUaHJlc2hvbGRQb29sKTtcbiAgICAgICAgKDEwMCAqIGMpLnRvRml4ZWQoMCksIGwuc2NvcmVUaHJlc2hvbGRQZXJjZW50LCBFRGlmZmljdWx0eVR5cGVbYV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaWZmaWN1bHR5VHlwZTogYSxcbiAgICAgIHJvdGF0aW9uVXNlZDogc1xuICAgIH07XG4gIH1cbiAgX3NlbGVjdFJhbmRvbUZyb21Qb29sKGUpIHtcbiAgICByZXR1cm4gMCA9PT0gZS5sZW5ndGggPyBFRGlmZmljdWx0eVR5cGUuTWVkaXVtIDogZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCldO1xuICB9XG59Il19