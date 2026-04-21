
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f6dXJamZKrLq6ryDo46tD', 'AddDuoxiaoOutTimeTrait');
// subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Config_1 = require("../../../Scripts/Config");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var AddDuoxiaoOutTimeBehavior_1 = require("./AddDuoxiaoOutTimeBehavior");
var AddDuoxiaoOutTimeEffect_1 = require("./AddDuoxiaoOutTimeEffect");
var AddDuoxiaoOutTimeTrait = /** @class */ (function (_super) {
    __extends(AddDuoxiaoOutTimeTrait, _super);
    function AddDuoxiaoOutTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastUpdateTimeSnapshot = 0;
        _this._pendingInitTileId = "";
        return _this;
    }
    AddDuoxiaoOutTimeTrait.prototype.onLoad = function () {
        var t, i, o, a, n, r, s, l, c;
        _super.prototype.onLoad.call(this);
        this._config = {
            offlineHours: null !== (i = null === (t = this._traitData) || void 0 === t ? void 0 : t.offlineHours) && void 0 !== i ? i : 24,
            duoxiaoCount: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.duoxiaoCount) && void 0 !== a ? a : 4,
            checkCount: null !== (r = null === (n = this._traitData) || void 0 === n ? void 0 : n.checkCount) && void 0 !== r ? r : 2,
            gameTypes: null !== (l = null === (s = this._traitData) || void 0 === s ? void 0 : s.gameTypes) && void 0 !== l ? l : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge]
        };
        this.localData.addedTileIds || (this.localData.addedTileIds = "");
        BehaviorFactory_1.BehaviorFactory.registerBehavior(AddDuoxiaoOutTimeEffect_1.ADD_DUOXIAO_OUT_TIME_BEHAVIOR, AddDuoxiaoOutTimeBehavior_1.AddDuoxiaoOutTimeBehavior);
        var p = UserModel_1.default.getInstance().normalData;
        this._lastUpdateTimeSnapshot = (null === (c = p.localData) || void 0 === c ? void 0 : c.lastUpdateTime) || 0;
    };
    AddDuoxiaoOutTimeTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this._onAppHide.bind(this);
        _e[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this._onAppShow.bind(this);
        return _e;
    };
    AddDuoxiaoOutTimeTrait.prototype._onAppHide = function () {
        this._lastUpdateTimeSnapshot = Date.now();
    };
    AddDuoxiaoOutTimeTrait.prototype._onAppShow = function () {
        if (0 !== this._lastUpdateTimeSnapshot && !this._isGuideActive()) {
            if ((Date.now() - this._lastUpdateTimeSnapshot) / 3600000 < this._config.offlineHours)
                this._lastUpdateTimeSnapshot = Date.now();
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.GameActive
                });
                this._lastUpdateTimeSnapshot = Date.now();
            }
        }
    };
    AddDuoxiaoOutTimeTrait.prototype.isGameTypeEnabled = function (e) {
        var t = this._config.gameTypes;
        return !t || 0 === t.length || t.includes(e);
    };
    AddDuoxiaoOutTimeTrait.prototype._isGuideActive = function () {
        var e = UserModel_1.default.getInstance().getMainGameData(), t = 1;
        e && (t = e.getLevelId());
        return !UserModel_1.default.getInstance().isGuideFinished() || 1 === t;
    };
    AddDuoxiaoOutTimeTrait.prototype.isOfflineLongEnough = function () {
        return 0 !== this._lastUpdateTimeSnapshot && (Date.now() - this._lastUpdateTimeSnapshot) / 3600000 >= this._config.offlineHours;
    };
    AddDuoxiaoOutTimeTrait.prototype.hasBoardBlockingCondition = function (e) {
        var t, i, o = e.getTileMapObject(), a = 0;
        try {
            for (var n = __values(o.aliveTiles()), s = n.next(); !s.done; s = n.next()) {
                var u = s.value;
                if (u.type === TileTypeEnum_1.ETileType.DuoxiaoCard && ++a >= this._config.checkCount)
                    return true;
                if (u.type === TileTypeEnum_1.ETileType.DaxiaoCard)
                    return true;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (i = n.return) && i.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    AddDuoxiaoOutTimeTrait.prototype.convertOneTileToDuoxiao = function (e) {
        var t = e.getTileMapObject(), i = t.aliveTiles().filter(function (e) {
            return e.type === TileTypeEnum_1.ETileType.Normal;
        });
        if (0 === i.length)
            return null;
        var o = i[Math.floor(Math.random() * i.length)];
        t.setDuoxiaoCount(o.id, this._config.duoxiaoCount);
        t.setTileType(o.id, TileTypeEnum_1.ETileType.DuoxiaoCard);
        var a = this.localData.addedTileIds ? this.localData.addedTileIds.split(",").filter(function (e) {
            return e;
        }) : [];
        a.push(o.id);
        this.localData.addedTileIds = a.join(",");
        this.addOurEntryToGameData(e, o.id, this._config.duoxiaoCount);
        return o.id;
    };
    AddDuoxiaoOutTimeTrait.prototype.addOurEntryToGameData = function (e, t, i) {
        var o = e.getGameData(), a = o.getTileId2Type();
        try {
            var n = a ? JSON.parse(a) : {};
            n[t] = TileTypeEnum_1.ETileType.DuoxiaoCard;
            o.setTileId2Type(JSON.stringify(n));
        }
        catch (e) { }
        var r = o.getTileTypesExtra();
        try {
            var s = r ? JSON.parse(r) : {};
            s[t] = {
                duoxiaoCount: i
            };
            o.setTileTypesExtra(JSON.stringify(s));
        }
        catch (e) { }
    };
    AddDuoxiaoOutTimeTrait.prototype.removeOurEntriesFromGameData = function (e) {
        var t, i, o, a, n = this.localData.addedTileIds ? this.localData.addedTileIds.split(",").filter(function (e) {
            return e;
        }) : [];
        if (0 !== n.length) {
            var s = e.getTileId2Type();
            if (s)
                try {
                    var l = JSON.parse(s), u = false;
                    try {
                        for (var d = __values(n), c = d.next(); !c.done; c = d.next())
                            if ((T = c.value) in l) {
                                delete l[T];
                                u = true;
                            }
                    }
                    catch (e) {
                        t = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            c && !c.done && (i = d.return) && i.call(d);
                        }
                        finally {
                            if (t)
                                throw t.error;
                        }
                    }
                    u && e.setTileId2Type(JSON.stringify(l));
                }
                catch (e) { }
            var p = e.getTileTypesExtra();
            if (p)
                try {
                    var f = JSON.parse(p);
                    u = false;
                    try {
                        for (var h = __values(n), v = h.next(); !v.done; v = h.next()) {
                            var T;
                            if ((T = v.value) in f) {
                                delete f[T];
                                u = true;
                            }
                        }
                    }
                    catch (e) {
                        o = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            v && !v.done && (a = h.return) && a.call(h);
                        }
                        finally {
                            if (o)
                                throw o.error;
                        }
                    }
                    u && e.setTileTypesExtra(JSON.stringify(f));
                }
                catch (e) { }
            this.localData.addedTileIds = "";
        }
    };
    AddDuoxiaoOutTimeTrait.prototype.onTileTyModiy_resetMTypes = function (e, t) {
        var i = e.ins._context || e.ins.context;
        if (i) {
            if (i.getIsRestart()) {
                if (this.isGameTypeEnabled(i.gameType)) {
                    this.removeOurEntriesFromGameData(i.getGameData());
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    AddDuoxiaoOutTimeTrait.prototype.onIptGameAct_doGTiles = function (e, t) {
        var i = e.ins, o = null == i ? void 0 : i.gameContext;
        if (o) {
            if (this._isGuideActive())
                t();
            else if (this.isGameTypeEnabled(o.gameType)) {
                if (this.hasBoardBlockingCondition(o))
                    t();
                else {
                    var a = this.convertOneTileToDuoxiao(o);
                    a && i.pushEffect(new AddDuoxiaoOutTimeEffect_1.AddDuoxiaoOutTimeEffect({
                        tileId: a
                    }), BehaviorsEnum_1.EInsertType.Parallel);
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    AddDuoxiaoOutTimeTrait.prototype.onIptInitView_pushEff = function (e, t) {
        var i = e.ins;
        if (null == i ? void 0 : i.gameContext) {
            var o = i.gameContext, a = o.gameType;
            if (this.isGameTypeEnabled(a)) {
                if (this._isGuideActive())
                    t();
                else if (o.getIsRestart())
                    t();
                else {
                    o.getIsNewGame() && (this.localData.addedTileIds = "");
                    if (this.isOfflineLongEnough()) {
                        if (this.hasBoardBlockingCondition(o)) {
                            this._lastUpdateTimeSnapshot = Date.now();
                            t();
                        }
                        else {
                            var n = this.convertOneTileToDuoxiao(o);
                            n && (this._pendingInitTileId = n);
                            this._lastUpdateTimeSnapshot = Date.now();
                            t();
                        }
                    }
                    else {
                        this._lastUpdateTimeSnapshot = Date.now();
                        t();
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    AddDuoxiaoOutTimeTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var i, o, a;
        t();
        if (this._pendingInitTileId) {
            var n = (null === (i = e.ins) || void 0 === i ? void 0 : i._context) || (null === (o = e.ins) || void 0 === o ? void 0 : o.context);
            if (n) {
                var r = null === (a = n.getTileNodeMap) || void 0 === a ? void 0 : a.call(n);
                if (r) {
                    var s = r.get(this._pendingInitTileId), l = null == s ? void 0 : s.tileNode;
                    if (l && cc.isValid(l)) {
                        var u = l.getChildByName("DuoxiaoCardFlagNode");
                        u && (u.active = false);
                    }
                }
            }
        }
    };
    AddDuoxiaoOutTimeTrait.prototype.onIptEnterAniFin_excute = function (e, t) {
        if (this._pendingInitTileId) {
            e.ins.pushEffect(new AddDuoxiaoOutTimeEffect_1.AddDuoxiaoOutTimeEffect({
                tileId: this._pendingInitTileId
            }), BehaviorsEnum_1.EInsertType.Serial);
            this._pendingInitTileId = "";
            t();
        }
        else
            t();
    };
    AddDuoxiaoOutTimeTrait.traitKey = "AddDuoxiaoOutTime";
    AddDuoxiaoOutTimeTrait = __decorate([
        mj.trait,
        mj.class("AddDuoxiaoOutTimeTrait")
    ], AddDuoxiaoOutTimeTrait);
    return AddDuoxiaoOutTimeTrait;
}(Trait_1.default));
exports.default = AddDuoxiaoOutTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FkZER1b3hpYW9PdXRUaW1lL1NjcmlwdHMvQWRkRHVveGlhb091dFRpbWVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELGlGQUE2RTtBQUM3RSx3RkFBb0Y7QUFDcEYsc0VBQWlFO0FBQ2pFLGtEQUF5RjtBQUN6RixvRkFBbUY7QUFDbkYsbUZBQW1GO0FBQ25GLHlFQUFzRTtBQUN0RSxvRUFBbUU7QUFDbkUseUVBQXdFO0FBQ3hFLHFFQUFtRztBQUduRztJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQXNQQztRQXJQQyw2QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDNUIsd0JBQWtCLEdBQUcsRUFBRSxDQUFDOztJQW9QMUIsQ0FBQztJQWxQQyx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixZQUFZLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlILFlBQVksRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFB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QUMsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNELHdEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGlEQUF1QixDQUFDO2dCQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjthQUNoQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQzdCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBbFBNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFIbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQXNQMUM7SUFBRCw2QkFBQztDQXRQRCxBQXNQQyxDQXRQbUQsZUFBSyxHQXNQeEQ7a0JBdFBvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX0VWRU5UX0hJREUsIEVWVF9NU0dfS0VZX0VWRU5UX1NIT1cgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCB7IEFkZER1b3hpYW9PdXRUaW1lQmVoYXZpb3IgfSBmcm9tICcuL0FkZER1b3hpYW9PdXRUaW1lQmVoYXZpb3InO1xuaW1wb3J0IHsgQUREX0RVT1hJQU9fT1VUX1RJTUVfQkVIQVZJT1IsIEFkZER1b3hpYW9PdXRUaW1lRWZmZWN0IH0gZnJvbSAnLi9BZGREdW94aWFvT3V0VGltZUVmZmVjdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFkZER1b3hpYW9PdXRUaW1lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZER1b3hpYW9PdXRUaW1lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9sYXN0VXBkYXRlVGltZVNuYXBzaG90ID0gMDtcbiAgX3BlbmRpbmdJbml0VGlsZUlkID0gXCJcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJBZGREdW94aWFvT3V0VGltZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIGksIG8sIGEsIG4sIHIsIHMsIGwsIGM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgb2ZmbGluZUhvdXJzOiBudWxsICE9PSAoaSA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm9mZmxpbmVIb3VycykgJiYgdm9pZCAwICE9PSBpID8gaSA6IDI0LFxuICAgICAgZHVveGlhb0NvdW50OiBudWxsICE9PSAoYSA9IG51bGwgPT09IChvID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmR1b3hpYW9Db3VudCkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDQsXG4gICAgICBjaGVja0NvdW50OiBudWxsICE9PSAociA9IG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNoZWNrQ291bnQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAyLFxuICAgICAgZ2FtZVR5cGVzOiBudWxsICE9PSAobCA9IG51bGwgPT09IChzID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmdhbWVUeXBlcykgJiYgdm9pZCAwICE9PSBsID8gbCA6IFtNakdhbWVUeXBlLk5vcm1hbCwgTWpHYW1lVHlwZS5UcmF2ZWwsIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2VdXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsRGF0YS5hZGRlZFRpbGVJZHMgfHwgKHRoaXMubG9jYWxEYXRhLmFkZGVkVGlsZUlkcyA9IFwiXCIpO1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEFERF9EVU9YSUFPX09VVF9USU1FX0JFSEFWSU9SLCBBZGREdW94aWFvT3V0VGltZUJlaGF2aW9yKTtcbiAgICB2YXIgcCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGE7XG4gICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWVTbmFwc2hvdCA9IChudWxsID09PSAoYyA9IHAubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLmxhc3RVcGRhdGVUaW1lKSB8fCAwO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9lID0ge307XG4gICAgX2VbRVZUX01TR19LRVlfRVZFTlRfSElERV0gPSB0aGlzLl9vbkFwcEhpZGUuYmluZCh0aGlzKTtcbiAgICBfZVtFVlRfTVNHX0tFWV9FVkVOVF9TSE9XXSA9IHRoaXMuX29uQXBwU2hvdy5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBfb25BcHBIaWRlKCkge1xuICAgIHRoaXMuX2xhc3RVcGRhdGVUaW1lU25hcHNob3QgPSBEYXRlLm5vdygpO1xuICB9XG4gIF9vbkFwcFNob3coKSB7XG4gICAgaWYgKDAgIT09IHRoaXMuX2xhc3RVcGRhdGVUaW1lU25hcHNob3QgJiYgIXRoaXMuX2lzR3VpZGVBY3RpdmUoKSkge1xuICAgICAgaWYgKChEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWVTbmFwc2hvdCkgLyAzNjAwMDAwIDwgdGhpcy5fY29uZmlnLm9mZmxpbmVIb3VycykgdGhpcy5fbGFzdFVwZGF0ZVRpbWVTbmFwc2hvdCA9IERhdGUubm93KCk7ZWxzZSB7XG4gICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5HYW1lQWN0aXZlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVGltZVNuYXBzaG90ID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaXNHYW1lVHlwZUVuYWJsZWQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fY29uZmlnLmdhbWVUeXBlcztcbiAgICByZXR1cm4gIXQgfHwgMCA9PT0gdC5sZW5ndGggfHwgdC5pbmNsdWRlcyhlKTtcbiAgfVxuICBfaXNHdWlkZUFjdGl2ZSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLFxuICAgICAgdCA9IDE7XG4gICAgZSAmJiAodCA9IGUuZ2V0TGV2ZWxJZCgpKTtcbiAgICByZXR1cm4gIVVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpIHx8IDEgPT09IHQ7XG4gIH1cbiAgaXNPZmZsaW5lTG9uZ0Vub3VnaCgpIHtcbiAgICByZXR1cm4gMCAhPT0gdGhpcy5fbGFzdFVwZGF0ZVRpbWVTbmFwc2hvdCAmJiAoRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RVcGRhdGVUaW1lU25hcHNob3QpIC8gMzYwMDAwMCA+PSB0aGlzLl9jb25maWcub2ZmbGluZUhvdXJzO1xuICB9XG4gIGhhc0JvYXJkQmxvY2tpbmdDb25kaXRpb24oZSkge1xuICAgIHZhciB0LFxuICAgICAgaSxcbiAgICAgIG8gPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGEgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoby5hbGl2ZVRpbGVzKCkpLCBzID0gbi5uZXh0KCk7ICFzLmRvbmU7IHMgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IHMudmFsdWU7XG4gICAgICAgIGlmICh1LnR5cGUgPT09IEVUaWxlVHlwZS5EdW94aWFvQ2FyZCAmJiArK2EgPj0gdGhpcy5fY29uZmlnLmNoZWNrQ291bnQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodS50eXBlID09PSBFVGlsZVR5cGUuRGF4aWFvQ2FyZCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAoaSA9IG4ucmV0dXJuKSAmJiBpLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnZlcnRPbmVUaWxlVG9EdW94aWFvKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgaSA9IHQuYWxpdmVUaWxlcygpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsO1xuICAgICAgfSk7XG4gICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IGlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpXTtcbiAgICB0LnNldER1b3hpYW9Db3VudChvLmlkLCB0aGlzLl9jb25maWcuZHVveGlhb0NvdW50KTtcbiAgICB0LnNldFRpbGVUeXBlKG8uaWQsIEVUaWxlVHlwZS5EdW94aWFvQ2FyZCk7XG4gICAgdmFyIGEgPSB0aGlzLmxvY2FsRGF0YS5hZGRlZFRpbGVJZHMgPyB0aGlzLmxvY2FsRGF0YS5hZGRlZFRpbGVJZHMuc3BsaXQoXCIsXCIpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSkgOiBbXTtcbiAgICBhLnB1c2goby5pZCk7XG4gICAgdGhpcy5sb2NhbERhdGEuYWRkZWRUaWxlSWRzID0gYS5qb2luKFwiLFwiKTtcbiAgICB0aGlzLmFkZE91ckVudHJ5VG9HYW1lRGF0YShlLCBvLmlkLCB0aGlzLl9jb25maWcuZHVveGlhb0NvdW50KTtcbiAgICByZXR1cm4gby5pZDtcbiAgfVxuICBhZGRPdXJFbnRyeVRvR2FtZURhdGEoZSwgdCwgaSkge1xuICAgIHZhciBvID0gZS5nZXRHYW1lRGF0YSgpLFxuICAgICAgYSA9IG8uZ2V0VGlsZUlkMlR5cGUoKTtcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSBhID8gSlNPTi5wYXJzZShhKSA6IHt9O1xuICAgICAgblt0XSA9IEVUaWxlVHlwZS5EdW94aWFvQ2FyZDtcbiAgICAgIG8uc2V0VGlsZUlkMlR5cGUoSlNPTi5zdHJpbmdpZnkobikpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdmFyIHIgPSBvLmdldFRpbGVUeXBlc0V4dHJhKCk7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzID0gciA/IEpTT04ucGFyc2UocikgOiB7fTtcbiAgICAgIHNbdF0gPSB7XG4gICAgICAgIGR1b3hpYW9Db3VudDogaVxuICAgICAgfTtcbiAgICAgIG8uc2V0VGlsZVR5cGVzRXh0cmEoSlNPTi5zdHJpbmdpZnkocykpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmVtb3ZlT3VyRW50cmllc0Zyb21HYW1lRGF0YShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIGEsXG4gICAgICBuID0gdGhpcy5sb2NhbERhdGEuYWRkZWRUaWxlSWRzID8gdGhpcy5sb2NhbERhdGEuYWRkZWRUaWxlSWRzLnNwbGl0KFwiLFwiKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9KSA6IFtdO1xuICAgIGlmICgwICE9PSBuLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSBlLmdldFRpbGVJZDJUeXBlKCk7XG4gICAgICBpZiAocykgdHJ5IHtcbiAgICAgICAgdmFyIGwgPSBKU09OLnBhcnNlKHMpLFxuICAgICAgICAgIHUgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMobiksIGMgPSBkLm5leHQoKTsgIWMuZG9uZTsgYyA9IGQubmV4dCgpKSBpZiAoKFQgPSBjLnZhbHVlKSBpbiBsKSB7XG4gICAgICAgICAgICBkZWxldGUgbFtUXTtcbiAgICAgICAgICAgIHUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoaSA9IGQucmV0dXJuKSAmJiBpLmNhbGwoZCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1ICYmIGUuc2V0VGlsZUlkMlR5cGUoSlNPTi5zdHJpbmdpZnkobCkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHZhciBwID0gZS5nZXRUaWxlVHlwZXNFeHRyYSgpO1xuICAgICAgaWYgKHApIHRyeSB7XG4gICAgICAgIHZhciBmID0gSlNPTi5wYXJzZShwKTtcbiAgICAgICAgdSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGggPSBfX3ZhbHVlcyhuKSwgdiA9IGgubmV4dCgpOyAhdi5kb25lOyB2ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgaWYgKChUID0gdi52YWx1ZSkgaW4gZikge1xuICAgICAgICAgICAgICBkZWxldGUgZltUXTtcbiAgICAgICAgICAgICAgdSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdiAmJiAhdi5kb25lICYmIChhID0gaC5yZXR1cm4pICYmIGEuY2FsbChoKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHUgJiYgZS5zZXRUaWxlVHlwZXNFeHRyYShKU09OLnN0cmluZ2lmeShmKSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdGhpcy5sb2NhbERhdGEuYWRkZWRUaWxlSWRzID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgb25UaWxlVHlNb2RpeV9yZXNldE1UeXBlcyhlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucy5fY29udGV4dCB8fCBlLmlucy5jb250ZXh0O1xuICAgIGlmIChpKSB7XG4gICAgICBpZiAoaS5nZXRJc1Jlc3RhcnQoKSkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVUeXBlRW5hYmxlZChpLmdhbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlT3VyRW50cmllc0Zyb21HYW1lRGF0YShpLmdldEdhbWVEYXRhKCkpO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdEdhbWVBY3RfZG9HVGlsZXMoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnMsXG4gICAgICBvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5nYW1lQ29udGV4dDtcbiAgICBpZiAobykge1xuICAgICAgaWYgKHRoaXMuX2lzR3VpZGVBY3RpdmUoKSkgdCgpO2Vsc2UgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoby5nYW1lVHlwZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQm9hcmRCbG9ja2luZ0NvbmRpdGlvbihvKSkgdCgpO2Vsc2Uge1xuICAgICAgICAgIHZhciBhID0gdGhpcy5jb252ZXJ0T25lVGlsZVRvRHVveGlhbyhvKTtcbiAgICAgICAgICBhICYmIGkucHVzaEVmZmVjdChuZXcgQWRkRHVveGlhb091dFRpbWVFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiBhXG4gICAgICAgICAgfSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdEluaXRWaWV3X3B1c2hFZmYoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnM7XG4gICAgaWYgKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZ2FtZUNvbnRleHQpIHtcbiAgICAgIHZhciBvID0gaS5nYW1lQ29udGV4dCxcbiAgICAgICAgYSA9IG8uZ2FtZVR5cGU7XG4gICAgICBpZiAodGhpcy5pc0dhbWVUeXBlRW5hYmxlZChhKSkge1xuICAgICAgICBpZiAodGhpcy5faXNHdWlkZUFjdGl2ZSgpKSB0KCk7ZWxzZSBpZiAoby5nZXRJc1Jlc3RhcnQoKSkgdCgpO2Vsc2Uge1xuICAgICAgICAgIG8uZ2V0SXNOZXdHYW1lKCkgJiYgKHRoaXMubG9jYWxEYXRhLmFkZGVkVGlsZUlkcyA9IFwiXCIpO1xuICAgICAgICAgIGlmICh0aGlzLmlzT2ZmbGluZUxvbmdFbm91Z2goKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQm9hcmRCbG9ja2luZ0NvbmRpdGlvbihvKSkge1xuICAgICAgICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVGltZVNuYXBzaG90ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmNvbnZlcnRPbmVUaWxlVG9EdW94aWFvKG8pO1xuICAgICAgICAgICAgICBuICYmICh0aGlzLl9wZW5kaW5nSW5pdFRpbGVJZCA9IG4pO1xuICAgICAgICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVGltZVNuYXBzaG90ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVGltZVNuYXBzaG90ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyhlLCB0KSB7XG4gICAgdmFyIGksIG8sIGE7XG4gICAgdCgpO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nSW5pdFRpbGVJZCkge1xuICAgICAgdmFyIG4gPSAobnVsbCA9PT0gKGkgPSBlLmlucykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5fY29udGV4dCkgfHwgKG51bGwgPT09IChvID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY29udGV4dCk7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgciA9IG51bGwgPT09IChhID0gbi5nZXRUaWxlTm9kZU1hcCkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jYWxsKG4pO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHZhciBzID0gci5nZXQodGhpcy5fcGVuZGluZ0luaXRUaWxlSWQpLFxuICAgICAgICAgICAgbCA9IG51bGwgPT0gcyA/IHZvaWQgMCA6IHMudGlsZU5vZGU7XG4gICAgICAgICAgaWYgKGwgJiYgY2MuaXNWYWxpZChsKSkge1xuICAgICAgICAgICAgdmFyIHUgPSBsLmdldENoaWxkQnlOYW1lKFwiRHVveGlhb0NhcmRGbGFnTm9kZVwiKTtcbiAgICAgICAgICAgIHUgJiYgKHUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbklwdEVudGVyQW5pRmluX2V4Y3V0ZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdJbml0VGlsZUlkKSB7XG4gICAgICBlLmlucy5wdXNoRWZmZWN0KG5ldyBBZGREdW94aWFvT3V0VGltZUVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogdGhpcy5fcGVuZGluZ0luaXRUaWxlSWRcbiAgICAgIH0pLCBFSW5zZXJ0VHlwZS5TZXJpYWwpO1xuICAgICAgdGhpcy5fcGVuZGluZ0luaXRUaWxlSWQgPSBcIlwiO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=