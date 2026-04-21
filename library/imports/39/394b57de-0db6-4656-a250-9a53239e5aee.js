"use strict";
cc._RF.push(module, '394b5feDbZGVqJQmlMjnlru', 'Tile2MagnetTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var Tile2MagnetTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetTrait, _super);
    function Tile2MagnetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._magnetItemNode = null;
        return _this;
    }
    Tile2MagnetTrait.prototype.isMagnetNodeAlive = function () {
        return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
    };
    Tile2MagnetTrait.prototype.getMagnetItemNode = function () {
        return this._magnetItemNode;
    };
    Tile2MagnetTrait.prototype.getSlotLimit = function () {
        return 3;
    };
    Tile2MagnetTrait.prototype.getPopCnt = function () {
        return 2;
    };
    Tile2MagnetTrait.prototype.isPreconMet = function () {
        return true;
    };
    Tile2MagnetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.levelId || (this.localData.levelId = 0);
        this.localData.popupCount || (this.localData.popupCount = 0);
    };
    Tile2MagnetTrait.prototype.getNodeCfg = function () {
        return {
            url: this.traitData.magnetPrefabUrl || "prefabs/EffectMagnet",
            bundleName: this.traitData.magnetBundleName || "l_magnet"
        };
    };
    Tile2MagnetTrait.prototype.resetPopupCount = function () {
        this.localData.popupCount = 0;
    };
    Tile2MagnetTrait.prototype.onTile2MagnetBhv_nodeCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getNodeCfg()
        });
    };
    Tile2MagnetTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        t.args[0] && this.resetPopupCount();
        e();
    };
    Tile2MagnetTrait.prototype.onT2MagMrgBhv_spCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                url1: "spine/gameplay_Black_hole",
                url2: "spine/gameplay_Black_hole2",
                bundleName: "l_magnet"
            }
        });
    };
    Tile2MagnetTrait.prototype.onT2MagnetItem_enterAni = function (t, e) {
        var r;
        e();
        try {
            var o = t.ins;
            if (!o || !cc.isValid(o.node))
                return;
            this._magnetItemNode = o.node;
            var n = (null === (r = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0;
            if (this.localData.levelId !== n) {
                this.localData.levelId = n;
                this.localData.popupCount = 1;
            }
            else
                this.localData.popupCount = this.localData.popupCount + 1;
        }
        catch (t) { }
    };
    Tile2MagnetTrait.prototype.onT2MagnetItem_onDestroy = function (t, e) {
        this._magnetItemNode = null;
        e();
    };
    Tile2MagnetTrait.prototype.onT2MagnetChk_canMagnet = function (t, e) {
        var r;
        if (this.isMagnetNodeAlive()) {
            e();
        }
        else {
            if (((null === (r = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0) <= 1) {
                e();
            }
            else {
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
    };
    Tile2MagnetTrait.prototype.onT2MagnetChk_chkCon = function (t, e) {
        var r = this.isPreconMet();
        r && (r = this.checkCanShow(t.ins));
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    Tile2MagnetTrait.prototype.checkCanShow = function (t) {
        var e, r = false, o = (null === (e = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        (this.localData.levelId != o || this.localData.popupCount < this.getPopCnt()) && (r = true);
        r && (r = this.checkSlotBarMatches(t));
        var n = AdManager_1.default.getInstance().checkVideoAdIsReady();
        return r && n;
    };
    Tile2MagnetTrait.prototype.checkSlotBarMatches = function (t) {
        var e, r;
        if (!t)
            return false;
        var o = t.context.getTileMapObject();
        o.updateCanMatchTiles();
        var n = o.getCanMatchTiles(), a = t.context.getGameData().slotBarIds || [];
        if (a.length < this.getSlotLimit())
            return false;
        try {
            for (var c = __values(a), l = c.next(); !l.done; l = c.next()) {
                var p = l.value, u = o.getTileObjectByPosId(p);
                if (null == u ? void 0 : u.isValid) {
                    var s = n.get(u.cardId);
                    if (s && s.length >= 2)
                        for (var f = 0; f < s.length; f++)
                            if (s[f].id === u.id)
                                return false;
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (r = c.return) && r.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    Tile2MagnetTrait.prototype.getOffset = function () {
        var t = this.traitData.itemOffset || [-455, -120];
        return cc.v2(t[0], t[1]);
    };
    Tile2MagnetTrait.prototype.getMergeOffset = function () {
        var t = this.traitData.mergeOffset || [210, 0];
        return cc.v2(t[0], t[1]);
    };
    Tile2MagnetTrait.prototype.onTile2MagnetBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getOffset()
        });
    };
    Tile2MagnetTrait.prototype.onT2ScoreFloatBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getMergeOffset().add(cc.v2(0, -50))
        });
    };
    Tile2MagnetTrait.prototype.onT2MagMrgBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getMergeOffset()
        });
    };
    Tile2MagnetTrait.traitKey = "Tile2Magnet";
    __decorate([
        mj.traitEvent("Tile2Magnet_slotLimit")
    ], Tile2MagnetTrait.prototype, "getSlotLimit", null);
    __decorate([
        mj.traitEvent("Tile2Magnet_popCnt")
    ], Tile2MagnetTrait.prototype, "getPopCnt", null);
    __decorate([
        mj.traitEvent("Tile2Magnet_preMet")
    ], Tile2MagnetTrait.prototype, "isPreconMet", null);
    Tile2MagnetTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetTrait")
    ], Tile2MagnetTrait);
    return Tile2MagnetTrait;
}(Trait_1.default));
exports.default = Tile2MagnetTrait;

cc._RF.pop();