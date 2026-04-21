
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarDisplayTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16c0dJrAvJAfYGjOKFw45N4', 'AvatarDisplayTrait');
// subpackages/r_avatarCollection/Scripts/AvatarDisplayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Utils_1 = require("./Utils");
var AvatarItem_1 = require("./AvatarItem");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AvatarIcon_1 = require("./AvatarIcon");
var AvatarCollectModel_1 = require("./AvatarCollectModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var DGameUserInfo_1 = require("../../../Scripts/DGameUserInfo");
var AvatarDisplayTrait = /** @class */ (function (_super) {
    __extends(AvatarDisplayTrait, _super);
    function AvatarDisplayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectAvatarId = -1;
        return _this;
    }
    AvatarDisplayTrait_1 = AvatarDisplayTrait;
    AvatarDisplayTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        AvatarCollectModel_1.default.getInstance().setIsAvatarDisplayOpen(true);
    };
    AvatarDisplayTrait.prototype.onUsrInfoCtrl_avatarList = function (t, e) {
        var a = t.ins, r = t.args[0], n = a._tempSelectedAvatarId, i = null, s = r.findIndex(function (t) {
            return t.isSelected;
        });
        s >= 0 && (i = r.splice(s, 1)[0]);
        var p = null, d = [], f = [], h = [], v = UserModel_1.default.getInstance().getRankCardResName(), _ = CardUtil_1.default.getAtlasPathAndBundleName(v), m = _.path, C = _.bundleName, I = _.fromAtlas, A = Utils_1.Info2Key({
            bundleName: C,
            path: m,
            fromAtlas: I
        }), b = AvatarCollectModel_1.default.getInstance().getData();
        for (var w in b.collectedCardMap) {
            var N = b.collectedCardMap[w], B = Utils_1.Key2Info(w), O = B.path.split("/").pop(), R = AvatarCollectModel_1.default.getInstance().getHeadId(O, B.bundleName);
            if (-1 !== R) {
                var S = Object.assign(Object.assign({}, N), {
                    key: w,
                    headId: R
                });
                if (S.headId == n) {
                    p = S;
                }
                else {
                    if (-1 === N.finishPeriod) {
                        if (N.key == A) {
                            h.push(S);
                        }
                        else {
                            f.push(S);
                        }
                    }
                    else {
                        d.push(S);
                    }
                }
            }
        }
        d.sort(function (t, e) {
            return e.finishPeriod - t.finishPeriod;
        });
        f.sort(function (t, e) {
            return e.curCount - t.curCount;
        });
        var P = [];
        if (i) {
            P.push(i);
        }
        else {
            p && P.push({
                id: p.headId,
                icon: Utils_1.Key2Info(p.key).path,
                isSelected: true,
                type: "avatar"
            });
        }
        h.forEach(function (t) {
            P.push({
                id: t.headId,
                icon: Utils_1.Key2Info(t.key).path,
                isSelected: false,
                type: "avatar"
            });
        });
        d.forEach(function (t) {
            P.push({
                id: t.headId,
                icon: Utils_1.Key2Info(t.key).path,
                isSelected: false,
                type: "avatar"
            });
        });
        P.push.apply(P, __spreadArrays(r));
        AvatarCollectModel_1.default.getInstance().isAvatarCollectionOpen() && f.forEach(function (t) {
            P.push({
                id: t.headId,
                icon: Utils_1.Key2Info(t.key).path,
                isSelected: false,
                type: "avatar"
            });
        });
        t.args[0] = P;
        e();
    };
    AvatarDisplayTrait.prototype.onUsrInfoCell_loadAvatar = function (t, e) {
        var r = t.ins, n = t.args[0], o = t.args[1], i = r._itemNodes[n], s = i.headImg.node, l = s.getChildByName("AvatarItem");
        cc.isValid(l) && l.destroy();
        if (o.id < AvatarCollectModel_1.ID_BASE)
            e();
        else if ((null == o ? void 0 : o.icon) && (null == i ? void 0 : i.headImg)) {
            var c = AvatarCollectModel_1.default.getInstance().getData(), p = Object.values(c.collectedCardMap).find(function (t) {
                return t.headId == o.id;
            });
            if (p) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
                AvatarItem_1.default.createUI().then(function (t) {
                    if (cc.isValid(t) && cc.isValid(s)) {
                        s.active = true;
                        t.parent = s;
                        t.getComponent(AvatarItem_1.default).updateUI(p);
                        if (p.curCount == p.maxCount && !p.isPlayedInUserInfo) {
                            p.isPlayedInUserInfo = true;
                            var e = AvatarCollectModel_1.default.getInstance().getData();
                            e.collectedCardMap[p.key] = p;
                            e.collectedCardMap = e.collectedCardMap;
                            t.getComponent(AvatarItem_1.default).playFinishAnim(p);
                        }
                    }
                }).catch(function (t) {
                    console.error("[" + AvatarDisplayTrait_1.traitKey + "] 创建头像收集预设失败:" + ((null == t ? void 0 : t.message) || "AvatarItem加载失败"));
                });
            }
            else
                e();
        }
        else
            e();
    };
    AvatarDisplayTrait.prototype.onUISetHome_refreshAvator = function (t, e) {
        e();
        var r = t.ins._avatorIcon, n = AvatarDisplayTrait_1.traitKey + "_onUISetHome_refreshAvator", o = r[n];
        if (cc.isValid(o)) {
            o.destroy();
            r[n] = null;
        }
        var i = UserModel_1.default.getInstance().getAvatarId() || 1;
        if (i > AvatarCollectModel_1.ID_BASE) {
            var s = AvatarCollectModel_1.default.getInstance().getHeadInfo(i);
            s && AvatarIcon_1.default.createUI().then(function (t) {
                if (cc.isValid(t) && cc.isValid(r)) {
                    r.active = true;
                    t.parent = r;
                    t.setSiblingIndex(0);
                    t.getComponent(AvatarIcon_1.default).updateUI(s);
                    r[n] = t;
                }
            });
        }
    };
    AvatarDisplayTrait.prototype.onUsrInfoVw_refreshTop = function (t, e) {
        e();
        var r = t.ins, n = r.selfHeadImg.node, o = r.saveBtn.node, i = cc.find("Background/Label", o), s = AvatarDisplayTrait_1.traitKey + "_onUsrInfoVw_refreshTop", l = n[s];
        if (cc.isValid(l)) {
            l.destroy();
            n[s] = null;
        }
        var p = null;
        this.selectAvatarId = -1 == this.selectAvatarId ? UserModel_1.default.getInstance().getAvatarId() || 1 : this.selectAvatarId;
        if (this.selectAvatarId > AvatarCollectModel_1.ID_BASE && (p = AvatarCollectModel_1.default.getInstance().getHeadInfo(this.selectAvatarId))) {
            AvatarIcon_1.default.createUI().then(function (t) {
                if (cc.isValid(t) && cc.isValid(n)) {
                    n.active = true;
                    t.parent = n;
                    t.setSiblingIndex(0);
                    t.getComponent(AvatarIcon_1.default).updateUI(p);
                    n[s] = t;
                }
            });
            var u = UserModel_1.default.getInstance().getRankCardResName(), d = CardUtil_1.default.getAtlasPathAndBundleName(u), h = d.bundleName;
            d.path, d.fromAtlas;
            if (p.curCount >= p.maxCount) {
                I18NStrings_1.default.setText(i, "Save", "LeaderBoard_Profile_Btn_Save");
            }
            else {
                if (this.selectAvatarId == AvatarCollectModel_1.default.getInstance().getHeadId(u, h)) {
                    I18NStrings_1.default.setText(i, "Go to Get", "Ranking_Avatar_Button_get");
                }
                else {
                    I18NStrings_1.default.setText(i, "Coming Soon", "Ranking_Avatar_Button_cantget");
                }
            }
        }
        else
            I18NStrings_1.default.setText(i, "Save", "LeaderBoard_Profile_Btn_Save");
    };
    AvatarDisplayTrait.prototype.onUsrInfoVw_itemSelect = function (t, e) {
        e();
        var a = t.args[0];
        "avatar" === a.type && (this.selectAvatarId = a.id);
    };
    AvatarDisplayTrait.prototype.onUsrInfoVw_save = function (t, e) {
        var a, r = t.ins, n = AvatarCollectModel_1.default.getInstance().getRankModel(), o = AvatarCollectModel_1.default.getInstance().getHeadInfo(this.selectAvatarId);
        if (this.selectAvatarId > AvatarCollectModel_1.ID_BASE && o && o.curCount < o.maxCount) {
            if (UserModel_1.default.getInstance().isInGameView()) {
                null === (a = null == r ? void 0 : r.delegate) || void 0 === a || a.close();
            }
            else {
                ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
                    var t;
                    cc.isValid(r) && (null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close());
                });
            }
            var i = UserModel_1.default.getInstance().getRankCardResName(), s = CardUtil_1.default.getAtlasPathAndBundleName(i), l = s.bundleName, p = (s.path, s.fromAtlas, AvatarCollectModel_1.default.getInstance().getHeadId(i, l));
            DGameUserInfo_1.DotGameUserInfo.dotClickInfoPopup({
                activity_period: n ? n.getPeriodCount() : -1,
                avatar_need_count: o ? o.maxCount : -1,
                current_collect: o ? o.curCount : -1,
                main_level: AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel(),
                activity_card_id: o ? o.key : "",
                button_type: this.selectAvatarId == p ? DGameUserInfo_1.EAvatarButtonType.GoToGet : DGameUserInfo_1.EAvatarButtonType.WaitReturn
            });
            e({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else {
            e();
            DGameUserInfo_1.DotGameUserInfo.dotClickInfoPopup({
                activity_period: n ? n.getPeriodCount() : -1,
                avatar_need_count: o ? o.maxCount : -1,
                current_collect: o ? o.curCount : -1,
                main_level: AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel(),
                activity_card_id: o ? o.key : "",
                button_type: DGameUserInfo_1.EAvatarButtonType.Save
            });
        }
        this.selectAvatarId = -1;
        mj.EventManager.emit("msg_rankRefreshSelf");
    };
    AvatarDisplayTrait.prototype.onRankBonusItem_updAvatar = function (t, e) {
        var r = t.args[0], n = t.ins._avatarSprite.node, o = AvatarDisplayTrait_1.traitKey + "_onRankBonusItem_updAvatar";
        this.removeLastAvatarIcon(o, n, r);
        if (r < AvatarCollectModel_1.ID_BASE)
            e();
        else {
            this.checkAddAvatarIcon(o, n, r);
            e({
                returnType: TraitCallbackReturnType.jump
            });
        }
    };
    AvatarDisplayTrait.prototype.onRankItem_updAvatarFrame = function (t, e) {
        e();
        var r = t.ins._avatarSprite.node, n = t.args[0], o = AvatarDisplayTrait_1.traitKey + "_onRankItem_updAvatarFrame";
        this.removeLastAvatarIcon(o, r, n);
        this.checkAddAvatarIcon(o, r, n);
    };
    AvatarDisplayTrait.prototype.onRankVw_updAvatarFrame = function (t, e) {
        e();
        var r = t.args[0].node, n = t.args[2], o = AvatarDisplayTrait_1.traitKey + "_onRankVw_updAvatarFrame";
        this.removeLastAvatarIcon(o, r, n);
        this.checkAddAvatarIcon(o, r, n);
    };
    AvatarDisplayTrait.prototype.onInfoMgr_getAvatarId = function (t, e) {
        var a = AvatarCollectModel_1.default.getInstance().getDefaultAvatarList(), r = __spreadArrays(a), n = AvatarCollectModel_1.default.getInstance().getData().collectedCardMap;
        for (var o in n) {
            var i = n[o];
            (i.curCount > 0 || i.resName == UserModel_1.default.getInstance().getRankCardResName()) && r.push(i.headId);
        }
        var s = r[Math.floor(Math.random() * r.length)];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: s
        });
    };
    AvatarDisplayTrait.prototype.removeLastAvatarIcon = function (t, e, a) {
        var r = e[t];
        if (r && r.avatarId != a && cc.isValid(r.node)) {
            r.node.destroy();
            e[t] = null;
        }
    };
    AvatarDisplayTrait.prototype.checkAddAvatarIcon = function (t, e, a) {
        if (a > AvatarCollectModel_1.ID_BASE) {
            var r = AvatarCollectModel_1.default.getInstance().getHeadInfo(a);
            r && AvatarIcon_1.default.createUI().then(function (n) {
                if (cc.isValid(n) && cc.isValid(e)) {
                    e.active = true;
                    n.parent = e;
                    n.setSiblingIndex(0);
                    n.getComponent(AvatarIcon_1.default).updateUI(r);
                    e[t] = {
                        node: n,
                        avatarId: a
                    };
                }
            });
        }
    };
    var AvatarDisplayTrait_1;
    AvatarDisplayTrait.traitKey = "AvatarDisplay";
    AvatarDisplayTrait = AvatarDisplayTrait_1 = __decorate([
        mj.trait,
        mj.class("AvatarDisplayTrait")
    ], AvatarDisplayTrait);
    return AvatarDisplayTrait;
}(Trait_1.default));
exports.default = AvatarDisplayTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJEaXNwbGF5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFpRTtBQUNqRSxnRUFBMkQ7QUFDM0QsaUNBQTZDO0FBQzdDLDJDQUFzQztBQUN0QywyRUFBc0U7QUFDdEUsMEZBQXFGO0FBQ3JGLDJDQUFzQztBQUN0QywyREFBbUU7QUFDbkUsb0VBQStEO0FBQy9ELGdFQUFvRjtBQUdwRjtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTBUQztRQXpUQyxvQkFBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQXlUdEIsQ0FBQzsyQkExVG9CLGtCQUFrQjtJQUdyQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4Qiw0QkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0QscURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFDM0IsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDekIsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixD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QUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsNEJBQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLDRCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLElBQUksb0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN6QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO3dCQUNMLElBQUksRUFBRSxDQUFDO3dCQUNQLFFBQVEsRUFBRSxDQUFDO3FCQUNaLENBQUM7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7SUF2VE0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFGZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBMFR0QztJQUFELHlCQUFDO0NBMVRELEFBMFRDLENBMVQrQyxlQUFLLEdBMFRwRDtrQkExVG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgSW5mbzJLZXksIEtleTJJbmZvIH0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgQXZhdGFySXRlbSBmcm9tICcuL0F2YXRhckl0ZW0nO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEF2YXRhckljb24gZnJvbSAnLi9BdmF0YXJJY29uJztcbmltcG9ydCBBdmF0YXJDb2xsZWN0TW9kZWwsIHsgSURfQkFTRSB9IGZyb20gJy4vQXZhdGFyQ29sbGVjdE1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgRG90R2FtZVVzZXJJbmZvLCBFQXZhdGFyQnV0dG9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvREdhbWVVc2VySW5mbyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkF2YXRhckRpc3BsYXlUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyRGlzcGxheVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzZWxlY3RBdmF0YXJJZCA9IC0xO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkF2YXRhckRpc3BsYXlcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLnNldElzQXZhdGFyRGlzcGxheU9wZW4odHJ1ZSk7XG4gIH1cbiAgb25Vc3JJbmZvQ3RybF9hdmF0YXJMaXN0KHQsIGUpIHtcbiAgICB2YXIgYSA9IHQuaW5zLFxuICAgICAgciA9IHQuYXJnc1swXSxcbiAgICAgIG4gPSBhLl90ZW1wU2VsZWN0ZWRBdmF0YXJJZCxcbiAgICAgIGkgPSBudWxsLFxuICAgICAgcyA9IHIuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LmlzU2VsZWN0ZWQ7XG4gICAgICB9KTtcbiAgICBzID49IDAgJiYgKGkgPSByLnNwbGljZShzLCAxKVswXSk7XG4gICAgdmFyIHAgPSBudWxsLFxuICAgICAgZCA9IFtdLFxuICAgICAgZiA9IFtdLFxuICAgICAgaCA9IFtdLFxuICAgICAgdiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpLFxuICAgICAgXyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodiksXG4gICAgICBtID0gXy5wYXRoLFxuICAgICAgQyA9IF8uYnVuZGxlTmFtZSxcbiAgICAgIEkgPSBfLmZyb21BdGxhcyxcbiAgICAgIEEgPSBJbmZvMktleSh7XG4gICAgICAgIGJ1bmRsZU5hbWU6IEMsXG4gICAgICAgIHBhdGg6IG0sXG4gICAgICAgIGZyb21BdGxhczogSVxuICAgICAgfSksXG4gICAgICBiID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpO1xuICAgIGZvciAodmFyIHcgaW4gYi5jb2xsZWN0ZWRDYXJkTWFwKSB7XG4gICAgICB2YXIgTiA9IGIuY29sbGVjdGVkQ2FyZE1hcFt3XSxcbiAgICAgICAgQiA9IEtleTJJbmZvKHcpLFxuICAgICAgICBPID0gQi5wYXRoLnNwbGl0KFwiL1wiKS5wb3AoKSxcbiAgICAgICAgUiA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEhlYWRJZChPLCBCLmJ1bmRsZU5hbWUpO1xuICAgICAgaWYgKC0xICE9PSBSKSB7XG4gICAgICAgIHZhciBTID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBOKSwge1xuICAgICAgICAgIGtleTogdyxcbiAgICAgICAgICBoZWFkSWQ6IFJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChTLmhlYWRJZCA9PSBuKSB7XG4gICAgICAgICAgcCA9IFM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKC0xID09PSBOLmZpbmlzaFBlcmlvZCkge1xuICAgICAgICAgICAgaWYgKE4ua2V5ID09IEEpIHtcbiAgICAgICAgICAgICAgaC5wdXNoKFMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZi5wdXNoKFMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkLnB1c2goUyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGQuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgcmV0dXJuIGUuZmluaXNoUGVyaW9kIC0gdC5maW5pc2hQZXJpb2Q7XG4gICAgfSk7XG4gICAgZi5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICByZXR1cm4gZS5jdXJDb3VudCAtIHQuY3VyQ291bnQ7XG4gICAgfSk7XG4gICAgdmFyIFAgPSBbXTtcbiAgICBpZiAoaSkge1xuICAgICAgUC5wdXNoKGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwICYmIFAucHVzaCh7XG4gICAgICAgIGlkOiBwLmhlYWRJZCxcbiAgICAgICAgaWNvbjogS2V5MkluZm8ocC5rZXkpLnBhdGgsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6IFwiYXZhdGFyXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBoLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIFAucHVzaCh7XG4gICAgICAgIGlkOiB0LmhlYWRJZCxcbiAgICAgICAgaWNvbjogS2V5MkluZm8odC5rZXkpLnBhdGgsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImF2YXRhclwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIFAucHVzaCh7XG4gICAgICAgIGlkOiB0LmhlYWRJZCxcbiAgICAgICAgaWNvbjogS2V5MkluZm8odC5rZXkpLnBhdGgsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImF2YXRhclwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBQLnB1c2guYXBwbHkoUCwgWy4uLnJdKTtcbiAgICBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0F2YXRhckNvbGxlY3Rpb25PcGVuKCkgJiYgZi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBQLnB1c2goe1xuICAgICAgICBpZDogdC5oZWFkSWQsXG4gICAgICAgIGljb246IEtleTJJbmZvKHQua2V5KS5wYXRoLFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJhdmF0YXJcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdC5hcmdzWzBdID0gUDtcbiAgICBlKCk7XG4gIH1cbiAgb25Vc3JJbmZvQ2VsbF9sb2FkQXZhdGFyKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zLFxuICAgICAgbiA9IHQuYXJnc1swXSxcbiAgICAgIG8gPSB0LmFyZ3NbMV0sXG4gICAgICBpID0gci5faXRlbU5vZGVzW25dLFxuICAgICAgcyA9IGkuaGVhZEltZy5ub2RlLFxuICAgICAgbCA9IHMuZ2V0Q2hpbGRCeU5hbWUoXCJBdmF0YXJJdGVtXCIpO1xuICAgIGNjLmlzVmFsaWQobCkgJiYgbC5kZXN0cm95KCk7XG4gICAgaWYgKG8uaWQgPCBJRF9CQVNFKSBlKCk7ZWxzZSBpZiAoKG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uaWNvbikgJiYgKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuaGVhZEltZykpIHtcbiAgICAgIHZhciBjID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpLFxuICAgICAgICBwID0gT2JqZWN0LnZhbHVlcyhjLmNvbGxlY3RlZENhcmRNYXApLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5oZWFkSWQgPT0gby5pZDtcbiAgICAgICAgfSk7XG4gICAgICBpZiAocCkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICAgIH0pO1xuICAgICAgICBBdmF0YXJJdGVtLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQocykpIHtcbiAgICAgICAgICAgIHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHQucGFyZW50ID0gcztcbiAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KEF2YXRhckl0ZW0pLnVwZGF0ZVVJKHApO1xuICAgICAgICAgICAgaWYgKHAuY3VyQ291bnQgPT0gcC5tYXhDb3VudCAmJiAhcC5pc1BsYXllZEluVXNlckluZm8pIHtcbiAgICAgICAgICAgICAgcC5pc1BsYXllZEluVXNlckluZm8gPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgZSA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgZS5jb2xsZWN0ZWRDYXJkTWFwW3Aua2V5XSA9IHA7XG4gICAgICAgICAgICAgIGUuY29sbGVjdGVkQ2FyZE1hcCA9IGUuY29sbGVjdGVkQ2FyZE1hcDtcbiAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoQXZhdGFySXRlbSkucGxheUZpbmlzaEFuaW0ocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBBdmF0YXJEaXNwbGF5VHJhaXQudHJhaXRLZXkgKyBcIl0g5Yib5bu65aS05YOP5pS26ZuG6aKE6K6+5aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwiQXZhdGFySXRlbeWKoOi9veWksei0pVwiKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uVUlTZXRIb21lX3JlZnJlc2hBdmF0b3IodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgciA9IHQuaW5zLl9hdmF0b3JJY29uLFxuICAgICAgbiA9IEF2YXRhckRpc3BsYXlUcmFpdC50cmFpdEtleSArIFwiX29uVUlTZXRIb21lX3JlZnJlc2hBdmF0b3JcIixcbiAgICAgIG8gPSByW25dO1xuICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICBvLmRlc3Ryb3koKTtcbiAgICAgIHJbbl0gPSBudWxsO1xuICAgIH1cbiAgICB2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEF2YXRhcklkKCkgfHwgMTtcbiAgICBpZiAoaSA+IElEX0JBU0UpIHtcbiAgICAgIHZhciBzID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SGVhZEluZm8oaSk7XG4gICAgICBzICYmIEF2YXRhckljb24uY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICByLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdC5wYXJlbnQgPSByO1xuICAgICAgICAgIHQuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KEF2YXRhckljb24pLnVwZGF0ZVVJKHMpO1xuICAgICAgICAgIHJbbl0gPSB0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25Vc3JJbmZvVndfcmVmcmVzaFRvcCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciByID0gdC5pbnMsXG4gICAgICBuID0gci5zZWxmSGVhZEltZy5ub2RlLFxuICAgICAgbyA9IHIuc2F2ZUJ0bi5ub2RlLFxuICAgICAgaSA9IGNjLmZpbmQoXCJCYWNrZ3JvdW5kL0xhYmVsXCIsIG8pLFxuICAgICAgcyA9IEF2YXRhckRpc3BsYXlUcmFpdC50cmFpdEtleSArIFwiX29uVXNySW5mb1Z3X3JlZnJlc2hUb3BcIixcbiAgICAgIGwgPSBuW3NdO1xuICAgIGlmIChjYy5pc1ZhbGlkKGwpKSB7XG4gICAgICBsLmRlc3Ryb3koKTtcbiAgICAgIG5bc10gPSBudWxsO1xuICAgIH1cbiAgICB2YXIgcCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RBdmF0YXJJZCA9IC0xID09IHRoaXMuc2VsZWN0QXZhdGFySWQgPyBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBdmF0YXJJZCgpIHx8IDEgOiB0aGlzLnNlbGVjdEF2YXRhcklkO1xuICAgIGlmICh0aGlzLnNlbGVjdEF2YXRhcklkID4gSURfQkFTRSAmJiAocCA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEhlYWRJbmZvKHRoaXMuc2VsZWN0QXZhdGFySWQpKSkge1xuICAgICAgQXZhdGFySWNvbi5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgIG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0LnBhcmVudCA9IG47XG4gICAgICAgICAgdC5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICAgICAgdC5nZXRDb21wb25lbnQoQXZhdGFySWNvbikudXBkYXRlVUkocCk7XG4gICAgICAgICAgbltzXSA9IHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgICAgZCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodSksXG4gICAgICAgIGggPSBkLmJ1bmRsZU5hbWU7XG4gICAgICBkLnBhdGgsIGQuZnJvbUF0bGFzO1xuICAgICAgaWYgKHAuY3VyQ291bnQgPj0gcC5tYXhDb3VudCkge1xuICAgICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KGksIFwiU2F2ZVwiLCBcIkxlYWRlckJvYXJkX1Byb2ZpbGVfQnRuX1NhdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBdmF0YXJJZCA9PSBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRIZWFkSWQodSwgaCkpIHtcbiAgICAgICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KGksIFwiR28gdG8gR2V0XCIsIFwiUmFua2luZ19BdmF0YXJfQnV0dG9uX2dldFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KGksIFwiQ29taW5nIFNvb25cIiwgXCJSYW5raW5nX0F2YXRhcl9CdXR0b25fY2FudGdldFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBJMThOU3RyaW5ncy5zZXRUZXh0KGksIFwiU2F2ZVwiLCBcIkxlYWRlckJvYXJkX1Byb2ZpbGVfQnRuX1NhdmVcIik7XG4gIH1cbiAgb25Vc3JJbmZvVndfaXRlbVNlbGVjdCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciBhID0gdC5hcmdzWzBdO1xuICAgIFwiYXZhdGFyXCIgPT09IGEudHlwZSAmJiAodGhpcy5zZWxlY3RBdmF0YXJJZCA9IGEuaWQpO1xuICB9XG4gIG9uVXNySW5mb1Z3X3NhdmUodCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgciA9IHQuaW5zLFxuICAgICAgbiA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtNb2RlbCgpLFxuICAgICAgbyA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEhlYWRJbmZvKHRoaXMuc2VsZWN0QXZhdGFySWQpO1xuICAgIGlmICh0aGlzLnNlbGVjdEF2YXRhcklkID4gSURfQkFTRSAmJiBvICYmIG8uY3VyQ291bnQgPCBvLm1heENvdW50KSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNJbkdhbWVWaWV3KCkpIHtcbiAgICAgICAgbnVsbCA9PT0gKGEgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGEgfHwgYS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIk1haW5HYW1lQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB0O1xuICAgICAgICAgIGNjLmlzVmFsaWQocikgJiYgKG51bGwgPT09ICh0ID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2xvc2UoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgICAgcyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoaSksXG4gICAgICAgIGwgPSBzLmJ1bmRsZU5hbWUsXG4gICAgICAgIHAgPSAocy5wYXRoLCBzLmZyb21BdGxhcywgQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SGVhZElkKGksIGwpKTtcbiAgICAgIERvdEdhbWVVc2VySW5mby5kb3RDbGlja0luZm9Qb3B1cCh7XG4gICAgICAgIGFjdGl2aXR5X3BlcmlvZDogbiA/IG4uZ2V0UGVyaW9kQ291bnQoKSA6IC0xLFxuICAgICAgICBhdmF0YXJfbmVlZF9jb3VudDogbyA/IG8ubWF4Q291bnQgOiAtMSxcbiAgICAgICAgY3VycmVudF9jb2xsZWN0OiBvID8gby5jdXJDb3VudCA6IC0xLFxuICAgICAgICBtYWluX2xldmVsOiBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50Tm9ybWFsTGV2ZWwoKSxcbiAgICAgICAgYWN0aXZpdHlfY2FyZF9pZDogbyA/IG8ua2V5IDogXCJcIixcbiAgICAgICAgYnV0dG9uX3R5cGU6IHRoaXMuc2VsZWN0QXZhdGFySWQgPT0gcCA/IEVBdmF0YXJCdXR0b25UeXBlLkdvVG9HZXQgOiBFQXZhdGFyQnV0dG9uVHlwZS5XYWl0UmV0dXJuXG4gICAgICB9KTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgICAgRG90R2FtZVVzZXJJbmZvLmRvdENsaWNrSW5mb1BvcHVwKHtcbiAgICAgICAgYWN0aXZpdHlfcGVyaW9kOiBuID8gbi5nZXRQZXJpb2RDb3VudCgpIDogLTEsXG4gICAgICAgIGF2YXRhcl9uZWVkX2NvdW50OiBvID8gby5tYXhDb3VudCA6IC0xLFxuICAgICAgICBjdXJyZW50X2NvbGxlY3Q6IG8gPyBvLmN1ckNvdW50IDogLTEsXG4gICAgICAgIG1haW5fbGV2ZWw6IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnROb3JtYWxMZXZlbCgpLFxuICAgICAgICBhY3Rpdml0eV9jYXJkX2lkOiBvID8gby5rZXkgOiBcIlwiLFxuICAgICAgICBidXR0b25fdHlwZTogRUF2YXRhckJ1dHRvblR5cGUuU2F2ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0QXZhdGFySWQgPSAtMTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChcIm1zZ19yYW5rUmVmcmVzaFNlbGZcIik7XG4gIH1cbiAgb25SYW5rQm9udXNJdGVtX3VwZEF2YXRhcih0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF0sXG4gICAgICBuID0gdC5pbnMuX2F2YXRhclNwcml0ZS5ub2RlLFxuICAgICAgbyA9IEF2YXRhckRpc3BsYXlUcmFpdC50cmFpdEtleSArIFwiX29uUmFua0JvbnVzSXRlbV91cGRBdmF0YXJcIjtcbiAgICB0aGlzLnJlbW92ZUxhc3RBdmF0YXJJY29uKG8sIG4sIHIpO1xuICAgIGlmIChyIDwgSURfQkFTRSkgZSgpO2Vsc2Uge1xuICAgICAgdGhpcy5jaGVja0FkZEF2YXRhckljb24obywgbiwgcik7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uUmFua0l0ZW1fdXBkQXZhdGFyRnJhbWUodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgciA9IHQuaW5zLl9hdmF0YXJTcHJpdGUubm9kZSxcbiAgICAgIG4gPSB0LmFyZ3NbMF0sXG4gICAgICBvID0gQXZhdGFyRGlzcGxheVRyYWl0LnRyYWl0S2V5ICsgXCJfb25SYW5rSXRlbV91cGRBdmF0YXJGcmFtZVwiO1xuICAgIHRoaXMucmVtb3ZlTGFzdEF2YXRhckljb24obywgciwgbik7XG4gICAgdGhpcy5jaGVja0FkZEF2YXRhckljb24obywgciwgbik7XG4gIH1cbiAgb25SYW5rVndfdXBkQXZhdGFyRnJhbWUodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgciA9IHQuYXJnc1swXS5ub2RlLFxuICAgICAgbiA9IHQuYXJnc1syXSxcbiAgICAgIG8gPSBBdmF0YXJEaXNwbGF5VHJhaXQudHJhaXRLZXkgKyBcIl9vblJhbmtWd191cGRBdmF0YXJGcmFtZVwiO1xuICAgIHRoaXMucmVtb3ZlTGFzdEF2YXRhckljb24obywgciwgbik7XG4gICAgdGhpcy5jaGVja0FkZEF2YXRhckljb24obywgciwgbik7XG4gIH1cbiAgb25JbmZvTWdyX2dldEF2YXRhcklkKHQsIGUpIHtcbiAgICB2YXIgYSA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldERlZmF1bHRBdmF0YXJMaXN0KCksXG4gICAgICByID0gWy4uLmFdLFxuICAgICAgbiA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldERhdGEoKS5jb2xsZWN0ZWRDYXJkTWFwO1xuICAgIGZvciAodmFyIG8gaW4gbikge1xuICAgICAgdmFyIGkgPSBuW29dO1xuICAgICAgKGkuY3VyQ291bnQgPiAwIHx8IGkucmVzTmFtZSA9PSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSkgJiYgci5wdXNoKGkuaGVhZElkKTtcbiAgICB9XG4gICAgdmFyIHMgPSByW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHIubGVuZ3RoKV07XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBzXG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlTGFzdEF2YXRhckljb24odCwgZSwgYSkge1xuICAgIHZhciByID0gZVt0XTtcbiAgICBpZiAociAmJiByLmF2YXRhcklkICE9IGEgJiYgY2MuaXNWYWxpZChyLm5vZGUpKSB7XG4gICAgICByLm5vZGUuZGVzdHJveSgpO1xuICAgICAgZVt0XSA9IG51bGw7XG4gICAgfVxuICB9XG4gIGNoZWNrQWRkQXZhdGFySWNvbih0LCBlLCBhKSB7XG4gICAgaWYgKGEgPiBJRF9CQVNFKSB7XG4gICAgICB2YXIgciA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEhlYWRJbmZvKGEpO1xuICAgICAgciAmJiBBdmF0YXJJY29uLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChuKSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIG4ucGFyZW50ID0gZTtcbiAgICAgICAgICBuLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgICBuLmdldENvbXBvbmVudChBdmF0YXJJY29uKS51cGRhdGVVSShyKTtcbiAgICAgICAgICBlW3RdID0ge1xuICAgICAgICAgICAgbm9kZTogbixcbiAgICAgICAgICAgIGF2YXRhcklkOiBhXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19