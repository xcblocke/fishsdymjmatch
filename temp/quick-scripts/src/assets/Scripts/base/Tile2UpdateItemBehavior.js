"use strict";
cc._RF.push(module, '6b562ywgbBF6LR7JHRVsnW7', 'Tile2UpdateItemBehavior');
// Scripts/base/Tile2UpdateItemBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateItemBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateItemBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateItemBehavior, _super);
    function Tile2UpdateItemBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateItemBehavior.prototype.start = function (e) {
        var t, o = e.data.curNum, n = this.context.gameView;
        null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateShuffleNum(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateItemBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateItemBehavior = Tile2UpdateItemBehavior;

cc._RF.pop();