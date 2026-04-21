import { EInsertType } from '../constant/BehaviorsEnum';
import { EBehaviorExecutionType } from '../simulator/constant/BehaviorsInterface';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { ClearEffect } from '../ClearEffect';
import { EmptyEffect } from '../EmptyEffect';
import { MoveEffect } from '../MoveEffect';
import { SelectEffect } from '../SelectEffect';
import { TouchCancelEffect } from '../TouchCancelEffect';

export class InputBase {
  _ignoreLog = false;
  _gameSimulator = null;
  _gameContext = null;
  _gameController = null;
  _behaviorBuilder = null;
  _lastEffectId = null;
  get input() {
    return this._input;
  }
  set input(e) {
    this._input = e;
  }
  get gameContext() {
    return this._gameContext;
  }
  get gameSimulator() {
    return this._gameSimulator;
  }
  get tileMapObject() {
    return this.gameController.tileMapObject;
  }
  get gameModifier() {
    return this._gameModifier;
  }
  get gameController() {
    return this._gameController;
  }
  get behaviorBuilder() {
    return this._behaviorBuilder;
  }
  constructor(e, t, o) {
    this._gameSimulator = e;
    this._gameContext = e.gameContext;
    this._gameController = t;
    this._behaviorBuilder = o;
  }
  initRoot(e, t) {
    this._behaviorBuilder.clear();
    var o = new EmptyEffect({
      inputType: e.inputType,
      name: t
    });
    this.pushRootEffect(o);
  }
  excute() {}
  pushEffect(e, t = EInsertType.Root, o?, n = true) {
    null == o && (o = this._lastEffectId);
    return this._behaviorBuilder.isEmpty() ? this.pushRootEffect(e) : t === EInsertType.Serial ? this.pushEffectSerial(e, o, n) : t === EInsertType.Parallel ? this.pushEffectParallel(e, o) : this.pushRootEffect(e);
  }
  pushRootEffect(e) {
    this._lastEffectId = this._behaviorBuilder.addBehavior(e);
    return {
      lastEffectId: this._lastEffectId,
      newEffectId: this._lastEffectId
    };
  }
  pushEffectSerial(e, t, o = true) {
    null == t && (t = this._lastEffectId);
    var n = this._behaviorBuilder.insertBehavior(t, e, EInsertType.Serial);
    o && (this._lastEffectId = n);
    return {
      lastEffectId: this._lastEffectId,
      newEffectId: n
    };
  }
  pushEffectParallel(e, t) {
    null == t && (t = this._lastEffectId);
    var o = this._behaviorBuilder.insertBehavior(t, e, EInsertType.Parallel);
    return {
      lastEffectId: this._lastEffectId,
      newEffectId: o
    };
  }
  pushEffectWithNodeByName(e, t, o) {
    var n = this._behaviorBuilder.insertBehaviorWithNodeByName(e, t, o);
    if (n) return {
      lastEffectId: this._lastEffectId,
      newEffectId: n
    };
  }
  parse(e) {
    if (this._behaviorBuilder.isEmpty()) return null;
    this._ignoreLog;
    return this._behaviorBuilder.build(e);
  }
  pushNewRootEffect(e, t) {
    var o = new EmptyEffect({
      inputType: e.inputType,
      name: t
    });
    return this.pushEffect(o, EInsertType.Root);
  }
  pushSerialEffect(e) {
    var t = new EmptyEffect({
      inputType: this.input.inputType,
      name: "SerialEffect"
    });
    return this.pushEffect(t, EInsertType.Serial, e, false);
  }
  pushParallerEffect(e) {
    var t = new EmptyEffect({
      inputType: this.input.inputType,
      name: "ParallerEffect"
    });
    return this.pushEffect(t, EInsertType.Parallel, e, false);
  }
  addParallelContainer(e) {
    return this._behaviorBuilder.addContainerNode(EBehaviorExecutionType.Parallel, e);
  }
  addSerialContainer(e) {
    return this._behaviorBuilder.addContainerNode(EBehaviorExecutionType.Serial, e);
  }
  pushSelectEffect(e, t, o, n) {
    if (this.gameContext.getTileMapObject().getTileObject(e).isValid) {
      var r = new SelectEffect({
        tileId: e,
        isCancel: t,
        lastTileId: o,
        isUserOperation: n
      });
      this.pushEffect(r, EInsertType.Parallel);
    }
  }
  pushMoveEffect(e, t, o, n) {
    var i = this.gameContext.tileSelector.getExpandMultiple(),
      r = new MoveEffect({
        tileId: e,
        pos: t,
        delta: o,
        iFirstMove: n,
        multiple: i
      });
    this.pushEffect(r);
  }
  pushTouchCancelEffect(e) {
    var t = new TouchCancelEffect({
      tileId: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  @mj.traitEvent("IptBase_pushClrEff")
  pushClearEffect(e, t, o, n) {
    var r = new ClearEffect({
      tileId: e,
      lastTileId: t,
      inputType: this.input.inputType,
      isBonus: o,
      isFullCombo: n
    });
    return this.pushEffect(r, EInsertType.Parallel);
  }
  dispatchClearAfterEvent(e) {
    mj.EventManager.emit(EGameEvent.Effect_ClearAfter, this, e);
  }
  addSerialParentNode(e) {
    return this._behaviorBuilder.addSerialParentNode(e);
  }
  addParallelParentNode(e) {
    return this._behaviorBuilder.addParallelParentNode(e);
  }
  addSerialNode(e, t) {
    return this._behaviorBuilder.addSerialNode(e, t);
  }
  addParallelNode(e, t) {
    return this._behaviorBuilder.addParallelNode(e, t);
  }
}