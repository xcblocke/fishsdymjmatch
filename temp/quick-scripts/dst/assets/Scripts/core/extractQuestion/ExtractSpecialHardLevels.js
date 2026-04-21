
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/extractQuestion/ExtractSpecialHardLevels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a77d376J1lIh4stlFwwYI+V', 'ExtractSpecialHardLevels');
// Scripts/core/extractQuestion/ExtractSpecialHardLevels.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractHardLevelsBase_1 = require("./ExtractHardLevelsBase");
var ExtractSpecialHardLevels = /** @class */ (function (_super) {
    __extends(ExtractSpecialHardLevels, _super);
    function ExtractSpecialHardLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractSpecialHardLevels.getInstance = function () {
        this._instance || (this._instance = new ExtractSpecialHardLevels());
        return this._instance;
    };
    ExtractSpecialHardLevels.prototype.getDataConfig = function () {
        return {};
    };
    ExtractSpecialHardLevels.prototype.getConfig = function () {
        var e = {
            storageKey: "ExtractSpecialHardLevels",
            dataPath: "config/specialLevels/special_levels",
            defaultMaxLevels: 120,
            sourceName: "special_levels",
            logPrefix: "ExtractSpecialHardLevels"
        }, t = this.getDataConfig();
        t.dataPath && (e.dataPath = t.dataPath);
        t.bundleName && (e.bundleName = t.bundleName);
        return e;
    };
    ExtractSpecialHardLevels.prototype.getLevelData = function () {
        return ExtractSpecialHardLevels.levelData;
    };
    ExtractSpecialHardLevels.prototype.setLevelData = function (e) {
        ExtractSpecialHardLevels.levelData = e;
    };
    ExtractSpecialHardLevels.levelData = null;
    __decorate([
        mj.traitEvent("SpecialHardLv_getDataCfg")
    ], ExtractSpecialHardLevels.prototype, "getDataConfig", null);
    return ExtractSpecialHardLevels;
}(ExtractHardLevelsBase_1.ExtractHardLevelsBase));
exports.default = ExtractSpecialHardLevels;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RTcGVjaWFsSGFyZExldmVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBQ2hFO0lBQXNELDRDQUFxQjtJQUEzRTs7SUE2QkEsQ0FBQztJQTNCUSxvQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0RBQWEsR0FBYjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELDRDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRztZQUNKLFVBQVUsRUFBRSwwQkFBMEI7WUFDdEMsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxnQkFBZ0IsRUFBRSxHQUFHO1lBQ3JCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsU0FBUyxFQUFFLDBCQUEwQjtTQUN0QyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCwrQ0FBWSxHQUFaO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUNELCtDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osd0JBQXdCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBM0JNLGtDQUFTLEdBQUcsSUFBSSxDQUFDO0lBTXhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztpRUFHekM7SUFvQkgsK0JBQUM7Q0E3QkQsQUE2QkMsQ0E3QnFELDZDQUFxQixHQTZCMUU7a0JBN0JvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRyYWN0SGFyZExldmVsc0Jhc2UgfSBmcm9tICcuL0V4dHJhY3RIYXJkTGV2ZWxzQmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0U3BlY2lhbEhhcmRMZXZlbHMgZXh0ZW5kcyBFeHRyYWN0SGFyZExldmVsc0Jhc2Uge1xuICBzdGF0aWMgbGV2ZWxEYXRhID0gbnVsbDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBFeHRyYWN0U3BlY2lhbEhhcmRMZXZlbHMoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU3BlY2lhbEhhcmRMdl9nZXREYXRhQ2ZnXCIpXG4gIGdldERhdGFDb25maWcoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgICAgc3RvcmFnZUtleTogXCJFeHRyYWN0U3BlY2lhbEhhcmRMZXZlbHNcIixcbiAgICAgICAgZGF0YVBhdGg6IFwiY29uZmlnL3NwZWNpYWxMZXZlbHMvc3BlY2lhbF9sZXZlbHNcIixcbiAgICAgICAgZGVmYXVsdE1heExldmVsczogMTIwLFxuICAgICAgICBzb3VyY2VOYW1lOiBcInNwZWNpYWxfbGV2ZWxzXCIsXG4gICAgICAgIGxvZ1ByZWZpeDogXCJFeHRyYWN0U3BlY2lhbEhhcmRMZXZlbHNcIlxuICAgICAgfSxcbiAgICAgIHQgPSB0aGlzLmdldERhdGFDb25maWcoKTtcbiAgICB0LmRhdGFQYXRoICYmIChlLmRhdGFQYXRoID0gdC5kYXRhUGF0aCk7XG4gICAgdC5idW5kbGVOYW1lICYmIChlLmJ1bmRsZU5hbWUgPSB0LmJ1bmRsZU5hbWUpO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGdldExldmVsRGF0YSgpIHtcbiAgICByZXR1cm4gRXh0cmFjdFNwZWNpYWxIYXJkTGV2ZWxzLmxldmVsRGF0YTtcbiAgfVxuICBzZXRMZXZlbERhdGEoZSkge1xuICAgIEV4dHJhY3RTcGVjaWFsSGFyZExldmVscy5sZXZlbERhdGEgPSBlO1xuICB9XG59Il19