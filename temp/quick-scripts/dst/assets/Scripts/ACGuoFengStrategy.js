
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACGuoFengStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba6c1NymjxLU4MLZ+0gQCmQ', 'ACGuoFengStrategy');
// Scripts/ACGuoFengStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACGuoFengStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcGuofengAnimPlayer_1 = require("./AcGuofengAnimPlayer");
var ACGuoFengStrategy = /** @class */ (function () {
    function ACGuoFengStrategy() {
    }
    ACGuoFengStrategy.prototype.getName = function () {
        return "ACGuoFengStrategy";
    };
    ACGuoFengStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcGuofengAnimPlayer_1.AcGuofengAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1);
                    s.hideFlowLight(p.cardNode2);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (r = c.return) && r.call(c);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            s.setupPositions(l);
            s.play(l);
        }
        else
            t.onComplete();
    };
    return ACGuoFengStrategy;
}());
exports.ACGuoFengStrategy = ACGuoFengStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(3, new ACGuoFengStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDR3VvRmVuZ1N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQTZEO0FBQzdELHVFQUFzRTtBQUN0RSw2REFBNEQ7QUFDNUQ7SUFBQTtJQStCQSxDQUFDO0lBOUJDLG1DQUFPLEdBQVA7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRCxnQ0FBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLENBQUM7UUFDUCxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLDBDQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUkseUNBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtZQUNELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNYOztZQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLDhDQUFpQjtBQWdDOUIsbURBQXdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1aWxkQWxsQ2xlYXJOb2RlSW5mb3MgfSBmcm9tICcuL0lBbGxDbGVhclN0cmF0ZWd5JztcbmltcG9ydCB7IEFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeSB9IGZyb20gJy4vQWxsQ2xlYXJTdHJhdGVneVJlZ2lzdHJ5JztcbmltcG9ydCB7IEFjR3VvZmVuZ0FuaW1QbGF5ZXIgfSBmcm9tICcuL0FjR3VvZmVuZ0FuaW1QbGF5ZXInO1xuZXhwb3J0IGNsYXNzIEFDR3VvRmVuZ1N0cmF0ZWd5IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gXCJBQ0d1b0ZlbmdTdHJhdGVneVwiO1xuICB9XG4gIHBsYXkoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgcixcbiAgICAgIGwgPSBidWlsZEFsbENsZWFyTm9kZUluZm9zKGUsIHQpO1xuICAgIGlmICgwICE9PSBsLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSBuZXcgQWNHdW9mZW5nQW5pbVBsYXllcih0KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhsKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgICAgcy5oaWRlRmxvd0xpZ2h0KHAuY2FyZE5vZGUxKTtcbiAgICAgICAgICBzLmhpZGVGbG93TGlnaHQocC5jYXJkTm9kZTIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcy5zZXR1cFBvc2l0aW9ucyhsKTtcbiAgICAgIHMucGxheShsKTtcbiAgICB9IGVsc2UgdC5vbkNvbXBsZXRlKCk7XG4gIH1cbn1cbkFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeS5yZWdpc3RlcigzLCBuZXcgQUNHdW9GZW5nU3RyYXRlZ3koKSk7Il19