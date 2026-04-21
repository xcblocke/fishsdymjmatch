
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarCollectionTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJDb2xsZWN0aW9uVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUErRDtBQUMvRCxzRUFBaUU7QUFDakUsZ0VBQTJEO0FBQzNELGlDQUFtQztBQUNuQywyQ0FBc0M7QUFDdEMsMEZBQXFGO0FBQ3JGLDJEQUEyRTtBQUMzRSw0RUFBdUU7QUFDdkUsZ0VBQWlFO0FBR2pFO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBb05DO1FBbk5DLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBa050QixDQUFDOzhCQXBOb0IscUJBQXFCO0lBSXhDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLDRCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCw2Q0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDckIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsR0FBRyw0QkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4RCxJQUFJLDRCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLEdBQUcs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QUFlLEVBQUUsQ0FBQztnQ0FDbEIsZ0JBQWdCLEVBQUUsQ0FBQztnQ0FDbkIsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0NBQzdCLFVBQVUsRUFBRSw0QkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTs2QkFDckUsQ0FBQyxDQUFDO3lCQUNKO3dCQUNELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7cUJBQ3pDO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7O0lBaE5NLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFIbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQW9OekM7SUFBRCw0QkFBQztDQXBORCxBQW9OQyxDQXBOa0QsZUFBSyxHQW9OdkQ7a0JBcE5vQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgSW5mbzJLZXkgfSBmcm9tICcuL1V0aWxzJztcbmltcG9ydCBSYW5rQXZhdGFyIGZyb20gJy4vUmFua0F2YXRhcic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgQXZhdGFyQ29sbGVjdE1vZGVsLCB7IExldmVsMk1heFN0cmluZyB9IGZyb20gJy4vQXZhdGFyQ29sbGVjdE1vZGVsJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBEb3RHYW1lVXNlckluZm8gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RHYW1lVXNlckluZm8nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBdmF0YXJDb2xsZWN0aW9uVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbGxlY3Rpb25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3JhbmtBdmF0YXJOb2RlID0gbnVsbDtcbiAgc2VsZWN0QXZhdGFySWQgPSAtMTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJBdmF0YXJDb2xsZWN0aW9uXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRJc0F2YXRhckNvbGxlY3Rpb25PcGVuKHRydWUpO1xuICB9XG4gIG9uUmFua1Z3X3Nob3codCwgZSkge1xuICAgIGUoKTtcbiAgICBpZiAoIXQuaW5zLl9pc09sZERhdGEpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX3JhbmtBdmF0YXJOb2RlKSkge1xuICAgICAgICB0aGlzLl9yYW5rQXZhdGFyTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3JhbmtBdmF0YXJOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua01vZGVsKCk7XG4gICAgICBpZiAoQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuaXNSYW5rVW5sb2NrKCkgJiYgYSkge1xuICAgICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpLFxuICAgICAgICAgIG4gPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHIpLFxuICAgICAgICAgIG8gPSBuLnBhdGgsXG4gICAgICAgICAgbCA9IG4uYnVuZGxlTmFtZSxcbiAgICAgICAgICBwID0gbi5mcm9tQXRsYXMsXG4gICAgICAgICAgdSA9IEluZm8yS2V5KHtcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IGwsXG4gICAgICAgICAgICBwYXRoOiBvLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiBwXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZiA9IHQuaW5zLFxuICAgICAgICAgIGggPSBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXREYXRhKCk7XG4gICAgICAgIGlmICh1IGluIGguY29sbGVjdGVkQ2FyZE1hcCkge1xuICAgICAgICAgIHZhciB2ID0gaC5jb2xsZWN0ZWRDYXJkTWFwW3VdO1xuICAgICAgICAgIGlmICh2LmN1ckNvdW50IDwgdi5tYXhDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5hZGRSYW5rQXZhdGFyKGYubm9kZSwge1xuICAgICAgICAgICAgICBidW5kbGVOYW1lOiBsLFxuICAgICAgICAgICAgICBwYXRoOiBvLFxuICAgICAgICAgICAgICBmcm9tQXRsYXM6IHBcbiAgICAgICAgICAgIH0sIHYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhLmdldFBlcmlvZENvdW50KCkgPT0gdi5maW5pc2hQZXJpb2QgJiYgdGhpcy5hZGRSYW5rQXZhdGFyKGYubm9kZSwge1xuICAgICAgICAgICAgICBidW5kbGVOYW1lOiBsLFxuICAgICAgICAgICAgICBwYXRoOiBvLFxuICAgICAgICAgICAgICBmcm9tQXRsYXM6IHBcbiAgICAgICAgICAgIH0sIHYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRMZXZlbE1heENvdW50U3RyaW5nKCkge1xuICAgIHJldHVybiBudWxsID09IHRoaXMuX3RyYWl0RGF0YS5tYXhDb3VudFN0cmluZyA/IExldmVsMk1heFN0cmluZyA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHRoaXMuX3RyYWl0RGF0YS5tYXhDb3VudFN0cmluZyA/IHRoaXMuX3RyYWl0RGF0YS5tYXhDb3VudFN0cmluZyA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIHRoaXMuX3RyYWl0RGF0YS5tYXhDb3VudFN0cmluZyAmJiBBcnJheS5pc0FycmF5KHRoaXMuX3RyYWl0RGF0YS5tYXhDb3VudFN0cmluZykgJiYgdGhpcy5fdHJhaXREYXRhLm1heENvdW50U3RyaW5nLmxlbmd0aCA+IDAgPyB0aGlzLl90cmFpdERhdGEubWF4Q291bnRTdHJpbmdbMF0gOiBMZXZlbDJNYXhTdHJpbmc7XG4gIH1cbiAgZ2V0TWF4Q291bnRCeUN1cnJlbnRMZXZlbCgpIHtcbiAgICBmb3IgKHZhciB0ID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudE5vcm1hbExldmVsKCksIGUgPSB0aGlzLmdldExldmVsTWF4Q291bnRTdHJpbmcoKS5zcGxpdChcIjtcIiksIGEgPSAwLCByID0gZS5sZW5ndGggLSAxOyByID49IDA7IHItLSkge1xuICAgICAgdmFyIG4gPSBlW3JdLFxuICAgICAgICBvID0gbi5zcGxpdChcIixcIilbMF0sXG4gICAgICAgIGkgPSBuLnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgIGlmICh0ID49IHBhcnNlSW50KG8pKSB7XG4gICAgICAgIGEgPSBwYXJzZUludChpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIG9uSGFsbFZ3X2luaXRCdG5zKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIGEgPSBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rTW9kZWwoKTtcbiAgICBpZiAoYSkge1xuICAgICAgdmFyIHIgPSBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXREYXRhKCksXG4gICAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgICAgbyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUobiksXG4gICAgICAgIGwgPSBvLnBhdGgsXG4gICAgICAgIHAgPSBvLmJ1bmRsZU5hbWUsXG4gICAgICAgIHUgPSBvLmZyb21BdGxhcyxcbiAgICAgICAgdiA9IEluZm8yS2V5KHtcbiAgICAgICAgICBidW5kbGVOYW1lOiBwLFxuICAgICAgICAgIHBhdGg6IGwsXG4gICAgICAgICAgZnJvbUF0bGFzOiB1XG4gICAgICAgIH0pO1xuICAgICAgaWYgKCEodiBpbiByLmNvbGxlY3RlZENhcmRNYXApKSB7XG4gICAgICAgIHZhciB5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgZyBpbiByLmNvbGxlY3RlZENhcmRNYXApIHtcbiAgICAgICAgICB2YXIgXyA9IHIuY29sbGVjdGVkQ2FyZE1hcFtnXTtcbiAgICAgICAgICBpZiAoXy5yZXNOYW1lID09IG4pIHtcbiAgICAgICAgICAgIHZhciBtID0gR2FtZVV0aWxzLmRlZXBDbG9uZShfKTtcbiAgICAgICAgICAgIG0ua2V5ID0gdjtcbiAgICAgICAgICAgIG0uaGVhZElkID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SGVhZElkKG4sIHApO1xuICAgICAgICAgICAgci5jb2xsZWN0ZWRDYXJkTWFwW3ZdID0gbTtcbiAgICAgICAgICAgIDAgPT0gXy5jdXJDb3VudCAmJiAoeSA9IGcpO1xuICAgICAgICAgICAgRG90R2FtZVVzZXJJbmZvLmRvdEF2YXRhckFjdGl2ZSh7XG4gICAgICAgICAgICAgIGFjdGl2aXR5X3BlcmlvZDogYS5nZXRQZXJpb2RDb3VudCgpLFxuICAgICAgICAgICAgICBhY3Rpdml0eV9jYXJkX2lkOiB2LFxuICAgICAgICAgICAgICBhdmF0YXJfbmVlZF9jb3VudDogbS5tYXhDb3VudCxcbiAgICAgICAgICAgICAgbWFpbl9sZXZlbDogQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudE5vcm1hbExldmVsKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5ICYmIGRlbGV0ZSByLmNvbGxlY3RlZENhcmRNYXBbeV07XG4gICAgICAgIHIuY29sbGVjdGVkQ2FyZE1hcCA9IHIuY29sbGVjdGVkQ2FyZE1hcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25SYW5rTW9kZWxfYWRkQ291bnQodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgYSA9IHQuaW5zLFxuICAgICAgciA9IEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmdldERhdGEoKSxcbiAgICAgIG4gPSBbXTtcbiAgICBmb3IgKHZhciBvIGluIHIuY29sbGVjdGVkQ2FyZE1hcCkgMCA9PSByLmNvbGxlY3RlZENhcmRNYXBbb10uY3VyQ291bnQgJiYgbi5wdXNoKG8pO1xuICAgIGlmIChuLmxlbmd0aCA+IDApIHtcbiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBkZWxldGUgci5jb2xsZWN0ZWRDYXJkTWFwW3RdO1xuICAgICAgfSk7XG4gICAgICByLmNvbGxlY3RlZENhcmRNYXAgPSByLmNvbGxlY3RlZENhcmRNYXA7XG4gICAgfVxuICAgIHZhciBsID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCksXG4gICAgICBwID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShsKSxcbiAgICAgIHUgPSBwLnBhdGgsXG4gICAgICBmID0gcC5idW5kbGVOYW1lLFxuICAgICAgdiA9IHAuZnJvbUF0bGFzLFxuICAgICAgeSA9IEluZm8yS2V5KHtcbiAgICAgICAgYnVuZGxlTmFtZTogZixcbiAgICAgICAgcGF0aDogdSxcbiAgICAgICAgZnJvbUF0bGFzOiB2XG4gICAgICB9KTtcbiAgICBpZiAoISh5IGluIHIuY29sbGVjdGVkQ2FyZE1hcCkpIHtcbiAgICAgIHZhciBnID0gdGhpcy5nZXRNYXhDb3VudEJ5Q3VycmVudExldmVsKCk7XG4gICAgICBpZiAoZyA+IDApIHtcbiAgICAgICAgci5jb2xsZWN0ZWRDYXJkTWFwW3ldID0ge1xuICAgICAgICAgIGN1ckNvdW50OiAwLFxuICAgICAgICAgIG1heENvdW50OiBnLFxuICAgICAgICAgIHN0YXJ0UGVyaW9kOiBhLmdldFBlcmlvZENvdW50KCksXG4gICAgICAgICAgZmluaXNoUGVyaW9kOiAtMSxcbiAgICAgICAgICBrZXk6IHksXG4gICAgICAgICAgaGVhZElkOiBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRIZWFkSWQobCwgZiksXG4gICAgICAgICAgcmVzTmFtZTogbCxcbiAgICAgICAgICBpc1BsYXllZEluVXNlckluZm86IGZhbHNlLFxuICAgICAgICAgIGlzUGxheWVkSW5SYW5rOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByLmNvbGxlY3RlZENhcmRNYXAgPSByLmNvbGxlY3RlZENhcmRNYXA7XG4gICAgICB9XG4gICAgICBEb3RHYW1lVXNlckluZm8uZG90QXZhdGFyQWN0aXZlKHtcbiAgICAgICAgYWN0aXZpdHlfcGVyaW9kOiBhLmdldFBlcmlvZENvdW50KCksXG4gICAgICAgIGFjdGl2aXR5X2NhcmRfaWQ6IHksXG4gICAgICAgIGF2YXRhcl9uZWVkX2NvdW50OiBnLFxuICAgICAgICBtYWluX2xldmVsOiBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50Tm9ybWFsTGV2ZWwoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uQ2xlYXJCaHZfcHJlcGFyZUNsZWFyKHQsIGUpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdC5hcmdzWzBdLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBlID0gdC5jYXJkVW5pcXVlSW5mbztcbiAgICAgIGEuY2hlY2tDbGVhckNhcmQoZSk7XG4gICAgfSk7XG4gICAgQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpO1xuICAgIGUoKTtcbiAgfVxuICBhZGRSYW5rQXZhdGFyKHQsIGUsIHIpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgUmFua0F2YXRhci5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGEpICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgYS5wYXJlbnQgPSB0O1xuICAgICAgICBhLmdldENvbXBvbmVudChSYW5rQXZhdGFyKS51cGRhdGVVSShlLCByKTtcbiAgICAgICAgaWYgKHIuY3VyQ291bnQgPT0gci5tYXhDb3VudCAmJiAhci5pc1BsYXllZEluUmFuaykge1xuICAgICAgICAgIHIuaXNQbGF5ZWRJblJhbmsgPSB0cnVlO1xuICAgICAgICAgIHZhciBvID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpO1xuICAgICAgICAgIG8uY29sbGVjdGVkQ2FyZE1hcFtyLmtleV0gPSByO1xuICAgICAgICAgIG8uY29sbGVjdGVkQ2FyZE1hcCA9IG8uY29sbGVjdGVkQ2FyZE1hcDtcbiAgICAgICAgICBhLmdldENvbXBvbmVudChSYW5rQXZhdGFyKS5wbGF5RmluaXNoQW5pbShyKTtcbiAgICAgICAgfVxuICAgICAgICBuLl9yYW5rQXZhdGFyTm9kZSA9IGE7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBBdmF0YXJDb2xsZWN0aW9uVHJhaXQudHJhaXRLZXkgKyBcIl0g5o6S6KGM5qac5YaF5Yib5bu65aS05YOP5pS26ZuG6aKE6K6+5aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwiUmFua0F2YXRhcuWKoOi9veWksei0pVwiKSk7XG4gICAgfSk7XG4gIH1cbiAgY2hlY2tDbGVhckNhcmQodCkge1xuICAgIHZhciBlID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua01vZGVsKCk7XG4gICAgaWYgKEF2YXRhckNvbGxlY3RNb2RlbC5nZXRJbnN0YW5jZSgpLmlzUmFua1VubG9jaygpICYmIGUpIHtcbiAgICAgIHZhciBhID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCksXG4gICAgICAgIHIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKGEpLFxuICAgICAgICBuID0gci5wYXRoLFxuICAgICAgICBvID0gci5idW5kbGVOYW1lLFxuICAgICAgICBsID0gci5mcm9tQXRsYXM7XG4gICAgICBpZiAodC5idW5kbGVOYW1lID09IG8gJiYgdC5wYXRoID09IG4gJiYgdC5mcm9tQXRsYXMgPT0gbCAmJiAtMSAhPSBBdmF0YXJDb2xsZWN0TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRIZWFkSWQoYSwgbykpIHtcbiAgICAgICAgdmFyIHAgPSBJbmZvMktleSh0KSxcbiAgICAgICAgICBmID0gQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpO1xuICAgICAgICBpZiAocCBpbiBmLmNvbGxlY3RlZENhcmRNYXApIHtcbiAgICAgICAgICB2YXIgdiA9IGYuY29sbGVjdGVkQ2FyZE1hcFtwXTtcbiAgICAgICAgICBpZiAodi5jdXJDb3VudCA8IHYubWF4Q291bnQpIHtcbiAgICAgICAgICAgIHYuY3VyQ291bnQrKztcbiAgICAgICAgICAgIGlmICh2LmN1ckNvdW50ID49IHYubWF4Q291bnQpIHtcbiAgICAgICAgICAgICAgdmFyIHkgPSBlLmdldFBlcmlvZENvdW50KCk7XG4gICAgICAgICAgICAgIHYuZmluaXNoUGVyaW9kID0geTtcbiAgICAgICAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkF2YXRhckJhbm5lckNvbnRyb2xsZXJcIiwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHYsXG4gICAgICAgICAgICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBub0Jsb2NrOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBEb3RHYW1lVXNlckluZm8uZG90QXZhdGFyQ29sbGVjdCh7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlfcGVyaW9kOiB5LFxuICAgICAgICAgICAgICAgIGFjdGl2aXR5X2NhcmRfaWQ6IHAsXG4gICAgICAgICAgICAgICAgYXZhdGFyX25lZWRfY291bnQ6IHYubWF4Q291bnQsXG4gICAgICAgICAgICAgICAgbWFpbl9sZXZlbDogQXZhdGFyQ29sbGVjdE1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudE5vcm1hbExldmVsKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmLmNvbGxlY3RlZENhcmRNYXBbcF0gPSB2O1xuICAgICAgICAgICAgZi5jb2xsZWN0ZWRDYXJkTWFwID0gZi5jb2xsZWN0ZWRDYXJkTWFwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==