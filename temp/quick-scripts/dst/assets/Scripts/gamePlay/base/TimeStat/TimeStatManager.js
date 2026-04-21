
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/TimeStat/TimeStatManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01b975VVftEJKQ9ZRVL/Wmo', 'TimeStatManager');
// Scripts/gamePlay/base/TimeStat/TimeStatManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Config");
var UserModel_1 = require("../../user/UserModel");
var TimeStatManager = /** @class */ (function () {
    function TimeStatManager() {
        this._timingStartPoint = 0;
        this._scheduleTimer = null;
        this.SYNC_INTERVAL = 3;
        this._isPaused = false;
    }
    TimeStatManager_1 = TimeStatManager;
    TimeStatManager.getInstance = function () {
        TimeStatManager_1._instance || (TimeStatManager_1._instance = new TimeStatManager_1());
        return TimeStatManager_1._instance;
    };
    TimeStatManager.prototype.init = function (e) {
        var t = this;
        if (!this._scheduleTimer) {
            this._timingStartPoint = Date.now();
            this._scheduleTimer = e.schedule(function () {
                t.syncTimeStats();
            }, this.SYNC_INTERVAL);
            cc.sys.os === cc.sys.OS_IOS && this.registerAdEvents();
        }
    };
    TimeStatManager.prototype.syncTimeStats = function () {
        if (!this._isPaused) {
            var e = Date.now(), t = e - this._timingStartPoint, o = Math.floor(t / 1000);
            if (o > 0) {
                this._timingStartPoint = e;
                UserModel_1.default.getInstance().addAppUseSecondsTime(o);
                mj.EventManager.emit(Config_1.EVT_TIME_STAT_UPDATE, o);
            }
        }
    };
    TimeStatManager.prototype.resetStartPoint = function () {
        this._timingStartPoint = Date.now();
    };
    TimeStatManager.prototype.getStartPoint = function () {
        return this._timingStartPoint;
    };
    TimeStatManager.prototype.isPaused = function () {
        return this._isPaused;
    };
    TimeStatManager.prototype.registerAdEvents = function () {
        mj.EventManager.on(Config_1.EVT_AD_SHOW_START, this.onAdShowStart, this);
        mj.EventManager.on(Config_1.EVT_AD_SHOW_END, this.onAdShowEnd, this);
    };
    TimeStatManager.prototype.unregisterAdEvents = function () {
        mj.EventManager.off(Config_1.EVT_AD_SHOW_START, this.onAdShowStart, this);
        mj.EventManager.off(Config_1.EVT_AD_SHOW_END, this.onAdShowEnd, this);
    };
    TimeStatManager.prototype.onAdShowStart = function () {
        this.syncTimeStats();
        this._isPaused = true;
    };
    TimeStatManager.prototype.onAdShowEnd = function () {
        this._isPaused = false;
        this.resetStartPoint();
    };
    TimeStatManager.prototype.destroy = function () {
        cc.sys.os === cc.sys.OS_IOS && this.unregisterAdEvents();
        this._scheduleTimer = null;
        this._isPaused = false;
    };
    var TimeStatManager_1;
    TimeStatManager._instance = null;
    TimeStatManager = TimeStatManager_1 = __decorate([
        mj.class("TimeStatManager")
    ], TimeStatManager);
    return TimeStatManager;
}());
exports.default = TimeStatManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvVGltZVN0YXQvVGltZVN0YXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMkY7QUFDM0Ysa0RBQTZDO0FBRTdDO0lBQUE7UUFDRSxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQTBEcEIsQ0FBQzt3QkE5RG9CLGVBQWU7SUFNM0IsMkJBQVcsR0FBbEI7UUFDRSxpQkFBZSxDQUFDLFNBQVMsSUFBSSxDQUFDLGlCQUFlLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDakYsT0FBTyxpQkFBZSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsOEJBQUksR0FBSixVQUFLLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBQ0QsdUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztnQkFDM0IsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsNkJBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsdUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwwQ0FBZ0IsR0FBaEI7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLHdCQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyx3QkFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELHVDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELGlDQUFPLEdBQVA7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztJQXhETSx5QkFBUyxHQUFHLElBQUksQ0FBQztJQUxMLGVBQWU7UUFEbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0E4RG5DO0lBQUQsc0JBQUM7Q0E5REQsQUE4REMsSUFBQTtrQkE5RG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfVElNRV9TVEFUX1VQREFURSwgRVZUX0FEX1NIT1dfU1RBUlQsIEVWVF9BRF9TSE9XX0VORCB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL3VzZXIvVXNlck1vZGVsJztcbkBtai5jbGFzcyhcIlRpbWVTdGF0TWFuYWdlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVN0YXRNYW5hZ2VyIHtcbiAgX3RpbWluZ1N0YXJ0UG9pbnQgPSAwO1xuICBfc2NoZWR1bGVUaW1lciA9IG51bGw7XG4gIFNZTkNfSU5URVJWQUwgPSAzO1xuICBfaXNQYXVzZWQgPSBmYWxzZTtcbiAgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBUaW1lU3RhdE1hbmFnZXIuX2luc3RhbmNlIHx8IChUaW1lU3RhdE1hbmFnZXIuX2luc3RhbmNlID0gbmV3IFRpbWVTdGF0TWFuYWdlcigpKTtcbiAgICByZXR1cm4gVGltZVN0YXRNYW5hZ2VyLl9pbnN0YW5jZTtcbiAgfVxuICBpbml0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLl9zY2hlZHVsZVRpbWVyKSB7XG4gICAgICB0aGlzLl90aW1pbmdTdGFydFBvaW50ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlVGltZXIgPSBlLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5zeW5jVGltZVN0YXRzKCk7XG4gICAgICB9LCB0aGlzLlNZTkNfSU5URVJWQUwpO1xuICAgICAgY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIHRoaXMucmVnaXN0ZXJBZEV2ZW50cygpO1xuICAgIH1cbiAgfVxuICBzeW5jVGltZVN0YXRzKCkge1xuICAgIGlmICghdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHZhciBlID0gRGF0ZS5ub3coKSxcbiAgICAgICAgdCA9IGUgLSB0aGlzLl90aW1pbmdTdGFydFBvaW50LFxuICAgICAgICBvID0gTWF0aC5mbG9vcih0IC8gMTAwMCk7XG4gICAgICBpZiAobyA+IDApIHtcbiAgICAgICAgdGhpcy5fdGltaW5nU3RhcnRQb2ludCA9IGU7XG4gICAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmFkZEFwcFVzZVNlY29uZHNUaW1lKG8pO1xuICAgICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfVElNRV9TVEFUX1VQREFURSwgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlc2V0U3RhcnRQb2ludCgpIHtcbiAgICB0aGlzLl90aW1pbmdTdGFydFBvaW50ID0gRGF0ZS5ub3coKTtcbiAgfVxuICBnZXRTdGFydFBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1pbmdTdGFydFBvaW50O1xuICB9XG4gIGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BhdXNlZDtcbiAgfVxuICByZWdpc3RlckFkRXZlbnRzKCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5vbihFVlRfQURfU0hPV19TVEFSVCwgdGhpcy5vbkFkU2hvd1N0YXJ0LCB0aGlzKTtcbiAgICBtai5FdmVudE1hbmFnZXIub24oRVZUX0FEX1NIT1dfRU5ELCB0aGlzLm9uQWRTaG93RW5kLCB0aGlzKTtcbiAgfVxuICB1bnJlZ2lzdGVyQWRFdmVudHMoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLm9mZihFVlRfQURfU0hPV19TVEFSVCwgdGhpcy5vbkFkU2hvd1N0YXJ0LCB0aGlzKTtcbiAgICBtai5FdmVudE1hbmFnZXIub2ZmKEVWVF9BRF9TSE9XX0VORCwgdGhpcy5vbkFkU2hvd0VuZCwgdGhpcyk7XG4gIH1cbiAgb25BZFNob3dTdGFydCgpIHtcbiAgICB0aGlzLnN5bmNUaW1lU3RhdHMoKTtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gIH1cbiAgb25BZFNob3dFbmQoKSB7XG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0U3RhcnRQb2ludCgpO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIHRoaXMudW5yZWdpc3RlckFkRXZlbnRzKCk7XG4gICAgdGhpcy5fc2NoZWR1bGVUaW1lciA9IG51bGw7XG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgfVxufSJdfQ==