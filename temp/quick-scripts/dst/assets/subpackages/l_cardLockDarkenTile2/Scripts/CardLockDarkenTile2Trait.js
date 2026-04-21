
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardLockDarkenTile2/Scripts/CardLockDarkenTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ed5foFMAlKYJpaMu+W6+Wl', 'CardLockDarkenTile2Trait');
// subpackages/l_cardLockDarkenTile2/Scripts/CardLockDarkenTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardLockDarkenEffect_1 = require("../../../Scripts/CardLockDarkenEffect");
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardLockDarkenTile2Trait = /** @class */ (function (_super) {
    __extends(CardLockDarkenTile2Trait, _super);
    function CardLockDarkenTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        _this._shouldShowDarkenCurrentGame = false;
        return _this;
    }
    Object.defineProperty(CardLockDarkenTile2Trait.prototype, "_cfg", {
        get: function () {
            var t;
            return null !== (t = this._traitData) && void 0 !== t ? t : {};
        },
        enumerable: false,
        configurable: true
    });
    CardLockDarkenTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData || (this.localData = {
            lastTile2PlayDate: 0,
            darkLevelId: -1
        });
        if (void 0 === this.localData.darkLevelId) {
            this.localData.darkLevelId = -1;
            this.localData = this.localData;
        }
    };
    CardLockDarkenTile2Trait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this._onEffectInitViewCB.bind(this);
        _t[GameEvent_1.EGameEvent.Effect_StartAutoMerge] = this._onEffectStartAutoMergeCB.bind(this);
        _t[GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd] = this._onShuffleStayEndCB.bind(this);
        return _t;
    };
    CardLockDarkenTile2Trait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var r;
        if (this._isTile2Mode()) {
            var a = t.ins, i = null === (r = null == a ? void 0 : a.getLockHighlightSwitchNode) || void 0 === r ? void 0 : r.call(a);
            i && cc.isValid(i) && (i.active = false);
        }
        e();
    };
    CardLockDarkenTile2Trait.prototype.onUISetDlg_updLckHL = function (t, e) {
        if (this._isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    CardLockDarkenTile2Trait.prototype.onGuide_skip = function (t, e) {
        if (this._isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    CardLockDarkenTile2Trait.prototype.onTile2IptTchEnd_runClr = function (t, e) {
        if (this._isTile2Mode()) {
            var r = t.ins;
            if (r) {
                this._pushDarkenEffect(r, this._shouldShowDarkenCurrentGame, BehaviorsEnum_1.EInsertType.Root);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    CardLockDarkenTile2Trait.prototype._onEffectInitViewCB = function (t) {
        if (this._isTile2Mode()) {
            var e = this._getTile2MainLevel(), r = this._isTodayFirstTile2Game(), a = this._isColdStart;
            this._updatePlayTracking();
            var i = this.localData.darkLevelId === e;
            this._shouldShowDarkenCurrentGame = i || this._computeShouldShow(r, a);
            if (this._shouldShowDarkenCurrentGame && this.localData.darkLevelId !== e) {
                this.localData.darkLevelId = e;
                this.localData = this.localData;
            }
            this._pushDarkenEffect(t, this._shouldShowDarkenCurrentGame, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    CardLockDarkenTile2Trait.prototype._onEffectStartAutoMergeCB = function (t) {
        this._isTile2Mode() && this._pushDarkenEffect(t, false);
    };
    CardLockDarkenTile2Trait.prototype._onShuffleStayEndCB = function (t) {
        if (this._isTile2Mode() && t && t.context) {
            var e = t.context.gameCtr;
            if (e && e._gameSimulator) {
                e._gameSimulator;
                this._shouldShowDarkenCurrentGame && GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
                    isShowAni: false
                });
            }
        }
    };
    CardLockDarkenTile2Trait.prototype._computeShouldShow = function (t, e) {
        var r, a, i = t && this._checkParam(null !== (r = this._cfg.dailyFirst) && void 0 !== r ? r : [1, -1]), o = e && this._checkParam(null !== (a = this._cfg.coldStart) && void 0 !== a ? a : [1, -1]);
        return i || o;
    };
    CardLockDarkenTile2Trait.prototype._checkParam = function (t) {
        var e = __read(t, 2), r = e[0], a = e[1];
        return -1 !== a && (0 === a || (1 === r ? UserModel_1.default.getInstance().getGameActiveDays() >= a : 2 === r && this._getTile2MainLevel() >= a));
    };
    CardLockDarkenTile2Trait.prototype._isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    CardLockDarkenTile2Trait.prototype._isTodayFirstTile2Game = function () {
        var t = this.localData.lastTile2PlayDate;
        return !t || DateManager_1.default.getInstance().isNewDay(t, Date.now());
    };
    CardLockDarkenTile2Trait.prototype._getTile2MainLevel = function () {
        return UserModel_1.default.getInstance().tile2NormalData.getLevelId();
    };
    CardLockDarkenTile2Trait.prototype._updatePlayTracking = function () {
        this.localData.lastTile2PlayDate = Date.now();
        this.localData = this.localData;
        this._isColdStart = false;
    };
    CardLockDarkenTile2Trait.prototype._pushDarkenEffect = function (t, e, r) {
        if (r === void 0) { r = BehaviorsEnum_1.EInsertType.Parallel; }
        t && "function" == typeof t.pushEffect && t.pushEffect(new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isAutoMerge: !e
        }), r);
    };
    CardLockDarkenTile2Trait.traitKey = "CardLockDarkenTile2";
    CardLockDarkenTile2Trait = __decorate([
        mj.trait,
        mj.class("CardLockDarkenTile2Trait")
    ], CardLockDarkenTile2Trait);
    return CardLockDarkenTile2Trait;
}(Trait_1.default));
exports.default = CardLockDarkenTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRMb2NrRGFya2VuVGlsZTIvU2NyaXB0cy9DYXJkTG9ja0RhcmtlblRpbGUyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSwyRUFBMkU7QUFDM0UsbUZBQW1GO0FBQ25GLHdGQUFvRjtBQUNwRiw4RUFBNkU7QUFDN0UsZ0ZBQTJFO0FBQzNFLG9GQUFtRjtBQUNuRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQStIQztRQTlIQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixrQ0FBNEIsR0FBRyxLQUFLLENBQUM7O0lBNkh2QyxDQUFDO0lBM0hDLHNCQUFJLDBDQUFJO2FBQVI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBQ0QseUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDbEMsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO0lB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O2tCQS9Ib0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBDYXJkTG9ja0RhcmtlbkVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ2FyZExvY2tEYXJrZW5FZmZlY3QnO1xuaW1wb3J0IERhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9EYXRlTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRMb2NrRGFya2VuVGlsZTJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZExvY2tEYXJrZW5UaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNDb2xkU3RhcnQgPSB0cnVlO1xuICBfc2hvdWxkU2hvd0RhcmtlbkN1cnJlbnRHYW1lID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZExvY2tEYXJrZW5UaWxlMlwiO1xuICBnZXQgX2NmZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiB7fTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEgfHwgKHRoaXMubG9jYWxEYXRhID0ge1xuICAgICAgbGFzdFRpbGUyUGxheURhdGU6IDAsXG4gICAgICBkYXJrTGV2ZWxJZDogLTFcbiAgICB9KTtcbiAgICBpZiAodm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5kYXJrTGV2ZWxJZCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGFya0xldmVsSWQgPSAtMTtcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgfVxuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRUdhbWVFdmVudC5FZmZlY3RfSW5pdFZpZXddID0gdGhpcy5fb25FZmZlY3RJbml0Vmlld0NCLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5FZmZlY3RfU3RhcnRBdXRvTWVyZ2VdID0gdGhpcy5fb25FZmZlY3RTdGFydEF1dG9NZXJnZUNCLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlU3RheUVuZF0gPSB0aGlzLl9vblNodWZmbGVTdGF5RW5kQ0IuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25VSVNldERsZ19hZGp1c3RQSCh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuX2lzVGlsZTJNb2RlKCkpIHtcbiAgICAgIHZhciBhID0gdC5pbnMsXG4gICAgICAgIGkgPSBudWxsID09PSAociA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuZ2V0TG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY2FsbChhKTtcbiAgICAgIGkgJiYgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0RGxnX3VwZExja0hMKHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25HdWlkZV9za2lwKHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25UaWxlMklwdFRjaEVuZF9ydW5DbHIodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc1RpbGUyTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHQuaW5zO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdGhpcy5fcHVzaERhcmtlbkVmZmVjdChyLCB0aGlzLl9zaG91bGRTaG93RGFya2VuQ3VycmVudEdhbWUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgX29uRWZmZWN0SW5pdFZpZXdDQih0KSB7XG4gICAgaWYgKHRoaXMuX2lzVGlsZTJNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fZ2V0VGlsZTJNYWluTGV2ZWwoKSxcbiAgICAgICAgciA9IHRoaXMuX2lzVG9kYXlGaXJzdFRpbGUyR2FtZSgpLFxuICAgICAgICBhID0gdGhpcy5faXNDb2xkU3RhcnQ7XG4gICAgICB0aGlzLl91cGRhdGVQbGF5VHJhY2tpbmcoKTtcbiAgICAgIHZhciBpID0gdGhpcy5sb2NhbERhdGEuZGFya0xldmVsSWQgPT09IGU7XG4gICAgICB0aGlzLl9zaG91bGRTaG93RGFya2VuQ3VycmVudEdhbWUgPSBpIHx8IHRoaXMuX2NvbXB1dGVTaG91bGRTaG93KHIsIGEpO1xuICAgICAgaWYgKHRoaXMuX3Nob3VsZFNob3dEYXJrZW5DdXJyZW50R2FtZSAmJiB0aGlzLmxvY2FsRGF0YS5kYXJrTGV2ZWxJZCAhPT0gZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5kYXJrTGV2ZWxJZCA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgICB9XG4gICAgICB0aGlzLl9wdXNoRGFya2VuRWZmZWN0KHQsIHRoaXMuX3Nob3VsZFNob3dEYXJrZW5DdXJyZW50R2FtZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgfVxuICB9XG4gIF9vbkVmZmVjdFN0YXJ0QXV0b01lcmdlQ0IodCkge1xuICAgIHRoaXMuX2lzVGlsZTJNb2RlKCkgJiYgdGhpcy5fcHVzaERhcmtlbkVmZmVjdCh0LCBmYWxzZSk7XG4gIH1cbiAgX29uU2h1ZmZsZVN0YXlFbmRDQih0KSB7XG4gICAgaWYgKHRoaXMuX2lzVGlsZTJNb2RlKCkgJiYgdCAmJiB0LmNvbnRleHQpIHtcbiAgICAgIHZhciBlID0gdC5jb250ZXh0LmdhbWVDdHI7XG4gICAgICBpZiAoZSAmJiBlLl9nYW1lU2ltdWxhdG9yKSB7XG4gICAgICAgIGUuX2dhbWVTaW11bGF0b3I7XG4gICAgICAgIHRoaXMuX3Nob3VsZFNob3dEYXJrZW5DdXJyZW50R2FtZSAmJiBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVmcmVzaENhcmRMb2NrRGFya2VuLFxuICAgICAgICAgIGlzU2hvd0FuaTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9jb21wdXRlU2hvdWxkU2hvdyh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBhLFxuICAgICAgaSA9IHQgJiYgdGhpcy5fY2hlY2tQYXJhbShudWxsICE9PSAociA9IHRoaXMuX2NmZy5kYWlseUZpcnN0KSAmJiB2b2lkIDAgIT09IHIgPyByIDogWzEsIC0xXSksXG4gICAgICBvID0gZSAmJiB0aGlzLl9jaGVja1BhcmFtKG51bGwgIT09IChhID0gdGhpcy5fY2ZnLmNvbGRTdGFydCkgJiYgdm9pZCAwICE9PSBhID8gYSA6IFsxLCAtMV0pO1xuICAgIHJldHVybiBpIHx8IG87XG4gIH1cbiAgX2NoZWNrUGFyYW0odCkge1xuICAgIHZhciBlID0gX19yZWFkKHQsIDIpLFxuICAgICAgciA9IGVbMF0sXG4gICAgICBhID0gZVsxXTtcbiAgICByZXR1cm4gLTEgIT09IGEgJiYgKDAgPT09IGEgfHwgKDEgPT09IHIgPyBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQWN0aXZlRGF5cygpID49IGEgOiAyID09PSByICYmIHRoaXMuX2dldFRpbGUyTWFpbkxldmVsKCkgPj0gYSkpO1xuICB9XG4gIF9pc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgX2lzVG9kYXlGaXJzdFRpbGUyR2FtZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmxhc3RUaWxlMlBsYXlEYXRlO1xuICAgIHJldHVybiAhdCB8fCBEYXRlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzTmV3RGF5KHQsIERhdGUubm93KCkpO1xuICB9XG4gIF9nZXRUaWxlMk1haW5MZXZlbCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkudGlsZTJOb3JtYWxEYXRhLmdldExldmVsSWQoKTtcbiAgfVxuICBfdXBkYXRlUGxheVRyYWNraW5nKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RUaWxlMlBsYXlEYXRlID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhO1xuICAgIHRoaXMuX2lzQ29sZFN0YXJ0ID0gZmFsc2U7XG4gIH1cbiAgX3B1c2hEYXJrZW5FZmZlY3QodCwgZSwgciA9IEVJbnNlcnRUeXBlLlBhcmFsbGVsKSB7XG4gICAgdCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQucHVzaEVmZmVjdCAmJiB0LnB1c2hFZmZlY3QobmV3IENhcmRMb2NrRGFya2VuRWZmZWN0KHtcbiAgICAgIGlzQXV0b01lcmdlOiAhZVxuICAgIH0pLCByKTtcbiAgfVxufSJdfQ==