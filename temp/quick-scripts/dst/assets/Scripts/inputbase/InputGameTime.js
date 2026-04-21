
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputGameTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9e11GkSyJIKYslFAgZmGJ3', 'InputGameTime');
// Scripts/inputbase/InputGameTime.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputGameTime = /** @class */ (function (_super) {
    __extends(InputGameTime, _super);
    function InputGameTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreLog = true;
        return _this;
    }
    InputGameTime.prototype.excute = function (e) {
        this.gameController.gameTimeData.time = e.time;
    };
    __decorate([
        mj.traitEvent("IptGameTime_exec")
    ], InputGameTime.prototype, "excute", null);
    return InputGameTime;
}(InputBase_1.InputBase));
exports.default = InputGameTime;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEdhbWVUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEM7SUFBMkMsaUNBQVM7SUFBcEQ7UUFBQSxxRUFNQztRQUxDLGdCQUFVLEdBQUcsSUFBSSxDQUFDOztJQUtwQixDQUFDO0lBSEMsOEJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRCxDQUFDO0lBRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOytDQUdqQztJQUNILG9CQUFDO0NBTkQsQUFNQyxDQU4wQyxxQkFBUyxHQU1uRDtrQkFOb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4vSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0R2FtZVRpbWUgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBfaWdub3JlTG9nID0gdHJ1ZTtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRHYW1lVGltZV9leGVjXCIpXG4gIGV4Y3V0ZShlKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lVGltZURhdGEudGltZSA9IGUudGltZTtcbiAgfVxufSJdfQ==