
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputTile2BaseTouchCancel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d64anFlypB6ZXrLmbHIyrB', 'InputTile2BaseTouchCancel');
// Scripts/inputbase/InputTile2BaseTouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchCancel = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchCancel, _super);
    function InputTile2BaseTouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchCancel.prototype.excute = function () {
        if (!this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.tileId) {
                this.gameContext.getTileMapObject().deleteLastActionId();
                this.gameContext.tile2TouchData.isMoving && this.runResetMove();
                this.gameContext.tile2TouchData.clear();
            }
            else
                this.gameContext.tile2TouchData.clear();
    };
    InputTile2BaseTouchCancel.prototype.runResetMove = function () { };
    return InputTile2BaseTouchCancel;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchCancel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dFRpbGUyQmFzZVRvdWNoQ2FuY2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEM7SUFBdUQsNkNBQVM7SUFBaEU7O0lBU0EsQ0FBQztJQVJDLDBDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDbEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3pDOztnQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsZ0RBQVksR0FBWixjQUFnQixDQUFDO0lBQ25CLGdDQUFDO0FBQUQsQ0FUQSxBQVNDLENBVHNELHFCQUFTLEdBUy9EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMkJhc2VUb3VjaENhbmNlbCBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZUNvbnRleHQudGlsZTJSZXN1bHRDaGVja2VyLmNoZWNrSXNEZWFkKCkpIGlmICh0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZCkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZGVsZXRlTGFzdEFjdGlvbklkKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmlzTW92aW5nICYmIHRoaXMucnVuUmVzZXRNb3ZlKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgfSBlbHNlIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuY2xlYXIoKTtcbiAgfVxuICBydW5SZXNldE1vdmUoKSB7fVxufSJdfQ==