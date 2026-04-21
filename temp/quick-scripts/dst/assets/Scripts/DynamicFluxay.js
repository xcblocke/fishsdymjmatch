
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DynamicFluxay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R5bmFtaWNGbHV4YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDcEMsSUFBQSxLQUlGLEVBQUUsQ0FBQyxVQUFVLEVBSGYsT0FBTyxhQUFBLEVBQ1AsaUJBQWlCLHVCQUFBLEVBQ2pCLFFBQVEsY0FDTyxDQUFDO0FBR2xCO0lBQTJDLGlDQUFhO0lBQXhEO1FBQUEscUVBUUM7UUFQQyxhQUFPLEdBQUcsSUFBSSxDQUFDOztJQU9qQixDQUFDO0lBTkMsNkJBQUssR0FBTDtRQUNFLGlCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsaUNBQVMsR0FBVCxjQUFhLENBQUM7SUFQSyxhQUFhO1FBRmpDLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxhQUFhLENBUWpDO0lBQUQsb0JBQUM7Q0FSRCxBQVFDLENBUjBDLHVCQUFhLEdBUXZEO2tCQVJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNFZmZlY3QgZnJvbSAnLi9EeW5hbWljRWZmZWN0JztcbmltcG9ydCBGbHV4YXlFZmZlY3QgZnJvbSAnLi9GbHV4YXlFZmZlY3QnO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBleGVjdXRlSW5FZGl0TW9kZSxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0ZsdXhheSBleHRlbmRzIER5bmFtaWNFZmZlY3Qge1xuICBzcmNOb2RlID0gbnVsbDtcbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRmx1eGF5RWZmZWN0KTtcbiAgICB0IHx8ICh0ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChGbHV4YXlFZmZlY3QpKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7fVxufSJdfQ==