"use strict";
cc._RF.push(module, '371e21giuhCxpyMaZGQ4htq', 'InputChooseLayout');
// Scripts/input/InputChooseLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputChooseLayout = /** @class */ (function (_super) {
    __extends(InputChooseLayout, _super);
    function InputChooseLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputChooseLayout.prototype.excute = function (e) {
        this.gameContext.setContentSize(e.contentSize);
        var t = this.gameContext.layoutSelector.chooseLayout({
            contentSize: e.contentSize
        });
        this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
    };
    return InputChooseLayout;
}(InputBase_1.InputBase));
exports.default = InputChooseLayout;

cc._RF.pop();