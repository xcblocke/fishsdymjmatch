"use strict";
cc._RF.push(module, 'a7696R9j3FI4ILeHb8wgTmW', 'InputChooseLayoutClassic');
// Scripts/input/InputChooseLayoutClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputChooseLayoutClassic = /** @class */ (function (_super) {
    __extends(InputChooseLayoutClassic, _super);
    function InputChooseLayoutClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputChooseLayoutClassic.prototype.excute = function (e) {
        this.gameContext.setContentSize(e.contentSize);
        var t = this.gameContext.layoutSelector.chooseLayoutForClassic({
            contentSize: e.contentSize,
            maxRow: e.maxRow,
            maxCol: e.maxCol
        });
        this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
    };
    return InputChooseLayoutClassic;
}(InputBase_1.InputBase));
exports.default = InputChooseLayoutClassic;

cc._RF.pop();