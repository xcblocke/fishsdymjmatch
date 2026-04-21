"use strict";
cc._RF.push(module, '0acc1E1jW1AKLwaO8nmC2Ri', 'Tile2NormalBackBehavior');
// Scripts/base/Tile2NormalBackBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NormalBackBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NormalBackBehavior = /** @class */ (function (_super) {
    __extends(Tile2NormalBackBehavior, _super);
    function Tile2NormalBackBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalBackBehavior.prototype.start = function (e) {
        var t, o, n = this.context.getTileNodeMap();
        if (e.data.normalBackList && 0 != e.data.normalBackList.length) {
            try {
                for (var i = __values(e.data.normalBackList), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value, c = n.get(s.tileId);
                    c && c.tile2RollCard();
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NormalBackBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NormalBackBehavior = Tile2NormalBackBehavior;

cc._RF.pop();