
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/ClassicView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '275eb+nfspLNZdphqAOrkKy', 'ClassicView');
// Scripts/view/ClassicView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var ClassicView = /** @class */ (function (_super) {
    __extends(ClassicView, _super);
    function ClassicView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "ClassicView";
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        return _this;
    }
    ClassicView.prefabUrl = "prefabs/game/MainGameClassic";
    ClassicView = __decorate([
        mj.class
    ], ClassicView);
    return ClassicView;
}(MainGameView_1.default));
exports.default = ClassicView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvQ2xhc3NpY1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFzRTtBQUN0RSwwREFBcUQ7QUFFckQ7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFJQztRQUhDLGNBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBUyxHQUFHLDBCQUFVLENBQUMsT0FBTyxDQUFDOztJQUVqQyxDQUFDO0lBRFEscUJBQVMsR0FBRyw4QkFBOEIsQ0FBQztJQUgvQixXQUFXO1FBRC9CLEVBQUUsQ0FBQyxLQUFLO09BQ1ksV0FBVyxDQUkvQjtJQUFELGtCQUFDO0NBSkQsQUFJQyxDQUp3QyxzQkFBWSxHQUlwRDtrQkFKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBNYWluR2FtZVZpZXcgZnJvbSAnLi4vZ2FtZS92aWV3L01haW5HYW1lVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNWaWV3IGV4dGVuZHMgTWFpbkdhbWVWaWV3IHtcbiAgX2xvZ05hbWUgPSBcIkNsYXNzaWNWaWV3XCI7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuQ2xhc3NpYztcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9nYW1lL01haW5HYW1lQ2xhc3NpY1wiO1xufSJdfQ==