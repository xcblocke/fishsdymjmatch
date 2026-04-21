"use strict";
cc._RF.push(module, '90877xv41pLYroIeZhlWaOJ', 'HomeBgmSplitTrait');
// subpackages/l_homeBgmSplit/Scripts/HomeBgmSplitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HomeBgmSplitTrait = /** @class */ (function (_super) {
    __extends(HomeBgmSplitTrait, _super);
    function HomeBgmSplitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeBgmSplitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HomeBgmSplitTrait.prototype.firstInit = function () {
        if (!this.localData.isInit) {
            var t = UserModel_1.default.getInstance().isMusicEnabled();
            this.localData.homeMusicEnabled = false !== t;
            this.localData.gameMusicEnabled = false !== t;
            this.localData.isInit = true;
        }
    };
    HomeBgmSplitTrait.prototype.onHallCtl_viewDidShow = function (t, e) {
        this.firstInit();
        this.applyMusicState(this.localData.homeMusicEnabled);
        e();
    };
    HomeBgmSplitTrait.prototype.onMainGameCtrl_vwShow = function (t, e) {
        this.firstInit();
        this.applyMusicState(this.localData.gameMusicEnabled);
        e();
    };
    HomeBgmSplitTrait.prototype.applyMusicState = function (t) {
        UserModel_1.default.getInstance().setMusicEnabled(t);
        mj.audioManager.setBGMMuted(!t);
        if (t) {
            mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        }
        else {
            mj.audioManager.stopBGM();
        }
    };
    HomeBgmSplitTrait.prototype.onUISetHome_onMusicClick = function (t, e) {
        var a = UserModel_1.default.getInstance().isMusicEnabled();
        this.localData.homeMusicEnabled = a;
        this.localData.homeMusicEnabled = this.localData.homeMusicEnabled;
        e();
    };
    HomeBgmSplitTrait.prototype.onUISetDlg_onMusicClick = function (t, e) {
        var a = UserModel_1.default.getInstance().isMusicEnabled();
        this.localData.gameMusicEnabled = a;
        this.localData.gameMusicEnabled = this.localData.gameMusicEnabled;
        e();
    };
    HomeBgmSplitTrait.prototype.isHomeMusicEnabled = function () {
        return this.localData.homeMusicEnabled;
    };
    HomeBgmSplitTrait.prototype.isGameMusicEnabled = function () {
        return this.localData.gameMusicEnabled;
    };
    HomeBgmSplitTrait.traitKey = "HomeBgmSplit";
    HomeBgmSplitTrait = __decorate([
        mj.trait,
        mj.class("HomeBgmSplitTrait")
    ], HomeBgmSplitTrait);
    return HomeBgmSplitTrait;
}(Trait_1.default));
exports.default = HomeBgmSplitTrait;

cc._RF.pop();