"use strict";
cc._RF.push(module, 'f35adRJzvpM45Z4+eeJDzWX', 'AllClearModifier');
// Scripts/process/allClear/AllClearModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var AllClearModifier = /** @class */ (function (_super) {
    __extends(AllClearModifier, _super);
    function AllClearModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllClearModifier.prototype.changeAllClear = function (e, t) {
        var o = this.context.getGameData();
        o && o.setHasTriggeredAllClear(true);
        var n = this.context.getTileMapObject();
        1 != e && n && (null == t || t.forEach(function (e) {
            n.clearTile(e, CollectInterfact_1.ECollectFrom.FromAllClear);
            null == o || o.addAutoCollectTilesNum(1);
        }));
    };
    return AllClearModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.AllClearModifier = AllClearModifier;

cc._RF.pop();