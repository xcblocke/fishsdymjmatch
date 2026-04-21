"use strict";
cc._RF.push(module, '3327fTyuH5Fk6MgKpNJrzcn', 'DailyChallengeView');
// Scripts/view/DailyChallengeView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var DailyChallengeView = /** @class */ (function (_super) {
    __extends(DailyChallengeView, _super);
    function DailyChallengeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "DailyChallengeView";
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeView.prefabUrl = "prefabs/game/MainGameDailyChallenge";
    DailyChallengeView = __decorate([
        mj.class
    ], DailyChallengeView);
    return DailyChallengeView;
}(MainGameView_1.default));
exports.default = DailyChallengeView;

cc._RF.pop();