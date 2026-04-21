
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/view/DailySignClassicTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b14ddmVeoVBDqaGrcMI/6eI', 'DailySignClassicTrait');
// subpackages/r_dailySignClassic/Scripts/view/DailySignClassicTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../../Scripts/framework/trait/TraitManager");
var DailySignClassicModel_1 = require("../model/DailySignClassicModel");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var HallSignBtn_1 = require("./HallSignBtn");
var GameEvent_1 = require("../../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var DailySignClassicTrait = /** @class */ (function (_super) {
    __extends(DailySignClassicTrait, _super);
    function DailySignClassicTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hallParentNode = null;
        _this._hallSignBtnInstance = null;
        _this._isSignButtonCreated = false;
        return _this;
    }
    DailySignClassicTrait_1 = DailySignClassicTrait;
    DailySignClassicTrait.prototype.onLoad = function () {
        var e, i, o, n;
        _super.prototype.onLoad.call(this);
        var a = DailySignClassicModel_1.default.getInstance(), s = (null === (e = this._traitData) || void 0 === e ? void 0 : e.rewards) || [];
        s.length > 0 && a.setWeeklyRewardsFromConfig(s);
        var r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.longTermRewards) || [];
        r.length > 0 && a.setLongTermRewardsFromConfig(r);
        var c = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockLevel;
        void 0 !== c && (a.getConfig().unlockLevel = c);
        var d = null === (n = this._traitData) || void 0 === n ? void 0 : n.maxLongTermDays;
        void 0 !== d && (a.getConfig().maxLongTermDays = d);
        mj.EventManager.on("DAILY_SIGN_VIEW_CLOSED", this.onSignViewClosed, this);
    };
    DailySignClassicTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        e();
        this.updateSettingRedDot();
    };
    DailySignClassicTrait.prototype.onHallVw_initBtns = function (t, e) {
        var i;
        this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
        this.canShowSignButton() && this.createHallButton(this._hallParentNode);
        e();
    };
    DailySignClassicTrait.prototype.onHallCtl_initRes = function (t, e) {
        t.ins.addPreloadRes("Prefab", "r_dailySignClassic:" + HallSignBtn_1.default.getUrl());
        e();
    };
    DailySignClassicTrait.prototype.onHallVw_updateUI = function (t, e) {
        var i, o = this.canShowSignButton();
        this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
        o && !this._isSignButtonCreated && this._hallParentNode && this.createHallButton(this._hallParentNode);
        this._hallSignBtnInstance && this.updateHallButtonShow();
        this.updateSettingRedDot();
        e();
    };
    DailySignClassicTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.showSignPopView()
        });
    };
    DailySignClassicTrait.prototype.showSignPopView = function () {
        var t = DailySignClassicModel_1.default.getInstance();
        this.updateSettingRedDot();
        if (!t.isUnlocked())
            return false;
        if (t.checkTodaySigned())
            return false;
        if (t.hasAutoPopedToday())
            return false;
        t.markAutoPopedToday();
        t.markSignViewOpened();
        this.updateSettingRedDot();
        ControllerManager_1.default.getInstance().pushViewByController("DailySignClassicController");
        return true;
    };
    DailySignClassicTrait.prototype.canShowSignButton = function () {
        return true;
    };
    DailySignClassicTrait.prototype.createHallButton = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            this._isSignButtonCreated = true;
            HallSignBtn_1.default.createUI().then(function (i) {
                if (cc.isValid(i) && cc.isValid(t)) {
                    t.addChild(i);
                    e._hallSignBtnInstance = i.getComponent(HallSignBtn_1.default);
                    e.updateHallButtonShow();
                }
            }).catch(function (t) {
                e._isSignButtonCreated = false;
                console.error("[" + DailySignClassicTrait_1.traitKey + "] 游戏内创建签到按钮失败:" + ((null == t ? void 0 : t.message) || "HallSignBtn按钮加载失败"));
            });
        }
    };
    DailySignClassicTrait.prototype.updateHallButtonShow = function () {
        if (cc.isValid(this._hallSignBtnInstance)) {
            this._hallSignBtnInstance.updateLock();
            this.updateRedDot();
        }
    };
    DailySignClassicTrait.prototype.updateRedDot = function () {
        cc.isValid(this._hallSignBtnInstance) && this._hallSignBtnInstance.checkRedDot();
    };
    DailySignClassicTrait.prototype.getUnlockLevel = function () {
        return DailySignClassicModel_1.default.getInstance().getConfig().unlockLevel;
    };
    DailySignClassicTrait.prototype.onSignViewClosed = function () {
        this.updateRedDot();
        this.updateSettingRedDot();
    };
    DailySignClassicTrait.prototype.updateSettingRedDot = function () {
        var t = DailySignClassicModel_1.default.getInstance();
        if (t.isUnlocked() && !t.hasOpenedSignView()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.DailySignClassic);
        }
        else {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.DailySignClassic);
        }
    };
    DailySignClassicTrait.prototype.onHDailyBtn_onLoad = function (t, e) {
        e();
    };
    DailySignClassicTrait.prototype.onMGBtnBackRP_hasRedDot = function (t, e) {
        var i = DailySignClassicModel_1.default.getInstance();
        if (i.isUnlocked() && !i.hasOpenedSignView()) {
            e({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    var DailySignClassicTrait_1;
    DailySignClassicTrait.traitKey = "DailySignClassic";
    __decorate([
        mj.traitEvent("DSClassic_showPopVw")
    ], DailySignClassicTrait.prototype, "showSignPopView", null);
    __decorate([
        mj.traitEvent("DSClassic_canShowBtn")
    ], DailySignClassicTrait.prototype, "canShowSignButton", null);
    DailySignClassicTrait = DailySignClassicTrait_1 = __decorate([
        mj.trait,
        mj.class("DailySignClassicTrait")
    ], DailySignClassicTrait);
    return DailySignClassicTrait;
}(Trait_1.default));
exports.default = DailySignClassicTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy92aWV3L0RhaWx5U2lnbkNsYXNzaWNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELGlGQUEyRjtBQUMzRix3RUFBbUU7QUFDbkUsNkZBQXdGO0FBQ3hGLDZDQUF3QztBQUN4Qyw4RUFBOEU7QUFDOUUsMkZBQXdGO0FBR3hGO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBdUhDO1FBdEhDLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QiwwQkFBb0IsR0FBRyxLQUFLLENBQUM7O0lBb0gvQixDQUFDOzhCQXZIb0IscUJBQXFCO0lBS3hDLHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsK0JBQXFCLENBQUMsV0FBVyxFQUFFLEVBQ3pDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMs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dkhELEFBdUhDLENBdkhrRCxlQUFLLEdBdUh2RDtrQkF2SG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgRGFpbHlTaWduQ2xhc3NpY01vZGVsIGZyb20gJy4uL21vZGVsL0RhaWx5U2lnbkNsYXNzaWNNb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgSGFsbFNpZ25CdG4gZnJvbSAnLi9IYWxsU2lnbkJ0bic7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVSZWREb3RUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGFpbHlTaWduQ2xhc3NpY1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25DbGFzc2ljVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9oYWxsUGFyZW50Tm9kZSA9IG51bGw7XG4gIF9oYWxsU2lnbkJ0bkluc3RhbmNlID0gbnVsbDtcbiAgX2lzU2lnbkJ1dHRvbkNyZWF0ZWQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYWlseVNpZ25DbGFzc2ljXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgaSwgbywgbjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgYSA9IERhaWx5U2lnbkNsYXNzaWNNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgcyA9IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5yZXdhcmRzKSB8fCBbXTtcbiAgICBzLmxlbmd0aCA+IDAgJiYgYS5zZXRXZWVrbHlSZXdhcmRzRnJvbUNvbmZpZyhzKTtcbiAgICB2YXIgciA9IChudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5sb25nVGVybVJld2FyZHMpIHx8IFtdO1xuICAgIHIubGVuZ3RoID4gMCAmJiBhLnNldExvbmdUZXJtUmV3YXJkc0Zyb21Db25maWcocik7XG4gICAgdmFyIGMgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby51bmxvY2tMZXZlbDtcbiAgICB2b2lkIDAgIT09IGMgJiYgKGEuZ2V0Q29uZmlnKCkudW5sb2NrTGV2ZWwgPSBjKTtcbiAgICB2YXIgZCA9IG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLm1heExvbmdUZXJtRGF5cztcbiAgICB2b2lkIDAgIT09IGQgJiYgKGEuZ2V0Q29uZmlnKCkubWF4TG9uZ1Rlcm1EYXlzID0gZCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLm9uKFwiREFJTFlfU0lHTl9WSUVXX0NMT1NFRFwiLCB0aGlzLm9uU2lnblZpZXdDbG9zZWQsIHRoaXMpO1xuICB9XG4gIG9uRW50QW5pRmlCaHZfc3RhcnQodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdSZWREb3QoKTtcbiAgfVxuICBvbkhhbGxWd19pbml0QnRucyh0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgdGhpcy5faGFsbFBhcmVudE5vZGUgPSBudWxsID09PSAoaSA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLm5vZGU7XG4gICAgdGhpcy5jYW5TaG93U2lnbkJ1dHRvbigpICYmIHRoaXMuY3JlYXRlSGFsbEJ1dHRvbih0aGlzLl9oYWxsUGFyZW50Tm9kZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbEN0bF9pbml0UmVzKHQsIGUpIHtcbiAgICB0Lmlucy5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFwicl9kYWlseVNpZ25DbGFzc2ljOlwiICsgSGFsbFNpZ25CdG4uZ2V0VXJsKCkpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgdmFyIGksXG4gICAgICBvID0gdGhpcy5jYW5TaG93U2lnbkJ1dHRvbigpO1xuICAgIHRoaXMuX2hhbGxQYXJlbnROb2RlID0gbnVsbCA9PT0gKGkgPSB0LmlucykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5ub2RlO1xuICAgIG8gJiYgIXRoaXMuX2lzU2lnbkJ1dHRvbkNyZWF0ZWQgJiYgdGhpcy5faGFsbFBhcmVudE5vZGUgJiYgdGhpcy5jcmVhdGVIYWxsQnV0dG9uKHRoaXMuX2hhbGxQYXJlbnROb2RlKTtcbiAgICB0aGlzLl9oYWxsU2lnbkJ0bkluc3RhbmNlICYmIHRoaXMudXBkYXRlSGFsbEJ1dHRvblNob3coKTtcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdSZWREb3QoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsVndfb25Qb3BWaWV3KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRoaXMuc2hvd1NpZ25Qb3BWaWV3KClcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRTQ2xhc3NpY19zaG93UG9wVndcIilcbiAgc2hvd1NpZ25Qb3BWaWV3KCkge1xuICAgIHZhciB0ID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy51cGRhdGVTZXR0aW5nUmVkRG90KCk7XG4gICAgaWYgKCF0LmlzVW5sb2NrZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0LmNoZWNrVG9kYXlTaWduZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0Lmhhc0F1dG9Qb3BlZFRvZGF5KCkpIHJldHVybiBmYWxzZTtcbiAgICB0Lm1hcmtBdXRvUG9wZWRUb2RheSgpO1xuICAgIHQubWFya1NpZ25WaWV3T3BlbmVkKCk7XG4gICAgdGhpcy51cGRhdGVTZXR0aW5nUmVkRG90KCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5U2lnbkNsYXNzaWNDb250cm9sbGVyXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRFNDbGFzc2ljX2NhblNob3dCdG5cIilcbiAgY2FuU2hvd1NpZ25CdXR0b24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY3JlYXRlSGFsbEJ1dHRvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB0aGlzLl9pc1NpZ25CdXR0b25DcmVhdGVkID0gdHJ1ZTtcbiAgICAgIEhhbGxTaWduQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChpKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgdC5hZGRDaGlsZChpKTtcbiAgICAgICAgICBlLl9oYWxsU2lnbkJ0bkluc3RhbmNlID0gaS5nZXRDb21wb25lbnQoSGFsbFNpZ25CdG4pO1xuICAgICAgICAgIGUudXBkYXRlSGFsbEJ1dHRvblNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZS5faXNTaWduQnV0dG9uQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgRGFpbHlTaWduQ2xhc3NpY1RyYWl0LnRyYWl0S2V5ICsgXCJdIOa4uOaIj+WGheWIm+W7uuetvuWIsOaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxTaWduQnRu5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVIYWxsQnV0dG9uU2hvdygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9oYWxsU2lnbkJ0bkluc3RhbmNlKSkge1xuICAgICAgdGhpcy5faGFsbFNpZ25CdG5JbnN0YW5jZS51cGRhdGVMb2NrKCk7XG4gICAgICB0aGlzLnVwZGF0ZVJlZERvdCgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVSZWREb3QoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9oYWxsU2lnbkJ0bkluc3RhbmNlKSAmJiB0aGlzLl9oYWxsU2lnbkJ0bkluc3RhbmNlLmNoZWNrUmVkRG90KCk7XG4gIH1cbiAgZ2V0VW5sb2NrTGV2ZWwoKSB7XG4gICAgcmV0dXJuIERhaWx5U2lnbkNsYXNzaWNNb2RlbC5nZXRJbnN0YW5jZSgpLmdldENvbmZpZygpLnVubG9ja0xldmVsO1xuICB9XG4gIG9uU2lnblZpZXdDbG9zZWQoKSB7XG4gICAgdGhpcy51cGRhdGVSZWREb3QoKTtcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdSZWREb3QoKTtcbiAgfVxuICB1cGRhdGVTZXR0aW5nUmVkRG90KCkge1xuICAgIHZhciB0ID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQuaXNVbmxvY2tlZCgpICYmICF0Lmhhc09wZW5lZFNpZ25WaWV3KCkpIHtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuUmVkRG90X2FkZE5vdGlmeSwgRVJlZERvdFR5cGUuRGFpbHlTaWduQ2xhc3NpYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5LCBFUmVkRG90VHlwZS5EYWlseVNpZ25DbGFzc2ljKTtcbiAgICB9XG4gIH1cbiAgb25IRGFpbHlCdG5fb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gIH1cbiAgb25NR0J0bkJhY2tSUF9oYXNSZWREb3QodCwgZSkge1xuICAgIHZhciBpID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKGkuaXNVbmxvY2tlZCgpICYmICFpLmhhc09wZW5lZFNpZ25WaWV3KCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IHRydWUsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=