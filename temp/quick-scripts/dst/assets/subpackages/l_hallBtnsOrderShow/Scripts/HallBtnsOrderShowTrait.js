
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallBtnsOrderShow/Scripts/HallBtnsOrderShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91b89a3vypBfY98NZ2tzPMz', 'HallBtnsOrderShowTrait');
// subpackages/l_hallBtnsOrderShow/Scripts/HallBtnsOrderShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var l = {
    Task: "task",
    Rank: "rank",
    Travel: "travel",
    DailyChallenge: "dailyChallenge",
    DailySign: "dailySign"
};
var HallBtnsOrderShowTrait = /** @class */ (function (_super) {
    __extends(HallBtnsOrderShowTrait, _super);
    function HallBtnsOrderShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.featureTypeList = [];
        return _this;
    }
    Object.defineProperty(HallBtnsOrderShowTrait.prototype, "orderDataList", {
        get: function () {
            this.localData || (this.localData = {
                orderDataList: []
            });
            this.localData.orderDataList || (this.localData.orderDataList = []);
            return this.localData.orderDataList;
        },
        enumerable: false,
        configurable: true
    });
    HallBtnsOrderShowTrait.prototype.getLevelFromTrait = function (e, t, r) {
        var n, a = mj.getClassByName(e);
        if (!a)
            return null;
        var i = a.getInstance();
        if (!i || false === i.eventEnabled)
            return null;
        var o = null === (n = i[t]) || void 0 === n ? void 0 : n.call(i);
        return null == o ? null : r ? r(o) : o;
    };
    HallBtnsOrderShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initFeatureType();
    };
    HallBtnsOrderShowTrait.prototype.initFeatureType = function () {
        this.addFeatureType(l.DailySign);
        this.addFeatureType(l.Task);
        this.addFeatureType(l.Rank);
        this.addFeatureType(l.Travel);
        this.addFeatureType(l.DailyChallenge);
    };
    HallBtnsOrderShowTrait.prototype.syncFeatureTypeToOrderData = function () {
        var e, t, r = function r(e) {
            if (n.orderDataList.find(function (t) {
                return t.featureType === e;
            }))
                return "continue";
            var t = {
                featureType: e,
                unlockLevel: null,
                isShowed: false,
                isUnlocked: false
            };
            n.orderDataList.push(t);
        }, n = this;
        try {
            for (var a = __values(this.featureTypeList), i = a.next(); !i.done; i = a.next())
                r(i.value);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    HallBtnsOrderShowTrait.prototype.initOrderData = function () {
        var e, t;
        this.syncFeatureTypeToOrderData();
        var r = this.getCurrentLevel();
        try {
            for (var n = __values(this.orderDataList), a = n.next(); !a.done; a = n.next()) {
                var i = a.value;
                if (!i.isShowed) {
                    var l = this.getUnlockLevel(i.featureType);
                    if (null === l || l <= 0)
                        continue;
                    i.unlockLevel = l;
                }
                null !== i.unlockLevel && this.isLevelReached(i.featureType, r, i.unlockLevel) && (i.isUnlocked || (i.isUnlocked = true));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.sortOrderDataList();
    };
    HallBtnsOrderShowTrait.prototype.onHallCtl_viewDidLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.onWinVw_onLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.onFailVw_onLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.getUnlockLevel = function (e) {
        switch (e) {
            case l.Task:
                return this.getLevelFromTrait("TaskTrait", "getOpenCondition", function (e) {
                    return null == e ? void 0 : e.level;
                });
            case l.Rank:
                return this.getLevelFromTrait("RankTrait", "getLimitLevel");
            case l.Travel:
                return this.getLevelFromTrait("JourneyTrait", "getLimitLevel");
            case l.DailyChallenge:
                return this.getLevelFromTrait("DailyLockTrait", "getLimitLevel");
            case l.DailySign:
                return this.getLevelFromTrait("DailySignClassicTrait", "getUnlockLevel");
            default:
                return null;
        }
    };
    HallBtnsOrderShowTrait.prototype.addFeatureType = function (e) {
        this.featureTypeList.includes(e) || this.featureTypeList.push(e);
    };
    HallBtnsOrderShowTrait.prototype.changeIconShowed = function (e) {
        var t = this.shouldShowFeature(e);
        if (t) {
            var r = this.orderDataList.find(function (t) {
                return t.featureType === e;
            });
            if (r) {
                var n = false;
                if (!r.isShowed) {
                    r.isShowed = true;
                    n = true;
                }
                if (!r.isUnlocked && null !== r.unlockLevel) {
                    var a = this.getCurrentLevel();
                    if (this.isLevelReached(r.featureType, a, r.unlockLevel)) {
                        r.isUnlocked = true;
                        n = true;
                    }
                }
                n && (this.localData.orderDataList = this.orderDataList);
            }
        }
        return t;
    };
    HallBtnsOrderShowTrait.prototype.sortOrderDataList = function () {
        this.orderDataList.sort(function (e, t) {
            return null === e.unlockLevel && null === t.unlockLevel ? 0 : null === e.unlockLevel ? 1 : null === t.unlockLevel ? -1 : e.unlockLevel - t.unlockLevel;
        });
        this.localData.orderDataList = this.orderDataList;
    };
    HallBtnsOrderShowTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getMainGameData().getLevelId();
    };
    HallBtnsOrderShowTrait.prototype.isLevelReached = function (e, t, r) {
        return e === l.Task || e === l.Rank ? t > r : t >= r;
    };
    HallBtnsOrderShowTrait.prototype.isFeatureUnlocked = function (e) {
        var t = this.orderDataList.find(function (t) {
            return t.featureType === e;
        });
        if (!t || null === t.unlockLevel)
            return true;
        var r = this.getCurrentLevel();
        if (this.isLevelReached(e, r, t.unlockLevel))
            return true;
        if (t.isShowed)
            return true;
        for (var n = -1, a = -1, i = -1, o = 0; o < this.orderDataList.length; o++) {
            var l = this.orderDataList[o];
            l.featureType === e && (n = o);
            l.isShowed && o > a && (a = o);
            null !== l.unlockLevel && this.isLevelReached(l.featureType, r, l.unlockLevel) && o > i && (i = o);
        }
        if (a > n)
            return true;
        if (i >= n)
            return true;
        var u = Math.max(a, i);
        if (u + 1 === n) {
            if (-1 === u)
                return true;
            var s = this.orderDataList[u];
            return !(!(null !== s.unlockLevel && this.isLevelReached(s.featureType, r, s.unlockLevel)) && !s.isUnlocked);
        }
        return false;
    };
    HallBtnsOrderShowTrait.prototype.shouldShowFeature = function (e) {
        0 === this.orderDataList.length && this.featureTypeList.length > 0 && this.initOrderData();
        var t = this.orderDataList.find(function (t) {
            return t.featureType === e;
        });
        if (!t)
            return true;
        if (null === t.unlockLevel) {
            var r = this.getUnlockLevel(e);
            if (!(null !== r && r > 0))
                return true;
            t.unlockLevel = r;
            this.sortOrderDataList();
        }
        return !!this.isFeatureUnlocked(e);
    };
    HallBtnsOrderShowTrait.prototype.onTaskTrait_canShowTaskBtn = function (e, t) {
        if (this.shouldShowFeature(l.Task)) {
            this.changeIconShowed(l.Task);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onRankTrait_checkLv = function (e, t) {
        if (this.shouldShowFeature(l.Rank)) {
            this.changeIconShowed(l.Rank);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onDSClassic_canShowBtn = function (e, t) {
        if (this.shouldShowFeature(l.DailySign)) {
            this.changeIconShowed(l.DailySign);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onJourney_CreateBtn = function (e, t) {
        if (this.shouldShowFeature(l.Travel)) {
            this.changeIconShowed(l.Travel);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
    };
    HallBtnsOrderShowTrait.prototype.onDaily_checkHDBtn = function (e, t) {
        if (this.shouldShowFeature(l.DailyChallenge)) {
            this.changeIconShowed(l.DailyChallenge);
            t();
        }
        else {
            e.args[0] = false;
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    HallBtnsOrderShowTrait.prototype.onDaily_isOpenDaily = function (e, t) {
        if (this.shouldShowFeature(l.DailyChallenge)) {
            this.changeIconShowed(l.DailyChallenge);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.traitKey = "HallBtnsOrderShow";
    __decorate([
        mj.traitEvent("HBtnsShow_initOrderData")
    ], HallBtnsOrderShowTrait.prototype, "initOrderData", null);
    __decorate([
        mj.traitEvent("HBtnsShow_getUnlockLevel")
    ], HallBtnsOrderShowTrait.prototype, "getUnlockLevel", null);
    __decorate([
        mj.traitEvent("HBtnsShow_addFeature")
    ], HallBtnsOrderShowTrait.prototype, "addFeatureType", null);
    __decorate([
        mj.traitEvent("HBtnsShow_chgIconShow")
    ], HallBtnsOrderShowTrait.prototype, "changeIconShowed", null);
    HallBtnsOrderShowTrait = __decorate([
        mj.trait,
        mj.class("HallBtnsOrderShowTrait")
    ], HallBtnsOrderShowTrait);
    return HallBtnsOrderShowTrait;
}(Trait_1.default));
exports.default = HallBtnsOrderShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxCdG5zT3JkZXJTaG93L1NjcmlwdHMvSGFsbEJ0bnNPcmRlclNob3dUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRztJQUNOLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7QUFHRjtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQW1RQztRQWxRQyxxQkFBZSxHQUFHLEVBQUUsQ0FBQzs7SUFrUXZCLENBQUM7SUFoUUMsc0JBQUksaURBQWE7YUFBakI7WUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDbEMsYUFBYSxFQUFFLEVBQUU7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0Qsa0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsWUFBWTtZQUFFLE9BQU8sSUFBSSxD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U0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhRTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBMkR0QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7K0RBMkJ4QztJQWNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztnRUFrQnpDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2dFQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztrRUF3QnRDO0lBbkprQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBbVExQztJQUFELDZCQUFDO0NBblFELEFBbVFDLENBblFtRCxlQUFLLEdBbVF4RDtrQkFuUW9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xudmFyIGwgPSB7XG4gIFRhc2s6IFwidGFza1wiLFxuICBSYW5rOiBcInJhbmtcIixcbiAgVHJhdmVsOiBcInRyYXZlbFwiLFxuICBEYWlseUNoYWxsZW5nZTogXCJkYWlseUNoYWxsZW5nZVwiLFxuICBEYWlseVNpZ246IFwiZGFpbHlTaWduXCJcbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxCdG5zT3JkZXJTaG93VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxCdG5zT3JkZXJTaG93VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGZlYXR1cmVUeXBlTGlzdCA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhbGxCdG5zT3JkZXJTaG93XCI7XG4gIGdldCBvcmRlckRhdGFMaXN0KCkge1xuICAgIHRoaXMubG9jYWxEYXRhIHx8ICh0aGlzLmxvY2FsRGF0YSA9IHtcbiAgICAgIG9yZGVyRGF0YUxpc3Q6IFtdXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEub3JkZXJEYXRhTGlzdCB8fCAodGhpcy5sb2NhbERhdGEub3JkZXJEYXRhTGlzdCA9IFtdKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEub3JkZXJEYXRhTGlzdDtcbiAgfVxuICBnZXRMZXZlbEZyb21UcmFpdChlLCB0LCByKSB7XG4gICAgdmFyIG4sXG4gICAgICBhID0gbWouZ2V0Q2xhc3NCeU5hbWUoZSk7XG4gICAgaWYgKCFhKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaSA9IGEuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoIWkgfHwgZmFsc2UgPT09IGkuZXZlbnRFbmFibGVkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IG51bGwgPT09IChuID0gaVt0XSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5jYWxsKGkpO1xuICAgIHJldHVybiBudWxsID09IG8gPyBudWxsIDogciA/IHIobykgOiBvO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRGZWF0dXJlVHlwZSgpO1xuICB9XG4gIGluaXRGZWF0dXJlVHlwZSgpIHtcbiAgICB0aGlzLmFkZEZlYXR1cmVUeXBlKGwuRGFpbHlTaWduKTtcbiAgICB0aGlzLmFkZEZlYXR1cmVUeXBlKGwuVGFzayk7XG4gICAgdGhpcy5hZGRGZWF0dXJlVHlwZShsLlJhbmspO1xuICAgIHRoaXMuYWRkRmVhdHVyZVR5cGUobC5UcmF2ZWwpO1xuICAgIHRoaXMuYWRkRmVhdHVyZVR5cGUobC5EYWlseUNoYWxsZW5nZSk7XG4gIH1cbiAgc3luY0ZlYXR1cmVUeXBlVG9PcmRlckRhdGEoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgciA9IGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICBpZiAobi5vcmRlckRhdGFMaXN0LmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5mZWF0dXJlVHlwZSA9PT0gZTtcbiAgICAgICAgfSkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBlLFxuICAgICAgICAgIHVubG9ja0xldmVsOiBudWxsLFxuICAgICAgICAgIGlzU2hvd2VkOiBmYWxzZSxcbiAgICAgICAgICBpc1VubG9ja2VkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBuLm9yZGVyRGF0YUxpc3QucHVzaCh0KTtcbiAgICAgIH0sXG4gICAgICBuID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKHRoaXMuZmVhdHVyZVR5cGVMaXN0KSwgaSA9IGEubmV4dCgpOyAhaS5kb25lOyBpID0gYS5uZXh0KCkpIHIoaS52YWx1ZSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAodCA9IGEucmV0dXJuKSAmJiB0LmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIQnRuc1Nob3dfaW5pdE9yZGVyRGF0YVwiKVxuICBpbml0T3JkZXJEYXRhKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRoaXMuc3luY0ZlYXR1cmVUeXBlVG9PcmRlckRhdGEoKTtcbiAgICB2YXIgciA9IHRoaXMuZ2V0Q3VycmVudExldmVsKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLm9yZGVyRGF0YUxpc3QpLCBhID0gbi5uZXh0KCk7ICFhLmRvbmU7IGEgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgaSA9IGEudmFsdWU7XG4gICAgICAgIGlmICghaS5pc1Nob3dlZCkge1xuICAgICAgICAgIHZhciBsID0gdGhpcy5nZXRVbmxvY2tMZXZlbChpLmZlYXR1cmVUeXBlKTtcbiAgICAgICAgICBpZiAobnVsbCA9PT0gbCB8fCBsIDw9IDApIGNvbnRpbnVlO1xuICAgICAgICAgIGkudW5sb2NrTGV2ZWwgPSBsO1xuICAgICAgICB9XG4gICAgICAgIG51bGwgIT09IGkudW5sb2NrTGV2ZWwgJiYgdGhpcy5pc0xldmVsUmVhY2hlZChpLmZlYXR1cmVUeXBlLCByLCBpLnVubG9ja0xldmVsKSAmJiAoaS5pc1VubG9ja2VkIHx8IChpLmlzVW5sb2NrZWQgPSB0cnVlKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAodCA9IG4ucmV0dXJuKSAmJiB0LmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zb3J0T3JkZXJEYXRhTGlzdCgpO1xuICB9XG4gIG9uSGFsbEN0bF92aWV3RGlkTG9hZChlLCB0KSB7XG4gICAgdGhpcy5pbml0T3JkZXJEYXRhKCk7XG4gICAgdCgpO1xuICB9XG4gIG9uV2luVndfb25Mb2FkKGUsIHQpIHtcbiAgICB0aGlzLmluaXRPcmRlckRhdGEoKTtcbiAgICB0KCk7XG4gIH1cbiAgb25GYWlsVndfb25Mb2FkKGUsIHQpIHtcbiAgICB0aGlzLmluaXRPcmRlckRhdGEoKTtcbiAgICB0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIQnRuc1Nob3dfZ2V0VW5sb2NrTGV2ZWxcIilcbiAgZ2V0VW5sb2NrTGV2ZWwoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBsLlRhc2s6XG4gICAgICAgIHJldHVybiB0aGlzLmdldExldmVsRnJvbVRyYWl0KFwiVGFza1RyYWl0XCIsIFwiZ2V0T3BlbkNvbmRpdGlvblwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBudWxsID09IGUgPyB2b2lkIDAgOiBlLmxldmVsO1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgbC5SYW5rOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbEZyb21UcmFpdChcIlJhbmtUcmFpdFwiLCBcImdldExpbWl0TGV2ZWxcIik7XG4gICAgICBjYXNlIGwuVHJhdmVsOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbEZyb21UcmFpdChcIkpvdXJuZXlUcmFpdFwiLCBcImdldExpbWl0TGV2ZWxcIik7XG4gICAgICBjYXNlIGwuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgIHJldHVybiB0aGlzLmdldExldmVsRnJvbVRyYWl0KFwiRGFpbHlMb2NrVHJhaXRcIiwgXCJnZXRMaW1pdExldmVsXCIpO1xuICAgICAgY2FzZSBsLkRhaWx5U2lnbjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWxGcm9tVHJhaXQoXCJEYWlseVNpZ25DbGFzc2ljVHJhaXRcIiwgXCJnZXRVbmxvY2tMZXZlbFwiKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhCdG5zU2hvd19hZGRGZWF0dXJlXCIpXG4gIGFkZEZlYXR1cmVUeXBlKGUpIHtcbiAgICB0aGlzLmZlYXR1cmVUeXBlTGlzdC5pbmNsdWRlcyhlKSB8fCB0aGlzLmZlYXR1cmVUeXBlTGlzdC5wdXNoKGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSEJ0bnNTaG93X2NoZ0ljb25TaG93XCIpXG4gIGNoYW5nZUljb25TaG93ZWQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5zaG91bGRTaG93RmVhdHVyZShlKTtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIHIgPSB0aGlzLm9yZGVyRGF0YUxpc3QuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5mZWF0dXJlVHlwZSA9PT0gZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIG4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFyLmlzU2hvd2VkKSB7XG4gICAgICAgICAgci5pc1Nob3dlZCA9IHRydWU7XG4gICAgICAgICAgbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyLmlzVW5sb2NrZWQgJiYgbnVsbCAhPT0gci51bmxvY2tMZXZlbCkge1xuICAgICAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgICBpZiAodGhpcy5pc0xldmVsUmVhY2hlZChyLmZlYXR1cmVUeXBlLCBhLCByLnVubG9ja0xldmVsKSkge1xuICAgICAgICAgICAgci5pc1VubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuICYmICh0aGlzLmxvY2FsRGF0YS5vcmRlckRhdGFMaXN0ID0gdGhpcy5vcmRlckRhdGFMaXN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgc29ydE9yZGVyRGF0YUxpc3QoKSB7XG4gICAgdGhpcy5vcmRlckRhdGFMaXN0LnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBudWxsID09PSBlLnVubG9ja0xldmVsICYmIG51bGwgPT09IHQudW5sb2NrTGV2ZWwgPyAwIDogbnVsbCA9PT0gZS51bmxvY2tMZXZlbCA/IDEgOiBudWxsID09PSB0LnVubG9ja0xldmVsID8gLTEgOiBlLnVubG9ja0xldmVsIC0gdC51bmxvY2tMZXZlbDtcbiAgICB9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5vcmRlckRhdGFMaXN0ID0gdGhpcy5vcmRlckRhdGFMaXN0O1xuICB9XG4gIGdldEN1cnJlbnRMZXZlbCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpO1xuICB9XG4gIGlzTGV2ZWxSZWFjaGVkKGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZSA9PT0gbC5UYXNrIHx8IGUgPT09IGwuUmFuayA/IHQgPiByIDogdCA+PSByO1xuICB9XG4gIGlzRmVhdHVyZVVubG9ja2VkKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMub3JkZXJEYXRhTGlzdC5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5mZWF0dXJlVHlwZSA9PT0gZTtcbiAgICB9KTtcbiAgICBpZiAoIXQgfHwgbnVsbCA9PT0gdC51bmxvY2tMZXZlbCkgcmV0dXJuIHRydWU7XG4gICAgdmFyIHIgPSB0aGlzLmdldEN1cnJlbnRMZXZlbCgpO1xuICAgIGlmICh0aGlzLmlzTGV2ZWxSZWFjaGVkKGUsIHIsIHQudW5sb2NrTGV2ZWwpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodC5pc1Nob3dlZCkgcmV0dXJuIHRydWU7XG4gICAgZm9yICh2YXIgbiA9IC0xLCBhID0gLTEsIGkgPSAtMSwgbyA9IDA7IG8gPCB0aGlzLm9yZGVyRGF0YUxpc3QubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciBsID0gdGhpcy5vcmRlckRhdGFMaXN0W29dO1xuICAgICAgbC5mZWF0dXJlVHlwZSA9PT0gZSAmJiAobiA9IG8pO1xuICAgICAgbC5pc1Nob3dlZCAmJiBvID4gYSAmJiAoYSA9IG8pO1xuICAgICAgbnVsbCAhPT0gbC51bmxvY2tMZXZlbCAmJiB0aGlzLmlzTGV2ZWxSZWFjaGVkKGwuZmVhdHVyZVR5cGUsIHIsIGwudW5sb2NrTGV2ZWwpICYmIG8gPiBpICYmIChpID0gbyk7XG4gICAgfVxuICAgIGlmIChhID4gbikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGkgPj0gbikgcmV0dXJuIHRydWU7XG4gICAgdmFyIHUgPSBNYXRoLm1heChhLCBpKTtcbiAgICBpZiAodSArIDEgPT09IG4pIHtcbiAgICAgIGlmICgtMSA9PT0gdSkgcmV0dXJuIHRydWU7XG4gICAgICB2YXIgcyA9IHRoaXMub3JkZXJEYXRhTGlzdFt1XTtcbiAgICAgIHJldHVybiAhKCEobnVsbCAhPT0gcy51bmxvY2tMZXZlbCAmJiB0aGlzLmlzTGV2ZWxSZWFjaGVkKHMuZmVhdHVyZVR5cGUsIHIsIHMudW5sb2NrTGV2ZWwpKSAmJiAhcy5pc1VubG9ja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNob3VsZFNob3dGZWF0dXJlKGUpIHtcbiAgICAwID09PSB0aGlzLm9yZGVyRGF0YUxpc3QubGVuZ3RoICYmIHRoaXMuZmVhdHVyZVR5cGVMaXN0Lmxlbmd0aCA+IDAgJiYgdGhpcy5pbml0T3JkZXJEYXRhKCk7XG4gICAgdmFyIHQgPSB0aGlzLm9yZGVyRGF0YUxpc3QuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZmVhdHVyZVR5cGUgPT09IGU7XG4gICAgfSk7XG4gICAgaWYgKCF0KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobnVsbCA9PT0gdC51bmxvY2tMZXZlbCkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldFVubG9ja0xldmVsKGUpO1xuICAgICAgaWYgKCEobnVsbCAhPT0gciAmJiByID4gMCkpIHJldHVybiB0cnVlO1xuICAgICAgdC51bmxvY2tMZXZlbCA9IHI7XG4gICAgICB0aGlzLnNvcnRPcmRlckRhdGFMaXN0KCk7XG4gICAgfVxuICAgIHJldHVybiAhIXRoaXMuaXNGZWF0dXJlVW5sb2NrZWQoZSk7XG4gIH1cbiAgb25UYXNrVHJhaXRfY2FuU2hvd1Rhc2tCdG4oZSwgdCkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dGZWF0dXJlKGwuVGFzaykpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvblNob3dlZChsLlRhc2spO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgb25SYW5rVHJhaXRfY2hlY2tMdihlLCB0KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd0ZlYXR1cmUobC5SYW5rKSkge1xuICAgICAgdGhpcy5jaGFuZ2VJY29uU2hvd2VkKGwuUmFuayk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBvbkRTQ2xhc3NpY19jYW5TaG93QnRuKGUsIHQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93RmVhdHVyZShsLkRhaWx5U2lnbikpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvblNob3dlZChsLkRhaWx5U2lnbik7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBvbkpvdXJuZXlfQ3JlYXRlQnRuKGUsIHQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93RmVhdHVyZShsLlRyYXZlbCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvblNob3dlZChsLlRyYXZlbCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uRGFpbHlfY2hlY2tIREJ0bihlLCB0KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd0ZlYXR1cmUobC5EYWlseUNoYWxsZW5nZSkpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvblNob3dlZChsLkRhaWx5Q2hhbGxlbmdlKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5hcmdzWzBdID0gZmFsc2U7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25EYWlseV9pc09wZW5EYWlseShlLCB0KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd0ZlYXR1cmUobC5EYWlseUNoYWxsZW5nZSkpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvblNob3dlZChsLkRhaWx5Q2hhbGxlbmdlKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgIH0pO1xuICB9XG59Il19