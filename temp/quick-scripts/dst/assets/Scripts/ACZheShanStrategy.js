
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACZheShanStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23cb4UtNWxIi6Jztrb6cDpw', 'ACZheShanStrategy');
// Scripts/ACZheShanStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACZheShanStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcZheshanAnimPlayer_1 = require("./AcZheshanAnimPlayer");
var ACZheShanStrategy = /** @class */ (function () {
    function ACZheShanStrategy() {
    }
    ACZheShanStrategy.prototype.getName = function () {
        return "ACZheShanStrategy";
    };
    ACZheShanStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcZheshanAnimPlayer_1.AcZheshanAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1.getChildByName("TileAnimNodeName") || p.cardNode1);
                    s.hideFlowLight(p.cardNode2.getChildByName("TileAnimNodeName") || p.cardNode2);
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
    return ACZheShanStrategy;
}());
exports.ACZheShanStrategy = ACZheShanStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(6, new ACZheShanStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDWmhlU2hhblN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQTZEO0FBQzdELHVFQUFzRTtBQUN0RSw2REFBNEQ7QUFDNUQ7SUFBQTtJQStCQSxDQUFDO0lBOUJDLG1DQUFPLEdBQVA7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRCxnQ0FBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLENBQUM7UUFDUCxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLDBDQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUkseUNBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDs7WUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSw4Q0FBaUI7QUFnQzlCLG1EQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZEFsbENsZWFyTm9kZUluZm9zIH0gZnJvbSAnLi9JQWxsQ2xlYXJTdHJhdGVneSc7XG5pbXBvcnQgeyBBbGxDbGVhclN0cmF0ZWd5UmVnaXN0cnkgfSBmcm9tICcuL0FsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeSc7XG5pbXBvcnQgeyBBY1poZXNoYW5BbmltUGxheWVyIH0gZnJvbSAnLi9BY1poZXNoYW5BbmltUGxheWVyJztcbmV4cG9ydCBjbGFzcyBBQ1poZVNoYW5TdHJhdGVneSB7XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIFwiQUNaaGVTaGFuU3RyYXRlZ3lcIjtcbiAgfVxuICBwbGF5KGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIsXG4gICAgICBsID0gYnVpbGRBbGxDbGVhck5vZGVJbmZvcyhlLCB0KTtcbiAgICBpZiAoMCAhPT0gbC5sZW5ndGgpIHtcbiAgICAgIHZhciBzID0gbmV3IEFjWmhlc2hhbkFuaW1QbGF5ZXIodCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgIHMuaGlkZUZsb3dMaWdodChwLmNhcmROb2RlMS5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgcC5jYXJkTm9kZTEpO1xuICAgICAgICAgIHMuaGlkZUZsb3dMaWdodChwLmNhcmROb2RlMi5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgcC5jYXJkTm9kZTIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcy5zZXR1cFBvc2l0aW9ucyhsKTtcbiAgICAgIHMucGxheShsKTtcbiAgICB9IGVsc2UgdC5vbkNvbXBsZXRlKCk7XG4gIH1cbn1cbkFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeS5yZWdpc3Rlcig2LCBuZXcgQUNaaGVTaGFuU3RyYXRlZ3koKSk7Il19