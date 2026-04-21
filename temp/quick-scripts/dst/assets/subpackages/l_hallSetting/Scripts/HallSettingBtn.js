
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallSetting/Scripts/HallSettingBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a505aNPkIxOUJTfXtz1qAwn', 'HallSettingBtn');
// subpackages/l_hallSetting/Scripts/HallSettingBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallSettingBtn = /** @class */ (function (_super) {
    __extends(HallSettingBtn, _super);
    function HallSettingBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallSettingBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallSettingBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Setting);
    };
    HallSettingBtn.prefabUrl = "prefabs/setting/HallSettingBtn";
    __decorate([
        mj.traitEvent("HallSetBtn_onLoad")
    ], HallSettingBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("HallSetBtn_onClick")
    ], HallSettingBtn.prototype, "onBtnClick", null);
    HallSettingBtn = __decorate([
        mj.class
    ], HallSettingBtn);
    return HallSettingBtn;
}(BaseUI_1.default));
exports.default = HallSettingBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxTZXR0aW5nL1NjcmlwdHMvSGFsbFNldHRpbmdCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxvRUFBeUY7QUFFekY7SUFBNEMsa0NBQU07SUFBbEQ7O0lBV0EsQ0FBQztJQVJDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsK0JBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQVRNLHdCQUFTLEdBQUcsZ0NBQWdDLENBQUM7SUFFcEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2dEQUlsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvREFHbkM7SUFWa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0FXbEM7SUFBRCxxQkFBQztDQVhELEFBV0MsQ0FYMkMsZ0JBQU0sR0FXakQ7a0JBWG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVIb21lUGFnZUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2V0dGluZ0J0biBleHRlbmRzIEJhc2VVSSB7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvc2V0dGluZy9IYWxsU2V0dGluZ0J0blwiO1xuICBAbWoudHJhaXRFdmVudChcIkhhbGxTZXRCdG5fb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB0aGlzLm9uQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsU2V0QnRuX29uQ2xpY2tcIilcbiAgb25CdG5DbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuU2V0dGluZyk7XG4gIH1cbn0iXX0=