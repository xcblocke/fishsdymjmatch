"use strict";
cc._RF.push(module, '2519dIXieFHyLN3eAaLCAxS', 'InputBaseTouchEnd');
// Scripts/inputbase/InputBaseTouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchEnd = /** @class */ (function (_super) {
    __extends(InputBaseTouchEnd, _super);
    function InputBaseTouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchEnd.prototype.excute = function (e) {
        if (this.gameContext.touchData.isValid && !this.gameContext.touchData.isLock)
            if (this.gameContext.touchData.isClear)
                this.runTouchStartClear(e);
            else {
                var t = this.gameContext.getTileMapObject().getActionIds();
                if (0 !== t.length) {
                    if (this.checkIsSame() && this.gameContext.tileSelector.touchStart(e.pos) != this.gameContext.touchData.tileId) {
                        this.gameContext.touchModifier.modifyTouchEnd();
                        return;
                    }
                    if (this.gameContext.touchData.isMoving) {
                        mj.triggerInternalEvent("IptBTchEnd_moveEnd", this, [e]);
                        var o = t[t.length - 1], n = this.gameContext.tileSelector.touchEnd(e.pos, o);
                        if (n && this.gameContext.clearChecker.checkCanClear(n)) {
                            this.gameContext.getTileMapObject().selcectTileId(n, true);
                            this.runClear(e);
                        }
                        else {
                            this.pushSelectEffect(t[0], false);
                            this.gameContext.getTileMapObject().selcectTileId(t[0], true);
                            this.runTouchLock(e, o);
                        }
                    }
                    else
                        this.notMoveFunction(t, e);
                    this.gameContext.touchModifier.modifyTouchEnd();
                }
            }
    };
    InputBaseTouchEnd.prototype.isFixNotMove = function () {
        return false;
    };
    InputBaseTouchEnd.prototype.runTouchLock = function () { };
    InputBaseTouchEnd.prototype.notMoveFunction = function (e, t) {
        if (this.isFixNotMove()) {
            this.notMoveFix(e, t);
        }
        else {
            this.notMoveOri(e, t);
        }
    };
    InputBaseTouchEnd.prototype.notMoveFix = function (e, t) {
        var o = this;
        if (2 === e.length) {
            if (e[0] === e[1]) {
                if (this.gameContext.getTileMapObject().getIsSelect(e[1]))
                    this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
                        o.pushSelectEffect(e, true, void 0, true);
                    });
                else {
                    this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
                        o.pushSelectEffect(e, true, void 0, true);
                    });
                    this.pushSelectEffect(e[1], false, void 0, true);
                    this.gameContext.getTileMapObject().selcectTileId(e[1], true);
                    this.runSelectCardSuccess(t);
                }
            }
            else {
                if (this.gameContext.getTileMapObject().getIsSelect(e[1]))
                    this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
                        o.pushSelectEffect(e, true);
                    });
                else {
                    this.gameContext.getTileMapObject().unselectAllTileIds(e[1]).forEach(function (e) {
                        o.pushSelectEffect(e, true);
                    });
                    this.pushSelectEffect(e[1], false, void 0, true);
                    this.gameContext.getTileMapObject().selcectTileId(e[1], true);
                }
                this.runSelectCardSuccess(t);
            }
        }
        else {
            this.pushSelectEffect(e[0], false, void 0, true);
            this.gameContext.getTileMapObject().selcectTileId(e[0], true);
            this.runSelectCardSuccess(t);
        }
    };
    InputBaseTouchEnd.prototype.notMoveOri = function (e, t) {
        var o = this;
        if (2 === e.length) {
            if (e[0] === e[1]) {
                if (this.gameContext.getTileMapObject().getIsSelect(e[1]))
                    this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (e) {
                        o.pushSelectEffect(e, true, void 0, true);
                    });
                else {
                    this.pushSelectEffect(e[1], false, void 0, true);
                    this.gameContext.getTileMapObject().selcectTileId(e[1], true);
                    this.runSelectCardSuccess(t);
                }
            }
            else {
                this.gameContext.getTileMapObject().unselectAllTileIds(e[1]).forEach(function (e) {
                    o.pushSelectEffect(e, true);
                });
                this.pushSelectEffect(e[1], false, void 0, true);
                this.gameContext.getTileMapObject().selcectTileId(e[1], true);
                this.runSelectCardSuccess(t);
            }
        }
        else {
            this.pushSelectEffect(e[0], false, void 0, true);
            this.gameContext.getTileMapObject().selcectTileId(e[0], true);
            this.runSelectCardSuccess(t);
        }
    };
    InputBaseTouchEnd.prototype.checkIsSame = function () {
        return false;
    };
    InputBaseTouchEnd.prototype.runTouchStartClear = function () { };
    InputBaseTouchEnd.prototype.runSelectCardSuccess = function () { };
    InputBaseTouchEnd.prototype.runClear = function () { };
    __decorate([
        mj.traitEvent("IptBTchEnd_isFixNotMove")
    ], InputBaseTouchEnd.prototype, "isFixNotMove", null);
    __decorate([
        mj.traitEvent("IptBTchEnd_runTLock")
    ], InputBaseTouchEnd.prototype, "runTouchLock", null);
    __decorate([
        mj.traitEvent("IptBTchEnd_checkIsSame")
    ], InputBaseTouchEnd.prototype, "checkIsSame", null);
    return InputBaseTouchEnd;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchEnd;

cc._RF.pop();