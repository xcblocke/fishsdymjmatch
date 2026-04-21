
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a300/2cZhJFbNNd7wX4em2', 'UILanguageItem');
// subpackages/l_languageSelector/Scripts/UILanguageItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageItem = void 0;
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var LanguageSelectorTrait_1 = require("./LanguageSelectorTrait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var UILanguageItem = /** @class */ (function (_super) {
    __extends(UILanguageItem, _super);
    function UILanguageItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectNode = null;
        _this._normalNode = null;
        _this._labTextSelect = null;
        _this._labTextNormal = null;
        _this._onClick = null;
        _this._isSelected = false;
        return _this;
    }
    UILanguageItem.prototype.uiOnLoad = function () {
        var t, e;
        if (cc.isValid(this._cellUI)) {
            this._selectNode = this._cellUI.getChildByName("btn_selected");
            cc.isValid(this._selectNode) && (this._labTextSelect = null === (t = this._selectNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("btn_text"));
            this._normalNode = this._cellUI.getChildByName("btn_normal");
            cc.isValid(this._normalNode) && (this._labTextNormal = null === (e = this._normalNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("btn_text"));
            this.OnButtonClick(this._selectNode, this.onItemClick.bind(this));
            this.OnButtonClick(this._normalNode, this.onItemClick.bind(this));
        }
    };
    UILanguageItem.prototype.updateUI = function () {
        if (this._data) {
            this._data.nameKey && cc.isValid(this._labTextSelect) && (t = this._labTextSelect.getComponent(cc.Label)) && (t.string = this._data.name);
            if (this._data.nameKey && cc.isValid(this._labTextNormal)) {
                var t;
                (t = this._labTextNormal.getComponent(cc.Label)) && (t.string = this._data.name);
            }
            var e = LanguageSelectorTrait_1.default.getInstance();
            if (e) {
                var o = e.getCurrentLanguage(), n = this.checkIsSelected(o, this._data.code);
                this.setSelected(n);
            }
        }
    };
    UILanguageItem.prototype.checkIsSelected = function (t) {
        return CommonUtils_1.formatLanguageCodeToString(this._data.code) === CommonUtils_1.formatLanguageCodeToString(t);
    };
    UILanguageItem.prototype.setOnClick = function (t) {
        this._onClick = t;
    };
    UILanguageItem.prototype.onItemClick = function () {
        this._onClick && this._data && this._onClick(this._data.code);
    };
    UILanguageItem.prototype.setSelected = function (t) {
        if (cc.isValid(this._selectNode)) {
            this._isSelected = t;
            this._selectNode.active = this._isSelected;
        }
        cc.isValid(this._normalNode) && (this._normalNode.active = !this._isSelected);
    };
    UILanguageItem.prefabUrl = "prefabs/ui/language/UILanguageItem";
    __decorate([
        mj.traitEvent("LangSelUI_checkIsSel")
    ], UILanguageItem.prototype, "checkIsSelected", null);
    UILanguageItem = __decorate([
        mj.class
    ], UILanguageItem);
    return UILanguageItem;
}(BaseCell_1.default));
exports.UILanguageItem = UILanguageItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCxpRUFBNEQ7QUFDNUQsNEVBQTBGO0FBRTFGO0lBQW9DLGtDQUFRO0lBQTVDO1FBQUEscUVBbURDO1FBbERDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7O0lBNkN0QixDQUFDO0lBM0NDLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNySyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdELEVBQUUsQ0FBQyxPQUFPLENBQUMs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QUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEzQ00sd0JBQVMsR0FBRyxvQ0FBb0MsQ0FBQztJQTRCeEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3lEQUdyQztJQXJDVSxjQUFjO1FBRDFCLEVBQUUsQ0FBQyxLQUFLO09BQ0ksY0FBYyxDQW1EMUI7SUFBRCxxQkFBQztDQW5ERCxBQW1EQyxDQW5EbUMsa0JBQVEsR0FtRDNDO0FBbkRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDZWxsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS91aS9CYXNlQ2VsbCc7XG5pbXBvcnQgTGFuZ3VhZ2VTZWxlY3RvclRyYWl0IGZyb20gJy4vTGFuZ3VhZ2VTZWxlY3RvclRyYWl0JztcbmltcG9ydCB7IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgY2xhc3MgVUlMYW5ndWFnZUl0ZW0gZXh0ZW5kcyBCYXNlQ2VsbCB7XG4gIF9zZWxlY3ROb2RlID0gbnVsbDtcbiAgX25vcm1hbE5vZGUgPSBudWxsO1xuICBfbGFiVGV4dFNlbGVjdCA9IG51bGw7XG4gIF9sYWJUZXh0Tm9ybWFsID0gbnVsbDtcbiAgX29uQ2xpY2sgPSBudWxsO1xuICBfaXNTZWxlY3RlZCA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL2xhbmd1YWdlL1VJTGFuZ3VhZ2VJdGVtXCI7XG4gIHVpT25Mb2FkKCkge1xuICAgIHZhciB0LCBlO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NlbGxVSSkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdE5vZGUgPSB0aGlzLl9jZWxsVUkuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc2VsZWN0ZWRcIik7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMuX3NlbGVjdE5vZGUpICYmICh0aGlzLl9sYWJUZXh0U2VsZWN0ID0gbnVsbCA9PT0gKHQgPSB0aGlzLl9zZWxlY3ROb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdGV4dFwiKSk7XG4gICAgICB0aGlzLl9ub3JtYWxOb2RlID0gdGhpcy5fY2VsbFVJLmdldENoaWxkQnlOYW1lKFwiYnRuX25vcm1hbFwiKTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5fbm9ybWFsTm9kZSkgJiYgKHRoaXMuX2xhYlRleHROb3JtYWwgPSBudWxsID09PSAoZSA9IHRoaXMuX25vcm1hbE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl90ZXh0XCIpKTtcbiAgICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9zZWxlY3ROb2RlLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX25vcm1hbE5vZGUsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhLm5hbWVLZXkgJiYgY2MuaXNWYWxpZCh0aGlzLl9sYWJUZXh0U2VsZWN0KSAmJiAodCA9IHRoaXMuX2xhYlRleHRTZWxlY3QuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSkgJiYgKHQuc3RyaW5nID0gdGhpcy5fZGF0YS5uYW1lKTtcbiAgICAgIGlmICh0aGlzLl9kYXRhLm5hbWVLZXkgJiYgY2MuaXNWYWxpZCh0aGlzLl9sYWJUZXh0Tm9ybWFsKSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgKHQgPSB0aGlzLl9sYWJUZXh0Tm9ybWFsLmdldENvbXBvbmVudChjYy5MYWJlbCkpICYmICh0LnN0cmluZyA9IHRoaXMuX2RhdGEubmFtZSk7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IExhbmd1YWdlU2VsZWN0b3JUcmFpdC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIG8gPSBlLmdldEN1cnJlbnRMYW5ndWFnZSgpLFxuICAgICAgICAgIG4gPSB0aGlzLmNoZWNrSXNTZWxlY3RlZChvLCB0aGlzLl9kYXRhLmNvZGUpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxhbmdTZWxVSV9jaGVja0lzU2VsXCIpXG4gIGNoZWNrSXNTZWxlY3RlZCh0KSB7XG4gICAgcmV0dXJuIGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nKHRoaXMuX2RhdGEuY29kZSkgPT09IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nKHQpO1xuICB9XG4gIHNldE9uQ2xpY2sodCkge1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0O1xuICB9XG4gIG9uSXRlbUNsaWNrKCkge1xuICAgIHRoaXMuX29uQ2xpY2sgJiYgdGhpcy5fZGF0YSAmJiB0aGlzLl9vbkNsaWNrKHRoaXMuX2RhdGEuY29kZSk7XG4gIH1cbiAgc2V0U2VsZWN0ZWQodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX3NlbGVjdE5vZGUpKSB7XG4gICAgICB0aGlzLl9pc1NlbGVjdGVkID0gdDtcbiAgICAgIHRoaXMuX3NlbGVjdE5vZGUuYWN0aXZlID0gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ub3JtYWxOb2RlKSAmJiAodGhpcy5fbm9ybWFsTm9kZS5hY3RpdmUgPSAhdGhpcy5faXNTZWxlY3RlZCk7XG4gIH1cbn0iXX0=