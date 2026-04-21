
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2NodeStateAniBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJOb2RlU3RhdGVBbmlCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVcsUUFBQSxjQUFjLEdBQUc7SUFDMUIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFDRjtJQTBCRSwrQkFBWSxDQUFDLEVBQUUsQ0FBQztRQXpCaEIsV0FBTSxHQUFHLHNCQUFjLENBQUMsSUFBSSxDQUFDO1FBQzdCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQXFCdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBckJELHNCQUFJLHVDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUNELFVBQVMsQ0FBQztZQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OztPQUhBO0lBSUQsc0JBQUksK0NBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxnREFBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZDQUFVO2FBQWQ7WUFDRSxPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQVM7YUFBYjtZQUNFLE9BQU8sU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQzs7O09B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QUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELHFDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBYyxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsOENBQWMsR0FBZCxjQUFrQixDQUFDO0lBQ25CLG9DQUFJLEdBQUo7UUFDRSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQztJQUM5QyxDQUFDO0lBcEpNLDJDQUFxQixHQUFHLEtBQUssQ0FBQztJQXFKdkMsNEJBQUM7Q0E1SkQsQUE0SkMsSUFBQTtBQTVKWSxzREFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVCZWhhdmlvclN0YXRlID0ge1xuICBFbnRlcjogXCJlbnRlclwiLFxuICBFeGl0OiBcImV4aXRcIlxufTtcbmV4cG9ydCBjbGFzcyBUaWxlMk5vZGVTdGF0ZUFuaUJhc2Uge1xuICBfc3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FeGl0O1xuICBfZGlyID0gbnVsbDtcbiAgX25vZGUgPSBudWxsO1xuICBfbm9kZUFuaVN0YXRlID0gbnVsbDtcbiAgX29uRW50ZXJlZENhbGxCYWNrID0gbnVsbDtcbiAgX29uRXhpdGVkQ2FsbEJhY2sgPSBudWxsO1xuICBzdGF0aWMgQ09OU1RfU0hPV19ERUJVR19JTkZPID0gZmFsc2U7XG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG4gIHNldCBub2RlKGUpIHtcbiAgICB0aGlzLl9ub2RlID0gZTtcbiAgfVxuICBnZXQgbm9kZUFuaVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlQW5pU3RhdGU7XG4gIH1cbiAgZ2V0IGJlaGF2aW9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG4gIGdldCBpc0VudGVyaW5nKCkge1xuICAgIHJldHVybiBcImVudGVyaW5nXCIgPT09IHRoaXMuX2RpcjtcbiAgfVxuICBnZXQgaXNFeGl0aW5nKCkge1xuICAgIHJldHVybiBcImV4aXRpbmdcIiA9PT0gdGhpcy5fZGlyO1xuICB9XG4gIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICB0aGlzLl9ub2RlID0gZTtcbiAgICB0aGlzLl9ub2RlQW5pU3RhdGUgPSB0O1xuICB9XG4gIG9uRW50ZXJTdGFydChlKSB7XG4gICAgdGhpcy5vbkVudGVyRW5kKGUpO1xuICB9XG4gIG9uRXhpdFN0YXJ0KGUpIHtcbiAgICB0aGlzLm9uRXhpdEVuZChlKTtcbiAgfVxuICBvbkVudGVyKCkge31cbiAgb25FeGl0KCkge31cbiAgb25FbnRlckVuZCgpIHtcbiAgICBpZiAodGhpcy5pc0VudGVyaW5nKSB7XG4gICAgICB0aGlzLl9kaXIgPSBudWxsO1xuICAgICAgdGhpcy5fc3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FbnRlcjtcbiAgICAgIHRoaXMuX2xvZyhcIm9uRW50ZXJFbmQg4oaSIEVudGVyXCIpO1xuICAgICAgdGhpcy5fZmlyZUVudGVyQ2IoKTtcbiAgICB9XG4gIH1cbiAgb25FeGl0RW5kKCkge1xuICAgIGlmICh0aGlzLmlzRXhpdGluZykge1xuICAgICAgdGhpcy5fZGlyID0gbnVsbDtcbiAgICAgIHRoaXMuX3N0YXRlID0gRUJlaGF2aW9yU3RhdGUuRXhpdDtcbiAgICAgIHRoaXMuX2xvZyhcIm9uRXhpdEVuZCDihpIgRXhpdFwiKTtcbiAgICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICB9XG4gIH1cbiAgX2ZpcmVFbnRlckNiKCkge1xuICAgIHZhciBlID0gdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2s7XG4gICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2sgPSB2b2lkIDA7XG4gICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgfVxuICBfZmlyZUV4aXRDYigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX29uRXhpdGVkQ2FsbEJhY2s7XG4gICAgdGhpcy5fb25FeGl0ZWRDYWxsQmFjayA9IHZvaWQgMDtcbiAgICBudWxsID09IGUgfHwgZSgpO1xuICB9XG4gIHBsYXlBbmkoZSwgdCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gRUJlaGF2aW9yU3RhdGUuRW50ZXIgfHwgdGhpcy5pc0V4aXRpbmcpIHtcbiAgICAgIGlmICh0aGlzLmlzRW50ZXJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9nKFwicGxheUFuaTogYWxyZWFkeSBlbnRlcmluZywgZmlyZSBvbGQgY2IsIHVwZGF0ZSBuZXcgY2JcIik7XG4gICAgICAgIHRoaXMuX2ZpcmVFbnRlckNiKCk7XG4gICAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzRXhpdGluZykge1xuICAgICAgICAgIHRoaXMuX2xvZyhcInBsYXlBbmk6IGludGVycnVwdCBleGl0aW5nXCIpO1xuICAgICAgICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICAgICAgICB0aGlzLl9kaXIgPSBudWxsO1xuICAgICAgICAgIHRoaXMub25FeGl0KGUpO1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gRUJlaGF2aW9yU3RhdGUuRXhpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2coXCJwbGF5QW5pOiBzdGFydCBlbnRlcmluZ1wiKTtcbiAgICAgICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2sgPSB0O1xuICAgICAgICB0aGlzLl9kaXIgPSBcImVudGVyaW5nXCI7XG4gICAgICAgIHRoaXMub25FbnRlclN0YXJ0KGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2coXCJwbGF5QW5pOiBhbHJlYWR5IEVudGVyLCBmaXJlIGNiIGltbWVkaWF0ZWx5XCIpO1xuICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICB9XG4gIH1cbiAgZXhpdEFuaShlLCB0KSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBFQmVoYXZpb3JTdGF0ZS5FeGl0IHx8IHRoaXMuaXNFbnRlcmluZykge1xuICAgICAgaWYgKHRoaXMuaXNFeGl0aW5nKSB7XG4gICAgICAgIHRoaXMuX2xvZyhcImV4aXRBbmk6IGFscmVhZHkgZXhpdGluZywgZmlyZSBvbGQgY2IsIHVwZGF0ZSBuZXcgY2JcIik7XG4gICAgICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICAgICAgdGhpcy5fb25FeGl0ZWRDYWxsQmFjayA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc0VudGVyaW5nKSB7XG4gICAgICAgICAgdGhpcy5fbG9nKFwiZXhpdEFuaTogaW50ZXJydXB0IGVudGVyaW5nXCIpO1xuICAgICAgICAgIHRoaXMuX2ZpcmVFbnRlckNiKCk7XG4gICAgICAgICAgdGhpcy5fZGlyID0gbnVsbDtcbiAgICAgICAgICB0aGlzLm9uRW50ZXIoZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2coXCJleGl0QW5pOiBzdGFydCBleGl0aW5nXCIpO1xuICAgICAgICB0aGlzLl9vbkV4aXRlZENhbGxCYWNrID0gdDtcbiAgICAgICAgdGhpcy5fZGlyID0gXCJleGl0aW5nXCI7XG4gICAgICAgIHRoaXMub25FeGl0U3RhcnQoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvZyhcImV4aXRBbmk6IGFscmVhZHkgRXhpdCwgZmlyZSBjYiBpbW1lZGlhdGVseVwiKTtcbiAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgfVxuICB9XG4gIGZvcmNlRW50ZXIoZSkge1xuICAgIHRoaXMuX2xvZyhcImZvcmNlRW50ZXJcIik7XG4gICAgdGhpcy5fZmlyZUVudGVyQ2IoKTtcbiAgICB0aGlzLl9maXJlRXhpdENiKCk7XG4gICAgdGhpcy5fZGlyID0gbnVsbDtcbiAgICB0aGlzLl9zdGF0ZSA9IEVCZWhhdmlvclN0YXRlLkVudGVyO1xuICAgIHRoaXMub25FbnRlcihlKTtcbiAgfVxuICBmb3JjZUV4aXQoZSkge1xuICAgIHRoaXMuX2xvZyhcImZvcmNlRXhpdFwiKTtcbiAgICB0aGlzLl9maXJlRW50ZXJDYigpO1xuICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICB0aGlzLl9kaXIgPSBudWxsO1xuICAgIHRoaXMuX3N0YXRlID0gRUJlaGF2aW9yU3RhdGUuRXhpdDtcbiAgICB0aGlzLm9uRXhpdChlKTtcbiAgfVxuICBwbGF5QW5pRm9yY2UoZSwgdCkge1xuICAgIHRoaXMuZm9yY2VFeGl0KGUpO1xuICAgIHRoaXMucGxheUFuaShlLCB0KTtcbiAgfVxuICBleGl0QW5pRm9yY2UoZSwgdCkge1xuICAgIHRoaXMuZm9yY2VFbnRlcihlKTtcbiAgICB0aGlzLmV4aXRBbmkoZSwgdCk7XG4gIH1cbiAgZm9yY2VFbnRlcldpdGhQYXJhbShlLCB0KSB7XG4gICAgdGhpcy5fbG9nKFwiZm9yY2VFbnRlcldpdGhQYXJhbVwiKTtcbiAgICB0aGlzLl9maXJlRW50ZXJDYigpO1xuICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICB0aGlzLl9vbkVudGVyZWRDYWxsQmFjayA9IHQ7XG4gICAgdGhpcy5fc3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FeGl0O1xuICAgIHRoaXMuX2RpciA9IFwiZW50ZXJpbmdcIjtcbiAgICB0aGlzLm9uRW50ZXJTdGFydChlKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLl9sb2coXCJyZXNldFwiKTtcbiAgICB0aGlzLl9maXJlRW50ZXJDYigpO1xuICAgIHRoaXMuX2ZpcmVFeGl0Q2IoKTtcbiAgICB0aGlzLl9kaXIgPSBudWxsO1xuICAgIHRoaXMuX3N0YXRlID0gRUJlaGF2aW9yU3RhdGUuRXhpdDtcbiAgfVxuICBhcHBseUltbWVkaWF0ZSgpIHt9XG4gIF9sb2coKSB7XG4gICAgVGlsZTJOb2RlU3RhdGVBbmlCYXNlLkNPTlNUX1NIT1dfREVCVUdfSU5GTztcbiAgfVxufSJdfQ==