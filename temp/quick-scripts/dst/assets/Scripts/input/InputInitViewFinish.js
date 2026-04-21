
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputInitViewFinish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd18544NzbhKPJW7a6EhRa7M', 'InputInitViewFinish');
// Scripts/input/InputInitViewFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var UpdateHitTipsPropEffect_1 = require("../UpdateHitTipsPropEffect");
var UpdateShufflePropEffect_1 = require("../UpdateShufflePropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputInitViewFinish = /** @class */ (function (_super) {
    __extends(InputInitViewFinish, _super);
    function InputInitViewFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitViewFinish.prototype.excute = function () {
        this.pushUpdateHitTipsPropEffect(this.gameContext.getGameData().getHitTipsNums());
        this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
        mj.EventManager.emit(Config_1.HIDELOADING, this);
    };
    InputInitViewFinish.prototype.pushUpdateHitTipsPropEffect = function (e) {
        var t = new UpdateHitTipsPropEffect_1.UpdateHitTipsPropEffect({
            curNum: e
        });
        this.pushEffect(t);
    };
    InputInitViewFinish.prototype.pushUpdateShufflePropEffect = function (e) {
        var t = new UpdateShufflePropEffect_1.UpdateShufflePropEffect({
            curNum: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptInitViewFin_exec")
    ], InputInitViewFinish.prototype, "excute", null);
    return InputInitViewFinish;
}(InputBase_1.InputBase));
exports.default = InputInitViewFinish;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0SW5pdFZpZXdGaW5pc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUF3QztBQUN4QywyREFBd0Q7QUFDeEQsc0VBQXFFO0FBQ3JFLHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFDbkQ7SUFBaUQsdUNBQVM7SUFBMUQ7O0lBbUJBLENBQUM7SUFqQkMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCx5REFBMkIsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLGlEQUF1QixDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QseURBQTJCLEdBQTNCLFVBQTRCLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQWhCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7cURBS3BDO0lBYUgsMEJBQUM7Q0FuQkQsQUFtQkMsQ0FuQmdELHFCQUFTLEdBbUJ6RDtrQkFuQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhJREVMT0FESU5HIH0gZnJvbSAnLi4vQ29uZmlnJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdCB9IGZyb20gJy4uL1VwZGF0ZUhpdFRpcHNQcm9wRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZVNodWZmbGVQcm9wRWZmZWN0IH0gZnJvbSAnLi4vVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEluaXRWaWV3RmluaXNoIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRJbml0Vmlld0Zpbl9leGVjXCIpXG4gIGV4Y3V0ZSgpIHtcbiAgICB0aGlzLnB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdCh0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0SGl0VGlwc051bXMoKSk7XG4gICAgdGhpcy5wdXNoVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QodGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNodWZmbGVOdW1zKCkpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEhJREVMT0FESU5HLCB0aGlzKTtcbiAgfVxuICBwdXNoVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IFVwZGF0ZUhpdFRpcHNQcm9wRWZmZWN0KHtcbiAgICAgIGN1ck51bTogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0KTtcbiAgfVxuICBwdXNoVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IFVwZGF0ZVNodWZmbGVQcm9wRWZmZWN0KHtcbiAgICAgIGN1ck51bTogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=