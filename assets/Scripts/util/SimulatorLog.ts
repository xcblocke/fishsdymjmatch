export class SimulatorLog {
  static STYLES = {
    tag: "background: #667eea; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    error_tag: "background: #e74c3c; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    warn_tag: "background: #f39c12; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    success_tag: "background: #27ae60; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    debug_tag: "background: #9E9E9E; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    info_tag: "background: #00BCD4; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;",
    behavior_tag: "background: #ff5722; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: bold; margin-right: 4px;"
  };
  static log() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c🎮 [Simulator]", this.STYLES.tag], ...e];
  }
  static logBehavior() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c [Behavior]", this.STYLES.info_tag], ...e];
  }
  static logBehaviorTree() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c [Behavior Tree]", this.STYLES.behavior_tag], ...e];
  }
  static error() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c❌ [Simulator]", this.STYLES.error_tag], ...e];
  }
  static warn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c⚠️ [Simulator]", this.STYLES.warn_tag], ...e];
  }
  static success() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c✅ [Simulator]", this.STYLES.success_tag], ...e];
  }
  static debug() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%c🔧 [Simulator]", this.STYLES.debug_tag], ...e];
  }
  static info() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return [...["%cℹ️ [Simulator]", this.STYLES.info_tag], ...e];
  }
}