
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/trait/Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8b2cHReQVC76XX2kOCRb8H', 'Trait');
// Scripts/framework/trait/Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../data/Model");
var ResManager_1 = require("../manager/ResManager");
var Trait = /** @class */ (function (_super) {
    __extends(Trait, _super);
    function Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eventEnabled = false;
        _this._pendingEvents = null;
        _this._initEventTriggered = false;
        return _this;
    }
    Object.defineProperty(Trait.prototype, "traitData", {
        get: function () {
            return this._traitData;
        },
        enumerable: false,
        configurable: true
    });
    Trait.prototype.__init = function (e) {
        var t = this;
        if (!this._traitData) {
            this._traitData = e;
            this._tm = cc.js.getClassByName("TraitManager").getInstance();
            var o = function o() {
                t._traitData.onlyDownload || t.onLoad();
            };
            if (this._traitData.bundle) {
                this.prepare(function (e, t) {
                    if (t) {
                        var n = "Failed to load bundle " + e + ": " + t;
                        -3 != t.cause && console.error(n);
                    }
                    else
                        o();
                });
            }
            else {
                o();
            }
        }
    };
    Trait.prototype.prepare = function (e) {
        if (ResManager_1.resManager.isRemoteBundle(this._traitData.bundle)) {
            this._tm.preloadAllRes(this._traitData.bundle, e);
        }
        else {
            e();
        }
    };
    Trait.prototype.onLoad = function () {
        this.eventEnabled = true;
        this.initEvent();
    };
    Trait.prototype.initEvent = function () {
        var e = this._traitData.events;
        if (e && 0 !== e.length) {
            var t = e.filter(function (e) {
                return e.isPre;
            });
            if (1 === t.length) {
                this._pendingEvents = e.filter(function (e) {
                    return !e.isPre;
                });
                this._initEventTriggered = false;
                this.registerEvent(t);
            }
            else
                this.registerEvent(e);
        }
    };
    Trait.prototype._registerPendingEvents = function () {
        if (!this._initEventTriggered && this._pendingEvents && 0 !== this._pendingEvents.length) {
            this._initEventTriggered = true;
            this.registerEvent(this._pendingEvents);
            this._pendingEvents = null;
        }
    };
    Trait.prototype.registerEvent = function (e) {
        var t, o;
        new Set();
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                var r = i.value, l = r.type, s = r.event, c = r.priority, u = r.isPre, p = this["on" + s];
                if (c) {
                    c += c < 0 ? -1000 : 1000;
                }
                else {
                    c = this._tm.getTraitIndex(this._traitData);
                }
                l = l || TraitEventPositionType.befor;
                if (p) {
                    u && (p = this._wrapPreEventCallback(p));
                    this._tm.registerEvent(s, c, p, l, this);
                }
                else if (this.onDefCallback) {
                    var f = this.onDefCallback;
                    u && (f = this._wrapPreEventCallback(f));
                    this._tm.registerEvent(s, c, f, l, this);
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
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    Trait.prototype._wrapPreEventCallback = function (e) {
        var t = this;
        return function (o, n) {
            t._registerPendingEvents();
            e.call(t, o, n);
        };
    };
    Trait.traitKey = "";
    Trait.nextTimeOut = 5;
    Trait = __decorate([
        mj.class("Trait")
    ], Trait);
    return Trait;
}(Model_1.default));
exports.default = Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLG9EQUFtRDtBQUVuRDtJQUFtQyx5QkFBSztJQUF4QztRQUFBLHFFQTJHQztRQTFHQyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qix5QkFBbUIsR0FBRyxLQUFLLENBQUM7O0lBd0c5QixDQUFDO0lBckdDLHNCQUFJLDRCQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNoQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUMsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsRUFBRTt3QkFDTCxJQUFJLENBQUMsR0FBRyx3QkFBd0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuQzs7d0JBQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsdUJBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxJQUFJLHVCQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsc0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QseUJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2Qjs7Z0JBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFDRCxzQ0FBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3hGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsNkJBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFDO3FCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDM0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDRCxxQ0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUM7SUF0R00sY0FBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBTEosS0FBSztRQUR6QixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztPQUNHLEtBQUssQ0EyR3pCO0lBQUQsWUFBQztDQTNHRCxBQTJHQyxDQTNHa0MsZUFBSyxHQTJHdkM7a0JBM0dvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uL2RhdGEvTW9kZWwnO1xuaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4uL21hbmFnZXIvUmVzTWFuYWdlcic7XG5AbWouY2xhc3MoXCJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhaXQgZXh0ZW5kcyBNb2RlbCB7XG4gIF9ldmVudEVuYWJsZWQgPSBmYWxzZTtcbiAgX3BlbmRpbmdFdmVudHMgPSBudWxsO1xuICBfaW5pdEV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiXCI7XG4gIHN0YXRpYyBuZXh0VGltZU91dCA9IDU7XG4gIGdldCB0cmFpdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YTtcbiAgfVxuICBfX2luaXQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX3RyYWl0RGF0YSkge1xuICAgICAgdGhpcy5fdHJhaXREYXRhID0gZTtcbiAgICAgIHRoaXMuX3RtID0gY2MuanMuZ2V0Q2xhc3NCeU5hbWUoXCJUcmFpdE1hbmFnZXJcIikuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIHZhciBvID0gZnVuY3Rpb24gbygpIHtcbiAgICAgICAgdC5fdHJhaXREYXRhLm9ubHlEb3dubG9hZCB8fCB0Lm9uTG9hZCgpO1xuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLl90cmFpdERhdGEuYnVuZGxlKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IFwiRmFpbGVkIHRvIGxvYWQgYnVuZGxlIFwiICsgZSArIFwiOiBcIiArIHQ7XG4gICAgICAgICAgICAtMyAhPSB0LmNhdXNlICYmIGNvbnNvbGUuZXJyb3Iobik7XG4gICAgICAgICAgfSBlbHNlIG8oKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByZXBhcmUoZSkge1xuICAgIGlmIChyZXNNYW5hZ2VyLmlzUmVtb3RlQnVuZGxlKHRoaXMuX3RyYWl0RGF0YS5idW5kbGUpKSB7XG4gICAgICB0aGlzLl90bS5wcmVsb2FkQWxsUmVzKHRoaXMuX3RyYWl0RGF0YS5idW5kbGUsIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmV2ZW50RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuICBpbml0RXZlbnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl90cmFpdERhdGEuZXZlbnRzO1xuICAgIGlmIChlICYmIDAgIT09IGUubGVuZ3RoKSB7XG4gICAgICB2YXIgdCA9IGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzUHJlO1xuICAgICAgfSk7XG4gICAgICBpZiAoMSA9PT0gdC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0V2ZW50cyA9IGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuICFlLmlzUHJlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5faW5pdEV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0KTtcbiAgICAgIH0gZWxzZSB0aGlzLnJlZ2lzdGVyRXZlbnQoZSk7XG4gICAgfVxuICB9XG4gIF9yZWdpc3RlclBlbmRpbmdFdmVudHMoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0RXZlbnRUcmlnZ2VyZWQgJiYgdGhpcy5fcGVuZGluZ0V2ZW50cyAmJiAwICE9PSB0aGlzLl9wZW5kaW5nRXZlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5faW5pdEV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLl9wZW5kaW5nRXZlbnRzKTtcbiAgICAgIHRoaXMuX3BlbmRpbmdFdmVudHMgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZWdpc3RlckV2ZW50KGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhlKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBpLnZhbHVlLFxuICAgICAgICAgIGwgPSByLnR5cGUsXG4gICAgICAgICAgcyA9IHIuZXZlbnQsXG4gICAgICAgICAgYyA9IHIucHJpb3JpdHksXG4gICAgICAgICAgdSA9IHIuaXNQcmUsXG4gICAgICAgICAgcCA9IHRoaXNbXCJvblwiICsgc107XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgYyArPSBjIDwgMCA/IC0xMDAwIDogMTAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjID0gdGhpcy5fdG0uZ2V0VHJhaXRJbmRleCh0aGlzLl90cmFpdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGwgPSBsIHx8IFRyYWl0RXZlbnRQb3NpdGlvblR5cGUuYmVmb3I7XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgdSAmJiAocCA9IHRoaXMuX3dyYXBQcmVFdmVudENhbGxiYWNrKHApKTtcbiAgICAgICAgICB0aGlzLl90bS5yZWdpc3RlckV2ZW50KHMsIGMsIHAsIGwsIHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25EZWZDYWxsYmFjaykge1xuICAgICAgICAgIHZhciBmID0gdGhpcy5vbkRlZkNhbGxiYWNrO1xuICAgICAgICAgIHUgJiYgKGYgPSB0aGlzLl93cmFwUHJlRXZlbnRDYWxsYmFjayhmKSk7XG4gICAgICAgICAgdGhpcy5fdG0ucmVnaXN0ZXJFdmVudChzLCBjLCBmLCBsLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF93cmFwUHJlRXZlbnRDYWxsYmFjayhlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAobywgbikge1xuICAgICAgdC5fcmVnaXN0ZXJQZW5kaW5nRXZlbnRzKCk7XG4gICAgICBlLmNhbGwodCwgbywgbik7XG4gICAgfTtcbiAgfVxufSJdfQ==