
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACYinYueStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a2c2dexyJFU4DHBBdSgvhN', 'ACYinYueStrategy');
// Scripts/ACYinYueStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACYinYueStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcYinxiangAnimPlayer_1 = require("./AcYinxiangAnimPlayer");
var ACYinYueStrategy = /** @class */ (function () {
    function ACYinYueStrategy() {
    }
    ACYinYueStrategy.prototype.getName = function () {
        return "ACYinYueStrategy";
    };
    ACYinYueStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcYinxiangAnimPlayer_1.AcYinxiangAnimPlayer(t);
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
    return ACYinYueStrategy;
}());
exports.ACYinYueStrategy = ACYinYueStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(7, new ACYinYueStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDWWluWXVlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBNkQ7QUFDN0QsdUVBQXNFO0FBQ3RFLCtEQUE4RDtBQUM5RDtJQUFBO0lBK0JBLENBQUM7SUE5QkMsa0NBQU8sR0FBUDtRQUNFLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUNELCtCQUFJLEdBQUosVUFBSyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsMENBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1g7O1lBQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDSCx1QkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksNENBQWdCO0FBZ0M3QixtREFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRBbGxDbGVhck5vZGVJbmZvcyB9IGZyb20gJy4vSUFsbENsZWFyU3RyYXRlZ3knO1xuaW1wb3J0IHsgQWxsQ2xlYXJTdHJhdGVneVJlZ2lzdHJ5IH0gZnJvbSAnLi9BbGxDbGVhclN0cmF0ZWd5UmVnaXN0cnknO1xuaW1wb3J0IHsgQWNZaW54aWFuZ0FuaW1QbGF5ZXIgfSBmcm9tICcuL0FjWWlueGlhbmdBbmltUGxheWVyJztcbmV4cG9ydCBjbGFzcyBBQ1lpbll1ZVN0cmF0ZWd5IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gXCJBQ1lpbll1ZVN0cmF0ZWd5XCI7XG4gIH1cbiAgcGxheShlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICByLFxuICAgICAgbCA9IGJ1aWxkQWxsQ2xlYXJOb2RlSW5mb3MoZSwgdCk7XG4gICAgaWYgKDAgIT09IGwubGVuZ3RoKSB7XG4gICAgICB2YXIgcyA9IG5ldyBBY1lpbnhpYW5nQW5pbVBsYXllcih0KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhsKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgICAgcy5oaWRlRmxvd0xpZ2h0KHAuY2FyZE5vZGUxKTtcbiAgICAgICAgICBzLmhpZGVGbG93TGlnaHQocC5jYXJkTm9kZTIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcy5zZXR1cFBvc2l0aW9ucyhsKTtcbiAgICAgIHMucGxheShsKTtcbiAgICB9IGVsc2UgdC5vbkNvbXBsZXRlKCk7XG4gIH1cbn1cbkFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeS5yZWdpc3Rlcig3LCBuZXcgQUNZaW5ZdWVTdHJhdGVneSgpKTsiXX0=