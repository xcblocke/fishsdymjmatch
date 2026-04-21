"use strict";
cc._RF.push(module, 'acf64jNOnlIIK11pU/FJH7S', 'PropInitTrait');
// subpackages/l_propInit/Scripts/PropInitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PropInitTrait = /** @class */ (function (_super) {
    __extends(PropInitTrait, _super);
    function PropInitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropInitTrait.prototype.isNormalGame = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    PropInitTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    PropInitTrait.prototype.isPropInitDone = function (t) {
        var e = "isPropInitDone_" + t;
        return !this.isLocalEmpty(this.localData[e]) && this.localData[e];
    };
    PropInitTrait.prototype.setPropInitDone = function (t) {
        var e = "isPropInitDone_" + t;
        this.localData[e] = true;
    };
    PropInitTrait.prototype.onGsListener_onNewGame = function (t, e) {
        var r, o, i, n, p = t.args[0];
        if (this.isNormalGame(p)) {
            var s = UserModel_1.default.getInstance().getGameDataByGameType(p), l = s.getLevelId(), c = null !== (n = null === (i = this.traitData) || void 0 === i ? void 0 : i.propList) && void 0 !== n ? n : [];
            try {
                for (var u = __values(c), f = u.next(); !f.done; f = u.next()) {
                    var d = f.value;
                    if (!(d.initNum <= 0 || this.isPropInitDone(d.type) || l < d.unlockLv)) {
                        this.setPropInitDone(d.type);
                        this.deliverProp(s, d.type, d.initNum);
                    }
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    f && !f.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            e();
        }
        else
            e();
    };
    PropInitTrait.prototype.deliverProp = function (t, e, r) {
        var o = 0, i = GameTypeEnums_1.EItemId.Shuffle;
        if (e === IUserData_1.EItemType.Shuffle) {
            t.changeShuffleNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Shuffle, r);
            o = t.getShuffleNums();
        }
        else if (e === IUserData_1.EItemType.Hint) {
            t.changeHitTipsNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Hint, r);
            o = t.getHitTipsNums();
            i = GameTypeEnums_1.EItemId.Hint;
        }
        else if (e === IUserData_1.EItemType.Undo) {
            t.changeRevertNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Revert, r);
            o = t.getRevertNums();
            i = GameTypeEnums_1.EItemId.Revert;
        }
        DGameGetItem_1.DotGameGetItem.dotGetItem(t, {
            itemId: i,
            number: r,
            afterNum: o,
            reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
            reasonInfo: "首次进入送" + r + "次" + GameTypeEnums_1.EItemName[i],
            replace: true
        });
    };
    PropInitTrait.prototype.onT2NodeBtmVw_isPropUnlimit = function (t, e) {
        var r = t.args[0];
        if (cc.isValid(r) && cc.isValid(r.parent)) {
            var o = r.parent.name, i = this.getPropType(o), n = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isUnlimitLevel(n, i)) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    PropInitTrait.prototype.onT2NodeBtmVw_isPropLocked = function (t, e) {
        var r = t.args[0];
        if (cc.isValid(r) && cc.isValid(r.parent)) {
            var o = r.parent.name, i = this.getPropType(o), n = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isUnlocked(n, i)) {
                e();
            }
            else {
                e({
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
        else
            e();
    };
    PropInitTrait.prototype.isUnlimitLevel = function (t, e) {
        var r = this.getPropItem(e);
        if (!r)
            return false;
        if (!this.isNormalGame(t))
            return false;
        var o = UserModel_1.default.getInstance().getGameDataByGameType(t).getLevelId();
        return !!r.unlimitLvs.includes(o);
    };
    PropInitTrait.prototype.isUnlocked = function (t, e) {
        var r = this.getPropItem(e);
        return !!r && !!this.isNormalGame(t) && UserModel_1.default.getInstance().getGameDataByGameType(t).getLevelId() >= r.unlockLv;
    };
    PropInitTrait.prototype.getPropType = function (t) {
        return "btnShuffle" === t ? IUserData_1.EItemType.Shuffle : "btnPropHint" === t ? IUserData_1.EItemType.Hint : "btnPropRevert" === t ? IUserData_1.EItemType.Undo : IUserData_1.EItemType.None;
    };
    PropInitTrait.prototype.getPropItem = function (t) {
        var e, r;
        return (null !== (r = null === (e = this.traitData) || void 0 === e ? void 0 : e.propList) && void 0 !== r ? r : []).find(function (e) {
            return e.type === t;
        });
    };
    PropInitTrait.prototype.onGameData_isShuffleEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Shuffle)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_isHitTipEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Hint)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_isRevertEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Undo)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_chgShuffle = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Shuffle)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onGameData_chgHitTips = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Hint)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onGameData_chgRevert = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Undo)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onT2NodeBtmVw_showLockTips = function (t, e) {
        var r = t.args[0], o = this.getPropItem(r);
        if (o) {
            var i = I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("MahjongTiles_ProHint_1"), o.unlockLv);
            ControllerManager_1.default.getInstance().pushViewByController("PropLockTipController", {
                isReuse: false,
                tips: i,
                noBlock: true,
                isGlobal: false,
                bgStyle: null,
                isShowAction: false,
                tipDelayTime: 0.5
            });
            e();
        }
        else
            e();
    };
    PropInitTrait.traitKey = "PropInit";
    PropInitTrait = __decorate([
        mj.trait,
        mj.class("PropInitTrait")
    ], PropInitTrait);
    return PropInitTrait;
}(Trait_1.default));
exports.default = PropInitTrait;

cc._RF.pop();