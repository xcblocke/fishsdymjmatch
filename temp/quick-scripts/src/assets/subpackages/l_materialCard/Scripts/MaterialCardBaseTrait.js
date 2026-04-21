"use strict";
cc._RF.push(module, 'bf7f4OZ+gJES6lrmp7/jt4d', 'MaterialCardBaseTrait');
// subpackages/l_materialCard/Scripts/MaterialCardBaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardBaseTrait = /** @class */ (function (_super) {
    __extends(MaterialCardBaseTrait, _super);
    function MaterialCardBaseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCardBaseTrait_1 = MaterialCardBaseTrait;
    MaterialCardBaseTrait.prototype.getCurMaterialCard = function () {
        var t;
        return null !== (t = UserModel_1.default.getInstance().getCurrentGameData().getCardMaterialID()) && void 0 !== t ? t : 0;
    };
    MaterialCardBaseTrait.prototype.setCurMaterialCard = function (t) {
        UserModel_1.default.getInstance().getCurrentGameData().setCardMaterialID(t);
    };
    MaterialCardBaseTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    MaterialCardBaseTrait.prototype.onLoad = function () {
        var e, a;
        _super.prototype.onLoad.call(this);
        if (!MaterialCardBaseTrait_1._remoteTasksAdded) {
            MaterialCardBaseTrait_1._remoteTasksAdded = true;
            var i = MaterialCardBaseTrait_1.MATERIAL_CARD_LIST.filter(function (t) {
                return !t.isLocal;
            });
            try {
                for (var o = __values(i), n = o.next(); !n.done; n = o.next()) {
                    var s = n.value;
                    LowPriorityBundleLoader_1.default.getInstance().addTask(s.bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.Default);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    n && !n.done && (a = o.return) && a.call(o);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
        this.registerEvent([{
                event: "DGameEnd_adjust"
            }]);
    };
    MaterialCardBaseTrait.prototype.getBundleNameById = function (t) {
        var e = MaterialCardBaseTrait_1.MATERIAL_CARD_LIST.find(function (e) {
            return e.id === t;
        });
        return e ? e.bundle : null;
    };
    MaterialCardBaseTrait.prototype.getAvailableMaterials = function () {
        var t, e, a = [];
        try {
            for (var i = __values(MaterialCardBaseTrait_1.MATERIAL_CARD_LIST), o = i.next(); !o.done; o = i.next()) {
                var n = o.value;
                if (n.isLocal) {
                    a.push(n.id);
                }
                else {
                    LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(n.bundle) && a.push(n.id);
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
    MaterialCardBaseTrait.prototype.switchToNextMaterialCard = function () {
        var t = this.getAvailableMaterials();
        if (0 !== t.length) {
            var e = this.getCurMaterialCard();
            if (1 !== t.length) {
                var r = t.filter(function (t) {
                    return t !== e;
                });
                0 === r.length && (r = t);
                var a = r[Math.floor(Math.random() * r.length)];
                this.setCurMaterialCard(a);
            }
            else {
                var i = t[0];
                this.setCurMaterialCard(i);
            }
        }
    };
    MaterialCardBaseTrait.prototype.getCurrentGameType = function () {
        var t, e;
        return null !== (e = null === (t = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === t ? void 0 : t.gameType) && void 0 !== e ? e : GameTypeEnums_1.MjGameType.Normal;
    };
    MaterialCardBaseTrait.prototype.isNormalMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    MaterialCardBaseTrait.prototype.isTravelMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel;
    };
    MaterialCardBaseTrait.prototype.isClassicMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    MaterialCardBaseTrait.prototype.isDailyMode = function () {
        return this.getCurrentGameType() === GameTypeEnums_1.MjGameType.DailyChallenge;
    };
    MaterialCardBaseTrait.prototype.getCurrentLevel = function () {
        var t;
        return null !== (t = UserModel_1.default.getInstance().normalData.getLevelId()) && void 0 !== t ? t : 0;
    };
    MaterialCardBaseTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var r;
        try {
            var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if ("gameplay_img_mj_dn" === a || "gameplay_img_mj_up" === a || "gameplay_select_mj" === a) {
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
                var l = "texture/" + a;
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: l,
                        bundleName: o,
                        fromAtlas: false
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + this.constructor.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardBaseTrait.prototype.onTileNodeObj_playAnim = function (t, e) {
        var r;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (r = t.args) || void 0 === r ? void 0 : r[0])) {
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
                var o = "spine/gameplay_flip_" + a;
                t.args[0] = o;
                t.args[6] = i;
                e();
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + this.constructor.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardBaseTrait.prototype.onDGameEnd_adjust = function (t, e) {
        var r = t.args[0];
        r && (r.material_id = this.getCurMaterialCard());
        e();
    };
    MaterialCardBaseTrait.prototype.refreshExistingCards = function (t) {
        var e, r = null === (e = null == t ? void 0 : t.getTileNodeManager) || void 0 === e ? void 0 : e.call(t);
        if (r) {
            r.getTileNodes().forEach(function (t) {
                var e = t.tileObject;
                if (e && e.isValid)
                    try {
                        t.updateImgCardBg && "function" == typeof t.updateImgCardBg && t.updateImgCardBg();
                        t.updateImgCard && "function" == typeof t.updateImgCard && t.updateImgCard();
                        t._imgSelectedCardBg && t.updateImgSelectedCardBg && "function" == typeof t.updateImgSelectedCardBg && t.updateImgSelectedCardBg();
                    }
                    catch (t) { }
            });
        }
    };
    var MaterialCardBaseTrait_1;
    MaterialCardBaseTrait.traitKey = "MaterialCardBase";
    MaterialCardBaseTrait._remoteTasksAdded = false;
    MaterialCardBaseTrait.MATERIAL_CARD_LIST = [{
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
        }];
    MaterialCardBaseTrait = MaterialCardBaseTrait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardBaseTrait")
    ], MaterialCardBaseTrait);
    return MaterialCardBaseTrait;
}(Trait_1.default));
exports.default = MaterialCardBaseTrait;

cc._RF.pop();