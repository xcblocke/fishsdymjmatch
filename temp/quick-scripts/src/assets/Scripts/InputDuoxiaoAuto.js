"use strict";
cc._RF.push(module, '488757ZJs5Pk4y1qj/P2g6a', 'InputDuoxiaoAuto');
// Scripts/InputDuoxiaoAuto.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputDuoxiaoAuto = /** @class */ (function (_super) {
    __extends(InputDuoxiaoAuto, _super);
    function InputDuoxiaoAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputDuoxiaoAuto.prototype.excute = function (e) {
        if (!(this.gameContext.getDuoxiaoClearCount() <= 0)) {
            var t = this.gameContext.getTileMapObject(), o = t.getCanMatchTilesHint();
            if (0 == o.length) {
                t.updateCanMatchTiles();
                o = t.getCanMatchTilesHint();
            }
            if (o.length) {
                this.gameContext.duoxiaoModifier.decreaseDuoxiaoClearCount();
                var n = __read(this.findMatchTile(o), 2), i = n[0], r = n[1];
                if (i && r) {
                    t.selcectTileId(i, true);
                    t.selcectTileId(r, true);
                    this.gameContext.clearChecker.checkCanClear2() && ClearHelper_1.default.runClear(this.gameContext, e, this);
                }
            }
            else
                this.gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
        }
    };
    InputDuoxiaoAuto.prototype.findMatchTile = function (e) {
        var t, o, n = e[0];
        return [null === (t = n[0]) || void 0 === t ? void 0 : t.id, null === (o = n[1]) || void 0 === o ? void 0 : o.id];
    };
    __decorate([
        mj.traitEvent("IptDuoxiaoAuto_findMatch")
    ], InputDuoxiaoAuto.prototype, "findMatchTile", null);
    return InputDuoxiaoAuto;
}(InputBase_1.InputBase));
exports.default = InputDuoxiaoAuto;

cc._RF.pop();