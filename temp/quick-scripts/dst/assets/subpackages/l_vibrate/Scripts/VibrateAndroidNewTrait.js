
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/VibrateAndroidNewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ad99L24HpMrJLHFP3ofOls', 'VibrateAndroidNewTrait');
// subpackages/l_vibrate/Scripts/VibrateAndroidNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var VibrateMulti_1 = require("./VibrateMulti");
var VibrateAndroidNewTrait = /** @class */ (function (_super) {
    __extends(VibrateAndroidNewTrait, _super);
    function VibrateAndroidNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidConfigMap = new Map();
        _this._apiLevel = 0;
        return _this;
    }
    VibrateAndroidNewTrait_1 = VibrateAndroidNewTrait;
    VibrateAndroidNewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAndroidConfigs();
        this.preloadAndroidConfigs();
    };
    VibrateAndroidNewTrait.prototype.onUISetDlg_HideVbBtn = function (t, e) {
        this._apiLevel < 26 && (t.args[0] = true);
        e();
    };
    VibrateAndroidNewTrait.prototype.initAndroidConfigs = function () {
        this._apiLevel = parseInt(mj.sdk.getApiLevel());
        this._apiLevel || cc.sys.isNative && console.error("[" + VibrateAndroidNewTrait_1.traitKey + "] 获取APILevel失败");
        this._config = {
            btnClick: this._traitData.btnClickAndroid || VibrateManager_1.EVibrateStrength.Light,
            tileSelectSuccess: this._traitData.tileSelectSuccessAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileDragStart: this._traitData.tileDragStartAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileClear: this._traitData.tileClearAndroid || VibrateManager_1.EVibrateStrength.Strong,
            chestOpen: this._traitData.chestOpenAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            travelCollect: this._traitData.travelCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            dailyChallengeCollect: this._traitData.dailyChallengeCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            tileSelectFail: this._traitData.tileSelectFailAndroid || VibrateManager_1.EVibrateStrength.Multiple,
            shuffleBtn: this._traitData.shuffleBtnAndroid || VibrateManager_1.EVibrateStrength.Light,
            hintBtn: this._traitData.hintBtnAndroid || VibrateManager_1.EVibrateStrength.Light,
            vibrationBtn: this._traitData.vibrationBtnAndroid || VibrateManager_1.EVibrateStrength.Light
        };
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Light, "1");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Medium, "2");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Strong, "3");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.StrongShort, "4");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Multiple, "5");
    };
    VibrateAndroidNewTrait.prototype.getAndroidConfig = function (t) {
        return this._androidConfigMap.get(t) || null;
    };
    VibrateAndroidNewTrait.prototype.triggerVibrate = function (t) {
        this.triggerVibrateNew(t);
    };
    VibrateAndroidNewTrait.prototype.executeTriggerVibrate = function (t) {
        this.triggerVibrate(t);
    };
    VibrateAndroidNewTrait.prototype.onBaseUI_btnClick = function (t, e) {
        var i, r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0];
        if (!(null == r ? void 0 : r.ignoreClickAudio)) {
            var a = null == r ? void 0 : r.vibrateLevel;
            "function" == typeof a && (a = a());
            if (void 0 === a) {
                this._traitData.btnClickEnabled && VibrateManager_1.default.executeVibrate(this._config.btnClick);
            }
            else {
                -1 !== a && VibrateManager_1.default.executeVibrate(a);
            }
        }
        e();
    };
    VibrateAndroidNewTrait.prototype.onIptTchEnd_Success = function (t, e) {
        var i, r, a;
        this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || VibrateManager_1.default.executeVibrate(this._config.tileSelectSuccess, VibrateManager_1.EVibratePoint.OldTileSelect));
        e();
    };
    VibrateAndroidNewTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        this._traitData.tileSelectSuccessEnabled && VibrateManager_1.default.executeVibrate(this._config.tileSelectSuccess, VibrateManager_1.EVibratePoint.OldTileSelect);
        e();
    };
    VibrateAndroidNewTrait.prototype.onIptTchMove_startMove = function (t, e) {
        var i;
        if (null !== (i = t.extra) && void 0 !== i && i.skipDragStartVibrate)
            e();
        else {
            this._traitData.tileDragStartEnabled && VibrateManager_1.default.executeVibrate(this._config.tileDragStart, VibrateManager_1.EVibratePoint.OldDragStart);
            e();
        }
    };
    VibrateAndroidNewTrait.prototype.onClearBhv_collision = function (t, e) {
        this._traitData.tileClearEnabled && VibrateManager_1.default.executeVibrate(this._config.tileClear, VibrateManager_1.EVibratePoint.OldTileClear);
        e();
    };
    VibrateAndroidNewTrait.prototype.onBoxOpenUI_onOpenFin = function (t, e) {
        this._traitData.chestOpenEnabled && VibrateManager_1.default.executeVibrate(this._config.chestOpen, VibrateManager_1.EVibratePoint.OldChestOpen);
        e();
    };
    VibrateAndroidNewTrait.prototype.triggerTravelCollectVibrate = function () {
        this._traitData.travelCollectEnabled && VibrateManager_1.default.executeVibrate(this._config.travelCollect);
    };
    VibrateAndroidNewTrait.prototype.triggerDailyChallengeCollectVibrate = function () {
        this._traitData.dailyChallengeCollectEnabled && VibrateManager_1.default.executeVibrate(this._config.dailyChallengeCollect);
    };
    VibrateAndroidNewTrait.prototype.onIptTchStart_Lock = function (t, e) {
        this._traitData.tileSelectFailEnabled && VibrateManager_1.default.executeVibrate(this._config.tileSelectFail, VibrateManager_1.EVibratePoint.OldTileLock);
        e();
    };
    VibrateAndroidNewTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        this._traitData.shuffleBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.shuffleBtn, VibrateManager_1.EVibratePoint.OldShuffleBtn);
        e();
    };
    VibrateAndroidNewTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        this._traitData.hintBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.hintBtn, VibrateManager_1.EVibratePoint.OldHintBtn);
        e();
    };
    VibrateAndroidNewTrait.prototype.onUISetDlg_onVibClick = function (t, e) {
        this._traitData.vibrationBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.vibrationBtn);
        e();
    };
    VibrateAndroidNewTrait.prototype.onUISetHome_onVibClick = function (t, e) {
        this._traitData.vibrationBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.vibrationBtn);
        e();
    };
    VibrateAndroidNewTrait.prototype.onBadgeMode_addBadge = function (t, e) {
        var i = t.args[0];
        if (i) {
            var r = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, i), a = r ? r.Type : 0;
            if (a === BadgeMode_1.BadgeType.Journey) {
                this.triggerTravelCollectVibrate();
            }
            else {
                a === BadgeMode_1.BadgeType.Daily && this.triggerDailyChallengeCollectVibrate();
            }
            e();
        }
        else
            e();
    };
    VibrateAndroidNewTrait.prototype.preloadAndroidConfigs = function () {
        DataReader_1.DataReader.getList("VibrationLevel_Android");
        DataReader_1.DataReader.getList("VibrationConfig_Android");
    };
    VibrateAndroidNewTrait.prototype.triggerVibrateNew = function (t) {
        if (!(this._apiLevel < 26)) {
            var e = DataReader_1.DataReader.getList("VibrationLevel_Android"), i = DataReader_1.DataReader.getList("VibrationConfig_Android");
            if (e && i) {
                var r = (LoginModel_1.default.getInstance().deviceModel || "").split(" "), a = 2 == r.length ? r[1] : "", n = e.find(function (t) {
                    return t.ID === a;
                }), l = i.find(function (e) {
                    return e.ID === t;
                });
                if (!l) {
                    VibrateManager_1.default.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
                    return;
                }
                if (this.isSupportBestInterfaceCondition()) {
                    VibrateMulti_1.VibrateMulti.start({
                        predefinedParams: l.NewAndroidTime
                    });
                    return;
                }
                var c = null, s = null;
                if (this._apiLevel >= 29) {
                    var u = 3;
                    n && (u = n.Level);
                    switch (u) {
                        case 1:
                            c = l.AndroidTime1;
                            s = l.AndroidStrong1;
                            break;
                        case 2:
                            c = l.AndroidTime2;
                            s = l.AndroidStrong2;
                            break;
                        case 3:
                        default:
                            c = l.AndroidTime3;
                            s = l.AndroidStrong3;
                    }
                }
                else {
                    c = l.OldAndroidTime;
                    s = l.OldAndroidStrong;
                }
                VibrateManager_1.default.getInstance().triggerVibrateNormal({
                    timings: c,
                    amplitudes: s
                });
            }
            else
                VibrateManager_1.default.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
        }
    };
    VibrateAndroidNewTrait.prototype.isSupportBestInterface = function () {
        return "true" == mj.sdk.isSupportShakeAdvence();
    };
    VibrateAndroidNewTrait.prototype.isSupportBestInterfaceCondition = function () {
        return this._apiLevel >= 31 && this.isSupportBestInterface();
    };
    var VibrateAndroidNewTrait_1;
    VibrateAndroidNewTrait.traitKey = "VibrateAndroidNew";
    VibrateAndroidNewTrait = VibrateAndroidNewTrait_1 = __decorate([
        mj.trait,
        mj.class("VibrateAndroidNewTrait")
    ], VibrateAndroidNewTrait);
    return VibrateAndroidNewTrait;
}(Trait_1.default));
exports.default = VibrateAndroidNewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9WaWJyYXRlQW5kcm9pZE5ld1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBd0U7QUFDeEUsZ0VBQTJEO0FBQzNELDRFQUEyRTtBQUMzRSw2RUFBNEU7QUFDNUUsd0ZBQXdIO0FBQ3hILCtFQUEwRTtBQUMxRSwrQ0FBOEM7QUFHOUM7SUFBb0QsMENBQUs7SUFBekQ7UUFBQSxxRUF3TEM7UUF2TEMsdUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM5QixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQXNMaEIsQ0FBQzsrQkF4TG9CLHNCQUFzQjtJQUl6Qyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QscURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyx3QkFBc0IsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFB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QUM7SUFDbEQsQ0FBQztJQUNELGdFQUErQixHQUEvQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDL0QsQ0FBQzs7SUFwTE0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUhuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBd0wxQztJQUFELDZCQUFDO0NBeExELEFBd0xDLENBeExtRCxlQUFLLEdBd0x4RDtrQkF4TG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEJhZGdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFkZ2UvbW9kZS9CYWRnZU1vZGUnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IHsgVmlicmF0ZU11bHRpIH0gZnJvbSAnLi9WaWJyYXRlTXVsdGknO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJWaWJyYXRlQW5kcm9pZE5ld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWJyYXRlQW5kcm9pZE5ld1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfYW5kcm9pZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgX2FwaUxldmVsID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWaWJyYXRlQW5kcm9pZE5ld1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0QW5kcm9pZENvbmZpZ3MoKTtcbiAgICB0aGlzLnByZWxvYWRBbmRyb2lkQ29uZmlncygpO1xuICB9XG4gIG9uVUlTZXREbGdfSGlkZVZiQnRuKHQsIGUpIHtcbiAgICB0aGlzLl9hcGlMZXZlbCA8IDI2ICYmICh0LmFyZ3NbMF0gPSB0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgaW5pdEFuZHJvaWRDb25maWdzKCkge1xuICAgIHRoaXMuX2FwaUxldmVsID0gcGFyc2VJbnQobWouc2RrLmdldEFwaUxldmVsKCkpO1xuICAgIHRoaXMuX2FwaUxldmVsIHx8IGNjLnN5cy5pc05hdGl2ZSAmJiBjb25zb2xlLmVycm9yKFwiW1wiICsgVmlicmF0ZUFuZHJvaWROZXdUcmFpdC50cmFpdEtleSArIFwiXSDojrflj5ZBUElMZXZlbOWksei0pVwiKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBidG5DbGljazogdGhpcy5fdHJhaXREYXRhLmJ0bkNsaWNrQW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLkxpZ2h0LFxuICAgICAgdGlsZVNlbGVjdFN1Y2Nlc3M6IHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0U3VjY2Vzc0FuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5NZWRpdW0sXG4gICAgICB0aWxlRHJhZ1N0YXJ0OiB0aGlzLl90cmFpdERhdGEudGlsZURyYWdTdGFydEFuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5NZWRpdW0sXG4gICAgICB0aWxlQ2xlYXI6IHRoaXMuX3RyYWl0RGF0YS50aWxlQ2xlYXJBbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nLFxuICAgICAgY2hlc3RPcGVuOiB0aGlzLl90cmFpdERhdGEuY2hlc3RPcGVuQW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LFxuICAgICAgdHJhdmVsQ29sbGVjdDogdGhpcy5fdHJhaXREYXRhLnRyYXZlbENvbGxlY3RBbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nU2hvcnQsXG4gICAgICBkYWlseUNoYWxsZW5nZUNvbGxlY3Q6IHRoaXMuX3RyYWl0RGF0YS5kYWlseUNoYWxsZW5nZUNvbGxlY3RBbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nU2hvcnQsXG4gICAgICB0aWxlU2VsZWN0RmFpbDogdGhpcy5fdHJhaXREYXRhLnRpbGVTZWxlY3RGYWlsQW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLk11bHRpcGxlLFxuICAgICAgc2h1ZmZsZUJ0bjogdGhpcy5fdHJhaXREYXRhLnNodWZmbGVCdG5BbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguTGlnaHQsXG4gICAgICBoaW50QnRuOiB0aGlzLl90cmFpdERhdGEuaGludEJ0bkFuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodCxcbiAgICAgIHZpYnJhdGlvbkJ0bjogdGhpcy5fdHJhaXREYXRhLnZpYnJhdGlvbkJ0bkFuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodFxuICAgIH07XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5MaWdodCwgXCIxXCIpO1xuICAgIHRoaXMuX2FuZHJvaWRDb25maWdNYXAuc2V0KEVWaWJyYXRlU3RyZW5ndGguTWVkaXVtLCBcIjJcIik7XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5TdHJvbmcsIFwiM1wiKTtcbiAgICB0aGlzLl9hbmRyb2lkQ29uZmlnTWFwLnNldChFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LCBcIjRcIik7XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5NdWx0aXBsZSwgXCI1XCIpO1xuICB9XG4gIGdldEFuZHJvaWRDb25maWcodCkge1xuICAgIHJldHVybiB0aGlzLl9hbmRyb2lkQ29uZmlnTWFwLmdldCh0KSB8fCBudWxsO1xuICB9XG4gIHRyaWdnZXJWaWJyYXRlKHQpIHtcbiAgICB0aGlzLnRyaWdnZXJWaWJyYXRlTmV3KHQpO1xuICB9XG4gIGV4ZWN1dGVUcmlnZ2VyVmlicmF0ZSh0KSB7XG4gICAgdGhpcy50cmlnZ2VyVmlicmF0ZSh0KTtcbiAgfVxuICBvbkJhc2VVSV9idG5DbGljayh0LCBlKSB7XG4gICAgdmFyIGksXG4gICAgICByID0gbnVsbCA9PT0gKGkgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF07XG4gICAgaWYgKCEobnVsbCA9PSByID8gdm9pZCAwIDogci5pZ25vcmVDbGlja0F1ZGlvKSkge1xuICAgICAgdmFyIGEgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLnZpYnJhdGVMZXZlbDtcbiAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYSAmJiAoYSA9IGEoKSk7XG4gICAgICBpZiAodm9pZCAwID09PSBhKSB7XG4gICAgICAgIHRoaXMuX3RyYWl0RGF0YS5idG5DbGlja0VuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLmJ0bkNsaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC0xICE9PSBhICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25JcHRUY2hFbmRfU3VjY2Vzcyh0LCBlKSB7XG4gICAgdmFyIGksIHIsIGE7XG4gICAgdGhpcy5fdHJhaXREYXRhLnRpbGVTZWxlY3RTdWNjZXNzRW5hYmxlZCAmJiAoKG51bGwgPT09IChhID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAoaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fZGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pc0NhbmNlbCkgfHwgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnRpbGVTZWxlY3RTdWNjZXNzLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVTZWxlY3QpKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRCYXNlX3B1c2hDbHJFZmYodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0U3VjY2Vzc0VuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnRpbGVTZWxlY3RTdWNjZXNzLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVTZWxlY3QpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFRjaE1vdmVfc3RhcnRNb3ZlKHQsIGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAobnVsbCAhPT0gKGkgPSB0LmV4dHJhKSAmJiB2b2lkIDAgIT09IGkgJiYgaS5za2lwRHJhZ1N0YXJ0VmlicmF0ZSkgZSgpO2Vsc2Uge1xuICAgICAgdGhpcy5fdHJhaXREYXRhLnRpbGVEcmFnU3RhcnRFbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy50aWxlRHJhZ1N0YXJ0LCBFVmlicmF0ZVBvaW50Lk9sZERyYWdTdGFydCk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xlYXJCaHZfY29sbGlzaW9uKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudGlsZUNsZWFyRW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZUNsZWFyLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVDbGVhcik7XG4gICAgZSgpO1xuICB9XG4gIG9uQm94T3BlblVJX29uT3BlbkZpbih0LCBlKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLmNoZXN0T3BlbkVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLmNoZXN0T3BlbiwgRVZpYnJhdGVQb2ludC5PbGRDaGVzdE9wZW4pO1xuICAgIGUoKTtcbiAgfVxuICB0cmlnZ2VyVHJhdmVsQ29sbGVjdFZpYnJhdGUoKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLnRyYXZlbENvbGxlY3RFbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy50cmF2ZWxDb2xsZWN0KTtcbiAgfVxuICB0cmlnZ2VyRGFpbHlDaGFsbGVuZ2VDb2xsZWN0VmlicmF0ZSgpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0RW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0KTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X0xvY2sodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0RmFpbEVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnRpbGVTZWxlY3RGYWlsLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVMb2NrKTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5TaHVmZmxlKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuc2h1ZmZsZUJ0bkVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnNodWZmbGVCdG4sIEVWaWJyYXRlUG9pbnQuT2xkU2h1ZmZsZUJ0bik7XG4gICAgZSgpO1xuICB9XG4gIG9uR2FtZVVJX29uQnRuSGl0VGlwcyh0LCBlKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLmhpbnRCdG5FbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy5oaW50QnRuLCBFVmlicmF0ZVBvaW50Lk9sZEhpbnRCdG4pO1xuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0RGxnX29uVmliQ2xpY2sodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS52aWJyYXRpb25CdG5FbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy52aWJyYXRpb25CdG4pO1xuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0SG9tZV9vblZpYkNsaWNrKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudmlicmF0aW9uQnRuRW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcudmlicmF0aW9uQnRuKTtcbiAgICBlKCk7XG4gIH1cbiAgb25CYWRnZU1vZGVfYWRkQmFkZ2UodCwgZSkge1xuICAgIHZhciBpID0gdC5hcmdzWzBdO1xuICAgIGlmIChpKSB7XG4gICAgICB2YXIgciA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgaSksXG4gICAgICAgIGEgPSByID8gci5UeXBlIDogMDtcbiAgICAgIGlmIChhID09PSBCYWRnZVR5cGUuSm91cm5leSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJUcmF2ZWxDb2xsZWN0VmlicmF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9PT0gQmFkZ2VUeXBlLkRhaWx5ICYmIHRoaXMudHJpZ2dlckRhaWx5Q2hhbGxlbmdlQ29sbGVjdFZpYnJhdGUoKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIHByZWxvYWRBbmRyb2lkQ29uZmlncygpIHtcbiAgICBEYXRhUmVhZGVyLmdldExpc3QoXCJWaWJyYXRpb25MZXZlbF9BbmRyb2lkXCIpO1xuICAgIERhdGFSZWFkZXIuZ2V0TGlzdChcIlZpYnJhdGlvbkNvbmZpZ19BbmRyb2lkXCIpO1xuICB9XG4gIHRyaWdnZXJWaWJyYXRlTmV3KHQpIHtcbiAgICBpZiAoISh0aGlzLl9hcGlMZXZlbCA8IDI2KSkge1xuICAgICAgdmFyIGUgPSBEYXRhUmVhZGVyLmdldExpc3QoXCJWaWJyYXRpb25MZXZlbF9BbmRyb2lkXCIpLFxuICAgICAgICBpID0gRGF0YVJlYWRlci5nZXRMaXN0KFwiVmlicmF0aW9uQ29uZmlnX0FuZHJvaWRcIik7XG4gICAgICBpZiAoZSAmJiBpKSB7XG4gICAgICAgIHZhciByID0gKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5kZXZpY2VNb2RlbCB8fCBcIlwiKS5zcGxpdChcIiBcIiksXG4gICAgICAgICAgYSA9IDIgPT0gci5sZW5ndGggPyByWzFdIDogXCJcIixcbiAgICAgICAgICBuID0gZS5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5JRCA9PT0gYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsID0gaS5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5JRCA9PT0gdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgVmlicmF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmlnZ2VyVmlicmF0ZUJ5VHlwZSh0aGlzLmdldEFuZHJvaWRDb25maWcodCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N1cHBvcnRCZXN0SW50ZXJmYWNlQ29uZGl0aW9uKCkpIHtcbiAgICAgICAgICBWaWJyYXRlTXVsdGkuc3RhcnQoe1xuICAgICAgICAgICAgcHJlZGVmaW5lZFBhcmFtczogbC5OZXdBbmRyb2lkVGltZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IG51bGwsXG4gICAgICAgICAgcyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9hcGlMZXZlbCA+PSAyOSkge1xuICAgICAgICAgIHZhciB1ID0gMztcbiAgICAgICAgICBuICYmICh1ID0gbi5MZXZlbCk7XG4gICAgICAgICAgc3dpdGNoICh1KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGMgPSBsLkFuZHJvaWRUaW1lMTtcbiAgICAgICAgICAgICAgcyA9IGwuQW5kcm9pZFN0cm9uZzE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBjID0gbC5BbmRyb2lkVGltZTI7XG4gICAgICAgICAgICAgIHMgPSBsLkFuZHJvaWRTdHJvbmcyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGMgPSBsLkFuZHJvaWRUaW1lMztcbiAgICAgICAgICAgICAgcyA9IGwuQW5kcm9pZFN0cm9uZzM7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgPSBsLk9sZEFuZHJvaWRUaW1lO1xuICAgICAgICAgIHMgPSBsLk9sZEFuZHJvaWRTdHJvbmc7XG4gICAgICAgIH1cbiAgICAgICAgVmlicmF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmlnZ2VyVmlicmF0ZU5vcm1hbCh7XG4gICAgICAgICAgdGltaW5nczogYyxcbiAgICAgICAgICBhbXBsaXR1ZGVzOiBzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIFZpYnJhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJpZ2dlclZpYnJhdGVCeVR5cGUodGhpcy5nZXRBbmRyb2lkQ29uZmlnKHQpKTtcbiAgICB9XG4gIH1cbiAgaXNTdXBwb3J0QmVzdEludGVyZmFjZSgpIHtcbiAgICByZXR1cm4gXCJ0cnVlXCIgPT0gbWouc2RrLmlzU3VwcG9ydFNoYWtlQWR2ZW5jZSgpO1xuICB9XG4gIGlzU3VwcG9ydEJlc3RJbnRlcmZhY2VDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUxldmVsID49IDMxICYmIHRoaXMuaXNTdXBwb3J0QmVzdEludGVyZmFjZSgpO1xuICB9XG59Il19