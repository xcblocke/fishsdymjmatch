import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("MultiFlipTimerTrait")
export default class MultiFlipTimerTrait extends Trait {
  _totalBudget = 6000;
  _minDisplayTime = 500;
  _state = {
    openedTileIds: new Set(),
    flippingTileIds: new Set(),
    tileNodeMap: new Map(),
    timer: null,
    remainingBudget: 6000,
    lastCalculateTime: 0,
    currentCardCount: 0
  };
  static traitKey = "MultiFlipTimer";
  onLoad() {
    var e, i;
    super.onLoad.call(this);
    var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.totalBudgetSeconds) || 6,
      r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.minDisplayTime) || 0.5;
    this._totalBudget = 1000 * a;
    this._minDisplayTime = 1000 * r;
    this._state.remainingBudget = this._totalBudget;
    mj.EventManager.on(EGameEvent.TileNode_SelectedFinish, this.onTileSelectedFinish, this);
  }
  onTileNodeObj_BeginSelected(t, e) {
    var i,
      a = t.ins,
      r = null == a ? void 0 : a.tileObject;
    if (r && r.type === ETileType.RollCard) {
      var s = r.id;
      (null === (i = a) || void 0 === i ? void 0 : i.isBack) && this._state.flippingTileIds.add(s);
    }
    e();
  }
  onTileSelectedFinish(t) {
    var e = null == t ? void 0 : t.tileObject;
    if (e && e.type === ETileType.RollCard) {
      var i = e.id;
      if (this._state.flippingTileIds.has(i)) {
        this._state.flippingTileIds.delete(i);
        this._state.tileNodeMap.set(i, t);
        if (0 === this._state.openedTileIds.size && null === this._state.timer) {
          this.startTimer(i);
        } else {
          this.addCardAndRecalculate(i);
        }
      }
    }
  }
  startTimer(t) {
    var e = this;
    this._state.openedTileIds.add(t);
    this._state.remainingBudget = this._totalBudget;
    this._state.lastCalculateTime = Date.now();
    this._state.currentCardCount = 1;
    this._state.timer = setTimeout(function () {
      e.flipBackAllCards();
    }, this._totalBudget);
  }
  addCardAndRecalculate(t) {
    if (!this._state.openedTileIds.has(t)) {
      var e = Date.now(),
        i = (e - this._state.lastCalculateTime) * this._state.currentCardCount;
      this._state.remainingBudget -= i;
      if (this._state.remainingBudget <= 0) this.flipBackAllCards();else {
        this._state.openedTileIds.add(t);
        this._state.currentCardCount++;
        this._state.lastCalculateTime = e;
        var a = this._state.remainingBudget / this._state.currentCardCount,
          r = Math.max(a, this._minDisplayTime);
        this.restartTimer(r);
      }
    }
  }
  restartTimer(t) {
    var e = this;
    this._state.timer && clearTimeout(this._state.timer);
    this._state.timer = setTimeout(function () {
      e.flipBackAllCards();
    }, t);
  }
  flipBackAllCards() {
    var t = this,
      e = Array.from(this._state.openedTileIds);
    if (0 !== e.length) {
      this._state.flippingTileIds.size;
      var i = new Map(this._state.tileNodeMap);
      this.clearState();
      e.forEach(function (e) {
        t.flipBackCard(e, i);
      });
    } else this.clearState();
  }
  flipBackCard(t, e) {
    var i = (e || this._state.tileNodeMap).get(t);
    if (i && cc.isValid(i.cardNode)) {
      var a = i._tileFlipStateCtl;
      a && a.playExitAni();
    }
  }
  onRollCTNode_keepOpen(t, e) {
    var i = t.ins,
      a = null == i ? void 0 : i.tileObject;
    if (a && a.type === ETileType.RollCard) {
      var r = a.id,
        s = this._state.openedTileIds.has(r);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: s
      });
    } else e();
  }
  clearState() {
    if (this._state.timer) {
      clearTimeout(this._state.timer);
      this._state.timer = null;
    }
    this._state.openedTileIds.clear();
    this._state.tileNodeMap.clear();
    this._state.remainingBudget = this._totalBudget;
    this._state.lastCalculateTime = 0;
    this._state.currentCardCount = 0;
  }
  onIptSetLv_newGComp(t, e) {
    this.clearState();
    this._state.flippingTileIds.clear();
    e();
  }
  onMainGameCtrl_uiDes(t, e) {
    this.clearState();
    this._state.flippingTileIds.clear();
    e();
  }
}