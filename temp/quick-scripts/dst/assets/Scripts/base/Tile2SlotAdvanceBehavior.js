
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2SlotAdvanceBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6f27eTwJ9NGoJw5MmXFneU', 'Tile2SlotAdvanceBehavior');
// Scripts/base/Tile2SlotAdvanceBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotAdvanceBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2SlotAdvanceBehavior = /** @class */ (function (_super) {
    __extends(Tile2SlotAdvanceBehavior, _super);
    function Tile2SlotAdvanceBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SlotAdvanceBehavior.prototype.start = function (e) {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        var t = e.data.slotLevel, o = this.context.gameView, n = null == o ? void 0 : o.slotBarView, i = this.isShowSlot4();
        if ((null == n ? void 0 : n.slotBarEffectManager) && i) {
            n.slotBarEffectManager.advanceToLevel(t);
            this.onSlotAdvance(t);
        }
    };
    Tile2SlotAdvanceBehavior.prototype.onSlotAdvance = function () { };
    Tile2SlotAdvanceBehavior.prototype.isShowSlot4 = function () {
        return true;
    };
    __decorate([
        mj.traitEvent("T2SlotAdvBhv_advance")
    ], Tile2SlotAdvanceBehavior.prototype, "onSlotAdvance", null);
    __decorate([
        mj.traitEvent("T2SlotAdvBhv_isShow4")
    ], Tile2SlotAdvanceBehavior.prototype, "isShowSlot4", null);
    return Tile2SlotAdvanceBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2SlotAdvanceBehavior = Tile2SlotAdvanceBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTbG90QWR2YW5jZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUE4Qyw0Q0FBaUI7SUFBL0Q7O0lBa0JBLENBQUM7SUFqQkMsd0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFDekIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxnREFBYSxHQUFiLGNBQWlCLENBQUM7SUFFbEIsOENBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUpEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztpRUFDcEI7SUFFbEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOytEQUdyQztJQUNILCtCQUFDO0NBbEJELEFBa0JDLENBbEI2QyxxQ0FBaUIsR0FrQjlEO0FBbEJZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyU2xvdEFkdmFuY2VCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgdmFyIHQgPSBlLmRhdGEuc2xvdExldmVsLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5nYW1lVmlldyxcbiAgICAgIG4gPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLnNsb3RCYXJWaWV3LFxuICAgICAgaSA9IHRoaXMuaXNTaG93U2xvdDQoKTtcbiAgICBpZiAoKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uc2xvdEJhckVmZmVjdE1hbmFnZXIpICYmIGkpIHtcbiAgICAgIG4uc2xvdEJhckVmZmVjdE1hbmFnZXIuYWR2YW5jZVRvTGV2ZWwodCk7XG4gICAgICB0aGlzLm9uU2xvdEFkdmFuY2UodCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTbG90QWR2Qmh2X2FkdmFuY2VcIilcbiAgb25TbG90QWR2YW5jZSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTbG90QWR2Qmh2X2lzU2hvdzRcIilcbiAgaXNTaG93U2xvdDQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXX0=