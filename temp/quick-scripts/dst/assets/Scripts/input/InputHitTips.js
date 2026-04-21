
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputHitTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5e02SP5RpJZo6D8iZMMxLm', 'InputHitTips');
// Scripts/input/InputHitTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var HitTipsEffect_1 = require("../HitTipsEffect");
var UpdateHitTipsPropEffect_1 = require("../UpdateHitTipsPropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputHitTips = /** @class */ (function (_super) {
    __extends(InputHitTips, _super);
    function InputHitTips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputHitTips.prototype.excute = function () {
        if (!this.gameController.gameContext.getCanHitTips().length) {
            var e = this.gameContext.getGameData().getHitTipsNums();
            if (this.gameContext.getGameData().isHitTipsEnough()) {
                this.changePropNumDefault(e);
                var t = this.gameController.tileMapObject.getCanMatchTilesHint();
                if (0 == t.length) {
                    this.gameController.tileMapObject.updateCanMatchTiles();
                    t = this.gameController.tileMapObject.getCanMatchTilesHint();
                }
                if (t.length > 0) {
                    var o = this.findHintTile(t), n = o[0].id, i = o[1].id;
                    this.gameContext.trackerModifier.triggerHint(n, i);
                    this.gameController.tileMapObject.getTileObject(n).isHint = true;
                    this.gameController.tileMapObject.getTileObject(i).isHint = true;
                    this.gameController.gameContext.setCanHitTips([n, i]);
                    if (mj.triggerInternalEvent("IptHitTips_execTempFix", this, [e]))
                        return;
                    this.pushHitTipsEffect(n, i, false);
                }
            }
            else
                mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
        }
    };
    InputHitTips.prototype.findHintTile = function (e) {
        var t = e[Math.floor(Math.random() * e.length)];
        return t.slice(0, 2);
    };
    InputHitTips.prototype.pushHitTipsEffect = function (e, t, o) {
        var n = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: o,
            tileId1: e,
            tileId2: t
        });
        this.pushEffect(n);
    };
    InputHitTips.prototype.pushUpdateHitTipsPropEffect = function (e) {
        var t = new UpdateHitTipsPropEffect_1.UpdateHitTipsPropEffect({
            curNum: e
        });
        this.pushEffect(t);
    };
    InputHitTips.prototype.changePropNumDefault = function () {
        var e = this.gameContext.getGameData().getHitTipsNums();
        this.gameContext.getGameData().changeHitTipsNums(-1);
        this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
        this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
        var t = this.gameContext.getGameData().getHitTipsNums();
        DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
            itemId: GameTypeEnums_1.EItemId.Hint,
            afterNum: t,
            beforeNum: e
        });
        this.pushUpdateHitTipsPropEffect(t);
    };
    __decorate([
        mj.traitEvent("IptHitTips_exec")
    ], InputHitTips.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptHitTips_findHint")
    ], InputHitTips.prototype, "findHintTile", null);
    __decorate([
        mj.traitEvent("IptHitTips_chgPropDef")
    ], InputHitTips.prototype, "changePropNumDefault", null);
    return InputHitTips;
}(InputBase_1.InputBase));
exports.default = InputHitTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0SGl0VGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQThEO0FBQzlELDBFQUFtRTtBQUNuRSxrREFBaUQ7QUFDakQsc0VBQXFFO0FBQ3JFLG9EQUFtRDtBQUNuRDtJQUEwQyxnQ0FBUztJQUFuRDs7SUEyREEsQ0FBQztJQXpEQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUN4RCxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztpQkFDOUQ7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2QsSUFB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O0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO29EQUlwQztJQWdCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7NERBYXRDO0lBQ0gsbUJBQUM7Q0EzREQsQUEyREMsQ0EzRHlDLHFCQUFTLEdBMkRsRDtrQkEzRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lVXNlSXRlbSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZVVzZUl0ZW0nO1xuaW1wb3J0IHsgRUl0ZW1JZCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgSGl0VGlwc0VmZmVjdCB9IGZyb20gJy4uL0hpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QgfSBmcm9tICcuLi9VcGRhdGVIaXRUaXBzUHJvcEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGl0VGlwcyBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0SGl0VGlwc19leGVjXCIpXG4gIGV4Y3V0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZUNvbnRleHQuZ2V0Q2FuSGl0VGlwcygpLmxlbmd0aCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0SGl0VGlwc051bXMoKTtcbiAgICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuaXNIaXRUaXBzRW5vdWdoKCkpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQcm9wTnVtRGVmYXVsdChlKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICAgICAgaWYgKDAgPT0gdC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgICAgICAgIHQgPSB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLmZpbmRIaW50VGlsZSh0KSxcbiAgICAgICAgICAgIG4gPSBvWzBdLmlkLFxuICAgICAgICAgICAgaSA9IG9bMV0uaWQ7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50cmFja2VyTW9kaWZpZXIudHJpZ2dlckhpbnQobiwgaSk7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QobikuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0VGlsZU9iamVjdChpKS5pc0hpbnQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZUNvbnRleHQuc2V0Q2FuSGl0VGlwcyhbbiwgaV0pO1xuICAgICAgICAgIGlmIChtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIklwdEhpdFRpcHNfZXhlY1RlbXBGaXhcIiwgdGhpcywgW2VdKSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMucHVzaEhpdFRpcHNFZmZlY3QobiwgaSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJTSE9XVElQU1wiLCBcIkluc3VmZmljaWVudCBudW1iZXIgb2YgcHJvcHMuXCIsIGNjLnYyKDAsIDApKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRIaXRUaXBzX2ZpbmRIaW50XCIpXG4gIGZpbmRIaW50VGlsZShlKSB7XG4gICAgdmFyIHQgPSBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKV07XG4gICAgcmV0dXJuIHQuc2xpY2UoMCwgMik7XG4gIH1cbiAgcHVzaEhpdFRpcHNFZmZlY3QoZSwgdCwgbykge1xuICAgIHZhciBuID0gbmV3IEhpdFRpcHNFZmZlY3Qoe1xuICAgICAgaXNDbGVhckhpdDogbyxcbiAgICAgIHRpbGVJZDE6IGUsXG4gICAgICB0aWxlSWQyOiB0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KG4pO1xuICB9XG4gIHB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3Qoe1xuICAgICAgY3VyTnVtOiBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0SGl0VGlwc19jaGdQcm9wRGVmXCIpXG4gIGNoYW5nZVByb3BOdW1EZWZhdWx0KCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhpdFRpcHNOdW1zKCk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmNoYW5nZUhpdFRpcHNOdW1zKC0xKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVjb3JkVG9vbFVzZShFSXRlbUlkLkhpbnQpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS50b29sQ2hhbmdlKEVJdGVtSWQuSGludCwgLTEpO1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhpdFRpcHNOdW1zKCk7XG4gICAgRG90R2FtZVVzZUl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgIGl0ZW1JZDogRUl0ZW1JZC5IaW50LFxuICAgICAgYWZ0ZXJOdW06IHQsXG4gICAgICBiZWZvcmVOdW06IGVcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdCh0KTtcbiAgfVxufSJdfQ==