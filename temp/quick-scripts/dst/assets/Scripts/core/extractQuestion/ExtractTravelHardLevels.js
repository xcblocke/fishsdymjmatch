
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/extractQuestion/ExtractTravelHardLevels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95a9aR7mu5FQ78QTqBHdo6k', 'ExtractTravelHardLevels');
// Scripts/core/extractQuestion/ExtractTravelHardLevels.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractHardLevelsBase_1 = require("./ExtractHardLevelsBase");
var ExtractTravelHardLevels = /** @class */ (function (_super) {
    __extends(ExtractTravelHardLevels, _super);
    function ExtractTravelHardLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractTravelHardLevels_1 = ExtractTravelHardLevels;
    ExtractTravelHardLevels.getInstance = function () {
        this._instance || (this._instance = new ExtractTravelHardLevels_1());
        return this._instance;
    };
    ExtractTravelHardLevels.prototype.getDataConfig = function () {
        return {};
    };
    ExtractTravelHardLevels.prototype.getConfig = function () {
        var e = {
            storageKey: "ExtractTravelHardLevels",
            dataPath: "config/boards/endless_classic/initial",
            defaultMaxLevels: 500,
            sourceName: "initial",
            logPrefix: "ExtractTravelHardLevels"
        }, t = this.getDataConfig();
        t.dataPath && (e.dataPath = t.dataPath);
        t.bundleName && (e.bundleName = t.bundleName);
        return e;
    };
    ExtractTravelHardLevels.prototype.getLevelData = function () {
        return ExtractTravelHardLevels_1.levelData;
    };
    ExtractTravelHardLevels.prototype.setLevelData = function (e) {
        ExtractTravelHardLevels_1.levelData = e;
    };
    var ExtractTravelHardLevels_1;
    ExtractTravelHardLevels.levelData = null;
    __decorate([
        mj.traitEvent("TravelHardLv_getDataCfg")
    ], ExtractTravelHardLevels.prototype, "getDataConfig", null);
    ExtractTravelHardLevels = ExtractTravelHardLevels_1 = __decorate([
        mj.class("ExtractTravelHardLevels")
    ], ExtractTravelHardLevels);
    return ExtractTravelHardLevels;
}(ExtractHardLevelsBase_1.ExtractHardLevelsBase));
exports.default = ExtractTravelHardLevels;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZ0U7QUFFaEU7SUFBcUQsMkNBQXFCO0lBQTFFOztJQTZCQSxDQUFDO2dDQTdCb0IsdUJBQXVCO0lBRW5DLG1DQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx5QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDbkUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQ0FBYSxHQUFiO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsMkNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHO1lBQ0osVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELGdCQUFnQixFQUFFLEdBQUc7WUFDckIsVUFBVSxFQUFFLFNBQVM7WUFDckIsU0FBUyxFQUFFLHlCQUF5QjtTQUNyQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCw4Q0FBWSxHQUFaO1FBQ0UsT0FBTyx5QkFBdUIsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELDhDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1oseUJBQXVCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOztJQTNCTSxpQ0FBUyxHQUFHLElBQUksQ0FBQztJQU14QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7Z0VBR3hDO0lBVGtCLHVCQUF1QjtRQUQzQyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBNkIzQztJQUFELDhCQUFDO0NBN0JELEFBNkJDLENBN0JvRCw2Q0FBcUIsR0E2QnpFO2tCQTdCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0cmFjdEhhcmRMZXZlbHNCYXNlIH0gZnJvbSAnLi9FeHRyYWN0SGFyZExldmVsc0Jhc2UnO1xuQG1qLmNsYXNzKFwiRXh0cmFjdFRyYXZlbEhhcmRMZXZlbHNcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzIGV4dGVuZHMgRXh0cmFjdEhhcmRMZXZlbHNCYXNlIHtcbiAgc3RhdGljIGxldmVsRGF0YSA9IG51bGw7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgRXh0cmFjdFRyYXZlbEhhcmRMZXZlbHMoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsSGFyZEx2X2dldERhdGFDZmdcIilcbiAgZ2V0RGF0YUNvbmZpZygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgZ2V0Q29uZmlnKCkge1xuICAgIHZhciBlID0ge1xuICAgICAgICBzdG9yYWdlS2V5OiBcIkV4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzXCIsXG4gICAgICAgIGRhdGFQYXRoOiBcImNvbmZpZy9ib2FyZHMvZW5kbGVzc19jbGFzc2ljL2luaXRpYWxcIixcbiAgICAgICAgZGVmYXVsdE1heExldmVsczogNTAwLFxuICAgICAgICBzb3VyY2VOYW1lOiBcImluaXRpYWxcIixcbiAgICAgICAgbG9nUHJlZml4OiBcIkV4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzXCJcbiAgICAgIH0sXG4gICAgICB0ID0gdGhpcy5nZXREYXRhQ29uZmlnKCk7XG4gICAgdC5kYXRhUGF0aCAmJiAoZS5kYXRhUGF0aCA9IHQuZGF0YVBhdGgpO1xuICAgIHQuYnVuZGxlTmFtZSAmJiAoZS5idW5kbGVOYW1lID0gdC5idW5kbGVOYW1lKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBnZXRMZXZlbERhdGEoKSB7XG4gICAgcmV0dXJuIEV4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzLmxldmVsRGF0YTtcbiAgfVxuICBzZXRMZXZlbERhdGEoZSkge1xuICAgIEV4dHJhY3RUcmF2ZWxIYXJkTGV2ZWxzLmxldmVsRGF0YSA9IGU7XG4gIH1cbn0iXX0=