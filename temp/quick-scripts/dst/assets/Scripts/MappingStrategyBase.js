
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MappingStrategyBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66b2fuMK9JHArDnNj7/iPMf', 'MappingStrategyBase');
// Scripts/MappingStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategyBase = void 0;
var Common_1 = require("./types/Common");
var MappingStrategyBase = /** @class */ (function () {
    function MappingStrategyBase() {
        this.name = "MappingStrategyBase";
        this.desc = "映射策略基类";
        this.param = {};
    }
    MappingStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    MappingStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    MappingStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    return MappingStrategyBase;
}());
exports.MappingStrategyBase = MappingStrategyBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01hcHBpbmdTdHJhdGVneUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMEM7QUFDMUM7SUFBQTtRQUNFLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUM3QixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxFQUFFLENBQUM7SUFRYixDQUFDO0lBUEMsOENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELDhDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QscUNBQU8sR0FBUCxVQUFRLENBQUMsRUFBRSxDQUEwQjtRQUExQixrQkFBQSxFQUFBLElBQUksaUJBQVEsQ0FBQyxhQUFhO0lBQUcsQ0FBQztJQUMzQywwQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRURDQ29sb3IgfSBmcm9tICcuL3R5cGVzL0NvbW1vbic7XG5leHBvcnQgY2xhc3MgTWFwcGluZ1N0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIk1hcHBpbmdTdHJhdGVneUJhc2VcIjtcbiAgZGVzYyA9IFwi5pig5bCE562W55Wl5Z+657G7XCI7XG4gIHBhcmFtID0ge307XG4gIHNldFN0cmF0ZWd5UGFyYW0oZSkge1xuICAgIHRoaXMucGFyYW0gPSBlO1xuICB9XG4gIGdldFN0cmF0ZWd5UGFyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW07XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuTEFZRVJfTUFQUElORykge31cbn0iXX0=