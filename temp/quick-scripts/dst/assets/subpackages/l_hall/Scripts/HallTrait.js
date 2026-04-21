
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hall/Scripts/HallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7b3eUd5DZJDpZmBrFPO0vH', 'HallTrait');
// subpackages/l_hall/Scripts/HallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallTrait = /** @class */ (function (_super) {
    __extends(HallTrait, _super);
    function HallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallTrait.prototype.isGuidePass = function () {
        var t, e, o = UserModel_1.default.getInstance(), r = null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 1;
        return o.getTotalGames() >= r;
    };
    HallTrait.prototype.onLoginM_enterGame = function (t, e) {
        var o, r = this;
        if (null === (o = this.traitData) || void 0 === o ? void 0 : o.isGuideColdStartBack) {
            var n = mj.getClassByName("GuideTrait"), a = UserModel_1.default.getInstance();
            if (n && n.getInstance() && true === n.getInstance().eventEnabled && !a.isGuideFinished() && 1 == a.getTotalGames()) {
                e();
                return;
            }
        }
        if (this.isGuidePass()) {
            DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LoadingToMainPage);
            this.pushController("HallController", {
                isReplace: true
            }, function () {
                r.dispatchEvent(Config_1.HIDELOADING);
            });
            e({
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    HallTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        e();
    };
    HallTrait.traitKey = "Hall";
    HallTrait = __decorate([
        mj.trait,
        mj.class("HallTrait")
    ], HallTrait);
    return HallTrait;
}(Trait_1.default));
exports.default = HallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGwvU2NyaXB0cy9IYWxsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFzRDtBQUN0RCxnRUFBMkQ7QUFDM0Qsb0VBQW9GO0FBQ3BGLHNFQUFpRTtBQUdqRTtJQUF1Qyw2QkFBSztJQUE1Qzs7SUFzQ0EsQ0FBQztJQXBDQywwQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0JBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ILE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0NBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFO1lBQ25GLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQ3JDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNuSCxDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLCtCQUFlLENBQUMsR0FBRyxDQUFDLDZCQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUNwQyxTQUFTLEVBQUUsSUFBSTthQUNoQixFQUFFO2dCQUNELENBQUMsQ0FBQyxhQUFhLENBQUMsb0JBQVcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHVDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFwQ00sa0JBQVEsR0FBRyxNQUFNLENBQUM7SUFETixTQUFTO1FBRjdCLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7T0FDRCxTQUFTLENBc0M3QjtJQUFELGdCQUFDO0NBdENELEFBc0NDLENBdENzQyxlQUFLLEdBc0MzQztrQkF0Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBISURFTE9BRElORyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBEb3RHYW1lUGFnZVNob3csIEVQYWdlU2hvd1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZVBhZ2VTaG93JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhbGxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGlzR3VpZGVQYXNzKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIG8gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHIgPSBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubGV2ZWxMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDE7XG4gICAgcmV0dXJuIG8uZ2V0VG90YWxHYW1lcygpID49IHI7XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIgPSB0aGlzO1xuICAgIGlmIChudWxsID09PSAobyA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmlzR3VpZGVDb2xkU3RhcnRCYWNrKSB7XG4gICAgICB2YXIgbiA9IG1qLmdldENsYXNzQnlOYW1lKFwiR3VpZGVUcmFpdFwiKSxcbiAgICAgICAgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKG4gJiYgbi5nZXRJbnN0YW5jZSgpICYmIHRydWUgPT09IG4uZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgIWEuaXNHdWlkZUZpbmlzaGVkKCkgJiYgMSA9PSBhLmdldFRvdGFsR2FtZXMoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNHdWlkZVBhc3MoKSkge1xuICAgICAgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxvYWRpbmdUb01haW5QYWdlKTtcbiAgICAgIHRoaXMucHVzaENvbnRyb2xsZXIoXCJIYWxsQ29udHJvbGxlclwiLCB7XG4gICAgICAgIGlzUmVwbGFjZTogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByLmRpc3BhdGNoRXZlbnQoSElERUxPQURJTkcpO1xuICAgICAgfSk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uVUlTZXREbGdfYWRqdXN0UEgodCwgZSkge1xuICAgIGUoKTtcbiAgfVxufSJdfQ==