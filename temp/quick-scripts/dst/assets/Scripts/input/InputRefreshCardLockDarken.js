
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputRefreshCardLockDarken.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe12eEI4RFwa70DbXmklCc', 'InputRefreshCardLockDarken');
// Scripts/input/InputRefreshCardLockDarken.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var CardLockDarkenEffect_1 = require("../CardLockDarkenEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRefreshCardLockDarken = /** @class */ (function (_super) {
    __extends(InputRefreshCardLockDarken, _super);
    function InputRefreshCardLockDarken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRefreshCardLockDarken.prototype.excute = function (e) {
        var t = void 0 === e.isShowAni || e.isShowAni;
        this.pushRefreshCardLockDarkenEffect(t);
    };
    InputRefreshCardLockDarken.prototype.pushRefreshCardLockDarkenEffect = function (e) {
        var t = new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isShowAni: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputRefreshCardLockDarken;
}(InputBase_1.InputBase));
exports.default = InputRefreshCardLockDarken;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0UmVmcmVzaENhcmRMb2NrRGFya2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsZ0VBQStEO0FBQy9ELG9EQUFtRDtBQUNuRDtJQUF3RCw4Q0FBUztJQUFqRTs7SUFXQSxDQUFDO0lBVkMsMkNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvRUFBK0IsR0FBL0IsVUFBZ0MsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYdUQscUJBQVMsR0FXaEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgQ2FyZExvY2tEYXJrZW5FZmZlY3QgfSBmcm9tICcuLi9DYXJkTG9ja0RhcmtlbkVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0UmVmcmVzaENhcmRMb2NrRGFya2VuIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB2YXIgdCA9IHZvaWQgMCA9PT0gZS5pc1Nob3dBbmkgfHwgZS5pc1Nob3dBbmk7XG4gICAgdGhpcy5wdXNoUmVmcmVzaENhcmRMb2NrRGFya2VuRWZmZWN0KHQpO1xuICB9XG4gIHB1c2hSZWZyZXNoQ2FyZExvY2tEYXJrZW5FZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IENhcmRMb2NrRGFya2VuRWZmZWN0KHtcbiAgICAgIGlzU2hvd0FuaTogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=