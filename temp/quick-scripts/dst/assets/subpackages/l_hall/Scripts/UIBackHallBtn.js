
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hall/Scripts/UIBackHallBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e91b8G4FiVInaqTJaBpQPQD', 'UIBackHallBtn');
// subpackages/l_hall/Scripts/UIBackHallBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var UIBackHallBtn = /** @class */ (function (_super) {
    __extends(UIBackHallBtn, _super);
    function UIBackHallBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBackHallBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBackHallBtnClick.bind(this));
    };
    UIBackHallBtn.prototype.onBackHallBtnClick = function () {
        ControllerManager_1.default.getInstance().closeViewByName("UISettingsDialogController");
        JumpManager_1.default.getInstance().jumpToHall();
    };
    UIBackHallBtn.prefabUrl = "prefabs/hall/UIBackHallBtn";
    UIBackHallBtn = __decorate([
        mj.class
    ], UIBackHallBtn);
    return UIBackHallBtn;
}(BaseUI_1.default));
exports.default = UIBackHallBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGwvU2NyaXB0cy9VSUJhY2tIYWxsQnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMEZBQXFGO0FBQ3JGLHNFQUFpRTtBQUVqRTtJQUEyQyxpQ0FBTTtJQUFqRDs7SUFVQSxDQUFDO0lBUkMsOEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsMENBQWtCLEdBQWxCO1FBQ0UsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUUscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBUk0sdUJBQVMsR0FBRyw0QkFBNEIsQ0FBQztJQUQ3QixhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksYUFBYSxDQVVqQztJQUFELG9CQUFDO0NBVkQsQUFVQyxDQVYwQyxnQkFBTSxHQVVoRDtrQkFWb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBKdW1wTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQmFja0hhbGxCdG4gZXh0ZW5kcyBCYXNlVUkge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2hhbGwvVUlCYWNrSGFsbEJ0blwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgdGhpcy5vbkJhY2tIYWxsQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgb25CYWNrSGFsbEJ0bkNsaWNrKCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VWaWV3QnlOYW1lKFwiVUlTZXR0aW5nc0RpYWxvZ0NvbnRyb2xsZXJcIik7XG4gICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9IYWxsKCk7XG4gIH1cbn0iXX0=