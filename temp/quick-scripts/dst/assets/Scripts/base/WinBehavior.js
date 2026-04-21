
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/WinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5340AFTWlOJb8JuZpUT5mt', 'WinBehavior');
// Scripts/base/WinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.WinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var WinBehavior = /** @class */ (function (_super) {
    __extends(WinBehavior, _super);
    function WinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinBehavior.prototype.start = function (e) {
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
        this.pushWinView(e);
        this.context.gameType !== GameTypeEnums_1.MjGameType.Travel && this.context.gameView.timerComponent.doOnce(0.2, function () {
            t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
        });
        this.finish();
    };
    WinBehavior.prototype.pushWinView = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("WinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
    };
    __decorate([
        mj.traitEvent("WinBhv_pushWinView")
    ], WinBehavior.prototype, "pushWinView", null);
    return WinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.WinBehavior = WinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvV2luQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUsMEVBQXNFO0FBQ3RFLHlEQUF3RDtBQUN4RDtJQUFpQywrQkFBaUI7SUFBbEQ7O0lBK0JBLENBQUM7SUE5QkMsMkJBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNwQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUM5RixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUU7WUFDcEUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsS0FBSztTQUNwQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQU5EO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztrREFPbkM7SUFDSCxrQkFBQztDQS9CRCxBQStCQyxDQS9CZ0MscUNBQWlCLEdBK0JqRDtBQS9CWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFdpbkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQ7XG4gICAgaWYgKG8pIHtcbiAgICAgIGlmICgtMSAhPT0gbykge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIuc3RvcEVmZmVjdChvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkID0gbnVsbDtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5yZXN1bWVCR00oKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0Lmhhc0F1dG9NZXJnZVRpbWVycygpICYmIHRoaXMuY29udGV4dC5jbGVhckF1dG9NZXJnZVRpbWVycygpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVWaWV3LnVucmVnaXN0ZXJTY3JlZW5Ub3VjaEVuZCgpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VBbGxQYW5lbHNBbmRBbGVydHMoKTtcbiAgICB0aGlzLnB1c2hXaW5WaWV3KGUpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVHlwZSAhPT0gTWpHYW1lVHlwZS5UcmF2ZWwgJiYgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50LmRvT25jZSgwLjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuY29udGV4dC5nYW1lVmlldy5zY29yZUl0ZW0uZm9yY2VVcGRhdGVTY29yZShlLmRhdGEuc2V0dGxlbWVudFNjb3JlKTtcbiAgICB9KTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luQmh2X3B1c2hXaW5WaWV3XCIpXG4gIHB1c2hXaW5WaWV3KGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiV2luQ29udHJvbGxlclwiLCB7XG4gICAgICBkYXRhOiBlLmRhdGEsXG4gICAgICBiZ1N0eWxlOiBudWxsLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgIH0sIG51bGwpO1xuICB9XG59Il19