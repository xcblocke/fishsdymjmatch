
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DynamicOutlight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R5bmFtaWNPdXRsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVDQUFrQztBQUM1QixJQUFBLEtBSUYsRUFBRSxDQUFDLFVBQVUsRUFIZixPQUFPLGFBQUEsRUFDUCxpQkFBaUIsdUJBQUEsRUFDakIsUUFBUSxjQUNPLENBQUM7QUFHbEI7SUFBNkMsbUNBQWE7SUFBMUQ7UUFBQSxxRUFVQztRQVRDLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBU2pCLENBQUM7SUFSQywrQkFBSyxHQUFMO1FBQ0UsaUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxtQ0FBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxJQUFJLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVRrQixlQUFlO1FBRm5DLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxlQUFlLENBVW5DO0lBQUQsc0JBQUM7Q0FWRCxBQVVDLENBVjRDLHVCQUFhLEdBVXpEO2tCQVZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNFZmZlY3QgZnJvbSAnLi9EeW5hbWljRWZmZWN0JztcbmltcG9ydCBPdXRsaWdodCBmcm9tICcuL091dGxpZ2h0JztcbmNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgZXhlY3V0ZUluRWRpdE1vZGUsXG4gIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNPdXRsaWdodCBleHRlbmRzIER5bmFtaWNFZmZlY3Qge1xuICBzcmNOb2RlID0gbnVsbDtcbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoT3V0bGlnaHQpO1xuICAgIHQgfHwgKHQgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KE91dGxpZ2h0KSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==