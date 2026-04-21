
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputBaseTouchEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2VUb3VjaEVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDO0lBQStDLHFDQUFTO0lBQXhEOztJQXVHQSxDQUFDO0lBdEdDLGtDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFBSztnQkFDcEosSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDOUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ2hELE9BQU87cUJBQ1I7b0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDckIsQ0FBQyxH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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsOENBQWtCLEdBQWxCLGNBQXNCLENBQUM7SUFDdkIsZ0RBQW9CLEdBQXBCLGNBQXdCLENBQUM7SUFDekIsb0NBQVEsR0FBUixjQUFZLENBQUM7SUEzRWI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3lEQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFDcEI7SUFrRWpCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt3REFHdkM7SUFJSCx3QkFBQztDQXZHRCxBQXVHQyxDQXZHOEMscUJBQVMsR0F1R3ZEO2tCQXZHb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRCYXNlVG91Y2hFbmQgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LnRvdWNoRGF0YS5pc1ZhbGlkICYmICF0aGlzLmdhbWVDb250ZXh0LnRvdWNoRGF0YS5pc0xvY2spIGlmICh0aGlzLmdhbWVDb250ZXh0LnRvdWNoRGF0YS5pc0NsZWFyKSB0aGlzLnJ1blRvdWNoU3RhcnRDbGVhcihlKTtlbHNlIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0QWN0aW9uSWRzKCk7XG4gICAgICBpZiAoMCAhPT0gdC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJc1NhbWUoKSAmJiB0aGlzLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci50b3VjaFN0YXJ0KGUucG9zKSAhPSB0aGlzLmdhbWVDb250ZXh0LnRvdWNoRGF0YS50aWxlSWQpIHtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRvdWNoTW9kaWZpZXIubW9kaWZ5VG91Y2hFbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQudG91Y2hEYXRhLmlzTW92aW5nKSB7XG4gICAgICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJJcHRCVGNoRW5kX21vdmVFbmRcIiwgdGhpcywgW2VdKTtcbiAgICAgICAgICB2YXIgbyA9IHRbdC5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIG4gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci50b3VjaEVuZChlLnBvcywgbyk7XG4gICAgICAgICAgaWYgKG4gJiYgdGhpcy5nYW1lQ29udGV4dC5jbGVhckNoZWNrZXIuY2hlY2tDYW5DbGVhcihuKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2VsY2VjdFRpbGVJZChuLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucnVuQ2xlYXIoZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHVzaFNlbGVjdEVmZmVjdCh0WzBdLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKHRbMF0sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5ydW5Ub3VjaExvY2soZSwgbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgdGhpcy5ub3RNb3ZlRnVuY3Rpb24odCwgZSk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQudG91Y2hNb2RpZmllci5tb2RpZnlUb3VjaEVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdEJUY2hFbmRfaXNGaXhOb3RNb3ZlXCIpXG4gIGlzRml4Tm90TW92ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRCVGNoRW5kX3J1blRMb2NrXCIpXG4gIHJ1blRvdWNoTG9jaygpIHt9XG4gIG5vdE1vdmVGdW5jdGlvbihlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNGaXhOb3RNb3ZlKCkpIHtcbiAgICAgIHRoaXMubm90TW92ZUZpeChlLCB0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub3RNb3ZlT3JpKGUsIHQpO1xuICAgIH1cbiAgfVxuICBub3RNb3ZlRml4KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKDIgPT09IGUubGVuZ3RoKSB7XG4gICAgICBpZiAoZVswXSA9PT0gZVsxXSkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0SXNTZWxlY3QoZVsxXSkpIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVuc2VsZWN0QWxsVGlsZUlkcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBvLnB1c2hTZWxlY3RFZmZlY3QoZSwgdHJ1ZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgby5wdXNoU2VsZWN0RWZmZWN0KGUsIHRydWUsIHZvaWQgMCwgdHJ1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wdXNoU2VsZWN0RWZmZWN0KGVbMV0sIGZhbHNlLCB2b2lkIDAsIHRydWUpO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5ydW5TZWxlY3RDYXJkU3VjY2Vzcyh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldElzU2VsZWN0KGVbMV0pKSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgby5wdXNoU2VsZWN0RWZmZWN0KGUsIHRydWUpO1xuICAgICAgICB9KTtlbHNlIHtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoZVsxXSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgby5wdXNoU2VsZWN0RWZmZWN0KGUsIHRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHVzaFNlbGVjdEVmZmVjdChlWzFdLCBmYWxzZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKGVbMV0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucnVuU2VsZWN0Q2FyZFN1Y2Nlc3ModCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFNlbGVjdEVmZmVjdChlWzBdLCBmYWxzZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZVswXSwgdHJ1ZSk7XG4gICAgICB0aGlzLnJ1blNlbGVjdENhcmRTdWNjZXNzKHQpO1xuICAgIH1cbiAgfVxuICBub3RNb3ZlT3JpKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKDIgPT09IGUubGVuZ3RoKSB7XG4gICAgICBpZiAoZVswXSA9PT0gZVsxXSkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0SXNTZWxlY3QoZVsxXSkpIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVuc2VsZWN0QWxsVGlsZUlkcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBvLnB1c2hTZWxlY3RFZmZlY3QoZSwgdHJ1ZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgdGhpcy5wdXNoU2VsZWN0RWZmZWN0KGVbMV0sIGZhbHNlLCB2b2lkIDAsIHRydWUpO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5ydW5TZWxlY3RDYXJkU3VjY2Vzcyh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKGVbMV0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBvLnB1c2hTZWxlY3RFZmZlY3QoZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnB1c2hTZWxlY3RFZmZlY3QoZVsxXSwgZmFsc2UsIHZvaWQgMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZVsxXSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucnVuU2VsZWN0Q2FyZFN1Y2Nlc3ModCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFNlbGVjdEVmZmVjdChlWzBdLCBmYWxzZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZVswXSwgdHJ1ZSk7XG4gICAgICB0aGlzLnJ1blNlbGVjdENhcmRTdWNjZXNzKHQpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdEJUY2hFbmRfY2hlY2tJc1NhbWVcIilcbiAgY2hlY2tJc1NhbWUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJ1blRvdWNoU3RhcnRDbGVhcigpIHt9XG4gIHJ1blNlbGVjdENhcmRTdWNjZXNzKCkge31cbiAgcnVuQ2xlYXIoKSB7fVxufSJdfQ==