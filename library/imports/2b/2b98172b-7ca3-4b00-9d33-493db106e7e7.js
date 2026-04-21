"use strict";
cc._RF.push(module, '2b981crfKNLAJ0zST2xBufn', 'InputInitCollectCard');
// Scripts/input/InputInitCollectCard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInitCollectCard = void 0;
var InputBase_1 = require("../inputbase/InputBase");
var InputInitCollectCard = /** @class */ (function (_super) {
    __extends(InputInitCollectCard, _super);
    function InputInitCollectCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitCollectCard.prototype.excute = function () {
        var e = this.gameContext.getTileMapObject().initCollectSystem();
        if (e) {
            var t = this.gameContext.getGameData().getTileTypes(), o = this.changeTileTypes(t);
            e.setCollectTargetTypes(o);
            var n = this.gameContext.getGameData().getCollectData();
            e.recordCollectTargetIds(n);
        }
    };
    InputInitCollectCard.prototype.changeTileTypes = function (e) {
        return e;
    };
    __decorate([
        mj.traitEvent("IptInCollectCd_cTileTypes")
    ], InputInitCollectCard.prototype, "changeTileTypes", null);
    return InputInitCollectCard;
}(InputBase_1.InputBase));
exports.InputInitCollectCard = InputInitCollectCard;

cc._RF.pop();