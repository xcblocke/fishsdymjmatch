
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_motivationWordsMan/Scripts/MotivationWordsManTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49640o+EIBPt5juwrEbv9Q+', 'MotivationWordsManTrait');
// subpackages/l_motivationWordsMan/Scripts/MotivationWordsManTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var i;
(function (i) {
    i[i["Good"] = 57] = "Good";
    i[i["Great"] = 58] = "Great";
    i[i["Excellent"] = 59] = "Excellent";
    i[i["Amazing"] = 60] = "Amazing";
    i[i["Unbelievable"] = 61] = "Unbelievable";
})(i || (i = {}));
var MotivationWordsManTrait = /** @class */ (function (_super) {
    __extends(MotivationWordsManTrait, _super);
    function MotivationWordsManTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationWordsManTrait_1 = MotivationWordsManTrait;
    MotivationWordsManTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData.gameTypes, r = void 0 === t ? [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge] : t;
        UserModel_1.default.getInstance().setManGameTypes(r);
    };
    MotivationWordsManTrait.prototype.onMotivWordsBhv_playSound = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    MotivationWordsManTrait.prototype.onTravelMWords_playAudio = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    MotivationWordsManTrait.prototype.handleAudioReplacement = function (e, t) {
        var a = this._traitData.gameTypes, o = void 0 === a ? [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge] : a, n = UserModel_1.default.getInstance().getCurrentGameType();
        if (o.includes(n)) {
            var i = e.args[0], s = MotivationWordsManTrait_1.soundNameArr[i];
            if (s && mj.audioManager) {
                mj.audioManager.playEffect(s, false);
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    var MotivationWordsManTrait_1;
    MotivationWordsManTrait.traitKey = "MotivationWordsMan";
    MotivationWordsManTrait.bundleName = "l_motivationWordsMan";
    MotivationWordsManTrait.soundNameArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
    MotivationWordsManTrait = MotivationWordsManTrait_1 = __decorate([
        mj.trait,
        mj.class("MotivationWordsManTrait")
    ], MotivationWordsManTrait);
    return MotivationWordsManTrait;
}(Trait_1.default));
exports.default = MotivationWordsManTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdGl2YXRpb25Xb3Jkc01hbi9TY3JpcHRzL01vdGl2YXRpb25Xb3Jkc01hblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsSUFBSyxDQU1KO0FBTkQsV0FBSyxDQUFDO0lBQ0osMEJBQVMsQ0FBQTtJQUNULDRCQUFVLENBQUE7SUFDVixvQ0FBYyxDQUFBO0lBQ2QsZ0NBQVksQ0FBQTtJQUNaLDBDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFOSSxDQUFDLEtBQUQsQ0FBQyxRQU1MO0FBR0Q7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBZ0NBLENBQUM7Z0NBaENvQix1QkFBdUI7SUFJMUMsd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQy9CLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCwyREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsMERBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHdEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFDL0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBVSxDQUFDLE1BQU0sRUFBRSwwQkFBVSxDQUFDLE1BQU0sRUFBRSwwQkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hGLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLHlCQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFO2dCQUN4QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDOztJQTlCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBQ2hDLGtDQUFVLEdBQUcsc0JBQXNCLENBQUM7SUFDcEMsb0NBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBSDdELHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FnQzNDO0lBQUQsOEJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ29ELGVBQUssR0FnQ3pEO2tCQWhDb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmVudW0gaSB7XG4gIEdvb2QgPSA1NyxcbiAgR3JlYXQgPSA1OCxcbiAgRXhjZWxsZW50ID0gNTksXG4gIEFtYXppbmcgPSA2MCxcbiAgVW5iZWxpZXZhYmxlID0gNjEsXG59XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1vdGl2YXRpb25Xb3Jkc01hblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3RpdmF0aW9uV29yZHNNYW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNb3RpdmF0aW9uV29yZHNNYW5cIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfbW90aXZhdGlvbldvcmRzTWFuXCI7XG4gIHN0YXRpYyBzb3VuZE5hbWVBcnIgPSBbaS5Hb29kLCBpLkdyZWF0LCBpLkV4Y2VsbGVudCwgaS5BbWF6aW5nLCBpLlVuYmVsaWV2YWJsZV07XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5nYW1lVHlwZXMsXG4gICAgICByID0gdm9pZCAwID09PSB0ID8gW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV0gOiB0O1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldE1hbkdhbWVUeXBlcyhyKTtcbiAgfVxuICBvbk1vdGl2V29yZHNCaHZfcGxheVNvdW5kKGUsIHQpIHtcbiAgICB0aGlzLmhhbmRsZUF1ZGlvUmVwbGFjZW1lbnQoZSwgdCk7XG4gIH1cbiAgb25UcmF2ZWxNV29yZHNfcGxheUF1ZGlvKGUsIHQpIHtcbiAgICB0aGlzLmhhbmRsZUF1ZGlvUmVwbGFjZW1lbnQoZSwgdCk7XG4gIH1cbiAgaGFuZGxlQXVkaW9SZXBsYWNlbWVudChlLCB0KSB7XG4gICAgdmFyIGEgPSB0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGVzLFxuICAgICAgbyA9IHZvaWQgMCA9PT0gYSA/IFtNakdhbWVUeXBlLk5vcm1hbCwgTWpHYW1lVHlwZS5UcmF2ZWwsIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2VdIDogYSxcbiAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICBpZiAoby5pbmNsdWRlcyhuKSkge1xuICAgICAgdmFyIGkgPSBlLmFyZ3NbMF0sXG4gICAgICAgIHMgPSBNb3RpdmF0aW9uV29yZHNNYW5UcmFpdC5zb3VuZE5hbWVBcnJbaV07XG4gICAgICBpZiAocyAmJiBtai5hdWRpb01hbmFnZXIpIHtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QocywgZmFsc2UpO1xuICAgICAgICB0KHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==