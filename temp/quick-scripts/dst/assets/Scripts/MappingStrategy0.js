
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MappingStrategy0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f7e06Se+NN46u3Crb6cBZV', 'MappingStrategy0');
// Scripts/MappingStrategy0.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy0 = void 0;
var FactoryMapping_1 = require("./FactoryMapping");
var MappingStrategyBase_1 = require("./MappingStrategyBase");
var MappingStrategy0 = /** @class */ (function (_super) {
    __extends(MappingStrategy0, _super);
    function MappingStrategy0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping0";
        _this.desc = "兜底随机策略";
        return _this;
    }
    MappingStrategy0.prototype.mapping = function (e) {
        var t = e.levels;
        return t && 0 !== t.length ? t[Math.floor(Math.random() * t.length)] : null;
    };
    MappingStrategy0 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping0")
    ], MappingStrategy0);
    return MappingStrategy0;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy0 = MappingStrategy0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01hcHBpbmdTdHJhdGVneTAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsNkRBQTREO0FBRTVEO0lBQXNDLG9DQUFtQjtJQUF6RDtRQUFBLHFFQU9DO1FBTkMsVUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNsQixVQUFJLEdBQUcsUUFBUSxDQUFDOztJQUtsQixDQUFDO0lBSkMsa0NBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RSxDQUFDO0lBTlUsZ0JBQWdCO1FBRDVCLGdDQUFlLENBQUMsVUFBVSxDQUFDO09BQ2YsZ0JBQWdCLENBTzVCO0lBQUQsdUJBQUM7Q0FQRCxBQU9DLENBUHFDLHlDQUFtQixHQU94RDtBQVBZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcHBpbmdTdHJhdGVneSB9IGZyb20gJy4vRmFjdG9yeU1hcHBpbmcnO1xuaW1wb3J0IHsgTWFwcGluZ1N0cmF0ZWd5QmFzZSB9IGZyb20gJy4vTWFwcGluZ1N0cmF0ZWd5QmFzZSc7XG5AbWFwcGluZ1N0cmF0ZWd5KFwiTWFwcGluZzBcIilcbmV4cG9ydCBjbGFzcyBNYXBwaW5nU3RyYXRlZ3kwIGV4dGVuZHMgTWFwcGluZ1N0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIk1hcHBpbmcwXCI7XG4gIGRlc2MgPSBcIuWFnOW6lemaj+acuuetlueVpVwiO1xuICBtYXBwaW5nKGUpIHtcbiAgICB2YXIgdCA9IGUubGV2ZWxzO1xuICAgIHJldHVybiB0ICYmIDAgIT09IHQubGVuZ3RoID8gdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Lmxlbmd0aCldIDogbnVsbDtcbiAgfVxufSJdfQ==