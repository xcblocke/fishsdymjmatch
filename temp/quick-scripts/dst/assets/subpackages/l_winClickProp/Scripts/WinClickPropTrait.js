
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winClickProp/Scripts/WinClickPropTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f14fKQuStILZ1r/XEk5+W/', 'WinClickPropTrait');
// subpackages/l_winClickProp/Scripts/WinClickPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DGameUseItem_1 = require("../../../Scripts/gamePlay/dot/DGameUseItem");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var WinClickPropTrait = /** @class */ (function (_super) {
    __extends(WinClickPropTrait, _super);
    function WinClickPropTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinClickPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinClickPropTrait.prototype.onIptHitTips_chgPropDef = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinClickPropTrait.prototype.onIptHitTips_execTempFix = function (t, e) {
        t.args[0];
        var r = t.ins.gameContext, o = r.getGameData().getHitTipsNums();
        r.getGameData().changeHitTipsNums(-1);
        r.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
        r.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
        var i = r.getGameData().getHitTipsNums();
        t.ins.pushUpdateHitTipsPropEffect(i);
        DGameUseItem_1.DotGameUseItem.dot(r, {
            itemId: GameTypeEnums_1.EItemId.Hint,
            afterNum: i,
            beforeNum: o
        });
        e();
    };
    WinClickPropTrait.traitKey = "WinClickProp";
    WinClickPropTrait = __decorate([
        mj.trait,
        mj.class("WinClickPropTrait")
    ], WinClickPropTrait);
    return WinClickPropTrait;
}(Trait_1.default));
exports.default = WinClickPropTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkNsaWNrUHJvcC9TY3JpcHRzL1dpbkNsaWNrUHJvcFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDJFQUE0RTtBQUM1RSx3RkFBaUY7QUFHakY7SUFBK0MscUNBQUs7SUFBcEQ7O0lBMkJBLENBQUM7SUF6QkMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG1EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsdUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsNkJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sRUFBRSx1QkFBTyxDQUFDLElBQUk7WUFDcEIsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztRQUNILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXpCTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0EyQnJDO0lBQUQsd0JBQUM7Q0EzQkQsQUEyQkMsQ0EzQjhDLGVBQUssR0EyQm5EO2tCQTNCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IERvdEdhbWVVc2VJdGVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcbmltcG9ydCB7IEVJdGVtSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXaW5DbGlja1Byb3BUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luQ2xpY2tQcm9wVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2luQ2xpY2tQcm9wXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdEhpdFRpcHNfY2hnUHJvcERlZih0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbiAgb25JcHRIaXRUaXBzX2V4ZWNUZW1wRml4KHQsIGUpIHtcbiAgICB0LmFyZ3NbMF07XG4gICAgdmFyIHIgPSB0Lmlucy5nYW1lQ29udGV4dCxcbiAgICAgIG8gPSByLmdldEdhbWVEYXRhKCkuZ2V0SGl0VGlwc051bXMoKTtcbiAgICByLmdldEdhbWVEYXRhKCkuY2hhbmdlSGl0VGlwc051bXMoLTEpO1xuICAgIHIuZ2V0R2FtZURhdGEoKS5yZWNvcmRUb29sVXNlKEVJdGVtSWQuSGludCk7XG4gICAgci5nZXRHYW1lRGF0YSgpLnRvb2xDaGFuZ2UoRUl0ZW1JZC5IaW50LCAtMSk7XG4gICAgdmFyIGkgPSByLmdldEdhbWVEYXRhKCkuZ2V0SGl0VGlwc051bXMoKTtcbiAgICB0Lmlucy5wdXNoVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QoaSk7XG4gICAgRG90R2FtZVVzZUl0ZW0uZG90KHIsIHtcbiAgICAgIGl0ZW1JZDogRUl0ZW1JZC5IaW50LFxuICAgICAgYWZ0ZXJOdW06IGksXG4gICAgICBiZWZvcmVOdW06IG9cbiAgICB9KTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=