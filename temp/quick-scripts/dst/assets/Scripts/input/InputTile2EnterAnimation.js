
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2EnterAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cdc965xcFdJqrhorNayvb5y', 'InputTile2EnterAnimation');
// Scripts/input/InputTile2EnterAnimation.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var EnterAnimationEffect_1 = require("../EnterAnimationEffect");
var InputBase_1 = require("../inputbase/InputBase");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputTile2EnterAnimation = /** @class */ (function (_super) {
    __extends(InputTile2EnterAnimation, _super);
    function InputTile2EnterAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2EnterAnimation.prototype.excute = function () {
        UserModel_1.default.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
    };
    InputTile2EnterAnimation.prototype.pushEnterAnimationEffect = function () {
        var e = new EnterAnimationEffect_1.EnterAnimationEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root, null, true);
    };
    __decorate([
        mj.traitEvent("IptT2EtAn_excute")
    ], InputTile2EnterAnimation.prototype, "excute", null);
    return InputTile2EnterAnimation;
}(InputBase_1.InputBase));
exports.default = InputTile2EnterAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJFbnRlckFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELGdFQUErRDtBQUMvRCxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25EO0lBQXNELDRDQUFTO0lBQS9EOztJQVdBLENBQUM7SUFUQyx5Q0FBTSxHQUFOO1FBQ0UsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztZQUMvQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFO1NBQ3pELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBUkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzBEQUdqQztJQU9ILCtCQUFDO0NBWEQsQUFXQyxDQVhxRCxxQkFBUyxHQVc5RDtrQkFYb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVudGVyQW5pbWF0aW9uRWZmZWN0IH0gZnJvbSAnLi4vRW50ZXJBbmltYXRpb25FZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJFbnRlckFuaW1hdGlvbiBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJFdEFuX2V4Y3V0ZVwiKVxuICBleGN1dGUoKSB7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkgJiYgdGhpcy5wdXNoRW50ZXJBbmltYXRpb25FZmZlY3QoKTtcbiAgfVxuICBwdXNoRW50ZXJBbmltYXRpb25FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgRW50ZXJBbmltYXRpb25FZmZlY3Qoe1xuICAgICAgY2FyZExheW91dENvbmZpZzogdGhpcy5nYW1lQ29udGV4dC5nZXRDYXJkTGF5b3V0Q29uZmlnKClcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn0iXX0=