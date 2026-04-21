
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingRedDot/Scripts/SettingRedDotModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14b2dOGl3FAOo7JWxZRI/5+', 'SettingRedDotModel');
// subpackages/l_settingRedDot/Scripts/SettingRedDotModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var SettingRedDotModel = /** @class */ (function (_super) {
    __extends(SettingRedDotModel, _super);
    function SettingRedDotModel() {
        var _this = _super.call(this) || this;
        _this._modelName = "SettingRedDot";
        _this.localData.redDotTypes || (_this.localData.redDotTypes = []);
        return _this;
    }
    SettingRedDotModel.prototype.addRedDot = function (t) {
        var e = this.localData.redDotTypes;
        -1 === e.indexOf(t) && e.push(t);
        this.localData.redDotTypes = e;
    };
    SettingRedDotModel.prototype.removeRedDot = function (t) {
        var e = this.localData.redDotTypes, o = e.indexOf(t);
        if (-1 !== o) {
            e.splice(o, 1);
            this.localData.redDotTypes = e;
        }
    };
    SettingRedDotModel.prototype.getRedDotCount = function (t) {
        var e;
        return -1 !== (null === (e = this.localData) || void 0 === e ? void 0 : e.redDotTypes.indexOf(t)) ? 1 : 0;
    };
    SettingRedDotModel.prototype.getTotalRedDotCount = function () {
        var t;
        return (null === (t = this.localData) || void 0 === t ? void 0 : t.redDotTypes.length) || 0;
    };
    SettingRedDotModel.prototype.hasRedDot = function () {
        return this.getTotalRedDotCount() > 0;
    };
    SettingRedDotModel.prototype.clearAllRedDots = function () {
        this.localData.redDotTypes = [];
    };
    SettingRedDotModel = __decorate([
        mj.class("SettingRedDotModel")
    ], SettingRedDotModel);
    return SettingRedDotModel;
}(Model_1.default));
exports.default = SettingRedDotModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdSZWREb3QvU2NyaXB0cy9TZXR0aW5nUmVkRG90TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRDtJQUFnRCxzQ0FBSztJQUVuRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQUpELGdCQUFVLEdBQUcsZUFBZSxDQUFDO1FBRzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBQ2xFLENBQUM7SUFDRCxzQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELHlDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBQ0QsMkNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFDRCxnREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFDRCxzQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELDRDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWhDa0Isa0JBQWtCO1FBRHRDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FpQ3RDO0lBQUQseUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQytDLGVBQUssR0FpQ3BEO2tCQWpDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuQG1qLmNsYXNzKFwiU2V0dGluZ1JlZERvdE1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nUmVkRG90TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIF9tb2RlbE5hbWUgPSBcIlNldHRpbmdSZWREb3RcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZWREb3RUeXBlcyB8fCAodGhpcy5sb2NhbERhdGEucmVkRG90VHlwZXMgPSBbXSk7XG4gIH1cbiAgYWRkUmVkRG90KHQpIHtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLnJlZERvdFR5cGVzO1xuICAgIC0xID09PSBlLmluZGV4T2YodCkgJiYgZS5wdXNoKHQpO1xuICAgIHRoaXMubG9jYWxEYXRhLnJlZERvdFR5cGVzID0gZTtcbiAgfVxuICByZW1vdmVSZWREb3QodCkge1xuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEucmVkRG90VHlwZXMsXG4gICAgICBvID0gZS5pbmRleE9mKHQpO1xuICAgIGlmICgtMSAhPT0gbykge1xuICAgICAgZS5zcGxpY2UobywgMSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5yZWREb3RUeXBlcyA9IGU7XG4gICAgfVxuICB9XG4gIGdldFJlZERvdENvdW50KHQpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gLTEgIT09IChudWxsID09PSAoZSA9IHRoaXMubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJlZERvdFR5cGVzLmluZGV4T2YodCkpID8gMSA6IDA7XG4gIH1cbiAgZ2V0VG90YWxSZWREb3RDb3VudCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucmVkRG90VHlwZXMubGVuZ3RoKSB8fCAwO1xuICB9XG4gIGhhc1JlZERvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb3RhbFJlZERvdENvdW50KCkgPiAwO1xuICB9XG4gIGNsZWFyQWxsUmVkRG90cygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZWREb3RUeXBlcyA9IFtdO1xuICB9XG59Il19