"use strict";
cc._RF.push(module, '31063DMAWVOFrTTNp6N0qWb', 'ElementBg');
// Scripts/ElementBg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = require("./ElementBase");
var ElementBg = /** @class */ (function (_super) {
    __extends(ElementBg, _super);
    function ElementBg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBg.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
        this.adapterBg();
    };
    ElementBg.prototype.adapterBg = function () {
        var e = this.node.getComponent(cc.Widget) || this.node.addComponent(cc.Widget);
        e.isAlignTop = false;
        e.isAlignBottom = false;
        e.isAlignLeft = true;
        e.isAlignRight = true;
        e.isAbsoluteBottom = false;
        e.isAbsoluteTop = false;
        e.isAbsoluteLeft = true;
        e.isAbsoluteRight = true;
        e.left = 0;
        e.right = 0;
    };
    ElementBg.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
    };
    ElementBg.prefabUrl = "";
    ElementBg.size = new cc.Size(1080, 1920);
    return ElementBg;
}(ElementBase_1.default));
exports.default = ElementBg;

cc._RF.pop();