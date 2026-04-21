"use strict";
cc._RF.push(module, 'e1532IXHNZPY7L9k+pSEoRt', 'Tile2FailBehavior');
// Scripts/base/Tile2FailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FailBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2FailBehavior = /** @class */ (function (_super) {
    __extends(Tile2FailBehavior, _super);
    function Tile2FailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FailBehavior.prototype.start = function (e) {
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        this.pushFailView(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2FailBehavior.prototype.pushFailView = function (e) {
        var t, o, n, i;
        ControllerManager_1.default.getInstance().pushViewByController("Tile2FailController", {
            tiles: null === (t = e.data) || void 0 === t ? void 0 : t.tiles,
            reviveNum: null === (o = e.data) || void 0 === o ? void 0 : o.reviveNum,
            tilePreviewLayout: null === (n = e.data) || void 0 === n ? void 0 : n.tilePreviewLayout,
            adReviveAllowed: null === (i = e.data) || void 0 === i ? void 0 : i.adReviveAllowed
        });
    };
    __decorate([
        mj.traitEvent("Tile2FailBhv_start")
    ], Tile2FailBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("Tile2FailBhv_pushView")
    ], Tile2FailBehavior.prototype, "pushFailView", null);
    return Tile2FailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2FailBehavior = Tile2FailBehavior;

cc._RF.pop();