"use strict";
cc._RF.push(module, '5b23blrxnVLC76CoB92k5uK', 'Tile2DuoXiaoAdTrait');
// subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DuoXiaoAdTrait = /** @class */ (function (_super) {
    __extends(Tile2DuoXiaoAdTrait, _super);
    function Tile2DuoXiaoAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playAdCount = 0;
        return _this;
    }
    Tile2DuoXiaoAdTrait.prototype.getLevelLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getPlayAdLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.playAdLimit) && void 0 !== e ? e : 1;
    };
    Tile2DuoXiaoAdTrait.prototype.getDuoXiaoCount = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.duoXiaoCount) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getBombCntDefault = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCntDefault) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getBombCntAfterWin = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCountAfterWin) && void 0 !== e ? e : 0;
    };
    Tile2DuoXiaoAdTrait.prototype.isMatchGameType = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
    };
    Tile2DuoXiaoAdTrait.prototype.enableTrait = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return this.isMatchGameType(t);
    };
    Tile2DuoXiaoAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DuoXiaoAdTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        var r;
        this.enableTrait() && (null === (r = UserModel_1.default.getInstance()) || void 0 === r ? void 0 : r.isInGameView()) && this._playAdCount++;
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.enableTrait() && (this._playAdCount = 0);
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.enableTrait() && (this._playAdCount = 0);
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.checkCanGen = function () {
        var t, e, r = this.getLevelLimit(), o = (null === (e = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        return !(r > 0 && o <= r);
    };
    Tile2DuoXiaoAdTrait.prototype.onT2DuoxiaoGenTt_genTypes = function (t, e) {
        var r = "", o = this.getPlayAdLimit();
        if (this.checkCanGen())
            if (this._playAdCount < o)
                r = "" + TileTypeEnum_1.ETileType.Bomb;
            else {
                var n = this.getDuoXiaoCount();
                n > 0 && (r = "" + TileTypeEnum_1.ETileType.DuoxiaoCard);
                this.getBombCntAfterWin() > 0 && (r = r + (n > 0 ? "," : "") + TileTypeEnum_1.ETileType.Bomb);
            }
        e({
            returnVal: r,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    Tile2DuoXiaoAdTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
        if (this.enableTrait()) {
            var r = this.getDuoXiaoCount();
            e({
                returnVal: [r, r],
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoAdTrait.prototype.onBombCdTp_bombCount = function (t, e) {
        if (this.enableTrait()) {
            var r = this.getPlayAdLimit();
            e({
                returnVal: this._playAdCount < r ? this.getBombCntDefault() : this.getBombCntAfterWin(),
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoAdTrait.traitKey = "Tile2DuoXiaoAd";
    Tile2DuoXiaoAdTrait = __decorate([
        mj.trait,
        mj.class("Tile2DuoXiaoAdTrait")
    ], Tile2DuoXiaoAdTrait);
    return Tile2DuoXiaoAdTrait;
}(Trait_1.default));
exports.default = Tile2DuoXiaoAdTrait;

cc._RF.pop();