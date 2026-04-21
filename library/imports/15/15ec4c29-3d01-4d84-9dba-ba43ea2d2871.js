"use strict";
cc._RF.push(module, '15ec4wpPQFNhJ26ukPqLShx', 'StopFullComboInDaxiaoTrait');
// subpackages/l_stopFullComboInDaxiao/Scripts/StopFullComboInDaxiaoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var StopFullComboInDaxiaoTrait = /** @class */ (function (_super) {
    __extends(StopFullComboInDaxiaoTrait, _super);
    function StopFullComboInDaxiaoTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    StopFullComboInDaxiaoTrait.prototype.onLoad = function () {
        var t, o, i;
        _super.prototype.onLoad.call(this);
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
        this._config = {
            blockCombo: void 0 === (null === (t = this._traitData) || void 0 === t ? void 0 : t.blockCombo) || 1 === Number(this._traitData.blockCombo),
            isDaxiao: void 0 === (null === (o = this._traitData) || void 0 === o ? void 0 : o.isDaxiao) || 1 === Number(this._traitData.isDaxiao),
            isLianxiao: void 0 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.isLianxiao) || 1 === Number(this._traitData.isLianxiao)
        };
    };
    StopFullComboInDaxiaoTrait.prototype.getBoardFlags = function (a) {
        var t, o = null === (t = this.localData.byGameType) || void 0 === t ? void 0 : t[a];
        return o ? "boolean" == typeof o ? {
            hasDaxiao: o,
            hasLianxiao: o
        } : "object" != typeof o ? {
            hasDaxiao: false,
            hasLianxiao: false
        } : {
            hasDaxiao: !!o.hasDaxiao,
            hasLianxiao: !!o.hasLianxiao
        } : {
            hasDaxiao: false,
            hasLianxiao: false
        };
    };
    StopFullComboInDaxiaoTrait.prototype.onInitViewBhv_crtTls = function (a, t) {
        var o, i;
        this._gameType = null === (i = null === (o = a.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
        t();
    };
    StopFullComboInDaxiaoTrait.prototype.onIptSetLv_newGComp = function (a, t) {
        var o, i, e = null === (o = a.ins) || void 0 === o ? void 0 : o.tileMapObject, r = false, n = false, s = GameTypeEnums_1.MjGameType.None;
        if (e && "function" == typeof e.isBoardTileHasType) {
            r = e.isBoardTileHasType([TileTypeEnum_1.ETileType.DaxiaoCard], true);
            n = e.isBoardTileHasType([TileTypeEnum_1.ETileType.DuoxiaoCard], true);
            s = (null === (i = e.gameContext) || void 0 === i ? void 0 : i.gameType) || GameTypeEnums_1.MjGameType.None;
        }
        this.localData.byGameType[s] = {
            hasDaxiao: r,
            hasLianxiao: n
        };
        this.localData.byGameType = this.localData.byGameType;
        t();
    };
    StopFullComboInDaxiaoTrait.prototype.onFullComboChk_canFullCb = function (a, t) {
        var o = this.getBoardFlags(this._gameType), i = this._config;
        if (i.blockCombo) {
            var e = i.isDaxiao && o.hasDaxiao, r = i.isLianxiao && o.hasLianxiao;
            if (e || r) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    StopFullComboInDaxiaoTrait.prototype.onRwdComboChk_sTriNow = function (a, t) {
        var o = this.getBoardFlags(this._gameType), i = this._config;
        if (i.blockCombo) {
            var e = i.isDaxiao && o.hasDaxiao, r = i.isLianxiao && o.hasLianxiao;
            if (e || r) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    StopFullComboInDaxiaoTrait.traitKey = "StopFullComboInDaxiao";
    StopFullComboInDaxiaoTrait = __decorate([
        mj.trait,
        mj.class("StopFullComboInDaxiaoTrait")
    ], StopFullComboInDaxiaoTrait);
    return StopFullComboInDaxiaoTrait;
}(Trait_1.default));
exports.default = StopFullComboInDaxiaoTrait;

cc._RF.pop();