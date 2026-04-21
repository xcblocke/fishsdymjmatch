"use strict";
cc._RF.push(module, '3bde0PnseNKc7DfJEoOmBx/', 'TravelTracker');
// Scripts/tracker/TravelTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelTracker = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameTracker_1 = require("./GameTracker");
var TravelTracker = /** @class */ (function (_super) {
    __extends(TravelTracker, _super);
    function TravelTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    TravelTracker = __decorate([
        mj.class("TravelTracker")
    ], TravelTracker);
    return TravelTracker;
}(GameTracker_1.GameTracker));
exports.TravelTracker = TravelTracker;

cc._RF.pop();