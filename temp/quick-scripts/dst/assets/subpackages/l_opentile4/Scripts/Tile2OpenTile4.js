
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_opentile4/Scripts/Tile2OpenTile4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0ae9yr4nNMFJRPda6VBcoM', 'Tile2OpenTile4');
// subpackages/l_opentile4/Scripts/Tile2OpenTile4.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2OpenTile4 = /** @class */ (function (_super) {
    __extends(Tile2OpenTile4, _super);
    function Tile2OpenTile4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2OpenTile4.prototype.onT2GameCtrl_gT2SlotT = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: GameTypeEnums_1.ETile2SlotType.Slot4
        });
    };
    Tile2OpenTile4.traitKey = "Tile2OpenTile4";
    Tile2OpenTile4 = __decorate([
        mj.trait,
        mj.class("Tile2OpenTile4")
    ], Tile2OpenTile4);
    return Tile2OpenTile4;
}(Trait_1.default));
exports.default = Tile2OpenTile4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX29wZW50aWxlNC9TY3JpcHRzL1RpbGUyT3BlblRpbGU0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBd0Y7QUFDeEYsZ0VBQTJEO0FBRzNEO0lBQTRDLGtDQUFLO0lBQWpEOztJQVNBLENBQUM7SUFQQyw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxLQUFLO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFQTSx1QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQVNsQztJQUFELHFCQUFDO0NBVEQsQUFTQyxDQVQyQyxlQUFLLEdBU2hEO2tCQVRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGUyU2xvdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJPcGVuVGlsZTRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyT3BlblRpbGU0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyT3BlblRpbGU0XCI7XG4gIG9uVDJHYW1lQ3RybF9nVDJTbG90VCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiBFVGlsZTJTbG90VHlwZS5TbG90NFxuICAgIH0pO1xuICB9XG59Il19