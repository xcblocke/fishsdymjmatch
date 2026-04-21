"use strict";
cc._RF.push(module, '4623cVhewBCOqwxhyk4eTQZ', 'DGameLog');
// Scripts/gamePlay/dot/DGameLog.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameLog = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameLog = /** @class */ (function () {
    function DotGameLog() {
    }
    DotGameLog.dot = function (e) {
        if (!e.isVideo) {
            var t = e.getGameTracker();
            if (t) {
                var o = {
                    log_info: JSON.stringify(t.cmds),
                    puzzle: e.getGameData().getOriginalLevelData(),
                    level: e.getGameData().getCurrentLevelId(),
                    game_mode_name: DotUtil_1.DotUtil.getGameModeName(e.getGameData().gameType),
                    game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(e.getGameData().gameType),
                    game_mode: DotUtil_1.DotUtil.getGameId(e.getGameData().gameType),
                    mode_num: e.getGameData().getGameCount(),
                    index: 1
                };
                EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameLog, o);
            }
        }
    };
    __decorate([
        mj.traitEvent("DGameLog_dot")
    ], DotGameLog, "dot", null);
    return DotGameLog;
}());
exports.DotGameLog = DotGameLog;

cc._RF.pop();