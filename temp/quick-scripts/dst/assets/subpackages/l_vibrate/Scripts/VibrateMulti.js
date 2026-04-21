
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/VibrateMulti.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'babbckv76RMfK18c/WsJJOj', 'VibrateMulti');
// subpackages/l_vibrate/Scripts/VibrateMulti.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.VibrateMulti = void 0;
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateMulti = /** @class */ (function () {
    function VibrateMulti() {
    }
    VibrateMulti.start = function (t) {
        this.cleanup();
        this.executeMultipleVibrate(t.predefinedParams);
    };
    VibrateMulti.executeMultipleVibrate = function (t) {
        var e, i, a = this, n = [], o = [], l = [];
        this._isFinished = false;
        if (t.length > 0)
            if (t[0] < 10) {
                o.push(true);
                this.triggerVibrate(t[0].toString());
                for (var c = 1; c < t.length; c++)
                    if (t[c] < 10) {
                        l.push(t[c]);
                        o.push(false);
                    }
                    else if (n.length > 0) {
                        n.push(t[c] + n[n.length - 1]);
                    }
                    else {
                        n.push(t[c]);
                    }
            }
            else
                try {
                    for (var s = __values(t), d = s.next(); !d.done; d = s.next()) {
                        var p = d.value;
                        if (p < 10) {
                            l.push(p);
                            o.push(false);
                        }
                        else {
                            var f = n.length;
                            if (f > 0) {
                                n.push(p + n[f - 1]);
                            }
                            else {
                                n.push(p);
                            }
                        }
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        d && !d.done && (i = s.return) && i.call(s);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
        for (var u = 0, h = function h(t) {
            for (; u < o.length && o[u];)
                u++;
            if (u >= l.length)
                return "break";
            var e = n[t], i = l[u], r = setTimeout(function () {
                if (!a._isFinished) {
                    a.triggerVibrate(i.toString());
                    var t = a._timers.indexOf(r);
                    -1 !== t && a._timers.splice(t, 1);
                    0 === a._timers.length && a._isFinished;
                }
            }, e);
            g._timers.push(r);
            o[u] = true;
            u++;
        }, g = this, b = 0; b < n.length && "break" !== h(b); b++)
            ;
    };
    VibrateMulti.triggerVibrate = function (t) {
        VibrateManager_1.default.getInstance().triggerVibrateAdvence(t);
    };
    VibrateMulti.cleanup = function () {
        if (VibrateMulti._timers.length > 0) {
            VibrateMulti._timers.forEach(function (t) {
                clearTimeout(t);
            });
            VibrateMulti._timers = [];
        }
        this._isFinished = true;
    };
    VibrateMulti._timers = [];
    VibrateMulti._isFinished = false;
    return VibrateMulti;
}());
exports.VibrateMulti = VibrateMulti;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9WaWJyYXRlTXVsdGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBbUY7QUFDbkY7SUFBQTtJQWtGQSxDQUFDO0lBL0VRLGtCQUFLLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxtQ0FBc0IsR0FBN0IsVUFBOEIsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDZjt5QkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdB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LENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBQyxDQUFDO0lBQy9ELENBQUM7SUFDTSwyQkFBYyxHQUFyQixVQUFzQixDQUFDO1FBQ3JCLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNNLG9CQUFPLEdBQWQ7UUFDRSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQWhGTSxvQkFBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLHdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBZ0Y3QixtQkFBQztDQWxGRCxBQWtGQyxJQUFBO0FBbEZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpYnJhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmV4cG9ydCBjbGFzcyBWaWJyYXRlTXVsdGkge1xuICBzdGF0aWMgX3RpbWVycyA9IFtdO1xuICBzdGF0aWMgX2lzRmluaXNoZWQgPSBmYWxzZTtcbiAgc3RhdGljIHN0YXJ0KHQpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmV4ZWN1dGVNdWx0aXBsZVZpYnJhdGUodC5wcmVkZWZpbmVkUGFyYW1zKTtcbiAgfVxuICBzdGF0aWMgZXhlY3V0ZU11bHRpcGxlVmlicmF0ZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpLFxuICAgICAgYSA9IHRoaXMsXG4gICAgICBuID0gW10sXG4gICAgICBvID0gW10sXG4gICAgICBsID0gW107XG4gICAgdGhpcy5faXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgIGlmICh0Lmxlbmd0aCA+IDApIGlmICh0WzBdIDwgMTApIHtcbiAgICAgIG8ucHVzaCh0cnVlKTtcbiAgICAgIHRoaXMudHJpZ2dlclZpYnJhdGUodFswXS50b1N0cmluZygpKTtcbiAgICAgIGZvciAodmFyIGMgPSAxOyBjIDwgdC5sZW5ndGg7IGMrKykgaWYgKHRbY10gPCAxMCkge1xuICAgICAgICBsLnB1c2godFtjXSk7XG4gICAgICAgIG8ucHVzaChmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKG4ubGVuZ3RoID4gMCkge1xuICAgICAgICBuLnB1c2godFtjXSArIG5bbi5sZW5ndGggLSAxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuLnB1c2godFtjXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXModCksIGQgPSBzLm5leHQoKTsgIWQuZG9uZTsgZCA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gZC52YWx1ZTtcbiAgICAgICAgaWYgKHAgPCAxMCkge1xuICAgICAgICAgIGwucHVzaChwKTtcbiAgICAgICAgICBvLnB1c2goZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmID0gbi5sZW5ndGg7XG4gICAgICAgICAgaWYgKGYgPiAwKSB7XG4gICAgICAgICAgICBuLnB1c2gocCArIG5bZiAtIDFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbi5wdXNoKHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKGkgPSBzLnJldHVybikgJiYgaS5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIHUgPSAwLCBoID0gZnVuY3Rpb24gaCh0KSB7XG4gICAgICAgIGZvciAoOyB1IDwgby5sZW5ndGggJiYgb1t1XTspIHUrKztcbiAgICAgICAgaWYgKHUgPj0gbC5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIHZhciBlID0gblt0XSxcbiAgICAgICAgICBpID0gbFt1XSxcbiAgICAgICAgICByID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWEuX2lzRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgYS50cmlnZ2VyVmlicmF0ZShpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICB2YXIgdCA9IGEuX3RpbWVycy5pbmRleE9mKHIpO1xuICAgICAgICAgICAgICAtMSAhPT0gdCAmJiBhLl90aW1lcnMuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgICAwID09PSBhLl90aW1lcnMubGVuZ3RoICYmIGEuX2lzRmluaXNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZSk7XG4gICAgICAgIGcuX3RpbWVycy5wdXNoKHIpO1xuICAgICAgICBvW3VdID0gdHJ1ZTtcbiAgICAgICAgdSsrO1xuICAgICAgfSwgZyA9IHRoaXMsIGIgPSAwOyBiIDwgbi5sZW5ndGggJiYgXCJicmVha1wiICE9PSBoKGIpOyBiKyspO1xuICB9XG4gIHN0YXRpYyB0cmlnZ2VyVmlicmF0ZSh0KSB7XG4gICAgVmlicmF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmlnZ2VyVmlicmF0ZUFkdmVuY2UodCk7XG4gIH1cbiAgc3RhdGljIGNsZWFudXAoKSB7XG4gICAgaWYgKFZpYnJhdGVNdWx0aS5fdGltZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIFZpYnJhdGVNdWx0aS5fdGltZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgfSk7XG4gICAgICBWaWJyYXRlTXVsdGkuX3RpbWVycyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9pc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgfVxufSJdfQ==