"use strict";
cc._RF.push(module, '3d5caGKAShGVoEdSgO+7qtX', 'DailyChallengeTracker');
// Scripts/core/simulator/tracker/DailyChallengeTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeTracker = void 0;
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameTracker_1 = require("../../../tracker/GameTracker");
var DailyChallengeTracker = /** @class */ (function (_super) {
    __extends(DailyChallengeTracker, _super);
    function DailyChallengeTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeTracker = __decorate([
        mj.class("DailyChallengeTracker")
    ], DailyChallengeTracker);
    return DailyChallengeTracker;
}(GameTracker_1.GameTracker));
exports.DailyChallengeTracker = DailyChallengeTracker;

cc._RF.pop();