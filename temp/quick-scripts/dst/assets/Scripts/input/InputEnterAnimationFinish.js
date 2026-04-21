
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputEnterAnimationFinish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1357b3lH4xF2pm0C9vcviYT', 'InputEnterAnimationFinish');
// Scripts/input/InputEnterAnimationFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var InitCollectTargetEffect_1 = require("../InitCollectTargetEffect");
var EnterAnimationFinishEffect_1 = require("../EnterAnimationFinishEffect");
var InputBase_1 = require("../inputbase/InputBase");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var InputEnterAnimationFinish = /** @class */ (function (_super) {
    __extends(InputEnterAnimationFinish, _super);
    function InputEnterAnimationFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputEnterAnimationFinish.prototype.excute = function () {
        this.pushEnterAnimationFinishEffect();
        this.gameContext.gameType === GameTypeEnums_1.MjGameType.Travel && this.pushInitCollectTargetEffect();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Classic) {
            this.showFailView();
        }
        else {
            this.checkDeadlockAndShuffle();
        }
    };
    InputEnterAnimationFinish.prototype.showFailView = function () {
        if (this.tileMapObject.checkIsDead([])) {
            this.gameContext.gameModifier.modifyClassicEnd();
            this.pushClassicBeforeFailEffect();
            this.pushFailEffect({
                skipInterAd: true
            });
        }
    };
    InputEnterAnimationFinish.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputEnterAnimationFinish.prototype.pushFailEffect = function (e) {
        var t = new ClassicFailEffect_1.ClassicFailEffect({
            skipInterAd: null == e ? void 0 : e.skipInterAd
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputEnterAnimationFinish.prototype.pushEnterAnimationFinishEffect = function () {
        var e = new EnterAnimationFinishEffect_1.EnterAnimationFinishEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    InputEnterAnimationFinish.prototype.pushInitCollectTargetEffect = function () {
        var e, t, o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem;
        if (o) {
            var n = new InitCollectTargetEffect_1.InitCollectTargetEffect({
                collectDetails: o.getAllCollectDetails()
            });
            this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    InputEnterAnimationFinish.prototype.checkDeadlockAndShuffle = function () {
        var e = this.gameContext.getIsNewGame(), t = this.gameContext.getIsRestart();
        if (!e && !t && this.tileMapObject.checkIsDead([])) {
            var o = {
                inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
                from: GameInputEnum_1.EShuffleFrom.Free,
                isFree: true
            };
            this.gameSimulator.input(o);
        }
    };
    __decorate([
        mj.traitEvent("IptEnterAniFin_excute")
    ], InputEnterAnimationFinish.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptEnterAniFin_pushColTag")
    ], InputEnterAnimationFinish.prototype, "pushInitCollectTargetEffect", null);
    return InputEnterAnimationFinish;
}(InputBase_1.InputBase));
exports.default = InputEnterAnimationFinish;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0RW50ZXJBbmltYXRpb25GaW5pc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxxRUFBbUY7QUFDbkYsMEVBQXNFO0FBQ3RFLHNFQUFxRTtBQUNyRSw0RUFBMkU7QUFDM0Usb0RBQW1EO0FBQ25ELDBEQUF5RDtBQUN6RCxzRUFBcUU7QUFDckU7SUFBdUQsNkNBQVM7SUFBaEU7O0lBMERBLENBQUM7SUF4REMsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3RGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCxnREFBWSxHQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQ2xCLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELCtEQUEyQixHQUEzQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsa0RBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDO1lBQzVCLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7U0FDaEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxrRUFBOEIsR0FBOUI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLHVEQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELCtEQUEyQixHQUEzQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ2hKLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztnQkFDbEMsY0FBYyxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTthQUN6QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUNELDJEQUF1QixHQUF2QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sU0FBUyxFQUFFLDhCQUFjLENBQUMsT0FBTztnQkFDakMsSUFBSSxFQUFFLDRCQUFZLENBQUMsSUFBSTtnQkFDdkIsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBdkREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsyREFTdEM7SUF5QkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO2dGQVcxQztJQWFILGdDQUFDO0NBMURELEFBMERDLENBMURzRCxxQkFBUyxHQTBEL0Q7a0JBMURvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEluaXRDb2xsZWN0VGFyZ2V0RWZmZWN0IH0gZnJvbSAnLi4vSW5pdENvbGxlY3RUYXJnZXRFZmZlY3QnO1xuaW1wb3J0IHsgRW50ZXJBbmltYXRpb25GaW5pc2hFZmZlY3QgfSBmcm9tICcuLi9FbnRlckFuaW1hdGlvbkZpbmlzaEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmltcG9ydCB7IENsYXNzaWNGYWlsRWZmZWN0IH0gZnJvbSAnLi4vQ2xhc3NpY0ZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QgfSBmcm9tICcuLi9DbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEVudGVyQW5pbWF0aW9uRmluaXNoIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRFbnRlckFuaUZpbl9leGN1dGVcIilcbiAgZXhjdXRlKCkge1xuICAgIHRoaXMucHVzaEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0KCk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwgJiYgdGhpcy5wdXNoSW5pdENvbGxlY3RUYXJnZXRFZmZlY3QoKTtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLnNob3dGYWlsVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrRGVhZGxvY2tBbmRTaHVmZmxlKCk7XG4gICAgfVxuICB9XG4gIHNob3dGYWlsVmlldygpIHtcbiAgICBpZiAodGhpcy50aWxlTWFwT2JqZWN0LmNoZWNrSXNEZWFkKFtdKSkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5Q2xhc3NpY0VuZCgpO1xuICAgICAgdGhpcy5wdXNoQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QoKTtcbiAgICAgIHRoaXMucHVzaEZhaWxFZmZlY3Qoe1xuICAgICAgICBza2lwSW50ZXJBZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHB1c2hDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCh7fSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hGYWlsRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBDbGFzc2ljRmFpbEVmZmVjdCh7XG4gICAgICBza2lwSW50ZXJBZDogbnVsbCA9PSBlID8gdm9pZCAwIDogZS5za2lwSW50ZXJBZFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuU2VyaWFsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdEVudGVyQW5pRmluX3B1c2hDb2xUYWdcIilcbiAgcHVzaEluaXRDb2xsZWN0VGFyZ2V0RWZmZWN0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBudWxsID09PSAodCA9IG51bGwgPT09IChlID0gdGhpcy5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRUaWxlTWFwT2JqZWN0KCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY29sbGVjdFN5c3RlbTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSBuZXcgSW5pdENvbGxlY3RUYXJnZXRFZmZlY3Qoe1xuICAgICAgICBjb2xsZWN0RGV0YWlsczogby5nZXRBbGxDb2xsZWN0RGV0YWlscygpXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChuLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgfVxuICB9XG4gIGNoZWNrRGVhZGxvY2tBbmRTaHVmZmxlKCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRJc05ld0dhbWUoKSxcbiAgICAgIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldElzUmVzdGFydCgpO1xuICAgIGlmICghZSAmJiAhdCAmJiB0aGlzLnRpbGVNYXBPYmplY3QuY2hlY2tJc0RlYWQoW10pKSB7XG4gICAgICB2YXIgbyA9IHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TaHVmZmxlLFxuICAgICAgICBmcm9tOiBFU2h1ZmZsZUZyb20uRnJlZSxcbiAgICAgICAgaXNGcmVlOiB0cnVlXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lU2ltdWxhdG9yLmlucHV0KG8pO1xuICAgIH1cbiAgfVxufSJdfQ==