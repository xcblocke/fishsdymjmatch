"use strict";
cc._RF.push(module, '1a8b5pwH6BI/Ymo2nyqp1Ts', 'NodeStateAniBase');
// Scripts/base/NodeStateAniBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStateAniBase = exports.EBehaviorState = void 0;
exports.EBehaviorState = {
    Idle: "idle",
    Entering: "entering",
    Entered: "entered",
    Exiting: "exiting",
    Exited: "exited"
};
var NodeStateAniBase = /** @class */ (function () {
    function NodeStateAniBase(e, t) {
        this._behaviorState = exports.EBehaviorState.Idle;
        this._node = null;
        this._nodeAniState = null;
        this.behaviorState = exports.EBehaviorState.Idle;
        this._onEnteredCallBack = null;
        this._onExitedCallBack = null;
        this._node = e;
        this._nodeAniState = t;
    }
    Object.defineProperty(NodeStateAniBase.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (e) {
            this._node !== e && (this._node = e);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeStateAniBase.prototype, "nodeAniState", {
        get: function () {
            return this._nodeAniState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeStateAniBase.prototype, "behaviorState", {
        get: function () {
            return this._behaviorState;
        },
        set: function (t) {
            if (this._behaviorState !== t) {
                NodeStateAniBase.CONST_SHOW_DEBUG_INFO;
                this._behaviorState = t;
            }
        },
        enumerable: false,
        configurable: true
    });
    NodeStateAniBase.prototype.onEnterStart = function () {
        this.behaviorState = exports.EBehaviorState.Entering;
    };
    NodeStateAniBase.prototype.onEnterEnd = function () {
        var e;
        this.behaviorState = exports.EBehaviorState.Entered;
        null === (e = this._onEnteredCallBack) || void 0 === e || e.call(this);
    };
    NodeStateAniBase.prototype.onExitStart = function () {
        this.behaviorState = exports.EBehaviorState.Exiting;
    };
    NodeStateAniBase.prototype.onExit = function () {
        this.behaviorState = exports.EBehaviorState.Exited;
        this.behaviorState = exports.EBehaviorState.Idle;
    };
    NodeStateAniBase.prototype.onExitEnd = function () {
        var e;
        this.behaviorState = exports.EBehaviorState.Exited;
        null === (e = this._onExitedCallBack) || void 0 === e || e.call(this);
        this.behaviorState = exports.EBehaviorState.Idle;
    };
    NodeStateAniBase.prototype.onEnter = function () {
        this.behaviorState = exports.EBehaviorState.Entered;
    };
    NodeStateAniBase.prototype.reset = function () {
        this.behaviorState = exports.EBehaviorState.Idle;
    };
    NodeStateAniBase.prototype.playAni = function (e, t) {
        this._onEnteredCallBack = t;
        switch (this.behaviorState) {
            case exports.EBehaviorState.Idle:
                break;
            case exports.EBehaviorState.Entered:
            case exports.EBehaviorState.Entering:
                return;
            case exports.EBehaviorState.Exiting:
                this.exit(e);
        }
        this.enterStart(e);
    };
    NodeStateAniBase.prototype.exitAni = function (e, t) {
        this._onExitedCallBack = t;
        switch (this.behaviorState) {
            case exports.EBehaviorState.Idle:
            case exports.EBehaviorState.Exiting:
            case exports.EBehaviorState.Exited:
                return;
            case exports.EBehaviorState.Entering:
                this.enter(e);
                break;
            case exports.EBehaviorState.Entered:
        }
        this.exitStart(e);
    };
    NodeStateAniBase.prototype.forceEnter = function (e) {
        switch (this.behaviorState) {
            case exports.EBehaviorState.Idle:
            case exports.EBehaviorState.Entering:
            case exports.EBehaviorState.Entered:
                this.enter(e);
                break;
            case exports.EBehaviorState.Exiting:
                this.exit(e);
                this.enter(e);
        }
    };
    NodeStateAniBase.prototype.forceExit = function (e) {
        switch (this.behaviorState) {
            case exports.EBehaviorState.Idle:
                this.exit();
                break;
            case exports.EBehaviorState.Entering:
                this.enter(e);
                this.exit(e);
                break;
            case exports.EBehaviorState.Exiting:
            case exports.EBehaviorState.Entered:
                this.exit(e);
        }
    };
    NodeStateAniBase.prototype.playAniForce = function (e, t) {
        this._onEnteredCallBack = t;
        this.forceExit(e);
        this.playAni(e, t);
    };
    NodeStateAniBase.prototype.exitAniForce = function (e, t) {
        this._onExitedCallBack = t;
        this.forceEnter(e);
        this.exitAni(e, t);
    };
    NodeStateAniBase.prototype.forceEnterWithParam = function (e, t) {
        this._onEnteredCallBack = t;
        this.enterStart(e);
    };
    NodeStateAniBase.prototype.enter = function (e) {
        this.onEnter(e);
    };
    NodeStateAniBase.prototype.exit = function (e) {
        this.onExit(e);
    };
    NodeStateAniBase.prototype.enterStart = function (e) {
        this.onEnterStart(e);
    };
    NodeStateAniBase.prototype.exitStart = function (e) {
        this.onExitStart(e);
    };
    NodeStateAniBase.prototype.applyImmediate = function () { };
    NodeStateAniBase.CONST_SHOW_DEBUG_INFO = false;
    return NodeStateAniBase;
}());
exports.NodeStateAniBase = NodeStateAniBase;

cc._RF.pop();