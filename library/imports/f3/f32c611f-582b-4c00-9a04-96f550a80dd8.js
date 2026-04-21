"use strict";
cc._RF.push(module, 'f32c6EfWCtMAJoElvVQqA3Y', 'ColdStartResumeTrait');
// subpackages/l_coldStartResume/Scripts/ColdStartResumeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ColdStartResumeTrait = /** @class */ (function (_super) {
    __extends(ColdStartResumeTrait, _super);
    function ColdStartResumeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeHours = 24;
        _this._lastQuitAppTime = 0;
        _this._normalLastQuitTime = 0;
        _this._tile2LastQuitTime = 0;
        return _this;
    }
    ColdStartResumeTrait_1 = ColdStartResumeTrait;
    ColdStartResumeTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._timeHours = this._traitData.timeHours || 24;
        var a = UserModel_1.default.getInstance();
        this._normalLastQuitTime = (null === (e = a.normalData.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
        this._tile2LastQuitTime = (null === (r = a.tile2NormalData.localData) || void 0 === r ? void 0 : r.lastUpdateTime) || 0;
    };
    ColdStartResumeTrait.prototype.onLoginM_enterGame = function (t, e) {
        if (this._timeHours <= 0)
            e();
        else {
            var r = UserModel_1.default.getInstance().getMainGameType();
            this._lastQuitAppTime = r === GameTypeEnums_1.MjGameType.Tile2Normal ? this._tile2LastQuitTime : this._normalLastQuitTime;
            if (this.shouldResumeGame()) {
                e({
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
    };
    ColdStartResumeTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        var r = UserModel_1.default.getInstance().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.localData.isInLevelGame = true;
        }
        else {
            this.localData.isInLevelGame = false;
        }
        e();
    };
    ColdStartResumeTrait.prototype.onUISetBtnBack_onBtnClk = function (t, e) {
        this.localData.isInLevelGame = false;
        e();
    };
    ColdStartResumeTrait.prototype.shouldResumeGame = function () {
        try {
            var t = UserModel_1.default.getInstance(), e = t.getGameDataByGameType(t.getMainGameType()), a = e.getLevelData();
            if (!this.localData.isInLevelGame)
                return false;
            if (!a || "" === a)
                return false;
            var i = e.getClearTileCount();
            if (this._traitData.isSkipCount)
                ;
            else if (0 === i)
                return false;
            var o = this._lastQuitAppTime || 0;
            return !!o && !(Date.now() - o > 3600000 * this._timeHours);
        }
        catch (t) {
            console.error("[" + ColdStartResumeTrait_1.traitKey + "] 检查续关条件异常: " + t.message);
            return false;
        }
    };
    var ColdStartResumeTrait_1;
    ColdStartResumeTrait.traitKey = "ColdStartResume";
    ColdStartResumeTrait = ColdStartResumeTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartResumeTrait")
    ], ColdStartResumeTrait);
    return ColdStartResumeTrait;
}(Trait_1.default));
exports.default = ColdStartResumeTrait;

cc._RF.pop();