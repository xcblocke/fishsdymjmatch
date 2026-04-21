
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stopAudioOnBackToHall/Scripts/StopAudioOnBackToHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e77dZAtKhJgpAzaffuAikV', 'StopAudioOnBackToHallTrait');
// subpackages/l_stopAudioOnBackToHall/Scripts/StopAudioOnBackToHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StopAudioOnBackToHallTrait = /** @class */ (function (_super) {
    __extends(StopAudioOnBackToHallTrait, _super);
    function StopAudioOnBackToHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopAudioOnBackToHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopAudioOnBackToHallTrait.prototype.stopAllAudioAndClearCallbacks = function () {
        mj.audioManager.stopAllEffect();
    };
    StopAudioOnBackToHallTrait.prototype.onMainGameBtnBack_onClick = function (t, o) {
        this.stopAllAudioAndClearCallbacks();
        o();
    };
    StopAudioOnBackToHallTrait.prototype.onUISetBtnBack_onBtnClk = function (t, o) {
        this.stopAllAudioAndClearCallbacks();
        o();
    };
    StopAudioOnBackToHallTrait.traitKey = "StopAudioOnBackToHall";
    __decorate([
        mj.traitEvent("StopAudio_clearCallbacks")
    ], StopAudioOnBackToHallTrait.prototype, "stopAllAudioAndClearCallbacks", null);
    StopAudioOnBackToHallTrait = __decorate([
        mj.trait,
        mj.class("StopAudioOnBackToHallTrait")
    ], StopAudioOnBackToHallTrait);
    return StopAudioOnBackToHallTrait;
}(Trait_1.default));
exports.default = StopAudioOnBackToHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0b3BBdWRpb09uQmFja1RvSGFsbC9TY3JpcHRzL1N0b3BBdWRpb09uQmFja1RvSGFsbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBd0QsOENBQUs7SUFBN0Q7O0lBaUJBLENBQUM7SUFmQywyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0VBQTZCLEdBQTdCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsOERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDREQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFmTSxtQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0lBSzFDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzttRkFHekM7SUFSa0IsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0FpQjlDO0lBQUQsaUNBQUM7Q0FqQkQsQUFpQkMsQ0FqQnVELGVBQUssR0FpQjVEO2tCQWpCb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU3RvcEF1ZGlvT25CYWNrVG9IYWxsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BBdWRpb09uQmFja1RvSGFsbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlN0b3BBdWRpb09uQmFja1RvSGFsbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTdG9wQXVkaW9fY2xlYXJDYWxsYmFja3NcIilcbiAgc3RvcEFsbEF1ZGlvQW5kQ2xlYXJDYWxsYmFja3MoKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnN0b3BBbGxFZmZlY3QoKTtcbiAgfVxuICBvbk1haW5HYW1lQnRuQmFja19vbkNsaWNrKHQsIG8pIHtcbiAgICB0aGlzLnN0b3BBbGxBdWRpb0FuZENsZWFyQ2FsbGJhY2tzKCk7XG4gICAgbygpO1xuICB9XG4gIG9uVUlTZXRCdG5CYWNrX29uQnRuQ2xrKHQsIG8pIHtcbiAgICB0aGlzLnN0b3BBbGxBdWRpb0FuZENsZWFyQ2FsbGJhY2tzKCk7XG4gICAgbygpO1xuICB9XG59Il19