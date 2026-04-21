"use strict";
cc._RF.push(module, '865d1rFzaFO2ZEl2BRAjd0b', 'ElementBase');
// Scripts/ElementBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCell_1 = require("./base/ui/BaseCell");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var ElementBase = /** @class */ (function (_super) {
    __extends(ElementBase, _super);
    function ElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBase.prototype.uiOnLoad = function () { };
    ElementBase.prototype.updateUI = function () {
        if (cc.isValid(this.node.parent)) {
            var e = this.getDesignZOrder();
            this.node.setSiblingIndex(e);
        }
    };
    ElementBase.prototype.getDesignZOrder = function () {
        return 0;
    };
    ElementBase.prototype.getBaseSpine = function (e) {
        var t = BaseSpine_1.default.refreshWithNode(e);
        t.markReady("");
        return t;
    };
    ElementBase.prototype.hookNode = function (e, t, o, n) {
        e && cc.isValid(o) && cc.isValid(n) && cc.isValid(this.node.parent) && o.parent === n && e.attachNode(t, function () {
            return o;
        });
    };
    ElementBase.size = new cc.Size(0, 0);
    ElementBase = __decorate([
        mj.class
    ], ElementBase);
    return ElementBase;
}(BaseCell_1.default));
exports.default = ElementBase;

cc._RF.pop();