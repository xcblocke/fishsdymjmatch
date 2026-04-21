
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_pns/Scripts/PropNumsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62e96VNUdxCkIRE7tJRP/4a', 'PropNumsTrait');
// subpackages/l_pns/Scripts/PropNumsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var PropNumsTrait = /** @class */ (function (_super) {
    __extends(PropNumsTrait, _super);
    function PropNumsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropNumsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropNumsTrait.prototype.onIptSetLv_setData = function (t, e) {
        if (1 == t.args[0].levelId && !this.localData.isPropNumsTraitDone) {
            t.ins.gameContext.getGameData().changeShuffleNums(this._traitData.shuffleNums, true);
            t.ins.gameContext.getGameData().changeHitTipsNums(this._traitData.hitTipsNums, true);
            this.localData.isPropNumsTraitDone = true;
            DGameGetItem_1.DotGameGetItem.dot(t.ins.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: this._traitData.shuffleNums,
                afterNum: t.ins.gameContext.getGameData().getShuffleNums(),
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送3次重洗牌",
                replace: true
            });
            DGameGetItem_1.DotGameGetItem.dot(t.ins.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: this._traitData.hitTipsNums,
                afterNum: t.ins.gameContext.getGameData().getHitTipsNums(),
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送3次提示",
                replace: true
            });
        }
        e();
    };
    PropNumsTrait.traitKey = "PropNumsTrait";
    PropNumsTrait = __decorate([
        mj.trait,
        mj.class("PropNumsTrait")
    ], PropNumsTrait);
    return PropNumsTrait;
}(Trait_1.default));
exports.default = PropNumsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Bucy9TY3JpcHRzL1Byb3BOdW1zVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFtRztBQUNuRyxnRUFBMkQ7QUFDM0QsMkVBQTRFO0FBRzVFO0lBQTJDLGlDQUFLO0lBQWhEOztJQTZCQSxDQUFDO0lBM0JDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFO1lBQ2pFLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQzFDLDZCQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxNQUFNLEVBQUUsdUJBQU8sQ0FBQyxPQUFPO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dCQUNuQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFO2dCQUMxRCxRQUFRLEVBQUUsZ0NBQWdCLENBQUMsVUFBVTtnQkFDckMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsNkJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE1BQU0sRUFBRSx1QkFBTyxDQUFDLElBQUk7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7Z0JBQ25DLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUU7Z0JBQzFELFFBQVEsRUFBRSxnQ0FBZ0IsQ0FBQyxVQUFVO2dCQUNyQyxVQUFVLEVBQUUsV0FBVztnQkFDdkIsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTNCTSxzQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0E2QmpDO0lBQUQsb0JBQUM7Q0E3QkQsQUE2QkMsQ0E3QjBDLGVBQUssR0E2Qi9DO2tCQTdCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJdGVtSWQsIEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVHZXRJdGVtJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUHJvcE51bXNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcE51bXNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJQcm9wTnVtc1RyYWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdFNldEx2X3NldERhdGEodCwgZSkge1xuICAgIGlmICgxID09IHQuYXJnc1swXS5sZXZlbElkICYmICF0aGlzLmxvY2FsRGF0YS5pc1Byb3BOdW1zVHJhaXREb25lKSB7XG4gICAgICB0Lmlucy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmNoYW5nZVNodWZmbGVOdW1zKHRoaXMuX3RyYWl0RGF0YS5zaHVmZmxlTnVtcywgdHJ1ZSk7XG4gICAgICB0Lmlucy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmNoYW5nZUhpdFRpcHNOdW1zKHRoaXMuX3RyYWl0RGF0YS5oaXRUaXBzTnVtcywgdHJ1ZSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc1Byb3BOdW1zVHJhaXREb25lID0gdHJ1ZTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0Lmlucy5nYW1lQ29udGV4dCwge1xuICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuU2h1ZmZsZSxcbiAgICAgICAgbnVtYmVyOiB0aGlzLl90cmFpdERhdGEuc2h1ZmZsZU51bXMsXG4gICAgICAgIGFmdGVyTnVtOiB0Lmlucy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNodWZmbGVOdW1zKCksXG4gICAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLlN5c3RlbUdpZnQsXG4gICAgICAgIHJlYXNvbkluZm86IFwi6aaW5qyh6L+b5YWl6YCBM+asoemHjea0l+eJjFwiLFxuICAgICAgICByZXBsYWNlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0Lmlucy5nYW1lQ29udGV4dCwge1xuICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuSGludCxcbiAgICAgICAgbnVtYmVyOiB0aGlzLl90cmFpdERhdGEuaGl0VGlwc051bXMsXG4gICAgICAgIGFmdGVyTnVtOiB0Lmlucy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhpdFRpcHNOdW1zKCksXG4gICAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLlN5c3RlbUdpZnQsXG4gICAgICAgIHJlYXNvbkluZm86IFwi6aaW5qyh6L+b5YWl6YCBM+asoeaPkOekulwiLFxuICAgICAgICByZXBsYWNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19