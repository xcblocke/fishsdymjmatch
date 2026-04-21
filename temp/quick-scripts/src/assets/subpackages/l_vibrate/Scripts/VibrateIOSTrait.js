"use strict";
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