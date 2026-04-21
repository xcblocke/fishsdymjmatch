
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCardOpt/Scripts/MaterialCardOptBaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZE9wdC9TY3JpcHRzL01hdGVyaWFsQ2FyZE9wdEJhc2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCxxR0FBZ0c7QUFDaEcsdUZBQWtGO0FBQ2xGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsMEZBQXFGO0FBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUczRTtJQUFzRCw0Q0FBSztJQUEzRDs7SUF1ZEEsQ0FBQztpQ0F2ZG9CLHdCQUF3QjtJQWdOM0Msc0RBQW1CLEdBQW5CO1FBQ0UsT0FBTywwQkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNyRCxDQUFDO0lBQ0QscURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUNELHFEQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsK0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QseUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFB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aUI7WUFDekIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFO1lBQ0QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7SUEvTWdCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBdWQ1QztJQUFELCtCQUFDO0NBdmRELEFBdWRDLENBdmRxRCxlQUFLLEdBdWQxRDtrQkF2ZG9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCBMb3dQcmlvcml0eU1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eU1vZGVsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbnZhciBtID0gW1wiZ2FtZXBsYXlfaW1nX21qX2RuXCIsIFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIsIFwiZ2FtZXBsYXlfc2VsZWN0X21qXCJdO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQ2FyZE9wdEJhc2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYXRlcmlhbENhcmRPcHRCYXNlXCI7XG4gIHN0YXRpYyBNQVRFUklBTF9DQVJEX0xJU1QgPSBbe1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwi6buY6K6k5p2Q6LSoXCIsXG4gICAgYnVuZGxlOiBcIlwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwi5p2Q6LSoMlwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDJcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIuadkOi0qDRcIixcbiAgICBidW5kbGU6IFwibF9tYXRlcmlhbENhcmQ0XCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCLmnZDotKg3XCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkN1wiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwi5p2Q6LSoOFwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDhcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCLmnZDotKgxMVwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDExXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6IFwi5p2Q6LSoMTJcIixcbiAgICBidW5kbGU6IFwibF9tYXRlcmlhbENhcmQxMlwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiAxOSxcbiAgICBuYW1lOiBcIuadkOi0qDE5XCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkMTlcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMjAsXG4gICAgbmFtZTogXCLmnZDotKgyMFwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDIwXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCLmnZDotKgxXCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIuadkOi0qDNcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQzXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwi5p2Q6LSoNVwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCLmnZDotKg2XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkNlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIuadkOi0qDlcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQ5XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIuadkOi0qDEwXCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMTBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDEzLFxuICAgIG5hbWU6IFwi5p2Q6LSoMTNcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxM1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTQsXG4gICAgbmFtZTogXCLmnZDotKgxNFwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDE0XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAxNSxcbiAgICBuYW1lOiBcIuadkOi0qDE1XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMTVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE2LFxuICAgIG5hbWU6IFwi5p2Q6LSoMTZcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxNlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTcsXG4gICAgbmFtZTogXCLmnZDotKgxN1wiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDE3XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAxOCxcbiAgICBuYW1lOiBcIuadkOi0qDE4XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMThcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDIxLFxuICAgIG5hbWU6IFwi5p2Q6LSoMjFcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQyMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjIsXG4gICAgbmFtZTogXCLmnZDotKgyMlwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDIyXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAyMyxcbiAgICBuYW1lOiBcIuadkOi0qDIzXCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMjNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI0LFxuICAgIG5hbWU6IFwi5p2Q6LSoMjRcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQyNFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjUsXG4gICAgbmFtZTogXCLmnZDotKgyNVwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDI1XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAyNixcbiAgICBuYW1lOiBcIuadkOi0qDI2XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMjZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI3LFxuICAgIG5hbWU6IFwi5p2Q6LSoMjdcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQyN1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjgsXG4gICAgbmFtZTogXCLmnZDotKgyOFwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDI4XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAyOSxcbiAgICBuYW1lOiBcIuadkOi0qDI5XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMjlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDMwLFxuICAgIG5hbWU6IFwi5p2Q6LSoMzBcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQzMFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzEsXG4gICAgbmFtZTogXCLmnZDotKgzMVwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDMxXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzMixcbiAgICBuYW1lOiBcIuadkOi0qDMyXCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMzJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDMzLFxuICAgIG5hbWU6IFwi5p2Q6LSoMzNcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQzM1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzQsXG4gICAgbmFtZTogXCLmnZDotKgzNFwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDM0XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzNSxcbiAgICBuYW1lOiBcIuadkOi0qDM1XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMzVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDM2LFxuICAgIG5hbWU6IFwi5p2Q6LSoMzZcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQzNlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzcsXG4gICAgbmFtZTogXCLmnZDotKgzN1wiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDM3XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzOCxcbiAgICBuYW1lOiBcIuadkOi0qDM4XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMzhcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDM5LFxuICAgIG5hbWU6IFwi5p2Q6LSoMzlcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQzOVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNDAsXG4gICAgbmFtZTogXCLmnZDotKg0MFwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDQwXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfV07XG4gIGdldE1hdGVyaWFsQ2FyZExpc3QoKSB7XG4gICAgcmV0dXJuIE1hdGVyaWFsQ2FyZE9wdEJhc2VUcmFpdC5NQVRFUklBTF9DQVJEX0xJU1Q7XG4gIH1cbiAgZ2V0Q3VyTWF0ZXJpYWxDYXJkKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpLmdldENhcmRNYXRlcmlhbElEKCkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwO1xuICB9XG4gIHNldEN1ck1hdGVyaWFsQ2FyZCh0KSB7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkuc2V0Q2FyZE1hdGVyaWFsSUQodCk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiREdhbWVFbmRfYWRqdXN0XCJcbiAgICB9XSk7XG4gIH1cbiAgZ2V0QnVuZGxlTmFtZUJ5SWQodCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRNYXRlcmlhbENhcmRMaXN0KCkuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQgPT09IHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGUgPyBlLmJ1bmRsZSA6IG51bGw7XG4gIH1cbiAgZ2V0QXZhaWxhYmxlTWF0ZXJpYWxzKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIHIgPSBMb3dQcmlvcml0eU1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLmdldE1hdGVyaWFsQ2FyZExpc3QoKSksIG8gPSBpLm5leHQoKTsgIW8uZG9uZTsgbyA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gby52YWx1ZTtcbiAgICAgICAgaWYgKGwuaXNMb2NhbCkge1xuICAgICAgICAgIGEucHVzaChsLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5pc0J1bmRsZVByZUxvYWRlZChsLmJ1bmRsZSkpIHtcbiAgICAgICAgICAgIGEucHVzaChsLmlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgci5pc0hhc0Rvd25sb2FkZWQobC5idW5kbGUpICYmIGEucHVzaChsLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChlID0gaS5yZXR1cm4pICYmIGUuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBnZXRDdXJyZW50R2FtZVR5cGUoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nYW1lVHlwZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIGlzTm9ybWFsTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgaXNUcmF2ZWxNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRyYXZlbDtcbiAgfVxuICBpc0RhaWx5TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTtcbiAgfVxuICBpc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgfVxuICBnZXRDdXJyZW50R2FtZURhdGFMZXZlbCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldExldmVsSWQoKSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gIH1cbiAgaXNHYW1lTW9kZU1hdGNoKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgcmV0dXJuIHQuaW5jbHVkZXMoZSk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdO1xuICAgICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgIT09IGEgJiYgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiAhPT0gYSAmJiBcImdhbWVwbGF5X3NlbGVjdF9talwiICE9PSBhKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpO1xuICAgICAgaWYgKDAgPT09IGkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbyA9IHRoaXMuZ2V0QnVuZGxlTmFtZUJ5SWQoaSk7XG4gICAgICBpZiAoIW8pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvXCIgKyBhLFxuICAgICAgICAgIGJ1bmRsZU5hbWU6IG8sXG4gICAgICAgICAgZnJvbUF0bGFzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci50cmFpdEtleSArIFwiXSDliqvmjIHniYzog4zlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRpbGVOb2RlT2JqX3BsYXlBbmltKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0cnkge1xuICAgICAgaWYgKFwic3BpbmUvcm9sbGNhcmQvZ2FtZXBsYXlfZmxpcFwiICE9PSAobnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0pKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpO1xuICAgICAgaWYgKDAgPT09IGEpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0QnVuZGxlTmFtZUJ5SWQoYSk7XG4gICAgICBpZiAoIWkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0LmFyZ3NbMF0gPSBcInNwaW5lL2dhbWVwbGF5X2ZsaXBfXCIgKyBhO1xuICAgICAgdC5hcmdzWzZdID0gaTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci50cmFpdEtleSArIFwiXSDliqvmjIHnv7vovazlhYnmlYjlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRpbGUyTm9kZU9ial9wbGF5QW5pbSh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcInNwaW5lL3JvbGxjYXJkL2dhbWVwbGF5X2ZsaXBcIiAhPT0gKG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKTtcbiAgICAgIGlmICgwID09PSBhKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB0aGlzLmdldEJ1bmRsZU5hbWVCeUlkKGEpO1xuICAgICAgaWYgKCFpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdC5hcmdzWzBdID0gXCJzcGluZS9nYW1lcGxheV9mbGlwX1wiICsgYTtcbiAgICAgIHQuYXJnc1s2XSA9IGk7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIHRoaXMuY29uc3RydWN0b3IudHJhaXRLZXkgKyBcIl0g5Yqr5oyB57+76L2s5YWJ5pWI5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25ER2FtZUVuZF9hZGp1c3QodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIHIgJiYgKHIubWF0ZXJpYWxfaWQgPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpKTtcbiAgICBlKCk7XG4gIH1cbiAgcmVmcmVzaEV4aXN0aW5nQ2FyZHModCkge1xuICAgIHZhciBlLFxuICAgICAgciA9IG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRUaWxlTm9kZU1hbmFnZXIpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbCh0KTtcbiAgICByICYmIHIuZ2V0VGlsZU5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIGUsIHIsIGEsIGk7XG4gICAgICBpZiAobnVsbCA9PT0gKGUgPSB0LnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaXNWYWxpZCkgdHJ5IHtcbiAgICAgICAgbnVsbCA9PT0gKHIgPSB0LnVwZGF0ZUltZ0NhcmRCZykgfHwgdm9pZCAwID09PSByIHx8IHIuY2FsbCh0KTtcbiAgICAgICAgbnVsbCA9PT0gKGEgPSB0LnVwZGF0ZUltZ0NhcmQpIHx8IHZvaWQgMCA9PT0gYSB8fCBhLmNhbGwodCk7XG4gICAgICAgIHQuX2ltZ1NlbGVjdGVkQ2FyZEJnICYmIChudWxsID09PSAoaSA9IHQudXBkYXRlSW1nU2VsZWN0ZWRDYXJkQmcpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLmNhbGwodCkpO1xuICAgICAgfSBjYXRjaCAodCkge31cbiAgICB9KTtcbiAgfVxuICBhZGRQcmVsb2FkUmVzKHQsIGUpIHtcbiAgICB2YXIgciwgYSwgaSwgbztcbiAgICBpZiAodCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQuYWRkUHJlbG9hZFJlcykge1xuICAgICAgdmFyIGwgPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IFtlXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhsKSwgZCA9IHMubmV4dCgpOyAhZC5kb25lOyBkID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdSA9IGQudmFsdWU7XG4gICAgICAgICAgaWYgKDAgIT09IHUpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5nZXRCdW5kbGVOYW1lQnlJZCh1KTtcbiAgICAgICAgICAgIGlmIChjKSB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBwID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKG0pKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGYudmFsdWU7XG4gICAgICAgICAgICAgICAgdC5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgYyArIFwiOnRleHR1cmUvXCIgKyBoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHAucmV0dXJuKSAmJiBvLmNhbGwocCk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKGEgPSBzLnJldHVybikgJiYgYS5jYWxsKHMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvYWRSZXNCeUlkKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIGEsXG4gICAgICBpID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUodCk7XG4gICAgaWYgKGkgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLmxvYWRSZXMpIHtcbiAgICAgIHZhciBvID0gQXJyYXkuaXNBcnJheShlKSA/IGUgOiBbZV0sXG4gICAgICAgIGwgPSBmdW5jdGlvbiBsKHQpIHtcbiAgICAgICAgICB2YXIgZSwgcjtcbiAgICAgICAgICBpZiAoMCA9PT0gdCkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICB2YXIgYSA9IHMuZ2V0QnVuZGxlTmFtZUJ5SWQodCk7XG4gICAgICAgICAgaWYgKCFhKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgIHZhciBvID0gZnVuY3Rpb24gbyh0KSB7XG4gICAgICAgICAgICBpLmxvYWRSZXMoXCJ0ZXh0dXJlL1wiICsgdCwgY2MuU3ByaXRlRnJhbWUsIGEpLnRoZW4oZnVuY3Rpb24gKCkge30pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKG0pKSwgZCA9IGwubmV4dCgpOyAhZC5kb25lOyBkID0gbC5uZXh0KCkpIG8oZC52YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGQgJiYgIWQuZG9uZSAmJiAociA9IGwucmV0dXJuKSAmJiByLmNhbGwobCk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB0aGlzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKG8pLCB1ID0gZC5uZXh0KCk7ICF1LmRvbmU7IHUgPSBkLm5leHQoKSkgbCh1LnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKGEgPSBkLnJldHVybikgJiYgYS5jYWxsKGQpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19