
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTimeoutBreakCombo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '037c9iw84pG/p7R0hNcKonZ', 'InputTimeoutBreakCombo');
// Scripts/input/InputTimeoutBreakCombo.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var UpdateScoreEffect_1 = require("../UpdateScoreEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTimeoutBreakCombo = /** @class */ (function (_super) {
    __extends(InputTimeoutBreakCombo, _super);
    function InputTimeoutBreakCombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTimeoutBreakCombo.prototype.excute = function () {
        this.gameContext.comboModifier.breakCombo();
        var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: e.getScore(),
            isShowCombo: this.gameContext.comboChecker.canShowCombo()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptTmoutBrkCb_exec")
    ], InputTimeoutBreakCombo.prototype, "excute", null);
    return InputTimeoutBreakCombo;
}(InputBase_1.InputBase));
exports.default = InputTimeoutBreakCombo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGltZW91dEJyZWFrQ29tYm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCwwREFBeUQ7QUFDekQsb0RBQW1EO0FBQ25EO0lBQW9ELDBDQUFTO0lBQTdEOztJQVlBLENBQUM7SUFWQyx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDcEMsQ0FBQyxHQUFHLElBQUkscUNBQWlCLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1NBQzFELENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt3REFVbkM7SUFDSCw2QkFBQztDQVpELEFBWUMsQ0FabUQscUJBQVMsR0FZNUQ7a0JBWm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4uL1VwZGF0ZVNjb3JlRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaW1lb3V0QnJlYWtDb21ibyBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VG1vdXRCcmtDYl9leGVjXCIpXG4gIGV4Y3V0ZSgpIHtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmNvbWJvTW9kaWZpZXIuYnJlYWtDb21ibygpO1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IG5ldyBVcGRhdGVTY29yZUVmZmVjdCh7XG4gICAgICAgIGFkZFNjb3JlOiAwLFxuICAgICAgICB0YXJnZXRTY29yZTogZS5nZXRTY29yZSgpLFxuICAgICAgICBpc1Nob3dDb21ibzogdGhpcy5nYW1lQ29udGV4dC5jb21ib0NoZWNrZXIuY2FuU2hvd0NvbWJvKClcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=