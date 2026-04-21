
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicVideoAd/Scripts/ClassicVideoAdView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a760zD2nxENrILJE9yfmkI', 'ClassicVideoAdView');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseLabel_1 = require("../../../Scripts/gamePlay/base/ui/BaseLabel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ClassicVideoAdView = /** @class */ (function (_super) {
    __extends(ClassicVideoAdView, _super);
    function ClassicVideoAdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchBtn = null;
        _this.refuseBtn = null;
        _this.titleNode = null;
        return _this;
    }
    ClassicVideoAdView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.titleNode = this.node.getChildByName("title");
        var e = this.node.getChildByName("btn");
        if (e) {
            this.watchBtn = e.getComponent(cc.Button);
            var i = e.getChildByName("spine").getComponent(BaseSpine_1.default);
            i.markReady("");
            i && i.attachNodeWithAlpha("hook_text", "hook_text", function () {
                var t = I18NStrings_1.default.get("Common_Btn_Continue", "Continue"), e = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 50);
                e.setColor(new cc.Color().fromHEX("#e0ffe7"));
                e.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return e.node;
            });
        }
        var a = this.node.getChildByName("btn_no");
        a && (this.refuseBtn = a.getComponent(cc.Button));
        var o = this.refuseBtn.node.getChildByName("spr"), n = this.refuseBtn.node.getChildByName("label");
        o.active = false;
        n.active = true;
        this.watchBtn && this.OnButtonClick(this.watchBtn.node, this.onClickWatch.bind(this));
        this.refuseBtn && this.OnButtonClick(this.refuseBtn.node, this.onClickRefuse.bind(this));
        this.playEnterAnimation();
    };
    ClassicVideoAdView.prototype.playEnterAnimation = function () {
        if (this.titleNode && cc.isValid(this.titleNode)) {
            this.titleNode.scale = 0;
            cc.tween(this.titleNode).to(0.26, {
                scale: 1
            }, {
                easing: "backOut"
            }).start();
        }
        if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
            this.refuseBtn.node.scale = 0;
            cc.tween(this.refuseBtn.node).delay(0.53).to(0.27, {
                scale: 1
            }, {
                easing: "backOut"
            }).start();
        }
    };
    ClassicVideoAdView.prototype.onClickWatch = function () {
        var t = this.delegate;
        null == t || t.onClickWatch();
    };
    ClassicVideoAdView.prototype.onClickRefuse = function () {
        var t = this.delegate;
        null == t || t.onClickRefuse();
    };
    ClassicVideoAdView.prototype.updateDisplay = function (t) {
        if (this.titleNode && cc.isValid(this.titleNode)) {
            var e = this.titleNode.getComponent(I18NComponent_1.default);
            if (e)
                if (t.showSpecialTitle) {
                    e.setTranslateId("Get_MORE_SCOREplus", "Get More Score x{0}");
                    var i = this.titleNode.getComponent(cc.Label);
                    if (i) {
                        var a = I18NStrings_1.default.get("Get_MORE_SCOREplus", "Get More Score x{0}");
                        i.string = a.replace("{0}", t.currentMultiplier.toFixed(1));
                    }
                }
                else
                    e.setTranslateId("Get_MORE_SCORE", "Get More Score");
        }
        if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
            var o = this.refuseBtn.node.getChildByName("spr"), n = this.refuseBtn.node.getChildByName("label");
            if (t.hasCloseCount) {
                o.active = false;
                n.active = true;
            }
            else {
                o.active = true;
                n.active = false;
            }
        }
    };
    ClassicVideoAdView.prefabUrl = "prefabs/ClassicVideoAdView";
    __decorate([
        mj.traitEvent("ClcVideoAdVw_load")
    ], ClassicVideoAdView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("ClcVideoAdVw_clickWatch")
    ], ClassicVideoAdView.prototype, "onClickWatch", null);
    __decorate([
        mj.traitEvent("ClcVideoAdVw_clickRefuse")
    ], ClassicVideoAdView.prototype, "onClickRefuse", null);
    ClassicVideoAdView = __decorate([
        mj.class
    ], ClassicVideoAdView);
    return ClassicVideoAdView;
}(UIView_1.default));
exports.default = ClassicVideoAdView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNWaWRlb0FkL1NjcmlwdHMvQ2xhc3NpY1ZpZGVvQWRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQseUVBQW9FO0FBQ3BFLHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFDdEUsMEVBQXFFO0FBQy9ELElBQUEsS0FHRixFQUFFLENBQUMsVUFBVSxFQUZmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FDTyxDQUFDO0FBRWxCO0lBQWdELHNDQUFNO0lBQXREO1FBQUEscUVBb0ZDO1FBbkZDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWlGbkIsQ0FBQztJQTlFQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxHQUFHLHFCQUFXLENBQUMsR0FBRyxD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L0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUEvRU0sNEJBQVMsR0FBRyw0QkFBNEIsQ0FBQztJQUVoRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7b0RBMEJsQztJQW9CRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7MERBSXhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzJEQUl6QztJQTNEa0Isa0JBQWtCO1FBRHRDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksa0JBQWtCLENBb0Z0QztJQUFELHlCQUFDO0NBcEZELEFBb0ZDLENBcEYrQyxnQkFBTSxHQW9GckQ7a0JBcEZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEJhc2VMYWJlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZUxhYmVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBJMThOQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0kxOE5Db21wb25lbnQnO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNWaWRlb0FkVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIHdhdGNoQnRuID0gbnVsbDtcbiAgcmVmdXNlQnRuID0gbnVsbDtcbiAgdGl0bGVOb2RlID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9DbGFzc2ljVmlkZW9BZFZpZXdcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGNWaWRlb0FkVndfbG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy53YXRjaEJ0biA9IGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5nZXRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIGkubWFya1JlYWR5KFwiXCIpO1xuICAgICAgaSAmJiBpLmF0dGFjaE5vZGVXaXRoQWxwaGEoXCJob29rX3RleHRcIiwgXCJob29rX3RleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IEkxOE5TdHJpbmdzLmdldChcIkNvbW1vbl9CdG5fQ29udGludWVcIiwgXCJDb250aW51ZVwiKSxcbiAgICAgICAgICBlID0gQmFzZUxhYmVsLmNyZWF0ZSh0LCBcImZvbnQvU1BBUlRBTi1CT0xEXCIsIFwibWFpblJlc1wiLCA1MCk7XG4gICAgICAgIGUuc2V0Q29sb3IobmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNlMGZmZTdcIikpO1xuICAgICAgICBlLnNldEFsaWduKGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVIsIGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSKTtcbiAgICAgICAgcmV0dXJuIGUubm9kZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ub1wiKTtcbiAgICBhICYmICh0aGlzLnJlZnVzZUJ0biA9IGEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpO1xuICAgIHZhciBvID0gdGhpcy5yZWZ1c2VCdG4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwclwiKSxcbiAgICAgIG4gPSB0aGlzLnJlZnVzZUJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XG4gICAgby5hY3RpdmUgPSBmYWxzZTtcbiAgICBuLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy53YXRjaEJ0biAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy53YXRjaEJ0bi5ub2RlLCB0aGlzLm9uQ2xpY2tXYXRjaC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJlZnVzZUJ0biAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5yZWZ1c2VCdG4ubm9kZSwgdGhpcy5vbkNsaWNrUmVmdXNlLmJpbmQodGhpcykpO1xuICAgIHRoaXMucGxheUVudGVyQW5pbWF0aW9uKCk7XG4gIH1cbiAgcGxheUVudGVyQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLnRpdGxlTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMudGl0bGVOb2RlKSkge1xuICAgICAgdGhpcy50aXRsZU5vZGUuc2NhbGUgPSAwO1xuICAgICAgY2MudHdlZW4odGhpcy50aXRsZU5vZGUpLnRvKDAuMjYsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVmdXNlQnRuICYmIGNjLmlzVmFsaWQodGhpcy5yZWZ1c2VCdG4ubm9kZSkpIHtcbiAgICAgIHRoaXMucmVmdXNlQnRuLm5vZGUuc2NhbGUgPSAwO1xuICAgICAgY2MudHdlZW4odGhpcy5yZWZ1c2VCdG4ubm9kZSkuZGVsYXkoMC41MykudG8oMC4yNywge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsY1ZpZGVvQWRWd19jbGlja1dhdGNoXCIpXG4gIG9uQ2xpY2tXYXRjaCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZGVsZWdhdGU7XG4gICAgbnVsbCA9PSB0IHx8IHQub25DbGlja1dhdGNoKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGNWaWRlb0FkVndfY2xpY2tSZWZ1c2VcIilcbiAgb25DbGlja1JlZnVzZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZGVsZWdhdGU7XG4gICAgbnVsbCA9PSB0IHx8IHQub25DbGlja1JlZnVzZSgpO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkodCkge1xuICAgIGlmICh0aGlzLnRpdGxlTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMudGl0bGVOb2RlKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLnRpdGxlTm9kZS5nZXRDb21wb25lbnQoSTE4TkNvbXBvbmVudCk7XG4gICAgICBpZiAoZSkgaWYgKHQuc2hvd1NwZWNpYWxUaXRsZSkge1xuICAgICAgICBlLnNldFRyYW5zbGF0ZUlkKFwiR2V0X01PUkVfU0NPUkVwbHVzXCIsIFwiR2V0IE1vcmUgU2NvcmUgeHswfVwiKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRpdGxlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHZhciBhID0gSTE4TlN0cmluZ3MuZ2V0KFwiR2V0X01PUkVfU0NPUkVwbHVzXCIsIFwiR2V0IE1vcmUgU2NvcmUgeHswfVwiKTtcbiAgICAgICAgICBpLnN0cmluZyA9IGEucmVwbGFjZShcInswfVwiLCB0LmN1cnJlbnRNdWx0aXBsaWVyLnRvRml4ZWQoMSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZS5zZXRUcmFuc2xhdGVJZChcIkdldF9NT1JFX1NDT1JFXCIsIFwiR2V0IE1vcmUgU2NvcmVcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZnVzZUJ0biAmJiBjYy5pc1ZhbGlkKHRoaXMucmVmdXNlQnRuLm5vZGUpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMucmVmdXNlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJcIiksXG4gICAgICAgIG4gPSB0aGlzLnJlZnVzZUJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XG4gICAgICBpZiAodC5oYXNDbG9zZUNvdW50KSB7XG4gICAgICAgIG8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=