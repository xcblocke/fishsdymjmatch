
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACHudieStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fec25VM+s1Fgaq5wufxinYw', 'ACHudieStrategy');
// Scripts/ACHudieStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACHudieStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcHudieAnimPlayer_1 = require("./AcHudieAnimPlayer");
var ACHudieStrategy = /** @class */ (function () {
    function ACHudieStrategy() {
    }
    ACHudieStrategy.prototype.getName = function () {
        return "ACHudieStrategy";
    };
    ACHudieStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcHudieAnimPlayer_1.AcHudieAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1);
                    s.hideFlowLight(p.cardNode2);
                    p.cardNode1.active = true;
                    p.cardNode2.active = true;
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
    return ACHudieStrategy;
}());
exports.ACHudieStrategy = ACHudieStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(5, new ACHudieStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDSHVkaWVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUE2RDtBQUM3RCx1RUFBc0U7QUFDdEUseURBQXdEO0FBQ3hEO0lBQUE7SUFpQ0EsQ0FBQztJQWhDQyxpQ0FBTyxHQUFQO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0QsOEJBQUksR0FBSixVQUFLLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRywwQ0FBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDM0I7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1g7O1lBQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7QUFrQzVCLG1EQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRBbGxDbGVhck5vZGVJbmZvcyB9IGZyb20gJy4vSUFsbENsZWFyU3RyYXRlZ3knO1xuaW1wb3J0IHsgQWxsQ2xlYXJTdHJhdGVneVJlZ2lzdHJ5IH0gZnJvbSAnLi9BbGxDbGVhclN0cmF0ZWd5UmVnaXN0cnknO1xuaW1wb3J0IHsgQWNIdWRpZUFuaW1QbGF5ZXIgfSBmcm9tICcuL0FjSHVkaWVBbmltUGxheWVyJztcbmV4cG9ydCBjbGFzcyBBQ0h1ZGllU3RyYXRlZ3kge1xuICBnZXROYW1lKCkge1xuICAgIHJldHVybiBcIkFDSHVkaWVTdHJhdGVneVwiO1xuICB9XG4gIHBsYXkoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgcixcbiAgICAgIGwgPSBidWlsZEFsbENsZWFyTm9kZUluZm9zKGUsIHQpO1xuICAgIGlmICgwICE9PSBsLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSBuZXcgQWNIdWRpZUFuaW1QbGF5ZXIodCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgIHMuaGlkZUZsb3dMaWdodChwLmNhcmROb2RlMSk7XG4gICAgICAgICAgcy5oaWRlRmxvd0xpZ2h0KHAuY2FyZE5vZGUyKTtcbiAgICAgICAgICBwLmNhcmROb2RlMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHAuY2FyZE5vZGUyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKHIgPSBjLnJldHVybikgJiYgci5jYWxsKGMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzLnNldHVwUG9zaXRpb25zKGwpO1xuICAgICAgcy5wbGF5KGwpO1xuICAgIH0gZWxzZSB0Lm9uQ29tcGxldGUoKTtcbiAgfVxufVxuQWxsQ2xlYXJTdHJhdGVneVJlZ2lzdHJ5LnJlZ2lzdGVyKDUsIG5ldyBBQ0h1ZGllU3RyYXRlZ3koKSk7Il19