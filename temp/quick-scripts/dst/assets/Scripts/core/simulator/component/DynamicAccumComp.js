
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/component/DynamicAccumComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4be63S0EiZOe4l+40h6HpUe', 'DynamicAccumComp');
// Scripts/core/simulator/component/DynamicAccumComp.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicAccumHandler = void 0;
var DynamicAccumHandler = /** @class */ (function () {
    function DynamicAccumHandler(e, t, o, n, i, r) {
        if (i === void 0) { i = null; }
        if (r === void 0) { r = null; }
        this.elapsedTime = 0;
        this.currentValue = 0;
        this.id = null;
        this.fromValue = null;
        this.toValue = null;
        this.duration = null;
        this.progressCallback = null;
        this.finishedCallback = null;
        this.id = e;
        this.fromValue = t;
        this.toValue = o;
        this.duration = n;
        this.progressCallback = i;
        this.finishedCallback = r;
    }
    DynamicAccumHandler.prototype.tick = function (e) {
        this.elapsedTime += e;
        var t = Math.min(this.elapsedTime / this.duration, 1);
        this.currentValue = this.fromValue + t * (this.toValue - this.fromValue);
        null !== this.progressCallback && this.progressCallback(this.currentValue, t);
        if (this.isCompleted() && null !== this.finishedCallback) {
            this.finishedCallback(this.toValue);
            this.finishedCallback = null;
        }
    };
    DynamicAccumHandler.prototype.isCompleted = function () {
        return this.elapsedTime >= this.duration;
    };
    DynamicAccumHandler.prototype.updateTargetValue = function (e) {
        this.toValue = e;
        this.elapsedTime = 0;
        this.fromValue = this.currentValue;
    };
    DynamicAccumHandler.prototype.getCurrentValue = function () {
        return this.currentValue;
    };
    return DynamicAccumHandler;
}());
exports.DynamicAccumHandler = DynamicAccumHandler;
var DynamicAccumComp = /** @class */ (function () {
    function DynamicAccumComp() {
        this.handlers = [];
    }
    DynamicAccumComp.prototype.create = function (t, o, i, r, a) {
        if (r === void 0) { r = null; }
        if (a === void 0) { a = null; }
        var l = DynamicAccumComp.nextId++, s = new DynamicAccumHandler(l, t, o, i, r, a);
        this.handlers.push(s);
        return s;
    };
    DynamicAccumComp.prototype.removeById = function (e) {
        var t = this.handlers.findIndex(function (t) {
            return t.id === e;
        });
        if (t > -1) {
            this.handlers.splice(t, 1);
            return true;
        }
        return false;
    };
    DynamicAccumComp.prototype.removeHandler = function (e) {
        return null !== e && this.removeById(e.id);
    };
    DynamicAccumComp.prototype.update = function (e) {
        if (0 !== this.handlers.length)
            for (var t = this.handlers.length - 1; t >= 0; t--) {
                var o = this.handlers[t];
                o.tick(e);
                o.isCompleted() && this.handlers.splice(t, 1);
            }
    };
    DynamicAccumComp.prototype.getActiveHandlerCount = function () {
        return this.handlers.length;
    };
    DynamicAccumComp.prototype.hasActiveHandlers = function () {
        return this.handlers.length > 0;
    };
    DynamicAccumComp.prototype.getHandlerById = function (e) {
        return this.handlers.find(function (t) {
            return t.id === e;
        }) || null;
    };
    DynamicAccumComp.prototype.clear = function () {
        this.handlers = [];
        DynamicAccumComp.nextId = 1;
    };
    DynamicAccumComp.nextId = 1;
    return DynamicAccumComp;
}());
exports.default = DynamicAccumComp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbXBvbmVudC9EeW5hbWljQWNjdW1Db21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFTRSw2QkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBUSxFQUFFLENBQVE7UUFBbEIsa0JBQUEsRUFBQSxRQUFRO1FBQUUsa0JBQUEsRUFBQSxRQUFRO1FBUjFDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0osSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFD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QUM7YUFDL0M7SUFDSCxDQUFDO0lBQ0QsZ0RBQXFCLEdBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsNENBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0QsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXpDTSx1QkFBTSxHQUFHLENBQUMsQ0FBQztJQTBDcEIsdUJBQUM7Q0E1Q0QsQUE0Q0MsSUFBQTtrQkE1Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEeW5hbWljQWNjdW1IYW5kbGVyIHtcbiAgZWxhcHNlZFRpbWUgPSAwO1xuICBjdXJyZW50VmFsdWUgPSAwO1xuICBpZCA9IG51bGw7XG4gIGZyb21WYWx1ZSA9IG51bGw7XG4gIHRvVmFsdWUgPSBudWxsO1xuICBkdXJhdGlvbiA9IG51bGw7XG4gIHByb2dyZXNzQ2FsbGJhY2sgPSBudWxsO1xuICBmaW5pc2hlZENhbGxiYWNrID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSwgdCwgbywgbiwgaSA9IG51bGwsIHIgPSBudWxsKSB7XG4gICAgdGhpcy5pZCA9IGU7XG4gICAgdGhpcy5mcm9tVmFsdWUgPSB0O1xuICAgIHRoaXMudG9WYWx1ZSA9IG87XG4gICAgdGhpcy5kdXJhdGlvbiA9IG47XG4gICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrID0gaTtcbiAgICB0aGlzLmZpbmlzaGVkQ2FsbGJhY2sgPSByO1xuICB9XG4gIHRpY2soZSkge1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgKz0gZTtcbiAgICB2YXIgdCA9IE1hdGgubWluKHRoaXMuZWxhcHNlZFRpbWUgLyB0aGlzLmR1cmF0aW9uLCAxKTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZnJvbVZhbHVlICsgdCAqICh0aGlzLnRvVmFsdWUgLSB0aGlzLmZyb21WYWx1ZSk7XG4gICAgbnVsbCAhPT0gdGhpcy5wcm9ncmVzc0NhbGxiYWNrICYmIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayh0aGlzLmN1cnJlbnRWYWx1ZSwgdCk7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQoKSAmJiBudWxsICE9PSB0aGlzLmZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZmluaXNoZWRDYWxsYmFjayh0aGlzLnRvVmFsdWUpO1xuICAgICAgdGhpcy5maW5pc2hlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgaXNDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWUgPj0gdGhpcy5kdXJhdGlvbjtcbiAgfVxuICB1cGRhdGVUYXJnZXRWYWx1ZShlKSB7XG4gICAgdGhpcy50b1ZhbHVlID0gZTtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICB0aGlzLmZyb21WYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlO1xuICB9XG4gIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNBY2N1bUNvbXAge1xuICBoYW5kbGVycyA9IFtdO1xuICBzdGF0aWMgbmV4dElkID0gMTtcbiAgY3JlYXRlKHQsIG8sIGksIHIgPSBudWxsLCBhID0gbnVsbCkge1xuICAgIHZhciBsID0gRHluYW1pY0FjY3VtQ29tcC5uZXh0SWQrKyxcbiAgICAgIHMgPSBuZXcgRHluYW1pY0FjY3VtSGFuZGxlcihsLCB0LCBvLCBpLCByLCBhKTtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2gocyk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgcmVtb3ZlQnlJZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmhhbmRsZXJzLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaWQgPT09IGU7XG4gICAgfSk7XG4gICAgaWYgKHQgPiAtMSkge1xuICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UodCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbW92ZUhhbmRsZXIoZSkge1xuICAgIHJldHVybiBudWxsICE9PSBlICYmIHRoaXMucmVtb3ZlQnlJZChlLmlkKTtcbiAgfVxuICB1cGRhdGUoZSkge1xuICAgIGlmICgwICE9PSB0aGlzLmhhbmRsZXJzLmxlbmd0aCkgZm9yICh2YXIgdCA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTsgdCA+PSAwOyB0LS0pIHtcbiAgICAgIHZhciBvID0gdGhpcy5oYW5kbGVyc1t0XTtcbiAgICAgIG8udGljayhlKTtcbiAgICAgIG8uaXNDb21wbGV0ZWQoKSAmJiB0aGlzLmhhbmRsZXJzLnNwbGljZSh0LCAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0QWN0aXZlSGFuZGxlckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aDtcbiAgfVxuICBoYXNBY3RpdmVIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggPiAwO1xuICB9XG4gIGdldEhhbmRsZXJCeUlkKGUpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5pZCA9PT0gZTtcbiAgICB9KSB8fCBudWxsO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICBEeW5hbWljQWNjdW1Db21wLm5leHRJZCA9IDE7XG4gIH1cbn0iXX0=