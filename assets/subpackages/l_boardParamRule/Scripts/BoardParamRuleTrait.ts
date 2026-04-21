import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import BoardParamRuleEngine from '../../../Scripts/BoardParamRuleEngine';
import { ETile2ExtractType } from '../../../Scripts/IRuleTypes';
import Tile2ExtractManager from '../../../Scripts/Tile2ExtractManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { resManager } from '../../../Scripts/framework/manager/ResManager';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BoardParamRuleTrait")
export default class BoardParamRuleTrait extends Trait {
  _currentBankBundle = null;
  _currentBankFile = null;
  _currentParentType = null;
  _isRemoteBank = false;
  _mergedGroupIds = [];
  static traitKey = "BoardParamRule";
  static _remoteBankCache = new Map();
  static _remoteProgressMap = {};
  static extractGroupIds(t) {
    var e, r, a, n;
    if (!t) return [];
    var o = [],
      l = t.conflictParams,
      u = l && l.groupId ? l.groupId : [t.groupId];
    try {
      for (var c = __values(u), s = c.next(); !s.done; s = c.next()) {
        var p = s.value;
        if (null != p) {
          var f = Array.isArray(p) ? p : [p];
          try {
            for (var y = (a = void 0, __values(f)), d = y.next(); !d.done; d = y.next()) {
              var v = d.value,
                _ = Number(v);
              _ && !o.includes(_) && o.push(_);
            }
          } catch (t) {
            a = {
              error: t
            };
          } finally {
            try {
              d && !d.done && (n = y.return) && n.call(y);
            } finally {
              if (a) throw a.error;
            }
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (r = c.return) && r.call(c);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  static extractJsonData(t) {
    var e, r;
    if (!t) return null;
    var a = new Map(),
      n = function n(t) {
        var e, r;
        if (Array.isArray(t)) try {
          for (var n = __values(t), o = n.next(); !o.done; o = n.next()) {
            var l = o.value;
            Array.isArray(l) && a.set(l[0], l);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      },
      o = t.conflictParams;
    if (null == o ? void 0 : o.jsonData) {
      var l = Array.isArray(o.jsonData) ? o.jsonData : [o.jsonData];
      try {
        for (var u = __values(l), c = u.next(); !c.done; c = u.next()) n(c.value);
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    n(t.jsonData);
    return 0 === a.size ? null : Array.from(a.values());
  }
  onLoad() {
    super.onLoad.call(this);
    this._mergedGroupIds = BoardParamRuleTrait.extractGroupIds(this._traitData);
    var e = BoardParamRuleTrait.extractJsonData(this._traitData);
    delete this._traitData.conflictParams;
    var a = BoardParamRuleEngine.getInstance();
    a.loadConfig();
    e && a.mergeJsonData(e);
    this.preloadAllRemoteBanks(a);
  }
  onLoginM_enterGame(t, e) {
    BoardParamRuleEngine.getInstance().addPlayerGroupIds(this._mergedGroupIds);
    e();
  }
  buildContext(t) {
    var e = UserModel.getInstance(),
      r = t ? t.getLevelId() : 0,
      a = ExtractTool.getInstance().getLevelType(r);
    return {
      levelId: r,
      totalGames: e.localData.totalGames || 0,
      activeDays: e.localData.activeDays || 0,
      stageType: a,
      playerGroupIds: BoardParamRuleEngine.getInstance().getPlayerGroupIds()
    };
  }
  onT2ExtMgr_getCont(t, e) {
    var r = this,
      a = BoardParamRuleEngine.getInstance();
    a.invalidateCache();
    var n = t.args[0],
      o = this.buildContext(n),
      i = a.getActiveRules(o);
    if (i && 0 !== i.length) {
      var l = this.preloadRemoteBanks(i).then(function () {
        return r.executeConfiguredPipeline(n, i);
      });
      e({
        returnType: TraitCallbackReturnType.return,
        returnVal: l
      });
    } else e();
  }
  preloadAllRemoteBanks(t) {
    var e,
      a,
      n = UserModel.getInstance().tile2NormalData.getLevelId() || 0,
      o = t.getAllRules(),
      l = [];
    try {
      for (var u = __values(o), c = u.next(); !c.done; c = u.next()) {
        var s = c.value,
          y = s.bankParam;
        if (y && !y.includes(",") && this.ruleMayApplyAfter(s, n)) {
          var d = y.trim();
          d && !l.includes(d) && l.push(d);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (e) throw e.error;
      }
    }
    if (0 !== l.length) {
      var v = l.map(function (t) {
        return t.endsWith(".json") ? t : t + ".json";
      });
      resManager.loadRemoteLevelTiles(v, function (t, e) {
        var a;
        if (!t) for (var n = Array.isArray(e) ? e : [e], o = 0; o < l.length; o++) {
          var i = n[o];
          if (i) {
            var u = Array.isArray(i) ? i : null !== (a = i.json) && void 0 !== a ? a : null;
            Array.isArray(u) && u.length > 0 && BoardParamRuleTrait._remoteBankCache.set(l[o], u);
          }
        }
      });
    }
  }
  ruleMayApplyAfter(t, e) {
    var r, a;
    if (!t.conditionExpr || !t.conditionParams) return true;
    var n = t.conditionExpr.split(/[&|]/),
      o = t.conditionParams.split("|"),
      l = 0;
    try {
      for (var u = __values(n), c = u.next(); !c.done; c = u.next()) {
        var s = c.value,
          p = parseInt(s),
          f = o[l] || "";
        l++;
        if (1 === p) {
          var y = f.split(","),
            d = Number(y[1]);
          if (-1 !== d && d < e) return false;
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (r) throw r.error;
      }
    }
    return true;
  }
  preloadRemoteBanks(t) {
    var e,
      a,
      n = [];
    try {
      for (var o = __values(t), l = o.next(); !l.done; l = o.next()) {
        var u = l.value.rule.bankParam;
        if (u && !u.includes(",")) {
          var c = u.trim();
          c && !BoardParamRuleTrait._remoteBankCache.has(c) && n.push(c);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (a = o.return) && a.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    if (0 === n.length) return Promise.resolve();
    var s = n.map(function (t) {
      return t.endsWith(".json") ? t : t + ".json";
    });
    return new Promise(function (t) {
      resManager.loadRemoteLevelTiles(s, function (e, a) {
        var o;
        if (e) t();else {
          for (var i = Array.isArray(a) ? a : [a], l = 0; l < n.length; l++) {
            var u = i[l];
            if (u) {
              var c = Array.isArray(u) ? u : null !== (o = u.json) && void 0 !== o ? o : null;
              Array.isArray(c) && c.length > 0 && BoardParamRuleTrait._remoteBankCache.set(n[l], c);
            }
          }
          t();
        }
      });
    });
  }
  applyBankParam(t) {
    var e,
      r,
      a = t.rule.bankParam;
    if (a) {
      if (a.includes(",")) {
        var n = a.split(",");
        this._currentBankBundle = (null === (e = n[0]) || void 0 === e ? void 0 : e.trim()) || null;
        this._currentBankFile = (null === (r = n[1]) || void 0 === r ? void 0 : r.trim()) || null;
        this._isRemoteBank = false;
      } else {
        this._currentBankBundle = null;
        this._currentBankFile = a.trim();
        this._isRemoteBank = true;
      }
    } else {
      this._currentBankBundle = null;
      this._currentBankFile = null;
      this._isRemoteBank = false;
    }
  }
  executeConfiguredPipeline(t, e) {
    var r,
      a,
      n = this,
      o = Promise.resolve(null),
      l = function l(e) {
        o = o.then(function (r) {
          if (r) return r;
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
      for (var u = __values(e), c = u.next(); !c.done; c = u.next()) l(c.value);
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (r) throw r.error;
      }
    }
    return o.then(function (e) {
      n._currentBankBundle = null;
      n._currentBankFile = null;
      n._currentParentType = null;
      n._isRemoteBank = false;
      return e || Tile2ExtractManager.getInstance().chain.execute({
        gameData: t
      });
    });
  }
  tryStrategyExtraction(t, e) {
    var r = Tile2ExtractManager.getInstance().chain.getStrategies().find(function (t) {
      return t.name === e;
    });
    if (!r) return Promise.resolve(null);
    var a = {
      gameData: t
    };
    return r.extract(a);
  }
  tryRemoteExtraction(t) {
    var e = this;
    if (!t) return Promise.resolve(null);
    var a = BoardParamRuleTrait._remoteBankCache.get(t);
    if (a) return Promise.resolve(this.extractFromRemotePool(a, t));
    var n = t.endsWith(".json") ? t : t + ".json";
    return new Promise(function (a) {
      resManager.loadRemoteLevelTiles(n, function (n, o) {
        var i;
        if (!n && o) {
          var l = Array.isArray(o) ? o : null !== (i = o.json) && void 0 !== i ? i : null;
          if (Array.isArray(l) && 0 !== l.length) {
            BoardParamRuleTrait._remoteBankCache.set(t, l);
            a(e.extractFromRemotePool(l, t));
          } else a(null);
        } else a(null);
      });
    });
  }
  extractFromRemotePool(t, e) {
    var a,
      n = BoardParamRuleTrait._remoteProgressMap,
      o = (n[e] || 0) % t.length,
      i = t[o];
    if (!i || !i.content) return null;
    n[e] = (o + 1) % t.length;
    return {
      content: i.content,
      index: String(null !== (a = i.index) && void 0 !== a ? a : o),
      slover: i.solver,
      tileNum: i.tile_num,
      libName: e
    };
  }
  onT2StaStr_dataPath(t, e) {
    if (!this._isRemoteBank && this._currentBankFile) {
      var r = this._currentBankBundle || "mainRes",
        a = this._currentBankFile;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: ["tile2LevelData/static/" + a, r]
      });
    } else e();
  }
  onT2StaLvT_config(t, e) {
    if (!this._isRemoteBank && this._currentBankBundle) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          bundle: this._currentBankBundle
        }
      });
    } else {
      e();
    }
  }
  onT2StaLvT_getFile(t, e) {
    if (!this._isRemoteBank && this._currentBankFile) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._currentBankFile
      });
    } else {
      e();
    }
  }
  onT2HarStr_extract(t, e) {
    !this._isRemoteBank && this._currentBankFile, e();
  }
  onT2DynStr_isDyn(t, e) {
    if (this._isRemoteBank) {
      e();
    } else {
      if (this._currentParentType === ETile2ExtractType.Dynamic) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else {
        e();
      }
    }
  }
  onT2DynStr_extract(t, e) {
    !this._isRemoteBank && this._currentBankFile, e();
  }
  onT2FixStr_isFixed(t, e) {
    if (this._isRemoteBank) {
      e();
    } else {
      if (this._currentParentType === ETile2ExtractType.Fixed) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else {
        e();
      }
    }
  }
  onT2FixStr_getFixed(t, e) {
    !this._isRemoteBank && this._currentBankFile, e();
  }
  onT2FxRnd_config(t, e) {
    if (!this._isRemoteBank && this._currentBankFile) {
      var r = this._currentBankBundle || "mainRes",
        a = this._currentBankFile;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          strategy: a,
          minLevel: 0,
          maxLevel: 0,
          path: "tile2LevelData/fixLevelStrategy/" + a + "/",
          bundle: r
        }
      });
    } else e();
  }
  initEvent() {
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
  }
}