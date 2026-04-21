
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/util/SimulatorLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e45ecOkt/tJeoEMaHYJl7ps', 'SimulatorLog');
// Scripts/util/SimulatorLog.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatorLog = void 0;
var SimulatorLog = /** @class */ (function () {
    function SimulatorLog() {
    }
    SimulatorLog.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c🎮 [Simulator]", this.STYLES.tag], e);
    };
    SimulatorLog.logBehavior = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c [Behavior]", this.STYLES.info_tag], e);
    };
    SimulatorLog.logBehaviorTree = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c [Behavior Tree]", this.STYLES.behavior_tag], e);
    };
    SimulatorLog.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c❌ [Simulator]", this.STYLES.error_tag], e);
    };
    SimulatorLog.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c⚠️ [Simulator]", this.STYLES.warn_tag], e);
    };
    SimulatorLog.success = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c✅ [Simulator]", this.STYLES.success_tag], e);
    };
    SimulatorLog.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%c🔧 [Simulator]", this.STYLES.debug_tag], e);
    };
    SimulatorLog.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return __spreadArrays(["%cℹ️ [Simulator]", this.STYLES.info_tag], e);
    };
    SimulatorLog.STYLES = {
        tag: "background: #667eea; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        error_tag: "background: #e74c3c; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        warn_tag: "background: #f39c12; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        success_tag: "background: #27ae60; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        debug_tag: "background: #9E9E9E; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        info_tag: "background: #00BCD4; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
        behavior_tag: "background: #ff5722; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;"
    };
    return SimulatorLog;
}());
exports.SimulatorLog = SimulatorLog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3V0aWwvU2ltdWxhdG9yTG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTBDQSxDQUFDO0lBaENRLGdCQUFHLEdBQVY7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsc0JBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFLLENBQUMsRUFBRTtJQUMxRCxDQUFDO0lBQ00sd0JBQVcsR0FBbEI7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsc0JBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBSyxDQUFDLEVBQUU7SUFDNUQsQ0FBQztJQUNNLDRCQUFlLEdBQXRCO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLHNCQUFXLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBSyxDQUFDLEVBQUU7SUFDckUsQ0FBQztJQUNNLGtCQUFLLEdBQVo7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsc0JBQVcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFLLENBQUMsRUFBRTtJQUMvRCxDQUFDO0lBQ00saUJBQUksR0FBWDtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxzQkFBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUssQ0FBQyxFQUFFO0lBQy9ELENBQUM7SUFDTSxvQkFBTyxHQUFkO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLHNCQUFXLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBSyxDQUFDLEVBQUU7SUFDakUsQ0FBQztJQUNNLGtCQUFLLEdBQVo7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsc0JBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFLLENBQUMsRUFBRTtJQUNoRSxDQUFDO0lBQ00saUJBQUksR0FBWDtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxzQkFBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUssQ0FBQyxFQUFFO0lBQy9ELENBQUM7SUF4Q00sbUJBQU0sR0FBRztRQUNkLEdBQUcsRUFBRSwrR0FBK0c7UUFDcEgsU0FBUyxFQUFFLCtHQUErRztRQUMxSCxRQUFRLEVBQUUsK0dBQStHO1FBQ3pILFdBQVcsRUFBRSwrR0FBK0c7UUFDNUgsU0FBUyxFQUFFLCtHQUErRztRQUMxSCxRQUFRLEVBQUUsK0dBQStHO1FBQ3pILFlBQVksRUFBRSwrR0FBK0c7S0FDOUgsQ0FBQztJQWlDSixtQkFBQztDQTFDRCxBQTBDQyxJQUFBO0FBMUNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpbXVsYXRvckxvZyB7XG4gIHN0YXRpYyBTVFlMRVMgPSB7XG4gICAgdGFnOiBcImJhY2tncm91bmQ6ICM2NjdlZWE7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tcmlnaHQ6IDRweDtcIixcbiAgICBlcnJvcl90YWc6IFwiYmFja2dyb3VuZDogI2U3NGMzYzsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDNweCA4cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi1yaWdodDogNHB4O1wiLFxuICAgIHdhcm5fdGFnOiBcImJhY2tncm91bmQ6ICNmMzljMTI7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tcmlnaHQ6IDRweDtcIixcbiAgICBzdWNjZXNzX3RhZzogXCJiYWNrZ3JvdW5kOiAjMjdhZTYwOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogM3B4IDhweDsgYm9yZGVyLXJhZGl1czogM3B4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXJpZ2h0OiA0cHg7XCIsXG4gICAgZGVidWdfdGFnOiBcImJhY2tncm91bmQ6ICM5RTlFOUU7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tcmlnaHQ6IDRweDtcIixcbiAgICBpbmZvX3RhZzogXCJiYWNrZ3JvdW5kOiAjMDBCQ0Q0OyBjb2xvcjogI2ZmZjsgcGFkZGluZzogM3B4IDhweDsgYm9yZGVyLXJhZGl1czogM3B4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXJpZ2h0OiA0cHg7XCIsXG4gICAgYmVoYXZpb3JfdGFnOiBcImJhY2tncm91bmQ6ICNmZjU3MjI7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tcmlnaHQ6IDRweDtcIlxuICB9O1xuICBzdGF0aWMgbG9nKCkge1xuICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIGVbdF0gPSBhcmd1bWVudHNbdF07XG4gICAgcmV0dXJuIFsuLi5bXCIlY/Cfjq4gW1NpbXVsYXRvcl1cIiwgdGhpcy5TVFlMRVMudGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIGxvZ0JlaGF2aW9yKCkge1xuICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIGVbdF0gPSBhcmd1bWVudHNbdF07XG4gICAgcmV0dXJuIFsuLi5bXCIlYyBbQmVoYXZpb3JdXCIsIHRoaXMuU1RZTEVTLmluZm9fdGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIGxvZ0JlaGF2aW9yVHJlZSgpIHtcbiAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSBlW3RdID0gYXJndW1lbnRzW3RdO1xuICAgIHJldHVybiBbLi4uW1wiJWMgW0JlaGF2aW9yIFRyZWVdXCIsIHRoaXMuU1RZTEVTLmJlaGF2aW9yX3RhZ10sIC4uLmVdO1xuICB9XG4gIHN0YXRpYyBlcnJvcigpIHtcbiAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSBlW3RdID0gYXJndW1lbnRzW3RdO1xuICAgIHJldHVybiBbLi4uW1wiJWPinYwgW1NpbXVsYXRvcl1cIiwgdGhpcy5TVFlMRVMuZXJyb3JfdGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICByZXR1cm4gWy4uLltcIiVj4pqg77iPIFtTaW11bGF0b3JdXCIsIHRoaXMuU1RZTEVTLndhcm5fdGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIHN1Y2Nlc3MoKSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICByZXR1cm4gWy4uLltcIiVj4pyFIFtTaW11bGF0b3JdXCIsIHRoaXMuU1RZTEVTLnN1Y2Nlc3NfdGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIGRlYnVnKCkge1xuICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIGVbdF0gPSBhcmd1bWVudHNbdF07XG4gICAgcmV0dXJuIFsuLi5bXCIlY/CflKcgW1NpbXVsYXRvcl1cIiwgdGhpcy5TVFlMRVMuZGVidWdfdGFnXSwgLi4uZV07XG4gIH1cbiAgc3RhdGljIGluZm8oKSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICByZXR1cm4gWy4uLltcIiVj4oS577iPIFtTaW11bGF0b3JdXCIsIHRoaXMuU1RZTEVTLmluZm9fdGFnXSwgLi4uZV07XG4gIH1cbn0iXX0=