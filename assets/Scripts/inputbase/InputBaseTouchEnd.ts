import { InputBase } from './InputBase';
export default class InputBaseTouchEnd extends InputBase {
  excute(e) {
    if (this.gameContext.touchData.isValid && !this.gameContext.touchData.isLock) if (this.gameContext.touchData.isClear) this.runTouchStartClear(e);else {
      var t = this.gameContext.getTileMapObject().getActionIds();
      if (0 !== t.length) {
        if (this.checkIsSame() && this.gameContext.tileSelector.touchStart(e.pos) != this.gameContext.touchData.tileId) {
          this.gameContext.touchModifier.modifyTouchEnd();
          return;
        }
        if (this.gameContext.touchData.isMoving) {
          mj.triggerInternalEvent("IptBTchEnd_moveEnd", this, [e]);
          var o = t[t.length - 1],
            n = this.gameContext.tileSelector.touchEnd(e.pos, o);
          if (n && this.gameContext.clearChecker.checkCanClear(n)) {
            this.gameContext.getTileMapObject().selcectTileId(n, true);
            this.runClear(e);
          } else {
            this.pushSelectEffect(t[0], false);
            this.gameContext.getTileMapObject().selcectTileId(t[0], true);
            this.runTouchLock(e, o);
          }
        } else this.notMoveFunction(t, e);
        this.gameContext.touchModifier.modifyTouchEnd();
      }
    }
  }
  @mj.traitEvent("IptBTchEnd_isFixNotMove")
  isFixNotMove() {
    return false;
  }
  @mj.traitEvent("IptBTchEnd_runTLock")
  runTouchLock() {}
  notMoveFunction(e, t) {
    if (this.isFixNotMove()) {
      this.notMoveFix(e, t);
    } else {
      this.notMoveOri(e, t);
    }
  }
  notMoveFix(e, t) {
    var o = this;
    if (2 === e.length) {
      if (e[0] === e[1]) {
        if (this.gameContext.getTileMapObject().getIsSelect(e[1])) this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
          o.pushSelectEffect(e, true, void 0, true);
        });else {
          this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
            o.pushSelectEffect(e, true, void 0, true);
          });
          this.pushSelectEffect(e[1], false, void 0, true);
          this.gameContext.getTileMapObject().selcectTileId(e[1], true);
          this.runSelectCardSuccess(t);
        }
      } else {
        if (this.gameContext.getTileMapObject().getIsSelect(e[1])) this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
          o.pushSelectEffect(e, true);
        });else {
          this.gameContext.getTileMapObject().unselectAllTileIds(e[1]).forEach(function (e) {
            o.pushSelectEffect(e, true);
          });
          this.pushSelectEffect(e[1], false, void 0, true);
          this.gameContext.getTileMapObject().selcectTileId(e[1], true);
        }
        this.runSelectCardSuccess(t);
      }
    } else {
      this.pushSelectEffect(e[0], false, void 0, true);
      this.gameContext.getTileMapObject().selcectTileId(e[0], true);
      this.runSelectCardSuccess(t);
    }
  }
  notMoveOri(e, t) {
    var o = this;
    if (2 === e.length) {
      if (e[0] === e[1]) {
        if (this.gameContext.getTileMapObject().getIsSelect(e[1])) this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
          o.pushSelectEffect(e, true, void 0, true);
        });else {
          this.pushSelectEffect(e[1], false, void 0, true);
          this.gameContext.getTileMapObject().selcectTileId(e[1], true);
          this.runSelectCardSuccess(t);
        }
      } else {
        this.gameContext.getTileMapObject().unselectAllTileIds(e[1]).forEach(function (e) {
          o.pushSelectEffect(e, true);
        });
        this.pushSelectEffect(e[1], false, void 0, true);
        this.gameContext.getTileMapObject().selcectTileId(e[1], true);
        this.runSelectCardSuccess(t);
      }
    } else {
      this.pushSelectEffect(e[0], false, void 0, true);
      this.gameContext.getTileMapObject().selcectTileId(e[0], true);
      this.runSelectCardSuccess(t);
    }
  }
  @mj.traitEvent("IptBTchEnd_checkIsSame")
  checkIsSame() {
    return false;
  }
  runTouchStartClear() {}
  runSelectCardSuccess() {}
  runClear() {}
}