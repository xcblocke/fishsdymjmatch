"use strict";
cc._RF.push(module, '818f7tVl9BIhJJH4EV3aAjU', 'UpdateCollectTargetBehavior');
// Scripts/base/UpdateCollectTargetBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollectTargetBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateCollectTargetBehavior = /** @class */ (function (_super) {
    __extends(UpdateCollectTargetBehavior, _super);
    function UpdateCollectTargetBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 3000;
        return _this;
    }
    UpdateCollectTargetBehavior.prototype.start = function (e) {
        var t, o;
        try {
            var n = e.data.collectDetails;
            if (!n || 0 === n.length) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            try {
                for (var i = __values(n), l = i.next(); !l.done; l = i.next()) {
                    var s = l.value;
                    this.updateSingleTarget(s);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        catch (e) {
            this.fail("更新收集目标失败");
        }
    };
    UpdateCollectTargetBehavior.prototype.updateSingleTarget = function (e) {
        var t = e.type === TileTypeEnum_1.ETileType.RollCard ? "" + e.type : e.type + "_" + e.cardId, o = this.context.getCollectTargetItem(t);
        if (o) {
            o.updateData(e);
            o.playCollectAnimation();
        }
    };
    return UpdateCollectTargetBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateCollectTargetBehavior = UpdateCollectTargetBehavior;

cc._RF.pop();