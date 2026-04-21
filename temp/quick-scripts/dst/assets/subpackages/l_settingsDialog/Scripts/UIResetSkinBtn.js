
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/UIResetSkinBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fad2gFRUFNQI9ugUDDagXn', 'UIResetSkinBtn');
// subpackages/l_settingsDialog/Scripts/UIResetSkinBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIResetSkinBtn = void 0;
var I18NAdBtnLayout_1 = require("../../../Scripts/component/I18NAdBtnLayout");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var UIResetSkinBtn = /** @class */ (function (_super) {
    __extends(UIResetSkinBtn, _super);
    function UIResetSkinBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        _this._titleLabel = null;
        return _this;
    }
    UIResetSkinBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initEvents();
    };
    UIResetSkinBtn.prototype.initEvents = function () {
        if (cc.isValid(this.node)) {
            this.OnButtonClick(this.node, this.onButtonClick.bind(this));
            cc.find("bg/layout/btn_text", this.node).on(cc.Node.EventType.SIZE_CHANGED, this.onTextLengthChanged, this);
        }
    };
    UIResetSkinBtn.prototype.onTextLengthChanged = function () {
        if (cc.isValid(this.node)) {
            var t = this.node.getChildByName("bg");
            cc.isValid(t) && I18NAdBtnLayout_1.default.setupLayout(t, "layout/btn_icon", "layout/btn_text", 505, 10);
        }
    };
    UIResetSkinBtn.prototype.setData = function (t) {
        this._data = t;
    };
    UIResetSkinBtn.prototype.onButtonClick = function () {
        var t;
        (null === (t = this._data) || void 0 === t ? void 0 : t.onReset) && this._data.onReset();
    };
    UIResetSkinBtn.prefabUrl = "prefabs/ui/settingsDialog/UIResetSkinBtn";
    UIResetSkinBtn = __decorate([
        mj.class
    ], UIResetSkinBtn);
    return UIResetSkinBtn;
}(BaseUI_1.default));
exports.UIResetSkinBtn = UIResetSkinBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvVUlSZXNldFNraW5CdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsK0RBQTBEO0FBRTFEO0lBQW9DLGtDQUFNO0lBQTFDO1FBQUEscUVBMkJDO1FBMUJDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUF5QnJCLENBQUM7SUF2QkMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RztJQUNILENBQUM7SUFDRCw0Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUkseUJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNoRztJQUNILENBQUM7SUFDRCxnQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0YsQ0FBQztJQXZCTSx3QkFBUyxHQUFHLDBDQUEwQyxDQUFDO0lBSG5ELGNBQWM7UUFEMUIsRUFBRSxDQUFDLEtBQUs7T0FDSSxjQUFjLENBMkIxQjtJQUFELHFCQUFDO0NBM0JELEFBMkJDLENBM0JtQyxnQkFBTSxHQTJCekM7QUEzQlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TkFkQnRuTGF5b3V0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0kxOE5BZEJ0bkxheW91dCc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5AbWouY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVJlc2V0U2tpbkJ0biBleHRlbmRzIEJhc2VVSSB7XG4gIF9kYXRhID0gbnVsbDtcbiAgX3RpdGxlTGFiZWwgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL3NldHRpbmdzRGlhbG9nL1VJUmVzZXRTa2luQnRuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgfVxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIGNjLmZpbmQoXCJiZy9sYXlvdXQvYnRuX3RleHRcIiwgdGhpcy5ub2RlKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMub25UZXh0TGVuZ3RoQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICB9XG4gIG9uVGV4dExlbmd0aENoYW5nZWQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICAgIGNjLmlzVmFsaWQodCkgJiYgSTE4TkFkQnRuTGF5b3V0LnNldHVwTGF5b3V0KHQsIFwibGF5b3V0L2J0bl9pY29uXCIsIFwibGF5b3V0L2J0bl90ZXh0XCIsIDUwNSwgMTApO1xuICAgIH1cbiAgfVxuICBzZXREYXRhKHQpIHtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIHZhciB0O1xuICAgIChudWxsID09PSAodCA9IHRoaXMuX2RhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQub25SZXNldCkgJiYgdGhpcy5fZGF0YS5vblJlc2V0KCk7XG4gIH1cbn0iXX0=