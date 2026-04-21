
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f885y9w39OR7QHDjlvJqAk', 'InputBase');
// Scripts/inputbase/InputBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBase = void 0;
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var BehaviorsInterface_1 = require("../simulator/constant/BehaviorsInterface");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var ClearEffect_1 = require("../ClearEffect");
var EmptyEffect_1 = require("../EmptyEffect");
var MoveEffect_1 = require("../MoveEffect");
var SelectEffect_1 = require("../SelectEffect");
var TouchCancelEffect_1 = require("../TouchCancelEffect");
var InputBase = /** @class */ (function () {
    function InputBase(e, t, o) {
        this._ignoreLog = false;
        this._gameSimulator = null;
        this._gameContext = null;
        this._gameController = null;
        this._behaviorBuilder = null;
        this._lastEffectId = null;
        this._gameSimulator = e;
        this._gameContext = e.gameContext;
        this._gameController = t;
        this._behaviorBuilder = o;
    }
    Object.defineProperty(InputBase.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (e) {
            this._input = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "gameContext", {
        get: function () {
            return this._gameContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "gameSimulator", {
        get: function () {
            return this._gameSimulator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "tileMapObject", {
        get: function () {
            return this.gameController.tileMapObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "gameModifier", {
        get: function () {
            return this._gameModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "gameController", {
        get: function () {
            return this._gameController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputBase.prototype, "behaviorBuilder", {
        get: function () {
            return this._behaviorBuilder;
        },
        enumerable: false,
        configurable: true
    });
    InputBase.prototype.initRoot = function (e, t) {
        this._behaviorBuilder.clear();
        var o = new EmptyEffect_1.EmptyEffect({
            inputType: e.inputType,
            name: t
        });
        this.pushRootEffect(o);
    };
    InputBase.prototype.excute = function () { };
    InputBase.prototype.pushEffect = function (e, t, o, n) {
        if (t === void 0) { t = BehaviorsEnum_1.EInsertType.Root; }
        if (n === void 0) { n = true; }
        null == o && (o = this._lastEffectId);
        return this._behaviorBuilder.isEmpty() ? this.pushRootEffect(e) : t === BehaviorsEnum_1.EInsertType.Serial ? this.pushEffectSerial(e, o, n) : t === BehaviorsEnum_1.EInsertType.Parallel ? this.pushEffectParallel(e, o) : this.pushRootEffect(e);
    };
    InputBase.prototype.pushRootEffect = function (e) {
        this._lastEffectId = this._behaviorBuilder.addBehavior(e);
        return {
            lastEffectId: this._lastEffectId,
            newEffectId: this._lastEffectId
        };
    };
    InputBase.prototype.pushEffectSerial = function (e, t, o) {
        if (o === void 0) { o = true; }
        null == t && (t = this._lastEffectId);
        var n = this._behaviorBuilder.insertBehavior(t, e, BehaviorsEnum_1.EInsertType.Serial);
        o && (this._lastEffectId = n);
        return {
            lastEffectId: this._lastEffectId,
            newEffectId: n
        };
    };
    InputBase.prototype.pushEffectParallel = function (e, t) {
        null == t && (t = this._lastEffectId);
        var o = this._behaviorBuilder.insertBehavior(t, e, BehaviorsEnum_1.EInsertType.Parallel);
        return {
            lastEffectId: this._lastEffectId,
            newEffectId: o
        };
    };
    InputBase.prototype.pushEffectWithNodeByName = function (e, t, o) {
        var n = this._behaviorBuilder.insertBehaviorWithNodeByName(e, t, o);
        if (n)
            return {
                lastEffectId: this._lastEffectId,
                newEffectId: n
            };
    };
    InputBase.prototype.parse = function (e) {
        if (this._behaviorBuilder.isEmpty())
            return null;
        this._ignoreLog;
        return this._behaviorBuilder.build(e);
    };
    InputBase.prototype.pushNewRootEffect = function (e, t) {
        var o = new EmptyEffect_1.EmptyEffect({
            inputType: e.inputType,
            name: t
        });
        return this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputBase.prototype.pushSerialEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: this.input.inputType,
            name: "SerialEffect"
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Serial, e, false);
    };
    InputBase.prototype.pushParallerEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: this.input.inputType,
            name: "ParallerEffect"
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel, e, false);
    };
    InputBase.prototype.addParallelContainer = function (e) {
        return this._behaviorBuilder.addContainerNode(BehaviorsInterface_1.EBehaviorExecutionType.Parallel, e);
    };
    InputBase.prototype.addSerialContainer = function (e) {
        return this._behaviorBuilder.addContainerNode(BehaviorsInterface_1.EBehaviorExecutionType.Serial, e);
    };
    InputBase.prototype.pushSelectEffect = function (e, t, o, n) {
        if (this.gameContext.getTileMapObject().getTileObject(e).isValid) {
            var r = new SelectEffect_1.SelectEffect({
                tileId: e,
                isCancel: t,
                lastTileId: o,
                isUserOperation: n
            });
            this.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    InputBase.prototype.pushMoveEffect = function (e, t, o, n) {
        var i = this.gameContext.tileSelector.getExpandMultiple(), r = new MoveEffect_1.MoveEffect({
            tileId: e,
            pos: t,
            delta: o,
            iFirstMove: n,
            multiple: i
        });
        this.pushEffect(r);
    };
    InputBase.prototype.pushTouchCancelEffect = function (e) {
        var t = new TouchCancelEffect_1.TouchCancelEffect({
            tileId: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputBase.prototype.pushClearEffect = function (e, t, o, n) {
        var r = new ClearEffect_1.ClearEffect({
            tileId: e,
            lastTileId: t,
            inputType: this.input.inputType,
            isBonus: o,
            isFullCombo: n
        });
        return this.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputBase.prototype.dispatchClearAfterEvent = function (e) {
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_ClearAfter, this, e);
    };
    InputBase.prototype.addSerialParentNode = function (e) {
        return this._behaviorBuilder.addSerialParentNode(e);
    };
    InputBase.prototype.addParallelParentNode = function (e) {
        return this._behaviorBuilder.addParallelParentNode(e);
    };
    InputBase.prototype.addSerialNode = function (e, t) {
        return this._behaviorBuilder.addSerialNode(e, t);
    };
    InputBase.prototype.addParallelNode = function (e, t) {
        return this._behaviorBuilder.addParallelNode(e, t);
    };
    __decorate([
        mj.traitEvent("IptBase_pushClrEff")
    ], InputBase.prototype, "pushClearEffect", null);
    return InputBase;
}());
exports.InputBase = InputBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsK0VBQWtGO0FBQ2xGLDZEQUE2RDtBQUM3RCw4Q0FBNkM7QUFDN0MsOENBQTZDO0FBQzdDLDRDQUEyQztBQUMzQyxnREFBK0M7QUFDL0MsMERBQXlEO0FBRXpEO0lBK0JFLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQTlCbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUEwQm5CLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUE3QkQsc0JBQUksNEJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBQ0QsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBSSxrQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksb0NBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxvQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNB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aUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QseUNBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELGlDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxtQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQXhCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7b0RBVW5DO0lBZ0JILGdCQUFDO0NBdktELEFBdUtDLElBQUE7QUF2S1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUJlaGF2aW9yRXhlY3V0aW9uVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9CZWhhdmlvcnNJbnRlcmZhY2UnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgQ2xlYXJFZmZlY3QgfSBmcm9tICcuLi9DbGVhckVmZmVjdCc7XG5pbXBvcnQgeyBFbXB0eUVmZmVjdCB9IGZyb20gJy4uL0VtcHR5RWZmZWN0JztcbmltcG9ydCB7IE1vdmVFZmZlY3QgfSBmcm9tICcuLi9Nb3ZlRWZmZWN0JztcbmltcG9ydCB7IFNlbGVjdEVmZmVjdCB9IGZyb20gJy4uL1NlbGVjdEVmZmVjdCc7XG5pbXBvcnQgeyBUb3VjaENhbmNlbEVmZmVjdCB9IGZyb20gJy4uL1RvdWNoQ2FuY2VsRWZmZWN0JztcblxuZXhwb3J0IGNsYXNzIElucHV0QmFzZSB7XG4gIF9pZ25vcmVMb2cgPSBmYWxzZTtcbiAgX2dhbWVTaW11bGF0b3IgPSBudWxsO1xuICBfZ2FtZUNvbnRleHQgPSBudWxsO1xuICBfZ2FtZUNvbnRyb2xsZXIgPSBudWxsO1xuICBfYmVoYXZpb3JCdWlsZGVyID0gbnVsbDtcbiAgX2xhc3RFZmZlY3RJZCA9IG51bGw7XG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cbiAgc2V0IGlucHV0KGUpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGU7XG4gIH1cbiAgZ2V0IGdhbWVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dDtcbiAgfVxuICBnZXQgZ2FtZVNpbXVsYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZVNpbXVsYXRvcjtcbiAgfVxuICBnZXQgdGlsZU1hcE9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0O1xuICB9XG4gIGdldCBnYW1lTW9kaWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVNb2RpZmllcjtcbiAgfVxuICBnZXQgZ2FtZUNvbnRyb2xsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250cm9sbGVyO1xuICB9XG4gIGdldCBiZWhhdmlvckJ1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JlaGF2aW9yQnVpbGRlcjtcbiAgfVxuICBjb25zdHJ1Y3RvcihlLCB0LCBvKSB7XG4gICAgdGhpcy5fZ2FtZVNpbXVsYXRvciA9IGU7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQgPSBlLmdhbWVDb250ZXh0O1xuICAgIHRoaXMuX2dhbWVDb250cm9sbGVyID0gdDtcbiAgICB0aGlzLl9iZWhhdmlvckJ1aWxkZXIgPSBvO1xuICB9XG4gIGluaXRSb290KGUsIHQpIHtcbiAgICB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuY2xlYXIoKTtcbiAgICB2YXIgbyA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IGUuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaFJvb3RFZmZlY3Qobyk7XG4gIH1cbiAgZXhjdXRlKCkge31cbiAgcHVzaEVmZmVjdChlLCB0ID0gRUluc2VydFR5cGUuUm9vdCwgbz8sIG4gPSB0cnVlKSB7XG4gICAgbnVsbCA9PSBvICYmIChvID0gdGhpcy5fbGFzdEVmZmVjdElkKTtcbiAgICByZXR1cm4gdGhpcy5fYmVoYXZpb3JCdWlsZGVyLmlzRW1wdHkoKSA/IHRoaXMucHVzaFJvb3RFZmZlY3QoZSkgOiB0ID09PSBFSW5zZXJ0VHlwZS5TZXJpYWwgPyB0aGlzLnB1c2hFZmZlY3RTZXJpYWwoZSwgbywgbikgOiB0ID09PSBFSW5zZXJ0VHlwZS5QYXJhbGxlbCA/IHRoaXMucHVzaEVmZmVjdFBhcmFsbGVsKGUsIG8pIDogdGhpcy5wdXNoUm9vdEVmZmVjdChlKTtcbiAgfVxuICBwdXNoUm9vdEVmZmVjdChlKSB7XG4gICAgdGhpcy5fbGFzdEVmZmVjdElkID0gdGhpcy5fYmVoYXZpb3JCdWlsZGVyLmFkZEJlaGF2aW9yKGUpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IHRoaXMuX2xhc3RFZmZlY3RJZCxcbiAgICAgIG5ld0VmZmVjdElkOiB0aGlzLl9sYXN0RWZmZWN0SWRcbiAgICB9O1xuICB9XG4gIHB1c2hFZmZlY3RTZXJpYWwoZSwgdCwgbyA9IHRydWUpIHtcbiAgICBudWxsID09IHQgJiYgKHQgPSB0aGlzLl9sYXN0RWZmZWN0SWQpO1xuICAgIHZhciBuID0gdGhpcy5fYmVoYXZpb3JCdWlsZGVyLmluc2VydEJlaGF2aW9yKHQsIGUsIEVJbnNlcnRUeXBlLlNlcmlhbCk7XG4gICAgbyAmJiAodGhpcy5fbGFzdEVmZmVjdElkID0gbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RFZmZlY3RJZDogdGhpcy5fbGFzdEVmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG5cbiAgICB9O1xuICB9XG4gIHB1c2hFZmZlY3RQYXJhbGxlbChlLCB0KSB7XG4gICAgbnVsbCA9PSB0ICYmICh0ID0gdGhpcy5fbGFzdEVmZmVjdElkKTtcbiAgICB2YXIgbyA9IHRoaXMuX2JlaGF2aW9yQnVpbGRlci5pbnNlcnRCZWhhdmlvcih0LCBlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RFZmZlY3RJZDogdGhpcy5fbGFzdEVmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICB9O1xuICB9XG4gIHB1c2hFZmZlY3RXaXRoTm9kZUJ5TmFtZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuaW5zZXJ0QmVoYXZpb3JXaXRoTm9kZUJ5TmFtZShlLCB0LCBvKTtcbiAgICBpZiAobikgcmV0dXJuIHtcbiAgICAgIGxhc3RFZmZlY3RJZDogdGhpcy5fbGFzdEVmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG5cbiAgICB9O1xuICB9XG4gIHBhcnNlKGUpIHtcbiAgICBpZiAodGhpcy5fYmVoYXZpb3JCdWlsZGVyLmlzRW1wdHkoKSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5faWdub3JlTG9nO1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuYnVpbGQoZSk7XG4gIH1cbiAgcHVzaE5ld1Jvb3RFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgIGlucHV0VHlwZTogZS5pbnB1dFR5cGUsXG4gICAgICBuYW1lOiB0XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBwdXNoU2VyaWFsRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuaW5wdXQuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogXCJTZXJpYWxFZmZlY3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuU2VyaWFsLCBlLCBmYWxzZSk7XG4gIH1cbiAgcHVzaFBhcmFsbGVyRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuaW5wdXQuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogXCJQYXJhbGxlckVmZmVjdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgZSwgZmFsc2UpO1xuICB9XG4gIGFkZFBhcmFsbGVsQ29udGFpbmVyKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYmVoYXZpb3JCdWlsZGVyLmFkZENvbnRhaW5lck5vZGUoRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5QYXJhbGxlbCwgZSk7XG4gIH1cbiAgYWRkU2VyaWFsQ29udGFpbmVyKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYmVoYXZpb3JCdWlsZGVyLmFkZENvbnRhaW5lck5vZGUoRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TZXJpYWwsIGUpO1xuICB9XG4gIHB1c2hTZWxlY3RFZmZlY3QoZSwgdCwgbywgbikge1xuICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGUpLmlzVmFsaWQpIHtcbiAgICAgIHZhciByID0gbmV3IFNlbGVjdEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgaXNDYW5jZWw6IHQsXG4gICAgICAgIGxhc3RUaWxlSWQ6IG8sXG4gICAgICAgIGlzVXNlck9wZXJhdGlvbjogblxuICAgICAgfSk7XG4gICAgICB0aGlzLnB1c2hFZmZlY3QociwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICAgIH1cbiAgfVxuICBwdXNoTW92ZUVmZmVjdChlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci5nZXRFeHBhbmRNdWx0aXBsZSgpLFxuICAgICAgciA9IG5ldyBNb3ZlRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBwb3M6IHQsXG4gICAgICAgIGRlbHRhOiBvLFxuICAgICAgICBpRmlyc3RNb3ZlOiBuLFxuICAgICAgICBtdWx0aXBsZTogaVxuICAgICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHIpO1xuICB9XG4gIHB1c2hUb3VjaENhbmNlbEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVG91Y2hDYW5jZWxFZmZlY3Qoe1xuICAgICAgdGlsZUlkOiBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdEJhc2VfcHVzaENsckVmZlwiKVxuICBwdXNoQ2xlYXJFZmZlY3QoZSwgdCwgbywgbikge1xuICAgIHZhciByID0gbmV3IENsZWFyRWZmZWN0KHtcbiAgICAgIHRpbGVJZDogZSxcbiAgICAgIGxhc3RUaWxlSWQ6IHQsXG4gICAgICBpbnB1dFR5cGU6IHRoaXMuaW5wdXQuaW5wdXRUeXBlLFxuICAgICAgaXNCb251czogbyxcbiAgICAgIGlzRnVsbENvbWJvOiBuXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgZGlzcGF0Y2hDbGVhckFmdGVyRXZlbnQoZSkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuRWZmZWN0X0NsZWFyQWZ0ZXIsIHRoaXMsIGUpO1xuICB9XG4gIGFkZFNlcmlhbFBhcmVudE5vZGUoZSkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuYWRkU2VyaWFsUGFyZW50Tm9kZShlKTtcbiAgfVxuICBhZGRQYXJhbGxlbFBhcmVudE5vZGUoZSkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUpO1xuICB9XG4gIGFkZFNlcmlhbE5vZGUoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuYWRkU2VyaWFsTm9kZShlLCB0KTtcbiAgfVxuICBhZGRQYXJhbGxlbE5vZGUoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvckJ1aWxkZXIuYWRkUGFyYWxsZWxOb2RlKGUsIHQpO1xuICB9XG59Il19