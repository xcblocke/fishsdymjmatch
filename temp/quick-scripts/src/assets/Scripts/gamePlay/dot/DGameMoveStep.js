"use strict";
cc._RF.push(module, 'd38e6CSllxPiZ7IkU1QR0af', 'DGameMoveStep');
// Scripts/gamePlay/dot/DGameMoveStep.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameMoveStep = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameMoveStep = /** @class */ (function () {
    function DotGameMoveStep() {
    }
    DotGameMoveStep.dot = function (e, t) {
        if (!e.isVideo) {
            var o = Object.assign({
                dt: Number(new Date().format("YYYYmmdd")),
                game_id: e.getGameData().getGameId(),
                game_type: DotUtil_1.DotUtil.getGameId(e.getGameData().gameType)
            }, t);
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameMoveStep, o);
        }
    };
    return DotGameMoveStep;
}());
exports.DotGameMoveStep = DotGameMoveStep;

cc._RF.pop();