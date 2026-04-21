
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTouchStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32cfbiZxBJGkZGMlFI+z839', 'InputTouchStart');
// Scripts/InputTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ClickShowLockEffect_1 = require("./ClickShowLockEffect");
var LockEffect_1 = require("./LockEffect");
var UpdateScoreEffect_1 = require("./UpdateScoreEffect");
var InputBaseTouchStart_1 = require("./inputbase/InputBaseTouchStart");
var ClearHelper_1 = require("./ClearHelper");
var InputTouchStart = /** @class */ (function (_super) {
    __extends(InputTouchStart, _super);
    function InputTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchStart.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchStart.prototype.runLock = function (t, o) {
        _super.prototype.runLock.call(this, t, o);
        this.gameContext.comboModifier.lockClick();
        this.gameContext.trackerModifier.triggerInvalid(o);
        this.excuteIsLock(o);
    };
    InputTouchStart.prototype.runClear = function (t, o) {
        _super.prototype.runClear.call(this, t, o);
        ClearHelper_1.default.runClear(this.gameContext, t, this);
    };
    InputTouchStart.prototype.excuteIsLock = function (e) {
        if (this.gameContext.touchData.isLock) {
            this.pushLockEffect(e);
            this.pushUpdateScoreEffectForLock();
            var t = this.gameController.tileMapObject.getTileObject(e);
            t && (this.gameController.tileMapObject.isOnlyHasLeftRight(t) ? this.pushHasLeftRightEffects(e) : this.gameController.tileMapObject.isHasCover(t) && this.pushHasCoverEffects(e));
        }
    };
    InputTouchStart.prototype.pushUnSelectAllTileIds = function () {
        var e = this;
        this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (t) {
            e.pushSelectEffect(t, true, void 0, true);
        });
    };
    InputTouchStart.prototype.pushUpdateScoreEffectForLock = function () {
        if (this.gameContext.gameType !== GameTypeEnums_1.MjGameType.Travel) {
            var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
                addScore: 0,
                targetScore: e.getScore(),
                isShowCombo: this.gameContext.comboChecker.canShowCombo()
            });
            this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    InputTouchStart.prototype.pushHasLeftRightEffects = function (e) {
        this.pushClickShowLockEffect(e);
    };
    InputTouchStart.prototype.pushClickShowLockEffect = function (e) {
        var t = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTouchStart.prototype.pushHasCoverEffects = function () { };
    InputTouchStart.prototype.pushLockEffect = function (e) {
        var t = this.gameController.tileMapObject.getTileObject(e), o = new LockEffect_1.LockEffect({
            isLock: true,
            tileId: e,
            lockCorrelationCard: this.gameController.tileMapObject.getAdjacentLockCards(t)
        });
        this.pushEffect(o);
    };
    __decorate([
        mj.traitEvent("IptTchStart_exec")
    ], InputTouchStart.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptTchStart_Lock")
    ], InputTouchStart.prototype, "excuteIsLock", null);
    __decorate([
        mj.traitEvent("IptTchStart_pushCvr")
    ], InputTouchStart.prototype, "pushHasCoverEffects", null);
    return InputTouchStart;
}(InputBaseTouchStart_1.default));
exports.default = InputTouchStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VG91Y2hTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXVEO0FBQ3ZELHlFQUFxRTtBQUNyRSw2REFBNEQ7QUFDNUQsMkNBQTBDO0FBQzFDLHlEQUF3RDtBQUN4RCx1RUFBa0U7QUFDbEUsNkNBQXdDO0FBQ3hDO0lBQTZDLG1DQUFtQjtJQUFoRTs7SUE2REEsQ0FBQztJQTNEQyxnQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUM7UUFDVixpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELGtDQUFRLEdBQVIsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNYLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUks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bXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IENsaWNrU2hvd0xvY2tFZmZlY3QgfSBmcm9tICcuL0NsaWNrU2hvd0xvY2tFZmZlY3QnO1xuaW1wb3J0IHsgTG9ja0VmZmVjdCB9IGZyb20gJy4vTG9ja0VmZmVjdCc7XG5pbXBvcnQgeyBVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4vVXBkYXRlU2NvcmVFZmZlY3QnO1xuaW1wb3J0IElucHV0QmFzZVRvdWNoU3RhcnQgZnJvbSAnLi9pbnB1dGJhc2UvSW5wdXRCYXNlVG91Y2hTdGFydCc7XG5pbXBvcnQgQ2xlYXJIZWxwZXIgZnJvbSAnLi9DbGVhckhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRvdWNoU3RhcnQgZXh0ZW5kcyBJbnB1dEJhc2VUb3VjaFN0YXJ0IHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUY2hTdGFydF9leGVjXCIpXG4gIGV4Y3V0ZSh0KSB7XG4gICAgc3VwZXIuZXhjdXRlLmNhbGwodGhpcywgdCk7XG4gIH1cbiAgcnVuTG9jayh0LCBvKSB7XG4gICAgc3VwZXIucnVuTG9jay5jYWxsKHRoaXMsIHQsIG8pO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuY29tYm9Nb2RpZmllci5sb2NrQ2xpY2soKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnRyYWNrZXJNb2RpZmllci50cmlnZ2VySW52YWxpZChvKTtcbiAgICB0aGlzLmV4Y3V0ZUlzTG9jayhvKTtcbiAgfVxuICBydW5DbGVhcih0LCBvKSB7XG4gICAgc3VwZXIucnVuQ2xlYXIuY2FsbCh0aGlzLCB0LCBvKTtcbiAgICBDbGVhckhlbHBlci5ydW5DbGVhcih0aGlzLmdhbWVDb250ZXh0LCB0LCB0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFRjaFN0YXJ0X0xvY2tcIilcbiAgZXhjdXRlSXNMb2NrKGUpIHtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC50b3VjaERhdGEuaXNMb2NrKSB7XG4gICAgICB0aGlzLnB1c2hMb2NrRWZmZWN0KGUpO1xuICAgICAgdGhpcy5wdXNoVXBkYXRlU2NvcmVFZmZlY3RGb3JMb2NrKCk7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRUaWxlT2JqZWN0KGUpO1xuICAgICAgdCAmJiAodGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmlzT25seUhhc0xlZnRSaWdodCh0KSA/IHRoaXMucHVzaEhhc0xlZnRSaWdodEVmZmVjdHMoZSkgOiB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuaXNIYXNDb3Zlcih0KSAmJiB0aGlzLnB1c2hIYXNDb3ZlckVmZmVjdHMoZSkpO1xuICAgIH1cbiAgfVxuICBwdXNoVW5TZWxlY3RBbGxUaWxlSWRzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBlLnB1c2hTZWxlY3RFZmZlY3QodCwgdHJ1ZSwgdm9pZCAwLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuICBwdXNoVXBkYXRlU2NvcmVFZmZlY3RGb3JMb2NrKCkge1xuICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LmdhbWVUeXBlICE9PSBNakdhbWVUeXBlLlRyYXZlbCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICAgIHQgPSBuZXcgVXBkYXRlU2NvcmVFZmZlY3Qoe1xuICAgICAgICAgIGFkZFNjb3JlOiAwLFxuICAgICAgICAgIHRhcmdldFNjb3JlOiBlLmdldFNjb3JlKCksXG4gICAgICAgICAgaXNTaG93Q29tYm86IHRoaXMuZ2FtZUNvbnRleHQuY29tYm9DaGVja2VyLmNhblNob3dDb21ibygpXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICB9XG4gIH1cbiAgcHVzaEhhc0xlZnRSaWdodEVmZmVjdHMoZSkge1xuICAgIHRoaXMucHVzaENsaWNrU2hvd0xvY2tFZmZlY3QoZSk7XG4gIH1cbiAgcHVzaENsaWNrU2hvd0xvY2tFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IENsaWNrU2hvd0xvY2tFZmZlY3Qoe1xuICAgICAgdGlsZUlkOiBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFRjaFN0YXJ0X3B1c2hDdnJcIilcbiAgcHVzaEhhc0NvdmVyRWZmZWN0cygpIHt9XG4gIHB1c2hMb2NrRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRUaWxlT2JqZWN0KGUpLFxuICAgICAgbyA9IG5ldyBMb2NrRWZmZWN0KHtcbiAgICAgICAgaXNMb2NrOiB0cnVlLFxuICAgICAgICB0aWxlSWQ6IGUsXG4gICAgICAgIGxvY2tDb3JyZWxhdGlvbkNhcmQ6IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRBZGphY2VudExvY2tDYXJkcyh0KVxuICAgICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KG8pO1xuICB9XG59Il19