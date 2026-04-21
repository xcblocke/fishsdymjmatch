
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputInitEndStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e81fc1NbixJLKDQGNIWIlyQ', 'InputInitEndStrategy');
// Scripts/input/InputInitEndStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInitEndStrategy = void 0;
var InputBase_1 = require("../inputbase/InputBase");
var InputInitEndStrategy = /** @class */ (function (_super) {
    __extends(InputInitEndStrategy, _super);
    function InputInitEndStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitEndStrategy.prototype.excute = function (e) {
        var t = e.endStrategy;
        this.gameContext.endStrategy.initEndStrategy(t);
    };
    return InputInitEndStrategy;
}(InputBase_1.InputBase));
exports.InputInitEndStrategy = InputInitEndStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0SW5pdEVuZFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQTBDLHdDQUFTO0lBQW5EOztJQUtBLENBQUM7SUFKQyxxQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDSCwyQkFBQztBQUFELENBTEEsQUFLQyxDQUx5QyxxQkFBUyxHQUtsRDtBQUxZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGNsYXNzIElucHV0SW5pdEVuZFN0cmF0ZWd5IGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB2YXIgdCA9IGUuZW5kU3RyYXRlZ3k7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5lbmRTdHJhdGVneS5pbml0RW5kU3RyYXRlZ3kodCk7XG4gIH1cbn0iXX0=