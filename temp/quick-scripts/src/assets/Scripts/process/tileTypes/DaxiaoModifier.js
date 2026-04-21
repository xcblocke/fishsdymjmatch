"use strict";
cc._RF.push(module, '7a3cb5gAgRLnZMiVaSqqUm0', 'DaxiaoModifier');
// Scripts/process/tileTypes/DaxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var DaxiaoModifier = /** @class */ (function (_super) {
    __extends(DaxiaoModifier, _super);
    function DaxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoModifier.prototype.modifyDaxiaoCard = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                this._context.getTileMapObject().selcectTileId(s.tileId1, true);
                this._context.getTileMapObject().selcectTileId(s.tileId2, true);
                this._context.clearModifier.modifyClear(e, GameTypeEnums_1.EMergeType.Daxiao);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    return DaxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DaxiaoModifier;

cc._RF.pop();