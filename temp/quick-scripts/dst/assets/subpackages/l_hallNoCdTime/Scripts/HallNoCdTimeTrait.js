
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallNoCdTime/Scripts/HallNoCdTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f76055YQHBKHbZ9+nqpuLUe', 'HallNoCdTimeTrait');
// subpackages/l_hallNoCdTime/Scripts/HallNoCdTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallNoCdTimeTrait = /** @class */ (function (_super) {
    __extends(HallNoCdTimeTrait, _super);
    function HallNoCdTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pausedRemainingCD = 0;
        return _this;
    }
    HallNoCdTimeTrait.prototype.onAdMgr_interAdClose = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._pausedRemainingCD = 0;
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.recordRemainingCD = function () {
        if (!(this._pausedRemainingCD > 0)) {
            var e = mj.getClassByName("InterAdCDTrait");
            if (e) {
                var t = e.getInstance();
                t && t.getRemainingCD && (this._pausedRemainingCD = t.getRemainingCD());
            }
        }
    };
    HallNoCdTimeTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.recordRemainingCD("退出游戏");
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.onHallCtl_viewDidShow = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.recordRemainingCD("进入大厅");
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._pausedRemainingCD > 0) {
                var r = mj.getClassByName("InterAdCDTrait");
                if (r) {
                    var i = r.getInstance();
                    if (i && i.adjustLastPlayTime && i.getCDTime) {
                        var n = i.getCDTime(), a = Date.now() - (n - this._pausedRemainingCD);
                        i.adjustLastPlayTime(a);
                    }
                }
                this._pausedRemainingCD = 0;
            }
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.traitKey = "HallNoCdTime";
    HallNoCdTimeTrait = __decorate([
        mj.trait,
        mj.class("HallNoCdTimeTrait")
    ], HallNoCdTimeTrait);
    return HallNoCdTimeTrait;
}(Trait_1.default));
exports.default = HallNoCdTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxOb0NkVGltZS9TY3JpcHRzL0hhbGxOb0NkVGltZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQStDQztRQTlDQyx3QkFBa0IsR0FBRyxDQUFDLENBQUM7O0lBOEN6QixDQUFDO0lBNUNDLGdEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsZ0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELGlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxpREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7d0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDakQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN6QjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE1Q00sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFGZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBK0NyQztJQUFELHdCQUFDO0NBL0NELEFBK0NDLENBL0M4QyxlQUFLLEdBK0NuRDtrQkEvQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxOb0NkVGltZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsTm9DZFRpbWVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BhdXNlZFJlbWFpbmluZ0NEID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsTm9DZFRpbWVcIjtcbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLl9wYXVzZWRSZW1haW5pbmdDRCA9IDA7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICByZWNvcmRSZW1haW5pbmdDRCgpIHtcbiAgICBpZiAoISh0aGlzLl9wYXVzZWRSZW1haW5pbmdDRCA+IDApKSB7XG4gICAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiSW50ZXJBZENEVHJhaXRcIik7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgdCA9IGUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdCAmJiB0LmdldFJlbWFpbmluZ0NEICYmICh0aGlzLl9wYXVzZWRSZW1haW5pbmdDRCA9IHQuZ2V0UmVtYWluaW5nQ0QoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5yZWNvcmRSZW1haW5pbmdDRChcIumAgOWHuua4uOaIj1wiKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSGFsbEN0bF92aWV3RGlkU2hvdyhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMucmVjb3JkUmVtYWluaW5nQ0QoXCLov5vlhaXlpKfljoVcIik7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF92d0xvYWQoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5fcGF1c2VkUmVtYWluaW5nQ0QgPiAwKSB7XG4gICAgICAgIHZhciByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJJbnRlckFkQ0RUcmFpdFwiKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICB2YXIgaSA9IHIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgICBpZiAoaSAmJiBpLmFkanVzdExhc3RQbGF5VGltZSAmJiBpLmdldENEVGltZSkge1xuICAgICAgICAgICAgdmFyIG4gPSBpLmdldENEVGltZSgpLFxuICAgICAgICAgICAgICBhID0gRGF0ZS5ub3coKSAtIChuIC0gdGhpcy5fcGF1c2VkUmVtYWluaW5nQ0QpO1xuICAgICAgICAgICAgaS5hZGp1c3RMYXN0UGxheVRpbWUoYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhdXNlZFJlbWFpbmluZ0NEID0gMDtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19