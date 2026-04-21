import { DDebugInfo } from '../../../../gamePlay/dot/DDebugInfo';
import LoginModel from '../../../../gamePlay/login/model/LoginModel';
import { EBehaviorExecutionType } from '../../../../simulator/constant/BehaviorsInterface';
import { EBehaviorEnum } from '../../../../simulator/constant/GameInputEnum';
import { BehaviorFactory } from '../../../../BehaviorFactory';
export class GameBehaviorParser {
  _executionQueue = [];
  _isExecuting = false;
  _isAborted = false;
  _currentExecutingBehaviors = new Set();
  _stopOnFailure = false;
  _timeoutCheckers = new Map();
  _pendingBehaviorNames = new Map();
  _progressCallback = null;
  _gameType = null;
  _context = null;
  static CONST_SHOW_DEBUG_INFO = false;
  constructor(e, t) {
    this._gameType = e;
    this._context = t;
  }
  setProgressCallback(e) {
    this._progressCallback = e;
  }
  collectBehaviorNames(e) {
    var t, o;
    switch (e.type) {
      case EBehaviorExecutionType.Single:
        return [e.data.name];
      case EBehaviorExecutionType.Serial:
      case EBehaviorExecutionType.Parallel:
        var i = [];
        try {
          for (var a = __values(e.data), l = a.next(); !l.done; l = a.next()) {
            var c = l.value;
            i.push.apply(i, [...this.collectBehaviorNames(c)]);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            l && !l.done && (o = a.return) && o.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return i;
      default:
        return [];
    }
  }
  registerPendingNames(e) {
    var t,
      o,
      i,
      r,
      a = null !== (i = e.key) && void 0 !== i ? i : -1,
      l = this.collectBehaviorNames(e),
      s = this._pendingBehaviorNames.get(a);
    if (!s) {
      s = new Map();
      this._pendingBehaviorNames.set(a, s);
    }
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        s.set(p, (null !== (r = s.get(p)) && void 0 !== r ? r : 0) + 1);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  onSingleBehaviorDone(e, t) {
    var o = this._pendingBehaviorNames.get(t);
    if (o) {
      var n = o.get(e);
      void 0 !== n && (n <= 1 ? o.delete(e) : o.set(e, n - 1));
      0 === o.size && this._pendingBehaviorNames.delete(t);
    }
    if (this._progressCallback) {
      var i = [];
      null == o || o.forEach(function (e, t) {
        for (var o = 0; o < e; o++) i.push(t);
      });
      this._progressCallback(i, t);
    }
  }
  parseSequence(e, t) {
    this._executionQueue.push({
      execution: e,
      callback: t
    });
    this._isExecuting || this.processQueue();
  }
  parse(t, o) {
    GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
    Date.now();
    this.registerPendingNames(t);
    this.executeExecution(t, function (t) {
      Date.now();
      GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
      o(t);
    });
  }
  update(e) {
    var t = this;
    if (0 !== this._timeoutCheckers.size && !(e > 1)) {
      var o = Math.min(e, 0.1),
        n = [];
      this._timeoutCheckers.forEach(function (e) {
        if (!e.isCompleted && e.timeoutDuration > 0) {
          e.elapsedTime += 1000 * o;
          e.elapsedTime >= e.timeoutDuration && n.push(e);
        }
      });
      n.forEach(function (e) {
        t.handleTimeout(e);
      });
    }
  }
  handleTimeout(e) {
    var t, o;
    e.isCompleted = true;
    this._timeoutCheckers.delete(e.behavior);
    this._currentExecutingBehaviors.delete(e.behavior);
    var n = e.elapsedTime,
      i = e.startTimeForLog,
      r = Date.now(),
      u = r - i,
      p = (LoginModel.getInstance().version || "") + " || " + (LoginModel.getInstance().isOnline() ? "线上" : "本地") + " || 行为 " + e.data.name + " 执行超时 (超时阈值: " + e.timeoutDuration + "ms, 实际执行: " + n.toFixed(0) + "ms),start: " + i.toFixed(0) + "ms, end: " + r.toFixed(0) + "ms, duration: " + u.toFixed(0) + "ms";
    DDebugInfo.dot(p);
    null === (o = (t = e.behavior).onAbort) || void 0 === o || o.call(t);
    e.behavior.forceCleanup();
    this.onSingleBehaviorDone(e.data.name, e.key);
    e.callback({
      success: false,
      behaviorName: e.data.name,
      result: EBehaviorEnum.Fail,
      error: p,
      executionTime: n,
      executionType: EBehaviorExecutionType.Single
    });
  }
  abort() {
    this._isAborted = true;
    this._executionQueue.length;
    this._executionQueue = [];
    this._timeoutCheckers.forEach(function (e) {
      e.isCompleted = true;
    });
    this._currentExecutingBehaviors.size;
    this._currentExecutingBehaviors.forEach(function (e) {
      var t;
      null === (t = e.onAbort) || void 0 === t || t.call(e);
      e.forceCleanup();
    });
    this._currentExecutingBehaviors.clear();
    this._timeoutCheckers.clear();
    this._isExecuting = false;
    this._pendingBehaviorNames.clear();
  }
  reset() {
    this._timeoutCheckers.forEach(function (e) {
      e.isCompleted = true;
    });
    this._isAborted = false;
    this._executionQueue = [];
    this._currentExecutingBehaviors.clear();
    this._timeoutCheckers.clear();
    this._isExecuting = false;
    this._pendingBehaviorNames.clear();
  }
  setStopOnFailure(e) {
    this._stopOnFailure = e;
  }
  getStopOnFailure() {
    return this._stopOnFailure;
  }
  processQueue() {
    var t = this;
    if (this._isAborted) this._isExecuting = false;else if (0 !== this._executionQueue.length) {
      this._isExecuting = true;
      var o = this._executionQueue.shift();
      if (o) {
        GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
        Date.now();
        this.registerPendingNames(o.execution);
        this.executeExecution(o.execution, function (n) {
          Date.now();
          GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
          o.callback(n);
          t.processQueue();
        });
      } else this._isExecuting = false;
    } else {
      this._isExecuting = false;
      GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
    }
  }
  executeExecution(e, t) {
    var o;
    switch (e.type) {
      case EBehaviorExecutionType.Single:
        this.executeSingle(e.data, e.inputType, function (e) {
          t([e]);
        }, null !== (o = e.key) && void 0 !== o ? o : -1);
        break;
      case EBehaviorExecutionType.Serial:
        this.executeSerial(e.data, t);
        break;
      case EBehaviorExecutionType.Parallel:
        this.executeParallel(e.data, t);
        break;
      default:
        t([]);
    }
  }
  executeSingle(t, o, n, i = -1) {
    var r = this;
    if (this._isAborted) n({
      success: false,
      behaviorName: t.name,
      result: EBehaviorEnum.Abort,
      error: "Execution aborted",
      executionTime: 0,
      executionType: EBehaviorExecutionType.Single
    });else {
      var a = Date.now();
      GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
      var l = BehaviorFactory.getBehavior(t.name, this._gameType);
      if (l) {
        var p = null,
          f = null;
        try {
          (p = new l()).init(this._context, t.name);
          this._currentExecutingBehaviors.add(p);
          var d = p.getTimeout();
          f = {
            elapsedTime: 0,
            timeoutDuration: d,
            behavior: p,
            data: t,
            isCompleted: false,
            callback: n,
            startTimeForLog: a,
            key: i
          };
          d > 0 && this._timeoutCheckers.set(p, f);
          p.execute(t, function (o) {
            if (f.isCompleted) GameBehaviorParser.CONST_SHOW_DEBUG_INFO;else {
              f.isCompleted = true;
              r._timeoutCheckers.delete(p);
              r._currentExecutingBehaviors.delete(p);
              var l = f.elapsedTime > 0 ? f.elapsedTime : Date.now() - a,
                u = o === EBehaviorEnum.Success;
              GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
              r.onSingleBehaviorDone(t.name, i);
              n({
                success: u,
                behaviorName: t.name,
                result: o,
                executionTime: l,
                executionType: EBehaviorExecutionType.Single
              });
            }
          });
        } catch (y) {
          f && (f.isCompleted = true);
          if (p) {
            this._timeoutCheckers.delete(p);
            this._currentExecutingBehaviors.delete(p);
            p.forceCleanup();
          }
          var h = Date.now() - a;
          this.onSingleBehaviorDone(t.name, i);
          console.error("[GameBehaviorParser] 行为 " + t.name + " 执行异常:" + (null == y ? void 0 : y.message) + ",stack:" + (null == y ? void 0 : y.stack));
          n({
            success: false,
            behaviorName: t.name,
            result: EBehaviorEnum.Fail,
            error: y.message || String(y),
            executionTime: h,
            executionType: EBehaviorExecutionType.Single
          });
        }
      } else {
        var y = "未找到行为: " + t.name;
        n({
          success: false,
          behaviorName: t.name,
          result: EBehaviorEnum.Fail,
          error: y,
          executionTime: Date.now() - a,
          executionType: EBehaviorExecutionType.Single
        });
      }
    }
  }
  executeSerial(t, o) {
    var n = this;
    GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
    var i = [],
      a = 0,
      l = function l() {
        if (a >= t.length) o(i);else {
          var e = t[a++];
          n.executeExecution(e, function (e) {
            i.push.apply(i, [...e]);
            if (e.some(function (e) {
              return !e.success;
            }) && n._stopOnFailure) {
              o(i);
            } else {
              l();
            }
          });
        }
      };
    l();
  }
  executeParallel(t, o) {
    var n = this;
    GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
    var i = [],
      a = 0,
      l = t.length;
    if (0 !== l) {
      t.forEach(function (e) {
        n.executeExecution(e, function (e) {
          i.push.apply(i, [...e]);
          ++a === l && o(i);
        });
      });
    } else {
      o([]);
    }
  }
  formatExecution(e) {
    var t = this;
    switch (e.type) {
      case EBehaviorExecutionType.Single:
        return e.data.name;
      case EBehaviorExecutionType.Serial:
        return "serial(" + e.data.map(function (e) {
          return t.formatExecution(e);
        }).join(", ") + ")";
      case EBehaviorExecutionType.Parallel:
        return "parallel(" + e.data.map(function (e) {
          return t.formatExecution(e);
        }).join(", ") + ")";
      default:
        return JSON.stringify(e);
    }
  }
}