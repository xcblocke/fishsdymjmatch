
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCardBaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZEJhc2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCxxR0FBZ0k7QUFDaEksc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUdwRjtJQUFtRCx5Q0FBSztJQUF4RDs7SUF1U0EsQ0FBQzs4QkF2U29CLHFCQUFxQjtJQTZHeEMsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsNENBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUFxQixDQUFDLGlCQUFpQixFQUFFO1lBQzVDLHVCQUFxQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyx1QkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNqRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsb0RBQTBCLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdGO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELGlEQUFpQixHQUFqQixVQUFrQixDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLHVCQUFxQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDL0QsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELHFEQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLHVCQUFxQixDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNkO3FCQUFNO29CQUNMLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkY7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsd0RBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQztJQUNELGtEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2xLLENBQUM7SUFDRCw0Q0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBQ0QsNENBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDekQsQ0FBQztJQUNELDZDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFDRCwyQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLGNBQWMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsK0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCwwREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxvQkFBb0IsS0FBSyxDQUFDLElBQUksb0JBQW9CLEtBQUssQ0FBQyxJQUFJLG9CQUFvQixLQUFLLENBQUMsRUFBRTtnQkFDMUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDWCxDQUFDLEVBQUUsQ0FBQztvQkFDSixPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDTixDQUFDLEVBQUUsQ0FBQztvQkFDSixPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDO3dCQUNiLFNBQVMsRUFBRSxLQUFLO3FCQUNqQjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25HLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSTtZQUNGLElBQUksOEJBQThCLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5RixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNYLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNOLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkcsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxpREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0RBQW9CLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTztvQkFBRSxJQUFJO3dCQUN0QixDQUFDLENBQUMsZUFBZSxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUNuRixDQUFDLENBQUMsYUFBYSxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUM3RSxDQUFDLENBQUMsa0JBQWtCLElBQUksQ0FBQyxDQUFDLHVCQUF1QixJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztxQkFDcEk7b0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7SUFyU00sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUM5Qix1Q0FBaUIsR0FBRyxLQUFLLENBQUM7SUFDMUIsd0NBQWtCLEdBQUcsQ0FBQztZQUMzQixFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLEVBQUU7WUFDRCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztJQTVHZ0IscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXVTekM7SUFBRCw0QkFBQztDQXZTRCxBQXVTQyxDQXZTa0QsZUFBSyxHQXVTdkQ7a0JBdlNvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLCB7IEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkQmFzZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbENhcmRCYXNlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkQmFzZVwiO1xuICBzdGF0aWMgX3JlbW90ZVRhc2tzQWRkZWQgPSBmYWxzZTtcbiAgc3RhdGljIE1BVEVSSUFMX0NBUkRfTElTVCA9IFt7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogXCLpu5jorqTmnZDotKhcIixcbiAgICBidW5kbGU6IFwiXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCLmnZDotKgyXCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkMlwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwi5p2Q6LSoNFwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDRcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIuadkOi0qDdcIixcbiAgICBidW5kbGU6IFwibF9tYXRlcmlhbENhcmQ3XCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogXCLmnZDotKg4XCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkOFwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIuadkOi0qDExXCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkMTFcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMTIsXG4gICAgbmFtZTogXCLmnZDotKgxMlwiLFxuICAgIGJ1bmRsZTogXCJsX21hdGVyaWFsQ2FyZDEyXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDE5LFxuICAgIG5hbWU6IFwi5p2Q6LSoMTlcIixcbiAgICBidW5kbGU6IFwibF9tYXRlcmlhbENhcmQxOVwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiAyMCxcbiAgICBuYW1lOiBcIuadkOi0qDIwXCIsXG4gICAgYnVuZGxlOiBcImxfbWF0ZXJpYWxDYXJkMjBcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIuadkOi0qDFcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwi5p2Q6LSoM1wiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCLmnZDotKg1XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIuadkOi0qDZcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQ2XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwi5p2Q6LSoOVwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwi5p2Q6LSoMTBcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxMFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTMsXG4gICAgbmFtZTogXCLmnZDotKgxM1wiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDEzXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAxNCxcbiAgICBuYW1lOiBcIuadkOi0qDE0XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMTRcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE1LFxuICAgIG5hbWU6IFwi5p2Q6LSoMTVcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTYsXG4gICAgbmFtZTogXCLmnZDotKgxNlwiLFxuICAgIGJ1bmRsZTogXCJyX21hdGVyaWFsQ2FyZDE2XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAxNyxcbiAgICBuYW1lOiBcIuadkOi0qDE3XCIsXG4gICAgYnVuZGxlOiBcInJfbWF0ZXJpYWxDYXJkMTdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE4LFxuICAgIG5hbWU6IFwi5p2Q6LSoMThcIixcbiAgICBidW5kbGU6IFwicl9tYXRlcmlhbENhcmQxOFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH1dO1xuICBnZXRDdXJNYXRlcmlhbENhcmQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkuZ2V0Q2FyZE1hdGVyaWFsSUQoKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDA7XG4gIH1cbiAgc2V0Q3VyTWF0ZXJpYWxDYXJkKHQpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKS5zZXRDYXJkTWF0ZXJpYWxJRCh0KTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgaWYgKCFNYXRlcmlhbENhcmRCYXNlVHJhaXQuX3JlbW90ZVRhc2tzQWRkZWQpIHtcbiAgICAgIE1hdGVyaWFsQ2FyZEJhc2VUcmFpdC5fcmVtb3RlVGFza3NBZGRlZCA9IHRydWU7XG4gICAgICB2YXIgaSA9IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdC5NQVRFUklBTF9DQVJEX0xJU1QuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhdC5pc0xvY2FsO1xuICAgICAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBvID0gX192YWx1ZXMoaSksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHMgPSBuLnZhbHVlO1xuICAgICAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuYWRkVGFzayhzLmJ1bmRsZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuICYmICFuLmRvbmUgJiYgKGEgPSBvLnJldHVybikgJiYgYS5jYWxsKG8pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiREdhbWVFbmRfYWRqdXN0XCJcbiAgICB9XSk7XG4gIH1cbiAgZ2V0QnVuZGxlTmFtZUJ5SWQodCkge1xuICAgIHZhciBlID0gTWF0ZXJpYWxDYXJkQmFzZVRyYWl0Lk1BVEVSSUFMX0NBUkRfTElTVC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZCA9PT0gdDtcbiAgICB9KTtcbiAgICByZXR1cm4gZSA/IGUuYnVuZGxlIDogbnVsbDtcbiAgfVxuICBnZXRBdmFpbGFibGVNYXRlcmlhbHMoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgYSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoTWF0ZXJpYWxDYXJkQmFzZVRyYWl0Lk1BVEVSSUFMX0NBUkRfTElTVCksIG8gPSBpLm5leHQoKTsgIW8uZG9uZTsgbyA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBuID0gby52YWx1ZTtcbiAgICAgICAgaWYgKG4uaXNMb2NhbCkge1xuICAgICAgICAgIGEucHVzaChuLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmlzQnVuZGxlUHJlTG9hZGVkKG4uYnVuZGxlKSAmJiBhLnB1c2gobi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChlID0gaS5yZXR1cm4pICYmIGUuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBzd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEF2YWlsYWJsZU1hdGVyaWFscygpO1xuICAgIGlmICgwICE9PSB0Lmxlbmd0aCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpO1xuICAgICAgaWYgKDEgIT09IHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciByID0gdC5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdCAhPT0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIDAgPT09IHIubGVuZ3RoICYmIChyID0gdCk7XG4gICAgICAgIHZhciBhID0gcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZChhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gdFswXTtcbiAgICAgICAgdGhpcy5zZXRDdXJNYXRlcmlhbENhcmQoaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnRHYW1lVHlwZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdhbWVUeXBlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgaXNOb3JtYWxNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxuICBpc1RyYXZlbE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVHJhdmVsO1xuICB9XG4gIGlzQ2xhc3NpY01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuQ2xhc3NpYztcbiAgfVxuICBpc0RhaWx5TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTtcbiAgfVxuICBnZXRDdXJyZW50TGV2ZWwoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXTtcbiAgICAgIGlmIChcImdhbWVwbGF5X2ltZ19tal9kblwiID09PSBhIHx8IFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIgPT09IGEgfHwgXCJnYW1lcGxheV9zZWxlY3RfbWpcIiA9PT0gYSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VyTWF0ZXJpYWxDYXJkKCk7XG4gICAgICAgIGlmICgwID09PSBpKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0QnVuZGxlTmFtZUJ5SWQoaSk7XG4gICAgICAgIGlmICghbykge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGwgPSBcInRleHR1cmUvXCIgKyBhO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIHBhdGg6IGwsXG4gICAgICAgICAgICBidW5kbGVOYW1lOiBvLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci50cmFpdEtleSArIFwiXSDliqvmjIHniYzog4zlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRpbGVOb2RlT2JqX3BsYXlBbmltKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0cnkge1xuICAgICAgaWYgKFwic3BpbmUvcm9sbGNhcmQvZ2FtZXBsYXlfZmxpcFwiID09PSAobnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0pKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKTtcbiAgICAgICAgaWYgKDAgPT09IGEpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRCdW5kbGVOYW1lQnlJZChhKTtcbiAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IFwic3BpbmUvZ2FtZXBsYXlfZmxpcF9cIiArIGE7XG4gICAgICAgIHQuYXJnc1swXSA9IG87XG4gICAgICAgIHQuYXJnc1s2XSA9IGk7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyB0aGlzLmNvbnN0cnVjdG9yLnRyYWl0S2V5ICsgXCJdIOWKq+aMgee/u+i9rOWFieaViOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uREdhbWVFbmRfYWRqdXN0KHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXTtcbiAgICByICYmIChyLm1hdGVyaWFsX2lkID0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKSk7XG4gICAgZSgpO1xuICB9XG4gIHJlZnJlc2hFeGlzdGluZ0NhcmRzKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIgPSBudWxsID09PSAoZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwodCk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHIuZ2V0VGlsZU5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQudGlsZU9iamVjdDtcbiAgICAgICAgaWYgKGUgJiYgZS5pc1ZhbGlkKSB0cnkge1xuICAgICAgICAgIHQudXBkYXRlSW1nQ2FyZEJnICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC51cGRhdGVJbWdDYXJkQmcgJiYgdC51cGRhdGVJbWdDYXJkQmcoKTtcbiAgICAgICAgICB0LnVwZGF0ZUltZ0NhcmQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LnVwZGF0ZUltZ0NhcmQgJiYgdC51cGRhdGVJbWdDYXJkKCk7XG4gICAgICAgICAgdC5faW1nU2VsZWN0ZWRDYXJkQmcgJiYgdC51cGRhdGVJbWdTZWxlY3RlZENhcmRCZyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQudXBkYXRlSW1nU2VsZWN0ZWRDYXJkQmcgJiYgdC51cGRhdGVJbWdTZWxlY3RlZENhcmRCZygpO1xuICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19