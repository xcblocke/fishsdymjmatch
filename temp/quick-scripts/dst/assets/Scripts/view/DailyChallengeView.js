
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/DailyChallengeView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3327fTyuH5Fk6MgKpNJrzcn', 'DailyChallengeView');
// Scripts/view/DailyChallengeView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var DailyChallengeView = /** @class */ (function (_super) {
    __extends(DailyChallengeView, _super);
    function DailyChallengeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "DailyChallengeView";
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeView.prefabUrl = "prefabs/game/MainGameDailyChallenge";
    DailyChallengeView = __decorate([
        mj.class
    ], DailyChallengeView);
    return DailyChallengeView;
}(MainGameView_1.default));
exports.default = DailyChallengeView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvRGFpbHlDaGFsbGVuZ2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBc0U7QUFDdEUsMERBQXFEO0FBRXJEO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBSUM7UUFIQyxjQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDaEMsZUFBUyxHQUFHLDBCQUFVLENBQUMsY0FBYyxDQUFDOztJQUV4QyxDQUFDO0lBRFEsNEJBQVMsR0FBRyxxQ0FBcUMsQ0FBQztJQUh0QyxrQkFBa0I7UUFEdEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxrQkFBa0IsQ0FJdEM7SUFBRCx5QkFBQztDQUpELEFBSUMsQ0FKK0Msc0JBQVksR0FJM0Q7a0JBSm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBNYWluR2FtZVZpZXcgZnJvbSAnLi4vZ2FtZS92aWV3L01haW5HYW1lVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Q2hhbGxlbmdlVmlldyBleHRlbmRzIE1haW5HYW1lVmlldyB7XG4gIF9sb2dOYW1lID0gXCJEYWlseUNoYWxsZW5nZVZpZXdcIjtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9nYW1lL01haW5HYW1lRGFpbHlDaGFsbGVuZ2VcIjtcbn0iXX0=