
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputCleanView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b350dPrYkRFVboAszGZPIQK', 'InputCleanView');
// Scripts/input/InputCleanView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCleanView = void 0;
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var CleanViewEffect_1 = require("../CleanViewEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputCleanView = /** @class */ (function (_super) {
    __extends(InputCleanView, _super);
    function InputCleanView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputCleanView.prototype.excute = function () {
        var e = new CleanViewEffect_1.CleanViewEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputCleanView;
}(InputBase_1.InputBase));
exports.InputCleanView = InputCleanView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0Q2xlYW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELHNEQUFxRDtBQUNyRCxvREFBbUQ7QUFDbkQ7SUFBb0Msa0NBQVM7SUFBN0M7O0lBS0EsQ0FBQztJQUpDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMbUMscUJBQVMsR0FLNUM7QUFMWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBDbGVhblZpZXdFZmZlY3QgfSBmcm9tICcuLi9DbGVhblZpZXdFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgY2xhc3MgSW5wdXRDbGVhblZpZXcgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoKSB7XG4gICAgdmFyIGUgPSBuZXcgQ2xlYW5WaWV3RWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbn0iXX0=