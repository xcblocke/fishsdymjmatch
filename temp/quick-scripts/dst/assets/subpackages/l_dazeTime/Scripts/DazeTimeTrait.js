
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dazeTime/Scripts/DazeTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31ab9/TSdpE24CsWV2tc3mu', 'DazeTimeTrait');
// subpackages/l_dazeTime/Scripts/DazeTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DazeTimeTrait = /** @class */ (function (_super) {
    __extends(DazeTimeTrait, _super);
    function DazeTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DazeTimeTrait.prototype, "dazeTime", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.dazeTime) && void 0 !== t ? t : 180;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DazeTimeTrait.prototype, "supportMode", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.mode) && void 0 !== t ? t : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Classic];
        },
        enumerable: false,
        configurable: true
    });
    DazeTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DazeTimeTrait.prototype.onIptGameTime_exec = function (e, t) {
        var r = e.ins, a = r.gameContext;
        if (this.supportMode.includes(a.gameType)) {
            var i = a.getGameData().getLastOpTime();
            if ((Date.now() - i) / 1000 > this.dazeTime) {
                var o = a.getGameData().getLastOpRealTime() + this.dazeTime - r.gameController.gameTimeData.time;
                o > 0 && (r.gameController.gameTimeData.time = o);
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
    DazeTimeTrait.traitKey = "DazeTime";
    DazeTimeTrait = __decorate([
        mj.trait,
        mj.class("DazeTimeTrait")
    ], DazeTimeTrait);
    return DazeTimeTrait;
}(Trait_1.default));
exports.default = DazeTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhemVUaW1lL1NjcmlwdHMvRGF6ZVRpbWVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix3RkFBb0Y7QUFHcEY7SUFBMkMsaUNBQUs7SUFBaEQ7O0lBNEJBLENBQUM7SUExQkMsc0JBQUksbUNBQVE7YUFBWjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdEgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxzQ0FBVzthQUFmO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxjQUFjLEVBQUUsMEJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwTSxDQUFDOzs7T0FBQTtJQUNELDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ2pHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBMUJNLHNCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRFYsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQTRCakM7SUFBRCxvQkFBQztDQTVCRCxBQTRCQyxDQTVCMEMsZUFBSyxHQTRCL0M7a0JBNUJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYXplVGltZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXplVGltZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRhemVUaW1lXCI7XG4gIGdldCBkYXplVGltZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmRhemVUaW1lKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMTgwO1xuICB9XG4gIGdldCBzdXBwb3J0TW9kZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm1vZGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBbTWpHYW1lVHlwZS5Ob3JtYWwsIE1qR2FtZVR5cGUuVHJhdmVsLCBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlLCBNakdhbWVUeXBlLkNsYXNzaWNdO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdEdhbWVUaW1lX2V4ZWMoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnMsXG4gICAgICBhID0gci5nYW1lQ29udGV4dDtcbiAgICBpZiAodGhpcy5zdXBwb3J0TW9kZS5pbmNsdWRlcyhhLmdhbWVUeXBlKSkge1xuICAgICAgdmFyIGkgPSBhLmdldEdhbWVEYXRhKCkuZ2V0TGFzdE9wVGltZSgpO1xuICAgICAgaWYgKChEYXRlLm5vdygpIC0gaSkgLyAxMDAwID4gdGhpcy5kYXplVGltZSkge1xuICAgICAgICB2YXIgbyA9IGEuZ2V0R2FtZURhdGEoKS5nZXRMYXN0T3BSZWFsVGltZSgpICsgdGhpcy5kYXplVGltZSAtIHIuZ2FtZUNvbnRyb2xsZXIuZ2FtZVRpbWVEYXRhLnRpbWU7XG4gICAgICAgIG8gPiAwICYmIChyLmdhbWVDb250cm9sbGVyLmdhbWVUaW1lRGF0YS50aW1lID0gbyk7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19