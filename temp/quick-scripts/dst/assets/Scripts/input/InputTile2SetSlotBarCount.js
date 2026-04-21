
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2SetSlotBarCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9e03Z6lmhG7aFGiLZKmnA5', 'InputTile2SetSlotBarCount');
// Scripts/input/InputTile2SetSlotBarCount.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2SetSlotBarCount = /** @class */ (function (_super) {
    __extends(InputTile2SetSlotBarCount, _super);
    function InputTile2SetSlotBarCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetSlotBarCount.prototype.excute = function (e) {
        var t = e.slotBarCount || 4;
        this.gameContext.tile2SlotBarModifier.initSlotBar(t);
    };
    return InputTile2SetSlotBarCount;
}(InputBase_1.InputBase));
exports.default = InputTile2SetSlotBarCount;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJTZXRTbG90QmFyQ291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRDtJQUF1RCw2Q0FBUztJQUFoRTs7SUFLQSxDQUFDO0lBSkMsMENBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMc0QscUJBQVMsR0FLL0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJTZXRTbG90QmFyQ291bnQgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHZhciB0ID0gZS5zbG90QmFyQ291bnQgfHwgNDtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmluaXRTbG90QmFyKHQpO1xuICB9XG59Il19