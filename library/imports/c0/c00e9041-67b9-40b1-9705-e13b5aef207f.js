"use strict";
cc._RF.push(module, 'c00e9BBZ7lAsZcF4Tta7yB/', 'Tile2PerfectChecker');
// Scripts/process/perfect/Tile2PerfectChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2PerfectChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var Tile2PerfectChecker = /** @class */ (function (_super) {
    __extends(Tile2PerfectChecker, _super);
    function Tile2PerfectChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2PerfectChecker.prototype.checkIsPerfect = function (e, t) {
        if (!e || 0 === e.length)
            return false;
        if (!t || 0 === t.length)
            return false;
        var o = this._context.getGameData().slotBarCount;
        this._context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 && (o = Math.max(0, o - 1));
        if (o <= 0)
            return false;
        if (e.length !== o)
            return false;
        var n = e[e.length - 1], i = t[0];
        return i[0] === n || i[1] === n;
    };
    return Tile2PerfectChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2PerfectChecker = Tile2PerfectChecker;

cc._RF.pop();