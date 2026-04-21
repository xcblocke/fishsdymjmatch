
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_badge/Scripts/HallBadgeBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b24fr7lRhD8rmYnvc6XF4m', 'HallBadgeBtn');
// subpackages/l_badge/Scripts/HallBadgeBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallBadgeBtn = /** @class */ (function (_super) {
    __extends(HallBadgeBtn, _super);
    function HallBadgeBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallBadgeBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallBadgeBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.ExhibitionHall);
        ControllerManager_1.default.getInstance().pushViewByController("DailyCollController", {
            isShowAction: false,
            enterType: 3
        });
    };
    HallBadgeBtn.prefabUrl = "prefabs/badge/HallBadgeBtn";
    __decorate([
        mj.traitEvent("HallBadgeBtn_onLoad")
    ], HallBadgeBtn.prototype, "onLoad", null);
    HallBadgeBtn = __decorate([
        mj.class
    ], HallBadgeBtn);
    return HallBadgeBtn;
}(BaseUI_1.default));
exports.default = HallBadgeBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JhZGdlL1NjcmlwdHMvSGFsbEJhZGdlQnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMEZBQXFGO0FBQ3JGLG9FQUF5RjtBQUV6RjtJQUEwQyxnQ0FBTTtJQUFoRDs7SUFjQSxDQUFDO0lBWEMsNkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSwrQkFBZSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRTtZQUMxRSxZQUFZLEVBQUUsS0FBSztZQUNuQixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFaTSxzQkFBUyxHQUFHLDRCQUE0QixDQUFDO0lBRWhEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs4Q0FJcEM7SUFOa0IsWUFBWTtRQURoQyxFQUFFLENBQUMsS0FBSztPQUNZLFlBQVksQ0FjaEM7SUFBRCxtQkFBQztDQWRELEFBY0MsQ0FkeUMsZ0JBQU0sR0FjL0M7a0JBZG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVIb21lUGFnZUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsQmFkZ2VCdG4gZXh0ZW5kcyBCYXNlVUkge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2JhZGdlL0hhbGxCYWRnZUJ0blwiO1xuICBAbWoudHJhaXRFdmVudChcIkhhbGxCYWRnZUJ0bl9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBvbkJ0bkNsaWNrKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RIYWxsKEVIb21lUGFnZUNsaWNrVHlwZS5FeGhpYml0aW9uSGFsbCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5Q29sbENvbnRyb2xsZXJcIiwge1xuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgIGVudGVyVHlwZTogM1xuICAgIH0pO1xuICB9XG59Il19