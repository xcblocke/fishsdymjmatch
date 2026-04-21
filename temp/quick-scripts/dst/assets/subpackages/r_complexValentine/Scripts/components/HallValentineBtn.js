
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/components/HallValentineBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95b43G4cIhK/bXbQZ/7pxaa', 'HallValentineBtn');
// subpackages/r_complexValentine/Scripts/components/HallValentineBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HallValentineBtnState = void 0;
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ValentineModel_1 = require("../model/ValentineModel");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
exports.HallValentineBtnState = {
    InProgress: "InProgress",
    Off: "Off",
    On: "On"
};
var HallValentineBtn = /** @class */ (function (_super) {
    __extends(HallValentineBtn, _super);
    function HallValentineBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineNode = null;
        _this.progressNode = null;
        _this.progressLabelNode = null;
        _this._curBtnState = exports.HallValentineBtnState.InProgress;
        return _this;
    }
    HallValentineBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this.updateUI();
        DGameValentine_1.DotGameValentine.dotValentineViewIcon({
            task_progress: ValentineModel_1.default.getInstance().getProgress()
        });
    };
    HallValentineBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Valentine",
            node: this.node
        });
    };
    HallValentineBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallValentineBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
        return _t;
    };
    HallValentineBtn.prototype.onMsgCloseValentineActivateView = function () {
        this.updateUI();
    };
    HallValentineBtn.prototype.updateUI = function () {
        var t = ValentineModel_1.default.getInstance(), e = t.getActivityState(), n = t.getEffectEnabled();
        this.progressNode.active = e === ValentineModel_1.ValentineActState.InProgress;
        if (ValentineModel_1.ValentineActState.InProgress === e) {
            this.updateProgress();
            this._curBtnState = exports.HallValentineBtnState.InProgress;
        }
        else
            ValentineModel_1.ValentineActState.Activated === e && (this._curBtnState = n ? exports.HallValentineBtnState.On : exports.HallValentineBtnState.Off);
        this.updateEffectSwitch();
    };
    HallValentineBtn.prototype.updateProgress = function () {
        var t = ValentineModel_1.default.getInstance(), e = t.getConfig(), n = t.localData.progress, o = e.requiredLevels, i = Math.min(n / o, 1);
        this.progressNode.getComponent(cc.ProgressBar).progress = i;
        this.progressLabelNode.getComponent(cc.Label).string = n + "/" + o;
    };
    HallValentineBtn.prototype.updateEffectSwitch = function () {
        switch (this._curBtnState) {
            case exports.HallValentineBtnState.InProgress:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init_jdt", true);
                break;
            case exports.HallValentineBtnState.On:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "on_init", true);
                break;
            case exports.HallValentineBtnState.Off:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init", true);
        }
    };
    HallValentineBtn.prototype.onBtnClick = function () {
        var t = ValentineModel_1.default.getInstance().getActivityState(), e = ValentineModel_1.default.getInstance();
        if (ValentineModel_1.ValentineActState.InProgress == t)
            this.popIntro();
        else if (ValentineModel_1.ValentineActState.Activated == t)
            this.popActivate();
        else if (ValentineModel_1.ValentineActState.Ended == t) {
            if (e.localData.hasActivated) {
                this.popEnd();
            }
            else {
                this.popIntro();
            }
            this.destroySelf();
        }
        DGameValentine_1.DotGameValentine.dotValentineClickIcon({
            task_progress: e.getProgress()
        });
    };
    HallValentineBtn.prototype.popIntro = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ValentineIntroController", {
            isReuse: false,
            isShowAction: true
        });
    };
    HallValentineBtn.prototype.popEnd = function () {
        ValentineModel_1.default.getInstance().markEndPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineEndController", {
            isReuse: false,
            isShowAction: false
        });
    };
    HallValentineBtn.prototype.popActivate = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ValentineActivateController", {
            isReuse: false,
            isShowAction: true
        });
    };
    HallValentineBtn.prototype.destroySelf = function () {
        this.node.destroy();
    };
    HallValentineBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    HallValentineBtn.prefabUrl = "prefabs/HallValentineBtn";
    HallValentineBtn.bundleName = "r_complexValentine";
    __decorate([
        mj.node("Root/spine")
    ], HallValentineBtn.prototype, "spineNode", void 0);
    __decorate([
        mj.node("Root/progress")
    ], HallValentineBtn.prototype, "progressNode", void 0);
    __decorate([
        mj.component("Root/progress/value", cc.Label)
    ], HallValentineBtn.prototype, "progressLabelNode", void 0);
    __decorate([
        mj.traitEvent("VltnBtn_onLoad")
    ], HallValentineBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnBtn_updateUI")
    ], HallValentineBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("VltnBtn_onBtnClk")
    ], HallValentineBtn.prototype, "onBtnClick", null);
    HallValentineBtn = __decorate([
        mj.class
    ], HallValentineBtn);
    return HallValentineBtn;
}(BaseUI_1.default));
exports.default = HallValentineBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9jb21wb25lbnRzL0hhbGxWYWxlbnRpbmVCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsMERBQTZGO0FBQzdGLDZGQUF3RjtBQUN4RixxRUFBc0U7QUFDM0QsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxJQUFJO0NBQ1QsQ0FBQztBQUVGO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBK0dDO1FBN0dDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyx1QkFBaUIsR0FBMEIsSUFBSSxDQUFDO1FBQ2hELGtCQUFZLEdBQUcsNkJBQXFCLENBQUMsVUFBVSxDQUFDOztJQXdHbEQsQ0FBQztJQXBHQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsaUNBQWdCLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsYUFBYSxFQUFFLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxJQUFJLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUNyQyxJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLElBQUksaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLGdDQUFlLENBQUMsNkJBQTZCLENBQUMsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BHLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELDBEQUErQixHQUEvQjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLHdCQUFjLENBQUMsV0FBVyxFQUFFLEVBQ2xDLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxrQ0FBaUIsQ0FBQyxVQUFVLENBQUM7UUFDOUQsSUFBSSxrQ0FBaUIsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFxQixDQUFDLFVBQVUsQ0FBQztTQUN0RDs7WUFBTSxrQ0FBaUIsQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHlDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxFQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCO1FBQ0UsUUFBUSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pCLEtBQUssNkJBQXFCLENBQUMsVUFBVTtnQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRSxNQUFNO1lBQ1IsS0FBSyw2QkFBcUIsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLE1BQU07WUFDUixLQUFLLDZCQUFxQixDQUFDLEdBQUc7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUNyRCxDQUFDLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLGtDQUFpQixDQUFDLFVBQVUsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQUssSUFBSSxrQ0FBaUIsQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUFLLElBQUksa0NBQWlCLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUMxSixJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxpQ0FBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUNFLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLDBCQUEwQixFQUFFO1lBQy9FLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlDQUFNLEdBQU47UUFDRSx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakQsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLEVBQUU7WUFDN0UsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0NBQVcsR0FBWDtRQUNFLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFO1lBQ2xGLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvQ0FBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBdEdNLDBCQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFDdkMsMkJBQVUsR0FBRyxvQkFBb0IsQ0FBQztJQVB6QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO3VEQUNTO0lBRS9CO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7MERBQ1k7SUFFckM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ0U7SUFLaEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO2tEQVEvQjtJQW9CRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7b0RBV2pDO0lBdUJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztzREFlakM7SUFyRmtCLGdCQUFnQjtRQURwQyxFQUFFLENBQUMsS0FBSztPQUNZLGdCQUFnQixDQStHcEM7SUFBRCx1QkFBQztDQS9HRCxBQStHQyxDQS9HNkMsZ0JBQU0sR0ErR25EO2tCQS9Hb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IFZhbGVudGluZU1vZGVsLCB7IFZhbGVudGluZUV2ZW50cywgVmFsZW50aW5lQWN0U3RhdGUgfSBmcm9tICcuLi9tb2RlbC9WYWxlbnRpbmVNb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RHYW1lVmFsZW50aW5lIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9ER2FtZVZhbGVudGluZSc7XG5leHBvcnQgdmFyIEhhbGxWYWxlbnRpbmVCdG5TdGF0ZSA9IHtcbiAgSW5Qcm9ncmVzczogXCJJblByb2dyZXNzXCIsXG4gIE9mZjogXCJPZmZcIixcbiAgT246IFwiT25cIlxufTtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFZhbGVudGluZUJ0biBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiUm9vdC9zcGluZVwiKVxuICBzcGluZU5vZGU6IFwiUm9vdC9zcGluZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSb290L3Byb2dyZXNzXCIpXG4gIHByb2dyZXNzTm9kZTogXCJSb290L3Byb2dyZXNzXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiUm9vdC9wcm9ncmVzcy92YWx1ZVwiLCBjYy5MYWJlbClcbiAgcHJvZ3Jlc3NMYWJlbE5vZGU6IFwiUm9vdC9wcm9ncmVzcy92YWx1ZVwiID0gbnVsbDtcbiAgX2N1ckJ0blN0YXRlID0gSGFsbFZhbGVudGluZUJ0blN0YXRlLkluUHJvZ3Jlc3M7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvSGFsbFZhbGVudGluZUJ0blwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9jb21wbGV4VmFsZW50aW5lXCI7XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkJ0bl9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgRG90R2FtZVZhbGVudGluZS5kb3RWYWxlbnRpbmVWaWV3SWNvbih7XG4gICAgICB0YXNrX3Byb2dyZXNzOiBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFByb2dyZXNzKClcbiAgICB9KTtcbiAgfVxuICBvbkVuYWJsZSgpIHtcbiAgICBzdXBlci5vbkVuYWJsZSAmJiBzdXBlci5vbkVuYWJsZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcIk1zZ0VuYWJsZUhvbWVCdG5cIiwge1xuICAgICAgdHlwZTogXCJWYWxlbnRpbmVcIixcbiAgICAgIG5vZGU6IHRoaXMubm9kZVxuICAgIH0pO1xuICB9XG4gIG9uRGlzYWJsZSgpIHtcbiAgICBzdXBlci5vbkRpc2FibGUgJiYgc3VwZXIub25EaXNhYmxlLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtWYWxlbnRpbmVFdmVudHMuQ0xPU0VfVkFMRU5USU5FX0FDVElWQVRFX1ZJRVddID0gdGhpcy5vbk1zZ0Nsb3NlVmFsZW50aW5lQWN0aXZhdGVWaWV3LmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uTXNnQ2xvc2VWYWxlbnRpbmVBY3RpdmF0ZVZpZXcoKSB7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkJ0bl91cGRhdGVVSVwiKVxuICB1cGRhdGVVSSgpIHtcbiAgICB2YXIgdCA9IFZhbGVudGluZU1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBlID0gdC5nZXRBY3Rpdml0eVN0YXRlKCksXG4gICAgICBuID0gdC5nZXRFZmZlY3RFbmFibGVkKCk7XG4gICAgdGhpcy5wcm9ncmVzc05vZGUuYWN0aXZlID0gZSA9PT0gVmFsZW50aW5lQWN0U3RhdGUuSW5Qcm9ncmVzcztcbiAgICBpZiAoVmFsZW50aW5lQWN0U3RhdGUuSW5Qcm9ncmVzcyA9PT0gZSkge1xuICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy5fY3VyQnRuU3RhdGUgPSBIYWxsVmFsZW50aW5lQnRuU3RhdGUuSW5Qcm9ncmVzcztcbiAgICB9IGVsc2UgVmFsZW50aW5lQWN0U3RhdGUuQWN0aXZhdGVkID09PSBlICYmICh0aGlzLl9jdXJCdG5TdGF0ZSA9IG4gPyBIYWxsVmFsZW50aW5lQnRuU3RhdGUuT24gOiBIYWxsVmFsZW50aW5lQnRuU3RhdGUuT2ZmKTtcbiAgICB0aGlzLnVwZGF0ZUVmZmVjdFN3aXRjaCgpO1xuICB9XG4gIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgIHZhciB0ID0gVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGUgPSB0LmdldENvbmZpZygpLFxuICAgICAgbiA9IHQubG9jYWxEYXRhLnByb2dyZXNzLFxuICAgICAgbyA9IGUucmVxdWlyZWRMZXZlbHMsXG4gICAgICBpID0gTWF0aC5taW4obiAvIG8sIDEpO1xuICAgIHRoaXMucHJvZ3Jlc3NOb2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSBpO1xuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuICsgXCIvXCIgKyBvO1xuICB9XG4gIHVwZGF0ZUVmZmVjdFN3aXRjaCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2N1ckJ0blN0YXRlKSB7XG4gICAgICBjYXNlIEhhbGxWYWxlbnRpbmVCdG5TdGF0ZS5JblByb2dyZXNzOlxuICAgICAgICB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIm9mZl9pbml0X2pkdFwiLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhhbGxWYWxlbnRpbmVCdG5TdGF0ZS5PbjpcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJvbl9pbml0XCIsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSGFsbFZhbGVudGluZUJ0blN0YXRlLk9mZjpcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJvZmZfaW5pdFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuQnRuX29uQnRuQ2xrXCIpXG4gIG9uQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEFjdGl2aXR5U3RhdGUoKSxcbiAgICAgIGUgPSBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChWYWxlbnRpbmVBY3RTdGF0ZS5JblByb2dyZXNzID09IHQpIHRoaXMucG9wSW50cm8oKTtlbHNlIGlmIChWYWxlbnRpbmVBY3RTdGF0ZS5BY3RpdmF0ZWQgPT0gdCkgdGhpcy5wb3BBY3RpdmF0ZSgpO2Vsc2UgaWYgKFZhbGVudGluZUFjdFN0YXRlLkVuZGVkID09IHQpIHtcbiAgICAgIGlmIChlLmxvY2FsRGF0YS5oYXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgdGhpcy5wb3BFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9wSW50cm8oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveVNlbGYoKTtcbiAgICB9XG4gICAgRG90R2FtZVZhbGVudGluZS5kb3RWYWxlbnRpbmVDbGlja0ljb24oe1xuICAgICAgdGFza19wcm9ncmVzczogZS5nZXRQcm9ncmVzcygpXG4gICAgfSk7XG4gIH1cbiAgcG9wSW50cm8oKSB7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlZhbGVudGluZUludHJvQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHBvcEVuZCgpIHtcbiAgICBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLm1hcmtFbmRQb3B1cFNob3duKCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlZhbGVudGluZUVuZENvbnRyb2xsZXJcIiwge1xuICAgICAgaXNSZXVzZTogZmFsc2UsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgcG9wQWN0aXZhdGUoKSB7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlZhbGVudGluZUFjdGl2YXRlQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3lTZWxmKCkge1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19