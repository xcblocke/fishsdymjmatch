"use strict";
cc._RF.push(module, '09036obkkNI9Zyp9MEKFA3x', 'NormalTracker');
// Scripts/tracker/NormalTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalTracker = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameTracker_1 = require("./GameTracker");
var NormalTracker = /** @class */ (function (_super) {
    __extends(NormalTracker, _super);
    function NormalTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        return _this;
    }
    NormalTracker = __decorate([
        mj.class("NormalTracker")
    ], NormalTracker);
    return NormalTracker;
}(GameTracker_1.GameTracker));
exports.NormalTracker = NormalTracker;

cc._RF.pop();