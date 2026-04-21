"use strict";
cc._RF.push(module, '392cbeMD9ZFVpCfA6ga/auS', 'GameInputHandler');
// Scripts/simulator/constant/GameInputHandler.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInputHandler = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameInputHandler = /** @class */ (function (_super) {
    __extends(GameInputHandler, _super);
    function GameInputHandler(t) {
        return _super.call(this, t) || this;
    }
    GameInputHandler.prototype.parseInput = function (e) {
        e.inputType;
        return e;
    };
    GameInputHandler.prototype.dispose = function () { };
    return GameInputHandler;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameInputHandler = GameInputHandler;

cc._RF.pop();