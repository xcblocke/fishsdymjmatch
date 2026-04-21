"use strict";
cc._RF.push(module, '6d32doIMkNO4bzU9vQM/Vah', 'TileChecker');
// Scripts/process/tile/TileChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileChecker = /** @class */ (function (_super) {
    __extends(TileChecker, _super);
    function TileChecker(t) {
        return _super.call(this, t) || this;
    }
    TileChecker.prototype.checkIsLock = function (e) {
        var t = this.context.getTileMapObject(), o = this.context.getTileMapObject().getTileObject(e);
        return !!o && 0 != t.isCardLock(o);
    };
    return TileChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileChecker = TileChecker;

cc._RF.pop();