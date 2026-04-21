
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2TouchRunLock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8a47MsQD1JXKfG4WQCuOIW', 'InputTile2TouchRunLock');
// Scripts/input/InputTile2TouchRunLock.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../BaseCoreObject");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var ClickShowLockEffect_1 = require("../ClickShowLockEffect");
var LockEffect_1 = require("../LockEffect");
var Tile2ScreenEdgeEffect_1 = require("../Tile2ScreenEdgeEffect");
var Tile2UpdateScoreEffect_1 = require("../Tile2UpdateScoreEffect");
var InputTile2TouchRunLock = /** @class */ (function (_super) {
    __extends(InputTile2TouchRunLock, _super);
    function InputTile2TouchRunLock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchRunLock.prototype.runLock = function (e, t) {
        t.gameContext.comboModifier.lockClick();
        var o = t.gameContext.tile2TouchData.tileId;
        t.gameContext.tile2DotTrackerModifier.recordErrorLock(o);
        this.excuteIsLock(t, o);
    };
    InputTile2TouchRunLock.prototype.excuteIsLock = function (e, t) {
        var o = e.gameContext.getTileMapObject(), n = o.getTileObject(t);
        if (n) {
            this.pushLockEffect(e, t);
            this.pushUpdateScoreEffectForLock(e);
            var i = e.gameContext.getGameData();
            e.gameContext.tile2ComboChecker.checkIsComboState(i.getComboNum()) || this.pushScreenEdgeClearEffect(e);
            if (o.isOnlyHasLeftRight(n)) {
                this.pushHasLeftRightEffects(e, t);
            }
            else {
                o.isHasCover(n) && this.pushHasCoverEffects(t);
            }
        }
    };
    InputTile2TouchRunLock.prototype.pushLockEffect = function (e, t) {
        var o = e.gameContext.getTileMapObject(), n = o.getTileObject(t), i = new LockEffect_1.LockEffect({
            isLock: true,
            tileId: t,
            lockCorrelationCard: o.getAdjacentLockCards(n)
        });
        e.pushEffect(i);
    };
    InputTile2TouchRunLock.prototype.pushUpdateScoreEffectForLock = function (e) {
        var t = e.gameContext.getGameData(), o = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
            addScore: 0,
            targetScore: t.getScore(),
            isShowCombo: e.gameContext.tile2ComboChecker.checkIsComboState(t.getComboNum())
        });
        e.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushHasLeftRightEffects = function (e, t) {
        this.pushClickShowLockEffect(e, t);
    };
    InputTile2TouchRunLock.prototype.pushClickShowLockEffect = function (e, t) {
        var o = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: t
        });
        e.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushScreenEdgeClearEffect = function (e) {
        var t = new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
            isClear: true
        });
        e.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushHasCoverEffects = function () { };
    __decorate([
        mj.traitEvent("T2TchRunLock_exec")
    ], InputTile2TouchRunLock.prototype, "excuteIsLock", null);
    return InputTile2TouchRunLock;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = InputTile2TouchRunLock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJUb3VjaFJ1bkxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCwyREFBd0Q7QUFDeEQsOERBQTZEO0FBQzdELDRDQUEyQztBQUMzQyxrRUFBaUU7QUFDakUsb0VBQW1FO0FBQ25FO0lBQW9ELDBDQUFjO0lBQWxFOztJQTBEQSxDQUFDO0lBekRDLHdDQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNWLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxDQUFDLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0NBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxJQUFJLHVCQUFVLENBQUM7WUFDakIsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULG1CQUFtQixFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNkRBQTRCLEdBQTVCLFVBQTZCLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDakMsQ0FBQyxHQUFHLElBQUksK0NBQXNCLENBQUM7WUFDN0IsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN6QixXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEYsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELHdEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO1lBQzlCLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsMERBQXlCLEdBQXpCLFVBQTBCLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSw2Q0FBcUIsQ0FBQztZQUNoQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFtQixHQUFuQixjQUF1QixDQUFDO0lBakR4QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7OERBZWxDO0lBb0NILDZCQUFDO0NBMURELEFBMERDLENBMURtRCwrQkFBYyxHQTBEakU7a0JBMURvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBDbGlja1Nob3dMb2NrRWZmZWN0IH0gZnJvbSAnLi4vQ2xpY2tTaG93TG9ja0VmZmVjdCc7XG5pbXBvcnQgeyBMb2NrRWZmZWN0IH0gZnJvbSAnLi4vTG9ja0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNjcmVlbkVkZ2VFZmZlY3QgfSBmcm9tICcuLi9UaWxlMlNjcmVlbkVkZ2VFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyVXBkYXRlU2NvcmVFZmZlY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMlRvdWNoUnVuTG9jayBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgcnVuTG9jayhlLCB0KSB7XG4gICAgdC5nYW1lQ29udGV4dC5jb21ib01vZGlmaWVyLmxvY2tDbGljaygpO1xuICAgIHZhciBvID0gdC5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS50aWxlSWQ7XG4gICAgdC5nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5yZWNvcmRFcnJvckxvY2sobyk7XG4gICAgdGhpcy5leGN1dGVJc0xvY2sodCwgbyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlRjaFJ1bkxvY2tfZXhlY1wiKVxuICBleGN1dGVJc0xvY2soZSwgdCkge1xuICAgIHZhciBvID0gZS5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBuID0gby5nZXRUaWxlT2JqZWN0KHQpO1xuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLnB1c2hMb2NrRWZmZWN0KGUsIHQpO1xuICAgICAgdGhpcy5wdXNoVXBkYXRlU2NvcmVFZmZlY3RGb3JMb2NrKGUpO1xuICAgICAgdmFyIGkgPSBlLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgICBlLmdhbWVDb250ZXh0LnRpbGUyQ29tYm9DaGVja2VyLmNoZWNrSXNDb21ib1N0YXRlKGkuZ2V0Q29tYm9OdW0oKSkgfHwgdGhpcy5wdXNoU2NyZWVuRWRnZUNsZWFyRWZmZWN0KGUpO1xuICAgICAgaWYgKG8uaXNPbmx5SGFzTGVmdFJpZ2h0KG4pKSB7XG4gICAgICAgIHRoaXMucHVzaEhhc0xlZnRSaWdodEVmZmVjdHMoZSwgdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvLmlzSGFzQ292ZXIobikgJiYgdGhpcy5wdXNoSGFzQ292ZXJFZmZlY3RzKHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdXNoTG9ja0VmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSBvLmdldFRpbGVPYmplY3QodCksXG4gICAgICBpID0gbmV3IExvY2tFZmZlY3Qoe1xuICAgICAgICBpc0xvY2s6IHRydWUsXG4gICAgICAgIHRpbGVJZDogdCxcbiAgICAgICAgbG9ja0NvcnJlbGF0aW9uQ2FyZDogby5nZXRBZGphY2VudExvY2tDYXJkcyhuKVxuICAgICAgfSk7XG4gICAgZS5wdXNoRWZmZWN0KGkpO1xuICB9XG4gIHB1c2hVcGRhdGVTY29yZUVmZmVjdEZvckxvY2soZSkge1xuICAgIHZhciB0ID0gZS5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbyA9IG5ldyBUaWxlMlVwZGF0ZVNjb3JlRWZmZWN0KHtcbiAgICAgICAgYWRkU2NvcmU6IDAsXG4gICAgICAgIHRhcmdldFNjb3JlOiB0LmdldFNjb3JlKCksXG4gICAgICAgIGlzU2hvd0NvbWJvOiBlLmdhbWVDb250ZXh0LnRpbGUyQ29tYm9DaGVja2VyLmNoZWNrSXNDb21ib1N0YXRlKHQuZ2V0Q29tYm9OdW0oKSlcbiAgICAgIH0pO1xuICAgIGUucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgcHVzaEhhc0xlZnRSaWdodEVmZmVjdHMoZSwgdCkge1xuICAgIHRoaXMucHVzaENsaWNrU2hvd0xvY2tFZmZlY3QoZSwgdCk7XG4gIH1cbiAgcHVzaENsaWNrU2hvd0xvY2tFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IENsaWNrU2hvd0xvY2tFZmZlY3Qoe1xuICAgICAgdGlsZUlkOiB0XG4gICAgfSk7XG4gICAgZS5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBwdXNoU2NyZWVuRWRnZUNsZWFyRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBUaWxlMlNjcmVlbkVkZ2VFZmZlY3Qoe1xuICAgICAgaXNDbGVhcjogdHJ1ZVxuICAgIH0pO1xuICAgIGUucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgcHVzaEhhc0NvdmVyRWZmZWN0cygpIHt9XG59Il19