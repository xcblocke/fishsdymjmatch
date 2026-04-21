
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/game/GameStateListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZ2FtZS9HYW1lU3RhdGVMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVNBLENBQUM7SUFQUSwyQkFBUyxHQUFoQixjQUFvQixDQUFDO0lBRWQsOEJBQVksR0FBbkIsY0FBdUIsQ0FBQztJQUVqQixnQ0FBYyxHQUFyQixjQUF5QixDQUFDO0lBRW5CLDJCQUFTLEdBQWhCLGNBQW9CLENBQUM7SUFOckI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzRDQUNqQjtJQUVyQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7K0NBQ2pCO0lBRXhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztpREFDakI7SUFFMUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzRDQUNqQjtJQUN2Qix3QkFBQztDQVRELEFBU0MsSUFBQTtrQkFUb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlTGlzdGVuZXIge1xuICBAbWoudHJhaXRFdmVudChcIkdzTGlzdGVuZXJfb25OZXdHYW1lXCIpXG4gIHN0YXRpYyBvbk5ld0dhbWUoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lXCIpXG4gIHN0YXRpYyBvblJlcGxheUdhbWUoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkdzTGlzdGVuZXJfb25TdXJ2aXZhbEdhbWVcIilcbiAgc3RhdGljIG9uU3Vydml2YWxHYW1lKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJHc0xpc3RlbmVyX29uR2FtZUVuZFwiKVxuICBzdGF0aWMgb25HYW1lRW5kKCkge31cbn0iXX0=