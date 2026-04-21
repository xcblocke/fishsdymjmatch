"use strict";
cc._RF.push(module, '702becl+SdMVrdSMCtxgn36', 'DynamicFluxay');
// Scripts/DynamicFluxay.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicEffect_1 = require("./DynamicEffect");
var FluxayEffect_1 = require("./FluxayEffect");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
var DynamicFluxay = /** @class */ (function (_super) {
    __extends(DynamicFluxay, _super);
    function DynamicFluxay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.srcNode = null;
        return _this;
    }
    DynamicFluxay.prototype.start = function () {
        _super.prototype.start.call(this);
        var t = this.node.getComponent(FluxayEffect_1.default);
        t || (t = this.node.addComponent(FluxayEffect_1.default));
    };
    DynamicFluxay.prototype.onDestroy = function () { };
    DynamicFluxay = __decorate([
        ccclass,
        executeInEditMode
    ], DynamicFluxay);
    return DynamicFluxay;
}(DynamicEffect_1.default));
exports.default = DynamicFluxay;

cc._RF.pop();