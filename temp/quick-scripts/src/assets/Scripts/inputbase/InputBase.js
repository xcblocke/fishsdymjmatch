"use strict";
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