
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dieAutoShuffle/Scripts/UIAutoShuffleSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66ffbOGmrRHpLRkQsVFB7TJ', 'UIAutoShuffleSwitch');
// subpackages/r_dieAutoShuffle/Scripts/UIAutoShuffleSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DieAutoShuffleTrait_1 = require("./DieAutoShuffleTrait");
var UIAutoShuffleSwitch = /** @class */ (function (_super) {
    __extends(UIAutoShuffleSwitch, _super);
    function UIAutoShuffleSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNode = null;
        _this._offNode = null;
        return _this;
    }
    UIAutoShuffleSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._onNode = this.node.getChildByName("on");
        this._offNode = this.node.getChildByName("off");
        var e = this.node.getChildByName("btn_rect"), i = cc.isValid(e) ? e : this.node;
        this.OnButtonClick(i, this.onSwitchClick.bind(this));
        this.updateDisplay();
    };
    UIAutoShuffleSwitch.prototype.onSwitchClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        if (t) {
            t.toggleSwitch();
            this.updateDisplay();
        }
    };
    UIAutoShuffleSwitch.prototype.updateDisplay = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        if (t) {
            var e = t.isAutoShuffleEnabled();
            cc.isValid(this._onNode) && (this._onNode.active = e);
            cc.isValid(this._offNode) && (this._offNode.active = !e);
        }
    };
    UIAutoShuffleSwitch.prefabUrl = "prefabs/ui/settingsDialog/UIAutoShuffleSwitch";
    UIAutoShuffleSwitch = __decorate([
        mj.class
    ], UIAutoShuffleSwitch);
    return UIAutoShuffleSwitch;
}(BaseUI_1.default));
exports.default = UIAutoShuffleSwitch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RpZUF1dG9TaHVmZmxlL1NjcmlwdHMvVUlBdXRvU2h1ZmZsZVN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDZEQUF3RDtBQUV4RDtJQUFpRCx1Q0FBTTtJQUF2RDtRQUFBLHFFQTRCQztRQTNCQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUEwQmxCLENBQUM7SUF4QkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUMxQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCwyQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsNkJBQW1CLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0QsMkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLDZCQUFtQixDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUF4Qk0sNkJBQVMsR0FBRywrQ0FBK0MsQ0FBQztJQUhoRCxtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUs7T0FDWSxtQkFBbUIsQ0E0QnZDO0lBQUQsMEJBQUM7Q0E1QkQsQUE0QkMsQ0E1QmdELGdCQUFNLEdBNEJ0RDtrQkE1Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBEaWVBdXRvU2h1ZmZsZVRyYWl0IGZyb20gJy4vRGllQXV0b1NodWZmbGVUcmFpdCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQXV0b1NodWZmbGVTd2l0Y2ggZXh0ZW5kcyBCYXNlVUkge1xuICBfb25Ob2RlID0gbnVsbDtcbiAgX29mZk5vZGUgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL3NldHRpbmdzRGlhbG9nL1VJQXV0b1NodWZmbGVTd2l0Y2hcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX29uTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9uXCIpO1xuICAgIHRoaXMuX29mZk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIik7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmVjdFwiKSxcbiAgICAgIGkgPSBjYy5pc1ZhbGlkKGUpID8gZSA6IHRoaXMubm9kZTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2soaSwgdGhpcy5vblN3aXRjaENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG4gIG9uU3dpdGNoQ2xpY2soKSB7XG4gICAgdmFyIHQgPSBEaWVBdXRvU2h1ZmZsZVRyYWl0LmdldEFjdGl2ZVNldHRpbmdzSW5zdGFuY2UoKTtcbiAgICBpZiAodCkge1xuICAgICAgdC50b2dnbGVTd2l0Y2goKTtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVEaXNwbGF5KCkge1xuICAgIHZhciB0ID0gRGllQXV0b1NodWZmbGVUcmFpdC5nZXRBY3RpdmVTZXR0aW5nc0luc3RhbmNlKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBlID0gdC5pc0F1dG9TaHVmZmxlRW5hYmxlZCgpO1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLl9vbk5vZGUpICYmICh0aGlzLl9vbk5vZGUuYWN0aXZlID0gZSk7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMuX29mZk5vZGUpICYmICh0aGlzLl9vZmZOb2RlLmFjdGl2ZSA9ICFlKTtcbiAgICB9XG4gIH1cbn0iXX0=