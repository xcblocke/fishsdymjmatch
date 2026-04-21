"use strict";
cc._RF.push(module, '870723EZ8FIX5iSsGZsKwXW', 'InputTile2TouchStart');
// Scripts/input/InputTile2TouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputTile2BaseTouchStart_1 = require("../inputbase/InputTile2BaseTouchStart");
var Tile2TouchStartEffect_1 = require("../Tile2TouchStartEffect");
var InputTile2TouchStart = /** @class */ (function (_super) {
    __extends(InputTile2TouchStart, _super);
    function InputTile2TouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchStart.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
        this.pushEffect(new Tile2TouchStartEffect_1.Tile2TouchStartEffect({}));
    };
    __decorate([
        mj.traitEvent("Tile2IptTchSt_exec")
    ], InputTile2TouchStart.prototype, "excute", null);
    return InputTile2TouchStart;
}(InputTile2BaseTouchStart_1.default));
exports.default = InputTile2TouchStart;

cc._RF.pop();