"use strict";
cc._RF.push(module, 'a91a1LRF8RCxKqwshJ1pHoM', 'VibrateTraitAndroid');
// subpackages/l_vibrate/Scripts/VibrateTraitAndroid.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateTraitAndroid = /** @class */ (function (_super) {
    __extends(VibrateTraitAndroid, _super);
    function VibrateTraitAndroid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidConfigMap = new Map();
        return _this;
    }
    VibrateTraitAndroid.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAndroidConfigs();
    };
    VibrateTraitAndroid.prototype.initAndroidConfigs = function () {
        this._config = {
            btnClick: this._traitData.btnClickAndroid || VibrateManager_1.EVibrateStrength.Light,
            tileSelectSuccess: this._traitData.tileSelectSuccessAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileDragStart: this._traitData.tileDragStartAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileClear: this._traitData.tileClearAndroid || VibrateManager_1.EVibrateStrength.Strong,
            chestOpen: this._traitData.chestOpenAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            travelCollect: this._traitData.travelCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            dailyChallengeCollect: this._traitData.dailyChallengeCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            tileSelectFail: this._traitData.tileSelectFailAndroid || VibrateManager_1.EVibrateStrength.Multiple
        };
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Light, "1");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Medium, "2");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Strong, "3");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.StrongShort, "4");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Multiple, "5");
    };
    VibrateTraitAndroid.prototype.getAndroidConfig = function (t) {
        return this._androidConfigMap.get(t) || "1";
    };
    VibrateTraitAndroid.prototype.triggerVibrate = function (t) {
        VibrateManager_1.default.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
    };
    VibrateTraitAndroid.prototype.onBaseUI_btnClick = function (t, e) {
        this._traitData.btnClickEnabled && this.triggerVibrate(this._config.btnClick);
        e();
    };
    VibrateTraitAndroid.prototype.onIptTchEnd_Success = function (t, e) {
        var i, r, a;
        this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || this.triggerVibrate(this._config.tileSelectSuccess));
        e();
    };
    VibrateTraitAndroid.prototype.onIptBase_pushClrEff = function (t, e) {
        this._traitData.tileSelectSuccessEnabled && this.triggerVibrate(this._config.tileSelectSuccess);
        e();
    };
    VibrateTraitAndroid.prototype.onIptTchMove_startMove = function (t, e) {
        this._traitData.tileDragStartEnabled && this.triggerVibrate(this._config.tileDragStart);
        e();
    };
    VibrateTraitAndroid.prototype.onClearBhv_collision = function (t, e) {
        this._traitData.tileClearEnabled && this.triggerVibrate(this._config.tileClear);
        e();
    };
    VibrateTraitAndroid.prototype.onBoxOpenUI_onOpenFin = function (t, e) {
        this._traitData.chestOpenEnabled && this.triggerVibrate(this._config.chestOpen);
        e();
    };
    VibrateTraitAndroid.prototype.triggerTravelCollectVibrate = function () {
        this._traitData.travelCollectEnabled && this.triggerVibrate(this._config.travelCollect);
    };
    VibrateTraitAndroid.prototype.triggerDailyChallengeCollectVibrate = function () {
        this._traitData.dailyChallengeCollectEnabled && this.triggerVibrate(this._config.dailyChallengeCollect);
    };
    VibrateTraitAndroid.prototype.onIptTchStart_Lock = function (t, e) {
        this._traitData.tileSelectFailEnabled && this.triggerVibrate(this._config.tileSelectFail);
        e();
    };
    VibrateTraitAndroid.traitKey = "VibrateAndroid";
    VibrateTraitAndroid = __decorate([
        mj.trait,
        mj.class("VibrateTraitAndroid")
    ], VibrateTraitAndroid);
    return VibrateTraitAndroid;
}(Trait_1.default));
exports.default = VibrateTraitAndroid;

cc._RF.pop();