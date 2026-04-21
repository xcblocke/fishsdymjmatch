
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoNextLevel/Scripts/TravelAutoNextLvTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f204X2QddMT6MHNB4LzNkv', 'TravelAutoNextLvTrait');
// subpackages/l_autoNextLevel/Scripts/TravelAutoNextLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TravelAutoNextLvTrait = /** @class */ (function (_super) {
    __extends(TravelAutoNextLvTrait, _super);
    function TravelAutoNextLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canAutoNextLevel = false;
        _this.triggeredAuto = false;
        return _this;
    }
    Object.defineProperty(TravelAutoNextLvTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    TravelAutoNextLvTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelAutoNextLvTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var r = this;
        this.canAutoNextLevel = false;
        this.triggeredAuto = false;
        cc.isValid(t.ins) && t.ins.scheduleOnce(function () {
            if (cc.isValid(t.ins) && r.canAutoNextLevel && !r.triggeredAuto) {
                r.triggeredAuto = true;
                t.ins.onBtnNextClick();
            }
        }, this.delayTime);
        e();
    };
    TravelAutoNextLvTrait.prototype.onTLWinVw_popNextView = function (t, e) {
        var r, o, i, n, a = null !== (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.hasBoxReward) && void 0 !== o && o, u = null !== (n = null === (i = t.args[0]) || void 0 === i ? void 0 : i.hasTaskReward) && void 0 !== n && n;
        this.canAutoNextLevel = !a && !u;
        e();
    };
    TravelAutoNextLvTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[3];
        if ("beforeInterAd" === (null == o ? void 0 : o.adTimeType)) {
            if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel) {
                if (this.triggeredAuto) {
                    this.triggeredAuto = false;
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    TravelAutoNextLvTrait.traitKey = "TravelAutoNextLv";
    TravelAutoNextLvTrait = __decorate([
        mj.trait,
        mj.class("TravelAutoNextLvTrait")
    ], TravelAutoNextLvTrait);
    return TravelAutoNextLvTrait;
}(Trait_1.default));
exports.default = TravelAutoNextLvTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9OZXh0TGV2ZWwvU2NyaXB0cy9UcmF2ZWxBdXRvTmV4dEx2VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQWlEQztRQWhEQyxzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBK0N4QixDQUFDO0lBN0NDLHNCQUFJLDRDQUFTO2FBQWI7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RILENBQUM7OztPQUFBO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3RDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtnQkFDL0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQzFHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLGVBQWUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDM0QsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUMsQ0FBQzt3QkFDQSxTQUFTLEVBQUUsS0FBSzt3QkFDaEIsT0FBTyxFQUFFLElBQUk7d0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07cUJBQzNDLENBQUMsQ0FBQztpQkFDSjs7b0JBQU0sQ0FBQyxFQUFFLENBQUM7YUFDWjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE3Q00sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUhsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBaUR6QztJQUFELDRCQUFDO0NBakRELEFBaURDLENBakRrRCxlQUFLLEdBaUR2RDtrQkFqRG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRyYXZlbEF1dG9OZXh0THZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsQXV0b05leHRMdlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBjYW5BdXRvTmV4dExldmVsID0gZmFsc2U7XG4gIHRyaWdnZXJlZEF1dG8gPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUcmF2ZWxBdXRvTmV4dEx2XCI7XG4gIGdldCBkZWxheVRpbWUoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGVsYXlUaW1lKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogNjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgdGhpcy5jYW5BdXRvTmV4dExldmVsID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyZWRBdXRvID0gZmFsc2U7XG4gICAgY2MuaXNWYWxpZCh0LmlucykgJiYgdC5pbnMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQuaW5zKSAmJiByLmNhbkF1dG9OZXh0TGV2ZWwgJiYgIXIudHJpZ2dlcmVkQXV0bykge1xuICAgICAgICByLnRyaWdnZXJlZEF1dG8gPSB0cnVlO1xuICAgICAgICB0Lmlucy5vbkJ0bk5leHRDbGljaygpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuZGVsYXlUaW1lKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UTFdpblZ3X3BvcE5leHRWaWV3KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbixcbiAgICAgIGEgPSBudWxsICE9PSAobyA9IG51bGwgPT09IChyID0gdC5hcmdzWzBdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmhhc0JveFJld2FyZCkgJiYgdm9pZCAwICE9PSBvICYmIG8sXG4gICAgICB1ID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAoaSA9IHQuYXJnc1swXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5oYXNUYXNrUmV3YXJkKSAmJiB2b2lkIDAgIT09IG4gJiYgbjtcbiAgICB0aGlzLmNhbkF1dG9OZXh0TGV2ZWwgPSAhYSAmJiAhdTtcbiAgICBlKCk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8gPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclszXTtcbiAgICBpZiAoXCJiZWZvcmVJbnRlckFkXCIgPT09IChudWxsID09IG8gPyB2b2lkIDAgOiBvLmFkVGltZVR5cGUpKSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJlZEF1dG8pIHtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJlZEF1dG8gPSBmYWxzZTtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=