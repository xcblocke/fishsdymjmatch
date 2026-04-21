
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/MemoryManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23cce0aOQ1Le7xQDIAoZ9vw', 'MemoryManager');
// Scripts/framework/manager/MemoryManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("./ControllerManager");
var MemoryManager = /** @class */ (function () {
    function MemoryManager() {
        this._delayReleaseMap = {};
        this._cacheIndex = 0;
        this._isGarbageCollect = false;
        this.isLowMemory = null;
    }
    MemoryManager.getInstance = function () {
        var t = this;
        if (!this._manager) {
            cc.sys.isNative && cc.sys.isMobile || (MemoryManager._clearTime = 300000);
            this._manager = new MemoryManager();
            this._clearTimer = setTimeout(function () {
                var o, n;
                clearTimeout(MemoryManager._emergencyClearTimer);
                MemoryManager._emergencyClearTimer = null;
                t._manager.didReceiveMemoryWarning(null === (n = (o = t._manager).isLowMemory) || void 0 === n ? void 0 : n.call(o));
            }, this._clearTime);
        }
        return this._manager;
    };
    MemoryManager.prototype.cacheDelayReleaseRes = function (e, t) {
        if (t === void 0) { t = 1; }
        var o = e._uuid, n = this._delayReleaseMap[o];
        if (n && n[0] !== e) {
            n[0].decRef();
            n[0] = e;
        }
        if (n) {
            n[1] += t;
            n[2] = this._cacheIndex++;
            e.decRef();
        }
        else
            this._delayReleaseMap[o] = [e, t, this._cacheIndex++];
    };
    MemoryManager.prototype.releaseDelayRes = function (e) {
        if (e) {
            for (var t in this._delayReleaseMap)
                (a = (n = this._delayReleaseMap[t])[0]).isValid && a.decRef();
            this._delayReleaseMap = {};
        }
        else {
            var o = [];
            for (var t in this._delayReleaseMap) {
                var n = this._delayReleaseMap[t];
                o.push(n);
            }
            o.sort(function (e, t) {
                return e[1] !== t[1] ? e[1] - t[1] : e[2] - t[2];
            });
            var i = o.length;
            i > 10 && (i = Math.floor(i / 2));
            for (var r = 0; r < i; r++) {
                var a = (n = o[r])[0];
                delete this._delayReleaseMap[a._uuid];
                a.isValid && a.decRef();
            }
        }
    };
    MemoryManager.prototype.didReceiveMemoryWarning = function (t) {
        if (t === void 0) { t = false; }
        var o = this;
        ControllerManager_1.default.isDestroyed || ControllerManager_1.default.getInstance().destroyUnusedView();
        mj.EventManager.emit("removeUnusedRes");
        this.releaseDelayRes(t);
        this.releaseUnusedAssets();
        if (MemoryManager._clearTimer) {
            clearTimeout(MemoryManager._clearTimer);
            clearTimeout(MemoryManager._emergencyClearTimer);
            MemoryManager._emergencyClearTimer = null;
            MemoryManager._clearTimer = setTimeout(function () {
                var t, n;
                o.didReceiveMemoryWarning(null === (n = (t = MemoryManager.getInstance()).isLowMemory) || void 0 === n ? void 0 : n.call(t));
            }, MemoryManager._clearTime);
        }
    };
    MemoryManager.prototype.tryReleaseInLowMemory = function () {
        var t, o = this;
        (null === (t = this.isLowMemory) || void 0 === t ? void 0 : t.call(this)) && (MemoryManager._emergencyClearTimer || (MemoryManager._emergencyClearTimer = setTimeout(function () {
            MemoryManager._emergencyClearTimer = setTimeout(function () {
                o.didReceiveMemoryWarning(false);
                MemoryManager._emergencyClearTimer = null;
            }, 500);
        }, 500)));
    };
    MemoryManager.prototype.releaseUnusedAssets = function () {
        var e = this;
        if (!this._isGarbageCollect) {
            this._isGarbageCollect = true;
            setTimeout(function () {
                e._isGarbageCollect = false;
            }, 5000);
        }
    };
    MemoryManager._manager = null;
    MemoryManager._clearTimer = null;
    MemoryManager._emergencyClearTimer = null;
    MemoryManager._clearTime = 300000;
    return MemoryManager;
}());
exports.default = MemoryManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL01lbW9yeU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRDtJQUFBO1FBQ0UscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLElBQUksQ0FBQztJQXlGckIsQ0FBQztJQXBGUSx5QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxZQUFZLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2pELGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkgsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMs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QUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUNuSyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO2dCQUM5QyxDQUFDLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDRCwyQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsVUFBVSxDQUFDO2dCQUNULENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBdkZNLHNCQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLHlCQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLGtDQUFvQixHQUFHLElBQUksQ0FBQztJQUM1Qix3QkFBVSxHQUFHLE1BQU0sQ0FBQztJQXFGN0Isb0JBQUM7Q0E3RkQsQUE2RkMsSUFBQTtrQkE3Rm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi9Db250cm9sbGVyTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlNYW5hZ2VyIHtcbiAgX2RlbGF5UmVsZWFzZU1hcCA9IHt9O1xuICBfY2FjaGVJbmRleCA9IDA7XG4gIF9pc0dhcmJhZ2VDb2xsZWN0ID0gZmFsc2U7XG4gIGlzTG93TWVtb3J5ID0gbnVsbDtcbiAgc3RhdGljIF9tYW5hZ2VyID0gbnVsbDtcbiAgc3RhdGljIF9jbGVhclRpbWVyID0gbnVsbDtcbiAgc3RhdGljIF9lbWVyZ2VuY3lDbGVhclRpbWVyID0gbnVsbDtcbiAgc3RhdGljIF9jbGVhclRpbWUgPSAzMDAwMDA7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLl9tYW5hZ2VyKSB7XG4gICAgICBjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLmlzTW9iaWxlIHx8IChNZW1vcnlNYW5hZ2VyLl9jbGVhclRpbWUgPSAzMDAwMDApO1xuICAgICAgdGhpcy5fbWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKCk7XG4gICAgICB0aGlzLl9jbGVhclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvLCBuO1xuICAgICAgICBjbGVhclRpbWVvdXQoTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lcik7XG4gICAgICAgIE1lbW9yeU1hbmFnZXIuX2VtZXJnZW5jeUNsZWFyVGltZXIgPSBudWxsO1xuICAgICAgICB0Ll9tYW5hZ2VyLmRpZFJlY2VpdmVNZW1vcnlXYXJuaW5nKG51bGwgPT09IChuID0gKG8gPSB0Ll9tYW5hZ2VyKS5pc0xvd01lbW9yeSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5jYWxsKG8pKTtcbiAgICAgIH0sIHRoaXMuX2NsZWFyVGltZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tYW5hZ2VyO1xuICB9XG4gIGNhY2hlRGVsYXlSZWxlYXNlUmVzKGUsIHQgPSAxKSB7XG4gICAgdmFyIG8gPSBlLl91dWlkLFxuICAgICAgbiA9IHRoaXMuX2RlbGF5UmVsZWFzZU1hcFtvXTtcbiAgICBpZiAobiAmJiBuWzBdICE9PSBlKSB7XG4gICAgICBuWzBdLmRlY1JlZigpO1xuICAgICAgblswXSA9IGU7XG4gICAgfVxuICAgIGlmIChuKSB7XG4gICAgICBuWzFdICs9IHQ7XG4gICAgICBuWzJdID0gdGhpcy5fY2FjaGVJbmRleCsrO1xuICAgICAgZS5kZWNSZWYoKTtcbiAgICB9IGVsc2UgdGhpcy5fZGVsYXlSZWxlYXNlTWFwW29dID0gW2UsIHQsIHRoaXMuX2NhY2hlSW5kZXgrK107XG4gIH1cbiAgcmVsZWFzZURlbGF5UmVzKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLl9kZWxheVJlbGVhc2VNYXApIChhID0gKG4gPSB0aGlzLl9kZWxheVJlbGVhc2VNYXBbdF0pWzBdKS5pc1ZhbGlkICYmIGEuZGVjUmVmKCk7XG4gICAgICB0aGlzLl9kZWxheVJlbGVhc2VNYXAgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG8gPSBbXTtcbiAgICAgIGZvciAodmFyIHQgaW4gdGhpcy5fZGVsYXlSZWxlYXNlTWFwKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5fZGVsYXlSZWxlYXNlTWFwW3RdO1xuICAgICAgICBvLnB1c2gobik7XG4gICAgICB9XG4gICAgICBvLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGVbMV0gIT09IHRbMV0gPyBlWzFdIC0gdFsxXSA6IGVbMl0gLSB0WzJdO1xuICAgICAgfSk7XG4gICAgICB2YXIgaSA9IG8ubGVuZ3RoO1xuICAgICAgaSA+IDEwICYmIChpID0gTWF0aC5mbG9vcihpIC8gMikpO1xuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpOyByKyspIHtcbiAgICAgICAgdmFyIGEgPSAobiA9IG9bcl0pWzBdO1xuICAgICAgICBkZWxldGUgdGhpcy5fZGVsYXlSZWxlYXNlTWFwW2EuX3V1aWRdO1xuICAgICAgICBhLmlzVmFsaWQgJiYgYS5kZWNSZWYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGlkUmVjZWl2ZU1lbW9yeVdhcm5pbmcodCA9IGZhbHNlKSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmlzRGVzdHJveWVkIHx8IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVzdHJveVVudXNlZFZpZXcoKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChcInJlbW92ZVVudXNlZFJlc1wiKTtcbiAgICB0aGlzLnJlbGVhc2VEZWxheVJlcyh0KTtcbiAgICB0aGlzLnJlbGVhc2VVbnVzZWRBc3NldHMoKTtcbiAgICBpZiAoTWVtb3J5TWFuYWdlci5fY2xlYXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KE1lbW9yeU1hbmFnZXIuX2NsZWFyVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KE1lbW9yeU1hbmFnZXIuX2VtZXJnZW5jeUNsZWFyVGltZXIpO1xuICAgICAgTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lciA9IG51bGw7XG4gICAgICBNZW1vcnlNYW5hZ2VyLl9jbGVhclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0LCBuO1xuICAgICAgICBvLmRpZFJlY2VpdmVNZW1vcnlXYXJuaW5nKG51bGwgPT09IChuID0gKHQgPSBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkpLmlzTG93TWVtb3J5KSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNhbGwodCkpO1xuICAgICAgfSwgTWVtb3J5TWFuYWdlci5fY2xlYXJUaW1lKTtcbiAgICB9XG4gIH1cbiAgdHJ5UmVsZWFzZUluTG93TWVtb3J5KCkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXM7XG4gICAgKG51bGwgPT09ICh0ID0gdGhpcy5pc0xvd01lbW9yeSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKHRoaXMpKSAmJiAoTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lciB8fCAoTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvLmRpZFJlY2VpdmVNZW1vcnlXYXJuaW5nKGZhbHNlKTtcbiAgICAgICAgTWVtb3J5TWFuYWdlci5fZW1lcmdlbmN5Q2xlYXJUaW1lciA9IG51bGw7XG4gICAgICB9LCA1MDApO1xuICAgIH0sIDUwMCkpKTtcbiAgfVxuICByZWxlYXNlVW51c2VkQXNzZXRzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX2lzR2FyYmFnZUNvbGxlY3QpIHtcbiAgICAgIHRoaXMuX2lzR2FyYmFnZUNvbGxlY3QgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX2lzR2FyYmFnZUNvbGxlY3QgPSBmYWxzZTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxufSJdfQ==