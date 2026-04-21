
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_hardLevelBanner/Scripts/HardLevelBannerTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2hhcmRMZXZlbEJhbm5lci9TY3JpcHRzL0hhcmRMZXZlbEJhbm5lclRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSxpRkFBNEU7QUFDNUUsc0dBQWlHO0FBQ2pHLDZEQUF3RDtBQUN4RCwwRkFBcUY7QUFHckY7SUFBa0Qsd0NBQUs7SUFBdkQ7UUFBQSxxRUFrS0M7UUFqS0MsZ0JBQVUsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDM0Qsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBZ0twQixDQUFDO0lBOUpDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbURBQW9CLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsbURBQW9CLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsbURBQW9CLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsbURBQW9CLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsOENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2xDLE1BQU0sRUFBRSxJQUFJO1lBQ1osY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsSUFB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QU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4RCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQW1CLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQTlKTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBSGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FrS3hDO0lBQUQsMkJBQUM7Q0FsS0QsQUFrS0MsQ0FsS2lELGVBQUssR0FrS3REO2tCQWxLb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCBEYWlseUNoYWxsZW5nZUdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9EYWlseUNoYWxsZW5nZUdhbWVEYXRhJztcbmltcG9ydCBIYXJkTGV2ZWxCYW5uZXJWaWV3IGZyb20gJy4vSGFyZExldmVsQmFubmVyVmlldyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhcmRMZXZlbEJhbm5lclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkTGV2ZWxCYW5uZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgcmVxdWlyZVJlcyA9IFtcInJfaGFyZExldmVsQmFubmVyOnByZWZhYnMvSGFyZExldmVsQmFubmVyXCJdO1xuICBfYmFubmVyVGV4dHMgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYXJkTGV2ZWxCYW5uZXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdEJhbm5lclRleHRzKCk7XG4gIH1cbiAgZ2V0QmFubmVyRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgZ2V0UGVyY2VudFJhbmdlVHlwZTEoKSB7XG4gICAgcmV0dXJuIFs0MCwgNzBdO1xuICB9XG4gIGdldFBlcmNlbnRSYW5nZVR5cGUyKCkge1xuICAgIHJldHVybiBbNDAsIDcwXTtcbiAgfVxuICBnZXRQZXJjZW50UmFuZ2VUeXBlMygpIHtcbiAgICByZXR1cm4gWzQwLCA3MF07XG4gIH1cbiAgZ2V0UGVyY2VudFJhbmdlVHlwZTQoKSB7XG4gICAgcmV0dXJuIFszMCwgNjBdO1xuICB9XG4gIGluaXRCYW5uZXJUZXh0cygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YSB8fCAodGhpcy5sb2NhbERhdGEgPSB7XG4gICAgICBub3JtYWw6IG51bGwsXG4gICAgICBkYWlseUNoYWxsZW5nZTogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMuX2Jhbm5lclRleHRzID0gW3tcbiAgICAgIGtleTogXCJCZWF0X0Rlc18xXCIsXG4gICAgICBwZXJjZW50UmFuZ2U6IHRoaXMuZ2V0UGVyY2VudFJhbmdlVHlwZTEoKVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJCZWF0X0Rlc18yXCIsXG4gICAgICBwZXJjZW50UmFuZ2U6IHRoaXMuZ2V0UGVyY2VudFJhbmdlVHlwZTIoKVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJCZWF0X0Rlc18zXCIsXG4gICAgICBwZXJjZW50UmFuZ2U6IHRoaXMuZ2V0UGVyY2VudFJhbmdlVHlwZTMoKVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJCZWF0X0Rlc180XCIsXG4gICAgICBwZXJjZW50UmFuZ2U6IHRoaXMuZ2V0UGVyY2VudFJhbmdlVHlwZTQoKVxuICAgIH1dO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIHZhciBuID0gZS5pbnM7XG4gICAgbiAmJiBuLmFkZFByZWxvYWRSZXMgJiYgbi5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIHRoaXMucmVxdWlyZVJlcyk7XG4gICAgdCgpO1xuICB9XG4gIG9uRW50QW5pRmlCaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciBuO1xuICAgIGlmICh0aGlzLmhhc0Z1bGxTY3JlZW5Qb3B1cCgpKSB0KCk7ZWxzZSBpZiAodGhpcy5zaG91bGRTaG93QmFubmVyKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2FjaGVJZk5lZWRlZCgpO1xuICAgICAgdmFyIHIgPSBlLmlucyxcbiAgICAgICAgYSA9IG51bGwgPT09IChuID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5jb250ZXh0KSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdhbWVWaWV3O1xuICAgICAgaWYgKGEgJiYgY2MuaXNWYWxpZChhLm5vZGUpKSB7XG4gICAgICAgIHQoKTtcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKGEpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGhhc0Z1bGxTY3JlZW5Qb3B1cCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLFxuICAgICAgbiA9IHQuZ2V0VG9wU2NlbmVDb250cm9sbGVyKCk7XG4gICAgaWYgKChudWxsID09PSAoZSA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uc3ViQ29udHJvbGxlcnMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGVuZ3RoKSA+IDApIHJldHVybiB0cnVlO1xuICAgIHZhciByID0gdC5nZXRUb3BWaWV3Q29udHJvbGxlckluY2x1ZGluZ0FsZXJ0cygpO1xuICAgIHJldHVybiAhKCFyIHx8IHIgPT09IG4pO1xuICB9XG4gIGdldEN1cnJlbnRMZXZlbEluZm8oKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBuID0gdC5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIHIgPSAwO1xuICAgIGlmIChuID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdmFyIGEgPSB0LmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCk7XG4gICAgICByID0gKG51bGwgPT09IChlID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRMZXZlbElkKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwoYSkpIHx8IDA7XG4gICAgfSBlbHNlIGlmIChuID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICB2YXIgbyA9IERhaWx5Q2hhbGxlbmdlR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXREYWlseUNoYWxsZW5nZVRpbWVzdGFtcCgpO1xuICAgICAgciA9IHBhcnNlSW50KG8ucmVwbGFjZSgvLS9nLCBcIlwiKSwgMTApIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsZXZlbElkOiByLFxuICAgICAgZ2FtZVR5cGU6IG5cbiAgICB9O1xuICB9XG4gIHVwZGF0ZUNhY2hlSWZOZWVkZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEN1cnJlbnRMZXZlbEluZm8oKSxcbiAgICAgIHQgPSBlLmxldmVsSWQsXG4gICAgICBuID0gZS5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgPyBcIm5vcm1hbFwiIDogXCJkYWlseUNoYWxsZW5nZVwiLFxuICAgICAgciA9IHRoaXMubG9jYWxEYXRhW25dO1xuICAgIGlmICghciB8fCByLmxldmVsSWQgIT09IHQpIHtcbiAgICAgIHZhciBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fYmFubmVyVGV4dHMubGVuZ3RoKSxcbiAgICAgICAgbyA9IHRoaXMuX2Jhbm5lclRleHRzW2FdLFxuICAgICAgICBsID0gX19yZWFkKG8ucGVyY2VudFJhbmdlLCAyKSxcbiAgICAgICAgYyA9IGxbMF0sXG4gICAgICAgIHAgPSBsWzFdLFxuICAgICAgICB1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHAgLSBjICsgMSkpICsgYztcbiAgICAgIHRoaXMubG9jYWxEYXRhW25dID0ge1xuICAgICAgICBsZXZlbElkOiB0LFxuICAgICAgICBwZXJjZW50OiB1LFxuICAgICAgICB0ZXh0SW5kZXg6IGFcbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhO1xuICAgIH1cbiAgfVxuICBzaG91bGRTaG93QmFubmVyKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHIgPSBuLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmIChyID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdmFyIGEgPSBuLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCksXG4gICAgICAgIG8gPSAobnVsbCA9PT0gKGUgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmdldExldmVsSWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChhKSkgfHwgMDtcbiAgICAgIGlmIChudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lmhhc1RyaWdnZXJlZEhhcmRMZXZlbCkgcmV0dXJuIHRydWU7XG4gICAgICB2YXIgaSA9IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNIYXJkVUkobyksXG4gICAgICAgIGwgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRXhwZXJ0VUkobyk7XG4gICAgICBpZiAoaSB8fCBsKSB7XG4gICAgICAgIHRoaXMubWFya0hhcmRMZXZlbFRyaWdnZXJlZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHIgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgIHJldHVybiBEYWlseUNoYWxsZW5nZUdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAoKSA9PT0gdGhpcy5nZXRUb2RheVN0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbWFya0hhcmRMZXZlbFRyaWdnZXJlZCgpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmhhc1RyaWdnZXJlZEhhcmRMZXZlbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhID0ge1xuICAgICAgICBub3JtYWw6IG51bGwsXG4gICAgICAgIGRhaWx5Q2hhbGxlbmdlOiBudWxsLFxuICAgICAgICBoYXNUcmlnZ2VyZWRIYXJkTGV2ZWw6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gIH1cbiAgZ2V0VG9kYXlTdHJpbmcoKSB7XG4gICAgdmFyIGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIFN0cmluZyhlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIikgKyBcIi1cIiArIFN0cmluZyhlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIHNob3dCYW5uZXIoZSkge1xuICAgIHZhciB0LFxuICAgICAgbiA9IHRoaXM7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhKSB7XG4gICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLk5vcm1hbCA/IFwibm9ybWFsXCIgOiBcImRhaWx5Q2hhbGxlbmdlXCIsXG4gICAgICAgIGEgPSB0aGlzLmxvY2FsRGF0YVtyXTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHZhciBvID0gbnVsbCAhPT0gKHQgPSBhLnRleHRJbmRleCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAsXG4gICAgICAgICAgaSA9IHRoaXMuX2Jhbm5lclRleHRzW29dLFxuICAgICAgICAgIGwgPSBhLnBlcmNlbnQ7XG4gICAgICAgIEhhcmRMZXZlbEJhbm5lclZpZXcuY3JlYXRlVUkoXCJwcmVmYWJzL0hhcmRMZXZlbEJhbm5lclwiLCBcInJfaGFyZExldmVsQmFubmVyXCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSAmJiBjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQoZS5ub2RlKSkge1xuICAgICAgICAgICAgdC5wYXJlbnQgPSBlLm5vZGU7XG4gICAgICAgICAgICB2YXIgciA9IHQuZ2V0Q29tcG9uZW50KEhhcmRMZXZlbEJhbm5lclZpZXcpO1xuICAgICAgICAgICAgciAmJiByLnNob3dCYW5uZXIoaS5rZXksIGwsIG4uZ2V0QmFubmVyRHVyYXRpb24oKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=