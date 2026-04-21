
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileGenerateStrategyRegistry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49739XxaY5BvIjx24BxNL2B', 'TileGenerateStrategyRegistry');
// Scripts/TileGenerateStrategyRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileGenerateStrategyRegistry = void 0;
var DefaultGenerateStrategy_1 = require("./process/tile2/DefaultGenerateStrategy");
var SkipGenerateStrategy_1 = require("./process/tile2/SkipGenerateStrategy");
var TileGenerateStrategy_1 = require("./TileGenerateStrategy");
var TileGenerateStrategyRegistry = /** @class */ (function () {
    function TileGenerateStrategyRegistry() {
    }
    TileGenerateStrategyRegistry.register = function (e, t) {
        this._map.set(e, t);
    };
    TileGenerateStrategyRegistry.getStrategies = function (e) {
        var t, o, i = [];
        if (e) {
            var r = new Set();
            try {
                for (var l = __values(e.split(",")), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value.trim();
                    if (!r.has(c)) {
                        r.add(c);
                        var u = this._map.get(c);
                        u && i.push(u);
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
                    s && !s.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        0 === i.length && i.push(this._map.get(TileGenerateStrategy_1.ETileGenerateStrategy.Default));
        return i;
    };
    TileGenerateStrategyRegistry._map = new Map([[TileGenerateStrategy_1.ETileGenerateStrategy.Default, new DefaultGenerateStrategy_1.DefaultGenerateStrategy()], [TileGenerateStrategy_1.ETileGenerateStrategy.Skip, new SkipGenerateStrategy_1.SkipGenerateStrategy()]]);
    return TileGenerateStrategyRegistry;
}());
exports.TileGenerateStrategyRegistry = TileGenerateStrategyRegistry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGVHZW5lcmF0ZVN0cmF0ZWd5UmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRkFBa0Y7QUFDbEYsNkVBQTRFO0FBQzVFLCtEQUErRDtBQUMvRDtJQUFBO0lBbUNBLENBQUM7SUFqQ1EscUNBQVEsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNNLDBDQUFhLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDVCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO2lCQUNGO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBQ0QsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0Q0FBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWpDTSxpQ0FBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyw0Q0FBcUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxpREFBdUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyw0Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0NwSixtQ0FBQztDQW5DRCxBQW1DQyxJQUFBO0FBbkNZLG9FQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRHZW5lcmF0ZVN0cmF0ZWd5IH0gZnJvbSAnLi9wcm9jZXNzL3RpbGUyL0RlZmF1bHRHZW5lcmF0ZVN0cmF0ZWd5JztcbmltcG9ydCB7IFNraXBHZW5lcmF0ZVN0cmF0ZWd5IH0gZnJvbSAnLi9wcm9jZXNzL3RpbGUyL1NraXBHZW5lcmF0ZVN0cmF0ZWd5JztcbmltcG9ydCB7IEVUaWxlR2VuZXJhdGVTdHJhdGVneSB9IGZyb20gJy4vVGlsZUdlbmVyYXRlU3RyYXRlZ3knO1xuZXhwb3J0IGNsYXNzIFRpbGVHZW5lcmF0ZVN0cmF0ZWd5UmVnaXN0cnkge1xuICBzdGF0aWMgX21hcCA9IG5ldyBNYXAoW1tFVGlsZUdlbmVyYXRlU3RyYXRlZ3kuRGVmYXVsdCwgbmV3IERlZmF1bHRHZW5lcmF0ZVN0cmF0ZWd5KCldLCBbRVRpbGVHZW5lcmF0ZVN0cmF0ZWd5LlNraXAsIG5ldyBTa2lwR2VuZXJhdGVTdHJhdGVneSgpXV0pO1xuICBzdGF0aWMgcmVnaXN0ZXIoZSwgdCkge1xuICAgIHRoaXMuX21hcC5zZXQoZSwgdCk7XG4gIH1cbiAgc3RhdGljIGdldFN0cmF0ZWdpZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIGkgPSBbXTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHIgPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoZS5zcGxpdChcIixcIikpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICAgIHZhciBjID0gcy52YWx1ZS50cmltKCk7XG4gICAgICAgICAgaWYgKCFyLmhhcyhjKSkge1xuICAgICAgICAgICAgci5hZGQoYyk7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuX21hcC5nZXQoYyk7XG4gICAgICAgICAgICB1ICYmIGkucHVzaCh1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIDAgPT09IGkubGVuZ3RoICYmIGkucHVzaCh0aGlzLl9tYXAuZ2V0KEVUaWxlR2VuZXJhdGVTdHJhdGVneS5EZWZhdWx0KSk7XG4gICAgcmV0dXJuIGk7XG4gIH1cbn0iXX0=