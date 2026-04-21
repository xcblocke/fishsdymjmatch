
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoClearSwitch/Scripts/UIAutoClearSwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '702efsR7xBK+I3kdOxaBowW', 'UIAutoClearSwitch');
// subpackages/l_autoClearSwitch/Scripts/UIAutoClearSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var AutoClearSwitchTrait_1 = require("./AutoClearSwitchTrait");
var UIAutoClearSwitch = /** @class */ (function (_super) {
    __extends(UIAutoClearSwitch, _super);
    function UIAutoClearSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNode = null;
        _this._offNode = null;
        return _this;
    }
    UIAutoClearSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._onNode = this.node.getChildByName("on");
        this._offNode = this.node.getChildByName("off");
        var e = this.node.getChildByName("btn_rect"), o = cc.isValid(e) ? e : this.node;
        this.OnButtonClick(o, this.onSwitchClick.bind(this));
        this.updateDisplay();
    };
    UIAutoClearSwitch.prototype.onSwitchClick = function () {
        var t = AutoClearSwitchTrait_1.default.getInstance();
        if (t) {
            t.toggleSwitch();
            this.updateDisplay();
        }
    };
    UIAutoClearSwitch.prototype.updateDisplay = function () {
        var t = AutoClearSwitchTrait_1.default.getInstance();
        if (t) {
            var e = t.isAutoClearEnabled();
            cc.isValid(this._onNode) && (this._onNode.active = e);
            cc.isValid(this._offNode) && (this._offNode.active = !e);
        }
    };
    UIAutoClearSwitch.prefabUrl = "prefabs/ui/settingsDialog/UIAutoClearSwitch";
    UIAutoClearSwitch = __decorate([
        mj.class
    ], UIAutoClearSwitch);
    return UIAutoClearSwitch;
}(BaseUI_1.default));
exports.default = UIAutoClearSwitch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9DbGVhclN3aXRjaC9TY3JpcHRzL1VJQXV0b0NsZWFyU3dpdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsK0RBQTBEO0FBRTFEO0lBQStDLHFDQUFNO0lBQXJEO1FBQUEscUVBNEJDO1FBM0JDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQTBCbEIsQ0FBQztJQXhCQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQzFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0QseUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBeEJNLDJCQUFTLEdBQUcsNkNBQTZDLENBQUM7SUFIOUMsaUJBQWlCO1FBRHJDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksaUJBQWlCLENBNEJyQztJQUFELHdCQUFDO0NBNUJELEFBNEJDLENBNUI4QyxnQkFBTSxHQTRCcEQ7a0JBNUJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQXV0b0NsZWFyU3dpdGNoVHJhaXQgZnJvbSAnLi9BdXRvQ2xlYXJTd2l0Y2hUcmFpdCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQXV0b0NsZWFyU3dpdGNoIGV4dGVuZHMgQmFzZVVJIHtcbiAgX29uTm9kZSA9IG51bGw7XG4gIF9vZmZOb2RlID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9zZXR0aW5nc0RpYWxvZy9VSUF1dG9DbGVhclN3aXRjaFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fb25Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwib25cIik7XG4gICAgdGhpcy5fb2ZmTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9yZWN0XCIpLFxuICAgICAgbyA9IGNjLmlzVmFsaWQoZSkgPyBlIDogdGhpcy5ub2RlO1xuICAgIHRoaXMuT25CdXR0b25DbGljayhvLCB0aGlzLm9uU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cbiAgb25Td2l0Y2hDbGljaygpIHtcbiAgICB2YXIgdCA9IEF1dG9DbGVhclN3aXRjaFRyYWl0LmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQudG9nZ2xlU3dpdGNoKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICB2YXIgdCA9IEF1dG9DbGVhclN3aXRjaFRyYWl0LmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBlID0gdC5pc0F1dG9DbGVhckVuYWJsZWQoKTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5fb25Ob2RlKSAmJiAodGhpcy5fb25Ob2RlLmFjdGl2ZSA9IGUpO1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLl9vZmZOb2RlKSAmJiAodGhpcy5fb2ZmTm9kZS5hY3RpdmUgPSAhZSk7XG4gICAgfVxuICB9XG59Il19