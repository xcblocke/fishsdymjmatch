"use strict";
cc._RF.push(module, '10613FtSKJB5ru4URVr08gB', 'Tile2InitBottomBehavior');
// Scripts/base/Tile2InitBottomBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitBottomBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NodeBottomView_1 = require("../gamePlay/tile2game/view/Tile2NodeBottomView");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2InitBottomBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitBottomBehavior, _super);
    function Tile2InitBottomBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitBottomBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.shuffleNum, i = o.hitTipsNum, l = o.revertNum, s = this.context.gameView, c = null == s ? void 0 : s.nodeBottomView, u = function u(e) {
            e.updateShuffleNum(n);
            e.updateHitTipsNum(i);
            e.updateRevertNum(l);
        };
        if (c) {
            u(c);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            Tile2NodeBottomView_1.default.createUI("prefabs/game/Tile2nodeBottom").then(function (e) {
                var o = s.getBottomNode();
                if (cc.isValid(o)) {
                    e.parent = o;
                    var n = e.getComponent(Tile2NodeBottomView_1.default);
                    s.setNodeBottomView(n);
                    u(n);
                    n.delegate = t.context.gameCtr;
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
    };
    return Tile2InitBottomBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitBottomBehavior = Tile2InitBottomBehavior;

cc._RF.pop();