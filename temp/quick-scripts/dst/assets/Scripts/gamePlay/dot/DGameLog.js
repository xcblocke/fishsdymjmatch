
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4623cVhewBCOqwxhyk4eTQZ', 'DGameLog');
// Scripts/gamePlay/dot/DGameLog.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameLog = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameLog = /** @class */ (function () {
    function DotGameLog() {
    }
    DotGameLog.dot = function (e) {
        if (!e.isVideo) {
            var t = e.getGameTracker();
            if (t) {
                var o = {
                    log_info: JSON.stringify(t.cmds),
                    puzzle: e.getGameData().getOriginalLevelData(),
                    level: e.getGameData().getCurrentLevelId(),
                    game_mode_name: DotUtil_1.DotUtil.getGameModeName(e.getGameData().gameType),
                    game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(e.getGameData().gameType),
                    game_mode: DotUtil_1.DotUtil.getGameId(e.getGameData().gameType),
                    mode_num: e.getGameData().getGameCount(),
                    index: 1
                };
                EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameLog, o);
            }
        }
    };
    __decorate([
        mj.traitEvent("DGameLog_dot")
    ], DotGameLog, "dot", null);
    return DotGameLog;
}());
exports.DotGameLog = DotGameLog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUErRDtBQUMvRCw4RUFBeUU7QUFDekUscUNBQW9DO0FBQ3BDO0lBQUE7SUFvQkEsQ0FBQztJQWxCUSxjQUFHLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUc7b0JBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDaEMsTUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDOUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUMsY0FBYyxFQUFFLGlCQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ2pFLGdCQUFnQixFQUFFLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDckUsU0FBUyxFQUFFLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ3RELFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFO29CQUN4QyxLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2dCQUNGLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0U7U0FDRjtJQUNILENBQUM7SUFqQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzsrQkFrQjdCO0lBQ0gsaUJBQUM7Q0FwQkQsQUFvQkMsSUFBQTtBQXBCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4vRG90VXRpbCc7XG5leHBvcnQgY2xhc3MgRG90R2FtZUxvZyB7XG4gIEBtai50cmFpdEV2ZW50KFwiREdhbWVMb2dfZG90XCIpXG4gIHN0YXRpYyBkb3QoZSkge1xuICAgIGlmICghZS5pc1ZpZGVvKSB7XG4gICAgICB2YXIgdCA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciBvID0ge1xuICAgICAgICAgIGxvZ19pbmZvOiBKU09OLnN0cmluZ2lmeSh0LmNtZHMpLFxuICAgICAgICAgIHB1enpsZTogZS5nZXRHYW1lRGF0YSgpLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCksXG4gICAgICAgICAgbGV2ZWw6IGUuZ2V0R2FtZURhdGEoKS5nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgICAgIGdhbWVfbW9kZV9uYW1lOiBEb3RVdGlsLmdldEdhbWVNb2RlTmFtZShlLmdldEdhbWVEYXRhKCkuZ2FtZVR5cGUpLFxuICAgICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2QoZS5nZXRHYW1lRGF0YSgpLmdhbWVUeXBlKSxcbiAgICAgICAgICBnYW1lX21vZGU6IERvdFV0aWwuZ2V0R2FtZUlkKGUuZ2V0R2FtZURhdGEoKS5nYW1lVHlwZSksXG4gICAgICAgICAgbW9kZV9udW06IGUuZ2V0R2FtZURhdGEoKS5nZXRHYW1lQ291bnQoKSxcbiAgICAgICAgICBpbmRleDogMVxuICAgICAgICB9O1xuICAgICAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuR2FtZUxvZywgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19