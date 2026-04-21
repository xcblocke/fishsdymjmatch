
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2InitBottom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c5b6qGaiZGYZMC5clkAUq7', 'InputTile2InitBottom');
// Scripts/input/InputTile2InitBottom.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2InitBottomEffect_1 = require("../Tile2InitBottomEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitBottom = /** @class */ (function (_super) {
    __extends(InputTile2InitBottom, _super);
    function InputTile2InitBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitBottom.prototype.excute = function () {
        var e = this.gameContext.getGameData().getShuffleNums(), t = this.gameContext.getGameData().getHitTipsNums(), o = this.gameContext.getGameData().getRevertNums();
        this.pushEffect(new Tile2InitBottomEffect_1.Tile2InitBottomEffect({
            shuffleNum: e,
            hitTipsNum: t,
            revertNum: o
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2InitBottom;
}(InputBase_1.InputBase));
exports.default = InputTile2InitBottom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJJbml0Qm90dG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsa0VBQWlFO0FBQ2pFLG9EQUFtRDtBQUNuRDtJQUFrRCx3Q0FBUztJQUEzRDs7SUFXQSxDQUFDO0lBVkMscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksNkNBQXFCLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWGlELHFCQUFTLEdBVzFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IFRpbGUySW5pdEJvdHRvbUVmZmVjdCB9IGZyb20gJy4uL1RpbGUySW5pdEJvdHRvbUVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJJbml0Qm90dG9tIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNodWZmbGVOdW1zKCksXG4gICAgICB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhpdFRpcHNOdW1zKCksXG4gICAgICBvID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFJldmVydE51bXMoKTtcbiAgICB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUySW5pdEJvdHRvbUVmZmVjdCh7XG4gICAgICBzaHVmZmxlTnVtOiBlLFxuICAgICAgaGl0VGlwc051bTogdCxcbiAgICAgIHJldmVydE51bTogb1xuICAgIH0pLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxufSJdfQ==