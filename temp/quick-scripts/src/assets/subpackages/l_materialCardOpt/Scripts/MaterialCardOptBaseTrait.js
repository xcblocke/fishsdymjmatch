"use strict";
cc._RF.push(module, '2c94bDZEGtJKao/2bbYsC9D', 'MaterialCardOptBaseTrait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOptBaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityModel_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var m = ["gameplay_img_mj_dn", "gameplay_img_mj_up", "gameplay_select_mj"];
var MaterialCardOptBaseTrait = /** @class */ (function (_super) {
    __extends(MaterialCardOptBaseTrait, _super);
    function MaterialCardOptBaseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCardOptBaseTrait_1 = MaterialCardOptBaseTrait;
    MaterialCardOptBaseTrait.prototype.getMaterialCardList = function () {
        return MaterialCardOptBaseTrait_1.MATERIAL_CARD_LIST;
    };
    MaterialCardOptBaseTrait.prototype.getCurMaterialCard = function () {
        var t;
        return null !== (t = UserModel_1.default.getInstance().getCurrentGameData().getCardMaterialID()) && void 0 !== t ? t : 0;
    };
    MaterialCardOptBaseTrait.prototype.setCurMaterialCard = function (t) {
        UserModel_1.default.getInstance().getCurrentGameData().setCardMaterialID(t);
    };
    MaterialCardOptBaseTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    MaterialCardOptBaseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "DGameEnd_adjust"
            }]);
    };
    MaterialCardOptBaseTrait.prototype.getBundleNameById = function (t) {
        var e = this.getMaterialCardList().find(function (e) {
            return e.id === t;
        });
        return e ? e.bundle : null;
    };
    MaterialCardOptBaseTrait.prototype.getAvailableMaterials = function () {
        var t, e, r = LowPriorityModel_1.default.getInstance(), a = [];
        try {
            for (var i = __values(this.getMaterialCardList()), o = i.next(); !o.done; o = i.next()) {
                var l = o.value;
                if (l.isLocal) {
                    a.push(l.id);
                }
                else {
                    if (LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(l.bundle)) {
                        a.push(l.id);
                    }
                    else {
                        r.isHasDownloaded(l.bundle) && a.push(l.id);
                    }
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (e = i.return) && e.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    MaterialCardOptBaseTrait.prototype.getCurrentGameType = function () {
        var t, e;
        return null !== (e = null === (t = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === t ? void 0 : t.gameType) && void 0 !== e ? e : GameTypeEnums_1.MjGameType.Normal;
    };
    MaterialCardOptBaseTrait.prototype.isNormalMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    MaterialCardOptBaseTrait.prototype.isTravelMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel;
    };
    MaterialCardOptBaseTrait.prototype.isDailyMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.DailyChallenge;
    };
    MaterialCardOptBaseTrait.prototype.isTile2Mode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    MaterialCardOptBaseTrait.prototype.getCurrentGameDataLevel = function () {
        var t, e;
        return null !== (e = null === (t = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === t ? void 0 : t.getLevelId()) && void 0 !== e ? e : 0;
    };
    MaterialCardOptBaseTrait.prototype.isGameModeMatch = function (t) {
        var e = this.getCurrentGameType();
        return t.includes(e);
    };
    MaterialCardOptBaseTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var r;
        try {
            var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if ("gameplay_img_mj_dn" !== a && "gameplay_img_mj_up" !== a && "gameplay_select_mj" !== a) {
                e();
                return;
            }
            var i = this.getCurMaterialCard();
            if (0 === i) {
                e();
                return;
            }
            var o = this.getBundleNameById(i);
            if (!o) {
                e();
                return;
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: "texture/" + a,
                    bundleName: o,
                    fromAtlas: false
                }
            });
        }
        catch (t) {
            console.error("[" + this.constructor.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOptBaseTrait.prototype.onTileNodeObj_playAnim = function (t, e) {
        var r;
        try {
            if ("spine/rollcard/gameplay_flip" !== (null === (r = t.args) || void 0 === r ? void 0 : r[0])) {
                e();
                return;
            }
            var a = this.getCurMaterialCard();
            if (0 === a) {
                e();
                return;
            }
            var i = this.getBundleNameById(a);
            if (!i) {
                e();
                return;
            }
            t.args[0] = "spine/gameplay_flip_" + a;
            t.args[6] = i;
            e();
        }
        catch (t) {
            console.error("[" + this.constructor.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOptBaseTrait.prototype.onTile2NodeObj_playAnim = function (t, e) {
        var r;
        try {
            if ("spine/rollcard/gameplay_flip" !== (null === (r = t.args) || void 0 === r ? void 0 : r[0])) {
                e();
                return;
            }
            var a = this.getCurMaterialCard();
            if (0 === a) {
                e();
                return;
            }
            var i = this.getBundleNameById(a);
            if (!i) {
                e();
                return;
            }
            t.args[0] = "spine/gameplay_flip_" + a;
            t.args[6] = i;
            e();
        }
        catch (t) {
            console.error("[" + this.constructor.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOptBaseTrait.prototype.onDGameEnd_adjust = function (t, e) {
        var r = t.args[0];
        r && (r.material_id = this.getCurMaterialCard());
        e();
    };
    MaterialCardOptBaseTrait.prototype.refreshExistingCards = function (t) {
        var e, r = null === (e = null == t ? void 0 : t.getTileNodeManager) || void 0 === e ? void 0 : e.call(t);
        r && r.getTileNodes().forEach(function (t) {
            var e, r, a, i;
            if (null === (e = t.tileObject) || void 0 === e ? void 0 : e.isValid)
                try {
                    null === (r = t.updateImgCardBg) || void 0 === r || r.call(t);
                    null === (a = t.updateImgCard) || void 0 === a || a.call(t);
                    t._imgSelectedCardBg && (null === (i = t.updateImgSelectedCardBg) || void 0 === i || i.call(t));
                }
                catch (t) { }
        });
    };
    MaterialCardOptBaseTrait.prototype.addPreloadRes = function (t, e) {
        var r, a, i, o;
        if (t && "function" == typeof t.addPreloadRes) {
            var l = Array.isArray(e) ? e : [e];
            try {
                for (var s = __values(l), d = s.next(); !d.done; d = s.next()) {
                    var u = d.value;
                    if (0 !== u) {
                        var c = this.getBundleNameById(u);
                        if (c)
                            try {
                                for (var p = (i = void 0, __values(m)), f = p.next(); !f.done; f = p.next()) {
                                    var h = f.value;
                                    t.addPreloadRes("SpriteFrame", c + ":texture/" + h);
                                }
                            }
                            catch (t) {
                                i = {
                                    error: t
                                };
                            }
                            finally {
                                try {
                                    f && !f.done && (o = p.return) && o.call(p);
                                }
                                finally {
                                    if (i)
                                        throw i.error;
                                }
                            }
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
                    d && !d.done && (a = s.return) && a.call(s);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
        }
    };
    MaterialCardOptBaseTrait.prototype.loadResById = function (t, e) {
        var r, a, i = ControllerManager_1.default.getInstance().getControByName(t);
        if (i && "function" == typeof i.loadRes) {
            var o = Array.isArray(e) ? e : [e], l = function l(t) {
                var e, r;
                if (0 === t)
                    return "continue";
                var a = s.getBundleNameById(t);
                if (!a)
                    return "continue";
                var o = function o(t) {
                    i.loadRes("texture/" + t, cc.SpriteFrame, a).then(function () { }).catch(function () { });
                };
                try {
                    for (var l = (e = void 0, __values(m)), d = l.next(); !d.done; d = l.next())
                        o(d.value);
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        d && !d.done && (r = l.return) && r.call(l);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
            }, s = this;
            try {
                for (var d = __values(o), u = d.next(); !u.done; u = d.next())
                    l(u.value);
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    u && !u.done && (a = d.return) && a.call(d);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
        }
    };
    var MaterialCardOptBaseTrait_1;
    MaterialCardOptBaseTrait.traitKey = "MaterialCardOptBase";
    MaterialCardOptBaseTrait.MATERIAL_CARD_LIST = [{
            id: 0,
            name: "默认材质",
            bundle: "",
            isLocal: true
        }, {
            id: 2,
            name: "材质2",
            bundle: "l_materialCard2",
            isLocal: true
        }, {
            id: 4,
            name: "材质4",
            bundle: "l_materialCard4",
            isLocal: true
        }, {
            id: 7,
            name: "材质7",
            bundle: "l_materialCard7",
            isLocal: true
        }, {
            id: 8,
            name: "材质8",
            bundle: "l_materialCard8",
            isLocal: true
        }, {
            id: 11,
            name: "材质11",
            bundle: "l_materialCard11",
            isLocal: true
        }, {
            id: 12,
            name: "材质12",
            bundle: "l_materialCard12",
            isLocal: true
        }, {
            id: 19,
            name: "材质19",
            bundle: "l_materialCard19",
            isLocal: true
        }, {
            id: 20,
            name: "材质20",
            bundle: "l_materialCard20",
            isLocal: true
        }, {
            id: 1,
            name: "材质1",
            bundle: "r_materialCard1",
            isLocal: false
        }, {
            id: 3,
            name: "材质3",
            bundle: "r_materialCard3",
            isLocal: false
        }, {
            id: 5,
            name: "材质5",
            bundle: "r_materialCard5",
            isLocal: false
        }, {
            id: 6,
            name: "材质6",
            bundle: "r_materialCard6",
            isLocal: false
        }, {
            id: 9,
            name: "材质9",
            bundle: "r_materialCard9",
            isLocal: false
        }, {
            id: 10,
            name: "材质10",
            bundle: "r_materialCard10",
            isLocal: false
        }, {
            id: 13,
            name: "材质13",
            bundle: "r_materialCard13",
            isLocal: false
        }, {
            id: 14,
            name: "材质14",
            bundle: "r_materialCard14",
            isLocal: false
        }, {
            id: 15,
            name: "材质15",
            bundle: "r_materialCard15",
            isLocal: false
        }, {
            id: 16,
            name: "材质16",
            bundle: "r_materialCard16",
            isLocal: false
        }, {
            id: 17,
            name: "材质17",
            bundle: "r_materialCard17",
            isLocal: false
        }, {
            id: 18,
            name: "材质18",
            bundle: "r_materialCard18",
            isLocal: false
        }, {
            id: 21,
            name: "材质21",
            bundle: "r_materialCard21",
            isLocal: false
        }, {
            id: 22,
            name: "材质22",
            bundle: "r_materialCard22",
            isLocal: false
        }, {
            id: 23,
            name: "材质23",
            bundle: "r_materialCard23",
            isLocal: false
        }, {
            id: 24,
            name: "材质24",
            bundle: "r_materialCard24",
            isLocal: false
        }, {
            id: 25,
            name: "材质25",
            bundle: "r_materialCard25",
            isLocal: false
        }, {
            id: 26,
            name: "材质26",
            bundle: "r_materialCard26",
            isLocal: false
        }, {
            id: 27,
            name: "材质27",
            bundle: "r_materialCard27",
            isLocal: false
        }, {
            id: 28,
            name: "材质28",
            bundle: "r_materialCard28",
            isLocal: false
        }, {
            id: 29,
            name: "材质29",
            bundle: "r_materialCard29",
            isLocal: false
        }, {
            id: 30,
            name: "材质30",
            bundle: "r_materialCard30",
            isLocal: false
        }, {
            id: 31,
            name: "材质31",
            bundle: "r_materialCard31",
            isLocal: false
        }, {
            id: 32,
            name: "材质32",
            bundle: "r_materialCard32",
            isLocal: false
        }, {
            id: 33,
            name: "材质33",
            bundle: "r_materialCard33",
            isLocal: false
        }, {
            id: 34,
            name: "材质34",
            bundle: "r_materialCard34",
            isLocal: false
        }, {
            id: 35,
            name: "材质35",
            bundle: "r_materialCard35",
            isLocal: false
        }, {
            id: 36,
            name: "材质36",
            bundle: "r_materialCard36",
            isLocal: false
        }, {
            id: 37,
            name: "材质37",
            bundle: "r_materialCard37",
            isLocal: false
        }, {
            id: 38,
            name: "材质38",
            bundle: "r_materialCard38",
            isLocal: false
        }, {
            id: 39,
            name: "材质39",
            bundle: "r_materialCard39",
            isLocal: false
        }, {
            id: 40,
            name: "材质40",
            bundle: "r_materialCard40",
            isLocal: false
        }];
    MaterialCardOptBaseTrait = MaterialCardOptBaseTrait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOptBaseTrait")
    ], MaterialCardOptBaseTrait);
    return MaterialCardOptBaseTrait;
}(Trait_1.default));
exports.default = MaterialCardOptBaseTrait;

cc._RF.pop();