
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/UISettingBtnBack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b241ejPnHpCroyDxn3kr71g', 'UISettingBtnBack');
// subpackages/l_settingsDialog/Scripts/UISettingBtnBack.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UISettingBtnBack = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UISettingBtnBack = /** @class */ (function (_super) {
    __extends(UISettingBtnBack, _super);
    function UISettingBtnBack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UISettingBtnBack.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initEvents();
    };
    UISettingBtnBack.prototype.initEvents = function () {
        cc.isValid(this.node) && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
    };
    UISettingBtnBack.prototype.onButtonClick = function () {
        ControllerManager_1.default.getInstance().closeViewByName("UISettingsDialogController");
        var t = ControllerManager_1.default.getInstance().getTopSceneController();
        JumpManager_1.default.getInstance().jumpToHall();
        t && t.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
    };
    UISettingBtnBack.prefabUrl = "prefabs/ui/settingsDialog/UISettingBtnBack";
    __decorate([
        mj.traitEvent("UISetBtnBack_onLoad")
    ], UISettingBtnBack.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("UISetBtnBack_onBtnClk")
    ], UISettingBtnBack.prototype, "onButtonClick", null);
    UISettingBtnBack = __decorate([
        mj.class
    ], UISettingBtnBack);
    return UISettingBtnBack;
}(BaseUI_1.default));
exports.UISettingBtnBack = UISettingBtnBack;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvVUlTZXR0aW5nQnRuQmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRiwwRkFBcUY7QUFDckYsK0RBQTBEO0FBQzFELHNFQUFpRTtBQUNqRSxvRUFBb0Y7QUFFcEY7SUFBc0Msb0NBQU07SUFBNUM7O0lBaUJBLENBQUM7SUFkQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxHQUFHLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDaEUscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLE1BQU0sSUFBSSwrQkFBZSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFmTSwwQkFBUyxHQUFHLDRDQUE0QyxDQUFDO0lBRWhFO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrREFJcEM7SUFLRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7eURBTXRDO0lBaEJVLGdCQUFnQjtRQUQ1QixFQUFFLENBQUMsS0FBSztPQUNJLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQWpCRCxBQWlCQyxDQWpCcUMsZ0JBQU0sR0FpQjNDO0FBakJZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbmltcG9ydCB7IERvdEdhbWVQYWdlU2hvdywgRVBhZ2VTaG93VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lUGFnZVNob3cnO1xuQG1qLmNsYXNzXG5leHBvcnQgY2xhc3MgVUlTZXR0aW5nQnRuQmFjayBleHRlbmRzIEJhc2VVSSB7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvc2V0dGluZ3NEaWFsb2cvVUlTZXR0aW5nQnRuQmFja1wiO1xuICBAbWoudHJhaXRFdmVudChcIlVJU2V0QnRuQmFja19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9XG4gIGluaXRFdmVudHMoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0QnRuQmFja19vbkJ0bkNsa1wiKVxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VWaWV3QnlOYW1lKFwiVUlTZXR0aW5nc0RpYWxvZ0NvbnRyb2xsZXJcIik7XG4gICAgdmFyIHQgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvSGFsbCgpO1xuICAgIHQgJiYgdC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxldmVsVG9NYWluUGFnZSk7XG4gIH1cbn0iXX0=