"use strict";
cc._RF.push(module, '82067AciaVCeImD1YLg10ml', 'DynamicOutlight');
// Scripts/DynamicOutlight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicEffect_1 = require("./DynamicEffect");
var Outlight_1 = require("./Outlight");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
var DynamicOutlight = /** @class */ (function (_super) {
    __extends(DynamicOutlight, _super);
    function DynamicOutlight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.srcNode = null;
        return _this;
    }
    DynamicOutlight.prototype.start = function () {
        _super.prototype.start.call(this);
        var t = this.node.getComponent(Outlight_1.default);
        t || (t = this.node.addComponent(Outlight_1.default));
    };
    DynamicOutlight.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    DynamicOutlight = __decorate([
        ccclass,
        executeInEditMode
    ], DynamicOutlight);
    return DynamicOutlight;
}(DynamicEffect_1.default));
exports.default = DynamicOutlight;

cc._RF.pop();