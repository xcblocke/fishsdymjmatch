"use strict";
cc._RF.push(module, '76822DRyjFP2KnJpISHrZ/G', 'GetTaskCardTrait');
// subpackages/l_getTaskCard/Scripts/GetTaskCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelGenRule_1 = require("../../../Scripts/core/simulator/config/LevelGenRule");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var c;
(function (c) {
    c[c["USE_MAX"] = 1] = "USE_MAX";
    c[c["USE_MIN"] = 2] = "USE_MIN";
    c[c["Random"] = 3] = "Random";
})(c || (c = {}));
var GetTaskCardTrait = /** @class */ (function (_super) {
    __extends(GetTaskCardTrait, _super);
    function GetTaskCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isReplace = false;
        _this._targetCard = -1;
        _this._useType = c.USE_MAX;
        return _this;
    }
    Object.defineProperty(GetTaskCardTrait.prototype, "useType", {
        get: function () {
            return null != this._traitData.useType ? this._traitData.useType : this._useType;
        },
        enumerable: false,
        configurable: true
    });
    GetTaskCardTrait.prototype.getIntersection = function (e, t) {
        var r = new Set(t);
        return e.filter(function (e) {
            return r.has(e);
        });
    };
    GetTaskCardTrait.prototype.isTaskOpen = function () {
        var e = mj.getClassByName("TaskModel");
        return !!e && e.getInstance().isTaskOpen();
    };
    GetTaskCardTrait.prototype.onIptSetLv_reGenFacesAfter = function (e, t) {
        var r = e.ins, a = e.args[0].levelData;
        if (a.isNewGame && !a.isRestart && this._isReplace && this._targetCard > 0 && this.isTaskOpen()) {
            this.checkHasTargetCard(r.tileMapObject, this._targetCard) || this.replaceCard(r.tileMapObject, this._targetCard);
            this._isReplace = false;
            this._targetCard = -1;
        }
        t();
    };
    GetTaskCardTrait.prototype.onTaskUtils_random = function (e, t) {
        var r = e.args[0], a = this.getTaskCard(r);
        if (-1 != a) {
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: a
            });
        }
        else {
            t();
        }
    };
    GetTaskCardTrait.prototype.checkHasTargetCard = function (e, t) {
        var r, a, n = e.tileObjectMap();
        try {
            for (var o = __values(n.values()), s = o.next(); !s.done; s = o.next())
                if (t == s.value.cardId)
                    return true;
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (a = o.return) && a.call(o);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    GetTaskCardTrait.prototype.replaceCard = function (e, t) {
        var r, a, n, o;
        if (!(t > 34)) {
            var s = e.tileObjectMap(), l = new Map();
            try {
                for (var u = __values(s.values()), f = u.next(); !f.done; f = u.next()) {
                    var h = (_ = f.value).cardId;
                    h <= 34 && TileTypeEnum_1.ETileType.Normal == _.type && (l.has(h) ? l.set(h, l.get(h) + 1) : l.set(h, 1));
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    f && !f.done && (a = u.return) && a.call(u);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var p = Array.from(l.entries()).sort(function (e, t) {
                return t[1] - e[1];
            });
            if (0 != p.length) {
                var v;
                v = c.USE_MAX == this.useType ? p[0][0] : c.USE_MIN == this.useType ? p[p.length - 1][0] : p[Math.floor(Math.random() * p.length)][0];
                try {
                    for (var g = __values(s.values()), y = g.next(); !y.done; y = g.next()) {
                        var _;
                        (_ = y.value).cardId == v && e.changeTileResId(_.id, this.convertCardId2ResId(t));
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        y && !y.done && (o = g.return) && o.call(g);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            }
        }
    };
    GetTaskCardTrait.prototype.getTaskCard = function (e) {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelData(), r = LevelGenRule_1.default.genLevel(t), a = __spreadArrays(r.LevelTiles.keys()), n = this.generateCardIdList(a), o = UserModel_1.default.getInstance().travelData.getLevelData(), i = LevelGenRule_1.default.genLevel(o), s = __spreadArrays(i.LevelTiles.keys()), c = this.generateCardIdList(s);
        if (1 == UserModel_1.default.getInstance().getMainGameData().getLevelId()) {
            this._isReplace = true;
            this._targetCard = this.getCardByUseType(e, false);
            return this._targetCard;
        }
        var d = [];
        if (TravelGameModel_1.default.getInstance().isUnlocked()) {
            var f = this.getIntersection(e, c), p = this.getIntersection(e, n);
            0 == (d = this.getIntersection(f, n)).length && (0 == f.length ? (d = p).length : d = f);
        }
        else
            (d = this.getIntersection(e, n)).length;
        var g = d.length > 0, y = g ? d : e;
        this._isReplace = !g;
        this._targetCard = this.getCardByUseType(y, g);
        return this._targetCard;
    };
    GetTaskCardTrait.prototype.getCardByUseType = function (e, t) {
        if (t === void 0) { t = true; }
        if (0 == e.length)
            return -1;
        if (!t)
            return e[Math.floor(Math.random() * e.length)];
        for (var r = UserModel_1.default.getInstance().getMainGameData().getLevelData(), a = LevelGenRule_1.default.genLevel(r), n = UserModel_1.default.getInstance().travelData.getLevelData(), o = LevelGenRule_1.default.genLevel(n), i = new Map(), s = 0; s < a.LevelData.length; s++) {
            var l = a.LevelData[s], d = this.convertResId2CardId(l.id);
            if (i.has(d)) {
                i.set(d, i.get(d) + 1);
            }
            else {
                i.set(d, 1);
            }
        }
        for (s = 0; s < o.LevelData.length; s++) {
            l = o.LevelData[s], d = this.convertResId2CardId(l.id);
            if (i.has(d)) {
                i.set(d, i.get(d) + 1);
            }
            else {
                i.set(d, 1);
            }
        }
        var f = [];
        for (s = 0; s < e.length; s++) {
            d = e[s];
            f.push({
                cardId: d,
                count: i.has(d) ? i.get(d) : 0
            });
        }
        f.sort(function (e, t) {
            return t.count - e.count;
        });
        if (c.USE_MAX == this.useType) {
            var h = f[0].count, p = f.filter(function (e) {
                return e.count === h;
            });
            return p[Math.floor(Math.random() * p.length)].cardId;
        }
        if (c.USE_MIN == this.useType) {
            var g = 0;
            for (s = f.length - 1; s >= 0; s--)
                if (f[s].count > 0) {
                    g = f[s].count;
                    break;
                }
            if (g > 0) {
                var y = f.filter(function (e) {
                    return e.count === g;
                });
                return y[Math.floor(Math.random() * y.length)].cardId;
            }
            return f[Math.floor(Math.random() * f.length)].cardId;
        }
        return f[Math.floor(Math.random() * f.length)].cardId;
    };
    GetTaskCardTrait.prototype.convertResId2CardId = function (e) {
        for (var t = CardUtil_1.default.getList(), r = 0; r < t.length; r++) {
            var a = t[r];
            if (a.id == e)
                return a.cardId;
        }
        return -1;
    };
    GetTaskCardTrait.prototype.convertCardId2ResId = function (e) {
        for (var t = CardUtil_1.default.getList(), r = 0; r < t.length; r++) {
            var a = t[r];
            if (a.cardId == e)
                return a.id;
        }
        return -1;
    };
    GetTaskCardTrait.prototype.generateCardIdList = function (e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var a = this.convertResId2CardId(e[r]);
            a >= 0 && t.push(a);
        }
        return t;
    };
    GetTaskCardTrait.traitKey = "GetTaskCard";
    GetTaskCardTrait = __decorate([
        mj.trait,
        mj.class("GetTaskCardTrait")
    ], GetTaskCardTrait);
    return GetTaskCardTrait;
}(Trait_1.default));
exports.default = GetTaskCardTrait;

cc._RF.pop();