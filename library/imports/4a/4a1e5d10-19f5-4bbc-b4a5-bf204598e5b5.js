"use strict";
cc._RF.push(module, '4a1e50QGfVLvLSlvyBFmOW1', 'Tile2DaxiaoModifier');
// Scripts/process/tile2/Tile2DaxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var Tile2DaxiaoModifier = /** @class */ (function (_super) {
    __extends(Tile2DaxiaoModifier, _super);
    function Tile2DaxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DaxiaoModifier.prototype.modifyDaxiaoCard = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
                var s = a.value, c = [s.tileId1, s.tileId2];
                this._context.tile2SlotBarModifier.clear([c], CollectInterfact_1.ECollectFrom.FromDaxiao);
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
    return Tile2DaxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2DaxiaoModifier;

cc._RF.pop();