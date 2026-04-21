"use strict";
cc._RF.push(module, '70ce7ICrdlIXIGjgWIBjO8x', 'HardLevelBannerTrait');
// subpackages/r_hardLevelBanner/Scripts/HardLevelBannerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var DailyChallengeGameData_1 = require("../../../Scripts/core/simulator/data/DailyChallengeGameData");
var HardLevelBannerView_1 = require("./HardLevelBannerView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var HardLevelBannerTrait = /** @class */ (function (_super) {
    __extends(HardLevelBannerTrait, _super);
    function HardLevelBannerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_hardLevelBanner:prefabs/HardLevelBanner"];
        _this._bannerTexts = [];
        return _this;
    }
    HardLevelBannerTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initBannerTexts();
    };
    HardLevelBannerTrait.prototype.getBannerDuration = function () {
        return 2;
    };
    HardLevelBannerTrait.prototype.getPercentRangeType1 = function () {
        return [40, 70];
    };
    HardLevelBannerTrait.prototype.getPercentRangeType2 = function () {
        return [40, 70];
    };
    HardLevelBannerTrait.prototype.getPercentRangeType3 = function () {
        return [40, 70];
    };
    HardLevelBannerTrait.prototype.getPercentRangeType4 = function () {
        return [30, 60];
    };
    HardLevelBannerTrait.prototype.initBannerTexts = function () {
        this.localData || (this.localData = {
            normal: null,
            dailyChallenge: null
        });
        this._bannerTexts = [{
                key: "Beat_Des_1",
                percentRange: this.getPercentRangeType1()
            }, {
                key: "Beat_Des_2",
                percentRange: this.getPercentRangeType2()
            }, {
                key: "Beat_Des_3",
                percentRange: this.getPercentRangeType3()
            }, {
                key: "Beat_Des_4",
                percentRange: this.getPercentRangeType4()
            }];
    };
    HardLevelBannerTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var n = e.ins;
        n && n.addPreloadRes && n.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    HardLevelBannerTrait.prototype.onEntAniFiBhv_start = function (e, t) {
        var n;
        if (this.hasFullScreenPopup())
            t();
        else if (this.shouldShowBanner()) {
            this.updateCacheIfNeeded();
            var r = e.ins, a = null === (n = null == r ? void 0 : r.context) || void 0 === n ? void 0 : n.gameView;
            if (a && cc.isValid(a.node)) {
                t();
                this.showBanner(a);
            }
            else
                t();
        }
        else
            t();
    };
    HardLevelBannerTrait.prototype.hasFullScreenPopup = function () {
        var e, t = ControllerManager_1.default.getInstance(), n = t.getTopSceneController();
        if ((null === (e = null == n ? void 0 : n.subControllers) || void 0 === e ? void 0 : e.length) > 0)
            return true;
        var r = t.getTopViewControllerIncludingAlerts();
        return !(!r || r === n);
    };
    HardLevelBannerTrait.prototype.getCurrentLevelInfo = function () {
        var e, t = UserModel_1.default.getInstance(), n = t.getCurrentGameType(), r = 0;
        if (n === GameTypeEnums_1.MjGameType.Normal) {
            var a = t.getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal);
            r = (null === (e = null == a ? void 0 : a.getLevelId) || void 0 === e ? void 0 : e.call(a)) || 0;
        }
        else if (n === GameTypeEnums_1.MjGameType.DailyChallenge) {
            var o = DailyChallengeGameData_1.default.getInstance().getDailyChallengeTimestamp();
            r = parseInt(o.replace(/-/g, ""), 10) || 0;
        }
        return {
            levelId: r,
            gameType: n
        };
    };
    HardLevelBannerTrait.prototype.updateCacheIfNeeded = function () {
        var e = this.getCurrentLevelInfo(), t = e.levelId, n = e.gameType === GameTypeEnums_1.MjGameType.Normal ? "normal" : "dailyChallenge", r = this.localData[n];
        if (!r || r.levelId !== t) {
            var a = Math.floor(Math.random() * this._bannerTexts.length), o = this._bannerTexts[a], l = __read(o.percentRange, 2), c = l[0], p = l[1], u = Math.floor(Math.random() * (p - c + 1)) + c;
            this.localData[n] = {
                levelId: t,
                percent: u,
                textIndex: a
            };
            this.localData = this.localData;
        }
    };
    HardLevelBannerTrait.prototype.shouldShowBanner = function () {
        var e, t, n = UserModel_1.default.getInstance(), r = n.getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal) {
            var a = n.getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), o = (null === (e = null == a ? void 0 : a.getLevelId) || void 0 === e ? void 0 : e.call(a)) || 0;
            if (null === (t = this.localData) || void 0 === t ? void 0 : t.hasTriggeredHardLevel)
                return true;
            var i = ExtractTool_1.default.getInstance().isHardUI(o), l = ExtractTool_1.default.getInstance().isExpertUI(o);
            if (i || l) {
                this.markHardLevelTriggered();
                return true;
            }
            return false;
        }
        if (r === GameTypeEnums_1.MjGameType.DailyChallenge) {
            return DailyChallengeGameData_1.default.getInstance().getDailyChallengeTimestamp() === this.getTodayString();
        }
        return false;
    };
    HardLevelBannerTrait.prototype.markHardLevelTriggered = function () {
        if (this.localData) {
            this.localData.hasTriggeredHardLevel = true;
        }
        else {
            this.localData = {
                normal: null,
                dailyChallenge: null,
                hasTriggeredHardLevel: true
            };
        }
        this.localData = this.localData;
    };
    HardLevelBannerTrait.prototype.getTodayString = function () {
        var e = new Date();
        return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
    };
    HardLevelBannerTrait.prototype.showBanner = function (e) {
        var t, n = this;
        if (this.localData) {
            var r = UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal ? "normal" : "dailyChallenge", a = this.localData[r];
            if (a) {
                var o = null !== (t = a.textIndex) && void 0 !== t ? t : 0, i = this._bannerTexts[o], l = a.percent;
                HardLevelBannerView_1.default.createUI("prefabs/HardLevelBanner", "r_hardLevelBanner").then(function (t) {
                    if (cc.isValid(t) && cc.isValid(e) && cc.isValid(e.node)) {
                        t.parent = e.node;
                        var r = t.getComponent(HardLevelBannerView_1.default);
                        r && r.showBanner(i.key, l, n.getBannerDuration());
                    }
                });
            }
        }
    };
    HardLevelBannerTrait.traitKey = "HardLevelBanner";
    HardLevelBannerTrait = __decorate([
        mj.trait,
        mj.class("HardLevelBannerTrait")
    ], HardLevelBannerTrait);
    return HardLevelBannerTrait;
}(Trait_1.default));
exports.default = HardLevelBannerTrait;

cc._RF.pop();