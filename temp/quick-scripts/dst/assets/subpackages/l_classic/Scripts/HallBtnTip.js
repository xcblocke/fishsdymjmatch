
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classic/Scripts/HallBtnTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1381eUK5KNC95n7f/kiibRN', 'HallBtnTip');
// subpackages/l_classic/Scripts/HallBtnTip.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETipAnimType = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var o;
exports.ETipAnimType = {
    NewModel: "newModel",
    Continue: "continue"
};
(o = {})[exports.ETipAnimType.NewModel] = {
    anim: ["newMod_in", "newMod_init"],
    tip: "New Mod!",
    i18nKey: "classic_newmod"
};
o[exports.ETipAnimType.Continue] = {
    anim: ["continue_in", "continue_init"],
    tip: "Continue!",
    i18nKey: "classic_Continue"
};
var u = o;
var HallBtnTip = /** @class */ (function (_super) {
    __extends(HallBtnTip, _super);
    function HallBtnTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.spine = null;
        _this.baseSpine = null;
        _this.inited = false;
        return _this;
    }
    HallBtnTip.prototype.initComponent = function () {
        var t = this;
        if (!this.inited) {
            this.inited = true;
            this.label = this.node.getChildByName("Label");
            this.spine = this.node.getChildByName("Anim");
            this.baseSpine = this.spine.addComponent(BaseSpine_1.default);
            this.baseSpine.markReady("");
            this.baseSpine.attachNode("hook_txt", function () {
                return t.label;
            });
            this.label.setPosition(0, 30);
        }
    };
    HallBtnTip.prototype.playTipAnim = function (t) {
        var e = this;
        this.initComponent();
        var n = u[t];
        if (n) {
            I18NStrings_1.default.setText(this.label, n.tip, n.i18nKey);
            this.baseSpine.setAnimation(n.anim[0], 1, function () {
                e.baseSpine.setAnimation(n.anim[1], -1);
            }, false);
        }
    };
    HallBtnTip.prefabUrl = "prefabs/HallBtnTip";
    HallBtnTip.bundleName = "l_classic";
    HallBtnTip = __decorate([
        mj.class
    ], HallBtnTip);
    return HallBtnTip;
}(BaseUI_1.default));
exports.default = HallBtnTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWMvU2NyaXB0cy9IYWxsQnRuVGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDJFQUFzRTtBQUN0RSx5RUFBb0U7QUFDcEUsSUFBSSxDQUFDLENBQUM7QUFDSyxRQUFBLFlBQVksR0FBRztJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBQ0YsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsb0JBQVksQ0FBQyxRQUFRLENBQUMsR0FBRztJQUNoQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO0lBQ2xDLEdBQUcsRUFBRSxVQUFVO0lBQ2YsT0FBTyxFQUFFLGdCQUFnQjtDQUMxQixDQUFDO0FBQ0YsQ0FBQyxDQUFDLG9CQUFZLENBQUMsUUFBUSxDQUFDLEdBQUc7SUFDekIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztJQUN0QyxHQUFHLEVBQUUsV0FBVztJQUNoQixPQUFPLEVBQUUsa0JBQWtCO0NBQzVCLENBQUM7QUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFVjtJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQWdDQztRQS9CQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUE0QmpCLENBQUM7SUF6QkMsa0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDRCxnQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRTtZQUNMLHFCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3hDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDWDtJQUNILENBQUM7SUExQk0sb0JBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyxxQkFBVSxHQUFHLFdBQVcsQ0FBQztJQU5iLFVBQVU7UUFEOUIsRUFBRSxDQUFDLEtBQUs7T0FDWSxVQUFVLENBZ0M5QjtJQUFELGlCQUFDO0NBaENELEFBZ0NDLENBaEN1QyxnQkFBTSxHQWdDN0M7a0JBaENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbnZhciBvO1xuZXhwb3J0IHZhciBFVGlwQW5pbVR5cGUgPSB7XG4gIE5ld01vZGVsOiBcIm5ld01vZGVsXCIsXG4gIENvbnRpbnVlOiBcImNvbnRpbnVlXCJcbn07XG4obyA9IHt9KVtFVGlwQW5pbVR5cGUuTmV3TW9kZWxdID0ge1xuICBhbmltOiBbXCJuZXdNb2RfaW5cIiwgXCJuZXdNb2RfaW5pdFwiXSxcbiAgdGlwOiBcIk5ldyBNb2QhXCIsXG4gIGkxOG5LZXk6IFwiY2xhc3NpY19uZXdtb2RcIlxufTtcbm9bRVRpcEFuaW1UeXBlLkNvbnRpbnVlXSA9IHtcbiAgYW5pbTogW1wiY29udGludWVfaW5cIiwgXCJjb250aW51ZV9pbml0XCJdLFxuICB0aXA6IFwiQ29udGludWUhXCIsXG4gIGkxOG5LZXk6IFwiY2xhc3NpY19Db250aW51ZVwiXG59O1xudmFyIHUgPSBvO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsQnRuVGlwIGV4dGVuZHMgQmFzZVVJIHtcbiAgbGFiZWwgPSBudWxsO1xuICBzcGluZSA9IG51bGw7XG4gIGJhc2VTcGluZSA9IG51bGw7XG4gIGluaXRlZCA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0hhbGxCdG5UaXBcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfY2xhc3NpY1wiO1xuICBpbml0Q29tcG9uZW50KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIik7XG4gICAgICB0aGlzLnNwaW5lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQW5pbVwiKTtcbiAgICAgIHRoaXMuYmFzZVNwaW5lID0gdGhpcy5zcGluZS5hZGRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIHRoaXMuYmFzZVNwaW5lLm1hcmtSZWFkeShcIlwiKTtcbiAgICAgIHRoaXMuYmFzZVNwaW5lLmF0dGFjaE5vZGUoXCJob29rX3R4dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmxhYmVsO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxhYmVsLnNldFBvc2l0aW9uKDAsIDMwKTtcbiAgICB9XG4gIH1cbiAgcGxheVRpcEFuaW0odCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmluaXRDb21wb25lbnQoKTtcbiAgICB2YXIgbiA9IHVbdF07XG4gICAgaWYgKG4pIHtcbiAgICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5sYWJlbCwgbi50aXAsIG4uaTE4bktleSk7XG4gICAgICB0aGlzLmJhc2VTcGluZS5zZXRBbmltYXRpb24obi5hbmltWzBdLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuYmFzZVNwaW5lLnNldEFuaW1hdGlvbihuLmFuaW1bMV0sIC0xKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cbn0iXX0=