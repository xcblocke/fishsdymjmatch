"use strict";
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