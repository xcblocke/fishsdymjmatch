
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2RestartBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc7f1bOmkROE5a7Z+c4dWIB', 'Tile2RestartBehavior');
// Scripts/base/Tile2RestartBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RestartBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RestartBehavior = /** @class */ (function (_super) {
    __extends(Tile2RestartBehavior, _super);
    function Tile2RestartBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RestartBehavior.prototype.start = function () {
        var e, t;
        null === (e = this.context.gameView) || void 0 === e || e.clearAllNode();
        null === (t = this.context.gameCtr) || void 0 === t || t.startNextLevel(true);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2RestartBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RestartBehavior = Tile2RestartBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZXN0YXJ0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUFPQSxDQUFDO0lBTkMsb0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCwyQkFBQztBQUFELENBUEEsQUFPQyxDQVB5QyxxQ0FBaUIsR0FPMUQ7QUFQWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMlJlc3RhcnRCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNsZWFyQWxsTm9kZSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnN0YXJ0TmV4dExldmVsKHRydWUpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=