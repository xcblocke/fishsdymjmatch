"use strict";
cc._RF.push(module, 'b5b3d7JlQ1Ae62INPhE9YXl', 'InputTipsPropAutoMerge');
// Scripts/InputTipsPropAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTipsPropAutoMerge = /** @class */ (function (_super) {
    __extends(InputTipsPropAutoMerge, _super);
    function InputTipsPropAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTipsPropAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
        this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
        if (this.gameContext.clearChecker.checkCanClear2()) {
            ClearHelper_1.default.runClear(this.gameContext, e, this);
        }
        else {
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
    };
    return InputTipsPropAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTipsPropAutoMerge;

cc._RF.pop();