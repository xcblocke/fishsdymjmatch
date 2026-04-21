"use strict";
cc._RF.push(module, '17279ytnblGfqcIZvFZo+KD', 'InputAutoMerge');
// Scripts/InputAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputAutoMerge = /** @class */ (function (_super) {
    __extends(InputAutoMerge, _super);
    function InputAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
        this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
        if (this.gameContext.clearChecker.checkCanClear2()) {
            ClearHelper_1.default.runClear(this.gameContext, e, this);
        }
        else {
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
    };
    return InputAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputAutoMerge;

cc._RF.pop();