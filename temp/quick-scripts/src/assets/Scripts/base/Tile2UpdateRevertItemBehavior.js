"use strict";
cc._RF.push(module, '4509d8OiGVCi7IsmA5Uvu8+', 'Tile2UpdateRevertItemBehavior');
// Scripts/base/Tile2UpdateRevertItemBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateRevertItemBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateRevertItemBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateRevertItemBehavior, _super);
    function Tile2UpdateRevertItemBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateRevertItemBehavior.prototype.start = function (e) {
        var t, o = e.data.curNum, n = this.context.gameView;
        null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateRevertNum(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateRevertItemBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateRevertItemBehavior = Tile2UpdateRevertItemBehavior;

cc._RF.pop();