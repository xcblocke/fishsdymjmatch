
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55c37gXXwNLKL7P5FgxgeF6', 'DailyTrait');
// subpackages/l_daily/Scripts/DailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameUnlock_1 = require("../../../Scripts/gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DailyModel_1 = require("./DailyModel");
var DailyTypes_1 = require("./DailyTypes");
var HallDailyBtn_1 = require("./HallDailyBtn");
var DailyTrait = /** @class */ (function (_super) {
    __extends(DailyTrait, _super);
    function DailyTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dailyBtn = null;
        return _this;
    }
    DailyTrait_1 = DailyTrait;
    DailyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "HallCtl_initRes"
            }]);
    };
    DailyTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/daily/HallDailyBtn"]);
    };
    DailyTrait.prototype.onHallVw_initBtns = function (t, e) {
        e();
    };
    DailyTrait.prototype.onHallVw_updateUI = function (t, e) {
        var i;
        this.checkHallDailyButton(this.isOpenDaily(), null === (i = t.ins) || void 0 === i ? void 0 : i.node);
        e();
    };
    DailyTrait.prototype.isOpenDaily = function () {
        var t = DailyModel_1.default.getInstance();
        if (t.isOpen())
            return true;
        if (this.isInstallDayValid() && this.isLevelValid()) {
            t.setOpen(true);
            DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.DailyChallenge);
            return true;
        }
        return false;
    };
    DailyTrait.prototype.isLevelValid = function () {
        var t = NormalGameData_1.default.getInstance().getLevelId(), e = UserModel_1.default.getInstance().getMainGameData();
        e && (t = e.getLevelId());
        return t > this.traitData.levelLimit;
    };
    DailyTrait.prototype.isInstallDayValid = function () {
        UserModel_1.default.getInstance().getInstallTime();
        return UserModel_1.default.getInstance().getGameActiveDays() > this.traitData.installDay;
    };
    DailyTrait.prototype.checkHallDailyButton = function (t, e) {
        t && this.createHallButton(e);
    };
    DailyTrait.prototype.createHallButton = function (t) {
        var e = this;
        if (this._dailyBtn && this._dailyBtn.parent && cc.isValid(this._dailyBtn)) {
            this.updateBtnShow(this._dailyBtn);
        }
        else {
            cc.isValid(t) && HallDailyBtn_1.default.createUI().then(function (i) {
                e._dailyBtn = i;
                cc.isValid(i) && cc.isValid(t) && t.addChild(i);
                e.updateBtnShow(e._dailyBtn);
            }).catch(function (t) {
                console.error("[" + DailyTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallDailyBtn按钮加载失败"));
            });
        }
    };
    DailyTrait.prototype.updateBtnShow = function () {
        var t = this._dailyBtn.getComponent(HallDailyBtn_1.default);
        t && t.updateDay();
    };
    DailyTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        DailyModel_1.default.getInstance().saveDailyData();
        e();
    };
    DailyTrait.prototype.onDCWinVw_onNextClick = function (t, e) {
        var i = DailyModel_1.default.getInstance().getSelectedData();
        DailyModel_1.default.getInstance().showDoneDay = {
            id: null == i ? void 0 : i.id,
            day: null == i ? void 0 : i.day,
            timestamp: null == i ? void 0 : i.timestamp
        };
        ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
            isReplace: true,
            isShowAction: false,
            specifiedDate: true,
            success: true,
            isReuse: true,
            id: null == i ? void 0 : i.id,
            day: null == i ? void 0 : i.day,
            showReward: true
        });
        if ((null == i ? void 0 : i.preState) != DailyTypes_1.DailyStatus.Completed && DailyModel_1.default.getInstance().isMonthCompleted(null == i ? void 0 : i.id)) {
            var o = DailyModel_1.default.getInstance().getMonthRewardItemId(null == i ? void 0 : i.id);
            ControllerManager_1.default.getInstance().pushViewByController("DailyRewardController", {
                itemId: o,
                isGetReward: true,
                dailyId: null == i ? void 0 : i.id
            });
        }
        e();
    };
    DailyTrait.prototype.onUISetBtnBack_onBtnClk = function (t, e) {
        e();
    };
    var DailyTrait_1;
    DailyTrait.traitKey = "Daily";
    __decorate([
        mj.traitEvent("Daily_isOpenDaily")
    ], DailyTrait.prototype, "isOpenDaily", null);
    __decorate([
        mj.traitEvent("Daily_checkHDBtn")
    ], DailyTrait.prototype, "checkHallDailyButton", null);
    __decorate([
        mj.traitEvent("Daily_updateBtnShow")
    ], DailyTrait.prototype, "updateBtnShow", null);
    DailyTrait = DailyTrait_1 = __decorate([
        mj.trait,
        mj.class("DailyTrait")
    ], DailyTrait);
    return DailyTrait;
}(Trait_1.default));
exports.default = DailyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0ZBQWlGO0FBQ2pGLDBGQUFxRjtBQUNyRixnRUFBMkQ7QUFDM0QseUVBQTJGO0FBQzNGLHNFQUFpRTtBQUNqRSwyQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLCtDQUEwQztBQUcxQztJQUF3Qyw4QkFBSztJQUE3QztRQUFBLHFFQW1HQztRQWxHQyxlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWtHbkIsQ0FBQzttQkFuR29CLFVBQVU7SUFHN0IsMkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0Qsc0NBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUMsWUFBWSxDQUFDO09BQ0YsVUFBVSxDQW1HOUI7SUFBRCxpQkFBQztDQW5HRCxBQW1HQyxDQW5HdUMsZUFBSyxHQW1HNUM7a0JBbkdvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRG90R2FtZVVubG9jaywgRUZ1bmNVbmxvY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVVbmxvY2snO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBEYWlseU1vZGVsIGZyb20gJy4vRGFpbHlNb2RlbCc7XG5pbXBvcnQgeyBEYWlseVN0YXR1cyB9IGZyb20gJy4vRGFpbHlUeXBlcyc7XG5pbXBvcnQgSGFsbERhaWx5QnRuIGZyb20gJy4vSGFsbERhaWx5QnRuJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGFpbHlUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2RhaWx5QnRuID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYWlseVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJIYWxsQ3RsX2luaXRSZXNcIlxuICAgIH1dKTtcbiAgfVxuICBvbkhhbGxDdGxfaW5pdFJlcyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHQuaW5zLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgW1wibWFpblJlczpwcmVmYWJzL2RhaWx5L0hhbGxEYWlseUJ0blwiXSk7XG4gIH1cbiAgb25IYWxsVndfaW5pdEJ0bnModCwgZSkge1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgdGhpcy5jaGVja0hhbGxEYWlseUJ1dHRvbih0aGlzLmlzT3BlbkRhaWx5KCksIG51bGwgPT09IChpID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubm9kZSk7XG4gICAgZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGFpbHlfaXNPcGVuRGFpbHlcIilcbiAgaXNPcGVuRGFpbHkoKSB7XG4gICAgdmFyIHQgPSBEYWlseU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQuaXNPcGVuKCkpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLmlzSW5zdGFsbERheVZhbGlkKCkgJiYgdGhpcy5pc0xldmVsVmFsaWQoKSkge1xuICAgICAgdC5zZXRPcGVuKHRydWUpO1xuICAgICAgRG90R2FtZVVubG9jay5kb3RCeVR5cGUoRUZ1bmNVbmxvY2tUeXBlLkRhaWx5Q2hhbGxlbmdlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNMZXZlbFZhbGlkKCkge1xuICAgIHZhciB0ID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCksXG4gICAgICBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCk7XG4gICAgZSAmJiAodCA9IGUuZ2V0TGV2ZWxJZCgpKTtcbiAgICByZXR1cm4gdCA+IHRoaXMudHJhaXREYXRhLmxldmVsTGltaXQ7XG4gIH1cbiAgaXNJbnN0YWxsRGF5VmFsaWQoKSB7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SW5zdGFsbFRpbWUoKTtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZUFjdGl2ZURheXMoKSA+IHRoaXMudHJhaXREYXRhLmluc3RhbGxEYXk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseV9jaGVja0hEQnRuXCIpXG4gIGNoZWNrSGFsbERhaWx5QnV0dG9uKHQsIGUpIHtcbiAgICB0ICYmIHRoaXMuY3JlYXRlSGFsbEJ1dHRvbihlKTtcbiAgfVxuICBjcmVhdGVIYWxsQnV0dG9uKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2RhaWx5QnRuICYmIHRoaXMuX2RhaWx5QnRuLnBhcmVudCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2RhaWx5QnRuKSkge1xuICAgICAgdGhpcy51cGRhdGVCdG5TaG93KHRoaXMuX2RhaWx5QnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2MuaXNWYWxpZCh0KSAmJiBIYWxsRGFpbHlCdG4uY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGUuX2RhaWx5QnRuID0gaTtcbiAgICAgICAgY2MuaXNWYWxpZChpKSAmJiBjYy5pc1ZhbGlkKHQpICYmIHQuYWRkQ2hpbGQoaSk7XG4gICAgICAgIGUudXBkYXRlQnRuU2hvdyhlLl9kYWlseUJ0bik7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgRGFpbHlUcmFpdC50cmFpdEtleSArIFwiXSDmuLjmiI/lhoXliJvlu7rmjInpkq7lpLHotKU6XCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgXCJIYWxsRGFpbHlCdG7mjInpkq7liqDovb3lpLHotKVcIikpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGFpbHlfdXBkYXRlQnRuU2hvd1wiKVxuICB1cGRhdGVCdG5TaG93KCkge1xuICAgIHZhciB0ID0gdGhpcy5fZGFpbHlCdG4uZ2V0Q29tcG9uZW50KEhhbGxEYWlseUJ0bik7XG4gICAgdCAmJiB0LnVwZGF0ZURheSgpO1xuICB9XG4gIG9uRENXaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKS5zYXZlRGFpbHlEYXRhKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uRENXaW5Wd19vbk5leHRDbGljayh0LCBlKSB7XG4gICAgdmFyIGkgPSBEYWlseU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0U2VsZWN0ZWREYXRhKCk7XG4gICAgRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLnNob3dEb25lRGF5ID0ge1xuICAgICAgaWQ6IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuaWQsXG4gICAgICBkYXk6IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZGF5LFxuICAgICAgdGltZXN0YW1wOiBudWxsID09IGkgPyB2b2lkIDAgOiBpLnRpbWVzdGFtcFxuICAgIH07XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5Q29udHJvbGxlclwiLCB7XG4gICAgICBpc1JlcGxhY2U6IHRydWUsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgc3BlY2lmaWVkRGF0ZTogdHJ1ZSxcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgaWQ6IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuaWQsXG4gICAgICBkYXk6IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZGF5LFxuICAgICAgc2hvd1Jld2FyZDogdHJ1ZVxuICAgIH0pO1xuICAgIGlmICgobnVsbCA9PSBpID8gdm9pZCAwIDogaS5wcmVTdGF0ZSkgIT0gRGFpbHlTdGF0dXMuQ29tcGxldGVkICYmIERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKS5pc01vbnRoQ29tcGxldGVkKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuaWQpKSB7XG4gICAgICB2YXIgbyA9IERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNb250aFJld2FyZEl0ZW1JZChudWxsID09IGkgPyB2b2lkIDAgOiBpLmlkKTtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseVJld2FyZENvbnRyb2xsZXJcIiwge1xuICAgICAgICBpdGVtSWQ6IG8sXG4gICAgICAgIGlzR2V0UmV3YXJkOiB0cnVlLFxuICAgICAgICBkYWlseUlkOiBudWxsID09IGkgPyB2b2lkIDAgOiBpLmlkXG4gICAgICB9KTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXRCdG5CYWNrX29uQnRuQ2xrKHQsIGUpIHtcbiAgICBlKCk7XG4gIH1cbn0iXX0=