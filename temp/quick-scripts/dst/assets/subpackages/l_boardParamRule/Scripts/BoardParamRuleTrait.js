
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boardParamRule/Scripts/BoardParamRuleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd588fZ9BRFA35azENmPWjkZ', 'BoardParamRuleTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var IRuleTypes_1 = require("../../../Scripts/IRuleTypes");
var Tile2ExtractManager_1 = require("../../../Scripts/Tile2ExtractManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleTrait, _super);
    function BoardParamRuleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentBankBundle = null;
        _this._currentBankFile = null;
        _this._currentParentType = null;
        _this._isRemoteBank = false;
        _this._mergedGroupIds = [];
        return _this;
    }
    BoardParamRuleTrait_1 = BoardParamRuleTrait;
    BoardParamRuleTrait.extractGroupIds = function (t) {
        var e, r, a, n;
        if (!t)
            return [];
        var o = [], l = t.conflictParams, u = l && l.groupId ? l.groupId : [t.groupId];
        try {
            for (var c = __values(u), s = c.next(); !s.done; s = c.next()) {
                var p = s.value;
                if (null != p) {
                    var f = Array.isArray(p) ? p : [p];
                    try {
                        for (var y = (a = void 0, __values(f)), d = y.next(); !d.done; d = y.next()) {
                            var v = d.value, _ = Number(v);
                            _ && !o.includes(_) && o.push(_);
                        }
                    }
                    catch (t) {
                        a = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            d && !d.done && (n = y.return) && n.call(y);
                        }
                        finally {
                            if (a)
                                throw a.error;
                        }
                    }
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
                s && !s.done && (r = c.return) && r.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    BoardParamRuleTrait.extractJsonData = function (t) {
        var e, r;
        if (!t)
            return null;
        var a = new Map(), n = function n(t) {
            var e, r;
            if (Array.isArray(t))
                try {
                    for (var n = __values(t), o = n.next(); !o.done; o = n.next()) {
                        var l = o.value;
                        Array.isArray(l) && a.set(l[0], l);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        o && !o.done && (r = n.return) && r.call(n);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
        }, o = t.conflictParams;
        if (null == o ? void 0 : o.jsonData) {
            var l = Array.isArray(o.jsonData) ? o.jsonData : [o.jsonData];
            try {
                for (var u = __values(l), c = u.next(); !c.done; c = u.next())
                    n(c.value);
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (r = u.return) && r.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
        n(t.jsonData);
        return 0 === a.size ? null : Array.from(a.values());
    };
    BoardParamRuleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._mergedGroupIds = BoardParamRuleTrait_1.extractGroupIds(this._traitData);
        var e = BoardParamRuleTrait_1.extractJsonData(this._traitData);
        delete this._traitData.conflictParams;
        var a = BoardParamRuleEngine_1.default.getInstance();
        a.loadConfig();
        e && a.mergeJsonData(e);
        this.preloadAllRemoteBanks(a);
    };
    BoardParamRuleTrait.prototype.onLoginM_enterGame = function (t, e) {
        BoardParamRuleEngine_1.default.getInstance().addPlayerGroupIds(this._mergedGroupIds);
        e();
    };
    BoardParamRuleTrait.prototype.buildContext = function (t) {
        var e = UserModel_1.default.getInstance(), r = t ? t.getLevelId() : 0, a = ExtractTool_1.default.getInstance().getLevelType(r);
        return {
            levelId: r,
            totalGames: e.localData.totalGames || 0,
            activeDays: e.localData.activeDays || 0,
            stageType: a,
            playerGroupIds: BoardParamRuleEngine_1.default.getInstance().getPlayerGroupIds()
        };
    };
    BoardParamRuleTrait.prototype.onT2ExtMgr_getCont = function (t, e) {
        var r = this, a = BoardParamRuleEngine_1.default.getInstance();
        a.invalidateCache();
        var n = t.args[0], o = this.buildContext(n), i = a.getActiveRules(o);
        if (i && 0 !== i.length) {
            var l = this.preloadRemoteBanks(i).then(function () {
                return r.executeConfiguredPipeline(n, i);
            });
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: l
            });
        }
        else
            e();
    };
    BoardParamRuleTrait.prototype.preloadAllRemoteBanks = function (t) {
        var e, a, n = UserModel_1.default.getInstance().tile2NormalData.getLevelId() || 0, o = t.getAllRules(), l = [];
        try {
            for (var u = __values(o), c = u.next(); !c.done; c = u.next()) {
                var s = c.value, y = s.bankParam;
                if (y && !y.includes(",") && this.ruleMayApplyAfter(s, n)) {
                    var d = y.trim();
                    d && !l.includes(d) && l.push(d);
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
                c && !c.done && (a = u.return) && a.call(u);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        if (0 !== l.length) {
            var v = l.map(function (t) {
                return t.endsWith(".json") ? t : t + ".json";
            });
            ResManager_1.resManager.loadRemoteLevelTiles(v, function (t, e) {
                var a;
                if (!t)
                    for (var n = Array.isArray(e) ? e : [e], o = 0; o < l.length; o++) {
                        var i = n[o];
                        if (i) {
                            var u = Array.isArray(i) ? i : null !== (a = i.json) && void 0 !== a ? a : null;
                            Array.isArray(u) && u.length > 0 && BoardParamRuleTrait_1._remoteBankCache.set(l[o], u);
                        }
                    }
            });
        }
    };
    BoardParamRuleTrait.prototype.ruleMayApplyAfter = function (t, e) {
        var r, a;
        if (!t.conditionExpr || !t.conditionParams)
            return true;
        var n = t.conditionExpr.split(/[&|]/), o = t.conditionParams.split("|"), l = 0;
        try {
            for (var u = __values(n), c = u.next(); !c.done; c = u.next()) {
                var s = c.value, p = parseInt(s), f = o[l] || "";
                l++;
                if (1 === p) {
                    var y = f.split(","), d = Number(y[1]);
                    if (-1 !== d && d < e)
                        return false;
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
                c && !c.done && (a = u.return) && a.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return true;
    };
    BoardParamRuleTrait.prototype.preloadRemoteBanks = function (t) {
        var e, a, n = [];
        try {
            for (var o = __values(t), l = o.next(); !l.done; l = o.next()) {
                var u = l.value.rule.bankParam;
                if (u && !u.includes(",")) {
                    var c = u.trim();
                    c && !BoardParamRuleTrait_1._remoteBankCache.has(c) && n.push(c);
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
                l && !l.done && (a = o.return) && a.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        if (0 === n.length)
            return Promise.resolve();
        var s = n.map(function (t) {
            return t.endsWith(".json") ? t : t + ".json";
        });
        return new Promise(function (t) {
            ResManager_1.resManager.loadRemoteLevelTiles(s, function (e, a) {
                var o;
                if (e)
                    t();
                else {
                    for (var i = Array.isArray(a) ? a : [a], l = 0; l < n.length; l++) {
                        var u = i[l];
                        if (u) {
                            var c = Array.isArray(u) ? u : null !== (o = u.json) && void 0 !== o ? o : null;
                            Array.isArray(c) && c.length > 0 && BoardParamRuleTrait_1._remoteBankCache.set(n[l], c);
                        }
                    }
                    t();
                }
            });
        });
    };
    BoardParamRuleTrait.prototype.applyBankParam = function (t) {
        var e, r, a = t.rule.bankParam;
        if (a) {
            if (a.includes(",")) {
                var n = a.split(",");
                this._currentBankBundle = (null === (e = n[0]) || void 0 === e ? void 0 : e.trim()) || null;
                this._currentBankFile = (null === (r = n[1]) || void 0 === r ? void 0 : r.trim()) || null;
                this._isRemoteBank = false;
            }
            else {
                this._currentBankBundle = null;
                this._currentBankFile = a.trim();
                this._isRemoteBank = true;
            }
        }
        else {
            this._currentBankBundle = null;
            this._currentBankFile = null;
            this._isRemoteBank = false;
        }
    };
    BoardParamRuleTrait.prototype.executeConfiguredPipeline = function (t, e) {
        var r, a, n = this, o = Promise.resolve(null), l = function l(e) {
            o = o.then(function (r) {
                if (r)
                    return r;
                n.applyBankParam(e);
                n._currentParentType = e.parentType;
                return (n._isRemoteBank ? n.tryRemoteExtraction(n._currentBankFile) : n.tryStrategyExtraction(t, e.parentType)).then(function (t) {
                    return t && t.content ? t : null;
                }).catch(function () {
                    return null;
                });
            });
        };
        try {
            for (var u = __values(e), c = u.next(); !c.done; c = u.next())
                l(c.value);
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (a = u.return) && a.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return o.then(function (e) {
            n._currentBankBundle = null;
            n._currentBankFile = null;
            n._currentParentType = null;
            n._isRemoteBank = false;
            return e || Tile2ExtractManager_1.default.getInstance().chain.execute({
                gameData: t
            });
        });
    };
    BoardParamRuleTrait.prototype.tryStrategyExtraction = function (t, e) {
        var r = Tile2ExtractManager_1.default.getInstance().chain.getStrategies().find(function (t) {
            return t.name === e;
        });
        if (!r)
            return Promise.resolve(null);
        var a = {
            gameData: t
        };
        return r.extract(a);
    };
    BoardParamRuleTrait.prototype.tryRemoteExtraction = function (t) {
        var e = this;
        if (!t)
            return Promise.resolve(null);
        var a = BoardParamRuleTrait_1._remoteBankCache.get(t);
        if (a)
            return Promise.resolve(this.extractFromRemotePool(a, t));
        var n = t.endsWith(".json") ? t : t + ".json";
        return new Promise(function (a) {
            ResManager_1.resManager.loadRemoteLevelTiles(n, function (n, o) {
                var i;
                if (!n && o) {
                    var l = Array.isArray(o) ? o : null !== (i = o.json) && void 0 !== i ? i : null;
                    if (Array.isArray(l) && 0 !== l.length) {
                        BoardParamRuleTrait_1._remoteBankCache.set(t, l);
                        a(e.extractFromRemotePool(l, t));
                    }
                    else
                        a(null);
                }
                else
                    a(null);
            });
        });
    };
    BoardParamRuleTrait.prototype.extractFromRemotePool = function (t, e) {
        var a, n = BoardParamRuleTrait_1._remoteProgressMap, o = (n[e] || 0) % t.length, i = t[o];
        if (!i || !i.content)
            return null;
        n[e] = (o + 1) % t.length;
        return {
            content: i.content,
            index: String(null !== (a = i.index) && void 0 !== a ? a : o),
            slover: i.solver,
            tileNum: i.tile_num,
            libName: e
        };
    };
    BoardParamRuleTrait.prototype.onT2StaStr_dataPath = function (t, e) {
        if (!this._isRemoteBank && this._currentBankFile) {
            var r = this._currentBankBundle || "mainRes", a = this._currentBankFile;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: ["tile2LevelData/static/" + a, r]
            });
        }
        else
            e();
    };
    BoardParamRuleTrait.prototype.onT2StaLvT_config = function (t, e) {
        if (!this._isRemoteBank && this._currentBankBundle) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    bundle: this._currentBankBundle
                }
            });
        }
        else {
            e();
        }
    };
    BoardParamRuleTrait.prototype.onT2StaLvT_getFile = function (t, e) {
        if (!this._isRemoteBank && this._currentBankFile) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._currentBankFile
            });
        }
        else {
            e();
        }
    };
    BoardParamRuleTrait.prototype.onT2HarStr_extract = function (t, e) {
        !this._isRemoteBank && this._currentBankFile, e();
    };
    BoardParamRuleTrait.prototype.onT2DynStr_isDyn = function (t, e) {
        if (this._isRemoteBank) {
            e();
        }
        else {
            if (this._currentParentType === IRuleTypes_1.ETile2ExtractType.Dynamic) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
    };
    BoardParamRuleTrait.prototype.onT2DynStr_extract = function (t, e) {
        !this._isRemoteBank && this._currentBankFile, e();
    };
    BoardParamRuleTrait.prototype.onT2FixStr_isFixed = function (t, e) {
        if (this._isRemoteBank) {
            e();
        }
        else {
            if (this._currentParentType === IRuleTypes_1.ETile2ExtractType.Fixed) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
    };
    BoardParamRuleTrait.prototype.onT2FixStr_getFixed = function (t, e) {
        !this._isRemoteBank && this._currentBankFile, e();
    };
    BoardParamRuleTrait.prototype.onT2FxRnd_config = function (t, e) {
        if (!this._isRemoteBank && this._currentBankFile) {
            var r = this._currentBankBundle || "mainRes", a = this._currentBankFile;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    strategy: a,
                    minLevel: 0,
                    maxLevel: 0,
                    path: "tile2LevelData/fixLevelStrategy/" + a + "/",
                    bundle: r
                }
            });
        }
        else
            e();
    };
    BoardParamRuleTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0,
                priority: 9999
            }, {
                event: "T2ExtMgr_getCont",
                type: 0,
                priority: 9999
            }, {
                event: "T2StaStr_dataPath",
                type: 0,
                priority: 9999
            }, {
                event: "T2StaLvT_config",
                type: 0,
                priority: 9999
            }, {
                event: "T2StaLvT_getFile",
                type: 0,
                priority: 9999
            }, {
                event: "T2HarStr_extract",
                type: 0,
                priority: 9999
            }, {
                event: "T2DynStr_isDyn",
                type: 0,
                priority: 9999
            }, {
                event: "T2DynStr_extract",
                type: 0,
                priority: 9999
            }, {
                event: "T2FixStr_isFixed",
                type: 0,
                priority: 9999
            }, {
                event: "T2FixStr_getFixed",
                type: 0,
                priority: 9999
            }, {
                event: "T2FxRnd_config",
                type: 0,
                priority: 9999
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    var BoardParamRuleTrait_1;
    BoardParamRuleTrait.traitKey = "BoardParamRule";
    BoardParamRuleTrait._remoteBankCache = new Map();
    BoardParamRuleTrait._remoteProgressMap = {};
    BoardParamRuleTrait = BoardParamRuleTrait_1 = __decorate([
        mj.trait,
        mj.class("BoardParamRuleTrait")
    ], BoardParamRuleTrait);
    return BoardParamRuleTrait;
}(Trait_1.default));
exports.default = BoardParamRuleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvYXJkUGFyYW1SdWxlL1NjcmlwdHMvQm9hcmRQYXJhbVJ1bGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLDhFQUF5RTtBQUN6RSwwREFBZ0U7QUFDaEUsNEVBQXVFO0FBQ3ZFLHNFQUFpRTtBQUNqRSw0RUFBMkU7QUFDM0UsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQW1mQztRQWxmQyx3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixxQkFBZSxHQUFHLEVBQUUsQ0FBQzs7SUE4ZXZCLENBQUM7NEJBbmZvQixtQkFBbUI7SUFTL0IsbUNBQWUsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENB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LGdCQUFnQjtnQkFDdkIsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOztJQTVlTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBQzVCLG9DQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0Isc0NBQWtCLEdBQUcsRUFBRSxDQUFDO0lBUlosbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQW1mdkM7SUFBRCwwQkFBQztDQW5mRCxBQW1mQyxDQW5mZ0QsZUFBSyxHQW1mckQ7a0JBbmZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgQm9hcmRQYXJhbVJ1bGVFbmdpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Cb2FyZFBhcmFtUnVsZUVuZ2luZSc7XG5pbXBvcnQgeyBFVGlsZTJFeHRyYWN0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvSVJ1bGVUeXBlcyc7XG5pbXBvcnQgVGlsZTJFeHRyYWN0TWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1RpbGUyRXh0cmFjdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQm9hcmRQYXJhbVJ1bGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRQYXJhbVJ1bGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJlbnRCYW5rQnVuZGxlID0gbnVsbDtcbiAgX2N1cnJlbnRCYW5rRmlsZSA9IG51bGw7XG4gIF9jdXJyZW50UGFyZW50VHlwZSA9IG51bGw7XG4gIF9pc1JlbW90ZUJhbmsgPSBmYWxzZTtcbiAgX21lcmdlZEdyb3VwSWRzID0gW107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQm9hcmRQYXJhbVJ1bGVcIjtcbiAgc3RhdGljIF9yZW1vdGVCYW5rQ2FjaGUgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBfcmVtb3RlUHJvZ3Jlc3NNYXAgPSB7fTtcbiAgc3RhdGljIGV4dHJhY3RHcm91cElkcyh0KSB7XG4gICAgdmFyIGUsIHIsIGEsIG47XG4gICAgaWYgKCF0KSByZXR1cm4gW107XG4gICAgdmFyIG8gPSBbXSxcbiAgICAgIGwgPSB0LmNvbmZsaWN0UGFyYW1zLFxuICAgICAgdSA9IGwgJiYgbC5ncm91cElkID8gbC5ncm91cElkIDogW3QuZ3JvdXBJZF07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyh1KSwgcyA9IGMubmV4dCgpOyAhcy5kb25lOyBzID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBzLnZhbHVlO1xuICAgICAgICBpZiAobnVsbCAhPSBwKSB7XG4gICAgICAgICAgdmFyIGYgPSBBcnJheS5pc0FycmF5KHApID8gcCA6IFtwXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IChhID0gdm9pZCAwLCBfX3ZhbHVlcyhmKSksIGQgPSB5Lm5leHQoKTsgIWQuZG9uZTsgZCA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgICAgIHZhciB2ID0gZC52YWx1ZSxcbiAgICAgICAgICAgICAgICBfID0gTnVtYmVyKHYpO1xuICAgICAgICAgICAgICBfICYmICFvLmluY2x1ZGVzKF8pICYmIG8ucHVzaChfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZCAmJiAhZC5kb25lICYmIChuID0geS5yZXR1cm4pICYmIG4uY2FsbCh5KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHIgPSBjLnJldHVybikgJiYgci5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIHN0YXRpYyBleHRyYWN0SnNvbkRhdGEodCkge1xuICAgIHZhciBlLCByO1xuICAgIGlmICghdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGEgPSBuZXcgTWFwKCksXG4gICAgICBuID0gZnVuY3Rpb24gbih0KSB7XG4gICAgICAgIHZhciBlLCByO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModCksIG8gPSBuLm5leHQoKTsgIW8uZG9uZTsgbyA9IG4ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgbCA9IG8udmFsdWU7XG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KGwpICYmIGEuc2V0KGxbMF0sIGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGUgPSB7XG4gICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG8gJiYgIW8uZG9uZSAmJiAociA9IG4ucmV0dXJuKSAmJiByLmNhbGwobik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG8gPSB0LmNvbmZsaWN0UGFyYW1zO1xuICAgIGlmIChudWxsID09IG8gPyB2b2lkIDAgOiBvLmpzb25EYXRhKSB7XG4gICAgICB2YXIgbCA9IEFycmF5LmlzQXJyYXkoby5qc29uRGF0YSkgPyBvLmpzb25EYXRhIDogW28uanNvbkRhdGFdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGwpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkgbihjLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSB1LnJldHVybikgJiYgci5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG4odC5qc29uRGF0YSk7XG4gICAgcmV0dXJuIDAgPT09IGEuc2l6ZSA/IG51bGwgOiBBcnJheS5mcm9tKGEudmFsdWVzKCkpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9tZXJnZWRHcm91cElkcyA9IEJvYXJkUGFyYW1SdWxlVHJhaXQuZXh0cmFjdEdyb3VwSWRzKHRoaXMuX3RyYWl0RGF0YSk7XG4gICAgdmFyIGUgPSBCb2FyZFBhcmFtUnVsZVRyYWl0LmV4dHJhY3RKc29uRGF0YSh0aGlzLl90cmFpdERhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLl90cmFpdERhdGEuY29uZmxpY3RQYXJhbXM7XG4gICAgdmFyIGEgPSBCb2FyZFBhcmFtUnVsZUVuZ2luZS5nZXRJbnN0YW5jZSgpO1xuICAgIGEubG9hZENvbmZpZygpO1xuICAgIGUgJiYgYS5tZXJnZUpzb25EYXRhKGUpO1xuICAgIHRoaXMucHJlbG9hZEFsbFJlbW90ZUJhbmtzKGEpO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgQm9hcmRQYXJhbVJ1bGVFbmdpbmUuZ2V0SW5zdGFuY2UoKS5hZGRQbGF5ZXJHcm91cElkcyh0aGlzLl9tZXJnZWRHcm91cElkcyk7XG4gICAgZSgpO1xuICB9XG4gIGJ1aWxkQ29udGV4dCh0KSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHIgPSB0ID8gdC5nZXRMZXZlbElkKCkgOiAwLFxuICAgICAgYSA9IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxUeXBlKHIpO1xuICAgIHJldHVybiB7XG4gICAgICBsZXZlbElkOiByLFxuICAgICAgdG90YWxHYW1lczogZS5sb2NhbERhdGEudG90YWxHYW1lcyB8fCAwLFxuICAgICAgYWN0aXZlRGF5czogZS5sb2NhbERhdGEuYWN0aXZlRGF5cyB8fCAwLFxuICAgICAgc3RhZ2VUeXBlOiBhLFxuICAgICAgcGxheWVyR3JvdXBJZHM6IEJvYXJkUGFyYW1SdWxlRW5naW5lLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyR3JvdXBJZHMoKVxuICAgIH07XG4gIH1cbiAgb25UMkV4dE1ncl9nZXRDb250KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMsXG4gICAgICBhID0gQm9hcmRQYXJhbVJ1bGVFbmdpbmUuZ2V0SW5zdGFuY2UoKTtcbiAgICBhLmludmFsaWRhdGVDYWNoZSgpO1xuICAgIHZhciBuID0gdC5hcmdzWzBdLFxuICAgICAgbyA9IHRoaXMuYnVpbGRDb250ZXh0KG4pLFxuICAgICAgaSA9IGEuZ2V0QWN0aXZlUnVsZXMobyk7XG4gICAgaWYgKGkgJiYgMCAhPT0gaS5sZW5ndGgpIHtcbiAgICAgIHZhciBsID0gdGhpcy5wcmVsb2FkUmVtb3RlQmFua3MoaSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByLmV4ZWN1dGVDb25maWd1cmVkUGlwZWxpbmUobiwgaSk7XG4gICAgICB9KTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBwcmVsb2FkQWxsUmVtb3RlQmFua3ModCkge1xuICAgIHZhciBlLFxuICAgICAgYSxcbiAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS50aWxlMk5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpIHx8IDAsXG4gICAgICBvID0gdC5nZXRBbGxSdWxlcygpLFxuICAgICAgbCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMobyksIGMgPSB1Lm5leHQoKTsgIWMuZG9uZTsgYyA9IHUubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gYy52YWx1ZSxcbiAgICAgICAgICB5ID0gcy5iYW5rUGFyYW07XG4gICAgICAgIGlmICh5ICYmICF5LmluY2x1ZGVzKFwiLFwiKSAmJiB0aGlzLnJ1bGVNYXlBcHBseUFmdGVyKHMsIG4pKSB7XG4gICAgICAgICAgdmFyIGQgPSB5LnRyaW0oKTtcbiAgICAgICAgICBkICYmICFsLmluY2x1ZGVzKGQpICYmIGwucHVzaChkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKGEgPSB1LnJldHVybikgJiYgYS5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgwICE9PSBsLmxlbmd0aCkge1xuICAgICAgdmFyIHYgPSBsLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5lbmRzV2l0aChcIi5qc29uXCIpID8gdCA6IHQgKyBcIi5qc29uXCI7XG4gICAgICB9KTtcbiAgICAgIHJlc01hbmFnZXIubG9hZFJlbW90ZUxldmVsVGlsZXModiwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIGlmICghdCkgZm9yICh2YXIgbiA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2VdLCBvID0gMDsgbyA8IGwubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICB2YXIgaSA9IG5bb107XG4gICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIHZhciB1ID0gQXJyYXkuaXNBcnJheShpKSA/IGkgOiBudWxsICE9PSAoYSA9IGkuanNvbikgJiYgdm9pZCAwICE9PSBhID8gYSA6IG51bGw7XG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KHUpICYmIHUubGVuZ3RoID4gMCAmJiBCb2FyZFBhcmFtUnVsZVRyYWl0Ll9yZW1vdGVCYW5rQ2FjaGUuc2V0KGxbb10sIHUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJ1bGVNYXlBcHBseUFmdGVyKHQsIGUpIHtcbiAgICB2YXIgciwgYTtcbiAgICBpZiAoIXQuY29uZGl0aW9uRXhwciB8fCAhdC5jb25kaXRpb25QYXJhbXMpIHJldHVybiB0cnVlO1xuICAgIHZhciBuID0gdC5jb25kaXRpb25FeHByLnNwbGl0KC9bJnxdLyksXG4gICAgICBvID0gdC5jb25kaXRpb25QYXJhbXMuc3BsaXQoXCJ8XCIpLFxuICAgICAgbCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhuKSwgYyA9IHUubmV4dCgpOyAhYy5kb25lOyBjID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBjLnZhbHVlLFxuICAgICAgICAgIHAgPSBwYXJzZUludChzKSxcbiAgICAgICAgICBmID0gb1tsXSB8fCBcIlwiO1xuICAgICAgICBsKys7XG4gICAgICAgIGlmICgxID09PSBwKSB7XG4gICAgICAgICAgdmFyIHkgPSBmLnNwbGl0KFwiLFwiKSxcbiAgICAgICAgICAgIGQgPSBOdW1iZXIoeVsxXSk7XG4gICAgICAgICAgaWYgKC0xICE9PSBkICYmIGQgPCBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChhID0gdS5yZXR1cm4pICYmIGEuY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBwcmVsb2FkUmVtb3RlQmFua3ModCkge1xuICAgIHZhciBlLFxuICAgICAgYSxcbiAgICAgIG4gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHQpLCBsID0gby5uZXh0KCk7ICFsLmRvbmU7IGwgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGwudmFsdWUucnVsZS5iYW5rUGFyYW07XG4gICAgICAgIGlmICh1ICYmICF1LmluY2x1ZGVzKFwiLFwiKSkge1xuICAgICAgICAgIHZhciBjID0gdS50cmltKCk7XG4gICAgICAgICAgYyAmJiAhQm9hcmRQYXJhbVJ1bGVUcmFpdC5fcmVtb3RlQmFua0NhY2hlLmhhcyhjKSAmJiBuLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChhID0gby5yZXR1cm4pICYmIGEuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgcyA9IG4ubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5lbmRzV2l0aChcIi5qc29uXCIpID8gdCA6IHQgKyBcIi5qc29uXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXNNYW5hZ2VyLmxvYWRSZW1vdGVMZXZlbFRpbGVzKHMsIGZ1bmN0aW9uIChlLCBhKSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICBpZiAoZSkgdCgpO2Vsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXSwgbCA9IDA7IGwgPCBuLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICB2YXIgdSA9IGlbbF07XG4gICAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgICB2YXIgYyA9IEFycmF5LmlzQXJyYXkodSkgPyB1IDogbnVsbCAhPT0gKG8gPSB1Lmpzb24pICYmIHZvaWQgMCAhPT0gbyA/IG8gOiBudWxsO1xuICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGMpICYmIGMubGVuZ3RoID4gMCAmJiBCb2FyZFBhcmFtUnVsZVRyYWl0Ll9yZW1vdGVCYW5rQ2FjaGUuc2V0KG5bbF0sIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFwcGx5QmFua1BhcmFtKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBhID0gdC5ydWxlLmJhbmtQYXJhbTtcbiAgICBpZiAoYSkge1xuICAgICAgaWYgKGEuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgICAgIHZhciBuID0gYS5zcGxpdChcIixcIik7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCYW5rQnVuZGxlID0gKG51bGwgPT09IChlID0gblswXSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50cmltKCkpIHx8IG51bGw7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCYW5rRmlsZSA9IChudWxsID09PSAociA9IG5bMV0pIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudHJpbSgpKSB8fCBudWxsO1xuICAgICAgICB0aGlzLl9pc1JlbW90ZUJhbmsgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCYW5rQnVuZGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY3VycmVudEJhbmtGaWxlID0gYS50cmltKCk7XG4gICAgICAgIHRoaXMuX2lzUmVtb3RlQmFuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRCYW5rQnVuZGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX2N1cnJlbnRCYW5rRmlsZSA9IG51bGw7XG4gICAgICB0aGlzLl9pc1JlbW90ZUJhbmsgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZXhlY3V0ZUNvbmZpZ3VyZWRQaXBlbGluZSh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBhLFxuICAgICAgbiA9IHRoaXMsXG4gICAgICBvID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpLFxuICAgICAgbCA9IGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICBvID0gby50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHJldHVybiByO1xuICAgICAgICAgIG4uYXBwbHlCYW5rUGFyYW0oZSk7XG4gICAgICAgICAgbi5fY3VycmVudFBhcmVudFR5cGUgPSBlLnBhcmVudFR5cGU7XG4gICAgICAgICAgcmV0dXJuIChuLl9pc1JlbW90ZUJhbmsgPyBuLnRyeVJlbW90ZUV4dHJhY3Rpb24obi5fY3VycmVudEJhbmtGaWxlKSA6IG4udHJ5U3RyYXRlZ3lFeHRyYWN0aW9uKHQsIGUucGFyZW50VHlwZSkpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ICYmIHQuY29udGVudCA/IHQgOiBudWxsO1xuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhlKSwgYyA9IHUubmV4dCgpOyAhYy5kb25lOyBjID0gdS5uZXh0KCkpIGwoYy52YWx1ZSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoYSA9IHUucmV0dXJuKSAmJiBhLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8udGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgbi5fY3VycmVudEJhbmtCdW5kbGUgPSBudWxsO1xuICAgICAgbi5fY3VycmVudEJhbmtGaWxlID0gbnVsbDtcbiAgICAgIG4uX2N1cnJlbnRQYXJlbnRUeXBlID0gbnVsbDtcbiAgICAgIG4uX2lzUmVtb3RlQmFuayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGUgfHwgVGlsZTJFeHRyYWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoYWluLmV4ZWN1dGUoe1xuICAgICAgICBnYW1lRGF0YTogdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgdHJ5U3RyYXRlZ3lFeHRyYWN0aW9uKHQsIGUpIHtcbiAgICB2YXIgciA9IFRpbGUyRXh0cmFjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGFpbi5nZXRTdHJhdGVnaWVzKCkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQubmFtZSA9PT0gZTtcbiAgICB9KTtcbiAgICBpZiAoIXIpIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgdmFyIGEgPSB7XG4gICAgICBnYW1lRGF0YTogdFxuICAgIH07XG4gICAgcmV0dXJuIHIuZXh0cmFjdChhKTtcbiAgfVxuICB0cnlSZW1vdGVFeHRyYWN0aW9uKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKCF0KSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciBhID0gQm9hcmRQYXJhbVJ1bGVUcmFpdC5fcmVtb3RlQmFua0NhY2hlLmdldCh0KTtcbiAgICBpZiAoYSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmV4dHJhY3RGcm9tUmVtb3RlUG9vbChhLCB0KSk7XG4gICAgdmFyIG4gPSB0LmVuZHNXaXRoKFwiLmpzb25cIikgPyB0IDogdCArIFwiLmpzb25cIjtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJlc01hbmFnZXIubG9hZFJlbW90ZUxldmVsVGlsZXMobiwgZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICghbiAmJiBvKSB7XG4gICAgICAgICAgdmFyIGwgPSBBcnJheS5pc0FycmF5KG8pID8gbyA6IG51bGwgIT09IChpID0gby5qc29uKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogbnVsbDtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsKSAmJiAwICE9PSBsLmxlbmd0aCkge1xuICAgICAgICAgICAgQm9hcmRQYXJhbVJ1bGVUcmFpdC5fcmVtb3RlQmFua0NhY2hlLnNldCh0LCBsKTtcbiAgICAgICAgICAgIGEoZS5leHRyYWN0RnJvbVJlbW90ZVBvb2wobCwgdCkpO1xuICAgICAgICAgIH0gZWxzZSBhKG51bGwpO1xuICAgICAgICB9IGVsc2UgYShudWxsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGV4dHJhY3RGcm9tUmVtb3RlUG9vbCh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICBuID0gQm9hcmRQYXJhbVJ1bGVUcmFpdC5fcmVtb3RlUHJvZ3Jlc3NNYXAsXG4gICAgICBvID0gKG5bZV0gfHwgMCkgJSB0Lmxlbmd0aCxcbiAgICAgIGkgPSB0W29dO1xuICAgIGlmICghaSB8fCAhaS5jb250ZW50KSByZXR1cm4gbnVsbDtcbiAgICBuW2VdID0gKG8gKyAxKSAlIHQubGVuZ3RoO1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBpLmNvbnRlbnQsXG4gICAgICBpbmRleDogU3RyaW5nKG51bGwgIT09IChhID0gaS5pbmRleCkgJiYgdm9pZCAwICE9PSBhID8gYSA6IG8pLFxuICAgICAgc2xvdmVyOiBpLnNvbHZlcixcbiAgICAgIHRpbGVOdW06IGkudGlsZV9udW0sXG4gICAgICBsaWJOYW1lOiBlXG4gICAgfTtcbiAgfVxuICBvblQyU3RhU3RyX2RhdGFQYXRoKHQsIGUpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVtb3RlQmFuayAmJiB0aGlzLl9jdXJyZW50QmFua0ZpbGUpIHtcbiAgICAgIHZhciByID0gdGhpcy5fY3VycmVudEJhbmtCdW5kbGUgfHwgXCJtYWluUmVzXCIsXG4gICAgICAgIGEgPSB0aGlzLl9jdXJyZW50QmFua0ZpbGU7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IFtcInRpbGUyTGV2ZWxEYXRhL3N0YXRpYy9cIiArIGEsIHJdXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uVDJTdGFMdlRfY29uZmlnKHQsIGUpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVtb3RlQmFuayAmJiB0aGlzLl9jdXJyZW50QmFua0J1bmRsZSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgYnVuZGxlOiB0aGlzLl9jdXJyZW50QmFua0J1bmRsZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblQyU3RhTHZUX2dldEZpbGUodCwgZSkge1xuICAgIGlmICghdGhpcy5faXNSZW1vdGVCYW5rICYmIHRoaXMuX2N1cnJlbnRCYW5rRmlsZSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jdXJyZW50QmFua0ZpbGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVDJIYXJTdHJfZXh0cmFjdCh0LCBlKSB7XG4gICAgIXRoaXMuX2lzUmVtb3RlQmFuayAmJiB0aGlzLl9jdXJyZW50QmFua0ZpbGUsIGUoKTtcbiAgfVxuICBvblQyRHluU3RyX2lzRHluKHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNSZW1vdGVCYW5rKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50UGFyZW50VHlwZSA9PT0gRVRpbGUyRXh0cmFjdFR5cGUuRHluYW1pYykge1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uVDJEeW5TdHJfZXh0cmFjdCh0LCBlKSB7XG4gICAgIXRoaXMuX2lzUmVtb3RlQmFuayAmJiB0aGlzLl9jdXJyZW50QmFua0ZpbGUsIGUoKTtcbiAgfVxuICBvblQyRml4U3RyX2lzRml4ZWQodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc1JlbW90ZUJhbmspIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYXJlbnRUeXBlID09PSBFVGlsZTJFeHRyYWN0VHlwZS5GaXhlZCkge1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uVDJGaXhTdHJfZ2V0Rml4ZWQodCwgZSkge1xuICAgICF0aGlzLl9pc1JlbW90ZUJhbmsgJiYgdGhpcy5fY3VycmVudEJhbmtGaWxlLCBlKCk7XG4gIH1cbiAgb25UMkZ4Um5kX2NvbmZpZyh0LCBlKSB7XG4gICAgaWYgKCF0aGlzLl9pc1JlbW90ZUJhbmsgJiYgdGhpcy5fY3VycmVudEJhbmtGaWxlKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX2N1cnJlbnRCYW5rQnVuZGxlIHx8IFwibWFpblJlc1wiLFxuICAgICAgICBhID0gdGhpcy5fY3VycmVudEJhbmtGaWxlO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgc3RyYXRlZ3k6IGEsXG4gICAgICAgICAgbWluTGV2ZWw6IDAsXG4gICAgICAgICAgbWF4TGV2ZWw6IDAsXG4gICAgICAgICAgcGF0aDogXCJ0aWxlMkxldmVsRGF0YS9maXhMZXZlbFN0cmF0ZWd5L1wiICsgYSArIFwiL1wiLFxuICAgICAgICAgIGJ1bmRsZTogclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGluaXRFdmVudCgpIHtcbiAgICB2YXIgdCA9IFt7XG4gICAgICBldmVudDogXCJMb2dpbk1fZW50ZXJHYW1lXCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJUMkV4dE1ncl9nZXRDb250XCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJUMlN0YVN0cl9kYXRhUGF0aFwiLFxuICAgICAgdHlwZTogMCxcbiAgICAgIHByaW9yaXR5OiA5OTk5XG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiVDJTdGFMdlRfY29uZmlnXCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJUMlN0YUx2VF9nZXRGaWxlXCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJUMkhhclN0cl9leHRyYWN0XCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJUMkR5blN0cl9pc0R5blwiLFxuICAgICAgdHlwZTogMCxcbiAgICAgIHByaW9yaXR5OiA5OTk5XG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiVDJEeW5TdHJfZXh0cmFjdFwiLFxuICAgICAgdHlwZTogMCxcbiAgICAgIHByaW9yaXR5OiA5OTk5XG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiVDJGaXhTdHJfaXNGaXhlZFwiLFxuICAgICAgdHlwZTogMCxcbiAgICAgIHByaW9yaXR5OiA5OTk5XG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiVDJGaXhTdHJfZ2V0Rml4ZWRcIixcbiAgICAgIHR5cGU6IDAsXG4gICAgICBwcmlvcml0eTogOTk5OVxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIlQyRnhSbmRfY29uZmlnXCIsXG4gICAgICB0eXBlOiAwLFxuICAgICAgcHJpb3JpdHk6IDk5OTlcbiAgICB9XTtcbiAgICB0aGlzLl90cmFpdERhdGEuZXZlbnRzID0gdDtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodCk7XG4gIH1cbn0iXX0=