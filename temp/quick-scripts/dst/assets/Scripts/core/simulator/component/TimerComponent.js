
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/component/TimerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b52deD/St1CAZuErFQUZu4c', 'TimerComponent');
// Scripts/core/simulator/component/TimerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var a = /** @class */ (function () {
    function a() {
        this.active = false;
        this.delay = 0;
        this.repeat = false;
        this.userFrame = false;
        this.exeTime = 0;
        this.method = null;
        this.target = null;
        this.args = null;
    }
    a.prototype.clear = function () {
        this.active = false;
        this.method = void 0;
        this.target = void 0;
        this.args = void 0;
    };
    a.prototype.handle = function () {
        var e;
        this.method && (e = this.method).call.apply(e, __spreadArrays([this.target], (this.args || [])));
    };
    return a;
}());
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this._pool = [];
        this._handlers = [];
        this._currFrame = 0;
        this._currentTime = 0;
    }
    TimerComponent.prototype.doOnce = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(false, false, e, t, o, n);
    };
    TimerComponent.prototype.doLoop = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(false, true, e, t, o, n);
    };
    TimerComponent.prototype.doFrameOnce = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(true, false, e, t, o, n);
    };
    TimerComponent.prototype.doFrameLoop = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(true, true, e, t, o, n);
    };
    TimerComponent.prototype.clearTimer = function (e) {
        var t = this._handlers.find(function (t) {
            return t.method === e;
        });
        t && t.clear();
    };
    TimerComponent.prototype.clearAllTimer = function () {
        var e, t;
        try {
            for (var o = __values(this._handlers), n = o.next(); !n.done; n = o.next())
                n.value.clear();
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    TimerComponent.prototype.update = function (e) {
        this._currFrame++;
        this._currentTime += e;
        if (0 != this._handlers.length) {
            for (var t = 0; t < this._handlers.length; t++) {
                var o = (n = this._handlers[t]).userFrame ? this._currFrame : this._currentTime;
                if (n.active && o >= n.exeTime)
                    if (n.repeat)
                        for (; o >= n.exeTime;) {
                            n.exeTime += n.delay;
                            n.handle();
                        }
                    else {
                        n.handle();
                        n.active = false;
                    }
            }
            for (t = this._handlers.length - 1; t >= 0; t--) {
                var n;
                if (!(n = this._handlers[t]).active) {
                    n.clear();
                    this._handlers.splice(t, 1);
                    this._pool.push(n);
                }
            }
        }
    };
    TimerComponent.prototype.create = function (e, t, o, n, r, l) {
        if (!n)
            return null;
        if (o < 0) {
            n.call.apply(n, __spreadArrays([r], (l || [])));
            return -1;
        }
        var s;
        (s = this._pool.length > 0 ? this._pool.pop() : new a()).active = true;
        s.userFrame = e;
        s.repeat = t;
        s.delay = o;
        s.method = n;
        s.target = r;
        s.args = l;
        s.exeTime = o + (e ? this._currFrame : this._currentTime);
        this._handlers.push(s);
        return n;
    };
    return TimerComponent;
}());
exports.default = TimerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbXBvbmVudC9UaW1lckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsU0FBSSxHQUFHLElBQUksQ0FBQztJQVdkLENBQUM7SUFWQyxpQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELGtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMzRixDQUFDO0lBQ0gsUUFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFDRDtJQUFBO1FBQ0UsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFpRm5CLENB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TUFBTSxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGEge1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgZGVsYXkgPSAwO1xuICByZXBlYXQgPSBmYWxzZTtcbiAgdXNlckZyYW1lID0gZmFsc2U7XG4gIGV4ZVRpbWUgPSAwO1xuICBtZXRob2QgPSBudWxsO1xuICB0YXJnZXQgPSBudWxsO1xuICBhcmdzID0gbnVsbDtcbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm1ldGhvZCA9IHZvaWQgMDtcbiAgICB0aGlzLnRhcmdldCA9IHZvaWQgMDtcbiAgICB0aGlzLmFyZ3MgPSB2b2lkIDA7XG4gIH1cbiAgaGFuZGxlKCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMubWV0aG9kICYmIChlID0gdGhpcy5tZXRob2QpLmNhbGwuYXBwbHkoZSwgWy4uLlt0aGlzLnRhcmdldF0sIC4uLih0aGlzLmFyZ3MgfHwgW10pXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyQ29tcG9uZW50IHtcbiAgX3Bvb2wgPSBbXTtcbiAgX2hhbmRsZXJzID0gW107XG4gIF9jdXJyRnJhbWUgPSAwO1xuICBfY3VycmVudFRpbWUgPSAwO1xuICBkb09uY2UoZSwgdCwgbykge1xuICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIG5baSAtIDNdID0gYXJndW1lbnRzW2ldO1xuICAgIHRoaXMuY3JlYXRlKGZhbHNlLCBmYWxzZSwgZSwgdCwgbywgbik7XG4gIH1cbiAgZG9Mb29wKGUsIHQsIG8pIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGkgPSAzOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBuW2kgLSAzXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB0aGlzLmNyZWF0ZShmYWxzZSwgdHJ1ZSwgZSwgdCwgbywgbik7XG4gIH1cbiAgZG9GcmFtZU9uY2UoZSwgdCwgbykge1xuICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIG5baSAtIDNdID0gYXJndW1lbnRzW2ldO1xuICAgIHRoaXMuY3JlYXRlKHRydWUsIGZhbHNlLCBlLCB0LCBvLCBuKTtcbiAgfVxuICBkb0ZyYW1lTG9vcChlLCB0LCBvKSB7XG4gICAgZm9yICh2YXIgbiA9IFtdLCBpID0gMzsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgbltpIC0gM10gPSBhcmd1bWVudHNbaV07XG4gICAgdGhpcy5jcmVhdGUodHJ1ZSwgdHJ1ZSwgZSwgdCwgbywgbik7XG4gIH1cbiAgY2xlYXJUaW1lcihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9oYW5kbGVycy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5tZXRob2QgPT09IGU7XG4gICAgfSk7XG4gICAgdCAmJiB0LmNsZWFyKCk7XG4gIH1cbiAgY2xlYXJBbGxUaW1lcigpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHRoaXMuX2hhbmRsZXJzKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIG4udmFsdWUuY2xlYXIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmICh0ID0gby5yZXR1cm4pICYmIHQuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGUoZSkge1xuICAgIHRoaXMuX2N1cnJGcmFtZSsrO1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IGU7XG4gICAgaWYgKDAgIT0gdGhpcy5faGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgIHZhciBvID0gKG4gPSB0aGlzLl9oYW5kbGVyc1t0XSkudXNlckZyYW1lID8gdGhpcy5fY3VyckZyYW1lIDogdGhpcy5fY3VycmVudFRpbWU7XG4gICAgICAgIGlmIChuLmFjdGl2ZSAmJiBvID49IG4uZXhlVGltZSkgaWYgKG4ucmVwZWF0KSBmb3IgKDsgbyA+PSBuLmV4ZVRpbWU7KSB7XG4gICAgICAgICAgbi5leGVUaW1lICs9IG4uZGVsYXk7XG4gICAgICAgICAgbi5oYW5kbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuLmhhbmRsZSgpO1xuICAgICAgICAgIG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodCA9IHRoaXMuX2hhbmRsZXJzLmxlbmd0aCAtIDE7IHQgPj0gMDsgdC0tKSB7XG4gICAgICAgIHZhciBuO1xuICAgICAgICBpZiAoIShuID0gdGhpcy5faGFuZGxlcnNbdF0pLmFjdGl2ZSkge1xuICAgICAgICAgIG4uY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVycy5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgdGhpcy5fcG9vbC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNyZWF0ZShlLCB0LCBvLCBuLCByLCBsKSB7XG4gICAgaWYgKCFuKSByZXR1cm4gbnVsbDtcbiAgICBpZiAobyA8IDApIHtcbiAgICAgIG4uY2FsbC5hcHBseShuLCBbLi4uW3JdLCAuLi4obCB8fCBbXSldKTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgdmFyIHM7XG4gICAgKHMgPSB0aGlzLl9wb29sLmxlbmd0aCA+IDAgPyB0aGlzLl9wb29sLnBvcCgpIDogbmV3IGEoKSkuYWN0aXZlID0gdHJ1ZTtcbiAgICBzLnVzZXJGcmFtZSA9IGU7XG4gICAgcy5yZXBlYXQgPSB0O1xuICAgIHMuZGVsYXkgPSBvO1xuICAgIHMubWV0aG9kID0gbjtcbiAgICBzLnRhcmdldCA9IHI7XG4gICAgcy5hcmdzID0gbDtcbiAgICBzLmV4ZVRpbWUgPSBvICsgKGUgPyB0aGlzLl9jdXJyRnJhbWUgOiB0aGlzLl9jdXJyZW50VGltZSk7XG4gICAgdGhpcy5faGFuZGxlcnMucHVzaChzKTtcbiAgICByZXR1cm4gbjtcbiAgfVxufSJdfQ==