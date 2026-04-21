"use strict";
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