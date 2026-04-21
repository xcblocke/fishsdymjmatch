"use strict";
cc._RF.push(module, 'fc7f1bOmkROE5a7Z+c4dWIB', 'Tile2RestartBehavior');
// Scripts/base/Tile2RestartBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RestartBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RestartBehavior = /** @class */ (function (_super) {
    __extends(Tile2RestartBehavior, _super);
    function Tile2RestartBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RestartBehavior.prototype.start = function () {
        var e, t;
        null === (e = this.context.gameView) || void 0 === e || e.clearAllNode();
        null === (t = this.context.gameCtr) || void 0 === t || t.startNextLevel(true);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2RestartBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RestartBehavior = Tile2RestartBehavior;

cc._RF.pop();