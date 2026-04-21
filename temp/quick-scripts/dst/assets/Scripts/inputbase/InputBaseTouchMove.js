
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputBaseTouchMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c05a5YPhINLopqxXXGm7KpC', 'InputBaseTouchMove');
// Scripts/inputbase/InputBaseTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchMove = /** @class */ (function (_super) {
    __extends(InputBaseTouchMove, _super);
    function InputBaseTouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchMove.prototype.excute = function (e) {
        var t = this;
        if (this.gameContext.touchData.isValid && !this.gameContext.touchData.isLock && !this.gameContext.touchData.isClear) {
            var o = false;
            if (!this.gameContext.touchData.isMoving) {
                o = true;
                this.runStartMove(e);
            }
            this.gameContext.touchModifier.modifyTouchMove(e.pos);
            var n = this.gameContext.getTileMapObject().getActionIds();
            if (0 !== n.length) {
                if (o) {
                    var i = n[n.length - 1];
                    this.gameContext.getTileMapObject().unselectAllTileIds(i).forEach(function (e) {
                        t.pushSelectEffect(e, true);
                    });
                    this.pushSelectEffect(i, false);
                    this.gameContext.getTileMapObject().pushActionId(i);
                    this.gameContext.getTileMapObject().selcectTileId(i, true);
                }
                var r = n[n.length - 1];
                this.pushMoveEffect(r, e.pos, e.delta, o);
            }
        }
    };
    InputBaseTouchMove.prototype.runStartMove = function () { };
    return InputBaseTouchMove;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2VUb3VjaE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4QztJQUFnRCxzQ0FBUztJQUF6RDs7SUEyQkEsQ0FBQztJQTFCQyxtQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25ILElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDM0UsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzVEO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDRjtJQUNILENBQUM7SUFDRCx5Q0FBWSxHQUFaLGNBQWdCLENBQUM7SUFDbkIseUJBQUM7QUFBRCxDQTNCQSxBQTJCQyxDQTNCK0MscUJBQVMsR0EyQnhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRCYXNlVG91Y2hNb3ZlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQudG91Y2hEYXRhLmlzVmFsaWQgJiYgIXRoaXMuZ2FtZUNvbnRleHQudG91Y2hEYXRhLmlzTG9jayAmJiAhdGhpcy5nYW1lQ29udGV4dC50b3VjaERhdGEuaXNDbGVhcikge1xuICAgICAgdmFyIG8gPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5nYW1lQ29udGV4dC50b3VjaERhdGEuaXNNb3ZpbmcpIHtcbiAgICAgICAgbyA9IHRydWU7XG4gICAgICAgIHRoaXMucnVuU3RhcnRNb3ZlKGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lQ29udGV4dC50b3VjaE1vZGlmaWVyLm1vZGlmeVRvdWNoTW92ZShlLnBvcyk7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldEFjdGlvbklkcygpO1xuICAgICAgaWYgKDAgIT09IG4ubGVuZ3RoKSB7XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgdmFyIGkgPSBuW24ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKGkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHQucHVzaFNlbGVjdEVmZmVjdChlLCB0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnB1c2hTZWxlY3RFZmZlY3QoaSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnB1c2hBY3Rpb25JZChpKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKGksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gbltuLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLnB1c2hNb3ZlRWZmZWN0KHIsIGUucG9zLCBlLmRlbHRhLCBvKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcnVuU3RhcnRNb3ZlKCkge31cbn0iXX0=