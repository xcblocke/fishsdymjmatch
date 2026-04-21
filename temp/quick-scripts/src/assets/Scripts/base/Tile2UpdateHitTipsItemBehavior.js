"use strict";
cc._RF.push(module, '8efc7F4ryhJf6p1cIuqBjS9', 'Tile2UpdateHitTipsItemBehavior');
// Scripts/base/Tile2UpdateHitTipsItemBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateHitTipsItemBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateHitTipsItemBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateHitTipsItemBehavior, _super);
    function Tile2UpdateHitTipsItemBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateHitTipsItemBehavior.prototype.start = function (e) {
        var t, o = e.data.curNum, n = this.context.gameView;
        null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateHitTipsNum(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateHitTipsItemBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateHitTipsItemBehavior = Tile2UpdateHitTipsItemBehavior;

cc._RF.pop();