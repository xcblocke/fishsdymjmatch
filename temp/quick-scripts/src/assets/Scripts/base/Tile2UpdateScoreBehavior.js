"use strict";
cc._RF.push(module, '29eba/9fmNAxKYgija41SAW', 'Tile2UpdateScoreBehavior');
// Scripts/base/Tile2UpdateScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateScoreBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateScoreBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateScoreBehavior, _super);
    function Tile2UpdateScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateScoreBehavior.prototype.start = function (e) {
        var t, o = e.data, n = o.isShowCombo, i = o.addScore, a = o.targetScore, l = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem;
        l && l.updateScore(i, a, n);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateScoreBehavior = Tile2UpdateScoreBehavior;

cc._RF.pop();