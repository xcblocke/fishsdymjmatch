
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/strategy/CrossLayerEnterStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13b6018lyxLLpZZkhGEP9re', 'CrossLayerEnterStrategy');
// Scripts/strategy/CrossLayerEnterStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossLayerEnterStrategy = void 0;
var CrossLayerEnterStrategy = /** @class */ (function () {
    function CrossLayerEnterStrategy() {
        this.ENTER_DURATION = 0.4;
        this.DELAY_PER_LAYER = 0.16;
        this.DELAY_PER_ITEM = 0.03;
        this.OFFSET_RATIO = 1;
        this.totalDuration = 0;
    }
    CrossLayerEnterStrategy.prototype.getName = function () {
        return "CrossLayerEnter";
    };
    CrossLayerEnterStrategy.prototype.generateAnimationConfigs = function (e) {
        var t, o, n = this, a = [], l = e.tileNodeMap, s = (e.cardLayoutConfig, e.screenSize.width * this.OFFSET_RATIO), c = new Map();
        try {
            for (var u = __values(l), p = u.next(); !p.done; p = u.next()) {
                var f = __read(p.value, 2), d = (f[0], f[1]);
                if (cc.isValid(d.cardNode) && cc.isValid(d.shadowNode)) {
                    var h = d.info.layerIndex || 0, y = d.info.tileObject.gridPosY || 0, m = d.info.tileObject.gridPosX || 0;
                    c.has(h) || c.set(h, []);
                    c.get(h).push({
                        cardNode: d.cardNode,
                        shadowNode: d.shadowNode,
                        layer: h,
                        row: y,
                        col: m
                    });
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
                p && !p.done && (o = u.return) && o.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 === c.size)
            return a;
        var v = Array.from(c.keys()).sort(function (e, t) {
            return e - t;
        }), g = 0;
        v.forEach(function (e, t) {
            var o = c.get(e), i = t * n.DELAY_PER_LAYER, r = new Map();
            o.forEach(function (e) {
                r.has(e.row) || r.set(e.row, []);
                r.get(e.row).push(e);
            });
            Array.from(r.keys()).sort(function (e, t) {
                return e - t;
            }).forEach(function (e, t) {
                var o = r.get(e), l = t % 2 == 0;
                o.sort(function (e, t) {
                    return l ? t.cardNode.position.x - e.cardNode.position.x : e.cardNode.position.x - t.cardNode.position.x;
                });
                o.forEach(function (e, t) {
                    var o = i + t * n.DELAY_PER_ITEM;
                    g = Math.max(g, o);
                    var r = l ? -s : s;
                    a.push({
                        node: e.cardNode,
                        startOffset: cc.v2(r, 0),
                        endPosition: e.cardNode.position.clone(),
                        delay: o,
                        duration: n.ENTER_DURATION,
                        easing: "cubicOut",
                        metadata: {
                            layer: e.layer,
                            row: e.row,
                            col: e.col,
                            isLeft: l
                        }
                    });
                    a.push({
                        node: e.shadowNode,
                        startOffset: cc.v2(r, 0),
                        endPosition: e.shadowNode.position.clone(),
                        delay: o,
                        duration: n.ENTER_DURATION,
                        easing: "cubicOut",
                        metadata: {
                            layer: e.layer,
                            row: e.row,
                            col: e.col,
                            isLeft: l
                        }
                    });
                });
            });
        });
        this.totalDuration = g + this.ENTER_DURATION;
        return a;
    };
    CrossLayerEnterStrategy.prototype.getTotalDuration = function () {
        return this.totalDuration;
    };
    __decorate([
        mj.traitEvent("CrossLayerStgy_genCfgs")
    ], CrossLayerEnterStrategy.prototype, "generateAnimationConfigs", null);
    return CrossLayerEnterStrategy;
}());
exports.CrossLayerEnterStrategy = CrossLayerEnterStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3N0cmF0ZWd5L0Nyb3NzTGF5ZXJFbnRlclN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLG1CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBd0dwQixDQUFDO0lBdkdDLHlDQUFPLEdBQVA7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRCwwREFBd0IsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUNoRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxFQUFFLENBQUMsT0FBTyxD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QUMsVUFBVTt3QkFDbEIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTt3QkFDMUMsS0FBSyxFQUFFLENBQUM7d0JBQ1IsUUFBUSxFQUFFLENBQUMsQ0FBQyxjQUFjO3dCQUMxQixNQUFNLEVBQUUsVUFBVTt3QkFDbEIsUUFBUSxFQUFFOzRCQUNSLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSzs0QkFDZCxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUc7NEJBQ1YsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHOzRCQUNWLE1BQU0sRUFBRSxDQUFDO3lCQUNWO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGtEQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBbEdEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzsyRUFnR3ZDO0lBSUgsOEJBQUM7Q0E3R0QsQUE2R0MsSUFBQTtBQTdHWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3Jvc3NMYXllckVudGVyU3RyYXRlZ3kge1xuICBFTlRFUl9EVVJBVElPTiA9IDAuNDtcbiAgREVMQVlfUEVSX0xBWUVSID0gMC4xNjtcbiAgREVMQVlfUEVSX0lURU0gPSAwLjAzO1xuICBPRkZTRVRfUkFUSU8gPSAxO1xuICB0b3RhbER1cmF0aW9uID0gMDtcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gXCJDcm9zc0xheWVyRW50ZXJcIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNyb3NzTGF5ZXJTdGd5X2dlbkNmZ3NcIilcbiAgZ2VuZXJhdGVBbmltYXRpb25Db25maWdzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcyxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGwgPSBlLnRpbGVOb2RlTWFwLFxuICAgICAgcyA9IChlLmNhcmRMYXlvdXRDb25maWcsIGUuc2NyZWVuU2l6ZS53aWR0aCAqIHRoaXMuT0ZGU0VUX1JBVElPKSxcbiAgICAgIGMgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhsKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBfX3JlYWQocC52YWx1ZSwgMiksXG4gICAgICAgICAgZCA9IChmWzBdLCBmWzFdKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoZC5jYXJkTm9kZSkgJiYgY2MuaXNWYWxpZChkLnNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgdmFyIGggPSBkLmluZm8ubGF5ZXJJbmRleCB8fCAwLFxuICAgICAgICAgICAgeSA9IGQuaW5mby50aWxlT2JqZWN0LmdyaWRQb3NZIHx8IDAsXG4gICAgICAgICAgICBtID0gZC5pbmZvLnRpbGVPYmplY3QuZ3JpZFBvc1ggfHwgMDtcbiAgICAgICAgICBjLmhhcyhoKSB8fCBjLnNldChoLCBbXSk7XG4gICAgICAgICAgYy5nZXQoaCkucHVzaCh7XG4gICAgICAgICAgICBjYXJkTm9kZTogZC5jYXJkTm9kZSxcbiAgICAgICAgICAgIHNoYWRvd05vZGU6IGQuc2hhZG93Tm9kZSxcbiAgICAgICAgICAgIGxheWVyOiBoLFxuICAgICAgICAgICAgcm93OiB5LFxuICAgICAgICAgICAgY29sOiBtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gYy5zaXplKSByZXR1cm4gYTtcbiAgICB2YXIgdiA9IEFycmF5LmZyb20oYy5rZXlzKCkpLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgLSB0O1xuICAgICAgfSksXG4gICAgICBnID0gMDtcbiAgICB2LmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBvID0gYy5nZXQoZSksXG4gICAgICAgIGkgPSB0ICogbi5ERUxBWV9QRVJfTEFZRVIsXG4gICAgICAgIHIgPSBuZXcgTWFwKCk7XG4gICAgICBvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgci5oYXMoZS5yb3cpIHx8IHIuc2V0KGUucm93LCBbXSk7XG4gICAgICAgIHIuZ2V0KGUucm93KS5wdXNoKGUpO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKHIua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG8gPSByLmdldChlKSxcbiAgICAgICAgICBsID0gdCAlIDIgPT0gMDtcbiAgICAgICAgby5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIGwgPyB0LmNhcmROb2RlLnBvc2l0aW9uLnggLSBlLmNhcmROb2RlLnBvc2l0aW9uLnggOiBlLmNhcmROb2RlLnBvc2l0aW9uLnggLSB0LmNhcmROb2RlLnBvc2l0aW9uLng7XG4gICAgICAgIH0pO1xuICAgICAgICBvLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbyA9IGkgKyB0ICogbi5ERUxBWV9QRVJfSVRFTTtcbiAgICAgICAgICBnID0gTWF0aC5tYXgoZywgbyk7XG4gICAgICAgICAgdmFyIHIgPSBsID8gLXMgOiBzO1xuICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICBub2RlOiBlLmNhcmROb2RlLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IGNjLnYyKHIsIDApLFxuICAgICAgICAgICAgZW5kUG9zaXRpb246IGUuY2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICAgIGRlbGF5OiBvLFxuICAgICAgICAgICAgZHVyYXRpb246IG4uRU5URVJfRFVSQVRJT04sXG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIixcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgIGxheWVyOiBlLmxheWVyLFxuICAgICAgICAgICAgICByb3c6IGUucm93LFxuICAgICAgICAgICAgICBjb2w6IGUuY29sLFxuICAgICAgICAgICAgICBpc0xlZnQ6IGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhLnB1c2goe1xuICAgICAgICAgICAgbm9kZTogZS5zaGFkb3dOb2RlLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IGNjLnYyKHIsIDApLFxuICAgICAgICAgICAgZW5kUG9zaXRpb246IGUuc2hhZG93Tm9kZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgICAgZGVsYXk6IG8sXG4gICAgICAgICAgICBkdXJhdGlvbjogbi5FTlRFUl9EVVJBVElPTixcbiAgICAgICAgICAgIGVhc2luZzogXCJjdWJpY091dFwiLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgbGF5ZXI6IGUubGF5ZXIsXG4gICAgICAgICAgICAgIHJvdzogZS5yb3csXG4gICAgICAgICAgICAgIGNvbDogZS5jb2wsXG4gICAgICAgICAgICAgIGlzTGVmdDogbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMudG90YWxEdXJhdGlvbiA9IGcgKyB0aGlzLkVOVEVSX0RVUkFUSU9OO1xuICAgIHJldHVybiBhO1xuICB9XG4gIGdldFRvdGFsRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxEdXJhdGlvbjtcbiAgfVxufSJdfQ==