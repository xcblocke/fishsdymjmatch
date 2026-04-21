"use strict";
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