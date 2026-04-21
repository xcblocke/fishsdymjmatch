
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/tracker/DailyChallengeTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d5caGKAShGVoEdSgO+7qtX', 'DailyChallengeTracker');
// Scripts/core/simulator/tracker/DailyChallengeTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeTracker = void 0;
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameTracker_1 = require("../../../tracker/GameTracker");
var DailyChallengeTracker = /** @class */ (function (_super) {
    __extends(DailyChallengeTracker, _super);
    function DailyChallengeTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeTracker = __decorate([
        mj.class("DailyChallengeTracker")
    ], DailyChallengeTracker);
    return DailyChallengeTracker;
}(GameTracker_1.GameTracker));
exports.DailyChallengeTracker = DailyChallengeTracker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3RyYWNrZXIvRGFpbHlDaGFsbGVuZ2VUcmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXVEO0FBQ3ZELDREQUEyRDtBQUUzRDtJQUEyQyx5Q0FBVztJQUF0RDtRQUFBLHFFQUVDO1FBREMsZUFBUyxHQUFHLDBCQUFVLENBQUMsY0FBYyxDQUFDOztJQUN4QyxDQUFDO0lBRlkscUJBQXFCO1FBRGpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDckIscUJBQXFCLENBRWpDO0lBQUQsNEJBQUM7Q0FGRCxBQUVDLENBRjBDLHlCQUFXLEdBRXJEO0FBRlksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi90cmFja2VyL0dhbWVUcmFja2VyJztcbkBtai5jbGFzcyhcIkRhaWx5Q2hhbGxlbmdlVHJhY2tlclwiKVxuZXhwb3J0IGNsYXNzIERhaWx5Q2hhbGxlbmdlVHJhY2tlciBleHRlbmRzIEdhbWVUcmFja2VyIHtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTtcbn0iXX0=