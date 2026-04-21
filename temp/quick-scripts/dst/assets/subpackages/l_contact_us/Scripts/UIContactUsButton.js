
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_contact_us/Scripts/UIContactUsButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d58aBp4lZGGK5pL06+lYB6', 'UIContactUsButton');
// subpackages/l_contact_us/Scripts/UIContactUsButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ContactUsButtonTrait_1 = require("./ContactUsButtonTrait");
var UIContactUsButton = /** @class */ (function (_super) {
    __extends(UIContactUsButton, _super);
    function UIContactUsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIContactUsButton.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.getChildByName("btn_rect"), this.onContactUsBtnClick.bind(this));
        this.isLargeHitArea() && this.OnButtonClick(this.node, this.onContactUsBtnClick.bind(this));
    };
    UIContactUsButton.prototype.onContactUsBtnClick = function () {
        ContactUsButtonTrait_1.default.getInstance().onContactUsBtnClick();
    };
    UIContactUsButton.prototype.isLargeHitArea = function () {
        return false;
    };
    UIContactUsButton.prefabUrl = "prefabs/ui/settingsDialog/UIContactUsButton";
    __decorate([
        mj.traitEvent("UIContactUs_isLarge")
    ], UIContactUsButton.prototype, "isLargeHitArea", null);
    UIContactUsButton = __decorate([
        mj.class
    ], UIContactUsButton);
    return UIContactUsButton;
}(BaseUI_1.default));
exports.default = UIContactUsButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbnRhY3RfdXMvU2NyaXB0cy9VSUNvbnRhY3RVc0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUUxRDtJQUErQyxxQ0FBTTtJQUFyRDs7SUFjQSxDQUFDO0lBWkMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELCtDQUFtQixHQUFuQjtRQUNFLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFaTSwyQkFBUyxHQUFHLDZDQUE2QyxDQUFDO0lBVWpFO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzsyREFHcEM7SUFia0IsaUJBQWlCO1FBRHJDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksaUJBQWlCLENBY3JDO0lBQUQsd0JBQUM7Q0FkRCxBQWNDLENBZDhDLGdCQUFNLEdBY3BEO2tCQWRvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQ29udGFjdFVzQnV0dG9uVHJhaXQgZnJvbSAnLi9Db250YWN0VXNCdXR0b25UcmFpdCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29udGFjdFVzQnV0dG9uIGV4dGVuZHMgQmFzZVVJIHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9zZXR0aW5nc0RpYWxvZy9VSUNvbnRhY3RVc0J1dHRvblwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9yZWN0XCIpLCB0aGlzLm9uQ29udGFjdFVzQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pc0xhcmdlSGl0QXJlYSgpICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25Db250YWN0VXNCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBvbkNvbnRhY3RVc0J0bkNsaWNrKCkge1xuICAgIENvbnRhY3RVc0J1dHRvblRyYWl0LmdldEluc3RhbmNlKCkub25Db250YWN0VXNCdG5DbGljaygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlDb250YWN0VXNfaXNMYXJnZVwiKVxuICBpc0xhcmdlSGl0QXJlYSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=