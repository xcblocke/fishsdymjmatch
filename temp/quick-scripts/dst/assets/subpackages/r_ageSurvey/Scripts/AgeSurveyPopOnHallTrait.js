
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyPopOnHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa7d5UEII1Par+o6QviSTuo', 'AgeSurveyPopOnHallTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyPopOnHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var AgeSurveyManager_1 = require("./AgeSurveyManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyPopOnHallTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyPopOnHallTrait, _super);
    function AgeSurveyPopOnHallTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minGameCount = 5;
        return _this;
    }
    AgeSurveyPopOnHallTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._minGameCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.minGameCount) && void 0 !== r ? r : 5;
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurvey_showOnGuide = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurvey_showOnLoading = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSrvMgr_isNeedChkGuide = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: false,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onHallVw_onPopView = function (t, e) {
        this.checkAndShowSurvey(function () {
            e();
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurveyCtl_viewDidLoad = function (t, e) {
        var r, o;
        e();
        var i = null !== (o = null === (r = t.ins.args) || void 0 === r ? void 0 : r.surveyIndex) && void 0 !== o ? o : 0;
        AgeSurveyModel_1.default.getInstance().setClosed(i, true);
    };
    AgeSurveyPopOnHallTrait.prototype.checkAndShowSurvey = function (t) {
        var e, r, o = AgeSurveyModel_1.default.getInstance();
        if (!o.isCompleted(0) && !o.isClosed(0)) {
            if (((null === (r = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.normalData) || void 0 === r ? void 0 : r.getLevelId()) || 0) < this._minGameCount) {
                t(false);
                return;
            }
        }
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(0, function () {
            t(true);
        }) || t(false);
    };
    AgeSurveyPopOnHallTrait.traitKey = "AgeSurveyPopOnHall";
    AgeSurveyPopOnHallTrait.nextTimeOut = -1;
    AgeSurveyPopOnHallTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyPopOnHallTrait")
    ], AgeSurveyPopOnHallTrait);
    return AgeSurveyPopOnHallTrait;
}(Trait_1.default));
exports.default = AgeSurveyPopOnHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVBvcE9uSGFsbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLG1EQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEO1FBQUEscUVBcURDO1FBcERDLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQW9EcEIsQ0FBQztJQWpEQyx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZJLENBQUM7SUFDRCx5REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDREQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNERBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xILHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNULE9BQU87YUFDUjtTQUNGO1FBQ0QsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO1lBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBbERNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFDaEMsbUNBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUhMLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FxRDNDO0lBQUQsOEJBQUM7Q0FyREQsQUFxREMsQ0FyRG9ELGVBQUssR0FxRHpEO2tCQXJEb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQWdlU3VydmV5TW9kZWwgZnJvbSAnLi9BZ2VTdXJ2ZXlNb2RlbCc7XG5pbXBvcnQgQWdlU3VydmV5TWFuYWdlciBmcm9tICcuL0FnZVN1cnZleU1hbmFnZXInO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBZ2VTdXJ2ZXlQb3BPbkhhbGxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlU3VydmV5UG9wT25IYWxsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9taW5HYW1lQ291bnQgPSA1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFnZVN1cnZleVBvcE9uSGFsbFwiO1xuICBzdGF0aWMgbmV4dFRpbWVPdXQgPSAtMTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21pbkdhbWVDb3VudCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubWluR2FtZUNvdW50KSAmJiB2b2lkIDAgIT09IHIgPyByIDogNTtcbiAgfVxuICBvbkFnZVN1cnZleV9zaG93T25HdWlkZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25BZ2VTdXJ2ZXlfc2hvd09uTG9hZGluZyh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25BZ2VTcnZNZ3JfaXNOZWVkQ2hrR3VpZGUodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbkhhbGxWd19vblBvcFZpZXcodCwgZSkge1xuICAgIHRoaXMuY2hlY2tBbmRTaG93U3VydmV5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGUoKTtcbiAgICB9KTtcbiAgfVxuICBvbkFnZVN1cnZleUN0bF92aWV3RGlkTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIsIG87XG4gICAgZSgpO1xuICAgIHZhciBpID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHQuaW5zLmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuc3VydmV5SW5kZXgpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAwO1xuICAgIEFnZVN1cnZleU1vZGVsLmdldEluc3RhbmNlKCkuc2V0Q2xvc2VkKGksIHRydWUpO1xuICB9XG4gIGNoZWNrQW5kU2hvd1N1cnZleSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbyA9IEFnZVN1cnZleU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCFvLmlzQ29tcGxldGVkKDApICYmICFvLmlzQ2xvc2VkKDApKSB7XG4gICAgICBpZiAoKChudWxsID09PSAociA9IG51bGwgPT09IChlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubm9ybWFsRGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRMZXZlbElkKCkpIHx8IDApIDwgdGhpcy5fbWluR2FtZUNvdW50KSB7XG4gICAgICAgIHQoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIEFnZVN1cnZleU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cnlTaG93TmV4dFN1cnZleSgwLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0KHRydWUpO1xuICAgIH0pIHx8IHQoZmFsc2UpO1xuICB9XG59Il19