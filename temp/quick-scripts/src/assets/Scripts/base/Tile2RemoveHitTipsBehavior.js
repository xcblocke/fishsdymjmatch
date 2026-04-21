"use strict";
cc._RF.push(module, '89731uoPvdNp63glULUkSaT', 'Tile2RemoveHitTipsBehavior');
// Scripts/base/Tile2RemoveHitTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RemoveHitTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RemoveHitTipsBehavior = /** @class */ (function (_super) {
    __extends(Tile2RemoveHitTipsBehavior, _super);
    function Tile2RemoveHitTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RemoveHitTipsBehavior.prototype.start = function (e) {
        this.removeHitTips(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RemoveHitTipsBehavior.prototype.removeHitTips = function (e) {
        var t, o, n = this.context.getTileNodeMap(), i = e.data, r = i.tileId1, a = i.tileId2;
        r && (null === (t = n.get(r)) || void 0 === t || t.hidePropHint());
        a && (null === (o = n.get(a)) || void 0 === o || o.hidePropHint());
    };
    return Tile2RemoveHitTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RemoveHitTipsBehavior = Tile2RemoveHitTipsBehavior;

cc._RF.pop();