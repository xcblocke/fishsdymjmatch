"use strict";
cc._RF.push(module, '72989XqxPBM7rTI4e8R0u9R', 'RankTile2ModeTrait');
// subpackages/l_rankTIle2Mode/Scripts/RankTile2ModeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var Tile2NormalGameData_1 = require("../../../Scripts/core/simulator/data/Tile2NormalGameData");
var RankTile2ModeTrait = /** @class */ (function (_super) {
    __extends(RankTile2ModeTrait, _super);
    function RankTile2ModeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tile2BeforeWinBehavior = null;
        return _this;
    }
    RankTile2ModeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankTile2ModeTrait.prototype.getMessageListeners = function () {
        return {
            RankBoxVw_destroy: this.onMsgRankBoxVwDestory.bind(this),
            RankBonusVw_destroy: this.onMsgRankBonusVwDestory.bind(this)
        };
    };
    RankTile2ModeTrait.prototype.onMsgRankBoxVwDestory = function () {
        cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
        this._tile2BeforeWinBehavior = null;
    };
    RankTile2ModeTrait.prototype.onMsgRankBonusVwDestory = function () {
        cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
        this._tile2BeforeWinBehavior = null;
    };
    RankTile2ModeTrait.prototype.onTile2BfWinBhv_doOthLgc = function (e, t) {
        this._tile2BeforeWinBehavior = e.ins;
        var n = mj.getClassByName("RankModel");
        if (n) {
            if (1 != n.getInstance().getNowState())
                t();
            else {
                n.getInstance().levelPassed();
                if (Tile2NormalGameData_1.default.getInstance().getRankCardCount() > 0) {
                    n.getInstance().addGameCount();
                    this.pushController("RankBonusController", {
                        isReuse: true,
                        isShowAction: false,
                        instance: e.ins
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else {
                    n.getInstance().resetWinStreakCount();
                    t();
                }
            }
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onTile2WinVw_destroy = function (e, t) {
        var n = mj.getClassByName("RankTrait");
        if (n) {
            n.getInstance().judgeHasRankReward(true);
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onIptT2Shuffle_exec = function (e, t) {
        var n = e.args[0], r = mj.getClassByName("RankModel");
        if (r) {
            var i = r.getInstance();
            i.hasOpeningActivity() && n.from === GameInputEnum_1.EShuffleFrom.Free && i.levelFailed();
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onTile2FailVw_replay = function (e, t) {
        var n = mj.getClassByName("RankModel");
        if (n) {
            var r = n.getInstance();
            r.hasOpeningActivity() && r.levelFailed();
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onT2ClearEffBhv_playAni = function (e, t) {
        var n, r, i = mj.getClassByName("RankTrait"), o = mj.getClassByName("RankModel");
        if (i && o) {
            if (o.getInstance().hasOpeningActivity()) {
                var a = null === (n = e.args) || void 0 === n ? void 0 : n[1];
                if (null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.isRankCard) {
                    i.getInstance().checkSpecialCard(null, e.ins.context);
                    e.ins.finish();
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onT2GameCtrl_getTileTypes = function (e, t) {
        var n = mj.getClassByName("RankModel"), r = mj.getClassByName("RankTrait");
        if (n && r) {
            r.getInstance().judgeFirstOpenRank();
            n.getInstance().hasOpeningActivity() && (e.beforReturnVal = e.beforReturnVal + "," + TileTypeEnum_1.ETileType.RankCard);
            t({
                returnVal: e.beforReturnVal
            });
        }
        else
            t();
    };
    RankTile2ModeTrait.traitKey = "RankTile2Mode";
    RankTile2ModeTrait.nextTimeOut = -1;
    RankTile2ModeTrait = __decorate([
        mj.trait,
        mj.class("RankTile2ModeTrait")
    ], RankTile2ModeTrait);
    return RankTile2ModeTrait;
}(Trait_1.default));
exports.default = RankTile2ModeTrait;

cc._RF.pop();