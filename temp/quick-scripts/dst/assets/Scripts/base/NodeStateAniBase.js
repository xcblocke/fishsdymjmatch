
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/NodeStateAniBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsY0FBYyxHQUFHO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osUUFBUSxFQUFFLFVBQVU7SUFDcEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7Q0FDakIsQ0FBQztBQUNGO0lBMEJFLDBCQUFZLENBQUMsRUFBRSxDQUFDO1FBekJoQixtQkFBYyxHQUFHLHNCQUFjLENBQUMsSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBYSxHQUFHLHNCQUFjLENBQUMsSUFBSSxDQUFDO1FBQ3BDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFxQnZCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQXJCRCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDRCxVQUFTLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BSEE7SUFJRCxzQkFBSSwwQ0FBWTthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDJDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7YUFDRCxVQUFrQixDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFD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QUUsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELGdDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsK0JBQUksR0FBSixVQUFLLENBQUM7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELG9DQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0QseUNBQWMsR0FBZCxjQUFrQixDQUFDO0lBaklaLHNDQUFxQixHQUFHLEtBQUssQ0FBQztJQWtJdkMsdUJBQUM7Q0F6SUQsQUF5SUMsSUFBQTtBQXpJWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVCZWhhdmlvclN0YXRlID0ge1xuICBJZGxlOiBcImlkbGVcIixcbiAgRW50ZXJpbmc6IFwiZW50ZXJpbmdcIixcbiAgRW50ZXJlZDogXCJlbnRlcmVkXCIsXG4gIEV4aXRpbmc6IFwiZXhpdGluZ1wiLFxuICBFeGl0ZWQ6IFwiZXhpdGVkXCJcbn07XG5leHBvcnQgY2xhc3MgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9iZWhhdmlvclN0YXRlID0gRUJlaGF2aW9yU3RhdGUuSWRsZTtcbiAgX25vZGUgPSBudWxsO1xuICBfbm9kZUFuaVN0YXRlID0gbnVsbDtcbiAgYmVoYXZpb3JTdGF0ZSA9IEVCZWhhdmlvclN0YXRlLklkbGU7XG4gIF9vbkVudGVyZWRDYWxsQmFjayA9IG51bGw7XG4gIF9vbkV4aXRlZENhbGxCYWNrID0gbnVsbDtcbiAgc3RhdGljIENPTlNUX1NIT1dfREVCVUdfSU5GTyA9IGZhbHNlO1xuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuICBzZXQgbm9kZShlKSB7XG4gICAgdGhpcy5fbm9kZSAhPT0gZSAmJiAodGhpcy5fbm9kZSA9IGUpO1xuICB9XG4gIGdldCBub2RlQW5pU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVBbmlTdGF0ZTtcbiAgfVxuICBnZXQgYmVoYXZpb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmVoYXZpb3JTdGF0ZTtcbiAgfVxuICBzZXQgYmVoYXZpb3JTdGF0ZSh0KSB7XG4gICAgaWYgKHRoaXMuX2JlaGF2aW9yU3RhdGUgIT09IHQpIHtcbiAgICAgIE5vZGVTdGF0ZUFuaUJhc2UuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICAgICAgdGhpcy5fYmVoYXZpb3JTdGF0ZSA9IHQ7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICB0aGlzLl9ub2RlID0gZTtcbiAgICB0aGlzLl9ub2RlQW5pU3RhdGUgPSB0O1xuICB9XG4gIG9uRW50ZXJTdGFydCgpIHtcbiAgICB0aGlzLmJlaGF2aW9yU3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FbnRlcmluZztcbiAgfVxuICBvbkVudGVyRW5kKCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMuYmVoYXZpb3JTdGF0ZSA9IEVCZWhhdmlvclN0YXRlLkVudGVyZWQ7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9vbkVudGVyZWRDYWxsQmFjaykgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkV4aXRTdGFydCgpIHtcbiAgICB0aGlzLmJlaGF2aW9yU3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FeGl0aW5nO1xuICB9XG4gIG9uRXhpdCgpIHtcbiAgICB0aGlzLmJlaGF2aW9yU3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5FeGl0ZWQ7XG4gICAgdGhpcy5iZWhhdmlvclN0YXRlID0gRUJlaGF2aW9yU3RhdGUuSWRsZTtcbiAgfVxuICBvbkV4aXRFbmQoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5iZWhhdmlvclN0YXRlID0gRUJlaGF2aW9yU3RhdGUuRXhpdGVkO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fb25FeGl0ZWRDYWxsQmFjaykgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmJlaGF2aW9yU3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5JZGxlO1xuICB9XG4gIG9uRW50ZXIoKSB7XG4gICAgdGhpcy5iZWhhdmlvclN0YXRlID0gRUJlaGF2aW9yU3RhdGUuRW50ZXJlZDtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLmJlaGF2aW9yU3RhdGUgPSBFQmVoYXZpb3JTdGF0ZS5JZGxlO1xuICB9XG4gIHBsYXlBbmkoZSwgdCkge1xuICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdDtcbiAgICBzd2l0Y2ggKHRoaXMuYmVoYXZpb3JTdGF0ZSkge1xuICAgICAgY2FzZSBFQmVoYXZpb3JTdGF0ZS5JZGxlOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRW50ZXJlZDpcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRW50ZXJpbmc6XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRXhpdGluZzpcbiAgICAgICAgdGhpcy5leGl0KGUpO1xuICAgIH1cbiAgICB0aGlzLmVudGVyU3RhcnQoZSk7XG4gIH1cbiAgZXhpdEFuaShlLCB0KSB7XG4gICAgdGhpcy5fb25FeGl0ZWRDYWxsQmFjayA9IHQ7XG4gICAgc3dpdGNoICh0aGlzLmJlaGF2aW9yU3RhdGUpIHtcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuSWRsZTpcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRXhpdGluZzpcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRXhpdGVkOlxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIEVCZWhhdmlvclN0YXRlLkVudGVyaW5nOlxuICAgICAgICB0aGlzLmVudGVyKGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRW50ZXJlZDpcbiAgICB9XG4gICAgdGhpcy5leGl0U3RhcnQoZSk7XG4gIH1cbiAgZm9yY2VFbnRlcihlKSB7XG4gICAgc3dpdGNoICh0aGlzLmJlaGF2aW9yU3RhdGUpIHtcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuSWRsZTpcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRW50ZXJpbmc6XG4gICAgICBjYXNlIEVCZWhhdmlvclN0YXRlLkVudGVyZWQ6XG4gICAgICAgIHRoaXMuZW50ZXIoZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQmVoYXZpb3JTdGF0ZS5FeGl0aW5nOlxuICAgICAgICB0aGlzLmV4aXQoZSk7XG4gICAgICAgIHRoaXMuZW50ZXIoZSk7XG4gICAgfVxuICB9XG4gIGZvcmNlRXhpdChlKSB7XG4gICAgc3dpdGNoICh0aGlzLmJlaGF2aW9yU3RhdGUpIHtcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuSWRsZTpcbiAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQmVoYXZpb3JTdGF0ZS5FbnRlcmluZzpcbiAgICAgICAgdGhpcy5lbnRlcihlKTtcbiAgICAgICAgdGhpcy5leGl0KGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRXhpdGluZzpcbiAgICAgIGNhc2UgRUJlaGF2aW9yU3RhdGUuRW50ZXJlZDpcbiAgICAgICAgdGhpcy5leGl0KGUpO1xuICAgIH1cbiAgfVxuICBwbGF5QW5pRm9yY2UoZSwgdCkge1xuICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdDtcbiAgICB0aGlzLmZvcmNlRXhpdChlKTtcbiAgICB0aGlzLnBsYXlBbmkoZSwgdCk7XG4gIH1cbiAgZXhpdEFuaUZvcmNlKGUsIHQpIHtcbiAgICB0aGlzLl9vbkV4aXRlZENhbGxCYWNrID0gdDtcbiAgICB0aGlzLmZvcmNlRW50ZXIoZSk7XG4gICAgdGhpcy5leGl0QW5pKGUsIHQpO1xuICB9XG4gIGZvcmNlRW50ZXJXaXRoUGFyYW0oZSwgdCkge1xuICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdDtcbiAgICB0aGlzLmVudGVyU3RhcnQoZSk7XG4gIH1cbiAgZW50ZXIoZSkge1xuICAgIHRoaXMub25FbnRlcihlKTtcbiAgfVxuICBleGl0KGUpIHtcbiAgICB0aGlzLm9uRXhpdChlKTtcbiAgfVxuICBlbnRlclN0YXJ0KGUpIHtcbiAgICB0aGlzLm9uRW50ZXJTdGFydChlKTtcbiAgfVxuICBleGl0U3RhcnQoZSkge1xuICAgIHRoaXMub25FeGl0U3RhcnQoZSk7XG4gIH1cbiAgYXBwbHlJbW1lZGlhdGUoKSB7fVxufSJdfQ==