
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputBaseTouchCancel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2795aTVunJFlKPZxft2mSMF', 'InputBaseTouchCancel');
// Scripts/inputbase/InputBaseTouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchCancel = /** @class */ (function (_super) {
    __extends(InputBaseTouchCancel, _super);
    function InputBaseTouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchCancel.prototype.excute = function () {
        if (this.gameContext.touchData.isValid) {
            var e = this.gameContext.getTileMapObject().deleteLastActionId();
            this.gameContext.touchModifier.modifyTouchCancel();
            this.pushTouchCancelEffect(e);
        }
    };
    return InputBaseTouchCancel;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchCancel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2VUb3VjaENhbmNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDO0lBQWtELHdDQUFTO0lBQTNEOztJQVFBLENBQUM7SUFQQyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSaUQscUJBQVMsR0FRMUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEJhc2VUb3VjaENhbmNlbCBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZSgpIHtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC50b3VjaERhdGEuaXNWYWxpZCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5kZWxldGVMYXN0QWN0aW9uSWQoKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudG91Y2hNb2RpZmllci5tb2RpZnlUb3VjaENhbmNlbCgpO1xuICAgICAgdGhpcy5wdXNoVG91Y2hDYW5jZWxFZmZlY3QoZSk7XG4gICAgfVxuICB9XG59Il19