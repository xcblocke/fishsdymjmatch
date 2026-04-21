"use strict";
cc._RF.push(module, '54a6fI8LC9BIqxNXaySVjWq', 'Tile2NodeStateAniBase');
// Scripts/base/Tile2NodeStateAniBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NodeStateAniBase = exports.EBehaviorState = void 0;
exports.EBehaviorState = {
    Enter: "enter",
    Exit: "exit"
};
var Tile2NodeStateAniBase = /** @class */ (function () {
    function Tile2NodeStateAniBase(e, t) {
        this._state = exports.EBehaviorState.Exit;
        this._dir = null;
        this._node = null;
        this._nodeAniState = null;
        this._onEnteredCallBack = null;
        this._onExitedCallBack = null;
        this._node = e;
        this._nodeAniState = t;
    }
    Object.defineProperty(Tile2NodeStateAniBase.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (e) {
            this._node = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeStateAniBase.prototype, "nodeAniState", {
        get: function () {
            return this._nodeAniState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeStateAniBase.prototype, "behaviorState", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeStateAniBase.prototype, "isEntering", {
        get: function () {
            return "entering" === this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeStateAniBase.prototype, "isExiting", {
        get: function () {
            return "exiting" === this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Tile2NodeStateAniBase.prototype.onEnterStart = function (e) {
        this.onEnterEnd(e);
    };
    Tile2NodeStateAniBase.prototype.onExitStart = function (e) {
        this.onExitEnd(e);
    };
    Tile2NodeStateAniBase.prototype.onEnter = function () { };
    Tile2NodeStateAniBase.prototype.onExit = function () { };
    Tile2NodeStateAniBase.prototype.onEnterEnd = function () {
        if (this.isEntering) {
            this._dir = null;
            this._state = exports.EBehaviorState.Enter;
            this._log("onEnterEnd → Enter");
            this._fireEnterCb();
        }
    };
    Tile2NodeStateAniBase.prototype.onExitEnd = function () {
        if (this.isExiting) {
            this._dir = null;
            this._state = exports.EBehaviorState.Exit;
            this._log("onExitEnd → Exit");
            this._fireExitCb();
        }
    };
    Tile2NodeStateAniBase.prototype._fireEnterCb = function () {
        var e = this._onEnteredCallBack;
        this._onEnteredCallBack = void 0;
        null == e || e();
    };
    Tile2NodeStateAniBase.prototype._fireExitCb = function () {
        var e = this._onExitedCallBack;
        this._onExitedCallBack = void 0;
        null == e || e();
    };
    Tile2NodeStateAniBase.prototype.playAni = function (e, t) {
        if (this._state !== exports.EBehaviorState.Enter || this.isExiting) {
            if (this.isEntering) {
                this._log("playAni: already entering, fire old cb, update new cb");
                this._fireEnterCb();
                this._onEnteredCallBack = t;
            }
            else {
                if (this.isExiting) {
                    this._log("playAni: interrupt exiting");
                    this._fireExitCb();
                    this._dir = null;
                    this.onExit(e);
                    this._state = exports.EBehaviorState.Exit;
                }
                this._log("playAni: start entering");
                this._onEnteredCallBack = t;
                this._dir = "entering";
                this.onEnterStart(e);
            }
        }
        else {
            this._log("playAni: already Enter, fire cb immediately");
            null == t || t();
        }
    };
    Tile2NodeStateAniBase.prototype.exitAni = function (e, t) {
        if (this._state !== exports.EBehaviorState.Exit || this.isEntering) {
            if (this.isExiting) {
                this._log("exitAni: already exiting, fire old cb, update new cb");
                this._fireExitCb();
                this._onExitedCallBack = t;
            }
            else {
                if (this.isEntering) {
                    this._log("exitAni: interrupt entering");
                    this._fireEnterCb();
                    this._dir = null;
                    this.onEnter(e);
                    this._state = exports.EBehaviorState.Enter;
                }
                this._log("exitAni: start exiting");
                this._onExitedCallBack = t;
                this._dir = "exiting";
                this.onExitStart(e);
            }
        }
        else {
            this._log("exitAni: already Exit, fire cb immediately");
            null == t || t();
        }
    };
    Tile2NodeStateAniBase.prototype.forceEnter = function (e) {
        this._log("forceEnter");
        this._fireEnterCb();
        this._fireExitCb();
        this._dir = null;
        this._state = exports.EBehaviorState.Enter;
        this.onEnter(e);
    };
    Tile2NodeStateAniBase.prototype.forceExit = function (e) {
        this._log("forceExit");
        this._fireEnterCb();
        this._fireExitCb();
        this._dir = null;
        this._state = exports.EBehaviorState.Exit;
        this.onExit(e);
    };
    Tile2NodeStateAniBase.prototype.playAniForce = function (e, t) {
        this.forceExit(e);
        this.playAni(e, t);
    };
    Tile2NodeStateAniBase.prototype.exitAniForce = function (e, t) {
        this.forceEnter(e);
        this.exitAni(e, t);
    };
    Tile2NodeStateAniBase.prototype.forceEnterWithParam = function (e, t) {
        this._log("forceEnterWithParam");
        this._fireEnterCb();
        this._fireExitCb();
        this._onEnteredCallBack = t;
        this._state = exports.EBehaviorState.Exit;
        this._dir = "entering";
        this.onEnterStart(e);
    };
    Tile2NodeStateAniBase.prototype.reset = function () {
        this._log("reset");
        this._fireEnterCb();
        this._fireExitCb();
        this._dir = null;
        this._state = exports.EBehaviorState.Exit;
    };
    Tile2NodeStateAniBase.prototype.applyImmediate = function () { };
    Tile2NodeStateAniBase.prototype._log = function () {
        Tile2NodeStateAniBase.CONST_SHOW_DEBUG_INFO;
    };
    Tile2NodeStateAniBase.CONST_SHOW_DEBUG_INFO = false;
    return Tile2NodeStateAniBase;
}());
exports.Tile2NodeStateAniBase = Tile2NodeStateAniBase;

cc._RF.pop();