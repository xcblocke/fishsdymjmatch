
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputEnterAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5be67IJjMREzY7g1ywTKm9x', 'InputEnterAnimation');
// Scripts/input/InputEnterAnimation.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EnterAnimationEffect_1 = require("../EnterAnimationEffect");
var DailyChallengeDateEffect_1 = require("../DailyChallengeDateEffect");
var UpdateLevelEffect_1 = require("../UpdateLevelEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var UpdateScoreEffect_1 = require("../UpdateScoreEffect");
var InputBase_1 = require("../inputbase/InputBase");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputEnterAnimation = /** @class */ (function (_super) {
    __extends(InputEnterAnimation, _super);
    function InputEnterAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputEnterAnimation.prototype.excute = function () {
        UserModel_1.default.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.DailyChallenge) {
            this.pushUpdateDailyChallengeDateEffect();
            this.pushUpdateScoreEffect();
        }
        else if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Travel)
            this.pushInitCollectTargetEffect();
        else {
            this.pushUpdateScoreEffect();
            this.pushUpdateLevelEffect();
        }
    };
    InputEnterAnimation.prototype.pushInitCollectTargetEffect = function () { };
    InputEnterAnimation.prototype.pushUpdateDailyChallengeDateEffect = function () {
        var e = new DailyChallengeDateEffect_1.DailyChallengeDateEffect({
            date: this.gameContext.getGameData().getDailyChallengeTimestamp()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushUpdateLevelEffect = function () {
        var e = new UpdateLevelEffect_1.UpdateLevelEffect({
            level: this.gameContext.getGameData().getLevelId()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushEnterAnimationEffect = function () {
        var e = new EnterAnimationEffect_1.EnterAnimationEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root, null, true);
    };
    InputEnterAnimation.prototype.pushUpdateScoreEffect = function () {
        var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: e.getScore(),
            isShowCombo: false
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptEnterAni_excute")
    ], InputEnterAnimation.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptEnterAni_pushColTag")
    ], InputEnterAnimation.prototype, "pushInitCollectTargetEffect", null);
    return InputEnterAnimation;
}(InputBase_1.InputBase));
exports.default = InputEnterAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0RW50ZXJBbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCwwRUFBc0U7QUFDdEUsZ0VBQStEO0FBQy9ELHdFQUF1RTtBQUN2RSwwREFBeUQ7QUFDekQsZ0VBQStEO0FBQy9ELDBEQUF5RDtBQUN6RCxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25EO0lBQWlELHVDQUFTO0lBQTFEOztJQStDQSxDQUFDO0lBN0NDLG9DQUFNLEdBQU47UUFDRSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssMEJBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO2FBQUs7WUFDbEcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQseURBQTJCLEdBQTNCLGNBQStCLENBQUM7SUFDaEMsZ0VBQWtDLEdBQWxDO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxtREFBd0IsQ0FBQztZQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtTQUNsRSxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxtREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDO1lBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRTtTQUNuRCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxzREFBd0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO1lBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7U0FDekQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxtREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUNwQyxDQUFDLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQztZQUN4QixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELHNEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7WUFDL0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1NBQ2xGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTVDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7cURBVW5DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzBFQUNSO0lBa0NsQywwQkFBQztDQS9DRCxBQStDQyxDQS9DZ0QscUJBQVMsR0ErQ3pEO2tCQS9Db0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVudGVyQW5pbWF0aW9uRWZmZWN0IH0gZnJvbSAnLi4vRW50ZXJBbmltYXRpb25FZmZlY3QnO1xuaW1wb3J0IHsgRGFpbHlDaGFsbGVuZ2VEYXRlRWZmZWN0IH0gZnJvbSAnLi4vRGFpbHlDaGFsbGVuZ2VEYXRlRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZUxldmVsRWZmZWN0IH0gZnJvbSAnLi4vVXBkYXRlTGV2ZWxFZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlTWF0Y2hOdW1FZmZlY3QgfSBmcm9tICcuLi9VcGRhdGVNYXRjaE51bUVmZmVjdCc7XG5pbXBvcnQgeyBVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4uL1VwZGF0ZVNjb3JlRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEVudGVyQW5pbWF0aW9uIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRFbnRlckFuaV9leGN1dGVcIilcbiAgZXhjdXRlKCkge1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpICYmIHRoaXMucHVzaEVudGVyQW5pbWF0aW9uRWZmZWN0KCk7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgIHRoaXMucHVzaFVwZGF0ZURhaWx5Q2hhbGxlbmdlRGF0ZUVmZmVjdCgpO1xuICAgICAgdGhpcy5wdXNoVXBkYXRlU2NvcmVFZmZlY3QoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB0aGlzLnB1c2hJbml0Q29sbGVjdFRhcmdldEVmZmVjdCgpO2Vsc2Uge1xuICAgICAgdGhpcy5wdXNoVXBkYXRlU2NvcmVFZmZlY3QoKTtcbiAgICAgIHRoaXMucHVzaFVwZGF0ZUxldmVsRWZmZWN0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0RW50ZXJBbmlfcHVzaENvbFRhZ1wiKVxuICBwdXNoSW5pdENvbGxlY3RUYXJnZXRFZmZlY3QoKSB7fVxuICBwdXNoVXBkYXRlRGFpbHlDaGFsbGVuZ2VEYXRlRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IERhaWx5Q2hhbGxlbmdlRGF0ZUVmZmVjdCh7XG4gICAgICBkYXRlOiB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAoKVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgcHVzaFVwZGF0ZUxldmVsRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IFVwZGF0ZUxldmVsRWZmZWN0KHtcbiAgICAgIGxldmVsOiB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBwdXNoRW50ZXJBbmltYXRpb25FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgRW50ZXJBbmltYXRpb25FZmZlY3Qoe1xuICAgICAgY2FyZExheW91dENvbmZpZzogdGhpcy5nYW1lQ29udGV4dC5nZXRDYXJkTGF5b3V0Q29uZmlnKClcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbiAgcHVzaFVwZGF0ZVNjb3JlRWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IG5ldyBVcGRhdGVTY29yZUVmZmVjdCh7XG4gICAgICAgIGFkZFNjb3JlOiAwLFxuICAgICAgICB0YXJnZXRTY29yZTogZS5nZXRTY29yZSgpLFxuICAgICAgICBpc1Nob3dDb21ibzogZmFsc2VcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgcHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IFVwZGF0ZU1hdGNoTnVtRWZmZWN0KHtcbiAgICAgIGNhbk1hdGNoQ2FyZFBhaXJOdW06IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=