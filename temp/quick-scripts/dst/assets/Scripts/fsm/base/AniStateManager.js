
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/base/AniStateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16f6834JmRPr64mlIMyGJS4', 'AniStateManager');
// Scripts/fsm/base/AniStateManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AniStateManager = void 0;
var AniStateManager = /** @class */ (function () {
    function AniStateManager() {
        this._registry = new Map();
        this._playSeq = 0;
    }
    AniStateManager.prototype.add = function (e, t) {
        this._registry.set(e, t);
        return this;
    };
    AniStateManager.prototype.get = function (e) {
        return this._registry.get(e);
    };
    AniStateManager.prototype.isPlaying = function (e) {
        var t, o;
        return null !== (o = null === (t = this._registry.get(e)) || void 0 === t ? void 0 : t.isPlaying) && void 0 !== o && o;
    };
    AniStateManager.prototype.play = function (e, t, o) {
        var r, a, l = this._registry.get(e);
        if (l) {
            var s = ++this._playSeq;
            try {
                for (var c = __values(this._registry), u = c.next(); !u.done; u = c.next()) {
                    var p = __read(u.value, 2), f = p[0], d = p[1];
                    f !== e && d.cancel();
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (a = c.return) && a.call(c);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            if (this._playSeq === s) {
                l.play(t, o);
            }
            else {
                null == o || o();
            }
        }
        else
            null == o || o();
    };
    AniStateManager.prototype.cancel = function (e) {
        var t;
        null === (t = this._registry.get(e)) || void 0 === t || t.cancel();
    };
    AniStateManager.prototype.cancelAll = function () {
        var e, t;
        try {
            for (var o = __values(this._registry.values()), i = o.next(); !i.done; i = o.next())
                i.value.cancel();
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    return AniStateManager;
}());
exports.AniStateManager = AniStateManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9iYXNlL0FuaVN0YXRlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFDRSxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBK0RmLENBQUM7SUE5REMsNkJBQUcsR0FBSCxVQUFJLENBQUMsRUFBRSxDQUFDO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDZCQUFHLEdBQUgsVUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsbUNBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBQ0QsOEJBQUksR0FBSixVQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEIsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDMUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7O1lBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUNELG1DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkc7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuaVN0YXRlTWFuYWdlciB7XG4gIF9yZWdpc3RyeSA9IG5ldyBNYXAoKTtcbiAgX3BsYXlTZXEgPSAwO1xuICBhZGQoZSwgdCkge1xuICAgIHRoaXMuX3JlZ2lzdHJ5LnNldChlLCB0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXQoZSkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeS5nZXQoZSk7XG4gIH1cbiAgaXNQbGF5aW5nKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICByZXR1cm4gbnVsbCAhPT0gKG8gPSBudWxsID09PSAodCA9IHRoaXMuX3JlZ2lzdHJ5LmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc1BsYXlpbmcpICYmIHZvaWQgMCAhPT0gbyAmJiBvO1xuICB9XG4gIHBsYXkoZSwgdCwgbykge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIGwgPSB0aGlzLl9yZWdpc3RyeS5nZXQoZSk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBzID0gKyt0aGlzLl9wbGF5U2VxO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMuX3JlZ2lzdHJ5KSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IF9fcmVhZCh1LnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGYgPSBwWzBdLFxuICAgICAgICAgICAgZCA9IHBbMV07XG4gICAgICAgICAgZiAhPT0gZSAmJiBkLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChhID0gYy5yZXR1cm4pICYmIGEuY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BsYXlTZXEgPT09IHMpIHtcbiAgICAgICAgbC5wbGF5KHQsIG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVsbCA9PSBvIHx8IG8oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgbnVsbCA9PSBvIHx8IG8oKTtcbiAgfVxuICBjYW5jZWwoZSkge1xuICAgIHZhciB0O1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fcmVnaXN0cnkuZ2V0KGUpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jYW5jZWwoKTtcbiAgfVxuICBjYW5jZWxBbGwoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9yZWdpc3RyeS52YWx1ZXMoKSksIGkgPSBvLm5leHQoKTsgIWkuZG9uZTsgaSA9IG8ubmV4dCgpKSBpLnZhbHVlLmNhbmNlbCgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19