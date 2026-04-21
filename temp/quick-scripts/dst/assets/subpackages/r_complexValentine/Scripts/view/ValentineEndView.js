
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/view/ValentineEndView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42372VmMEFDAamS6QBrjOjK', 'ValentineEndView');
// subpackages/r_complexValentine/Scripts/view/ValentineEndView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var EventDefine_1 = require("../../../../Scripts/base/event/EventDefine");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var ValentineModel_1 = require("../model/ValentineModel");
var ValentineEndView = /** @class */ (function (_super) {
    __extends(ValentineEndView, _super);
    function ValentineEndView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.byeBtn = null;
        _this.titleLabel = null;
        _this.cntLabel = null;
        _this.byeBtnLabel = null;
        return _this;
    }
    ValentineEndView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.byeBtn, this.onByeBtnClick.bind(this));
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.initUI();
        DGameValentine_1.DotGameValentine.dotValentineViewPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId(),
            remaining_time: "0d0h"
        });
        this.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP);
    };
    ValentineEndView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_END_POPUP] = this.onMsgValentineCloseEndPopup.bind(this);
        return _t;
    };
    ValentineEndView.prototype.onMsgValentineCloseEndPopup = function () {
        this.delegate.close();
    };
    ValentineEndView.prototype.initUI = function () { };
    ValentineEndView.prototype.onByeBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Button,
            remaining_time: "0d0h",
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineEndView.prototype.onCloseBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Close,
            remaining_time: "0d0h",
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineEndView.prototype.show = function () { };
    ValentineEndView.prefabUrl = "prefabs/ValentineEndView";
    __decorate([
        mj.node("content/btn_close")
    ], ValentineEndView.prototype, "closeBtn", void 0);
    __decorate([
        mj.node("content/btn_bye")
    ], ValentineEndView.prototype, "byeBtn", void 0);
    __decorate([
        mj.component("content/title", cc.Label)
    ], ValentineEndView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("content/cnt", cc.Label)
    ], ValentineEndView.prototype, "cntLabel", void 0);
    __decorate([
        mj.component("content/btn_bye/lbl_bye", cc.Label)
    ], ValentineEndView.prototype, "byeBtnLabel", void 0);
    __decorate([
        mj.traitEvent("VltnEndVw_onLoad")
    ], ValentineEndView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnEndVw_onConfirmClk")
    ], ValentineEndView.prototype, "onByeBtnClick", null);
    ValentineEndView = __decorate([
        mj.class
    ], ValentineEndView);
    return ValentineEndView;
}(UIView_1.default));
exports.default = ValentineEndView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy92aWV3L1ZhbGVudGluZUVuZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJGQUF1RjtBQUN2RixrRUFBNkQ7QUFDN0QsMEVBQXVGO0FBQ3ZGLHFFQUFzSTtBQUN0SSx5RUFBb0U7QUFDcEUsMERBQTBEO0FBRTFEO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBMERDO1FBeERDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLFlBQU0sR0FBc0IsSUFBSSxDQUFDO1FBRWpDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQWtCLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUE4QixJQUFJLENBQUM7O0lBZ0RoRCxDQUFDO0lBN0NDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLGlDQUFnQixDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLGNBQWMsRUFBRSxnQ0FBZSxDQUFDLE1BQU07WUFDdEMsVUFBVSxFQUFFLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDekYsY0FBYyxFQUFFLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1Q0FBeUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0NBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0NBQWUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsZ0NBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUYsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0Qsc0RBQTJCLEdBQTNCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsaUNBQU0sR0FBTixjQUFVLENBQUM7SUFFWCx3Q0FBYSxHQUFiO1FBQ0UsaUNBQWdCLENBQUMsc0JBQXNCLENBQUM7WUFDdEMsY0FBYyxFQUFFLGdDQUFlLENBQUMsTUFBTTtZQUN0QyxhQUFhLEVBQUUsdUNBQXNCLENBQUMsR0FBRztZQUN6QyxZQUFZLEVBQUUsc0NBQXFCLENBQUMsTUFBTTtZQUMxQyxjQUFjLEVBQUUsTUFBTTtZQUN0QixVQUFVLEVBQUUsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRTtTQUMxRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsaUNBQWdCLENBQUMsc0JBQXNCLENBQUM7WUFDdEMsY0FBYyxFQUFFLGdDQUFlLENBQUMsTUFBTTtZQUN0QyxhQUFhLEVBQUUsdUNBQXNCLENBQUMsR0FBRztZQUN6QyxZQUFZLEVBQUUsc0NBQXFCLENBQUMsS0FBSztZQUN6QyxjQUFjLEVBQUUsTUFBTTtZQUN0QixVQUFVLEVBQUUsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRTtTQUMxRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCwrQkFBSSxHQUFKLGNBQVEsQ0FBQztJQTlDRiwwQkFBUyxHQUFHLDBCQUEwQixDQUFDO0lBVDlDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztzREFDUTtJQUVyQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0RBQ007SUFFakM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNMO0lBRW5DO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUDtJQUUvQjtRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDSjtJQUc5QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7a0RBY2pDO0lBV0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3lEQVV2QztJQTlDa0IsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBMERwQztJQUFELHVCQUFDO0NBMURELEFBMERDLENBMUQ2QyxnQkFBTSxHQTBEbkQ7a0JBMURvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IEVWVF9NU0dfSEFMTF9GT1JDRV9VUERBVEUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2Jhc2UvZXZlbnQvRXZlbnREZWZpbmUnO1xuaW1wb3J0IHsgRG90R2FtZVZhbGVudGluZSwgRVZhbGVudGluZVN0YWdlLCBFVmFsZW50aW5lRWZmZWN0U3dpdGNoLCBFVmFsZW50aW5lQ2xpY2tUYXJnZXQgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL0RHYW1lVmFsZW50aW5lJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBWYWxlbnRpbmVFdmVudHMgfSBmcm9tICcuLi9tb2RlbC9WYWxlbnRpbmVNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUVuZFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2Nsb3NlXCIpXG4gIGNsb3NlQnRuOiBcImNvbnRlbnQvYnRuX2Nsb3NlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2J5ZVwiKVxuICBieWVCdG46IFwiY29udGVudC9idG5fYnllXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC90aXRsZVwiLCBjYy5MYWJlbClcbiAgdGl0bGVMYWJlbDogXCJjb250ZW50L3RpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC9jbnRcIiwgY2MuTGFiZWwpXG4gIGNudExhYmVsOiBcImNvbnRlbnQvY250XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC9idG5fYnllL2xibF9ieWVcIiwgY2MuTGFiZWwpXG4gIGJ5ZUJ0bkxhYmVsOiBcImNvbnRlbnQvYnRuX2J5ZS9sYmxfYnllXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL1ZhbGVudGluZUVuZFZpZXdcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuRW5kVndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ieWVCdG4sIHRoaXMub25CeWVCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICBEb3RHYW1lVmFsZW50aW5lLmRvdFZhbGVudGluZVZpZXdQb3B1cCh7XG4gICAgICBzdGFnZV9wcm9ncmVzczogRVZhbGVudGluZVN0YWdlLlN0YWdlMyxcbiAgICAgIG1haW5fbGV2ZWw6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgcmVtYWluaW5nX3RpbWU6IFwiMGQwaFwiXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWVF9NU0dfSEFMTF9GT1JDRV9VUERBVEUpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChWYWxlbnRpbmVFdmVudHMuVkFMRU5USU5FX0NMT1NFX0lOVFJPX1BPUFVQKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVmFsZW50aW5lRXZlbnRzLlZBTEVOVElORV9DTE9TRV9BQ1RJVkFURV9QT1BVUCk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtWYWxlbnRpbmVFdmVudHMuVkFMRU5USU5FX0NMT1NFX0VORF9QT1BVUF0gPSB0aGlzLm9uTXNnVmFsZW50aW5lQ2xvc2VFbmRQb3B1cC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvbk1zZ1ZhbGVudGluZUNsb3NlRW5kUG9wdXAoKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIGluaXRVSSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkVuZFZ3X29uQ29uZmlybUNsa1wiKVxuICBvbkJ5ZUJ0bkNsaWNrKCkge1xuICAgIERvdEdhbWVWYWxlbnRpbmUuZG90VmFsZW50aW5lQ2xpY2tQb3B1cCh7XG4gICAgICBzdGFnZV9wcm9ncmVzczogRVZhbGVudGluZVN0YWdlLlN0YWdlMyxcbiAgICAgIGVmZmVjdF9zd2l0Y2g6IEVWYWxlbnRpbmVFZmZlY3RTd2l0Y2guT2ZmLFxuICAgICAgY2xpY2tfdGFyZ2V0OiBFVmFsZW50aW5lQ2xpY2tUYXJnZXQuQnV0dG9uLFxuICAgICAgcmVtYWluaW5nX3RpbWU6IFwiMGQwaFwiLFxuICAgICAgbWFpbl9sZXZlbDogVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKS5nZXRMZXZlbElkKClcbiAgICB9KTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgb25DbG9zZUJ0bkNsaWNrKCkge1xuICAgIERvdEdhbWVWYWxlbnRpbmUuZG90VmFsZW50aW5lQ2xpY2tQb3B1cCh7XG4gICAgICBzdGFnZV9wcm9ncmVzczogRVZhbGVudGluZVN0YWdlLlN0YWdlMyxcbiAgICAgIGVmZmVjdF9zd2l0Y2g6IEVWYWxlbnRpbmVFZmZlY3RTd2l0Y2guT2ZmLFxuICAgICAgY2xpY2tfdGFyZ2V0OiBFVmFsZW50aW5lQ2xpY2tUYXJnZXQuQ2xvc2UsXG4gICAgICByZW1haW5pbmdfdGltZTogXCIwZDBoXCIsXG4gICAgICBtYWluX2xldmVsOiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoTWpHYW1lVHlwZS5Ob3JtYWwpLmdldExldmVsSWQoKVxuICAgIH0pO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBzaG93KCkge31cbn0iXX0=