"use strict";
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