"use strict";
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