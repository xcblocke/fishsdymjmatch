
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec1aeXFRt9CuKoK4Ft92qx/', 'UILanguageSwitch');
// subpackages/l_languageSelector/Scripts/UILanguageSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageSwitch = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var LanguageSelectorTrait_1 = require("./LanguageSelectorTrait");
var UILanguageSwitch = /** @class */ (function (_super) {
    __extends(UILanguageSwitch, _super);
    function UILanguageSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buttonNode = null;
        return _this;
    }
    UILanguageSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    UILanguageSwitch.prototype.initUI = function () {
        cc.isValid(this.node) && (this._buttonNode = this.node.getChildByName("btn_rect"));
    };
    UILanguageSwitch.prototype.initEvents = function () {
        if (this._buttonNode) {
            this.OnButtonClick(this._buttonNode, this.onButtonClick.bind(this));
            this.isLargeHitArea() && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
        }
    };
    UILanguageSwitch.prototype.onButtonClick = function () {
        var t = LanguageSelectorTrait_1.default.getInstance();
        t && t.showLanguageSelector();
    };
    UILanguageSwitch.prototype.isLargeHitArea = function () {
        return false;
    };
    UILanguageSwitch.prefabUrl = "prefabs/ui/settingsDialog/UILanguageSwitch";
    __decorate([
        mj.traitEvent("UILangSwitch_isLarge")
    ], UILanguageSwitch.prototype, "isLargeHitArea", null);
    UILanguageSwitch = __decorate([
        mj.class
    ], UILanguageSwitch);
    return UILanguageSwitch;
}(BaseUI_1.default));
exports.UILanguageSwitch = UILanguageSwitch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlU3dpdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELGlFQUE0RDtBQUU1RDtJQUFzQyxvQ0FBTTtJQUE1QztRQUFBLHFFQXlCQztRQXhCQyxpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUF3QnJCLENBQUM7SUF0QkMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0gsQ0FBQztJQUNELHdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRywrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUF0Qk0sMEJBQVMsR0FBRyw0Q0FBNEMsQ0FBQztJQW9CaEU7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzBEQUdyQztJQXhCVSxnQkFBZ0I7UUFENUIsRUFBRSxDQUFDLEtBQUs7T0FDSSxnQkFBZ0IsQ0F5QjVCO0lBQUQsdUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFDLGdCQUFNLEdBeUIzQztBQXpCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgTGFuZ3VhZ2VTZWxlY3RvclRyYWl0IGZyb20gJy4vTGFuZ3VhZ2VTZWxlY3RvclRyYWl0JztcbkBtai5jbGFzc1xuZXhwb3J0IGNsYXNzIFVJTGFuZ3VhZ2VTd2l0Y2ggZXh0ZW5kcyBCYXNlVUkge1xuICBfYnV0dG9uTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvc2V0dGluZ3NEaWFsb2cvVUlMYW5ndWFnZVN3aXRjaFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgfVxuICBpbml0VUkoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmICh0aGlzLl9idXR0b25Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JlY3RcIikpO1xuICB9XG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX2J1dHRvbk5vZGUpIHtcbiAgICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idXR0b25Ob2RlLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmlzTGFyZ2VIaXRBcmVhKCkgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIHZhciB0ID0gTGFuZ3VhZ2VTZWxlY3RvclRyYWl0LmdldEluc3RhbmNlKCk7XG4gICAgdCAmJiB0LnNob3dMYW5ndWFnZVNlbGVjdG9yKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSUxhbmdTd2l0Y2hfaXNMYXJnZVwiKVxuICBpc0xhcmdlSGl0QXJlYSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=