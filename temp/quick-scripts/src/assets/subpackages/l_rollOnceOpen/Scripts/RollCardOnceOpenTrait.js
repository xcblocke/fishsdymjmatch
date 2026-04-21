"use strict";
cc._RF.push(module, 'b89819RMklEN4q7wbUx29ii', 'RollCardOnceOpenTrait');
// subpackages/l_rollOnceOpen/Scripts/RollCardOnceOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RollCardOnceOpenTrait = /** @class */ (function (_super) {
    __extends(RollCardOnceOpenTrait, _super);
    function RollCardOnceOpenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardOnceOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    };
    RollCardOnceOpenTrait.prototype.onTileNodeObj_BeginSelected = function (e, t) {
        var o, a, r, l, p, c = e.ins, u = null == c ? void 0 : c.tileObject;
        if (u && u.type === TileTypeEnum_1.ETileType.RollCard) {
            var d = UserModel_1.default.getInstance().getCurrentGameType(), y = null === (o = u.tileMapObject) || void 0 === o ? void 0 : o.gameContext, f = null !== (p = null === (l = null === (r = null === (a = null == y ? void 0 : y.getGameData) || void 0 === a ? void 0 : a.call(y)) || void 0 === r ? void 0 : r.getLevelId) || void 0 === l ? void 0 : l.call(r)) && void 0 !== p ? p : 0, v = u.id;
            if (d === GameTypeEnums_1.MjGameType.Tile2Normal) {
                t();
                return;
            }
            this.markOpened(d, f, v);
        }
        t();
    };
    RollCardOnceOpenTrait.prototype.onRollCTNode_keepOpen = function (e, t) {
        var o, a, r, l, p, u = e.ins, d = null == u ? void 0 : u.tileObject;
        if (d && d.type === TileTypeEnum_1.ETileType.RollCard) {
            var y = UserModel_1.default.getInstance().getCurrentGameType(), f = null === (o = d.tileMapObject) || void 0 === o ? void 0 : o.gameContext, v = null !== (p = null === (l = null === (r = null === (a = null == f ? void 0 : f.getGameData) || void 0 === a ? void 0 : a.call(f)) || void 0 === r ? void 0 : r.getLevelId) || void 0 === l ? void 0 : l.call(r)) && void 0 !== p ? p : 0, T = d.id;
            if (this.isOpened(y, v, T) && y !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    RollCardOnceOpenTrait.prototype.onIptSetLv_newGComp = function (e, t) {
        var o, a, r = e.ins, l = null === (o = null == r ? void 0 : r.input) || void 0 === o ? void 0 : o.levelData, i = UserModel_1.default.getInstance().getCurrentGameType(), n = null !== (a = null == l ? void 0 : l.levelId) && void 0 !== a ? a : 0;
        this.localData.byGameType[i] = {
            levelId: n,
            openedTileIds: []
        };
        this.localData.byGameType = this.localData.byGameType;
        t();
    };
    RollCardOnceOpenTrait.prototype.getStore = function (e, t) {
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
        var o = this.localData.byGameType[e];
        if (!o || "object" != typeof o || o.levelId !== t || !Array.isArray(o.openedTileIds)) {
            var a = {
                levelId: t,
                openedTileIds: []
            };
            this.localData.byGameType[e] = a;
            this.localData.byGameType = this.localData.byGameType;
            return a;
        }
        return o;
    };
    RollCardOnceOpenTrait.prototype.isOpened = function (e, t, o) {
        return !!o && this.getStore(e, t).openedTileIds.includes(o);
    };
    RollCardOnceOpenTrait.prototype.markOpened = function (e, t, o) {
        if (o) {
            var a = this.getStore(e, t);
            if (!a.openedTileIds.includes(o)) {
                a.openedTileIds.push(o);
                this.localData.byGameType = this.localData.byGameType;
            }
        }
    };
    RollCardOnceOpenTrait.traitKey = "RollCardOnceOpen";
    __decorate([
        mj.traitEvent("RollOnceOpen_isOpened")
    ], RollCardOnceOpenTrait.prototype, "isOpened", null);
    RollCardOnceOpenTrait = __decorate([
        mj.trait,
        mj.class("RollCardOnceOpenTrait")
    ], RollCardOnceOpenTrait);
    return RollCardOnceOpenTrait;
}(Trait_1.default));
exports.default = RollCardOnceOpenTrait;

cc._RF.pop();