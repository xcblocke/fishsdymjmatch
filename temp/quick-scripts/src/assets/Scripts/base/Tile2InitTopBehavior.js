"use strict";
cc._RF.push(module, '97850PU+z9EErDiVT2WkL6j', 'Tile2InitTopBehavior');
// Scripts/base/Tile2InitTopBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitTopBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NodeTopView_1 = require("../gamePlay/tile2game/view/Tile2NodeTopView");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2InitTopBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitTopBehavior, _super);
    function Tile2InitTopBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitTopBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.level, i = o.matchNum, l = o.score, s = o.isCombo, c = this.context.gameView, u = null == c ? void 0 : c.nodeTopView;
        if (u) {
            u.updateLevel(n);
            u.updateMatchNum(i);
            u.updateScore(0, l, s);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            Tile2NodeTopView_1.default.createUI("prefabs/game/Tile2nodeTop").then(function (e) {
                var o = c.getTopNode();
                if (cc.isValid(o)) {
                    e.parent = o;
                    var u = e.getComponent(Tile2NodeTopView_1.default);
                    c.setNodeTopView(u);
                    u.updateLevel(n);
                    u.updateMatchNum(i);
                    u.updateScore(0, l, s);
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    u.delegate = t.context.gameCtr;
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
    };
    return Tile2InitTopBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitTopBehavior = Tile2InitTopBehavior;

cc._RF.pop();