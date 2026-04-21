
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/VibrateIOSTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af636unpk9I0b4s06oEm34a', 'VibrateIOSTrait');
// subpackages/l_vibrate/Scripts/VibrateIOSTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateIOSTrait = /** @class */ (function (_super) {
    __extends(VibrateIOSTrait, _super);
    function VibrateIOSTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._iosConfigMap = new Map();
        return _this;
    }
    VibrateIOSTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initIOSConfigs();
    };
    VibrateIOSTrait.prototype.initIOSConfigs = function () {
        this._config = {
            btnClick: this._traitData.btnClickIOS || VibrateManager_1.EVibrateStrength.Light,
            tileSelectSuccess: this._traitData.tileSelectSuccessIOS || VibrateManager_1.EVibrateStrength.Medium,
            tileDragStart: this._traitData.tileDragStartIOS || VibrateManager_1.EVibrateStrength.Medium,
            tileClear: this._traitData.tileClearIOS || VibrateManager_1.EVibrateStrength.Strong,
            chestOpen: this._traitData.chestOpenIOS || VibrateManager_1.EVibrateStrength.StrongShort,
            travelCollect: this._traitData.travelCollectIOS || VibrateManager_1.EVibrateStrength.StrongShort,
            dailyChallengeCollect: this._traitData.dailyChallengeCollectIOS || VibrateManager_1.EVibrateStrength.StrongShort,
            tileSelectFail: this._traitData.tileSelectFailIOS || VibrateManager_1.EVibrateStrength.Multiple,
            shuffleBtn: this._traitData.shuffleBtnIOS || VibrateManager_1.EVibrateStrength.Light,
            hintBtn: this._traitData.hintBtnIOS || VibrateManager_1.EVibrateStrength.Light,
            vibrationBtn: this._traitData.vibrationBtnIOS || VibrateManager_1.EVibrateStrength.Light
        };
        this._iosConfigMap.set(VibrateManager_1.EVibrateStrength.Light, "1");
        this._iosConfigMap.set(VibrateManager_1.EVibrateStrength.Medium, "2");
        this._iosConfigMap.set(VibrateManager_1.EVibrateStrength.Strong, "3");
        this._iosConfigMap.set(VibrateManager_1.EVibrateStrength.StrongShort, "4");
        this._iosConfigMap.set(VibrateManager_1.EVibrateStrength.Multiple, "5");
    };
    VibrateIOSTrait.prototype.triggerVibrate = function (t) {
        var e = this._iosConfigMap.get(t) || "1";
        VibrateManager_1.default.getInstance().triggerVibrateByType(e);
    };
    VibrateIOSTrait.prototype.executeTriggerVibrate = function (t) {
        this.triggerVibrate(t);
    };
    VibrateIOSTrait.prototype.onBaseUI_btnClick = function (t, e) {
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
    VibrateIOSTrait.prototype.onIptTchEnd_Success = function (t, e) {
        var i, r, a;
        this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || VibrateManager_1.default.executeVibrate(this._config.tileSelectSuccess, VibrateManager_1.EVibratePoint.OldTileSelect));
        e();
    };
    VibrateIOSTrait.prototype.onIptTchMove_startMove = function (t, e) {
        var i;
        if (null !== (i = t.extra) && void 0 !== i && i.skipDragStartVibrate)
            e();
        else {
            this._traitData.tileDragStartEnabled && VibrateManager_1.default.executeVibrate(this._config.tileDragStart, VibrateManager_1.EVibratePoint.OldDragStart);
            e();
        }
    };
    VibrateIOSTrait.prototype.onClearBhv_collision = function (t, e) {
        this._traitData.tileClearEnabled && VibrateManager_1.default.executeVibrate(this._config.tileClear, VibrateManager_1.EVibratePoint.OldTileClear);
        e();
    };
    VibrateIOSTrait.prototype.onBoxOpenUI_onOpenFin = function (t, e) {
        this._traitData.chestOpenEnabled && VibrateManager_1.default.executeVibrate(this._config.chestOpen, VibrateManager_1.EVibratePoint.OldChestOpen);
        e();
    };
    VibrateIOSTrait.prototype.triggerTravelCollectVibrate = function () {
        this._traitData.travelCollectEnabled && VibrateManager_1.default.executeVibrate(this._config.travelCollect);
    };
    VibrateIOSTrait.prototype.triggerDailyChallengeCollectVibrate = function () {
        this._traitData.dailyChallengeCollectEnabled && VibrateManager_1.default.executeVibrate(this._config.dailyChallengeCollect);
    };
    VibrateIOSTrait.prototype.onIptTchStart_Lock = function (t, e) {
        this._traitData.tileSelectFailEnabled && VibrateManager_1.default.executeVibrate(this._config.tileSelectFail, VibrateManager_1.EVibratePoint.OldTileLock);
        e();
    };
    VibrateIOSTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        this._traitData.tileSelectSuccessEnabled && VibrateManager_1.default.executeVibrate(this._config.tileSelectSuccess, VibrateManager_1.EVibratePoint.OldTileSelect);
        e();
    };
    VibrateIOSTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        this._traitData.shuffleBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.shuffleBtn, VibrateManager_1.EVibratePoint.OldShuffleBtn);
        e();
    };
    VibrateIOSTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        this._traitData.hintBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.hintBtn, VibrateManager_1.EVibratePoint.OldHintBtn);
        e();
    };
    VibrateIOSTrait.prototype.onUISetDlg_onVibClick = function (t, e) {
        this._traitData.vibrationBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.vibrationBtn);
        e();
    };
    VibrateIOSTrait.prototype.onUISetHome_onVibClick = function (t, e) {
        this._traitData.vibrationBtnEnabled && VibrateManager_1.default.executeVibrate(this._config.vibrationBtn);
        e();
    };
    VibrateIOSTrait.prototype.onBadgeMode_addBadge = function (t, e) {
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
    VibrateIOSTrait.traitKey = "VibrateIOS";
    VibrateIOSTrait = __decorate([
        mj.trait,
        mj.class("VibrateIOSTrait")
    ], VibrateIOSTrait);
    return VibrateIOSTrait;
}(Trait_1.default));
exports.default = VibrateIOSTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9WaWJyYXRlSU9TVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF3RTtBQUN4RSxnRUFBMkQ7QUFDM0QsNEVBQTJFO0FBQzNFLDZFQUE0RTtBQUM1RSx3RkFBd0g7QUFHeEg7SUFBNkMsbUNBQUs7SUFBbEQ7UUFBQSxxRUErR0M7UUE5R0MsbUJBQWEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDOztJQThHNUIsQ0FBQztJQTVHQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHdDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLGlDQUFnQixDQUFDLEtBQUs7WUFDL0QsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSSxpQ0FBZ0IsQ0FBQyxNQUFNO1lBQ2xGLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLGlDQUFnQixDQUFDLE1BQU07WUFDMUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLGlDQUFnQixDQUFDLE1BQU07WUFDbEUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLGlDQUFnQixDQUFDLFdBQVc7WUFDdkUsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksaUNBQWdCLENBQUMsV0FBVztZQUMvRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixJQUFJLGlDQUFnQixDQUFDLFdBQVc7WUFDL0YsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFV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QUMsRUFDcEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLHFCQUFTLENBQUMsT0FBTyxFQUFFO2dCQUMzQixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxDQUFDLEtBQUsscUJBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7YUFDckU7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTVHTSx3QkFBUSxHQUFHLFlBQVksQ0FBQztJQUZaLGVBQWU7UUFGbkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO09BQ1AsZUFBZSxDQStHbkM7SUFBRCxzQkFBQztDQS9HRCxBQStHQyxDQS9HNEMsZUFBSyxHQStHakQ7a0JBL0dvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQmFkZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYWRnZS9tb2RlL0JhZGdlTW9kZSc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCwgRVZpYnJhdGVQb2ludCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmlicmF0ZUlPU1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWJyYXRlSU9TVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pb3NDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmlicmF0ZUlPU1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0SU9TQ29uZmlncygpO1xuICB9XG4gIGluaXRJT1NDb25maWdzKCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGJ0bkNsaWNrOiB0aGlzLl90cmFpdERhdGEuYnRuQ2xpY2tJT1MgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodCxcbiAgICAgIHRpbGVTZWxlY3RTdWNjZXNzOiB0aGlzLl90cmFpdERhdGEudGlsZVNlbGVjdFN1Y2Nlc3NJT1MgfHwgRVZpYnJhdGVTdHJlbmd0aC5NZWRpdW0sXG4gICAgICB0aWxlRHJhZ1N0YXJ0OiB0aGlzLl90cmFpdERhdGEudGlsZURyYWdTdGFydElPUyB8fCBFVmlicmF0ZVN0cmVuZ3RoLk1lZGl1bSxcbiAgICAgIHRpbGVDbGVhcjogdGhpcy5fdHJhaXREYXRhLnRpbGVDbGVhcklPUyB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZyxcbiAgICAgIGNoZXN0T3BlbjogdGhpcy5fdHJhaXREYXRhLmNoZXN0T3BlbklPUyB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LFxuICAgICAgdHJhdmVsQ29sbGVjdDogdGhpcy5fdHJhaXREYXRhLnRyYXZlbENvbGxlY3RJT1MgfHwgRVZpYnJhdGVTdHJlbmd0aC5TdHJvbmdTaG9ydCxcbiAgICAgIGRhaWx5Q2hhbGxlbmdlQ29sbGVjdDogdGhpcy5fdHJhaXREYXRhLmRhaWx5Q2hhbGxlbmdlQ29sbGVjdElPUyB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LFxuICAgICAgdGlsZVNlbGVjdEZhaWw6IHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0RmFpbElPUyB8fCBFVmlicmF0ZVN0cmVuZ3RoLk11bHRpcGxlLFxuICAgICAgc2h1ZmZsZUJ0bjogdGhpcy5fdHJhaXREYXRhLnNodWZmbGVCdG5JT1MgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodCxcbiAgICAgIGhpbnRCdG46IHRoaXMuX3RyYWl0RGF0YS5oaW50QnRuSU9TIHx8IEVWaWJyYXRlU3RyZW5ndGguTGlnaHQsXG4gICAgICB2aWJyYXRpb25CdG46IHRoaXMuX3RyYWl0RGF0YS52aWJyYXRpb25CdG5JT1MgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodFxuICAgIH07XG4gICAgdGhpcy5faW9zQ29uZmlnTWFwLnNldChFVmlicmF0ZVN0cmVuZ3RoLkxpZ2h0LCBcIjFcIik7XG4gICAgdGhpcy5faW9zQ29uZmlnTWFwLnNldChFVmlicmF0ZVN0cmVuZ3RoLk1lZGl1bSwgXCIyXCIpO1xuICAgIHRoaXMuX2lvc0NvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5TdHJvbmcsIFwiM1wiKTtcbiAgICB0aGlzLl9pb3NDb25maWdNYXAuc2V0KEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nU2hvcnQsIFwiNFwiKTtcbiAgICB0aGlzLl9pb3NDb25maWdNYXAuc2V0KEVWaWJyYXRlU3RyZW5ndGguTXVsdGlwbGUsIFwiNVwiKTtcbiAgfVxuICB0cmlnZ2VyVmlicmF0ZSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLl9pb3NDb25maWdNYXAuZ2V0KHQpIHx8IFwiMVwiO1xuICAgIFZpYnJhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJpZ2dlclZpYnJhdGVCeVR5cGUoZSk7XG4gIH1cbiAgZXhlY3V0ZVRyaWdnZXJWaWJyYXRlKHQpIHtcbiAgICB0aGlzLnRyaWdnZXJWaWJyYXRlKHQpO1xuICB9XG4gIG9uQmFzZVVJX2J0bkNsaWNrKHQsIGUpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIgPSBudWxsID09PSAoaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXTtcbiAgICBpZiAoIShudWxsID09IHIgPyB2b2lkIDAgOiByLmlnbm9yZUNsaWNrQXVkaW8pKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIudmlicmF0ZUxldmVsO1xuICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBhICYmIChhID0gYSgpKTtcbiAgICAgIGlmICh2b2lkIDAgPT09IGEpIHtcbiAgICAgICAgdGhpcy5fdHJhaXREYXRhLmJ0bkNsaWNrRW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcuYnRuQ2xpY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLTEgIT09IGEgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUoYSk7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbklwdFRjaEVuZF9TdWNjZXNzKHQsIGUpIHtcbiAgICB2YXIgaSwgciwgYTtcbiAgICB0aGlzLl90cmFpdERhdGEudGlsZVNlbGVjdFN1Y2Nlc3NFbmFibGVkICYmICgobnVsbCA9PT0gKGEgPSBudWxsID09PSAociA9IG51bGwgPT09IChpID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5hcmdzKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpWzBdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLl9kYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmlzQ2FuY2VsKSB8fCBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZVNlbGVjdFN1Y2Nlc3MsIEVWaWJyYXRlUG9pbnQuT2xkVGlsZVNlbGVjdCkpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFRjaE1vdmVfc3RhcnRNb3ZlKHQsIGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAobnVsbCAhPT0gKGkgPSB0LmV4dHJhKSAmJiB2b2lkIDAgIT09IGkgJiYgaS5za2lwRHJhZ1N0YXJ0VmlicmF0ZSkgZSgpO2Vsc2Uge1xuICAgICAgdGhpcy5fdHJhaXREYXRhLnRpbGVEcmFnU3RhcnRFbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy50aWxlRHJhZ1N0YXJ0LCBFVmlicmF0ZVBvaW50Lk9sZERyYWdTdGFydCk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xlYXJCaHZfY29sbGlzaW9uKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudGlsZUNsZWFyRW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZUNsZWFyLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVDbGVhcik7XG4gICAgZSgpO1xuICB9XG4gIG9uQm94T3BlblVJX29uT3BlbkZpbih0LCBlKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLmNoZXN0T3BlbkVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLmNoZXN0T3BlbiwgRVZpYnJhdGVQb2ludC5PbGRDaGVzdE9wZW4pO1xuICAgIGUoKTtcbiAgfVxuICB0cmlnZ2VyVHJhdmVsQ29sbGVjdFZpYnJhdGUoKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLnRyYXZlbENvbGxlY3RFbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy50cmF2ZWxDb2xsZWN0KTtcbiAgfVxuICB0cmlnZ2VyRGFpbHlDaGFsbGVuZ2VDb2xsZWN0VmlicmF0ZSgpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0RW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0KTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X0xvY2sodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0RmFpbEVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnRpbGVTZWxlY3RGYWlsLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVMb2NrKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRCYXNlX3B1c2hDbHJFZmYodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0U3VjY2Vzc0VuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnRpbGVTZWxlY3RTdWNjZXNzLCBFVmlicmF0ZVBvaW50Lk9sZFRpbGVTZWxlY3QpO1xuICAgIGUoKTtcbiAgfVxuICBvbkdhbWVVSV9vbkJ0blNodWZmbGUodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS5zaHVmZmxlQnRuRW5hYmxlZCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0aGlzLl9jb25maWcuc2h1ZmZsZUJ0biwgRVZpYnJhdGVQb2ludC5PbGRTaHVmZmxlQnRuKTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25CdG5IaXRUaXBzKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuaGludEJ0bkVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLmhpbnRCdG4sIEVWaWJyYXRlUG9pbnQuT2xkSGludEJ0bik7XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXREbGdfb25WaWJDbGljayh0LCBlKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLnZpYnJhdGlvbkJ0bkVuYWJsZWQgJiYgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUodGhpcy5fY29uZmlnLnZpYnJhdGlvbkJ0bik7XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXRIb21lX29uVmliQ2xpY2sodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS52aWJyYXRpb25CdG5FbmFibGVkICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKHRoaXMuX2NvbmZpZy52aWJyYXRpb25CdG4pO1xuICAgIGUoKTtcbiAgfVxuICBvbkJhZGdlTW9kZV9hZGRCYWRnZSh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmFyZ3NbMF07XG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciByID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCBpKSxcbiAgICAgICAgYSA9IHIgPyByLlR5cGUgOiAwO1xuICAgICAgaWYgKGEgPT09IEJhZGdlVHlwZS5Kb3VybmV5KSB7XG4gICAgICAgIHRoaXMudHJpZ2dlclRyYXZlbENvbGxlY3RWaWJyYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID09PSBCYWRnZVR5cGUuRGFpbHkgJiYgdGhpcy50cmlnZ2VyRGFpbHlDaGFsbGVuZ2VDb2xsZWN0VmlicmF0ZSgpO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=