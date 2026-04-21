
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/DailyChallengeWinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3a8eNc//1FgKNjjU/jWOUK', 'DailyChallengeWinBehavior');
// Scripts/base/DailyChallengeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeWinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DailyChallengeWinBehavior = /** @class */ (function (_super) {
    __extends(DailyChallengeWinBehavior, _super);
    function DailyChallengeWinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyChallengeWinBehavior.prototype.start = function (e) {
        var t = this, o = this.context.applauseAudioId;
        if (o) {
            if (-1 !== o) {
                mj.audioManager.stopEffect(o);
            }
            else {
                mj.audioManager.stopAllEffect();
            }
            this.context.applauseAudioId = null;
            mj.audioManager.resumeBGM();
        }
        this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
        this.context.gameView.setSwallowEventNodeActive(false);
        this._context.gameView.unregisterScreenTouchEnd();
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        ControllerManager_1.default.getInstance().pushViewByController("DailyChallengeWinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
        this.context.gameView.timerComponent.doOnce(0.2, function () {
            t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
        });
        this.finish();
    };
    return DailyChallengeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DailyChallengeWinBehavior = DailyChallengeWinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRGFpbHlDaGFsbGVuZ2VXaW5CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx5REFBd0Q7QUFDeEQ7SUFBK0MsNkNBQWlCO0lBQWhFOztJQTJCQSxDQUFDO0lBMUJDLHlDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDcEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNsRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzFELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFO1lBQ2xGLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLEtBQUs7U0FDcEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxnQ0FBQztBQUFELENBM0JBLEFBMkJDLENBM0I4QyxxQ0FBaUIsR0EyQi9EO0FBM0JZLDhEQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIERhaWx5Q2hhbGxlbmdlV2luQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmFwcGxhdXNlQXVkaW9JZDtcbiAgICBpZiAobykge1xuICAgICAgaWYgKC0xICE9PSBvKSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wRWZmZWN0KG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnN0b3BBbGxFZmZlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQgPSBudWxsO1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnJlc3VtZUJHTSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuaGFzQXV0b01lcmdlVGltZXJzKCkgJiYgdGhpcy5jb250ZXh0LmNsZWFyQXV0b01lcmdlVGltZXJzKCk7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2FtZVZpZXcudW5yZWdpc3RlclNjcmVlblRvdWNoRW5kKCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZUFsbFBhbmVsc0FuZEFsZXJ0cygpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseUNoYWxsZW5nZVdpbkNvbnRyb2xsZXJcIiwge1xuICAgICAgZGF0YTogZS5kYXRhLFxuICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9LCBudWxsKTtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcudGltZXJDb21wb25lbnQuZG9PbmNlKDAuMiwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5jb250ZXh0LmdhbWVWaWV3LnNjb3JlSXRlbS5mb3JjZVVwZGF0ZVNjb3JlKGUuZGF0YS5zZXR0bGVtZW50U2NvcmUpO1xuICAgIH0pO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cbn0iXX0=