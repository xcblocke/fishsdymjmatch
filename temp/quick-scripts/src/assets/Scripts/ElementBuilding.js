"use strict";
cc._RF.push(module, 'fa798xC30lMOLh4KnD2fz7s', 'ElementBuilding');
// Scripts/ElementBuilding.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = require("./ElementBase");
var ElementBuilding = /** @class */ (function (_super) {
    __extends(ElementBuilding, _super);
    function ElementBuilding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBuilding.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
    };
    ElementBuilding.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
    };
    ElementBuilding.prototype.getDesignZOrder = function () {
        return cc.isValid(this.node.parent) ? this.node.parent.children.length - 1 : 0;
    };
    ElementBuilding.prefabUrl = "";
    ElementBuilding.size = new cc.Size(1080, 1920);
    ElementBuilding = __decorate([
        mj.class
    ], ElementBuilding);
    return ElementBuilding;
}(ElementBase_1.default));
exports.default = ElementBuilding;

cc._RF.pop();