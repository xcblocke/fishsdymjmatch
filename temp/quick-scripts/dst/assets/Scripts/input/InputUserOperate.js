
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputUserOperate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9baddJlMD1IHp1i4usMdyYq', 'InputUserOperate');
// Scripts/input/InputUserOperate.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputUserOperate = /** @class */ (function (_super) {
    __extends(InputUserOperate, _super);
    function InputUserOperate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputUserOperate.prototype.excute = function () {
        this.gameContext.getGameData().updateLastOpTime();
    };
    return InputUserOperate;
}(InputBase_1.InputBase));
exports.default = InputUserOperate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VXNlck9wZXJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRDtJQUE4QyxvQ0FBUztJQUF2RDs7SUFJQSxDQUFDO0lBSEMsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKNkMscUJBQVMsR0FJdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VXNlck9wZXJhdGUgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoKSB7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnVwZGF0ZUxhc3RPcFRpbWUoKTtcbiAgfVxufSJdfQ==