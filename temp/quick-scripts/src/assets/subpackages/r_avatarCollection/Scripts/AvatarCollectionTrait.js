"use strict";
cc._RF.push(module, 'acab01V+bhGS5o12XUanWTq', 'AvatarCollectionTrait');
// subpackages/r_avatarCollection/Scripts/AvatarCollectionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Utils_1 = require("./Utils");
var RankAvatar_1 = require("./RankAvatar");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AvatarCollectModel_1 = require("./AvatarCollectModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var DGameUserInfo_1 = require("../../../Scripts/DGameUserInfo");
var AvatarCollectionTrait = /** @class */ (function (_super) {
    __extends(AvatarCollectionTrait, _super);
    function AvatarCollectionTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankAvatarNode = null;
        _this.selectAvatarId = -1;
        return _this;
    }
    AvatarCollectionTrait_1 = AvatarCollectionTrait;
    AvatarCollectionTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        AvatarCollectModel_1.default.getInstance().setIsAvatarCollectionOpen(true);
    };
    AvatarCollectionTrait.prototype.onRankVw_show = function (t, e) {
        e();
        if (!t.ins._isOldData) {
            if (cc.isValid(this._rankAvatarNode)) {
                this._rankAvatarNode.destroy();
                this._rankAvatarNode = null;
            }
            var a = AvatarCollectModel_1.default.getInstance().getRankModel();
            if (AvatarCollectModel_1.default.getInstance().isRankUnlock() && a) {
                var r = UserModel_1.default.getInstance().getRankCardResName(), n = CardUtil_1.default.getAtlasPathAndBundleName(r), o = n.path, l = n.bundleName, p = n.fromAtlas, u = Utils_1.Info2Key({
                    bundleName: l,
                    path: o,
                    fromAtlas: p
                }), f = t.ins, h = AvatarCollectModel_1.default.getInstance().getData();
                if (u in h.collectedCardMap) {
                    var v = h.collectedCardMap[u];
                    if (v.curCount < v.maxCount) {
                        this.addRankAvatar(f.node, {
                            bundleName: l,
                            path: o,
                            fromAtlas: p
                        }, v);
                    }
                    else {
                        a.getPeriodCount() == v.finishPeriod && this.addRankAvatar(f.node, {
                            bundleName: l,
                            path: o,
                            fromAtlas: p
                        }, v);
                    }
                }
            }
        }
    };
    AvatarCollectionTrait.prototype.getLevelMaxCountString = function () {
        return null == this._traitData.maxCountString ? AvatarCollectModel_1.Level2MaxString : "string" == typeof this._traitData.maxCountString ? this._traitData.maxCountString : "object" == typeof this._traitData.maxCountString && Array.isArray(this._traitData.maxCountString) && this._traitData.maxCountString.length > 0 ? this._traitData.maxCountString[0] : AvatarCollectModel_1.Level2MaxString;
    };
    AvatarCollectionTrait.prototype.getMaxCountByCurrentLevel = function () {
        for (var t = AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel(), e = this.getLevelMaxCountString().split(";"), a = 0, r = e.length - 1; r >= 0; r--) {
            var n = e[r], o = n.split(",")[0], i = n.split(",")[1];
            if (t >= parseInt(o)) {
                a = parseInt(i);
                break;
            }
        }
        return a;
    };
    AvatarCollectionTrait.prototype.onHallVw_initBtns = function (t, e) {
        e();
        var a = AvatarCollectModel_1.default.getInstance().getRankModel();
        if (a) {
            var r = AvatarCollectModel_1.default.getInstance().getData(), n = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(n), l = o.path, p = o.bundleName, u = o.fromAtlas, v = Utils_1.Info2Key({
                bundleName: p,
                path: l,
                fromAtlas: u
            });
            if (!(v in r.collectedCardMap)) {
                var y = null;
                for (var g in r.collectedCardMap) {
                    var _ = r.collectedCardMap[g];
                    if (_.resName == n) {
                        var m = GameUtils_1.default.deepClone(_);
                        m.key = v;
                        m.headId = AvatarCollectModel_1.default.getInstance().getHeadId(n, p);
                        r.collectedCardMap[v] = m;
                        0 == _.curCount && (y = g);
                        DGameUserInfo_1.DotGameUserInfo.dotAvatarActive({
                            activity_period: a.getPeriodCount(),
                            activity_card_id: v,
                            avatar_need_count: m.maxCount,
                            main_level: AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel()
                        });
                    }
                }
                y && delete r.collectedCardMap[y];
                r.collectedCardMap = r.collectedCardMap;
            }
        }
    };
    AvatarCollectionTrait.prototype.onRankModel_addCount = function (t, e) {
        e();
        var a = t.ins, r = AvatarCollectModel_1.default.getInstance().getData(), n = [];
        for (var o in r.collectedCardMap)
            0 == r.collectedCardMap[o].curCount && n.push(o);
        if (n.length > 0) {
            n.forEach(function (t) {
                delete r.collectedCardMap[t];
            });
            r.collectedCardMap = r.collectedCardMap;
        }
        var l = UserModel_1.default.getInstance().getRankCardResName(), p = CardUtil_1.default.getAtlasPathAndBundleName(l), u = p.path, f = p.bundleName, v = p.fromAtlas, y = Utils_1.Info2Key({
            bundleName: f,
            path: u,
            fromAtlas: v
        });
        if (!(y in r.collectedCardMap)) {
            var g = this.getMaxCountByCurrentLevel();
            if (g > 0) {
                r.collectedCardMap[y] = {
                    curCount: 0,
                    maxCount: g,
                    startPeriod: a.getPeriodCount(),
                    finishPeriod: -1,
                    key: y,
                    headId: AvatarCollectModel_1.default.getInstance().getHeadId(l, f),
                    resName: l,
                    isPlayedInUserInfo: false,
                    isPlayedInRank: false
                };
                r.collectedCardMap = r.collectedCardMap;
            }
            DGameUserInfo_1.DotGameUserInfo.dotAvatarActive({
                activity_period: a.getPeriodCount(),
                activity_card_id: y,
                avatar_need_count: g,
                main_level: AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel()
            });
        }
    };
    AvatarCollectionTrait.prototype.onClearBhv_prepareClear = function (t, e) {
        var a = this;
        t.args[0].forEach(function (t) {
            var e = t.cardUniqueInfo;
            a.checkClearCard(e);
        });
        AvatarCollectModel_1.default.getInstance().getData();
        e();
    };
    AvatarCollectionTrait.prototype.addRankAvatar = function (t, e, r) {
        var n = this;
        RankAvatar_1.default.createUI().then(function (a) {
            if (cc.isValid(a) && cc.isValid(t)) {
                a.parent = t;
                a.getComponent(RankAvatar_1.default).updateUI(e, r);
                if (r.curCount == r.maxCount && !r.isPlayedInRank) {
                    r.isPlayedInRank = true;
                    var o = AvatarCollectModel_1.default.getInstance().getData();
                    o.collectedCardMap[r.key] = r;
                    o.collectedCardMap = o.collectedCardMap;
                    a.getComponent(RankAvatar_1.default).playFinishAnim(r);
                }
                n._rankAvatarNode = a;
            }
        }).catch(function (t) {
            console.error("[" + AvatarCollectionTrait_1.traitKey + "] 排行榜内创建头像收集预设失败:" + ((null == t ? void 0 : t.message) || "RankAvatar加载失败"));
        });
    };
    AvatarCollectionTrait.prototype.checkClearCard = function (t) {
        var e = AvatarCollectModel_1.default.getInstance().getRankModel();
        if (AvatarCollectModel_1.default.getInstance().isRankUnlock() && e) {
            var a = UserModel_1.default.getInstance().getRankCardResName(), r = CardUtil_1.default.getAtlasPathAndBundleName(a), n = r.path, o = r.bundleName, l = r.fromAtlas;
            if (t.bundleName == o && t.path == n && t.fromAtlas == l && -1 != AvatarCollectModel_1.default.getInstance().getHeadId(a, o)) {
                var p = Utils_1.Info2Key(t), f = AvatarCollectModel_1.default.getInstance().getData();
                if (p in f.collectedCardMap) {
                    var v = f.collectedCardMap[p];
                    if (v.curCount < v.maxCount) {
                        v.curCount++;
                        if (v.curCount >= v.maxCount) {
                            var y = e.getPeriodCount();
                            v.finishPeriod = y;
                            ControllerManager_1.default.getInstance().pushViewByController("AvatarBannerController", {
                                data: v,
                                bgStyle: null,
                                noBlock: true
                            });
                            DGameUserInfo_1.DotGameUserInfo.dotAvatarCollect({
                                activity_period: y,
                                activity_card_id: p,
                                avatar_need_count: v.maxCount,
                                main_level: AvatarCollectModel_1.default.getInstance().getCurrentNormalLevel()
                            });
                        }
                        f.collectedCardMap[p] = v;
                        f.collectedCardMap = f.collectedCardMap;
                    }
                }
            }
        }
    };
    var AvatarCollectionTrait_1;
    AvatarCollectionTrait.traitKey = "AvatarCollection";
    AvatarCollectionTrait = AvatarCollectionTrait_1 = __decorate([
        mj.trait,
        mj.class("AvatarCollectionTrait")
    ], AvatarCollectionTrait);
    return AvatarCollectionTrait;
}(Trait_1.default));
exports.default = AvatarCollectionTrait;

cc._RF.pop();