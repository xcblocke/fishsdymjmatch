"use strict";
cc._RF.push(module, 'f38b0NMr2hDuYMU+EXrDkpW', 'GameInteraction');
// Scripts/GameInteraction/GameInteraction.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInteraction = void 0;
var SimulatorEvent_1 = require("../core/simulator/events/SimulatorEvent");
var GameInteraction = /** @class */ (function () {
    function GameInteraction() {
    }
    GameInteraction.input = function (e) {
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_INPUT, e);
    };
    return GameInteraction;
}());
exports.GameInteraction = GameInteraction;

cc._RF.pop();