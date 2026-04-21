"use strict";
cc._RF.push(module, 'b5802q69ulEwoo9tIH3maTZ', 'RatingDialogTrait');
// subpackages/l_ratingDialog/Scripts/RatingDialogTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RatingDialogTrait = /** @class */ (function (_super) {
    __extends(RatingDialogTrait, _super);
    function RatingDialogTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxShowCount = 4;
        _this._nextCallback = null;
        return _this;
    }
    RatingDialogTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2WinEvent();
        this.initValue();
        this.updateActiveDays();
    };
    RatingDialogTrait.prototype.registerTile2WinEvent = function () {
        this.registerEvent([{
                event: "Tile2WinVw_popNextView",
                priority: 30
            }]);
    };
    RatingDialogTrait.prototype.initValue = function () {
        var t, e, o, i;
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            this.localData.totalShowCount = 0;
            this.localData.closeCount = 0;
            this.localData.lastRatingStars = 0;
            this.localData.ratingCount = 0;
            this.localData.lastShowActiveDays = 0;
            this.localData.activeDays = 0;
            this.localData.lastActiveDate = 0;
            this.localData.hasSubmittedHighRating = false;
            this.localData.hasReachedMaxShows = false;
            this.localData.lowStarFirstSubmitShowCount = 0;
            this.localData.totalShowCountDynamicModify = 0;
            this.localData.nextShowIntervalDaysDynamicModify = 0;
        }
        this._config = {
            firstShowRequiredLevels: null !== (t = this._traitData.firstShowRequiredLevels) && void 0 !== t ? t : 9,
            justCloseShowCount: null !== (e = this._traitData.justCloseShowCount) && void 0 !== e ? e : 3,
            lowStarNextShowDays: null !== (o = this._traitData.lowStarNextShowDays) && void 0 !== o ? o : 0,
            lowStarSubmitIndex: null !== (i = this._traitData.lowStarSubmitIndex) && void 0 !== i ? i : 0
        };
        this.localData.totalShowCount > this.localData.closeCount + this.localData.ratingCount && (this.localData.closeCount = this.localData.totalShowCount - this.localData.ratingCount);
    };
    RatingDialogTrait.prototype.updateActiveDays = function () {
        var t = Date.now(), e = this.localData.lastActiveDate;
        if (DateManager_1.default.getInstance().isNewDay(e, t)) {
            this.localData.activeDays++;
            this.localData.lastActiveDate = t;
        }
    };
    RatingDialogTrait.prototype.checkAndShowRatingDialog = function (t, e, o) {
        if (e === void 0) { e = false; }
        if (o === void 0) { o = {}; }
        if (this.shouldShowDialog()) {
            o.hasRating = true;
            this._nextCallback = t;
            this.showRatingDialog(e);
            this.recordDialogShown();
        }
        else
            t && t();
    };
    RatingDialogTrait.prototype.shouldShowDialog = function () {
        this.updateActiveDays();
        if (!this.isNetworkAvailable())
            return false;
        if (this.localData.hasSubmittedHighRating)
            return false;
        if (this.localData.hasReachedMaxShows)
            return false;
        if (this.localData.totalShowCount >= this._maxShowCount) {
            this.localData.hasReachedMaxShows = true;
            return false;
        }
        if (0 === this.localData.totalShowCount) {
            return this.getCurrentLevelsPassed() >= this._config.firstShowRequiredLevels;
        }
        return this.checkSubsequentShowConditions();
    };
    RatingDialogTrait.prototype.getCurrentLevelsPassed = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() || 0;
        return Math.max(0, t - 1);
    };
    RatingDialogTrait.prototype.checkSubsequentShowConditions = function () {
        var t = this.localData.activeDays - this.localData.lastShowActiveDays - 1;
        if (this.localData.totalShowCountDynamicModify > 0 && this.localData.totalShowCount >= this.localData.totalShowCountDynamicModify)
            return false;
        if (this.localData.lastRatingStars > 0 && this.localData.lastRatingStars <= 3) {
            if (this.localData.lowStarFirstSubmitShowCount > 0 && this.localData.totalShowCount >= 2) {
                this.localData.hasReachedMaxShows = true;
                return false;
            }
            if (t < this.getLowStarInterval())
                return false;
        }
        if (this.localData.closeCount > 0) {
            if (this.localData.closeCount >= 4) {
                this.localData.hasReachedMaxShows = true;
                return false;
            }
            var e = 0;
            switch (this.localData.closeCount) {
                case 1:
                    e = 2;
                    break;
                case 2:
                    e = 3;
                    break;
                case 3:
                    e = 4;
                    break;
                default:
                    e = 4;
            }
            if (t < e)
                return false;
        }
        return true;
    };
    RatingDialogTrait.prototype.recordDialogShown = function () {
        this.localData.totalShowCount++;
        this.localData.lastShowActiveDays = this.localData.activeDays;
    };
    RatingDialogTrait.prototype.isNetworkAvailable = function () {
        if (cc.sys.isNative) {
            return 0 !== cc.sys.getNetworkType();
        }
        return navigator.onLine;
    };
    RatingDialogTrait.prototype.showRatingDialog = function (t) {
        if (t === void 0) { t = false; }
        this.pushController("UIRatingDialogController", {
            bgStyle: null,
            isShowAction: false,
            isGlobal: t
        });
    };
    RatingDialogTrait.prototype.onUserRating = function (t) {
        this.localData.lastRatingStars = t;
        this.localData.ratingCount++;
        if (t >= 4) {
            this.localData.hasSubmittedHighRating = true;
            this.callGotoStore(t);
        }
        else {
            0 === this.localData.lowStarFirstSubmitShowCount && (this.localData.lowStarFirstSubmitShowCount = this.localData.totalShowCount);
            this._config.lowStarSubmitIndex > 0 && this.localData.totalShowCount == this._config.lowStarSubmitIndex && (this.localData.nextShowIntervalDaysDynamicModify = this._config.lowStarNextShowDays);
        }
    };
    RatingDialogTrait.prototype.callGotoStore = function () {
        mj.sdk.comment("1");
    };
    RatingDialogTrait.prototype.onUserClose = function () {
        this.localData.closeCount++;
        this._config.justCloseShowCount > 0 && 1 == this.localData.closeCount && (this.localData.totalShowCountDynamicModify = this.localData.totalShowCount + this._config.justCloseShowCount);
    };
    RatingDialogTrait.prototype.isSlideRatingEnabled = function () {
        return "1" == this._traitData.slideRatingEnabled;
    };
    RatingDialogTrait.prototype.shouldBlockOtherPopup = function () {
        return this.shouldShowDialog();
    };
    RatingDialogTrait.prototype.getLowStarInterval = function () {
        var t = 4;
        this.localData.nextShowIntervalDaysDynamicModify > 0 && (t = this.localData.nextShowIntervalDaysDynamicModify);
        return t;
    };
    RatingDialogTrait.prototype.onWinVw_popNextView = function (t, e) {
        var o, i;
        t.args[0] = t.args[0] || {};
        var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
        this._nextCallback = null;
        this.checkAndShowRatingDialog(function () {
            e();
        }, a, t.args[0]);
    };
    RatingDialogTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        var o, i;
        t.args[0] = t.args[0] || {};
        var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
        this._nextCallback = null;
        this.checkAndShowRatingDialog(function () {
            e();
        }, a, t.args[0]);
    };
    RatingDialogTrait.prototype.onWinVw_showWinVw = function (t, e) {
        e();
        this.checkAndShowRatingDialog();
    };
    RatingDialogTrait.prototype.callNextCallback = function () {
        this._nextCallback && this._nextCallback();
        this._nextCallback = null;
    };
    RatingDialogTrait.traitKey = "RatingDialog";
    RatingDialogTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("RatingDlg_onUserRating")
    ], RatingDialogTrait.prototype, "onUserRating", null);
    __decorate([
        mj.traitEvent("RatingDlg_GotoStore")
    ], RatingDialogTrait.prototype, "callGotoStore", null);
    __decorate([
        mj.traitEvent("RatingDlg_getLowStarIntv")
    ], RatingDialogTrait.prototype, "getLowStarInterval", null);
    RatingDialogTrait = __decorate([
        mj.trait,
        mj.class("RatingDialogTrait")
    ], RatingDialogTrait);
    return RatingDialogTrait;
}(Trait_1.default));
exports.default = RatingDialogTrait;

cc._RF.pop();