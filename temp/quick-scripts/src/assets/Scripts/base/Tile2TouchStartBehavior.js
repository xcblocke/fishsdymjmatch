"use strict";
cc._RF.push(module, '19682BVNZ9MXrURsTt8JVEn', 'Tile2TouchStartBehavior');
// Scripts/base/Tile2TouchStartBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2TouchStartBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2TouchStartBehavior = /** @class */ (function (_super) {
    __extends(Tile2TouchStartBehavior, _super);
    function Tile2TouchStartBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2TouchStartBehavior.prototype.start = function () {
        this.removeFlipHand();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2TouchStartBehavior.prototype.removeFlipHand = function () {
        var e, t, o, n = null === (o = null === (t = null === (e = this._context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.getChildByName("HitTipsFlipHand");
        cc.isValid(n) && n.destroy();
    };
    return Tile2TouchStartBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2TouchStartBehavior = Tile2TouchStartBehavior;

cc._RF.pop();