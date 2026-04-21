
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineClickItemEff/Scripts/ValentineClickItemEffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cc4bk7dRVPBZRuBs5oaSd+', 'ValentineClickItemEffTrait');
// subpackages/r_valentineClickItemEff/Scripts/ValentineClickItemEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineClickItemEffTrait = /** @class */ (function (_super) {
    __extends(ValentineClickItemEffTrait, _super);
    function ValentineClickItemEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineClickItemEffTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineClickItemEff",
            spinePath: "spine/gameplay_propBtn_light",
            animName: "in"
        };
    };
    ValentineClickItemEffTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        e();
        this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnShuffle);
    };
    ValentineClickItemEffTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        e();
        this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnHitTips);
    };
    ValentineClickItemEffTrait.prototype.addClickItemEff = function (t) {
        var e = BaseSpine_1.default.create(this.getAniCfg().spinePath, this.getAniCfg().animName, 1, null, true, this.getAniCfg().bundleName);
        e.node.parent = t;
        e.node.setPosition(0, 0);
    };
    ValentineClickItemEffTrait.prototype.isClickItemEffActive = function () {
        if (null != this._traitData.clickItemEff)
            return this._traitData.clickItemEff;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineClickItemEffTrait.traitKey = "ValentineClickItemEff";
    ValentineClickItemEffTrait = __decorate([
        mj.trait,
        mj.class("ValentineClickItemEffTrait")
    ], ValentineClickItemEffTrait);
    return ValentineClickItemEffTrait;
}(Trait_1.default));
exports.default = ValentineClickItemEffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNsaWNrSXRlbUVmZi9TY3JpcHRzL1ZhbGVudGluZUNsaWNrSXRlbUVmZlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBR3BFO0lBQXdELDhDQUFLO0lBQTdEOztJQTJCQSxDQUFDO0lBekJDLDhDQUFTLEdBQVQ7UUFDRSxPQUFPO1lBQ0wsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxTQUFTLEVBQUUsOEJBQThCO1lBQ3pDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDRCwwREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELDBEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0Qsb0RBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1SCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx5REFBb0IsR0FBcEI7UUFDRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzlFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUF6Qk0sbUNBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUR2QiwwQkFBMEI7UUFGOUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO09BQ2xCLDBCQUEwQixDQTJCOUM7SUFBRCxpQ0FBQztDQTNCRCxBQTJCQyxDQTNCdUQsZUFBSyxHQTJCNUQ7a0JBM0JvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lQ2xpY2tJdGVtRWZmVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUNsaWNrSXRlbUVmZlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZUNsaWNrSXRlbUVmZlwiO1xuICBnZXRBbmlDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1bmRsZU5hbWU6IFwicl92YWxlbnRpbmVDbGlja0l0ZW1FZmZcIixcbiAgICAgIHNwaW5lUGF0aDogXCJzcGluZS9nYW1lcGxheV9wcm9wQnRuX2xpZ2h0XCIsXG4gICAgICBhbmltTmFtZTogXCJpblwiXG4gICAgfTtcbiAgfVxuICBvbkdhbWVVSV9vbkJ0blNodWZmbGUodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLmlzQ2xpY2tJdGVtRWZmQWN0aXZlKCkgJiYgdGhpcy5hZGRDbGlja0l0ZW1FZmYodC5pbnMuYnRuU2h1ZmZsZSk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5IaXRUaXBzKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc0NsaWNrSXRlbUVmZkFjdGl2ZSgpICYmIHRoaXMuYWRkQ2xpY2tJdGVtRWZmKHQuaW5zLmJ0bkhpdFRpcHMpO1xuICB9XG4gIGFkZENsaWNrSXRlbUVmZih0KSB7XG4gICAgdmFyIGUgPSBCYXNlU3BpbmUuY3JlYXRlKHRoaXMuZ2V0QW5pQ2ZnKCkuc3BpbmVQYXRoLCB0aGlzLmdldEFuaUNmZygpLmFuaW1OYW1lLCAxLCBudWxsLCB0cnVlLCB0aGlzLmdldEFuaUNmZygpLmJ1bmRsZU5hbWUpO1xuICAgIGUubm9kZS5wYXJlbnQgPSB0O1xuICAgIGUubm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgfVxuICBpc0NsaWNrSXRlbUVmZkFjdGl2ZSgpIHtcbiAgICBpZiAobnVsbCAhPSB0aGlzLl90cmFpdERhdGEuY2xpY2tJdGVtRWZmKSByZXR1cm4gdGhpcy5fdHJhaXREYXRhLmNsaWNrSXRlbUVmZjtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0LmdldEluc3RhbmNlKCkuaXNFZmZlY3RBY3RpdmUoKTtcbiAgfVxufSJdfQ==