
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2InitSlotBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bde6elmppJDLY49pdyhO0Uw', 'InputTile2InitSlotBar');
// Scripts/input/InputTile2InitSlotBar.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2InitSlotBarEffect_1 = require("../Tile2InitSlotBarEffect");
var Tile2ScreenEdgeEffect_1 = require("../Tile2ScreenEdgeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitSlotBar = /** @class */ (function (_super) {
    __extends(InputTile2InitSlotBar, _super);
    function InputTile2InitSlotBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitSlotBar.prototype.excute = function () {
        for (var e = this.gameContext.getGameData(), t = e.slotBarIds, o = this.gameContext.getTileMapObject(), n = [], i = 0; i < t.length; i++) {
            var r = o.getTileObjectByPosId(t[i]);
            r && n.push(r.id);
        }
        var p = e.getSlotLevel(), f = this.gameContext.getTile2SlotType(), d = this.isShowSlot3();
        p = d ? 0 : p;
        this.pushEffect(new Tile2InitSlotBarEffect_1.Tile2InitSlotBarEffect({
            tileIds: n,
            slotLevel: p,
            slotType: f
        }), BehaviorsEnum_1.EInsertType.Root);
        if (this.gameContext.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 || d) {
            var h = e.getComboNum(), y = this.gameContext.tile2ComboChecker.getReachedScreenEdgeThreshold(h);
            y > 0 && this.pushEffect(new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
                comboNum: y,
                skipBurst: true
            }), BehaviorsEnum_1.EInsertType.Parallel);
        }
        this.gameContext.getIsNewGame() && DGameStart_1.DotGameStart.dot(this.gameContext);
    };
    InputTile2InitSlotBar.prototype.isShowSlot3 = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("IptT2InitSlotBar_exec")
    ], InputTile2InitSlotBar.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2InitSlotBar_isSlot3")
    ], InputTile2InitSlotBar.prototype, "isShowSlot3", null);
    return InputTile2InitSlotBar;
}(InputBase_1.InputBase));
exports.default = InputTile2InitSlotBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJJbml0U2xvdEJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQTBEO0FBQzFELDJEQUF3RDtBQUN4RCwwRUFBMEU7QUFDMUUsb0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSxvREFBbUQ7QUFDbkQ7SUFBbUQseUNBQVM7SUFBNUQ7O0lBOEJBLENBQUM7SUE1QkMsc0NBQU0sR0FBTjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4SSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLCtDQUFzQixDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLDhCQUFjLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDZDQUFxQixDQUFDO2dCQUNqRCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUkseUJBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBM0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzt1REF3QnRDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzREQUd6QztJQUNILDRCQUFDO0NBOUJELEFBOEJDLENBOUJrRCxxQkFBUyxHQThCM0Q7a0JBOUJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lU3RhcnQgfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREdhbWVTdGFydCc7XG5pbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRVRpbGUyU2xvdFR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRpbGUySW5pdFNsb3RCYXJFZmZlY3QgfSBmcm9tICcuLi9UaWxlMkluaXRTbG90QmFyRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyU2NyZWVuRWRnZUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyU2NyZWVuRWRnZUVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJJbml0U2xvdEJhciBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJJbml0U2xvdEJhcl9leGVjXCIpXG4gIGV4Y3V0ZSgpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLCB0ID0gZS5zbG90QmFySWRzLCBvID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksIG4gPSBbXSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IG8uZ2V0VGlsZU9iamVjdEJ5UG9zSWQodFtpXSk7XG4gICAgICByICYmIG4ucHVzaChyLmlkKTtcbiAgICB9XG4gICAgdmFyIHAgPSBlLmdldFNsb3RMZXZlbCgpLFxuICAgICAgZiA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZTJTbG90VHlwZSgpLFxuICAgICAgZCA9IHRoaXMuaXNTaG93U2xvdDMoKTtcbiAgICBwID0gZCA/IDAgOiBwO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJJbml0U2xvdEJhckVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiBuLFxuICAgICAgc2xvdExldmVsOiBwLFxuICAgICAgc2xvdFR5cGU6IGZcbiAgICB9KSwgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZTJTbG90VHlwZSgpID09PSBFVGlsZTJTbG90VHlwZS5TbG90MyB8fCBkKSB7XG4gICAgICB2YXIgaCA9IGUuZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgeSA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJDb21ib0NoZWNrZXIuZ2V0UmVhY2hlZFNjcmVlbkVkZ2VUaHJlc2hvbGQoaCk7XG4gICAgICB5ID4gMCAmJiB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyU2NyZWVuRWRnZUVmZmVjdCh7XG4gICAgICAgIGNvbWJvTnVtOiB5LFxuICAgICAgICBza2lwQnVyc3Q6IHRydWVcbiAgICAgIH0pLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0SXNOZXdHYW1lKCkgJiYgRG90R2FtZVN0YXJ0LmRvdCh0aGlzLmdhbWVDb250ZXh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQySW5pdFNsb3RCYXJfaXNTbG90M1wiKVxuICBpc1Nob3dTbG90MygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=