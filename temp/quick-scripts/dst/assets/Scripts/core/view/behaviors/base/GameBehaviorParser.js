
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/behaviors/base/GameBehaviorParser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66719N3Q1tDGbzrBBzRGzug', 'GameBehaviorParser');
// Scripts/core/view/behaviors/base/GameBehaviorParser.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBehaviorParser = void 0;
var DDebugInfo_1 = require("../../../../gamePlay/dot/DDebugInfo");
var LoginModel_1 = require("../../../../gamePlay/login/model/LoginModel");
var BehaviorsInterface_1 = require("../../../../simulator/constant/BehaviorsInterface");
var GameInputEnum_1 = require("../../../../simulator/constant/GameInputEnum");
var BehaviorFactory_1 = require("../../../../BehaviorFactory");
var GameBehaviorParser = /** @class */ (function () {
    function GameBehaviorParser(e, t) {
        this._executionQueue = [];
        this._isExecuting = false;
        this._isAborted = false;
        this._currentExecutingBehaviors = new Set();
        this._stopOnFailure = false;
        this._timeoutCheckers = new Map();
        this._pendingBehaviorNames = new Map();
        this._progressCallback = null;
        this._gameType = null;
        this._context = null;
        this._gameType = e;
        this._context = t;
    }
    GameBehaviorParser.prototype.setProgressCallback = function (e) {
        this._progressCallback = e;
    };
    GameBehaviorParser.prototype.collectBehaviorNames = function (e) {
        var t, o;
        switch (e.type) {
            case BehaviorsInterface_1.EBehaviorExecutionType.Single:
                return [e.data.name];
            case BehaviorsInterface_1.EBehaviorExecutionType.Serial:
            case BehaviorsInterface_1.EBehaviorExecutionType.Parallel:
                var i = [];
                try {
                    for (var a = __values(e.data), l = a.next(); !l.done; l = a.next()) {
                        var c = l.value;
                        i.push.apply(i, __spreadArrays(this.collectBehaviorNames(c)));
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        l && !l.done && (o = a.return) && o.call(a);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                return i;
            default:
                return [];
        }
    };
    GameBehaviorParser.prototype.registerPendingNames = function (e) {
        var t, o, i, r, a = null !== (i = e.key) && void 0 !== i ? i : -1, l = this.collectBehaviorNames(e), s = this._pendingBehaviorNames.get(a);
        if (!s) {
            s = new Map();
            this._pendingBehaviorNames.set(a, s);
        }
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                s.set(p, (null !== (r = s.get(p)) && void 0 !== r ? r : 0) + 1);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    GameBehaviorParser.prototype.onSingleBehaviorDone = function (e, t) {
        var o = this._pendingBehaviorNames.get(t);
        if (o) {
            var n = o.get(e);
            void 0 !== n && (n <= 1 ? o.delete(e) : o.set(e, n - 1));
            0 === o.size && this._pendingBehaviorNames.delete(t);
        }
        if (this._progressCallback) {
            var i = [];
            null == o || o.forEach(function (e, t) {
                for (var o = 0; o < e; o++)
                    i.push(t);
            });
            this._progressCallback(i, t);
        }
    };
    GameBehaviorParser.prototype.parseSequence = function (e, t) {
        this._executionQueue.push({
            execution: e,
            callback: t
        });
        this._isExecuting || this.processQueue();
    };
    GameBehaviorParser.prototype.parse = function (t, o) {
        GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
        Date.now();
        this.registerPendingNames(t);
        this.executeExecution(t, function (t) {
            Date.now();
            GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
            o(t);
        });
    };
    GameBehaviorParser.prototype.update = function (e) {
        var t = this;
        if (0 !== this._timeoutCheckers.size && !(e > 1)) {
            var o = Math.min(e, 0.1), n = [];
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
    };
    GameBehaviorParser.prototype.handleTimeout = function (e) {
        var t, o;
        e.isCompleted = true;
        this._timeoutCheckers.delete(e.behavior);
        this._currentExecutingBehaviors.delete(e.behavior);
        var n = e.elapsedTime, i = e.startTimeForLog, r = Date.now(), u = r - i, p = (LoginModel_1.default.getInstance().version || "") + " || " + (LoginModel_1.default.getInstance().isOnline() ? "线上" : "本地") + " || 行为 " + e.data.name + " 执行超时 (超时阈值: " + e.timeoutDuration + "ms, 实际执行: " + n.toFixed(0) + "ms),start: " + i.toFixed(0) + "ms, end: " + r.toFixed(0) + "ms, duration: " + u.toFixed(0) + "ms";
        DDebugInfo_1.DDebugInfo.dot(p);
        null === (o = (t = e.behavior).onAbort) || void 0 === o || o.call(t);
        e.behavior.forceCleanup();
        this.onSingleBehaviorDone(e.data.name, e.key);
        e.callback({
            success: false,
            behaviorName: e.data.name,
            result: GameInputEnum_1.EBehaviorEnum.Fail,
            error: p,
            executionTime: n,
            executionType: BehaviorsInterface_1.EBehaviorExecutionType.Single
        });
    };
    GameBehaviorParser.prototype.abort = function () {
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
    };
    GameBehaviorParser.prototype.reset = function () {
        this._timeoutCheckers.forEach(function (e) {
            e.isCompleted = true;
        });
        this._isAborted = false;
        this._executionQueue = [];
        this._currentExecutingBehaviors.clear();
        this._timeoutCheckers.clear();
        this._isExecuting = false;
        this._pendingBehaviorNames.clear();
    };
    GameBehaviorParser.prototype.setStopOnFailure = function (e) {
        this._stopOnFailure = e;
    };
    GameBehaviorParser.prototype.getStopOnFailure = function () {
        return this._stopOnFailure;
    };
    GameBehaviorParser.prototype.processQueue = function () {
        var t = this;
        if (this._isAborted)
            this._isExecuting = false;
        else if (0 !== this._executionQueue.length) {
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
            }
            else
                this._isExecuting = false;
        }
        else {
            this._isExecuting = false;
            GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
        }
    };
    GameBehaviorParser.prototype.executeExecution = function (e, t) {
        var o;
        switch (e.type) {
            case BehaviorsInterface_1.EBehaviorExecutionType.Single:
                this.executeSingle(e.data, e.inputType, function (e) {
                    t([e]);
                }, null !== (o = e.key) && void 0 !== o ? o : -1);
                break;
            case BehaviorsInterface_1.EBehaviorExecutionType.Serial:
                this.executeSerial(e.data, t);
                break;
            case BehaviorsInterface_1.EBehaviorExecutionType.Parallel:
                this.executeParallel(e.data, t);
                break;
            default:
                t([]);
        }
    };
    GameBehaviorParser.prototype.executeSingle = function (t, o, n, i) {
        if (i === void 0) { i = -1; }
        var r = this;
        if (this._isAborted)
            n({
                success: false,
                behaviorName: t.name,
                result: GameInputEnum_1.EBehaviorEnum.Abort,
                error: "Execution aborted",
                executionTime: 0,
                executionType: BehaviorsInterface_1.EBehaviorExecutionType.Single
            });
        else {
            var a = Date.now();
            GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
            var l = BehaviorFactory_1.BehaviorFactory.getBehavior(t.name, this._gameType);
            if (l) {
                var p = null, f = null;
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
                        if (f.isCompleted)
                            GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
                        else {
                            f.isCompleted = true;
                            r._timeoutCheckers.delete(p);
                            r._currentExecutingBehaviors.delete(p);
                            var l = f.elapsedTime > 0 ? f.elapsedTime : Date.now() - a, u = o === GameInputEnum_1.EBehaviorEnum.Success;
                            GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
                            r.onSingleBehaviorDone(t.name, i);
                            n({
                                success: u,
                                behaviorName: t.name,
                                result: o,
                                executionTime: l,
                                executionType: BehaviorsInterface_1.EBehaviorExecutionType.Single
                            });
                        }
                    });
                }
                catch (y) {
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
                        result: GameInputEnum_1.EBehaviorEnum.Fail,
                        error: y.message || String(y),
                        executionTime: h,
                        executionType: BehaviorsInterface_1.EBehaviorExecutionType.Single
                    });
                }
            }
            else {
                var y = "未找到行为: " + t.name;
                n({
                    success: false,
                    behaviorName: t.name,
                    result: GameInputEnum_1.EBehaviorEnum.Fail,
                    error: y,
                    executionTime: Date.now() - a,
                    executionType: BehaviorsInterface_1.EBehaviorExecutionType.Single
                });
            }
        }
    };
    GameBehaviorParser.prototype.executeSerial = function (t, o) {
        var n = this;
        GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
        var i = [], a = 0, l = function l() {
            if (a >= t.length)
                o(i);
            else {
                var e = t[a++];
                n.executeExecution(e, function (e) {
                    i.push.apply(i, __spreadArrays(e));
                    if (e.some(function (e) {
                        return !e.success;
                    }) && n._stopOnFailure) {
                        o(i);
                    }
                    else {
                        l();
                    }
                });
            }
        };
        l();
    };
    GameBehaviorParser.prototype.executeParallel = function (t, o) {
        var n = this;
        GameBehaviorParser.CONST_SHOW_DEBUG_INFO;
        var i = [], a = 0, l = t.length;
        if (0 !== l) {
            t.forEach(function (e) {
                n.executeExecution(e, function (e) {
                    i.push.apply(i, __spreadArrays(e));
                    ++a === l && o(i);
                });
            });
        }
        else {
            o([]);
        }
    };
    GameBehaviorParser.prototype.formatExecution = function (e) {
        var t = this;
        switch (e.type) {
            case BehaviorsInterface_1.EBehaviorExecutionType.Single:
                return e.data.name;
            case BehaviorsInterface_1.EBehaviorExecutionType.Serial:
                return "serial(" + e.data.map(function (e) {
                    return t.formatExecution(e);
                }).join(", ") + ")";
            case BehaviorsInterface_1.EBehaviorExecutionType.Parallel:
                return "parallel(" + e.data.map(function (e) {
                    return t.formatExecution(e);
                }).join(", ") + ")";
            default:
                return JSON.stringify(e);
        }
    };
    GameBehaviorParser.CONST_SHOW_DEBUG_INFO = false;
    return GameBehaviorParser;
}());
exports.GameBehaviorParser = GameBehaviorParser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9iZWhhdmlvcnMvYmFzZS9HYW1lQmVoYXZpb3JQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBaUU7QUFDakUsMEVBQXFFO0FBQ3JFLHdGQUEyRjtBQUMzRiw4RUFBNkU7QUFDN0UsK0RBQThEO0FBQzlEO0lBWUUsNEJBQVksQ0FBQyxFQUFFLENBQUM7UUFYaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQiwrQkFBMEIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDN0IsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELGdEQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELGlEQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNkLEtBQUssMkNBQXNCLENBQUMsTUFBTTtnQkFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSywyQ0FBc0IsQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSywy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Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDZCxLQUFLLDJDQUFzQixDQUFDLE1BQU07Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsS0FBSywyQ0FBc0IsQ0FBQyxNQUFNO2dCQUNoQyxPQUFPLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFLLDJDQUFzQixDQUFDLFFBQVE7Z0JBQ2xDLE9BQU8sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3RCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUEzVk0sd0NBQXFCLEdBQUcsS0FBSyxDQUFDO0lBNFZ2Qyx5QkFBQztDQXZXRCxBQXVXQyxJQUFBO0FBdldZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEREZWJ1Z0luZm8gfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lUGxheS9kb3QvRERlYnVnSW5mbyc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCB7IEVCZWhhdmlvckV4ZWN1dGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvQmVoYXZpb3JzSW50ZXJmYWNlJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi8uLi8uLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9CZWhhdmlvckZhY3RvcnknO1xuZXhwb3J0IGNsYXNzIEdhbWVCZWhhdmlvclBhcnNlciB7XG4gIF9leGVjdXRpb25RdWV1ZSA9IFtdO1xuICBfaXNFeGVjdXRpbmcgPSBmYWxzZTtcbiAgX2lzQWJvcnRlZCA9IGZhbHNlO1xuICBfY3VycmVudEV4ZWN1dGluZ0JlaGF2aW9ycyA9IG5ldyBTZXQoKTtcbiAgX3N0b3BPbkZhaWx1cmUgPSBmYWxzZTtcbiAgX3RpbWVvdXRDaGVja2VycyA9IG5ldyBNYXAoKTtcbiAgX3BlbmRpbmdCZWhhdmlvck5hbWVzID0gbmV3IE1hcCgpO1xuICBfcHJvZ3Jlc3NDYWxsYmFjayA9IG51bGw7XG4gIF9nYW1lVHlwZSA9IG51bGw7XG4gIF9jb250ZXh0ID0gbnVsbDtcbiAgc3RhdGljIENPTlNUX1NIT1dfREVCVUdfSU5GTyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgdGhpcy5fZ2FtZVR5cGUgPSBlO1xuICAgIHRoaXMuX2NvbnRleHQgPSB0O1xuICB9XG4gIHNldFByb2dyZXNzQ2FsbGJhY2soZSkge1xuICAgIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2sgPSBlO1xuICB9XG4gIGNvbGxlY3RCZWhhdmlvck5hbWVzKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSBFQmVoYXZpb3JFeGVjdXRpb25UeXBlLlNpbmdsZTpcbiAgICAgICAgcmV0dXJuIFtlLmRhdGEubmFtZV07XG4gICAgICBjYXNlIEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuU2VyaWFsOlxuICAgICAgY2FzZSBFQmVoYXZpb3JFeGVjdXRpb25UeXBlLlBhcmFsbGVsOlxuICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhlLmRhdGEpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGMgPSBsLnZhbHVlO1xuICAgICAgICAgICAgaS5wdXNoLmFwcGx5KGksIFsuLi50aGlzLmNvbGxlY3RCZWhhdmlvck5hbWVzKGMpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gYS5yZXR1cm4pICYmIG8uY2FsbChhKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuICByZWdpc3RlclBlbmRpbmdOYW1lcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBhID0gbnVsbCAhPT0gKGkgPSBlLmtleSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IC0xLFxuICAgICAgbCA9IHRoaXMuY29sbGVjdEJlaGF2aW9yTmFtZXMoZSksXG4gICAgICBzID0gdGhpcy5fcGVuZGluZ0JlaGF2aW9yTmFtZXMuZ2V0KGEpO1xuICAgIGlmICghcykge1xuICAgICAgcyA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX3BlbmRpbmdCZWhhdmlvck5hbWVzLnNldChhLCBzKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhsKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICBzLnNldChwLCAobnVsbCAhPT0gKHIgPSBzLmdldChwKSkgJiYgdm9pZCAwICE9PSByID8gciA6IDApICsgMSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25TaW5nbGVCZWhhdmlvckRvbmUoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fcGVuZGluZ0JlaGF2aW9yTmFtZXMuZ2V0KHQpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgbiA9IG8uZ2V0KGUpO1xuICAgICAgdm9pZCAwICE9PSBuICYmIChuIDw9IDEgPyBvLmRlbGV0ZShlKSA6IG8uc2V0KGUsIG4gLSAxKSk7XG4gICAgICAwID09PSBvLnNpemUgJiYgdGhpcy5fcGVuZGluZ0JlaGF2aW9yTmFtZXMuZGVsZXRlKHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvZ3Jlc3NDYWxsYmFjaykge1xuICAgICAgdmFyIGkgPSBbXTtcbiAgICAgIG51bGwgPT0gbyB8fCBvLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlOyBvKyspIGkucHVzaCh0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayhpLCB0KTtcbiAgICB9XG4gIH1cbiAgcGFyc2VTZXF1ZW5jZShlLCB0KSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUXVldWUucHVzaCh7XG4gICAgICBleGVjdXRpb246IGUsXG4gICAgICBjYWxsYmFjazogdFxuICAgIH0pO1xuICAgIHRoaXMuX2lzRXhlY3V0aW5nIHx8IHRoaXMucHJvY2Vzc1F1ZXVlKCk7XG4gIH1cbiAgcGFyc2UodCwgbykge1xuICAgIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87XG4gICAgRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlZ2lzdGVyUGVuZGluZ05hbWVzKHQpO1xuICAgIHRoaXMuZXhlY3V0ZUV4ZWN1dGlvbih0LCBmdW5jdGlvbiAodCkge1xuICAgICAgRGF0ZS5ub3coKTtcbiAgICAgIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87XG4gICAgICBvKHQpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICgwICE9PSB0aGlzLl90aW1lb3V0Q2hlY2tlcnMuc2l6ZSAmJiAhKGUgPiAxKSkge1xuICAgICAgdmFyIG8gPSBNYXRoLm1pbihlLCAwLjEpLFxuICAgICAgICBuID0gW107XG4gICAgICB0aGlzLl90aW1lb3V0Q2hlY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWUuaXNDb21wbGV0ZWQgJiYgZS50aW1lb3V0RHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgZS5lbGFwc2VkVGltZSArPSAxMDAwICogbztcbiAgICAgICAgICBlLmVsYXBzZWRUaW1lID49IGUudGltZW91dER1cmF0aW9uICYmIG4ucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5oYW5kbGVUaW1lb3V0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVRpbWVvdXQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGUuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3RpbWVvdXRDaGVja2Vycy5kZWxldGUoZS5iZWhhdmlvcik7XG4gICAgdGhpcy5fY3VycmVudEV4ZWN1dGluZ0JlaGF2aW9ycy5kZWxldGUoZS5iZWhhdmlvcik7XG4gICAgdmFyIG4gPSBlLmVsYXBzZWRUaW1lLFxuICAgICAgaSA9IGUuc3RhcnRUaW1lRm9yTG9nLFxuICAgICAgciA9IERhdGUubm93KCksXG4gICAgICB1ID0gciAtIGksXG4gICAgICBwID0gKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS52ZXJzaW9uIHx8IFwiXCIpICsgXCIgfHwgXCIgKyAoTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmlzT25saW5lKCkgPyBcIue6v+S4ilwiIDogXCLmnKzlnLBcIikgKyBcIiB8fCDooYzkuLogXCIgKyBlLmRhdGEubmFtZSArIFwiIOaJp+ihjOi2heaXtiAo6LaF5pe26ZiI5YC8OiBcIiArIGUudGltZW91dER1cmF0aW9uICsgXCJtcywg5a6e6ZmF5omn6KGMOiBcIiArIG4udG9GaXhlZCgwKSArIFwibXMpLHN0YXJ0OiBcIiArIGkudG9GaXhlZCgwKSArIFwibXMsIGVuZDogXCIgKyByLnRvRml4ZWQoMCkgKyBcIm1zLCBkdXJhdGlvbjogXCIgKyB1LnRvRml4ZWQoMCkgKyBcIm1zXCI7XG4gICAgRERlYnVnSW5mby5kb3QocCk7XG4gICAgbnVsbCA9PT0gKG8gPSAodCA9IGUuYmVoYXZpb3IpLm9uQWJvcnQpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNhbGwodCk7XG4gICAgZS5iZWhhdmlvci5mb3JjZUNsZWFudXAoKTtcbiAgICB0aGlzLm9uU2luZ2xlQmVoYXZpb3JEb25lKGUuZGF0YS5uYW1lLCBlLmtleSk7XG4gICAgZS5jYWxsYmFjayh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGJlaGF2aW9yTmFtZTogZS5kYXRhLm5hbWUsXG4gICAgICByZXN1bHQ6IEVCZWhhdmlvckVudW0uRmFpbCxcbiAgICAgIGVycm9yOiBwLFxuICAgICAgZXhlY3V0aW9uVGltZTogbixcbiAgICAgIGV4ZWN1dGlvblR5cGU6IEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuU2luZ2xlXG4gICAgfSk7XG4gIH1cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5faXNBYm9ydGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9leGVjdXRpb25RdWV1ZS5sZW5ndGg7XG4gICAgdGhpcy5fZXhlY3V0aW9uUXVldWUgPSBbXTtcbiAgICB0aGlzLl90aW1lb3V0Q2hlY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5fY3VycmVudEV4ZWN1dGluZ0JlaGF2aW9ycy5zaXplO1xuICAgIHRoaXMuX2N1cnJlbnRFeGVjdXRpbmdCZWhhdmlvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IGUub25BYm9ydCkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2FsbChlKTtcbiAgICAgIGUuZm9yY2VDbGVhbnVwKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY3VycmVudEV4ZWN1dGluZ0JlaGF2aW9ycy5jbGVhcigpO1xuICAgIHRoaXMuX3RpbWVvdXRDaGVja2Vycy5jbGVhcigpO1xuICAgIHRoaXMuX2lzRXhlY3V0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcGVuZGluZ0JlaGF2aW9yTmFtZXMuY2xlYXIoKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLl90aW1lb3V0Q2hlY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5faXNBYm9ydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXhlY3V0aW9uUXVldWUgPSBbXTtcbiAgICB0aGlzLl9jdXJyZW50RXhlY3V0aW5nQmVoYXZpb3JzLmNsZWFyKCk7XG4gICAgdGhpcy5fdGltZW91dENoZWNrZXJzLmNsZWFyKCk7XG4gICAgdGhpcy5faXNFeGVjdXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nQmVoYXZpb3JOYW1lcy5jbGVhcigpO1xuICB9XG4gIHNldFN0b3BPbkZhaWx1cmUoZSkge1xuICAgIHRoaXMuX3N0b3BPbkZhaWx1cmUgPSBlO1xuICB9XG4gIGdldFN0b3BPbkZhaWx1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3BPbkZhaWx1cmU7XG4gIH1cbiAgcHJvY2Vzc1F1ZXVlKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5faXNBYm9ydGVkKSB0aGlzLl9pc0V4ZWN1dGluZyA9IGZhbHNlO2Vsc2UgaWYgKDAgIT09IHRoaXMuX2V4ZWN1dGlvblF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5faXNFeGVjdXRpbmcgPSB0cnVlO1xuICAgICAgdmFyIG8gPSB0aGlzLl9leGVjdXRpb25RdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgR2FtZUJlaGF2aW9yUGFyc2VyLkNPTlNUX1NIT1dfREVCVUdfSU5GTztcbiAgICAgICAgRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclBlbmRpbmdOYW1lcyhvLmV4ZWN1dGlvbik7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUV4ZWN1dGlvbihvLmV4ZWN1dGlvbiwgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICBEYXRlLm5vdygpO1xuICAgICAgICAgIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87XG4gICAgICAgICAgby5jYWxsYmFjayhuKTtcbiAgICAgICAgICB0LnByb2Nlc3NRdWV1ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0aGlzLl9pc0V4ZWN1dGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc0V4ZWN1dGluZyA9IGZhbHNlO1xuICAgICAgR2FtZUJlaGF2aW9yUGFyc2VyLkNPTlNUX1NIT1dfREVCVUdfSU5GTztcbiAgICB9XG4gIH1cbiAgZXhlY3V0ZUV4ZWN1dGlvbihlLCB0KSB7XG4gICAgdmFyIG87XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TaW5nbGU6XG4gICAgICAgIHRoaXMuZXhlY3V0ZVNpbmdsZShlLmRhdGEsIGUuaW5wdXRUeXBlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHQoW2VdKTtcbiAgICAgICAgfSwgbnVsbCAhPT0gKG8gPSBlLmtleSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuU2VyaWFsOlxuICAgICAgICB0aGlzLmV4ZWN1dGVTZXJpYWwoZS5kYXRhLCB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuUGFyYWxsZWw6XG4gICAgICAgIHRoaXMuZXhlY3V0ZVBhcmFsbGVsKGUuZGF0YSwgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdChbXSk7XG4gICAgfVxuICB9XG4gIGV4ZWN1dGVTaW5nbGUodCwgbywgbiwgaSA9IC0xKSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9pc0Fib3J0ZWQpIG4oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBiZWhhdmlvck5hbWU6IHQubmFtZSxcbiAgICAgIHJlc3VsdDogRUJlaGF2aW9yRW51bS5BYm9ydCxcbiAgICAgIGVycm9yOiBcIkV4ZWN1dGlvbiBhYm9ydGVkXCIsXG4gICAgICBleGVjdXRpb25UaW1lOiAwLFxuICAgICAgZXhlY3V0aW9uVHlwZTogRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TaW5nbGVcbiAgICB9KTtlbHNlIHtcbiAgICAgIHZhciBhID0gRGF0ZS5ub3coKTtcbiAgICAgIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87XG4gICAgICB2YXIgbCA9IEJlaGF2aW9yRmFjdG9yeS5nZXRCZWhhdmlvcih0Lm5hbWUsIHRoaXMuX2dhbWVUeXBlKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBwID0gbnVsbCxcbiAgICAgICAgICBmID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAocCA9IG5ldyBsKCkpLmluaXQodGhpcy5fY29udGV4dCwgdC5uYW1lKTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50RXhlY3V0aW5nQmVoYXZpb3JzLmFkZChwKTtcbiAgICAgICAgICB2YXIgZCA9IHAuZ2V0VGltZW91dCgpO1xuICAgICAgICAgIGYgPSB7XG4gICAgICAgICAgICBlbGFwc2VkVGltZTogMCxcbiAgICAgICAgICAgIHRpbWVvdXREdXJhdGlvbjogZCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBwLFxuICAgICAgICAgICAgZGF0YTogdCxcbiAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBuLFxuICAgICAgICAgICAgc3RhcnRUaW1lRm9yTG9nOiBhLFxuICAgICAgICAgICAga2V5OiBpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBkID4gMCAmJiB0aGlzLl90aW1lb3V0Q2hlY2tlcnMuc2V0KHAsIGYpO1xuICAgICAgICAgIHAuZXhlY3V0ZSh0LCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgaWYgKGYuaXNDb21wbGV0ZWQpIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87ZWxzZSB7XG4gICAgICAgICAgICAgIGYuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByLl90aW1lb3V0Q2hlY2tlcnMuZGVsZXRlKHApO1xuICAgICAgICAgICAgICByLl9jdXJyZW50RXhlY3V0aW5nQmVoYXZpb3JzLmRlbGV0ZShwKTtcbiAgICAgICAgICAgICAgdmFyIGwgPSBmLmVsYXBzZWRUaW1lID4gMCA/IGYuZWxhcHNlZFRpbWUgOiBEYXRlLm5vdygpIC0gYSxcbiAgICAgICAgICAgICAgICB1ID0gbyA9PT0gRUJlaGF2aW9yRW51bS5TdWNjZXNzO1xuICAgICAgICAgICAgICBHYW1lQmVoYXZpb3JQYXJzZXIuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICAgICAgICAgICAgICByLm9uU2luZ2xlQmVoYXZpb3JEb25lKHQubmFtZSwgaSk7XG4gICAgICAgICAgICAgIG4oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHUsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3JOYW1lOiB0Lm5hbWUsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBvLFxuICAgICAgICAgICAgICAgIGV4ZWN1dGlvblRpbWU6IGwsXG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uVHlwZTogRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TaW5nbGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHkpIHtcbiAgICAgICAgICBmICYmIChmLmlzQ29tcGxldGVkID0gdHJ1ZSk7XG4gICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRDaGVja2Vycy5kZWxldGUocCk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RXhlY3V0aW5nQmVoYXZpb3JzLmRlbGV0ZShwKTtcbiAgICAgICAgICAgIHAuZm9yY2VDbGVhbnVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBoID0gRGF0ZS5ub3coKSAtIGE7XG4gICAgICAgICAgdGhpcy5vblNpbmdsZUJlaGF2aW9yRG9uZSh0Lm5hbWUsIGkpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbR2FtZUJlaGF2aW9yUGFyc2VyXSDooYzkuLogXCIgKyB0Lm5hbWUgKyBcIiDmiafooYzlvILluLg6XCIgKyAobnVsbCA9PSB5ID8gdm9pZCAwIDogeS5tZXNzYWdlKSArIFwiLHN0YWNrOlwiICsgKG51bGwgPT0geSA/IHZvaWQgMCA6IHkuc3RhY2spKTtcbiAgICAgICAgICBuKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgYmVoYXZpb3JOYW1lOiB0Lm5hbWUsXG4gICAgICAgICAgICByZXN1bHQ6IEVCZWhhdmlvckVudW0uRmFpbCxcbiAgICAgICAgICAgIGVycm9yOiB5Lm1lc3NhZ2UgfHwgU3RyaW5nKHkpLFxuICAgICAgICAgICAgZXhlY3V0aW9uVGltZTogaCxcbiAgICAgICAgICAgIGV4ZWN1dGlvblR5cGU6IEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuU2luZ2xlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gXCLmnKrmib7liLDooYzkuLo6IFwiICsgdC5uYW1lO1xuICAgICAgICBuKHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBiZWhhdmlvck5hbWU6IHQubmFtZSxcbiAgICAgICAgICByZXN1bHQ6IEVCZWhhdmlvckVudW0uRmFpbCxcbiAgICAgICAgICBlcnJvcjogeSxcbiAgICAgICAgICBleGVjdXRpb25UaW1lOiBEYXRlLm5vdygpIC0gYSxcbiAgICAgICAgICBleGVjdXRpb25UeXBlOiBFQmVoYXZpb3JFeGVjdXRpb25UeXBlLlNpbmdsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXhlY3V0ZVNlcmlhbCh0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIEdhbWVCZWhhdmlvclBhcnNlci5DT05TVF9TSE9XX0RFQlVHX0lORk87XG4gICAgdmFyIGkgPSBbXSxcbiAgICAgIGEgPSAwLFxuICAgICAgbCA9IGZ1bmN0aW9uIGwoKSB7XG4gICAgICAgIGlmIChhID49IHQubGVuZ3RoKSBvKGkpO2Vsc2Uge1xuICAgICAgICAgIHZhciBlID0gdFthKytdO1xuICAgICAgICAgIG4uZXhlY3V0ZUV4ZWN1dGlvbihlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaS5wdXNoLmFwcGx5KGksIFsuLi5lXSk7XG4gICAgICAgICAgICBpZiAoZS5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhZS5zdWNjZXNzO1xuICAgICAgICAgICAgfSkgJiYgbi5fc3RvcE9uRmFpbHVyZSkge1xuICAgICAgICAgICAgICBvKGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIGwoKTtcbiAgfVxuICBleGVjdXRlUGFyYWxsZWwodCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBHYW1lQmVoYXZpb3JQYXJzZXIuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICAgIHZhciBpID0gW10sXG4gICAgICBhID0gMCxcbiAgICAgIGwgPSB0Lmxlbmd0aDtcbiAgICBpZiAoMCAhPT0gbCkge1xuICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG4uZXhlY3V0ZUV4ZWN1dGlvbihlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGkucHVzaC5hcHBseShpLCBbLi4uZV0pO1xuICAgICAgICAgICsrYSA9PT0gbCAmJiBvKGkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvKFtdKTtcbiAgICB9XG4gIH1cbiAgZm9ybWF0RXhlY3V0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TaW5nbGU6XG4gICAgICAgIHJldHVybiBlLmRhdGEubmFtZTtcbiAgICAgIGNhc2UgRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TZXJpYWw6XG4gICAgICAgIHJldHVybiBcInNlcmlhbChcIiArIGUuZGF0YS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gdC5mb3JtYXRFeGVjdXRpb24oZSk7XG4gICAgICAgIH0pLmpvaW4oXCIsIFwiKSArIFwiKVwiO1xuICAgICAgY2FzZSBFQmVoYXZpb3JFeGVjdXRpb25UeXBlLlBhcmFsbGVsOlxuICAgICAgICByZXR1cm4gXCJwYXJhbGxlbChcIiArIGUuZGF0YS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gdC5mb3JtYXRFeGVjdXRpb24oZSk7XG4gICAgICAgIH0pLmpvaW4oXCIsIFwiKSArIFwiKVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpO1xuICAgIH1cbiAgfVxufSJdfQ==