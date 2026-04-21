
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2FailBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1532IXHNZPY7L9k+pSEoRt', 'Tile2FailBehavior');
// Scripts/base/Tile2FailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FailBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2FailBehavior = /** @class */ (function (_super) {
    __extends(Tile2FailBehavior, _super);
    function Tile2FailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FailBehavior.prototype.start = function (e) {
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        this.pushFailView(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2FailBehavior.prototype.pushFailView = function (e) {
        var t, o, n, i;
        ControllerManager_1.default.getInstance().pushViewByController("Tile2FailController", {
            tiles: null === (t = e.data) || void 0 === t ? void 0 : t.tiles,
            reviveNum: null === (o = e.data) || void 0 === o ? void 0 : o.reviveNum,
            tilePreviewLayout: null === (n = e.data) || void 0 === n ? void 0 : n.tilePreviewLayout,
            adReviveAllowed: null === (i = e.data) || void 0 === i ? void 0 : i.adReviveAllowed
        });
    };
    __decorate([
        mj.traitEvent("Tile2FailBhv_start")
    ], Tile2FailBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("Tile2FailBhv_pushView")
    ], Tile2FailBehavior.prototype, "pushFailView", null);
    return Tile2FailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2FailBehavior = Tile2FailBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJGYWlsQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUF1QyxxQ0FBaUI7SUFBeEQ7O0lBaUJBLENBQUM7SUFmQyxpQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRTtZQUMxRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMvRCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN2RSxpQkFBaUIsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7WUFDdkYsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7U0FDcEYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztrREFLbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7eURBU3RDO0lBQ0gsd0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQnNDLHFDQUFpQixHQWlCdkQ7QUFqQlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyRmFpbEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmFpbEJodl9zdGFydFwiKVxuICBzdGFydChlKSB7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZUFsbFBhbmVsc0FuZEFsZXJ0cygpO1xuICAgIHRoaXMucHVzaEZhaWxWaWV3KGUpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkZhaWxCaHZfcHVzaFZpZXdcIilcbiAgcHVzaEZhaWxWaWV3KGUpIHtcbiAgICB2YXIgdCwgbywgbiwgaTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVGlsZTJGYWlsQ29udHJvbGxlclwiLCB7XG4gICAgICB0aWxlczogbnVsbCA9PT0gKHQgPSBlLmRhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudGlsZXMsXG4gICAgICByZXZpdmVOdW06IG51bGwgPT09IChvID0gZS5kYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLnJldml2ZU51bSxcbiAgICAgIHRpbGVQcmV2aWV3TGF5b3V0OiBudWxsID09PSAobiA9IGUuZGF0YSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi50aWxlUHJldmlld0xheW91dCxcbiAgICAgIGFkUmV2aXZlQWxsb3dlZDogbnVsbCA9PT0gKGkgPSBlLmRhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuYWRSZXZpdmVBbGxvd2VkXG4gICAgfSk7XG4gIH1cbn0iXX0=