
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectspine/Scripts/SelectSpine1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41445DfM1dNcq3aU+ayLivF', 'SelectSpine1Trait');
// subpackages/l_selectspine/Scripts/SelectSpine1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var SelectSpine1Trait = /** @class */ (function (_super) {
    __extends(SelectSpine1Trait, _super);
    function SelectSpine1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine1Trait.prototype.getPicConfig = function (e) {
        return 1 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_greenLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_green"
        } : 2 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_purpleLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_purple"
        } : {
            bgPic: "texture/selecttex/gameplay_select_mj_redLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_red"
        };
    };
    SelectSpine1Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine1Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = (i.context.gameType, this.getPicConfig(1));
        if (n && n.bgPic && n.spine && n.animation) {
            if (cc.isValid(a) && cc.isValid(r)) {
                var s = BaseSprite_1.default.refreshWithNode(a, n.bgPic, false, false, "l_selectspine");
                s.node.getComponent(cc.Sprite).trim = false;
                s.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                s.node.setScale(i.info.tileObject.layoutScale);
                BaseSpine_1.default.refreshWithNode(r, n.spine, "l_selectspine").setAnimation(n.animation, -1);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    SelectSpine1Trait.traitKey = "SelectSpine1";
    SelectSpine1Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine1Trait")
    ], SelectSpine1Trait);
    return SelectSpine1Trait;
}(Trait_1.default));
exports.default = SelectSpine1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdHNwaW5lL1NjcmlwdHMvU2VsZWN0U3BpbmUxVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFDcEUsMkVBQXNFO0FBR3RFO0lBQStDLHFDQUFLO0lBQXBEOztJQStDQSxDQUFDO0lBN0NDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx3Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLEVBQUUsaURBQWlEO1lBQ3hELEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLEVBQUUsa0RBQWtEO1lBQ3pELEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsU0FBUyxFQUFFLGFBQWE7U0FDekIsQ0FBQyxDQUFDLENBQUM7WUFDRixLQUFLLEVBQUUsK0NBQStDO1lBQ3RELEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFDRCxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDeEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7WUFDM0YsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQywrREFBK0QsRUFBRSxnRUFBZ0UsRUFBRSw2REFBNkQsQ0FBQyxDQUFDLENBQUM7U0FDcE87UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQzFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDLENBQUM7b0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQzFDLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQzthQUNKOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTdDTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0ErQ3JDO0lBQUQsd0JBQUM7Q0EvQ0QsQUErQ0MsQ0EvQzhDLGVBQUssR0ErQ25EO2tCQS9Db0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNlbGVjdFNwaW5lMVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RTcGluZTFUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTZWxlY3RTcGluZTFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldFBpY0NvbmZpZyhlKSB7XG4gICAgcmV0dXJuIDEgPT0gZSA/IHtcbiAgICAgIGJnUGljOiBcInRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9ncmVlbkxpZ2h0XCIsXG4gICAgICBzcGluZTogXCJzcGluZS9zZWxlY3RzcGluZS9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIixcbiAgICAgIGFuaW1hdGlvbjogXCJpbml0X2dyZWVuXCJcbiAgICB9IDogMiA9PSBlID8ge1xuICAgICAgYmdQaWM6IFwidGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX3B1cnBsZUxpZ2h0XCIsXG4gICAgICBzcGluZTogXCJzcGluZS9zZWxlY3RzcGluZS9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIixcbiAgICAgIGFuaW1hdGlvbjogXCJpbml0X3B1cnBsZVwiXG4gICAgfSA6IHtcbiAgICAgIGJnUGljOiBcInRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9yZWRMaWdodFwiLFxuICAgICAgc3BpbmU6IFwic3BpbmUvc2VsZWN0c3BpbmUvZ2FtZXBsYXlfc2VsZWN0ZWRfZWZ4XCIsXG4gICAgICBhbmltYXRpb246IFwiaW5pdF9yZWRcIlxuICAgIH07XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucztcbiAgICBpZiAoaSAmJiBpLmFkZFByZWxvYWRSZXMpIHtcbiAgICAgIGkuYWRkUHJlbG9hZFJlcyhcIlNrZWxldG9uRGF0YVwiLCBbXCJsX3NlbGVjdHNwaW5lOnNwaW5lL3NlbGVjdHNwaW5lL2dhbWVwbGF5X3NlbGVjdGVkX2VmeFwiXSk7XG4gICAgICBpLmFkZFByZWxvYWRSZXMoXCJTcHJpdGVGcmFtZVwiLCBbXCJsX3NlbGVjdHNwaW5lOnRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9ncmVlbkxpZ2h0XCIsIFwibF9zZWxlY3RzcGluZTp0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfcHVycGxlTGlnaHRcIiwgXCJsX3NlbGVjdHNwaW5lOnRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9yZWRMaWdodFwiXSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvbkJhc2VUaWxlTm9kZV9yc1NlbGVjdEVmZihlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucyxcbiAgICAgIGEgPSBpLmltZ1NlbGVjdGVkQ2FyZEJnLFxuICAgICAgciA9IGkuZWZmZWN0U2VsZWN0ZWQsXG4gICAgICBuID0gKGkuY29udGV4dC5nYW1lVHlwZSwgdGhpcy5nZXRQaWNDb25maWcoMSkpO1xuICAgIGlmIChuICYmIG4uYmdQaWMgJiYgbi5zcGluZSAmJiBuLmFuaW1hdGlvbikge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkgJiYgY2MuaXNWYWxpZChyKSkge1xuICAgICAgICB2YXIgcyA9IEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGEsIG4uYmdQaWMsIGZhbHNlLCBmYWxzZSwgXCJsX3NlbGVjdHNwaW5lXCIpO1xuICAgICAgICBzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkudHJpbSA9IGZhbHNlO1xuICAgICAgICBzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBzLm5vZGUuc2V0U2NhbGUoaS5pbmZvLnRpbGVPYmplY3QubGF5b3V0U2NhbGUpO1xuICAgICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHIsIG4uc3BpbmUsIFwibF9zZWxlY3RzcGluZVwiKS5zZXRBbmltYXRpb24obi5hbmltYXRpb24sIC0xKTtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=