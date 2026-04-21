
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/TravelWinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'facf3RkRTBIbaTrH11lqK63', 'TravelWinBehavior');
// Scripts/base/TravelWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelWinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var TravelWinBehavior = /** @class */ (function (_super) {
    __extends(TravelWinBehavior, _super);
    function TravelWinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelWinBehavior.prototype.start = function (e) {
        var t = this.context.applauseAudioId;
        if (t) {
            if (-1 !== t) {
                mj.audioManager.stopEffect(t);
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
        ControllerManager_1.default.getInstance().pushViewByController("TravelWinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
        this.finish();
    };
    return TravelWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.TravelWinBehavior = TravelWinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVHJhdmVsV2luQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUseURBQXdEO0FBQ3hEO0lBQXVDLHFDQUFpQjtJQUF4RDs7SUF1QkEsQ0FBQztJQXRCQyxpQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNwQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUQsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUU7WUFDMUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsS0FBSztTQUNwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCx3QkFBQztBQUFELENBdkJBLEFBdUJDLENBdkJzQyxxQ0FBaUIsR0F1QnZEO0FBdkJZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRyYXZlbFdpbkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkO1xuICAgIGlmICh0KSB7XG4gICAgICBpZiAoLTEgIT09IHQpIHtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnN0b3BFZmZlY3QodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIuc3RvcEFsbEVmZmVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZXh0LmFwcGxhdXNlQXVkaW9JZCA9IG51bGw7XG4gICAgICBtai5hdWRpb01hbmFnZXIucmVzdW1lQkdNKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5oYXNBdXRvTWVyZ2VUaW1lcnMoKSAmJiB0aGlzLmNvbnRleHQuY2xlYXJBdXRvTWVyZ2VUaW1lcnMoKTtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5fY29udGV4dC5nYW1lVmlldy51bnJlZ2lzdGVyU2NyZWVuVG91Y2hFbmQoKTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlQWxsUGFuZWxzQW5kQWxlcnRzKCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbFdpbkNvbnRyb2xsZXJcIiwge1xuICAgICAgZGF0YTogZS5kYXRhLFxuICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9LCBudWxsKTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG59Il19