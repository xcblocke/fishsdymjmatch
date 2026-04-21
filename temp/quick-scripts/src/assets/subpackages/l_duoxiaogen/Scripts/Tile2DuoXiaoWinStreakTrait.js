"use strict";
cc._RF.push(module, 'a9e21KuGcpMfrplfUJokuEd', 'Tile2DuoXiaoWinStreakTrait');
// subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoWinStreakTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DuoXiaoWinStreakTrait = /** @class */ (function (_super) {
    __extends(Tile2DuoXiaoWinStreakTrait, _super);
    function Tile2DuoXiaoWinStreakTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._winStreak = 0;
        return _this;
    }
    Tile2DuoXiaoWinStreakTrait.prototype.getLevelLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getWinStreakLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.winStreakLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getDuoXiaoCount = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.duoXiaoCount) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getBombCntDefault = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCntDefault) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getBombCntAfterWin = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCountAfterWin) && void 0 !== e ? e : 0;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.setWinStreak = function (t) {
        this._winStreak = t;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getWinStreak = function () {
        return this._winStreak;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.enableTrait = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return this.isMatchGameType(t);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.isMatchGameType = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onTile2FailBhv_start = function (t, e) {
        this.enableTrait() && this.setWinStreak(0);
        e();
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onTile2WinBhv_start = function (t, e) {
        this.enableTrait() && this.setWinStreak(this.getWinStreak() + 1);
        e();
    };
    Tile2DuoXiaoWinStreakTrait.prototype.checkCanGen = function () {
        var t, e, r = this.getLevelLimit(), o = (null === (e = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        return !(r > 0 && o <= r);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onT2DuoxiaoGenTt_genTypes = function (t, e) {
        var r = "";
        if (this.checkCanGen()) {
            if (this.getWinStreak() < this.getWinStreakLimit())
                r = "" + TileTypeEnum_1.ETileType.Bomb;
            else {
                var o = this.getDuoXiaoCount();
                o > 0 && (r = "" + TileTypeEnum_1.ETileType.DuoxiaoCard);
                this.getBombCntAfterWin() > 0 && (r = r + (o > 0 ? "," : "") + TileTypeEnum_1.ETileType.Bomb);
            }
        }
        e({
            returnVal: r,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
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
    Tile2DuoXiaoWinStreakTrait.prototype.onBombCdTp_bombCount = function (t, e) {
        if (this.enableTrait()) {
            e({
                returnVal: this.getWinStreak() < this.getWinStreakLimit() ? this.getBombCntDefault() : this.getBombCntAfterWin(),
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoWinStreakTrait.traitKey = "Tile2DuoXiaoWinStreak";
    Tile2DuoXiaoWinStreakTrait = __decorate([
        mj.trait,
        mj.class("Tile2DuoXiaoWinStreakTrait")
    ], Tile2DuoXiaoWinStreakTrait);
    return Tile2DuoXiaoWinStreakTrait;
}(Trait_1.default));
exports.default = Tile2DuoXiaoWinStreakTrait;

cc._RF.pop();