
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/PushBatchInfoBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15ca208ZuFCPYBE3gkAppm/', 'PushBatchInfoBehavior');
// Scripts/base/PushBatchInfoBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PushBatchInfoBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicExtractTool_1 = require("../ClassicExtractTool");
var UserModel_1 = require("../gamePlay/user/UserModel");
var PushBatchInfoBehavior = /** @class */ (function (_super) {
    __extends(PushBatchInfoBehavior, _super);
    function PushBatchInfoBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isOpenGenerateState = false;
        return _this;
    }
    PushBatchInfoBehavior.prototype.onAbort = function () {
        this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
        _super.prototype.onAbort.call(this);
    };
    PushBatchInfoBehavior.prototype.start = function (e) {
        this._isOpenGenerateState = e.data.isOpenGenerateState;
        this.loadAndPushLevel(e);
    };
    PushBatchInfoBehavior.prototype.loadAndPushLevel = function () {
        var e = this;
        this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Classic);
        ClassicExtractTool_1.ClassicExtractTool.getInstance().extractSwimlane(t).then(function (t) {
            e._isOpenGenerateState || e.context.gameView.setSwallowEventNodeActive(false);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic,
                levelData: {
                    levelStr: t.levelStr,
                    originalLevelStr: t.levelStr,
                    levelDifficulty: t.difficultyType,
                    isNewGame: false,
                    gameType: GameTypeEnums_1.MjGameType.Classic,
                    levelId: parseInt(t.index) || 0,
                    difficultyType: t.difficultyType,
                    levelName: t.libName
                }
            });
            e.finish();
        });
    };
    return PushBatchInfoBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.PushBatchInfoBehavior = PushBatchInfoBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvUHVzaEJhdGNoSW5mb0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQXFFO0FBQ3JFLDBFQUFzRTtBQUN0RSxzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hELDREQUEyRDtBQUMzRCx3REFBbUQ7QUFDbkQ7SUFBMkMseUNBQWlCO0lBQTVEO1FBQUEscUVBZ0NDO1FBL0JDLDBCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUErQi9CLENBQUM7SUE5QkMsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRixpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxxQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZ0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSx1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUUsaUNBQWUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLFNBQVMsRUFBRSw4QkFBYyxDQUFDLGVBQWU7Z0JBQ3pDLFNBQVMsRUFBRTtvQkFDVCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7b0JBQ3BCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxRQUFRO29CQUM1QixlQUFlLEVBQUUsQ0FBQyxDQUFDLGNBQWM7b0JBQ2pDLFNBQVMsRUFBRSxLQUFLO29CQUNoQixRQUFRLEVBQUUsMEJBQVUsQ0FBQyxPQUFPO29CQUM1QixPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUMvQixjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWM7b0JBQ2hDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTztpQkFDckI7YUFDRixDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw0QkFBQztBQUFELENBaENBLEFBZ0NDLENBaEMwQyxxQ0FBaUIsR0FnQzNEO0FBaENZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IHsgQ2xhc3NpY0V4dHJhY3RUb29sIH0gZnJvbSAnLi4vQ2xhc3NpY0V4dHJhY3RUb29sJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIFB1c2hCYXRjaEluZm9CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX2lzT3BlbkdlbmVyYXRlU3RhdGUgPSBmYWxzZTtcbiAgb25BYm9ydCgpIHtcbiAgICB0aGlzLl9pc09wZW5HZW5lcmF0ZVN0YXRlIHx8IHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICBzdXBlci5vbkFib3J0LmNhbGwodGhpcyk7XG4gIH1cbiAgc3RhcnQoZSkge1xuICAgIHRoaXMuX2lzT3BlbkdlbmVyYXRlU3RhdGUgPSBlLmRhdGEuaXNPcGVuR2VuZXJhdGVTdGF0ZTtcbiAgICB0aGlzLmxvYWRBbmRQdXNoTGV2ZWwoZSk7XG4gIH1cbiAgbG9hZEFuZFB1c2hMZXZlbCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5faXNPcGVuR2VuZXJhdGVTdGF0ZSB8fCB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZSh0cnVlKTtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLkNsYXNzaWMpO1xuICAgIENsYXNzaWNFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmV4dHJhY3RTd2ltbGFuZSh0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICBlLl9pc09wZW5HZW5lcmF0ZVN0YXRlIHx8IGUuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQWRkTGV2ZWxDbGFzc2ljLFxuICAgICAgICBsZXZlbERhdGE6IHtcbiAgICAgICAgICBsZXZlbFN0cjogdC5sZXZlbFN0cixcbiAgICAgICAgICBvcmlnaW5hbExldmVsU3RyOiB0LmxldmVsU3RyLFxuICAgICAgICAgIGxldmVsRGlmZmljdWx0eTogdC5kaWZmaWN1bHR5VHlwZSxcbiAgICAgICAgICBpc05ld0dhbWU6IGZhbHNlLFxuICAgICAgICAgIGdhbWVUeXBlOiBNakdhbWVUeXBlLkNsYXNzaWMsXG4gICAgICAgICAgbGV2ZWxJZDogcGFyc2VJbnQodC5pbmRleCkgfHwgMCxcbiAgICAgICAgICBkaWZmaWN1bHR5VHlwZTogdC5kaWZmaWN1bHR5VHlwZSxcbiAgICAgICAgICBsZXZlbE5hbWU6IHQubGliTmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGUuZmluaXNoKCk7XG4gICAgfSk7XG4gIH1cbn0iXX0=