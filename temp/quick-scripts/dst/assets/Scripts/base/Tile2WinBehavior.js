
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2WinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecdf4Whoz1JKL4e5XQ8Nvjy', 'Tile2WinBehavior');
// Scripts/base/Tile2WinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2WinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2WinBehavior = /** @class */ (function (_super) {
    __extends(Tile2WinBehavior, _super);
    function Tile2WinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2WinBehavior.prototype.start = function (e) {
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        this.pushWinView(e);
        this.finish();
    };
    Tile2WinBehavior.prototype.pushWinView = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("Tile2WinController", {
            data: e.data,
            isShowAction: false
        }, null);
    };
    __decorate([
        mj.traitEvent("Tile2WinBhv_start")
    ], Tile2WinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("Tile2WinBhv_pushView")
    ], Tile2WinBehavior.prototype, "pushWinView", null);
    return Tile2WinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2WinBehavior = Tile2WinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJXaW5CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx5REFBd0Q7QUFDeEQ7SUFBc0Msb0NBQWlCO0lBQXZEOztJQWNBLENBQUM7SUFaQyxnQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUU7WUFDekUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ1osWUFBWSxFQUFFLEtBQUs7U0FDcEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFYRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7aURBS2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3VEQU1yQztJQUNILHVCQUFDO0NBZEQsQUFjQyxDQWRxQyxxQ0FBaUIsR0FjdEQ7QUFkWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMldpbkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luQmh2X3N0YXJ0XCIpXG4gIHN0YXJ0KGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlQWxsUGFuZWxzQW5kQWxlcnRzKCk7XG4gICAgdGhpcy5wdXNoV2luVmlldyhlKTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5CaHZfcHVzaFZpZXdcIilcbiAgcHVzaFdpblZpZXcoZSkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUaWxlMldpbkNvbnRyb2xsZXJcIiwge1xuICAgICAgZGF0YTogZS5kYXRhLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgIH0sIG51bGwpO1xuICB9XG59Il19