"use strict";
cc._RF.push(module, 'f1aadIVj3xBv65hTDreWbp6', 'GameStateListener');
// Scripts/process/game/GameStateListener.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameStateListener = /** @class */ (function () {
    function GameStateListener() {
    }
    GameStateListener.onNewGame = function () { };
    GameStateListener.onReplayGame = function () { };
    GameStateListener.onSurvivalGame = function () { };
    GameStateListener.onGameEnd = function () { };
    __decorate([
        mj.traitEvent("GsListener_onNewGame")
    ], GameStateListener, "onNewGame", null);
    __decorate([
        mj.traitEvent("GsListener_onReplayGame")
    ], GameStateListener, "onReplayGame", null);
    __decorate([
        mj.traitEvent("GsListener_onSurvivalGame")
    ], GameStateListener, "onSurvivalGame", null);
    __decorate([
        mj.traitEvent("GsListener_onGameEnd")
    ], GameStateListener, "onGameEnd", null);
    return GameStateListener;
}());
exports.default = GameStateListener;

cc._RF.pop();